import{l as a,a as t,v as l,y as n,s as g}from"./starLoading.yt4qZ33C1712649228867.js";import{l as m}from"./bubbleLoading.uoh3VGV41712649228867.js";import{a0 as u,a1 as h,o,v as e,K as r,Y as y}from"./vendor.UoMSxCrE1712649228867.js";const p=u({__name:"randomLoading",setup(w){const s=h({styleNum:0,showProgress:!0});return s.styleNum=Math.floor(Math.random()*24),s.showProgress=Math.random()<.5,console.log(s.styleNum,s.showProgress),(P,N)=>s.styleNum<10?(o(),e(r(a),{key:0,styleNum:s.styleNum,showProgress:s.showProgress},null,8,["styleNum","showProgress"])):s.styleNum<20?(o(),e(r(t),{key:1,styleNum:s.styleNum-10,showProgress:s.showProgress},null,8,["styleNum","showProgress"])):s.styleNum===20?(o(),e(r(m),{key:2,showProgress:s.showProgress},null,8,["showProgress"])):s.styleNum===21?(o(),e(r(l),{key:3,showProgress:s.showProgress},null,8,["showProgress"])):s.styleNum===22?(o(),e(r(n),{key:4,showProgress:s.showProgress},null,8,["showProgress"])):s.styleNum===23?(o(),e(r(g),{key:5,showProgress:s.showProgress},null,8,["showProgress"])):y("",!0)}});export{p as _};