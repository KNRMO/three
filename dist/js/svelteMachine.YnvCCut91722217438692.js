import{a6 as t,M as n,V as e}from"./three.ej3u8izI1722217438692.js";import{p as o,$ as r,d as s,x as i}from"./@tresjs.vs5lCFs11722217438692.js";import"./index.S0Zqm1Tz1722217438692.js";import{d as c,o as u,D as a,J as p,F as l,a4 as f,b as h,q as d,j as y,u as m,r as g,w as v,g as w,f as b,al as x,aj as j,ak as z}from"./@vue.Q1VpS3901722217438692.js";import{l as I,b as _}from"./utils.LR750mC11722217438692.js";import{a as E}from"./index.byhbbwDx1722217438692.js";import"./tweakpane.yHWGBmom1722217438692.js";import"./@vueuse.mG9rDBoo1722217438692.js";import"./@fesjs.oJOSvSTI1722217438692.js";import"./vue-router.K-gJhGrY1722217438692.js";import"./lodash-es.nFpJXAf-1722217438692.js";import"./@qlin.yHhFDldE1722217438692.js";import"./pinia.iyC53SMr1722217438692.js";import"./@floating-ui.BPbuo5Gx1722217438692.js";import"./@juggle.7yjBMqoW1722217438692.js";import"./jszip.FHAQs96M1722217438692.js";import"./@amap.FTf_Qzi31722217438692.js";import"./file-saver.OLU46n0N1722217438692.js";import"./default.vue_vue_type_script_setup_true_lang.OB2u4qdb1722217438692.js";function S(t,n){const e=L();return(S=function(t,n){return e[t-=439]})(t,n)}const R=S;!function(t,n){const e=S,o=L();for(;;)try{if(328070===-parseInt(e(463))/1*(-parseInt(e(468))/2)+parseInt(e(441))/3*(parseInt(e(483))/4)+-parseInt(e(471))/5+parseInt(e(508))/6*(-parseInt(e(487))/7)+-parseInt(e(455))/8+-parseInt(e(465))/9+parseInt(e(500))/10)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const A=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[S(497)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){A(this,(function(){const t=S,n=new RegExp(t(505)),e=new RegExp(t(444),"i"),o=O("init");n[t(492)](o+t(473))&&e[t(492)](o+t(439))?O():o("0")}))()}();const M=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[S(497)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();M(void 0,(function(){const t=S,n=function(){const t=S;let n;try{n=Function(t(496)+t(485)+");")()}catch(e){n=window}return n}(),e=n[t(481)]=n[t(481)]||{},o=["log",t(502),"info",t(488),t(489),t(479),t(458)];for(let r=0;r<o[t(440)];r++){const n=M[t(466)].prototype.bind(M),s=o[r],i=e[s]||n;n[t(459)]=M[t(453)](M),n.toString=i[t(499)][t(453)](i),e[s]=n}}))(),window[R(493)]=t;const P={scene:null,renderer:null,camera:null,sizes:null},k={get renderer(){var t;return null==(t=P[R(477)])?void 0:t.value},loader:new(t[R(511)]),get scene(){var t;const n=R;return null==(t=P[n(506)])?void 0:t[n(510)]},get camera(){var t;const n=R;return null==(t=P[n(451)])?void 0:t[n(510)]},get width(){var t,n;const e=R;return null==(n=null==(t=P.sizes)?void 0:t.width)?void 0:n[e(510)]},get height(){var t,n;const e=R;return null==(n=null==(t=P[e(456)])?void 0:t[e(504)])?void 0:n[e(510)]},get dom(){var t;const n=R;return null==(t=P[n(477)])?void 0:t.value[n(480)].parentElement},get canvas(){var t;const n=R;return null==(t=P.renderer)?void 0:t[n(510)][n(480)]},events:{},init(t,n,e,o){const r=R;P[r(506)]=t,P.renderer=n,P[r(451)]=e,P.sizes=o},load(t){const n=R,e={"1d0e8871-bd60-47f9-8ab7-232dabd30201":[{name:n(462),source:n(482)}],"beea1423-1e37-47ab-9443-f8429259e120":[{name:"dirb",source:n(448)}],"31517222-A9A7-4EAF-B5F6-60751C0BABA3":[{name:n(476),source:n(509)}]};this.events={init:[],start:[],stop:[],keydown:[],keyup:[],pointerdown:[],pointerup:[],pointermove:[],update:[]};let o=n(457);const r={};for(const i in this[n(486)])o+=","+i,r[i]=i;const s=JSON.stringify(r)[n(475)](/\"/g,"");for(const i in e){let r=i;i===t.uuid&&(r=this[n(506)][n(495)]);const c=this.scene.getObjectByProperty(n(495),r,!0);if(void 0===c){console[n(502)](n(447),r);continue}const u=e[i];for(let t=0;t<u[n(440)];t++){const e=u[t],r=new Function(o,e[n(452)]+"\nreturn "+s+";")[n(453)](c)(this,this[n(477)],this[n(506)],this[n(451)]);for(const t in r)void 0!==r[t]&&(void 0!==this[n(486)][t]?this[n(486)][t][n(472)](r[t][n(453)](c)):console[n(502)](n(490),t,")"))}this.dispatch(this[n(486)][n(454)],arguments)}},dispatch(t,n){for(let e=0,o=t[R(440)];e<o;e++)t[e](n)},setCamera(t){const n=R;console[n(502)](n(503),t)},setScene(t){console[R(502)]("暂时不考虑场景的设置函数",t)},setPixelRatio(t){console.warn("暂时不考虑像素比的设置函数",t)},setSize(t){console[R(502)]("暂时不考虑尺寸的设置函数",t)},dispose(){const t=R;console[t(502)](t(491))},onKeyDown(t){const n=R;k[n(449)](k[n(486)][n(442)],t)},onKeyUp(t){const n=R;k[n(449)](k[n(486)][n(501)],t)},onPointerDown(t){const n=R;k.dispatch(k[n(486)][n(445)],t)},onPointerUp(t){const n=R;k.dispatch(k.events[n(498)],t)},onPointerMove(t){const n=R;k[n(449)](k[n(486)][n(469)],t)},play(){const t=R;document[t(450)](t(442),this[t(464)]),document.addEventListener(t(501),this[t(460)]),document.addEventListener(t(445),this[t(446)]),document[t(450)]("pointerup",this[t(484)]),document.addEventListener("pointermove",this.onPointerMove),this[t(449)](this[t(486)].start,null)},stop(){const t=R;document.removeEventListener(t(442),this[t(464)]),document[t(478)]("keyup",this.onKeyUp),document[t(478)](t(445),this[t(446)]),document[t(478)](t(498),this.onPointerUp),document[t(478)](t(469),this.onPointerMove),this[t(449)](this[t(486)].stop,arguments)},render(t,n){const e=R;this[e(449)](this[e(486)][e(467)],{time:t,delta:n})}},D=k;function L(){const t=["height","function *\\( *\\)","scene","debu","7470SofocL","this.environment.mapping = THREE.EquirectangularReflectionMapping;\nthis.environment.colorSpace = THREE.SRGBColorSpace;\nfunction update( event ) {}","value","TextureLoader","while (true) {}","input","length","69WCiPie","keydown","stateObject","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","pointerdown","onPointerDown","player: Script without object.","this.shadow.mapSize.width = 1024 * 2\nthis.shadow.mapSize.height = 1024 * 2\nthis.shadow.camera.near = 1\nthis.shadow.camera.far = 50\nthis.shadow.camera.top = 80\nthis.shadow.camera.bottom = -80\nthis.shadow.camera.left = -80\nthis.shadow.camera.right = 80\nthis.shadow.radius = 24\nthis.shadow.bias = -0.0075\nfunction update( event ) {}","dispatch","addEventListener","camera","source","bind","init","4795160TVHPFG","sizes","player,renderer,scene,camera","trace","__proto__","onKeyUp","string","SpotLightEvent","3323xddHCV","onKeyDown","1398330SzjGLf","constructor","update","42cITASB","pointermove","action","827525hRdKft","push","chain","gger","replace","senceScirpt","renderer","removeEventListener","table","domElement","console","this.shadow.mapSize.width = 1024 * 2\nthis.shadow.mapSize.height = 1024 * 2\nthis.shadow.camera.near = 1\nthis.shadow.camera.far = 10\nthis.shadow.bias = -0.0075\nthis.shadow.radius = 24\nthis.target.position.copy(this.position.clone().setY(0))\nfunction update( event ) {}","62948uAYxzp","onPointerUp",'{}.constructor("return this")( )',"events","595LTaDRU","error","exception","player: Event type not supported (","暂时不考虑释放资源的函数","test","THREE","call","uuid","return (function() ","apply","pointerup","toString","9224310veOrdX","keyup","warn","暂时不考虑摄像机的设置函数"];return(L=function(){return t})()}function O(t){function n(t){const e=S;if(typeof t===e(461))return function(t){}[e(466)](e(512)).apply("counter");1!==(""+t/t).length||t%20==0?function(){return!0}[e(466)]("debu"+e(474))[e(494)](e(470)):function(){return!1}[e(466)](e(507)+e(474)).apply(e(443)),n(++t)}try{if(t)return n;n(0)}catch(e){}}const T={points:[{x:-16.017528533935547,y:2.4581613540649414,z:53.098697662353516},{x:-11.40013599395752,y:2.4513251781463623,z:43.62754821777344},{x:-7.9051361083984375,y:2.4462289810180664,z:36.4436149597168},{x:-5.53253173828125,y:2.442873001098633,z:31.546899795532227},{x:-4.282320976257324,y:2.4412572383880615,z:28.937395095825195},{x:-3.9756288528442383,y:2.4410974979400635,z:28.24086570739746},{x:-3.7963345050811768,y:2.4410974979400635,z:27.74983024597168},{x:-3.6438193321228027,y:2.4410974979400635,z:27.253768920898438},{x:-3.5180840492248535,y:2.4410974979400635,z:26.75269317626953},{x:-3.419203519821167,y:2.4411063194274902,z:26.243703842163086},{x:-3.3517673015594482,y:2.4416656494140625,z:25.55027961730957},{x:-3.318483829498291,y:2.4430952072143555,z:24.5682430267334},{x:-3.319352865219116,y:2.445394515991211,z:23.297592163085938},{x:-3.354374647140503,y:2.448564052581787,z:21.73832893371582},{x:-3.4121222496032715,y:2.4521596431732178,z:19.611284255981445},{x:-3.461057662963867,y:2.454956293106079,z:16.145946502685547},{x:-3.49935245513916,y:2.456882953643799,z:11.297648429870605},{x:-3.5270066261291504,y:2.457939386367798,z:5.066390037536621},{x:-3.544764518737793,y:2.4581613540649414,z:-2.423649311065674},{x:-3.565464973449707,y:2.4581613540649414,z:-9.03036880493164},{x:-3.5937604904174805,y:2.4581613540649414,z:-13.977668762207031},{x:-3.629650592803955,y:2.4581613540649414,z:-17.265522003173828},{x:-3.673135280609131,y:2.4581613540649414,z:-18.893949508666992},{x:-3.7082104682922363,y:2.4581613540649414,z:-19.473438262939453},{x:-3.7077581882476807,y:2.4581613540649414,z:-20.038450241088867},{x:-3.6713337898254395,y:2.4581613540649414,z:-20.605941772460938},{x:-3.5989370346069336,y:2.4581613540649414,z:-21.175914764404297},{x:-3.3510568141937256,y:2.4581613540649414,z:-22.262161254882812},{x:-1.7961064577102661,y:2.4581615924835205,z:-28.032060623168945},{x:1.3139424324035645,y:2.4581618309020996,z:-39.39905548095703},{x:5.9790754318237305,y:2.458162546157837,z:-56.36309814453125},{x:12.19931411743164,y:2.458163261413574,z:-78.92425537109375}],closed:!1};function C(){const t=["6mBmkRE","progresses",'{}.constructor("return this")( )',"length","geometry","info","CatmullRomCurve3","1AZdhrM","577282mseVTT","InstancedMesh","apply","input","exception","chain","init","__proto__","clone","call","return (function() ","material","getPointAt","closed","progress","554139tmivJt","instanceMatrix","userData","trace","1491736GBRXmS","table","debu","position","warn","visible","test","log","1327060EkAExg","setMatrixAt","flat_item","stateObject","while (true) {}","toString","counter","gger","1257882xQgMjt","unshift","bind","needsUpdate","setPosition","1840146hyyYgQ","console","1329592DFTzmc","constructor","error","push","string","copy"];return(C=function(){return t})()}!function(t,n){const e=B,o=C();for(;;)try{if(252473===parseInt(e(229))/1*(parseInt(e(230))/2)+-parseInt(e(209))/3+-parseInt(e(249))/4+parseInt(e(257))/5*(parseInt(e(222))/6)+parseInt(e(214))/7+parseInt(e(216))/8+parseInt(e(245))/9)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const Z=function(n){const o=B,r=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){r(this,(function(){const t=B,n=new RegExp("function *\\( *\\)"),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),o=F(t(236));n[t(255)](o+t(235))&&e[t(255)](o+t(233))?F():o("0")}))()}();const s=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,o}}();s(this,(function(){const t=B;let n;try{n=Function(t(240)+t(224)+");")()}catch(r){n=window}const e=n[t(215)]=n[t(215)]||{},o=[t(256),t(253),t(227),t(218),t(234),t(250),t(248)];for(let i=0;i<o[t(225)];i++){const n=s.constructor.prototype[t(211)](s),r=o[i],c=e[r]||n;n[t(237)]=s.bind(s),n[t(262)]=c.toString[t(211)](c),e[r]=n}}))();const i=n.points,c=[];for(const t of i){const n=t.x,r=t.y,s=t.z;c[o(210)](new e(n,r,s))}const u=new(t[o(228)])(c);return u[o(243)]=n[o(243)],u}(T),K=new n;function B(t,n){const e=C();return(B=function(t,n){return e[t-=207]})(t,n)}function F(t){function n(t){const e=B;if(typeof t===e(220))return function(t){}[e(217)](e(261))[e(232)](e(207));1!==(""+t/t).length||t%20==0?function(){return!0}[e(217)]("debu"+e(208))[e(239)]("action"):function(){return!1}[e(217)](e(251)+e(208)).apply(e(260)),n(++t)}try{if(t)return n;n(0)}catch(e){}}const G=U;function U(t,n){const e=nt();return(U=function(t,n){return e[t-=200]})(t,n)}!function(t,n){const e=U,o=nt();for(;;)try{if(252613===parseInt(e(214))/1+-parseInt(e(226))/2+parseInt(e(206))/3+parseInt(e(220))/4+parseInt(e(234))/5*(parseInt(e(239))/6)+-parseInt(e(207))/7+parseInt(e(228))/8)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const $=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[U(232)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){$(this,(function(){const t=U,n=new RegExp("function *\\( *\\)"),e=new RegExp(t(215),"i"),o=tt("init");n[t(222)](o+t(208))&&e[t(222)](o+t(211))?tt():o("0")}))()}();const W=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,o}}();W(void 0,(function(){const t=U,n=function(){const t=U;let n;try{n=Function(t(224)+t(233)+");")()}catch(e){n=window}return n}(),e=n[t(231)]=n[t(231)]||{},o=[t(210),t(209),t(217),t(200),t(212),"table",t(203)];for(let r=0;r<o[t(219)];r++){const n=W[t(216)].prototype[t(218)](W),s=o[r],i=e[s]||n;n[t(223)]=W[t(218)](W),n[t(204)]=i[t(204)].bind(i),e[s]=n}}))();const H=[G(229)],J=["object"],N=[G(229)],q=[G(229)],V=[G(229)],X=["object"],Y=[G(229)],Q=c({__name:G(221),props:{object:{}},setup(n){const e=G,s=n,{scene:i}=o(),c=function(n){const e=B,o=Z.points[e(225)]/2,r=new(t[e(231)])(n[e(226)],n[e(241)],o);r[e(247)]={progresses:[]};for(let t=0;t<o;t++){const n=t/(o-1),s=Z[e(242)](n);r.userData[e(223)][t]=n,K[e(213)](s),r[e(258)](t,K)}return r}(s[e(229)][1]);i.value.add(c);const f=function(t){const n=B,e=[];e[n(219)](t[2][n(238)]()),e[n(219)](t[4][n(238)]()),e[n(219)](t[5][n(238)]()),e.push(t[2][n(238)]()),e[n(219)](t[5][n(238)]()),e.push(t[4].clone()),e[n(219)](t[2][n(238)]()),e[n(219)](t[4][n(238)]());for(let o=0;o<e.length;o++){const t=o/e[n(225)]*.6;e[o].userData={progress:t};const r=Z[n(242)](t);e[o].position[n(221)](r),e[o][n(254)]=!0}return e}(s.object),h=new(t[e(235)]);h[e(240)][e(201)](0,1,0),h.add(...f),i[e(213)][e(205)](h);const d=function(t){const n=B,e=[];for(let o=0;o<6;o++){e[n(219)](t[3][n(238)]());const r=1-o/6*.4-.04;e[o].userData={progress:r};const s=Z[n(242)](r);e[o][n(252)].copy(s),e[o][n(254)]=!0}return e}(s[e(229)]),y=new(t[e(235)]);y.add(...d),y[e(240)].set(0,1,0),i[e(213)].add(y);const{onLoop:m}=r();return m((({delta:t,elapsed:n})=>{c&&function(t){const n=B,e=t[n(247)][n(223)];for(let o=0;o<t.count;o++){const r=Z[n(242)](e[o]);K[n(213)](r),t[n(258)](o,K),e[o]+=5e-4,e[o]>1&&(e[o]=0)}t[n(246)][n(212)]=!0,t.computeBoundingSphere()}(c),f&&function(t){const n=B;for(let e=0;e<t[n(225)];e++){t[e][n(247)][n(244)]+=5e-4,t[e][n(247)][n(244)]>.6&&(t[e][n(247)][n(244)]=0);const o=t[e][n(247)][n(244)],r=Z.getPointAt(o);t[e].name===n(259)&&(r.y=1.5),t[e][n(252)][n(221)](r)}}(f),d&&function(t){const n=B;for(let e=0;e<t[n(225)];e++){t[e].userData[n(244)]+=5e-4,t[e][n(247)][n(244)]>1&&(t[e][n(247)][n(244)]=1-5/6*.4-.04);const o=t[e][n(247)][n(244)],r=Z.getPointAt(o);t[e][n(252)][n(221)](r)}}(d)})),(t,n)=>{const o=e;return u(),a(l,null,[p(o(236),{object:t[o(229)][0]},null,8,H),p(o(236),{object:t[o(229)][1],visible:!1},null,8,J),p(o(236),{object:t[o(229)][2]},null,8,N),p(o(236),{object:t[o(229)][4]},null,8,q),p(o(236),{object:t[o(229)][5]},null,8,V),p(o(236),{object:t[o(229)][6]},null,8,X),p(o(236),{object:t[o(229)][3]},null,8,Y)],64)}}});function tt(t){function n(t){const e=U;if(typeof t===e(237))return function(t){}[e(216)](e(230)).apply("counter");1!==(""+t/t)[e(219)]||t%20==0?function(){return!0}[e(216)](e(202)+e(238)).call(e(225)):function(){return!1}[e(216)]("debu"+e(238))[e(232)](e(227)),n(++t)}try{if(t)return n;n(0)}catch(e){}}function nt(){const t=["bind","length","925912NhWVsn","firstLevel-bf61e255d699","test","__proto__","return (function() ","action","731868IWrQGW","stateObject","4138176lahGxo","object","while (true) {}","console","apply",'{}.constructor("return this")( )',"185yWptTO","Group","primitive","string","gger","1722IvTLXM","position","error","set","debu","trace","toString","add","684276jHyiud","2715993GwbQTp","chain","warn","log","input","exception","value","19085RYOiZA","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","constructor","info"];return(nt=function(){return t})()}const et=ft;!function(t,n){const e=ft,o=pt();for(;;)try{if(165241===parseInt(e(277))/1+parseInt(e(313))/2*(-parseInt(e(280))/3)+parseInt(e(330))/4*(-parseInt(e(300))/5)+parseInt(e(285))/6*(-parseInt(e(341))/7)+parseInt(e(325))/8+-parseInt(e(337))/9*(-parseInt(e(317))/10)+-parseInt(e(278))/11)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const ot=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[ft(304)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){ot(this,(function(){const t=ft,n=new RegExp(t(293)),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),o=ht("init");n[t(294)](o+"chain")&&e[t(294)](o+t(311))?ht():o("0")}))()}();const rt=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,o}}();rt(void 0,(function(){const t=ft,n=function(){const t=ft;let n;try{n=Function(t(301)+t(326)+");")()}catch(e){n=window}return n}(),e=n[t(284)]=n[t(284)]||{},o=[t(298),t(308),t(319),t(309),t(281),t(303),"trace"];for(let r=0;r<o[t(296)];r++){const n=rt[t(336)][t(327)][t(315)](rt),s=o[r],i=e[s]||n;n[t(324)]=rt[t(315)](rt),n[t(320)]=i[t(320)][t(315)](i),e[s]=n}}))();const st=[et(288)],it=[et(288)],ct=["object"],ut=[et(288)],at=[et(288)];function pt(){const t=["ObjectLoader","2vcCSjh","load","bind","value","441190ZMflTe","spotLightRef","info","toString","intensity","environment","sin","__proto__","1563080BEBXmi",'{}.constructor("return this")( )',"prototype","init","url","534676sOYmTh","children","render","debu","play","angle","constructor","36voNKIX","while (true) {}","url:","action","1013061DBxmMA","geometries","309390uKmNrE","2426380PvRRxi","primitive","51114MGcZqR","exception","set","background","console","6vKcecG","images","./plugins/tresEditor/svelteMachine/","object","images/","scene","string","position","function *\\( *\\)","test","fog","length","slice","log","data","5yEfMyp","return (function() ","startsWith","table","apply","renderer","target","gger","warn","error","stateObject","input"];return(pt=function(){return t})()}const lt=c({__name:et(290),async setup(n){const e=et;let s,i;const{scene:c,renderer:g,camera:v,sizes:w}=o();D[e(328)](c,g,v,w);const b=new(t[e(312)]),x=([s,i]=f((()=>I("./plugins/tresEditor/svelteMachine/json/scene.json"))),s=await s,i(),s);if(x[e(342)])for(const t of x[e(342)])if(t[e(299)]&&t[e(299)][e(302)](e(339))){let n=t[e(299)][e(297)](4);n.startsWith("geometries/")&&(n=e(287)+n),t[e(299)]=([s,i]=f((()=>I(n))),s=await s,i(),s)}if(x[e(286)])for(const t of x.images)if(t.url&&t[e(329)][e(302)](e(339))){let n=t[e(329)][e(297)](4);n.startsWith(e(289))&&(n=e(287)+n),t.url=([s,i]=f((()=>_(n))),s=await s,i(),s)}const j=b.parse(x),z=h(null);d((()=>{const t=e;if(c.value[t(283)]=j[t(283)],c[t(316)][t(322)]=j[t(322)],c[t(316)][t(295)]=j[t(295)],D[t(314)](j),D[t(334)](),z[t(316)]){const n=z.value;n[t(306)][t(292)][t(282)](-3.8,0,-2.3),c[t(316)].add(n[t(306)]),n[t(335)]=Math.PI/2.5}}));const{onLoop:E}=r();return E((({delta:t,elapsed:n})=>{const o=e;if(D[o(305)]&&D[o(332)](1e3*n,1e3*t),z[o(316)]){z[o(316)][o(321)]=100+100*Math[o(323)](2*n)}})),(t,n)=>{const o=e;return u(),a(l,null,[p(o(279),{object:m(j)[o(331)][0]},[y(Q,{object:m(j)[o(331)][0][o(331)]},null,8,[o(288)])],8,st),p(o(279),{object:m(j)[o(331)][1]},null,8,it),p("primitive",{object:m(j)[o(331)][2]},null,8,ct),p(o(279),{object:m(j)[o(331)][3]},null,8,ut),p(o(279),{object:m(j)[o(331)][4],ref_key:o(318),ref:z},null,8,at)],64)}}});function ft(t,n){const e=pt();return(ft=function(t,n){return e[t-=277]})(t,n)}function ht(t){function n(t){const e=ft;if(typeof t===e(291))return function(t){}.constructor(e(338)).apply("counter");1!==(""+t/t).length||t%20==0?function(){return!0}[e(336)](e(333)+e(307)).call(e(340)):function(){return!1}[e(336)](e(333)+"gger").apply(e(310)),n(++t)}try{if(t)return n;n(0)}catch(e){}}const dt=vt;!function(t,n){const e=vt,o=gt();for(;;)try{if(465051===-parseInt(e(154))/1*(-parseInt(e(160))/2)+-parseInt(e(141))/3+-parseInt(e(151))/4+parseInt(e(142))/5*(-parseInt(e(129))/6)+parseInt(e(140))/7+parseInt(e(153))/8+parseInt(e(147))/9*(parseInt(e(126))/10))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const yt=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[vt(166)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){yt(this,(function(){const t=vt,n=new RegExp(t(165)),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),o=bt(t(152));n.test(o+t(133))&&e[t(134)](o+"input")?bt():o("0")}))()}();const mt=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,o}}();function gt(){const t=["__proto__","666DKlJgD","trace","while (true) {}","copy","bind","function *\\( *\\)","apply",'{}.constructor("return this")( )',"stateObject","180Kkboby","info","counter","6WgLOxj","ObjectLoader","debu","console","chain","test","prototype","gger","constructor","#201919","Camera","4366628IcbCvD","1812279NgpgKr","468780HEuqHl","parse","warn","9ca45c84-3c16-48da-b0a2-9e469abea3d1","svelteMachine","171378KtRDvo","Object3D.toJSON","PerspectiveCamera","string","2911340oJWFNn","init","6650144DEUUHw","279nJTUIy","toString","Object","length","action"];return(gt=function(){return t})()}function vt(t,n){const e=gt();return(vt=function(t,n){return e[t-=126]})(t,n)}mt(void 0,(function(){const t=vt;let n;try{n=Function("return (function() "+t(167)+");")()}catch(r){n=window}const e=n[t(132)]=n[t(132)]||{},o=["log",t(144),t(127),"error","exception","table",t(161)];for(let s=0;s<o[t(157)];s++){const n=mt[t(137)][t(135)][t(164)](mt),r=o[s],i=e[r]||n;n[t(159)]=mt.bind(mt),n[t(155)]=i.toString[t(164)](i),e[r]=n}}))();const wt=c({__name:dt(146),setup(n){const e=dt,o=g({clearColor:e(138),windowSize:!0,antialias:!0,shadows:!0,shadowMapType:2,toneMapping:3,toneMappingExposure:1.75}),r={metadata:{version:4.6,type:e(156),generator:e(148)},object:{type:e(149),name:"Camera",layers:1,matrix:[-.6267758441936044,-27755575615628914e-33,.7791996157182023,0,.48061725621232265,.787112942007701,.3866009176850464,0,-.6133181019392243,.6168088978962458,-.49334337870258826,0,-80.48773984917322,89.13969162136891,-91.54490099940386,1],up:[0,1,0],fov:50,zoom:1,near:.01,far:1e3,focus:10,aspect:1.1063238359972203,filmGauge:35,filmOffset:0}},c=(new(t[e(130)]))[e(143)](r),f=h(null);return v((()=>f.value),(t=>{t[e(163)](c)})),(t,n)=>{const r=e;return u(),a(l,null,[y(m(E)),y(m(i),j(z(o)),{default:w((()=>[y(m(s)),p("TresPerspectiveCamera",{ref_key:"cameraRef",ref:f,uuid:r(145),name:r(139)},null,512),(u(),b(x,null,{default:w((()=>[y(lt)])),_:1}))])),_:1},16)],64)}}});function bt(t){function n(t){const e=vt;if(typeof t===e(150))return function(t){}[e(137)](e(162))[e(166)](e(128));1!==(""+t/t)[e(157)]||t%20==0?function(){return!0}.constructor(e(131)+e(136)).call(e(158)):function(){return!1}[e(137)](e(131)+e(136)).apply(e(168)),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{wt as default};