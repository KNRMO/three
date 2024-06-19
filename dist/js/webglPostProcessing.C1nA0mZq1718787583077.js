import{i as t}from"./ice-utils.I_K1z_Lm1718787583077.js";import{_ as n,m as e}from"./gl-matrix.zIJ97-ov1718787583077.js";import{P as o}from"./tweakpane.qqn77PB81718787583077.js";import{d as r,r as i,q as a,o as s,D as c,J as u,u as f}from"./@vue.CpOXM7bB1718787583077.js";const l="\n\nattribute vec3 aPosition;\nattribute vec2 aTexCoords;\n\nuniform mat4 uProjection;\nuniform mat4 uView;\nuniform mat4 uModel;\n\nvarying vec2 texCoords;\n\nvoid main()\n{\n    texCoords=aTexCoords;\n    gl_Position=uProjection*uView*uModel*vec4(aPosition,1.);\n}",m="\nprecision mediump float;\n\nvarying vec2 texCoords;\n\nuniform sampler2D textureSampler;\n\nvoid main()\n{\n    gl_FragColor=texture2D(textureSampler,texCoords);\n}",_=g;!function(t,n){const e=g,o=T();for(;;)try{if(767216===-parseInt(e(491))/1*(parseInt(e(498))/2)+-parseInt(e(476))/3+-parseInt(e(445))/4*(parseInt(e(492))/5)+parseInt(e(505))/6+-parseInt(e(452))/7*(-parseInt(e(439))/8)+parseInt(e(415))/9*(-parseInt(e(447))/10)+-parseInt(e(458))/11*(-parseInt(e(466))/12))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const d=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[g(451)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){d(this,(function(){const t=g,n=new RegExp("function *\\( *\\)"),e=new RegExp(t(446),"i"),o=R(t(427));n[t(485)](o+"chain")&&e[t(485)](o+"input")?R():o("0")}))()}();const x=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,o}}();x(void 0,(function(){const t=g,n=function(){const t=g;let n;try{n=Function("return (function() "+t(419)+");")()}catch(e){n=window}return n}(),e=n[t(493)]=n[t(493)]||{},o=[t(421),t(424),t(471),t(481),t(496),t(443),"trace"];for(let r=0;r<o[t(432)];r++){const n=x[t(507)][t(428)][t(503)](x),i=o[r],a=e[i]||n;n[t(467)]=x.bind(x),n[t(456)]=a[t(456)][t(503)](a),e[i]=n}}))();const p={id:"canvaswebgl"},E=[_(486)];function g(t,n){const e=T();return(g=function(t,n){return e[t-=411]})(t,n)}function T(){const t=["createFramebuffer","bindTexture","uModel","clear","192GvjnMa","while (true) {}","是否后处理","innerWidth","table","enable","296308LWuNbS","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","198640JpaDRB","ELEMENT_ARRAY_BUFFER","hidden","ONE_MINUS_SRC_ALPHA","apply","248654JYdTKL","call","bufferData","scale","toString","none","131956fWuAXs","FRAMEBUFFER","canvas","ortho","mixParam","height","debu","COLOR_ATTACHMENT0","1932DLXOYa","__proto__","querySelector","bindFramebuffer","createBuffer","info","uniformMatrix4fv","BLEND","CLAMP_TO_EDGE","RGBA","972237EdRtXs","webglPostProcessing","lookAt","create","gger","error","texParameteri","getUniformLocation","webgl","test","src","counter","TEXTURE_2D","BYTES_PER_ELEMENT","uView","4SwMRed","40RBJPcO","console","bindBuffer","addBlade","exception","TRIANGLES","390202wsZiuI","offset_right_top","#canvaswebgl","COLOR_BUFFER_BIT","uniform1f","bind","TEXTURE_MAG_FILTER","5591178TtsspM","logo-texture","constructor","STATIC_DRAW","mat4","action","offset_left_top","clearColor","offset_left_bottom","translate","567QPzfOn","width","vertexAttribPointer","change",'{}.constructor("return this")( )',"drawElements","log","getElementById","inline","warn","value","offset_right_bottom","init","prototype","addBinding","NEAREST","string","length","ARRAY_BUFFER","slider"];return(T=function(){return t})()}const A=r({__name:_(477),setup(r){const d=_;let x,g,T,A,R,b,y,v,F,h,I,w,P;const B=1,C=.71,D=.76,S=new o({title:"参数"}),U=i({hidden:!0,offset_right_top:{x:.5,y:.5},offset_right_bottom:{x:.5,y:.5},offset_left_top:{x:.5,y:.5},offset_left_bottom:{x:.5,y:.5},overlay:{r:1,g:0,b:.33}});S[d(495)]({view:d(434),label:"颜色",min:0,max:1,value:.5}).on(d(418),(t=>{const n=d;G(),g[n(502)](w,t[n(425)])}));let L=new Float32Array([.5,.5,0,1,1,.5,-.5,0,1,0,-.5,-.5,0,0,0,-.5,.5,0,0,1]);S[d(429)](U,d(449),{label:d(441)}),S[d(429)](U,"offset_right_top",{picker:d(423),x:{min:0,max:1},y:{min:0,max:1}}).on(d(418),(t=>{const n=d;L[0]=U[n(499)].x,L[1]=U[n(499)].y,G()})),S[d(429)](U,d(426),{picker:d(423),x:{min:-1,max:1},y:{min:-1,max:1}}).on(d(418),(t=>{const n=d;L[5]=U[n(426)].x,L[6]=U.offset_right_bottom.y,G()})),S[d(429)](U,d(413),{picker:d(423),x:{min:-1,max:1},y:{min:-1,max:1}}).on(d(418),(t=>{const n=d;L[10]=U[n(413)].x,L[11]=U[n(413)].y,G()})),S.addBinding(U,"offset_left_top",{picker:d(423),x:{min:-1,max:1},y:{min:-1,max:1}}).on(d(418),(t=>{const n=d;L[15]=U.offset_left_top.x,L[16]=U[n(411)].y,G()})),a((()=>{N()}));const N=function(){const n=d;x=document[n(468)](n(500)),x[n(416)]=window[n(442)],x.height=window.innerHeight,g=x.getContext(n(484)),g&&(function(){const n=d,e=new Float32Array([.5,.5,0,1,1,.5,-.5,0,1,0,-.5,-.5,0,0,0,-.5,.5,0,0,1]),o=new Uint8Array([0,1,2,0,2,3]);A=j(e,o),T=t(g,l,m),F=g[n(483)](T,"uProjection"),h=g[n(483)](T,n(490)),I=g[n(483)](T,n(437)),P=X(document[n(422)]("logo-texture"))}(),G(),g[n(444)](g[n(473)]),g.blendFunc(g.SRC_ALPHA,g[n(450)]),M())};function M(){const t=d;g[t(469)](g[t(459)],y),g[t(412)](B,C,D,1),g[t(438)](g.COLOR_BUFFER_BIT),function(){const t=d;g.useProgram(T),g[t(494)](g[t(433)],A);const o=n[t(509)][t(479)]();e[t(461)](o,0,x[t(416)],x[t(463)],0,.1,100),g.uniformMatrix4fv(F,!1,o);const r=n[t(509)][t(479)]();n[t(509)][t(478)](r,[0,0,1],[0,0,0],[0,1,0]),g[t(472)](h,!1,r),O(P,600,600),O(P,400,400)}(),g[t(469)](g.FRAMEBUFFER,null),U[t(449)]&&(g[t(438)](g[t(501)]),g[t(412)](0,0,1,1),g[t(494)](g[t(433)],R),g.useProgram(b),g[t(436)](g.TEXTURE_2D,v)),g[t(420)](g.TRIANGLES,6,g.UNSIGNED_BYTE,0),requestAnimationFrame(M)}function O(t,e,o){const r=d;let i=n[r(509)][r(479)]();n[r(509)][r(414)](i,i,[e,o,0]),n[r(509)][r(455)](i,i,[250,250,0]),g[r(472)](I,!1,i),g[r(436)](g[r(488)],t),g[r(420)](g[r(497)],6,g.UNSIGNED_BYTE,0)}function G(){const n=d,e=new Uint8Array([0,1,2,0,2,3]);R=j(L,e),b=t(g,"\n\nattribute vec3 aPosition;\nattribute vec2 aTexCoords;\n\nvarying vec2 texCoords;\n\nvoid main()\n{\n    texCoords=aTexCoords;\n    gl_Position=vec4(aPosition,1.);\n}","\nprecision mediump float;\n\nvarying vec2 texCoords;\n\nuniform sampler2D textureSampler;\nuniform float mixParam;\nvoid main()\n{\n    // float luminance=dot(texture2D(textureSampler,texCoords).rgb,vec3(.3451,.2118,.302));\n    vec4 color=mix(texture2D(textureSampler,texCoords),vec4(.1098,.6784,.1843,1.),mixParam);\n    gl_FragColor=color;\n}"),w=g[n(483)](b,n(462)),g[n(483)](b,"color"),function(){const t=d;v=X(x),y=g[t(435)](),g.bindFramebuffer(g[t(459)],y),g.framebufferTexture2D(g.FRAMEBUFFER,g[t(465)],g.TEXTURE_2D,v,0),g[t(469)](g[t(459)],null)}()}function X(t){const n=d,e=g.createTexture();return g[n(436)](g[n(488)],e),t instanceof HTMLImageElement?g.texImage2D(g[n(488)],0,g[n(475)],g[n(475)],g.UNSIGNED_BYTE,t):g.texImage2D(g[n(488)],0,g[n(475)],t.width,t[n(463)],0,g[n(475)],g.UNSIGNED_BYTE,null),g.texParameteri(g[n(488)],g.TEXTURE_MIN_FILTER,g[n(430)]),g[n(482)](g[n(488)],g[n(504)],g.NEAREST),g[n(482)](g[n(488)],g.TEXTURE_WRAP_S,g[n(474)]),g[n(482)](g[n(488)],g.TEXTURE_WRAP_T,g[n(474)]),e}function j(t,n){const e=d,o=g[e(470)]();g[e(494)](g[e(433)],o),g[e(454)](g[e(433)],t,g[e(508)]);const r=3*Float32Array[e(489)]+2*Float32Array[e(489)];g[e(417)](0,3,g.FLOAT,!1,r,0),g.enableVertexAttribArray(0),g[e(417)](1,2,g.FLOAT,!1,r,3*Float32Array[e(489)]),g.enableVertexAttribArray(1);const i=g[e(470)]();return g.bindBuffer(g[e(448)],i),g.bufferData(g[e(448)],n,g.STATIC_DRAW),g.bindBuffer(g[e(433)],null),o}return(t,n)=>{const e=d;return s(),c(e(460),p,[u("img",{id:e(506),src:f("./")+"/plugins/postProcessing/image/logo.png",style:{display:e(457)}},null,8,E)])}}});function R(t){function n(t){const e=g;if(typeof t===e(431))return function(t){}[e(507)](e(440))[e(451)](e(487));1!==(""+t/t).length||t%20==0?function(){return!0}.constructor(e(464)+e(480))[e(453)](e(510)):function(){return!1}.constructor(e(464)+e(480)).apply("stateObject"),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{A as default};
