Search.setIndex({docnames:["conversion","decoding","environment_variables","faq","generation","guides/fairseq","guides/marian","guides/opennmt_py","guides/opennmt_tf","guides/opus_mt","guides/transformers","hardware_support","index","installation","memory","parallel","performance","python/ctranslate2","python/ctranslate2.AsyncGenerationResult","python/ctranslate2.AsyncTranslationResult","python/ctranslate2.GenerationResult","python/ctranslate2.Generator","python/ctranslate2.TranslationResult","python/ctranslate2.TranslationStats","python/ctranslate2.Translator","python/ctranslate2.contains_model","python/ctranslate2.converters","python/ctranslate2.converters.Converter","python/ctranslate2.converters.FairseqConverter","python/ctranslate2.converters.MarianConverter","python/ctranslate2.converters.OpenAIGPT2Converter","python/ctranslate2.converters.OpenNMTPyConverter","python/ctranslate2.converters.OpenNMTTFConverter","python/ctranslate2.converters.OpenNMTTFConverterV2","python/ctranslate2.converters.OpusMTConverter","python/ctranslate2.converters.TransformersConverter","python/ctranslate2.get_cuda_device_count","python/ctranslate2.get_supported_compute_types","python/ctranslate2.set_random_seed","python/ctranslate2.specs","python/ctranslate2.specs.Activation","python/ctranslate2.specs.EmbeddingsMerge","python/ctranslate2.specs.LanguageModelSpec","python/ctranslate2.specs.LayerSpec","python/ctranslate2.specs.ModelSpec","python/ctranslate2.specs.SequenceToSequenceModelSpec","python/ctranslate2.specs.TransformerDecoderModelSpec","python/ctranslate2.specs.TransformerSpec","python/overview","quantization","quickstart","translation","versioning"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":5,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,sphinx:56},filenames:["conversion.md","decoding.md","environment_variables.md","faq.md","generation.md","guides/fairseq.md","guides/marian.md","guides/opennmt_py.md","guides/opennmt_tf.md","guides/opus_mt.md","guides/transformers.md","hardware_support.md","index.rst","installation.md","memory.md","parallel.md","performance.md","python/ctranslate2.rst","python/ctranslate2.AsyncGenerationResult.rst","python/ctranslate2.AsyncTranslationResult.rst","python/ctranslate2.GenerationResult.rst","python/ctranslate2.Generator.rst","python/ctranslate2.TranslationResult.rst","python/ctranslate2.TranslationStats.rst","python/ctranslate2.Translator.rst","python/ctranslate2.contains_model.rst","python/ctranslate2.converters.rst","python/ctranslate2.converters.Converter.rst","python/ctranslate2.converters.FairseqConverter.rst","python/ctranslate2.converters.MarianConverter.rst","python/ctranslate2.converters.OpenAIGPT2Converter.rst","python/ctranslate2.converters.OpenNMTPyConverter.rst","python/ctranslate2.converters.OpenNMTTFConverter.rst","python/ctranslate2.converters.OpenNMTTFConverterV2.rst","python/ctranslate2.converters.OpusMTConverter.rst","python/ctranslate2.converters.TransformersConverter.rst","python/ctranslate2.get_cuda_device_count.rst","python/ctranslate2.get_supported_compute_types.rst","python/ctranslate2.set_random_seed.rst","python/ctranslate2.specs.rst","python/ctranslate2.specs.Activation.rst","python/ctranslate2.specs.EmbeddingsMerge.rst","python/ctranslate2.specs.LanguageModelSpec.rst","python/ctranslate2.specs.LayerSpec.rst","python/ctranslate2.specs.ModelSpec.rst","python/ctranslate2.specs.SequenceToSequenceModelSpec.rst","python/ctranslate2.specs.TransformerDecoderModelSpec.rst","python/ctranslate2.specs.TransformerSpec.rst","python/overview.rst","quantization.md","quickstart.md","translation.md","versioning.md"],objects:{"":[[17,0,0,"-","ctranslate2"]],"ctranslate2.AsyncGenerationResult":[[18,2,1,"","done"],[18,2,1,"","result"]],"ctranslate2.AsyncTranslationResult":[[19,2,1,"","done"],[19,2,1,"","result"]],"ctranslate2.GenerationResult":[[20,3,1,"","scores"],[20,3,1,"","sequences"]],"ctranslate2.Generator":[[21,2,1,"","__init__"],[21,3,1,"","device"],[21,3,1,"","device_index"],[21,2,1,"","generate_batch"],[21,3,1,"","num_active_batches"],[21,3,1,"","num_generators"],[21,3,1,"","num_queued_batches"],[21,2,1,"","score_batch"]],"ctranslate2.TranslationResult":[[22,3,1,"","attention"],[22,3,1,"","hypotheses"],[22,3,1,"","scores"]],"ctranslate2.TranslationStats":[[23,3,1,"","num_examples"],[23,3,1,"","num_tokens"],[23,3,1,"","total_time_in_ms"]],"ctranslate2.Translator":[[24,2,1,"","__init__"],[24,3,1,"","device"],[24,3,1,"","device_index"],[24,2,1,"","load_model"],[24,3,1,"","model_is_loaded"],[24,3,1,"","num_active_batches"],[24,3,1,"","num_queued_batches"],[24,3,1,"","num_translators"],[24,2,1,"","score_batch"],[24,2,1,"","score_file"],[24,2,1,"","translate_batch"],[24,2,1,"","translate_file"],[24,2,1,"","unload_model"]],"ctranslate2.converters":[[27,1,1,"","Converter"],[28,1,1,"","FairseqConverter"],[29,1,1,"","MarianConverter"],[30,1,1,"","OpenAIGPT2Converter"],[31,1,1,"","OpenNMTPyConverter"],[32,1,1,"","OpenNMTTFConverter"],[33,1,1,"","OpenNMTTFConverterV2"],[34,1,1,"","OpusMTConverter"],[35,1,1,"","TransformersConverter"]],"ctranslate2.converters.Converter":[[27,2,1,"","convert"],[27,2,1,"","convert_from_args"],[27,2,1,"","declare_arguments"]],"ctranslate2.converters.FairseqConverter":[[28,2,1,"","__init__"],[28,2,1,"","convert"],[28,2,1,"","convert_from_args"],[28,2,1,"","declare_arguments"]],"ctranslate2.converters.MarianConverter":[[29,2,1,"","__init__"],[29,2,1,"","convert"],[29,2,1,"","convert_from_args"],[29,2,1,"","declare_arguments"]],"ctranslate2.converters.OpenAIGPT2Converter":[[30,2,1,"","__init__"],[30,2,1,"","convert"],[30,2,1,"","convert_from_args"],[30,2,1,"","declare_arguments"]],"ctranslate2.converters.OpenNMTPyConverter":[[31,2,1,"","__init__"],[31,2,1,"","convert"],[31,2,1,"","convert_from_args"],[31,2,1,"","declare_arguments"]],"ctranslate2.converters.OpenNMTTFConverter":[[32,2,1,"","__init__"],[32,2,1,"","convert"],[32,2,1,"","convert_from_args"],[32,2,1,"","declare_arguments"]],"ctranslate2.converters.OpenNMTTFConverterV2":[[33,2,1,"","__init__"],[33,2,1,"","convert"],[33,2,1,"","convert_from_args"],[33,2,1,"","declare_arguments"],[33,2,1,"","from_config"]],"ctranslate2.converters.OpusMTConverter":[[34,2,1,"","__init__"],[34,2,1,"","convert"],[34,2,1,"","convert_from_args"],[34,2,1,"","declare_arguments"]],"ctranslate2.converters.TransformersConverter":[[35,2,1,"","__init__"],[35,2,1,"","convert"],[35,2,1,"","convert_from_args"],[35,2,1,"","declare_arguments"]],"ctranslate2.specs":[[40,1,1,"","Activation"],[41,1,1,"","EmbeddingsMerge"],[42,1,1,"","LanguageModelSpec"],[43,1,1,"","LayerSpec"],[44,1,1,"","ModelSpec"],[45,1,1,"","SequenceToSequenceModelSpec"],[46,1,1,"","TransformerDecoderModelSpec"],[47,1,1,"","TransformerSpec"]],"ctranslate2.specs.Activation":[[40,5,1,"","GELU"],[40,5,1,"","RELU"],[40,5,1,"","SWISH"]],"ctranslate2.specs.EmbeddingsMerge":[[41,5,1,"","ADD"],[41,5,1,"","CONCAT"]],"ctranslate2.specs.LanguageModelSpec":[[42,2,1,"","__init__"],[42,3,1,"","name"],[42,2,1,"","optimize"],[42,2,1,"","register_vocabulary"],[42,3,1,"","revision"],[42,2,1,"","save"],[42,2,1,"","validate"],[42,2,1,"","variables"]],"ctranslate2.specs.LayerSpec":[[43,2,1,"","optimize"],[43,2,1,"","validate"],[43,2,1,"","variables"]],"ctranslate2.specs.ModelSpec":[[44,3,1,"","name"],[44,2,1,"","optimize"],[44,3,1,"","revision"],[44,2,1,"","save"],[44,2,1,"","validate"],[44,2,1,"","variables"]],"ctranslate2.specs.SequenceToSequenceModelSpec":[[45,2,1,"","__init__"],[45,3,1,"","name"],[45,2,1,"","optimize"],[45,2,1,"","register_source_vocabulary"],[45,2,1,"","register_target_vocabulary"],[45,2,1,"","register_vocabulary_mapping"],[45,3,1,"","revision"],[45,2,1,"","save"],[45,2,1,"","validate"],[45,2,1,"","variables"]],"ctranslate2.specs.TransformerDecoderModelSpec":[[46,2,1,"","__init__"],[46,3,1,"","name"],[46,2,1,"","optimize"],[46,2,1,"","register_vocabulary"],[46,3,1,"","revision"],[46,2,1,"","save"],[46,2,1,"","validate"],[46,2,1,"","variables"]],"ctranslate2.specs.TransformerSpec":[[47,2,1,"","__init__"],[47,3,1,"","name"],[47,2,1,"","optimize"],[47,2,1,"","register_source_vocabulary"],[47,2,1,"","register_target_vocabulary"],[47,2,1,"","register_vocabulary_mapping"],[47,3,1,"","revision"],[47,2,1,"","save"],[47,2,1,"","validate"],[47,2,1,"","variables"]],ctranslate2:[[18,1,1,"","AsyncGenerationResult"],[19,1,1,"","AsyncTranslationResult"],[20,1,1,"","GenerationResult"],[21,1,1,"","Generator"],[22,1,1,"","TranslationResult"],[23,1,1,"","TranslationStats"],[24,1,1,"","Translator"],[25,4,1,"","contains_model"],[26,0,0,"-","converters"],[36,4,1,"","get_cuda_device_count"],[37,4,1,"","get_supported_compute_types"],[38,4,1,"","set_random_seed"],[39,0,0,"-","specs"]]},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","property","Python property"],"4":["py","function","Python function"],"5":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:property","4":"py:function","5":"py:attribute"},terms:{"0":[1,2,5,9,10,13,15,16,21,24,37,40,41,49,50,51,52],"02":9,"04":[13,51],"1":[0,1,2,5,10,11,13,15,16,21,24,40,41,47,49,50,51],"10":[1,5,10,13,49,50],"1000":9,"100mb":49,"1024":[1,21,24],"11":[2,13],"12":[2,49],"127":49,"128k":5,"15":13,"17":13,"182mb":49,"187mb":49,"19":13,"2":[0,1,2,4,13,15,24,30,40,46,47,49,50,51,52],"20":[21,49],"200mb":2,"2016":49,"2017":49,"2018":1,"2019":13,"2020":[9,16],"209715200":2,"256":24,"26":9,"2b":5,"2b_last_checkpoint":5,"3":[2,11,13,15,50],"30":10,"32":24,"32k":49,"350m":10,"364mb":49,"4":[1,2,11,15,50,51],"418m":5,"418m_last_checkpoint":5,"5":[1,5,11,13],"50":21,"512":21,"6":[13,49],"6291455":2,"64":[11,13,49],"7":[2,16,49],"8":2,"800":10,"95mb":49,"\u00fcbersetzungen":1,"\u00fcbersetzungsmodel":1,"\u00fcbersetzungsmodellen":1,"boolean":2,"case":[0,8,14,15,50],"class":[4,18,19,20,21,22,23,24,27,28,29,30,31,32,33,34,35,40,41,42,43,44,45,46,47,51],"const":51,"default":[1,2,5,13,15,21,24,49],"do":[1,46,49],"enum":[40,41],"erm\u00f6glicht":1,"export":[2,3],"f\u00fcr":1,"final":[0,1,16,46],"float":[21,24,37],"function":[0,1,24,25,27,28,29,30,31,32,33,34,35,49],"import":[2,5,9,10,50,51],"int":[21,24,36,37,38,46,47,51],"long":0,"new":[5,32],"return":[1,4,10,15,18,19,21,24,27,28,29,30,31,32,33,34,35,36,37,42,43,44,45,46,47,51],"static":[27,28,29,30,31,32,33,34,35],"true":[1,2,5,10,15,18,19,21,24,46,47],A:[0,1,20,21,22,23,24,33,43,51],As:49,By:[1,2,13,49],For:[0,1,2,5,10,12,15,16,49],If:[2,8,10,11,13,16,21,24,27,28,29,30,31,32,33,34,35,42,43,44,45,46,47,50,51],In:[0,1,8,11,14,15,49,51],Is:5,It:[0,1,4,10,51],No:[4,5],ON:13,On:[11,15,16,49],The:[0,1,2,3,4,5,6,7,9,10,11,12,13,14,15,21,24,42,44,45,46,47,49,51,52],There:[3,5],These:1,To:[14,51],__de__:5,__en__:5,__init__:[21,24,28,29,30,31,32,33,34,35,42,45,46,47],__x__:5,_batch:[15,16],_file:15,aarch64:[11,13,49],ab:49,abc:27,aber:1,abl:3,about:[2,49],abov:[2,13],absolut:49,accelar:3,acceler:[0,1,13,49],accept:[5,49],access:[0,8],accord:15,accumul:49,accuraci:49,activ:[39,46,47,48],ad:[0,3,4,10,21,51],add:[10,13,27,28,29,30,31,32,33,34,35,41,46],addit:[13,51],address:3,advanc:51,affect:10,after:[1,21,24,46,47],against:13,agnost:[0,3],aim:10,al:[1,49],algorithm:1,alia:[42,43,44,45,46,47],align:47,alignment_head:47,alignment_lay:47,all:[1,5,10,15,28,42,43,44,45,46,47,49,51],all_result:1,alloc:2,allow:[1,2,21,24],allow_early_exit:[1,5,21,24],alreadi:[6,10,27,28,29,30,31,32,33,34,35],also:[1,5,7,8,9,21,49],altern:[7,8,21,24],alwai:[1,7,51],amazonaw:50,amd:[11,13],amid:10,an:[0,1,3,7,13,16,21,24,33,42,43,44,45,46,47,51],anoth:[0,5,13,46,49],api:[0,1,2,50,51,52],appear:1,append:10,appl:[13,49],appli:[1,5,9,21,24,42,43,44,45,46,47,49],applic:[3,13],approach:3,ar:[0,1,2,4,5,6,7,9,10,11,13,15,16,21,24,27,28,29,30,31,32,33,34,35,42,43,44,45,46,47,49,51,52],architectur:[0,2,3,11,13,46,47,49],arg:[27,28,29,30,31,32,33,34,35],argument:[1,10,27,28,29,30,31,32,33,34,35],argumentpars:[27,28,29,30,31,32,33,34,35],arm64:[11,13,49],around:[1,18,19],articl:2,ask:12,assert:1,assioc:51,associ:51,assumpt:3,async_result:15,asyncgenerationresult:[17,21,48],asynchron:[2,18,19,21,24,51],asynctranslationresult:[17,24,48],attach:24,attent:[22,24,46,47],auch:1,auf:1,ausgerichtet:1,author:49,auto:[13,16,21,24,49,51],auto_config:33,automat:[2,10,11,16,21,24,33],autotoken:10,avail:[1,15,18,19,21,24,51],averag:50,avoid:[2,16],avx2:[2,11],avx512:[11,16],avx:[2,11],back:[1,14,21,24],backend:[2,11,13,49],backward:52,bart:5,base:[2,27,42,45,49],basic:1,batch:[15,16,21,24,51],batch_gener:15,batch_typ:[16,21,24],bdist_wheel:13,beam:[16,21,24],beam_siz:[1,5,21,24],becaus:[15,32],bedienen:1,bedienung:1,been:2,befor:[2,46],behavior:[1,5,11],below:[1,11,15,16,49],benchmark:49,beschleunigen:1,beschleunigung:1,best:[1,2,11],better:[1,3,15],between:[15,49],bia:1,bias:24,bin:[0,5],bin_growth:2,binari:[0,11,13,49],blackout:10,block:[15,18,19,21,24,46],blue:5,bold:13,bool:[18,19,21,24,25,27,28,29,30,31,32,33,34,35,42,43,44,45,46,47],bos_token:10,both:[3,11,32,51],bpe:5,broken:0,brows:50,buffer:[2,15],build:0,build_cli:13,build_test:13,built:33,builtin:43,bz2:5,c:[0,3,21,24,52],cach:2,calcul:4,call:[3,15,27,28,29,30,31,32,33,34,35],callabl:24,can:[0,1,2,4,5,7,8,10,13,14,15,16,33,49,51],candid:[1,21,24,51],cannot:[27,28,29,30,31,32,33,34,35],capabl:[11,16,49],catalog:33,cd:13,chang:[0,1,42,44,45,46,47,49],check:[0,25],checkpoint:[8,32,33],checkpoint_path:33,chief:5,children:[42,43,44,45,46,47],chunk:16,classmethod:33,client:[13,52],clone:13,cmake:13,cmake_cxx_flag:13,cmake_install_prefix:13,cnn:10,code:[0,2,3,5,50],collect:9,com:[5,13,30,50],combin:1,come:0,comma:2,command:[7,13,27,28,29,30,31,32,33,34,35],common:[1,27,28,29,30,31,32,33,34,35,49],comp:13,compar:[1,49],compat:[9,11,52],compil:[2,11],complet:[1,7],compress:1,comput:[2,3,5,11,15,16,21,24,37,49],compute_typ:[21,24,49],concat:[41,47],concurr:[15,24],condit:[4,10],confid:1,config:[8,33],configur:[1,2,8,11,13,15,32,33],consciou:10,consid:[15,16,50],constant:[16,21,24],constructor:15,contain:[0,5,9,13,23,25,27,28,29,30,31,32,33,34,35],contains_model:[0,17,48],context:[1,24],control:[1,3,11],conv:6,conveni:9,convers:[3,5,6,7,8,12,27,28,29,30,31,32,33,34,35],convert:[5,6,7,8,9,10,28,29,30,31,32,33,34,35,43,48,49,50,51,52],convert_from_arg:[27,28,29,30,31,32,33,34,35],convert_ids_to_token:10,convert_tokens_to_id:10,core:[0,2,3,16],correspond:[8,10,49],costli:2,could:[0,3],cout:51,cover:[3,52],coverag:24,coverage_penalti:24,cpu:[0,2,3,5,13,14,15,16,21,24,37,49,50,51],creat:[15,33],critic:2,csc:9,ct2:[5,6,7,8,9,10,49,50],ct2_force_cpu_isa:11,ct2_model:[5,6,7,8,9,10,49],ct2_use_experimental_packed_gemm:16,ct2_use_mkl:11,ct2_verbos:49,ctranslate2:[0,1,2,3,4,5,6,7,8,9,10,12,13,15,18,19,20,21,22,23,24,25,27,28,29,30,31,32,33,34,35,36,37,38,40,41,42,43,44,45,46,47,48,49,50,51,52],ctranslate2_root:13,cub:2,cub_cach:2,cubla:3,cuda11:[13,51],cuda:[2,11,13,15,21,24,37,51],cuda_arch_list:13,cuda_dynamic_load:13,cuda_malloc_async:2,cuda_nvcc_flag:13,cuda_select_nvcc_arch_flag:13,cudamalloc:2,cumul:1,current:[3,5,10,16,21,24,49],custom:[2,3,10,13,28,32],da:1,daili:10,data:[5,15,16,28,51],data_dir:[5,28],dazu:1,de:[1,5,9,10],debug:2,decid:2,declar:[28,43],declare_argu:[27,28,29,30,31,32,33,34,35],decod:[2,4,5,7,9,10,12,21,24,28,46,47,50],decreas:15,defin:[0,5,13,49],degrad:49,del:14,delet:14,demonstr:1,den:1,depend:[3,11,13,15],deprec:[3,32],der:1,describ:[1,15,46,47],descript:[2,12,13],detail:1,detect:49,detoken:[1,24],develop:13,devic:[2,5,15,21,24,36,37,49,50,51],device_index:[15,16,21,24,37],devlin:49,dict:[5,21,24,32,33,42,43,44,45,46,47],dictionari:[5,21,24,28,32,33,42,43,44,45,46,47],die:1,dienst:1,dient:1,dies:1,differ:[0,1,4,5,15,47],dimens:47,direct:3,directli:[7,8,13,51],directori:[0,5,8,10,13,21,24,25,27,28,29,30,31,32,33,34,35,42,44,45,46,47],disabl:[13,16,20,21,22,24],disable_unk:[21,24],disk:[3,42,44,45,46,47,49],dispatch:[2,13],dist:13,distribut:1,diverg:1,dl:5,dnnl:13,docker:51,document:[0,8,12,13,49,51],doe:[1,2,5,51],don:8,done:[18,19],dopenmp_runtim:2,doption:13,download:[5,35,50],driver:11,dry:10,duplic:15,dure:[7,13,21,24,51],dwith_acceler:13,dwith_cuda:13,dwith_dnnl:13,dwith_mkl:13,dwith_openbla:13,dwith_rui:13,dynam:[13,16],e:[2,7,10,14,28,42,44,45,46,47,49],each:[0,1,2,4,15,20,21,22,24,42,44,45,46,47,51],earli:[21,24],easi:0,echo:51,edunov:1,effect:1,effekt:1,effici:[1,2,16,49,52],effizi:1,effizient:1,effizienten:1,effizienter:1,effizienz:1,eigen:3,ein:1,einen:1,einsatzort:1,either:[14,33],element:16,ello:[5,51],emb:3,embed:[0,41,46,47,49],embeddings_merg:47,embeddings_spec:42,embeddingsmerg:[39,47,48],embeddingsspec:[42,45],empti:[1,20,22,51],en:[5,9,10],en_xx:5,enabl:[2,13,15,16,46,47,49,51],enable_cpu_dispatch:13,enable_profil:13,encod:[0,5,9,10,28,47,50],end:[1,5,21,24,28,50],ende_ctranslate2:[5,9,50,51],endian:0,endl:51,enforc:1,engin:3,english:[9,10,50],enough:24,ensur:49,entrypoint:[4,13,51],environ:[11,12,13,16,49],epoch:50,equal:11,equat:49,erprobung:1,error:[2,51],es:1,especi:3,et:[1,49],etc:3,even:[0,2,3,15],evolv:52,exampl:[0,1,4,5,7,10,13,21,23,24,37,49,50],exclus:32,execut:[0,2,3,13,16,49,50],exist:[0,3,27,28,29,30,31,32,33,34,35,51],exit:[1,21,24],exp:5,expect:[0,1,10,21,51,52],experiment:[1,2],explicitli:[4,13,47],expos:[0,4,49,51],extend:[15,27,29,42,43,44,45],extens:28,extern:3,extract:1,face:[10,35],facebook:10,factor:41,fair:5,fairseq:[0,1,4,10,12,28],fairseqconvert:[26,27,48,52],fallback:49,fals:[1,5,21,24,27,28,29,30,31,32,33,34,35,42,43,44,45,46,47],fast:[0,2,3],faster:3,fastest:[1,16,49],favor:3,fbaipublicfil:5,featur:[3,12,51],feed:[46,47],fi:9,field:0,file:[0,5,23,24,27,28,29,30,31,32,33,34,35,45,47,51],fill:0,find:1,fine:10,finish:[1,21,24],first:[1,21,24,50],fix:[5,28],fixed_dictionari:[5,28],flag:[1,11,13],float16:[21,24,27,28,29,30,31,32,33,34,35,37,42,43,44,45,46,47],folgebeschleunigung:1,follow:[1,2,5,10,13,15,49,51,52],forc:[1,2,27,28,29,30,31,32,33,34,35],forecast:10,format:[0,5,7,24,27,28,29,30,31,32,33,34,35,50,51],formkomprimierung:1,formula:49,forward:[0,1,46,47],fp16:[2,49],fp32:49,framework:[3,10],free:[21,24],frequent:[1,12],from:[0,1,2,3,4,5,7,8,10,11,15,18,19,20,21,22,23,24,27,28,29,30,31,32,33,34,35,40,41,42,43,44,45,46,47,49,51],from_config:33,from_pretrain:10,ft:5,full:[0,4,15,21,24,49],fulli:[14,24,33],further:16,futur:[21,24],g:[2,7,14,28,42,44,45,46,47,49],gear:1,gelu:40,gemm:[2,16],gener:[1,2,5,10,12,14,15,16,17,20,23,24,31,38,48,51,52],generate_batch:[5,7,10,15,21],generationopt:21,generationresult:[17,18,21,48],german:[9,10,50],get:49,get_cuda_device_count:[17,48],get_supported_compute_typ:[17,48,49],gil:15,git:13,github:[12,13,30],give:49,given:24,gleichzeitig:1,global:15,goal:3,gpt2:10,gpt2_ct2:10,gpt2token:10,gpt:[4,30,46],gpu:[2,3,15,16,36,49,51],gram:51,graph:3,greater:[11,13],greedi:[21,24],guarante:[0,24,52],guid:[4,9,11],gz:[5,50],h:[5,8,51],ha:[1,3,15,32,51],half:49,hallo:50,hard:3,hardwar:12,have:[0,2,5,8,13,15,24],head:[46,47],heavi:3,hei:10,hello:[5,7,9,10,24,50,51],help:[13,49,51],helper:[25,27,28,29,30,31,32,33,34,35],helsinki:10,here:[3,49,51],hidden:47,high:[2,4,10,51],higher:1,highest:[1,24],how:[0,5,47,51],howev:[0,3,10,49],http:[5,9,13,30,50],hug:[10,35],hypothes:[1,5,9,10,21,22,24,50,51],hypothesi:[1,22],i:[49,51],id:[16,21,24],idea:49,imag:[13,51],immedi:15,impact:[1,2],implement:[0,2,49],impli:[3,49],implicitli:[4,10],improv:[2,15,16],includ:[0,1,4,5,7,12,13,15,21,24,27,28,29,30,31,32,33,34,35,51],increas:[1,15,16,51,52],increment:[0,42,44,45,46,47],independ:1,index:[37,47],ineffekt:1,infer:1,inferenzbeschleunigung:1,info:2,inform:[11,49,50],inherit:[18,19,20,21,22,23,24,27,28,29,30,31,32,33,34,35,40,41,42,43,44,45,46,47],initi:[21,24,28,29,30,31,32,33,34,35,42,45,46,47],input:[1,4,5,10,15,16,21,24,42,49,51],input_text:50,input_token:50,instal:[5,7,8,10,12,50],install_requir:13,instanc:[1,14,15,21,24,33],instead:[1,13,32,42,43,44,45,46,47,49],instruct:[2,11,12,13],int16:[21,24,27,28,29,30,31,32,33,34,35,37,42,43,44,45,46,47],int8:[21,24,27,28,29,30,31,32,33,34,35,37,42,43,44,45,46,47],int8_float16:[21,24,27,28,29,30,31,32,33,34,35,37,42,43,44,45,46,47],integr:[2,3,13],intel:[2,3,11,13,16,49],intenum:[40,41],inter_thread:[2,15,16,21,24],intermedi:0,intern:15,intra_thread:[15,16,21,24],introduc:[2,3],invari:47,iostream:51,isa:[2,13],issu:3,ist:1,its:[13,42,43,44,45,46,47,49],j4:13,j:49,join:5,just:1,k:[13,21,24,51],keep:[1,16,24],kei:3,kernel:13,l:51,lang_code_to_token:10,languag:[4,28,42],languagemodelspec:[39,44,46,48],larg:[3,10,16],larger:16,last:[10,46],late:3,latenc:15,later:[14,15],latest:[13,33,51],launch:15,layer:[16,42,43,44,45,46,47,49],layernorm_embed:[46,47],layerspec:[0,39,44,48],layout:[42,44,45,46,47],ld_library_path:13,leaf:0,learn:[2,3],least:[1,10,11],left:[1,49],len:1,length:[16,21,24],length_penalti:[21,24],let:1,level:[0,4,15,24,44,51],librari:[2,3,21,24,49],lightweight:3,like:[1,21],likelihood:4,limit:[1,15,21,24,32],line:[7,13,24,27,28,29,30,31,32,33,34,35,51],linear:[46,49],link:13,linux:13,list:[1,2,5,13,21,24,29,32,42,43,44,45,46,47,51],littl:49,lm:5,load:[0,5,9,13,14,24,33],load_model:[14,24],log:[2,4],log_prob:5,logic:[0,3],low:1,lower:1,lua:3,luatorch:3,m2m100:10,m2m100_418:10,m2m100_418m:10,m2m_100:5,m2m_100_418m_ct2:5,machin:0,maco:13,mai:[15,28],mail:10,main:[4,49,51],major:0,make:[3,7,10,13,16],manag:[0,12],mani:[3,16,21,24],manylinux2014:13,map:[21,24,27,28,29,30,31,32,33,34,35,42,43,44,45,46,47,51],march:13,marian:[0,9,10,12,29],marianconvert:[26,27,34,48,52],match:[5,51],matrix:22,max:49,max_batch_s:[15,16,21,24],max_bin:2,max_cached_byt:2,max_decoding_length:[1,24],max_input_length:[1,21,24],max_length:[5,10,21],max_queued_batch:[15,21,24],maximum:[1,15,21,24,49],mbart50:5,mbart50_ct2:5,mbart:10,me:10,mean:5,meet:16,memori:[1,2,3,12,15,24,49],merg:[41,47],meta:10,method:[4,10,14,15,16,51],middai:10,might:14,militari:5,millisecond:23,min:49,min_bin:2,min_decoding_length:[1,24],min_length:21,minim:5,minimum:[1,16,21,24],mkdir:13,mkl:[2,3,11,13,49],ml50_lang:5,mode:[1,15,49],model:[1,3,4,6,7,8,9,10,12,13,14,15,21,24,25,27,28,29,30,31,32,33,34,35,42,44,45,46,47,50,51,52],model_dict:5,model_dir:[9,30,34],model_is_load:24,model_name_or_path:35,model_path:[5,6,7,15,21,24,28,29,31,32,49,50],model_spec:[0,32],modellen:1,modellkompress:1,modellkomprimierung:1,modelspec:[32,39,42,43,45,48],modul:[0,2,13,42,45,47],more:[0,1,2,3,11,16,21,24,49,50,51],most:[1,8,49],move:[0,3,14,24],mt:[0,10,12,34],multilingu:[5,10,28],multilingual_transform:5,multipl:[0,13,15,16,49],multithread:12,must:0,mutual:32,n:[1,51],name:[0,5,10,21,24,32,33,35,37,42,43,44,45,46,47],namedtupl:23,namespac:[27,28,29,30,31,32,33,34,35],ndarrai:[32,42,43,44,45,46,47],nearli:10,need:3,neg:[1,2],nest:0,network:[46,47],next:0,nlp:10,nn:[0,5],no_default_special_token:28,no_final_norm:46,non:[1,2,13,49],none:[2,13,21,24,27,28,29,30,31,32,33,34,35,38,42,43,44,45,46,47,49],norm:[46,47],normal:[21,24,46,47],normalize_scor:[1,5,21,24],notimplementederror:[27,28,29,30,31,32,33,34,35],now:3,nowadai:0,np:5,npz:[6,29],num_active_batch:[21,24],num_exampl:23,num_gener:21,num_head:[46,47],num_hypothes:[1,21,24],num_lay:[46,47],num_queued_batch:[21,24],num_source_embed:47,num_threads_per_transl:51,num_token:23,num_transl:[24,51],number:[0,1,15,16,21,23,24,36,46,47,51],numpi:5,nvcc:13,nvidia:[11,13,16,49],object:[0,9,14,15,18,19,24,43],obtain:5,occur:[1,3],oder:1,off:[2,13],offset:2,older:0,onc:13,one:[0,1,46,49],onednn:[11,13,49],onli:[3,7,11,49],onmt_release_model:7,open:3,openai:[10,30],openaigpt2convert:[26,27,48,52],openbla:13,openmp:[13,15,21,24],openmp_runtim:13,opennmt:[0,3,12,13,31,32,33,49,50,51],opennmtpyconvert:[26,27,48,52],opennmttfconvert:[26,27,48,52],opennmttfconverterv2:[26,27,32,48,52],oper:0,opt:13,optim:[0,42,43,44,45,46,47,49],option:[0,1,5,8,24,27,28,29,30,31,32,33,34,35,42,43,44,45,46,47,49,51,52],opu:[0,10,12,34],opus_model:9,opusmtconvert:[26,29,48,52],order:[2,42,43,44,45,46,47],ort:1,os:[2,13],other:[3,8,10,11,49,50,52],out:0,out_typ:[5,9,50],output:[1,5,7,9,10,21,24,27,28,29,30,31,32,33,34,35,42,44,45,46,47,51],output_dir:[5,6,7,8,9,10,27,28,29,30,31,32,33,34,35,42,44,45,46,47,49,50],output_path:24,output_text:50,output_token:[10,50],outsid:8,over:16,overcom:3,overrid:[2,27,28,29,30,31,32,33,34,35],overview:3,own:[0,2],pack:[2,16],packag:[13,50],page:1,parallel:[2,12,21,24],paramet:[2,5,10,15,21,24,27,28,29,30,31,32,33,34,35,37,42,43,44,45,46,47],pars:[27,28,29,30,31,32,33,34,35],parser:[27,28,29,30,31,32,33,34,35],part:5,particular:11,pass:[8,16,51],path:[5,6,7,10,13,16,21,24,25,27,28,29,30,31,32,33,34,35,45,47],penal:[21,24],penalti:[21,24],per:[15,21,24,49],perform:[2,11,12,49],perplex:5,pg:10,physic:16,pin:2,pip:[5,7,8,10,50],place:[1,21,24],platform:[11,49],pleas:32,pool:2,popul:0,posit:[21,24,47],possibl:[0,2,3,15,21,24,27,28,29,30,31,32,33,34,35,42,43,44,45,46,47,49],pouta:9,practic:1,pre:[46,47],pre_norm:[46,47],prebuilt:[11,49],precis:49,predict:[16,21,24],prefer:16,prefix:[1,5,24,42,43,44,45,46,47],prefix_bias_beta:[1,24],prepend:[42,43,44,45,46,47],pretrain:[5,9,10,35,50],previous:[0,2,21,24],print:[1,5,9,10,15,50,51],probabl:[1,3],process:[15,16,21,23,24],processor:11,produc:0,product:[3,13],profil:13,programm:1,project:[1,2,11,12,46,52],project_in_out:46,projekt:1,prompt:10,properti:[20,21,22,23,24,42,44,45,46,47],provid:[9,13,14,28,51],pt:[5,7,28,31,49,50],publish:[5,13],pull:13,purpos:14,pwd:51,py:[0,3,12,13,31,49,50],pybind11:13,pybind11_builtin:[18,19,20,21,22,23,24],pybind11_object:[18,19,20,21,22,23,24],pyonmt:50,pypi:13,python:[0,2,12,15,49,50,52],pytorch:[0,5,7,28,31],qualiti:16,quantiz:[12,13,27,28,29,30,31,32,33,34,35,42,43,44,45,46,47],queri:49,question:12,queue:[15,21,24],quickli:24,quickstart:[7,12,51],r:13,rais:[27,28,29,30,31,32,33,34,35,42,43,44,45,46,47,51],random:[21,24,38],randomli:[1,21,24],rang:[2,49],rare:0,read:0,read_batch_s:24,readi:24,readm:49,reason:2,recommend:16,recurs:[13,42,43,44,45,46,47],redefin:3,reduc:[3,10,16,49,51],reduct:16,refer:[12,49],regist:[42,45,46,47],register_source_vocabulari:[45,47],register_target_vocabulari:[45,47],register_vocabulari:[42,46],register_vocabulary_map:[45,47],rel:47,releas:[7,14,15],reli:3,relianc:3,relu:[40,46,47],renam:[42,44,45,46,47],repetition_penalti:[21,24],replac:[1,24],replace_unknown:24,replica:15,repositori:[12,13],repres:0,represent:[0,47],request:[21,24],requir:[2,3,4,5,6,7,10,11,13,16,28,42,43,44,45,46,47],resolv:33,resourc:14,respect:13,respons:10,rest:[1,3],restrict:1,result:[1,5,9,10,15,18,19,20,21,22,24,49,50,51],resum:24,retriev:15,return_altern:[1,21,24],return_attent:[22,24],return_scor:[16,20,21,22,24],reus:2,revis:[0,42,44,45,46,47],richtet:1,risk:10,rm:[13,51],ro_ro:5,root:0,round:49,rui:[13,49],run:[4,5,13,15,21,24,49,50,51],rund:1,runtim:[2,13,24,49],runtimeerror:[27,28,29,30,31,32,33,34,35],s3:50,s:[1,2,4,5,7,10,21,24,50],sacremos:5,safeti:15,sai:[1,5],same:[0,2,7,42,43,44,45,46,47,49],sampl:[5,21,24],sampling_temperatur:[1,21,24],sampling_topk:[1,5,10,21,24],save:[0,24,27,28,29,30,31,32,33,34,35,42,44,45,46,47,49],scale:49,scenario:3,schedul:10,scheme:[27,28,29,30,31,32,33,34,35,42,43,44,45,46,47],schlussfolgerung:1,scope:0,score:[1,5,15,16,20,21,22,24,51],score_batch:[4,5,21,24],score_fil:24,score_token_0:24,score_token_1:24,script:[0,7],search:[21,24],section:[0,1,50],see:[0,1,2,3,4,5,7,8,11,12,13,15,49,51],seed:38,seem:25,select:[2,8,10,11,13,16,47,49],semant:52,sens:0,sentenc:[1,5,16,24,50],sentencepiec:[5,9,50],sentencepieceprocessor:[5,9,50],separ:[2,9,13,15,49,51],sequenc:[1,4,5,10,20,21,24,45],sequencetosequencemodelspec:[39,44,47,48],serv:[1,3],servic:1,servieren:1,set:[1,2,5,11,13,15,16,21,24,27,28,29,30,31,32,33,34,35,37,38,42,43,44,45,46,47,49,51],set_random_se:[17,48],setup:13,sever:3,shape:[42,43,44,45,46,47],share:[3,15,49],should:[0,2,4,5,8,10,13,15,21,24,33,43,50,51],show:5,shutoff:10,sich:1,similar:[0,3,5,10,49],simpl:0,simpli:[1,7,8,14],simplic:5,sinc:[9,10],singl:[2,5,13,16],size:[3,15,16,21,24,49],size_t:51,skip:16,skip_special_token:10,sky:5,slot:[21,24],small:10,so:[11,49],softmax:16,solut:5,some:[2,3,5,13,14,15,16,23,42,43,44,45,46,47,51],sort:16,sourc:[5,9,10,11,24,28,32,45,47],source_embeddings_spec:45,source_lang:28,source_path:24,source_tokenize_fn:24,source_vocabulari:0,sp:[5,9,50],space:0,spec:[40,41,42,43,44,45,46,47,48],special:[5,21,28,51],specif:[2,3,15,32,42,43,44,45,46,47],specifi:47,speed:[1,2,51],split:[15,16],spm:[5,9,50],src:6,src_1:51,src_2:51,src_lang:10,src_n:51,src_vocab:32,sse:11,standard:1,standardisierten:1,start:[1,4,5,7,10,21,28,50],start_token:[10,21],state:10,statist:[23,24],std:51,step:[0,3,13],still:15,store:49,str:[5,9,21,24,25,27,28,29,30,31,32,33,34,35,37,42,43,44,45,46,47,50],strategi:[1,41],stream:15,string:[1,51],strong:3,stronger:1,structur:[21,24],sub:15,submiss:16,submit:15,submodul:13,successfulli:50,suggest:49,summar:10,support:[2,3,5,6,7,8,10,12,16,32,37,51,52],sure:[7,10],swish:40,symbol:[1,52],symmetr:49,syria:5,system:[0,13,16,49],t:8,tab:51,tabl:49,take:[1,10],talk:10,tar:[5,50],target:[1,5,10,13,24,28,32,45,47,51],target_detokenize_fn:24,target_embeddings_spec:45,target_lang:28,target_path:24,target_prefix:[1,5,10,24],target_tokenize_fn:24,target_vocabulari:0,task:[5,16],team:5,techniqu:[1,49],temperatur:[21,24],templat:[0,3],temporarili:14,tensor:16,tensorflow:0,test:13,text:[1,5,10,12,21,24,50],tf:[0,12,32,33],tgt:6,tgt_1:51,tgt_2:51,tgt_k:51,tgt_vocab:32,than:[0,5,16],thei:[0,5,9,10,11,21],them:13,thi:[0,1,2,4,5,9,10,11,13,14,15,21,24,27,28,29,30,31,32,33,34,35,42,43,44,45,46,47,49,50,51],though:15,thousand:10,thread:[3,15,16,21,24],through:10,throughput:[15,16],time:[1,15,23,42,44,45,46,47],timestep:1,tip:12,to_cpu:24,token:[1,5,7,16,20,21,23,24,28,32,42,45,46,47,51],tomorrow:10,toolkit:[3,13],top:[0,21,24,44],torch:10,total:[15,16,23],total_time_in_m:23,toward:[1,24],trace:2,track:0,tradeoff:2,train:[0,3,5,6,7,8,9,28,29,34,50],transform:[0,3,4,5,6,7,8,9,12,35,46,47,49,50],transformer_align:5,transformer_lm:5,transformerdecodermodelspec:[39,42,48],transformersconvert:[26,27,48,52],transformerspec:[39,45,48],translat:[1,2,4,5,9,12,13,14,15,16,17,22,48,49,50,52],translate_batch:[1,5,9,10,15,24,50,51],translate_fil:24,translationopt:[24,52],translationresult:[17,19,24,48,51,52],translationstat:[17,24,48],translator_pool:51,translatorpool:[51,52],tri:49,truncat:[1,21,24],tune:10,tupl:47,txt:[0,5,13],type:[7,16,21,24,37,40],ubuntu20:[13,51],um:1,un:5,uncondit:[4,10],unconstrain:[21,24],und:1,unifi:0,union:[21,24,32,33,47,51],unknown:[21,24],unless:[21,24],unlimit:[21,24],unload:[14,24],unload_model:[14,24],unspecifi:1,until:[15,18,19,21,24],unzip:9,us:[0,1,2,4,5,7,9,10,11,13,14,15,16,21,24,32,33,49,50,51],usag:[1,2,3,10,15,49,51],use_vmap:[24,51],user:28,user_dir:28,usual:[0,2,4,13],v:51,valid:[11,42,43,44,45,46,47],valu:[0,1,2,3,13,15,16,21,24,27,28,29,30,31,32,33,34,35,42,43,44,45,46,47,49],valueerror:[32,42,43,44,45,46,47],variabl:[0,11,12,13,16,32,42,43,44,45,46,47,49],vector:[24,51],vendor:2,verbos:2,verifi:[42,43,44,45,46,47],version:[0,11,12,13],via:[3,51],visibl:36,vmap:[27,28,29,30,31,32,33,34,35,51],vocab:6,vocab_map:51,vocab_path:[6,29],vocabulari:[0,5,6,16,24,27,28,29,30,31,32,33,34,35,42,45,46,47,49],volum:16,von:1,w:49,wa:[10,20,22],wai:3,wait:[21,24],want:[1,3,8,14],warn:2,we:[1,49],weight:[0,3,27,28,29,30,31,32,33,34,35,42,43,44,45,46,47,49],welcom:12,well:51,welt:50,were:[0,3,10,16],wget:[5,9,50],what:51,whatev:49,wheel:13,when:[0,1,2,10,13,15,16,21,24,47,49],where:[0,3,5,11,21,24,27,28,29,30,31,32,33,34,35,42,44,45,46,47,51],wherea:11,whether:[2,21,24,33],which:[0,2,3,4,5,10,13,15,24,49,51],whl:13,why:1,wildfir:10,wind:10,window:13,with_acceler:13,with_cuda:13,with_dnnl:13,with_mkl:13,with_openbla:13,with_relative_posit:47,with_rui:13,with_scor:24,with_tokens_scor:24,without:[3,49],wmt19:4,wmt19_en_ct2:5,wmt:50,wngt:16,work:49,worker:15,workload:15,world:[5,9,10,24,50,51],would:0,wq:49,wrapper:[18,19],write:0,wu:49,x86:[11,13,49],x:5,xf:[5,50],yaml:[8,33],yml:[6,8,29],you:[0,1,2,7,8,10,11,13,14,16,49,50],your:[0,3,13,16,49,50],zip:9,zu:1,zur:1,zwar:1},titles:["Model conversion","Decoding features","Environment variables","Frequently asked questions","Text generation","Fairseq","Marian","OpenNMT-py","OpenNMT-tf","OPUS-MT","Transformers","Hardware support","Index","Installation","Memory management","Multithreading and parallelism","Performance tips","ctranslate2","AsyncGenerationResult","AsyncTranslationResult","GenerationResult","Generator","TranslationResult","TranslationStats","Translator","contains_model","ctranslate2.converters","Converter","FairseqConverter","MarianConverter","OpenAIGPT2Converter","OpenNMTPyConverter","OpenNMTTFConverter","OpenNMTTFConverterV2","OpusMTConverter","TransformersConverter","get_cuda_device_count","get_supported_compute_types","set_random_seed","ctranslate2.specs","Activation","EmbeddingsMerge","LanguageModelSpec","LayerSpec","ModelSpec","SequenceToSequenceModelSpec","TransformerDecoderModelSpec","TransformerSpec","Python","Quantization","Quickstart","Text translation","Versioning"],titleterms:{"100":[5,10],"16":49,"2":10,"50":5,"8":49,"do":3,"float":49,"new":0,activ:40,add:0,altern:1,api:12,ar:3,ask:3,asyncgenerationresult:18,asynchron:15,asynctranslationresult:19,autocomplet:1,backward:0,bart:10,beam:[1,5],bias:1,bit:49,build:13,c:[13,51],client:51,code:13,compat:0,compil:13,constraint:1,contains_model:25,convers:[0,49],convert:[0,26,27],cpu:11,ct2_cuda_alloc:2,ct2_cuda_allow_fp16:2,ct2_cuda_caching_allocator_config:2,ct2_force_cpu_isa:2,ct2_translators_core_offset:2,ct2_use_experimental_packed_gemm:2,ct2_use_mkl:2,ct2_verbos:2,ctranslat:3,ctranslate2:[17,26,39],decod:1,docker:13,doe:3,download:13,dynam:51,embeddingsmerg:41,english:5,environ:2,equival:5,exampl:[9,51],execut:15,factor:51,fairseq:5,fairseqconvert:28,featur:1,float16:49,framework:0,frequent:3,from:[13,14],futur:3,gener:[4,7,21],generationresult:20,german:5,get:12,get_cuda_device_count:36,get_supported_compute_typ:37,gpt:10,gpu:[11,13],greedi:1,guid:12,hardwar:11,how:3,i:3,implement:3,implicit:49,index:12,inform:12,instal:13,instead:3,int16:49,int8:49,int8_float16:49,integ:49,known:3,languag:5,languagemodelspec:42,layerspec:43,length:1,librari:13,limit:3,load:49,m2m:[5,10],manag:14,marian:6,marianconvert:29,marianmt:10,mbart:5,memori:14,mix:49,model:[0,5,49],modelspec:44,mt:9,multithread:15,openaigpt2convert:30,opennmt:[7,8],opennmtpyconvert:31,opennmttfconvert:32,opennmttfconverterv2:33,opt:10,option:13,opu:9,opusmtconvert:34,origin:3,other:12,parallel:15,perform:16,perplex:4,pip:13,plan:3,point:49,portabl:0,posit:1,precis:0,project:3,provid:3,py:7,python:[13,14,48,51],pytorch:3,quantiz:[0,49],question:3,quickstart:50,random:1,reduc:0,reduct:51,relat:3,sampl:1,search:[1,5],sequencetosequencemodelspec:45,serial:0,server:3,set_random_se:38,should:3,sourc:[13,51],spec:39,special:[4,10],specif:0,start:12,structur:0,support:[0,11,13,49],tensorflow:3,text:[4,7,51],tf:8,thi:3,tip:16,token:[4,10],transform:10,transformer_lm:7,transformerdecodermodelspec:46,transformersconvert:35,transformerspec:47,translat:[3,10,24,51],translationresult:22,translationstat:23,type:49,us:3,usag:12,variabl:2,version:52,vocabulari:51,what:3,when:3,why:3,wmt16:5,wmt19:5,wrapper:13,you:3}})