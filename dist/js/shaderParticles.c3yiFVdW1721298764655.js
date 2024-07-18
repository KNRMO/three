import{$ as n,d as t}from"./@tresjs.iXEJQd7J1721298764655.js";import{aN as e}from"./three.0bBjBDi41721298764655.js";import{d as o,r as i,e as r,o as a,f as s,g as c,j as u,u as l,J as f,aj as p,ak as m,m as d}from"./@vue.Q1VpS3901721298764655.js";import"./tweakpane.yHWGBmom1721298764655.js";import"./@vueuse.hS-CVzal1721298764655.js";const h=v;function v(n,t){const e=z();return(v=function(n,t){return e[n-=456]})(n,t)}!function(n,t){const e=v,o=z();for(;;)try{if(113884===parseInt(e(488))/1*(parseInt(e(500))/2)+-parseInt(e(477))/3+-parseInt(e(464))/4*(-parseInt(e(481))/5)+parseInt(e(466))/6*(-parseInt(e(456))/7)+parseInt(e(494))/8+-parseInt(e(490))/9*(-parseInt(e(471))/10)+-parseInt(e(480))/11)break;o.push(o.shift())}catch(i){o.push(o.shift())}}();const g=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[v(505)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();!function(){g(this,(function(){const n=v,t=new RegExp(n(501)),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),o=b(n(499));t[n(482)](o+n(476))&&e[n(482)](o+n(506))?b():o("0")}))()}();const P=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[v(505)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();P(void 0,(function(){const n=v,t=function(){const n=v;let t;try{t=Function(n(479)+n(469)+");")()}catch(e){t=window}return t}(),e=t[n(463)]=t[n(463)]||{},o=["log",n(475),"info",n(465),n(498),n(497),n(483)];for(let i=0;i<o[n(489)];i++){const t=P.constructor[n(478)][n(503)](P),r=o[i],a=e[r]||t;t[n(504)]=P[n(503)](P),t[n(458)]=a[n(458)][n(503)](a),e[r]=t}}))();const w=f(h(485),{position:[5,5,5],fov:45,near:.1,far:1e3,"look-at":[-8,3,-3]},null,-1),j=f(h(507),{intensity:.5},null,-1),x={position:[-2,-2,-2]},T=[h(460),h(496)],_=f("TresDirectionalLight",{position:[0,2,4],intensity:1,"cast-shadow":""},null,-1),S=f("TresGridHelper",null,null,-1),y=3e3;function z(){const n=["\n  uniform float uPixelRatio;\n  uniform float uSize;\n  uniform float uTime;\n  attribute float aScale;\n\n  void main()\n  {\n      vec4 modelPosition = modelMatrix * vec4(position, 1.0);\n      modelPosition.y += sin(uTime + modelPosition.x * 100.0) * aScale * 0.2;\n      vec4 viewPosition = viewMatrix * modelPosition;\n      vec4 projectionPosition = projectionMatrix * viewPosition;\n\n      gl_Position = projectionPosition;\n      gl_PointSize = aScale * uSize * uPixelRatio;\n      gl_PointSize *= (1.0 / - viewPosition.z);\n  }\n  ","TresCanvas","1425472cfjrIx","action","a-scale","table","exception","init","387548RnuKTs","function *\\( *\\)","gger","bind","__proto__","apply","input","TresAmbientLight","262731nmGWDO","random","toString","value","position","call","string","console","618980mmfzXz","error","6eYffVv","constructor","debu",'{}.constructor("return this")( )',"black","1990WiAUkV","uniforms","TresPoints","uTime","warn","chain","138567esWgae","prototype","return (function() ","5940407ecXKrx","5ZhJzjC","test","trace","counter","TresPerspectiveCamera","while (true) {}","shaderParticles","1DacEWS","length","9540pnrERd","devicePixelRatio"];return(z=function(){return n})()}const I=o({__name:h(487),setup(o){const v=h,g=i({clearColor:v(470),shadows:!0,alpha:!1}),P={transparent:!0,blending:e,depthWrite:!1,vertexShader:v(492),fragmentShader:"\n  void main()\n    {\n      float distanceToCenter = distance(gl_PointCoord, vec2(0.5));\n      float strength = 0.05 / distanceToCenter - 0.1;\n\n      gl_FragColor = vec4(1.0, 1.0, 1.0, strength);\n    }\n  ",uniforms:{uSize:{value:100},uPixelRatio:{value:Math.min(window[v(491)],2)},uTime:{value:0}}},z=new Float32Array(9e3),I=new Float32Array(y);for(let n=0;n<y;n++)z[3*n+0]=4*Math[v(457)](),z[3*n+1]=4*Math[v(457)](),z[3*n+2]=4*Math[v(457)](),I[n]=Math.random();const{onLoop:b}=n();return b((({elapsed:n})=>{const t=v;P[t(472)][t(474)][t(459)]=n})),(n,e)=>{const o=v,i=r(o(493));return a(),s(i,d(g,{"window-size":""}),{default:c((()=>[w,u(l(t)),j,f(o(473),x,[f("TresBufferGeometry",{position:[l(z),3],"a-scale":[l(I),1]},null,8,T),f("TresShaderMaterial",p(m(P)),null,16)]),_,S])),_:1},16)}}});function b(n){function t(n){const e=v;if(typeof n===e(462))return function(n){}[e(467)](e(486))[e(505)](e(484));1!==(""+n/n)[e(489)]||n%20==0?function(){return!0}[e(467)](e(468)+e(502))[e(461)](e(495)):function(){return!1}.constructor(e(468)+e(502))[e(505)]("stateObject"),t(++n)}try{if(n)return t;t(0)}catch(e){}}export{I as default};
