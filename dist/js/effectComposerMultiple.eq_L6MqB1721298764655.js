import{p as t,$ as n,d as e}from"./@tresjs.iXEJQd7J1721298764655.js";import{bW as r,bY as o,bX as s,a6 as u,c7 as c,c8 as i,c5 as a,c9 as l}from"./three.0bBjBDi41721298764655.js";import{d as f,b as p,a1 as h,o as v,D as d,J as g,F as m,e as x,f as w,g as T,j as y,u as b}from"./@vue.Q1VpS3901721298764655.js";import"./tweakpane.yHWGBmom1721298764655.js";import"./@vueuse.hS-CVzal1721298764655.js";const _=z;!function(t,n){const e=z,r=A();for(;;)try{if(271468===-parseInt(e(253))/1+parseInt(e(247))/2*(-parseInt(e(237))/3)+-parseInt(e(238))/4+-parseInt(e(272))/5*(-parseInt(e(269))/6)+parseInt(e(246))/7*(parseInt(e(255))/8)+-parseInt(e(219))/9+parseInt(e(279))/10*(parseInt(e(241))/11))break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const I=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e[z(257)](n,arguments);return e=null,t}}:function(){};return t=!1,r}}();!function(){I(this,(function(){const t=z,n=new RegExp(t(280)),e=new RegExp(t(268),"i"),r=B("init");n[t(244)](r+t(249))&&e.test(r+t(250))?B():r("0")}))()}();const M=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e[z(257)](n,arguments);return e=null,t}}:function(){};return t=!1,r}}();M(void 0,(function(){const t=z,n=function(){const t=z;let n;try{n=Function(t(277)+'{}.constructor("return this")( ));')()}catch(e){n=window}return n}(),e=n[t(222)]=n[t(222)]||{},r=[t(266),t(271),t(229),t(248),t(230),"table","trace"];for(let o=0;o<r[t(240)];o++){const n=M[t(221)].prototype[t(267)](M),s=r[o],u=e[s]||n;n[t(251)]=M.bind(M),n[t(228)]=u[t(228)][t(267)](u),e[s]=n}}))();const j=[g("TresBoxGeometry",{args:[1,1,1]},null,-1),g("TresMeshNormalMaterial",null,null,-1)],D=[g(_(263),{args:[1,1,1]},null,-1),g(_(235),null,null,-1)],S=[g(_(263),{args:[1,1,1]},null,-1),g(_(235),null,null,-1)],k=[g(_(216),{args:[.8,32,16]},null,-1),g(_(235),null,null,-1)];function z(t,n){const e=A();return(z=function(t,n){return e[t-=216]})(t,n)}function A(){const t=["function *\\( *\\)","stateObject","TresSphereGeometry","threshold","ShaderMaterial","685431ItpVdW","Vector2","constructor","console","render","filmBox","layers","renderToScreen","texture","toString","info","exception","baseTexture","uniforms","string","action","TresMeshNormalMaterial","\n            varying vec2 vUv;\n            void main() {\n                vUv = uv;\n                gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n            }\n        ","174zTGBwA","1628676ZMtxAI","call","length","1441ytjTmT","renderTarget2","clearDepth","test","value","1960gOKwDx","14764MbnAWp","error","chain","input","__proto__","set","157087xWOoKQ","needsSwap","2088mAXsPi","shineBox","apply","clear","debu","addPass","width","resolution","TresBoxGeometry","TresMesh","ecLayerMultiple","log","bind","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","162SxgWOc","height","warn","68155TpRYHK","radius","gger","normalBox","strength","return (function() ","while (true) {}","68620qnkPXE"];return(A=function(){return t})()}const P=f({__name:_(265),setup(e){const f=p(),x=p(),w=p(),T=p();h((()=>{const t=z;f.value&&f[t(245)][t(225)][t(252)](0),x[t(245)]&&x[t(245)][t(225)][t(252)](1),w.value&&w.value[t(225)][t(252)](2),T.value&&T[t(245)].layers[t(252)](3)}));const{camera:y,renderer:b,scene:_,sizes:I}=t(),M={strength:.572,radius:.51,threshold:0};let A=null,P=null;let B=null;let R=null;let U=null;h((()=>{const t=z;I[t(261)][t(245)]&&(((t,n,e,c,i)=>{const a=z;A=new r(t,n),P=new o(e),P[a(226)]=!1,P[a(260)](A);const l=new s(new(u[a(220)])(c,i),M[a(276)],M[a(273)],M[a(217)]);P[a(260)](l)})(_[t(245)],y.value,b.value,I.width[t(245)],I[t(270)][t(245)]),(t=>{const n=z;R=new o(t),R[n(226)]=!1,R[n(260)](A);const e=new i;R.addPass(e)})(b.value),(t=>{const n=z;B=new o(t),B[n(226)]=!1,B[n(260)](A);const e=new c;B[n(260)](e)})(b[t(245)]),(t=>{const n=z;U=new o(t),U.addPass(A);const e=new(u[n(218)])({uniforms:{baseTexture:{value:null},bloomTexture:{value:P.renderTarget2[n(227)]},filmTexture:{value:B[n(242)][n(227)]},glitchTexture:{value:R[n(242)].texture}},vertexShader:n(236),fragmentShader:"\n            uniform sampler2D baseTexture;\n            uniform sampler2D bloomTexture;\n\t\t\t\t\t\tuniform sampler2D filmTexture;\n\t\t\t\t\t\tuniform sampler2D glitchTexture;\n            varying vec2 vUv;\n            void main() {\n                gl_FragColor = ( \n\t\t\t\t\t\t\t\t\tvec4( 1.0 ) * texture2D( baseTexture, vUv )  + \n\t\t\t\t\t\t\t\t\tvec4( 1.0 ) * texture2D( bloomTexture, vUv ) + \n\t\t\t\t\t\t\t\t\tvec4( 1.0 ) * texture2D( filmTexture, vUv ) + \n\t\t\t\t\t\t\t\t\tvec4( 1.0 ) * texture2D( glitchTexture, vUv ) \n\t\t\t\t\t\t\t\t);\n            }\n        ",defines:{}}),r=new a(e,n(231));r[n(254)]=!0,U[n(260)](r);const{width:s,height:c}=t.getDrawingBufferSize(new(u[n(220)])),i=new a(l);i[n(232)][n(262)][n(245)][n(252)](1/s,1/c),U.addPass(i)})(b[t(245)]))}));const{onLoop:C}=n();return C((()=>{const t=z;P&&U&&y[t(245)]&&(b[t(245)][t(258)](),y[t(245)].layers.set(1),P[t(223)](),y.value.layers[t(252)](2),B[t(223)](),y[t(245)][t(225)][t(252)](3),R.render(),b[t(245)][t(243)](),y[t(245)][t(225)][t(252)](0),U[t(223)](_.value,y.value))})),(t,n)=>{const e=z;return v(),d(m,null,[g("TresMesh",{ref_key:e(275),ref:f,position:[3,2,1]},j,512),g(e(264),{ref_key:e(256),ref:x,position:[0,2,-4]},D,512),g(e(264),{ref_key:e(224),ref:w,position:[1,2,3]},S,512),g(e(264),{ref_key:"glitchSphere",ref:T,position:[-3,2,0]},k,512)],64)}}});function B(t){function n(t){const e=z;if(typeof t===e(233))return function(t){}.constructor(e(278))[e(257)]("counter");1!==(""+t/t)[e(240)]||t%20==0?function(){return!0}[e(221)](e(259)+e(274))[e(239)](e(234)):function(){return!1}[e(221)](e(259)+"gger").apply(e(281)),n(++t)}try{if(t)return n;n(0)}catch(e){}}const R=O;!function(t,n){const e=O,r=C();for(;;)try{if(920437===parseInt(e(523))/1+-parseInt(e(496))/2*(parseInt(e(489))/3)+parseInt(e(488))/4+parseInt(e(487))/5*(-parseInt(e(491))/6)+parseInt(e(520))/7+parseInt(e(500))/8+-parseInt(e(517))/9)break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const U=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e[O(485)](n,arguments);return e=null,t}}:function(){};return t=!1,r}}();function C(){const t=["chain",'{}.constructor("return this")( )',"console","test","call","length","TresAmbientLight","error","tcRef","toString","table","13507434AFUqqH","gger","while (true) {}","616819peBnJj","return (function() ","TresPerspectiveCamera","923402RCMxhM","info","renderer","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","effectComposerMultiple","TresGridHelper","string","apply","context","15000nXKoJY","2929828CxRYvN","17913TnoizP","warn","618rtDzae","constructor","log","action","stateObject","230aIPEMN","debu","function *\\( *\\)","bind","13383616pgxdZx","value","TresCanvas","autoClear","prototype","init"];return(C=function(){return t})()}!function(){U(this,(function(){const t=O,n=new RegExp(t(498)),e=new RegExp(t(481),"i"),r=$(t(505));n[t(509)](r+t(506))&&e[t(509)](r+"input")?$():r("0")}))()}();const E=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e[O(485)](n,arguments);return e=null,t}}:function(){};return t=!1,r}}();E(void 0,(function(){const t=O;let n;try{n=Function(t(521)+t(507)+");")()}catch(o){n=window}const e=n.console=n[t(508)]||{},r=[t(493),t(490),t(479),t(513),"exception",t(516),"trace"];for(let s=0;s<r[t(511)];s++){const n=E[t(492)][t(504)][t(499)](E),o=r[s],u=e[o]||n;n.__proto__=E[t(499)](E),n[t(515)]=u.toString[t(499)](u),e[o]=n}}))();const Z=g(R(522),{position:[10,10,10]},null,-1),F=g(R(512),{intensity:1},null,-1),G=g(R(483),{args:[10,10]},null,-1);function O(t,n){const e=C();return(O=function(t,n){return e[t-=479]})(t,n)}const W=f({__name:R(482),setup(t){const n=p();return h((()=>{const t=O;if(n[t(501)]){n[t(501)][t(486)][t(480)].value[t(503)]=!1}})),(t,r)=>{const o=O,s=x(o(502));return v(),w(s,{renderMode:"manual","window-size":"",ref_key:o(514),ref:n},{default:T((()=>[Z,F,y(b(e)),G,y(P)])),_:1},512)}}});function $(t){function n(t){const e=O;if(typeof t===e(484))return function(t){}[e(492)](e(519))[e(485)]("counter");1!==(""+t/t)[e(511)]||t%20==0?function(){return!0}[e(492)](e(497)+e(518))[e(510)](e(494)):function(){return!1}[e(492)]("debugger")[e(485)](e(495)),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{W as default};
