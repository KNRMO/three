import{a0 as l,aD as u,bd as m,bO as d,b3 as e,az as _,o as v,c as b,K as w,a8 as g}from"./vendor.4LEatSF51711499076379.js";import{S as a}from"./SPE.6viNRs8p1711499076379.js";const k=["object"],B=l({__name:"smokeA",async setup(f){let t,r;const{map:n}=([t,r]=u(()=>m({map:"./plugins/digitalCity/image/smokeparticle.png"})),t=await t,r(),t),o=new a.Group({texture:{value:n},blending:d,depthTest:!0,depthWrite:!1}),i=new a.Emitter({type:a.distributions.BOX,particleCount:100,maxAge:{value:4},position:{value:new e(0,0,0),spread:new e(2,0,2),radius:1},velocity:{value:new e(0,16,0),spread:new e(12,40,12),distribution:a.distributions.BOX},size:{value:[200,100,100],spread:[14,10,8],randomise:!0},acceleration:{value:new e(0,10,0)},angle:{value:0,spread:120},opacity:{value:[.5,.1],spread:[.1,0],randomise:!0},color:{value:new _("#333333")}});o.addEmitter(i);const p=o.mesh,{onLoop:c}=g();return c(({dt:s})=>{o.tick(s)}),(s,h)=>(v(),b("primitive",{object:w(p),position:[-130,26,20],renderOrder:3e3},null,8,k))}});export{B as _};