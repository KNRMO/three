import{$ as t,d as n}from"./@tresjs.iXEJQd7J1721298764655.js";import{Z as e,j as o}from"./three.0bBjBDi41721298764655.js";import{d as r,a1 as i,o as c,D as a,J as s,aj as u,ak as f,e as p,f as l,g as m,j as v,u as x,m as d}from"./@vue.Q1VpS3901721298764655.js";import"./tweakpane.yHWGBmom1721298764655.js";import"./@vueuse.hS-CVzal1721298764655.js";function h(){const t=["console","bind","trace","error","innerHeight","1887696xGUYkf","clientY","addEventListener","rayMarchingMaterial","toString","length","MeshRef","value","call","info","5808300yBUNZg","68988PSSUgK","16zDmxrz","clientX","59319KyENZa","test","init","innerWidth","248QNAHTv","TresMesh","TresTubeGeometryRef","u_mouse","apply","5YZPWKm","while (true) {}","string","action","debu","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","chain","return (function() ","gger","input","1235801OwNDzI","uniforms","constructor","u_time","41235dMdqbl",'{}.constructor("return this")( )',"warn","TresShaderMaterial","130914CegMWM"];return(h=function(){return t})()}const y=q;!function(t,n){const e=q,o=h();for(;;)try{if(173161===parseInt(e(258))/1+-parseInt(e(288))/2+parseInt(e(284))/3*(parseInt(e(259))/4)+-parseInt(e(270))/5*(-parseInt(e(294))/6)+parseInt(e(280))/7+-parseInt(e(265))/8*(-parseInt(e(261))/9)+-parseInt(e(257))/10)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const g=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){g(this,(function(){const t=q,n=new RegExp("function *\\( *\\)"),e=new RegExp(t(275),"i"),o=I(t(263));n[t(262)](o+t(276))&&e[t(262)](o+t(279))?I():o("0")}))()}();const _=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,o}}();_(void 0,(function(){const t=q;let n;try{n=Function(t(277)+t(285)+");")()}catch(r){n=window}const e=n.console=n[t(289)]||{},o=["log",t(286),t(256),t(292),"exception","table",t(291)];for(let i=0;i<o[t(252)];i++){const n=_[t(282)].prototype[t(290)](_),r=o[i],c=e[r]||n;n.__proto__=_[t(290)](_),n[t(251)]=c[t(251)][t(290)](c),e[r]=n}}))();const b=["rotation"],z={ref:y(267),args:[1e3,1e3]};function q(t,n){const e=h();return(q=function(t,n){return e[t-=248]})(t,n)}const w=r({__name:y(250),setup(n){const r=y,{onLoop:p,onAfterLoop:l}=t(),m={transparent:!0,depthWrite:!0,depthTest:!0,side:e,vertexShader:"varying vec2 vUv;\nvoid main(){\n\tgl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);\n\tvUv=uv;\n}",fragmentShader:"#ifdef GL_ES\nprecision mediump float;\n#endif\n\nuniform vec2 u_resolution;\nuniform vec3 u_mouse;\nuniform float u_time;\nvarying vec2 vUv;\nvec3 palette(float t){\n\tvec3 a=vec3(.5,.5,.5);\n\tvec3 b=vec3(.5,.5,.5);\n\tvec3 c=vec3(1.,1.,1.);\n\tvec3 d=vec3(.263,.416,.557);\n\t\n\treturn a+b*cos(6.28318*(c*t+d));\n}\n\nmat2 rot2D(float angle){\n\tfloat s=sin(angle);\n\tfloat c=cos(angle);\n\treturn mat2(c,-s,s,c);\n}\n\nfloat sdPyramid(vec3 p,float h)\n{\n\tfloat m2=h*h+.25;\n\t\n\tp.xz=abs(p.xz);\n\tp.xz=(p.z>p.x)?p.zx:p.xz;\n\tp.xz-=.5;\n\t\n\tvec3 q=vec3(p.z,h*p.y-.5*p.x,h*p.x+.5*p.y);\n\t\n\tfloat s=max(-q.x,0.);\n\tfloat t=clamp((q.y-.5*p.z)/(m2+.25),0.,1.);\n\t\n\tfloat a=m2*(q.x+s)*(q.x+s)+q.y*q.y;\n\tfloat b=m2*(q.x+.5*t)*(q.x+.5*t)+(q.y-m2*t)*(q.y-m2*t);\n\t\n\tfloat d2=min(q.y,-q.x*m2-q.y*.5)>0.?0.:min(a,b);\n\t\n\treturn sqrt((d2+q.z*q.z)/m2)*sign(max(q.z,-p.y));\n}\nfloat sdBoxFrame(vec3 p,vec3 b,float e)\n{\n\tp=abs(p)-b;\n\tvec3 q=abs(p+e)-e;\n\treturn min(min(\n\t\t\tlength(max(vec3(p.x,q.y,q.z),0.))+min(max(p.x,max(q.y,q.z)),0.),\n\t\t\tlength(max(vec3(q.x,p.y,q.z),0.))+min(max(q.x,max(p.y,q.z)),0.)),\n\t\t\tlength(max(vec3(q.x,q.y,p.z),0.))+min(max(q.x,max(q.y,p.z)),0.));\n\t\t}\n\t\tfloat map(vec3 p){\n\t\t\tp.z+=u_time*.4;\n\t\t\t\n\t\t\tp.xy=fract(p.xy)-.5;\n\t\t\tp.z=mod(p.z,.25)-.125;\n\t\t\tfloat box=sdBoxFrame(p*8.,vec3(.5,.3,.5),.025)/8.;\n\t\t\t// box=min(sdPyramid(p*15.,1.5)/15.,box);\n\t\t\treturn box;\n\t\t}\n\t\t\n\t\tvoid main(){\n\t\t\tvec2 uv=vUv-vec2(.5);\n\t\t\tvec2 m=(u_mouse.xy*2.-u_resolution.xy)/u_resolution.y;\n\t\t\t\n\t\t\t//变量初始化\n\t\t\tvec3 ro=vec3(0.,0.,-3.);\n\t\t\tvec3 rd=normalize(vec3(uv,1.));\n\t\t\tvec3 col=vec3(0);\n\t\t\t\n\t\t\tfloat t=0.;\n\t\t\t\n\t\t\t// 鼠标控制\n\t\t\t// if(u_mouse.z<0.)\n\t\t\t// m=vec2(cos(u_time*.2),sin(u_time*.2));\n\t\t\t\n\t\t\t// 光追\n\t\t\tint i;\n\t\t\tfor(i=0;i<80;i++){\n\t\t\t\tvec3 p=ro+rd*t;\n\t\t\t\t\n\t\t\t\tp.xy*=rot2D(t*.2);\n\t\t\t\tp.y+=sin(t*(1.)*.5)*.35;\n\t\t\t\t\n\t\t\t\tfloat d=map(p);\n\t\t\t\t\n\t\t\t\tt+=d;\n\t\t\t\t\n\t\t\t\tif(d<.001||t>100.)break;\n\t\t\t}\n\t\t\t\n\t\t\t// coloring\n\t\t\tcol=palette(t*.04+float(i)*.005);\n\t\t\t\n\t\t\tgl_FragColor=vec4(col,1.);\n\t\t}",uniforms:{u_resolution:{value:new o(window[r(264)],window.innerHeight)},u_mouse:{value:new o(0,0)},u_time:{value:0}}},v=window[r(264)]/2,x=window[r(293)]/2;let d=0,h=0;return document[r(249)]("mousemove",(function(t){const n=r;d=t[n(260)]-v,h=t[n(248)]-x}),!1),i((()=>{})),p((()=>{const t=r;m[t(281)][t(283)][t(254)]+=.01,m[t(281)][t(268)][t(254)]=new o(d,h)})),l((()=>{})),(t,n)=>{const e=r;return c(),a(e(266),{ref:e(253),rotation:[Math.PI/2,0,0]},[s("TresPlaneGeometry",z,null,512),s(e(287),u(f(m)),null,16)],8,b)}}});function I(t){function n(t){const e=q;if(typeof t===e(272))return function(t){}.constructor(e(271))[e(269)]("counter");1!==(""+t/t)[e(252)]||t%20==0?function(){return!0}[e(282)](e(274)+e(278))[e(255)](e(273)):function(){return!1}[e(282)](e(274)+e(278))[e(269)]("stateObject"),n(++t)}try{if(t)return n;n(0)}catch(e){}}const j=k;!function(t,n){const e=k,o=R();for(;;)try{if(576125===-parseInt(e(335))/1*(-parseInt(e(317))/2)+-parseInt(e(303))/3*(parseInt(e(301))/4)+parseInt(e(299))/5*(parseInt(e(307))/6)+parseInt(e(292))/7+parseInt(e(304))/8+parseInt(e(302))/9*(-parseInt(e(330))/10)+-parseInt(e(315))/11)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const M=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[k(312)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){M(this,(function(){const t=k,n=new RegExp(t(321)),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),o=P(t(326));n[t(338)](o+t(311))&&e.test(o+t(325))?P():o("0")}))()}();const T=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[k(312)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();function R(){const t=["prototype","counter","3642htMkDs","TresAmbientLight","call","while (true) {}","chain","apply","#ffffff","string","7808647woJeJb","action","104jaGmYR","info","stateObject","perspectiveCameraRef","function *\\( *\\)","console","TresDirectionalLight","toString","input","init","warn","bind","debu","2112430kYhjQo","TresAxesHelper","table","return (function() ","error","14654DaAkGR","#000000","length","test","2844723CkZMSn","trace","TresPerspectiveCamera","__proto__","rayMarchingVIew","constructor","log","5865HpxHeR","gger","12kzvZzg","45RbMoTI","178491pEjWjK","5122400abuRZm"];return(R=function(){return t})()}function k(t,n){const e=R();return(k=function(t,n){return e[t-=292]})(t,n)}T(void 0,(function(){const t=k;let n;try{n=Function(t(333)+'{}.constructor("return this")( ));')()}catch(r){n=window}const e=n[t(322)]=n[t(322)]||{},o=[t(298),t(327),t(318),t(334),"exception",t(332),t(293)];for(let i=0;i<o[t(337)];i++){const n=T[t(297)][t(305)][t(328)](T),r=o[i],c=e[r]||n;n[t(295)]=T[t(328)](T),n[t(324)]=c[t(324)][t(328)](c),e[r]=n}}))();const Z={ref:j(320),position:[0,500,0],fov:45,near:1,far:1e4},A=s(j(308),{color:"#ffffff"},null,-1),D=s(j(323),{position:[100,100,0],intensity:.5,color:j(313)},null,-1),S=s(j(331),{args:[1e3],position:[0,19,0]},null,-1),E=s("TresGridHelper",{args:[6e3,100],position:[0,19,0]},null,-1),L=r({__name:j(296),setup(t){const e=j,o={clearColor:e(336),shadows:!0,alpha:!1,useLegacyLights:!0},r={autoRotate:!1,enableDamping:!0};return(t,i)=>{const a=e,h=p("TresCanvas");return c(),l(h,d(o,{"window-size":""}),{default:m((()=>[s(a(294),Z,null,512),v(x(n),u(f(r)),null,16),A,D,v(w),S,E])),_:1},16)}}});function P(t){function n(t){const e=k;if(typeof t===e(314))return function(t){}.constructor(e(310))[e(312)](e(306));1!==(""+t/t).length||t%20==0?function(){return!0}[e(297)](e(329)+e(300))[e(309)](e(316)):function(){return!1}[e(297)]("debu"+e(300))[e(312)](e(319)),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{L as default};
