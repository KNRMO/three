import{Z as g,aN as v,aB as x,aQ as b,b6 as s,aM as m,aV as y,b8 as M,aX as S,bu as R,a4 as B,w as j,o as G,c as H,V as p,J as u}from"./vendor.d621771f1703640571700.js";import{R as T}from"./ReflectorMaterial.4a06070f1703640571700.js";import{R as C}from"./OimoPhysicsBuffer.17c747671703640571700.js";const V=["position"],k=["object"],E=["object"],A=g({__name:"reflectorShaderMesh",props:{reflectivity:{default:.2},mirror:{default:.1},mixStrength:{default:9},showGridHelper:{type:Boolean,default:!0},color:{default:"#ffffff"},position:{default:[0,-1,0]}},async setup(d){let i,c;const e=d,{scene:h}=v(),o=([i,c]=x(()=>b(["./plugins/floor/image/concrete_wet_floor_basecolor.jpg","./plugins/floor/image/concrete_wet_floor_normal.jpg"])),i=await i,c(),i);o[0].wrapS=s,o[0].wrapT=s,o[1].wrapS=s,o[1].wrapT=s;const a=new C,t=new T({reflectivity:e.reflectivity,mirror:e.mirror,mixStrength:e.mixStrength,color:new m(e.color),map:o[0],normalMap:o[1],normalScale:new y(5,5),fog:h.fog,dithering:!0});t.uniforms.tReflect=a.renderTargetUniform,t.uniforms.uMatrix=a.textureMatrixUniform;const _=new M(10,10),r=new S(_,t);r.name="reflectorShaderMesh",r.position.y=-.01,r.rotation.x=-Math.PI/2,r.add(a),r.onBeforeRender=(n,f,w)=>{r.visible=!1,a.update(n,f,w),r.visible=!0};const l=new R(9.5,10);return l.visible=e.showGridHelper,B(()=>{e.reflectivity&&(t.uniforms.uReflectivity.value=e.reflectivity),e.mirror&&(t.uniforms.uMirror.value=e.mirror),e.mixStrength&&(t.uniforms.uMixStrength.value=e.mixStrength),e.color&&(t.uniforms.uColor.value=new m(e.color))}),j(()=>e.showGridHelper,n=>{l.visible=n}),(n,f)=>(G(),H("TresGroup",{position:e.position},[p("primitive",{object:u(r)},null,8,k),p("primitive",{object:u(l)},null,8,E)],8,V))}});export{A as _};
