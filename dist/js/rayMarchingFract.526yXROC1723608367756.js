import{$ as n,d as t}from"./@tresjs.zzLYikgQ1723608367756.js";import{Z as e,j as o}from"./three.X8FgZbPT1723608367756.js";import{d as r,a1 as i,o as a,D as c,J as s,aj as u,ak as f,q as p,e as l,f as m,g as d,j as h,u as v,m as x}from"./@vue.Q1VpS3901723608367756.js";import"./tweakpane.yHWGBmom1723608367756.js";import"./@vueuse.QL9lULrD1723608367756.js";const y=_;!function(n,t){const e=_,o=w();for(;;)try{if(792473===-parseInt(e(500))/1*(-parseInt(e(517))/2)+-parseInt(e(473))/3+parseInt(e(512))/4*(-parseInt(e(503))/5)+-parseInt(e(521))/6*(parseInt(e(484))/7)+parseInt(e(480))/8*(parseInt(e(504))/9)+parseInt(e(511))/10+parseInt(e(472))/11*(parseInt(e(507))/12))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const g=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e.apply(t,arguments);return e=null,n}}:function(){};return n=!1,o}}();function _(n,t){const e=w();return(_=function(n,t){return e[n-=470]})(n,t)}!function(){g(this,(function(){const n=_,t=new RegExp(n(514)),e=new RegExp(n(485),"i"),o=j(n(482));t.test(o+n(499))&&e[n(490)](o+n(501))?j():o("0")}))()}();const q=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[_(470)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();q(void 0,(function(){const n=_;let t;try{t=Function(n(476)+n(477)+");")()}catch(r){t=window}const e=t[n(518)]=t.console||{},o=[n(522),n(513),"info",n(492),n(502),n(519),n(478)];for(let i=0;i<o[n(479)];i++){const t=q.constructor[n(498)].bind(q),r=o[i],a=e[r]||t;t[n(471)]=q[n(520)](q),t[n(475)]=a.toString.bind(a),e[r]=t}}))();const z=["rotation"],b={ref:y(494),args:[1e3,1e3]};function w(){const n=["TresShaderMaterial","constructor","clientY","10951460APJHig","348xOZKvM","warn","function *\\( *\\)","TresPlaneGeometry","u_mouse","31778kaRgwT","console","table","bind","6CWZNmG","log","apply","__proto__","118899DVzhJV","3201564VAgYka","addEventListener","toString","return (function() ",'{}.constructor("return this")( )',"trace","length","8YxfzVm","rayMarchingMaterialFract","init","string","139041PUdAuL","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","debu","action","while (true) {}","MeshRef","test","stateObject","error","counter","TresTubeGeometryRef","innerHeight","clientX","call","prototype","chain","38uzidcU","input","exception","48485FAhfVm","7175214fZUfsU","gger","mousemove","252qTbMXD"];return(w=function(){return n})()}const I=r({__name:y(481),setup(t){const r=y,{onLoop:p,onAfterLoop:l}=n(),m={transparent:!0,depthWrite:!0,depthTest:!0,side:e,vertexShader:"varying vec2 vUv;\nvoid main(){\n\tgl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);\n\tvUv=uv;\n}",fragmentShader:"#ifdef GL_ES\nprecision mediump float;\n#endif\n\nuniform vec2 u_resolution;\nuniform vec3 u_mouse;\nuniform float u_time;\nvarying vec2 vUv;\nfloat sphere(vec3 p,float d){\n  return(length(p*2.)-d)/2.;\n}\n\nfloat sdPyramid(vec3 p,float h)\n{\n  float m2=h*h+.25;\n  \n  p.xz=abs(p.xz);\n  p.xz=(p.z>p.x)?p.zx:p.xz;\n  p.xz-=.5;\n  \n  vec3 q=vec3(p.z,h*p.y-.5*p.x,h*p.x+.5*p.y);\n  \n  float s=max(-q.x,0.);\n  float t=clamp((q.y-.5*p.z)/(m2+.25),0.,1.);\n  \n  float a=m2*(q.x+s)*(q.x+s)+q.y*q.y;\n  float b=m2*(q.x+.5*t)*(q.x+.5*t)+(q.y-m2*t)*(q.y-m2*t);\n  \n  float d2=min(q.y,-q.x*m2-q.y*.5)>0.?0.:min(a,b);\n  \n  return sqrt((d2+q.z*q.z)/m2)*sign(max(q.z,-p.y));\n}\nfloat sdBoxFrame(vec3 p,vec3 b,float e)\n{\n  p=abs(p)-b;\n  vec3 q=abs(p+e)-e;\n  return min(min(\n      length(max(vec3(p.x,q.y,q.z),0.))+min(max(p.x,max(q.y,q.z)),0.),\n      length(max(vec3(q.x,p.y,q.z),0.))+min(max(q.x,max(p.y,q.z)),0.)),\n      length(max(vec3(q.x,q.y,p.z),0.))+min(max(q.x,max(q.y,p.z)),0.));\n    }\n    mat2 rot2D(float angle){\n      float s=sin(angle);\n      float c=cos(angle);\n      return mat2(c,-s,s,c);\n    }\n    \n    float map(vec3 p){\n      p.xy*=rot2D(u_time);\n      p=(fract(p)-.5)*2.;\n      // p=mod(p,1.)-.5;\n      vec3 pos=vec3(sin(u_time*10.),0.,0.);\n      float spheresdf=sphere(p,.5)/2.;\n      float BoxFramesdf=sdBoxFrame(p,vec3(.5,.3,.5),.025)/2.;\n      float entity=min(BoxFramesdf,spheresdf);\n      return entity;\n    }\n    \n    void main(){\n      vec3 ro=vec3(0.,0.,-4.);//起始位置\n      vec3 rd=normalize(vec3(vUv-.5,1.));//方向\n      // horizontal camera rotation\n      \n      ro.xz*=rot2D(-u_mouse.x*.001);\n      rd.xz*=rot2D(-u_mouse.x*.001);\n      ro.xy*=rot2D(-u_mouse.y*.001);\n      rd.xy*=rot2D(-u_mouse.y*.001);\n      float t=0.;\n      vec3 color=vec3(0.);\n      for(int i=0;i<80;i++){\n        vec3 p=ro+rd*t;\n        float d=map(p);\n        t+=d;\n        //优化效率\n        if(t>100.||d<.001){\n          break;\n        }\n      }\n      color=vec3(t*.2);\n      gl_FragColor=vec4(color,1.);\n      \n    }",uniforms:{u_resolution:{value:new o(window.innerWidth,window[r(495)])},u_mouse:{value:new o(0,0)},u_time:{value:0}}},d=window.innerWidth/2,h=window[r(495)]/2;let v=0,x=0;return document[r(474)](r(506),(function(n){const t=r;v=n[t(496)]-d,x=n[t(510)]-h}),!1),i((()=>{})),p((({elapsed:n})=>{const t=r;m.uniforms.u_time.value+=.001,m.uniforms[t(516)].value=new o(v,x)})),l((()=>{})),(n,t)=>{const e=r;return a(),c("TresMesh",{ref:e(489),rotation:[Math.PI/2,0,0]},[s(e(515),b,null,512),s(e(508),u(f(m)),null,16)],8,z)}}});function j(n){function t(n){const e=_;if(typeof n===e(483))return function(n){}[e(509)](e(488))[e(470)](e(493));1!==(""+n/n)[e(479)]||n%20==0?function(){return!0}.constructor("debu"+e(505))[e(497)](e(487)):function(){return!1}[e(509)](e(486)+e(505))[e(470)](e(491)),t(++n)}try{if(n)return t;t(0)}catch(e){}}const D=R;!function(n,t){const e=R,o=Z();for(;;)try{if(579334===parseInt(e(199))/1+-parseInt(e(189))/2+-parseInt(e(174))/3+parseInt(e(193))/4+-parseInt(e(173))/5*(-parseInt(e(186))/6)+-parseInt(e(182))/7+parseInt(e(207))/8)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const M=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e.apply(t,arguments);return e=null,n}}:function(){};return n=!1,o}}();!function(){M(this,(function(){const n=R,t=new RegExp(n(198)),e=new RegExp(n(185),"i"),o=V("init");t[n(197)](o+"chain")&&e.test(o+n(209))?V():o("0")}))()}();const T=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[R(187)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();T(void 0,(function(){const n=R;let t;try{t=Function(n(208)+n(180)+");")()}catch(r){t=window}const e=t.console=t[n(200)]||{},o=[n(210),n(171),n(191),n(190),n(206),n(183),"trace"];for(let i=0;i<o[n(178)];i++){const t=T[n(195)][n(194)].bind(T),r=o[i],a=e[r]||t;t.__proto__=T[n(172)](T),t[n(181)]=a.toString[n(172)](a),e[r]=t}}))();const A={ref:D(196),position:[0,1500,0],fov:45,near:1,far:1e4},F=s(D(204),{color:D(201)},null,-1),L=s(D(177),{position:[100,100,0],intensity:.5,color:D(201)},null,-1);function Z(){const n=["console","#ffffff","while (true) {}","debu","TresAmbientLight","call","exception","135848MuYjDv","return (function() ","input","log","rayMarchingFract","warn","bind","575AnhZQd","1693086NbQXcO","string","action","TresDirectionalLight","length","TresCanvas",'{}.constructor("return this")( )',"toString","6963971jtymUi","table","#000000","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","60054VtJVKc","apply","stateObject","1517166OVOWDo","error","info","gger","3969984MZbiWT","prototype","constructor","perspectiveCameraRef","test","function *\\( *\\)","736620jFzcmd"];return(Z=function(){return n})()}function R(n,t){const e=Z();return(R=function(n,t){return e[n-=171]})(n,t)}const U=r({__name:D(211),setup(e){const o=D,r={clearColor:o(184),shadows:!0,alpha:!1,useLegacyLights:!0},i={autoRotate:!1,enableDamping:!0},{onLoop:c}=n();return c((({delta:n})=>{})),p((()=>{})),(n,e)=>{const c=l(o(179));return a(),m(c,x(r,{"window-size":""}),{default:d((()=>[s("TresPerspectiveCamera",A,null,512),h(v(t),u(f(i)),null,16),F,L,h(I)])),_:1},16)}}});function V(n){function t(n){const e=R;if(typeof n===e(175))return function(n){}[e(195)](e(202))[e(187)]("counter");1!==(""+n/n)[e(178)]||n%20==0?function(){return!0}.constructor(e(203)+e(192))[e(205)](e(176)):function(){return!1}[e(195)](e(203)+e(192)).apply(e(188)),t(++n)}try{if(n)return t;t(0)}catch(e){}}export{U as default};
