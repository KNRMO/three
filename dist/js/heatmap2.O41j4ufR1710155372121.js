import{aQ as v,aj as N,k as m,$ as U,bZ as V,bh as $,as as w,a5 as F,o as y,c as _,W as M,K as r,E as P,aq as D,at as H,b1 as O,_ as k,a6 as G,aN as R,I as X,J as Y,t as z,Y as W,az as q,a0 as S,aF as J,a as p,D as K,a7 as B}from"./vendor.3XUacTGZ1710155372121.js";import{_ as Q,l as Z,b as ee}from"./pagesShow.vue_vue_type_script_setup_true_lang.uKdIwLlW1710155372121.js";import{h as te}from"./heatmap.Z0XSTI8d1710155372121.js";import{r as ae,c as oe,d as ne,a as se}from"./utils.6cPnnE9_1710155372121.js";import{m as ie}from"./BufferGeometryUtils.TK2FB94j1710155372121.js";import"./vanilla-307d3a93.esm.V4QMzVEZ1710155372121.js";import"./_commonjsHelpers.5-cIlDoe1710155372121.js";import"./LineSegments2.t1dbbqry1710155372121.js";import"./Water2.a0xbfP931710155372121.js";import"./Reflector.Z1rO8hVP1710155372121.js";const T=36,f=-10,C=(o,e)=>o.getValueAt(e)+f,re=(o,e)=>{if(!e){let t=0;for(e=[];t<1e3;)e.push({x:v.randInt(1,o._config.width),y:v.randInt(1,o._config.height),value:v.randInt(f,T)}),t++}o.setData({max:T,min:f,data:e})},ce=(o=250,e=250,t=!0)=>{const a=document.createElement("heatmap-canvas");return a.style.position="absolute",t||(a.style.display="none"),a.style.top="0",a.style.left="0",document.body.appendChild(a),te.create({container:a,width:o,height:e,blur:".8",radius:10,gradient:{.25:"rgb(0,0,255)",.55:"rgb(0,255,0)",.85:"yellow",1:"rgb(255,0,0)"}})},I=N("buildingsHeatmap",()=>{const o=m(!1),e=m(0);function t(n){o.value=n}function a(n){e.value=n}return{showDiv:o,temperature:e,setShowDiv:t,setTemperature:a}}),le=["object","rotation-x"],ue=["object"],pe=U({__name:"buildingsHeatmap",props:{model:{},opacity:{default:1}},setup(o){(()=>{D.prototype.computeBoundsTree=oe,D.prototype.disposeBoundsTree=ne,w.prototype.raycast=se})();const t=o,a=ce();re(a);const n=new V(a._renderer.canvas);n.needsUpdate=!0;const c=s=>new H({vertexShader:"\n		varying vec2 vUv;\n		void main() {\n			gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n			vUv = uv;\n		}\n		",fragmentShader:"\n		uniform sampler2D heightMap;\n		uniform float uOpacity;\n		varying vec2 vUv;\n		void main() {\n			gl_FragColor = vec4(texture2D(heightMap, vUv.xy).rgb, uOpacity);\n    }\n		",uniforms:{uOpacity:{value:t.opacity},heightMap:{type:"t",value:s}},depthWrite:!0,depthTest:!0,transparent:!0,side:O}),i=t.model.city.clone();delete i.geometry.attributes.normal,delete i.geometry.attributes.uv;const g=i.geometry.clone().applyMatrix4(i.matrix),l=t.model.land.clone();delete l.geometry.attributes.normal;const b=l.geometry.clone().applyMatrix4(l.matrix),u=ie([g,b]);u.applyMatrix4(new $().makeRotationX(Math.PI/2)),ae(u),u.computeBoundsTree();const x=c(n),E=new w(u,x);F(()=>{t.opacity&&(x.uniforms.uOpacity.value=t.opacity)});const d=I(),j=s=>{if(s){const h={x:s.uv.x*a._config.width,y:(1-s.uv.y)*a._config.height};console.log("数值：",s),console.log("数值———：",C(a,h)),d.setTemperature(C(a,h))}},L=s=>{s&&d.$patch({showDiv:!0})},A=s=>{s&&d.setShowDiv(!1)};return(s,h)=>(y(),_(P,null,[M("primitive",{object:r(E),"rotation-x":-Math.PI/2,onPointerMove:j,onPointerEnter:L,onPointerLeave:A},null,40,le),M("primitive",{object:t.model.model.children[0].clone()},null,8,ue)],64))}}),me={__name:"dataDiv",setup(o){const e=I(),t=m({top:0,left:0});function a(n){t.value.left=n.clientX+5+"px",t.value.top=n.clientY-20+"px"}return G(()=>{window.addEventListener("mousemove",a)}),R(()=>{window.removeEventListener("mousemove",a)}),(n,c)=>X((y(),_("div",{class:"title",style:W(t.value)},"温度："+z(r(e).temperature)+"℃ ",5)),[[Y,r(e).showDiv]])}},de=k(me,[["__scopeId","data-v-fac3e7fd"]]),De=U({__name:"heatmap2",async setup(o){let e,t;const a=m(!1),n=([e,t]=q(()=>Z()),e=await e,t(),e);a.value=!0;const c=S({width:1,color:"#000",opacity:1,show:!0}),i=S({opacity:.9});return new J({title:"参数",expanded:!0}).addBinding(i,"opacity",{label:"透明度",min:0,max:1,step:.1}),(l,b)=>(y(),_(P,null,[p(Q,{showBuildings:!1,autoRotate:!1},{ability:K(()=>[p(pe,B({model:r(n)},i),null,16,["model"]),p(ee,B(c,{builds:r(n).city}),null,16,["builds"])]),_:1}),p(de)],64))}});export{De as default};
