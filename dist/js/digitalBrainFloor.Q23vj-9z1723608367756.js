import{bU as t,bS as n,ab as o,ad as e}from"./three.X8FgZbPT1723608367756.js";import{d as r}from"./@tresjs.zzLYikgQ1723608367756.js";import{P as s}from"./tweakpane.yHWGBmom1723608367756.js";import{_ as i}from"./reflectorMesh.vue_vue_type_script_setup_true_lang.K-2dzr6I1723608367756.js";import{_ as a}from"./index.pfTb-AUb1723608367756.js";import{l as u}from"./util.RJ7JEWX81723608367756.js";import{_ as c}from"./cloudPoints.vue_vue_type_script_setup_true_lang.FasdFovR1723608367756.js";import{_ as l,a as p}from"./bubblesEffect.vue_vue_type_script_setup_true_lang.FuCFwhqn1723608367756.js";import{d as f,r as m,a4 as d,e as _,o as g,D as j,j as h,u as b,g as y,aj as w,ak as v,J as x,f as I,m as k,I as B,al as C,F as S}from"./@vue.Q1VpS3901723608367756.js";import"./@vueuse.QL9lULrD1723608367756.js";import"./index.pa1BMC1l1723608367756.js";import"./@fesjs.v28izi2B1723608367756.js";import"./vue-router.Hmvx0_Do1723608367756.js";import"./lodash-es.nFpJXAf-1723608367756.js";import"./@qlin.yHhFDldE1723608367756.js";import"./pinia.KbXOifkD1723608367756.js";import"./@floating-ui.BPbuo5Gx1723608367756.js";import"./@juggle.7yjBMqoW1723608367756.js";import"./chalk.sAH7iSuz1723608367756.js";/* empty css                                 */import"./iconify-icon.l-H2-fnN1723608367756.js";import"./@iconify.9PoCakEb1723608367756.js";import"./utils.Z2QtXkfK1723608367756.js";import"./default.vue_vue_type_script_setup_true_lang.dcCsrAON1723608367756.js";import"./three-mesh-ui.module.MU4ZfWcU1723608367756.js";function z(){const t=["opacity","log","input","57ZmmpVq","model","713325uddubg","TresAmbientLight","TresCanvas","脑轮廓颜色","init","counter","error","debu","constructor",'{}.constructor("return this")( )',"13365PBexNO","250252UbCxtf","3427008cftrHO","apply","__proto__","3285890byLwJi","#fff","function *\\( *\\)","#9e00af","chain","test","while (true) {}","warn","toString","addBinding","脑组织显示","console","color","info","TresGroup","3800QOMmWt","digitalBrainFloor","return (function() ","gger","string","bind","732972iwGnHv","脑轮廓显示","trace","点云透明度","2649969daqtWD","show","脑组织透明度","length","#84ccff"];return(z=function(){return t})()}function O(t,n){const o=z();return(O=function(t,n){return o[t-=156]})(t,n)}const T=O;!function(t,n){const o=O,e=z();for(;;)try{if(713296===parseInt(o(158))/1+-parseInt(o(194))/2+-parseInt(o(156))/3*(parseInt(o(169))/4)+parseInt(o(173))/5+parseInt(o(170))/6+-parseInt(o(198))/7+parseInt(o(188))/8*(parseInt(o(168))/9))break;e.push(e.shift())}catch(r){e.push(e.shift())}}();const J=function(){let t=!0;return function(n,o){const e=t?function(){if(o){const t=o[O(171)](n,arguments);return o=null,t}}:function(){};return t=!1,e}}();!function(){J(this,(function(){const t=O,n=new RegExp(t(175)),o=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),e=A(t(162));n[t(178)](e+t(177))&&o.test(e+t(205))?A():e("0")}))()}();const M=function(){let t=!0;return function(n,o){const e=t?function(){if(o){const t=o[O(171)](n,arguments);return o=null,t}}:function(){};return t=!1,e}}();M(void 0,(function(){const t=O;let n;try{n=Function(t(190)+t(167)+");")()}catch(r){n=window}const o=n[t(184)]=n[t(184)]||{},e=[t(204),t(180),t(186),t(164),"exception","table",t(196)];for(let s=0;s<e[t(201)];s++){const n=M[t(166)].prototype[t(193)](M),r=e[s],i=o[r]||n;n[t(172)]=M.bind(M),n.toString=i[t(181)][t(193)](i),o[r]=n}}))();const P=x("TresPerspectiveCamera",{position:[100,400,500],fov:45,near:.1,far:1e4,"look-at":[0,0,0]},null,-1),R=x(T(159),{intensity:.5},null,-1),Z={position:[0,120,0]},q=f({__name:T(189),async setup(f){const z=T;let O,J;const M=m({mirrorSize:500,gridSize:490,mirrorColor:"#efefef",divisions:10,colorCenterLine:"#444444",colorGrid:"#888888"}),q=m({color:z(174),show:!0,opacity:1}),A=new s({title:"参数"});A[z(182)](q,z(199),{label:"点云显示"}),A.addBinding(q,z(185),{label:"点云颜色"}),A[z(182)](q,z(203),{label:z(197),min:0,max:1,step:.1});const E=m({color:z(202),show:!0,opacity:1});A[z(182)](E,z(199),{label:z(195)}),A.addBinding(E,z(185),{label:z(161)}),A.addBinding(E,z(203),{label:"脑轮廓透明度",min:0,max:1,step:.1});const F=m({color:z(176),show:!0,opacity:1});A.addBinding(F,z(199),{label:z(183)}),A[z(182)](F,z(185),{label:"脑组织颜色"}),A[z(182)](F,z(203),{label:z(200),min:0,max:1,step:.1});const G=new t,L=([O,J]=d((()=>u("./plugins/medical/model/brainparts.OBJ",G))),O=await O,J(),O),U=m({clearColor:"#201919",shadows:!0,alpha:!1,shadowMapType:n,outputColorSpace:o,toneMapping:e}),$=m({autoRotate:!0,autoRotateSpeed:2});return(t,n)=>{const o=z,e=_(o(160));return g(),j(S,null,[h(b(a)),h(e,k(U,{"window-size":""}),{default:y((()=>[P,h(b(r),w(v($)),null,16),R,x(o(187),Z,[q.show?(g(),I(c,k({key:0,model:b(L)},q),null,16,[o(157)])):B("",!0),(g(),I(C,null,{default:y((()=>[E.show?(g(),I(l,k({key:0,model:b(L)},E),null,16,[o(157)])):B("",!0)])),_:1})),F[o(199)]?(g(),I(p,k({key:1,model:b(L)},F),null,16,[o(157)])):B("",!0)]),h(i,w(v(M)),null,16)])),_:1},16)],64)}}});function A(t){function n(t){const o=O;if(typeof t===o(192))return function(t){}[o(166)](o(179))[o(171)](o(163));1!==(""+t/t).length||t%20==0?function(){return!0}[o(166)](o(165)+o(191)).call("action"):function(){return!1}.constructor("debugger")[o(171)]("stateObject"),n(++t)}try{if(t)return n;n(0)}catch(o){}}export{q as default};
