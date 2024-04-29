import{a1 as m,ap as h,aH as c,a6 as y,o as p,c as g,Y as e,aa as u,ab as d,a9 as f,a7 as q,r as z,x as w,E as b,a8 as M,a as v,L as T,ac as C}from"./vendor.67sOx1cX1714383148135.js";const D="varying vec2 vUv;\nvoid main(){\n	gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);\n	vUv=uv;\n}",L="#ifdef GL_ES\nprecision mediump float;\n#endif\n\nuniform vec2 u_resolution;\nuniform vec3 u_mouse;\nuniform float u_time;\nvarying vec2 vUv;\nvec4 sphere(vec3 p,float d,vec3 color){\n  return vec4((length(p*2.)-d)/2.,color);\n}\nvec4 colorMin(vec4 a,vec4 b){\n  if(a.x<b.x){\n    return a;\n  }else{\n    return b;\n  }\n}\nvec4 sdPyramid(vec3 p,float h,vec3 color)\n{\n  float m2=h*h+.25;\n  \n  p.xz=abs(p.xz);\n  p.xz=(p.z>p.x)?p.zx:p.xz;\n  p.xz-=.5;\n  \n  vec3 q=vec3(p.z,h*p.y-.5*p.x,h*p.x+.5*p.y);\n  \n  float s=max(-q.x,0.);\n  float t=clamp((q.y-.5*p.z)/(m2+.25),0.,1.);\n  \n  float a=m2*(q.x+s)*(q.x+s)+q.y*q.y;\n  float b=m2*(q.x+.5*t)*(q.x+.5*t)+(q.y-m2*t)*(q.y-m2*t);\n  \n  float d2=min(q.y,-q.x*m2-q.y*.5)>0.?0.:min(a,b);\n  \n  return vec4(sqrt((d2+q.z*q.z)/m2)*sign(max(q.z,-p.y)),color);\n}\nvec4 sdBoxFrame(vec3 p,vec3 b,float e,vec3 color)\n{\n  p=abs(p)-b;\n  vec3 q=abs(p+e)-e;\n  return vec4(min(min(\n        length(max(vec3(p.x,q.y,q.z),0.))+min(max(p.x,max(q.y,q.z)),0.),\n        length(max(vec3(q.x,p.y,q.z),0.))+min(max(q.x,max(p.y,q.z)),0.)),\n        length(max(vec3(q.x,q.y,p.z),0.))+min(max(q.x,max(q.y,p.z)),0.)),color);\n      }\n      mat2 rot2D(float angle){\n        float s=sin(angle);\n        float c=cos(angle);\n        return mat2(c,-s,s,c);\n      }\n      //彩色画板\n      vec3 palette(float t){\n        vec3 a=vec3(.5,.5,.5);\n        vec3 b=vec3(.5,.5,.5);\n        vec3 c=vec3(1.,1.,1.);\n        vec3 d=vec3(.263,.416,.557);\n        \n        return a+b*cos(6.28318*(c*t+d));\n      }\n      vec4 map(vec3 p){\n        p.xy*=rot2D(u_time);\n        // p=(fract(p)-.5)*2.;\n        // p=mod(p,1.)-.5;\n        vec3 pos=vec3(sin(u_time*10.),0.,0.);\n        vec4 spheresdf=sphere(p,.5,vec3(.2118,.0314,.9333));\n        vec4 BoxFramesdf=sdBoxFrame(p,vec3(.5,.3,.5),.025,vec3(.1059,.9725,.0275))/2.;\n        vec4 entity=colorMin(BoxFramesdf,spheresdf);\n        return entity;\n      }\n      \n      void main(){\n        vec3 ro=vec3(0.,0.,-4.);//起始位置\n        vec3 rd=normalize(vec3(vUv-.5,1.));//方向\n        // horizontal camera rotation\n        \n        ro.xz*=rot2D(-u_mouse.x*.001);\n        rd.xz*=rot2D(-u_mouse.x*.001);\n        ro.xy*=rot2D(-u_mouse.y*.001);\n        rd.xy*=rot2D(-u_mouse.y*.001);\n        float t=0.;\n        vec4 color=vec4(0.);\n        vec4 d=vec4(0.);\n        for(int i=0;i<80;i++){\n          vec3 p=ro+rd*t;\n          p.xy*=rot2D(t*.2);\n          d=map(p);\n          t+=d.x;\n          //优化效率\n          if(d.x<.001){\n            break;\n          }\n          if(t>100.){\n            color=vec4(.5255,.2078,.2078,1.);\n            gl_FragColor=color;\n          }else{\n            color=vec4(t*d.yzw,1.);\n            gl_FragColor=color;\n          }\n          \n        }\n        // color=vec4(t*d.yzw,1.);\n        \n      }",B=["rotation"],P={ref:"TresTubeGeometryRef",args:[1e3,1e3]},F=m({__name:"rayMarchingMaterialColor",setup(x){const{onLoop:r,onAfterLoop:a}=f(),n={transparent:!0,depthWrite:!0,depthTest:!0,side:h,vertexShader:D,fragmentShader:L,uniforms:{u_resolution:{value:new c(window.innerWidth,window.innerHeight)},u_mouse:{value:new c(0,0)},u_time:{value:0}}},s=window.innerWidth/2,i=window.innerHeight/2;let o=0,l=0;function _(t){o=t.clientX-s,l=t.clientY-i}return document.addEventListener("mousemove",_,!1),y(()=>{}),r(({elapsed:t})=>{n.uniforms.u_time.value+=.001,n.uniforms.u_mouse.value=new c(o,l)}),a(()=>{}),(t,k)=>(p(),g("TresMesh",{ref:"MeshRef",rotation:[Math.PI/2,0,0]},[e("TresPlaneGeometry",P,null,512),e("TresShaderMaterial",u(d(n)),null,16)],8,B))}}),H={ref:"perspectiveCameraRef",position:[0,800,0],fov:45,near:1,far:1e4},S=e("TresAmbientLight",{color:"#ffffff"},null,-1),E=e("TresDirectionalLight",{position:[100,100,0],intensity:.5,color:"#ffffff"},null,-1),R=e("TresAxesHelper",{args:[1e3],position:[0,19,0]},null,-1),V=e("TresGridHelper",{args:[6e3,100],position:[0,19,0]},null,-1),U=m({__name:"rayMarchingColor",setup(x){const r={clearColor:"#000000",shadows:!0,alpha:!1,useLegacyLights:!0},a={autoRotate:!0,enableDamping:!0},{onLoop:n}=f();return n(({delta:s})=>{}),q(()=>{}),(s,i)=>{const o=z("TresCanvas");return p(),w(o,M(r,{"window-size":""}),{default:b(()=>[e("TresPerspectiveCamera",H,null,512),v(T(C),u(d(a)),null,16),S,E,v(F),R,V]),_:1},16)}}});export{U as default};