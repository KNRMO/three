import{$ as n,d as t}from"./@tresjs.OrqGCbtj1724983368286.js";import{Z as e,j as o}from"./three.p-9BQwc31724983368286.js";import{d as r,a1 as i,o as c,D as a,J as s,aj as u,ak as f,q as p,e as l,f as m,g as d,j as h,u as v,m as x}from"./@vue.Q1VpS3901724983368286.js";import"./tweakpane.yHWGBmom1724983368286.js";import"./@vueuse.n6I5WvfU1724983368286.js";const y=_;!function(n,t){const e=_,o=z();for(;;)try{if(325508===parseInt(e(441))/1*(-parseInt(e(434))/2)+parseInt(e(470))/3+parseInt(e(431))/4+-parseInt(e(436))/5*(-parseInt(e(433))/6)+-parseInt(e(432))/7*(-parseInt(e(461))/8)+parseInt(e(443))/9+-parseInt(e(465))/10)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const g=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[_(454)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();!function(){g(this,(function(){const n=_,t=new RegExp("function *\\( *\\)"),e=new RegExp(n(440),"i"),o=j(n(451));t.test(o+n(452))&&e[n(446)](o+"input")?j():o("0")}))()}();const q=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[_(454)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();function _(n,t){const e=z();return(_=function(n,t){return e[n-=427]})(n,t)}q(void 0,(function(){const n=_,t=function(){const n=_;let t;try{t=Function(n(448)+'{}.constructor("return this")( ));')()}catch(e){t=window}return t}(),e=t.console=t[n(472)]||{},o=[n(455),"warn",n(445),n(428),"exception",n(427),"trace"];for(let r=0;r<o.length;r++){const t=q[n(467)][n(429)][n(438)](q),i=o[r],c=e[i]||t;t[n(444)]=q[n(438)](q),t[n(447)]=c[n(447)].bind(c),e[i]=t}}))();const w=["rotation"],b={ref:"TresTubeGeometryRef",args:[1e3,1e3]};function z(){const n=["error","prototype","length","1461088OdJlzP","7MfzThG","47454PobbFY","2WYNOwr","addEventListener","155FzAlzh","while (true) {}","bind","u_mouse","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","19993twQZcj","TresMesh","1448379xbrXqx","__proto__","info","test","toString","return (function() ","gger","value","init","chain","innerWidth","apply","log","rayMarchingMaterialFract","action","TresShaderMaterial","MeshRef","u_time","5155288SFEmvi","stateObject","innerHeight","debu","15013170Ebodxk","clientY","constructor","counter","clientX","1293075FrvXMn","call","console","string","uniforms","table"];return(z=function(){return n})()}const I=r({__name:y(456),setup(t){const r=y,{onLoop:p,onAfterLoop:l}=n(),m={transparent:!0,depthWrite:!0,depthTest:!0,side:e,vertexShader:"varying vec2 vUv;\nvoid main(){\n\tgl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);\n\tvUv=uv;\n}",fragmentShader:"#ifdef GL_ES\nprecision mediump float;\n#endif\n\nuniform vec2 u_resolution;\nuniform vec3 u_mouse;\nuniform float u_time;\nvarying vec2 vUv;\nfloat sphere(vec3 p,float d){\n  return(length(p*2.)-d)/2.;\n}\n\nfloat sdPyramid(vec3 p,float h)\n{\n  float m2=h*h+.25;\n  \n  p.xz=abs(p.xz);\n  p.xz=(p.z>p.x)?p.zx:p.xz;\n  p.xz-=.5;\n  \n  vec3 q=vec3(p.z,h*p.y-.5*p.x,h*p.x+.5*p.y);\n  \n  float s=max(-q.x,0.);\n  float t=clamp((q.y-.5*p.z)/(m2+.25),0.,1.);\n  \n  float a=m2*(q.x+s)*(q.x+s)+q.y*q.y;\n  float b=m2*(q.x+.5*t)*(q.x+.5*t)+(q.y-m2*t)*(q.y-m2*t);\n  \n  float d2=min(q.y,-q.x*m2-q.y*.5)>0.?0.:min(a,b);\n  \n  return sqrt((d2+q.z*q.z)/m2)*sign(max(q.z,-p.y));\n}\nfloat sdBoxFrame(vec3 p,vec3 b,float e)\n{\n  p=abs(p)-b;\n  vec3 q=abs(p+e)-e;\n  return min(min(\n      length(max(vec3(p.x,q.y,q.z),0.))+min(max(p.x,max(q.y,q.z)),0.),\n      length(max(vec3(q.x,p.y,q.z),0.))+min(max(q.x,max(p.y,q.z)),0.)),\n      length(max(vec3(q.x,q.y,p.z),0.))+min(max(q.x,max(q.y,p.z)),0.));\n    }\n    mat2 rot2D(float angle){\n      float s=sin(angle);\n      float c=cos(angle);\n      return mat2(c,-s,s,c);\n    }\n    \n    float map(vec3 p){\n      p.xy*=rot2D(u_time);\n      p=(fract(p)-.5)*2.;\n      // p=mod(p,1.)-.5;\n      vec3 pos=vec3(sin(u_time*10.),0.,0.);\n      float spheresdf=sphere(p,.5)/2.;\n      float BoxFramesdf=sdBoxFrame(p,vec3(.5,.3,.5),.025)/2.;\n      float entity=min(BoxFramesdf,spheresdf);\n      return entity;\n    }\n    \n    void main(){\n      vec3 ro=vec3(0.,0.,-4.);//起始位置\n      vec3 rd=normalize(vec3(vUv-.5,1.));//方向\n      // horizontal camera rotation\n      \n      ro.xz*=rot2D(-u_mouse.x*.001);\n      rd.xz*=rot2D(-u_mouse.x*.001);\n      ro.xy*=rot2D(-u_mouse.y*.001);\n      rd.xy*=rot2D(-u_mouse.y*.001);\n      float t=0.;\n      vec3 color=vec3(0.);\n      for(int i=0;i<80;i++){\n        vec3 p=ro+rd*t;\n        float d=map(p);\n        t+=d;\n        //优化效率\n        if(t>100.||d<.001){\n          break;\n        }\n      }\n      color=vec3(t*.2);\n      gl_FragColor=vec4(color,1.);\n      \n    }",uniforms:{u_resolution:{value:new o(window[r(453)],window[r(463)])},u_mouse:{value:new o(0,0)},u_time:{value:0}}},d=window[r(453)]/2,h=window[r(463)]/2;let v=0,x=0;return document[r(435)]("mousemove",(function(n){const t=r;v=n[t(469)]-d,x=n[t(466)]-h}),!1),i((()=>{})),p((({elapsed:n})=>{const t=r;m[t(474)][t(460)][t(450)]+=.001,m[t(474)][t(439)][t(450)]=new o(v,x)})),l((()=>{})),(n,t)=>{const e=r;return c(),a(e(442),{ref:e(459),rotation:[Math.PI/2,0,0]},[s("TresPlaneGeometry",b,null,512),s(e(458),u(f(m)),null,16)],8,w)}}});function j(n){function t(n){const e=_;if(typeof n===e(473))return function(n){}.constructor(e(437)).apply(e(468));1!==(""+n/n)[e(430)]||n%20==0?function(){return!0}.constructor(e(464)+e(449))[e(471)](e(457)):function(){return!1}[e(467)]("debu"+e(449))[e(454)](e(462)),t(++n)}try{if(n)return t;t(0)}catch(e){}}const F=M;!function(n,t){const e=M,o=k();for(;;)try{if(740464===parseInt(e(441))/1*(-parseInt(e(455))/2)+parseInt(e(429))/3+parseInt(e(453))/4*(parseInt(e(430))/5)+parseInt(e(431))/6*(-parseInt(e(450))/7)+parseInt(e(440))/8+parseInt(e(434))/9+-parseInt(e(447))/10*(parseInt(e(435))/11))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const T=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e.apply(t,arguments);return e=null,n}}:function(){};return n=!1,o}}();!function(){T(this,(function(){const n=M,t=new RegExp(n(451)),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),o=R(n(465));t[n(422)](o+n(444))&&e[n(422)](o+n(448))?R():o("0")}))()}();const E=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[M(459)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();function M(n,t){const e=k();return(M=function(n,t){return e[n-=422]})(n,t)}E(void 0,(function(){const n=M,t=function(){const n=M;let t;try{t=Function(n(456)+n(438)+");")()}catch(e){t=window}return t}(),e=t[n(423)]=t.console||{},o=[n(457),n(436),n(449),n(443),n(428),n(425),"trace"];for(let r=0;r<o.length;r++){const t=E.constructor[n(462)][n(452)](E),i=o[r],c=e[i]||t;t[n(446)]=E[n(452)](E),t[n(458)]=c[n(458)][n(452)](c),e[i]=t}}))();const D={ref:F(427),position:[0,1500,0],fov:45,near:1,far:1e4},L=s(F(463),{color:"#ffffff"},null,-1),A=s(F(439),{position:[100,100,0],intensity:.5,color:F(466)},null,-1);function k(){const n=["info","889TEcHfF","function *\\( *\\)","bind","18884xaNIrV","length","17102IlCbJH","return (function() ","log","toString","apply","rayMarchingFract","string","prototype","TresAmbientLight","counter","init","#ffffff","test","console","debu","table","TresPerspectiveCamera","perspectiveCameraRef","exception","3399963FrPbrF","590BWOqDO","51240GwLwAE","call","gger","8128566jKiclv","473JwxrGn","warn","constructor",'{}.constructor("return this")( )',"TresDirectionalLight","7274776WvCkWe","26JArZcJ","#000000","error","chain","stateObject","__proto__","338500jfOESb","input"];return(k=function(){return n})()}const P=r({__name:F(460),setup(e){const o=F,r={clearColor:o(442),shadows:!0,alpha:!1,useLegacyLights:!0},i={autoRotate:!1,enableDamping:!0},{onLoop:a}=n();return a((({delta:n})=>{})),p((()=>{})),(n,e)=>{const a=o,p=l("TresCanvas");return c(),m(p,x(r,{"window-size":""}),{default:d((()=>[s(a(426),D,null,512),h(v(t),u(f(i)),null,16),L,A,h(I)])),_:1},16)}}});function R(n){function t(n){const e=M;if(typeof n===e(461))return function(n){}[e(437)]("while (true) {}")[e(459)](e(464));1!==(""+n/n)[e(454)]||n%20==0?function(){return!0}[e(437)](e(424)+e(433))[e(432)]("action"):function(){return!1}[e(437)](e(424)+e(433))[e(459)](e(445)),t(++n)}try{if(n)return t;t(0)}catch(e){}}export{P as default};
