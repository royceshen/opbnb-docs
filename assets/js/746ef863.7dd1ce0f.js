"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[5482],{56768:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>y,default:()=>h,frontMatter:()=>c,metadata:()=>g,toc:()=>f});var s=i(87462),r=(i(67294),i(3905)),a=i(26389),p=i(94891),n=i(75190),m=i(47507),o=i(24310),l=i(63303),d=(i(75035),i(85162));const c={id:"query-get-sp-storage-price-by-time",title:"get storage price of specific sp and time",description:"get storage price of specific sp and time",sidebar_label:"QueryGetSpStoragePriceByTime",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"QueryGetSpStoragePriceByTime",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{sp_storage_price:{type:"object",properties:{sp_address:{type:"string",title:"sp address"},update_time_sec:{type:"string",format:"int64",title:"update time, unix timestamp in seconds"},read_price:{type:"string",title:"read price, in bnb wei per charge byte"},free_read_quota:{type:"string",format:"uint64",title:"free read quota, in byte"},store_price:{type:"string",title:"store price, in bnb wei per charge byte"}},title:"storage price of a specific sp"}}}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"sp_addr",description:"operator address of sp",in:"path",required:!0,schema:{type:"string"}},{name:"timestamp",description:"unix timestamp in seconds. If it's 0, it will return the latest price.",in:"path",required:!0,schema:{type:"string",format:"int64"}}],tags:["Query"],description:"get storage price of specific sp and time",method:"get",path:"/greenfield/sp/get_sp_storage_price_by_time/{sp_addr}/{timestamp}",info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"get storage price of specific sp and time",description:{type:"text/plain"},url:{path:["greenfield","sp","get_sp_storage_price_by_time",":sp_addr",":timestamp"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) operator address of sp",type:"text/plain"},type:"any",value:"",key:"sp_addr"},{disabled:!1,description:{content:"(Required) unix timestamp in seconds. If it's 0, it will return the latest price.",type:"text/plain"},type:"any",value:"",key:"timestamp"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},y=void 0,g={unversionedId:"greenfield-api/query-get-sp-storage-price-by-time",id:"greenfield-api/query-get-sp-storage-price-by-time",title:"get storage price of specific sp and time",description:"get storage price of specific sp and time",source:"@site/docs/greenfield-api/query-get-sp-storage-price-by-time.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/query-get-sp-storage-price-by-time",permalink:"/opbnb-docs/docs/greenfield-api/query-get-sp-storage-price-by-time",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"query-get-sp-storage-price-by-time",title:"get storage price of specific sp and time",description:"get storage price of specific sp and time",sidebar_label:"QueryGetSpStoragePriceByTime",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"QueryGetSpStoragePriceByTime",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{sp_storage_price:{type:"object",properties:{sp_address:{type:"string",title:"sp address"},update_time_sec:{type:"string",format:"int64",title:"update time, unix timestamp in seconds"},read_price:{type:"string",title:"read price, in bnb wei per charge byte"},free_read_quota:{type:"string",format:"uint64",title:"free read quota, in byte"},store_price:{type:"string",title:"store price, in bnb wei per charge byte"}},title:"storage price of a specific sp"}}}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"sp_addr",description:"operator address of sp",in:"path",required:!0,schema:{type:"string"}},{name:"timestamp",description:"unix timestamp in seconds. If it's 0, it will return the latest price.",in:"path",required:!0,schema:{type:"string",format:"int64"}}],tags:["Query"],description:"get storage price of specific sp and time",method:"get",path:"/greenfield/sp/get_sp_storage_price_by_time/{sp_addr}/{timestamp}",info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"get storage price of specific sp and time",description:{type:"text/plain"},url:{path:["greenfield","sp","get_sp_storage_price_by_time",":sp_addr",":timestamp"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) operator address of sp",type:"text/plain"},type:"any",value:"",key:"sp_addr"},{disabled:!1,description:{content:"(Required) unix timestamp in seconds. If it's 0, it will return the latest price.",type:"text/plain"},type:"any",value:"",key:"timestamp"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null}},u={},f=[{value:"QueryGetSpStoragePriceByTime",id:"querygetspstoragepricebytime",level:2}],b={toc:f};function h(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,s.Z)({},b,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"querygetspstoragepricebytime"},"QueryGetSpStoragePriceByTime"),(0,r.kt)("p",null,"get storage price of specific sp and time"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(n.Z,{className:"paramsItem",param:{name:"sp_addr",description:"operator address of sp",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,r.kt)(n.Z,{className:"paramsItem",param:{name:"timestamp",description:"unix timestamp in seconds. If it's 0, it will return the latest price.",in:"path",required:!0,schema:{type:"string",format:"int64"}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(a.Z,{mdxType:"ApiTabs"},(0,r.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"A successful response.")),(0,r.kt)("div",null,(0,r.kt)(p.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(d.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,r.kt)(l.Z,{mdxType:"SchemaTabs"},(0,r.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"sp_storage_price"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!1,name:"sp_address",required:!1,schemaName:"sp address",qualifierMessage:void 0,schema:{type:"string",title:"sp address"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"update_time_sec",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"string",format:"int64",title:"update time, unix timestamp in seconds"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"read_price",required:!1,schemaName:"read price, in bnb wei per charge byte",qualifierMessage:void 0,schema:{type:"string",title:"read price, in bnb wei per charge byte"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"free_read_quota",required:!1,schemaName:"uint64",qualifierMessage:void 0,schema:{type:"string",format:"uint64",title:"free read quota, in byte"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"store_price",required:!1,schemaName:"store price, in bnb wei per charge byte",qualifierMessage:void 0,schema:{type:"string",title:"store price, in bnb wei per charge byte"},mdxType:"SchemaItem"}))))))),(0,r.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(m.Z,{responseExample:'{\n  "sp_storage_price": {\n    "sp_address": "string",\n    "update_time_sec": "string",\n    "read_price": "string",\n    "free_read_quota": "string",\n    "store_price": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(d.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"An unexpected error response.")),(0,r.kt)("div",null,(0,r.kt)(p.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(d.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,r.kt)(l.Z,{mdxType:"SchemaTabs"},(0,r.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"details"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(o.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,r.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(m.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}h.isMDXComponent=!0}}]);