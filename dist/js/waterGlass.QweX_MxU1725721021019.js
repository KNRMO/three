import{$ as t,T as n,d as e}from"./@tresjs.bIWdfO9a1725721021019.js";import{a6 as o,ab as r}from"./three.a9V66irq1725721021019.js";import{d as i,w as c,o as s,E as a,j as u,m as l,u as p,L as f,r as d,e as v,f as x,g as y,aj as m,ak as h,al as g}from"./@vue._6MD2XyK1725721021019.js";import{a as b,b as w}from"./index.HwcLpeBY1725721021019.js";import{P as z}from"./tweakpane.yHWGBmom1725721021019.js";import"./@vueuse.Ex-1AOlz1725721021019.js";import"./three-stdlib.-DW5PGsS1725721021019.js";import"./@pmndrs._LoKiQ331725721021019.js";import"./object-hash.xtAmzdrT1725721021019.js";import"./@amap.9EMhYPgf1725721021019.js";import"./jszip.NwxLGTBs1725721021019.js";const I=C;!function(t,n){const e=C,o=q();for(;;)try{if(923881===-parseInt(e(198))/1+parseInt(e(201))/2*(parseInt(e(216))/3)+parseInt(e(205))/4*(parseInt(e(238))/5)+-parseInt(e(218))/6+-parseInt(e(244))/7*(parseInt(e(248))/8)+-parseInt(e(206))/9+-parseInt(e(220))/10*(-parseInt(e(234))/11))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const _=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[C(222)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){_(this,(function(){const t=C,n=new RegExp(t(213)),e=new RegExp(t(208),"i"),o=k(t(204));n[t(221)](o+"chain")&&e[t(221)](o+t(229))?k():o("0")}))()}();const j=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,o}}();j(void 0,(function(){const t=C,n=function(){const t=C;let n;try{n=Function(t(217)+t(236)+");")()}catch(e){n=window}return n}(),e=n.console=n[t(210)]||{},o=["log",t(247),t(215),t(209),t(243),t(242),"trace"];for(let r=0;r<o[t(225)];r++){const n=j[t(240)][t(226)][t(239)](j),i=o[r],c=e[i]||n;n.__proto__=j[t(239)](j),n[t(214)]=c[t(214)][t(239)](c),e[i]=n}}))();const M=[I(233)],P=f(I(232),{args:[1,1,64,64]},null,-1);function q(){const t=["input","time","amplitude","TresPlaneGeometry","rotation-x","11jNgCsp","TresMesh",'{}.constructor("return this")( )',"gger","5nDJgsM","bind","constructor","MeshPhysicalMaterial","table","exception","1279901EDqyHp","DoubleSide","debu","warn","8HxhXGK","1376104HqzGkH","color","Color","38YfHbLE","frequency","#fff","init","5311828wveLnF","5969520abTMDK","value","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","error","console","vertexShader","action","function *\\( *\\)","toString","info","91533oCElus","return (function() ","10661628JoYBFq","string","30153800weeRYl","test","apply","stateObject","counter","length","prototype","while (true) {}","baseMaterial"];return(q=function(){return t})()}function C(t,n){const e=q();return(C=function(t,n){return e[t-=198]})(t,n)}const T=i({__name:"waterGlass",props:{color:{default:I(203)},amplitude:{default:.066},frequency:{default:5}},setup(e){const r=I,i=e,f={time:{type:"f",value:.1},amplitude:{type:"f",value:i.amplitude},speed:{type:"f",value:.277},frequency:{type:"f",value:i[r(202)]}},d={side:o[r(245)],color:new(o[r(200)])(i[r(199)]),metalness:.087,roughness:0,transmission:1,thickness:1.5,refractionRatio:1.5},{onLoop:v}=t();return v((({delta:t})=>{f[r(230)].value+=t})),c((()=>i),(()=>{const t=r;d.color=new(o[t(200)])(i.color),f[t(231)][t(207)]=i[t(231)],f[t(202)].value=i[t(202)]}),{deep:!0}),(t,e)=>{const i=r;return s(),a(i(235),{"rotation-x":-Math.PI/2,"position-y":.1},[P,u(p(n),l(d,{baseMaterial:o[i(241)],vertexShader:p("uniform float time;\nuniform float amplitude;\nuniform float speed;\nuniform float frequency;\n\nvec3 mod289(vec3 x){\n\treturn x-floor(x*(1./289.))*289.;\n}\n\nvec4 mod289(vec4 x){\n\treturn x-floor(x*(1./289.))*289.;\n}\n\nvec4 permute(vec4 x){\n\treturn mod289(((x*34.)+1.)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r){\n\treturn 1.79284291400159-.85373472095314*r;\n}\n\nfloat noise(vec3 v){\n\tconst vec2 C=vec2(1./6.,1./3.);\n\tconst vec4 D=vec4(0.,.5,1.,2.);\n\t\n\t\n\tvec3 i=floor(v+dot(v,C.yyy));\n\tvec3 x0=v-i+dot(i,C.xxx);\n\t\n\t\n\tvec3 g=step(x0.yzx,x0.xyz);\n\tvec3 l=1.-g;\n\tvec3 i1=min(g.xyz,l.zxy);\n\tvec3 i2=max(g.xyz,l.zxy);\n\t\n\tvec3 x1=x0-i1+C.xxx;\n\tvec3 x2=x0-i2+C.yyy;\n\tvec3 x3=x0-D.yyy;\n\t\n\t\n\ti=mod289(i);\n\tvec4 p=permute(permute(permute(\n\t\t\t\ti.z+vec4(0.,i1.z,i2.z,1.))\n\t\t\t\t+i.y+vec4(0.,i1.y,i2.y,1.))\n\t\t\t\t+i.x+vec4(0.,i1.x,i2.x,1.));\n\t\t\t\t\n\t\t\t\tfloat n_=.142857142857;\n\t\t\t\tvec3 ns=n_*D.wyz-D.xzx;\n\t\t\t\t\n\t\t\t\tvec4 j=p-49.*floor(p*ns.z*ns.z);\n\t\t\t\t\n\t\t\t\tvec4 x_=floor(j*ns.z);\n\t\t\t\tvec4 y_=floor(j-7.*x_);\n\t\t\t\t\n\t\t\t\tvec4 x=x_*ns.x+ns.yyyy;\n\t\t\t\tvec4 y=y_*ns.x+ns.yyyy;\n\t\t\t\tvec4 h=1.-abs(x)-abs(y);\n\t\t\t\t\n\t\t\t\tvec4 b0=vec4(x.xy,y.xy);\n\t\t\t\tvec4 b1=vec4(x.zw,y.zw);\n\t\t\t\t\n\t\t\t\tvec4 s0=floor(b0)*2.+1.;\n\t\t\t\tvec4 s1=floor(b1)*2.+1.;\n\t\t\t\tvec4 sh=-step(h,vec4(0.));\n\t\t\t\t\n\t\t\t\tvec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;\n\t\t\t\tvec4 a1=b1.xzyw+s1.xzyw*sh.zzww;\n\t\t\t\t\n\t\t\t\tvec3 p0=vec3(a0.xy,h.x);\n\t\t\t\tvec3 p1=vec3(a0.zw,h.y);\n\t\t\t\tvec3 p2=vec3(a1.xy,h.z);\n\t\t\t\tvec3 p3=vec3(a1.zw,h.w);\n\t\t\t\t\n\t\t\t\t\n\t\t\t\tvec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));\n\t\t\t\tp0*=norm.x;\n\t\t\t\tp1*=norm.y;\n\t\t\t\tp2*=norm.z;\n\t\t\t\tp3*=norm.w;\n\t\t\t\t\n\t\t\t\t\n\t\t\t\tvec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);\n\t\t\t\tm=m*m;\n\t\t\t\treturn 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),\n\t\t\t\tdot(p2,x2),dot(p3,x3)));\n\t\t\t}\n\t\t\t\n\t\t\t\n\t\t\tfloat displace(vec3 point){\n\t\t\t\treturn noise(vec3(point.x*frequency,point.y*frequency,time*speed))*amplitude;\n\t\t\t}\n\t\t\t\n\t\t\tvec3 orthogonal(vec3 v){\n\t\t\t\treturn normalize(abs(v.x)>abs(v.z)\n\t\t\t\t?vec3(-v.y,v.x,0.)\n\t\t\t\t:vec3(0.,-v.z,v.y));\n\t\t\t}\n\t\t\t\n\t\t\tvoid main(){\n\t\t\t\tvec3 displacedPosition=position+normal*displace(position);\n\t\t\t\t\n\t\t\t\tfloat offset=.0001;\n\t\t\t\tvec3 tangent=orthogonal(normal);\n\t\t\t\tvec3 bitangent=normalize(cross(normal,tangent));\n\t\t\t\tvec3 neighbour1=position+tangent*offset;\n\t\t\t\tvec3 neighbour2=position+bitangent*offset;\n\t\t\t\tvec3 displacedNeighbour1=neighbour1+normal*displace(neighbour1);\n\t\t\t\tvec3 displacedNeighbour2=neighbour2+normal*displace(neighbour2);\n\t\t\t\t\n\t\t\t\tvec3 displacedTangent=displacedNeighbour1-displacedPosition;\n\t\t\t\tvec3 displacedBitangent=displacedNeighbour2-displacedPosition;\n\t\t\t\t\n\t\t\t\tvec3 displacedNormal=normalize(cross(displacedTangent,displacedBitangent));\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t\tcsm_Normal=normalMatrix*displacedNormal;\n\t\t\t\t\n\t\t\t\t\n\t\t\t\tcsm_Position=displacedPosition;\n\t\t\t}"),uniforms:f,silent:""}),null,16,[i(228),i(211)])],8,M)}}});function k(t){function n(t){const e=C;if(typeof t===e(219))return function(t){}[e(240)](e(227))[e(222)](e(224));1!==(""+t/t).length||t%20==0?function(){return!0}[e(240)](e(246)+e(237)).call(e(212)):function(){return!1}.constructor("debu"+e(237)).apply(e(223)),n(++t)}try{if(t)return n;n(0)}catch(e){}}const E=R;!function(t,n){const e=R,o=D();for(;;)try{if(779400===parseInt(e(385))/1+parseInt(e(399))/2*(-parseInt(e(362))/3)+-parseInt(e(383))/4*(parseInt(e(387))/5)+parseInt(e(379))/6*(parseInt(e(356))/7)+parseInt(e(375))/8*(parseInt(e(389))/9)+-parseInt(e(360))/10+-parseInt(e(357))/11*(-parseInt(e(381))/12))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const B=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[R(394)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();function D(){const t=["toString","warn","4742720ldYNiF","length","1434EReMwr","TresPerspectiveCamera","input","action","gger","log","color","addBinding","prototype","__proto__","TresAmbientLight","BasicShadowMap","circle","936XsJdUS",'{}.constructor("return this")( )',"init","#b367ff","108QVOCDZ","exception","12AhJBtv","rotation-x","12qFvmZT","amplitude","819692kdhLOR","console","1154850GbBxwF","bind","91917gEkdrj","NoToneMapping","test","chain","call","apply","debu","#222","while (true) {}","frequency","3422zFZEPk","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","error","constructor","counter","waterGlass","rotation-y","function *\\( *\\)","276577WIjUwA","424919hkjoue"];return(D=function(){return t})()}!function(){B(this,(function(){const t=R,n=new RegExp(t(355)),e=new RegExp(t(400),"i"),o=G(t(377));n.test(o+t(392))&&e[t(391)](o+t(364))?G():o("0")}))()}();const N=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[R(394)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();N(void 0,(function(){const t=R,n=function(){const t=R;let n;try{n=Function("return (function() "+t(376)+");")()}catch(e){n=window}return n}(),e=n[t(386)]=n.console||{},o=[t(367),t(359),"info",t(401),t(380),"table","trace"];for(let r=0;r<o.length;r++){const n=N.constructor[t(370)][t(388)](N),i=o[r],c=e[i]||n;n[t(371)]=N[t(388)](N),n[t(358)]=c[t(358)][t(388)](c),e[i]=n}}))();const S=f(E(363),{position:[1,1,1]},null,-1),F=f(E(372),{intensity:1},null,-1),L=f("TresGridHelper",{args:[1,10]},null,-1);function R(t,n){const e=D();return(R=function(t,n){return e[t-=351]})(t,n)}const A=i({__name:E(353),setup(t){const n=E,i={clearColor:n(396),shadows:!0,alpha:!1,shadowMapType:o[n(373)],outputColorSpace:r,toneMapping:o[n(390)],useLegacyLights:!0,antialias:!0,logarithmicDepthBuffer:!0},c=d({color:n(378),amplitude:.066,frequency:5}),a=new z({title:"参数",expanded:!0});return a.addBinding(c,n(368),{label:"颜色"}),a[n(369)](c,n(384),{label:n(384),min:.01,max:.2,step:.01}),a.addBinding(c,n(398),{label:n(398),min:.1,max:10,step:.1}),(t,o)=>{const r=n,a=v("TresCanvas");return s(),x(a,l(i,{"window-size":""}),{default:y((()=>[S,F,u(T,m(h(c)),null,16),u(p(e)),L,(s(),x(g,null,{default:y((()=>[u(p(w),{intensity:16,resolution:256,background:"",blur:.6},{default:y((()=>[u(p(b),{intensity:10,form:r(374),"rotation-x":Math.PI/2,position:[2,4,0],scale:[1,5,0]},null,8,[r(382)]),u(p(b),{intensity:10,form:"circle","rotation-x":Math.PI/2,position:[-6,4,0],scale:[1,5,0]},null,8,["rotation-x"]),u(p(b),{intensity:5,"rotation-y":-Math.PI/2,position:[-1,0,0],scale:[10,.2,1]},null,8,["rotation-y"]),u(p(b),{intensity:5,"rotation-y":-Math.PI/2,position:[1,0,0],scale:[10,.2,1]},null,8,[r(354)])])),_:1})])),_:1}))])),_:1},16)}}});function G(t){function n(t){const e=R;if("string"==typeof t)return function(t){}.constructor(e(397))[e(394)](e(352));1!==(""+t/t)[e(361)]||t%20==0?function(){return!0}.constructor(e(395)+e(366))[e(393)](e(365)):function(){return!1}[e(351)](e(395)+e(366))[e(394)]("stateObject"),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{A as default};
