(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ee537a2"],{"1f04":function(t,e,n){},2245:function(t,e,n){"use strict";var a=n("1f04"),s=n.n(a);s.a},"5a6c":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var a=function(){var t=new WebSocket("ws://localhost:8080/v1/ws");return t.onopen=function(){console.log("open")},t.onclose=function(t){},t.onerror=function(t){},t}},7570:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var a=n("b775");function s(){return Object(a["a"])({url:"/ns",method:"get"})}},aa41:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[t._v(" 命名空间 "),n("el-select",{attrs:{placeholder:"请选择"},on:{change:t.onSelectedDrug},model:{value:t.currentNS,callback:function(e){t.currentNS=e},expression:"currentNS"}},t._l(t.nsOptions,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"序号",width:"50"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.$index)+" ")]}}])}),n("el-table-column",{attrs:{align:"center",label:"命名空间",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.NameSpace)+" ")]}}])}),n("el-table-column",{attrs:{label:"名字",width:"150",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.Name))])]}}])}),n("el-table-column",{attrs:{label:"状态",width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{domProps:{innerHTML:t._s(t.getStatus(e.row.IsReady))}}),e.row.IsReady?t._e():n("span",{staticClass:"is-red"},[t._v(t._s(e.row.Message))])]}}])}),n("el-table-column",{attrs:{label:"镜像",width:"230",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("p",{staticStyle:{margin:"0px!important"}},[t._v(t._s(e.row.Images))]),n("p",{staticStyle:{margin:"0px!important"}},[t._v("容器ip:"+t._s(e.row.IPs[0]))])]}}])}),n("el-table-column",{attrs:{label:"主机",width:"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("p",{staticStyle:{margin:"0px!important"}},[t._v(t._s(e.row.NodeName))]),n("p",{staticStyle:{margin:"0px!important"}},[t._v("主机ip:"+t._s(e.row.IPs[1]))])]}}])}),n("el-table-column",{attrs:{"class-name":"status-col",label:"创建时间",width:"170",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.CreateTime)+" ")]}}])}),n("el-table-column",{attrs:{"class-name":"status-col",label:"操作",width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[n("el-button",{attrs:{type:"success",plain:""}},[n("router-link",{attrs:{to:{name:"podlogs",params:{ns:e.row.NameSpace,podName:e.row.Name}}}},[t._v(" 查看日志 ")])],1)],1),n("span",[n("el-button",{attrs:{type:"success",plain:""}},[n("router-link",{attrs:{to:{name:"podshell",params:{ns:e.row.NameSpace,podName:e.row.Name}}}},[t._v(" 远程shell ")])],1)],1)]}}])})],1)],1)},s=[],l=(n("4160"),n("159b"),n("f492")),r=n("5a6c"),o=n("7570"),i={filters:{statusFilter:function(t){var e={published:"success",draft:"gray",deleted:"danger"};return e[t]}},data:function(){return{list:null,listLoading:!0,wsClient:null,currentNS:null,nsOptions:[{value:"all-namespaces",label:"all-namespaces"}],ns:null}},created:function(){var t=this;this.initNSList(),this.fetchData(""),this.wsClient=Object(r["a"])(),this.wsClient.onmessage=function(e){if("ping"!==e.data){var n=JSON.parse(e.data);"Pods"===n.type&&("all-namespaces"===t.currentNS||null===t.currentNS?(t.currentNS="all-namespaces",t.fetchData(t.currentNS)):n.data.ns===t.currentNS&&(t.list=n.data.data),t.$forceUpdate())}}},methods:{fetchData:function(t){var e=this;this.listLoading=!0,Object(l["b"])(t).then((function(t){e.list=t.data.data,e.listLoading=!1}))},initNSList:function(){var t=this;Object(o["a"])().then((function(e){var n=e.data;console.log(n),t.nsOptions=[{value:"all-namespaces",label:"all-namespaces"}],n.forEach((function(e){t.nsOptions.push({value:e,label:e})})),console.log(t.nsOptions)}))},getStatus:function(t){return t?"<p class='is-greed'>Active</p>":"<p class='is-red'>Waiting</p>"},onSelectedDrug:function(t){this.fetchData(t)}}},c=i,u=(n("2245"),n("2877")),d=Object(u["a"])(c,a,s,!1,null,null,null);e["default"]=d.exports},f492:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return l}));var a=n("b775");function s(t){return Object(a["a"])({url:"/pods?ns="+t,method:"get"})}function l(t,e){return Object(a["a"])({url:"/pods/containers?ns="+t+"&podName="+e,method:"get"})}}}]);