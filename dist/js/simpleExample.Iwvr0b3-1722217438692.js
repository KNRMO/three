import{$ as t,d as n}from"./@tresjs.vs5lCFs11722217438692.js";import{a6 as e,ab as o,ac as r,Z as a}from"./three.ej3u8izI1722217438692.js";import{d as i,e as c,o as s,f as u,g as l,j as p,u as f,J as h,aj as d,ak as g,m}from"./@vue.Q1VpS3901722217438692.js";import"./tweakpane.yHWGBmom1722217438692.js";import"./@vueuse.mG9rDBoo1722217438692.js";function v(){const t=["width","trace","5900356jzlEkq","291rMFSWY","apply","arc","string","minFilter","log","fillStyle","canvas","exception","86445rJfUcF","#f00","2364930shOIbq","Texture","init","createRadialGradient","height","__proto__","#33f900","toString","body","globalAlpha","#0349df","createElement","position","warn","counter","createLinearGradient","test","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","closePath","needsUpdate","NearestFilter","997085KMmaRp","getContext","#fff","info","random","segments","style","16tZRuxN","bind","appendChild","console","#e2fa00","absolute","20px",'{}.constructor("return this")( )',"gger","function *\\( *\\)","rgba(255, 0, 0, 0)","input","length","constructor","call","10632rRoFQL","9tOkYmE","4UWIvpN","error","addColorStop","1429590MHVDbj","debu","top","beginPath","1717282sOVymo"];return(v=function(){return t})()}!function(t,n){const e=M,o=v();for(;;)try{if(322500===parseInt(e(458))/1+-parseInt(e(436))/2*(parseInt(e(449))/3)+parseInt(e(438))/4*(parseInt(e(481))/5)+-parseInt(e(441))/6+parseInt(e(445))/7*(parseInt(e(488))/8)+parseInt(e(437))/9*(-parseInt(e(460))/10)+parseInt(e(448))/11)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const y=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[M(450)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){y(this,(function(){const t=M,n=new RegExp(t(430)),e=new RegExp(t(477),"i"),o=_(t(462));n[t(476)](o+"chain")&&e[t(476)](o+t(432))?_():o("0")}))()}();const b=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[M(450)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();b(void 0,(function(){const t=M;let n;try{n=Function("return (function() "+t(495)+");")()}catch(r){n=window}const e=n[t(491)]=n[t(491)]||{},o=[t(454),t(473),t(484),t(439),t(457),"table",t(447)];for(let a=0;a<o[t(433)];a++){const n=b[t(434)].prototype[t(489)](b),r=o[a],i=e[r]||n;n[t(465)]=b.bind(b),n[t(467)]=i.toString[t(489)](i),e[r]=n}}))();const w={segments:30,w:256,h:256},I=(t,n)=>{const e=M;let{x:o,y:r,radius:a,weight:i}=n;a=parseInt(a*i);const c=t[e(463)](o,r,0,o,r,a);c.addColorStop(0,"rgba(255, 255, 0, 1)"),c[e(440)](1,e(431)),t[e(455)]=c,t[e(469)]=i,t[e(444)](),t[e(451)](o,r,a,0,2*Math.PI),t[e(478)](),t.fill()};function M(t,n){const e=v();return(M=function(t,n){return e[t-=430]})(t,n)}const S=()=>{const t=M,n={1:t(459),.8:t(492),.6:t(466),.3:t(470),0:t(483)},o=document[t(471)](t(456));o.width=256,o[t(464)]=10,o[t(487)].position=t(493),o.style[t(443)]="0",o[t(487)].right="0";const r=o[t(482)]("2d"),a=r[t(475)](0,0,256,0);for(const e in n)a.addColorStop(e,n[e]);r[t(455)]=a,r.fillRect(0,0,256,10),document[t(468)].appendChild(o);const i=new(e[t(461)])(o);return i[t(453)]=e[t(480)],i.needsUpdate=!0,i},x=()=>{const t=M,n=document.createElement(t(456));n[t(446)]=w.w,n[t(464)]=w.h,n[t(487)][t(472)]=t(493),n.style.top=t(494),n[t(487)].right="0";const o=n[t(482)]("2d"),r=(()=>{const t=M,n=new Array;for(let e=0;e<w[t(486)];e++)n[e]=parseInt(25*Math.random()+10);return n})();for(let e=0;e<w[t(486)];e++){const n=r[e]/35,a=Math.random()*w.w,i=Math[t(485)]()*w.h;I(o,{x:a,y:i,radius:80,weight:n})}document[t(468)][t(490)](n);const a=new(e[t(461)])(n);return a.minFilter=e[t(480)],a[t(479)]=!0,a};function _(t){function n(t){const e=M;if(typeof t===e(452))return function(t){}[e(434)]("while (true) {}")[e(450)](e(474));1!==(""+t/t).length||t%20==0?function(){return!0}[e(434)](e(442)+"gger")[e(435)]("action"):function(){return!1}[e(434)]("debu"+e(496))[e(450)]("stateObject"),n(++t)}try{if(t)return n;n(0)}catch(e){}}const j=U;function C(){const t=["16073784IHEYga","\n\t#ifdef GL_ES\n  precision highp float;\n  #endif\n  varying vec2 vUv;\n  uniform sampler2D alphaScaleMap;\n  uniform sampler2D paletteMap;\n  void main() {\n    vec4 alphaColor = texture2D(alphaScaleMap, vUv);\n    vec4 color = texture2D(paletteMap, vec2(alphaColor.a, 0.0));\n    gl_FragColor = vec4(color.r, color.g, color.b, alphaColor.a);\n\t}","debu","action","counter","stateObject","prototype","56qYWrJh","TresPerspectiveCamera","function *\\( *\\)","toString","__proto__","2489416QSPUlN","12842032HyuDkb","log","constructor","TresShaderMaterial","simpleExample","return (function() ","20MXaGBT","bind","18540Vrbpej","1046198dicRBB","apply","input","init","TresPlaneGeometry","console","error","1245PFmejD","length","#030311","string",'{}.constructor("return this")( )',"exception","TresMesh","TresCanvas","202425YNyboo","4876620ISpujZ","TresAmbientLight","info","test"];return(C=function(){return t})()}!function(t,n){const e=U,o=C();for(;;)try{if(845628===parseInt(e(491))/1+parseInt(e(481))/2+parseInt(e(506))/3*(-parseInt(e(476))/4)+-parseInt(e(498))/5*(-parseInt(e(490))/6)+parseInt(e(507))/7+parseInt(e(482))/8+-parseInt(e(469))/9*(parseInt(e(488))/10))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const R=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){R(this,(function(){const t=U,n=new RegExp(t(478)),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),o=A(t(494));n[t(468)](o+"chain")&&e[t(468)](o+t(493))?A():o("0")}))()}();const E=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,o}}();E(void 0,(function(){const t=U,n=function(){const t=U;let n;try{n=Function(t(487)+t(502)+");")()}catch(e){n=window}return n}(),e=n[t(496)]=n[t(496)]||{},o=["log","warn",t(467),t(497),t(503),"table","trace"];for(let r=0;r<o[t(499)];r++){const n=E[t(484)][t(475)][t(489)](E),a=o[r],i=e[a]||n;n[t(480)]=E[t(489)](E),n[t(479)]=i.toString[t(489)](i),e[a]=n}}))();const F=h(j(477),{position:[0,0,3e3],fov:40,near:.1,far:1e4},null,-1),P=h(j(508),{color:"#eef0ff",intensity:1},null,-1),T=h(j(495),{args:[1500,1500]},null,-1);function U(t,n){const e=C();return(U=function(t,n){return e[t-=467]})(t,n)}const k=i({__name:j(486),setup(e){const i=j,v={clearColor:i(500),shadows:!0,alpha:!1,outputColorSpace:o,shadowMapType:r,useLegacyLights:!0};t().onLoop((({delta:t})=>{}));const y={transparent:!0,side:a,vertexShader:"\n\tvarying vec2 vUv;\n  void main() {\n    vUv = uv;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n  }",fragmentShader:i(470),uniforms:{alphaScaleMap:{type:"t",value:x()},paletteMap:{type:"t",value:S()}}};function b(t){t&&console[i(483)](t)}return(t,e)=>{const o=i,r=c(o(505));return s(),u(r,m(v,{"window-size":""}),{default:l((()=>[F,p(f(n),{autoRotate:!0,autoRotateSpeed:2}),P,h(o(504),{position:[0,0,10],onPointerMove:b},[T,h(o(485),d(g(y)),null,16)],32)])),_:1},16)}}});function A(t){function n(t){const e=U;if(typeof t===e(501))return function(t){}[e(484)]("while (true) {}")[e(492)](e(473));1!==(""+t/t).length||t%20==0?function(){return!0}[e(484)]("debugger").call(e(472)):function(){return!1}[e(484)](e(471)+"gger")[e(492)](e(474)),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{k as default};
