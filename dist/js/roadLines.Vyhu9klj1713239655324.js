import{_ as l}from"./pagesShow.vue_vue_type_script_setup_true_lang.wS0Z6j901713239655324.js";import{_ as i}from"./roadLight.vue_vue_type_script_setup_true_lang.Og8dalEx1713239655324.js";import{a1 as p,a2 as d,aq as m,o,x as s,E as t,ag as n,a as r,a8 as f}from"./vendor.DUm4xHeP1713239655324.js";import"./vanilla.WJQPBnG11713239655324.js";import"./_commonjsHelpers.5-cIlDoe1713239655324.js";import"./LineSegments2.6RUE6R-H1713239655324.js";import"./utils.ZydqBEZ81713239655324.js";import"./Water2.MwqNcPnN1713239655324.js";import"./Reflector.hhPXsk2F1713239655324.js";import"./ExtensionUtilities.GDHvmSbg1713239655324.js";const H=p({__name:"roadLines",setup(u){const e=d({color:"#ffffff",radius:2,speed:2}),a=new m({title:"道路效果",expanded:!0});return a.addBinding(e,"color",{label:"颜色"}),a.addBinding(e,"speed",{label:"速度",min:.1,max:5,step:.1}),a.addBinding(e,"radius",{label:"粗细",min:1,max:8,step:.1}),(c,_)=>(o(),s(l,{showAxesHelper:!1,showBuildings:!0,autoRotate:!1,showGridHelper:!1},{ability:t(()=>[(o(),s(n,null,{default:t(()=>[r(i,{radius:3,geoJson:"plugins/digitalCity/geojson/primary.geojson"})]),_:1})),(o(),s(n,null,{default:t(()=>[r(i,f(e,{geoJson:"plugins/digitalCity/geojson/secondary.geojson",rotationY:-.40417060831376245,scale:1.5083171193254858,position:[1835.1352780974694,30,-358.6036261374844]}),null,16)]),_:1}))]),_:1}))}});export{H as default};