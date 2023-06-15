let html =
  "<h5 class='text-success'>sra_information</h5><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='SRA Run accession in the form of SRR######## (ERR or DRR for INSDC partners)'><input type='checkbox' name='acc' id='acc'><strong>acc</strong> - (100%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='BioProject accession in the form of PRJNA######## (PRJEB####### or PRJDB###### for INSDC partners)'><input type='checkbox' name='bioproject' id='bioproject'><strong>bioproject</strong> - (100%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='BioSample accession in the form of SAMN######## (SAMEA##### or SAMD##### for INSDC partners)'><input type='checkbox' name='biosample' id='biosample'><strong>biosample</strong> - (100%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='The BioSample package/model that was picked'><input type='checkbox' name='biosamplemodel_sam' id='biosamplemodel_sam'><strong>biosamplemodel_sam</strong> - (100%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='Type of consent need to access the data (i.e. public is available to all, others are for dbGaP)'><input type='checkbox' name='consent' id='consent'><strong>consent</strong> - (100%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='Type of files available to download from SRA'><input type='checkbox' name='datastore_filetype' id='datastore_filetype'><strong>datastore_filetype</strong> - (100%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='Locations of where the files are available to download from'><input type='checkbox' name='datastore_provider' id='datastore_provider'><strong>datastore_provider</strong> - (100%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='Regions of where the data is located'><input type='checkbox' name='datastore_region' id='datastore_region'><strong>datastore_region</strong> - (100%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='Date when INSDC partner record was public'><input type='checkbox' name='ena_first_public_run' id='ena_first_public_run'><strong>ena_first_public_run</strong> - (100%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='Date when INSDC partner record was updated'><input type='checkbox' name='ena_last_update_run' id='ena_last_update_run'><strong>ena_last_update_run</strong> - (100%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='The accession in the form of SRX######## (ERX or DRX for INSDC partners)'><input type='checkbox' name='experiment' id='experiment'><strong>experiment</strong> - (100%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='A concise name that describes the overall project, for example &quot;Analysis of sequences collected from Antarctic soil&quot;'><input type='checkbox' name='project_name' id='project_name'><strong>project_name</strong> - (16%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='SRA Sample accession in the form of SRS######## (ERS or DRS for INSDC partners)'><input type='checkbox' name='sample_acc' id='sample_acc'><strong>sample_acc</strong> - (100%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='sample name in source database'><input type='checkbox' name='sample_name' id='sample_name'><strong>sample_name</strong> - (100%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='INSDC sample name'><input type='checkbox' name='sample_name_sam' id='sample_name_sam'><strong>sample_name_sam</strong> - (100%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='SRA Study accession in the form of SRP######## (ERP or DRP for INSDC partners)'><input type='checkbox' name='sra_study' id='sra_study'><strong>sra_study</strong> - (100%) </label><br></div><br/><br/><h5 class='text-success'>sequencing_information</h5><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='Type of library (i.e. AMPLICON, RNA-Seq, WGS, etc)'><input type='checkbox' name='assay_type' id='assay_type'><strong>assay_type</strong> - (100%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='Calculated average read length'><input type='checkbox' name='avgspotlen' id='avgspotlen'><strong>avgspotlen</strong> - (100%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='Name of the sequencing center'><input type='checkbox' name='center_name' id='center_name'><strong>center_name</strong> - (100%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='Submitter provided insert size'><input type='checkbox' name='insertsize' id='insertsize'><strong>insertsize</strong> - (100%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='Name of the sequencing instrument model'><input type='checkbox' name='instrument' id='instrument'><strong>instrument</strong> - (100%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='The name of the library'><input type='checkbox' name='library_name' id='library_name'><strong>library_name</strong> - (100%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='Whether the data is SINGLE or PAIRED'><input type='checkbox' name='librarylayout' id='librarylayout'><strong>librarylayout</strong> - (100%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='Library selection methodology (i.e. PCR, RANDOM, etc)'><input type='checkbox' name='libraryselection' id='libraryselection'><strong>libraryselection</strong> - (100%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='Source of the biological data (i.e. GENOMIC, METAGENOMIC, etc)'><input type='checkbox' name='librarysource' id='librarysource'><strong>librarysource</strong> - (100%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='Name of the sequencing platform (i.e. ILLUMINA)'><input type='checkbox' name='platform' id='platform'><strong>platform</strong> - (100%) </label><br></div><br/><br/><h5 class='text-success'>host</h5><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='age at the time of sampling; relevant scale depends on species and study, e.g. could be seconds for amoebae or centuries for trees'><input type='checkbox' name='age' id='age'><strong>age</strong> - (9%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='original body habitat where the sample was obtained from'><input type='checkbox' name='body_habitat' id='body_habitat'><strong>body_habitat</strong> - (9%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='substance produced by the body, e.g. stool, mucus, where the sample was obtained from'><input type='checkbox' name='body_product' id='body_product'><strong>body_product</strong> - (9%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='The natural (as opposed to laboratory) host to the organism from which the sample was obtained. Use the full taxonomic name, eg, &quot;Homo sapiens&quot;.'><input type='checkbox' name='host' id='host'><strong>host</strong> - (32%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='Age of host at the time of sampling'><input type='checkbox' name='host_age' id='host_age'><strong>host_age</strong> - (10%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='original body habitat where the sample was obtained from'><input type='checkbox' name='host_body_habitat' id='host_body_habitat'><strong>host_body_habitat</strong> - (8%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='substance produced by the host, e.g. stool, mucus, where the sample was obtained from'><input type='checkbox' name='host_body_product' id='host_body_product'><strong>host_body_product</strong> - (9%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='The natural language (non-taxonomic) name of the host organism, e.g., mouse'><input type='checkbox' name='host_common_name' id='host_common_name'><strong>host_common_name</strong> - (19%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='Gender or physical sex of the host'><input type='checkbox' name='host_sex' id='host_sex'><strong>host_sex</strong> - (6%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='a unique identifier by which each subject can be referred to, de-identified, e.g. #131'><input type='checkbox' name='host_subject_id' id='host_subject_id'><strong>host_subject_id</strong> - (32%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='NCBI taxonomy ID of the host, e.g. 9606'><input type='checkbox' name='host_taxid' id='host_taxid'><strong>host_taxid</strong> - (22%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='not_provided'><input type='checkbox' name='race' id='race'><strong>race</strong> - (5%) </label><br></div><br/><br/><h5 class='text-success'>geographic</h5><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='Name of the country where the sample was collected'><input type='checkbox' name='geo_loc_name_country_calc' id='geo_loc_name_country_calc'><strong>geo_loc_name_country_calc</strong> - (100%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='Name of the continent where the sample was collected'><input type='checkbox' name='geo_loc_name_country_continent_calc' id='geo_loc_name_country_continent_calc'><strong>geo_loc_name_country_continent_calc</strong> - (100%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='Full location of collection'><input type='checkbox' name='geo_loc_name_sam' id='geo_loc_name_sam'><strong>geo_loc_name_sam</strong> - (100%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='The geographical coordinates of the location where the sample was collected. Specify as degrees latitude and longitude in format &quot;d[d.dddd] N|S d[dd.dddd] W|E&quot;, eg, 38.98 N 77.11 W'><input type='checkbox' name='lat_lon' id='lat_lon'><strong>lat_lon</strong> - (40%) </label><br></div><br/><br/><h5 class='text-success'>file_info</h5><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='not_provided'><input type='checkbox' name='bases' id='bases'><strong>bases</strong> - (99%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='not_provided'><input type='checkbox' name='bytes' id='bytes'><strong>bytes</strong> - (100%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='The date when the data was loaded into SRA'><input type='checkbox' name='loaddate' id='loaddate'><strong>loaddate</strong> - (100%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='Number of mega bases in the SRA Runs'><input type='checkbox' name='mbases' id='mbases'><strong>mbases</strong> - (100%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='Number of mega bytes of data in the SRA Run'><input type='checkbox' name='mbytes' id='mbytes'><strong>mbytes</strong> - (100%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='not_provided'><input type='checkbox' name='primary_search' id='primary_search'><strong>primary_search</strong> - (100%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='The date on which the data was released'><input type='checkbox' name='releasedate' id='releasedate'><strong>releasedate</strong> - (100%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='not_provided'><input type='checkbox' name='run_file_create_date' id='run_file_create_date'><strong>run_file_create_date</strong> - (100%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='not_provided'><input type='checkbox' name='run_file_version' id='run_file_version'><strong>run_file_version</strong> - (100%) </label><br></div><br/><br/><h5 class='text-success'>experimental_design</h5><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='the date on which the sample was collected; date/time ranges are supported by providing two dates from among the supported value formats, delimited by a forward-slash character; collection times are supported by adding &quot;T&quot;, then the hour and minute after the date, and must be in Coordinated Universal Time (UTC), otherwise known as &quot;Zulu Time&quot; (Z); supported formats include &quot;DD-Mmm-YYYY&quot;, &quot;Mmm-YYYY&quot;, &quot;YYYY&quot; or ISO 8601 standard &quot;YYYY-mm-dd&quot;, &quot;YYYY-mm&quot;, &quot;YYYY-mm-ddThh:mm:ss&quot;; e.g., 30-Oct-1990, Oct-1990, 1990, 1990-10-30, 1990-10, 21-Oct-1952/15-Feb-1953, 2015-10-11T17:53:03Z; valid non-ISO dates will be automatically transformed to ISO format'><input type='checkbox' name='collection_date' id='collection_date'><strong>collection_date</strong> - (62%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='The collection date of the sample'><input type='checkbox' name='collection_date_sam' id='collection_date_sam'><strong>collection_date_sam</strong> - (100%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='Nucleic Acid Sequence Report is the root element of all MIGS/MIMS compliant reports as standardized by Genomic Standards Consortium. This field is either eukaryote,bacteria,virus,plasmid,organelle, metagenome, miens-survey or miens-culture'><input type='checkbox' name='investigation_type' id='investigation_type'><strong>investigation_type</strong> - (13%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='identification or description of the specific individual from which this sample was obtained'><input type='checkbox' name='isolate' id='isolate'><strong>isolate</strong> - (10%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='Sample type, such as cell culture, mixed culture, tissue sample, whole organism, single cell, metagenomic assembly'><input type='checkbox' name='sample_type' id='sample_type'><strong>sample_type</strong> - (31%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='unique identifier assigned to a material sample used for extracting nucleic acids, and subsequent sequencing. The identifier can refer either to the original material collected or to any derived sub-samples.'><input type='checkbox' name='source_material_id' id='source_material_id'><strong>source_material_id</strong> - (5%) </label><br></div><br/><br/><h5 class='text-success'>environmental</h5><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='The altitude of the sample is the vertical distance between Earth&#x27;s surface above Sea Level and the sampled position in the air.'><input type='checkbox' name='altitude' id='altitude'><strong>altitude</strong> - (5%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='Depth is defined as the vertical distance below surface, e.g. for sediment or soil samples depth is measured from sediment or soil surface, respectivly. Depth can be reported as an interval for subsurface samples.'><input type='checkbox' name='depth' id='depth'><strong>depth</strong> - (13%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='not_provided'><input type='checkbox' name='env_biome' id='env_biome'><strong>env_biome</strong> - (34%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='Add terms that identify the major environment type(s) where your sample was collected. Recommend subclasses of biome [ENVO:00000428]. Multiple terms can be separated by one or more pipes e.g.:  mangrove biome [ENVO:01000181]|estuarine biome [ENVO:01000020]'><input type='checkbox' name='env_broad_scale' id='env_broad_scale'><strong>env_broad_scale</strong> - (7%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='not_provided'><input type='checkbox' name='env_feature' id='env_feature'><strong>env_feature</strong> - (33%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='Add terms that identify environmental entities having causal influences upon the entity at time of sampling, multiple terms can be separated by pipes, e.g.:  shoreline [ENVO:00000486]|intertidal zone [ENVO:00000316]'><input type='checkbox' name='env_local_scale' id='env_local_scale'><strong>env_local_scale</strong> - (7%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='not_provided'><input type='checkbox' name='env_material' id='env_material'><strong>env_material</strong> - (31%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='Add terms that identify the material displaced by the entity at time of sampling. Recommend subclasses of environmental material [ENVO:00010483]. Multiple terms can be separated by pipes e.g.: estuarine water [ENVO:01000301]|estuarine mud [ENVO:00002160]'><input type='checkbox' name='env_medium' id='env_medium'><strong>env_medium</strong> - (7%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='MIGS/MIMS/MIENS extension for reporting of measurements and observations obtained from one or more of the environments where the sample was obtained. All environmental packages listed here are further defined in separate subtables. By giving the name of the environmental package, a selection of fields can be made from the subtables and can be reported'><input type='checkbox' name='env_package' id='env_package'><strong>env_package</strong> - (25%) </label><br></div><div style='display:inline-block; width:25%;'><label data-bs-toggle='tooltip' data-bs-placement='bottom' title='Scientific name of the organism that was sequenced (as found in the NCBI Taxonomy Browser)'><input type='checkbox' name='organism' id='organism'><strong>organism</strong> - (100%) </label><br></div>";

let checked_str = {
  acc: form.elements.acc.checked,
  bioproject: form.elements.bioproject.checked,
  biosample: form.elements.biosample.checked,
  biosamplemodel_sam: form.elements.biosamplemodel_sam.checked,
  consent: form.elements.consent.checked,
  datastore_filetype: form.elements.datastore_filetype.checked,
  datastore_provider: form.elements.datastore_provider.checked,
  datastore_region: form.elements.datastore_region.checked,
  ena_first_public_run: form.elements.ena_first_public_run.checked,
  ena_last_update_run: form.elements.ena_last_update_run.checked,
  experiment: form.elements.experiment.checked,
  project_name: form.elements.project_name.checked,
  sample_acc: form.elements.sample_acc.checked,
  sample_name: form.elements.sample_name.checked,
  sample_name_sam: form.elements.sample_name_sam.checked,
  sra_study: form.elements.sra_study.checked,
  assay_type: form.elements.assay_type.checked,
  avgspotlen: form.elements.avgspotlen.checked,
  center_name: form.elements.center_name.checked,
  insertsize: form.elements.insertsize.checked,
  instrument: form.elements.instrument.checked,
  library_name: form.elements.library_name.checked,
  librarylayout: form.elements.librarylayout.checked,
  libraryselection: form.elements.libraryselection.checked,
  librarysource: form.elements.librarysource.checked,
  platform: form.elements.platform.checked,
  age: form.elements.age.checked,
  body_habitat: form.elements.body_habitat.checked,
  body_product: form.elements.body_product.checked,
  host: form.elements.host.checked,
  host_age: form.elements.host_age.checked,
  host_body_habitat: form.elements.host_body_habitat.checked,
  host_body_product: form.elements.host_body_product.checked,
  host_common_name: form.elements.host_common_name.checked,
  host_sex: form.elements.host_sex.checked,
  host_subject_id: form.elements.host_subject_id.checked,
  host_taxid: form.elements.host_taxid.checked,
  race: form.elements.race.checked,
  geo_loc_name_country_calc: form.elements.geo_loc_name_country_calc.checked,
  geo_loc_name_country_continent_calc:
    form.elements.geo_loc_name_country_continent_calc.checked,
  geo_loc_name_sam: form.elements.geo_loc_name_sam.checked,
  lat_lon: form.elements.lat_lon.checked,
  bases: form.elements.bases.checked,
  bytes: form.elements.bytes.checked,
  loaddate: form.elements.loaddate.checked,
  mbases: form.elements.mbases.checked,
  mbytes: form.elements.mbytes.checked,
  primary_search: form.elements.primary_search.checked,
  releasedate: form.elements.releasedate.checked,
  run_file_create_date: form.elements.run_file_create_date.checked,
  run_file_version: form.elements.run_file_version.checked,
  collection_date: form.elements.collection_date.checked,
  collection_date_sam: form.elements.collection_date_sam.checked,
  investigation_type: form.elements.investigation_type.checked,
  isolate: form.elements.isolate.checked,
  sample_type: form.elements.sample_type.checked,
  source_material_id: form.elements.source_material_id.checked,
  altitude: form.elements.altitude.checked,
  depth: form.elements.depth.checked,
  env_biome: form.elements.env_biome.checked,
  env_broad_scale: form.elements.env_broad_scale.checked,
  env_feature: form.elements.env_feature.checked,
  env_local_scale: form.elements.env_local_scale.checked,
  env_material: form.elements.env_material.checked,
  env_medium: form.elements.env_medium.checked,
  env_package: form.elements.env_package.checked,
  organism: form.elements.organism.checked,
};

function send_form() {
  //formdata copied and pasted from prepscripts/createform.py
  let formdata = {
    signatures: signature,
    metadata: {
      bases: form.elements.bases.checked,
      bytes: form.elements.bytes.checked,
      run_file_create_date: form.elements.run_file_create_date.checked,
      run_file_version: form.elements.run_file_version.checked,
      primary_search: form.elements.primary_search.checked,
      sample_name: form.elements.sample_name.checked,
      sample_name_sam: form.elements.sample_name_sam.checked,
      acc: form.elements.acc.checked,
      assay_type: form.elements.assay_type.checked,
      avgspotlen: form.elements.avgspotlen.checked,
      bioproject: form.elements.bioproject.checked,
      biosample: form.elements.biosample.checked,
      biosamplemodel_sam: form.elements.biosamplemodel_sam.checked,
      center_name: form.elements.center_name.checked,
      collection_date_sam: form.elements.collection_date_sam.checked,
      consent: form.elements.consent.checked,
      datastore_filetype: form.elements.datastore_filetype.checked,
      datastore_provider: form.elements.datastore_provider.checked,
      datastore_region: form.elements.datastore_region.checked,
      ena_first_public_run: form.elements.ena_first_public_run.checked,
      ena_last_update_run: form.elements.ena_last_update_run.checked,
      experiment: form.elements.experiment.checked,
      geo_loc_name_country_calc:
        form.elements.geo_loc_name_country_calc.checked,
      geo_loc_name_country_continent_calc:
        form.elements.geo_loc_name_country_continent_calc.checked,
      geo_loc_name_sam: form.elements.geo_loc_name_sam.checked,
      insertsize: form.elements.insertsize.checked,
      instrument: form.elements.instrument.checked,
      library_name: form.elements.library_name.checked,
      librarylayout: form.elements.librarylayout.checked,
      libraryselection: form.elements.libraryselection.checked,
      librarysource: form.elements.librarysource.checked,
      loaddate: form.elements.loaddate.checked,
      mbases: form.elements.mbases.checked,
      mbytes: form.elements.mbytes.checked,
      organism: form.elements.organism.checked,
      platform: form.elements.platform.checked,
      releasedate: form.elements.releasedate.checked,
      sample_acc: form.elements.sample_acc.checked,
      sra_study: form.elements.sra_study.checked,
      age: form.elements.age.checked,
      altitude: form.elements.altitude.checked,
      body_habitat: form.elements.body_habitat.checked,
      body_product: form.elements.body_product.checked,
      collection_date: form.elements.collection_date.checked,
      depth: form.elements.depth.checked,
      env_biome: form.elements.env_biome.checked,
      env_broad_scale: form.elements.env_broad_scale.checked,
      env_feature: form.elements.env_feature.checked,
      env_local_scale: form.elements.env_local_scale.checked,
      env_material: form.elements.env_material.checked,
      env_medium: form.elements.env_medium.checked,
      env_package: form.elements.env_package.checked,
      host: form.elements.host.checked,
      host_age: form.elements.host_age.checked,
      host_body_habitat: form.elements.host_body_habitat.checked,
      host_body_product: form.elements.host_body_product.checked,
      host_common_name: form.elements.host_common_name.checked,
      host_sex: form.elements.host_sex.checked,
      host_subject_id: form.elements.host_subject_id.checked,
      host_taxid: form.elements.host_taxid.checked,
      investigation_type: form.elements.investigation_type.checked,
      isolate: form.elements.isolate.checked,
      lat_lon: form.elements.lat_lon.checked,
      project_name: form.elements.project_name.checked,
      race: form.elements.race.checked,
      sample_type: form.elements.sample_type.checked,
      source_material_id: form.elements.source_material_id.checked,
    },
  };
  return formdata;
}
