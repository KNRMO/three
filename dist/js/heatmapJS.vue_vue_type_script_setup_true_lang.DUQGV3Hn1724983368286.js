import{T as t,Z as n}from"./three.p-9BQwc31724983368286.js";import{_ as e}from"./heatmap.js-fix.gqU99bdd1724983368286.js";import{d as o,a1 as r,o as a,D as i,J as s,aj as u,ak as c}from"./@vue.Q1VpS3901724983368286.js";const l=m;!function(t,n){const e=m,o=v();for(;;)try{if(667797===parseInt(e(266))/1*(parseInt(e(214))/2)+parseInt(e(238))/3*(-parseInt(e(250))/4)+parseInt(e(217))/5+-parseInt(e(231))/6*(-parseInt(e(251))/7)+parseInt(e(253))/8*(-parseInt(e(213))/9)+-parseInt(e(219))/10*(parseInt(e(246))/11)+parseInt(e(243))/12)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const h=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[m(224)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){h(this,(function(){const t=m,n=new RegExp(t(234)),e=new RegExp(t(222),"i"),o=y(t(236));n[t(225)](o+"chain")&&e[t(225)](o+"input")?y():o("0")}))()}();const p=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[m(224)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();p(void 0,(function(){const t=m;let n;try{n=Function(t(252)+'{}.constructor("return this")( ));')()}catch(r){n=window}const e=n[t(227)]=n[t(227)]||{},o=["log",t(264),"info",t(272),t(212),t(240),t(271)];for(let a=0;a<o[t(255)];a++){const n=p[t(220)][t(260)].bind(p),r=o[a],i=e[r]||n;n.__proto__=p[t(235)](p),n[t(239)]=i[t(239)][t(235)](i),e[r]=n}}))();const f=[l(254)],g=[l(226),l(248)];function v(){const t=["Plane","apply","test","args","console","TresPlaneGeometry","block","\n\tvarying float hValue;\n\tvarying vec3 cl;\n\tvoid main() {\n\t\tfloat v = abs(hValue - 1.);\n\t\tgl_FragColor = vec4(cl, .8 - v * v*1.1) ; \n\t}","126MUlgmd","debu","heightRatio","function *\\( *\\)","bind","init","width","492tSsSoi","toString","table","absolute","body","3685536zpKtQF","uniforms","appendChild","1815OrlBkg","TresMesh","rotate-x","counter","28284vJerrW","396865iHvuOC","return (function() ","8qzXNWh","position","length","stateObject","create","random","push","prototype","TresShaderMaterial","left","string","warn","action","33Fbjcfu","canvas","heatmap-canvas","createElement","heatmapJS","trace","error","\n\tuniform sampler2D heightMap;\n\tuniform float heightRatio;\n\tvarying vec2 vUv;\n\tvarying float hValue;\n\tvarying vec3 cl;\n\tvoid main() {\n\t  vUv = uv;\n\t  vec3 pos = position;\n\t  cl = texture2D(heightMap, vUv).rgb;\n\t  hValue = texture2D(heightMap, vUv).r;\n\t  pos.y = hValue * heightRatio;\n\t  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.0);\n\t}","show2dCanvas","exception","1514331neuhQX","28834aFYNYJ","style","value","4587530nEeFXU","needsUpdate","54260AagRpf","constructor","call","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)"];return(v=function(){return t})()}const d=o({__name:l(270),props:{position:{default:[0,0,0]},Plane:{default:[50,50,1e3,1e3]},show2dCanvas:{type:Boolean,default:!0},heightRatio:{default:6}},setup(o,{expose:h}){const p=l,v=o;let d=null;const y=(t,n)=>{const e=m;return Math.round(10*(Math[e(258)]()*(t-n+1)+n))/10};let x=null;const b=t=>{const n=m;if(t);else{let e=0;for(t=[];e<2e3;)t[n(259)]({x:y(1,256),y:y(1,256),value:y(1,6)}),e++}d.setData({max:12,data:t}),I[n(218)]=!0},I=new t((()=>{const t=m;return x=document[t(269)](t(268)),x[t(237)]=100,x.height=100,x.style[t(254)]=t(241),x.style.top="0",x[t(215)][t(262)]="0",document[t(242)][t(245)](x),d=e[t(257)]({container:x,width:256,height:256,blur:".8",radius:10}),d})()._renderer[p(267)]);b();const _={transparent:!0,side:n,vertexShader:p(273),fragmentShader:p(230),uniforms:{heightMap:{type:"t",value:I},heightRatio:{value:v.heightRatio}}};return r((()=>{const t=p;x[t(215)].display=""+(v[t(274)]?t(229):"none"),v[t(233)]&&(_[t(244)][t(233)][t(216)]=v[t(233)])})),h({setData:b}),(t,n)=>{const e=p;return a(),i(e(247),{position:v[e(254)]},[s(e(228),{args:v[e(223)],"rotate-x":.5*-Math.PI},null,8,g),s(e(261),u(c(_)),null,16)],8,f)}}});function m(t,n){const e=v();return(m=function(t,n){return e[t-=212]})(t,n)}function y(t){function n(t){const e=m;if(typeof t===e(263))return function(t){}[e(220)]("while (true) {}")[e(224)](e(249));1!==(""+t/t).length||t%20==0?function(){return!0}[e(220)](e(232)+"gger")[e(221)](e(265)):function(){return!1}[e(220)](e(232)+"gger")[e(224)](e(256)),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{d as _};
