import{bT as S,a0 as C,k as g,a5 as x,w as B,o as c,c as p,K as f,ay as m,ao as M,a8 as L,bU as b,aw as A,a1 as T,a2 as O,a3 as D,a4 as R,aC as G,r as N,v as E,D as P,a7 as W,X as w,a as h,a9 as k,aa as H,ab as F,E as U,Y as _,$}from"./vendor.UoMSxCrE1712649228867.js";import{C as j}from"./vanilla.9uJ626wM1712649228867.js";import{L as I,a as V,b as X}from"./LineSegments2.wD8n3JJu1712649228867.js";const Y=async()=>{const e=await S("./plugins/digitalCity/model/shanghai.FBX");let t=null,o=null,i=null;return e.traverse(a=>{a.name==="CITY_UNTRIANGULATED"&&(t=a),a.name==="LANDMASS"&&(o=a),a.name==="ROADS"&&(i=a)}),{model:e,city:t,land:o,roads:i}};var z="varying vec4 vPosition;\nvoid main(){\n	vPosition=modelMatrix*vec4(position,1.);\n	csm_Position=position*vec3(1.);\n}",K="uniform mat4 modelMatrix;\nvarying vec4 vPosition;\nuniform vec3 uMax;\nuniform vec3 uMin;\nuniform float uOpacity;\nuniform float uBorderWidth;\nuniform vec3 uLightColor;\nuniform vec3 uColor;\nuniform float uCircleTime;\nuniform float uTime;\nuniform vec3 uTopColor;\nuniform bool uGradient;\nvec4 uMax_world;\nvec4 uMin_world;\nvoid main(){\n	\n	uMax_world=modelMatrix*vec4(uMax,1.);\n	uMin_world=modelMatrix*vec4(uMin,1.);\n	vec3 distColor=uColor;\n	float residue=uTime-floor(uTime/uCircleTime)*uCircleTime;\n	float rate=residue/uCircleTime;\n	float lightOffset=rate*(uMax_world.y-uMin_world.y);\n	\n	if(uMin_world.y+lightOffset<vPosition.y&&uMin_world.y+lightOffset+uBorderWidth>vPosition.y){\n		csm_DiffuseColor=vec4(uLightColor,uOpacity);\n	}else{\n		csm_DiffuseColor=vec4(distColor,uOpacity);\n	}\n	\n	\n	if(uGradient){\n		float rateHight=(vPosition.y-uMin_world.y)/(uMax_world.y-uMin_world.y);\n		vec3 outColor=mix(csm_DiffuseColor.xyz,uTopColor,rateHight*2.);\n		csm_DiffuseColor=vec4(outColor,uOpacity);\n	}\n}";const q=["object"],J=C({__name:"buildingsModelCustomShader",props:{model:{},bulidingsColor:{default:"#e523ff"},landColor:{default:"#112233"},topColor:{default:"#ffff00"},opacity:{default:.9},gradient:{type:Boolean,default:!0}},setup(l){const e=l,t=g(0),o=e.model.city;o.renderOrder=1001;const i=e.model.land,a=(r,u)=>{let d;r==="cu"||r==="land"&&(d=Array.isArray(i.material)?i.material:[i.material],d.forEach(y=>{y[u].setStyle(e.landColor),y.side=M}))};(()=>{const{geometry:r}=o;r.computeBoundingBox(),r.computeBoundingSphere();const{max:u,min:d}=r.boundingBox;if(o.material.__csm)return;const y=new j({baseMaterial:o.material,vertexShader:z,fragmentShader:K,silent:!0,uniforms:{uMax:{value:u},uMin:{value:d},uBorderWidth:{value:5},uCircleTime:{value:5},uColor:{value:new m(e.bulidingsColor)},uOpacity:{value:e.opacity},uLightColor:{value:new m("#ffffff")},uTopColor:{value:new m(e.topColor)},uTime:t,uGradient:{value:e.gradient}},depthWrite:!0,depthTest:!0,transparent:!0,side:M});o.material.dispose(),o.material=y})();const{onLoop:s}=L();s(({delta:r})=>{t.value+=r}),x(()=>{e.bulidingsColor&&o.material.uniforms.uColor.value.setStyle(e.bulidingsColor),e.landColor&&a("land","color"),e.opacity&&(o.material.uniforms.uOpacity.value=e.opacity)}),B(e,(r,u)=>{o.material.uniforms.uGradient.value=r.gradient});const v=e.model.model.clone();return(r,u)=>(c(),p("primitive",{object:f(v)},null,8,q))}}),Q=["object"],Z=C({__name:"buildingsLines",props:{builds:{},width:{default:1},color:{default:"#FFF"},opacity:{default:1},style:{default:"Wireframe"}},setup(l){const e=l;let t=null,o=null;if(e.style==="Wireframe"){const i=new b(e.builds.geometry);let n=new I().fromEdgesGeometry(i),s=new V({color:e.color,linewidth:e.width,opacity:e.opacity,transparent:!0,depthWrite:!0,depthTest:!0});s.resolution.set(window.innerWidth,window.innerHeight),t=new X(n,s),t.applyMatrix4(e.builds.matrix.clone())}else{o={transparent:!0,uniforms:{uColor:{value:new m(e.color)},uOpacity:{value:e.opacity}},vertexShader:"\n       void main() {\n          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n        }\n      ",fragmentShader:" \n        uniform vec3 uColor;\n				uniform float uOpacity;\n        void main() {\n          gl_FragColor = vec4(uColor, uOpacity);\n        }\n      "};const i=new b(e.builds.geometry),a=new A(o);t=new LineSegments(i,a),t.applyMatrix4(e.builds.matrix.clone()),t.material.linewidth=e.width,t.renderOrder=1e3}return x(()=>{e.style==="Shader"&&(e.color&&(o.uniforms.uColor.value=new m(e.color)),e.opacity&&(o.uniforms.uOpacity.value=e.opacity)),e.style==="Wireframe"&&(e.color&&(t.material.color=new m(e.color)),e.opacity&&(t.material.opacity=e.opacity)),e.width&&(t.material.linewidth=e.width)}),(i,a)=>(c(),p("primitive",{object:f(t)},null,8,Q))}}),ee=w("TresAmbientLight",{color:"#ffffff"},null,-1),oe=w("TresDirectionalLight",{position:[100,100,0],intensity:.5,color:"#ffffff"},null,-1),te={key:1,args:[1e3],position:[0,19,0]},ae={key:2,args:[6e3,100],position:[0,19,0]},le=C({__name:"pagesShow",props:{showBuildings:{type:Boolean,default:!0},autoRotate:{type:Boolean,default:!0},showAxesHelper:{type:Boolean,default:!0},showGridHelper:{type:Boolean,default:!0},disableRender:{type:Boolean,default:!1}},async setup(l){let e,t;const o=l,i=T({clearColor:"#000000",shadows:!0,alpha:!1,useLegacyLights:!0,shadowMapType:O,outputColorSpace:D,toneMapping:R,disableRender:o.disableRender}),a=T({autoRotate:o.autoRotate,enableDamping:!0});let n=null;o.showBuildings&&(n=([e,t]=G(()=>Y()),e=await e,t(),e));const s=g(),v=g();return(r,u)=>{const d=N("TresCanvas");return c(),E(d,W({ref_key:"tcRef",ref:v},i,{"window-size":""}),{default:P(()=>[w("TresPerspectiveCamera",{ref_key:"perspectiveCameraRef",ref:s,position:[600,750,-1221],fov:45,near:1,far:1e5},null,512),h(f(F),k(H(a)),null,16),ee,oe,o.showBuildings&&f(n)?(c(),p(U,{key:0},[h(J,{model:f(n)},null,8,["model"]),h(Z,{builds:f(n).city,color:"#000"},null,8,["builds"])],64)):_("",!0),$(r.$slots,"ability"),o.showAxesHelper?(c(),p("TresAxesHelper",te)):_("",!0),o.showGridHelper?(c(),p("TresGridHelper",ae)):_("",!0)]),_:3},16)}}});export{le as _,J as a,Z as b,Y as l};