import{p as n,$ as e,N as t,d as r}from"./@tresjs.vs5lCFs11722217438692.js";import{W as o,j as s,c6 as i,bY as a,bW as u,Z as c,l as f,aV as l}from"./three.ej3u8izI1722217438692.js";import{d as p,a4 as v,a1 as d,o as m,D as h,J as g,u as y,F as w,e as x,f as D,g as I,j as S,al as b,m as P}from"./@vue.Q1VpS3901722217438692.js";import"./tweakpane.yHWGBmom1722217438692.js";import"./@vueuse.mG9rDBoo1722217438692.js";const R=E;!function(n,e){const t=E,r=k();for(;;)try{if(333887===-parseInt(t(360))/1*(parseInt(t(345))/2)+-parseInt(t(355))/3*(-parseInt(t(374))/4)+-parseInt(t(383))/5*(parseInt(t(372))/6)+-parseInt(t(378))/7+-parseInt(t(361))/8*(-parseInt(t(382))/9)+-parseInt(t(351))/10*(parseInt(t(349))/11)+parseInt(t(327))/12)break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const _=function(){let n=!0;return function(e,t){const r=n?function(){if(t){const n=t.apply(e,arguments);return t=null,n}}:function(){};return n=!1,r}}();function E(n,e){const t=k();return(E=function(n,e){return t[n-=326]})(n,e)}!function(){_(this,(function(){const n=E,e=new RegExp(n(343)),t=new RegExp(n(377),"i"),r=M("init");e[n(335)](r+n(342))&&t[n(335)](r+n(339))?M():r("0")}))()}();const C=function(){let n=!0;return function(e,t){const r=n?function(){if(t){const n=t[E(381)](e,arguments);return t=null,n}}:function(){};return n=!1,r}}();C(void 0,(function(){const n=E;let e;try{e=Function(n(334)+'{}.constructor("return this")( ));')()}catch(o){e=window}const t=e[n(364)]=e[n(364)]||{},r=["log",n(363),n(326),n(356),n(359),n(366),n(367)];for(let s=0;s<r.length;s++){const e=C.constructor[n(344)][n(331)](C),o=r[s],i=t[o]||e;e[n(332)]=C[n(331)](C),e[n(336)]=i[n(336)][n(331)](i),t[o]=e}}))();const N=["side",R(337)],T=[g(R(333),{args:[400,400,400]},null,-1),g(R(329),{color:R(375),shininess:0},null,-1)],j=["side"],U=[g(R(346),{args:[50,32,32]},null,-1),g(R(329),{color:"#ffffff",shininess:0},null,-1)];function k(){const n=["TresMesh","table","trace","call","debu","gger","value","1626wwpqvf","render","2796KOHHPO","#ffffff","renderToScreen","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","2923599wKfxag","derivatives","\nuniform sampler2D tDiffuse;\nuniform sampler2D tNoise;\nuniform float iTime;\n\nvarying vec2 vUv;\n\n#define EdgeColor vec4(0.2, 0.2, 0.15, 1.0)\n#define BackgroundColor vec4(1,0.95,0.85,1)\n#define NoiseAmount 0.01\n#define ErrorPeriod 30.0\n#define ErrorRange 0.003\n\n// Reference: https://www.shadertoy.com/view/MsSGD1\nfloat triangle(float x)\n{\n    return abs(1.0 - mod(abs(x), 2.0)) * 2.0 - 1.0;\n}\n\nfloat rand(float x)\n{\n    return fract(sin(x) * 43758.5453);\n}\n\nvoid main()\n{\n    float time = floor(iTime * 16.0) / 16.0;\n    vec2 uv = vUv;\n    uv += vec2(triangle(uv.y * rand(time) * 1.0) * rand(time * 1.9) * 0.005,\n            triangle(uv.x * rand(time * 3.4) * 1.0) * rand(time * 2.1) * 0.005);\n\n    float noise = (texture2D(tNoise, uv * 0.5).r - 0.5) * NoiseAmount;\n    vec2 uvs[3];\n    uvs[0] = uv + vec2(ErrorRange * sin(ErrorPeriod * uv.y + 0.0) + noise, ErrorRange * sin(ErrorPeriod * uv.x + 0.0) + noise);\n    uvs[1] = uv + vec2(ErrorRange * sin(ErrorPeriod * uv.y + 1.047) + noise, ErrorRange * sin(ErrorPeriod * uv.x + 3.142) + noise);\n    uvs[2] = uv + vec2(ErrorRange * sin(ErrorPeriod * uv.y + 2.094) + noise, ErrorRange * sin(ErrorPeriod * uv.x + 1.571) + noise);\n\n    float edge = texture2D(tDiffuse, uvs[0]).r * texture2D(tDiffuse, uvs[1]).r * texture2D(tDiffuse, uvs[2]).r;\n    float diffuse = texture2D(tDiffuse, uv).g;\n\n    float w = fwidth(diffuse) * 2.0;\n    vec4 mCol = mix(BackgroundColor * 0.5, BackgroundColor, mix(0.0, 1.0, smoothstep(-w, w, diffuse - 0.3)));\n    gl_FragColor = mix(EdgeColor, mCol, edge);\n}\n","apply","18PiBPan","11775xJekrH","tShadow","info","14579556eTcSqK","stateObject","TresMeshPhongMaterial","extensions","bind","__proto__","TresBoxGeometry","return (function() ","test","toString","rotation-x","noiseContour","input","\n    uniform sampler2D tDiffuse;\n    uniform sampler2D tShadow;\n    uniform vec2 iResolution;\n\n    varying vec2 vUv;\n    #define Sensitivity (vec2(0.3, 1.5) * iResolution.y / 400.0)\n    float checkSame(vec4 center, vec4 samplef)\n    {\n        vec2 centerNormal = center.xy;\n        float centerDepth = center.z;\n        vec2 sampleNormal = samplef.xy;\n        float sampleDepth = samplef.z;\n\n        vec2 diffNormal = abs(centerNormal - sampleNormal) * Sensitivity.x;\n        bool isSameNormal = (diffNormal.x + diffNormal.y) < 0.1;\n        float diffDepth = abs(centerDepth - sampleDepth) * Sensitivity.y;\n        bool isSameDepth = diffDepth < 0.1;\n\n        return (isSameNormal && isSameDepth) ? 1.0 : 0.0;\n    }\n\n    void main( )\n    {\n        vec4 sample0 = texture2D(tDiffuse, vUv);\n        vec4 sample1 = texture2D(tDiffuse, vUv + (vec2(1.0, 1.0) / iResolution.xy));\n        vec4 sample2 = texture2D(tDiffuse, vUv + (vec2(-1.0, -1.0) / iResolution.xy));\n        vec4 sample3 = texture2D(tDiffuse, vUv + (vec2(-1.0, 1.0) / iResolution.xy));\n        vec4 sample4 = texture2D(tDiffuse, vUv + (vec2(1.0, -1.0) / iResolution.xy));\n\n        float edge = checkSame(sample1, sample2) * checkSame(sample3, sample4);\n\n        // gl_FragColor = vec4(edge, sample0.w, 1.0, 1.0);\n        float shadow = texture2D(tShadow, vUv).x;\n        gl_FragColor = vec4(edge, shadow, 1.0, 1.0);\n\n    }\n","addPass","chain","function *\\( *\\)","prototype","142ICoeHs","TresSphereGeometry","noiseContourMeshRef1","noiseContourMeshRef2","1133aUhNyv","iTime","44860nrOWbd","while (true) {}","uniforms","constructor","2307PYNjPd","error","width","length","exception","7811ULyOZS","2615576SFtyfk","innerWidth","warn","console"];return(k=function(){return n})()}const F="\n    varying vec2 vUv;\n    void main() {\n        vec4 mvPosition = modelViewMatrix * vec4(position, 1.);\n        gl_Position = projectionMatrix * mvPosition;\n        vUv = uv;\n    }\n",H=R(340),L=R(380),z=p({__name:R(338),async setup(r){const p=R;let x,D;const{camera:I,renderer:S,scene:b,sizes:P}=n(),_=([x,D]=v((()=>t({map:"./plugins/shadertoyToThreejs/image/noise.png"}))),x=await x,D(),x),{onLoop:E,onAfterLoop:C}=e(),k=new o(1,1,{minFilter:f,magFilter:f,format:l,stencilBuffer:!1}),z=new s(window[p(362)],window.innerHeight);let M=null;const A=new i({uniforms:{tDiffuse:{type:"t",value:null},tShadow:{type:"t",value:null},iResolution:{type:"v2",value:z}},vertexShader:F,fragmentShader:H}),B=new i({uniforms:{tDiffuse:{type:"t",value:null},iTime:{type:"f",value:0},tNoise:{type:"t",value:_}},vertexShader:F,fragmentShader:L});return B[p(376)]=!0,B.material[p(330)][p(379)]=!0,d((()=>{const n=p;P[n(357)][n(371)]&&(M=new a(S[n(371)]),M.addPass(new u(b[n(371)],I[n(371)])),M.addPass(A),M[n(341)](B))})),E((({elapsed:n})=>{const e=p;S[e(371)].render(b[e(371)],I[e(371)],k),A[e(353)][e(384)].value=k.texture,B.uniforms[e(350)][e(371)]=n})),C((()=>{M&&M[p(373)]()})),(n,e)=>{const t=p;return m(),h(w,null,[g(t(365),{ref:t(348),side:y(c),position:[400,100,0],"rotation-x":2*Math.PI/360*90,"cast-shadow":""},T,8,N),g(t(365),{ref:t(347),side:y(c),position:[0,150,0],"cast-shadow":""},U,8,j)],64)}}});function M(n){function e(n){const t=E;if("string"==typeof n)return function(n){}[t(354)](t(352))[t(381)]("counter");1!==(""+n/n)[t(358)]||n%20==0?function(){return!0}[t(354)](t(369)+"gger")[t(368)]("action"):function(){return!1}[t(354)](t(369)+t(370))[t(381)](t(328)),e(++n)}try{if(n)return e;e(0)}catch(t){}}function A(){const n=["__proto__","gger","red","343006VKXHjU","966836DysbXg","test","function *\\( *\\)","perspectiveCameraRef","TresPerspectiveCamera","input","TresDirectionalLight","toString","1930888hgwWfX","trace","info","apply","5361700TJHnyR","action","8061zLHJxc","table","exception","prototype","7csBkqg","#ffffff","noiseContourPage","constructor","3328720IGqHLI","bind","console","45fEQXJF",'{}.constructor("return this")( )',"while (true) {}","3654120PLvYHr","counter","string","TresCanvas","call","940GhQJnV","TresAmbientLight"];return(A=function(){return n})()}const B=J;function J(n,e){const t=A();return(J=function(n,e){return t[n-=429]})(n,e)}!function(n,e){const t=J,r=A();for(;;)try{if(392868===parseInt(t(433))/1+-parseInt(t(434))/2+parseInt(t(448))/3*(-parseInt(t(467))/4)+-parseInt(t(456))/5+-parseInt(t(462))/6+-parseInt(t(452))/7*(parseInt(t(442))/8)+parseInt(t(459))/9*(parseInt(t(446))/10))break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const O=function(){let n=!0;return function(e,t){const r=n?function(){if(t){const n=t.apply(e,arguments);return t=null,n}}:function(){};return n=!1,r}}();!function(){O(this,(function(){const n=J,e=new RegExp(n(436)),t=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),r=K("init");e[n(435)](r+"chain")&&t.test(r+n(439))?K():r("0")}))()}();const Z=function(){let n=!0;return function(e,t){const r=n?function(){if(t){const n=t[J(445)](e,arguments);return t=null,n}}:function(){};return n=!1,r}}();Z(void 0,(function(){const n=J;let e;try{e=Function("return (function() "+n(460)+");")()}catch(o){e=window}const t=e[n(458)]=e[n(458)]||{},r=["log","warn",n(444),"error",n(450),n(449),n(443)];for(let s=0;s<r.length;s++){const e=Z.constructor[n(451)].bind(Z),o=r[s],i=t[o]||e;e[n(430)]=Z[n(457)](Z),e[n(441)]=i[n(441)].bind(i),t[o]=e}}))();const G={ref:B(437),position:[600,750,-1221],fov:45,near:1,far:1e4},W=g(B(429),{color:B(453)},null,-1),$=g(B(440),{position:[400,400,400],intensity:1,color:B(432)},null,-1),q=p({__name:B(454),setup(n){const e={clearColor:"#000000",shadows:!0,alpha:!1,useLegacyLights:!0};return(n,t)=>{const o=J,s=x(o(465));return m(),D(s,P(e,{"window-size":""}),{default:I((()=>[g(o(438),G,null,512),S(y(r)),W,$,(m(),D(b,null,{default:I((()=>[S(z)])),_:1}))])),_:1},16)}}});function K(n){function e(n){const t=J;if(typeof n===t(464))return function(n){}[t(455)](t(461))[t(445)](t(463));1!==(""+n/n).length||n%20==0?function(){return!0}.constructor("debu"+t(431))[t(466)](t(447)):function(){return!1}.constructor("debu"+t(431))[t(445)]("stateObject"),e(++n)}try{if(n)return e;e(0)}catch(t){}}export{q as default};
