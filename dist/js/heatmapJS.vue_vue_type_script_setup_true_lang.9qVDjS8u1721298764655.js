import{T as t,Z as n}from"./three.0bBjBDi41721298764655.js";import{_ as e}from"./heatmap.js-fix.kKNY85lA1721298764655.js";import{d as o,a1 as r,o as a,D as i,J as s,aj as c,ak as u}from"./@vue.Q1VpS3901721298764655.js";const l=p;!function(t,n){const e=p,o=g();for(;;)try{if(169652===parseInt(e(504))/1*(-parseInt(e(474))/2)+parseInt(e(502))/3+parseInt(e(507))/4+parseInt(e(486))/5+parseInt(e(484))/6+parseInt(e(480))/7+-parseInt(e(515))/8)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const h=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[p(519)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){h(this,(function(){const t=p,n=new RegExp(t(472)),e=new RegExp(t(483),"i"),o=y(t(473));n[t(494)](o+t(497))&&e[t(494)](o+t(467))?y():o("0")}))()}();const f=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,o}}();function p(t,n){const e=g();return(p=function(t,n){return e[t-=465]})(t,n)}f(void 0,(function(){const t=p;let n;try{n=Function(t(487)+'{}.constructor("return this")( ));')()}catch(r){n=window}const e=n[t(496)]=n[t(496)]||{},o=[t(469),t(514),"info",t(513),"exception",t(482),t(509)];for(let a=0;a<o.length;a++){const n=f[t(485)].prototype[t(500)](f),r=o[a],i=e[r]||n;n[t(511)]=f[t(500)](f),n.toString=i.toString.bind(i),e[r]=n}}))();const v=[l(518)],d=[l(503),l(516)];function g(){const t=["push","style","display","Plane","1481403idvKZC","TresPlaneGeometry","table","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","1819746OJKWhC","constructor","558870Ikvxdo","return (function() ","\n\tvarying float hValue;\n\tvarying vec3 cl;\n\tvoid main() {\n\t\tfloat v = abs(hValue - 1.);\n\t\tgl_FragColor = vec4(cl, .8 - v * v*1.1) ; \n\t}","body","heightRatio","left","gger","canvas","test","round","console","chain","width","createElement","bind","none","714324IKmYIZ","args","162709LoLMJC","stateObject","needsUpdate","1099128HzYgLA","debu","trace","absolute","__proto__","random","error","warn","5156112TnAqwR","rotate-x","block","position","apply","value","length","counter","while (true) {}","input","show2dCanvas","log","heatmapJS","heatmap-canvas","function *\\( *\\)","init","4szVffV","TresShaderMaterial"];return(g=function(){return t})()}const m=o({__name:l(470),props:{position:{default:[0,0,0]},Plane:{default:[50,50,1e3,1e3]},show2dCanvas:{type:Boolean,default:!0},heightRatio:{default:6}},setup(o,{expose:h}){const f=l,g=o;let m=null;const y=(t,n)=>{const e=p;return Math[e(495)](10*(Math[e(512)]()*(t-n+1)+n))/10};let x=null;const b=t=>{const n=p;if(t);else{let e=0;for(t=[];e<2e3;)t[n(476)]({x:y(1,256),y:y(1,256),value:y(1,6)}),e++}m.setData({max:12,data:t}),w[n(506)]=!0},w=new t((()=>{const t=p;return x=document[t(499)](t(471)),x[t(498)]=100,x.height=100,x[t(477)].position=t(510),x.style.top="0",x[t(477)][t(491)]="0",document[t(489)].appendChild(x),m=e.create({container:x,width:256,height:256,blur:".8",radius:10}),m})()._renderer[f(493)]);b();const _={transparent:!0,side:n,vertexShader:"\n\tuniform sampler2D heightMap;\n\tuniform float heightRatio;\n\tvarying vec2 vUv;\n\tvarying float hValue;\n\tvarying vec3 cl;\n\tvoid main() {\n\t  vUv = uv;\n\t  vec3 pos = position;\n\t  cl = texture2D(heightMap, vUv).rgb;\n\t  hValue = texture2D(heightMap, vUv).r;\n\t  pos.y = hValue * heightRatio;\n\t  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.0);\n\t}",fragmentShader:f(488),uniforms:{heightMap:{type:"t",value:w},heightRatio:{value:g.heightRatio}}};return r((()=>{const t=f;x[t(477)][t(478)]=""+(g[t(468)]?t(517):t(501)),g[t(490)]&&(_.uniforms[t(490)][t(520)]=g[t(490)])})),h({setData:b}),(t,n)=>{const e=f;return a(),i("TresMesh",{position:g[e(518)]},[s(e(481),{args:g[e(479)],"rotate-x":.5*-Math.PI},null,8,d),s(e(475),c(u(_)),null,16)],8,v)}}});function y(t){function n(t){const e=p;if("string"==typeof t)return function(t){}.constructor(e(466))[e(519)](e(465));1!==(""+t/t)[e(521)]||t%20==0?function(){return!0}[e(485)](e(508)+"gger").call("action"):function(){return!1}[e(485)]("debu"+e(492))[e(519)](e(505)),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{m as _};
