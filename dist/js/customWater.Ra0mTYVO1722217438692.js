import{a3 as t,C as e,a6 as n,Z as r}from"./three.ej3u8izI1722217438692.js";import{$ as a,T as s,d as o,x as i}from"./@tresjs.vs5lCFs11722217438692.js";import{a as l}from"./index.DTwgDyGF1722217438692.js";import"./index.DUd6XKTt1722217438692.js";import{C as u}from"./three-custom-shader-material.KBQJQbKq1722217438692.js";import"./object-hash.H_vbRcKd1722217438692.js";import"./@amap.FTf_Qzi31722217438692.js";import"./glsl-tokenizer.BRlB_-gZ1722217438692.js";import{p as c}from"./gl-noise.BrVtymbx1722217438692.js";import{d as p,b as f,a1 as g,w as h,o as m,D as v,J as d,j as _,u as b,r as w,f as M,g as y,aj as j,ak as x,m as C,al as T}from"./@vue.Q1VpS3901722217438692.js";import{P as z}from"./tweakpane.yHWGBmom1722217438692.js";import{_ as S}from"./gridPlusCom.vue_vue_type_script_setup_true_lang.WNuqNNwJ1722217438692.js";import"./@vueuse.mG9rDBoo1722217438692.js";import"./three-stdlib.lHRu5jBh1722217438692.js";import"./@pmndrs.NGMcpQ2E1722217438692.js";import"./reflectorDiffuse.vue_vue_type_script_setup_true_lang.n6_dWyKr1722217438692.js";import"./all.three.JQtzNr2g1722217438692.js";import"./oimophysics.x0jH7fze1722217438692.js";import"./reflectorDUDV.vue_vue_type_script_setup_true_lang.zBbCTIfb1722217438692.js";import"./reflectorShaderMesh.vue_vue_type_script_setup_true_lang.DPYCARLu1722217438692.js";import"./whiteFloorMesh.vue_vue_type_script_setup_true_lang.YBPyOPaV1722217438692.js";import"./videoFloor.vue_vue_type_script_setup_true_lang.THQmNhrN1722217438692.js";import"./glsl-token-string.R7dCM80c1722217438692.js";import"./glsl-token-functions.DFHfxlmC1722217438692.js";import"./jszip.FHAQs96M1722217438692.js";const I=D;!function(t,e){const n=D,r=H();for(;;)try{if(981685===-parseInt(n(145))/1*(parseInt(n(172))/2)+parseInt(n(151))/3*(-parseInt(n(173))/4)+parseInt(n(131))/5+parseInt(n(140))/6+parseInt(n(143))/7+-parseInt(n(178))/8+-parseInt(n(180))/9)break;r.push(r.shift())}catch(a){r.push(r.shift())}}();const G=function(){let t=!0;return function(e,n){const r=t?function(){if(n){const t=n[D(183)](e,arguments);return n=null,t}}:function(){};return t=!1,r}}();function H(){const t=["chain","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","convertLinearToSRGB","tmRef","console","trace","11544846vXnDfm","function *\\( *\\)","customWaterMesh","12169290ACwaqL","init","24437UxBmyH","prototype","constructor","warn","uHeight","toString","183NfvZgl","args","baseMaterial","dispose","vertex","waterHighlight","counter","return (function() ","length","table","MeshPhysicalMaterial","log","stateObject","waterColor","#52a7f7","height","TresBoxGeometry","debu","fragmentShader","value","gger","10YJrbkc","68116jQiTPO","uTime","error","needsUpdate","brightness","13504080tMwYMT","material","11650518HerxjS","__proto__","Flatshading","apply","Color","rotation-x","DoubleSide","\nvarying float vHeight;\nuniform vec3 waterColor;\nuniform vec3 waterHighlight;\nuniform float offset;\nuniform float contrast;\nuniform float brightness;\n\nvec3 calcColor() {\n  float mask = (pow(vHeight, 2.) - offset) * contrast;\n  vec3 diffuseColor = mix(waterColor, waterHighlight, mask);\n  diffuseColor *= brightness;\n  return diffuseColor;\n}\n\nvoid main() {\n  csm_DiffuseColor = vec4(calcColor(), 1.0);\n}\n\t","bind","\nuniform float uTime;\nuniform float uHeight;\nvarying float vHeight;\n\nvec3 displace(vec3 point) {\n  vec3 p = point;\n  p.y += uTime * 2.0;\n  gln_tFBMOpts fbmOpts = gln_tFBMOpts(1.0, 0.4, 2.3, 0.4, 1.0, 5, false, false);\n  gln_tGerstnerWaveOpts A = gln_tGerstnerWaveOpts(vec2(0.0, -1.0), 0.5, 2.0);\n  gln_tGerstnerWaveOpts B = gln_tGerstnerWaveOpts(vec2(0.0, 1.0), 0.25, 4.0);\n  gln_tGerstnerWaveOpts C = gln_tGerstnerWaveOpts(vec2(1.0, 1.0), 0.15, 6.0);\n  gln_tGerstnerWaveOpts D = gln_tGerstnerWaveOpts(vec2(1.0, 1.0), 0.4, 2.0);\n  vec3 n = vec3(0.0);\n  if(p.z >= uHeight / 2.0) {\n      n.z += gln_normalize(gln_pfbm(p.xy + (uTime * 0.5), fbmOpts));\n      n += gln_GerstnerWave(p, A, uTime).xzy;\n      n += gln_GerstnerWave(p, B, uTime).xzy * 0.5;\n      n += gln_GerstnerWave(p, C, uTime).xzy * 0.25;\n      n += gln_GerstnerWave(p, D, uTime).xzy * 0.2;\n  }\n  vHeight = n.z;\n  return point + n;\n}\n\nvec3 orthogonal(vec3 v) {\n  return normalize(abs(v.x) > abs(v.z) ? vec3(-v.y, v.x, 0.0)\n  : vec3(0.0, -v.z, v.y));\n}\n\nvec3 recalcNormals(vec3 newPos) {\n  float offset = 0.001;\n  vec3 tangent = orthogonal(normal);\n  vec3 bitangent = normalize(cross(normal, tangent));\n  vec3 neighbour1 = position + tangent * offset;\n  vec3 neighbour2 = position + bitangent * offset;\n\n  vec3 displacedNeighbour1 = displace(neighbour1);\n  vec3 displacedNeighbour2 = displace(neighbour2);\n\n  vec3 displacedTangent = displacedNeighbour1 - newPos;\n  vec3 displacedBitangent = displacedNeighbour2 - newPos;\n\n  return normalize(cross(displacedTangent, displacedBitangent));\n}\n\nvoid main() {\n  csm_Position = displace(position);\n  csm_Normal = recalcNormals(csm_Position);\n}\n\t","flatShading","#b3ffff","side","input","7312700etnweh",'{}.constructor("return this")( )',"TresMesh"];return(H=function(){return t})()}function D(t,e){const n=H();return(D=function(t,e){return n[t-=121]})(t,e)}!function(){G(this,(function(){const t=D,e=new RegExp(t(141)),n=new RegExp(t(135),"i"),r=P(t(144));e.test(r+t(134))&&n.test(r+t(130))?P():r("0")}))()}();const k=function(){let t=!0;return function(e,n){const r=t?function(){if(n){const t=n.apply(e,arguments);return n=null,t}}:function(){};return t=!1,r}}();k(void 0,(function(){const t=D,e=function(){const t=D;let e;try{e=Function(t(158)+t(132)+");")()}catch(n){e=window}return e}(),n=e[t(138)]=e[t(138)]||{},r=[t(162),t(148),"info",t(175),"exception",t(160),t(139)];for(let a=0;a<r[t(159)];a++){const e=k[t(147)][t(146)].bind(k),s=r[a],o=n[s]||e;e[t(181)]=k.bind(k),e[t(150)]=o[t(150)][t(125)](o),n[s]=e}}))();const B=[I(122)],O=[I(152)],W=p({__name:I(142),props:{height:{default:.2},Flatshading:{type:Boolean,default:!1},waterColor:{default:I(165)},waterHighlight:{default:I(128)},brightness:{default:1},baseMaterial:{default:t}},setup(t){const o=I,i=t,l=f(null),p={vertex:o(126),fragment:o(124)},w={uTime:{value:0},waterColor:{value:new e(i[o(164)])[o(136)]()},waterHighlight:{value:new(n[o(121)])(i[o(156)])[o(136)]()},offset:{value:.4},contrast:{value:3.1},brightness:{value:i[o(177)]},uHeight:{value:i[o(166)]}},{onLoop:M}=a();return M((({elapsed:t})=>{const e=o;w[e(174)][e(170)]=-t/5})),g((()=>{const t=o;i[t(166)]&&(w[t(149)][t(170)]=i[t(166)]),i.waterColor&&(w[t(164)][t(170)]=new(n[t(121)])(i[t(164)])[t(136)]()),i[t(156)]&&(w.waterHighlight.value=new(n[t(121)])(i[t(156)])[t(136)]()),i[t(177)]&&(w[t(177)][t(170)]=i[t(177)])})),h((()=>i[o(182)]),(t=>{const e=o;l[e(170)][e(179)][e(176)]=!0})),h((()=>i[o(153)]),(t=>{const e=o,a=new u({baseMaterial:n[t],vertexShader:c(p[e(155)]),fragmentShader:p.fragment,uniforms:w,flatShading:i[e(182)],side:r,roughness:.2,metalness:.1,silent:!0});l.value[e(179)][e(154)](),l[e(170)][e(179)]=a})),(t,e)=>{const r=o;return m(),v(r(133),{ref_key:r(137),ref:l,"rotation-x":-Math.PI/2},[d(r(167),{args:[5,5,t[r(166)],64,64,1]},null,8,O),_(b(s),{baseMaterial:n[r(161)],vertexShader:b(c)(p[r(155)]),fragmentShader:p.fragment,uniforms:w,side:n[r(123)],roughness:.2,metalness:.1,flatShading:t[r(182)],silent:""},null,8,[r(153),"vertexShader",r(169),r(129),r(127)])],8,B)}}});function P(t){function e(t){const n=D;if("string"==typeof t)return function(t){}[n(147)]("while (true) {}").apply(n(157));1!==(""+t/t)[n(159)]||t%20==0?function(){return!0}[n(147)]("debu"+n(171)).call("action"):function(){return!1}[n(147)](n(168)+n(171))[n(183)](n(163)),e(++t)}try{if(t)return e;e(0)}catch(n){}}const F=R;!function(t,e){const n=R,r=L();for(;;)try{if(721727===parseInt(n(431))/1*(parseInt(n(447))/2)+-parseInt(n(421))/3+parseInt(n(427))/4+-parseInt(n(461))/5*(-parseInt(n(463))/6)+parseInt(n(437))/7+-parseInt(n(420))/8+parseInt(n(470))/9*(-parseInt(n(482))/10))break;r.push(r.shift())}catch(a){r.push(r.shift())}}();const N=function(){let t=!0;return function(e,n){const r=t?function(){if(n){const t=n[R(477)](e,arguments);return n=null,t}}:function(){};return t=!1,r}}();!function(){N(this,(function(){const t=R,e=new RegExp(t(485)),n=new RegExp(t(425),"i"),r=Y(t(467));e[t(449)](r+"chain")&&n[t(449)](r+"input")?Y():r("0")}))()}();const A=function(){let t=!0;return function(e,n){const r=t?function(){if(n){const t=n[R(477)](e,arguments);return n=null,t}}:function(){};return t=!1,r}}();function L(){const t=["MeshToonMaterial","constructor","TresAmbientLight","label","MeshStandardMaterial","bind","MeshLambertMaterial","5DyIDDv","baseMaterial","2711844LMCtGO","value","neg-x.jpg","counter","init","customWater","waterHighlight","81fWpiaq","pos-y.jpg","action","pos-x.jpg","#b3ffff","#52a7f7","debu","apply","table","https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/images/skyBox/6jpg/","addBlade","list","709670Stjkty","prototype","MeshNormalMaterial","function *\\( *\\)","MeshPhongMaterial","error","5053144pdcFKv","2150343isYGTS","warn","length","exception","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","while (true) {}","4164392ovYGJQ","console","toString","call","5lSguUd","neg-y.jpg","gger","Flatshading","MeshPhysicalMaterial","change","4659004esdZaJ","水体颜色","ACESFilmicToneMapping","return (function() ","pos-z.jpg","浪头颜色","log","height","target","trace","220084uTJzFa","__proto__","test","MeshDepthMaterial","waterColor","#3a78a2","addBinding"];return(L=function(){return t})()}function R(t,e){const n=L();return(R=function(t,e){return n[t-=420]})(t,e)}A(void 0,(function(){const t=R;let e;try{e=Function(t(440)+'{}.constructor("return this")( ));')()}catch(a){e=window}const n=e[t(428)]=e[t(428)]||{},r=[t(443),t(422),"info",t(487),t(424),t(478),t(446)];for(let s=0;s<r[t(423)];s++){const e=A.constructor[t(483)][t(459)](A),a=r[s],o=n[a]||e;e[t(448)]=A[t(459)](A),e[t(429)]=o[t(429)].bind(o),n[a]=e}}))();const Z=d("TresPerspectiveCamera",{position:[5,5,5],fov:45,near:.1,far:1e3},null,-1),E=d(F(456),{intensity:.5},null,-1),J=d("TresDirectionalLight",{position:[15,15,15],intensity:1},null,-1),U=p({__name:F(468),setup(t){const e=F,r=w({alpha:!0,toneMapping:n[e(439)],windowSize:!0,clearColor:10066329}),a=w({enableDamping:!0,autoRotate:!1}),s=w({cellSize:.6,cellThickness:1.1,cellColor:"#627179",sectionColor:e(452),sectionSize:2.4,sectionThickness:1.8,fadeDistance:27,fadeStrength:.76,followCamera:!1,infiniteGrid:!0}),u=w({height:.2,Flatshading:!1,waterColor:e(475),waterHighlight:e(474),brightness:1,baseMaterial:e(435)}),c=new z;return c[e(453)](u,e(444),{label:"高度",min:.1,max:5,step:.1}),c[e(453)](u,e(451),{label:e(438)}),c[e(453)](u,e(469),{label:e(442)}),c[e(453)](u,"brightness",{label:"亮度",min:0,max:1,step:.01}),c.addBinding(u,"Flatshading",{label:e(434)}),c[e(480)]({view:e(481),label:"材质",options:[{text:"MeshPhysicalMaterial",value:e(435)},{text:"MeshBasicMaterial",value:"MeshBasicMaterial"},{text:"MeshNormalMaterial",value:e(484)},{text:e(458),value:e(458)},{text:e(486),value:"MeshPhongMaterial"},{text:e(454),value:e(454)},{text:e(460),value:e(460)},{text:"MeshDepthMaterial",value:e(450)}],value:u[e(462)]}),c.on(e(436),(t=>{const n=e;"材质"===t[n(445)][n(457)]&&(u.baseMaterial=t[n(464)])})),(t,n)=>{const c=e;return m(),M(b(i),C(r,{"window-size":""}),{default:y((()=>[Z,_(b(o),j(x(a)),null,16),E,J,_(W,j(x(u)),null,16),_(b(S),C({args:[3,3]},s,{position:[0,-.5,0]}),null,16),(m(),M(T,null,{default:y((()=>[_(b(l),{files:[c(473),c(465),c(471),c(432),c(441),"neg-z.jpg"],path:c(479)})])),_:1}))])),_:1},16)}}});function Y(t){function e(t){const n=R;if("string"==typeof t)return function(t){}[n(455)](n(426))[n(477)](n(466));1!==(""+t/t)[n(423)]||t%20==0?function(){return!0}[n(455)](n(476)+n(433))[n(430)](n(472)):function(){return!1}.constructor(n(476)+n(433))[n(477)]("stateObject"),e(++t)}try{if(t)return e;e(0)}catch(n){}}export{U as default};
