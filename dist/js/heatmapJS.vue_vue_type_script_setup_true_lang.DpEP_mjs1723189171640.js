import{T as t,Z as n}from"./three.5MXJ6W7w1723189171640.js";import{_ as e}from"./heatmap.js-fix.yqBEmLV-1723189171640.js";import{d as o,a1 as r,o as a,D as i,J as s,aj as u,ak as c}from"./@vue.Q1VpS3901723189171640.js";const l=g;!function(t,n){const e=g,o=d();for(;;)try{if(800558===-parseInt(e(399))/1+parseInt(e(366))/2*(parseInt(e(405))/3)+-parseInt(e(352))/4+parseInt(e(362))/5*(parseInt(e(386))/6)+-parseInt(e(369))/7+parseInt(e(384))/8*(-parseInt(e(383))/9)+-parseInt(e(404))/10*(-parseInt(e(407))/11))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const h=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){h(this,(function(){const t=g,n=new RegExp("function *\\( *\\)"),e=new RegExp(t(379),"i"),o=y(t(372));n.test(o+"chain")&&e[t(356)](o+"input")?y():o("0")}))()}();const p=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[g(353)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();p(void 0,(function(){const t=g,n=function(){const t=g;let n;try{n=Function(t(378)+t(355)+");")()}catch(e){n=window}return n}(),e=n[t(345)]=n[t(345)]||{},o=[t(387),t(374),t(346),t(363),"exception",t(375),t(350)];for(let r=0;r<o[t(361)];r++){const n=p[t(354)].prototype.bind(p),a=o[r],i=e[a]||n;n[t(402)]=p[t(406)](p),n[t(395)]=i[t(395)][t(406)](i),e[a]=n}}))();const f=[l(393)],v=[l(377),"rotate-x"];function d(){const t=["TresMesh","2kdWTLG","uniforms","random","242123MUryxb","\n\tuniform sampler2D heightMap;\n\tuniform float heightRatio;\n\tvarying vec2 vUv;\n\tvarying float hValue;\n\tvarying vec3 cl;\n\tvoid main() {\n\t  vUv = uv;\n\t  vec3 pos = position;\n\t  cl = texture2D(heightMap, vUv).rgb;\n\t  hValue = texture2D(heightMap, vUv).r;\n\t  pos.y = hValue * heightRatio;\n\t  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.0);\n\t}","absolute","init","style","warn","table","_renderer","args","return (function() ","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","stateObject","block","appendChild","423CHrGmL","271032bZxWAs","Plane","9396KhGHPv","log","heatmapJS","string","round","top","none","position","call","toString","heightRatio","canvas","while (true) {}","498423yjKuGE","create","show2dCanvas","__proto__","height","10RBxNzv","186135cVFsda","bind","22993531GgzAqf","console","info","display","createElement","debu","trace","setData","814668uuMRQi","apply","constructor",'{}.constructor("return this")( )',"test","needsUpdate","body","gger","\n\tvarying float hValue;\n\tvarying vec3 cl;\n\tvoid main() {\n\t\tfloat v = abs(hValue - 1.);\n\t\tgl_FragColor = vec4(cl, .8 - v * v*1.1) ; \n\t}","length","3120zgkcYJ","error","TresPlaneGeometry"];return(d=function(){return t})()}function g(t,n){const e=d();return(g=function(t,n){return e[t-=345]})(t,n)}const m=o({__name:l(388),props:{position:{default:[0,0,0]},Plane:{default:[50,50,1e3,1e3]},show2dCanvas:{type:Boolean,default:!0},heightRatio:{default:6}},setup(o,{expose:h}){const p=l,d=o;let m=null;const y=(t,n)=>{const e=g;return Math[e(390)](10*(Math[e(368)]()*(t-n+1)+n))/10};let x=null;const b=t=>{const n=g;if(t);else{let n=0;for(t=[];n<2e3;)t.push({x:y(1,256),y:y(1,256),value:y(1,6)}),n++}m[n(351)]({max:12,data:t}),M[n(357)]=!0},M=new t((()=>{const t=g;return x=document[t(348)]("heatmap-canvas"),x.width=100,x[t(403)]=100,x[t(373)].position=t(371),x[t(373)][t(391)]="0",x.style.left="0",document[t(358)][t(382)](x),m=e[t(400)]({container:x,width:256,height:256,blur:".8",radius:10}),m})()[p(376)][p(397)]);b();const _={transparent:!0,side:n,vertexShader:p(370),fragmentShader:p(360),uniforms:{heightMap:{type:"t",value:M},heightRatio:{value:d.heightRatio}}};return r((()=>{const t=p;x[t(373)][t(347)]=""+(d[t(401)]?t(381):t(392)),d[t(396)]&&(_[t(367)][t(396)].value=d[t(396)])})),h({setData:b}),(t,n)=>{const e=p;return a(),i(e(365),{position:d[e(393)]},[s(e(364),{args:d[e(385)],"rotate-x":.5*-Math.PI},null,8,v),s("TresShaderMaterial",u(c(_)),null,16)],8,f)}}});function y(t){function n(t){const e=g;if(typeof t===e(389))return function(t){}.constructor(e(398))[e(353)]("counter");1!==(""+t/t)[e(361)]||t%20==0?function(){return!0}[e(354)](e(349)+e(359))[e(394)]("action"):function(){return!1}[e(354)]("debu"+e(359))[e(353)](e(380)),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{m as _};
