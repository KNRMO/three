import{_ as t}from"./index.-hwd2uJC1718787583077.js";import{y as n,Z as e,a5 as r}from"./three.OZpCYxlY1718787583077.js";import{a as o,r as s,b as i,N as c,d as u,H as a}from"./@tresjs.yMGhEK7G1718787583077.js";import{u as p}from"./index.NWNYYgod1718787583077.js";import{M as f,a as l}from"./@pmndrs.14-i3u7y1718787583077.js";import{d as g,X as h,q as d,t as m,o as I,D as y,u as _,a3 as j,f as b,g as w,J as v,j as x,al as M,e as k,aj as z,ak as R,F as T}from"./@vue.CpOXM7bB1718787583077.js";import"./default.vue_vue_type_script_setup_true_lang.PLtwinxK1718787583077.js";import"./@fesjs.BvrsBDNW1718787583077.js";import"./vue-router.2IN93cQd1718787583077.js";import"./lodash-es.nFpJXAf-1718787583077.js";import"./@vueuse.jAwx0y-e1718787583077.js";import"./@qlin.yHhFDldE1718787583077.js";import"./pinia.jgDkRZDw1718787583077.js";import"./@floating-ui.BPbuo5Gx1718787583077.js";import"./@juggle.7yjBMqoW1718787583077.js";import"./tweakpane.qqn77PB81718787583077.js";import"./three-stdlib.qiumRy5f1718787583077.js";import"./object-hash.qNEzwKzz1718787583077.js";import"./@amap.SdFHYHOw1718787583077.js";import"./jszip.b_9tpgnb1718787583077.js";const A=F;!function(t,n){const e=F,r=S();for(;;)try{if(285001===parseInt(e(284))/1*(-parseInt(e(259))/2)+parseInt(e(255))/3*(-parseInt(e(287))/4)+-parseInt(e(290))/5+parseInt(e(254))/6*(parseInt(e(267))/7)+parseInt(e(280))/8*(-parseInt(e(278))/9)+parseInt(e(253))/10*(parseInt(e(250))/11)+-parseInt(e(291))/12*(-parseInt(e(258))/13))break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const E=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e[F(268)](n,arguments);return e=null,t}}:function(){};return t=!1,r}}();!function(){E(this,(function(){const t=F,n=new RegExp(t(292)),e=new RegExp(t(252),"i"),r=J(t(245));n[t(276)](r+"chain")&&e[t(276)](r+t(266))?J():r("0")}))()}();const C=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e[F(268)](n,arguments);return e=null,t}}:function(){};return t=!1,r}}();C(void 0,(function(){const t=F,n=function(){const t=F;let n;try{n=Function(t(294)+'{}.constructor("return this")( ));')()}catch(e){n=window}return n}(),e=n[t(263)]=n[t(263)]||{},r=[t(247),"warn","info",t(271),"exception",t(269),t(273)];for(let o=0;o<r[t(249)];o++){const n=C.constructor[t(257)].bind(C),s=r[o],i=e[s]||n;n[t(264)]=C[t(274)](C),n.toString=i.toString[t(274)](i),e[s]=n}}))();const L=[A(246)];function S(){const t=["render","setRenderTarget","1QUFmEQ","value","buffer","792oJauYb","debu","gger","296075DdXrSQ","1104060edLAAX","function *\\( *\\)","call","return (function() ","constructor","init","side","log","TresMeshTransmissionMaterial","length","11vwqMZx","while (true) {}","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","2252090HQeCFO","66lnEkOa","1731NIQFtz","string","prototype","143cSBXYR","918218OeChOf","toneMapping","background","uuid","console","__proto__","time","input","31871fqLJlt","apply","table","traverse","error","envMapIntensity","trace","bind","MeshTransmissionMaterialClass","test","material","396JcvvqL","texture","67232hoiZoO","counter"];return(S=function(){return t})()}function F(t,n){const e=S();return(F=function(t,n){return e[t-=245]})(t,n)}const O=1024,Z=g({__name:"stickerTransmisionMaterial",setup(t,{expose:r}){const i=h(),{extend:c,scene:u,renderer:a,camera:g}=o(),j=h();c({MeshTransmissionMaterial:f});const b=new l,{onBeforeLoop:w}=s(),v=p({width:O,height:O,isLoop:!1}),x=p({width:O,height:O,isLoop:!1});let M,k,z,R;return d((async()=>{const t=F;await m(),i.value.buffer=x[t(285)][t(279)],j[t(285)]=function(t,n){const e=F;let r;return t[e(270)]((t=>{const o=e;t.isMesh&&t.material&&t[o(277)][o(262)]===n&&(r=t)})),r}(u[t(285)],i[t(285)][t(262)])})),w((({elapsed:t})=>{const e=F;i[e(285)][e(265)]=t,i[e(285)][e(286)]===x[e(285)][e(279)]&&j.value&&(z=a[e(285)][e(260)],M=u[e(285)].background,k=i[e(285)][e(272)],R=j[e(285)].material[e(246)],j.value[e(277)]=b,a[e(285)][e(283)](v[e(285)]),a.value[e(282)](u[e(285)],g[e(285)]),j[e(285)].material=i.value,j[e(285)][e(277)].thickness=0,j.value[e(277)][e(286)]=v[e(285)].texture,j.value[e(277)].side=n,j[e(285)][e(277)].envMapIntensity=0,a[e(285)].setRenderTarget(x[e(285)]),a[e(285)].render(u.value,g[e(285)]),j[e(285)][e(277)][e(286)]=x[e(285)].texture,j[e(285)].material=i[e(285)],j.value[e(277)].thickness=0,j[e(285)][e(277)].side=R,j[e(285)][e(277)].envMapIntensity=k,u[e(285)][e(261)]=M,a.value.setRenderTarget(null),a.value[e(260)]=z)})),r({root:i,constructor:f}),(t,n)=>{const r=F;return I(),y(r(248),{ref_key:r(275),ref:i,transmission:0,_transmission:1,"anisotropic-blur":.1,thickness:0,side:_(e)},null,8,L)}}});function J(t){function n(t){const e=F;if(typeof t===e(256))return function(t){}.constructor(e(251))[e(268)](e(281));1!==(""+t/t)[e(249)]||t%20==0?function(){return!0}[e(295)](e(288)+e(289))[e(293)]("action"):function(){return!1}[e(295)]("debu"+e(289)).apply("stateObject"),n(++t)}try{if(t)return n;n(0)}catch(e){}}const P=H;!function(t,n){const e=H,r=Q();for(;;)try{if(939063===-parseInt(e(498))/1+-parseInt(e(502))/2*(-parseInt(e(518))/3)+-parseInt(e(520))/4+parseInt(e(522))/5*(-parseInt(e(501))/6)+-parseInt(e(516))/7*(parseInt(e(506))/8)+-parseInt(e(496))/9+parseInt(e(510))/10)break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const G=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e[H(512)](n,arguments);return e=null,t}}:function(){};return t=!1,r}}();function H(t,n){const e=Q();return(H=function(t,n){return e[t-=489]})(t,n)}!function(){G(this,(function(){const t=H,n=new RegExp(t(493)),e=new RegExp(t(505),"i"),r=q(t(521));n[t(517)](r+t(523))&&e[t(517)](r+"input")?q():r("0")}))()}();const $=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e[H(512)](n,arguments);return e=null,t}}:function(){};return t=!1,r}}();$(void 0,(function(){const t=H,n=function(){const t=H;let n;try{n=Function(t(489)+'{}.constructor("return this")( ));')()}catch(e){n=window}return n}(),e=n.console=n[t(514)]||{},r=["log",t(507),t(504),"error",t(499),t(519),"trace"];for(let o=0;o<r.length;o++){const n=$[t(515)].prototype[t(495)]($),s=r[o],i=e[s]||n;n[t(509)]=$[t(495)]($),n.toString=i.toString[t(495)](i),e[s]=n}}))();const B=[P(490),"rotation"];function Q(){const t=["27464AYxvFD","warn","stickerModel","__proto__","23116880YauPRC","debu","apply","string","console","constructor","700VGzvsB","test","2636430PbklFf","table","2696432wAJuRx","init","5rgSzIb","chain","return (function() ","geometry","Object_4","gger","function *\\( *\\)","action","bind","5518494NYgoyF","TresMesh","389670pHCRac","exception","stateObject","6660006JmlFSu","4iLwBdP","counter","info","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)"];return(Q=function(){return t})()}const X=g({__name:P(508),async setup(t){let n,e;const{nodes:r}=([n,e]=j((()=>i("./plugins/eCommerce/model/pack.glb"))),n=await n,e(),n);return(t,n)=>{const e=H;return I(),b(M,null,{default:w((()=>[v(e(497),{geometry:_(r)[e(491)].geometry,rotation:[Math.PI/2,0,0],"cast-shadow":!0,"receive-shadow":!0},[x(Z)],8,B)])),_:1})}}});function q(t){function n(t){const e=H;if(typeof t===e(513))return function(t){}.constructor("while (true) {}")[e(512)](e(503));1!==(""+t/t).length||t%20==0?function(){return!0}[e(515)](e(511)+e(492)).call(e(494)):function(){return!1}[e(515)](e(511)+e(492))[e(512)](e(500)),n(++t)}try{if(t)return n;n(0)}catch(e){}}const D=W;!function(t,n){const e=W,r=N();for(;;)try{if(553657===-parseInt(e(492))/1+-parseInt(e(471))/2*(-parseInt(e(476))/3)+-parseInt(e(484))/4+parseInt(e(477))/5*(parseInt(e(456))/6)+-parseInt(e(482))/7+parseInt(e(496))/8*(parseInt(e(464))/9)+parseInt(e(461))/10*(parseInt(e(458))/11))break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const V=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e[W(479)](n,arguments);return e=null,t}}:function(){};return t=!1,r}}();function N(){const t=["143mBxNAz","gger","map","537460zGRfvL","string","call","9VvVXyN","while (true) {}","trace","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","TresMesh","table","TresMeshPhysicalMaterial","819862xVzxSr","console","input","constructor","__proto__","3pXJdtl","2855GxJiim",'{}.constructor("return this")( )',"apply","TresPlaneGeometry","length","4547368BkrmJA","init","1945060GEVEaj","counter","test","side","exception","debu","warn","logo.png","974676EMtZgD","action","function *\\( *\\)","toString","4596920VnALiz","bind","return (function() ","10308HPLCLC","chain"];return(N=function(){return t})()}!function(){V(this,(function(){const t=W,n=new RegExp(t(494)),e=new RegExp(t(467),"i"),r=nt(t(483));n[t(486)](r+t(457))&&e[t(486)](r+t(473))?nt():r("0")}))()}();const Y=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e[W(479)](n,arguments);return e=null,t}}:function(){};return t=!1,r}}();Y(void 0,(function(){const t=W;let n;try{n=Function(t(455)+t(478)+");")()}catch(o){n=window}const e=n[t(472)]=n[t(472)]||{},r=["log",t(490),"info","error",t(488),t(469),t(466)];for(let s=0;s<r.length;s++){const n=Y[t(474)].prototype[t(497)](Y),o=r[s],i=e[o]||n;n[t(475)]=Y[t(497)](Y),n[t(495)]=i[t(495)][t(497)](i),e[o]=n}}))();const U=v(D(480),null,null,-1),K=[D(460),D(487)];function W(t,n){const e=N();return(W=function(t,n){return e[t-=455]})(t,n)}const tt=g({__name:"stickerLogo",async setup(t){const n=D;let r,o;const s=([r,o]=j((()=>c([n(491)]))),r=await r,o(),r);return(t,r)=>{const o=n;return I(),b(M,null,{default:w((()=>[v(o(468),null,[U,v(o(470),{map:_(s),transparent:!0,clearcoat:1,roughness:1,metalness:.8,side:_(e)},null,8,K)])])),_:1})}}});function nt(t){function n(t){const e=W;if(typeof t===e(462))return function(t){}[e(474)](e(465))[e(479)](e(485));1!==(""+t/t)[e(481)]||t%20==0?function(){return!0}[e(474)](e(489)+e(459))[e(463)](e(493)):function(){return!1}[e(474)](e(489)+e(459))[e(479)]("stateObject"),n(++t)}try{if(t)return n;n(0)}catch(e){}}const et=ct;!function(t,n){const e=ct,r=ut();for(;;)try{if(395046===parseInt(e(355))/1*(-parseInt(e(344))/2)+-parseInt(e(364))/3*(parseInt(e(321))/4)+parseInt(e(347))/5*(-parseInt(e(340))/6)+parseInt(e(345))/7*(-parseInt(e(336))/8)+-parseInt(e(328))/9+-parseInt(e(337))/10*(-parseInt(e(349))/11)+-parseInt(e(342))/12*(-parseInt(e(338))/13))break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const rt=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e[ct(358)](n,arguments);return e=null,t}}:function(){};return t=!1,r}}();!function(){rt(this,(function(){const t=ct,n=new RegExp(t(353)),e=new RegExp(t(357),"i"),r=pt(t(319));n[t(350)](r+t(341))&&e[t(350)](r+t(363))?pt():r("0")}))()}();const ot=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e[ct(358)](n,arguments);return e=null,t}}:function(){};return t=!1,r}}();ot(void 0,(function(){const t=ct;let n;try{n=Function(t(352)+t(356)+");")()}catch(o){n=window}const e=n.console=n[t(362)]||{},r=["log",t(348),t(329),t(335),t(331),t(351),t(324)];for(let s=0;s<r.length;s++){const n=ot[t(361)][t(346)][t(333)](ot),o=r[s],i=e[o]||n;n[t(326)]=ot.bind(ot),n[t(334)]=i[t(334)][t(333)](i),e[o]=n}}))();const st=v(et(332),{position:[0,0,6],fov:45,near:.1,far:1e3},null,-1),it=v(et(366),{intensity:2},null,-1);function ct(t,n){const e=ut();return(ct=function(t,n){return e[t-=319]})(t,n)}function ut(){const t=["counter","init","call","3124HDwRPi","length","debu","trace","files","__proto__","string","5882589sOGsHb","info","stateObject","exception","TresPerspectiveCamera","bind","toString","error","1336ICprPz","100xsyXNB","13efizSX","action","42168LgJZfh","chain","31249236tQHdHe","neg-x.jpg","95836dUOvEQ","24031Tvtiqz","prototype","160GaJHRt","warn","197384przlTE","test","table","return (function() ","function *\\( *\\)","pos-y.jpg","15GgdlVj",'{}.constructor("return this")( )',"\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","apply","gger","ACESFilmicToneMapping","constructor","console","input","837QCogsD","pos-z.jpg","TresAmbientLight"];return(ut=function(){return t})()}const at=g({__name:"sticker",setup(n){const e=et,o={clearColor:"#333333",windowSize:!0,toneMapping:r[e(360)],toneMappingExposure:.8,shadows:!0};return(n,r)=>{const s=e,i=k("TresCanvas");return I(),y(T,null,[x(_(t)),x(i,z(R(o)),{default:w((()=>[st,x(_(u),{enableDamping:""}),it,(I(),b(M,null,{default:w((()=>[x(X)])),_:1})),(I(),b(M,null,{default:w((()=>[x(tt)])),_:1})),(I(),b(M,null,{default:w((()=>[x(_(a),{files:["pos-x.jpg",s(343),s(354),"neg-y.jpg",s(365),"neg-z.jpg"],path:"https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/images/skyBox/6jpg/",background:!1},null,8,[s(325)])])),_:1}))])),_:1},16)],64)}}});function pt(t){function n(t){const e=ct;if(typeof t===e(327))return function(t){}.constructor("while (true) {}").apply(e(367));1!==(""+t/t)[e(322)]||t%20==0?function(){return!0}[e(361)]("debu"+e(359))[e(320)](e(339)):function(){return!1}[e(361)](e(323)+e(359))[e(358)](e(330)),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{at as default};
