import{d as t,r as n}from"./@tresjs.toBU36DO1720750938663.js";import{Z as e,aK as o}from"./three.c_4mN3mZ1720750938663.js";import{d as r,e as i,o as s,f as a,g as c,J as u,j as f,u as l,aj as p,ak as v,m as d}from"./@vue.ApkyOKE71720750938663.js";import"./@vueuse.NiHn2U_k1720750938663.js";import"./tweakpane.yHWGBmom1720750938663.js";const m=k;!function(t,n){const e=k,o=h();for(;;)try{if(186832===parseInt(e(393))/1+parseInt(e(384))/2*(parseInt(e(389))/3)+-parseInt(e(358))/4*(parseInt(e(352))/5)+parseInt(e(375))/6+-parseInt(e(346))/7*(parseInt(e(369))/8)+-parseInt(e(390))/9*(-parseInt(e(374))/10)+-parseInt(e(371))/11)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const g=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[k(348)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();function h(){const t=["uTime","stateObject","rotation-x","uniforms","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","#ffffff","2392YkodVn","TresPlaneGeometry","3742398iGWwmF","perspectiveCameraRef","constructor","4990ZBSZXQ","1370580uqJTPa","error","bind","TresDirectionalLight","TresPerspectiveCamera","TresCanvas","prototype","toString","log","343370yTjwmB","init","action","gger","console","3ummOxV","2439Atculg","function *\\( *\\)","call","211712IgsQxE","debu","chain","TresMesh","quanMeshRef","1757HRqfET","trace","apply","counter","length","return (function() ","241595nLOKZf","table","TresGridHelper","argestCircle","test","TresShaderMaterial","12FStmqe","#000000",'{}.constructor("return this")( )',"input","while (true) {}"];return(h=function(){return t})()}!function(){g(this,(function(){const t=k,n=new RegExp(t(391)),e=new RegExp(t(367),"i"),o=z(t(385));n[t(356)](o+t(395))&&e.test(o+t(361))?z():o("0")}))()}();const j=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[k(348)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();j(void 0,(function(){const t=k,n=function(){const t=k;let n;try{n=Function(t(351)+t(360)+");")()}catch(e){n=window}return n}(),e=n.console=n[t(388)]||{},o=[t(383),"warn","info",t(376),"exception",t(353),t(347)];for(let r=0;r<o[t(350)];r++){const n=j[t(373)][t(381)][t(377)](j),i=o[r],s=e[i]||n;n.__proto__=j[t(377)](j),n.toString=s[t(382)][t(377)](s),e[i]=n}}))();const x={ref:m(372),position:[600,750,-1221],fov:45,near:1,far:1e4},y=u("TresAmbientLight",{color:"#ffffff"},null,-1),T=u(m(378),{position:[100,100,0],intensity:.5,color:m(368)},null,-1),w=[m(365)],I=u(m(370),{args:[400,400]},null,-1),_=u("TresAxesHelper",{args:[1e3],position:[0,19,0]},null,-1),b=u(m(354),{args:[6e3,100],position:[0,19,0]},null,-1);function k(t,n){const e=h();return(k=function(t,n){return e[t-=346]})(t,n)}const V=r({__name:m(355),setup(r){const g=m,h={clearColor:g(359),shadows:!0,alpha:!1,useLegacyLights:!0},j={autoRotate:!0,enableDamping:!0},k={uniforms:{uTime:{type:"f",value:0}},vertexShader:"varying vec2 vUv;\nvoid main(){\n\tvUv=uv;\n\tgl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);\n}",fragmentShader:"varying vec2 vUv;\nuniform float uTime;\nstruct VoronoiData{\n\tfloat dist;\n\tfloat edgedist;\n\tvec2 edgenormal;\n\tvec2 point;\n};\n\nvec2 hash22(vec2 p)\n{\n\tvec3 p3=fract(vec3(p.xyx)*vec3(.1031,.1030,.0973));\n\tp3+=dot(p3,p3.yzx+33.33);\n\treturn fract((p3.xx+p3.yz)*p3.zy);\n}\nVoronoiData voronoi2dedges(vec2 uv){\n\tvec2 n=floor(uv);\n\tvec2 f=fract(uv);\n\t\n\tvec2 mg,mr;\n\t\n\tfloat md=8.;\n\tfor(int j=-1;j<=1;j++)\n\tfor(int i=-1;i<=1;i++){\n\t\tvec2 g=vec2(i,j);\n\t\tvec2 o=hash22(n+g);\n\t\tvec2 r=g+o-f;\n\t\tfloat d=dot(r,r);\n\t\t\n\t\tif(d<md){\n\t\t\tmd=d;\n\t\t\tmr=g+o;\n\t\t}\n\t}\n\t\n\tfloat med=8.;\n\tvec2 men=vec2(0);\n\tfor(int j=-2;j<=2;j++)\n\tfor(int i=-2;i<=2;i++){\n\t\tvec2 g=vec2(i,j);\n\t\tg+=hash22(n+g);\n\t\tvec2 k=g-mr;\n\t\t\n\t\tfloat d=dot(k,k);\n\t\tif(d>0.){\n\t\t\tfloat l=dot(g+mr-2.*f,k)*.5/sqrt(d);\n\t\t\tif(l<med){\n\t\t\t\tmen=k;\n\t\t\t\tmed=l;\n\t\t\t}\n\t\t}\n\t}\n\treturn VoronoiData(md,med,normalize(men),mr+n);\n}\n\nvoid main(){\n\tvec2 uv=vUv*10.+vec2(0.,uTime);\n\tvec2 p=voronoi2dedges(uv).point;\n\tVoronoiData v;\n\tfor(int i=0;i<32;i++){\n\t\tVoronoiData v=voronoi2dedges(p);\n\t\tp+=-v.edgenormal*.2/float(i+1);\n\t}\n\tgl_FragColor=vec4(\n\t\tsmoothstep(0.,.1,distance(uv,p))*\n\t\tsmoothstep(0.,.01,voronoi2dedges(uv).edgedist)*\n\t\tsmoothstep(0.,.01,abs(distance(uv,p)-voronoi2dedges(p).edgedist))\n\t);\n}",side:e,blending:o,depthWrite:!1,transparent:!0},{onLoop:V}=n();return V((({delta:t})=>{const n=g;k[n(366)][n(363)].value+=t})),(n,e)=>{const o=g,r=i(o(380));return s(),a(r,d(h,{"window-size":""}),{default:c((()=>[u(o(379),x,null,512),f(l(t),p(v(j)),null,16),y,T,u(o(396),{ref:o(397),position:[0,100,0],"rotation-x":2*Math.PI/360*90},[I,u(o(357),p(v(k)),null,16)],8,w),_,b])),_:1},16)}}});function z(t){function n(t){const e=k;if("string"==typeof t)return function(t){}.constructor(e(362))[e(348)](e(349));1!==(""+t/t)[e(350)]||t%20==0?function(){return!0}[e(373)](e(394)+e(387))[e(392)](e(386)):function(){return!1}[e(373)](e(394)+e(387))[e(348)](e(364)),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{V as default};