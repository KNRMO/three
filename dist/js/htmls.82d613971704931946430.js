import{Z as u,k as i,$ as p,o as h,v as d,C as t,a6 as o,J as s,a7 as f,a0 as m,a1 as x,a2 as T,a,aa as g,V as e,ag as n}from"./vendor.56c367c31704931946430.js";const M=e("TresPerspectiveCamera",{position:[3,0,8]},null,-1),w={position:[1,1,1]},y=e("TresBoxGeometry",null,null,-1),C=e("TresMeshNormalMaterial",null,null,-1),v=e("h1",{class:"bg-white text-xs p-0.5 rounded"}," I'm a Box 📦 ",-1),B=e("TresSphereGeometry",null,null,-1),S=e("TresMeshNormalMaterial",null,null,-1),b=e("h1",{class:"bg-white text-xs p-0.5 rounded"}," I'm a Sphere ⭕️ ",-1),N=e("TresTorusGeometry",null,null,-1),k=e("TresMeshNormalMaterial",null,null,-1),I=e("h1",{class:"bg-white text-xs p-0.5 text-fuchsia-500"}," I'm a Sprite 👻 ",-1),R=e("h1",{class:"bg-blue-gray-900 text-xs rounded p-0.5 text-green-100"}," I'm just a Div 🔖 ",-1),G=e("TresAmbientLight",{intensity:1},null,-1),z=u({__name:"htmls",setup(V){const _={clearColor:"#82DBC5",shadows:!0,alpha:!1,shadowMapType:m,outputColorSpace:x,toneMapping:T},l=i(null),c=i(null),r=p({wrapperClass:"wrapper",as:"div",center:!0});return(D,P)=>(h(),d(s(f),o(_,{"window-size":""}),{default:t(()=>[M,a(s(g)),e("TresMesh",w,[y,C,a(s(n),o(r,{transform:"",occlude:[l.value]}),{default:t(()=>[v]),_:1},16,["occlude"])]),e("TresMesh",{ref_key:"sphereRef",ref:l,position:[4,1,1]},[B,S,a(s(n),o(r,{transform:""}),{default:t(()=>[b]),_:1},16)],512),e("TresMesh",{ref_key:"torusRef",ref:c,position:[7,1,1]},[N,k,a(s(n),o(r,{transform:"",sprite:""}),{default:t(()=>[I]),_:1},16)],512),a(s(n),o({position:[2,-1,1]},r,{transform:"",sprite:""}),{default:t(()=>[R]),_:1},16),G]),_:1},16))}});export{z as default};