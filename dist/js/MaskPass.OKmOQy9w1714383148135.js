import{bd as U,ax as k,be as B,aT as t,ar as L,bf as E,at as R,a1 as x,ak as G,a6 as I,o as y,x as w,L as F,a$ as Q,aF as H,a9 as V,aH as W,bg as X,aw as N,aL as A,bh as $,r as j,E as Y,a as g,ac as q,Y as h}from"./vendor.67sOx1cX1714383148135.js";import{C as J,E as K,R as _,M as O,S as Z,a as z}from"./EffectComposer.MEFPxBwx1714383148135.js";import{U as ee}from"./UnrealBloomPass.sAfE9_291714383148135.js";import{P as se,F as ae}from"./Pass.OtVLzs1n1714383148135.js";const te={uniforms:{tDiffuse:{value:null},tDisp:{value:null},byp:{value:0},amount:{value:.08},angle:{value:.02},seed:{value:.02},seed_x:{value:.02},seed_y:{value:.02},distortion_x:{value:.5},distortion_y:{value:.6},col_s:{value:.05}},vertexShader:"\n\n		varying vec2 vUv;\n		void main() {\n			vUv = uv;\n			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n		}",fragmentShader:"\n\n		uniform int byp; //should we apply the glitch ?\n\n		uniform sampler2D tDiffuse;\n		uniform sampler2D tDisp;\n\n		uniform float amount;\n		uniform float angle;\n		uniform float seed;\n		uniform float seed_x;\n		uniform float seed_y;\n		uniform float distortion_x;\n		uniform float distortion_y;\n		uniform float col_s;\n\n		varying vec2 vUv;\n\n\n		float rand(vec2 co){\n			return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n		}\n\n		void main() {\n			if(byp<1) {\n				vec2 p = vUv;\n				float xs = floor(gl_FragCoord.x / 0.5);\n				float ys = floor(gl_FragCoord.y / 0.5);\n				//based on staffantans glitch shader for unity https://github.com/staffantan/unityglitch\n				float disp = texture2D(tDisp, p*seed*seed).r;\n				if(p.y<distortion_x+col_s && p.y>distortion_x-col_s*seed) {\n					if(seed_x>0.){\n						p.y = 1. - (p.y + distortion_y);\n					}\n					else {\n						p.y = distortion_y;\n					}\n				}\n				if(p.x<distortion_y+col_s && p.x>distortion_y-col_s*seed) {\n					if(seed_y>0.){\n						p.x=distortion_x;\n					}\n					else {\n						p.x = 1. - (p.x + distortion_x);\n					}\n				}\n				p.x+=disp*seed_x*(seed/5.);\n				p.y+=disp*seed_y*(seed/5.);\n				//base from RGB shift shader\n				vec2 offset = amount * vec2( cos(angle), sin(angle));\n				vec4 cr = texture2D(tDiffuse, p + offset);\n				vec4 cga = texture2D(tDiffuse, p);\n				vec4 cb = texture2D(tDiffuse, p - offset);\n				gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);\n				//add noise\n				vec4 snow = 200.*amount*vec4(rand(vec2(xs * seed,ys * seed*50.))*0.2);\n				gl_FragColor = gl_FragColor+ snow;\n			}\n			else {\n				gl_FragColor=texture2D (tDiffuse, vUv);\n			}\n		}"};class re extends se{constructor(e=64){super();const a=te;this.uniforms=U.clone(a.uniforms),this.heightMap=this.generateHeightmap(e),this.uniforms.tDisp.value=this.heightMap,this.material=new k({uniforms:this.uniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.fsQuad=new ae(this.material),this.goWild=!1,this.curF=0,this.generateTrigger()}render(e,a,r){e.capabilities.isWebGL2===!1&&(this.uniforms.tDisp.value.format=B),this.uniforms.tDiffuse.value=r.texture,this.uniforms.seed.value=Math.random(),this.uniforms.byp.value=0,this.curF%this.randX==0||this.goWild==!0?(this.uniforms.amount.value=Math.random()/30,this.uniforms.angle.value=t.randFloat(-Math.PI,Math.PI),this.uniforms.seed_x.value=t.randFloat(-1,1),this.uniforms.seed_y.value=t.randFloat(-1,1),this.uniforms.distortion_x.value=t.randFloat(0,1),this.uniforms.distortion_y.value=t.randFloat(0,1),this.curF=0,this.generateTrigger()):this.curF%this.randX<this.randX/5?(this.uniforms.amount.value=Math.random()/90,this.uniforms.angle.value=t.randFloat(-Math.PI,Math.PI),this.uniforms.distortion_x.value=t.randFloat(0,1),this.uniforms.distortion_y.value=t.randFloat(0,1),this.uniforms.seed_x.value=t.randFloat(-.3,.3),this.uniforms.seed_y.value=t.randFloat(-.3,.3)):this.goWild==!1&&(this.uniforms.byp.value=1),this.curF++,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(a),this.clear&&e.clear(),this.fsQuad.render(e))}generateTrigger(){this.randX=t.randInt(120,240)}generateHeightmap(e){const a=new Float32Array(e*e),r=e*e;for(let i=0;i<r;i++){const s=t.randFloat(0,1);a[i]=s}const d=new L(a,e,e,E,R);return d.needsUpdate=!0,d}dispose(){this.material.dispose(),this.heightMap.dispose(),this.fsQuad.dispose()}}const oe=x({__name:"MaskPass",setup(c){const e=new J,{camera:a,renderer:r,scene:d,sizes:i}=G();let s=null;const f={threshold:0,strength:.972,radius:.21},P=(o,n,C,m,v)=>{const l=new _(o,n);s.addPass(l);const u=new ee(new W(m,v),f.strength,f.radius,f.threshold);s.addPass(u)},M=(o,n,C,m,v)=>{const l=new X(16777215);l.position.set(550,100,550),l.intensity=1.6,o.add(l);let u=new N(new A(1,1,1),new $);u.position.set(1,2,4),o.add(u);var p=new _(o,n);p.clear=!1,s.addPass(p);const T=new O(o,n);s.addPass(T);const S=new re;s.addPass(S),s.addPass(e)},b=()=>{const o=new Z(z);o.renderToScreen=!0,s.addPass(o)};I(()=>{i.width.value&&!s&&(s=new K(r.value),s.renderTarget1.stencilBuffer=!0,s.renderTarget2.stencilBuffer=!0,P(d.value,a.value,r.value,i.width.value,i.height.value),M(new H,a.value,r.value,i.width.value,i.height.value),b())});const{onLoop:D}=V();return D(()=>{s&&(r.value.autoClear=!1,s.render())}),(o,n)=>(y(),w(F(Q),{args:[1,1,1],color:"orange",position:[3,2,1]}))}}),ie=h("TresPerspectiveCamera",{position:[10,10,10]},null,-1),ne=h("TresAmbientLight",{intensity:1},null,-1),le=h("TresGridHelper",{args:[10,10]},null,-1),ce=x({__name:"MaskPass",setup(c){return(e,a)=>{const r=j("TresCanvas");return y(),w(r,{disableRender:"","window-size":""},{default:Y(()=>[ie,ne,g(F(q)),le,g(oe)]),_:1})}}});export{ce as default};