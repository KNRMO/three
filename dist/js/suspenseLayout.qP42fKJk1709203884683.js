import{$ as h,o as l,v as b,D as _,K as a,ad as y,a as r,da as F,H as f,X as U,db as C,t as P,dc as B,k as m,dd as j,c as g,W as w,ah as I,ai as N,_ as O,r as V,ag as T,E as z}from"./vendor.95vlMDac1709203884683.js";import{g as x}from"./utils.Q7lqT-1X1709203884683.js";const D=h({__name:"showSrcBtn",setup(o){let e=(window.location.href.split("#")[1]||"").split("/"),s="".concat("https://gitee.com/ice-gl/icegl-three-vue-tres/blob/master/src","/").concat(e[1],"/").concat(e[2],"/pages/").concat(e.slice(3).join("/"),".vue");console.log("源码地址",s);const n=()=>{window.open(s)};return(d,p)=>(l(),b(a(y),{type:"info",class:"absolute",size:"small",style:{right:"10px",bottom:"10px"},onClick:p[0]||(p[0]=X=>n())},{icon:_(()=>[r(a(F))]),default:_(()=>[f("源码地址 ")]),_:1}))}}),E=h({__name:"referenceSource",setup(o){const e=(window.location.href.split("#")[1]||"").split("/");let t=null;e[2]==="basic"?t=x(e[2],e[3],e[4]):t=x(e[2],e[3]),console.log(t);const s=t==null?void 0:t.referenceSource,n=()=>{window.open(s.url)};return(d,p)=>a(s)?(l(),b(a(y),{key:0,type:"info",class:"absolute",size:"small",style:{left:"10px",bottom:"10px"},onClick:n},{icon:_(()=>[r(a(C))]),default:_(()=>[f("参考出处 ："+P(a(s).title),1)]),_:1})):U("",!0)}}),G=o=>(I("data-v-ff8b750c"),o=o(),N(),o),W={class:"fpsStats"},H={class:"number"},K=G(()=>w("br",null,null,-1)),L=["points"],S=58,v=30,u=2,k=100,$=0,M=h({__name:"FPSGraph",setup(o){const c=B({every:k}),i=m(""),e=m([]),t=m(S/u);let s=performance.now();return j(({timestamp:n})=>{n-s>=k&&(s=n,e.value.push(c.value),e.value.length>t.value&&e.value.shift(),i.value=e.value.map((d,p)=>"".concat(p*u,",").concat(v+$-u/2-d*(v+$-u)/160)).join(" "))}),(n,d)=>(l(),g("div",W,[w("div",H,[f(P(Math.round(a(c)))+" ",1),K,f(" FPS ")]),(l(),g("svg",{width:S,height:v,xmlns:"http://www.w3.org/2000/svg"},[w("polyline",{points:i.value,fill:"none",stroke:"#5384ff","stroke-width":u,"stroke-linecap":"round","stroke-linejoin":"round"},null,8,L)]))]))}}),R=O(M,[["__scopeId","data-v-ff8b750c"]]),J=h({__name:"suspenseLayout",setup(o){return(c,i)=>{const e=V("router-view");return l(),g(z,null,[(l(),b(T,null,{default:_(()=>[r(e)]),_:1})),r(D),r(E),r(R)],64)}}});export{J as default};
