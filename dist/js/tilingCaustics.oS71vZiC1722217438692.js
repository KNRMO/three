var t=Object.defineProperty,n=Object.getOwnPropertySymbols,e=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(n,e,o)=>e in n?t(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o,i=(t,i)=>{for(var s in i||(i={}))e.call(i,s)&&r(t,s,i[s]);if(n)for(var s of n(i))o.call(i,s)&&r(t,s,i[s]);return t};import{$ as s,d as c}from"./@tresjs.vs5lCFs11722217438692.js";import{a6 as a}from"./three.ej3u8izI1722217438692.js";import{d as u,w as l,o as f,D as p,J as d,aj as v,ak as g,r as h,e as m,f as b,g as y,j as w,u as I,m as x}from"./@vue.Q1VpS3901722217438692.js";import{P as _}from"./tweakpane.yHWGBmom1722217438692.js";import"./@vueuse.mG9rDBoo1722217438692.js";const S=k;!function(t,n){const e=k,o=T();for(;;)try{if(195423===parseInt(e(290))/1+-parseInt(e(279))/2*(-parseInt(e(313))/3)+-parseInt(e(286))/4+-parseInt(e(305))/5+-parseInt(e(283))/6*(-parseInt(e(287))/7)+-parseInt(e(298))/8+-parseInt(e(318))/9*(-parseInt(e(294))/10))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const j=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,o}}();function T(){const t=["7XvrVBp","value","tilingCaustics","220965ISCXOp","exception","brightness","debu","230HeiPNp","TresShaderMaterial","backgroundColor","toString","589696oIhssH","console",'{}.constructor("return this")( )',"log","color","while (true) {}","bind","1595875otKFIC","uniforms","chain","apply","test","counter","init","DoubleSide","24DQzbzZ","error","constructor","length","function *\\( *\\)","102618ptFIAQ","info","Color","prototype","warn","TresMesh","22030rSvidP","flowSpeed","speed","#fff","2099946ggIvnw","TresPlaneGeometry","table","1332048PzPViO"];return(T=function(){return t})()}!function(){j(this,(function(){const t=k,n=new RegExp(t(317)),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),o=O(t(311));n.test(o+t(307))&&e[t(309)](o+"input")?O():o("0")}))()}();const C=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[k(308)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();C(void 0,(function(){const t=k,n=function(){const t=k;let n;try{n=Function("return (function() "+t(300)+");")()}catch(e){n=window}return n}(),e=n.console=n[t(299)]||{},o=[t(301),t(322),t(319),t(314),t(291),t(285),"trace"];for(let r=0;r<o.length;r++){const n=C[t(315)][t(321)][t(304)](C),i=o[r],s=e[i]||n;n.__proto__=C[t(304)](C),n.toString=s[t(297)][t(304)](s),e[i]=n}}))();const A=["rotation-x"],P=d(S(284),{args:[10,10]},null,-1);function k(t,n){const e=T();return(k=function(t,n){return e[t-=279]})(t,n)}const E=u({__name:S(289),props:{speed:{default:.478},backgroundColor:{},color:{default:S(282)},flowSpeed:{default:{x:.01,y:.01}},brightness:{default:1.5}},setup(t){const n=S,e=t,o={uniforms:{resolution:{type:"v2",value:{x:1,y:1}},backgroundColor:{type:"c",value:new(a[n(320)])(e[n(302)])},color:{type:"c",value:new(a[n(320)])(n(282))},speed:{type:"f",value:e[n(281)]},flowSpeed:{type:"v2",value:e[n(280)]},brightness:{type:"f",value:e[n(292)]},time:{type:"f",value:.1}},vertexShader:"// Examples of variables passed from vertex to fragment shader\nvarying vec2 vUv;\n\nvoid main(){\n\t// To pass variables to the fragment shader, you assign them here in the\n\t// main function. Traditionally you name the varying with vAttributeName\n\tvUv=uv;\n\t\n\t// This sets the position of the vertex in 3d space. The correct math is\n\t// provided below to take into account camera and object data.\n\tgl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);\n}",fragmentShader:"#define TAU 6.28318530718\n#define MAX_ITER 5\n\nuniform vec2 resolution;\nuniform vec3 backgroundColor;\nuniform vec3 color;\nuniform float speed;\nuniform vec2 flowSpeed;\nuniform float brightness;\nuniform float time;\n\nvarying vec2 vUv;\n\nvoid main(){\n\tvec2 uv=(vUv.xy+(time*flowSpeed))*resolution;\n\t\n\tvec2 p=mod(uv*TAU,TAU)-250.;\n\tvec2 i=vec2(p);\n\t\n\tfloat c=1.;\n\tfloat inten=.005;\n\t\n\tfor(int n=0;n<MAX_ITER;n++){\n\t\tfloat t=time*speed*(1.-(3.5/float(n+1)));\n\t\ti=p+vec2(cos(t-i.x)+sin(t+i.y),sin(t-i.y)+cos(t+i.x));\n\t\tc+=1./length(vec2(p.x/(sin(i.x+t)/inten),p.y/(cos(i.y+t)/inten)));\n\t}\n\t\n\tc/=float(MAX_ITER);\n\tc=1.17-pow(c,brightness);\n\t\n\tvec3 rgb=vec3(pow(abs(c),8.));\n\t\n\tgl_FragColor=vec4(rgb*color+backgroundColor,length(rgb)+.1);\n}",side:a[n(312)],transparent:!0,depthWrite:!1,depthTest:!0},{onLoop:r}=s();return r((({delta:t})=>{o[n(306)].time.value+=t})),l((()=>e),(()=>{const t=n;o[t(306)][t(281)].value=e[t(281)],o[t(306)].brightness.value=e[t(292)],o[t(306)][t(296)][t(288)]=new(a[t(320)])(e.color)}),{deep:!0}),(t,e)=>{const r=n;return f(),p(r(323),{"rotation-x":-Math.PI/2,"position-y":1},[P,d(r(295),v(g(o)),null,16)],8,A)}}});function O(t){function n(t){const e=k;if("string"==typeof t)return function(t){}[e(315)](e(303))[e(308)](e(310));1!==(""+t/t)[e(316)]||t%20==0?function(){return!0}[e(315)](e(293)+"gger").call("action"):function(){return!1}[e(315)](e(293)+"gger")[e(308)]("stateObject"),n(++t)}try{if(t)return n;n(0)}catch(e){}}const M=z;function z(t,n){const e=B();return(z=function(t,n){return e[t-=129]})(t,n)}!function(t,n){const e=z,o=B();for(;;)try{if(822662===-parseInt(e(151))/1+-parseInt(e(131))/2*(parseInt(e(141))/3)+-parseInt(e(135))/4+-parseInt(e(163))/5+-parseInt(e(169))/6*(-parseInt(e(168))/7)+parseInt(e(146))/8*(-parseInt(e(167))/9)+parseInt(e(142))/10)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const G=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[z(143)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){G(this,(function(){const t=z,n=new RegExp(t(165)),e=new RegExp(t(129),"i"),o=L(t(134));n[t(149)](o+t(138))&&e[t(149)](o+t(154))?L():o("0")}))()}();const R=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,o}}();R(void 0,(function(){const t=z,n=function(){const t=z;let n;try{n=Function(t(158)+'{}.constructor("return this")( ));')()}catch(e){n=window}return n}(),e=n.console=n.console||{},o=[t(140),t(162),t(150),"error",t(145),t(159),t(130)];for(let r=0;r<o[t(148)];r++){const n=R[t(133)].prototype[t(139)](R),i=o[r],s=e[i]||n;n[t(157)]=R[t(139)](R),n[t(164)]=s.toString[t(139)](s),e[i]=n}}))();const U=d("TresPerspectiveCamera",{position:[10,10,10]},null,-1),Z=d(M(160),{intensity:1},null,-1),X=d("TresGridHelper",{args:[10,10]},null,-1);function B(){const t=["warn","7414595xGjtZS","toString","function *\\( *\\)","#fff","196245oETSKr","7601587nVPLGB","6fIkpLo","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","trace","2336092IEuvWv","color","constructor","init","6043700HCGGXP","while (true) {}","counter","chain","bind","log","3ACuxmI","59377050ZiiLdi","apply","addBinding","exception","224wNSEMi","string","length","test","info","1428554YmOAjG","brightness","debu","input","gger","speed","__proto__","return (function() ","table","TresAmbientLight","action"];return(B=function(){return t})()}const F=u({__name:"tilingCaustics",setup(t){const n=M,e={clearColor:"#222"},o=h({color:n(166),speed:.1,brightness:1.5,flowSpeed:{x:.01,y:.01}}),r=new _({title:"参数",expanded:!0});return r.addBinding(o,n(132),{label:"颜色"}),r.addBinding(o,n(156),{label:"速度",min:.1,max:1,step:.1}),r[n(144)](o,n(152),{label:"亮度",min:.1,max:2,step:.1}),r[n(144)](o,"flowSpeed",{label:"流动速度",picker:"inline",expanded:!0,x:{min:.01,step:.02,max:.6,inverted:!0},y:{min:.01,step:.02,max:.6,inverted:!0}}),(t,n)=>{const r=m("TresCanvas");return f(),b(r,x(e,{"window-size":""}),{default:y((()=>[U,Z,w(I(c)),X,w(E,v(g(i({},o))),null,16)])),_:1},16)}}});function L(t){function n(t){const e=z;if(typeof t===e(147))return function(t){}.constructor(e(136))[e(143)](e(137));1!==(""+t/t)[e(148)]||t%20==0?function(){return!0}[e(133)]("debu"+e(155)).call(e(161)):function(){return!1}.constructor(e(153)+e(155))[e(143)]("stateObject"),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{F as default};