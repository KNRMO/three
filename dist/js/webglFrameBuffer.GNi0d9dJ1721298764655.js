import{_ as t,m as n}from"./gl-matrix.oVMHBNGj1721298764655.js";import{i as r,r as e,d as o}from"./ice-utils.DCuzyWRZ1721298764655.js";import{d as i,q as a,o as c,D as u}from"./@vue.Q1VpS3901721298764655.js";function s(){const t=["createFramebuffer","constructor","UNSIGNED_BYTE","bindFramebuffer","createTexture","UNPACK_ALIGNMENT","rotate","__proto__","apply","console","prototype","canvaswebgl","create","chain","texImage2D","warn","trace","debu","TEXTURE_MIN_FILTER","clearColor","COLOR_BUFFER_BIT","width","enableVertexAttribArray","TEXTURE_2D","RGBA","ARRAY_BUFFER","DEPTH_TEST","bindTexture","input","STATIC_DRAW","#canvaswebgl","mat4","2600958cQkHrA","perspective","u_matrix","TEXTURE_WRAP_T","getAttribLocation","LINEAR","useProgram","1580UMqiYs","CULL_FACE","webgl","FRAMEBUFFER","enable","while (true) {}","call","bind","pixelStorei","height","a_texcoord","framebufferTexture2D","56655dxgtTZ","CLAMP_TO_EDGE","clientHeight","webglFrameBuffer","viewport","24129468EstkSF","multiply","TRIANGLES","uniformMatrix4fv","table","617wOoaZw","581600tmGZZB","length","670334bfCIBa","1962063WsdKZE","500px","exception","toString","FLOAT","texParameteri","bindBuffer","log","canvas","vertexAttribPointer","init","stateObject","test","TEXTURE_MAG_FILTER","5qIxTCb","clientWidth","createBuffer","bufferData","return (function() ","TEXTURE_WRAP_S","\nattribute vec4 a_position;\nattribute vec2 a_texcoord;\nuniform mat4 u_matrix;\nvarying vec2 v_texcoord;\nvoid main() {\n  gl_Position = u_matrix * a_position;\n  v_texcoord = a_texcoord;\n}","getUniformLocation","NEAREST","8BlCgqA","\nprecision mediump float;\nvarying vec2 v_texcoord;\nuniform sampler2D u_texture;\nvoid main(){\n\tgl_FragColor=texture2D(u_texture, v_texcoord.xy);\n}\n","gger","1370sPbmMz",'{}.constructor("return this")( )',"a_position","DEPTH_BUFFER_BIT"];return(s=function(){return t})()}const f=E;!function(t,n){const r=E,e=s();for(;;)try{if(552343===-parseInt(r(417))/1*(-parseInt(r(447))/2)+parseInt(r(421))/3+parseInt(r(418))/4*(parseInt(r(435))/5)+parseInt(r(388))/6+-parseInt(r(420))/7*(-parseInt(r(444))/8)+parseInt(r(407))/9*(parseInt(r(395))/10)+-parseInt(r(412))/11)break;e.push(e.shift())}catch(o){e.push(e.shift())}}();const _=function(){let t=!0;return function(n,r){const e=t?function(){if(r){const t=r[E(364)](n,arguments);return r=null,t}}:function(){};return t=!1,e}}();!function(){_(this,(function(){const t=E,n=new RegExp("function *\\( *\\)"),r=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),e=R(t(431));n[t(433)](e+t(369))&&r.test(e+t(384))?R():e("0")}))()}();const l=function(){let t=!0;return function(n,r){const e=t?function(){if(r){const t=r.apply(n,arguments);return r=null,t}}:function(){};return t=!1,e}}();function E(t,n){const r=s();return(E=function(t,n){return r[t-=353]})(t,n)}l(void 0,(function(){const t=E,n=function(){const t=E;let n;try{n=Function(t(439)+t(353)+");")()}catch(r){n=window}return n}(),r=n[t(365)]=n[t(365)]||{},e=[t(428),t(371),"info","error",t(423),t(416),t(372)];for(let o=0;o<e[t(419)];o++){const n=l[t(357)][t(366)][t(402)](l),i=e[o],a=r[i]||n;n[t(363)]=l[t(402)](l),n[t(424)]=a.toString[t(402)](a),r[i]=n}}))();const T={id:f(367),style:{height:f(422),width:f(422)}},A=f(441),p=f(445),m=i({__name:f(410),setup(i){const s=function(){const i=E,a=document.querySelector(i(386)),c=null==a?void 0:a.getContext(i(397));if(!c)return;var u=r(c,A,p),s=c[i(392)](u,i(354)),f=c.getAttribLocation(u,i(405)),_=c.getUniformLocation(u,i(390)),l=c[i(442)](u,"u_texture"),T=c.createBuffer();c.bindBuffer(c[i(381)],T),function(t){const n=E;var r=new Float32Array([-.5,-.5,-.5,-.5,.5,-.5,.5,-.5,-.5,-.5,.5,-.5,.5,.5,-.5,.5,-.5,-.5,-.5,-.5,.5,.5,-.5,.5,-.5,.5,.5,-.5,.5,.5,.5,-.5,.5,.5,.5,.5,-.5,.5,-.5,-.5,.5,.5,.5,.5,-.5,-.5,.5,.5,.5,.5,.5,.5,.5,-.5,-.5,-.5,-.5,.5,-.5,-.5,-.5,-.5,.5,-.5,-.5,.5,.5,-.5,-.5,.5,-.5,.5,-.5,-.5,-.5,-.5,-.5,.5,-.5,.5,-.5,-.5,-.5,.5,-.5,.5,.5,-.5,.5,-.5,.5,-.5,-.5,.5,.5,-.5,.5,-.5,.5,.5,-.5,.5,.5,.5,-.5,.5,.5,.5]);t.bufferData(t.ARRAY_BUFFER,r,t[n(385)])}(c);var m,R=c[i(437)]();c[i(427)](c.ARRAY_BUFFER,R),(m=c)[E(438)](m.ARRAY_BUFFER,new Float32Array([0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1]),m.STATIC_DRAW);var v=c[i(360)]();c[i(383)](c[i(379)],v);{const t=0,n=c[i(380)],r=1,e=1,o=0,a=c[i(380)],u=c[i(358)],s=new Uint8Array([255,255,0,255]),f=1;c[i(403)](c[i(361)],f),c[i(370)](c[i(379)],t,n,r,e,o,a,u,s),c[i(426)](c.TEXTURE_2D,c.TEXTURE_MIN_FILTER,c[i(443)]),c[i(426)](c[i(379)],c[i(434)],c[i(443)]),c[i(426)](c[i(379)],c.TEXTURE_WRAP_S,c[i(408)]),c.texParameteri(c[i(379)],c[i(391)],c[i(408)])}const x=c[i(360)]();c[i(383)](c[i(379)],x);{const t=0,n=c[i(380)],r=0,e=c[i(380)],o=c.UNSIGNED_BYTE,a=null;c[i(370)](c[i(379)],t,n,256,256,r,e,o,a),c[i(426)](c[i(379)],c[i(374)],c[i(393)]),c[i(426)](c[i(379)],c[i(440)],c[i(408)]),c[i(426)](c[i(379)],c[i(391)],c[i(408)])}const b=c[i(356)]();c[i(359)](c[i(398)],b);const g=c.COLOR_ATTACHMENT0;c[i(406)](c[i(398)],g,c.TEXTURE_2D,x,0);var d=o(0),F=0;function I(r){const e=i;c[e(394)](u),c[e(378)](s),c[e(427)](c[e(381)],T);var o=3,a=c.FLOAT,E=!1,A=0,p=0;c[e(430)](s,o,a,E,A,p),c[e(378)](f),c.bindBuffer(c[e(381)],R);o=2,a=c[e(425)],E=!1,A=0,p=0;c.vertexAttribPointer(f,o,a,E,A,p);var m=t[e(387)][e(368)]();t[e(387)][e(389)](m,-30,r,.1,1e4);let v=n[e(368)]();v=t[e(387)][e(362)](v,v,d,[0,1,0]);var x=t[e(387)][e(368)]();t[e(387)].lookAt(x,[0,0,2],[0,0,0],[0,1,0]);let b=t[e(387)].create();t[e(387)].multiply(b,x,v);var g=t[e(387)][e(368)]();t[e(387)][e(413)](g,m,b),c[e(415)](_,!1,g),c.uniform1i(l,0),c.drawArrays(c[e(414)],0,36)}requestAnimationFrame((function t(n){const r=i;var o=(n*=.001)-F;F=n,d+=-.4*o,e(c[r(429)]),c[r(399)](c[r(396)]),c.enable(c[r(382)]);c[r(359)](c[r(398)],b),c[r(383)](c[r(379)],v),c[r(411)](0,0,256,256),c.clearColor(0,1,0,1),c.clear(c[r(376)]|c[r(355)]);I(1);c.bindFramebuffer(c[r(398)],null),c[r(383)](c.TEXTURE_2D,x),c.viewport(0,0,c[r(429)][r(377)],c.canvas[r(404)]),c[r(375)](1,1,1,1),c.clear(c[r(376)]|c[r(355)]);I(c[r(429)][r(436)]/c[r(429)][r(409)]);requestAnimationFrame(t)}))};return a((()=>{s()})),(t,n)=>{const r=E;return c(),u(r(429),T)}}});function R(t){function n(t){const r=E;if("string"==typeof t)return function(t){}[r(357)](r(400))[r(364)]("counter");1!==(""+t/t)[r(419)]||t%20==0?function(){return!0}.constructor(r(373)+r(446))[r(401)]("action"):function(){return!1}[r(357)](r(373)+"gger")[r(364)](r(432)),n(++t)}try{if(t)return n;n(0)}catch(r){}}export{m as default};
