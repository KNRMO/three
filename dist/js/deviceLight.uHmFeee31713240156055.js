import{a1 as _,a2 as o,a3 as u,a4 as f,a5 as h,aq as g,r as C,o as n,c as v,a,L as r,E as i,a8 as B,G as T,ac as w,aa as l,ab as p,x,ag as S,Y as t}from"./vendor.ZFCO-UKh1713240156055.js";/* empty css                                                                                 */import{_ as b}from"./randomLoading.vue_vue_type_script_setup_true_lang.IkHHhzIT1713240156055.js";import{_ as P}from"./device.vue_vue_type_script_setup_true_lang.fYZU48Pe1713240156055.js";import"./starLoading.410uQtNZ1713240156055.js";import"./bubbleLoading.7IJjH37c1713240156055.js";import"./device.FHBz5bna1713240156055.js";import"./BufferGeometryUtils.aECNjZL61713240156055.js";import"./EffectComposer.xiUeEn_61713240156055.js";import"./UnrealBloomPass.qLVQI2yv1713240156055.js";import"./OutputPass.ivXzF-WV1713240156055.js";const L=t("TresPerspectiveCamera",{position:[5,5,5],fov:45,near:1,far:1e3},null,-1),M=t("TresAmbientLight",{color:"#ffffff",intensity:"40"},null,-1),R=t("TresDirectionalLight",{position:[0,2,-4],intensity:1},null,-1),k=t("TresGridHelper",{position:[0,-1,0]},null,-1),I=_({__name:"deviceLight",setup(y){const c=o({clearColor:"#000",shadows:!0,alpha:!1,shadowMapType:u,outputColorSpace:f,toneMapping:h,disableRender:!0}),d=o({autoRotate:!0}),e=o({threshold:0,strength:.6,radius:.21}),s=new g({title:"参数"});return s.addBinding(e,"threshold",{label:"阈值",min:0,max:1,step:.1}),s.addBinding(e,"strength",{label:"强度",min:0,max:3,step:.2}),s.addBinding(e,"radius",{label:"半径",min:0,max:1,step:.1}),(G,N)=>{const m=C("TresCanvas");return n(),v(T,null,[a(r(b)),a(m,B(c,{"window-size":""}),{default:i(()=>[L,a(r(w),l(p(d)),null,16),M,R,(n(),x(S,null,{default:i(()=>[a(P,l(p(e)),null,16)]),_:1})),k]),_:1},16)],64)}}});export{I as default};