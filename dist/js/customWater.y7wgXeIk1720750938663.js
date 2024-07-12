import{a5 as t,a3 as e,Z as n}from"./three.c_4mN3mZ1720750938663.js";import{T as r,r as a,d as s,P as o}from"./@tresjs.toBU36DO1720750938663.js";import{a as i}from"./index.GoH3HiI41720750938663.js";import"./index._iRZuSC11720750938663.js";import{C as l}from"./three-custom-shader-material.vDIhSa4e1720750938663.js";import"./object-hash.uK40h2Gd1720750938663.js";import"./@amap.aVWyhucH1720750938663.js";import"./glsl-tokenizer.bTdSVbty1720750938663.js";import{p as c}from"./gl-noise.BrVtymbx1720750938663.js";import{d as u,b as p,a2 as f,w as g,o as h,D as m,J as v,j as d,u as _,r as b,f as w,g as M,aj as j,ak as y,m as x,al as z}from"./@vue.ApkyOKE71720750938663.js";import{P as C}from"./tweakpane.yHWGBmom1720750938663.js";import{_ as T}from"./gridPlusCom.vue_vue_type_script_setup_true_lang.gLpu46HI1720750938663.js";import"./@vueuse.NiHn2U_k1720750938663.js";import"./three-stdlib.m46OwZ2t1720750938663.js";import"./@pmndrs.PBnvUkpX1720750938663.js";import"./reflectorDiffuse.vue_vue_type_script_setup_true_lang.zfewAwxS1720750938663.js";import"./all.three.Vx8gduNk1720750938663.js";import"./oimophysics.x0jH7fze1720750938663.js";import"./reflectorDUDV.vue_vue_type_script_setup_true_lang.knrgBmxh1720750938663.js";import"./reflectorShaderMesh.vue_vue_type_script_setup_true_lang.klTvooIz1720750938663.js";import"./whiteFloorMesh.vue_vue_type_script_setup_true_lang.NjwFtdSr1720750938663.js";import"./videoFloor.vue_vue_type_script_setup_true_lang.vRgjhMOP1720750938663.js";import"./glsl-token-string.Geqk9Ccy1720750938663.js";import"./glsl-token-functions.EGRZ6BGB1720750938663.js";import"./jszip.U0Bj1EHt1720750938663.js";const S=G;!function(t,e){const n=G,r=H();for(;;)try{if(220370===-parseInt(n(213))/1*(-parseInt(n(222))/2)+-parseInt(n(191))/3*(parseInt(n(197))/4)+-parseInt(n(190))/5+parseInt(n(221))/6*(-parseInt(n(194))/7)+parseInt(n(211))/8+-parseInt(n(212))/9*(parseInt(n(185))/10)+parseInt(n(183))/11)break;r.push(r.shift())}catch(a){r.push(r.shift())}}();const I=function(){let t=!0;return function(e,n){const r=t?function(){if(n){const t=n[G(178)](e,arguments);return n=null,t}}:function(){};return t=!1,r}}();function G(t,e){const n=H();return(G=function(t,e){return n[t-=171]})(t,e)}function H(){const t=["rotation-x","test","function *\\( *\\)","bind","uTime","brightness","args","TresMesh","3463608Pncoeu","27jdlDDa","3147hqBdaY","flatShading","__proto__","while (true) {}","exception","tmRef","fragment","debu","30BplwtR","274dzbikR","TresBoxGeometry","console","customWaterMesh","value","waterHighlight","chain","waterColor","side","\nuniform float uTime;\nuniform float uHeight;\nvarying float vHeight;\n\nvec3 displace(vec3 point) {\n  vec3 p = point;\n  p.y += uTime * 2.0;\n  gln_tFBMOpts fbmOpts = gln_tFBMOpts(1.0, 0.4, 2.3, 0.4, 1.0, 5, false, false);\n  gln_tGerstnerWaveOpts A = gln_tGerstnerWaveOpts(vec2(0.0, -1.0), 0.5, 2.0);\n  gln_tGerstnerWaveOpts B = gln_tGerstnerWaveOpts(vec2(0.0, 1.0), 0.25, 4.0);\n  gln_tGerstnerWaveOpts C = gln_tGerstnerWaveOpts(vec2(1.0, 1.0), 0.15, 6.0);\n  gln_tGerstnerWaveOpts D = gln_tGerstnerWaveOpts(vec2(1.0, 1.0), 0.4, 2.0);\n  vec3 n = vec3(0.0);\n  if(p.z >= uHeight / 2.0) {\n      n.z += gln_normalize(gln_pfbm(p.xy + (uTime * 0.5), fbmOpts));\n      n += gln_GerstnerWave(p, A, uTime).xzy;\n      n += gln_GerstnerWave(p, B, uTime).xzy * 0.5;\n      n += gln_GerstnerWave(p, C, uTime).xzy * 0.25;\n      n += gln_GerstnerWave(p, D, uTime).xzy * 0.2;\n  }\n  vHeight = n.z;\n  return point + n;\n}\n\nvec3 orthogonal(vec3 v) {\n  return normalize(abs(v.x) > abs(v.z) ? vec3(-v.y, v.x, 0.0)\n  : vec3(0.0, -v.z, v.y));\n}\n\nvec3 recalcNormals(vec3 newPos) {\n  float offset = 0.001;\n  vec3 tangent = orthogonal(normal);\n  vec3 bitangent = normalize(cross(normal, tangent));\n  vec3 neighbour1 = position + tangent * offset;\n  vec3 neighbour2 = position + bitangent * offset;\n\n  vec3 displacedNeighbour1 = displace(neighbour1);\n  vec3 displacedNeighbour2 = displace(neighbour2);\n\n  vec3 displacedTangent = displacedNeighbour1 - newPos;\n  vec3 displacedBitangent = displacedNeighbour2 - newPos;\n\n  return normalize(cross(displacedTangent, displacedBitangent));\n}\n\nvoid main() {\n  csm_Position = displace(position);\n  csm_Normal = recalcNormals(csm_Position);\n}\n\t","call","length","dispose","convertLinearToSRGB","prototype","vertexShader","string","#52a7f7","toString","MeshPhysicalMaterial","Color","material","stateObject","apply","DoubleSide","input","vertex","height","1493756DYfgRF","Flatshading","475460VSvexG","fragmentShader","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","constructor","baseMaterial","349950saRKtc","138sJRxmm","return (function() ","warn","479822igcMUR","log",'{}.constructor("return this")( )',"19492KjwnHv","action","uHeight","error","counter","init"];return(H=function(){return t})()}!function(){I(this,(function(){const t=G,e=new RegExp(t(205)),n=new RegExp(t(187),"i"),r=F(t(202));e[t(204)](r+t(228))&&n[t(204)](r+t(180))?F():r("0")}))()}();const k=function(){let t=!0;return function(e,n){const r=t?function(){if(n){const t=n[G(178)](e,arguments);return n=null,t}}:function(){};return t=!1,r}}();k(void 0,(function(){const t=G,e=function(){const t=G;let e;try{e=Function(t(192)+t(196)+");")()}catch(n){e=window}return e}(),n=e[t(224)]=e.console||{},r=[t(195),t(193),"info",t(200),t(217),"table","trace"];for(let a=0;a<r.length;a++){const e=k[t(188)][t(236)][t(206)](k),s=r[a],o=n[s]||e;e[t(215)]=k[t(206)](k),e.toString=o[t(173)][t(206)](o),n[s]=e}}))();const B=[S(203)],D=[S(209)],W=u({__name:S(225),props:{height:{default:.2},Flatshading:{type:Boolean,default:!1},waterColor:{default:S(172)},waterHighlight:{default:"#b3ffff"},brightness:{default:1},baseMaterial:{default:t[S(174)]}},setup(s){const o=S,i=s,u=p(null),b={vertex:o(231),fragment:"\nvarying float vHeight;\nuniform vec3 waterColor;\nuniform vec3 waterHighlight;\nuniform float offset;\nuniform float contrast;\nuniform float brightness;\n\nvec3 calcColor() {\n  float mask = (pow(vHeight, 2.) - offset) * contrast;\n  vec3 diffuseColor = mix(waterColor, waterHighlight, mask);\n  diffuseColor *= brightness;\n  return diffuseColor;\n}\n\nvoid main() {\n  csm_DiffuseColor = vec4(calcColor(), 1.0);\n}\n\t"},w={uTime:{value:0},waterColor:{value:new(t[o(175)])(i[o(229)])[o(235)]()},waterHighlight:{value:new(t[o(175)])(i[o(227)])[o(235)]()},offset:{value:.4},contrast:{value:3.1},brightness:{value:i[o(208)]},uHeight:{value:i[o(182)]}},{onLoop:M}=a();return M((({elapsed:t})=>{const e=o;w[e(207)][e(226)]=-t/5})),f((()=>{const e=o;i[e(182)]&&(w[e(199)][e(226)]=i.height),i[e(229)]&&(w[e(229)][e(226)]=new(t[e(175)])(i[e(229)])[e(235)]()),i[e(227)]&&(w[e(227)][e(226)]=new(t[e(175)])(i[e(227)])[e(235)]()),i[e(208)]&&(w[e(208)][e(226)]=i[e(208)])})),g((()=>i[o(184)]),(t=>{const e=o;u[e(226)][e(176)].needsUpdate=!0})),g((()=>i.baseMaterial),(e=>{const r=o,a=new l({baseMaterial:t[e],vertexShader:c(b[r(181)]),fragmentShader:b.fragment,uniforms:w,flatShading:i[r(184)],side:n,roughness:.2,metalness:.1,silent:!0});u.value[r(176)][r(234)](),u[r(226)].material=a})),(n,a)=>{const s=o;return h(),m(s(210),{ref_key:s(218),ref:u,"rotation-x":-Math.PI/2},[v(s(223),{args:[5,5,n[s(182)],64,64,1]},null,8,D),d(_(r),{baseMaterial:e,vertexShader:_(c)(b[s(181)]),fragmentShader:b[s(219)],uniforms:w,side:t[s(179)],roughness:.2,metalness:.1,flatShading:n.Flatshading,silent:""},null,8,[s(189),s(237),s(186),s(230),s(214)])],8,B)}}});function F(t){function e(t){const n=G;if(typeof t===n(171))return function(t){}[n(188)](n(216))[n(178)](n(201));1!==(""+t/t)[n(233)]||t%20==0?function(){return!0}.constructor(n(220)+"gger")[n(232)](n(198)):function(){return!1}[n(188)](n(220)+"gger")[n(178)](n(177)),e(++t)}try{if(t)return e;e(0)}catch(n){}}const O=E;!function(t,e){const n=E,r=R();for(;;)try{if(738606===parseInt(n(387))/1*(parseInt(n(442))/2)+-parseInt(n(389))/3*(parseInt(n(393))/4)+-parseInt(n(415))/5+-parseInt(n(392))/6+parseInt(n(435))/7*(-parseInt(n(433))/8)+-parseInt(n(428))/9+parseInt(n(390))/10)break;r.push(r.shift())}catch(a){r.push(r.shift())}}();const P=function(){let t=!0;return function(e,n){const r=t?function(){if(n){const t=n[E(401)](e,arguments);return n=null,t}}:function(){};return t=!1,r}}();function R(){const t=["pos-y.jpg","86421UiiwVh","52065930HQDsoa","debu","8439798olXXWG","164oWtknC","files","gger","TresDirectionalLight","MeshPhongMaterial","function *\\( *\\)","pos-z.jpg","prototype","apply","info","log","return (function() ","call","#3a78a2","MeshDepthMaterial","console","height","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","table","init","ACESFilmicToneMapping","neg-z.jpg","5295750IzXEyb","baseMaterial","change","brightness","MeshLambertMaterial","Flatshading","neg-y.jpg","__proto__","bind","error","target","MeshStandardMaterial","test","10669806ksXHsp","waterHighlight","stateObject","addBlade","constructor","976UDrXxp","浪头颜色","18690sswhTY","addBinding","exception","counter","waterColor","TresAmbientLight","MeshNormalMaterial","106178KblGrR","label","MeshToonMaterial","MeshPhysicalMaterial","value","#52a7f7",'{}.constructor("return this")( )',"neg-x.jpg","水体颜色","#b3ffff","toString","action","length","13FCtGag"];return(R=function(){return t})()}!function(){P(this,(function(){const t=E,e=new RegExp(t(398)),n=new RegExp(t(410),"i"),r=Z(t(412));e.test(r+"chain")&&n[t(427)](r+"input")?Z():r("0")}))()}();const A=function(){let t=!0;return function(e,n){const r=t?function(){if(n){const t=n.apply(e,arguments);return n=null,t}}:function(){};return t=!1,r}}();A(void 0,(function(){const t=E;let e;try{e=Function(t(404)+t(380)+");")()}catch(a){e=window}const n=e[t(408)]=e[t(408)]||{},r=[t(403),"warn",t(402),t(424),t(437),t(411),"trace"];for(let s=0;s<r[t(386)];s++){const e=A.constructor[t(400)][t(423)](A),a=r[s],o=n[a]||e;e[t(422)]=A[t(423)](A),e[t(384)]=o[t(384)][t(423)](o),n[a]=e}}))();const N=v("TresPerspectiveCamera",{position:[5,5,5],fov:45,near:.1,far:1e3},null,-1),L=v(O(440),{intensity:.5},null,-1),U=v(O(396),{position:[15,15,15],intensity:1},null,-1);function E(t,e){const n=R();return(E=function(t,e){return n[t-=375]})(t,e)}const X=u({__name:"customWater",setup(e){const n=O,r=b({alpha:!0,toneMapping:t[n(413)],windowSize:!0,clearColor:10066329}),a=b({enableDamping:!0,autoRotate:!1}),l=b({cellSize:.6,cellThickness:1.1,cellColor:"#627179",sectionColor:n(406),sectionSize:2.4,sectionThickness:1.8,fadeDistance:27,fadeStrength:.76,followCamera:!1,infiniteGrid:!0}),c=b({height:.2,Flatshading:!1,waterColor:n(379),waterHighlight:n(383),brightness:1,baseMaterial:n(377)}),u=new C;return u.addBinding(c,n(409),{label:"高度",min:.1,max:5,step:.1}),u[n(436)](c,n(439),{label:n(382)}),u[n(436)](c,n(429),{label:n(434)}),u[n(436)](c,n(418),{label:"亮度",min:0,max:1,step:.01}),u[n(436)](c,n(420),{label:"Flatshading"}),u[n(431)]({view:"list",label:"材质",options:[{text:n(377),value:n(377)},{text:"MeshBasicMaterial",value:"MeshBasicMaterial"},{text:n(441),value:n(441)},{text:n(426),value:n(426)},{text:"MeshPhongMaterial",value:n(397)},{text:"MeshToonMaterial",value:n(376)},{text:n(419),value:"MeshLambertMaterial"},{text:n(407),value:n(407)}],value:c[n(416)]}),u.on(n(417),(t=>{const e=n;"材质"===t[e(425)][e(375)]&&(c[e(416)]=t[e(378)])})),(t,e)=>{const u=n;return h(),w(_(o),x(r,{"window-size":""}),{default:M((()=>[N,d(_(s),j(y(a)),null,16),L,U,d(W,j(y(c)),null,16),d(_(T),x({args:[3,3]},l,{position:[0,-.5,0]}),null,16),(h(),w(z,null,{default:M((()=>[d(_(i),{files:["pos-x.jpg",u(381),u(388),u(421),u(399),u(414)],path:"https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/images/skyBox/6jpg/"},null,8,[u(394)])])),_:1}))])),_:1},16)}}});function Z(t){function e(t){const n=E;if("string"==typeof t)return function(t){}.constructor("while (true) {}")[n(401)](n(438));1!==(""+t/t)[n(386)]||t%20==0?function(){return!0}[n(432)](n(391)+n(395))[n(405)](n(385)):function(){return!1}[n(432)](n(391)+n(395))[n(401)](n(430)),e(++t)}try{if(t)return e;e(0)}catch(n){}}export{X as default};