import{a6 as t,A as n}from"./three.ej3u8izI1722217438692.js";import{N as r}from"./@tresjs.vs5lCFs11722217438692.js";import{d as e,a4 as o,o as i,D as a,J as s,aj as c,ak as u}from"./@vue.Q1VpS3901722217438692.js";function p(){const t=["error","action","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","string","444BtlwsR","generateMipmaps","\n\t\tuniform sampler2D uSkybox;\n\t\tvarying vec3 vFragPos;\n\t\tconst float PI = 3.14159265359;\n\t\tvoid main() {\n\t\t\t\tvec3 dir = normalize(vFragPos);\n\t\t\t\tfloat v = (asin(dir.y) + PI * 0.5) / (PI); \n\t\t\t\tfloat u = (atan(dir.x, dir.z) + PI) / (PI * 2.0);\n\t\t\t\tgl_FragColor = texture2D(uSkybox, vec2(u, v));\n\t\t}","__proto__","3899399nhxeRZ","console","counter","234iCnqOA","stateObject","debu","TresMesh","565500clpcGR","return (function() ","while (true) {}","576592YrCSjv","exception","table","init","TresBoxGeometry","test","699460BeEpMl","9402joHFcU","gger","skyBoxAmesh","wrapT","TresShaderMaterial","call","18787VlWwvE","constructor","texture","warn","apply","function *\\( *\\)","prototype","size","LinearFilter","2563914nKvmPf","ClampToEdgeWrapping","input","\n\t\tvarying vec3 vFragPos;\n\n\t\tvoid main() {\n\t\t\t\tvFragPos = position.xyz;\n\t\t\t\tvec4 viewSpace = vec4(mat3(modelViewMatrix) * position, 0.0);\n\t\t\t\tviewSpace.w = 1.0;\n\t\t\t\tgl_Position = projectionMatrix * viewSpace;    \n\t\t}","chain","bind","magFilter","toString","length"];return(p=function(){return t})()}const f=l;function l(t,n){const r=p();return(l=function(t,n){return r[t-=107]})(t,n)}!function(t,n){const r=l,e=p();for(;;)try{if(286257===-parseInt(r(138))/1+-parseInt(r(131))/2+parseInt(r(132))/3*(-parseInt(r(111))/4)+parseInt(r(122))/5+-parseInt(r(147))/6+-parseInt(r(115))/7+-parseInt(r(125))/8*(-parseInt(r(118))/9))break;e.push(e.shift())}catch(o){e.push(e.shift())}}();const g=function(){let t=!0;return function(n,r){const e=t?function(){if(r){const t=r[l(142)](n,arguments);return r=null,t}}:function(){};return t=!1,e}}();!function(){g(this,(function(){const t=l,n=new RegExp(t(143)),r=new RegExp(t(109),"i"),e=h(t(128));n[t(130)](e+t(151))&&r.test(e+t(149))?h():e("0")}))()}();const v=function(){let t=!0;return function(n,r){const e=t?function(){if(r){const t=r[l(142)](n,arguments);return r=null,t}}:function(){};return t=!1,e}}();v(void 0,(function(){const t=l;let n;try{n=Function(t(123)+'{}.constructor("return this")( ));')()}catch(o){n=window}const r=n[t(116)]=n[t(116)]||{},e=["log",t(141),"info",t(107),t(126),t(127),"trace"];for(let i=0;i<e[t(155)];i++){const n=v[t(139)][t(144)][t(152)](v),o=e[i],a=r[o]||n;n[t(114)]=v[t(152)](v),n.toString=a[t(154)].bind(a),r[o]=n}}))();const m=["args"],d=e({__name:f(134),props:{texture:{},size:{default:1e3}},async setup(e){const p=f;let l,g;const v=e,{map:d}=([l,g]=o((()=>r({map:v[p(140)]}))),l=await l,g(),l);d.wrapS=d[p(135)]=t[p(148)],d[p(112)]=!1,d[p(153)]=t[p(146)],d.minFilter=t[p(146)];const h={uniforms:{uSkybox:{type:"t",value:d}},side:n,vertexShader:p(150),fragmentShader:p(113),depthWrite:!1};return(t,n)=>{const r=p;return i(),a(r(121),null,[s(r(129),{args:[v[r(145)],v[r(145)],v[r(145)]]},null,8,m),s(r(136),c(u(h)),null,16)])}}});function h(t){function n(t){const r=l;if(typeof t===r(110))return function(t){}[r(139)](r(124))[r(142)](r(117));1!==(""+t/t).length||t%20==0?function(){return!0}[r(139)](r(120)+r(133))[r(137)](r(108)):function(){return!1}[r(139)]("debu"+r(133))[r(142)](r(119)),n(++t)}try{if(t)return n;n(0)}catch(r){}}export{d as _};