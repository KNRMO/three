import{Z as L,aB as N,aC as P,aN as S,aR as p,a4 as A,a3 as E,aM as G,o as R,c as z,J as D}from"./vendor.d621771f1703640571700.js";import{r as F,u as H}from"./device.aec8ab111703640571700.js";const J=["object"],Z=L({__name:"device",props:{threshold:{default:0},strength:{default:.972},radius:{default:.21}},async setup(_){let l,d;const t=_,{nodes:r}=([l,d]=N(()=>P("./plugins/industry4/model/modelDraco.glb",{draco:!0})),l=await l,d(),l),v=F(r.Sketchfab_model),{camera:h,renderer:M,scene:o,sizes:f}=S();let n=null,u=null,a=null;const g=new p({color:"black"});A(()=>{if(h.value){o.value.add(v);const{finalComposer:e,effectComposer:s,bloomPass:x}=H(o.value,h.value,M.value,f.width.value,f.height.value);n=e,u=s,a=x,a.threshold=t.threshold,a.strength=t.strength,a.radius=t.radius}t.threshold&&(a.threshold=t.threshold),t.strength&&(a.strength=t.strength),t.radius&&(a.radius=t.radius)});const i={},k=e=>{(e.isMesh||e.type==="GridHelper"||e.name==="reflectorShaderMesh")&&(i[e.uuid]=e.material,e.material=g)},B=e=>{i[e.uuid]&&(e.material=i[e.uuid],delete i[e.uuid])},{onLoop:b,onAfterLoop:C}=E();let m=.03,c=r.Sketchfab_model.getObjectByName("canister_turbine_011_Nickel-Light-PBR_0"),w=c.material.clone(),y=new p({color:new G("red"),transparent:!0,opacity:1});return b(({elapsed:e})=>{r.hull_turbine&&(r.hull_turbine.rotation.x+=m,r.blades_turbine_003.rotation.x+=m),Math.floor(e)%2?c.material=w:c.material=y}),C(({elapsed:e})=>{u&&(o.value.traverse(s=>{k(s)}),u.render(e)),n&&(o.value.traverse(s=>{B(s)}),n.render(e))}),(e,s)=>(R(),z("primitive",{object:D(r).Sketchfab_model},null,8,J))}});export{Z as _};
