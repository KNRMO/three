import{Y as r,az as l,w as _,o as d,s as p,B as u,b6 as y,b7 as h,G as f,H as w,I as a,U as i,E as v,t as x,a as g,b8 as m}from"./vendor-e1483ee8.js";const b={style:{"background-color":"black"},class:"absolute bg-grey-600 t-0 l-0 w-full h-full z-20 flex justify-center items-center text-black font-mono"},k={class:"w-200px text-white"},N=r({__name:"loading",async setup(B){let t,e;const{hasFinishLoading:c,progress:s}=([t,e]=l(()=>h()),t=await t,e(),t);return _(()=>s.value,async(o,n)=>{console.log(o,n)}),(o,n)=>(d(),p(y,{name:"fade-overlay","enter-active-class":"opacity-1 transition-opacity duration-100","leave-active-class":"opacity-0 transition-opacity duration-200"},{default:u(()=>[f(i("div",b,[i("div",k,[v(" 载入中... "+x(a(s))+" % ",1),g(a(m),{class:"text-yellow"})])],512),[[w,!a(c)]])]),_:1}))}});export{N as _};