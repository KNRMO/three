var F=Object.defineProperty,v=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var w=(i,s,t)=>s in i?F(i,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[s]=t,u=(i,s)=>{for(var t in s||(s={}))M.call(s,t)&&w(i,t,s[t]);if(m)for(var t of m(s))S.call(s,t)&&w(i,t,s[t]);return i},b=(i,s)=>v(i,x(s));var l=(i,s,t)=>(w(i,typeof s!="symbol"?s+"":s,t),t);(function(){"use strict";const c=class c{constructor(){l(this,"_controller",new AbortController);l(this,"listeners",new Set)}fetch(e,a={}){c.pendings.has(e)||(c.pendings.set(e,this),fetch(e,b(u({},a),{signal:this._controller.signal})).then(o=>{this.listeners.forEach(n=>n.resolve(o.clone()))}).catch(o=>{this.listeners.forEach(n=>n.reject(o))}).finally(()=>{c.pendings.delete(e)}))}abort(){this._controller.abort()}};l(c,"pendings",new Map);let i=c;class s{constructor(e,a){l(this,"resolve");l(this,"reject");l(this,"promise");this.url=e,this.init=a,this.promise=new Promise((o,n)=>{this.resolve=o,this.reject=n})}ready(){let e=i.pendings.get(this.url);return e||(e=new i,e.fetch(this.url,this.init)),e.listeners.add(this),this.promise}abort(){this.reject("User abort.");const e=i.pendings.get(this.url);e&&(e.listeners.delete(this),e.listeners.size===0&&e.abort())}}let t;async function y(f,e,a=!1){const n=await(await e.ready()).blob(),p=await createImageBitmap(n,a?void 0:{imageOrientation:"flipY"});if(!a)return p;t||(t=new OffscreenCanvas(256,256));const r=t.getContext("2d");if(!r)throw new Error('Offscreencanvas.getContext("2d") error!');const{width:h,height:d}=t;return r.drawImage(p,0,0),r.rect(0,0,h,d),r.strokeStyle="#00FFFF",r.font="20px Arial",r.stroke(),r.fillStyle="#FF4444",r.fillText("".concat(f[0]),10,30),r.fillStyle="#44FF44",r.fillText("".concat(f[1]),10,55),r.fillStyle="#66AAFF",r.fillText("".concat(f[2]),10,80),await createImageBitmap(t,{imageOrientation:"flipY"})}const g=new Map;self.onmessage=async f=>{var r;const{id:e,tileNo:a,url:o,debug:n,abort:p}=f.data;if(p){(r=g.get(e))==null||r.abort(),g.delete(e),self.postMessage({id:e,error:!0});return}try{const h=new s(o,{cache:"force-cache",mode:"cors"});g.set(e,h);const d=await y(a,h,n);self.postMessage({id:e,bitmap:d},[d])}catch(h){self.postMessage({id:e,error:!0})}finally{g.delete(e)}}})();