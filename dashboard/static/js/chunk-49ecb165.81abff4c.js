(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49ecb165"],{"1f72":function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("基本配置")])]),r("el-form",{attrs:{inline:!0}},[r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{attrs:{placeholder:"ingress名称"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),r("el-form-item",{attrs:{label:"命名空间"}},[r("el-select",{on:{change:e.changeNs},model:{value:e.namespace,callback:function(t){e.namespace=t},expression:"namespace"}},e._l(e.nslist,(function(e){return r("el-option",{attrs:{label:e,value:e}})})),1)],1)],1)],1),r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("标签设置")])]),r("div",[r("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},model:{value:e.annotations,callback:function(t){e.annotations=t},expression:"annotations"}})],1),r("Cors",{ref:"corsConfig"}),r("Rewrite",{ref:"rewriteConfig"})],1),r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("规则")])]),e._l(e.rules,(function(t,o){return r("el-form",{model:{value:e.rules,callback:function(t){e.rules=t},expression:"rules"}},[r("el-form",{attrs:{inline:!0}},[r("el-form-item",{attrs:{label:"域名"}},[r("el-input",{attrs:{placeholder:"填写域名"},model:{value:t.host,callback:function(r){e.$set(t,"host",r)},expression:"rule.host"}})],1),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.addPathCfg(o)}}},[e._v("+")])],1),e._l(t.paths,(function(t,s){return[r("el-form",{attrs:{inline:!0}},[r("el-form-item",{attrs:{label:"Path"}},[r("el-input",{attrs:{placeholder:"Path"},model:{value:t.path,callback:function(r){e.$set(t,"path",r)},expression:"pathcfg.path"}})],1),r("el-form-item",{attrs:{label:"服务名"}},[r("el-select",{model:{value:t.svc_name,callback:function(r){e.$set(t,"svc_name",r)},expression:"pathcfg.svc_name"}},e._l(e.svclist,(function(e){return r("el-option",{attrs:{label:e.Name,value:e.Name}})})),1)],1),r("el-form-item",{attrs:{label:"端口"}},[r("el-input",{attrs:{placeholder:"填写服务端口"},model:{value:t.port,callback:function(r){e.$set(t,"port",r)},expression:"pathcfg.port"}})],1),r("el-form-item",[r("el-button",{directives:[{name:"show",rawName:"v-show",value:s>0,expression:"pathindex>0"}],attrs:{type:"primary"},on:{click:function(t){return e.rmPathCfg(o,s)}}},[e._v("-")])],1)],1)]}))],2)}))],2),r("div",{staticStyle:{"text-align":"center","margin-top":"20px",color:"red"}},[e._v(" "+e._s(e.errorMsg)+" ")]),r("div",{staticStyle:{"text-align":"center","margin-top":"20px"}},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.postNew()}}},[e._v("保存")])],1)],1)},s=[],n=(r("4160"),r("a434"),r("b0c0"),r("159b"),r("9f46")),a=r("7570"),l=r("b775");function i(e){return Object(l["a"])({url:"/svc?namespace="+e,method:"get"})}var c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",{on:{click:function(t){e.show=!e.show}}},[e._v("跨域设置")])]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}]},[r("el-form",{attrs:{model:e.corsConfig,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"启用"}},[r("el-switch",{model:{value:e.corsConfig.enable_cors,callback:function(t){e.$set(e.corsConfig,"enable_cors",t)},expression:"corsConfig.enable_cors"}})],1),r("el-form-item",{attrs:{label:"允许来源"}},[r("el-input",{staticStyle:{width:"150px"},model:{value:e.corsConfig.cors_allow_origin,callback:function(t){e.$set(e.corsConfig,"cors_allow_origin",t)},expression:"corsConfig.cors_allow_origin"}})],1),r("el-form-item",{attrs:{label:"请求方法"}},[r("el-input",{staticStyle:{width:"450px"},model:{value:e.corsConfig.cors_allow_methods,callback:function(t){e.$set(e.corsConfig,"cors_allow_methods",t)},expression:"corsConfig.cors_allow_methods"}})],1),r("el-form-item",{attrs:{label:"允许头"}},[r("el-input",{model:{value:e.corsConfig.cors_allow_headers,callback:function(t){e.$set(e.corsConfig,"cors_allow_headers",t)},expression:"corsConfig.cors_allow_headers"}})],1),r("el-form-item",{attrs:{label:"暴露头(JS可访问)"}},[r("el-input",{model:{value:e.corsConfig.cors_expose_headers,callback:function(t){e.$set(e.corsConfig,"cors_expose_headers",t)},expression:"corsConfig.cors_expose_headers"}})],1),r("el-form-item",{attrs:{label:"允许凭据"}},[r("el-switch",{model:{value:e.corsConfig.cors_allow_credentials,callback:function(t){e.$set(e.corsConfig,"cors_allow_credentials",t)},expression:"corsConfig.cors_allow_credentials"}})],1)],1)],1)])],1)},u=[],f=(r("ac1f"),r("5319"),{data:function(){return{show:!1,corsConfig:{cors_allow_origin:"*",enable_cors:!1,cors_allow_methods:"GET, PUT, POST, DELETE, PATCH, OPTIONS",cors_allow_headers:"Content-Type,AccessToken,X-CSRF-Token, Authorization, Token",cors_expose_headers:"",cors_allow_credentials:!1}}},methods:{output:function(){var e="nginx.ingress.kubernetes.io",t="";if(this.corsConfig.enable_cors){for(var r in this.corsConfig){var o=r.replace("_","-");""!==this.corsConfig[r]&&(t+=e+"/"+o+":"+this.corsConfig[r]+";")}return t}return""}}}),h=f,d=r("2877"),p=Object(d["a"])(h,c,u,!1,null,null,null),m=p.exports,g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",{on:{click:function(t){e.show=!e.show}}},[e._v("重写配置")])]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}]},[r("el-form",{attrs:{model:e.rewriteConfig,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"启用"}},[r("el-switch",{model:{value:e.rewriteConfig.rewrite_enable,callback:function(t){e.$set(e.rewriteConfig,"rewrite_enable",t)},expression:"rewriteConfig.rewrite_enable"}})],1),r("el-form-item",{attrs:{label:"重写配置"}},[r("el-input",{model:{value:e.rewriteConfig.rewrite_target,callback:function(t){e.$set(e.rewriteConfig,"rewrite_target",t)},expression:"rewriteConfig.rewrite_target"}})],1)],1)],1)])],1)},v=[],_={data:function(){return{show:!1,rewriteConfig:{rewrite_enable:!1,rewrite_target:""}}},methods:{output:function(){var e="nginx.ingress.kubernetes.io",t="";if(this.rewriteConfig.rewrite_enable){for(var r in this.rewriteConfig){var o=r.replace("_","-");""!==this.rewriteConfig[r]&&(t+=e+"/"+o+":"+this.rewriteConfig[r]+";")}return t}return""}}},w=_,b=Object(d["a"])(w,g,v,!1,null,null,null),C=b.exports,x={data:function(){return{name:"",namespace:"",rules:[{host:"",paths:[{path:"",svc_name:"",port:"80"}]}],nslist:[],svclist:[],errorMsg:null,annotations:""}},created:function(){var e=this;Object(a["a"])().then((function(t){console.log(t.data),e.nslist=t.data}))},methods:{clearSelectSvc:function(){this.rules.forEach((function(e){e.paths.forEach((function(e){e.svc_name=""}))}))},changeNs:function(e){var t=this;this.clearSelectSvc(),i(e).then((function(e){t.svclist=e.data}))},addPathCfg:function(e){this.rules.forEach((function(t,r){r===e&&t.paths.push({path:"",svc_name:"",port:"80"})}))},rmPathCfg:function(e,t){this.rules.forEach((function(r,o){o===e&&r.paths.forEach((function(e,o){o===t&&r.paths.splice(o,1)}))}))},postNew:function(){var e=this,t=this.annotations;for(var r in this.$refs){console.log(r);var o=this.$refs[r].output();console.log(o,"null"===o,null===o),null!==o&&(t+=o)}var s={Name:this.name,Namespace:this.namespace,Rules:this.rules,Annotations:t};Object(n["a"])(s).then((function(t){e.errorMsg="",alert("成功")})).catch((function(t){t.response?e.errorMsg=JSON.stringify(t.response.data):e.errorMsg=JSON.stringify(t.message)}))}},components:{Cors:m,Rewrite:C}},k=x,S=Object(d["a"])(k,o,s,!1,null,null,null);t["default"]=S.exports},7570:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var o=r("b775");function s(){return Object(o["a"])({url:"/ns",method:"get"})}},"9f46":function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"a",(function(){return n})),r.d(t,"c",(function(){return a}));var o=r("b775");function s(e){return Object(o["a"])({url:"/ingress?namespace="+e,method:"get"})}function n(e){return Object(o["a"])({url:"/ingress",method:"post",data:e})}function a(e,t){return Object(o["a"])({url:"/ingress?namespace"+e+"&name="+t,method:"delete"})}},a434:function(e,t,r){"use strict";var o=r("23e7"),s=r("23cb"),n=r("a691"),a=r("50c4"),l=r("7b0b"),i=r("65f0"),c=r("8418"),u=r("1dde"),f=r("ae40"),h=u("splice"),d=f("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,m=Math.min,g=9007199254740991,v="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!h||!d},{splice:function(e,t){var r,o,u,f,h,d,_=l(this),w=a(_.length),b=s(e,w),C=arguments.length;if(0===C?r=o=0:1===C?(r=0,o=w-b):(r=C-2,o=m(p(n(t),0),w-b)),w+r-o>g)throw TypeError(v);for(u=i(_,o),f=0;f<o;f++)h=b+f,h in _&&c(u,f,_[h]);if(u.length=o,r<o){for(f=b;f<w-o;f++)h=f+o,d=f+r,h in _?_[d]=_[h]:delete _[d];for(f=w;f>w-o+r;f--)delete _[f-1]}else if(r>o)for(f=w-o;f>b;f--)h=f+o-1,d=f+r-1,h in _?_[d]=_[h]:delete _[d];for(f=0;f<r;f++)_[f+b]=arguments[f+2];return _.length=w-o+r,u}})}}]);