var n=o;function o(n,e){var i=a();return(o=function(n,o){return i[n-=468]})(n,e)}!function(n,e){for(var i=o,t=a();;)try{if(142972===parseInt(i(482))/1+-parseInt(i(477))/2*(-parseInt(i(476))/3)+-parseInt(i(490))/4*(-parseInt(i(510))/5)+parseInt(i(478))/6+-parseInt(i(471))/7*(-parseInt(i(508))/8)+parseInt(i(501))/9+-parseInt(i(494))/10*(parseInt(i(483))/11))break;t.push(t.shift())}catch(r){t.push(t.shift())}}();var e=function(){var n=!0;return function(e,a){var i=n?function(){if(a){var n=a[o(470)](e,arguments);return a=null,n}}:function(){};return n=!1,i}}();function a(){var n=["call","__proto__","action","__esModule","928sgvdGw","gger","134570ihvQGq","construct","error","apply","1477vJvuHL","warn","bind","counter","console","69uXpOrw","3818joQXyU","1388148PmQtkC","length","undefined","while (true) {}","71510lshceY","1372118gVbpsM","toString","table","stateObject","constructor","string","hasOwnProperty","28wxsglU","function *\\( *\\)","get","test","40SGDMWy","log","defineProperty","input","default","init","prototype","740475wRnPPw","debu","keys"];return(a=function(){return n})()}!function(){e(this,(function(){var n=o,e=new RegExp(n(491)),a=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),i=p(n(499));e[n(493)](i+"chain")&&a[n(493)](i+n(497))?p():i("0")}))()}();var i=function(){var n=!0;return function(e,a){var i=n?function(){if(a){var n=a[o(470)](e,arguments);return a=null,n}}:function(){};return n=!1,i}}();i(void 0,(function(){var n,e=o;try{n=Function('return (function() {}.constructor("return this")( ));')()}catch(l){n=window}for(var a=n.console=n[e(475)]||{},t=[e(495),e(472),"info",e(469),"exception",e(485),"trace"],r=0;r<t[e(479)];r++){var p=i[e(487)][e(500)][e(473)](i),s=t[r],c=a[s]||p;p[e(505)]=i[e(473)](i),p[e(484)]=c.toString[e(473)](c),a[s]=p}}))();var t=typeof globalThis!==n(480)?globalThis:typeof window!==n(480)?window:typeof global!==n(480)?global:"undefined"!=typeof self?self:{};function r(o){var e=n;return o&&o[e(507)]&&Object[e(500)][e(489)].call(o,e(498))?o.default:o}function p(n){function e(n){var a=o;if(typeof n===a(488))return function(n){}[a(487)](a(481))[a(470)](a(474));1!==(""+n/n)[a(479)]||n%20==0?function(){return!0}[a(487)](a(502)+"gger")[a(504)](a(506)):function(){return!1}[a(487)](a(502)+a(509)).apply(a(486)),e(++n)}try{if(n)return e;e(0)}catch(a){}}var s={exports:{}};const c=r(s.exports=function(){function n(n){var a=[];return n.AMapUI&&a.push(o(n.AMapUI)),n.Loca&&a.push(e(n.Loca)),Promise.all(a)}function o(n){return new Promise((function(o,e){var i=[];if(n.plugins)for(var s=0;s<n.plugins.length;s+=1)-1==t.AMapUI.plugins.indexOf(n.plugins[s])&&i.push(n.plugins[s]);if(r.AMapUI===a.failed)e("前次请求 AMapUI 失败");else if(r.AMapUI===a.notload){r.AMapUI=a.loading,t.AMapUI.version=n.version||t.AMapUI.version,s=t.AMapUI.version;var c=document.body||document.head,l=document.createElement("script");l.type="text/javascript",l.src="https://webapi.amap.com/ui/"+s+"/main.js",l.onerror=function(n){r.AMapUI=a.failed,e("请求 AMapUI 失败")},l.onload=function(){if(r.AMapUI=a.loaded,i.length)window.AMapUI.loadUI(i,(function(){for(var n=0,e=i.length;n<e;n++){var a=i[n].split("/").slice(-1)[0];window.AMapUI[a]=arguments[n]}for(o();p.AMapUI.length;)p.AMapUI.splice(0,1)[0]()}));else for(o();p.AMapUI.length;)p.AMapUI.splice(0,1)[0]()},c.appendChild(l)}else r.AMapUI===a.loaded?n.version&&n.version!==t.AMapUI.version?e("不允许多个版本 AMapUI 混用"):i.length?window.AMapUI.loadUI(i,(function(){for(var n=0,e=i.length;n<e;n++){var a=i[n].split("/").slice(-1)[0];window.AMapUI[a]=arguments[n]}o()})):o():n.version&&n.version!==t.AMapUI.version?e("不允许多个版本 AMapUI 混用"):p.AMapUI.push((function(n){n?e(n):i.length?window.AMapUI.loadUI(i,(function(){for(var n=0,e=i.length;n<e;n++){var a=i[n].split("/").slice(-1)[0];window.AMapUI[a]=arguments[n]}o()})):o()}))}))}function e(n){return new Promise((function(o,e){if(r.Loca===a.failed)e("前次请求 Loca 失败");else if(r.Loca===a.notload){r.Loca=a.loading,t.Loca.version=n.version||t.Loca.version;var i=t.Loca.version,s=t.AMap.version.startsWith("2"),c=i.startsWith("2");if(s&&!c||!s&&c)e("JSAPI 与 Loca 版本不对应！！");else{s=t.key,c=document.body||document.head;var l=document.createElement("script");l.type="text/javascript",l.src="https://webapi.amap.com/loca?v="+i+"&key="+s,l.onerror=function(n){r.Loca=a.failed,e("请求 AMapUI 失败")},l.onload=function(){for(r.Loca=a.loaded,o();p.Loca.length;)p.Loca.splice(0,1)[0]()},c.appendChild(l)}}else r.Loca===a.loaded?n.version&&n.version!==t.Loca.version?e("不允许多个版本 Loca 混用"):o():n.version&&n.version!==t.Loca.version?e("不允许多个版本 Loca 混用"):p.Loca.push((function(n){n?e(n):e()}))}))}if(!window)throw Error("AMap JSAPI can only be used in Browser.");var a,i;(i=a||(a={})).notload="notload",i.loading="loading",i.loaded="loaded",i.failed="failed";var t={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},r={AMap:a.notload,AMapUI:a.notload,Loca:a.notload},p={AMap:[],AMapUI:[],Loca:[]},s=[],c=function(n){"function"==typeof n&&(r.AMap===a.loaded?n(window.AMap):s.push(n))};return{load:function(o){return new Promise((function(e,i){if(r.AMap==a.failed)i("");else if(r.AMap==a.notload){var p=o.key,l=o.version,u=o.plugins;p?(window.AMap&&"lbs.amap.com"!==location.host&&i("禁止多种API加载方式混用"),t.key=p,t.AMap.version=l||t.AMap.version,t.AMap.plugins=u||t.AMap.plugins,r.AMap=a.loading,l=document.body||document.head,window.___onAPILoaded=function(t){if(delete window.___onAPILoaded,t)r.AMap=a.failed,i(t);else for(r.AMap=a.loaded,n(o).then((function(){e(window.AMap)})).catch(i);s.length;)s.splice(0,1)[0]()},(u=document.createElement("script")).type="text/javascript",u.src="https://webapi.amap.com/maps?callback=___onAPILoaded&v="+t.AMap.version+"&key="+p+"&plugin="+t.AMap.plugins.join(","),u.onerror=function(n){r.AMap=a.failed,i(n)},l.appendChild(u)):i("请填写key")}else if(r.AMap==a.loaded)if(o.key&&o.key!==t.key)i("多个不一致的 key");else if(o.version&&o.version!==t.AMap.version)i("不允许多个版本 JSAPI 混用");else{if(p=[],o.plugins)for(l=0;l<o.plugins.length;l+=1)-1==t.AMap.plugins.indexOf(o.plugins[l])&&p.push(o.plugins[l]);p.length?window.AMap.plugin(p,(function(){n(o).then((function(){e(window.AMap)})).catch(i)})):n(o).then((function(){e(window.AMap)})).catch(i)}else if(o.key&&o.key!==t.key)i("多个不一致的 key");else if(o.version&&o.version!==t.AMap.version)i("不允许多个版本 JSAPI 混用");else{var d=[];if(o.plugins)for(l=0;l<o.plugins.length;l+=1)-1==t.AMap.plugins.indexOf(o.plugins[l])&&d.push(o.plugins[l]);c((function(){d.length?window.AMap.plugin(d,(function(){n(o).then((function(){e(window.AMap)})).catch(i)})):n(o).then((function(){e(window.AMap)})).catch(i)}))}}))},reset:function(){delete window.AMap,delete window.AMapUI,delete window.Loca,t={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},r={AMap:a.notload,AMapUI:a.notload,Loca:a.notload},p={AMap:[],AMapUI:[],Loca:[]}}}}());export{c as _,t as c,r as g};
