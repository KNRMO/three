import{r as t,d as e}from"./@tresjs.toBU36DO1720750938663.js";import{l as n}from"./utils.w2KUWsKA1720750938663.js";import{av as o,B as r,r as s,cF as a}from"./three.c_4mN3mZ1720750938663.js";import{c as i,d as c,a as p}from"./three-mesh-bvh.q2XDEzjn1720750938663.js";import{m as l}from"./d3-geo.ve_S5__G1720750938663.js";import{a3 as u,b as f,a2 as d,o as m,D as h,F as y,V as j,J as g,d as v,r as b,e as w,f as x,g as I,j as T,u as _,aj as E,ak as M,al as k,m as B}from"./@vue.ApkyOKE71720750938663.js";import"./@vueuse.NiHn2U_k1720750938663.js";import"./tweakpane.yHWGBmom1720750938663.js";import"./@fesjs.hPzU4o281720750938663.js";import"./vue-router.cSmWJIl41720750938663.js";import"./lodash-es.nFpJXAf-1720750938663.js";import"./@qlin.yHhFDldE1720750938663.js";import"./pinia.1mscjV6X1720750938663.js";import"./@floating-ui.BPbuo5Gx1720750938663.js";import"./@juggle.7yjBMqoW1720750938663.js";import"./d3-array.AhNJy1f41720750938663.js";const C=["properties","renderOrder"],z=["args"],F=g("TresMeshBasicMaterial",{color:"#2defff",transparent:!0,opacity:.6},null,-1),P={__name:"chinaMapMesh",async setup(e){let v,b;r.prototype.computeBoundsTree=i,r.prototype.disposeBoundsTree=c,s.prototype.raycast=p;const w=l().center([104,37.5]).translate([0,0]),x=([v,b]=u((()=>n("./plugins/simpleGIS/json/china.json","features"))),v=await v,b(),v),I={depth:10,bevelEnabled:!1},T=[];x.forEach((t=>{t.geometry.coordinates.forEach((e=>{e.forEach((e=>{const n=new a;for(let t=0;t<e.length;t++){const[o,r]=w(e[t]);0===t&&n.moveTo(o,-r),n.lineTo(o,-r)}T.push({shape:n,properties:t.properties})}))}))}));const _=new o({color:"#3480C4",linewidth:1,linecap:"round"}),E=f();d((()=>{E.value&&E.value.children.forEach((t=>{t.geometry.computeBoundsTree();const e=[t.material,_];t.material=e}))}));let M=null;(()=>{const t=document.createElement("div");t.className="tooltip",t.style.border="1px solid white",t.style.position="absolute",t.style.color="white",t.style.padding="0px 6px",t.style.whiteSpace="no-wrap",t.style.visibility="hidden",document.body.appendChild(t),M=t})();const k=(t,e)=>{t.object.material[0].color.set(16711680),M.innerText=t.object.properties.name,M.style.visibility="visible"},B=(t,e)=>{console.log("pointer-leave",t,e),t.material[0].color.set(3010559),M.style.visibility="hidden"},P=(t,e)=>{M.style.left="".concat(e.clientX+6,"px"),M.style.top="".concat(e.clientY+6,"px")},{onLoop:Z}=t();return Z((()=>{})),(t,e)=>(m(),h("TresGroup",{ref_key:"tgRef",ref:E},[(m(),h(y,null,j(T,((t,e)=>g("TresMesh",{key:"".concat(e),properties:t.properties,renderOrder:e,onPointerEnter:k,onPointerLeave:B,onPointerMove:P},[g("TresExtrudeGeometry",{args:[t.shape,I]},null,8,z),F],40,C))),64))],512))}},Z=J;!function(t,e){const n=J,o=D();for(;;)try{if(641368===parseInt(n(376))/1*(parseInt(n(379))/2)+-parseInt(n(407))/3*(parseInt(n(394))/4)+parseInt(n(412))/5*(-parseInt(n(408))/6)+-parseInt(n(396))/7+parseInt(n(402))/8+parseInt(n(395))/9*(-parseInt(n(385))/10)+parseInt(n(378))/11)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const A=function(){let t=!0;return function(e,n){const o=t?function(){if(n){const t=n.apply(e,arguments);return n=null,t}}:function(){};return t=!1,o}}();!function(){A(this,(function(){const t=J,e=new RegExp(t(390)),n=new RegExp(t(383),"i"),o=N(t(398));e[t(404)](o+t(389))&&n[t(404)](o+t(397))?N():o("0")}))()}();const G=function(){let t=!0;return function(e,n){const o=t?function(){if(n){const t=n[J(380)](e,arguments);return n=null,t}}:function(){};return t=!1,o}}();function J(t,e){const n=D();return(J=function(t,e){return n[t-=371]})(t,e)}G(void 0,(function(){const t=J,e=function(){const t=J;let e;try{e=Function(t(374)+t(403)+");")()}catch(n){e=window}return e}(),n=e[t(382)]=e[t(382)]||{},o=[t(392),t(406),"info",t(411),t(393),t(409),"trace"];for(let r=0;r<o[t(386)];r++){const e=G[t(399)][t(375)][t(391)](G),s=o[r],a=n[s]||e;e.__proto__=G[t(391)](G),e[t(410)]=a[t(410)][t(391)](a),n[s]=e}}))();const S=g(Z(405),{position:[0,0,166],fov:75,near:.1,far:1e3,"look-at":[0,0,0]},null,-1);function D(){const t=["error","380825jdArfa","debu","string","gger","return (function() ","prototype","19633aCzJFd","#201919","24127378jAWluM","88hsndxs","apply","chinaMap","console","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","action","40fBbxEM","length","stateObject","call","chain","function *\\( *\\)","bind","log","exception","4QwsClM","1041597ZHTPJH","6955088NMqWYl","input","init","constructor","counter","while (true) {}","243808IevNvm",'{}.constructor("return this")( )',"test","TresPerspectiveCamera","warn","1827051ZZVBeD","30yicSkG","table","toString"];return(D=function(){return t})()}const L=v({__name:Z(381),setup(n){const o=b({clearColor:Z(377)}),r=b({enableDamping:!0,dampingFactor:.05}),{onLoop:s}=t();return s((()=>{})),d((()=>{})),(t,n)=>{const s=w("TresCanvas");return m(),x(s,B(o,{"window-size":""}),{default:I((()=>[S,T(_(e),E(M(r)),null,16),(m(),x(k,null,{default:I((()=>[T(P)])),_:1}))])),_:1},16)}}});function N(t){function e(t){const n=J;if(typeof t===n(372))return function(t){}.constructor(n(401)).apply(n(400));1!==(""+t/t)[n(386)]||t%20==0?function(){return!0}[n(399)](n(371)+n(373))[n(388)](n(384)):function(){return!1}[n(399)](n(371)+n(373))[n(380)](n(387)),e(++t)}try{if(t)return e;e(0)}catch(n){}}export{L as default};