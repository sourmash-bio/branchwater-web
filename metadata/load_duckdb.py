#! /usr/bin/env python

import re
import os

import duckdb
import polars as pl


def harmonize_lat_lon(series):
    '''replace lat-lon with decimal degrees'''

    regex = re.compile(r'"(\d+\.\d+) ([NS]) (\d+\.\d+) ([EW])"')

    result = []

    for s in series:
        if not s:
            result.append(None)
            continue

        # extract latitude and longitude using regular expression
        if match := re.search(regex, s):
            # convert latitude and longitude to decimal degrees
            lat = float(match.group(1))
            if match.group(2) == "S":
                lat *= -1
            lon = float(match.group(3))
            if match.group(4) == "W":
                lon *= -1
            # replace 'lat_lon' value with list of latitude and longitude
            result.append([lat, lon])
        else:
            result.append(None)

    return pl.Series(result)


def main(
    *,
    parquet_metadata="/data/bw_db/metadata.parquet",
    output="/data/bw_db/metadata.duckdb",
    force=False,
):
    orig_metadata = pl.read_parquet(parquet_metadata)
    orig_metadata = orig_metadata.with_columns(
        pl.col("lat_lon").map_batches(harmonize_lat_lon, is_elementwise=True)#, return_dtype=pl.List)
    )

    conn = duckdb.connect(database=output, read_only=False)
    conn.install_extension("parquet")
    conn.load_extension("parquet")

    if force:
        conn.sql("DROP TABLE IF EXISTS metadata")

    conn.sql("""
        CREATE TABLE metadata AS
            SELECT * FROM orig_metadata;

        CREATE UNIQUE INDEX acc_idx ON metadata (acc);
    """)


if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser()
    parser.add_argument("parquet_metadata")
    parser.add_argument("-o", "--output", default="/data/bw_db/metadata.duckdb")
    parser.add_argument("--force", action="store_true", help="force reload duckdb")

    args = parser.parse_args()
    main(parquet_metadata=args.parquet_metadata, output=args.output, force=args.force)
