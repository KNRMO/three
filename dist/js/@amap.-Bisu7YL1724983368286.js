var n=i;function o(){var n=["bind","info","debu","1058830LzCpJr","input","counter","gger","keys","defineProperty","length","1182330dGdDgR","action","194795WgBhXB","__proto__","8002oGcmzH","function *\\( *\\)","construct","string","exception","prototype","return (function() ","chain","undefined","while (true) {}","trace","165IczCKm","295962mFIcaR","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","apply","toString","test","7gEKRrB","2190392CoXgsE","71847DlQKdu","log","constructor","8yOGHKW","hasOwnProperty","console","warn","__esModule","default","call","init","get","function"];return(o=function(){return n})()}!function(n,e){for(var a=i,t=o();;)try{if(179669===parseInt(a(127))/1+-parseInt(a(154))/2*(parseInt(a(165))/3)+-parseInt(a(130))/4*(-parseInt(a(152))/5)+-parseInt(a(166))/6+parseInt(a(171))/7*(parseInt(a(172))/8)+parseInt(a(150))/9+-parseInt(a(143))/10)break;t.push(t.shift())}catch(r){t.push(t.shift())}}();var e=function(){var n=!0;return function(o,e){var a=n?function(){if(e){var n=e[i(168)](o,arguments);return e=null,n}}:function(){};return n=!1,a}}();!function(){e(this,(function(){var n=i,o=new RegExp(n(155)),e=new RegExp(n(167),"i"),a=p(n(137));o.test(a+n(161))&&e[n(170)](a+n(144))?p():a("0")}))()}();var a=function(){var n=!0;return function(o,e){var a=n?function(){if(e){var n=e[i(168)](o,arguments);return e=null,n}}:function(){};return n=!1,a}}();function i(n,e){var a=o();return(i=function(n,o){return a[n-=127]})(n,e)}a(void 0,(function(){for(var n=i,o=function(){var n,o=i;try{n=Function(o(160)+'{}.constructor("return this")( ));')()}catch(e){n=window}return n}(),e=o[n(132)]=o[n(132)]||{},t=[n(128),n(133),n(141),"error",n(158),"table",n(164)],r=0;r<t[n(149)];r++){var p=a.constructor[n(159)][n(140)](a),c=t[r],s=e[c]||p;p[n(153)]=a.bind(a),p.toString=s[n(169)].bind(s),e[c]=p}}))();var t=typeof globalThis!==n(162)?globalThis:typeof window!==n(162)?window:"undefined"!=typeof global?global:typeof self!==n(162)?self:{};function r(o){var e=n;return o&&o.__esModule&&Object[e(159)][e(131)][e(136)](o,e(135))?o[e(135)]:o}function p(n){function o(n){var e=i;if(typeof n===e(157))return function(n){}[e(129)](e(163))[e(168)](e(145));1!==(""+n/n)[e(149)]||n%20==0?function(){return!0}.constructor(e(142)+"gger")[e(136)](e(151)):function(){return!1}[e(129)]("debu"+e(146))[e(168)]("stateObject"),o(++n)}try{if(n)return o;o(0)}catch(e){}}var c={exports:{}};const s=r(c.exports=function(){function n(n){var a=[];return n.AMapUI&&a.push(o(n.AMapUI)),n.Loca&&a.push(e(n.Loca)),Promise.all(a)}function o(n){return new Promise((function(o,e){var i=[];if(n.plugins)for(var c=0;c<n.plugins.length;c+=1)-1==t.AMapUI.plugins.indexOf(n.plugins[c])&&i.push(n.plugins[c]);if(r.AMapUI===a.failed)e("前次请求 AMapUI 失败");else if(r.AMapUI===a.notload){r.AMapUI=a.loading,t.AMapUI.version=n.version||t.AMapUI.version,c=t.AMapUI.version;var s=document.body||document.head,l=document.createElement("script");l.type="text/javascript",l.src="https://webapi.amap.com/ui/"+c+"/main.js",l.onerror=function(n){r.AMapUI=a.failed,e("请求 AMapUI 失败")},l.onload=function(){if(r.AMapUI=a.loaded,i.length)window.AMapUI.loadUI(i,(function(){for(var n=0,e=i.length;n<e;n++){var a=i[n].split("/").slice(-1)[0];window.AMapUI[a]=arguments[n]}for(o();p.AMapUI.length;)p.AMapUI.splice(0,1)[0]()}));else for(o();p.AMapUI.length;)p.AMapUI.splice(0,1)[0]()},s.appendChild(l)}else r.AMapUI===a.loaded?n.version&&n.version!==t.AMapUI.version?e("不允许多个版本 AMapUI 混用"):i.length?window.AMapUI.loadUI(i,(function(){for(var n=0,e=i.length;n<e;n++){var a=i[n].split("/").slice(-1)[0];window.AMapUI[a]=arguments[n]}o()})):o():n.version&&n.version!==t.AMapUI.version?e("不允许多个版本 AMapUI 混用"):p.AMapUI.push((function(n){n?e(n):i.length?window.AMapUI.loadUI(i,(function(){for(var n=0,e=i.length;n<e;n++){var a=i[n].split("/").slice(-1)[0];window.AMapUI[a]=arguments[n]}o()})):o()}))}))}function e(n){return new Promise((function(o,e){if(r.Loca===a.failed)e("前次请求 Loca 失败");else if(r.Loca===a.notload){r.Loca=a.loading,t.Loca.version=n.version||t.Loca.version;var i=t.Loca.version,c=t.AMap.version.startsWith("2"),s=i.startsWith("2");if(c&&!s||!c&&s)e("JSAPI 与 Loca 版本不对应！！");else{c=t.key,s=document.body||document.head;var l=document.createElement("script");l.type="text/javascript",l.src="https://webapi.amap.com/loca?v="+i+"&key="+c,l.onerror=function(n){r.Loca=a.failed,e("请求 AMapUI 失败")},l.onload=function(){for(r.Loca=a.loaded,o();p.Loca.length;)p.Loca.splice(0,1)[0]()},s.appendChild(l)}}else r.Loca===a.loaded?n.version&&n.version!==t.Loca.version?e("不允许多个版本 Loca 混用"):o():n.version&&n.version!==t.Loca.version?e("不允许多个版本 Loca 混用"):p.Loca.push((function(n){n?e(n):e()}))}))}if(!window)throw Error("AMap JSAPI can only be used in Browser.");var a,i;(i=a||(a={})).notload="notload",i.loading="loading",i.loaded="loaded",i.failed="failed";var t={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},r={AMap:a.notload,AMapUI:a.notload,Loca:a.notload},p={AMap:[],AMapUI:[],Loca:[]},c=[],s=function(n){"function"==typeof n&&(r.AMap===a.loaded?n(window.AMap):c.push(n))};return{load:function(o){return new Promise((function(e,i){if(r.AMap==a.failed)i("");else if(r.AMap==a.notload){var p=o.key,l=o.version,u=o.plugins;p?(window.AMap&&"lbs.amap.com"!==location.host&&i("禁止多种API加载方式混用"),t.key=p,t.AMap.version=l||t.AMap.version,t.AMap.plugins=u||t.AMap.plugins,r.AMap=a.loading,l=document.body||document.head,window.___onAPILoaded=function(t){if(delete window.___onAPILoaded,t)r.AMap=a.failed,i(t);else for(r.AMap=a.loaded,n(o).then((function(){e(window.AMap)})).catch(i);c.length;)c.splice(0,1)[0]()},(u=document.createElement("script")).type="text/javascript",u.src="https://webapi.amap.com/maps?callback=___onAPILoaded&v="+t.AMap.version+"&key="+p+"&plugin="+t.AMap.plugins.join(","),u.onerror=function(n){r.AMap=a.failed,i(n)},l.appendChild(u)):i("请填写key")}else if(r.AMap==a.loaded)if(o.key&&o.key!==t.key)i("多个不一致的 key");else if(o.version&&o.version!==t.AMap.version)i("不允许多个版本 JSAPI 混用");else{if(p=[],o.plugins)for(l=0;l<o.plugins.length;l+=1)-1==t.AMap.plugins.indexOf(o.plugins[l])&&p.push(o.plugins[l]);p.length?window.AMap.plugin(p,(function(){n(o).then((function(){e(window.AMap)})).catch(i)})):n(o).then((function(){e(window.AMap)})).catch(i)}else if(o.key&&o.key!==t.key)i("多个不一致的 key");else if(o.version&&o.version!==t.AMap.version)i("不允许多个版本 JSAPI 混用");else{var d=[];if(o.plugins)for(l=0;l<o.plugins.length;l+=1)-1==t.AMap.plugins.indexOf(o.plugins[l])&&d.push(o.plugins[l]);s((function(){d.length?window.AMap.plugin(d,(function(){n(o).then((function(){e(window.AMap)})).catch(i)})):n(o).then((function(){e(window.AMap)})).catch(i)}))}}))},reset:function(){delete window.AMap,delete window.AMapUI,delete window.Loca,t={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},r={AMap:a.notload,AMapUI:a.notload,Loca:a.notload},p={AMap:[],AMapUI:[],Loca:[]}}}}());export{s as _,t as c,r as g};
