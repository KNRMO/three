import{$ as m,k as f,a0 as i,aw as u,o as t,c as p,a as n,D as _,E as x,v as d,X as l}from"./vendor.95vlMDac1709203884683.js";import{_ as B}from"./loading.vue_vue_type_script_setup_true_lang.OVEWS_nb1709203884683.js";import{_ as h}from"./pagesShow.vue_vue_type_script_setup_true_lang.t72Vzxzy1709203884683.js";import{_ as w,a as g}from"./radraB.vue_vue_type_script_setup_true_lang.cCxHe84s1709203884683.js";import"./vanilla-307d3a93.esm.XN_GIGd91709203884683.js";import"./_commonjsHelpers.5-cIlDoe1709203884683.js";import"./buildingsCustomShaderMaterial.zR756inN1709203884683.js";import"./LineSegments2.gj77ZEZs1709203884683.js";const S=m({__name:"radars",setup(b){const c=f(),a=i({show:!0,color:"#00c0ff",radius:300}),s=new u({title:"雷达效果",expanded:!0}),e=s.addFolder({title:"A型"});e.addBinding(a,"show",{label:"显示"}),e.addBinding(a,"color",{label:"颜色"}),e.addBinding(a,"radius",{label:"大小",min:1,max:400,step:10});const o=i({show:!0,color:"#ffff00",maxRadius:300}),r=s.addFolder({title:"B型"});return r.addBinding(o,"show",{label:"显示"}),r.addBinding(o,"color",{label:"颜色"}),r.addBinding(o,"maxRadius",{label:"大小",min:10,max:400,step:10}),(k,R)=>(t(),p(x,null,[n(B),n(h,null,{ability:_(()=>[a.show?(t(),d(w,{key:0,ref_key:"radraARef",ref:c,color:a.color,radius:a.radius,size:300,position:[10,60,0]},null,8,["color","radius"])):l("",!0),o.show?(t(),d(g,{key:1,position:[600,30,0],color:o.color,height:80,maxRadius:o.maxRadius},null,8,["color","maxRadius"])):l("",!0)]),_:1})],64))}});export{S as default};
