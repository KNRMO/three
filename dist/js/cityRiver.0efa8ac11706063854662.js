import{_ as u}from"./pagesShow.vue_vue_type_script_setup_true_lang.95947bf71706063854662.js";import{_ as h}from"./threeWater2.vue_vue_type_script_setup_true_lang.b3dedaa71706063854662.js";import{Z as p,ai as w,aj as g,$ as v,am as b,o,c as y,V as x,J as m,v as n,C as l,a as _,a6 as B,ah as f,ab as C,a4 as R,a3 as $}from"./vendor.22b2fd481706063854662.js";import"./vanilla-307d3a93.esm.076640a91706063854662.js";import"./_commonjsHelpers.725317a41706063854662.js";import"./LineSegments2.895e6aeb1706063854662.js";import"./Water2.cf0687881706063854662.js";import"./Reflector.bb83349c1706063854662.js";const V={position:[0,0,-2]},j=["object"],k=p({__name:"index",async setup(d){let e,t;const{scene:r,nodes:a}=([e,t]=w(()=>g("https://a.amap.com/jsapi_demos/static/gltf-online/shanghai/scene.gltf")),e=await e,t(),e);r.renderOrder=9999,a.mesh_0.material.transparent=!0,a.mesh_0.material.depthWrite=!0,a.mesh_0.material.depthTest=!0,a.mesh_0.material.opacity=.7;const s=v({color:"#f857cc",scale:3.1,modelVisible:!0}),i=new b({title:"河流参数",expanded:!0});return i.addBinding(s,"modelVisible",{label:"模型显示"}).on("change",c=>{a.mesh_0.visible=c.value}),i.addBinding(s,"scale",{label:"分辨率",min:.1,max:10,step:.1}),i.addBinding(s,"color",{label:"河水颜色"}),(c,G)=>(o(),y("TresGroup",V,[x("primitive",{object:m(r)},null,8,j),(o(),n(f,null,{default:l(()=>[_(h,B({"position-y":1e-4,waterGeometry:m(a).mesh_0.geometry},s),null,16,["waterGeometry"])]),_:1}))]))}}),L=p({__name:"cityRiver",setup(d){const e=C(null);R(()=>{e.value&&e.value.$refs.perspectiveCameraRef.position.set(4,2.15,3.6)});const{onLoop:t}=$();return t(()=>{e.value&&console.log(e.value.$refs.perspectiveCameraRef)}),(r,a)=>(o(),n(u,{showAxesHelper:!1,showGridHelper:!1,showBuildings:!1,ref_key:"pagesShowRef",ref:e,autoRotate:!1},{ability:l(()=>[(o(),n(f,null,{default:l(()=>[_(k)]),_:1}))]),_:1},512))}});export{L as default};