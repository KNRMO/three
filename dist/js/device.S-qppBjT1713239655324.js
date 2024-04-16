import{az as v,bL as x,bH as w,bV as b,bK as g,aH as h,ax as P}from"./vendor.DUm4xHeP1713239655324.js";import{m as M}from"./BufferGeometryUtils.7ke0NhHA1713239655324.js";import{R as T,E as u,S}from"./EffectComposer.3U8N5E5Z1713239655324.js";import{U as y}from"./UnrealBloomPass.JSeDpQ3G1713239655324.js";import{O as U}from"./OutputPass.n3Zlods_1713239655324.js";const C="varying vec2 vUv;\nvoid main(){\n	vUv=uv;\n	gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);\n}",B="uniform sampler2D baseTexture;\nuniform sampler2D bloomTexture;\nvarying vec2 vUv;\nvoid main(){\n	gl_FragColor=(texture2D(baseTexture,vUv)+vec4(1.)*texture2D(bloomTexture,vUv));\n}";let p=new v("#0fb1fb");const D=new x({color:p,transparent:!0,opacity:.3}),d=new w({color:new v(p),depthTest:!0,transparent:!0}),H=o=>{const s=[];o.traverse(e=>{e.isMesh&&(s.push(e.geometry),e.material=D)});const t=M(s),i=new b(t,Math.PI*6.137),a=new g(i);return d.opacity=1,a.material=d,a},m={threshold:0,strength:.972,radius:.21},O=(o,s,t,i,a)=>{const e=new T(o,s),c=new y(new h(i,a),m.strength,m.radius,m.threshold),r=new u(t);r.renderToScreen=!1,r.addPass(e),r.addPass(c);const l=new S(new P({uniforms:{baseTexture:{value:null},bloomTexture:{value:r.renderTarget2.texture}},vertexShader:C,fragmentShader:B,defines:{}}),"baseTexture");l.needsSwap=!0;const f=new U,n=new u(t);return n.addPass(e),n.addPass(l),n.addPass(f),{finalComposer:n,effectComposer:r,renderScene:e,bloomPass:c}};export{H as r,O as u};