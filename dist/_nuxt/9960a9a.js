(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{221:function(t,r,e){var content=e(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(68).default)("36b005b6",content,!0,{sourceMap:!1})},240:function(t,r,e){"use strict";var n=e(351),o=e(353),c=e(352),l={name:"DefaultLayout",data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:[{icon:"mdi-apps",title:"Welcome",to:"/"},{icon:"mdi-chart-bubble",title:"Inspire",to:"/inspire"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"}}},d=e(79),component=Object(d.a)(l,(function(){var t=this._self._c;return t(n.a,{attrs:{dark:""}},[t(c.a,[t(o.a,[t("Nuxt")],1)],1)],1)}),[],!1,null,null,null);r.a=component.exports},252:function(t,r,e){e(253),t.exports=e(254)},303:function(t,r,e){"use strict";e(221)},304:function(t,r,e){var n=e(67)((function(i){return i[1]}));n.push([t.i,"h1[data-v-35e10596]{font-size:20px}",""]),n.locals={},t.exports=n},321:function(t,r,e){"use strict";e.r(r),e.d(r,"state",(function(){return c})),e.d(r,"getters",(function(){return l})),e.d(r,"mutations",(function(){return d})),e.d(r,"actions",(function(){return f}));var n=e(238),o=e(18),c=(e(80),function(){return{}}),l={},d={},f={makeOrder:function(t,data){var r=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(n.a)(t),e.next=3,r.$axios.post("https://crazy-ant-sheath-dress.cyclic.app/make-order",data);case 3:case"end":return e.stop()}}),e)})))()}}},64:function(t,r,e){"use strict";var n=e(351),o={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},c=(e(303),e(79)),component=Object(c.a)(o,(function(){var t=this,r=t._self._c;return r(n.a,{attrs:{dark:""}},[404===t.error.statusCode?r("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):r("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"35e10596",null);r.a=component.exports}},[[252,10,2,11]]]);