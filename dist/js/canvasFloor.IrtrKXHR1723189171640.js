import{P as t}from"./tweakpane.yHWGBmom1723189171640.js";import{$ as n,d as e}from"./@tresjs.LTwFwASm1723189171640.js";import{d as o,j as r,a7 as s,r as i,w as c,o as a,D as u,J as l,aj as f,ak as p,e as h,f as d,g,u as y}from"./@vue.Q1VpS3901723189171640.js";import{a6 as x,C as w}from"./three.5MXJ6W7w1723189171640.js";import"./@vueuse.oQlm8k6P1723189171640.js";function I(){const t=["warn","step","shift","cos","lineTo","812SBHLpZ","sqrt","5693968oaqoqX","length","input","toString","target","apply","call","moveTo","console","gger","10uvzmVr","restore","atan2","save","beginPath","strokeStyle","12146823LZyoWg","push","destination-out","random","trace","table","splice","18472eHPqlQ","floor","6cvwKwI","path","hsla(0, 0%, 10%, 0.1)","debu","bind","rspeed","updateDist","while (true) {}","log","count","lineWidth","1700766jEoDMI","action","angle","chain","hsla(",'{}.constructor("return this")( )',"updateAngle","6XxrACY","sin","12685607KpmhBQ","speed","changeTarget","draw","constructor","dist","4140355OGqxBS","1359044TKDkdv","test","hue","life","counter","globalCompositeOperation","lighter","fillRect","function *\\( *\\)"];return(I=function(){return t})()}const b=S;!function(t,n){const e=S,o=I();for(;;)try{if(865709===parseInt(e(234))/1+parseInt(e(250))/2*(-parseInt(e(241))/3)+parseInt(e(266))/4+parseInt(e(249))/5*(-parseInt(e(223))/6)+parseInt(e(264))/7*(-parseInt(e(221))/8)+parseInt(e(282))/9+-parseInt(e(276))/10*(parseInt(e(243))/11))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const m=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){m(this,(function(){const t=S,n=new RegExp(t(258)),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),o=E("init");n[t(251)](o+t(237))&&e[t(251)](o+t(268))?E():o("0")}))()}();const _=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[S(271)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();function T(t,n){return Math[S(217)]()*(n-t)+t}function v(t,n){const e=S;return Math[e(222)](t+Math[e(217)]()*(n-t+1))}_(void 0,(function(){const t=S;let n;try{n=Function("return (function() "+t(239)+");")()}catch(r){n=window}const e=n[t(274)]=n[t(274)]||{},o=[t(231),t(259),"info","error","exception",t(219),t(218)];for(let s=0;s<o[t(267)];s++){const n=_[t(247)].prototype[t(227)](_),r=o[s],i=e[r]||n;n.__proto__=_[t(227)](_),n[t(269)]=i[t(269)][t(227)](i),e[r]=n}}))();let A=0,M=0,k=null;let j=0;const R=[];function S(t,n){const e=I();return(S=function(t,n){return e[t-=217]})(t,n)}let z=10;class B{constructor(){const t=S;this.path=[],this[t(228)]=T(1,2),this[t(232)]=v(10,30),this.x=A/2+1,this.y=M/2+1,this[t(270)]={x:A/2,y:M/2},this[t(248)]=0,this[t(236)]=0,this[t(252)]=j/5,this[t(253)]=1,this[t(240)](),this[t(229)]()}[b(260)](t){const n=b;this[n(244)]=this[n(228)]*z,this.x+=Math[n(262)](this[n(236)])*this.speed,this.y+=Math[n(242)](this.angle)*this[n(244)],this[n(229)](),this[n(248)]<this[n(244)]&&(this.x=this.target.x,this.y=this[n(270)].y,this[n(245)]()),this.path[n(283)]({x:this.x,y:this.y}),this[n(224)][n(267)]>this[n(232)]&&this.path[n(261)](),this[n(253)]-=.001,this.life<=0&&(this.path=null,R[n(220)](t,1))}[b(229)](){const t=b,n=this[t(270)].x-this.x,e=this[t(270)].y-this.y;this[t(248)]=Math[t(265)](n*n+e*e)}[b(240)](){const t=b,n=this[t(270)].x-this.x,e=this[t(270)].y-this.y;this.angle=Math[t(278)](e,n)}[b(245)](){const t=b;switch(v(0,3)){case 0:this[t(270)].y=this.y-30;break;case 1:this[t(270)].x=this.x+30;break;case 2:this[t(270)].y=this.y+30;break;case 3:this[t(270)].x=this.x-30}this[t(240)]()}[b(246)](){const t=b;k[t(280)]();const n=T(0,10);for(let o=0,r=this[t(224)][t(267)];o<r;o++)k[t(0===o?273:263)](this[t(224)][o].x+T(-n,n),this[t(224)][o].y+T(-n,n));let e=this[t(252)];e=30,k[t(281)]=t(238)+T(0,30)+", 0%, 80%, "+this[t(253)]/3+")",k[t(233)]=T(.1,2),k.stroke()}}const D=()=>{j%10==0&&R.push(new B),function(){const t=b;let n=R[t(267)];for(;n--;)R[n][t(260)](n)}(),function(){const t=b;k[t(255)]=t(284),k.fillStyle=t(225),k[t(257)](0,0,A,M),k[t(255)]=t(256)}(),function(){const t=b;k[t(279)](),k.translate(A/2,M/2),k.translate(-A/2,-M/2);let n=R.length;for(;n--;)R[n][t(246)](n);k[t(277)]()}(),j++};function E(t){function n(t){const e=S;if("string"==typeof t)return function(t){}[e(247)](e(230))[e(271)](e(254));1!==(""+t/t).length||t%20==0?function(){return!0}.constructor(e(226)+"gger")[e(272)](e(235)):function(){return!1}[e(247)](e(226)+e(275))[e(271)]("stateObject"),n(++t)}try{if(t)return n;n(0)}catch(e){}}const Z=$;function C(){const t=["exception","20419668haUwcI","test","console","TresMeshStandardMaterial","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","green","5498038dfqlmg","error","785AZBIWL","set","39148Ktqasn","while (true) {}","TresMesh","stateObject","1591312ADcWRP","warn","constructor","CanvasTexture","bind","8NDYqYK","canvas","args","opacity","1150424eLQRAs","wrapS","createElement","chain","trace","DoubleSide","return (function() ","5377896tEfgfj","__proto__","#fff","rotation-x","debu","speed","log","info","needsUpdate","RepeatWrapping","TresPlaneGeometry","textureRepeat","length","lightningPattern","table","toString","1002951KNbUcQ","input","gger","call","getContext","div","wrapT","init","AdditiveBlending","function *\\( *\\)"];return(C=function(){return t})()}!function(t,n){const e=$,o=C();for(;;)try{if(822724===-parseInt(e(394))/1+parseInt(e(385))/2+parseInt(e(360))/3+parseInt(e(381))/4*(-parseInt(e(379))/5)+parseInt(e(401))/6+-parseInt(e(377))/7+parseInt(e(390))/8*(parseInt(e(371))/9))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const L=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){L(this,(function(){const t=$,n=new RegExp(t(369)),e=new RegExp(t(375),"i"),o=Q(t(367));n.test(o+t(397))&&e[t(372)](o+t(361))?Q():o("0")}))()}();const q=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,o}}();q(void 0,(function(){const t=$,n=function(){const t=$;let n;try{n=Function(t(400)+'{}.constructor("return this")( ));')()}catch(e){n=window}return n}(),e=n[t(373)]=n.console||{},o=[t(407),t(386),t(408),t(378),t(370),t(358),t(398)];for(let r=0;r<o[t(413)];r++){const n=q[t(387)].prototype.bind(q),s=o[r],i=e[s]||n;n[t(402)]=q[t(389)](q),n.toString=i[t(359)][t(389)](i),e[s]=n}}))();const P=[Z(404)],K=[Z(392)];function $(t,n){const e=C();return($=function(t,n){return e[t-=358]})(t,n)}const F=o({__name:Z(414),props:{size:{default:[10,10]},color:{default:Z(403)},opacity:{default:.95},textureRepeat:{default:[1,1]},speed:{default:10}},setup(t){const e=Z,o=t,h=r(e(391),{width:1024,height:768,style:{backgroundColor:e(376)}});s(h,document[e(396)](e(365))),((t,n,e,o)=>{const r=b;A=t,M=n,k=e,j=0,z=o;for(let s=0;s<10;s++)R[r(283)](new B)})(1024,768,h.el[e(364)]("2d"),o[e(406)]);const d=new(x[e(388)])(h.el);d[e(395)]=x[e(410)],d[e(366)]=x[e(410)],d.repeat[e(380)](o[e(412)][0],o[e(412)][1]);const g=i({color:o.color,map:d,side:x[e(399)],transparent:!0,opacity:o[e(393)],blending:x[e(368)],flatShading:!0,depthTest:!0});c((()=>o.color),(t=>{g.color=new w(t)})),c((()=>o.opacity),(t=>{g[e(393)]=t})),c((()=>o[e(406)]),(t=>{var n;n=o.speed,z=n}));const{onLoop:y}=n();return y((()=>{const t=e;D(),d[t(409)]=!0})),(t,n)=>{const r=e;return a(),u(r(383),{"rotation-x":-Math.PI/2},[l(r(411),{args:o.size},null,8,K),l(r(374),f(p(g)),null,16)],8,P)}}});function Q(t){function n(t){const e=$;if("string"==typeof t)return function(t){}.constructor(e(382)).apply("counter");1!==(""+t/t).length||t%20==0?function(){return!0}[e(387)](e(405)+e(362))[e(363)]("action"):function(){return!1}.constructor("debu"+e(362)).apply(e(384)),n(++t)}try{if(t)return n;n(0)}catch(e){}}function W(){const t=["input","bind","prototype","test","info","constructor","__proto__","6489054rBYnfA","10DLrkHT","#1a79fe","#fff","exception","41277fweffK","#000000","console","toString","string","TresPerspectiveCamera","10191144NgmnLQ","debu","opacity","error","color","stateObject","canvasFloor","2zgxMRb","canvas地面","1131997ExyFUi","63mWXoGo","length","addBinding","table","透明度","counter","28842055FuTVak","apply","speed","warn","trace","5140005cMAefe","while (true) {}","log","TresDirectionalLight","56foydQs","function *\\( *\\)","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","TresMesh","gger","675606tZAirB","chain"];return(W=function(){return t})()}const G=tt;!function(t,n){const e=tt,o=W();for(;;)try{if(682925===-parseInt(e(401))/1*(-parseInt(e(399))/2)+parseInt(e(436))/3*(parseInt(e(417))/4)+-parseInt(e(413))/5+-parseInt(e(422))/6*(-parseInt(e(402))/7)+parseInt(e(442))/8+parseInt(e(431))/9+-parseInt(e(432))/10*(parseInt(e(408))/11))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const H=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[tt(409)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){H(this,(function(){const t=tt,n=new RegExp(t(418)),e=new RegExp(t(419),"i"),o=et("init");n[t(427)](o+t(423))&&e[t(427)](o+t(424))?et():o("0")}))()}();const O=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[tt(409)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();O(void 0,(function(){const t=tt;let n;try{n=Function('return (function() {}.constructor("return this")( ));')()}catch(r){n=window}const e=n[t(438)]=n[t(438)]||{},o=[t(415),t(411),t(428),t(395),t(435),t(405),t(412)];for(let s=0;s<o[t(403)];s++){const n=O[t(429)][t(426)][t(425)](O),r=o[s],i=e[r]||n;n[t(430)]=O.bind(O),n[t(439)]=i[t(439)][t(425)](i),e[r]=n}}))();const N=l(G(441),{position:[15,20,0],fov:45,near:.1,far:1e4},null,-1),U=l("TresAmbientLight",{intensity:6},null,-1),Y=l(G(416),{position:[0,8,0],intensity:1,color:G(434)},null,-1),X=l(G(420),{position:[0,1,0]},[l("TresBoxGeometry",{args:[1,1,1]}),l("TresMeshNormalMaterial")],-1),V=l("TresAxesHelper",{args:[10],position:[0,0,0]},null,-1),J=l("TresGridHelper",{args:[10,10],position:[0,0,0]},null,-1);function tt(t,n){const e=W();return(tt=function(t,n){return e[t-=394]})(t,n)}const nt=o({__name:G(398),setup(n){const o=G,s=i({color:o(433),opacity:.95,speed:10}),c=new t({title:o(400),expanded:!0});return c[o(404)](s,o(396),{label:"颜色"}),c.addBinding(s,o(394),{label:o(406),min:0,max:1,step:.01}),c[o(404)](s,o(410),{label:"速度",min:0,max:20,step:1}),(t,n)=>{const i=o,c=h("TresCanvas");return a(),d(c,{clearColor:i(437),"window-size":""},{default:g((()=>[N,r(y(e),{enableDamping:"","auto-rotate":""}),U,Y,X,r(F,f(p(s)),null,16),V,J])),_:1})}}});function et(t){function n(t){const e=tt;if(typeof t===e(440))return function(t){}.constructor(e(414))[e(409)](e(407));1!==(""+t/t)[e(403)]||t%20==0?function(){return!0}.constructor(e(443)+e(421)).call("action"):function(){return!1}[e(429)](e(443)+"gger")[e(409)](e(397)),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{nt as default};
