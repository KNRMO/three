import{_ as n}from"./index.WjjiR1QE1723189171640.js";import{C as t,a6 as e,ab as o}from"./three.5MXJ6W7w1723189171640.js";import{p as r,$ as c,a as i,d as s}from"./@tresjs.LTwFwASm1723189171640.js";import{a as u}from"./index.rLlA0tSY1723189171640.js";import{g as a}from"./gsap.5FgWo1mD1723189171640.js";import{d as f,o as g,D as l,J as p,u as v,aj as y,ak as x,a4 as m,b as w,F as d,e as _,f as z,g as h,j as P,al as b}from"./@vue.Q1VpS3901723189171640.js";import"./default.vue_vue_type_script_setup_true_lang.0xUNesFj1723189171640.js";import"./@fesjs.92jMy6FJ1723189171640.js";import"./vue-router.frQYH8jd1723189171640.js";import"./lodash-es.nFpJXAf-1723189171640.js";import"./@vueuse.oQlm8k6P1723189171640.js";import"./@qlin.yHhFDldE1723189171640.js";import"./pinia.iN3nUGv81723189171640.js";import"./@floating-ui.BPbuo5Gx1723189171640.js";import"./@juggle.7yjBMqoW1723189171640.js";import"./three-mesh-ui.module.27BVdmbE1723189171640.js";import"./tweakpane.yHWGBmom1723189171640.js";import"./three-stdlib.9krDtkM91723189171640.js";import"./@pmndrs.wQrKJZQf1723189171640.js";import"./object-hash.jMAsrj6h1723189171640.js";import"./@amap.Lu-L8G0q1723189171640.js";import"./jszip.WwTqi4J91723189171640.js";function I(n,t){const e=S();return(I=function(n,t){return e[n-=282]})(n,t)}const j=I;function S(){const n=["test","info","log","console","debu","prototype","23211gvCKyO","call",'{}.constructor("return this")( )',"return (function() ","bind","221396TIkxuf","apply","counter","12140njcGlt","action","string","175217OROhRi","154864IBMMjY","while (true) {}","stateObject","length","trace","toString","error","input","gger","19745UTJbMz","279XLetry","table","12GSTAxA","147191bmBCgv","174NbiiuA","\n//\tClassic Perlin 3D Noise \n//\tby Stefan Gustavson\n//\nvec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}\nvec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}\nvec4 fade(vec4 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}\n\nfloat cnoise(vec4 P){\n  ;\n  vec4 Pi0 = floor(P); // Integer part for indexing\n  vec4 Pi1 = Pi0 + 1.0; // Integer part + 1\n  Pi0 = mod(Pi0, 289.0);\n  Pi1 = mod(Pi1, 289.0);\n  vec4 Pf0 = fract(P); // Fractional part for interpolation\n  vec4 Pf1 = Pf0 - 1.0; // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = vec4(Pi0.zzzz);\n  vec4 iz1 = vec4(Pi1.zzzz);\n  vec4 iw0 = vec4(Pi0.wwww);\n  vec4 iw1 = vec4(Pi1.wwww);\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n  vec4 ixy00 = permute(ixy0 + iw0);\n  vec4 ixy01 = permute(ixy0 + iw1);\n  vec4 ixy10 = permute(ixy1 + iw0);\n  vec4 ixy11 = permute(ixy1 + iw1);\n\n  vec4 gx00 = ixy00 / 7.0;\n  vec4 gy00 = floor(gx00) / 7.0;\n  vec4 gz00 = floor(gy00) / 6.0;\n  gx00 = fract(gx00) - 0.5;\n  gy00 = fract(gy00) - 0.5;\n  gz00 = fract(gz00) - 0.5;\n  vec4 gw00 = vec4(0.75) - abs(gx00) - abs(gy00) - abs(gz00);\n  vec4 sw00 = step(gw00, vec4(0.0));\n  gx00 -= sw00 * (step(0.0, gx00) - 0.5);\n  gy00 -= sw00 * (step(0.0, gy00) - 0.5);\n\n  vec4 gx01 = ixy01 / 7.0;\n  vec4 gy01 = floor(gx01) / 7.0;\n  vec4 gz01 = floor(gy01) / 6.0;\n  gx01 = fract(gx01) - 0.5;\n  gy01 = fract(gy01) - 0.5;\n  gz01 = fract(gz01) - 0.5;\n  vec4 gw01 = vec4(0.75) - abs(gx01) - abs(gy01) - abs(gz01);\n  vec4 sw01 = step(gw01, vec4(0.0));\n  gx01 -= sw01 * (step(0.0, gx01) - 0.5);\n  gy01 -= sw01 * (step(0.0, gy01) - 0.5);\n\n  vec4 gx10 = ixy10 / 7.0;\n  vec4 gy10 = floor(gx10) / 7.0;\n  vec4 gz10 = floor(gy10) / 6.0;\n  gx10 = fract(gx10) - 0.5;\n  gy10 = fract(gy10) - 0.5;\n  gz10 = fract(gz10) - 0.5;\n  vec4 gw10 = vec4(0.75) - abs(gx10) - abs(gy10) - abs(gz10);\n  vec4 sw10 = step(gw10, vec4(0.0));\n  gx10 -= sw10 * (step(0.0, gx10) - 0.5);\n  gy10 -= sw10 * (step(0.0, gy10) - 0.5);\n\n  vec4 gx11 = ixy11 / 7.0;\n  vec4 gy11 = floor(gx11) / 7.0;\n  vec4 gz11 = floor(gy11) / 6.0;\n  gx11 = fract(gx11) - 0.5;\n  gy11 = fract(gy11) - 0.5;\n  gz11 = fract(gz11) - 0.5;\n  vec4 gw11 = vec4(0.75) - abs(gx11) - abs(gy11) - abs(gz11);\n  vec4 sw11 = step(gw11, vec4(0.0));\n  gx11 -= sw11 * (step(0.0, gx11) - 0.5);\n  gy11 -= sw11 * (step(0.0, gy11) - 0.5);\n\n  vec4 g0000 = vec4(gx00.x,gy00.x,gz00.x,gw00.x);\n  vec4 g1000 = vec4(gx00.y,gy00.y,gz00.y,gw00.y);\n  vec4 g0100 = vec4(gx00.z,gy00.z,gz00.z,gw00.z);\n  vec4 g1100 = vec4(gx00.w,gy00.w,gz00.w,gw00.w);\n  vec4 g0010 = vec4(gx10.x,gy10.x,gz10.x,gw10.x);\n  vec4 g1010 = vec4(gx10.y,gy10.y,gz10.y,gw10.y);\n  vec4 g0110 = vec4(gx10.z,gy10.z,gz10.z,gw10.z);\n  vec4 g1110 = vec4(gx10.w,gy10.w,gz10.w,gw10.w);\n  vec4 g0001 = vec4(gx01.x,gy01.x,gz01.x,gw01.x);\n  vec4 g1001 = vec4(gx01.y,gy01.y,gz01.y,gw01.y);\n  vec4 g0101 = vec4(gx01.z,gy01.z,gz01.z,gw01.z);\n  vec4 g1101 = vec4(gx01.w,gy01.w,gz01.w,gw01.w);\n  vec4 g0011 = vec4(gx11.x,gy11.x,gz11.x,gw11.x);\n  vec4 g1011 = vec4(gx11.y,gy11.y,gz11.y,gw11.y);\n  vec4 g0111 = vec4(gx11.z,gy11.z,gz11.z,gw11.z);\n  vec4 g1111 = vec4(gx11.w,gy11.w,gz11.w,gw11.w);\n\n  vec4 norm00 = taylorInvSqrt(vec4(dot(g0000, g0000), dot(g0100, g0100), dot(g1000, g1000), dot(g1100, g1100)));\n  g0000 *= norm00.x;\n  g0100 *= norm00.y;\n  g1000 *= norm00.z;\n  g1100 *= norm00.w;\n\n  vec4 norm01 = taylorInvSqrt(vec4(dot(g0001, g0001), dot(g0101, g0101), dot(g1001, g1001), dot(g1101, g1101)));\n  g0001 *= norm01.x;\n  g0101 *= norm01.y;\n  g1001 *= norm01.z;\n  g1101 *= norm01.w;\n\n  vec4 norm10 = taylorInvSqrt(vec4(dot(g0010, g0010), dot(g0110, g0110), dot(g1010, g1010), dot(g1110, g1110)));\n  g0010 *= norm10.x;\n  g0110 *= norm10.y;\n  g1010 *= norm10.z;\n  g1110 *= norm10.w;\n\n  vec4 norm11 = taylorInvSqrt(vec4(dot(g0011, g0011), dot(g0111, g0111), dot(g1011, g1011), dot(g1111, g1111)));\n  g0011 *= norm11.x;\n  g0111 *= norm11.y;\n  g1011 *= norm11.z;\n  g1111 *= norm11.w;\n\n  float n0000 = dot(g0000, Pf0);\n  float n1000 = dot(g1000, vec4(Pf1.x, Pf0.yzw));\n  float n0100 = dot(g0100, vec4(Pf0.x, Pf1.y, Pf0.zw));\n  float n1100 = dot(g1100, vec4(Pf1.xy, Pf0.zw));\n  float n0010 = dot(g0010, vec4(Pf0.xy, Pf1.z, Pf0.w));\n  float n1010 = dot(g1010, vec4(Pf1.x, Pf0.y, Pf1.z, Pf0.w));\n  float n0110 = dot(g0110, vec4(Pf0.x, Pf1.yz, Pf0.w));\n  float n1110 = dot(g1110, vec4(Pf1.xyz, Pf0.w));\n  float n0001 = dot(g0001, vec4(Pf0.xyz, Pf1.w));\n  float n1001 = dot(g1001, vec4(Pf1.x, Pf0.yz, Pf1.w));\n  float n0101 = dot(g0101, vec4(Pf0.x, Pf1.y, Pf0.z, Pf1.w));\n  float n1101 = dot(g1101, vec4(Pf1.xy, Pf0.z, Pf1.w));\n  float n0011 = dot(g0011, vec4(Pf0.xy, Pf1.zw));\n  float n1011 = dot(g1011, vec4(Pf1.x, Pf0.y, Pf1.zw));\n  float n0111 = dot(g0111, vec4(Pf0.x, Pf1.yzw));\n  float n1111 = dot(g1111, Pf1);\n\n  vec4 fade_xyzw = fade(Pf0);\n  vec4 n_0w = mix(vec4(n0000, n1000, n0100, n1100), vec4(n0001, n1001, n0101, n1101), fade_xyzw.w);\n  vec4 n_1w = mix(vec4(n0010, n1010, n0110, n1110), vec4(n0011, n1011, n0111, n1111), fade_xyzw.w);\n  vec4 n_zw = mix(n_0w, n_1w, fade_xyzw.z);\n  vec2 n_yzw = mix(n_zw.xy, n_zw.zw, fade_xyzw.y);\n  float n_xyzw = mix(n_yzw.x, n_yzw.y, fade_xyzw.x);\n  return 2.2 * n_xyzw;\n}\n","2FQrwxQ","constructor"];return(S=function(){return n})()}!function(n,t){const e=I,o=S();for(;;)try{if(110640===parseInt(e(290))/1*(parseInt(e(307))/2)+-parseInt(e(315))/3*(-parseInt(e(303))/4)+parseInt(e(300))/5*(-parseInt(e(305))/6)+parseInt(e(284))/7+parseInt(e(291))/8+parseInt(e(301))/9*(-parseInt(e(287))/10)+parseInt(e(304))/11)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const A=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e.apply(t,arguments);return e=null,n}}:function(){};return n=!1,o}}();!function(){A(this,(function(){const n=I,t=new RegExp("function *\\( *\\)"),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),o=M("init");t[n(309)](o+"chain")&&e[n(309)](o+n(298))?M():o("0")}))()}();const C=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e.apply(t,arguments);return e=null,n}}:function(){};return n=!1,o}}();C(void 0,(function(){const n=I,t=function(){const n=I;let t;try{t=Function(n(282)+n(317)+");")()}catch(e){t=window}return t}(),e=t[n(312)]=t.console||{},o=[n(311),"warn",n(310),n(297),"exception",n(302),n(295)];for(let r=0;r<o[n(294)];r++){const t=C.constructor[n(314)].bind(C),c=o[r],i=e[c]||t;t.__proto__=C[n(283)](C),t.toString=i[n(296)][n(283)](i),e[c]=t}}))();const k=j(306);function M(n){function t(n){const e=I;if(typeof n===e(289))return function(n){}[e(308)](e(292))[e(285)](e(286));1!==(""+n/n).length||n%20==0?function(){return!0}[e(308)](e(313)+e(299))[e(316)](e(288)):function(){return!1}[e(308)](e(313)+"gger")[e(285)](e(293)),t(++n)}try{if(n)return t;t(0)}catch(e){}}!function(n,t){const e=F,o=R();for(;;)try{if(654645===parseInt(e(336))/1+parseInt(e(344))/2+parseInt(e(346))/3+-parseInt(e(342))/4*(-parseInt(e(334))/5)+-parseInt(e(335))/6+parseInt(e(343))/7*(-parseInt(e(347))/8)+-parseInt(e(352))/9*(-parseInt(e(359))/10))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const U=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[F(354)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();function R(){const n=["table","apply","gger",'{}.constructor("return this")( )',"debu","return (function() ","510fBiPQl","toString","bind","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","length","info","init","function *\\( *\\)","string","1197095ZDejRj","6632034tNLgvu","849229gHteEA","trace","constructor","action","call","exception","8bJFqeN","7MxTydl","671116xOTmWt","test","526443BLQCiR","8560824piAvHU","prototype","while (true) {}","error","chain","174879MKmJKc"];return(R=function(){return n})()}!function(){U(this,(function(){const n=F,t=new RegExp(n(332)),e=new RegExp(n(362),"i"),o=E(n(331));t[n(345)](o+n(351))&&e[n(345)](o+"input")?E():o("0")}))()}();const T=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e.apply(t,arguments);return e=null,n}}:function(){};return n=!1,o}}();function F(n,t){const e=R();return(F=function(n,t){return e[n-=329]})(n,t)}T(void 0,(function(){const n=F;let t;try{t=Function(n(358)+n(356)+");")()}catch(r){t=window}const e=t.console=t.console||{},o=["log","warn",n(330),n(350),n(341),n(353),n(337)];for(let c=0;c<o[n(329)];c++){const t=T.constructor[n(348)].bind(T),r=o[c],i=e[r]||t;t.__proto__=T.bind(T),t[n(360)]=i[n(360)][n(361)](i),e[r]=t}}))();const Z=[9205247,6094763,16206474,4059890];function E(n){function t(n){const e=F;if(typeof n===e(333))return function(n){}[e(338)](e(349))[e(354)]("counter");1!==(""+n/n).length||n%20==0?function(){return!0}[e(338)](e(357)+e(355))[e(340)](e(339)):function(){return!1}.constructor(e(357)+e(355))[e(354)]("stateObject"),t(++n)}try{if(n)return t;t(0)}catch(e){}}function O(){const n=["colorIndex","console","width","1837545Bgipyi","2626304WmqRjj",'{}.constructor("return this")( )',"u_time","5283456wFtrSW","toString","\n\tuniform float u_time;\n    uniform float u_progress;\n    uniform float u_aspect;\n    uniform vec3 u_color;\n    varying vec2 vUv;\n    #define PI 3.14159265\n    ","1yDfIiw","error","2620186GiQlQx","init","height","TresShaderMaterial","constructor","action","info","gger","apply","25qRHRXa","bind","args","u_progress","prototype","__proto__","length","string","743814THBuVG","9190300kCVXMn","test","log","TresPlaneGeometry","call","input","trace","debu","material","object","chain","uniforms","value","u_color","counter","803932xrFHhC","warn"];return(O=function(){return n})()}const q=$;!function(n,t){const e=$,o=O();for(;;)try{if(731011===-parseInt(e(178))/1*(-parseInt(e(180))/2)+parseInt(e(171))/3+parseInt(e(166))/4*(-parseInt(e(189))/5)+parseInt(e(175))/6+-parseInt(e(198))/7+parseInt(e(172))/8+-parseInt(e(197))/9)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const B=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[$(188)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();!function(){B(this,(function(){const n=$,t=new RegExp("function *\\( *\\)"),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),o=J(n(181));t[n(199)](o+n(208))&&e[n(199)](o+n(203))?J():o("0")}))()}();const L=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e.apply(t,arguments);return e=null,n}}:function(){};return n=!1,o}}();L(void 0,(function(){const n=$,t=function(){const n=$;let t;try{t=Function("return (function() "+n(173)+");")()}catch(e){t=window}return t}(),e=t[n(169)]=t.console||{},o=[n(200),n(167),n(186),n(179),"exception","table",n(204)];for(let r=0;r<o[n(195)];r++){const t=L[n(184)][n(193)][n(190)](L),c=o[r],i=e[c]||t;t[n(194)]=L.bind(L),t.toString=i[n(176)][n(190)](i),e[c]=t}}))();const G=[q(191)];function $(n,t){const e=O();return($=function(n,t){return e[n-=162]})(n,t)}const V=f({__name:"background",setup(n){const e=q,{sizes:o}=r();let i=0;const s={uniforms:{u_time:{value:0},u_progress:{value:0},u_aspect:{value:o[e(170)][e(163)]/o[e(182)][e(163)]},u_color:{value:new t(Z[i])}},vertexShader:"\n\t\tvarying vec2 vUv;\n    void main() {\n      vUv = uv;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    }\n\t\t",fragmentShader:e(177)+k+"\n\n    void main() {\n        vec2 newUv = (vUv - vec2(0.5)) * vec2(u_aspect,1.);\n        float dist = length(newUv);\n        float density = 1.8 - dist;\n        float noise = cnoise(vec4(newUv*40.*density, u_time, 1.));\n        float grain = (fract(sin(dot(vUv, vec2(12.9898,78.233)*2000.0)) * 43758.5453));\n        \n        float facets = noise*2.;\n        float dots = smoothstep(0.1, 0.15, noise);\n        float n = facets * dots;\n        n = step(.2,facets)*dots;\n        n = 1. - n;\n\n        float radius = 1.5;\n        float outerProgress = clamp(1.1*u_progress, 0., 1.);\n        float innerProgress = clamp(1.1*u_progress - 0.05, 0., 1.);\n  \n        float innerCircle = 1. - smoothstep((innerProgress-0.4)*radius, innerProgress*radius, dist);\n        float outerCircle = 1. - smoothstep((outerProgress-0.1)*radius, innerProgress*radius, dist);\n  \n        float displacement = outerCircle-innerCircle;\n        \n        float grainStrength = 0.3;\n        vec3 final = vec3(displacement-(n+noise)) - vec3(grain*grainStrength);\n\n        gl_FragColor = vec4(final, 1.0);\n        gl_FragColor.rgb*=u_color*2.;\n\n        #include <colorspace_fragment>\n    }\n\t\t"};function u(n){const o=e;if(n&&n[o(207)]&&n[o(207)][o(206)]){++i>=Z.length&&(i=0),console.log(o(168),i),n[o(207)].material.uniforms[o(164)][o(163)]=new t(Z[i]);const e=n[o(207)][o(206)][o(162)][o(192)];a.killTweensOf(e),e.value=0,a.to(e,{duration:2,ease:"power1.out",value:1})}}const{onLoop:f}=c();return f((({elapsed:n})=>{const t=e;s&&(s[t(162)][t(174)][t(163)]=n)})),(n,t)=>{const r=e;return g(),l("TresMesh",{onClick:u},[p(r(201),{args:[v(o)[r(170)][r(163)]/50,v(o)[r(182)][r(163)]/50]},null,8,G),p(r(183),y(x(s)),null,16)])}}});function J(n){function t(n){const e=$;if(typeof n===e(196))return function(n){}[e(184)]("while (true) {}").apply(e(165));1!==(""+n/n)[e(195)]||n%20==0?function(){return!0}.constructor(e(205)+e(187))[e(202)](e(185)):function(){return!1}[e(184)](e(205)+e(187))[e(188)]("stateObject"),t(++n)}try{if(n)return t;t(0)}catch(e){}}const D=H;function H(n,t){const e=W();return(H=function(n,t){return e[n-=188]})(n,t)}!function(n,t){const e=H,o=W();for(;;)try{if(682360===-parseInt(e(252))/1*(parseInt(e(247))/2)+-parseInt(e(216))/3+-parseInt(e(226))/4*(parseInt(e(230))/5)+parseInt(e(221))/6*(parseInt(e(245))/7)+parseInt(e(262))/8+parseInt(e(250))/9+parseInt(e(190))/10)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const Q=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[H(239)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();!function(){Q(this,(function(){const n=H,t=new RegExp(n(223)),e=new RegExp(n(234),"i"),o=on(n(220));t[n(215)](o+n(207))&&e[n(215)](o+n(204))?on():o("0")}))()}();const X=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[H(239)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();function W(){const n=["chain","Alluminium","width","value","#include <common>","counter","source","sin","test","3377406pwqRXt","u_time","while (true) {}","rotation","init","462AZOJZF","u_progress","function *\\( *\\)","replace","u_color2","4OMkvjL","#include <begin_vertex>","material","Color","867805ogDidP","TresPlaneGeometry","LowRes_Can_Alluminium_0","\n          float parabola( float x, float k ) {\n            return pow( 4. * x * ( 1. - x ), k );\n          }\n      ","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","Vector2","log","vertexShader","stopPropagation","apply","\n          #include <common>\n          varying vec2 vUv;\n        ","Body","uniforms","toString","metalness","7553mkgAod","trace","2ScMSiW","string","fragmentShader","4215321MwuPxb","geometry","1025154GHlGVY","map","gger","stateObject","killTweensOf","length","data","TresGroup","call","TresMesh","3343944YBUqxJ","info","args","20374320fvMnJL","assign","#include <color_fragment>","bind","exception","__proto__","constructor","console","debu","prototype","height","\n          #include <begin_vertex>\n          vUv = uv;\n        ","\n          #include <color_fragment>\n            float aspect = u_textureSize.x/u_textureSize.y;\n            float dt = parabola(u_progress,1.);\n            float border = 1.;\n            float noise = 0.5*(cnoise(vec4(vUv.x*u_scaleX  + 0.5*u_time/3., vUv.y*u_scaleY,0.5*u_time/3.,0.)) + 1.);\n            float w = u_width*dt;\n            float maskValue = smoothstep(1. - w,1.,vUv.y + mix(-w/2., 1. - w/2., u_progress));\n            maskValue += maskValue * noise;\n            float mask = smoothstep(border,border+0.01,maskValue);\n            diffuseColor.rgb += mix(u_color1,u_color2,mask);\n        ","object","input","table","./draco/"];return(W=function(){return n})()}X(void 0,(function(){const n=H;let t;try{t=Function('return (function() {}.constructor("return this")( ));')()}catch(r){t=window}const e=t[n(197)]=t.console||{},o=[n(236),"warn",n(188),"error",n(194),n(205),n(246)];for(let c=0;c<o[n(257)];c++){const t=X[n(196)][n(199)][n(193)](X),r=o[c],i=e[r]||t;t[n(195)]=X.bind(X),t[n(243)]=i.toString[n(193)](i),e[r]=t}}))();const Y=[D(189)],K=[D(219),"position"],N=[D(219)],nn=[D(251),D(228)],tn=[D(251),D(228)],en=f({__name:"model",async setup(n){const t=D;let o,s;const{sizes:u}=r(),{nodes:f,materials:y}=([o,s]=m((()=>i("./plugins/eCommerce/model/energy-can.glb",{draco:!0,decoderPath:t(206)}))),o=await o,s(),o),x={u_time:{value:0},u_color1:{value:new(e[t(229)])(Z[0])},u_color2:{value:new(e[t(229)])(Z[1])},u_progress:{value:.5},u_width:{value:.8},u_scaleX:{value:50},u_scaleY:{value:50},u_textureSize:{value:new(e[t(235)])(y[t(241)][t(253)][t(213)][t(258)][t(209)],y[t(241)][t(253)].source[t(258)][t(200)])}};y.Body[t(244)]=0,y.Body.roughness=1,y[t(241)].onBeforeCompile=n=>{const e=t;n[e(242)]=Object[e(191)](n[e(242)],x),n[e(237)]=n[e(237)].replace(e(211),e(240)),n.vertexShader=n[e(237)][e(224)](e(227),e(201)),n[e(249)]=n[e(249)][e(224)](e(211),"\n          #include <common>\n          uniform float u_time;\n          uniform vec3 u_color1;\n          uniform vec3 u_color2;\n          uniform float u_progress;\n          uniform float u_width;\n          uniform float u_scaleX;\n          uniform float u_scaleY;\n          uniform vec2 u_textureSize;\n          varying vec2 vUv;\n          "+k+e(233)),n[e(249)]=n.fragmentShader[e(224)](e(192),e(202))};let _=0;function z(n){const o=t;if(n&&n[o(203)]&&n.object[o(228)]){++_>=Z[o(257)]&&(_=0),console.log("model colorIndex",_);let n=new(e[o(229)])(Z[_]);x[o(225)][o(210)]=n;const t=x[o(222)];a[o(256)](t),t[o(210)]=.5,a.to(t,{duration:1,ease:"power1.out",value:1,onComplete:()=>{x.u_color1.value=n}})}n[o(238)]()}let h=w(0);const{onLoop:P}=c();return P((({elapsed:n})=>{const e=t;h[e(210)]=.12*Math[e(214)](n),x[e(217)][e(210)]=n})),(n,e)=>{const o=t;return g(),l(d,null,[p(o(261),{visible:!1,onClick:z},[p(o(231),{args:[v(u).width[o(210)]/50,v(u)[o(200)][o(210)]/50]},null,8,Y)]),p(o(259),{rotation:[-Math.PI/2,1.7,Math.PI/2],position:[0,v(h),5]},[p(o(259),{rotation:[-Math.PI/2,0,0]},[p(o(261),{geometry:v(f)[o(232)].geometry,material:v(y)[o(208)]},null,8,nn),p(o(261),{geometry:v(f).LowRes_Can_Body_0[o(251)],material:v(y)[o(241)]},null,8,tn)],8,N)],8,K)],64)}}});function on(n){function t(n){const e=H;if(typeof n===e(248))return function(n){}[e(196)](e(218))[e(239)](e(212));1!==(""+n/n)[e(257)]||n%20==0?function(){return!0}.constructor(e(198)+e(254))[e(260)]("action"):function(){return!1}.constructor("debugger")[e(239)](e(255)),t(++n)}try{if(n)return t;t(0)}catch(e){}}function rn(){const n=["6296zzGkUh","ACESFilmicToneMapping","#ffffff","maxPolarAngle","error","table","20286702UfDmCU","TresPerspectiveCamera",'{}.constructor("return this")( )',"init","trace","log","function *\\( *\\)","200018HxcxuP","debu","1113jfeMkP","122920WdWLLK","apply","7892pyKjhR","info","string","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","3960150eouVfx","test","exception","toString","constructor","TresAmbientLight","gger","2498022qJxtEf","counter","length","prototype","9807AFMPnI","action","bind","chain","stateObject","TresCanvas","console","input"];return(rn=function(){return n})()}const cn=gn;!function(n,t){const e=gn,o=rn();for(;;)try{if(572272===-parseInt(e(363))/1+-parseInt(e(360))/2+-parseInt(e(362))/3*(parseInt(e(365))/4)+parseInt(e(369))/5+-parseInt(e(376))/6+-parseInt(e(380))/7*(parseInt(e(347))/8)+parseInt(e(353))/9)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const sn=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e.apply(t,arguments);return e=null,n}}:function(){};return n=!1,o}}();!function(){sn(this,(function(){const n=gn,t=new RegExp(n(359)),e=new RegExp(n(368),"i"),o=pn(n(356));t[n(370)](o+n(383))&&e.test(o+n(346))?pn():o("0")}))()}();const un=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[gn(364)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();un(void 0,(function(){const n=gn;let t;try{t=Function("return (function() "+n(355)+");")()}catch(r){t=window}const e=t[n(345)]=t[n(345)]||{},o=[n(358),"warn",n(366),n(351),n(371),n(352),n(357)];for(let c=0;c<o[n(378)];c++){const t=un[n(373)][n(379)].bind(un),r=o[c],i=e[r]||t;t.__proto__=un[n(382)](un),t.toString=i[n(372)][n(382)](i),e[r]=t}}))();const an=p(cn(354),{position:[0,0,16],fov:45,near:.1,far:1e4},null,-1),fn=p(cn(374),{intensity:.5},null,-1);function gn(n,t){const e=rn();return(gn=function(n,t){return e[n-=343]})(n,t)}const ln=f({__name:"zipTopCan",setup(t){const r=cn,c={clearColor:r(349),windowSize:!0,toneMapping:e[r(348)],toneMappingExposure:.8,shadows:!0,outputColorSpace:o};return(t,e)=>{const o=r,i=_(o(344));return g(),l(d,null,[(g(),z(b,null,{default:h((()=>[P(v(n))])),_:1})),P(i,y(x(c)),{default:h((()=>[an,P(v(s),{enableDamping:"",enablePan:!1,enableZoom:!1,maxPolarAngle:Math.PI/1.7,minPolarAngle:Math.PI/2.4,maxAzimuthAngle:.1,minAzimuthAngle:-.1},null,8,[o(350),"minPolarAngle"]),fn,P(V),(g(),z(b,null,{default:h((()=>[P(en)])),_:1})),(g(),z(b,null,{default:h((()=>[P(v(u),{files:"./plugins/eCommerce/platz.hdr"})])),_:1}))])),_:1},16)],64)}}});function pn(n){function t(n){const e=gn;if(typeof n===e(367))return function(n){}[e(373)]("while (true) {}").apply(e(377));1!==(""+n/n)[e(378)]||n%20==0?function(){return!0}[e(373)](e(361)+e(375)).call(e(381)):function(){return!1}.constructor("debu"+e(375))[e(364)](e(343)),t(++n)}try{if(n)return t;t(0)}catch(e){}}export{ln as default};
