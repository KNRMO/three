import{_ as t,m as n,a as e}from"./gl-matrix.zIJ97-ov1718787583077.js";import{i as r,r as o,d as i}from"./ice-utils.I_K1z_Lm1718787583077.js";import{d as a,q as c,o as u,D as s}from"./@vue.CpOXM7bB1718787583077.js";const f=_;function _(t,n){const e=E();return(_=function(t,n){return e[t-=175]})(t,n)}!function(t,n){const e=_,r=E();for(;;)try{if(608723===parseInt(e(251))/1*(parseInt(e(233))/2)+-parseInt(e(262))/3*(-parseInt(e(191))/4)+-parseInt(e(235))/5*(-parseInt(e(193))/6)+parseInt(e(243))/7+-parseInt(e(197))/8*(parseInt(e(258))/9)+-parseInt(e(175))/10+-parseInt(e(263))/11)break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const l=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e[_(244)](n,arguments);return e=null,t}}:function(){};return t=!1,r}}();function E(){const t=["bindTexture","3623893vQpKtK","apply","warn","error","TEXTURE_WRAP_S","clear","while (true) {}","NEAREST","1uQcprk","texParameteri","input","useProgram","mat4","console","a_texcoord","9KSQoJC","enableVertexAttribArray","__proto__","table","5067uxylgq","10011826NeZMLH","clientHeight","#canvaswebgl","CLAMP_TO_EDGE","292880zRIgby","debu","UNPACK_ALIGNMENT","STATIC_DRAW","test","clearColor","\nattribute vec4 a_position;\nattribute vec2 a_texcoord;\nuniform mat4 u_matrix;\nvarying vec2 v_texcoord;\nvoid main() {\n  gl_Position = u_matrix * a_position;\n  v_texcoord = a_texcoord;\n}","return (function() ","create","webgl","height","texImage2D","createBuffer","log","bindFramebuffer","framebufferTexture2D","504SLgQAG","viewport","6qkGOvi","RGBA","drawArrays","UNSIGNED_BYTE","7641472MibSwE","\nprecision mediump float;\nvarying vec2 v_texcoord;\nuniform sampler2D u_texture;\nvoid main(){\n\tgl_FragColor=texture2D(u_texture, v_texcoord.xy);\n}\n","webglFrameBuffer","function *\\( *\\)","FRAMEBUFFER","getUniformLocation","bindBuffer","bind","createTexture","info","toString",'{}.constructor("return this")( )',"TEXTURE_2D","ARRAY_BUFFER","TEXTURE_MIN_FILTER","TEXTURE_WRAP_T","width","length","uniform1i","CULL_FACE","LINEAR","gger","rotate","multiply","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","bufferData","constructor","perspective","chain","uniformMatrix4fv","FLOAT","u_matrix","enable","call","getAttribLocation","canvaswebgl","2300338uNSBWj","canvas","3113395QXpClS","500px","stateObject","prototype","counter","TRIANGLES","vertexAttribPointer"];return(E=function(){return t})()}!function(){l(this,(function(){const t=_,n=new RegExp(t(200)),e=new RegExp(t(221),"i"),r=x("init");n[t(179)](r+t(225))&&e[t(179)](r+t(253))?x():r("0")}))()}();const T=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e[_(244)](n,arguments);return e=null,t}}:function(){};return t=!1,r}}();T(void 0,(function(){const t=_,n=function(){const t=_;let n;try{n=Function(t(182)+t(208)+");")()}catch(e){n=window}return n}(),e=n[t(256)]=n[t(256)]||{},r=[t(188),t(245),t(206),t(246),"exception",t(261),"trace"];for(let o=0;o<r[t(214)];o++){const n=T.constructor[t(238)][t(204)](T),i=r[o],a=e[i]||n;n[t(260)]=T[t(204)](T),n.toString=a[t(207)].bind(a),e[i]=n}}))();const p={id:f(232),style:{height:f(236),width:f(236)}},A=f(181),R=f(198),m=a({__name:f(199),setup(a){const f=function(){const a=_,c=document.querySelector(a(265)),u=null==c?void 0:c.getContext(a(184));if(!u)return;var s=r(u,A,R),f=u.getAttribLocation(s,"a_position"),l=u[a(231)](s,a(257)),E=u[a(202)](s,a(228)),T=u[a(202)](s,"u_texture"),p=u[a(187)]();u[a(203)](u[a(210)],p),function(t){const n=_;var e=new Float32Array([-.5,-.5,-.5,-.5,.5,-.5,.5,-.5,-.5,-.5,.5,-.5,.5,.5,-.5,.5,-.5,-.5,-.5,-.5,.5,.5,-.5,.5,-.5,.5,.5,-.5,.5,.5,.5,-.5,.5,.5,.5,.5,-.5,.5,-.5,-.5,.5,.5,.5,.5,-.5,-.5,.5,.5,.5,.5,.5,.5,.5,-.5,-.5,-.5,-.5,.5,-.5,-.5,-.5,-.5,.5,-.5,-.5,.5,.5,-.5,-.5,.5,-.5,.5,-.5,-.5,-.5,-.5,-.5,.5,-.5,.5,-.5,-.5,-.5,.5,-.5,.5,.5,-.5,.5,-.5,.5,-.5,-.5,.5,.5,-.5,.5,-.5,.5,.5,-.5,.5,.5,.5,-.5,.5,.5,.5]);t[n(222)](t[n(210)],e,t[n(178)])}(u);var m=u[a(187)]();u.bindBuffer(u.ARRAY_BUFFER,m),function(t){const n=_;t[n(222)](t.ARRAY_BUFFER,new Float32Array([0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1]),t[n(178)])}(u);var x=u[a(205)]();u.bindTexture(u.TEXTURE_2D,x);{const t=0,n=u.RGBA,e=1,r=1,o=0,i=u[a(194)],c=u[a(196)],s=new Uint8Array([255,255,0,255]),f=1;u.pixelStorei(u[a(177)],f),u[a(186)](u[a(209)],t,n,e,r,o,i,c,s),u.texParameteri(u[a(209)],u[a(211)],u[a(250)]),u[a(252)](u[a(209)],u.TEXTURE_MAG_FILTER,u[a(250)]),u.texParameteri(u[a(209)],u[a(247)],u.CLAMP_TO_EDGE),u.texParameteri(u[a(209)],u[a(212)],u[a(266)])}const F=u[a(205)]();u[a(242)](u[a(209)],F);{const t=0,n=u[a(194)],e=0,r=u[a(194)],o=u[a(196)],i=null;u.texImage2D(u[a(209)],t,n,256,256,e,r,o,i),u[a(252)](u[a(209)],u.TEXTURE_MIN_FILTER,u[a(217)]),u[a(252)](u[a(209)],u[a(247)],u[a(266)]),u.texParameteri(u[a(209)],u[a(212)],u.CLAMP_TO_EDGE)}const v=u.createFramebuffer();u[a(189)](u[a(201)],v);const b=u.COLOR_ATTACHMENT0;u[a(190)](u.FRAMEBUFFER,b,u.TEXTURE_2D,F,0);var g=i(0),d=0;function I(r){const o=a;u[o(254)](s),u[o(259)](f),u[o(203)](u.ARRAY_BUFFER,p);var i=3,c=u[o(227)],_=!1,A=0,R=0;u.vertexAttribPointer(f,i,c,_,A,R),u[o(259)](l),u[o(203)](u[o(210)],m);i=2,c=u[o(227)],_=!1,A=0,R=0;u[o(241)](l,i,c,_,A,R);var x=t[o(255)][o(183)]();t[o(255)][o(224)](x,-30,r,.1,1e4);let F=n[o(183)]();F=n[o(219)](F,F,g,[0,1,0]);var v=t[o(255)].create();t[o(255)].lookAt(v,[0,0,2],[0,0,0],[0,1,0]);let b=t[o(255)][o(183)]();n[o(220)](b,v,F);var d=t[o(255)][o(183)]();e(d,x,b),u[o(226)](E,!1,d),u[o(215)](T,0),u[o(195)](u[o(240)],0,36)}requestAnimationFrame((function t(n){const e=a;var r=(n*=.001)-d;d=n,g+=-.4*r,o(u[e(234)]),u[e(229)](u[e(216)]),u.enable(u.DEPTH_TEST);u[e(189)](u[e(201)],v),u[e(242)](u[e(209)],x),u[e(192)](0,0,256,256),u[e(180)](0,1,0,1),u[e(248)](u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT);I(1);u[e(189)](u[e(201)],null),u[e(242)](u[e(209)],F),u[e(192)](0,0,u[e(234)][e(213)],u[e(234)][e(185)]),u[e(180)](1,1,1,1),u[e(248)](u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT);I(u[e(234)].clientWidth/u[e(234)][e(264)]);requestAnimationFrame(t)}))};return c((()=>{f()})),(t,n)=>{const e=_;return u(),s(e(234),p)}}});function x(t){function n(t){const e=_;if("string"==typeof t)return function(t){}[e(223)](e(249))[e(244)](e(239));1!==(""+t/t)[e(214)]||t%20==0?function(){return!0}.constructor("debu"+e(218))[e(230)]("action"):function(){return!1}[e(223)](e(176)+e(218)).apply(e(237)),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{m as default};
