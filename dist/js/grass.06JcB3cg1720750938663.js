import{s as t,a5 as n,V as e,K as o,ab as r}from"./three.c_4mN3mZ1720750938663.js";import{r as a,N as i,d as s,P as c}from"./@tresjs.toBU36DO1720750938663.js";import"./index.2EWeLr3e1720750938663.js";import{a as l}from"./simplex-noise.MycypUyu1720750938663.js";import{C as u}from"./index.GoH3HiI41720750938663.js";import{d as f,a3 as p,o as h,D as m,J as v,u as d,r as g,f as x,g as w,j as y,aj as b,ak as _,al as M}from"./@vue.ApkyOKE71720750938663.js";import{_ as z}from"./skyBoxBmesh.vue_vue_type_script_setup_true_lang.O0-xL_gM1720750938663.js";import"./@vueuse.NiHn2U_k1720750938663.js";import"./tweakpane.yHWGBmom1720750938663.js";import"./lamina.RLrApzmY1720750938663.js";import"./glsl-tokenizer.bTdSVbty1720750938663.js";import"./@amap.aVWyhucH1720750938663.js";import"./glsl-token-descope.s9Mo3cKz1720750938663.js";import"./glsl-token-depth.F2TAjFQb1720750938663.js";import"./glsl-token-scope.XCupzObZ1720750938663.js";import"./glsl-token-properties.SOa1Aem_1720750938663.js";import"./glsl-token-assignments.SdiHbkqd1720750938663.js";import"./glsl-token-string.Geqk9Ccy1720750938663.js";import"./glsl-token-functions.EGRZ6BGB1720750938663.js";import"./object-hash.uK40h2Gd1720750938663.js";import"./jszip.U0Bj1EHt1720750938663.js";import"./skyBoxAmesh.vue_vue_type_script_setup_true_lang.Ju_uATIg1720750938663.js";import"./skyBoxDmesh.vue_vue_type_script_setup_true_lang.-RijvHzx1720750938663.js";import"./three-stdlib.m46OwZ2t1720750938663.js";import"./@pmndrs.PBnvUkpX1720750938663.js";import"./utils.5xvpSr001720750938663.js";function I(t,n){const e=T();return(I=function(t,n){return e[t-=194]})(t,n)}const j=I;!function(t,n){const e=I,o=T();for(;;)try{if(253416===-parseInt(e(216))/1+parseInt(e(228))/2*(parseInt(e(225))/3)+-parseInt(e(260))/4*(parseInt(e(223))/5)+parseInt(e(233))/6+parseInt(e(239))/7+parseInt(e(238))/8*(parseInt(e(263))/9)+-parseInt(e(207))/10*(parseInt(e(215))/11))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const A=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){A(this,(function(){const t=I,n=new RegExp(t(235)),e=new RegExp(t(268),"i"),o=E(t(270));n[t(273)](o+"chain")&&e[t(273)](o+t(253))?E():o("0")}))()}();const C=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[I(264)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();C(void 0,(function(){const t=I;let n;try{n=Function(t(247)+t(197)+");")()}catch(r){n=window}const e=n.console=n.console||{},o=[t(236),t(195),"info",t(202),t(210),t(274),t(196)];for(let a=0;a<o[t(244)];a++){const n=C.constructor[t(234)][t(269)](C),r=o[a],i=e[r]||n;n[t(252)]=C[t(269)](C),n.toString=i[t(254)][t(269)](i),e[r]=n}}))();const S=[j(258)],k=["index","attributes-position",j(242),j(245),j(229),j(231),j(257),"attributes-halfRootAngleCos"],F=[j(203)],R=["side"];function T(){const t=["trace",'{}.constructor("return this")( )',"Vector4","counter","DoubleSide","gger","error","geometry","position","string","alphaMap","6390ImVZow","uniforms","joints","exception","TresMeshStandardMaterial","stretchesF32","Color","normalize","7711sSIlwF","369654UVZJFi","Vector3","array","while (true) {}","side","TresInstancedBufferGeometry","attributes","6780gRJLCG","convertSRGBToLinear","831ILNUgX","debu","toneMapped","682MXJsfJ","attributes-orientation","map","attributes-stretch","\n      precision mediump float;\n      uniform sampler2D map;\n      uniform sampler2D alphaMap;\n      uniform vec3 tipColor;\n      uniform vec3 bottomColor;\n      varying vec2 vUv;\n      varying float frc;\n\n      void main() {\n        //Get transparency information from alpha map\n        float alpha = texture2D(alphaMap, vUv).r;\n        //If transparent, don't draw\n        if(alpha < 0.15) discard;\n        //Get colour data from texture\n        vec4 col = vec4(texture2D(map, vUv));\n        //Add more green towards root\n        col = mix(vec4(tipColor, 1.0), col, frc);\n        //Add a shadow towards root\n        col = mix(vec4(bottomColor, 1.0), col, frc);\n        gl_FragColor = col;\n\n        #include <tonemapping_fragment>\n\t      #include <colorspace_fragment>\n      }","3023952pwaUvq","prototype","function *\\( *\\)","log","halfRootAngleSinF32","520zAWunr","685790eXnSlg","constructor","orientationsF32","attributes-uv","index","length","attributes-offset","TresGroup","return (function() ","random","set","instances","sin","__proto__","input","toString","computeVertexNormals","cos","attributes-halfRootAngleSin","material","   precision mediump float;\n      attribute vec3 offset;\n      attribute vec4 orientation;\n      attribute float halfrootanglesin;\n      attribute float halfrootanglecos;\n      attribute float stretch;\n      uniform float time;\n      uniform float bladeHeight;\n      varying vec2 vUv;\n      varying float frc;\n\n      //WEBGL-NOISE FROM https://github.com/stegu/webgl-noise\n      //Description : Array and textureless GLSL 2D simplex noise function. Author : Ian McEwan, Ashima Arts. Maintainer : stegu Lastmod : 20110822 (ijm) License : Copyright (C) 2011 Ashima Arts. All rights reserved. Distributed under the MIT License. See LICENSE file. https://github.com/ashima/webgl-noise https://github.com/stegu/webgl-noise\n      vec3 mod289(vec3 x) {return x - floor(x * (1.0 / 289.0)) * 289.0;} vec2 mod289(vec2 x) {return x - floor(x * (1.0 / 289.0)) * 289.0;} vec3 permute(vec3 x) {return mod289(((x*34.0)+1.0)*x);} float snoise(vec2 v){const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439); vec2 i  = floor(v + dot(v, C.yy) ); vec2 x0 = v -   i + dot(i, C.xx); vec2 i1; i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0); vec4 x12 = x0.xyxy + C.xxzz; x12.xy -= i1; i = mod289(i); vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 )); vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0); m = m*m ; m = m*m ; vec3 x = 2.0 * fract(p * C.www) - 1.0; vec3 h = abs(x) - 0.5; vec3 ox = floor(x + 0.5); vec3 a0 = x - ox; m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h ); vec3 g; g.x  = a0.x  * x0.x  + h.x  * x0.y; g.yz = a0.yz * x12.xz + h.yz * x12.yw; return 130.0 * dot(m, g);}\n      //END NOISE\n\n      //https://www.geeks3d.com/20141201/how-to-rotate-a-vertex-by-a-quaternion-in-glsl/\n      vec3 rotateVectorByQuaternion( vec3 v, vec4 q){\n        return 2.0 * cross(q.xyz, v * q.w + cross(q.xyz, v)) + v;\n      }\n\n      //https://en.wikipedia.org/wiki/Slerp\n      vec4 slerp(vec4 v0, vec4 v1, float t) {\n        // Only unit quaternions are valid rotations.\n        // Normalize to avoid undefined behavior.\n        normalize(v0);\n        normalize(v1);\n\n        // Compute the cosine of the angle between the two vectors.\n        float dot_ = dot(v0, v1);\n\n        // If the dot product is negative, slerp won't take\n        // the shorter path. Note that v1 and -v1 are equivalent when\n        // the negation is applied to all four components. Fix by\n        // reversing one quaternion.\n        if (dot_ < 0.0) {\n          v1 = -v1;\n          dot_ = -dot_;\n        }\n\n        const float DOT_THRESHOLD = 0.9995;\n        if (dot_ > DOT_THRESHOLD) {\n          // If the inputs are too close for comfort, linearly interpolate\n          // and normalize the result.\n          vec4 result = t*(v1 - v0) + v0;\n          normalize(result);\n          return result;\n        }\n\n        // Since dot is in range [0, DOT_THRESHOLD], acos is safe\n        float theta_0 = acos(dot_);       // theta_0 = angle between input vectors\n        float theta = theta_0*t;          // theta = angle between v0 and result\n        float sin_theta = sin(theta);     // compute this value only once\n        float sin_theta_0 = sin(theta_0); // compute this value only once\n        float s0 = cos(theta) - dot_ * sin_theta / sin_theta_0;  // == sin(theta_0 - theta) / sin(theta_0)\n        float s1 = sin_theta / sin_theta_0;\n        return (s0 * v0) + (s1 * v1);\n      }\n\n      void main() {\n        //Relative position of vertex along the mesh Y direction\n        frc = position.y/float(bladeHeight);\n        //Get wind data from simplex noise\n        float noise = 1.0-(snoise(vec2((time-offset.x/50.0), (time-offset.z/50.0))));\n        //Define the direction of an unbent blade of grass rotated around the Y axis\n        vec4 direction = vec4(0.0, halfrootanglesin, 0.0, halfrootanglecos);\n        //Interpolate between the unbent direction and the direction of growth calculated on the CPU.\n        //Using the relative location of the vertex along the Y axis as the weight, we get a smooth bend\n        direction = slerp(direction, orientation, frc);\n        vec3 vPosition = vec3(position.x, position.y + position.y * stretch, position.z);\n        vPosition = rotateVectorByQuaternion(vPosition, direction);\n\n       //Apply wind\n       float halfAngle = noise * 0.15;\n        vPosition = rotateVectorByQuaternion(vPosition, normalize(vec4(sin(halfAngle), 0.0, -sin(halfAngle), cos(halfAngle))));\n        //UV for texture\n        vUv = uv;\n        //Calculate final position of the vertex from the world offset and the above shenanigans\n        gl_Position = projectionMatrix * modelViewMatrix * vec4(offset + vPosition, 1.0 );\n      }","200MAwZiv","needsUpdate","#000f00","61254TKhfho","apply","InstancedBufferAttribute","TresMesh","width","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","bind","init","translate","action","test","table","push","warn"];return(T=function(){return t})()}const D=f({__name:"grass",props:{bW:{default:.12},bH:{default:1},joints:{default:5},width:{default:100},instances:{default:5e4}},async setup(r){const s=j;let c,f;const g=([c,f]=p((()=>i({map:"./plugins/floor/image/blade_diffuse.jpg",alphaMap:"./plugins/floor/image/blade_alpha.jpg"}))),c=await c,f(),c),x=r,w=l(Math.random);function y(t,e){const o=I,r=t.x*e.w+t.y*e.z-t.z*e.y+t.w*e.x,a=-t.x*e.z+t.y*e.w+t.z*e.x+t.w*e.y,i=t.x*e.y-t.y*e.x+t.z*e.w+t.w*e.z,s=-t.x*e.x-t.y*e.y-t.z*e.z+t.w*e.w;return new(n[o(198)])(r,a,i,s)}function b(t,n){var e=2*w(t/50,n/50);return e+=4*w(t/100,n/100),e+=.2*w(t/10,n/10)}const _=function(t,r){const a=I,i=[],s=[],c=[],l=[],u=[];let f=new(n[a(198)]),p=new(n[a(198)]);const h=-.25;for(let o=0;o<t;o++){const m=Math.random()*r-r/2,v=Math[a(248)]()*r-r/2,d=b(m,v);i[a(194)](m,d,v);let g=Math.PI-Math[a(248)]()*(2*Math.PI);l.push(Math[a(251)](.5*g)),u[a(194)](Math[a(256)](.5*g));let x=new e(0,1,0),w=x.x*Math[a(251)](g/2),_=x.y*Math[a(251)](g/2),M=x.z*Math[a(251)](g/2),z=Math[a(256)](g/2);f[a(249)](w,_,M,z).normalize(),g=.5*Math[a(248)]()+h,x=new(n[a(217)])(1,0,0),w=x.x*Math[a(251)](g/2),_=x.y*Math[a(251)](g/2),M=x.z*Math[a(251)](g/2),z=Math[a(256)](g/2),p[a(249)](w,_,M,z)[a(214)](),f=y(f,p),g=.5*Math[a(248)]()+h,x=new e(0,0,1),w=x.x*Math[a(251)](g/2),_=x.y*Math.sin(g/2),M=x.z*Math.sin(g/2),z=Math.cos(g/2),p[a(249)](w,_,M,z).normalize(),f=y(f,p),s[a(194)](f.x,f.y,f.z,f.w),o<t/3?c[a(194)](1.8*Math[a(248)]()):c[a(194)](Math.random())}return{offsetsF32:new o(new Float32Array(i),3),orientationsF32:new(n[a(265)])(new Float32Array(s),4),stretchesF32:new o(new Float32Array(c),1),halfRootAngleCosF32:new(n[a(265)])(new Float32Array(u),1),halfRootAngleSinF32:new o(new Float32Array(l),1)}}(x[s(250)],x[s(267)]),M=new t(x.bW,x.bH,1,x[s(209)])[s(271)](0,x.bH/2,0),z=new t(x[s(267)],x.width,32,32);z.lookAt(new(n[s(217)])(0,1,0));const A=z[s(222)].position;for(let t=0;t<A[s(218)][s(244)];t+=3)A[s(218)][t+1]=b(A[s(218)][t],A[s(218)][t+2]);z[s(222)][s(204)][s(261)]=!0,z[s(255)]();const C=new(u({bladeHeight:1,map:null,alphaMap:null,time:0,tipColor:new(n[s(213)])(.3,.9,0)[s(224)](),bottomColor:new(n[s(213)])(0,.2,0)[s(224)]()},s(259),s(232),(t=>{const e=s;t[e(220)]=n[e(200)]})));C[s(230)]=g[s(230)],C[s(206)]=g.alphaMap,C[s(227)]=!1;const{onLoop:T}=a();return T((({elapsed:t})=>{C[s(208)].time.value=t/4})),(t,e)=>{const o=s;return h(),m(o(246),null,[v("TresMesh",{material:d(C)},[v(o(221),{index:d(M)[o(243)],"attributes-position":d(M).attributes[o(204)],"attributes-uv":d(M)[o(222)].uv,"attributes-offset":d(_).offsetsF32,"attributes-orientation":d(_)[o(241)],"attributes-stretch":d(_)[o(212)],"attributes-halfRootAngleSin":d(_)[o(237)],"attributes-halfRootAngleCos":d(_).halfRootAngleCosF32},null,8,k)],8,S),v(o(266),{position:[0,0,0],geometry:d(z)},[v(o(211),{color:o(262),side:n[o(200)]},null,8,R)],8,F)])}}});function E(t){function n(t){const e=I;if(typeof t===e(205))return function(t){}[e(240)](e(219))[e(264)](e(199));1!==(""+t/t)[e(244)]||t%20==0?function(){return!0}[e(240)](e(226)+e(201)).call(e(272)):function(){return!1}[e(240)](e(226)+e(201))[e(264)]("stateObject"),n(++t)}try{if(t)return n;n(0)}catch(e){}}function L(t,n){const e=B();return(L=function(t,n){return e[t-=358]})(t,n)}const O=L;function B(){const t=["12FZsrNs","9bxDdwr","bind","141784khCwZc","322083ivkOuB","string","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","112306AIxOIT","348vUwdMy","grass","init","test","trace","action","constructor","https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/images/skyBox/desert_1k.hdr","gger","table","132WjkTgs","60975TTCZML","1111148Twzsxl","49aVyRRh","error","console","debu","counter","chain","call","apply","12405899aAaBgp","70iSEmAI","function *\\( *\\)","exception","prototype","toString","log","738413ESPzZF"];return(B=function(){return t})()}!function(t,n){const e=L,o=B();for(;;)try{if(754633===parseInt(e(392))/1*(parseInt(e(362))/2)+-parseInt(e(393))/3*(parseInt(e(375))/4)+-parseInt(e(374))/5*(-parseInt(e(373))/6)+-parseInt(e(376))/7*(parseInt(e(358))/8)+-parseInt(e(359))/9*(-parseInt(e(385))/10)+-parseInt(e(384))/11+-parseInt(e(363))/12*(-parseInt(e(391))/13))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const P=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[L(383)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){P(this,(function(){const t=L,n=new RegExp(t(386)),e=new RegExp(t(361),"i"),o=N(t(365));n[t(366)](o+t(381))&&e[t(366)](o+"input")?N():o("0")}))()}();const U=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[L(383)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();U(void 0,(function(){const t=L;let n;try{n=Function('return (function() {}.constructor("return this")( ));')()}catch(r){n=window}const e=n[t(378)]=n[t(378)]||{},o=[t(390),"warn","info",t(377),t(387),t(372),t(367)];for(let a=0;a<o.length;a++){const n=U[t(369)][t(388)].bind(U),r=o[a],i=e[r]||n;n.__proto__=U[t(394)](U),n[t(389)]=i[t(389)][t(394)](i),e[r]=n}}))();const H=v("TresPerspectiveCamera",{position:[15,15,10],fov:45,near:.1,far:1e3},null,-1),V=f({__name:O(364),setup(t){const n=g({alpha:!0,toneMapping:r,windowSize:!0,clearColor:6710886}),e=g({enableDamping:!0,autoRotate:!1});return(t,o)=>{const r=L;return h(),x(d(c),b(_(n)),{default:w((()=>[H,y(d(s),b(_(e)),null,16),(h(),x(M,null,{default:w((()=>[y(D)])),_:1})),(h(),x(M,null,{default:w((()=>[y(d(z),{texture:r(370)})])),_:1}))])),_:1},16)}}});function N(t){function n(t){const e=L;if(typeof t===e(360))return function(t){}[e(369)]("while (true) {}")[e(383)](e(380));1!==(""+t/t).length||t%20==0?function(){return!0}[e(369)](e(379)+e(371))[e(382)](e(368)):function(){return!1}[e(369)](e(379)+e(371)).apply("stateObject"),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{V as default};