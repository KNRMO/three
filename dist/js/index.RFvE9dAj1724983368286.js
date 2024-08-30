var t=Object.defineProperty,e=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,r=(e,n,i)=>n in e?t(e,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[n]=i,a=(t,a)=>{for(var o in a||(a={}))n.call(a,o)&&r(t,o,a[o]);if(e)for(var o of e(a))i.call(a,o)&&r(t,o,a[o]);return t};import"./reflectorDiffuse.vue_vue_type_script_setup_true_lang.0pvBP-hp1724983368286.js";import"./reflectorDUDV.vue_vue_type_script_setup_true_lang.dR_Md0ZD1724983368286.js";import"./reflectorShaderMesh.vue_vue_type_script_setup_true_lang.S8gI9gok1724983368286.js";import{j as o,U as s,C as l,k as c,W as u,bb as p,h as f,a6 as x,y as v,V as m,Q as h,M as w}from"./three.p-9BQwc31724983368286.js";import{p as g,$ as d}from"./@tresjs.OrqGCbtj1724983368286.js";import{u as y}from"./index.LdVI1Df31724983368286.js";import{F as S,C as P}from"./three-stdlib._CB_uvPa1724983368286.js";import{d as z}from"./@vue.Q1VpS3901724983368286.js";import"./whiteFloorMesh.vue_vue_type_script_setup_true_lang.j17yu-hJ1724983368286.js";import"./gridPlusCom.vue_vue_type_script_setup_true_lang.7Pfa_P971724983368286.js";import"./videoFloor.vue_vue_type_script_setup_true_lang.aFG-ipIR1724983368286.js";const _=M;!function(t,e){const n=M,i=E();for(;;)try{if(468173===-parseInt(n(360))/1*(-parseInt(n(344))/2)+parseInt(n(351))/3*(parseInt(n(369))/4)+parseInt(n(347))/5*(-parseInt(n(368))/6)+-parseInt(n(362))/7+-parseInt(n(355))/8*(-parseInt(n(353))/9)+parseInt(n(342))/10*(parseInt(n(363))/11)+-parseInt(n(352))/12)break;i.push(i.shift())}catch(r){i.push(i.shift())}}();const I=function(){let t=!0;return function(e,n){const i=t?function(){if(n){const t=n[M(341)](e,arguments);return n=null,t}}:function(){};return t=!1,i}}();!function(){I(this,(function(){const t=M,e=new RegExp(t(365)),n=new RegExp(t(366),"i"),i=A(t(357));e.test(i+t(359))&&n.test(i+t(358))?A():i("0")}))()}();const b=function(){let t=!0;return function(e,n){const i=t?function(){if(n){const t=n[M(341)](e,arguments);return n=null,t}}:function(){};return t=!1,i}}();function E(){const t=["length","142985JdFsud","bind","log","trace","9xVifzj","10153068KYLmnY","9yqLyTi","__proto__","6905048liUTHP","warn","init","input","chain","880336TOppVB","gger","4009915wXQqMq","121OPnpEE","debu","function *\\( *\\)","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)",'{}.constructor("return this")( )',"120jHiWLz","141676pNgLqE","call","error","while (true) {}","console","constructor","prototype",'\n\n\t// Without original size argument for power of two targets\n\tvec4 packedTexture2DLOD( sampler2D tex, vec2 uv, int level ) {\n\n\t\t// the fraction of the uv space used by the target mip\n\t\tfloat targetSubview = 1.0 / pow( 2.0, float( level ) );\n\t\tfloat widthRatio = 2.0 / 3.0;\n\t\tvec2 scaledDimensions = vec2( targetSubview * widthRatio, targetSubview );\n\n\t\t// all levels > 0 are on the right third of the texture\n\t\t// y is offset from the bottom\n\t\tvec2 offset = vec2(\n\t\t\tlevel > 0 ? widthRatio : 0.0,\n\t\t\tlevel > 0 ? targetSubview : 0.0\n\t\t);\n\n\t\tvec2 samplePoint = mix( offset, offset + scaledDimensions, uv );\n\t\treturn texture2D( tex, samplePoint );\n\n\t}\n\n\tvec4 packedTexture2DLOD( sampler2D tex, vec2 uv, float level ) {\n\n\t\tfloat ratio = mod( level, 1.0 );\n\t\tint minLevel = int( floor( level ) );\n\t\tint maxLevel = int( ceil( level ) );\n\n\t\tvec4 minValue = packedTexture2DLOD( tex, uv, minLevel );\n\t\tvec4 maxValue = packedTexture2DLOD( tex, uv, maxLevel );\n\n\t\treturn mix( minValue, maxValue, ratio );\n\n\t}\n\n\t// With original size argument\n\tvec4 packedTexture2DLOD( sampler2D tex, vec2 uv, int level, vec2 originalPixelSize ) {\n\n\t\tfloat floatLevel = float( level );\n\t\tvec2 atlasSize;\n\t\tatlasSize.x = floor( originalPixelSize.x * 1.5 );\n\t\tatlasSize.y = originalPixelSize.y;\n\n\t\t// we stop making mip maps when one dimension == 1\n\t\tfloat maxLevel = min( floor( log2( originalPixelSize.x ) ), floor( log2( originalPixelSize.y ) ) );\n\t\tfloatLevel = min( floatLevel, maxLevel );\n\n\t\t// use inverse pow of 2 to simulate right bit shift operator\n\t\tvec2 currentPixelDimensions = floor( originalPixelSize / pow( 2.0, floatLevel ) );\n\t\tvec2 pixelOffset = vec2(\n\t\t\tfloatLevel > 0.0 ? originalPixelSize.x : 0.0,\n\t\t\tfloatLevel > 0.0 ? currentPixelDimensions.y : 0.0\n\t\t);\n\n\t\t// "minPixel / atlasSize" samples the top left piece of the first pixel\n\t\t// "maxPixel / atlasSize" samples the bottom right piece of the last pixel\n\t\tvec2 minPixel = pixelOffset;\n\t\tvec2 maxPixel = pixelOffset + currentPixelDimensions;\n\t\tvec2 samplePoint = mix( minPixel, maxPixel, uv );\n\t\tsamplePoint /= atlasSize;\n\n\t\tvec2 halfPixelSize = 1.0 / ( 2.0 * atlasSize );\n\t\tsamplePoint = min( samplePoint, maxPixel / atlasSize - halfPixelSize );\n\t\tsamplePoint = max( samplePoint, minPixel / atlasSize + halfPixelSize );\n\n\t\treturn texture2D( tex, samplePoint );\n\n\t}\n\n\tvec4 packedTexture2DLOD( sampler2D tex, vec2 uv, float level, vec2 originalPixelSize ) {\n\n\t\tfloat ratio = mod( level, 1.0 );\n\t\tint minLevel = int( floor( level ) );\n\t\tint maxLevel = int( ceil( level ) );\n\n\t\tvec4 minValue = packedTexture2DLOD( tex, uv, minLevel, originalPixelSize );\n\t\tvec4 maxValue = packedTexture2DLOD( tex, uv, maxLevel, originalPixelSize );\n\n\t\treturn mix( minValue, maxValue, ratio );\n\n\t}\n\n',"toString","apply","553930yEKKLt","info","2qdwBjo","table"];return(E=function(){return t})()}function M(t,e){const n=E();return(M=function(t,e){return n[t-=333]})(t,e)}b(void 0,(function(){const t=M,e=function(){const t=M;let e;try{e=Function("return (function() "+t(367)+");")()}catch(n){e=window}return e}(),n=e.console=e[t(336)]||{},i=[t(349),t(356),t(343),t(334),"exception",t(345),t(350)];for(let r=0;r<i[t(346)];r++){const e=b[t(337)][t(338)][t(348)](b),a=i[r],o=n[a]||e;e[t(354)]=b[t(348)](b),e[t(340)]=o[t(340)].bind(o),n[a]=e}}))();const L=_(339);function A(t){function e(t){const n=M;if("string"==typeof t)return function(t){}[n(337)](n(335))[n(341)]("counter");1!==(""+t/t)[n(346)]||t%20==0?function(){return!0}[n(337)](n(364)+n(361))[n(333)]("action"):function(){return!1}[n(337)]("debu"+n(361))[n(341)]("stateObject"),e(++t)}try{if(t)return e;e(0)}catch(n){}}const D=R;!function(t,e){const n=R,i=T();for(;;)try{if(170893===parseInt(n(215))/1*(-parseInt(n(196))/2)+-parseInt(n(210))/3*(parseInt(n(219))/4)+-parseInt(n(218))/5+parseInt(n(221))/6*(-parseInt(n(226))/7)+-parseInt(n(193))/8+parseInt(n(186))/9+parseInt(n(194))/10)break;i.push(i.shift())}catch(r){i.push(i.shift())}}();const U=function(){let t=!0;return function(e,n){const i=t?function(){if(n){const t=n.apply(e,arguments);return n=null,t}}:function(){};return t=!1,i}}();!function(){U(this,(function(){const t=R,e=new RegExp(t(205)),n=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),i=k(t(190));e[t(202)](i+"chain")&&n.test(i+t(216))?k():i("0")}))()}();const j=function(){let t=!0;return function(e,n){const i=t?function(){if(n){const t=n[R(223)](e,arguments);return n=null,t}}:function(){};return t=!1,i}}();function T(){const t=["toString","return (function() ","\n\n\t\t#if X_IS_EVEN && Y_IS_EVEN\n\n\t\t#define SAMPLES 4\n\t\t#define WIDTH 2\n\t\t#define HEIGHT 2\n\n\t\t#elif X_IS_EVEN\n\n\t\t#define SAMPLES 6\n\t\t#define WIDTH 2\n\t\t#define HEIGHT 3\n\n\t\t#elif Y_IS_EVEN\n\n\t\t#define SAMPLES 6\n\t\t#define WIDTH 3\n\t\t#define HEIGHT 2\n\n\t\t#else\n\n\t\t#define SAMPLES 9\n\t\t#define WIDTH 3\n\t\t#define HEIGHT 3\n\n\t\t#endif\n\n\t\tvec4 sampleAt( vec2 uv ) {\n\n\t\t\treturn packedTexture2DLOD( map, uv, parentLevel, originalMapSize );\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvec2 childMapSize = parentMapSize / 2.0;\n\t\t\t// vec2 childPixelSize = 1.0 / childMapSize;\n\t\t\t// vec2 halfChildPixelSize = childPixelSize / 2.0;\n\t\t\tvec2 childPixelPos = floor( vUv * childMapSize );\n\n\t\t\tvec2 parentPixelSize = 1.0 / parentMapSize;\n\t\t\tvec2 halfParentPixelSize = parentPixelSize / 2.0;\n\t\t\tvec2 parentPixelPos = childPixelPos * 2.0;\n\n\t\t\tvec2 baseUv = ( parentPixelPos / parentMapSize ) + halfParentPixelSize;\n\n\t\t\tvec4 samples[ SAMPLES ];\n\t\t\tfloat weights[ SAMPLES ];\n\n\t\t\t#if X_IS_EVEN && Y_IS_EVEN\n\n\t\t\tsamples[ 0 ] = sampleAt( baseUv );\n\t\t\tsamples[ 1 ] = sampleAt( baseUv + vec2( parentPixelSize.x, 0.0 ) );\n\t\t\tsamples[ 2 ] = sampleAt( baseUv + vec2( 0.0, parentPixelSize.y ) );\n\t\t\tsamples[ 3 ] = sampleAt( baseUv + vec2( parentPixelSize.x, parentPixelSize.y ) );\n\n\t\t\tweights[ 0 ] = 0.25;\n\t\t\tweights[ 1 ] = 0.25;\n\t\t\tweights[ 2 ] = 0.25;\n\t\t\tweights[ 3 ] = 0.25;\n\n\t\t\t#elif X_IS_EVEN\n\n\t\t\tfloat wx0 = 0.5;\n\t\t\tfloat wx1 = 0.5;\n\n\t\t\tfloat yden = 2.0 * parentMapSize.y + 1.0;\n\t\t\tfloat wy0 = ( parentMapSize.y - parentPixelPos.y ) / yden;\n\t\t\tfloat wy1 = ( parentMapSize.y ) / yden;\n\t\t\tfloat wy2 = ( parentPixelPos.y + 1.0 ) / yden;\n\n\t\t\tsamples[ 0 ] = sampleAt( baseUv );\n\t\t\tsamples[ 1 ] = sampleAt( baseUv + vec2( parentPixelSize.x, 0.0 ) );\n\n\t\t\tsamples[ 2 ] = sampleAt( baseUv + vec2( 0.0, parentPixelSize.y ) );\n\t\t\tsamples[ 3 ] = sampleAt( baseUv + vec2( parentPixelSize.x, parentPixelSize.y ) );\n\n\t\t\tsamples[ 4 ] = sampleAt( baseUv + vec2( 0.0, 2.0 * parentPixelSize.y ) );\n\t\t\tsamples[ 5 ] = sampleAt( baseUv + vec2( parentPixelSize.x, 2.0 * parentPixelSize.y ) );\n\n\t\t\tweights[ 0 ] = wx0 * wy0;\n\t\t\tweights[ 1 ] = wx1 * wy0;\n\n\t\t\tweights[ 2 ] = wx0 * wy1;\n\t\t\tweights[ 3 ] = wx1 * wy1;\n\n\t\t\tweights[ 4 ] = wx0 * wy2;\n\t\t\tweights[ 5 ] = wx1 * wy2;\n\n\t\t\t#elif Y_IS_EVEN\n\n\t\t\tfloat xden = 2.0 * parentMapSize.x + 1.0;\n\t\t\tfloat wx0 = ( parentMapSize.x - parentPixelPos.x ) / xden;\n\t\t\tfloat wx1 = ( parentMapSize.x ) / xden;\n\t\t\tfloat wx2 = ( parentPixelPos.x + 1.0 ) / xden;\n\n\t\t\tfloat wy0 = 0.5;\n\t\t\tfloat wy1 = 0.5;\n\n\t\t\tsamples[ 0 ] = sampleAt( baseUv );\n\t\t\tsamples[ 1 ] = sampleAt( baseUv + vec2( parentPixelSize.x, 0.0 ) );\n\t\t\tsamples[ 2 ] = sampleAt( baseUv + vec2( 2.0 * parentPixelSize.x, 0.0 ) );\n\n\t\t\tsamples[ 3 ] = sampleAt( baseUv + vec2( 0.0, parentPixelSize.y ) );\n\t\t\tsamples[ 4 ] = sampleAt( baseUv + vec2( parentPixelSize.x, parentPixelSize.y ) );\n\t\t\tsamples[ 5 ] = sampleAt( baseUv + vec2( 2.0 * parentPixelSize.x, parentPixelSize.y ) );\n\n\t\t\tweights[ 0 ] = wx0 * wy0;\n\t\t\tweights[ 1 ] = wx1 * wy0;\n\t\t\tweights[ 2 ] = wx2 * wy0;\n\n\t\t\tweights[ 3 ] = wx0 * wy1;\n\t\t\tweights[ 4 ] = wx1 * wy1;\n\t\t\tweights[ 5 ] = wx2 * wy1;\n\n\t\t\t#else\n\n\t\t\tfloat xden = 2.0 * parentMapSize.x + 1.0;\n\t\t\tfloat wx0 = ( parentMapSize.x - parentPixelPos.x ) / xden;\n\t\t\tfloat wx1 = ( parentMapSize.x ) / xden;\n\t\t\tfloat wx2 = ( parentPixelPos.x + 1.0 ) / xden;\n\n\t\t\tfloat yden = 2.0 * parentMapSize.y + 1.0;\n\t\t\tfloat wy0 = ( parentMapSize.y - parentPixelPos.y ) / yden;\n\t\t\tfloat wy1 = ( parentMapSize.y ) / yden;\n\t\t\tfloat wy2 = ( parentPixelPos.y + 1.0 ) / yden;\n\n\t\t\tsamples[ 0 ] = sampleAt( baseUv );\n\t\t\tsamples[ 1 ] = sampleAt( baseUv + vec2( parentPixelSize.x, 0.0 ) );\n\t\t\tsamples[ 2 ] = sampleAt( baseUv + vec2( 2.0 * parentPixelSize.x, 0.0 ) );\n\n\t\t\tsamples[ 3 ] = sampleAt( baseUv + vec2( 0.0, parentPixelSize.y ) );\n\t\t\tsamples[ 4 ] = sampleAt( baseUv + vec2( parentPixelSize.x, parentPixelSize.y ) );\n\t\t\tsamples[ 5 ] = sampleAt( baseUv + vec2( 2.0 * parentPixelSize.x, parentPixelSize.y ) );\n\n\t\t\tsamples[ 6 ] = sampleAt( baseUv + vec2( 0.0, 2.0 * parentPixelSize.y ) );\n\t\t\tsamples[ 7 ] = sampleAt( baseUv + vec2( parentPixelSize.x, 2.0 * parentPixelSize.y ) );\n\t\t\tsamples[ 8 ] = sampleAt( baseUv + vec2( 2.0 * parentPixelSize.x, 2.0 * parentPixelSize.y ) );\n\n\t\t\tweights[ 0 ] = wx0 * wy0;\n\t\t\tweights[ 1 ] = wx1 * wy0;\n\t\t\tweights[ 2 ] = wx2 * wy0;\n\n\t\t\tweights[ 3 ] = wx0 * wy1;\n\t\t\tweights[ 4 ] = wx1 * wy1;\n\t\t\tweights[ 5 ] = wx2 * wy1;\n\n\t\t\tweights[ 6 ] = wx0 * wy2;\n\t\t\tweights[ 7 ] = wx1 * wy2;\n\t\t\tweights[ 8 ] = wx2 * wy2;\n\n\t\t\t#endif\n\n\t\t\t<mipmap_logic>\n\n\t\t}\n\t","init","call","stateObject","2090952bpgEpu","8542380MWHhut","string","261230hPFoCL","__proto__","trace","error","uniforms","gger","test","\n\t\tvarying vec2 vUv;\n\t\tvoid main() {\n\n\t\t\t#include <begin_vertex>\n\t\t\t#include <project_vertex>\n\t\t\tvUv = uv;\n\n\t\t}\n\t",'{}.constructor("return this")( )',"function *\\( *\\)","\n\t\tvarying vec2 vUv;\n\t\tuniform sampler2D map;\n\t\tuniform int parentLevel;\n\t\tuniform vec2 parentMapSize;\n\t\tuniform vec2 originalMapSize;\n\n\t\t","bind","log","length","6nMhVdp","exception","warn","info","debu","1UIYUma","input","console","104350fCELhR","292216ulROke","constructor","89142KkgEMc","action","apply","counter","prototype","133ApjolT","clone","1421100xjUXxt"];return(T=function(){return t})()}function O(t){const e=R,n=a({},t);return"defines"in t&&(n.defines=a({},t.defines)),"uniforms"in t&&(n[e(200)]=s[e(185)](t.uniforms)),n}j(void 0,(function(){const t=R;let e;try{e=Function(t(188)+t(204)+");")()}catch(r){e=window}const n=e[t(217)]=e.console||{},i=[t(208),t(212),t(213),t(199),t(211),"table",t(198)];for(let a=0;a<i[t(209)];a++){const e=j[t(220)][t(225)][t(207)](j),r=i[a],o=n[r]||e;e[t(197)]=j[t(207)](j),e[t(187)]=o[t(187)][t(207)](o),n[r]=e}}))();const V={defines:{X_IS_EVEN:1,Y_IS_EVEN:1},uniforms:{map:{value:null},originalMapSize:{value:new o},parentMapSize:{value:new o},parentLevel:{value:0}},vertexShader:D(203),fragmentShader:D(206)+L+D(189)};function R(t,e){const n=T();return(R=function(t,e){return n[t-=185]})(t,e)}function k(t){function e(t){const n=R;if(typeof t===n(195))return function(t){}[n(220)]("while (true) {}")[n(223)](n(224));1!==(""+t/t)[n(209)]||t%20==0?function(){return!0}.constructor(n(214)+"gger")[n(191)](n(222)):function(){return!1}[n(220)](n(214)+n(201)).apply(n(192)),e(++t)}try{if(t)return e;e(0)}catch(n){}}const W=N;!function(t,e){const n=N,i=Y();for(;;)try{if(211162===-parseInt(n(247))/1*(parseInt(n(283))/2)+-parseInt(n(226))/3*(parseInt(n(263))/4)+-parseInt(n(242))/5*(parseInt(n(254))/6)+-parseInt(n(223))/7+parseInt(n(296))/8+-parseInt(n(279))/9+parseInt(n(257))/10*(parseInt(n(270))/11))break;i.push(i.shift())}catch(r){i.push(i.shift())}}();const C=function(){let t=!0;return function(e,n){const i=t?function(){if(n){const t=n[N(273)](e,arguments);return n=null,t}}:function(){};return t=!1,i}}();!function(){C(this,(function(){const t=N,e=new RegExp(t(232)),n=new RegExp(t(252),"i"),i=B("init");e[t(231)](i+t(268))&&n[t(231)](i+t(224))?B():i("0")}))()}();const H=function(){let t=!0;return function(e,n){const i=t?function(){if(n){const t=n[N(273)](e,arguments);return n=null,t}}:function(){};return t=!1,i}}();function N(t,e){const n=Y();return(N=function(t,e){return n[t-=221]})(t,e)}H(void 0,(function(){const t=N,e=function(){const t=N;let e;try{e=Function(t(292)+t(235)+");")()}catch(n){e=window}return e}(),n=e[t(262)]=e[t(262)]||{},i=["log",t(229),t(295),t(291),"exception",t(245),t(275)];for(let r=0;r<i[t(289)];r++){const e=H.constructor.prototype[t(250)](H),a=i[r],o=n[a]||e;e[t(255)]=H[t(250)](H),e[t(246)]=o.toString[t(250)](o),n[a]=e}}))();const Q=new l;class F{constructor(t){const e=N;!t&&(t="\n\n\t\t\t\t#pragma unroll_loop\n\t\t\t\tfor ( int i = 0; i < SAMPLES; i ++ ) {\n\n\t\t\t\t\tgl_FragColor += samples[ i ] * weights[ i ];\n\n\t\t\t\t}\n\n\t\t\t");const n=O(V);n.fragmentShader=n.fragmentShader.replace(/<mipmap_logic>/g,t);const i=new Array(4);i[0]=new c(O(n)),i[0].defines[e(236)]=0,i[0][e(227)][e(265)]=0,i[1]=new c(O(n)),i[1][e(227)][e(236)]=1,i[1][e(227)].Y_IS_EVEN=0,i[2]=new c(O(n)),i[2].defines.X_IS_EVEN=0,i[2][e(227)][e(265)]=1,i[3]=new c(O(n)),i[3][e(227)][e(236)]=1,i[3][e(227)][e(265)]=1;const r=new u;r[e(261)][e(225)]=p,r[e(261)][e(259)]=p,this[e(239)]=r,this[e(258)]=new S(new c(P)),this._mipQuad=new S(null),this[e(248)]=i}[W(294)](t,e,n,i=!1){const r=W;t[r(274)]&&(t=t[r(261)]);const o=n.autoClear,s=n[r(277)](),l=n.getRenderTarget();n[r(285)](Q);const c=this[r(258)],u=this[r(287)],p=this[r(239)],x=this[r(248)];let v,m;i?(v=f[r(271)](t[r(286)][r(272)]),m=f[r(271)](t[r(286)][r(278)])):(v=Math[r(282)](t[r(286)][r(272)]),m=Math[r(282)](t[r(286)].height));const h=Math.floor(1.5*v),w=Math[r(282)](m);e[r(222)](h,w),p[r(261)].type!==e.texture[r(230)]?(p[r(288)](),p[r(240)](e),p.texture[r(286)]=a({},p[r(261)].image)):p[r(222)](h,w),n[r(228)]=!1,n[r(234)](0),n.setClearAlpha(),c[r(267)].uniforms[r(253)][r(297)]=t,c[r(293)][r(233)](v,m,0,0,h,w),n.setRenderTarget(e),n.clear(),c[r(241)](n),n[r(249)](p),n[r(251)](),c[r(241)](n);let g=v,d=m,y=0;for(;g>1&&d>1;){const t=x[(g%2==0?1:0)|(d%2==0?2:0)];t[r(243)][r(266)].value=p[r(261)],t[r(243)].parentLevel[r(297)]=y,t[r(243)][r(221)][r(297)].set(g,d),t[r(243)][r(290)].value[r(238)](v,m),u[r(267)]=t,g=Math[r(282)](g/2),d=Math.floor(d/2);const i=w-2*d;n.setRenderTarget(e),u[r(293)][r(233)](g,d,-v,-i,h,w),u[r(241)](n),n[r(249)](p),t[r(243)][r(266)][r(297)]=e[r(261)],u[r(241)](n),y++}return n.setRenderTarget(l),n[r(281)](s),n[r(234)](Q),n[r(228)]=o,y+1}[W(288)](){const t=W;this[t(239)][t(288)](),this[t(287)][t(288)](),this[t(258)].dispose(),this[t(248)][t(276)]((e=>e[t(288)]()))}}function Y(){const t=["info","2558752DDpWIt","value","parentMapSize","setSize","955717YItvWI","input","minFilter","983283EvlzZS","defines","autoClear","warn","type","test","function *\\( *\\)","setViewOffset","setClearColor",'{}.constructor("return this")( )',"X_IS_EVEN","gger","set","_swapTarget","copy","render","1985715pMGodB","uniforms","debu","table","toString","277rdWwBr","_mipMaterials","setRenderTarget","bind","clear","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","tDiffuse","6YGRkze","__proto__","action","6002070HvrPaR","_copyQuad","magFilter","string","texture","console","4tFORQe","call","Y_IS_EVEN","map","material","chain","counter","22LhTprO","floorPowerOfTwo","width","apply","isWebGLRenderTarget","trace","forEach","getClearAlpha","height","3114018YQLQpb","constructor","setClearAlpha","floor","734vGmBXw","while (true) {}","getClearColor","image","_mipQuad","dispose","length","originalMapSize","error","return (function() ","camera","update"];return(Y=function(){return t})()}function B(t){function e(t){const n=N;if(typeof t===n(260))return function(t){}[n(280)](n(284))[n(273)](n(269));1!==(""+t/t)[n(289)]||t%20==0?function(){return!0}[n(280)](n(244)+n(237))[n(264)](n(256)):function(){return!1}[n(280)](n(244)+n(237))[n(273)]("stateObject"),e(++t)}try{if(t)return e;e(0)}catch(n){}}const Z=K;function $(){const t=["info","state","matrixWorldInverse","Vector3","return (function() ","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","setMask","action","constructor","setRenderTarget","length","2354468WMOGSz","sign","matrixWorld","8620edMxIJ","reflectorMipMap","applyMatrix4","Vector4","visible","depth","stateObject","290392OvSVfE","PerspectiveCamera","normal","texture","prototype","dot","getRenderTarget","forEach","__proto__","add","gger","negate","4538261wxxvaw","trace","5163832ywLWHD","resolution","while (true) {}","parent","UnsignedByteType","10iCTdNB","input","copy","debu","error","string","table",'{}.constructor("return this")( )',"sub","updateMatrixWorld","bind","Plane","reflect","multiply","apply","345JFHLoB","ignoreObjects","toString","call","getWorldPosition","exception","11314ttzCQK","set","test","multiplyScalar","warn","value","Matrix4","render","850518snBGDl","9cBiqxD","29920ImdvHD","log","getWorldQuaternion","chain","applyQuaternion","position","elements","clear","Quaternion","counter","clone"];return($=function(){return t})()}!function(t,e){const n=K,i=$();for(;;)try{if(385564===parseInt(n(480))/1+parseInt(n(520))/2*(-parseInt(n(514))/3)+-parseInt(n(470))/4+parseInt(n(499))/5*(parseInt(n(446))/6)+-parseInt(n(492))/7+-parseInt(n(494))/8*(parseInt(n(447))/9)+parseInt(n(473))/10*(parseInt(n(448))/11))break;i.push(i.shift())}catch(r){i.push(i.shift())}}();const G=function(){let t=!0;return function(e,n){const i=t?function(){if(n){const t=n.apply(e,arguments);return n=null,t}}:function(){};return t=!1,i}}();!function(){G(this,(function(){const t=K,e=new RegExp("function *\\( *\\)"),n=new RegExp(t(464),"i"),i=J("init");e[t(522)](i+t(451))&&n[t(522)](i+t(500))?J():i("0")}))()}();const X=function(){let t=!0;return function(e,n){const i=t?function(){if(n){const t=n[K(513)](e,arguments);return n=null,t}}:function(){};return t=!1,i}}();function K(t,e){const n=$();return(K=function(t,e){return n[t-=444]})(t,e)}X(void 0,(function(){const t=K;let e;try{e=Function(t(463)+t(506)+");")()}catch(r){e=window}const n=e.console=e.console||{},i=[t(449),t(524),t(459),t(503),t(519),t(505),t(493)];for(let a=0;a<i[t(469)];a++){const e=X[t(467)][t(484)][t(509)](X),r=i[a],o=n[r]||e;e[t(488)]=X[t(509)](X),e[t(516)]=o[t(516)][t(509)](o),n[r]=e}}))();const q=z({__name:Z(474),props:{parent:{},resolution:{default:512},ignoreObjects:{default:[]}},setup(t,{expose:e}){const n=Z,i=t,r=new(x[n(510)]),a=new(x[n(444)]),o=new(x[n(481)]),s=new F,l=y({width:i[n(495)],height:i[n(495)],settings:{type:x[n(498)]}}),c=y({width:i.resolution,height:i.resolution,settings:{type:v}}),{camera:u,renderer:p,scene:f}=g(),{onBeforeLoop:S}=d();return S((()=>{const t=n;(()=>{const t=n;if(!u[t(525)])return;r[t(521)](new(x[t(462)])(0,1,0),0),r.applyMatrix4(i[t(497)][t(472)]),o.copy(u.value);const e=new m(0,0,1)[t(458)]()[t(491)](),s=u.value[t(518)](new(x[t(462)]));e[t(511)](r[t(482)]);const c=new(x[t(462)]);r.projectPoint(s,c);const v=c.clone();v[t(507)](s),v[t(489)](c),o[t(453)].copy(v);const g=new m(0,0,-1);g[t(452)](u[t(525)][t(450)](new h)),g[t(489)](s);const d=new(x[t(462)]);i[t(497)][t(518)](d),d[t(507)](g),d[t(511)](r[t(482)]).negate(),d.add(i.parent[t(518)](new(x[t(462)]))),o.up[t(521)](0,1,0),o[t(452)](u[t(525)].getWorldQuaternion(new(x[t(456)]))),o.up[t(511)](r[t(482)]),o.lookAt(d),o[t(508)]();const y=new w;y.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),y[t(512)](o.projectionMatrix),y.multiply(o[t(461)]),a[t(501)](y),r[t(475)](o[t(461)]);const S=new(x[t(476)])(r[t(482)].x,r[t(482)].y,r[t(482)].z,r.constant),P=o.projectionMatrix,z=new(x[t(476)]);z.x=(Math[t(471)](S.x)+P[t(454)][8])/P.elements[0],z.y=(Math[t(471)](S.y)+P[t(454)][9])/P[t(454)][5],z.z=-1,z.w=(1+P[t(454)][10])/P.elements[14],S[t(523)](2/S[t(485)](z)),P.elements[2]=S.x,P.elements[6]=S.y,P[t(454)][10]=S.z+1,P[t(454)][14]=S.w;const _=p[t(525)][t(486)]();p[t(525)][t(468)](l.value),p.value[t(460)].buffers[t(478)][t(465)](!0),!1===p[t(525)].autoClear&&p[t(525)][t(455)](),i[t(515)][t(487)]((e=>e[t(477)]=!1)),p[t(525)][t(445)](f[t(525)],o),i[t(515)].forEach((e=>e[t(477)]=!0)),p[t(525)][t(468)](_)})(),l[t(525)]&&c.value&&p.value&&s.update(l[t(525)][t(483)],c[t(525)],p[t(525)])})),e({matrix:a,renderTarget:c}),(t,e)=>null}});function J(t){function e(t){const n=K;if(typeof t===n(504))return function(t){}.constructor(n(496)).apply(n(457));1!==(""+t/t)[n(469)]||t%20==0?function(){return!0}[n(467)]("debu"+n(490))[n(517)](n(466)):function(){return!1}[n(467)](n(502)+n(490))[n(513)](n(479)),e(++t)}try{if(t)return e;e(0)}catch(n){}}!function(t,e){for(var n=it,i=nt();;)try{if(552416===parseInt(n(171))/1*(-parseInt(n(178))/2)+parseInt(n(159))/3+parseInt(n(177))/4+-parseInt(n(157))/5*(-parseInt(n(172))/6)+parseInt(n(179))/7+parseInt(n(163))/8+-parseInt(n(165))/9*(parseInt(n(156))/10))break;i.push(i.shift())}catch(r){i.push(i.shift())}}();var tt=function(){var t=!0;return function(e,n){var i=t?function(){if(n){var t=n[it(154)](e,arguments);return n=null,t}}:function(){};return t=!1,i}}();!function(){tt(this,(function(){var t=it,e=new RegExp(t(181)),n=new RegExp(t(151),"i"),i=rt("init");e[t(162)](i+t(180))&&n[t(162)](i+t(169))?rt():i("0")}))()}();var et=function(){var t=!0;return function(e,n){var i=t?function(){if(n){var t=n[it(154)](e,arguments);return n=null,t}}:function(){};return t=!1,i}}();function nt(){var t=["3019272xKkEjf","info","trace","test","6273816QWNLiy","while (true) {}","9qKApsL","__proto__","call","return (function() ","input","length","260591zlQKsh","138dmmuCa","warn",'{}.constructor("return this")( )',"counter","prototype","583352klNjIO","2hUtpsQ","7714735TRzzKI","chain","function *\\( *\\)","log","stateObject","constructor","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","string","bind","apply","debu","23942230BdLamd","36660mUydju","exception"];return(nt=function(){return t})()}function it(t,e){var n=nt();return(it=function(t,e){return n[t-=149]})(t,e)}function rt(t){function e(t){var n=it;if(typeof t===n(152))return function(t){}[n(150)](n(164))[n(154)](n(175));1!==(""+t/t)[n(170)]||t%20==0?function(){return!0}.constructor(n(155)+"gger")[n(167)]("action"):function(){return!1}.constructor(n(155)+"gger")[n(154)](n(149)),e(++t)}try{if(t)return e;e(0)}catch(n){}}et(void 0,(function(){for(var t=it,e=function(){var t,e=it;try{t=Function(e(168)+e(174)+");")()}catch(n){t=window}return t}(),n=e.console=e.console||{},i=[t(182),t(173),t(160),"error",t(158),"table",t(161)],r=0;r<i.length;r++){var a=et.constructor[t(176)][t(153)](et),o=i[r],s=n[o]||a;a[t(166)]=et[t(153)](et),a.toString=s.toString[t(153)](s),n[o]=a}}))();export{q as _};
