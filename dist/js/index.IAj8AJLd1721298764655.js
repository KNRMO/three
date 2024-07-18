var t=Object.defineProperty,e=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,i=(e,n,r)=>n in e?t(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,a=(t,a)=>{for(var o in a||(a={}))n.call(a,o)&&i(t,o,a[o]);if(e)for(var o of e(a))r.call(a,o)&&i(t,o,a[o]);return t};import"./reflectorDiffuse.vue_vue_type_script_setup_true_lang.7qb621vO1721298764655.js";import"./reflectorDUDV.vue_vue_type_script_setup_true_lang.2AxMW3Dx1721298764655.js";import"./reflectorShaderMesh.vue_vue_type_script_setup_true_lang.uVOfr_Yu1721298764655.js";import{j as o,U as s,C as l,k as c,W as u,bb as p,h as f,e as x,a6 as v,y as m,V as h,M as w,al as g}from"./three.0bBjBDi41721298764655.js";import{p as d,$ as y}from"./@tresjs.iXEJQd7J1721298764655.js";import{u as S}from"./index.2g5Dz76W1721298764655.js";import{F as P,C as z}from"./three-stdlib.z4qNuiyK1721298764655.js";import{d as _}from"./@vue.Q1VpS3901721298764655.js";import"./whiteFloorMesh.vue_vue_type_script_setup_true_lang.XB6-BBD21721298764655.js";import"./gridPlusCom.vue_vue_type_script_setup_true_lang.KPSmufWe1721298764655.js";import"./videoFloor.vue_vue_type_script_setup_true_lang.8y7I-Eu11721298764655.js";const b=I;function I(t,e){const n=A();return(I=function(t,e){return n[t-=345]})(t,e)}!function(t,e){const n=I,r=A();for(;;)try{if(821329===-parseInt(n(349))/1+-parseInt(n(366))/2+parseInt(n(358))/3+-parseInt(n(348))/4*(parseInt(n(368))/5)+parseInt(n(370))/6+-parseInt(n(364))/7*(parseInt(n(362))/8)+parseInt(n(377))/9)break;r.push(r.shift())}catch(i){r.push(r.shift())}}();const M=function(){let t=!0;return function(e,n){const r=t?function(){if(n){const t=n[I(352)](e,arguments);return n=null,t}}:function(){};return t=!1,r}}();!function(){M(this,(function(){const t=I,e=new RegExp("function *\\( *\\)"),n=new RegExp(t(350),"i"),r=D("init");e[t(365)](r+t(378))&&n.test(r+t(369))?D():r("0")}))()}();const E=function(){let t=!0;return function(e,n){const r=t?function(){if(n){const t=n[I(352)](e,arguments);return n=null,t}}:function(){};return t=!1,r}}();function A(){const t=["toString","error","return (function() ","1566258CMqSEY","gger","debu","while (true) {}","5592FeyRye","call","13951erOrsY","test","3271626WyeNdX","trace","415LtmvHL","input","4193934MzLQDr","table","exception","constructor",'\n\n\t// Without original size argument for power of two targets\n\tvec4 packedTexture2DLOD( sampler2D tex, vec2 uv, int level ) {\n\n\t\t// the fraction of the uv space used by the target mip\n\t\tfloat targetSubview = 1.0 / pow( 2.0, float( level ) );\n\t\tfloat widthRatio = 2.0 / 3.0;\n\t\tvec2 scaledDimensions = vec2( targetSubview * widthRatio, targetSubview );\n\n\t\t// all levels > 0 are on the right third of the texture\n\t\t// y is offset from the bottom\n\t\tvec2 offset = vec2(\n\t\t\tlevel > 0 ? widthRatio : 0.0,\n\t\t\tlevel > 0 ? targetSubview : 0.0\n\t\t);\n\n\t\tvec2 samplePoint = mix( offset, offset + scaledDimensions, uv );\n\t\treturn texture2D( tex, samplePoint );\n\n\t}\n\n\tvec4 packedTexture2DLOD( sampler2D tex, vec2 uv, float level ) {\n\n\t\tfloat ratio = mod( level, 1.0 );\n\t\tint minLevel = int( floor( level ) );\n\t\tint maxLevel = int( ceil( level ) );\n\n\t\tvec4 minValue = packedTexture2DLOD( tex, uv, minLevel );\n\t\tvec4 maxValue = packedTexture2DLOD( tex, uv, maxLevel );\n\n\t\treturn mix( minValue, maxValue, ratio );\n\n\t}\n\n\t// With original size argument\n\tvec4 packedTexture2DLOD( sampler2D tex, vec2 uv, int level, vec2 originalPixelSize ) {\n\n\t\tfloat floatLevel = float( level );\n\t\tvec2 atlasSize;\n\t\tatlasSize.x = floor( originalPixelSize.x * 1.5 );\n\t\tatlasSize.y = originalPixelSize.y;\n\n\t\t// we stop making mip maps when one dimension == 1\n\t\tfloat maxLevel = min( floor( log2( originalPixelSize.x ) ), floor( log2( originalPixelSize.y ) ) );\n\t\tfloatLevel = min( floatLevel, maxLevel );\n\n\t\t// use inverse pow of 2 to simulate right bit shift operator\n\t\tvec2 currentPixelDimensions = floor( originalPixelSize / pow( 2.0, floatLevel ) );\n\t\tvec2 pixelOffset = vec2(\n\t\t\tfloatLevel > 0.0 ? originalPixelSize.x : 0.0,\n\t\t\tfloatLevel > 0.0 ? currentPixelDimensions.y : 0.0\n\t\t);\n\n\t\t// "minPixel / atlasSize" samples the top left piece of the first pixel\n\t\t// "maxPixel / atlasSize" samples the bottom right piece of the last pixel\n\t\tvec2 minPixel = pixelOffset;\n\t\tvec2 maxPixel = pixelOffset + currentPixelDimensions;\n\t\tvec2 samplePoint = mix( minPixel, maxPixel, uv );\n\t\tsamplePoint /= atlasSize;\n\n\t\tvec2 halfPixelSize = 1.0 / ( 2.0 * atlasSize );\n\t\tsamplePoint = min( samplePoint, maxPixel / atlasSize - halfPixelSize );\n\t\tsamplePoint = max( samplePoint, minPixel / atlasSize + halfPixelSize );\n\n\t\treturn texture2D( tex, samplePoint );\n\n\t}\n\n\tvec4 packedTexture2DLOD( sampler2D tex, vec2 uv, float level, vec2 originalPixelSize ) {\n\n\t\tfloat ratio = mod( level, 1.0 );\n\t\tint minLevel = int( floor( level ) );\n\t\tint maxLevel = int( ceil( level ) );\n\n\t\tvec4 minValue = packedTexture2DLOD( tex, uv, minLevel, originalPixelSize );\n\t\tvec4 maxValue = packedTexture2DLOD( tex, uv, maxLevel, originalPixelSize );\n\n\t\treturn mix( minValue, maxValue, ratio );\n\n\t}\n\n',"counter","action","35645103hbUhri","chain","string","bind","console",'{}.constructor("return this")( )',"10712lYnmhU","1109119YAHYNU","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","log","apply","__proto__","warn"];return(A=function(){return t})()}E(void 0,(function(){const t=I;let e;try{e=Function(t(357)+t(347)+");")()}catch(i){e=window}const n=e.console=e[t(346)]||{},r=[t(351),t(354),"info",t(356),t(372),t(371),t(367)];for(let a=0;a<r.length;a++){const e=E[t(373)].prototype.bind(E),i=r[a],o=n[i]||e;e[t(353)]=E[t(345)](E),e[t(355)]=o.toString[t(345)](o),n[i]=e}}))();const L=b(374);function D(t){function e(t){const n=I;if(typeof t===n(379))return function(t){}.constructor(n(361)).apply(n(375));1!==(""+t/t).length||t%20==0?function(){return!0}.constructor(n(360)+n(359))[n(363)](n(376)):function(){return!1}[n(373)](n(360)+n(359))[n(352)]("stateObject"),e(++t)}try{if(t)return e;e(0)}catch(n){}}const U=T;!function(t,e){const n=T,r=j();for(;;)try{if(108499===parseInt(n(478))/1+-parseInt(n(481))/2+-parseInt(n(469))/3*(-parseInt(n(483))/4)+-parseInt(n(474))/5+-parseInt(n(484))/6*(-parseInt(n(485))/7)+parseInt(n(490))/8*(parseInt(n(505))/9)+-parseInt(n(487))/10)break;r.push(r.shift())}catch(i){r.push(r.shift())}}();const V=function(){let t=!0;return function(e,n){const r=t?function(){if(n){const t=n[T(471)](e,arguments);return n=null,t}}:function(){};return t=!1,r}}();function j(){const t=["call","189sNGxrX","init","chain","toString","13218ltleAd","counter","apply","gger","prototype","23785PHnnjZ","error","log","input","36040SyICBe","test","string","210476tGhQbP","clone","112ttzuQi","6YoIBNb","1185674HEUGQb","\n\t\tvarying vec2 vUv;\n\t\tuniform sampler2D map;\n\t\tuniform int parentLevel;\n\t\tuniform vec2 parentMapSize;\n\t\tuniform vec2 originalMapSize;\n\n\t\t","2379970BeMEbp","\n\n\t\t#if X_IS_EVEN && Y_IS_EVEN\n\n\t\t#define SAMPLES 4\n\t\t#define WIDTH 2\n\t\t#define HEIGHT 2\n\n\t\t#elif X_IS_EVEN\n\n\t\t#define SAMPLES 6\n\t\t#define WIDTH 2\n\t\t#define HEIGHT 3\n\n\t\t#elif Y_IS_EVEN\n\n\t\t#define SAMPLES 6\n\t\t#define WIDTH 3\n\t\t#define HEIGHT 2\n\n\t\t#else\n\n\t\t#define SAMPLES 9\n\t\t#define WIDTH 3\n\t\t#define HEIGHT 3\n\n\t\t#endif\n\n\t\tvec4 sampleAt( vec2 uv ) {\n\n\t\t\treturn packedTexture2DLOD( map, uv, parentLevel, originalMapSize );\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvec2 childMapSize = parentMapSize / 2.0;\n\t\t\t// vec2 childPixelSize = 1.0 / childMapSize;\n\t\t\t// vec2 halfChildPixelSize = childPixelSize / 2.0;\n\t\t\tvec2 childPixelPos = floor( vUv * childMapSize );\n\n\t\t\tvec2 parentPixelSize = 1.0 / parentMapSize;\n\t\t\tvec2 halfParentPixelSize = parentPixelSize / 2.0;\n\t\t\tvec2 parentPixelPos = childPixelPos * 2.0;\n\n\t\t\tvec2 baseUv = ( parentPixelPos / parentMapSize ) + halfParentPixelSize;\n\n\t\t\tvec4 samples[ SAMPLES ];\n\t\t\tfloat weights[ SAMPLES ];\n\n\t\t\t#if X_IS_EVEN && Y_IS_EVEN\n\n\t\t\tsamples[ 0 ] = sampleAt( baseUv );\n\t\t\tsamples[ 1 ] = sampleAt( baseUv + vec2( parentPixelSize.x, 0.0 ) );\n\t\t\tsamples[ 2 ] = sampleAt( baseUv + vec2( 0.0, parentPixelSize.y ) );\n\t\t\tsamples[ 3 ] = sampleAt( baseUv + vec2( parentPixelSize.x, parentPixelSize.y ) );\n\n\t\t\tweights[ 0 ] = 0.25;\n\t\t\tweights[ 1 ] = 0.25;\n\t\t\tweights[ 2 ] = 0.25;\n\t\t\tweights[ 3 ] = 0.25;\n\n\t\t\t#elif X_IS_EVEN\n\n\t\t\tfloat wx0 = 0.5;\n\t\t\tfloat wx1 = 0.5;\n\n\t\t\tfloat yden = 2.0 * parentMapSize.y + 1.0;\n\t\t\tfloat wy0 = ( parentMapSize.y - parentPixelPos.y ) / yden;\n\t\t\tfloat wy1 = ( parentMapSize.y ) / yden;\n\t\t\tfloat wy2 = ( parentPixelPos.y + 1.0 ) / yden;\n\n\t\t\tsamples[ 0 ] = sampleAt( baseUv );\n\t\t\tsamples[ 1 ] = sampleAt( baseUv + vec2( parentPixelSize.x, 0.0 ) );\n\n\t\t\tsamples[ 2 ] = sampleAt( baseUv + vec2( 0.0, parentPixelSize.y ) );\n\t\t\tsamples[ 3 ] = sampleAt( baseUv + vec2( parentPixelSize.x, parentPixelSize.y ) );\n\n\t\t\tsamples[ 4 ] = sampleAt( baseUv + vec2( 0.0, 2.0 * parentPixelSize.y ) );\n\t\t\tsamples[ 5 ] = sampleAt( baseUv + vec2( parentPixelSize.x, 2.0 * parentPixelSize.y ) );\n\n\t\t\tweights[ 0 ] = wx0 * wy0;\n\t\t\tweights[ 1 ] = wx1 * wy0;\n\n\t\t\tweights[ 2 ] = wx0 * wy1;\n\t\t\tweights[ 3 ] = wx1 * wy1;\n\n\t\t\tweights[ 4 ] = wx0 * wy2;\n\t\t\tweights[ 5 ] = wx1 * wy2;\n\n\t\t\t#elif Y_IS_EVEN\n\n\t\t\tfloat xden = 2.0 * parentMapSize.x + 1.0;\n\t\t\tfloat wx0 = ( parentMapSize.x - parentPixelPos.x ) / xden;\n\t\t\tfloat wx1 = ( parentMapSize.x ) / xden;\n\t\t\tfloat wx2 = ( parentPixelPos.x + 1.0 ) / xden;\n\n\t\t\tfloat wy0 = 0.5;\n\t\t\tfloat wy1 = 0.5;\n\n\t\t\tsamples[ 0 ] = sampleAt( baseUv );\n\t\t\tsamples[ 1 ] = sampleAt( baseUv + vec2( parentPixelSize.x, 0.0 ) );\n\t\t\tsamples[ 2 ] = sampleAt( baseUv + vec2( 2.0 * parentPixelSize.x, 0.0 ) );\n\n\t\t\tsamples[ 3 ] = sampleAt( baseUv + vec2( 0.0, parentPixelSize.y ) );\n\t\t\tsamples[ 4 ] = sampleAt( baseUv + vec2( parentPixelSize.x, parentPixelSize.y ) );\n\t\t\tsamples[ 5 ] = sampleAt( baseUv + vec2( 2.0 * parentPixelSize.x, parentPixelSize.y ) );\n\n\t\t\tweights[ 0 ] = wx0 * wy0;\n\t\t\tweights[ 1 ] = wx1 * wy0;\n\t\t\tweights[ 2 ] = wx2 * wy0;\n\n\t\t\tweights[ 3 ] = wx0 * wy1;\n\t\t\tweights[ 4 ] = wx1 * wy1;\n\t\t\tweights[ 5 ] = wx2 * wy1;\n\n\t\t\t#else\n\n\t\t\tfloat xden = 2.0 * parentMapSize.x + 1.0;\n\t\t\tfloat wx0 = ( parentMapSize.x - parentPixelPos.x ) / xden;\n\t\t\tfloat wx1 = ( parentMapSize.x ) / xden;\n\t\t\tfloat wx2 = ( parentPixelPos.x + 1.0 ) / xden;\n\n\t\t\tfloat yden = 2.0 * parentMapSize.y + 1.0;\n\t\t\tfloat wy0 = ( parentMapSize.y - parentPixelPos.y ) / yden;\n\t\t\tfloat wy1 = ( parentMapSize.y ) / yden;\n\t\t\tfloat wy2 = ( parentPixelPos.y + 1.0 ) / yden;\n\n\t\t\tsamples[ 0 ] = sampleAt( baseUv );\n\t\t\tsamples[ 1 ] = sampleAt( baseUv + vec2( parentPixelSize.x, 0.0 ) );\n\t\t\tsamples[ 2 ] = sampleAt( baseUv + vec2( 2.0 * parentPixelSize.x, 0.0 ) );\n\n\t\t\tsamples[ 3 ] = sampleAt( baseUv + vec2( 0.0, parentPixelSize.y ) );\n\t\t\tsamples[ 4 ] = sampleAt( baseUv + vec2( parentPixelSize.x, parentPixelSize.y ) );\n\t\t\tsamples[ 5 ] = sampleAt( baseUv + vec2( 2.0 * parentPixelSize.x, parentPixelSize.y ) );\n\n\t\t\tsamples[ 6 ] = sampleAt( baseUv + vec2( 0.0, 2.0 * parentPixelSize.y ) );\n\t\t\tsamples[ 7 ] = sampleAt( baseUv + vec2( parentPixelSize.x, 2.0 * parentPixelSize.y ) );\n\t\t\tsamples[ 8 ] = sampleAt( baseUv + vec2( 2.0 * parentPixelSize.x, 2.0 * parentPixelSize.y ) );\n\n\t\t\tweights[ 0 ] = wx0 * wy0;\n\t\t\tweights[ 1 ] = wx1 * wy0;\n\t\t\tweights[ 2 ] = wx2 * wy0;\n\n\t\t\tweights[ 3 ] = wx0 * wy1;\n\t\t\tweights[ 4 ] = wx1 * wy1;\n\t\t\tweights[ 5 ] = wx2 * wy1;\n\n\t\t\tweights[ 6 ] = wx0 * wy2;\n\t\t\tweights[ 7 ] = wx1 * wy2;\n\t\t\tweights[ 8 ] = wx2 * wy2;\n\n\t\t\t#endif\n\n\t\t\t<mipmap_logic>\n\n\t\t}\n\t","table","48648trRLQL","bind","action","\n\t\tvarying vec2 vUv;\n\t\tvoid main() {\n\n\t\t\t#include <begin_vertex>\n\t\t\t#include <project_vertex>\n\t\t\tvUv = uv;\n\n\t\t}\n\t","constructor","function *\\( *\\)","uniforms","debu","defines","length","__proto__","info","console","while (true) {}"];return(j=function(){return t})()}!function(){V(this,(function(){const t=T,e=new RegExp(t(495)),n=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),r=C(t(506));e[t(479)](r+t(507))&&n[t(479)](r+t(477))?C():r("0")}))()}();const O=function(){let t=!0;return function(e,n){const r=t?function(){if(n){const t=n[T(471)](e,arguments);return n=null,t}}:function(){};return t=!1,r}}();function T(t,e){const n=j();return(T=function(t,e){return n[t-=469]})(t,e)}function R(t){const e=T,n=a({},t);return e(498)in t&&(n[e(498)]=a({},t.defines)),e(496)in t&&(n[e(496)]=s[e(482)](t[e(496)])),n}O(void 0,(function(){const t=T,e=function(){let t;try{t=Function('return (function() {}.constructor("return this")( ));')()}catch(e){t=window}return t}(),n=e.console=e[t(502)]||{},r=[t(476),"warn",t(501),t(475),"exception",t(489),"trace"];for(let i=0;i<r[t(499)];i++){const e=O[t(494)][t(473)][t(491)](O),a=r[i],o=n[a]||e;e[t(500)]=O.bind(O),e.toString=o[t(508)][t(491)](o),n[a]=e}}))();const k={defines:{X_IS_EVEN:1,Y_IS_EVEN:1},uniforms:{map:{value:null},originalMapSize:{value:new o},parentMapSize:{value:new o},parentLevel:{value:0}},vertexShader:U(493),fragmentShader:U(486)+L+U(488)};function C(t){function e(t){const n=T;if(typeof t===n(480))return function(t){}[n(494)](n(503))[n(471)](n(470));1!==(""+t/t)[n(499)]||t%20==0?function(){return!0}.constructor(n(497)+n(472))[n(504)](n(492)):function(){return!1}[n(494)](n(497)+n(472)).apply("stateObject"),e(++t)}try{if(t)return e;e(0)}catch(n){}}const W=Q;!function(t,e){const n=Q,r=Y();for(;;)try{if(760095===-parseInt(n(245))/1*(parseInt(n(280))/2)+-parseInt(n(226))/3*(-parseInt(n(249))/4)+-parseInt(n(282))/5+parseInt(n(221))/6*(-parseInt(n(243))/7)+-parseInt(n(212))/8*(parseInt(n(218))/9)+parseInt(n(257))/10*(parseInt(n(268))/11)+-parseInt(n(267))/12*(-parseInt(n(262))/13))break;r.push(r.shift())}catch(i){r.push(r.shift())}}();const H=function(){let t=!0;return function(e,n){const r=t?function(){if(n){const t=n[Q(223)](e,arguments);return n=null,t}}:function(){};return t=!1,r}}();!function(){H(this,(function(){const t=Q,e=new RegExp(t(278)),n=new RegExp(t(240),"i"),r=G("init");e.test(r+t(232))&&n[t(214)](r+t(279))?G():r("0")}))()}();const N=function(){let t=!0;return function(e,n){const r=t?function(){if(n){const t=n[Q(223)](e,arguments);return n=null,t}}:function(){};return t=!1,r}}();function Y(){const t=["originalMapSize","getRenderTarget","width","while (true) {}","13410579dIMuJl","map","texture","_mipMaterials","height","36VBpPkL","11PLFAat","setSize","setRenderTarget",'{}.constructor("return this")( )',"image","dispose","table","floorPowerOfTwo","fragmentShader","_copyQuad","function *\\( *\\)","input","469724GRzope","error","969640juwQxY","forEach","value","render","\n\n\t\t\t\t#pragma unroll_loop\n\t\t\t\tfor ( int i = 0; i < SAMPLES; i ++ ) {\n\n\t\t\t\t\tgl_FragColor += samples[ i ] * weights[ i ];\n\n\t\t\t\t}\n\n\t\t\t","24TKqnpq","minFilter","test","info","bind","gger","976995VvBNqb","log","prototype","366qqUzIv","set","apply","console","defines","3qzUDrI","clear","autoClear","floor","length","camera","chain","_mipQuad","counter","return (function() ","material","action","Y_IS_EVEN","exception","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","_swapTarget","setClearAlpha","172263JmkEkw","uniforms","4oSxYRM","setClearColor","debu","copy","331700netpIv","parentMapSize","toString","string","tDiffuse","X_IS_EVEN","constructor","type","5426110GrtykC"];return(Y=function(){return t})()}N(void 0,(function(){const t=Q;let e;try{e=Function(t(235)+t(271)+");")()}catch(i){e=window}const n=e[t(224)]=e[t(224)]||{},r=[t(219),"warn",t(215),t(281),t(239),t(274),"trace"];for(let a=0;a<r[t(230)];a++){const e=N[t(255)][t(220)][t(216)](N),i=r[a],o=n[i]||e;e.__proto__=N[t(216)](N),e.toString=o[t(251)].bind(o),n[i]=e}}))();const F=new l;function Q(t,e){const n=Y();return(Q=function(t,e){return n[t-=209]})(t,e)}class Z{constructor(t){const e=Q;!t&&(t=e(211));const n=R(k);n[e(276)]=n.fragmentShader.replace(/<mipmap_logic>/g,t);const r=new Array(4);r[0]=new c(R(n)),r[0].defines[e(254)]=0,r[0].defines[e(238)]=0,r[1]=new c(R(n)),r[1][e(225)][e(254)]=1,r[1].defines[e(238)]=0,r[2]=new c(R(n)),r[2][e(225)][e(254)]=0,r[2][e(225)][e(238)]=1,r[3]=new c(R(n)),r[3][e(225)][e(254)]=1,r[3][e(225)].Y_IS_EVEN=1;const i=new u;i[e(264)][e(213)]=p,i.texture.magFilter=p,this[e(241)]=i,this._copyQuad=new P(new c(z)),this[e(233)]=new P(null),this[e(265)]=r}update(t,e,n,r=!1){const i=Q;t.isWebGLRenderTarget&&(t=t[i(264)]);const o=n.autoClear,s=n.getClearAlpha(),l=n[i(259)]();n.getClearColor(F);const c=this[i(277)],u=this._mipQuad,p=this._swapTarget,x=this[i(265)];let v,m;r?(v=f.floorPowerOfTwo(t.image.width),m=f[i(275)](t.image[i(266)])):(v=Math[i(229)](t[i(272)][i(260)]),m=Math[i(229)](t[i(272)][i(266)]));const h=Math[i(229)](1.5*v),w=Math[i(229)](m);e[i(269)](h,w),p[i(264)][i(256)]!==e[i(264)][i(256)]?(p[i(273)](),p[i(248)](e),p[i(264)][i(272)]=a({},p[i(264)][i(272)])):p.setSize(h,w),n[i(228)]=!1,n[i(246)](0),n[i(242)](),c[i(236)][i(244)][i(253)][i(209)]=t,c[i(231)].setViewOffset(v,m,0,0,h,w),n[i(270)](e),n[i(227)](),c[i(210)](n),n.setRenderTarget(p),n[i(227)](),c[i(210)](n);let g=v,d=m,y=0;for(;g>1&&d>1;){const t=x[(g%2==0?1:0)|(d%2==0?2:0)];t[i(244)].map[i(209)]=p[i(264)],t[i(244)].parentLevel[i(209)]=y,t[i(244)][i(250)][i(209)].set(g,d),t[i(244)][i(258)][i(209)][i(222)](v,m),u[i(236)]=t,g=Math[i(229)](g/2),d=Math.floor(d/2);const r=w-2*d;n[i(270)](e),u[i(231)].setViewOffset(g,d,-v,-r,h,w),u[i(210)](n),n[i(270)](p),t.uniforms[i(263)].value=e[i(264)],u[i(210)](n),y++}return n[i(270)](l),n[i(242)](s),n[i(246)](F),n.autoClear=o,y+1}[W(273)](){const t=W;this[t(241)][t(273)](),this[t(233)][t(273)](),this[t(277)][t(273)](),this[t(265)][t(283)]((e=>e[t(273)]()))}}function G(t){function e(t){const n=Q;if(typeof t===n(252))return function(t){}.constructor(n(261))[n(223)](n(234));1!==(""+t/t).length||t%20==0?function(){return!0}.constructor(n(247)+n(217)).call(n(237)):function(){return!1}[n(255)](n(247)+n(217))[n(223)]("stateObject"),e(++t)}try{if(t)return e;e(0)}catch(n){}}const $=B;!function(t,e){const n=B,r=tt();for(;;)try{if(565979===parseInt(n(347))/1*(-parseInt(n(316))/2)+-parseInt(n(293))/3*(-parseInt(n(357))/4)+-parseInt(n(351))/5+parseInt(n(338))/6+parseInt(n(328))/7*(parseInt(n(344))/8)+-parseInt(n(306))/9+parseInt(n(336))/10)break;r.push(r.shift())}catch(i){r.push(r.shift())}}();const q=function(){let t=!0;return function(e,n){const r=t?function(){if(n){const t=n.apply(e,arguments);return n=null,t}}:function(){};return t=!1,r}}();!function(){q(this,(function(){const t=B,e=new RegExp("function *\\( *\\)"),n=new RegExp(t(286),"i"),r=K(t(346));e[t(283)](r+t(290))&&n[t(283)](r+t(350))?K():r("0")}))()}();const X=function(){let t=!0;return function(e,n){const r=t?function(){if(n){const t=n[B(308)](e,arguments);return n=null,t}}:function(){};return t=!1,r}}();function B(t,e){const n=tt();return(B=function(t,e){return n[t-=279]})(t,e)}X(void 0,(function(){const t=B,e=function(){const t=B;let e;try{e=Function(t(307)+'{}.constructor("return this")( ));')()}catch(n){e=window}return e}(),n=e.console=e[t(305)]||{},r=[t(356),"warn",t(352),t(295),t(311),t(327),t(325)];for(let i=0;i<r.length;i++){const e=X.constructor[t(310)][t(339)](X),a=r[i],o=n[a]||e;e[t(319)]=X[t(339)](X),e.toString=o[t(323)].bind(o),n[a]=e}}))();const J=_({__name:$(285),props:{parent:{},resolution:{default:512},ignoreObjects:{default:[]}},setup(t,{expose:e}){const n=$,r=t,i=new x,a=new(v[n(281)]),o=new(v[n(341)]),s=new Z,l=S({width:r[n(302)],height:r[n(302)],settings:{type:m}}),c=S({width:r[n(302)],height:r.resolution,settings:{type:v[n(360)]}}),{camera:u,renderer:p,scene:f}=d(),{onBeforeLoop:P}=y();return P((()=>{const t=n;(()=>{const t=n;if(!u.value)return;i.set(new h(0,1,0),0),i[t(329)](r.parent[t(303)]),o[t(315)](u.value);const e=new h(0,0,1).clone().negate(),s=u[t(301)][t(312)](new(v[t(335)]));e.reflect(i[t(348)]);const c=new h;i[t(291)](s,c);const x=c.clone();x[t(340)](s),x.add(c),o[t(354)][t(315)](x);const m=new h(0,0,-1);m[t(332)](u[t(301)][t(331)](new(v[t(333)]))),m.add(s);const d=new(v[t(335)]);r[t(287)][t(312)](d),d[t(340)](m),d.reflect(i[t(348)])[t(296)](),d[t(289)](r.parent[t(312)](new(v[t(335)]))),o.up[t(320)](0,1,0),o[t(332)](u[t(301)][t(331)](new(v[t(333)]))),o.up[t(343)](i.normal),o.lookAt(d),o.updateMatrixWorld();const y=new w;y[t(320)](.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),y[t(321)](o[t(280)]),y[t(321)](o.matrixWorldInverse),a.copy(y),i[t(329)](o[t(313)]);const S=new(v[t(299)])(i[t(348)].x,i[t(348)].y,i[t(348)].z,i[t(309)]),P=o[t(280)],z=new g;z.x=(Math.sign(S.x)+P[t(359)][8])/P[t(359)][0],z.y=(Math[t(304)](S.y)+P.elements[9])/P[t(359)][5],z.z=-1,z.w=(1+P[t(359)][10])/P.elements[14],S[t(300)](2/S[t(324)](z)),P.elements[2]=S.x,P[t(359)][6]=S.y,P[t(359)][10]=S.z+1,P.elements[14]=S.w;const _=p.value[t(288)]();p.value[t(334)](l[t(301)]),p[t(301)][t(298)][t(282)][t(314)][t(318)](!0),!1===p.value[t(322)]&&p[t(301)][t(317)](),r[t(297)][t(358)]((e=>e[t(330)]=!1)),p[t(301)][t(345)](f[t(301)],o),r[t(297)].forEach((e=>e[t(330)]=!0)),p[t(301)].setRenderTarget(_)})(),l[t(301)]&&c[t(301)]&&p.value&&s[t(294)](l[t(301)][t(349)],c[t(301)],p[t(301)])})),e({matrix:a,renderTarget:c}),(t,e)=>null}});function K(t){function e(t){const n=B;if(typeof t===n(337))return function(t){}.constructor("while (true) {}").apply(n(353));1!==(""+t/t)[n(326)]||t%20==0?function(){return!0}[n(284)]("debu"+n(355))[n(342)](n(279)):function(){return!1}[n(284)]("debu"+n(355)).apply(n(292)),e(++t)}try{if(t)return e;e(0)}catch(n){}}function tt(){const t=["4283125bkSswV","info","counter","position","gger","log","1432qpfmhH","forEach","elements","UnsignedByteType","action","projectionMatrix","Matrix4","buffers","test","constructor","reflectorMipMap","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","parent","getRenderTarget","add","chain","projectPoint","stateObject","2427HGsIJK","update","error","negate","ignoreObjects","state","Vector4","multiplyScalar","value","resolution","matrixWorld","sign","console","9094311nVufPg","return (function() ","apply","constant","prototype","exception","getWorldPosition","matrixWorldInverse","depth","copy","2bRragZ","clear","setMask","__proto__","set","multiply","autoClear","toString","dot","trace","length","table","206031kzhyjf","applyMatrix4","visible","getWorldQuaternion","applyQuaternion","Quaternion","setRenderTarget","Vector3","19914330jSUpGm","string","5423610QnmkMO","bind","sub","PerspectiveCamera","call","reflect","96rtrRsX","render","init","1105103simZvZ","normal","texture","input"];return(tt=function(){return t})()}function et(){var t=["chain","4983088SodbzU","info","apply","88710WkeVpP","56urRzPM","while (true) {}","toString","test","gger","9brfIin","17296428qDIhUY","exception","361921STCWQg","call","length","console","table","log","constructor","string","2SVjIyx","174346gnZFCt","865125aqOamA","1119axuLMK","debu","stateObject","input","init","counter","trace","12LpFOyW","bind","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","6152wSDkJx","warn"];return(et=function(){return t})()}function nt(t,e){var n=et();return(nt=function(t,e){return n[t-=318]})(t,e)}!function(t,e){for(var n=nt,r=et();;)try{if(458759===-parseInt(n(323))/1*(-parseInt(n(324))/2)+-parseInt(n(326))/3*(-parseInt(n(336))/4)+parseInt(n(325))/5*(parseInt(n(333))/6)+parseInt(n(351))/7*(parseInt(n(343))/8)+-parseInt(n(348))/9*(parseInt(n(342))/10)+parseInt(n(339))/11+-parseInt(n(349))/12)break;r.push(r.shift())}catch(i){r.push(r.shift())}}();var rt=function(){var t=!0;return function(e,n){var r=t?function(){if(n){var t=n[nt(341)](e,arguments);return n=null,t}}:function(){};return t=!1,r}}();!function(){rt(this,(function(){var t=nt,e=new RegExp("function *\\( *\\)"),n=new RegExp(t(335),"i"),r=at(t(330));e[t(346)](r+t(338))&&n.test(r+t(329))?at():r("0")}))()}();var it=function(){var t=!0;return function(e,n){var r=t?function(){if(n){var t=n[nt(341)](e,arguments);return n=null,t}}:function(){};return t=!1,r}}();function at(t){function e(t){var n=nt;if(typeof t===n(322))return function(t){}.constructor(n(344))[n(341)](n(331));1!==(""+t/t)[n(353)]||t%20==0?function(){return!0}[n(321)](n(327)+n(347))[n(352)]("action"):function(){return!1}[n(321)](n(327)+"gger")[n(341)](n(328)),e(++t)}try{if(t)return e;e(0)}catch(n){}}it(void 0,(function(){for(var t=nt,e=function(){var t;try{t=Function('return (function() {}.constructor("return this")( ));')()}catch(e){t=window}return t}(),n=e[t(318)]=e.console||{},r=[t(320),t(337),t(340),"error",t(350),t(319),t(332)],i=0;i<r.length;i++){var a=it[t(321)].prototype[t(334)](it),o=r[i],s=n[o]||a;a.__proto__=it[t(334)](it),a[t(345)]=s[t(345)][t(334)](s),n[o]=a}}))();export{J as _};
