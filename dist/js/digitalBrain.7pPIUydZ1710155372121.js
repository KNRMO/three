import{$ as g,a0 as s,aF as B,az as b,a1 as y,a2 as S,a3 as C,o as n,v as l,D as _,a7 as d,K as i,a8 as x,a as k,a9 as P,aa as T,ab as v,W as c,X as m,ag as R}from"./vendor.3XUacTGZ1710155372121.js";import{O as M,l as N}from"./util.NCyoE8vX1710155372121.js";import{_ as O}from"./cloudPoints.vue_vue_type_script_setup_true_lang.tRWxbHjU1710155372121.js";import{_ as $,a as z}from"./bubblesEffect.vue_vue_type_script_setup_true_lang.l5Ry7zck1710155372121.js";import"./BufferGeometryUtils.TK2FB94j1710155372121.js";const G=c("TresPerspectiveCamera",{position:[100,400,500],fov:45,near:.1,far:1e4,"look-at":[0,0,0]},null,-1),J=c("TresAmbientLight",{intensity:.5},null,-1),L={position:[0,120,0]},V=c("TresGridHelper",{args:[400,10]},null,-1),A="./plugins/medical/model/brainparts.OBJ",q=g({__name:"digitalBrain",async setup(D){let r,u;const e=s({color:"#fff",show:!0,opacity:1}),a=new B({title:"参数"});a.addBinding(e,"show",{label:"点云显示"}),a.addBinding(e,"color",{label:"点云颜色"}),a.addBinding(e,"opacity",{label:"点云透明度",min:0,max:1,step:.1});const o=s({color:"#84ccff",show:!0,opacity:1});a.addBinding(o,"show",{label:"脑轮廓显示"}),a.addBinding(o,"color",{label:"脑轮廓颜色"}),a.addBinding(o,"opacity",{label:"脑轮廓透明度",min:0,max:1,step:.1});const t=s({color:"#9e00af",show:!0,opacity:1});a.addBinding(t,"show",{label:"脑组织显示"}),a.addBinding(t,"color",{label:"脑组织颜色"}),a.addBinding(t,"opacity",{label:"脑组织透明度",min:0,max:1,step:.1});const f=new M,p=([r,u]=b(()=>N(A,f)),r=await r,u(),r),h=s({clearColor:"#000",shadows:!0,alpha:!1,shadowMapType:y,outputColorSpace:S,toneMapping:C}),w=s({autoRotate:!0,autoRotateSpeed:2});return(F,H)=>(n(),l(i(x),d(h,{"window-size":""}),{default:_(()=>[G,k(i(v),P(T(w)),null,16),J,c("TresGroup",L,[e.show?(n(),l(O,d({key:0,model:i(p)},e),null,16,["model"])):m("",!0),(n(),l(R,null,{default:_(()=>[o.show?(n(),l($,d({key:0,model:i(p)},o),null,16,["model"])):m("",!0)]),_:1})),t.show?(n(),l(z,d({key:1,model:i(p)},t),null,16,["model"])):m("",!0)]),V]),_:1},16))}});export{q as default};
