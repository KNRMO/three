import{p as n,$ as t,d as o}from"./@tresjs.OrqGCbtj1724983368286.js";import{j as e,bZ as r,bX as i,c7 as c}from"./three.p-9BQwc31724983368286.js";import{d as a,e as u,o as s,f,g as l,J as v,j as p,u as d,al as h,m as g}from"./@vue.Q1VpS3901724983368286.js";import"./tweakpane.yHWGBmom1724983368286.js";import"./@vueuse.n6I5WvfU1724983368286.js";const m=x;function x(n,t){const o=b();return(x=function(n,t){return o[n-=485]})(n,t)}!function(n,t){const o=x,e=b();for(;;)try{if(386887===parseInt(o(510))/1*(parseInt(o(486))/2)+parseInt(o(492))/3+parseInt(o(530))/4*(-parseInt(o(519))/5)+-parseInt(o(509))/6+-parseInt(o(506))/7*(-parseInt(o(524))/8)+parseInt(o(493))/9*(-parseInt(o(491))/10)+parseInt(o(522))/11*(parseInt(o(526))/12))break;e.push(e.shift())}catch(r){e.push(e.shift())}}();const w=function(){let n=!0;return function(t,o){const e=n?function(){if(o){const n=o[x(490)](t,arguments);return o=null,n}}:function(){};return n=!1,e}}();!function(){w(this,(function(){const n=x,t=new RegExp(n(494)),o=new RegExp(n(513),"i"),e=k(n(514));t[n(527)](e+n(505))&&o[n(527)](e+n(485))?k():e("0")}))()}();const y=function(){let n=!0;return function(t,o){const e=n?function(){if(o){const n=o[x(490)](t,arguments);return o=null,n}}:function(){};return n=!1,e}}();function b(){const n=["init","log","console","stateObject","lightEffect","75685VmfMwC","render","innerWidth","1400377hWsBhy","constructor","2222008UdqcfE","addPass","84LUBqHD","test","trace","call","136vyzTuU","input","333012lhnDSU","debu","prototype","__proto__","apply","36070OSlvba","107631qLbViP","1791uxvldv","function *\\( *\\)","toString","uniforms","string",'{}.constructor("return this")( )',"length","iTime","info","return (function() ","while (true) {}","value","chain","14kfrwxQ","warn","bind","178176RteEyj","1XIwfEG","exception","action","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)"];return(b=function(){return n})()}y(void 0,(function(){const n=x;let t;try{t=Function(n(502)+n(498)+");")()}catch(r){t=window}const o=t[n(516)]=t.console||{},e=[n(515),n(507),n(501),"error",n(511),"table",n(528)];for(let i=0;i<e[n(499)];i++){const t=y.constructor[n(488)].bind(y),r=e[i],c=o[r]||t;t[n(489)]=y[n(508)](y),t[n(495)]=c.toString[n(508)](c),o[r]=t}}))();const I=a({__name:m(518),setup(o){const a=m,{camera:u,renderer:s,scene:f,sizes:l}=n(),{onLoop:v,onAfterLoop:p}=t(),d={uniforms:{iResolution:{type:"v2",value:new e(window[a(521)],window.innerHeight)},iTime:{type:"f",value:null},tDiffuse:{value:null}},vertexShader:"varying vec2 vUv;\nvoid main(){\n\tvec4 mvPosition=modelViewMatrix*vec4(position,1.);\n\tgl_Position=projectionMatrix*mvPosition;\n\tvUv=uv;\n}",fragmentShader:"uniform vec2 iResolution;\nuniform float iTime;\nvarying vec2 vUv;\nuniform sampler2D tDiffuse;\nfloat rand(float x)\n{\n\treturn fract(sin(x)*75154.32912);\n}\n\nfloat rand3d(vec3 x)\n{\n\treturn fract(375.10297*sin(dot(x,vec3(103.0139,227.0595,31.05914))));\n}\n\nfloat noise(float x)\n{\n\tfloat i=floor(x);\n\tfloat a=rand(i),b=rand(i+1.);\n\tfloat f=x-i;\n\treturn mix(a,b,f);\n}\n\nfloat perlin(float x)\n{\n\tfloat r=0.,s=1.,w=1.;\n\tfor(int i=0;i<6;i++){\n\t\ts*=2.;\n\t\tw*=.5;\n\t\tr+=w*noise(s*x);\n\t}\n\treturn r;\n}\n\nfloat noise3d(vec3 x)\n{\n\tvec3 i=floor(x);\n\tfloat i000=rand3d(i+vec3(0.,0.,0.)),i001=rand3d(i+vec3(0.,0.,1.));\n\tfloat i010=rand3d(i+vec3(0.,1.,0.)),i011=rand3d(i+vec3(0.,1.,1.));\n\tfloat i100=rand3d(i+vec3(1.,0.,0.)),i101=rand3d(i+vec3(1.,0.,1.));\n\tfloat i110=rand3d(i+vec3(1.,1.,0.)),i111=rand3d(i+vec3(1.,1.,1.));\n\tvec3 f=x-i;\n\treturn mix(mix(mix(i000,i001,f.z),mix(i010,i011,f.z),f.y),\n\tmix(mix(i100,i101,f.z),mix(i110,i111,f.z),f.y),f.x);\n}\n\nfloat perlin3d(vec3 x)\n{\n\tfloat r=0.;\n\tfloat w=1.,s=1.;\n\tfor(int i=0;i<5;i++){\n\t\tw*=.5;\n\t\ts*=2.;\n\t\tr+=w*noise3d(s*x);\n\t}\n\treturn r;\n}\n\nfloat f(float y)\n{\n\tfloat w=.4;// width of strike\n\treturn w*(perlin(2.*y)-.5);\n}\n\nfloat plot(vec2 p,float d,bool thicker)\n{\n\tif(thicker)d+=5.*abs(f(p.y+.001)-f(p.y));\n\treturn smoothstep(d,0.,abs(f(p.y)-p.x));\n}\n\nfloat cloud(vec2 uv,float speed,float scale,float cover)\n{\n\tfloat c=perlin3d(vec3(uv*scale,iTime*speed*2.));\n\treturn max(0.,c-(1.-cover));\n}\n\nfloat mountain(vec2 uv,float scale,float offset,float h1,float h2)\n{\n\tfloat h=h1+perlin(scale*uv.x+offset)*(h2-h1);\n\treturn smoothstep(h,h+.01,uv.y);\n}\n\nvec3 render(vec2 uv)\n{\n\tfloat x=iTime+.1;\n\t\n\tfloat m=.25;// max duration of strike\n\tfloat i=floor(x/m);\n\tfloat f=x/m-i;\n\tfloat k=.4;// frequency of strikes\n\tfloat n=noise(i);\n\tfloat t=ceil(n-k);// occurrence\n\tfloat d=max(0.,n-k)/(1.-k);// duration\n\tfloat o=ceil(t-f-(1.-d));// occurrence with duration\n\tfloat gt=.1;// glare duration\n\tfloat go=ceil(t-f-(1.-gt));// glare occurrence\n\t\n\tfloat lightning=0.;\n\tfloat light=0.;\n\tfloat glare=0.;\n\t\n\tif(o==1.){\n\t\tvec2 uv2=uv;\n\t\tuv2.y+=i*2.;// select type of lightning\n\t\tfloat p=(noise(i+10.)-.5)*2.;// position of lightning\n\t\tuv2.x-=p;\n\t\t\n\t\tfloat strike=plot(uv2,.01,true);\n\t\tfloat glow=plot(uv2,.04,false);\n\t\tfloat glow2=plot(uv2,1.5,false);\n\t\t\n\t\tlightning=strike*.4+glow*.15;\n\t\t\n\t\tfloat h=noise(i+5.);// height\n\t\tlightning*=smoothstep(h,h+.05,uv.y+perlin(1.2*uv.x+4.*h)*.03);\n\t\tlightning+=glow2*.3;\n\t\tlight=smoothstep(5.,0.,abs(uv.x-p));\n\t\tglare=go*light;\n\t}\n\t\n\tvec3 clouds=\n\tvec3(.5,.7,1.)*mix(.6,.9,cloud(uv,.2,.1,1.))+\n\tvec3(.7,.8,1.)*.6*cloud(uv*vec2(.5,1.),.06,.8,.8)+\n\tvec3(.9,.9,1.)*.3*cloud(uv*vec2(.1,1.),.08,5.5,.6)+\n\tvec3(1.,1.,1.)*.4*cloud(uv*vec2(.1,1.),.07,10.,.5);\n\t\n\tfloat horizon=mountain(uv,.8,9.,.3,.6);\n\tvec3 terrain=mix(vec3(.25,.3,.3)*.5,1.5*vec3(.15,.2,.3),\n\t1.-(1.-mountain(uv,.8,3.,.2,.4))*.5-\n\t(1.-mountain(uv,.8,17.5,.05,.25))*.5);\n\t\n\tvec3 background=mix(terrain,clouds,horizon);\n\tbackground*=(.2+light*.5);\n\tvec4 previousPassColor=texture2D(tDiffuse,vUv);\n\treturn vec3(background+lightning+previousPassColor.xyz);\n}\n\nvoid main()\n{\n\tvec2 uv=vUv;\n\tuv.x=2.*uv.x-1.;\n\tuv.x*=iResolution.x/iResolution.y;\n\t\n\tgl_FragColor=vec4(render(uv),1.);\n}"},h=new r(s[a(504)]);h[a(525)](new i(f[a(504)],u[a(504)]));const g=new c(d);return h.addPass(g),v((({elapsed:n})=>{const t=a;g[t(496)][t(500)][t(504)]=.3*n})),p((()=>{h[a(520)]()})),(n,t)=>null}});function k(n){function t(n){const o=x;if(typeof n===o(497))return function(n){}[o(523)](o(503)).apply("counter");1!==(""+n/n)[o(499)]||n%20==0?function(){return!0}[o(523)](o(487)+"gger")[o(529)](o(512)):function(){return!1}[o(523)]("debugger")[o(490)](o(517)),t(++n)}try{if(n)return t;t(0)}catch(o){}}function _(n,t){const o=C();return(_=function(n,t){return o[n-=398]})(n,t)}const j=_;!function(n,t){const o=_,e=C();for(;;)try{if(831677===-parseInt(o(437))/1+parseInt(o(436))/2+parseInt(o(422))/3*(parseInt(o(411))/4)+-parseInt(o(413))/5*(-parseInt(o(425))/6)+parseInt(o(421))/7*(parseInt(o(403))/8)+parseInt(o(400))/9+-parseInt(o(399))/10)break;e.push(e.shift())}catch(r){e.push(e.shift())}}();const z=function(){let n=!0;return function(t,o){const e=n?function(){if(o){const n=o[_(424)](t,arguments);return o=null,n}}:function(){};return n=!1,e}}();!function(){z(this,(function(){const n=_,t=new RegExp("function *\\( *\\)"),o=new RegExp(n(429),"i"),e=L("init");t.test(e+n(404))&&o[n(415)](e+n(430))?L():e("0")}))()}();const T=function(){let n=!0;return function(t,o){const e=n?function(){if(o){const n=o.apply(t,arguments);return o=null,n}}:function(){};return n=!1,e}}();T(void 0,(function(){const n=_,t=function(){const n=_;let t;try{t=Function(n(428)+'{}.constructor("return this")( ));')()}catch(o){t=window}return t}(),o=t[n(420)]=t.console||{},e=[n(409),n(435),n(433),n(438),n(398),n(439),n(412)];for(let r=0;r<e[n(426)];r++){const t=T[n(405)].prototype[n(407)](T),i=e[r],c=o[i]||t;t.__proto__=T[n(407)](T),t[n(423)]=c[n(423)][n(407)](c),o[i]=t}}))();const R={ref:j(408),position:[600,750,-1221],fov:45,near:1,far:1e4},E=v(j(417),{color:"#ffffff"},null,-1),U=v(j(434),{position:[400,400,400],intensity:1,color:j(432)},null,-1);function C(){const n=["1184208BVXoTo","error","table","exception","9228210DjuljG","8046963keyoRQ","string","action","40YUFEHm","chain","constructor","#000000","bind","perspectiveCameraRef","log","counter","3181292QWjwSJ","trace","1804865zVtkoe","TresCanvas","test","stateObject","TresAmbientLight","debu","lightning","console","1242311SjqNKs","3YpCnXG","toString","apply","6rEThRZ","length","call","return (function() ","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","input","gger","red","info","TresDirectionalLight","warn","1876XLecBT"];return(C=function(){return n})()}const D=a({__name:j(419),setup(n){const t=j,e={clearColor:t(406),shadows:!0,alpha:!1,useLegacyLights:!0};return(n,r)=>{const i=u(t(414));return s(),f(i,g(e,{"window-size":""}),{default:l((()=>[v("TresPerspectiveCamera",R,null,512),p(d(o)),E,U,(s(),f(h,null,{default:l((()=>[p(I)])),_:1}))])),_:1},16)}}});function L(n){function t(n){const o=_;if(typeof n===o(401))return function(n){}.constructor("while (true) {}")[o(424)](o(410));1!==(""+n/n)[o(426)]||n%20==0?function(){return!0}[o(405)](o(418)+o(431))[o(427)](o(402)):function(){return!1}[o(405)]("debugger")[o(424)](o(416)),t(++n)}try{if(n)return t;t(0)}catch(o){}}export{D as default};
