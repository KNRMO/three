import{Z as d,aP as f,a_ as a,b8 as m,bg as u,a4 as p,o as _,c as g,V as s,J as l,D as h}from"./vendor.56c367c31704931946430.js";import{R as w}from"./Reflector.0a39b3111704931946430.js";const z=["object","rotation-x"],S=["object"],r=10,P=d({__name:"reflectorMesh",props:{mirrorSize:{default:10},gridSize:{default:10},mirrorColor:{default:"#ffffff"},divisions:{default:10},colorCenterLine:{default:"#444444"},colorGrid:{default:"#888888"}},setup(n){const e=n,{sizes:t}=f(),c={clipBias:.1,textureWidth:t.width.value*window.devicePixelRatio,textureHeight:t.height.value*window.devicePixelRatio,multisample:0,color:new a(e.mirrorColor)},o=new w(new m(r,r),c),i=new u(r,e.divisions,e.colorCenterLine,e.colorGrid);return p(()=>{e.mirrorColor&&(o.material.uniforms.color.value=new a(e.mirrorColor)),e.mirrorSize&&o.scale.set(e.mirrorSize/r,e.mirrorSize/r,1),e.gridSize&&i&&i.scale.set(e.gridSize/r,e.gridSize/r,e.gridSize/r)}),(v,C)=>(_(),g(h,null,[s("primitive",{object:l(o),"rotation-x":-Math.PI/2,"position-y":-1e-4},null,8,z),s("primitive",{object:l(i)},null,8,S)],64))}});export{P as _};