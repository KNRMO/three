import{az as $,bF as A,k as R,a5 as w,a4 as M,o as c,c as v,E as z,G as F,W as l,aq as g,as as N,cA as D,$ as I,a0 as x,v as E,D as T,a7 as O,K as b,a8 as V,a as B,a9 as q,aa as J,ab as K,ag as W}from"./vendor.3XUacTGZ1710155372121.js";import{l as X,c as Y,d as H,a as Q}from"./utils.6cPnnE9_1710155372121.js";import{m as U}from"./mercator.ciCk-WjI1710155372121.js";import"./Water2.a0xbfP931710155372121.js";import"./Reflector.Z1rO8hVP1710155372121.js";const Z=["properties","renderOrder"],ee=["args"],te=l("TresMeshBasicMaterial",{color:"#2defff",transparent:!0,opacity:.6},null,-1),ae={__name:"chinaMapMesh",async setup(k){let a,r;(()=>{g.prototype.computeBoundsTree=Y,g.prototype.disposeBoundsTree=H,N.prototype.raycast=Q})();const u=U().center([104,37.5]).translate([0,0]),f=([a,r]=$(()=>X("./plugins/simpleGIS/json/china.json","features")),a=await a,r(),a),P={depth:10,bevelEnabled:!1},h=[];(()=>{f.forEach(e=>{e.geometry.coordinates.forEach(n=>{n.forEach(s=>{const d=new D;for(let i=0;i<s.length;i++){const[y,_]=u(s[i]);i===0&&d.moveTo(y,-_),d.lineTo(y,-_)}h.push({shape:d,properties:e.properties})})})})})();const L=new A({color:"#3480C4",linewidth:1,linecap:"round"}),p=R();w(()=>{p.value&&p.value.children.forEach(e=>{e.geometry.computeBoundsTree();const t=[e.material,L];e.material=t})});let o=null;(()=>{const e=document.createElement("div");e.className="tooltip",e.style.border="1px solid white",e.style.position="absolute",e.style.color="white",e.style.padding="0px 6px",e.style.whiteSpace="no-wrap",e.style.visibility="hidden",document.body.appendChild(e),o=e})();const C=(e,t)=>{e.object.material[0].color.set(16711680),o.innerText=e.object.properties.name,o.style.visibility="visible"},j=(e,t)=>{console.log("pointer-leave",e,t),e.material[0].color.set(3010559),o.style.visibility="hidden"},G=(e,t)=>{o.style.left="".concat(t.clientX+6,"px"),o.style.top="".concat(t.clientY+6,"px")},{onLoop:S}=M();return S(()=>{}),(e,t)=>(c(),v("TresGroup",{ref_key:"tgRef",ref:p},[(c(),v(z,null,F(h,(n,s)=>l("TresMesh",{key:"".concat(s),properties:n.properties,renderOrder:s,onPointerEnter:C,onPointerLeave:j,onPointerMove:G},[l("TresExtrudeGeometry",{args:[n.shape,P]},null,8,ee),te],40,Z)),64))],512))}},oe=l("TresPerspectiveCamera",{position:[0,0,166],fov:75,near:.1,far:1e3,"look-at":[0,0,0]},null,-1),de=I({__name:"chinaMap",setup(k){const a=x({clearColor:"#201919"}),r=x({enableDamping:!0,dampingFactor:.05}),{onLoop:m}=M();return m(()=>{}),w(()=>{}),(u,f)=>(c(),E(b(V),O(a,{"window-size":""}),{default:T(()=>[oe,B(b(K),q(J(r)),null,16),(c(),E(W,null,{default:T(()=>[B(ae)]),_:1}))]),_:1},16))}});export{de as default};
