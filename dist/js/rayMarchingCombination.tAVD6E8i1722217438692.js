import{$ as n,d as t}from"./@tresjs.vs5lCFs11722217438692.js";import{Z as e,j as o}from"./three.ej3u8izI1722217438692.js";import{d as r,a1 as i,o as a,D as s,J as c,aj as u,ak as f,q as p,e as l,f as m,g as d,j as v,u as h,m as x}from"./@vue.Q1VpS3901722217438692.js";import"./tweakpane.yHWGBmom1722217438692.js";import"./@vueuse.mG9rDBoo1722217438692.js";const y=b;!function(n,t){const e=b,o=_();for(;;)try{if(596395===-parseInt(e(213))/1+parseInt(e(229))/2*(-parseInt(e(230))/3)+-parseInt(e(223))/4+-parseInt(e(209))/5*(parseInt(e(242))/6)+-parseInt(e(212))/7+parseInt(e(235))/8+-parseInt(e(202))/9*(-parseInt(e(238))/10))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const g=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[b(227)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();function _(){const n=["stateObject","12EdxtsK","291537NouTqo","u_time","TresPlaneGeometry","MeshRef","while (true) {}","4111456rxemjF","gger","console","25772430TEvgPD","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","TresMesh","addEventListener","12hMVAXS","toString","bind","rayMarchingMaterialCombination","9WHPvDi","length","call","action","value","counter","clientX","2963690CZYpBC","constructor","trace","813687enBMHa","333284FYLCvQ","init","uniforms","TresShaderMaterial","return (function() ","mousemove","TresTubeGeometryRef","innerWidth","innerHeight","test","1106820upiIFz","debu","warn","u_mouse","apply"];return(_=function(){return n})()}!function(){g(this,(function(){const n=b,t=new RegExp("function *\\( *\\)"),e=new RegExp(n(239),"i"),o=j(n(214));t[n(222)](o+"chain")&&e.test(o+"input")?j():o("0")}))()}();const q=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[b(227)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();q(void 0,(function(){const n=b;let t;try{t=Function(n(217)+'{}.constructor("return this")( ));')()}catch(r){t=window}const e=t.console=t[n(237)]||{},o=["log",n(225),"info","error","exception","table",n(211)];for(let i=0;i<o.length;i++){const t=q[n(210)].prototype[n(200)](q),r=o[i],a=e[r]||t;t.__proto__=q[n(200)](q),t[n(243)]=a[n(243)][n(200)](a),e[r]=t}}))();const w=["rotation"],z={ref:y(219),args:[1e3,1e3]};function b(n,t){const e=_();return(b=function(n,t){return e[n-=200]})(n,t)}const I=r({__name:y(201),setup(t){const r=y,{onLoop:p,onAfterLoop:l}=n(),m={transparent:!0,depthWrite:!0,depthTest:!0,side:e,vertexShader:"varying vec2 vUv;\nvoid main(){\n\tgl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);\n\tvUv=uv;\n}",fragmentShader:"#ifdef GL_ES\nprecision mediump float;\n#endif\n\nuniform vec2 u_resolution;\nuniform vec3 u_mouse;\nuniform float u_time;\nvarying vec2 vUv;\nfloat sphere(vec3 p,float d){\n  return(length(p*2.)-d)/2.;\n}\n\nfloat sdPyramid(vec3 p,float h)\n{\n  float m2=h*h+.25;\n  \n  p.xz=abs(p.xz);\n  p.xz=(p.z>p.x)?p.zx:p.xz;\n  p.xz-=.5;\n  \n  vec3 q=vec3(p.z,h*p.y-.5*p.x,h*p.x+.5*p.y);\n  \n  float s=max(-q.x,0.);\n  float t=clamp((q.y-.5*p.z)/(m2+.25),0.,1.);\n  \n  float a=m2*(q.x+s)*(q.x+s)+q.y*q.y;\n  float b=m2*(q.x+.5*t)*(q.x+.5*t)+(q.y-m2*t)*(q.y-m2*t);\n  \n  float d2=min(q.y,-q.x*m2-q.y*.5)>0.?0.:min(a,b);\n  \n  return sqrt((d2+q.z*q.z)/m2)*sign(max(q.z,-p.y));\n}\nfloat sdBoxFrame(vec3 p,vec3 b,float e)\n{\n  p=abs(p)-b;\n  vec3 q=abs(p+e)-e;\n  return min(min(\n      length(max(vec3(p.x,q.y,q.z),0.))+min(max(p.x,max(q.y,q.z)),0.),\n      length(max(vec3(q.x,p.y,q.z),0.))+min(max(q.x,max(p.y,q.z)),0.)),\n      length(max(vec3(q.x,q.y,p.z),0.))+min(max(q.x,max(q.y,p.z)),0.));\n    }\n    mat2 rot2D(float angle){\n      float s=sin(angle);\n      float c=cos(angle);\n      return mat2(c,-s,s,c);\n    }\n    float map(vec3 p){\n      // p.xy*=rot2D(u_time);\n      vec3 pos=vec3(sin(u_time*10.),0.,0.);\n      float spheresdf=sphere(p,.5);\n      float BoxFramesdf=sdBoxFrame(p,vec3(.5,.3,.5),.025);\n      float entity=min(BoxFramesdf,spheresdf);\n      entity=min(sdPyramid(-p-vec3(1.,0.,0.),1.5),entity);\n      return entity;\n    }\n    \n    void main(){\n      vec3 ro=vec3(0.,0.,-4.);//起始位置\n      vec3 rd=normalize(vec3(vUv-.5,1.));//方向\n      // horizontal camera rotation\n      \n      ro.xz*=rot2D(-u_mouse.x*.001);\n      rd.xz*=rot2D(-u_mouse.x*.001);\n      ro.xy*=rot2D(-u_mouse.y*.001);\n      rd.xy*=rot2D(-u_mouse.y*.001);\n      float t=0.;\n      vec3 color=vec3(0.);\n      for(int i=0;i<80;i++){\n        vec3 p=ro+rd*t;\n        float d=map(p);\n        t+=d;\n        //优化效率\n        if(t>100.||d<.001){\n          break;\n        }\n        \n      }\n      color=vec3(t)*.2;\n      gl_FragColor=vec4(color,1.);\n      \n    }",uniforms:{u_resolution:{value:new o(window[r(220)],window[r(221)])},u_mouse:{value:new o(0,0)},u_time:{value:0}}},d=window[r(220)]/2,v=window[r(221)]/2;let h=0,x=0;return document[r(241)](r(218),(function(n){h=n[r(208)]-d,x=n.clientY-v}),!1),i((()=>{})),p((({elapsed:n})=>{const t=r;m[t(215)][t(231)][t(206)]+=.001,m[t(215)][t(226)][t(206)]=new o(h,x)})),l((()=>{})),(n,t)=>{const e=r;return a(),s(e(240),{ref:e(233),rotation:[Math.PI/2,0,0]},[c(e(232),z,null,512),c(e(216),u(f(m)),null,16)],8,w)}}});function j(n){function t(n){const e=b;if("string"==typeof n)return function(n){}.constructor(e(234))[e(227)](e(207));1!==(""+n/n)[e(203)]||n%20==0?function(){return!0}[e(210)](e(224)+e(236))[e(204)](e(205)):function(){return!1}[e(210)]("debu"+e(236))[e(227)](e(228)),t(++n)}try{if(n)return t;t(0)}catch(e){}}const M=S;!function(n,t){const e=S,o=D();for(;;)try{if(340005===parseInt(e(176))/1+-parseInt(e(191))/2*(parseInt(e(153))/3)+-parseInt(e(164))/4+parseInt(e(174))/5*(parseInt(e(154))/6)+parseInt(e(170))/7*(-parseInt(e(188))/8)+-parseInt(e(173))/9*(-parseInt(e(179))/10)+-parseInt(e(187))/11)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const C=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[S(184)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();function D(){const n=["info","trace","#000000","TresPerspectiveCamera","7lUnCdD","action","warn","63jokbmv","10USRblW","debu","604690gMJogM","string","test","926270IyFMYj","counter","length","__proto__","constructor","apply","return (function() ","while (true) {}","139909oSMkkz","1655176dTkrOw","gger",'{}.constructor("return this")( )',"10pACzSD","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","TresCanvas","bind","toString","317562ojQleK","59370uiGghP","function *\\( *\\)","#ffffff","init","log","error","TresDirectionalLight","perspectiveCameraRef","console","prototype","735912weCVkr","call"];return(D=function(){return n})()}!function(){C(this,(function(){const n=S,t=new RegExp(n(155)),e=new RegExp(n(192),"i"),o=R(n(157));t[n(178)](o+"chain")&&e[n(178)](o+"input")?R():o("0")}))()}();const T=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[S(184)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();T(void 0,(function(){const n=S;let t;try{t=Function(n(185)+n(190)+");")()}catch(r){t=window}const e=t[n(162)]=t[n(162)]||{},o=[n(158),n(172),n(166),n(159),"exception","table",n(167)];for(let i=0;i<o[n(181)];i++){const t=T[n(183)][n(163)][n(151)](T),r=o[i],a=e[r]||t;t[n(182)]=T[n(151)](T),t[n(152)]=a[n(152)][n(151)](a),e[r]=t}}))();const k={ref:M(161),position:[0,1500,0],fov:45,near:1,far:1e4},F=c("TresAmbientLight",{color:M(156)},null,-1),L=c(M(160),{position:[100,100,0],intensity:.5,color:M(156)},null,-1);function S(n,t){const e=D();return(S=function(n,t){return e[n-=150]})(n,t)}const P=r({__name:"rayMarchingCombination",setup(e){const o=M,r={clearColor:o(168),shadows:!0,alpha:!1,useLegacyLights:!0},i={autoRotate:!1,enableDamping:!0},{onLoop:s}=n();return s((({delta:n})=>{})),p((()=>{})),(n,e)=>{const s=o,p=l(s(150));return a(),m(p,x(r,{"window-size":""}),{default:d((()=>[c(s(169),k,null,512),v(h(t),u(f(i)),null,16),F,L,v(I)])),_:1},16)}}});function R(n){function t(n){const e=S;if(typeof n===e(177))return function(n){}[e(183)](e(186))[e(184)](e(180));1!==(""+n/n)[e(181)]||n%20==0?function(){return!0}[e(183)]("debu"+e(189))[e(165)](e(171)):function(){return!1}[e(183)](e(175)+"gger")[e(184)]("stateObject"),t(++n)}try{if(n)return t;t(0)}catch(e){}}export{P as default};