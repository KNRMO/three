import{_ as f}from"./pagesShow.vue_vue_type_script_setup_true_lang.uKdIwLlW1710155372121.js";import{$ as m,az as w,be as b,bU as l,bd as h,b0 as o,av as p,a4 as x,o as n,c as y,K as C,v as c,D as u,ag as B,a as k}from"./vendor.3XUacTGZ1710155372121.js";import{S as s}from"./SPE.VmKAFoNZ1710155372121.js";import"./vanilla-307d3a93.esm.V4QMzVEZ1710155372121.js";import"./_commonjsHelpers.5-cIlDoe1710155372121.js";import"./LineSegments2.t1dbbqry1710155372121.js";const E=["object"],F=m({__name:"cloudMesh",async setup(d){let e,t;const{map:a}=([e,t]=w(()=>b({map:"./plugins/digitalCity/image/cloud.png"})),e=await e,t(),e);a.magFilter=l,a.minFilter=l;const r=new s.Group({texture:{value:a},blending:h,depthTest:!1,depthWrite:!1}),_=new s.Emitter({type:s.distributions.BOX,particleCount:26,maxAge:{value:10},position:{value:new o(0,0,0),spread:new o(2e3,100,2e3)},velocity:{value:new o(0,0,30)},wiggle:{spread:10},size:{value:520,spread:[100,220],randomise:!0},drag:{value:220},opacity:{value:[0,1,0],randomise:!0},color:{value:new p(1,1,1),spread:new p(.1,.1,.1)},angle:{value:[0,Math.PI*1/8]}});r.addEmitter(_);const g=r.mesh,{onLoop:v}=x();return v(({dt:i})=>{r.tick(i)}),(i,M)=>(n(),y("primitive",{object:C(g),position:[0,200,0],renderOrder:3e3},null,8,E))}}),G=m({__name:"clouds",setup(d){return(e,t)=>(n(),c(f,null,{ability:u(()=>[(n(),c(B,null,{default:u(()=>[k(F)]),_:1}))]),_:1}))}});export{G as default};
