import{p as n,$ as e,N as t,d as r}from"./@tresjs.iXEJQd7J1721298764655.js";import{W as o,j as i,c5 as s,bY as a,bW as u,Z as c,l as f,aV as l}from"./three.0bBjBDi41721298764655.js";import{d as v,a4 as p,a1 as m,o as d,D as h,J as g,u as x,F as w,e as y,f as D,g as R,j as S,al as b,m as _}from"./@vue.Q1VpS3901721298764655.js";import"./tweakpane.yHWGBmom1721298764655.js";import"./@vueuse.hS-CVzal1721298764655.js";const C=P;!function(n,e){const t=P,r=U();for(;;)try{if(819901===parseInt(t(131))/1+parseInt(t(132))/2+parseInt(t(177))/3*(-parseInt(t(150))/4)+parseInt(t(157))/5+parseInt(t(128))/6+-parseInt(t(170))/7+parseInt(t(168))/8)break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const E=function(){let n=!0;return function(e,t){const r=n?function(){if(t){const n=t.apply(e,arguments);return t=null,n}}:function(){};return n=!1,r}}();!function(){E(this,(function(){const n=P,e=new RegExp(n(153)),t=new RegExp(n(137),"i"),r=A(n(135));e.test(r+"chain")&&t[n(127)](r+n(134))?A():r("0")}))()}();const I=function(){let n=!0;return function(e,t){const r=n?function(){if(t){const n=t[P(140)](e,arguments);return t=null,n}}:function(){};return n=!1,r}}();function P(n,e){const t=U();return(P=function(n,e){return t[n-=124]})(n,e)}I(void 0,(function(){const n=P;let e;try{e=Function(n(147)+n(161)+");")()}catch(o){e=window}const t=e[n(173)]=e[n(173)]||{},r=["log",n(159),n(133),n(142),"exception",n(124),n(163)];for(let i=0;i<r[n(166)];i++){const e=I[n(130)][n(145)][n(167)](I),o=r[i],s=t[o]||e;e[n(174)]=I[n(167)](I),e[n(138)]=s[n(138)][n(167)](s),t[o]=e}}))();const N=[C(148),C(176)],T=[g(C(175),{args:[400,400,400]},null,-1),g(C(151),{color:C(141),shininess:0},null,-1)],j=[C(148)],k=[g(C(149),{args:[50,32,32]},null,-1),g(C(151),{color:"#ffffff",shininess:0},null,-1)];function U(){const n=["uniforms","noiseContour","1266535TUtDQc","texture","warn","TresMesh",'{}.constructor("return this")( )',"noiseContourMeshRef1","trace","width","derivatives","length","bind","5689720nYSFiD","material","6687681jGokyG","tShadow","value","console","__proto__","TresBoxGeometry","rotation-x","4143027RLxics","innerWidth","counter","addPass","stateObject","while (true) {}","\n    varying vec2 vUv;\n    void main() {\n        vec4 mvPosition = modelViewMatrix * vec4(position, 1.);\n        gl_Position = projectionMatrix * mvPosition;\n        vUv = uv;\n    }\n","table","gger","debu","test","3761958GfaNvN","render","constructor","330631StDklW","2468294CrOekW","info","input","init","string","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","toString","renderToScreen","apply","#ffffff","error","call","\nuniform sampler2D tDiffuse;\nuniform sampler2D tNoise;\nuniform float iTime;\n\nvarying vec2 vUv;\n\n#define EdgeColor vec4(0.2, 0.2, 0.15, 1.0)\n#define BackgroundColor vec4(1,0.95,0.85,1)\n#define NoiseAmount 0.01\n#define ErrorPeriod 30.0\n#define ErrorRange 0.003\n\n// Reference: https://www.shadertoy.com/view/MsSGD1\nfloat triangle(float x)\n{\n    return abs(1.0 - mod(abs(x), 2.0)) * 2.0 - 1.0;\n}\n\nfloat rand(float x)\n{\n    return fract(sin(x) * 43758.5453);\n}\n\nvoid main()\n{\n    float time = floor(iTime * 16.0) / 16.0;\n    vec2 uv = vUv;\n    uv += vec2(triangle(uv.y * rand(time) * 1.0) * rand(time * 1.9) * 0.005,\n            triangle(uv.x * rand(time * 3.4) * 1.0) * rand(time * 2.1) * 0.005);\n\n    float noise = (texture2D(tNoise, uv * 0.5).r - 0.5) * NoiseAmount;\n    vec2 uvs[3];\n    uvs[0] = uv + vec2(ErrorRange * sin(ErrorPeriod * uv.y + 0.0) + noise, ErrorRange * sin(ErrorPeriod * uv.x + 0.0) + noise);\n    uvs[1] = uv + vec2(ErrorRange * sin(ErrorPeriod * uv.y + 1.047) + noise, ErrorRange * sin(ErrorPeriod * uv.x + 3.142) + noise);\n    uvs[2] = uv + vec2(ErrorRange * sin(ErrorPeriod * uv.y + 2.094) + noise, ErrorRange * sin(ErrorPeriod * uv.x + 1.571) + noise);\n\n    float edge = texture2D(tDiffuse, uvs[0]).r * texture2D(tDiffuse, uvs[1]).r * texture2D(tDiffuse, uvs[2]).r;\n    float diffuse = texture2D(tDiffuse, uv).g;\n\n    float w = fwidth(diffuse) * 2.0;\n    vec4 mCol = mix(BackgroundColor * 0.5, BackgroundColor, mix(0.0, 1.0, smoothstep(-w, w, diffuse - 0.3)));\n    gl_FragColor = mix(EdgeColor, mCol, edge);\n}\n","prototype","noiseContourMeshRef2","return (function() ","side","TresSphereGeometry","4ftwsJR","TresMeshPhongMaterial","action","function *\\( *\\)","innerHeight"];return(U=function(){return n})()}const F=C(183),M=C(144),z=v({__name:C(156),async setup(r){const v=C;let y,D;const{camera:R,renderer:S,scene:b,sizes:_}=n(),E=([y,D]=p((()=>t({map:"./plugins/shadertoyToThreejs/image/noise.png"}))),y=await y,D(),y),{onLoop:I,onAfterLoop:P}=e(),U=new o(1,1,{minFilter:f,magFilter:f,format:l,stencilBuffer:!1}),z=new i(window[v(178)],window[v(154)]);let A=null;const G=new s({uniforms:{tDiffuse:{type:"t",value:null},tShadow:{type:"t",value:null},iResolution:{type:"v2",value:z}},vertexShader:F,fragmentShader:"\n    uniform sampler2D tDiffuse;\n    uniform sampler2D tShadow;\n    uniform vec2 iResolution;\n\n    varying vec2 vUv;\n    #define Sensitivity (vec2(0.3, 1.5) * iResolution.y / 400.0)\n    float checkSame(vec4 center, vec4 samplef)\n    {\n        vec2 centerNormal = center.xy;\n        float centerDepth = center.z;\n        vec2 sampleNormal = samplef.xy;\n        float sampleDepth = samplef.z;\n\n        vec2 diffNormal = abs(centerNormal - sampleNormal) * Sensitivity.x;\n        bool isSameNormal = (diffNormal.x + diffNormal.y) < 0.1;\n        float diffDepth = abs(centerDepth - sampleDepth) * Sensitivity.y;\n        bool isSameDepth = diffDepth < 0.1;\n\n        return (isSameNormal && isSameDepth) ? 1.0 : 0.0;\n    }\n\n    void main( )\n    {\n        vec4 sample0 = texture2D(tDiffuse, vUv);\n        vec4 sample1 = texture2D(tDiffuse, vUv + (vec2(1.0, 1.0) / iResolution.xy));\n        vec4 sample2 = texture2D(tDiffuse, vUv + (vec2(-1.0, -1.0) / iResolution.xy));\n        vec4 sample3 = texture2D(tDiffuse, vUv + (vec2(-1.0, 1.0) / iResolution.xy));\n        vec4 sample4 = texture2D(tDiffuse, vUv + (vec2(1.0, -1.0) / iResolution.xy));\n\n        float edge = checkSame(sample1, sample2) * checkSame(sample3, sample4);\n\n        // gl_FragColor = vec4(edge, sample0.w, 1.0, 1.0);\n        float shadow = texture2D(tShadow, vUv).x;\n        gl_FragColor = vec4(edge, shadow, 1.0, 1.0);\n\n    }\n"}),L=new s({uniforms:{tDiffuse:{type:"t",value:null},iTime:{type:"f",value:0},tNoise:{type:"t",value:E}},vertexShader:F,fragmentShader:M});return L[v(139)]=!0,L[v(169)].extensions[v(165)]=!0,m((()=>{const n=v;_[n(164)][n(172)]&&(A=new a(S.value),A[n(180)](new u(b[n(172)],R[n(172)])),A.addPass(G),A[n(180)](L))})),I((({elapsed:n})=>{const e=v;S[e(172)].render(b[e(172)],R.value,U),G[e(155)][e(171)].value=U[e(158)],L[e(155)].iTime.value=n})),P((()=>{A&&A[v(129)]()})),(n,e)=>{const t=v;return d(),h(w,null,[g(t(160),{ref:t(146),side:x(c),position:[400,100,0],"rotation-x":2*Math.PI/360*90,"cast-shadow":""},T,8,N),g(t(160),{ref:t(162),side:x(c),position:[0,150,0],"cast-shadow":""},k,8,j)],64)}}});function A(n){function e(n){const t=P;if(typeof n===t(136))return function(n){}[t(130)](t(182))[t(140)](t(179));1!==(""+n/n)[t(166)]||n%20==0?function(){return!0}[t(130)]("debu"+t(125))[t(143)](t(152)):function(){return!1}[t(130)](t(126)+"gger").apply(t(181)),e(++n)}try{if(n)return e;e(0)}catch(t){}}const G=L;function L(n,e){const t=B();return(L=function(n,e){return t[n-=215]})(n,e)}function B(){const n=["6zvGXgn","272248GBvebC","call","while (true) {}","counter","warn","536030BwbPQy","info","#000000","prototype","21685gnkmfd","error","774918LKfcLa","42tmhHPO","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","TresPerspectiveCamera","init",'{}.constructor("return this")( )',"debu","1715515snehnF","stateObject","action","24olTGMt","TresAmbientLight","__proto__","TresCanvas","table","function *\\( *\\)","red","constructor","bind","perspectiveCameraRef","exception","toString","7209510AFRBcU","apply","30699636xcnqYV","test","length","input","gger","34JtesWQ","console","return (function() "];return(B=function(){return n})()}!function(n,e){const t=L,r=B();for(;;)try{if(521711===parseInt(t(249))/1*(parseInt(t(236))/2)+parseInt(t(252))/3*(-parseInt(t(240))/4)+-parseInt(t(258))/5+parseInt(t(239))/6*(-parseInt(t(229))/7)+parseInt(t(217))/8*(-parseInt(t(251))/9)+-parseInt(t(245))/10+parseInt(t(231))/11)break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const W=function(){let n=!0;return function(e,t){const r=n?function(){if(t){const n=t[L(230)](e,arguments);return t=null,n}}:function(){};return n=!1,r}}();!function(){W(this,(function(){const n=L,e=new RegExp(n(222)),t=new RegExp(n(253),"i"),r=V(n(255));e.test(r+"chain")&&t[n(232)](r+n(234))?V():r("0")}))()}();const Z=function(){let n=!0;return function(e,t){const r=n?function(){if(t){const n=t[L(230)](e,arguments);return t=null,n}}:function(){};return n=!1,r}}();Z(void 0,(function(){const n=L;let e;try{e=Function(n(238)+n(256)+");")()}catch(o){e=window}const t=e.console=e[n(237)]||{},r=["log",n(244),n(246),n(250),n(227),n(221),"trace"];for(let i=0;i<r.length;i++){const e=Z[n(224)][n(248)].bind(Z),o=r[i],s=t[o]||e;e[n(219)]=Z[n(225)](Z),e[n(228)]=s[n(228)][n(225)](s),t[o]=e}}))();const $={ref:G(226),position:[600,750,-1221],fov:45,near:1,far:1e4},O=g(G(218),{color:"#ffffff"},null,-1),J=g("TresDirectionalLight",{position:[400,400,400],intensity:1,color:G(223)},null,-1),Q=v({__name:"noiseContourPage",setup(n){const e=G,t={clearColor:e(247),shadows:!0,alpha:!1,useLegacyLights:!0};return(n,o)=>{const i=e,s=y(i(220));return d(),D(s,_(t,{"window-size":""}),{default:R((()=>[g(i(254),$,null,512),S(x(r)),O,J,(d(),D(b,null,{default:R((()=>[S(z)])),_:1}))])),_:1},16)}}});function V(n){function e(n){const t=L;if("string"==typeof n)return function(n){}[t(224)](t(242))[t(230)](t(243));1!==(""+n/n)[t(233)]||n%20==0?function(){return!0}[t(224)](t(257)+t(235))[t(241)](t(216)):function(){return!1}[t(224)](t(257)+t(235))[t(230)](t(215)),e(++n)}try{if(n)return e;e(0)}catch(t){}}export{Q as default};
