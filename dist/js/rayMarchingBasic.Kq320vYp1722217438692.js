import{$ as n,d as t}from"./@tresjs.vs5lCFs11722217438692.js";import{Z as e,j as r}from"./three.ej3u8izI1722217438692.js";import{d as o,a1 as i,o as c,D as s,J as u,aj as a,ak as f,q as l,e as p,f as h,g as d,j as v,u as m,m as g}from"./@vue.Q1VpS3901722217438692.js";import"./tweakpane.yHWGBmom1722217438692.js";import"./@vueuse.mG9rDBoo1722217438692.js";const w=b;!function(n,t){const e=b,r=I();for(;;)try{if(651802===parseInt(e(460))/1+parseInt(e(419))/2+-parseInt(e(427))/3*(-parseInt(e(430))/4)+parseInt(e(434))/5*(parseInt(e(461))/6)+parseInt(e(428))/7+-parseInt(e(463))/8+-parseInt(e(443))/9)break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const _=function(){let n=!0;return function(t,e){const r=n?function(){if(e){const n=e[b(425)](t,arguments);return e=null,n}}:function(){};return n=!1,r}}();!function(){_(this,(function(){const n=b,t=new RegExp(n(429)),e=new RegExp(n(451),"i"),r=k(n(436));t[n(454)](r+n(455))&&e[n(454)](r+n(424))?k():r("0")}))()}();const y=function(){let n=!0;return function(t,e){const r=n?function(){if(e){const n=e[b(425)](t,arguments);return e=null,n}}:function(){};return n=!1,r}}();function I(){const n=["debu",'{}.constructor("return this")( )',"MeshRef","5CdZkWh","return (function() ","init","clientY","counter","TresTubeGeometryRef","error","warn","gger","16670394NdztKO","constructor","length","value","exception","string","info","u_time","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","log","call","test","chain","stateObject","rayMarchingMaterialBasic","bind","console","872104exKDnb","5705214ZWQykf","innerWidth","6451064eIXLTJ","uniforms","table","1521086OKTeXy","TresShaderMaterial","toString","while (true) {}","clientX","input","apply","action","3aDhlIk","2653042HqRGCy","function *\\( *\\)","1391716sCkOuO"];return(I=function(){return n})()}function b(n,t){const e=I();return(b=function(n,t){return e[n-=419]})(n,t)}y(void 0,(function(){const n=b,t=function(){const n=b;let t;try{t=Function(n(435)+n(432)+");")()}catch(e){t=window}return t}(),e=t[n(459)]=t[n(459)]||{},r=[n(452),n(441),n(449),n(440),n(447),n(465),"trace"];for(let o=0;o<r[n(445)];o++){const t=y[n(444)].prototype[n(458)](y),i=r[o],c=e[i]||t;t.__proto__=y[n(458)](y),t[n(421)]=c[n(421)][n(458)](c),e[i]=t}}))();const j=["rotation"],T={ref:w(439),args:[1e3,1e3]},x=o({__name:w(457),setup(t){const o=w,{onLoop:l,onAfterLoop:p}=n(),h={transparent:!0,depthWrite:!0,depthTest:!0,side:e,vertexShader:"varying vec2 vUv;\nvoid main(){\n\tgl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);\n\tvUv=uv;\n}",fragmentShader:"#ifdef GL_ES\nprecision mediump float;\n#endif\n\nuniform vec2 u_resolution;\nuniform vec3 u_mouse;\nuniform float u_time;\nvarying vec2 vUv;\nfloat map(vec3 p){\n  return length(p)-1.;\n}\nvoid main(){\n  vec3 ro=vec3(0.,0.,-3.);//起始位置\n  vec3 rd=normalize(vec3(vUv-.5,1.));//方向\n  float t=0.;\n  vec3 color=vec3(0.);\n  for(int i=0;i<80;i++){\n    vec3 p=ro+rd*t;\n    float d=map(p);\n    t+=d;\n    //优化效率\n    if(t>100.||d<.001){\n      break;\n    }\n    \n  }\n  color=vec3(t)*.2;\n  gl_FragColor=vec4(color,1.);\n  \n}",uniforms:{u_resolution:{value:new r(window[o(462)],window.innerHeight)},u_mouse:{value:new r(0,0)},u_time:{value:0}}},d=window[o(462)]/2,v=window.innerHeight/2;let m=0,g=0;return document.addEventListener("mousemove",(function(n){const t=o;m=n[t(423)]-d,g=n[t(437)]-v}),!1),i((()=>{})),l((({elapsed:n})=>{const t=o;h[t(464)][t(450)][t(446)]+=.001,h[t(464)].u_mouse[t(446)]=new r(m,g)})),p((()=>{})),(n,t)=>{const e=o;return c(),s("TresMesh",{ref:e(433),rotation:[Math.PI/2,0,0]},[u("TresPlaneGeometry",T,null,512),u(e(420),a(f(h)),null,16)],8,j)}}});function k(n){function t(n){const e=b;if(typeof n===e(448))return function(n){}[e(444)](e(422))[e(425)](e(438));1!==(""+n/n)[e(445)]||n%20==0?function(){return!0}[e(444)](e(431)+e(442))[e(453)](e(426)):function(){return!1}[e(444)](e(431)+"gger")[e(425)](e(456)),t(++n)}try{if(n)return t;t(0)}catch(e){}}const L=M;!function(n,t){const e=M,r=A();for(;;)try{if(610345===parseInt(e(169))/1+parseInt(e(167))/2+parseInt(e(145))/3+parseInt(e(161))/4*(-parseInt(e(154))/5)+parseInt(e(143))/6*(-parseInt(e(163))/7)+-parseInt(e(177))/8*(-parseInt(e(147))/9)+-parseInt(e(158))/10)break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const R=function(){let n=!0;return function(t,e){const r=n?function(){if(e){const n=e[M(170)](t,arguments);return e=null,n}}:function(){};return n=!1,r}}();function A(){const n=["log","81718jorLke","while (true) {}","1198273KEaFmp","apply","rayMarchingBasic","length","string","info","return (function() ","debu","129640NBlaft","__proto__","exception","#000000","stateObject","constructor","12pvSopp","TresGridHelper","1860657iwToDc","function *\\( *\\)","441nOJvmA","call","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","TresPerspectiveCamera","test","init","bind","5JkqAVj","TresCanvas","console","gger","11539840ebkJgK","chain","TresAxesHelper","2374860RGIaQD",'{}.constructor("return this")( )',"1033732xxZODe","#ffffff","toString"];return(A=function(){return n})()}function M(n,t){const e=A();return(M=function(n,t){return e[n-=143]})(n,t)}!function(){R(this,(function(){const n=M,t=new RegExp(n(146)),e=new RegExp(n(149),"i"),r=G(n(152));t[n(151)](r+n(159))&&e.test(r+"input")?G():r("0")}))()}();const C=function(){let n=!0;return function(t,e){const r=n?function(){if(e){const n=e.apply(t,arguments);return e=null,n}}:function(){};return n=!1,r}}();C(void 0,(function(){const n=M;let t;try{t=Function(n(175)+n(162)+");")()}catch(o){t=window}const e=t[n(156)]=t.console||{},r=[n(166),"warn",n(174),"error",n(179),"table","trace"];for(let i=0;i<r[n(172)];i++){const t=C[n(182)].prototype.bind(C),o=r[i],c=e[o]||t;t[n(178)]=C[n(153)](C),t.toString=c[n(165)][n(153)](c),e[o]=t}}))();const D={ref:"perspectiveCameraRef",position:[0,800,0],fov:45,near:1,far:1e4},O=u("TresAmbientLight",{color:L(164)},null,-1),S=u("TresDirectionalLight",{position:[100,100,0],intensity:.5,color:L(164)},null,-1),Z=u(L(160),{args:[1e3],position:[0,19,0]},null,-1),z=u(L(144),{args:[6e3,100],position:[0,19,0]},null,-1),E=o({__name:L(171),setup(e){const r=L,o={clearColor:r(180),shadows:!0,alpha:!1,useLegacyLights:!0},i={autoRotate:!0,enableDamping:!0},{onLoop:s}=n();return s((({delta:n})=>{})),l((()=>{})),(n,e)=>{const s=r,l=p(s(155));return c(),h(l,g(o,{"window-size":""}),{default:d((()=>[u(s(150),D,null,512),v(m(t),a(f(i)),null,16),O,S,v(x),Z,z])),_:1},16)}}});function G(n){function t(n){const e=M;if(typeof n===e(173))return function(n){}.constructor(e(168)).apply("counter");1!==(""+n/n)[e(172)]||n%20==0?function(){return!0}[e(182)](e(176)+e(157))[e(148)]("action"):function(){return!1}.constructor(e(176)+e(157)).apply(e(181)),t(++n)}try{if(n)return t;t(0)}catch(e){}}export{E as default};