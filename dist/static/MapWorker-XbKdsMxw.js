var __defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,t,r)=>t in e?__defProp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,__spreadValues=(e,t)=>{for(var r in t||(t={}))__hasOwnProp.call(t,r)&&__defNormalProp(e,r,t[r]);if(__getOwnPropSymbols)for(var r of __getOwnPropSymbols(t))__propIsEnum.call(t,r)&&__defNormalProp(e,r,t[r]);return e},__spreadProps=(e,t)=>__defProps(e,__getOwnPropDescs(t));!function(){"use strict";const e=class e{constructor(){this._controller=new AbortController,this.listeners=new Set}fetch(t,r={}){e.pendings.has(t)||(e.pendings.set(t,this),fetch(t,__spreadProps(__spreadValues({},r),{signal:this._controller.signal})).then((e=>{this.listeners.forEach((t=>t.resolve(e.clone())))})).catch((e=>{this.listeners.forEach((t=>t.reject(e)))})).finally((()=>{e.pendings.delete(t)})))}abort(){this._controller.abort()}};e.pendings=new Map;let t,r=e;class s{constructor(e,t){this.url=e,this.init=t,this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}ready(){let e=r.pendings.get(this.url);return e||(e=new r,e.fetch(this.url,this.init)),e.listeners.add(this),this.promise}abort(){this.reject("User abort.");const e=r.pendings.get(this.url);e&&(e.listeners.delete(this),0===e.listeners.size&&e.abort())}}const o=new Map;self.onmessage=async e=>{var r;const{id:n,tileNo:i,url:a,debug:l,abort:c}=e.data;if(c)return null==(r=o.get(n))||r.abort(),o.delete(n),void self.postMessage({id:n,error:!0});try{const e=new s(a,{cache:"force-cache",mode:"cors"});o.set(n,e);const r=await async function(e,r,s=!1){const o=await r.ready(),n=await o.blob(),i=await createImageBitmap(n,s?void 0:{imageOrientation:"flipY"});if(!s)return i;t||(t=new OffscreenCanvas(256,256));const a=t.getContext("2d");if(!a)throw new Error('Offscreencanvas.getContext("2d") error!');const{width:l,height:c}=t;return a.drawImage(i,0,0),a.rect(0,0,l,c),a.strokeStyle="#00FFFF",a.font="20px Arial",a.stroke(),a.fillStyle="#FF4444",a.fillText("".concat(e[0]),10,30),a.fillStyle="#44FF44",a.fillText("".concat(e[1]),10,55),a.fillStyle="#66AAFF",a.fillText("".concat(e[2]),10,80),await createImageBitmap(t,{imageOrientation:"flipY"})}(i,e,l);self.postMessage({id:n,bitmap:r},[r])}catch(p){self.postMessage({id:n,error:!0})}finally{o.delete(n)}}}();