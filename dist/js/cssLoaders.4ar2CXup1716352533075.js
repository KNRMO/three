import{a1 as m,aD as u,L as n,o as e,c as s,Y as y,Z as l,G as h,I as p,t as f,bB as k,_ as v}from"./vendor.0WmFTx_01716352533075.js";/* empty css                                                                                 */const g={key:0,class:"absolute bg-grey-600 t-0 l-0 w-full h-full z-999999 flex justify-center items-center text-black font-mono bg-black"},N={class:"text-center text-white"},x={key:0,class:"loader1"},b={key:1,class:"loader2"},w={key:2,class:"loader3"},B={key:3,class:"loader4"},D={key:4,class:"loader5"},F={key:5,class:"loader6"},A={key:6,class:"loader7"},C=m({__name:"cssLoaders",props:{styleNum:{default:0},isDemo:{type:Boolean,default:!1},showProgress:{type:Boolean,default:!0}},async setup(i){let o,r;const t=i,{hasFinishLoading:d,progress:a}=([o,r]=u(()=>k()),o=await o,r(),o),c=()=>{a.value++>100&&(a.value=0),requestAnimationFrame(c)};return t.isDemo&&requestAnimationFrame(c),(_,L)=>n(d)?l("",!0):(e(),s("div",g,[y("div",N,[t.styleNum===0?(e(),s("div",x)):t.styleNum===1?(e(),s("div",b)):t.styleNum===2?(e(),s("div",w)):t.styleNum===3?(e(),s("div",B)):t.styleNum===4?(e(),s("div",D)):t.styleNum===5?(e(),s("div",F)):t.styleNum===6?(e(),s("div",A)):l("",!0),_.showProgress?(e(),s(h,{key:7},[p(f(n(a))+" %",1)],64)):l("",!0)])]))}}),I=v(C,[["__scopeId","data-v-0b99c36c"]]);export{I as l};