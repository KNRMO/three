import{r as n,d as t}from"./@tresjs.toBU36DO1720750938663.js";import{Z as e,j as r}from"./three.c_4mN3mZ1720750938663.js";import{d as o,a2 as i,o as a,D as s,J as c,aj as u,ak as f,q as p,e as l,f as m,g as d,j as h,u as v,m as x}from"./@vue.ApkyOKE71720750938663.js";import"./@vueuse.NiHn2U_k1720750938663.js";import"./tweakpane.yHWGBmom1720750938663.js";const y=z;!function(n,t){const e=z,r=q();for(;;)try{if(410855===parseInt(e(298))/1+-parseInt(e(249))/2+parseInt(e(280))/3*(-parseInt(e(258))/4)+-parseInt(e(254))/5+parseInt(e(300))/6+-parseInt(e(279))/7+parseInt(e(264))/8*(parseInt(e(277))/9))break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const g=function(){let n=!0;return function(t,e){const r=n?function(){if(e){const n=e[z(294)](t,arguments);return e=null,n}}:function(){};return n=!1,r}}();function q(){const n=["test","417497NJjIGw","prototype","3495876yxZhoF","1129636BScElB","error","clientX","length","table","1404360CXWZIM","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","__proto__","init","495336TZRDWE","constructor","clientY","action","TresPlaneGeometry","input","8csWufz","counter","string","toString","u_time","mousemove","TresShaderMaterial","log","value","exception","bind","MeshRef","console","11662263NDDYAs","info","5542159qZGprd","6YTYQtB","rayMarchingMaterialFract","chain","warn","stateObject","trace","innerWidth","call","function *\\( *\\)","TresTubeGeometryRef","addEventListener","return (function() ",'{}.constructor("return this")( )',"debu","apply","uniforms","gger"];return(q=function(){return n})()}!function(){g(this,(function(){const n=z,t=new RegExp(n(288)),e=new RegExp(n(255),"i"),r=j(n(257));t[n(297)](r+n(282))&&e.test(r+n(263))?j():r("0")}))()}();const _=function(){let n=!0;return function(t,e){const r=n?function(){if(e){const n=e[z(294)](t,arguments);return e=null,n}}:function(){};return n=!1,r}}();function z(n,t){const e=q();return(z=function(n,t){return e[n-=249]})(n,t)}_(void 0,(function(){const n=z;let t;try{t=Function(n(291)+n(292)+");")()}catch(o){t=window}const e=t[n(276)]=t[n(276)]||{},r=[n(271),n(283),n(278),n(250),n(273),n(253),n(285)];for(let i=0;i<r[n(252)];i++){const t=_[n(259)][n(299)].bind(_),o=r[i],a=e[o]||t;t[n(256)]=_[n(274)](_),t[n(267)]=a[n(267)][n(274)](a),e[o]=t}}))();const w=["rotation"],I={ref:y(289),args:[1e3,1e3]},b=o({__name:y(281),setup(t){const o=y,{onLoop:p,onAfterLoop:l}=n(),m={transparent:!0,depthWrite:!0,depthTest:!0,side:e,vertexShader:"varying vec2 vUv;\nvoid main(){\n\tgl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);\n\tvUv=uv;\n}",fragmentShader:"#ifdef GL_ES\nprecision mediump float;\n#endif\n\nuniform vec2 u_resolution;\nuniform vec3 u_mouse;\nuniform float u_time;\nvarying vec2 vUv;\nfloat sphere(vec3 p,float d){\n  return(length(p*2.)-d)/2.;\n}\n\nfloat sdPyramid(vec3 p,float h)\n{\n  float m2=h*h+.25;\n  \n  p.xz=abs(p.xz);\n  p.xz=(p.z>p.x)?p.zx:p.xz;\n  p.xz-=.5;\n  \n  vec3 q=vec3(p.z,h*p.y-.5*p.x,h*p.x+.5*p.y);\n  \n  float s=max(-q.x,0.);\n  float t=clamp((q.y-.5*p.z)/(m2+.25),0.,1.);\n  \n  float a=m2*(q.x+s)*(q.x+s)+q.y*q.y;\n  float b=m2*(q.x+.5*t)*(q.x+.5*t)+(q.y-m2*t)*(q.y-m2*t);\n  \n  float d2=min(q.y,-q.x*m2-q.y*.5)>0.?0.:min(a,b);\n  \n  return sqrt((d2+q.z*q.z)/m2)*sign(max(q.z,-p.y));\n}\nfloat sdBoxFrame(vec3 p,vec3 b,float e)\n{\n  p=abs(p)-b;\n  vec3 q=abs(p+e)-e;\n  return min(min(\n      length(max(vec3(p.x,q.y,q.z),0.))+min(max(p.x,max(q.y,q.z)),0.),\n      length(max(vec3(q.x,p.y,q.z),0.))+min(max(q.x,max(p.y,q.z)),0.)),\n      length(max(vec3(q.x,q.y,p.z),0.))+min(max(q.x,max(q.y,p.z)),0.));\n    }\n    mat2 rot2D(float angle){\n      float s=sin(angle);\n      float c=cos(angle);\n      return mat2(c,-s,s,c);\n    }\n    \n    float map(vec3 p){\n      p.xy*=rot2D(u_time);\n      p=(fract(p)-.5)*2.;\n      // p=mod(p,1.)-.5;\n      vec3 pos=vec3(sin(u_time*10.),0.,0.);\n      float spheresdf=sphere(p,.5)/2.;\n      float BoxFramesdf=sdBoxFrame(p,vec3(.5,.3,.5),.025)/2.;\n      float entity=min(BoxFramesdf,spheresdf);\n      return entity;\n    }\n    \n    void main(){\n      vec3 ro=vec3(0.,0.,-4.);//起始位置\n      vec3 rd=normalize(vec3(vUv-.5,1.));//方向\n      // horizontal camera rotation\n      \n      ro.xz*=rot2D(-u_mouse.x*.001);\n      rd.xz*=rot2D(-u_mouse.x*.001);\n      ro.xy*=rot2D(-u_mouse.y*.001);\n      rd.xy*=rot2D(-u_mouse.y*.001);\n      float t=0.;\n      vec3 color=vec3(0.);\n      for(int i=0;i<80;i++){\n        vec3 p=ro+rd*t;\n        float d=map(p);\n        t+=d;\n        //优化效率\n        if(t>100.||d<.001){\n          break;\n        }\n      }\n      color=vec3(t*.2);\n      gl_FragColor=vec4(color,1.);\n      \n    }",uniforms:{u_resolution:{value:new r(window.innerWidth,window.innerHeight)},u_mouse:{value:new r(0,0)},u_time:{value:0}}},d=window[o(286)]/2,h=window.innerHeight/2;let v=0,x=0;return document[o(290)](o(269),(function(n){const t=o;v=n[t(251)]-d,x=n[t(260)]-h}),!1),i((()=>{})),p((({elapsed:n})=>{const t=o;m[t(295)][t(268)][t(272)]+=.001,m[t(295)].u_mouse.value=new r(v,x)})),l((()=>{})),(n,t)=>{const e=o;return a(),s("TresMesh",{ref:e(275),rotation:[Math.PI/2,0,0]},[c(e(262),I,null,512),c(e(270),u(f(m)),null,16)],8,w)}}});function j(n){function t(n){const e=z;if(typeof n===e(266))return function(n){}[e(259)]("while (true) {}").apply(e(265));1!==(""+n/n)[e(252)]||n%20==0?function(){return!0}[e(259)](e(293)+e(296))[e(287)](e(261)):function(){return!1}.constructor(e(293)+e(296))[e(294)](e(284)),t(++n)}try{if(n)return t;t(0)}catch(e){}}const D=Z;!function(n,t){const e=Z,r=T();for(;;)try{if(792669===-parseInt(e(394))/1*(parseInt(e(384))/2)+-parseInt(e(389))/3*(-parseInt(e(369))/4)+-parseInt(e(407))/5*(-parseInt(e(381))/6)+parseInt(e(374))/7*(-parseInt(e(375))/8)+-parseInt(e(405))/9*(parseInt(e(403))/10)+parseInt(e(392))/11*(-parseInt(e(400))/12)+-parseInt(e(380))/13*(-parseInt(e(404))/14))break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const E=function(){let n=!0;return function(t,e){const r=n?function(){if(e){const n=e[Z(388)](t,arguments);return e=null,n}}:function(){};return n=!1,r}}();function T(){const n=["1HjxEPi","debu","call","length","constructor","string","6154692HYaQnf","TresCanvas","error","210410VCEEWV","54385982amEIer","657IUhLrk","prototype","15KvpHqb","20AdRMUj","TresDirectionalLight","TresAmbientLight","console","table","4912138lzUdlL","16UXLFzN","bind","info","toString","input","13NbnohI","76074fHDDTg","trace","stateObject","282718tCKDuY","test","chain","TresPerspectiveCamera","apply","278178BxqShb","#ffffff","init","11QJqmEu","exception"];return(T=function(){return n})()}!function(){E(this,(function(){const n=Z,t=new RegExp("function *\\( *\\)"),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),r=B(n(391));t[n(385)](r+n(386))&&e.test(r+n(379))?B():r("0")}))()}();const L=function(){let n=!0;return function(t,e){const r=n?function(){if(e){const n=e[Z(388)](t,arguments);return e=null,n}}:function(){};return n=!1,r}}();L(void 0,(function(){const n=Z,t=function(){let n;try{n=Function('return (function() {}.constructor("return this")( ));')()}catch(t){n=window}return n}(),e=t[n(372)]=t.console||{},r=["log","warn",n(377),n(402),n(393),n(373),n(382)];for(let o=0;o<r[n(397)];o++){const t=L[n(398)][n(406)][n(376)](L),i=r[o],a=e[i]||t;t.__proto__=L[n(376)](L),t[n(378)]=a[n(378)].bind(a),e[i]=t}}))();const F={ref:"perspectiveCameraRef",position:[0,1500,0],fov:45,near:1,far:1e4},M=c(D(371),{color:D(390)},null,-1),R=c(D(370),{position:[100,100,0],intensity:.5,color:D(390)},null,-1);function Z(n,t){const e=T();return(Z=function(n,t){return e[n-=369]})(n,t)}const A=o({__name:"rayMarchingFract",setup(e){const r={clearColor:"#000000",shadows:!0,alpha:!1,useLegacyLights:!0},o={autoRotate:!1,enableDamping:!0},{onLoop:i}=n();return i((({delta:n})=>{})),p((()=>{})),(n,e)=>{const i=Z,s=l(i(401));return a(),m(s,x(r,{"window-size":""}),{default:d((()=>[c(i(387),F,null,512),h(v(t),u(f(o)),null,16),M,R,h(b)])),_:1},16)}}});function B(n){function t(n){const e=Z;if(typeof n===e(399))return function(n){}.constructor("while (true) {}").apply("counter");1!==(""+n/n).length||n%20==0?function(){return!0}[e(398)](e(395)+"gger")[e(396)]("action"):function(){return!1}[e(398)]("debugger")[e(388)](e(383)),t(++n)}try{if(n)return t;t(0)}catch(e){}}export{A as default};