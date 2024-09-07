import{p as n,$ as e,N as t,d as r}from"./@tresjs.bIWdfO9a1725721021019.js";import{W as o,j as i,c6 as s,Z as a,l as u,aV as c,bY as f,bW as l}from"./three.a9V66irq1725721021019.js";import{d as v,a5 as p,a2 as m,o as d,E as h,L as g,u as x,F as w,e as y,f as D,g as b,j as E,al as S,m as I}from"./@vue._6MD2XyK1725721021019.js";import"./tweakpane.yHWGBmom1725721021019.js";import"./@vueuse.Ex-1AOlz1725721021019.js";const R=L;function C(){const n=["texture","info","TresSphereGeometry","__proto__","bind","render","4810223scMaRM","1522467FVoDdE","width","prototype","\n    varying vec2 vUv;\n    void main() {\n        vec4 mvPosition = modelViewMatrix * vec4(position, 1.);\n        gl_Position = projectionMatrix * mvPosition;\n        vUv = uv;\n    }\n","while (true) {}","gger","TresMeshPhongMaterial","derivatives","316610hYFkdK","return (function() ","constructor","noiseContourMeshRef2","innerHeight","stateObject","function *\\( *\\)","init","action","input","iTime","side","value","material","test","console","76biBFUY","apply","958758knNvOH","call","error",'{}.constructor("return this")( )',"40KbWOiv","string","uniforms","6989934xbvhLz","toString","warn","tShadow","177736JxdhZv","3206yChWUE","innerWidth","\n    uniform sampler2D tDiffuse;\n    uniform sampler2D tShadow;\n    uniform vec2 iResolution;\n\n    varying vec2 vUv;\n    #define Sensitivity (vec2(0.3, 1.5) * iResolution.y / 400.0)\n    float checkSame(vec4 center, vec4 samplef)\n    {\n        vec2 centerNormal = center.xy;\n        float centerDepth = center.z;\n        vec2 sampleNormal = samplef.xy;\n        float sampleDepth = samplef.z;\n\n        vec2 diffNormal = abs(centerNormal - sampleNormal) * Sensitivity.x;\n        bool isSameNormal = (diffNormal.x + diffNormal.y) < 0.1;\n        float diffDepth = abs(centerDepth - sampleDepth) * Sensitivity.y;\n        bool isSameDepth = diffDepth < 0.1;\n\n        return (isSameNormal && isSameDepth) ? 1.0 : 0.0;\n    }\n\n    void main( )\n    {\n        vec4 sample0 = texture2D(tDiffuse, vUv);\n        vec4 sample1 = texture2D(tDiffuse, vUv + (vec2(1.0, 1.0) / iResolution.xy));\n        vec4 sample2 = texture2D(tDiffuse, vUv + (vec2(-1.0, -1.0) / iResolution.xy));\n        vec4 sample3 = texture2D(tDiffuse, vUv + (vec2(-1.0, 1.0) / iResolution.xy));\n        vec4 sample4 = texture2D(tDiffuse, vUv + (vec2(1.0, -1.0) / iResolution.xy));\n\n        float edge = checkSame(sample1, sample2) * checkSame(sample3, sample4);\n\n        // gl_FragColor = vec4(edge, sample0.w, 1.0, 1.0);\n        float shadow = texture2D(tShadow, vUv).x;\n        gl_FragColor = vec4(edge, shadow, 1.0, 1.0);\n\n    }\n","length","noiseContourMeshRef1","\nuniform sampler2D tDiffuse;\nuniform sampler2D tNoise;\nuniform float iTime;\n\nvarying vec2 vUv;\n\n#define EdgeColor vec4(0.2, 0.2, 0.15, 1.0)\n#define BackgroundColor vec4(1,0.95,0.85,1)\n#define NoiseAmount 0.01\n#define ErrorPeriod 30.0\n#define ErrorRange 0.003\n\n// Reference: https://www.shadertoy.com/view/MsSGD1\nfloat triangle(float x)\n{\n    return abs(1.0 - mod(abs(x), 2.0)) * 2.0 - 1.0;\n}\n\nfloat rand(float x)\n{\n    return fract(sin(x) * 43758.5453);\n}\n\nvoid main()\n{\n    float time = floor(iTime * 16.0) / 16.0;\n    vec2 uv = vUv;\n    uv += vec2(triangle(uv.y * rand(time) * 1.0) * rand(time * 1.9) * 0.005,\n            triangle(uv.x * rand(time * 3.4) * 1.0) * rand(time * 2.1) * 0.005);\n\n    float noise = (texture2D(tNoise, uv * 0.5).r - 0.5) * NoiseAmount;\n    vec2 uvs[3];\n    uvs[0] = uv + vec2(ErrorRange * sin(ErrorPeriod * uv.y + 0.0) + noise, ErrorRange * sin(ErrorPeriod * uv.x + 0.0) + noise);\n    uvs[1] = uv + vec2(ErrorRange * sin(ErrorPeriod * uv.y + 1.047) + noise, ErrorRange * sin(ErrorPeriod * uv.x + 3.142) + noise);\n    uvs[2] = uv + vec2(ErrorRange * sin(ErrorPeriod * uv.y + 2.094) + noise, ErrorRange * sin(ErrorPeriod * uv.x + 1.571) + noise);\n\n    float edge = texture2D(tDiffuse, uvs[0]).r * texture2D(tDiffuse, uvs[1]).r * texture2D(tDiffuse, uvs[2]).r;\n    float diffuse = texture2D(tDiffuse, uv).g;\n\n    float w = fwidth(diffuse) * 2.0;\n    vec4 mCol = mix(BackgroundColor * 0.5, BackgroundColor, mix(0.0, 1.0, smoothstep(-w, w, diffuse - 0.3)));\n    gl_FragColor = mix(EdgeColor, mCol, edge);\n}\n","#ffffff","389xstOBj","addPass","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","392oCLvXT","table","counter"];return(C=function(){return n})()}!function(n,e){const t=L,r=C();for(;;)try{if(677967===parseInt(t(211))/1*(parseInt(t(262))/2)+-parseInt(t(250))/3+-parseInt(t(248))/4*(-parseInt(t(232))/5)+-parseInt(t(257))/6+parseInt(t(214))/7*(-parseInt(t(261))/8)+-parseInt(t(224))/9+parseInt(t(254))/10*(parseInt(t(223))/11))break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const _=function(){let n=!0;return function(e,t){const r=n?function(){if(t){const n=t[L(249)](e,arguments);return t=null,n}}:function(){};return n=!1,r}}();!function(){_(this,(function(){const n=L,e=new RegExp(n(238)),t=new RegExp(n(213),"i"),r=A(n(239));e[n(246)](r+"chain")&&t[n(246)](r+n(241))?A():r("0")}))()}();const N=function(){let n=!0;return function(e,t){const r=n?function(){if(t){const n=t[L(249)](e,arguments);return t=null,n}}:function(){};return n=!1,r}}();N(void 0,(function(){const n=L;let e;try{e=Function(n(233)+n(253)+");")()}catch(o){e=window}const t=e.console=e[n(247)]||{},r=["log",n(259),n(218),n(252),"exception",n(215),"trace"];for(let i=0;i<r.length;i++){const e=N[n(234)][n(226)][n(221)](N),o=r[i],s=t[o]||e;e[n(220)]=N[n(221)](N),e[n(258)]=s[n(258)][n(221)](s),t[o]=e}}))();const T=[R(243),"rotation-x"],j=[g("TresBoxGeometry",{args:[400,400,400]},null,-1),g(R(230),{color:R(210),shininess:0},null,-1)],P=[R(243)],M=[g(R(219),{args:[50,32,32]},null,-1),g("TresMeshPhongMaterial",{color:R(210),shininess:0},null,-1)],U=R(227),F=R(206),k=R(209);function L(n,e){const t=C();return(L=function(n,e){return t[n-=205]})(n,e)}const z=v({__name:"noiseContour",async setup(r){const v=R;let y,D;const{camera:b,renderer:E,scene:S,sizes:I}=n(),C=([y,D]=p((()=>t({map:"./plugins/shadertoyToThreejs/image/noise.png"}))),y=await y,D(),y),{onLoop:_,onAfterLoop:N}=e(),L=new o(1,1,{minFilter:u,magFilter:u,format:c,stencilBuffer:!1}),z=new i(window[v(205)],window[v(236)]);let A=null;const Z=new s({uniforms:{tDiffuse:{type:"t",value:null},tShadow:{type:"t",value:null},iResolution:{type:"v2",value:z}},vertexShader:U,fragmentShader:F}),B=new s({uniforms:{tDiffuse:{type:"t",value:null},iTime:{type:"f",value:0},tNoise:{type:"t",value:C}},vertexShader:U,fragmentShader:k});return B.renderToScreen=!0,B[v(245)].extensions[v(231)]=!0,m((()=>{const n=v;I[n(225)][n(244)]&&(A=new f(E[n(244)]),A[n(212)](new l(S.value,b[n(244)])),A.addPass(Z),A[n(212)](B))})),_((({elapsed:n})=>{const e=v;E[e(244)][e(222)](S[e(244)],b.value,L),Z[e(256)][e(260)][e(244)]=L[e(217)],B.uniforms[e(242)][e(244)]=n})),N((()=>{A&&A[v(222)]()})),(n,e)=>{const t=v;return d(),h(w,null,[g("TresMesh",{ref:t(235),side:x(a),position:[400,100,0],"rotation-x":2*Math.PI/360*90,"cast-shadow":""},j,8,T),g("TresMesh",{ref:t(208),side:x(a),position:[0,150,0],"cast-shadow":""},M,8,P)],64)}}});function A(n){function e(n){const t=L;if(typeof n===t(255))return function(n){}[t(234)](t(228))[t(249)](t(216));1!==(""+n/n)[t(207)]||n%20==0?function(){return!0}[t(234)]("debu"+t(229))[t(251)](t(240)):function(){return!1}[t(234)]("debu"+t(229))[t(249)](t(237)),e(++n)}try{if(n)return e;e(0)}catch(t){}}const Z=G;function B(){const n=["table","1042908YrlYUk","prototype","TresAmbientLight","TresPerspectiveCamera","error","chain","8334lDNcZm","debu","stateObject","return (function() ","TresDirectionalLight","function *\\( *\\)","TresCanvas","test","1402604SMFEfN","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","bind","92LFGAJG","call","trace","counter","131247DjCZIM","#ffffff","8495010tYBifT","length","string","11KbONvZ","toString",'{}.constructor("return this")( )',"3539050ECjXrl","gger","2072ehFYhj","log","noiseContourPage","18wUcojL","perspectiveCameraRef","668915nHugUy","red","__proto__","constructor","console","apply","action","warn"];return(B=function(){return n})()}!function(n,e){const t=G,r=B();for(;;)try{if(515117===-parseInt(t(492))/1+-parseInt(t(501))/2+parseInt(t(477))/3*(parseInt(t(473))/4)+parseInt(t(485))/5+parseInt(t(490))/6*(parseInt(t(470))/7)+parseInt(t(487))/8*(parseInt(t(507))/9)+-parseInt(t(479))/10*(parseInt(t(482))/11))break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const Y=function(){let n=!0;return function(e,t){const r=n?function(){if(t){const n=t[G(497)](e,arguments);return t=null,n}}:function(){};return n=!1,r}}();!function(){Y(this,(function(){const n=G,e=new RegExp(n(467)),t=new RegExp(n(471),"i"),r=V("init");e.test(r+n(506))&&t[n(469)](r+"input")?V():r("0")}))()}();const O=function(){let n=!0;return function(e,t){const r=n?function(){if(t){const n=t.apply(e,arguments);return t=null,n}}:function(){};return n=!1,r}}();function G(n,e){const t=B();return(G=function(n,e){return t[n-=463]})(n,e)}O(void 0,(function(){const n=G,e=function(){const n=G;let e;try{e=Function(n(465)+n(484)+");")()}catch(t){e=window}return e}(),t=e[n(496)]=e[n(496)]||{},r=[n(488),n(499),"info",n(505),"exception",n(500),n(475)];for(let o=0;o<r[n(480)];o++){const e=O[n(495)][n(502)][n(472)](O),i=r[o],s=t[i]||e;e[n(494)]=O[n(472)](O),e.toString=s[n(483)].bind(s),t[i]=e}}))();const W={ref:Z(491),position:[600,750,-1221],fov:45,near:1,far:1e4},$=g(Z(503),{color:Z(478)},null,-1),H=g(Z(466),{position:[400,400,400],intensity:1,color:Z(493)},null,-1),K=v({__name:Z(489),setup(n){const e={clearColor:"#000000",shadows:!0,alpha:!1,useLegacyLights:!0};return(n,t)=>{const o=G,i=y(o(468));return d(),D(i,I(e,{"window-size":""}),{default:b((()=>[g(o(504),W,null,512),E(x(r)),$,H,(d(),D(S,null,{default:b((()=>[E(z)])),_:1}))])),_:1},16)}}});function V(n){function e(n){const t=G;if(typeof n===t(481))return function(n){}.constructor("while (true) {}")[t(497)](t(476));1!==(""+n/n)[t(480)]||n%20==0?function(){return!0}[t(495)](t(463)+t(486))[t(474)](t(498)):function(){return!1}.constructor(t(463)+"gger")[t(497)](t(464)),e(++n)}try{if(n)return e;e(0)}catch(t){}}export{K as default};
