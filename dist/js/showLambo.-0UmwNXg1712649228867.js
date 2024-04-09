import{aC as R,aD as B,ay as x,bL as F,o as b,c as z,X as p,K as n,bE as k,cP as P,as as G,bF as H,b2 as I,aq as V,aH as E,ci as w,cQ as $,a0 as N,aj as j,a5 as O,a8 as W,aG as X,a1 as L,r as A,a as r,D as T,a7 as q,E as Z,ab as K,a9 as Q,aa as J,v as S,af as U,ao as C}from"./vendor.UoMSxCrE1712649228867.js";import{a as Y,_ as d}from"./index.vue_vue_type_script_setup_true_lang.r_R41SKL1712649228867.js";/* empty css                                                                                 */import{_ as ee}from"./randomLoading.vue_vue_type_script_setup_true_lang.EmP0BIQm1712649228867.js";import"./OimoPhysicsBuffer.suR-_k-u1712649228867.js";import{_ as te}from"./reflectorDUDV.vue_vue_type_script_setup_true_lang.dB8j1DYC1712649228867.js";import{S as ae,R as se,E as ie}from"./EffectComposer.1rpTZ31Z1712649228867.js";import{O as re}from"./OutputPass.7LQHm_0E1712649228867.js";import{U as ne}from"./UnrealBloomPass.DHtM37DM1712649228867.js";import"./starLoading.yt4qZ33C1712649228867.js";import"./bubbleLoading.uoh3VGV41712649228867.js";import"./dither.glsl.y2WXw1t-1712649228867.js";const oe={ref:"contactShadowsRef"},le=["object","rotation"],ce={__name:"lamboModel",async setup(D){let e,s;const{scene:u,nodes:o,materials:t}=([e,s]=R(()=>B("https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/model/industry4/lambo.glb",{draco:!0,decoderPath:"./draco/"})),e=await e,s(),e);return Object.values(o).forEach(i=>{i.isMesh&&(i.name.startsWith("glass")&&i.geometry.computeVertexNormals(),i.name==="silver_001_BreakDiscs_0"&&(i.material=t.BreakDiscs.clone(),i.material.color=new x("#ddd")))}),o.glass_003.scale.setScalar(2.7),t.FrameBlack.color=new x("black"),t.FrameBlack.roughness=0,t.FrameBlack.metalness=.75,t.Chrome.color=new x("#333"),t.Chrome.metalness=1,t.Chrome.roughness=0,t.BreakDiscs.color=new x("#555"),t.BreakDiscs.metalness=.2,t.BreakDiscs.roughness=.2,t.TiresGum.color=new x("#181818"),t.TiresGum.metalness=0,t.TiresGum.roughness=.4,t.GreyElements.color=new x("#292929"),t.GreyElements.metalness=0,o.yellow_WhiteCar_0.material=new F({roughness:.3,metalness:.05,color:"#111",envMapIntensity:.75,clearcoatRoughness:0,clearcoat:1}),(i,a)=>(b(),z("TresGroup",oe,[p("primitive",{object:n(u),scale:.015,rotation:[0,Math.PI/1.5,0]},null,8,le)],512))}},ue={name:"LUTShader",defines:{USE_3DTEXTURE:1},uniforms:{lut3d:{value:null},lut:{value:null},lutSize:{value:0},tDiffuse:{value:null},intensity:{value:1}},vertexShader:"\n\n		varying vec2 vUv;\n\n		void main() {\n\n			vUv = uv;\n			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n		}\n\n	",fragmentShader:"\n\n		uniform float lutSize;\n		#if USE_3DTEXTURE\n		precision highp sampler3D;\n		uniform sampler3D lut3d;\n		#else\n		uniform sampler2D lut;\n\n		vec3 lutLookup( sampler2D tex, float size, vec3 rgb ) {\n\n			float sliceHeight = 1.0 / size;\n			float yPixelHeight = 1.0 / ( size * size );\n\n			// Get the slices on either side of the sample\n			float slice = rgb.b * size;\n			float interp = fract( slice );\n			float slice0 = slice - interp;\n			float centeredInterp = interp - 0.5;\n\n			float slice1 = slice0 + sign( centeredInterp );\n\n			// Pull y sample in by half a pixel in each direction to avoid color\n			// bleeding from adjacent slices.\n			float greenOffset = clamp( rgb.g * sliceHeight, yPixelHeight * 0.5, sliceHeight - yPixelHeight * 0.5 );\n\n			vec2 uv0 = vec2(\n				rgb.r,\n				slice0 * sliceHeight + greenOffset\n			);\n			vec2 uv1 = vec2(\n				rgb.r,\n				slice1 * sliceHeight + greenOffset\n			);\n\n			vec3 sample0 = texture2D( tex, uv0 ).rgb;\n			vec3 sample1 = texture2D( tex, uv1 ).rgb;\n\n			return mix( sample0, sample1, abs( centeredInterp ) );\n\n		}\n		#endif\n\n		varying vec2 vUv;\n		uniform float intensity;\n		uniform sampler2D tDiffuse;\n		void main() {\n\n			vec4 val = texture2D( tDiffuse, vUv );\n			vec4 lutVal;\n\n			// pull the sample in by half a pixel so the sample begins\n			// at the center of the edge pixels.\n			float pixelWidth = 1.0 / lutSize;\n			float halfPixelWidth = 0.5 / lutSize;\n			vec3 uvw = vec3( halfPixelWidth ) + val.rgb * ( 1.0 - pixelWidth );\n\n			#if USE_3DTEXTURE\n\n			lutVal = vec4( texture( lut3d, uvw ).rgb, val.a );\n\n			#else\n\n			lutVal = vec4( lutLookup( lut, lutSize, uvw ), val.a );\n\n			#endif\n\n			gl_FragColor = vec4( mix( val, lutVal, intensity ) );\n\n		}\n\n	"};class me extends ae{set lut(e){const s=this.material;if(e!==this.lut&&(s.uniforms.lut3d.value=null,s.uniforms.lut.value=null,e)){const u=e.isData3DTexture?1:0;u!==s.defines.USE_3DTEXTURE&&(s.defines.USE_3DTEXTURE=u,s.needsUpdate=!0),s.uniforms.lutSize.value=e.image.width,e.isData3DTexture?s.uniforms.lut3d.value=e:s.uniforms.lut.value=e}}get lut(){return this.material.uniforms.lut.value||this.material.uniforms.lut3d.value}set intensity(e){this.material.uniforms.intensity.value=e}get intensity(){return this.material.uniforms.intensity.value}constructor(e={}){super(ue),this.lut=e.lut||null,this.intensity="intensity"in e?e.intensity:1}}class de extends k{constructor(e){super(e),this.type=P}setType(e){if(e!==P&&e!==G)throw new Error("LUTCubeLoader: Unsupported type");return this.type=e,this}load(e,s,u,o){const t=new H(this.manager);t.setPath(this.path),t.setResponseType("text"),t.load(e,i=>{try{s(this.parse(i))}catch(a){o?o(a):console.error(a),this.manager.itemError(e)}},u,o)}parse(e){const s=/TITLE +"([^"]*)"/,u=/LUT_3D_SIZE +(\d+)/,o=/DOMAIN_MIN +([\d.]+) +([\d.]+) +([\d.]+)/,t=/DOMAIN_MAX +([\d.]+) +([\d.]+) +([\d.]+)/,i=/^([\d.e+-]+) +([\d.e+-]+) +([\d.e+-]+) *$/gm;let a=s.exec(e);const M=a!==null?a[1]:null;if(a=u.exec(e),a===null)throw new Error("LUTCubeLoader: Missing LUT_3D_SIZE information");const m=Number(a[1]),f=m**3*4,h=this.type===P?new Uint8Array(f):new Float32Array(f),g=new I(0,0,0),_=new I(1,1,1);if(a=o.exec(e),a!==null&&g.set(Number(a[1]),Number(a[2]),Number(a[3])),a=t.exec(e),a!==null&&_.set(Number(a[1]),Number(a[2]),Number(a[3])),g.x>_.x||g.y>_.y||g.z>_.z)throw new Error("LUTCubeLoader: Invalid input domain");const v=this.type===P?255:1;let y=0;for(;(a=i.exec(e))!==null;)h[y++]=Number(a[1])*v,h[y++]=Number(a[2])*v,h[y++]=Number(a[3])*v,h[y++]=v;const l=new V;l.image.data=h,l.image.width=m,l.image.height=m*m,l.type=this.type,l.magFilter=E,l.minFilter=E,l.wrapS=w,l.wrapT=w,l.generateMipmaps=!1,l.needsUpdate=!0;const c=new $;return c.image.data=h,c.image.width=m,c.image.height=m,c.image.depth=m,c.type=this.type,c.magFilter=E,c.minFilter=E,c.wrapS=w,c.wrapT=w,c.wrapR=w,c.generateMipmaps=!1,c.needsUpdate=!0,{title:M,size:m,domainMin:g,domainMax:_,texture:l,texture3D:c}}}const he=N({__name:"lamboEffect",setup(D){const{camera:e,renderer:s,scene:u,sizes:o}=j(),t={threshold:.666,strength:.366,radius:.33};let i=null,a=null;const M=(f,h,g,_,v)=>{const y=new se(f,h),l=new ne(new X(_,v),t.strength,t.radius,t.threshold);i=new ie(g),i.addPass(y),i.addPass(l),i.addPass(new re),a=new me({intensity:1}),i.addPass(a)};new de().load("https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/model/industry4/F-6800-STD.cube",function(f){a.lut=f.texture3D}),O(()=>{o.width.value&&M(u.value,e.value,s.value,o.width.value,o.height.value)});const{onLoop:m}=W();return m(()=>{i&&i.render()}),(f,h)=>null}}),pe=p("TresPerspectiveCamera",{position:[0,10,15],fov:25,near:.1,far:1e4},null,-1),fe=p("TresHemisphereLight",{intensity:.5},null,-1),ge=["rotation"],_e=p("TresRingGeometry",{args:[.9,1,4,1]},null,-1),ve=["side"],ye=["rotation"],xe=p("TresRingGeometry",{args:[.9,1,3,1]},null,-1),we=["side"],Ne=N({__name:"showLambo",setup(D){const e=L({clearColor:"#15151a",antialias:!1,logarithmicDepthBuffer:!0,disableRender:!0}),s=L({autoRotate:!0});return(u,o)=>{const t=A("TresCanvas");return b(),z(Z,null,[r(n(ee)),r(t,q(e,{"window-size":""}),{default:T(()=>[pe,r(n(K),Q(J(s)),null,16),fe,(b(),S(U,null,{default:T(()=>[r(ce)]),_:1})),(b(),S(U,null,{default:T(()=>[r(n(te),{position:[0,-1.562,0],reflectivity:2.6,showGridHelper:!1,scale:1.5})]),_:1})),p("TresMesh",{scale:4,position:[3,-1.161,-1.5],rotation:[-Math.PI/2,0,Math.PI/2.5]},[_e,p("TresMeshStandardMaterial",{color:"white",roughness:.75,side:C},null,8,ve)],8,ge),p("TresMesh",{scale:4,position:[-3,-1.161,-1],rotation:[-Math.PI/2,0,Math.PI/2.5]},[xe,p("TresMeshStandardMaterial",{color:"white",roughness:.75,side:C},null,8,we)],8,ye),(b(),S(U,null,{default:T(()=>[r(n(Y),{resolution:512},{default:T(()=>[r(n(d),{intensity:2,position:[0,1,3],scale:[10,1,1]}),r(n(d),{intensity:2,"rotation-x":Math.PI/2,position:[0,4,-6],scale:[10,1,1]},null,8,["rotation-x"]),r(n(d),{intensity:2,"rotation-x":Math.PI/2,position:[0,4,-3],scale:[10,1,1]},null,8,["rotation-x"]),r(n(d),{intensity:2,"rotation-x":Math.PI/2,position:[0,4,0],scale:[10,1,1]},null,8,["rotation-x"]),r(n(d),{intensity:2,"rotation-x":Math.PI/2,position:[0,4,3],scale:[10,1,1]},null,8,["rotation-x"]),r(n(d),{intensity:2,"rotation-x":Math.PI/2,position:[0,4,6],scale:[10,1,1]},null,8,["rotation-x"]),r(n(d),{intensity:2,"rotation-x":Math.PI/2,position:[0,4,9],scale:[10,1,1]},null,8,["rotation-x"]),r(n(d),{intensity:2,"rotation-y":Math.PI/2,position:[-50,2,0],scale:[100,2,1]},null,8,["rotation-y"]),r(n(d),{intensity:2,"rotation-y":-Math.PI/2,position:[50,2,0],scale:[100,2,1]},null,8,["rotation-y"]),r(n(d),{form:"ring",color:"red",intensity:10,scale:2,position:[10,5,10]})]),_:1})]),_:1})),r(he)]),_:1},16)],64)}}});export{Ne as default};