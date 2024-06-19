import{T as t,r as n,d as e}from"./@tresjs.yMGhEK7G1718787583077.js";import{a5 as o,C as r}from"./three.OZpCYxlY1718787583077.js";import{d as i,w as c,o as s,D as a,j as u,m as l,u as p,J as f,r as d,e as v,f as x,g as y,aj as m,ak as h,al as g}from"./@vue.CpOXM7bB1718787583077.js";import{a as b,b as w}from"./index.NWNYYgod1718787583077.js";import{P as z}from"./tweakpane.qqn77PB81718787583077.js";import"./@vueuse.jAwx0y-e1718787583077.js";import"./three-stdlib.qiumRy5f1718787583077.js";import"./@pmndrs.14-i3u7y1718787583077.js";import"./object-hash.qNEzwKzz1718787583077.js";import"./@amap.SdFHYHOw1718787583077.js";import"./jszip.b_9tpgnb1718787583077.js";const I=C;!function(t,n){const e=C,o=M();for(;;)try{if(473145===-parseInt(e(457))/1*(-parseInt(e(476))/2)+-parseInt(e(474))/3*(parseInt(e(469))/4)+-parseInt(e(478))/5+-parseInt(e(473))/6+parseInt(e(491))/7+-parseInt(e(482))/8*(-parseInt(e(456))/9)+parseInt(e(477))/10)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const _=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[C(467)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){_(this,(function(){const t=C,n=new RegExp(t(464)),e=new RegExp(t(465),"i"),o=k("init");n[t(475)](o+"chain")&&e[t(475)](o+t(479))?k():o("0")}))()}();const j=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[C(467)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();j(void 0,(function(){const t=C,n=function(){const t=C;let n;try{n=Function(t(454)+'{}.constructor("return this")( ));')()}catch(e){n=window}return n}(),e=n[t(487)]=n[t(487)]||{},o=[t(450),"warn","info",t(466),t(490),"table",t(483)];for(let r=0;r<o[t(480)];r++){const n=j[t(486)][t(472)].bind(j),i=o[r],c=e[i]||n;n[t(484)]=j[t(452)](j),n.toString=c.toString.bind(c),e[i]=n}}))();const P=[I(489)],S=f("TresPlaneGeometry",{args:[1,1,64,64]},null,-1);function M(){const t=["18859780HCcclw","1631110hVigbJ","input","length","MeshPhysicalMaterial","8vZDHVO","trace","__proto__","amplitude","constructor","console","value","rotation-x","exception","2298303BfzrKK","color","waterGlass","log","gger","bind","vertexShader","return (function() ","TresMesh","1243287pOjSwX","1cCdwSc","while (true) {}","string","DoubleSide","#fff","debu","counter","function *\\( *\\)","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","error","apply","stateObject","11228qxWPVn","frequency","Color","prototype","5529270IRDPWl","717BEsvws","test","78670dWQkzf"];return(M=function(){return t})()}function C(t,n){const e=M();return(C=function(t,n){return e[t-=448]})(t,n)}const T=i({__name:I(449),props:{color:{default:I(461)},amplitude:{default:.066},frequency:{default:5}},setup(e){const i=I,f=e,d={time:{type:"f",value:.1},amplitude:{type:"f",value:f[i(485)]},speed:{type:"f",value:.277},frequency:{type:"f",value:f[i(470)]}},v={side:o[i(460)],color:new r(f[i(448)]),metalness:.087,roughness:0,transmission:1,thickness:1.5,refractionRatio:1.5},{onLoop:x}=n();return x((({delta:t})=>{const n=i;d.time[n(488)]+=t})),c((()=>f),(()=>{const t=i;v.color=new(o[t(471)])(f[t(448)]),d.amplitude.value=f.amplitude,d[t(470)][t(488)]=f[t(470)]}),{deep:!0}),(n,e)=>{const r=i;return s(),a(r(455),{"rotation-x":-Math.PI/2,"position-y":.1},[S,u(p(t),l(v,{baseMaterial:o[r(481)],vertexShader:p("uniform float time;\nuniform float amplitude;\nuniform float speed;\nuniform float frequency;\n\nvec3 mod289(vec3 x){\n\treturn x-floor(x*(1./289.))*289.;\n}\n\nvec4 mod289(vec4 x){\n\treturn x-floor(x*(1./289.))*289.;\n}\n\nvec4 permute(vec4 x){\n\treturn mod289(((x*34.)+1.)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r){\n\treturn 1.79284291400159-.85373472095314*r;\n}\n\nfloat noise(vec3 v){\n\tconst vec2 C=vec2(1./6.,1./3.);\n\tconst vec4 D=vec4(0.,.5,1.,2.);\n\t\n\t\n\tvec3 i=floor(v+dot(v,C.yyy));\n\tvec3 x0=v-i+dot(i,C.xxx);\n\t\n\t\n\tvec3 g=step(x0.yzx,x0.xyz);\n\tvec3 l=1.-g;\n\tvec3 i1=min(g.xyz,l.zxy);\n\tvec3 i2=max(g.xyz,l.zxy);\n\t\n\tvec3 x1=x0-i1+C.xxx;\n\tvec3 x2=x0-i2+C.yyy;\n\tvec3 x3=x0-D.yyy;\n\t\n\t\n\ti=mod289(i);\n\tvec4 p=permute(permute(permute(\n\t\t\t\ti.z+vec4(0.,i1.z,i2.z,1.))\n\t\t\t\t+i.y+vec4(0.,i1.y,i2.y,1.))\n\t\t\t\t+i.x+vec4(0.,i1.x,i2.x,1.));\n\t\t\t\t\n\t\t\t\tfloat n_=.142857142857;\n\t\t\t\tvec3 ns=n_*D.wyz-D.xzx;\n\t\t\t\t\n\t\t\t\tvec4 j=p-49.*floor(p*ns.z*ns.z);\n\t\t\t\t\n\t\t\t\tvec4 x_=floor(j*ns.z);\n\t\t\t\tvec4 y_=floor(j-7.*x_);\n\t\t\t\t\n\t\t\t\tvec4 x=x_*ns.x+ns.yyyy;\n\t\t\t\tvec4 y=y_*ns.x+ns.yyyy;\n\t\t\t\tvec4 h=1.-abs(x)-abs(y);\n\t\t\t\t\n\t\t\t\tvec4 b0=vec4(x.xy,y.xy);\n\t\t\t\tvec4 b1=vec4(x.zw,y.zw);\n\t\t\t\t\n\t\t\t\tvec4 s0=floor(b0)*2.+1.;\n\t\t\t\tvec4 s1=floor(b1)*2.+1.;\n\t\t\t\tvec4 sh=-step(h,vec4(0.));\n\t\t\t\t\n\t\t\t\tvec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;\n\t\t\t\tvec4 a1=b1.xzyw+s1.xzyw*sh.zzww;\n\t\t\t\t\n\t\t\t\tvec3 p0=vec3(a0.xy,h.x);\n\t\t\t\tvec3 p1=vec3(a0.zw,h.y);\n\t\t\t\tvec3 p2=vec3(a1.xy,h.z);\n\t\t\t\tvec3 p3=vec3(a1.zw,h.w);\n\t\t\t\t\n\t\t\t\t\n\t\t\t\tvec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));\n\t\t\t\tp0*=norm.x;\n\t\t\t\tp1*=norm.y;\n\t\t\t\tp2*=norm.z;\n\t\t\t\tp3*=norm.w;\n\t\t\t\t\n\t\t\t\t\n\t\t\t\tvec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);\n\t\t\t\tm=m*m;\n\t\t\t\treturn 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),\n\t\t\t\tdot(p2,x2),dot(p3,x3)));\n\t\t\t}\n\t\t\t\n\t\t\t\n\t\t\tfloat displace(vec3 point){\n\t\t\t\treturn noise(vec3(point.x*frequency,point.y*frequency,time*speed))*amplitude;\n\t\t\t}\n\t\t\t\n\t\t\tvec3 orthogonal(vec3 v){\n\t\t\t\treturn normalize(abs(v.x)>abs(v.z)\n\t\t\t\t?vec3(-v.y,v.x,0.)\n\t\t\t\t:vec3(0.,-v.z,v.y));\n\t\t\t}\n\t\t\t\n\t\t\tvoid main(){\n\t\t\t\tvec3 displacedPosition=position+normal*displace(position);\n\t\t\t\t\n\t\t\t\tfloat offset=.0001;\n\t\t\t\tvec3 tangent=orthogonal(normal);\n\t\t\t\tvec3 bitangent=normalize(cross(normal,tangent));\n\t\t\t\tvec3 neighbour1=position+tangent*offset;\n\t\t\t\tvec3 neighbour2=position+bitangent*offset;\n\t\t\t\tvec3 displacedNeighbour1=neighbour1+normal*displace(neighbour1);\n\t\t\t\tvec3 displacedNeighbour2=neighbour2+normal*displace(neighbour2);\n\t\t\t\t\n\t\t\t\tvec3 displacedTangent=displacedNeighbour1-displacedPosition;\n\t\t\t\tvec3 displacedBitangent=displacedNeighbour2-displacedPosition;\n\t\t\t\t\n\t\t\t\tvec3 displacedNormal=normalize(cross(displacedTangent,displacedBitangent));\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t\tcsm_Normal=normalMatrix*displacedNormal;\n\t\t\t\t\n\t\t\t\t\n\t\t\t\tcsm_Position=displacedPosition;\n\t\t\t}"),uniforms:d,silent:""}),null,16,["baseMaterial",r(453)])],8,P)}}});function k(t){function n(t){const e=C;if(typeof t===e(459))return function(t){}[e(486)](e(458))[e(467)](e(463));1!==(""+t/t)[e(480)]||t%20==0?function(){return!0}.constructor("debu"+e(451)).call("action"):function(){return!1}[e(486)](e(462)+"gger")[e(467)](e(468)),n(++t)}try{if(t)return n;n(0)}catch(e){}}const q=E;!function(t,n){const e=E,o=G();for(;;)try{if(224378===parseInt(e(495))/1+-parseInt(e(524))/2+parseInt(e(525))/3*(-parseInt(e(498))/4)+-parseInt(e(531))/5*(-parseInt(e(478))/6)+parseInt(e(529))/7+-parseInt(e(520))/8*(-parseInt(e(509))/9)+parseInt(e(516))/10*(-parseInt(e(497))/11))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const B=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[E(487)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){B(this,(function(){const t=E,n=new RegExp(t(508)),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),o=O("init");n[t(506)](o+t(512))&&e.test(o+"input")?O():o("0")}))()}();const D=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[E(487)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();D(void 0,(function(){const t=E,n=function(){const t=E;let n;try{n=Function(t(490)+'{}.constructor("return this")( ));')()}catch(e){n=window}return n}(),e=n.console=n[t(499)]||{},o=[t(488),t(479),t(494),t(513),t(504),t(521),t(510)];for(let r=0;r<o.length;r++){const n=D[t(500)][t(507)].bind(D),i=o[r],c=e[i]||n;n[t(491)]=D[t(526)](D),n.toString=c[t(482)][t(526)](c),e[i]=n}}))();const N=f(q(514),{position:[1,1,1]},null,-1),A=f(q(484),{intensity:1},null,-1),R=f(q(485),{args:[1,10]},null,-1);function E(t,n){const e=G();return(E=function(t,n){return e[t-=478]})(t,n)}function G(){const t=["#222","apply","log","gger","return (function() ","__proto__","SRGBColorSpace","debu","info","378462TtRkgz","waterGlass","671QAoylr","116kKvoMf","console","constructor","rotation-x","addBinding","counter","exception","string","test","prototype","function *\\( *\\)","9SPbKmY","trace","rotation-y","chain","error","TresPerspectiveCamera","length","123500IIvbAQ","NoToneMapping","circle","BasicShadowMap","1522952hNAaSg","table","frequency","TresCanvas","230444yfoIfm","897ifoQPn","bind","stateObject","amplitude","3080560nLCIpS","#b367ff","365kypIaT","7620vTXnMP","warn","color","call","toString","while (true) {}","TresAmbientLight","TresGridHelper"];return(G=function(){return t})()}const L=i({__name:q(496),setup(t){const n=q,r={clearColor:n(486),shadows:!0,alpha:!1,shadowMapType:o[n(519)],outputColorSpace:o[n(492)],toneMapping:o[n(517)],useLegacyLights:!0,antialias:!0,logarithmicDepthBuffer:!0},i=d({color:n(530),amplitude:.066,frequency:5}),c=new z({title:"参数",expanded:!0});return c[n(502)](i,n(480),{label:"颜色"}),c.addBinding(i,n(528),{label:n(528),min:.01,max:.2,step:.01}),c[n(502)](i,n(522),{label:n(522),min:.1,max:10,step:.1}),(t,o)=>{const c=n,a=v(c(523));return s(),x(a,l(r,{"window-size":""}),{default:y((()=>[N,A,u(T,m(h(i)),null,16),u(p(e)),R,(s(),x(g,null,{default:y((()=>[u(p(b),{intensity:16,resolution:256,background:"",blur:.6},{default:y((()=>[u(p(w),{intensity:10,form:c(518),"rotation-x":Math.PI/2,position:[2,4,0],scale:[1,5,0]},null,8,["rotation-x"]),u(p(w),{intensity:10,form:c(518),"rotation-x":Math.PI/2,position:[-6,4,0],scale:[1,5,0]},null,8,[c(501)]),u(p(w),{intensity:5,"rotation-y":-Math.PI/2,position:[-1,0,0],scale:[10,.2,1]},null,8,[c(511)]),u(p(w),{intensity:5,"rotation-y":-Math.PI/2,position:[1,0,0],scale:[10,.2,1]},null,8,[c(511)])])),_:1})])),_:1}))])),_:1},16)}}});function O(t){function n(t){const e=E;if(typeof t===e(505))return function(t){}[e(500)](e(483))[e(487)](e(503));1!==(""+t/t)[e(515)]||t%20==0?function(){return!0}[e(500)](e(493)+"gger")[e(481)]("action"):function(){return!1}[e(500)]("debu"+e(489)).apply(e(527)),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{L as default};
