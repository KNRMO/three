import{b3 as h,bu as _,cr as v,cs as M,ct as C,cu as T,cv as P,cc as S,cw as N,av as m,b9 as b,bF as x,bK as E,bI as F,aD as A,at as w}from"./vendor.3XUacTGZ1710155372121.js";import{m as I}from"./BufferGeometryUtils.TK2FB94j1710155372121.js";import{P as R,F as G,R as O,E as g,S as D}from"./EffectComposer.HzC8DuZh1710155372121.js";import{U}from"./UnrealBloomPass.3RO6EgDo1710155372121.js";const y="varying vec2 vUv;\nvoid main(){\n	vUv=uv;\n	gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);\n}",L="uniform sampler2D baseTexture;\nuniform sampler2D bloomTexture;\nvarying vec2 vUv;\nvoid main(){\n	gl_FragColor=(texture2D(baseTexture,vUv)+vec4(1.)*texture2D(bloomTexture,vUv));\n}",B={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:"\n		precision highp float;\n\n		uniform mat4 modelViewMatrix;\n		uniform mat4 projectionMatrix;\n\n		attribute vec3 position;\n		attribute vec2 uv;\n\n		varying vec2 vUv;\n\n		void main() {\n\n			vUv = uv;\n			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n		}",fragmentShader:"\n	\n		precision highp float;\n\n		uniform sampler2D tDiffuse;\n\n		#include <tonemapping_pars_fragment>\n		#include <colorspace_pars_fragment>\n\n		varying vec2 vUv;\n\n		void main() {\n\n			gl_FragColor = texture2D( tDiffuse, vUv );\n\n			// tone mapping\n\n			#ifdef LINEAR_TONE_MAPPING\n\n				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );\n\n			#elif defined( REINHARD_TONE_MAPPING )\n\n				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );\n\n			#elif defined( CINEON_TONE_MAPPING )\n\n				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );\n\n			#elif defined( ACES_FILMIC_TONE_MAPPING )\n\n				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );\n\n			#elif defined( AGX_TONE_MAPPING )\n\n				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );\n\n			#endif\n\n			// color space\n\n			#ifdef SRGB_TRANSFER\n\n				gl_FragColor = sRGBTransferOETF( gl_FragColor );\n\n			#endif\n\n		}"};class Q extends R{constructor(){super();const e=B;this.uniforms=h.clone(e.uniforms),this.material=new _({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new G(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},v.getTransfer(this._outputColorSpace)===M&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===C?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===T?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===P?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===S?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===N&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}let c=new m("#0fb1fb");const V=new b({color:c,transparent:!0,opacity:.3}),f=new x({color:new m(c),depthTest:!0,transparent:!0}),K=o=>{const e=[];o.traverse(a=>{a.isMesh&&(e.push(a.geometry),a.material=V)});const t=I(e),i=new E(t,Math.PI*6.137),r=new F(i);return f.opacity=1,r.material=f,r},l={threshold:0,strength:.972,radius:.21},k=(o,e,t,i,r)=>{const a=new O(o,e),p=new U(new A(i,r),l.strength,l.radius,l.threshold),s=new g(t);s.renderToScreen=!1,s.addPass(a),s.addPass(p);const u=new D(new w({uniforms:{baseTexture:{value:null},bloomTexture:{value:s.renderTarget2.texture}},vertexShader:y,fragmentShader:L,defines:{}}),"baseTexture");u.needsSwap=!0;const d=new Q,n=new g(t);return n.addPass(a),n.addPass(u),n.addPass(d),{finalComposer:n,effectComposer:s,renderScene:a,bloomPass:p}};export{K as r,k as u};
