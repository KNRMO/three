import{b6 as B,at as C,a5 as D,au as M,a6 as _,aH as R,be as A,aL as L,aP as d,bB as V,cg as H,aA as k,ab as z,r as K,o as T,C as I,J as N,ac as W,ad as j,bk as E,a1 as r,a as O,ae as X,af as Z,T as g,ag as q}from"./vendor.n5mLuYaN1718275421844.js";import{C as J}from"./vanilla-307d3a93.esm.LKieLikZ1718275421844.js";import"./object_hash.DvA9o96b1718275421844.js";import"./index.iuxbrWH61718275421844.js";import{a as F}from"./axios.hy2BcW2f1718275421844.js";import"./_commonjsHelpers.5-cIlDoe1718275421844.js";import"./_commonjs-dynamic-modules.h-SxKiO41718275421844.js";class p{constructor(e,i){const s=p.replaceVariable(e),l=new J({baseMaterial:B,vertexShader:"	\n            varying vec2 vUv;\n            void main() {\n                csm_Position = position * vec3(1.0);\n                vUv = uv;\n            } ",fragmentShader:s,side:C,uniforms:i.material.uniforms});this.material=l,console.log(this.material)}static replaceVariable(e){return e="varying vec2 vUv;\n"+e,/iTime|iTimeDelta/g.test(e)&&(e="varying vec2 vUv;\nuniform float utime;\n"+e.split("varying vec2 vUv;\n")[1],e=e.replace(/iTime|iTimeDelta/g,"utime")),/iResolution\.[a-zA-Z_]+/g.test(e)&&(e="varying vec2 vUv;\nuniform vec2 uresolution;\n"+e.split("varying vec2 vUv;\n")[1],e=e.replace(/iResolution\.[a-zA-Z_]+/g,"1."),e=e.replace(/iResolution/g,"1.")),/iChannel0|iChannel1|iChannel2|iChannel3/g.test(e)&&(e="varying vec2 vUv;\nuniform sampler2D  utexture;\n"+e.split("varying vec2 vUv;\n")[1],e=e.replace(/iChannel0|iChannel1|iChannel2|iChannel3/g,"utexture")),e.replace(/iMouse/g,"umouse"),e.replace(/void mainImage\( out vec4 fragColor, in vec2 fragCoord \)/g,"void main()").replace(/fragColor/g,"csm_DiffuseColor").replace(/fragCoord/g,"vUv")}}const Q={ref:"perspectiveCameraRef",position:[300,250,-122],fov:45,near:1,far:1e4},Y=r("TresAmbientLight",{color:"#ffffff"},null,-1),$=r("TresDirectionalLight",{position:[100,100,0],intensity:.5,color:"#ffffff"},null,-1),S=["object","side"],ee=r("TresAxesHelper",{args:[1e3],position:[0,19,0]},null,-1),te=r("TresGridHelper",{args:[6e3,100],position:[0,19,0]},null,-1),ce=D({__name:"shadertoyMaterial",async setup(ae){let e,i;const s={clearColor:"#000000",shadows:!0,alpha:!1,useLegacyLights:!0},l={autoRotate:!0,enableDamping:!0},c=new M({title:"参数"}),n=_({addres:"https://www.shadertoy.com/view/mtyGWy",shadervalue:""});let f=([e,i]=R(()=>E(["./plugins/earthSample/image/earthA/moon_ring.png"])),e=await e,i(),e),a=new A,h=_({material:{uniforms:{utime:{value:0},uresolution:{value:new L(40,40)},utexture:{value:f}}}}),v=new d(100,100,100);c.addBlade({view:"list",label:"shadertoy在线地址",parse:t=>String(t),options:[{text:"1",value:"https://www.shadertoy.com/view/mtyGWy"},{text:"2",value:"https://www.shadertoy.com/view/tlVGDt"},{text:"3",value:"https://www.shadertoy.com/view/ttKGDt"}],value:"https://www.shadertoy.com/view/mtyGWy"}).on("change",t=>{n.addres=t.value,m(v)});let w=new d(100,100,100),y=new V(100,100),x=new H(100,10,100,16);c.addBlade({view:"list",label:"几何体",options:[{text:"BOX",value:w},{text:"Plane",value:y},{text:"TorusKnot",value:x}],value:w}).on("change",t=>{v=t.value,m(v)});const m=t=>{let u="https://www.shadertoy.com/api/v1/shaders/"+n.addres.split("https://www.shadertoy.com/view/")[1]+"?key=BdHlhH";F.get(u).then(function(o){o.data.Error&&alert(o.data.Error),n.shadervalue=o.data.Shader.renderpass[0].code;let G=new p(n.shadervalue,h);a.clear();let U=new k(t,G.material);a.add(U),b(a,t)}).catch(function(o){console.log(o)})},b=(t,u)=>{t.children[0].geometry.dispose(),t.children[0].geometry=u},{onLoop:P}=j();return P(({delta:t})=>{h.material.uniforms.utime.value+=t}),z(()=>{let t=new d(100,100,100);m(t)}),(t,u)=>{const o=K("TresCanvas");return T(),I(o,W(s,{"window-size":""}),{default:N(()=>[r("TresPerspectiveCamera",Q,null,512),O(g(q),X(Z(l)),null,16),Y,$,r("primitive",{object:g(a),side:g(C)},null,8,S),ee,te]),_:1},16)}}});export{ce as default};