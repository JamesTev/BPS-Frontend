(function(t){function a(a){for(var s,r,c=a[0],o=a[1],l=a[2],u=0,b=[];u<c.length;u++)r=c[u],n[r]&&b.push(n[r][0]),n[r]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);d&&d(a);while(b.length)b.shift()();return i.push.apply(i,l||[]),e()}function e(){for(var t,a=0;a<i.length;a++){for(var e=i[a],s=!0,c=1;c<e.length;c++){var o=e[c];0!==n[o]&&(s=!1)}s&&(i.splice(a--,1),t=r(r.s=e[0]))}return t}var s={},n={app:0},i=[];function r(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=s,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)r.d(e,s,function(a){return t[a]}.bind(null,s));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=a,c=c.slice();for(var l=0;l<c.length;l++)a(c[l]);var d=o;i.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"01d6":function(t,a,e){"use strict";var s=e("e2ed"),n=e.n(s);n.a},"034f":function(t,a,e){"use strict";var s=e("64a9"),n=e.n(s);n.a},"08a1":function(t,a,e){"use strict";var s=e("db4e"),n=e.n(s);n.a},3415:function(t,a,e){},4678:function(t,a,e){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var a=i(t);return e(a)}function i(t){var a=s[t];if(!(a+1)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a}n.keys=function(){return Object.keys(s)},n.resolve=i,t.exports=n,n.id="4678"},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("f751"),e("097d");var s,n,i,r,c=e("2b0e"),o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("Header"),e("tab-view-section"),e("Footer")],1)},l=[],d=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},u=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("header",{staticClass:"header",staticStyle:{color:"white"}},[s("section",{staticClass:"top"},[s("div",{},[s("div",{staticClass:"container"},[s("article",{staticClass:"media"},[s("div",{staticClass:"media-content"},[s("div",{staticClass:"content"},[s("h1",{staticClass:"title is-2"},[t._v("\n          BPS Dashboard \n        ")]),s("p",{staticClass:"subtitle"},[t._v("\n          Borehole pump system\n        ")])])]),s("div",{staticClass:"media-right"},[s("p",{staticClass:"image is-128x128"},[s("img",{attrs:{src:e("d45f")}})])])])])])])])}],b={name:"Header"},f=b,h=(e("a211"),e("2877")),p=Object(h["a"])(f,d,u,!1,null,"565ac516",null),v=p.exports,m=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("b-loading",{attrs:{"is-full-page":!0,active:t.showLoader,"can-cancel":!0},on:{"update:active":function(a){t.showLoader=a}}}),e("b-tabs",{staticClass:"block",attrs:{expanded:""},model:{value:t.activeTab,callback:function(a){t.activeTab=a},expression:"activeTab"}},[e("b-tab-item",{staticClass:"has-text-white",attrs:{label:"Day"}}),e("b-tab-item",{attrs:{label:"Month"}}),e("b-tab-item",{attrs:{label:"Year"}})],1),e("div",{directives:[{name:"show",rawName:"v-show",value:1==t.activeTab,expression:"activeTab == 1"}]},[t.mainDataLoaded?e("div",[e("month-view",{attrs:{globalData:t.bpsData}})],1):t._e()])],1)},j=[],g=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container",staticStyle:{"padding-top":"10px"}},[e("b-field",{attrs:{label:"Choose a month"}},[e("b-select",{staticClass:"title is-3",attrs:{size:"is-medium",placeholder:"Select month"},model:{value:t.targetMonth,callback:function(a){t.targetMonth=a},expression:"targetMonth"}},t._l(t.months,function(a,s){return e("option",{key:s,domProps:{value:a}},[t._v("\n        "+t._s(a)+"\n      ")])}),0)],1),e("b-collapse",{staticClass:"card",attrs:{"aria-id":"contentIdForA11y3"},scopedSlots:t._u([{key:"trigger",fn:function(a){return e("div",{staticClass:"card-header",attrs:{role:"button","aria-controls":"contentIdForA11y3"}},[e("p",{staticClass:"card-header-title"},[t._v("\n                  Overview Stats\n              ")]),e("a",{staticClass:"card-header-icon"},[e("b-icon",{attrs:{icon:a.open?"angle-down":"angle-up"}})],1)])}}])},[e("div",{staticClass:"card-content"},[e("div",{staticClass:"content has-text-centered"},[e("div",{staticClass:"tile is-ancestor",staticStyle:{"padding-top":"10px"}},[e("div",{staticClass:"tile is-4 is-vertical is-parent"},[e("p",{staticClass:"heading is-1"},[t._v("\n                          Total Volume")]),e("p",{staticClass:"title is-1 has-text-primary"},[t._v("\n                      "+t._s(t.totalVolume)+"\n                      ")]),e("p",{staticClass:"subtitle is-6"},[t._v("litres")])]),e("div",{staticClass:"tile is-4 is-vertical is-parent"},[e("p",{staticClass:"heading is-1"},[t._v("\n                          Total Duration")]),e("p",{staticClass:"title is-1 has-text-primary"},[t._v("\n                      "+t._s(t.totalDuration)+"\n                      ")]),e("p",{staticClass:"subtitle is-6"},[t._v("minutes")])]),e("div",{staticClass:"tile is-vertical is-parent"},[e("p",{staticClass:"heading is-1"},[t._v("\n                          Average Flow")]),e("p",{staticClass:"title is-1 has-text-primary"},[t._v("\n                            345\n                      ")]),e("p",{staticClass:"subtitle is-6"},[t._v("ml/sec")])])])])])]),e("div",{staticClass:"tile is-ancestor",staticStyle:{"padding-top":"30px"}},[e("div",{staticClass:"tile is-4 is-vertical is-parent"},[e("div",{staticClass:"tile is-child box"},[e("p",{staticClass:"title is-3"},[t._v("\n          "+t._s(t.targetMonth)+"\n        ")]),e("p",{staticClass:"subtitle is-6"},[t._v("\n          Overview for the month\n        ")]),t._l(t.filteredOverviewItems,function(a){return e("div",{key:a.id},[e("month-view-table-item",{attrs:{"overview-object":a,enabled:t.isLoadingInst,activeObj:t.activeTableItem},on:{"update:enabled":function(a){t.isLoadingInst=a},"get-inst-readings":t.getInstReadings}})],1)}),e("section",[e("b-message",{attrs:{type:"is-dark-blue",active:0==t.filteredOverviewItems.length}},[t._v("\n              No data yet for "+t._s(t.targetMonth)+" :(\n            ")])],1)],2)]),e("div",{staticClass:"tile is-parent"},[e("div",{staticClass:"tile is-child box"},[e("p",{staticClass:"title"},[t._v("\n          Pump Data\n        ")]),e("p",{staticClass:"subtitle is-6"},[t._v("Interpolated volume and flow patterns")]),t.isLoading?t._e():e("line-chart",{ref:"lineChart",attrs:{"chart-data":t.chartData,options:t.options}})],1)])]),e("p",{staticClass:"title"},[t._v("Summary Data by Day")]),e("p",{staticClass:"subtitle is-6"},[t._v("Cumulative volume by day for "+t._s(t.targetMonth))]),t.isLoading?t._e():e("month-bar-chart",{ref:"barChart",attrs:{chartObject:t.barChartData}})],1)},_=[],C=(e("06db"),e("59ad")),w=e.n(C),y=(e("6c7b"),e("20d6"),e("1fca")),D={name:"LineChart",extends:y["b"],props:["options","chartData"],data:function(){return{gradient:null}},created:function(){},mounted:function(){this.renderChart(this.chartData,this.options)}},O=D,k=Object(h["a"])(O,s,n,!1,null,"752789a7",null),x=k.exports,M={name:"MonthBarChart",extends:y["a"],props:["chartObject"],data:function(){return{chartdata:{labels:[],datasets:[{label:"cumulative volume [litres]",backgroundColor:"rgba(38, 239, 120, 0.5)",borderColor:"rgba(38, 239, 120, 1)",borderWidth:"2",data:[]}]},options:{responsive:!0,maintainAspectRatio:!1}}},created:function(){},watch:{chartObject:function(t){this.chartdata.labels=this.chartObject.labels,this.chartdata.datasets[0].data=this.chartObject.data,this.$data._chart.update()}},mounted:function(){this.chartdata.labels=this.chartObject.labels,this.chartdata.datasets[0].data=this.chartObject.data,this.renderChart(this.chartdata,this.options)}},z=M,I=Object(h["a"])(z,i,r,!1,null,"aabed760",null),T=I.exports,S=e("bc3a"),L=e.n(S),$=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"level"},[e("div",{staticClass:"level-left"},[e("div",{staticClass:"level-item"},[e("p",{staticClass:"subtitle is-6"},[e("b-tag",{attrs:{rounded:"",size:"is-medium"}},[t._v("\n          "+t._s(t.overviewObject.formattedDate)+"\n        ")]),e("strong",[t._v(" "+t._s(t.overviewObject.pump_volume))]),t._v("  litres over "),e("strong",[t._v(t._s(t.overviewObject.pump_duration))]),t._v(" mins\n      ")],1)])]),e("div",{staticClass:"level-right"},[e("p",{staticClass:"level-item"},[e("a",{staticClass:"button is-success",attrs:{disabled:t.enabled||t.activeObj.ID==t.overviewObject.ID},on:{click:function(a){return t.$emit("get-inst-readings",t.overviewObject)}}},[t._v("view")])])])])},A=[],E={name:"MonthViewTableItem",props:{overviewObject:Object,enabled:Boolean,activeObj:Object},data:function(){return{}}},F=E,P=(e("01d6"),Object(h["a"])(F,$,A,!1,null,"8cd3a188",null)),V=P.exports,B={name:"MonthView",components:{LineChart:x,MonthBarChart:T,MonthViewTableItem:V},props:{globalData:Array},data:function(){return{showGraph:!0,gradient:null,isLoading:!0,isLoadingInst:!1,targetMonth:"January",activeTableItem:{},barData:[],barLabels:[],months:["January","February","March","April","May","June","July","August","September","October","November","December"],chartData:{labels:[],datasets:[{label:"Volume [l]",borderColor:"#555F80",backgroundColor:"#555F80",data:[],fill:!1},{label:"Flow [ml/s]",borderColor:"#26EF78",backgroundColor:"#26EF78",data:[],fill:!1}]},bpsData:[],options:{responsive:!0,maintainAspectRatio:!1},filteredData:[]}},computed:{totalVolume:function(){return this.isLoading?0:this.filteredData.reduce(function(t,a){return t+a.pump_volume},0)},totalDuration:function(){return this.isLoading?0:this.filteredData.reduce(function(t,a){return t+a.pump_duration},0)},filteredOverviewItems:function(){var t=this;return this.filteredData=this.bpsData.filter(function(a){var e=new Date(a.timestamp);return e.getMonth()==t.months.findIndex(function(a){return a==t.targetMonth})}).map(function(a){return a.formattedDate=t.formatDate(a.timestamp),a}),this.filteredData},barChartData:function(){var t=new Date,a=new Date(t.getFullYear(),t.getMonth()+1,0).getDate(),e={labels:Array(a).fill(1).map(function(t,a){return t+a}),data:new Array(a).fill(0)};return this.filteredOverviewItems.forEach(function(t){var a=new Date(t.timestamp).getDate()-1;e.data[a]=w()(e.data[a])+w()(t.pump_volume)}),console.log("updated bar data"),e}},created:function(){this.bpsData=this.globalData,this.chartData.datasets[0].data=this.bpsData.map(function(t){return t.pump_volume}),this.chartData.datasets[1].data=this.bpsData.map(function(t){return t.avg_flow_rate}),this.formatChartDates(),this.targetMonth=this.months[(new Date).getMonth()],this.isLoading=!1},methods:{formatChartDates:function(){var t=this,a=this.bpsData.map(function(t){return t.timestamp});a=a.map(function(a){return t.formatDate(a)}),this.chartData.labels=a},formatDate:function(t){var a=new Date(t);return a.getDate()+"/"+(a.getMonth()+1)},getInstReadings:function(t){var a=this;this.isLoadingInst=!0,this.activeTableItem=t,L.a.get("http://ec2-52-215-80-237.eu-west-1.compute.amazonaws.com:3010/api/inst_readings/".concat(t.ID)).then(function(t){var e=t.data;console.log(t.data),a.chartData.datasets[0].data=[],a.chartData.datasets[1].data=[],a.chartData.labels=[],e.forEach(function(t){a.chartData.datasets[1].data.push(t.inst_flow_rate),a.chartData.datasets[0].data.push(t.inst_volume),a.chartData.labels.push(t.t_offset)}),a.$refs.lineChart._data._chart.update()}).finally(this.isLoadingInst=!1)}}},J=B,N=(e("08a1"),Object(h["a"])(J,g,_,!1,null,"15241e51",null)),G=N.exports,R={name:"TabViewSection",components:{MonthView:G},data:function(){return{activeTab:1,bpsData:[],mainDataLoaded:!1}},created:function(){var t=this;L.a.get("http://ec2-52-215-80-237.eu-west-1.compute.amazonaws.com:3010/api/overview_data").then(function(a){t.bpsData=a.data.data,t.mainDataLoaded=!0})},computed:{showLoader:function(){return!this.mainDataLoaded}}},q=R,H=Object(h["a"])(q,m,j,!1,null,"deefb1ec",null),Y=H.exports,K=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},U=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"content has-text-centered"},[e("p",[e("strong",[t._v("BPS")]),t._v(" by "),e("a",{attrs:{href:"https://github.com/JamesTev"}},[t._v("James Teversham")]),t._v(". The source code is licensed\n      "),e("a",{attrs:{href:"http://opensource.org/licenses/mit-license.php"}},[t._v("MIT")]),t._v(". The website content\n      is licensed "),e("a",{attrs:{href:"http://creativecommons.org/licenses/by-nc-sa/4.0/"}},[t._v("CC BY NC SA 4.0")]),t._v(".\n    ")])])])}],W={name:"Footer"},Q=W,X=Object(h["a"])(Q,K,U,!1,null,"c088c720",null),Z=X.exports,tt={name:"App",components:{Header:v,TabViewSection:Y,Footer:Z},data:function(){return{ch1:this.$pnGetMessage("ch1",this.receptor)}},mounted:function(){this.$pnSubscribe({channels:["ch1","ch2"],withPresence:!0})},methods:{receptor:function(t){var a=this;this.$snackbar.open({message:"New data received from BPS system",type:"is-success",position:"is-bottom-right",actionText:"View",duration:4e3,indefinite:!1,onAction:function(){a.$toast.open({message:"Action pressed",queue:!1})}}),console.log(t.message)}}},at=tt,et=(e("034f"),Object(h["a"])(at,o,l,!1,null,null,null)),st=et.exports,nt=e("9c6e"),it=e("8a03"),rt=e.n(it);e("15f5"),e("b2a2"),e("3415");c["default"].config.productionTip=!1,c["default"].use(rt.a,{defaultIconPack:"fas"}),c["default"].use(nt["a"],{subscribeKey:"sub-c-353ccd88-5c41-11e9-94f2-3600c194fb1c",publishKey:"pub-c-3a435a19-3855-453a-85c2-6df1ece3f54c"}),new c["default"]({render:function(t){return t(st)}}).$mount("#app")},"61fa":function(t,a,e){},"64a9":function(t,a,e){},a211:function(t,a,e){"use strict";var s=e("61fa"),n=e.n(s);n.a},d45f:function(t,a,e){t.exports=e.p+"img/BPS-logo.cccb42d8.png"},db4e:function(t,a,e){},e2ed:function(t,a,e){}});
//# sourceMappingURL=app.e532fe51.js.map