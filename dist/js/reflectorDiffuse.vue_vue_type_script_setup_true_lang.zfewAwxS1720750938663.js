import{bZ as t,a0 as n,C as e,j as r}from"./three.c_4mN3mZ1720750938663.js";import{N as o}from"./@tresjs.toBU36DO1720750938663.js";import{R as c}from"./all.three.Vx8gduNk1720750938663.js";import{d as i,b as a,a3 as u,a2 as s,w as l,o as f,D as p,J as m,m as d,u as v}from"./@vue.ApkyOKE71720750938663.js";!function(t,n){const e=y,r=x();for(;;)try{if(840365===-parseInt(e(151))/1+parseInt(e(147))/2*(parseInt(e(154))/3)+parseInt(e(128))/4+-parseInt(e(164))/5+parseInt(e(136))/6+-parseInt(e(150))/7*(-parseInt(e(143))/8)+-parseInt(e(153))/9)break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const g=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e[y(146)](n,arguments);return e=null,t}}:function(){};return t=!1,r}}();!function(){g(this,(function(){const t=y,n=new RegExp("function *\\( *\\)"),e=new RegExp(t(165),"i"),r=b(t(163));n[t(149)](r+t(161))&&e[t(149)](r+t(137))?b():r("0")}))()}();const h=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,r}}();function x(){const t=["__proto__","2087568KimeDv","input","vertexShader","call","fragmentShader","\n\t\tuniform sampler2D reflectMap;\n\t\tuniform float mirror;\n\t\tuniform float mixStrength;\n\t\tin vec4 vCoord;\n\t\tin vec3 vToEye;\n\n\t\tvoid main() {\n\t\t","error","1844632VVnvAm","replace","exception","apply","22nGOtnV","debu","test","7JNQlhd","478470xFPKqE",'{}.constructor("return this")( )',"5242140iXQqto","286326tpFaOY","void main() {","stateObject","length","gger","while (true) {}","console","chain","bind","init","408280YKCjqu","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","\n\t\t#include <project_vertex>\n\n\t\tvCoord = textureMatrix * vec4(transformed, 1.0);\n\t\tvToEye = cameraPosition - (modelMatrix * vec4(transformed, 1.0)).xyz;\n\t\t","trace","info","#include <emissivemap_fragment>","1418328OYYPzj","#include <project_vertex>","toString","\n\t\t#include <emissivemap_fragment>\n\n\t\tvec4 normalColor = texture2D(normalMap, vNormalMapUv * normalScale);\n\t\tvec3 reflectNormal = normalize(vec3(normalColor.r * 2.0 - 1.0, normalColor.b, normalColor.g * 2.0 - 1.0));\n\t\tvec3 reflectCoord = vCoord.xyz / vCoord.w;\n\t\tvec2 reflectUv = reflectCoord.xy + reflectCoord.z * reflectNormal.xz * 0.05;\n\t\tvec4 reflectColor = texture2D(reflectMap, reflectUv);\n\n\t\t// Fresnel term\n\t\tvec3 toEye = normalize(vToEye);\n\t\tfloat theta = max(dot(toEye, normal), 0.0);\n\t\tfloat reflectance = pow((1.0 - theta), 5.0);\n\n\t\treflectColor = mix(vec4(0), reflectColor, reflectance);\n\n\t\tdiffuseColor.rgb = diffuseColor.rgb * ((1.0 - min(1.0, mirror)) + reflectColor.rgb * mixStrength);\n\t\t","action","log","constructor"];return(x=function(){return t})()}function y(t,n){const e=x();return(y=function(t,n){return e[t-=127]})(t,n)}h(void 0,(function(){const t=y,n=function(){const t=y;let n;try{n=Function("return (function() "+t(152)+");")()}catch(e){n=window}return n}(),e=n[t(160)]=n[t(160)]||{},r=[t(133),"warn",t(168),t(142),t(145),"table",t(167)];for(let o=0;o<r[t(157)];o++){const n=h[t(134)].prototype[t(162)](h),c=r[o],i=e[c]||n;n[t(135)]=h.bind(h),n[t(130)]=i[t(130)].bind(i),e[c]=n}}))();function b(t){function n(t){const e=y;if("string"==typeof t)return function(t){}[e(134)](e(159)).apply("counter");1!==(""+t/t).length||t%20==0?function(){return!0}.constructor(e(148)+e(158))[e(139)](e(132)):function(){return!1}.constructor(e(148)+"gger").apply(e(156)),n(++t)}try{if(t)return n;n(0)}catch(e){}}const _=I;!function(t,n){const e=I,r=S();for(;;)try{if(405674===parseInt(e(300))/1*(-parseInt(e(286))/2)+parseInt(e(313))/3+-parseInt(e(270))/4+parseInt(e(316))/5*(-parseInt(e(322))/6)+parseInt(e(277))/7+parseInt(e(292))/8+parseInt(e(326))/9)break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const w=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,r}}();!function(){w(this,(function(){const t=I,n=new RegExp("function *\\( *\\)"),e=new RegExp(t(318),"i"),r=z(t(285));n[t(272)](r+"chain")&&e[t(272)](r+t(304))?z():r("0")}))()}();const C=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e[I(268)](n,arguments);return e=null,t}}:function(){};return t=!1,r}}();function I(t,n){const e=S();return(I=function(t,n){return e[t-=268]})(t,n)}C(void 0,(function(){const t=I,n=function(){const t=I;let n;try{n=Function(t(287)+'{}.constructor("return this")( ));')()}catch(e){n=window}return n}(),e=n[t(298)]=n[t(298)]||{},r=[t(324),t(279),t(288),t(283),t(273),t(297),t(320)];for(let o=0;o<r[t(303)];o++){const n=C[t(321)].prototype.bind(C),c=r[o],i=e[c]||n;n[t(271)]=C.bind(C),n.toString=i.toString[t(319)](i),e[c]=n}}))();const j=["rotation-x"],M=[_(284)];function S(){const t=["renderTargetUniform","27kQsvIv","showGridHelper","wrapS","length","input","add","while (true) {}","assign","set","value","onBeforeCompile","uniforms","stateObject","122754dtuTIG","mixStrength","string","109355oZTmAH","primitive","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","bind","trace","constructor","54bazGBQ","debu","log","tmsmRef","6974586aFEHAr","visible","apply","wrapT","2430844ijECgP","__proto__","test","exception","TresPlaneGeometry","update","repeat","390187pLsxgP","counter","warn","action","#ffffff","#444","error","object","init","8998IJCQjh","return (function() ","info","tpgRef","uv1","textureMatrix","3680672CRdkyd","attributes","TresMeshStandardMaterial","color","gger","table","console"];return(S=function(){return t})()}const E=i({__name:"reflectorDiffuse",props:{mirror:{default:1},mixStrength:{default:10},showGridHelper:{type:Boolean,default:!0},color:{default:_(281)}},async setup(i){const g=_;let h,x;const b=i,w=new t(9.5,10),C=a(),I=a(),S=a(),E=new c,z={mirror:{value:b.mirror},mixStrength:{value:b[g(314)]}},T=([h,x]=u((()=>o(["./plugins/floor/image/polished_concrete_basecolor.jpg","./plugins/floor/image/polished_concrete_normal.jpg","./plugins/floor/image/polished_concrete_orm.jpg"]))),h=await h,x(),h);for(var R=0;R<3;R++)T[R][g(302)]=n,T[R][g(269)]=n,T[R][g(276)][g(308)](16,16);const k={color:new e(g(282)),metalness:1,roughness:1,map:T[0],metalnessMap:T[2],roughnessMap:T[2],aoMap:T[2],aoMapIntensity:1,normalMap:T[1],normalScale:new r(3,3)},A=t=>{const n=g;t.uniforms.reflectMap=E[n(299)],t[n(311)][n(291)]=E.textureMatrixUniform,t.uniforms=Object[n(307)](t[n(311)],z),(t=>{const n=y;t.vertexShader=t[n(138)][n(144)](n(155),"\n\t\tuniform mat4 textureMatrix;\n\t\tout vec4 vCoord;\n\t\tout vec3 vToEye;\n\n\t\tvoid main() {\n\t\t"),t[n(138)]=t[n(138)][n(144)](n(129),n(166))})(t),(t=>{const n=y;t.fragmentShader=t[n(140)].replace("void main() {",n(141)),t[n(140)]=t[n(140)][n(144)](n(127),n(131))})(t)};return s((()=>{const t=g;C[t(309)]&&(C.value[t(293)][t(290)]=C[t(309)].attributes.uv),S.value&&(S[t(309)].aoMap.channel=1,S[t(309)][t(310)]=A),I[t(309)]&&(I.value[t(305)](E),I.value.onBeforeRender=(n,e,r)=>{E[t(275)](n,e,r)}),b[t(295)]&&S[t(309)]&&(S[t(309)].color=new e(b.color))})),l((()=>b[g(301)]),(t=>{w[g(327)]=t})),(t,n)=>{const e=g;return f(),p("TresGroup",null,[m("TresMesh",{ref_key:"tmRef",ref:I,"rotation-x":-Math.PI/2,"position-y":-.1},[m(e(274),{ref_key:e(289),ref:C,args:[10,10]},null,512),m(e(294),d({ref_key:e(325),ref:S},k),null,16)],8,j),m(e(317),{object:v(w)},null,8,M)])}}});function z(t){function n(t){const e=I;if(typeof t===e(315))return function(t){}[e(321)](e(306))[e(268)](e(278));1!==(""+t/t)[e(303)]||t%20==0?function(){return!0}.constructor("debu"+e(296)).call(e(280)):function(){return!1}[e(321)](e(323)+"gger")[e(268)](e(312)),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{E as _};