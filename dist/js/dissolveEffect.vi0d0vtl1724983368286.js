import{$ as e,a as t,N as o,d as r}from"./@tresjs.OrqGCbtj1724983368286.js";import{a as s,b as n}from"./index.LdVI1Df31724983368286.js";import{C as i,a3 as a,a6 as l}from"./three.p-9BQwc31724983368286.js";import{b as u}from"./index.HXrxMesx1724983368286.js";import"./index.RFvE9dAj1724983368286.js";import{_ as c}from"./lamboEffect.vue_vue_type_script_setup_true_lang.IqZZ6aY21724983368286.js";import{a4 as d,a1 as p,o as f,D as m,u as g,d as v,r as h,b as _,e as j,j as x,g as y,aj as C,ak as b,f as S,al as M,m as P,J as w,F as I}from"./@vue.Q1VpS3901724983368286.js";import{P as T}from"./tweakpane.yHWGBmom1724983368286.js";import{_ as k}from"./reflectorDUDV.vue_vue_type_script_setup_true_lang.dR_Md0ZD1724983368286.js";import"./@vueuse.n6I5WvfU1724983368286.js";import"./three-stdlib._CB_uvPa1724983368286.js";import"./@pmndrs.OCGdGm_L1724983368286.js";import"./object-hash.X2exW7z_1724983368286.js";import"./@amap.-Bisu7YL1724983368286.js";import"./jszip.VoLYwi951724983368286.js";import"./index.Aoi53OPO1724983368286.js";import"./@fesjs.Gs8eM-sM1724983368286.js";import"./vue-router.Zdcy26aq1724983368286.js";import"./lodash-es.nFpJXAf-1724983368286.js";import"./@qlin.yHhFDldE1724983368286.js";import"./pinia.TzFzuyxp1724983368286.js";import"./@floating-ui.BPbuo5Gx1724983368286.js";import"./@juggle.7yjBMqoW1724983368286.js";import"./chalk.sAH7iSuz1724983368286.js";/* empty css                                 */import"./iconify-icon.l-H2-fnN1724983368286.js";import"./@iconify.9PoCakEb1724983368286.js";import"./utils.BKPC842d1724983368286.js";import"./default.vue_vue_type_script_setup_true_lang.sHsV8pYJ1724983368286.js";import"./three-mesh-ui.module.dsdly6AD1724983368286.js";import"./reflectorDiffuse.vue_vue_type_script_setup_true_lang.0pvBP-hp1724983368286.js";import"./all.three.RQy00bw_1724983368286.js";import"./oimophysics.x0jH7fze1724983368286.js";import"./reflectorShaderMesh.vue_vue_type_script_setup_true_lang.S8gI9gok1724983368286.js";import"./whiteFloorMesh.vue_vue_type_script_setup_true_lang.j17yu-hJ1724983368286.js";import"./gridPlusCom.vue_vue_type_script_setup_true_lang.7Pfa_P971724983368286.js";import"./videoFloor.vue_vue_type_script_setup_true_lang.aFG-ipIR1724983368286.js";const D=["object","rotation"],B={__name:"dissolveEffectModel",props:{edgeColor:{default:1118481},edgeWidth:{default:.03},dissolveSpeed:{default:.003},funRef:{appear:null,disappear:null}},async setup(r,{expose:s}){let n,l;const u=r,{scene:c,nodes:v,materials:h}=([n,l]=d((()=>t("https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/model/industry4/lambo.glb",{draco:!0,decoderPath:"./draco/"}))),n=await n,l(),n);Object.values(v).forEach((e=>{e.isMesh&&(e.name.startsWith("glass")&&e.geometry.computeVertexNormals(),"silver_001_BreakDiscs_0"===e.name&&(e.material=h.BreakDiscs.clone(),e.material.color=new i("#ddd")))})),v.glass_003.scale.setScalar(2.7),h.FrameBlack.color=new i("black"),h.FrameBlack.roughness=0,h.FrameBlack.metalness=.75,h.Chrome.color=new i("#333"),h.Chrome.metalness=1,h.Chrome.roughness=0,h.BreakDiscs.color=new i("#555"),h.BreakDiscs.metalness=.2,h.BreakDiscs.roughness=.2,h.TiresGum.color=new i("#181818"),h.TiresGum.metalness=0,h.TiresGum.roughness=.4,h.GreyElements.color=new i("#292929"),h.GreyElements.metalness=0,v.yellow_WhiteCar_0.material=new a({roughness:.3,metalness:.05,color:"#111",envMapIntensity:.75,clearcoatRoughness:0,clearcoat:1});const _=([n,l]=d((()=>o(["./plugins/digitalCity/image/smokeparticle.png","./plugins/industry4/image/dissolve.jpg"]))),n=await n,l(),n);let j=[],x=!1,y={dissolveProgress:0,noiseTexture:_[0],edgeColorTexture:_[1]},C=u.dissolveSpeed;const b=()=>{if(!x){x=!0,C=u.dissolveSpeed;for(let e of j)e.uniforms.dissolveSpeed={value:C},e.uniforms.dissolveProgress={value:0}}},S=()=>{if(!x){x=!0,C=-u.dissolveSpeed;for(let e of j)e.uniforms.dissolveSpeed={value:C},e.uniforms.dissolveProgress={value:1}}};u.funRef.appear=b,u.funRef.disappear=S,s({appear:b,disappear:S}),Object.values(v).forEach((e=>{if(e.isMesh){e.frustumCulled=!1;const t=e.material;t.transparent=!0,t.onBeforeCompile=e=>{j.push(e),e.uniforms.edgeColor={value:new i(u.edgeColor)},e.uniforms.edgeWidth={value:u.edgeWidth},e.uniforms.dissolveSpeed={value:u.dissolveSpeed},e.uniforms.dissolveProgress={value:y.dissolveProgress},e.uniforms.noiseTexture={value:y.noiseTexture},e.uniforms.edgeColorTexture={value:y.edgeColorTexture},e.vertexShader=e.vertexShader.replace("#include <common>",["varying vec2 xUv;","#include <common>"].join("\n")),e.vertexShader=e.vertexShader.replace("#include <uv_vertex>",["xUv = uv;","#include <uv_vertex>"].join("\n")),e.fragmentShader=e.fragmentShader.replace("#include <common>","#include <common>\n             uniform float dissolveProgress;\n             uniform float edgeWidth;\n             uniform vec3 edgeColor;\n             uniform sampler2D noiseTexture;\n             uniform sampler2D edgeColorTexture;\n             varying vec2 xUv;\n            "),e.fragmentShader=e.fragmentShader.replace("#include <dithering_fragment>","#include <dithering_fragment>\n                float noiseValue = texture2D(noiseTexture, xUv).r;\n              \tvec4 finalColor = texture2D(edgeColorTexture, xUv);\n\n\t\t\t\t\t\t\t\tvec3 mixedColor = mix(finalColor.rgb, edgeColor, 0.5);\n\t\t\t\t\t\t\t\tfinalColor.rgb = mixedColor;\n\n                // vec4 finalColor = linearToOutputTexel( vec4(edgeColor, gl_FragColor.a) );\n\t\t\t\t\t\t\t\tfloat alpha = step(noiseValue - edgeWidth, dissolveProgress);\n                gl_FragColor.a = alpha;\n\t\t\t\t\t\t\t\tfloat useOrigin = step(noiseValue, dissolveProgress);\n\t\t\t\t\t\t\t\tgl_FragColor.rgb = mix(finalColor.rgb, gl_FragColor.rgb, useOrigin);")}}}));const{onLoop:M}=e();return M((({dt:e})=>{if(x)for(let t of j){let{dissolveProgress:e,dissolveSpeed:o}=t.uniforms;e.value+=o.value,e.value<0&&(x=!1),e.value>1&&(x=!1)}})),p((()=>{if(u.dissolveSpeed)for(let e of j)e.uniforms.dissolveSpeed.value=u.dissolveSpeed;if(u.edgeColor)for(let e of j)e.uniforms.edgeColor.value=new i(u.edgeColor);if(u.edgeWidth)for(let e of j)e.uniforms.edgeWidth.value=u.edgeWidth})),(e,t)=>(f(),m("primitive",{object:g(c),scale:.015,rotation:[0,Math.PI/1.5,0]},null,8,D))}},R=L;!function(e,t){const o=L,r=N();for(;;)try{if(877595===-parseInt(o(346))/1+parseInt(o(335))/2+-parseInt(o(373))/3*(parseInt(o(378))/4)+parseInt(o(337))/5+parseInt(o(340))/6+parseInt(o(386))/7+-parseInt(o(347))/8)break;r.push(r.shift())}catch(s){r.push(r.shift())}}();const W=function(){let e=!0;return function(t,o){const r=e?function(){if(o){const e=o[L(336)](t,arguments);return o=null,e}}:function(){};return e=!1,r}}();!function(){W(this,(function(){const e=L,t=new RegExp(e(334)),o=new RegExp(e(370),"i"),r=A(e(381));t.test(r+e(344))&&o[e(362)](r+e(351))?A():r("0")}))()}();const F=function(){let e=!0;return function(t,o){const r=e?function(){if(o){const e=o[L(336)](t,arguments);return o=null,e}}:function(){};return e=!1,r}}();F(void 0,(function(){const e=L,t=function(){const e=L;let t;try{t=Function(e(368)+e(361)+");")()}catch(o){t=window}return t}(),o=t[e(358)]=t.console||{},r=[e(372),e(385),e(339),"error","exception",e(382),e(333)];for(let s=0;s<r.length;s++){const t=F.constructor[e(365)][e(359)](F),n=r[s],i=o[n]||t;t.__proto__=F.bind(F),t[e(357)]=i.toString[e(359)](i),o[n]=t}}))();const E=w(R(345),{position:[0,10,15],fov:25,near:.1,far:1e4},null,-1),G=w(R(343),{intensity:.5},null,-1),U=[R(363)],V=w(R(338),{args:[.9,1,4,1]},null,-1),O=[R(371)],z=[R(363)],$=w(R(338),{args:[.9,1,3,1]},null,-1),q=[R(371)];function L(e,t){const o=N();return(L=function(e,t){return o[e-=330]})(e,t)}function N(){const e=["dissolveSpeed","stateObject","return (function() ","debu","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","side","log","4119tuIxMg","value","dissolveEffectModelRef","click","gger","392dvRFdf","counter","call","init","table","DoubleSide","disappear","warn","743260hUMojS","red","rotation-x","string","constructor","trace","function *\\( *\\)","2635302PVWKrj","apply","8618030dGmrLP","TresRingGeometry","info","7555350UYjxqX","TresMesh","addBinding","TresHemisphereLight","chain","TresPerspectiveCamera","979726NfhpQn","19318296VuRsum","addButton","TresCanvas","rotation-y","input","#15151a","#111111","manual","ring","appear","toString","console","bind","white",'{}.constructor("return this")( )',"test","rotation","funRef","prototype"];return(N=function(){return e})()}const X=v({__name:"dissolveEffect",setup(e){const t=R,o=h({clearColor:t(352),antialias:!1,logarithmicDepthBuffer:!0,renderMode:t(354)}),i=h({autoRotate:!0}),a=new T({title:"溶解参数",expanded:!0}),d=h({edgeColor:t(353),edgeWidth:.03,dissolveSpeed:.003,funRef:{appear:null,disappear:null}});a[t(342)](d,"edgeColor",{label:"颜色"}),a.addBinding(d,"edgeWidth",{label:"宽度",min:0,max:.13,step:.01}),a.addBinding(d,t(366),{label:"速度",min:.001,max:.01,step:.001});const p=a[t(348)]({title:"显示",label:"模型"}),v=_(null);p.on(t(376),(()=>{const e=t;v[e(374)][e(356)]?v[e(374)][e(356)]():v[e(374)][e(364)][e(356)]()}));return a[t(348)]({title:"消失",label:"模型"}).on(t(376),(()=>{const e=t;v[e(374)][e(356)]?v.value[e(384)]():v[e(374)][e(364)][e(384)]()})),(e,a)=>{const p=t,h=j(p(349));return f(),m(I,null,[x(g(u)),x(h,P(o,{"window-size":""}),{default:y((()=>[E,x(g(r),C(b(i)),null,16),G,(f(),S(M,null,{default:y((()=>[x(B,P(d,{ref_key:p(375),ref:v}),null,16)])),_:1})),(f(),S(M,null,{default:y((()=>[x(g(k),{position:[0,-1.562,0],reflectivity:2.6,showGridHelper:!1,scale:1.5})])),_:1})),w(p(341),{scale:4,position:[3,-1.161,-1.5],rotation:[-Math.PI/2,0,Math.PI/2.5]},[V,w("TresMeshStandardMaterial",{color:p(360),roughness:.75,side:l[p(383)]},null,8,O)],8,U),w(p(341),{scale:4,position:[-3,-1.161,-1],rotation:[-Math.PI/2,0,Math.PI/2.5]},[$,w("TresMeshStandardMaterial",{color:p(360),roughness:.75,side:l[p(383)]},null,8,q)],8,z),(f(),S(M,null,{default:y((()=>[x(g(s),{resolution:512},{default:y((()=>[x(g(n),{intensity:2,position:[0,1,3],scale:[10,1,1]}),x(g(n),{intensity:2,"rotation-x":Math.PI/2,position:[0,4,-6],scale:[10,1,1]},null,8,[p(330)]),x(g(n),{intensity:2,"rotation-x":Math.PI/2,position:[0,4,-3],scale:[10,1,1]},null,8,[p(330)]),x(g(n),{intensity:2,"rotation-x":Math.PI/2,position:[0,4,0],scale:[10,1,1]},null,8,[p(330)]),x(g(n),{intensity:2,"rotation-x":Math.PI/2,position:[0,4,3],scale:[10,1,1]},null,8,[p(330)]),x(g(n),{intensity:2,"rotation-x":Math.PI/2,position:[0,4,6],scale:[10,1,1]},null,8,[p(330)]),x(g(n),{intensity:2,"rotation-x":Math.PI/2,position:[0,4,9],scale:[10,1,1]},null,8,["rotation-x"]),x(g(n),{intensity:2,"rotation-y":Math.PI/2,position:[-50,2,0],scale:[100,2,1]},null,8,[p(350)]),x(g(n),{intensity:2,"rotation-y":-Math.PI/2,position:[50,2,0],scale:[100,2,1]},null,8,[p(350)]),x(g(n),{form:p(355),color:p(387),intensity:10,scale:2,position:[10,5,10]})])),_:1})])),_:1})),x(c)])),_:1},16)],64)}}});function A(e){function t(e){const o=L;if(typeof e===o(331))return function(e){}.constructor("while (true) {}")[o(336)](o(379));1!==(""+e/e).length||e%20==0?function(){return!0}[o(332)](o(369)+o(377))[o(380)]("action"):function(){return!1}[o(332)](o(369)+o(377))[o(336)](o(367)),t(++e)}try{if(e)return t;t(0)}catch(o){}}export{X as default};
