import{Y as f,Z as M,$ as T,a0 as b,a1 as m,j as a,a4 as x,ae as g,ai as B,aj as y,w as V,ak as v,o as t,s as w,B as k,a5 as C,I as i,a6 as G,U as e,c as r,V as n,a as P,a9 as L}from"./vendor.3bb9812a1702428466319.js";const N=e("TresPerspectiveCamera",{position:[11,11,11],fov:45,near:.1,far:1e3,"look-at":[-8,3,-3]},null,-1),R=e("TresDirectionalLight",{position:[0,8,4],intensity:.2,"cast-shadow":""},null,-1),S=["material"],j=e("TresBoxGeometry",{args:[1,1,1]},null,-1),E=[j],I={key:0,position:[4,0,0]},U=e("TresBoxGeometry",{args:[1,1,1]},null,-1),$=e("TresMeshToonMaterial",{color:"#efefef"},null,-1),z=[U,$],A={key:1,position:[4,1,0]},D=e("TresBoxGeometry",{args:[1,1,1]},null,-1),Y=e("TresMeshToonMaterial",{color:"#efefef"},null,-1),Z=[D,Y],q={key:2,position:[0,-4,-5]},F=e("TresGroup",null,[e("TresMesh",{position:[0,0,0]},[e("TresBoxGeometry",{args:[1,1,1]}),e("TresMeshBasicMaterial",{color:"#efef11"})]),e("TresMesh",{position:[0,2,0]},[e("TresBoxGeometry",{args:[1,1,1]}),e("TresMeshBasicMaterial",{color:"#ef11ef"})])],-1),H=[F],J=e("TresAmbientLight",{intensity:.5},null,-1),Q=f({__name:"theConditional",setup(K){const p=M({clearColor:"#000000",shadows:!0,alpha:!1,shadowMapType:T,outputColorSpace:b,toneMapping:m,useLegacyLights:!1}),s=a({groupVisible:!0,boxPropMaterialVisible:!0}),_=a(null),l=a(!0);let o=null,c=null;x(()=>{o||(o=new g({title:"显隐参数",expanded:!0}),o.addBinding(l,"value",{label:"boxVisible"}),o.addBinding(s.value,"boxPropMaterialVisible"),o.addBinding(s.value,"groupVisible")),c=B().proxy}),y(()=>{o&&(o.dispose(),o=null)}),V(()=>l,(u,d)=>{d!==void 0&&(c.$refs.boxRef.visible=u.value)},{deep:!0});const h=new v({color:"#ff0000"});return(u,d)=>(t(),w(i(G),C(p,{"window-size":""}),{default:k(()=>[N,R,e("TresMesh",{ref_key:"boxRef",ref:_,position:[0,0,0],material:i(h)},E,8,S),s.value.boxPropMaterialVisible?(t(),r("TresMesh",I,z)):n("",!0),s.value.boxPropMaterialVisible?(t(),r("TresMesh",A,Z)):n("",!0),s.value.groupVisible?(t(),r("TresGroup",q,H)):n("",!0),P(i(L)),J]),_:1},16))}});export{Q as default};
