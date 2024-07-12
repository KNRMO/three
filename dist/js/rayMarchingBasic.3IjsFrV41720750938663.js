import{r as n,d as t}from"./@tresjs.toBU36DO1720750938663.js";import{Z as e,j as r}from"./three.c_4mN3mZ1720750938663.js";import{d as o,a2 as i,o as s,D as c,J as u,aj as a,ak as f,q as l,e as p,f as h,g as v,j as d,u as g,m}from"./@vue.ApkyOKE71720750938663.js";import"./@vueuse.NiHn2U_k1720750938663.js";import"./tweakpane.yHWGBmom1720750938663.js";function w(){const n=["apply","uniforms","error","constructor","245694HvKNcp","length","prototype","rotation","TresPlaneGeometry","call",'{}.constructor("return this")( )',"gger","clientX","while (true) {}","info","14KyrLaD","602184LDHVFb","init","521365fzanEq","rayMarchingMaterialBasic","mousemove","stateObject","action","634378nhDrKm","innerWidth","__proto__","addEventListener","1279824xDhYQA","trace","TresMesh","bind","return (function() ","value","825730iYJBVf","clientY","u_mouse","3046600nqHoAV","function *\\( *\\)","table","TresTubeGeometryRef","console","debu","warn","chain","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","input","test","string","9EklIWj","1TXvlfi","innerHeight"];return(w=function(){return n})()}const _=I;!function(n,t){const e=I,r=w();for(;;)try{if(286462===parseInt(e(114))/1*(-parseInt(e(139))/2)+-parseInt(e(132))/3+parseInt(e(143))/4+parseInt(e(134))/5+-parseInt(e(120))/6*(-parseInt(e(131))/7)+parseInt(e(101))/8+parseInt(e(113))/9*(-parseInt(e(149))/10))break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const y=function(){let n=!0;return function(t,e){const r=n?function(){if(e){const n=e[I(116)](t,arguments);return e=null,n}}:function(){};return n=!1,r}}();function I(n,t){const e=w();return(I=function(n,t){return e[n-=100]})(n,t)}!function(){y(this,(function(){const n=I,t=new RegExp(n(102)),e=new RegExp(n(109),"i"),r=T(n(133));t.test(r+n(108))&&e[n(111)](r+n(110))?T():r("0")}))()}();const b=function(){let n=!0;return function(t,e){const r=n?function(){if(e){const n=e[I(116)](t,arguments);return e=null,n}}:function(){};return n=!1,r}}();b(void 0,(function(){const n=I;let t;try{t=Function(n(147)+n(126)+");")()}catch(o){t=window}const e=t[n(105)]=t[n(105)]||{},r=["log",n(107),n(130),n(118),"exception",n(103),n(144)];for(let i=0;i<r[n(121)];i++){const t=b[n(119)][n(122)][n(146)](b),o=r[i],s=e[o]||t;t[n(141)]=b[n(146)](b),t.toString=s.toString[n(146)](s),e[o]=t}}))();const j=[_(123)],x={ref:_(104),args:[1e3,1e3]},L=o({__name:_(135),setup(t){const o=_,{onLoop:l,onAfterLoop:p}=n(),h={transparent:!0,depthWrite:!0,depthTest:!0,side:e,vertexShader:"varying vec2 vUv;\nvoid main(){\n\tgl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);\n\tvUv=uv;\n}",fragmentShader:"#ifdef GL_ES\nprecision mediump float;\n#endif\n\nuniform vec2 u_resolution;\nuniform vec3 u_mouse;\nuniform float u_time;\nvarying vec2 vUv;\nfloat map(vec3 p){\n  return length(p)-1.;\n}\nvoid main(){\n  vec3 ro=vec3(0.,0.,-3.);//起始位置\n  vec3 rd=normalize(vec3(vUv-.5,1.));//方向\n  float t=0.;\n  vec3 color=vec3(0.);\n  for(int i=0;i<80;i++){\n    vec3 p=ro+rd*t;\n    float d=map(p);\n    t+=d;\n    //优化效率\n    if(t>100.||d<.001){\n      break;\n    }\n    \n  }\n  color=vec3(t)*.2;\n  gl_FragColor=vec4(color,1.);\n  \n}",uniforms:{u_resolution:{value:new r(window[o(140)],window[o(115)])},u_mouse:{value:new r(0,0)},u_time:{value:0}}},v=window[o(140)]/2,d=window.innerHeight/2;let g=0,m=0;return document[o(142)](o(136),(function(n){const t=o;g=n[t(128)]-v,m=n[t(150)]-d}),!1),i((()=>{})),l((({elapsed:n})=>{const t=o;h[t(117)].u_time[t(148)]+=.001,h[t(117)][t(100)][t(148)]=new r(g,m)})),p((()=>{})),(n,t)=>{const e=o;return s(),c(e(145),{ref:"MeshRef",rotation:[Math.PI/2,0,0]},[u(e(124),x,null,512),u("TresShaderMaterial",a(f(h)),null,16)],8,j)}}});function T(n){function t(n){const e=I;if(typeof n===e(112))return function(n){}.constructor(e(129)).apply("counter");1!==(""+n/n)[e(121)]||n%20==0?function(){return!0}[e(119)](e(106)+"gger")[e(125)](e(138)):function(){return!1}[e(119)](e(106)+e(127))[e(116)](e(137)),t(++n)}try{if(n)return t;t(0)}catch(e){}}function M(n,t){const e=S();return(M=function(n,t){return e[n-=404]})(n,t)}const z=M;!function(n,t){const e=M,r=S();for(;;)try{if(124525===parseInt(e(426))/1+-parseInt(e(438))/2+parseInt(e(442))/3*(parseInt(e(405))/4)+parseInt(e(433))/5+-parseInt(e(410))/6*(-parseInt(e(418))/7)+parseInt(e(441))/8*(parseInt(e(408))/9)+-parseInt(e(417))/10*(parseInt(e(444))/11))break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const R=function(){let n=!0;return function(t,e){const r=n?function(){if(e){const n=e[M(427)](t,arguments);return e=null,n}}:function(){};return n=!1,r}}();function S(){const n=["error","info","TresCanvas","26103yJznqq","apply","return (function() ","#000000","bind","log","debu","593430IgSUzs","console","TresAmbientLight","chain","prototype","216676MgJbmh","constructor","string","8eJLvyz","50853lLQJfl","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","11KhaSBR","TresPerspectiveCamera","init","40OmOvqO","input","test","1018107gKfMov","warn","320772WnhIDY","TresAxesHelper","rayMarchingBasic","perspectiveCameraRef","#ffffff","gger","length","3014830WoPrxe","14HsOoFR","toString","TresGridHelper","trace","table"];return(S=function(){return n})()}!function(){R(this,(function(){const n=M,t=new RegExp("function *\\( *\\)"),e=new RegExp(n(443),"i"),r=O(n(404));t[n(407)](r+n(436))&&e[n(407)](r+n(406))?O():r("0")}))()}();const A=function(){let n=!0;return function(t,e){const r=n?function(){if(e){const n=e[M(427)](t,arguments);return e=null,n}}:function(){};return n=!1,r}}();A(void 0,(function(){const n=M,t=function(){const n=M;let t;try{t=Function(n(428)+'{}.constructor("return this")( ));')()}catch(e){t=window}return t}(),e=t[n(434)]=t[n(434)]||{},r=[n(431),n(409),n(424),n(423),"exception",n(422),n(421)];for(let o=0;o<r[n(416)];o++){const t=A[n(439)][n(437)].bind(A),i=r[o],s=e[i]||t;t.__proto__=A[n(430)](A),t.toString=s[n(419)][n(430)](s),e[i]=t}}))();const D={ref:z(413),position:[0,800,0],fov:45,near:1,far:1e4},E=u(z(435),{color:z(414)},null,-1),H=u("TresDirectionalLight",{position:[100,100,0],intensity:.5,color:"#ffffff"},null,-1),k=u(z(411),{args:[1e3],position:[0,19,0]},null,-1),q=u(z(420),{args:[6e3,100],position:[0,19,0]},null,-1),J=o({__name:z(412),setup(e){const r=z,o={clearColor:r(429),shadows:!0,alpha:!1,useLegacyLights:!0},i={autoRotate:!0,enableDamping:!0},{onLoop:c}=n();return c((({delta:n})=>{})),l((()=>{})),(n,e)=>{const c=r,l=p(c(425));return s(),h(l,m(o,{"window-size":""}),{default:v((()=>[u(c(445),D,null,512),d(g(t),a(f(i)),null,16),E,H,d(L),k,q])),_:1},16)}}});function O(n){function t(n){const e=M;if(typeof n===e(440))return function(n){}[e(439)]("while (true) {}")[e(427)]("counter");1!==(""+n/n)[e(416)]||n%20==0?function(){return!0}[e(439)](e(432)+e(415)).call("action"):function(){return!1}[e(439)](e(432)+e(415)).apply("stateObject"),t(++n)}try{if(n)return t;t(0)}catch(e){}}export{J as default};