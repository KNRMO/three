import{$ as t,d as e}from"./@tresjs.vs5lCFs11722217438692.js";import{l as n}from"./utils.UPkeWItR1722217438692.js";import{ay as r,B as o,q as s,cF as a}from"./three.ej3u8izI1722217438692.js";import{c as i,d as c,a as p}from"./three-mesh-bvh.iDyulXMj1722217438692.js";import{m as u}from"./d3-geo.bMzlOSe41722217438692.js";import{a4 as l,b as f,a1 as d,o as m,D as h,F as y,V as j,J as g,d as b,r as v,e as w,f as x,g as I,j as _,u as T,aj as E,ak as M,al as k,m as B}from"./@vue.Q1VpS3901722217438692.js";import"./tweakpane.yHWGBmom1722217438692.js";import"./@vueuse.mG9rDBoo1722217438692.js";import"./@fesjs.oJOSvSTI1722217438692.js";import"./vue-router.K-gJhGrY1722217438692.js";import"./lodash-es.nFpJXAf-1722217438692.js";import"./@qlin.yHhFDldE1722217438692.js";import"./pinia.iyC53SMr1722217438692.js";import"./@floating-ui.BPbuo5Gx1722217438692.js";import"./@juggle.7yjBMqoW1722217438692.js";import"./d3-array.AhNJy1f41722217438692.js";const F=["properties","renderOrder"],C=["args"],G=g("TresMeshBasicMaterial",{color:"#2defff",transparent:!0,opacity:.6},null,-1),O={__name:"chinaMapMesh",async setup(e){let b,v;o.prototype.computeBoundsTree=i,o.prototype.disposeBoundsTree=c,s.prototype.raycast=p;const w=u().center([104,37.5]).translate([0,0]),x=([b,v]=l((()=>n("./plugins/simpleGIS/json/china.json","features"))),b=await b,v(),b),I={depth:10,bevelEnabled:!1},_=[];x.forEach((t=>{t.geometry.coordinates.forEach((e=>{e.forEach((e=>{const n=new a;for(let t=0;t<e.length;t++){const[r,o]=w(e[t]);0===t&&n.moveTo(r,-o),n.lineTo(r,-o)}_.push({shape:n,properties:t.properties})}))}))}));const T=new r({color:"#3480C4",linewidth:1,linecap:"round"}),E=f();d((()=>{E.value&&E.value.children.forEach((t=>{t.geometry.computeBoundsTree();const e=[t.material,T];t.material=e}))}));let M=null;(()=>{const t=document.createElement("div");t.className="tooltip",t.style.border="1px solid white",t.style.position="absolute",t.style.color="white",t.style.padding="0px 6px",t.style.whiteSpace="no-wrap",t.style.visibility="hidden",document.body.appendChild(t),M=t})();const k=t=>{t.object.material[0].color.set(16711680),M.innerText=t.object.properties.name,M.style.visibility="visible"},B=t=>{t.eventObject.material[0].color.set(3010559),M.style.visibility="hidden"},O=t=>{M.style.left="".concat(t.clientX+6,"px"),M.style.top="".concat(t.clientY+6,"px")},{onLoop:z}=t();return z((()=>{})),(t,e)=>(m(),h("TresGroup",{ref_key:"tgRef",ref:E},[(m(),h(y,null,j(_,((t,e)=>g("TresMesh",{key:"".concat(e),properties:t.properties,renderOrder:e,onPointerEnter:k,onPointerLeave:B,onPointerMove:O},[g("TresExtrudeGeometry",{args:[t.shape,I]},null,8,C),G],40,F))),64))],512))}},z=P;function L(){const t=["apply","20tgdDBQ","init","call","TresCanvas","table","length","303912JcakGI","1470188xKFyUO","while (true) {}","console","chinaMap","function *\\( *\\)","__proto__","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","448uvtXRN","prototype",'{}.constructor("return this")( )',"#201919","trace","debu","bind","toString","5uMBBMF","stateObject","constructor","action","chain","input","test","info","exception","5931fCZRwr","38776AcwGiQ","32DFdhZO","string","gger","1696602UKybqp","1782578MLzGcx","return (function() ","TresPerspectiveCamera","340417lftUXa","log","warn"];return(L=function(){return t})()}!function(t,e){const n=P,r=L();for(;;)try{if(238572===parseInt(n(175))/1+-parseInt(n(201))/2*(-parseInt(n(174))/3)+parseInt(n(194))/4+-parseInt(n(165))/5*(parseInt(n(179))/6)+-parseInt(n(180))/7+-parseInt(n(176))/8*(parseInt(n(193))/9)+parseInt(n(187))/10*(parseInt(n(183))/11))break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const R=function(){let t=!0;return function(e,n){const r=t?function(){if(n){const t=n[P(186)](e,arguments);return n=null,t}}:function(){};return t=!1,r}}();!function(){R(this,(function(){const t=P,e=new RegExp(t(198)),n=new RegExp(t(200),"i"),r=A(t(188));e.test(r+t(169))&&n[t(171)](r+t(170))?A():r("0")}))()}();const D=function(){let t=!0;return function(e,n){const r=t?function(){if(n){const t=n[P(186)](e,arguments);return n=null,t}}:function(){};return t=!1,r}}();function P(t,e){const n=L();return(P=function(t,e){return n[t-=162]})(t,e)}D(void 0,(function(){const t=P,e=function(){const t=P;let e;try{e=Function(t(181)+t(203)+");")()}catch(n){e=window}return e}(),n=e[t(196)]=e[t(196)]||{},r=[t(184),t(185),t(172),"error",t(173),t(191),t(205)];for(let o=0;o<r.length;o++){const e=D[t(167)][t(202)].bind(D),s=r[o],a=n[s]||e;e[t(199)]=D[t(163)](D),e[t(164)]=a[t(164)][t(163)](a),n[s]=e}}))();const Z=g(z(182),{position:[0,0,166],fov:75,near:.1,far:1e3,"look-at":[0,0,0]},null,-1),q=b({__name:z(197),setup(n){const r=z,o=v({clearColor:r(204)}),s=v({enableDamping:!0,dampingFactor:.05}),{onLoop:a}=t();return a((()=>{})),d((()=>{})),(t,n)=>{const a=w(r(190));return m(),x(a,B(o,{"window-size":""}),{default:I((()=>[Z,_(T(e),E(M(s)),null,16),(m(),x(k,null,{default:I((()=>[_(O)])),_:1}))])),_:1},16)}}});function A(t){function e(t){const n=P;if(typeof t===n(177))return function(t){}.constructor(n(195)).apply("counter");1!==(""+t/t)[n(192)]||t%20==0?function(){return!0}[n(167)](n(162)+n(178))[n(189)](n(168)):function(){return!1}.constructor("debu"+n(178)).apply(n(166)),e(++t)}try{if(t)return e;e(0)}catch(n){}}export{q as default};