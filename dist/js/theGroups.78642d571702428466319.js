import{Y as a,a2 as r,j as n,o as i,s as c,B as l,I as o,a6 as _,a as p,a9 as h,U as e}from"./vendor.3bb9812a1702428466319.js";const u=e("TresPerspectiveCamera",{position:[5,5,5],fov:75,aspect:1,near:.1,far:1e3},null,-1),d=e("TresAmbientLight",{color:16777215,intensity:.5},null,-1),f=e("TresMesh",{scale:1,position:[-4,0,0],"cast-shadow":""},[e("TresSphereGeometry",{args:[1,500,500]}),e("TresMeshToonMaterial",{color:"#FBB03B"})],-1),T=e("TresMesh",{scale:1,position:[4,0,0],"cast-shadow":""},[e("TresSphereGeometry",{args:[1,500,500]}),e("TresMeshToonMaterial",{color:"teal"})],-1),m=[f,T],B=e("TresDirectionalLight",{position:[0,2,4],intensity:2,"cast-shadow":""},null,-1),g=e("TresAxesHelper",null,null,-1),v=a({__name:"theGroups",setup(w){const{onLoop:t}=r(),s=n();return t(()=>{s.value&&(s.value.rotation.y+=.01)}),(y,M)=>(i(),c(o(_),{clearColor:"#000000","window-size":""},{default:l(()=>[u,p(o(h)),d,e("TresGroup",{ref_key:"groupRef",ref:s,position:[0,-4,-5]},m,512),B,g]),_:1}))}});export{v as default};
