import{$ as S,a0 as o,aF as C,az as x,a1 as k,a2 as v,a3 as P,o as n,v as i,D as _,a7 as d,K as r,a8 as z,a as f,a9 as h,aa as g,ab as R,W as m,X as p,ag as T}from"./vendor.3XUacTGZ1710155372121.js";import{O as $,l as L}from"./util.NCyoE8vX1710155372121.js";import{_ as M}from"./cloudPoints.vue_vue_type_script_setup_true_lang.tRWxbHjU1710155372121.js";import{_ as N,a as O}from"./bubblesEffect.vue_vue_type_script_setup_true_lang.l5Ry7zck1710155372121.js";import{_ as G}from"./reflectorMesh.vue_vue_type_script_setup_true_lang.x_is6x7p1710155372121.js";import"./BufferGeometryUtils.TK2FB94j1710155372121.js";import"./Reflector.Z1rO8hVP1710155372121.js";const J=m("TresPerspectiveCamera",{position:[100,400,500],fov:45,near:.1,far:1e4,"look-at":[0,0,0]},null,-1),V=m("TresAmbientLight",{intensity:.5},null,-1),A={position:[0,120,0]},F="./plugins/medical/model/brainparts.OBJ",U=S({__name:"digitalBrainFloor",async setup(D){let l,u;const w=o({mirrorSize:500,gridSize:490,mirrorColor:"#efefef",divisions:10,colorCenterLine:"#444444",colorGrid:"#888888"}),e=o({color:"#fff",show:!0,opacity:1}),a=new C({title:"参数"});a.addBinding(e,"show",{label:"点云显示"}),a.addBinding(e,"color",{label:"点云颜色"}),a.addBinding(e,"opacity",{label:"点云透明度",min:0,max:1,step:.1});const t=o({color:"#84ccff",show:!0,opacity:1});a.addBinding(t,"show",{label:"脑轮廓显示"}),a.addBinding(t,"color",{label:"脑轮廓颜色"}),a.addBinding(t,"opacity",{label:"脑轮廓透明度",min:0,max:1,step:.1});const s=o({color:"#9e00af",show:!0,opacity:1});a.addBinding(s,"show",{label:"脑组织显示"}),a.addBinding(s,"color",{label:"脑组织颜色"}),a.addBinding(s,"opacity",{label:"脑组织透明度",min:0,max:1,step:.1});const B=new $,c=([l,u]=x(()=>L(F,B)),l=await l,u(),l),b=o({clearColor:"#201919",shadows:!0,alpha:!1,shadowMapType:k,outputColorSpace:v,toneMapping:P}),y=o({autoRotate:!0,autoRotateSpeed:2});return(I,K)=>(n(),i(r(z),d(b,{"window-size":""}),{default:_(()=>[J,f(r(R),h(g(y)),null,16),V,m("TresGroup",A,[e.show?(n(),i(M,d({key:0,model:r(c)},e),null,16,["model"])):p("",!0),(n(),i(T,null,{default:_(()=>[t.show?(n(),i(N,d({key:0,model:r(c)},t),null,16,["model"])):p("",!0)]),_:1})),s.show?(n(),i(O,d({key:1,model:r(c)},s),null,16,["model"])):p("",!0)]),f(G,h(g(w)),null,16)]),_:1},16))}});export{U as default};
