import{a1 as M,ak as T,aD as C,aE as v,be as l,az as R,aH as k,aw as B,o as m,c as P,L as x,r as G,x as d,E as u,a as h,ac as I,ag as N,Y as e}from"./vendor.wxHBbIdo1713352787897.js";import{R as j}from"./ReflectorMaterial.7XWctrDC1713352787897.js";import{R as D}from"./Reflector.MG2myN1M1713352787897.js";import"./OimoPhysicsBuffer.b5DejoFC1713352787897.js";import{m as E}from"./BufferGeometryUtils.BK0ax5Vm1713352787897.js";import"./dither.glsl.y2WXw1t-1713352787897.js";const S=["rotation-x","position","object"],V=M({__name:"sciFiModular",props:{position:{default:[0,-1,0]}},async setup(p){let o,n;const i=p,{scene:g}=T(),{nodes:w}=([o,n]=C(()=>v("https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/model/floor/modelDraco.glb",{draco:!0,decoderPath:"./draco/"})),o=await o,n(),o),a=w.Cube016__0;console.log(a);const r=a.geometry,y=E([r.clone(),r.clone().applyMatrix4(new l().makeRotationZ(-Math.PI/2)),r.clone().applyMatrix4(new l().makeRotationZ(Math.PI/2)),r.clone().applyMatrix4(new l().makeRotationZ(-Math.PI))]),s=new D,c=new j({reflectivity:6,mirror:.1,mixStrength:3,color:new R("#fff"),map:a.material.map.clone(),normalMap:a.material.normalMap.clone(),normalScale:new k(1,1),fog:g.fog,dithering:!0});c.uniforms.tReflect=s.renderTargetUniform,c.uniforms.uMatrix=s.textureMatrixUniform;const t=new B(y,c);return t.add(s),t.onBeforeRender=(f,_,b)=>{t.visible=!1,s.update(f,_,b),t.visible=!0},(f,_)=>(m(),P("primitive",{"rotation-x":-Math.PI/2,position:i.position,object:x(t)},null,8,S))}}),Z=e("TresPerspectiveCamera",{position:[15,15,15],fov:45,near:.1,far:1e5,"look-at":[0,0,0]},null,-1),z=e("TresAmbientLight",{intensity:10},null,-1),A=e("TresMesh",{position:[3,2,0]},[e("TresBoxGeometry",{args:[2,2,2]}),e("TresMeshNormalMaterial",{wireframe:!0})],-1),F=e("TresMesh",{position:[0,1.2,0]},[e("TresBoxGeometry",{args:[1,1,1]}),e("TresMeshNormalMaterial")],-1),Y=M({__name:"showFloor",setup(p){return(o,n)=>{const i=G("TresCanvas");return m(),d(i,{clearColor:"#201919","window-size":""},{default:u(()=>[Z,h(x(I),{enableDamping:""}),z,A,F,(m(),d(N,null,{default:u(()=>[h(V,{position:[0,0,0]})]),_:1}))]),_:1})}}});export{Y as default};