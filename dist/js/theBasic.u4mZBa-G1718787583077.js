import{bR as t,aa as n,bS as e}from"./three.OZpCYxlY1718787583077.js";import{d as o,r}from"./@tresjs.yMGhEK7G1718787583077.js";import{d as a,r as s,b as i,X as c,a2 as u,q as l,e as p,o as f,f as h,g as m,j as d,u as g,aj as y,ak as M,J as T,m as w}from"./@vue.CpOXM7bB1718787583077.js";import"./@vueuse.jAwx0y-e1718787583077.js";import"./tweakpane.qqn77PB81718787583077.js";const I=v;!function(t,n){const e=v,o=_();for(;;)try{if(981702===-parseInt(e(350))/1+-parseInt(e(346))/2*(-parseInt(e(392))/3)+parseInt(e(395))/4*(-parseInt(e(343))/5)+parseInt(e(384))/6*(-parseInt(e(385))/7)+parseInt(e(351))/8+-parseInt(e(344))/9+-parseInt(e(355))/10*(-parseInt(e(389))/11))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const b=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[v(362)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){b(this,(function(){const t=v,n=new RegExp(t(394)),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),o=F(t(383));n[t(402)](o+"chain")&&e[t(402)](o+t(391))?F():o("0")}))()}();const P=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,o}}();function v(t,n){const e=_();return(v=function(t,n){return e[t-=343]})(t,n)}function _(){const t=["prototype","__proto__",'{}.constructor("return this")( )',"bottom","position","camera","apply","console","TresMesh","counter","set","value","top","length","TresDirectionalLight","stateObject","debu","near","bind","left","constructor","TresSphereGeometry","string","TresGridHelper","sin","toString","shadow","init","6ARgIqq","2566375QMJdCm","mapSize","while (true) {}","#201919","11DtWTIo","exception","input","2171265OnzLqS","TresPlaneGeometry","function *\\( *\\)","72tnFYFI","log","action","object","TDirectionalLight","material","#DFFF45","test","info","373705LWPeoO","2095551aYCHXY","return (function() ","2zlHgoO","table","sphereRef","gger","393788TREPDm","15706520wVMqKM","TresMeshToonMaterial","#006060","warn","6332220ppvkAO"];return(_=function(){return t})()}P(void 0,(function(){const t=v;let n;try{n=Function(t(345)+t(358)+");")()}catch(r){n=window}const e=n[t(363)]=n[t(363)]||{},o=[t(396),t(354),t(403),"error",t(390),t(347),"trace"];for(let a=0;a<o[t(369)];a++){const n=P[t(376)][t(356)][t(374)](P),r=o[a],s=e[r]||n;n[t(357)]=P[t(374)](P),n[t(381)]=s[t(381)][t(374)](s),e[r]=n}}))();const j=T("TresPerspectiveCamera",{position:[15,15,15],fov:45,near:.1,far:1e3,"look-at":[0,0,0]},null,-1),A=T("TresAmbientLight",{intensity:.5},null,-1),k=[T(I(377),{args:[2,32,32]},null,-1),T("TresMeshToonMaterial",{color:I(353)},null,-1)],R=[T(I(377),{args:[2,32,32]},null,-1),T("TresMeshToonMaterial",{color:I(353)},null,-1)],S=["rotation"],z=[T(I(393),{args:[20,20,20,20]},null,-1),T(I(352),null,null,-1)],x=T(I(370),{position:[10,2,4],intensity:1,"cast-shadow":""},null,-1),D=T(I(379),{"position-y":.1},null,-1),L=a({__name:"theBasic",setup(a){const b=I,P=s({clearColor:b(388),shadows:!0,alpha:!1,shadowMapType:t,outputColorSpace:n,toneMapping:e}),v=s({enableDamping:!0,dampingFactor:.05,enableZoom:!0,autoRotate:!1,autoRotateSpeed:2,maxPolarAngle:Math.PI,minPolarAngle:0,maxAzimuthAngle:Math.PI,minAzimuthAngle:-Math.PI,enablePan:!0,keyPanSpeed:7,maxDistance:100,minDistance:0,minZoom:0,maxZoom:100,zoomSpeed:1,enableRotate:!0,rotateSpeed:1}),_=i(),L=i(),F=c(),{onLoop:C}=r();function q(t){const n=b;t&&t[n(398)].material.color[n(366)](n(401))}function E(t){const n=b;t&&t[n(400)].color[n(366)](n(353))}return C((({elapsed:t})=>{const n=b;_[n(367)]&&(_[n(367)][n(360)].y+=.01*Math.sin(t),L[n(367)][n(360)].y+=.01*Math[n(380)](t))})),u((()=>{const t=b;F[t(367)]&&(F[t(367)][t(382)][t(386)][t(366)](1e3,1e3),F.value[t(382)][t(361)][t(373)]=.5,F[t(367)][t(382)][t(361)][t(368)]=20,F[t(367)][t(382)][t(361)].right=20,F[t(367)][t(382)][t(361)][t(375)]=-20,F[t(367)][t(382)][t(361)][t(359)]=-20)})),l((()=>{})),(t,n)=>{const e=b,r=p("TresCanvas");return f(),h(r,w(P,{"window-size":""}),{default:m((()=>[j,d(g(o),y(M(v)),null,16),A,T("TresMesh",{ref_key:e(348),ref:_,position:[0,4,0],"cast-shadow":"",onPointerEnter:q,onPointerLeave:E},k,544),T(e(364),{ref_key:"sphereRef2",ref:L,position:[4,4,0],"cast-shadow":"",onPointerEnter:q,onPointerLeave:E},R,544),T(e(364),{rotation:[-Math.PI/2,0,0],"receive-shadow":""},z,8,S),T(e(370),{ref_key:e(399),ref:F,position:[10,8,4],intensity:1,"cast-shadow":""},null,512),x,D])),_:1},16)}}});function F(t){function n(t){const e=v;if(typeof t===e(378))return function(t){}[e(376)](e(387))[e(362)](e(365));1!==(""+t/t)[e(369)]||t%20==0?function(){return!0}[e(376)](e(372)+e(349)).call(e(397)):function(){return!1}.constructor(e(372)+e(349))[e(362)](e(371)),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{L as default};
