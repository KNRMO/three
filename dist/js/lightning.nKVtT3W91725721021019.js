import{p as n,$ as t,d as o}from"./@tresjs.bIWdfO9a1725721021019.js";import{j as e,bY as i,bW as r,c6 as c}from"./three.a9V66irq1725721021019.js";import{d as a,e as u,o as s,f,g as l,L as v,j as p,u as d,al as h,m as g}from"./@vue._6MD2XyK1725721021019.js";import"./tweakpane.yHWGBmom1725721021019.js";import"./@vueuse.Ex-1AOlz1725721021019.js";!function(n,t){const o=w,e=y();for(;;)try{if(665664===parseInt(o(240))/1*(parseInt(o(223))/2)+-parseInt(o(248))/3+parseInt(o(230))/4+-parseInt(o(244))/5*(parseInt(o(218))/6)+-parseInt(o(226))/7+-parseInt(o(246))/8*(-parseInt(o(253))/9)+parseInt(o(234))/10)break;e.push(e.shift())}catch(i){e.push(e.shift())}}();const m=function(){let n=!0;return function(t,o){const e=n?function(){if(o){const n=o[w(239)](t,arguments);return o=null,n}}:function(){};return n=!1,e}}();!function(){m(this,(function(){const n=w,t=new RegExp(n(252)),o=new RegExp(n(256),"i"),e=I("init");t[n(236)](e+n(250))&&o[n(236)](e+n(243))?I():e("0")}))()}();const x=function(){let n=!0;return function(t,o){const e=n?function(){if(o){const n=o[w(239)](t,arguments);return o=null,n}}:function(){};return n=!1,e}}();function w(n,t){const o=y();return(w=function(n,t){return o[n-=217]})(n,t)}function y(){const n=["innerHeight","warn",'{}.constructor("return this")( )',"269192hiEAxL","exception","action","prototype","24023360Mjiczf","call","test","constructor","uniforms","apply","20367GfZQYI","info","value","input","595bslgZV","log","2512CfABhT","iTime","424956NRtCel","gger","chain","console","function *\\( *\\)","7551uRgnks","error","return (function() ","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","toString","__proto__","39696IfTnBD","string","length","table","render","8VQOjGp","bind","debu","8539496RJNVvd"];return(y=function(){return n})()}x(void 0,(function(){const n=w,t=function(){const n=w;let t;try{t=Function(n(255)+n(229)+");")()}catch(o){t=window}return t}(),o=t[n(251)]=t.console||{},e=[n(245),n(228),n(241),n(254),n(231),n(221),"trace"];for(let i=0;i<e[n(220)];i++){const t=x[n(237)][n(233)][n(224)](x),r=e[i],c=o[r]||t;t[n(217)]=x.bind(x),t.toString=c[n(257)].bind(c),o[r]=t}}))();const b=a({__name:"lightEffect",setup(o){const a=w,{camera:u,renderer:s,scene:f,sizes:l}=n(),{onLoop:v,onAfterLoop:p}=t(),d={uniforms:{iResolution:{type:"v2",value:new e(window.innerWidth,window[a(227)])},iTime:{type:"f",value:null},tDiffuse:{value:null}},vertexShader:"varying vec2 vUv;\nvoid main(){\n\tvec4 mvPosition=modelViewMatrix*vec4(position,1.);\n\tgl_Position=projectionMatrix*mvPosition;\n\tvUv=uv;\n}",fragmentShader:"uniform vec2 iResolution;\nuniform float iTime;\nvarying vec2 vUv;\nuniform sampler2D tDiffuse;\nfloat rand(float x)\n{\n\treturn fract(sin(x)*75154.32912);\n}\n\nfloat rand3d(vec3 x)\n{\n\treturn fract(375.10297*sin(dot(x,vec3(103.0139,227.0595,31.05914))));\n}\n\nfloat noise(float x)\n{\n\tfloat i=floor(x);\n\tfloat a=rand(i),b=rand(i+1.);\n\tfloat f=x-i;\n\treturn mix(a,b,f);\n}\n\nfloat perlin(float x)\n{\n\tfloat r=0.,s=1.,w=1.;\n\tfor(int i=0;i<6;i++){\n\t\ts*=2.;\n\t\tw*=.5;\n\t\tr+=w*noise(s*x);\n\t}\n\treturn r;\n}\n\nfloat noise3d(vec3 x)\n{\n\tvec3 i=floor(x);\n\tfloat i000=rand3d(i+vec3(0.,0.,0.)),i001=rand3d(i+vec3(0.,0.,1.));\n\tfloat i010=rand3d(i+vec3(0.,1.,0.)),i011=rand3d(i+vec3(0.,1.,1.));\n\tfloat i100=rand3d(i+vec3(1.,0.,0.)),i101=rand3d(i+vec3(1.,0.,1.));\n\tfloat i110=rand3d(i+vec3(1.,1.,0.)),i111=rand3d(i+vec3(1.,1.,1.));\n\tvec3 f=x-i;\n\treturn mix(mix(mix(i000,i001,f.z),mix(i010,i011,f.z),f.y),\n\tmix(mix(i100,i101,f.z),mix(i110,i111,f.z),f.y),f.x);\n}\n\nfloat perlin3d(vec3 x)\n{\n\tfloat r=0.;\n\tfloat w=1.,s=1.;\n\tfor(int i=0;i<5;i++){\n\t\tw*=.5;\n\t\ts*=2.;\n\t\tr+=w*noise3d(s*x);\n\t}\n\treturn r;\n}\n\nfloat f(float y)\n{\n\tfloat w=.4;// width of strike\n\treturn w*(perlin(2.*y)-.5);\n}\n\nfloat plot(vec2 p,float d,bool thicker)\n{\n\tif(thicker)d+=5.*abs(f(p.y+.001)-f(p.y));\n\treturn smoothstep(d,0.,abs(f(p.y)-p.x));\n}\n\nfloat cloud(vec2 uv,float speed,float scale,float cover)\n{\n\tfloat c=perlin3d(vec3(uv*scale,iTime*speed*2.));\n\treturn max(0.,c-(1.-cover));\n}\n\nfloat mountain(vec2 uv,float scale,float offset,float h1,float h2)\n{\n\tfloat h=h1+perlin(scale*uv.x+offset)*(h2-h1);\n\treturn smoothstep(h,h+.01,uv.y);\n}\n\nvec3 render(vec2 uv)\n{\n\tfloat x=iTime+.1;\n\t\n\tfloat m=.25;// max duration of strike\n\tfloat i=floor(x/m);\n\tfloat f=x/m-i;\n\tfloat k=.4;// frequency of strikes\n\tfloat n=noise(i);\n\tfloat t=ceil(n-k);// occurrence\n\tfloat d=max(0.,n-k)/(1.-k);// duration\n\tfloat o=ceil(t-f-(1.-d));// occurrence with duration\n\tfloat gt=.1;// glare duration\n\tfloat go=ceil(t-f-(1.-gt));// glare occurrence\n\t\n\tfloat lightning=0.;\n\tfloat light=0.;\n\tfloat glare=0.;\n\t\n\tif(o==1.){\n\t\tvec2 uv2=uv;\n\t\tuv2.y+=i*2.;// select type of lightning\n\t\tfloat p=(noise(i+10.)-.5)*2.;// position of lightning\n\t\tuv2.x-=p;\n\t\t\n\t\tfloat strike=plot(uv2,.01,true);\n\t\tfloat glow=plot(uv2,.04,false);\n\t\tfloat glow2=plot(uv2,1.5,false);\n\t\t\n\t\tlightning=strike*.4+glow*.15;\n\t\t\n\t\tfloat h=noise(i+5.);// height\n\t\tlightning*=smoothstep(h,h+.05,uv.y+perlin(1.2*uv.x+4.*h)*.03);\n\t\tlightning+=glow2*.3;\n\t\tlight=smoothstep(5.,0.,abs(uv.x-p));\n\t\tglare=go*light;\n\t}\n\t\n\tvec3 clouds=\n\tvec3(.5,.7,1.)*mix(.6,.9,cloud(uv,.2,.1,1.))+\n\tvec3(.7,.8,1.)*.6*cloud(uv*vec2(.5,1.),.06,.8,.8)+\n\tvec3(.9,.9,1.)*.3*cloud(uv*vec2(.1,1.),.08,5.5,.6)+\n\tvec3(1.,1.,1.)*.4*cloud(uv*vec2(.1,1.),.07,10.,.5);\n\t\n\tfloat horizon=mountain(uv,.8,9.,.3,.6);\n\tvec3 terrain=mix(vec3(.25,.3,.3)*.5,1.5*vec3(.15,.2,.3),\n\t1.-(1.-mountain(uv,.8,3.,.2,.4))*.5-\n\t(1.-mountain(uv,.8,17.5,.05,.25))*.5);\n\t\n\tvec3 background=mix(terrain,clouds,horizon);\n\tbackground*=(.2+light*.5);\n\tvec4 previousPassColor=texture2D(tDiffuse,vUv);\n\treturn vec3(background+lightning+previousPassColor.xyz);\n}\n\nvoid main()\n{\n\tvec2 uv=vUv;\n\tuv.x=2.*uv.x-1.;\n\tuv.x*=iResolution.x/iResolution.y;\n\t\n\tgl_FragColor=vec4(render(uv),1.);\n}"},h=new i(s.value);h.addPass(new r(f[a(242)],u[a(242)]));const g=new c(d);return h.addPass(g),v((({elapsed:n})=>{const t=a;g[t(238)][t(247)][t(242)]=.3*n})),p((()=>{h[a(222)]()})),(n,t)=>null}});function I(n){function t(n){const o=w;if(typeof n===o(219))return function(n){}[o(237)]("while (true) {}")[o(239)]("counter");1!==(""+n/n).length||n%20==0?function(){return!0}[o(237)]("debu"+o(249))[o(235)](o(232)):function(){return!1}[o(237)](o(225)+o(249))[o(239)]("stateObject"),t(++n)}try{if(n)return t;t(0)}catch(o){}}function k(){const n=["call","log","#ffffff","table","exception","lightning","TresPerspectiveCamera","bind","385670pehqcM","debu","862936QCvWoW","#000000","13017240FDuHyP","input","102SQtPef","gger","12000830QBEYED","528113dHKeVr","init","constructor","while (true) {}","stateObject","perspectiveCameraRef","22uNAsIl","TresDirectionalLight","test","warn",'{}.constructor("return this")( )',"956120uDbIYZ","red","12Emgbnf","347487MkmrNg","21TuXnHG","toString","string","info","chain","return (function() ","length","__proto__","console","TresCanvas","apply"];return(k=function(){return n})()}const _=D;!function(n,t){const o=D,e=k();for(;;)try{if(749530===-parseInt(o(313))/1+-parseInt(o(283))/2*(parseInt(o(284))/3)+-parseInt(o(281))/4+-parseInt(o(304))/5*(parseInt(o(310))/6)+parseInt(o(285))/7*(-parseInt(o(306))/8)+parseInt(o(308))/9+-parseInt(o(312))/10*(-parseInt(o(276))/11))break;e.push(e.shift())}catch(i){e.push(e.shift())}}();const j=function(){let n=!0;return function(t,o){const e=n?function(){if(o){const n=o.apply(t,arguments);return o=null,n}}:function(){};return n=!1,e}}();!function(){j(this,(function(){const n=D,t=new RegExp("function *\\( *\\)"),o=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),e=A(n(271));t.test(e+n(289))&&o[n(278)](e+n(309))?A():e("0")}))()}();const z=function(){let n=!0;return function(t,o){const e=n?function(){if(o){const n=o[D(295)](t,arguments);return o=null,n}}:function(){};return n=!1,e}}();z(void 0,(function(){const n=D;let t;try{t=Function(n(290)+n(280)+");")()}catch(i){t=window}const o=t[n(293)]=t.console||{},e=[n(297),n(279),n(288),"error",n(300),n(299),"trace"];for(let r=0;r<e[n(291)];r++){const t=z[n(272)].prototype.bind(z),i=e[r],c=o[i]||t;t[n(292)]=z.bind(z),t.toString=c[n(286)][n(303)](c),o[i]=t}}))();const R={ref:_(275),position:[600,750,-1221],fov:45,near:1,far:1e4},T=v("TresAmbientLight",{color:_(298)},null,-1),C=v(_(277),{position:[400,400,400],intensity:1,color:_(282)},null,-1);function D(n,t){const o=k();return(D=function(n,t){return o[n-=271]})(n,t)}const P=a({__name:_(301),setup(n){const t=_,e={clearColor:t(307),shadows:!0,alpha:!1,useLegacyLights:!0};return(n,i)=>{const r=t,c=u(r(294));return s(),f(c,g(e,{"window-size":""}),{default:l((()=>[v(r(302),R,null,512),p(d(o)),T,C,(s(),f(h,null,{default:l((()=>[p(b)])),_:1}))])),_:1},16)}}});function A(n){function t(n){const o=D;if(typeof n===o(287))return function(n){}[o(272)](o(273))[o(295)]("counter");1!==(""+n/n).length||n%20==0?function(){return!0}[o(272)](o(305)+o(311))[o(296)]("action"):function(){return!1}.constructor(o(305)+o(311))[o(295)](o(274)),t(++n)}try{if(n)return t;t(0)}catch(o){}}export{P as default};
