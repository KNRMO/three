import{a1 as s,ak as l,aD as u,bj as i,cy as c,aI as o,c0 as m}from"./vendor.-IAgWGvB1715174954944.js";const f=s({__name:"skyBoxDmesh",props:{texture:{},background:{type:Boolean,default:!0},environment:{type:Boolean,default:!0}},async setup(p){let a,t;const n=p,{scene:r}=l(),{map:e}=([a,t]=u(()=>i({map:n.texture})),a=await a,t(),a);return e.wrapS=e.wrapT=c,e.generateMipmaps=!1,e.magFilter=o,e.minFilter=o,e.mapping=m,r.value.environment=n.environment?e:null,r.value.background=n.background?e:null,(_,g)=>null}});export{f as _};
