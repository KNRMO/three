import{_ as w}from"./pagesShow.vue_vue_type_script_setup_true_lang.Cmpz0nYe1708332503890.js";import{$ as p,aj as x,b9 as E,aY as b,av as h,aP as o,am as s,a4 as y,o as r,c as g,K as B,v as n,D as l,ai as C,a as S}from"./vendor.CMTrv--J1708332503890.js";import{S as t}from"./SPE.a6vB5zoJ1708332503890.js";import"./vanilla-307d3a93.esm.cNLN8yUn1708332503890.js";import"./_commonjsHelpers.5-cIlDoe1708332503890.js";import"./LineSegments2.f1g-0tTA1708332503890.js";const j=["object"],k=p({__name:"fireBall",async setup(c){let e,a;const{map:u}=([e,a]=x(()=>E({map:"./plugins/digitalCity/image/sprite-explosion.png"})),e=await e,a(),e),i=new t.Group({texture:{value:u,frames:new b(5,5),loop:1},depthTest:!0,depthWrite:!1,blending:h,scale:600}),m=new t.Emitter({particleCount:20,type:t.distributions.SPHERE,position:{radius:1},maxAge:{value:2},activeMultiplier:20,velocity:{value:new o(10)},size:{value:[20,100]},color:{value:[new s(.5,.1,.05),new s(.2,.2,.2)]},opacity:{value:[.5,.35,.1,0]}}),_=new t.Emitter({particleCount:50,position:{spread:new o(5,5,5)},velocity:{spread:new o(30),distribution:t.distributions.SPHERE},size:{value:[2,20,20,20]},maxAge:{value:2},activeMultiplier:2e3,opacity:{value:[.5,.25,0,0]}});i.addEmitter(m).addEmitter(_);const d=i.mesh,{onLoop:v}=y();return v(({dt:f})=>{i.tick()}),(f,A)=>(r(),g("primitive",{object:B(d),position:[-130,60,20],renderOrder:3e3},null,8,j))}}),H=p({__name:"fireBall",setup(c){return(e,a)=>(r(),n(w,null,{ability:l(()=>[(r(),n(C,null,{default:l(()=>[S(k)]),_:1}))]),_:1}))}});export{H as default};
