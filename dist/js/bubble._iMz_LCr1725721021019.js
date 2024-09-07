import{T as t,X as n,aK as e,_ as s,a6 as a}from"./three.a9V66irq1725721021019.js";import{p as i,d as o}from"./@tresjs.bIWdfO9a1725721021019.js";import{g as r}from"./gsap.5FgWo1mD1725721021019.js";import{a2 as c,d as p,b as A,w as l,r as u,e as h,o as f,f as m,g as d,j as v,aj as y,ak as g,u as w,al as I,L as E}from"./@vue._6MD2XyK1725721021019.js";import{P as z}from"./tweakpane.yHWGBmom1725721021019.js";import"./@vueuse.Ex-1AOlz1725721021019.js";const C={__name:"bubble",props:{opacity:{type:Number,default:.8}},setup(a){const{scene:o,sizes:p,controls:A}=i();var l;const u=a;function h(){this.init(),this.shuffle()}function f(){const t=Math.floor(16777215*Math.random()).toString(16);return"#".concat(t.padStart(6,"0"))}function m(t,n){return n?2*Math.random()*t-t:Math.random()*t}return h.prototype.init=function(){this.material=new n({color:f(),map:l,transparent:!0,opacity:1,depthTest:!1,depthWrite:!1,blending:e}),this.sprite=new s(this.material)},h.prototype.shuffle=function(){this.scale1=.1,this.scale2=2+m(3),this.sprite.scale.set(this.scale1,this.scale1,1);var t=function(){const t=Math.random(),n=Math.random(),e=2*t*Math.PI,s=Math.acos(2*n-1),a=Math.cbrt(Math.random()),i=Math.sin(e),o=Math.cos(e),r=Math.sin(s),c=Math.cos(s);return{x:a*r*o,y:a*r*i,z:a*c}}();this.sprite.position.set(t.x,t.y,t.z).multiplyScalar(50),this.sprite.position.y-=25,this.material.opacity=u.opacity,this.tt=this.scale2,r.to(this.sprite.scale,1,{x:this.scale2,y:this.scale2,ease:"power1.inOut"}),r.to(this.sprite.position,this.scale2,{y:this.sprite.position.y+100,ease:"power1.inOut"}),this.t1=1,r.to(this.sprite.position,this.t1,{x:this.sprite.position.x+m(10,!0),z:this.sprite.position.z+m(10,!0),ease:"power1.inOut",repeat:Math.floor(this.tt/this.t1/2),yoyo:!0}),r.to(this.material,1,{opacity:0,delay:this.tt-1,ease:"power1.inOut",onCompleteParams:[this],onComplete:function(t){t.shuffle()}})},function(){l=new t;var n=new Image;n.src="data:image/png;base64,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",n.onload=function(){l.image=n,l.needsUpdate=!0};for(var e=0;e<800;e++){var s=new h;o.value.add(s.sprite)}}(),c((()=>{var t,n;u.opacity&&(t=o.value,n=u.opacity,t.traverse((t=>{t.isMesh&&(Array.isArray(t.material)?t.material.forEach((t=>{t.transparent=!0,t.opacity=n})):(t.material.transparent=!0,t.material.opacity=n))})))})),(t,n)=>null}},K=Y;function Y(t,n){const e=X();return(Y=function(t,n){return e[t-=271]})(t,n)}function X(){const t=["18dytGZv","function *\\( *\\)","737pBlLhc","65443bPqVBc","297DMlwSI","apply","ACESFilmicToneMapping","OrthographicCamera","exception","call","test","chain","init","toString","#000000","prototype","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","trace","3vLAGoy","591134ORFAiA","透明度","15852UQVdnL","110710klRPzN","136UKBhsC","return (function() ","while (true) {}","gger","addBinding","debu","console","TresCanvas","constructor","11940pYbDJo","info","length","log",'{}.constructor("return this")( )',"139321jyLcAK","bubble","error","412972fkqOio","table","bind"];return(X=function(){return t})()}!function(t,n){const e=Y,s=X();for(;;)try{if(224087===-parseInt(e(298))/1+parseInt(e(280))/2*(parseInt(e(279))/3)+parseInt(e(301))/4+parseInt(e(283))/5*(-parseInt(e(304))/6)+-parseInt(e(307))/7*(-parseInt(e(284))/8)+-parseInt(e(308))/9*(parseInt(e(293))/10)+parseInt(e(306))/11*(-parseInt(e(282))/12))break;s.push(s.shift())}catch(a){s.push(s.shift())}}();const W=function(){let t=!0;return function(n,e){const s=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,s}}();!function(){W(this,(function(){const t=Y,n=new RegExp(t(305)),e=new RegExp(t(277),"i"),s=G(t(273));n.test(s+t(272))&&e[t(271)](s+"input")?G():s("0")}))()}();const j=function(){let t=!0;return function(n,e){const s=t?function(){if(e){const t=e[Y(309)](n,arguments);return e=null,t}}:function(){};return t=!1,s}}();j(void 0,(function(){const t=Y;let n;try{n=Function(t(285)+t(297)+");")()}catch(a){n=window}const e=n.console=n[t(290)]||{},s=[t(296),"warn",t(294),t(300),t(312),t(302),t(278)];for(let i=0;i<s[t(295)];i++){const n=j[t(292)][t(276)][t(303)](j),a=s[i],o=e[a]||n;n.__proto__=j[t(303)](j),n.toString=o[t(274)].bind(o),e[a]=n}}))();const B=E("TresPerspectiveCamera",{position:[0,20,30],fov:45,near:.1,far:1e3},null,-1),R=E("TresAmbientLight",{intensity:2},null,-1),b=p({__name:K(299),setup(t){const n=K,e=A(null);l(e,(t=>{const n=Y;t&&(t.shadow.camera=new(a[n(311)])(-8.5,8.5,8.5,-8.5,.1,20))}));const s=u({enableDamping:!0,enableZoom:!0,autoRotate:!0,enablePan:!0,enableRotate:!0,makeDefault:!0}),i={clearColor:n(275),windowSize:!0,toneMapping:a[n(310)],toneMappingExposure:.8,shadows:!0},r=u({opacity:.5});return new z({title:"参数"})[n(288)](r,"opacity",{label:n(281),min:0,max:1,step:.1}),(t,e)=>{const a=h(n(291));return f(),m(a,y(g(i)),{default:d((()=>[B,v(w(o),y(g(s)),null,16),R,(f(),m(I,null,{default:d((()=>[v(C,y(g(r)),null,16)])),_:1}))])),_:1},16)}}});function G(t){function n(t){const e=Y;if("string"==typeof t)return function(t){}[e(292)](e(286))[e(309)]("counter");1!==(""+t/t)[e(295)]||t%20==0?function(){return!0}[e(292)]("debu"+e(287))[e(313)]("action"):function(){return!1}[e(292)](e(289)+"gger").apply("stateObject"),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{b as default};
