import{bf as t,a6 as n,A as r}from"./three.a9V66irq1725721021019.js";import{N as e}from"./@tresjs.bIWdfO9a1725721021019.js";import{d as o,a5 as i,o as s,E as a,L as c,aj as u,ak as p}from"./@vue._6MD2XyK1725721021019.js";function f(){const t=["console","860468sMKMTj","chain","prototype","1009116twVOiN","while (true) {}","warn","5dAMMRD","TresShaderMaterial","magFilter","296wAAQkn","3941DbpnsI","counter","stateObject","skyBoxAmesh","10uStcut","6IAJYbW","exception","\n\t\tuniform sampler2D uSkybox;\n\t\tvarying vec3 vFragPos;\n\t\tconst float PI = 3.14159265359;\n\t\tvoid main() {\n\t\t\t\tvec3 dir = normalize(vFragPos);\n\t\t\t\tfloat v = (asin(dir.y) + PI * 0.5) / (PI); \n\t\t\t\tfloat u = (atan(dir.x, dir.z) + PI) / (PI * 2.0);\n\t\t\t\tgl_FragColor = texture2D(uSkybox, vec2(u, v));\n\t\t}","constructor","action","string","length","function *\\( *\\)","LinearFilter","test","142002BzbMlw","apply","33pveJRl","return (function() ","gger","770634mdhNKu","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","toString","bind","debu","158018moFpzb","TresBoxGeometry","size","error","minFilter","trace","1168551icXXUa","table","call","generateMipmaps"];return(f=function(){return t})()}const l=v;!function(t,n){const r=v,e=f();for(;;)try{if(111733===parseInt(r(327))/1+parseInt(r(353))/2*(parseInt(r(363))/3)+-parseInt(r(338))/4+-parseInt(r(344))/5*(-parseInt(r(368))/6)+-parseInt(r(348))/7*(-parseInt(r(347))/8)+parseInt(r(333))/9*(parseInt(r(352))/10)+-parseInt(r(365))/11*(parseInt(r(341))/12))break;e.push(e.shift())}catch(o){e.push(e.shift())}}();const m=function(){let t=!0;return function(n,r){const e=t?function(){if(r){const t=r[v(364)](n,arguments);return r=null,t}}:function(){};return t=!1,e}}();!function(){m(this,(function(){const t=v,n=new RegExp(t(360)),r=new RegExp(t(369),"i"),e=I("init");n[t(362)](e+t(339))&&r[t(362)](e+"input")?I():e("0")}))()}();const g=function(){let t=!0;return function(n,r){const e=t?function(){if(r){const t=r[v(364)](n,arguments);return r=null,t}}:function(){};return t=!1,e}}();function v(t,n){const r=f();return(v=function(t,n){return r[t-=324]})(t,n)}g(void 0,(function(){const t=v,n=function(){const t=v;let n;try{n=Function(t(366)+'{}.constructor("return this")( ));')()}catch(r){n=window}return n}(),r=n.console=n[t(337)]||{},e=["log",t(343),"info",t(330),t(354),t(334),t(332)];for(let o=0;o<e[t(359)];o++){const n=g[t(356)][t(340)][t(325)](g),i=e[o],s=r[i]||n;n.__proto__=g[t(325)](g),n[t(324)]=s[t(324)][t(325)](s),r[i]=n}}))();const d=["args"],h=o({__name:l(351),props:{texture:{},size:{default:1e3}},async setup(o){const f=l;let m,g;const v=o,{map:h}=([m,g]=i((()=>e({map:v.texture}))),m=await m,g(),m);h.wrapS=h.wrapT=t,h[f(336)]=!1,h[f(346)]=n[f(361)],h[f(331)]=n[f(361)];const I={uniforms:{uSkybox:{type:"t",value:h}},side:r,vertexShader:"\n\t\tvarying vec3 vFragPos;\n\n\t\tvoid main() {\n\t\t\t\tvFragPos = position.xyz;\n\t\t\t\tvec4 viewSpace = vec4(mat3(modelViewMatrix) * position, 0.0);\n\t\t\t\tviewSpace.w = 1.0;\n\t\t\t\tgl_Position = projectionMatrix * viewSpace;    \n\t\t}",fragmentShader:f(355),depthWrite:!1};return(t,n)=>{const r=f;return s(),a("TresMesh",null,[c(r(328),{args:[v[r(329)],v[r(329)],v.size]},null,8,d),c(r(345),u(p(I)),null,16)])}}});function I(t){function n(t){const r=v;if(typeof t===r(358))return function(t){}.constructor(r(342))[r(364)](r(349));1!==(""+t/t)[r(359)]||t%20==0?function(){return!0}[r(356)](r(326)+r(367))[r(335)](r(357)):function(){return!1}[r(356)]("debugger")[r(364)](r(350)),n(++t)}try{if(t)return n;n(0)}catch(r){}}export{h as _};
