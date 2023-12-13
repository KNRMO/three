import{aQ as J,aG as i,aL as C,aK as ee,aS as te,aT as D,aU as k,aR as ae,aV as re,aY as j,b0 as U,aX as oe,Y as G,b3 as ie,az as ne,aP as le,b1 as se,a3 as ce,a2 as ue,o as N,c as me,I as M,Z as E,ae as de,s as V,B as A,a5 as fe,a6 as ve,a as W,a9 as pe,bT as xe,aC as ge,a7 as he,a8 as we,U as _e}from"./vendor.3bb9812a1702428466319.js";class Se extends J{constructor(s,e={}){super(s),this.isWater=!0;const t=this,c=e.textureWidth!==void 0?e.textureWidth:512,d=e.textureHeight!==void 0?e.textureHeight:512,u=e.clipBias!==void 0?e.clipBias:0,z=e.alpha!==void 0?e.alpha:1,L=e.time!==void 0?e.time:0,B=e.waterNormals!==void 0?e.waterNormals:null,H=e.sunDirection!==void 0?e.sunDirection:new i(.70707,.70707,0),I=new C(e.sunColor!==void 0?e.sunColor:16777215),O=new C(e.waterColor!==void 0?e.waterColor:8355711),T=e.eye!==void 0?e.eye:new i(0,0,0),X=e.distortionScale!==void 0?e.distortionScale:20,Y=e.side!==void 0?e.side:ee,Z=e.fog!==void 0?e.fog:!1,f=new te,m=new i,v=new i,P=new i,x=new D,w=new i(0,0,-1),l=new k,g=new i,_=new i,h=new k,S=new D,r=new ae,F=new re(c,d),y={name:"MirrorShader",uniforms:j.merge([U.fog,U.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new D},sunColor:{value:new C(8355711)},sunDirection:{value:new i(.70707,.70707,0)},eye:{value:new i},waterColor:{value:new C(5592405)}}]),vertexShader:"\n				uniform mat4 textureMatrix;\n				uniform float time;\n\n				varying vec4 mirrorCoord;\n				varying vec4 worldPosition;\n\n				#include <common>\n				#include <fog_pars_vertex>\n				#include <shadowmap_pars_vertex>\n				#include <logdepthbuf_pars_vertex>\n\n				void main() {\n					mirrorCoord = modelMatrix * vec4( position, 1.0 );\n					worldPosition = mirrorCoord.xyzw;\n					mirrorCoord = textureMatrix * mirrorCoord;\n					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );\n					gl_Position = projectionMatrix * mvPosition;\n\n				#include <beginnormal_vertex>\n				#include <defaultnormal_vertex>\n				#include <logdepthbuf_vertex>\n				#include <fog_vertex>\n				#include <shadowmap_vertex>\n			}",fragmentShader:"\n				uniform sampler2D mirrorSampler;\n				uniform float alpha;\n				uniform float time;\n				uniform float size;\n				uniform float distortionScale;\n				uniform sampler2D normalSampler;\n				uniform vec3 sunColor;\n				uniform vec3 sunDirection;\n				uniform vec3 eye;\n				uniform vec3 waterColor;\n\n				varying vec4 mirrorCoord;\n				varying vec4 worldPosition;\n\n				vec4 getNoise( vec2 uv ) {\n					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);\n					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );\n					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );\n					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );\n					vec4 noise = texture2D( normalSampler, uv0 ) +\n						texture2D( normalSampler, uv1 ) +\n						texture2D( normalSampler, uv2 ) +\n						texture2D( normalSampler, uv3 );\n					return noise * 0.5 - 1.0;\n				}\n\n				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {\n					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );\n					float direction = max( 0.0, dot( eyeDirection, reflection ) );\n					specularColor += pow( direction, shiny ) * sunColor * spec;\n					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;\n				}\n\n				#include <common>\n				#include <packing>\n				#include <bsdfs>\n				#include <fog_pars_fragment>\n				#include <logdepthbuf_pars_fragment>\n				#include <lights_pars_begin>\n				#include <shadowmap_pars_fragment>\n				#include <shadowmask_pars_fragment>\n\n				void main() {\n\n					#include <logdepthbuf_fragment>\n					vec4 noise = getNoise( worldPosition.xz * size );\n					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );\n\n					vec3 diffuseLight = vec3(0.0);\n					vec3 specularLight = vec3(0.0);\n\n					vec3 worldToEye = eye-worldPosition.xyz;\n					vec3 eyeDirection = normalize( worldToEye );\n					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );\n\n					float distance = length(worldToEye);\n\n					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;\n					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );\n\n					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );\n					float rf0 = 0.3;\n					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );\n					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;\n					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);\n					vec3 outgoingLight = albedo;\n					gl_FragColor = vec4( outgoingLight, alpha );\n\n					#include <tonemapping_fragment>\n					#include <colorspace_fragment>\n					#include <fog_fragment>	\n				}"},o=new oe({name:y.name,uniforms:j.clone(y.uniforms),vertexShader:y.vertexShader,fragmentShader:y.fragmentShader,lights:!0,side:Y,fog:Z});o.uniforms.mirrorSampler.value=F.texture,o.uniforms.textureMatrix.value=S,o.uniforms.alpha.value=z,o.uniforms.time.value=L,o.uniforms.normalSampler.value=B,o.uniforms.sunColor.value=I,o.uniforms.waterColor.value=O,o.uniforms.sunDirection.value=H,o.uniforms.distortionScale.value=X,o.uniforms.eye.value=T,t.material=o,t.onBeforeRender=function(a,$,p){if(v.setFromMatrixPosition(t.matrixWorld),P.setFromMatrixPosition(p.matrixWorld),x.extractRotation(t.matrixWorld),m.set(0,0,1),m.applyMatrix4(x),g.subVectors(v,P),g.dot(m)>0)return;g.reflect(m).negate(),g.add(v),x.extractRotation(p.matrixWorld),w.set(0,0,-1),w.applyMatrix4(x),w.add(P),_.subVectors(v,w),_.reflect(m).negate(),_.add(v),r.position.copy(g),r.up.set(0,1,0),r.up.applyMatrix4(x),r.up.reflect(m),r.lookAt(_),r.far=p.far,r.updateMatrixWorld(),r.projectionMatrix.copy(p.projectionMatrix),S.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),S.multiply(r.projectionMatrix),S.multiply(r.matrixWorldInverse),f.setFromNormalAndCoplanarPoint(m,v),f.applyMatrix4(r.matrixWorldInverse),l.set(f.normal.x,f.normal.y,f.normal.z,f.constant);const n=r.projectionMatrix;h.x=(Math.sign(l.x)+n.elements[8])/n.elements[0],h.y=(Math.sign(l.y)+n.elements[9])/n.elements[5],h.z=-1,h.w=(1+n.elements[10])/n.elements[14],l.multiplyScalar(2/l.dot(h)),n.elements[2]=l.x,n.elements[6]=l.y,n.elements[10]=l.z+1-u,n.elements[14]=l.w,T.setFromMatrixPosition(p.matrixWorld);const q=a.getRenderTarget(),K=a.xr.enabled,Q=a.shadowMap.autoUpdate;t.visible=!1,a.xr.enabled=!1,a.shadowMap.autoUpdate=!1,a.setRenderTarget(F),a.state.buffers.depth.setMask(!0),a.autoClear===!1&&a.clear(),a.render($,r),t.visible=!0,a.xr.enabled=K,a.shadowMap.autoUpdate=Q,a.setRenderTarget(q);const R=p.viewport;R!==void 0&&a.state.viewport(R)}}}const ye=["object","rotation-x"],Ce=G({__name:"threeExampleOcean",props:{size:{default:1},distortionScale:{default:3.7}},async setup(b){let s,e;const t=b,c=new ie(1e3,1e3),{map:d}=([s,e]=ne(()=>le({map:"./plugins/water/images/waternormals.jpg"})),s=await s,e(),s);d.wrapS=d.wrapT=se;const u=new Se(c,{textureWidth:512,textureHeight:512,waterNormals:d,sunDirection:new i,sunColor:16777215,waterColor:7695,distortionScale:3.7});ce(()=>{t.size&&(u.material.uniforms.size.value=t.size),t.distortionScale&&(u.material.uniforms.distortionScale.value=t.distortionScale)});const{onLoop:z}=ue();return z(()=>{u.material.uniforms.time.value+=1/60}),(L,B)=>(N(),me("primitive",{object:M(u),"rotation-x":-Math.PI/2},null,8,ye))}}),Me=_e("TresPerspectiveCamera",{position:[30,30,100]},null,-1),ze=G({__name:"threeExampleOcean",setup(b){const s={clearColor:"#222",shadows:!0,alpha:!1},e=E({size:1,distortionScale:3.7}),t=new de({title:"参数",expanded:!0});t.addBinding(e,"distortionScale",{label:"水变化尺度",min:0,max:8,step:.1}),t.addBinding(e,"size",{label:"水精细度",min:.1,max:10,step:.1});const c=E({elevation:2,azimuth:180});return t.addBinding(c,"elevation",{label:"太阳地平线高",min:.1,max:10,step:.1}),t.addBinding(c,"azimuth",{label:"太阳地方位角",min:0,max:360,step:1}),(d,u)=>(N(),V(M(ve),fe(s,{"window-size":""}),{default:A(()=>[Me,W(M(pe)),W(M(xe),{turbidity:10,rayleigh:2,mieDirectionalG:.8,elevation:c.elevation,distance:1e4,azimuth:c.azimuth},null,8,["elevation","azimuth"]),(N(),V(ge,null,{default:A(()=>[W(Ce,he(we(e)),null,16)]),_:1}))]),_:1},16))}});export{ze as default};
