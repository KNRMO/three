import{a1 as g,l as y,cY as x,br as u,a2 as p,ap as P,aA as S,w as m,o as d,c as w,Y as l,aa as z,ab as T,a9 as b,az as B,aq as C,r as R,x as _,E as v,a as t,L as V,ac as q,a8 as h,ag as M}from"./vendor.0WmFTx_01716352533075.js";import{_ as Z}from"./reflectorDUDV.vue_vue_type_script_setup_true_lang.FdlppqEW1716352533075.js";import"./dither.glsl.y2WXw1t-1716352533075.js";import"./Reflector.znWUDI7E1716352533075.js";import"./OimoPhysicsBuffer.b5DejoFC1716352533075.js";const j=["rotation-x"],k=["args"],i=g({__name:"videoFloor",props:{size:{default:[10,10]},vSrcPath:{},loop:{type:Boolean,default:!0},color:{default:"#fff"},opacity:{default:.95},rotationZ:{default:.01},textureRepeat:{default:[1,1]}},setup(f){const r=y(),{onLoop:a}=b();a(()=>{r.value&&(r.value.rotation.z+=o.rotationZ)});const o=f;let e=document.createElement("video");e.src=o.vSrcPath,e.loop=o.loop,e.muted=!0,e.crossOrigin="",e.play();let n=new x(e);n.wrapS=u,n.wrapT=u,n.repeat.set(o.textureRepeat[0],o.textureRepeat[1]);const s=p({color:o.color,alphaMap:n,side:P,transparent:!0,opacity:o.opacity,blending:S,flatShading:!0,depthTest:!1});return m(()=>o.color,c=>{s.color=new B(c)}),m(()=>o.opacity,c=>{s.opacity=c}),(c,E)=>(d(),w("TresMesh",{ref_key:"tmRef",ref:r,"rotation-x":-Math.PI/2},[l("TresPlaneGeometry",{args:o.size},null,8,k),l("TresMeshStandardMaterial",z(T(s)),null,16)],8,j))}}),$=l("TresPerspectiveCamera",{position:[15,20,0],fov:45,near:.1,far:1e4},null,-1),A=l("TresAmbientLight",{intensity:6},null,-1),Y=g({__name:"videoFloor",setup(f){const r=p({reflectivity:2.6,showGridHelper:!1,scale:4}),a=p({color:"#fff",opacity:.95,rotationZ:.01}),o=new C({title:"video地面",expanded:!0});return o.addBinding(a,"color",{label:"颜色"}),o.addBinding(a,"opacity",{label:"透明度",min:0,max:1,step:.01}),o.addBinding(a,"rotationZ",{label:"自转速度",min:-.1,max:.1,step:.01}),(e,n)=>{const s=R("TresCanvas");return d(),_(s,{clearColor:"#201919","window-size":""},{default:v(()=>[$,t(V(q),{enableDamping:""}),A,t(i,h(a,{position:[0,0,10],size:[10,10],vSrcPath:"https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/video/floor/floorV1.mp4"}),null,16),t(i,{color:"#02a7ff",position:[0,-1,10],size:[13,13],vSrcPath:"https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/video/floor/floorV2.mp4"}),t(i,{color:"#7300a8",opacity:.6,position:[0,0,-10],size:[10,10],vSrcPath:"https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/video/floor/floorV3.mp4"}),t(i,{color:"#f605ff",rotationZ:-.01,position:[0,-1,-10],size:[13,13],vSrcPath:"https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/video/floor/floorV3.mp4"}),t(i,{color:"#02a7ff",rotationZ:0,position:[0,-1.99,0],opacity:.06,textureRepeat:[3,2],size:[40,40],vSrcPath:"https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/video/floor/grid.mp4"}),(d(),_(M,null,{default:v(()=>[t(Z,h({position:[0,-2,0]},r),null,16)]),_:1}))]),_:1})}}});export{Y as default};