import{_}from"./pagesShow.vue_vue_type_script_setup_true_lang.1f4d8feb1703042697396.js";import{Z as c,aA as d,aQ as g,$ as h,ab as y,a4 as b,o,c as k,V as v,a6 as w,J as x,v as i,C as n,aD as f,a as s}from"./vendor.8ca16d431703042697396.js";import{_ as C,a as A}from"./radraB.vue_vue_type_script_setup_true_lang.b9e1b1fe1703042697396.js";import"./vanilla-307d3a93.esm.7234bb031703042697396.js";import"./_commonjsHelpers.725317a41703042697396.js";const B=["position","scale"],S=["map"],p=c({__name:"buildingsMarkA",props:{color:{default:"#fff"},position:{default:[0,0,0]},scale:{default:.1},img:{},offset:{default:[.344,.394]},foremost:{type:Boolean,default:!0}},async setup(l){let t,r;const e=l,{map:m}=([t,r]=d(()=>g({map:e.img})),t=await t,r(),t),u=h({color:e.color,transparent:!0,depthWrite:!1,sizeAttenuation:!1,toneMapped:!1,depthTest:!e.foremost}),a=y(null);return b(()=>{a.value&&(a.value.geometry=a.value.geometry.clone(),a.value.geometry.translate(e.offset[0],e.offset[1],0))}),($,z)=>(o(),k("TresSprite",{ref_key:"tsRef",ref:a,position:e.position,scale:e.scale,renderOrder:"99999"},[v("TresSpriteMaterial",w(u,{map:x(m)}),null,16,S)],8,B))}}),N=c({__name:"buildingsMarkA",setup(l){return(t,r)=>(o(),i(_,{ref:"pagesShowRef"},{ability:n(()=>[(o(),i(f,null,{default:n(()=>[s(p,{position:[210,30,-50],scale:.13,img:"./plugins/digitalCity/image/znsba.png",foremost:!1})]),_:1})),s(C,{size:200,radius:200,position:[210,30,-50],color:"#66ffff"}),(o(),i(f,null,{default:n(()=>[s(p,{position:[-410,19,-260],scale:.13,img:"./plugins/digitalCity/image/znsb-err.png",foremost:!0})]),_:1})),s(A,{position:[-410,19,-260],height:60,color:"#ff0000"})]),_:1},512))}});export{N as default};
