import{i as t}from"./ice-utils.on-X5sTt1722217438692.js";import{_ as n,o as e,m as o}from"./gl-matrix.ty0qMxNC1722217438692.js";import{P as r}from"./tweakpane.yHWGBmom1722217438692.js";import{d as i,r as a,q as c,o as s,D as u,J as f,u as l}from"./@vue.Q1VpS3901722217438692.js";const m="\n\nattribute vec3 aPosition;\nattribute vec2 aTexCoords;\n\nuniform mat4 uProjection;\nuniform mat4 uView;\nuniform mat4 uModel;\n\nvarying vec2 texCoords;\n\nvoid main()\n{\n    texCoords=aTexCoords;\n    gl_Position=uProjection*uView*uModel*vec4(aPosition,1.);\n}",d="\nprecision mediump float;\n\nvarying vec2 texCoords;\n\nuniform sampler2D textureSampler;\n\nvoid main()\n{\n    gl_FragColor=texture2D(textureSampler,texCoords);\n}",_=b;!function(t,n){const e=b,o=T();for(;;)try{if(542381===-parseInt(e(437))/1*(-parseInt(e(455))/2)+parseInt(e(488))/3*(-parseInt(e(487))/4)+parseInt(e(429))/5+parseInt(e(444))/6*(-parseInt(e(457))/7)+-parseInt(e(491))/8+parseInt(e(403))/9*(parseInt(e(416))/10)+parseInt(e(425))/11)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const x=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){x(this,(function(){const t=b,n=new RegExp(t(420)),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),o=R(t(397));n[t(394)](o+t(453))&&e[t(394)](o+t(433))?R():o("0")}))()}();const E=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[b(479)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();E(void 0,(function(){const t=b;let n;try{n=Function("return (function() "+t(401)+");")()}catch(r){n=window}const e=n[t(483)]=n[t(483)]||{},o=[t(465),t(438),"info",t(419),t(454),t(427),t(391)];for(let i=0;i<o.length;i++){const n=E.constructor[t(452)][t(461)](E),r=o[i],a=e[r]||n;n[t(449)]=E.bind(E),n[t(441)]=a[t(441)].bind(a),e[r]=n}}))();const g={id:"canvaswebgl"},p=[_(471)];function T(){const t=["ELEMENT_ARRAY_BUFFER","img","input","lookAt","uView","while (true) {}","11855doqISw","warn","canvas","COLOR_BUFFER_BIT","toString","bindFramebuffer","framebufferTexture2D","890646qnYoKs","offset_right_top","stateObject","offset_left_bottom","constructor","__proto__","vertexAttribPointer","height","prototype","chain","exception","118ZFbjak","value","14CtkCAs","addBlade","scale","FLOAT","bind","RGBA","BYTES_PER_ELEMENT","enable","log","uniformMatrix4fv","bufferData","useProgram","change","slider","src","offset_left_top","TEXTURE_MIN_FILTER","logo-texture","uModel","bindTexture","createBuffer","TEXTURE_WRAP_T","apply","call","clear","STATIC_DRAW","console","COLOR_ATTACHMENT0","TRIANGLES","bindBuffer","137668WmfRbG","81eKXVxF","action","TEXTURE_2D","1942512CkcSMB","inline","innerHeight","webgl","width","trace","texParameteri","webglPostProcessing","test","texImage2D","gger","init","是否后处理","enableVertexAttribArray","getElementById",'{}.constructor("return this")( )',"CLAMP_TO_EDGE","3726AYhHHo","hidden","UNSIGNED_BYTE","blendFunc","uProjection","uniform1f","SRC_ALPHA","TEXTURE_WRAP_S","offset_right_bottom","createTexture","ARRAY_BUFFER","clearColor","length","4570iaZcyt","mixParam","#canvaswebgl","error","function *\\( *\\)","drawElements","addBinding","getContext","FRAMEBUFFER","5995781HbjzSv","color","table","mat4","2888110tkNwmD","create"];return(T=function(){return t})()}function b(t,n){const e=T();return(b=function(t,n){return e[t-=391]})(t,n)}const A=i({__name:_(393),setup(i){const x=_;let E,T,b,A,R,y,v,h,F,w,C,P,U;const B=1,I=.71,S=.76,D=new r({title:"参数"}),L=a({hidden:!0,offset_right_top:{x:.5,y:.5},offset_right_bottom:{x:.5,y:.5},offset_left_top:{x:.5,y:.5},offset_left_bottom:{x:.5,y:.5},overlay:{r:1,g:0,b:.33}});D[x(458)]({view:x(470),label:"颜色",min:0,max:1,value:.5}).on(x(469),(t=>{const n=x;G(),T[n(408)](P,t[n(456)])}));let N=new Float32Array([.5,.5,0,1,1,.5,-.5,0,1,0,-.5,-.5,0,0,0,-.5,.5,0,0,1]);D[x(422)](L,"hidden",{label:x(398)}),D[x(422)](L,"offset_right_top",{picker:"inline",x:{min:0,max:1},y:{min:0,max:1}}).on(x(469),(t=>{const n=x;N[0]=L[n(445)].x,N[1]=L[n(445)].y,G()})),D.addBinding(L,"offset_right_bottom",{picker:x(492),x:{min:-1,max:1},y:{min:-1,max:1}}).on("change",(t=>{const n=x;N[5]=L[n(411)].x,N[6]=L[n(411)].y,G()})),D[x(422)](L,x(447),{picker:x(492),x:{min:-1,max:1},y:{min:-1,max:1}}).on(x(469),(t=>{const n=x;N[10]=L.offset_left_bottom.x,N[11]=L[n(447)].y,G()})),D.addBinding(L,"offset_left_top",{picker:"inline",x:{min:-1,max:1},y:{min:-1,max:1}}).on("change",(t=>{const n=x;N[15]=L[n(472)].x,N[16]=L.offset_left_top.y,G()})),c((()=>{M()}));const M=function(){const n=x;E=document.querySelector(n(418)),E[n(495)]=window.innerWidth,E.height=window[n(493)],T=E[n(423)](n(494)),T&&(function(){const n=x,e=new Float32Array([.5,.5,0,1,1,.5,-.5,0,1,0,-.5,-.5,0,0,0,-.5,.5,0,0,1]),o=new Uint8Array([0,1,2,0,2,3]);A=Y(e,o),b=t(T,m,d),F=T.getUniformLocation(b,n(407)),w=T.getUniformLocation(b,n(435)),C=T.getUniformLocation(b,n(475)),U=X(document[n(400)]("logo-texture"))}(),G(),T[n(464)](T.BLEND),T[n(406)](T[n(409)],T.ONE_MINUS_SRC_ALPHA),k())};function k(){const t=x;T[t(442)](T[t(424)],v),T[t(414)](B,I,S,1),T[t(481)](T[t(440)]),function(){const t=x;T[t(468)](b),T[t(486)](T[t(413)],A);const o=n[t(428)].create();e(o,0,E[t(495)],E[t(451)],0,.1,100),T[t(466)](F,!1,o);const r=n[t(428)][t(430)]();n[t(428)][t(434)](r,[0,0,1],[0,0,0],[0,1,0]),T[t(466)](w,!1,r),j(U,600,600),j(U,400,400)}(),T[t(442)](T.FRAMEBUFFER,null),L[t(404)]&&(T.clear(T[t(440)]),T.clearColor(0,0,1,1),T[t(486)](T[t(413)],R),T[t(468)](y),T[t(476)](T.TEXTURE_2D,h)),T[t(421)](T[t(485)],6,T.UNSIGNED_BYTE,0),requestAnimationFrame(k)}function j(t,e,r){const i=x;let a=n[i(428)].create();n[i(428)].translate(a,a,[e,r,0]),o[i(459)](a,a,[250,250,0]),T[i(466)](C,!1,a),T.bindTexture(T[i(490)],t),T.drawElements(T[i(485)],6,T[i(405)],0)}function G(){const n=x,e=new Uint8Array([0,1,2,0,2,3]);R=Y(N,e),y=t(T,"\n\nattribute vec3 aPosition;\nattribute vec2 aTexCoords;\n\nvarying vec2 texCoords;\n\nvoid main()\n{\n    texCoords=aTexCoords;\n    gl_Position=vec4(aPosition,1.);\n}","\nprecision mediump float;\n\nvarying vec2 texCoords;\n\nuniform sampler2D textureSampler;\nuniform float mixParam;\nvoid main()\n{\n    // float luminance=dot(texture2D(textureSampler,texCoords).rgb,vec3(.3451,.2118,.302));\n    vec4 color=mix(texture2D(textureSampler,texCoords),vec4(.1098,.6784,.1843,1.),mixParam);\n    gl_FragColor=color;\n}"),P=T.getUniformLocation(y,n(417)),T.getUniformLocation(y,n(426)),function(){const t=x;h=X(E),v=T.createFramebuffer(),T[t(442)](T[t(424)],v),T[t(443)](T.FRAMEBUFFER,T[t(484)],T[t(490)],h,0),T.bindFramebuffer(T[t(424)],null)}()}function X(t){const n=x,e=T[n(412)]();return T.bindTexture(T[n(490)],e),t instanceof HTMLImageElement?T[n(395)](T[n(490)],0,T[n(462)],T.RGBA,T.UNSIGNED_BYTE,t):T[n(395)](T[n(490)],0,T[n(462)],t[n(495)],t[n(451)],0,T[n(462)],T[n(405)],null),T[n(392)](T.TEXTURE_2D,T[n(473)],T.NEAREST),T[n(392)](T[n(490)],T.TEXTURE_MAG_FILTER,T.NEAREST),T[n(392)](T.TEXTURE_2D,T[n(410)],T[n(402)]),T.texParameteri(T.TEXTURE_2D,T[n(478)],T[n(402)]),e}function Y(t,n){const e=x,o=T[e(477)]();T[e(486)](T[e(413)],o),T[e(467)](T[e(413)],t,T[e(482)]);const r=3*Float32Array[e(463)]+2*Float32Array[e(463)];T[e(450)](0,3,T[e(460)],!1,r,0),T[e(399)](0),T.vertexAttribPointer(1,2,T[e(460)],!1,r,3*Float32Array.BYTES_PER_ELEMENT),T[e(399)](1);const i=T.createBuffer();return T[e(486)](T[e(431)],i),T.bufferData(T[e(431)],n,T[e(482)]),T.bindBuffer(T[e(413)],null),o}return(t,n)=>{const e=x;return s(),u(e(439),g,[f(e(432),{id:e(474),src:l("./")+"/plugins/postProcessing/image/logo.png",style:{display:"none"}},null,8,p)])}}});function R(t){function n(t){const e=b;if("string"==typeof t)return function(t){}.constructor(e(436))[e(479)]("counter");1!==(""+t/t)[e(415)]||t%20==0?function(){return!0}[e(448)]("debu"+e(396))[e(480)](e(489)):function(){return!1}[e(448)]("debu"+e(396)).apply(e(446)),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{A as default};