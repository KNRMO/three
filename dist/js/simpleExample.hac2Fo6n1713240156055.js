import{bP as p,aC as d,a1 as h,a9 as u,ap as m,r as f,o as g,x as v,E as C,a8 as y,a4 as S,cq as _,a as w,L as M,ac as x,Y as i,aa as b,ab as P}from"./vendor.ZFCO-UKh1713240156055.js";const l={segments:30,w:256,h:256},T=()=>{const e=new Array;for(let o=0;o<l.segments;o++)e[o]=parseInt(Math.random()*25+10);return e},G=(e,o)=>{let{x:s,y:a,radius:t,weight:n}=o;t=parseInt(t*n);const r=e.createRadialGradient(s,a,0,s,a,t);r.addColorStop(0,"rgba(255, 255, 0, 1)"),r.addColorStop(1,"rgba(255, 0, 0, 0)"),e.fillStyle=r,e.globalAlpha=n,e.beginPath(),e.arc(s,a,t,0,2*Math.PI),e.closePath(),e.fill()},L=()=>{const e={1:"#f00",.8:"#e2fa00",.6:"#33f900",.3:"#0349df",0:"#fff"},o=256,s=10,a=document.createElement("canvas");a.width=o,a.height=s,a.style.position="absolute",a.style.top="0",a.style.right="0";const t=a.getContext("2d"),n=t.createLinearGradient(0,0,o,0);for(const c in e)n.addColorStop(c,e[c]);t.fillStyle=n,t.fillRect(0,0,o,s),document.body.appendChild(a);const r=new p(a);return r.minFilter=d,r.needsUpdate=!0,r},R=()=>{const e=document.createElement("canvas");e.width=l.w,e.height=l.h,e.style.position="absolute",e.style.top="20px",e.style.right="0";const o=e.getContext("2d"),s=T();for(let t=0;t<l.segments;t++){const n=s[t]/35,r=Math.random()*l.w,c=Math.random()*l.h;G(o,{x:r,y:c,radius:80,weight:n})}document.body.appendChild(e);const a=new p(e);return a.minFilter=d,a.needsUpdate=!0,a},U=i("TresPerspectiveCamera",{position:[0,0,3e3],fov:40,near:.1,far:1e4},null,-1),A=i("TresAmbientLight",{color:"#eef0ff",intensity:1},null,-1),D=i("TresPlaneGeometry",{args:[1500,1500]},null,-1),F=h({__name:"simpleExample",setup(e){const o={clearColor:"#030311",shadows:!0,alpha:!1,outputColorSpace:S,shadowMapType:_,useLegacyLights:!0};u().onLoop(({delta:t})=>{});const s={transparent:!0,side:m,vertexShader:"\n	varying vec2 vUv;\n  void main() {\n    vUv = uv;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n  }",fragmentShader:"\n	#ifdef GL_ES\n  precision highp float;\n  #endif\n  varying vec2 vUv;\n  uniform sampler2D alphaScaleMap;\n  uniform sampler2D paletteMap;\n  void main() {\n    vec4 alphaColor = texture2D(alphaScaleMap, vUv);\n    vec4 color = texture2D(paletteMap, vec2(alphaColor.a, 0.0));\n    gl_FragColor = vec4(color.r, color.g, color.b, alphaColor.a);\n	}",uniforms:{alphaScaleMap:{type:"t",value:R()},paletteMap:{type:"t",value:L()}}};function a(t){t&&console.log(t)}return(t,n)=>{const r=f("TresCanvas");return g(),v(r,y(o,{"window-size":""}),{default:C(()=>[U,w(M(x),{autoRotate:!0,autoRotateSpeed:2}),A,i("TresMesh",{position:[0,0,10],onPointerMove:a},[D,i("TresShaderMaterial",b(P(s)),null,16)],32)]),_:1},16)}}});export{F as default};