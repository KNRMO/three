var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,i=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,u=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&i(e,n,t[n]);if(r)for(var n of r(t))a.call(t,n)&&i(e,n,t[n]);return e},s=(e,r)=>t(e,n(r)),l=(e,t)=>{var n={};for(var i in e)o.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&r)for(var i of r(e))t.indexOf(i)<0&&a.call(e,i)&&(n[i]=e[i]);return n};import{k as c,q as f,t as v,l as p,n as d,u as m,b as y,a0 as g,p as h,w,a1 as b,X as S,a as O}from"./@vue.Q1VpS3901723189171640.js";function A(e){return!!p()&&(d(e),!0)}function E(e){let t,n,r=0;const o=()=>{r-=1,n&&r<=0&&(n.stop(),t=void 0,n=void 0)};return(...a)=>(r+=1,t||(n=c(!0),t=n.run((()=>e(...a)))),A(o),t)}function I(e){return"function"==typeof e?e():m(e)}const F="undefined"!=typeof window&&"undefined"!=typeof document;"undefined"!=typeof WorkerGlobalScope&&(globalThis,WorkerGlobalScope);const N=Object.prototype.toString,j=e=>"[object Object]"===N.call(e),T=()=>{};const M=e=>e();function L(e,t,n={}){const r=n,{eventFilter:o=M}=r,a=l(r,["eventFilter"]);return w(e,(i=o,u=t,function(...e){return new Promise(((t,n)=>{Promise.resolve(i((()=>u.apply(this,e)),{fn:u,thisArg:this,args:e})).then(t).catch(n)}))}),a);var i,u}function P(e,t,n={}){const r=n,{eventFilter:o}=r,a=l(r,["eventFilter"]),{eventFilter:i,pause:c,resume:f,isActive:v}=function(e=M){const t=y(!0);return{isActive:g(t),pause:function(){t.value=!1},resume:function(){t.value=!0},eventFilter:(...n)=>{t.value&&e(...n)}}}(o);return{stop:L(e,t,s(u({},a),{eventFilter:i})),pause:c,resume:f,isActive:v}}function k(e,t=!0,n){const r=function(e){return e||h()}();r?f(e,n):t?e():v(e)}function V(e){var t;const n=I(e);return null!=(t=null==n?void 0:n.$el)?t:n}const _=F?window:void 0,x=F?window.document:void 0;function Y(...e){let t,n,r,o;if("string"==typeof e[0]||Array.isArray(e[0])?([n,r,o]=e,t=_):[t,n,r,o]=e,!t)return T;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const a=[],i=()=>{a.forEach((e=>e())),a.length=0},s=w((()=>[V(t),I(o)]),(([e,t])=>{if(i(),!e)return;const o=j(t)?u({},t):t;a.push(...n.flatMap((t=>r.map((n=>((e,t,n,r)=>(e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)))(e,t,n,o))))))}),{immediate:!0,flush:"post"}),l=()=>{s(),i()};return A(l),l}function D(e){const t=function(){const e=y(!1),t=h();return t&&f((()=>{e.value=!0}),t),e}();return O((()=>(t.value,Boolean(e()))))}function J(e,t={}){const{immediate:n=!0,fpsLimit:r,window:o=_}=t,a=y(!1),i=r?1e3/r:null;let u=0,s=null;function l(t){if(!a.value||!o)return;u||(u=t);const n=t-u;i&&n<i||(u=t,e({delta:n,timestamp:t})),s=o.requestAnimationFrame(l)}function c(){!a.value&&o&&(a.value=!0,u=0,s=o.requestAnimationFrame(l))}function f(){a.value=!1,null!=s&&o&&(o.cancelAnimationFrame(s),s=null)}return n&&c(),A(f),{isActive:g(a),pause:f,resume:c}}const X="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},W="__vueuse_ssr_handlers__",q=H();function H(){return W in X||(X[W]=X[W]||{}),X[W]}const z={boolean:{read:e=>"true"===e,write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},C="vueuse-storage";function G(e,t,n,r={}){var o;const{flush:a="pre",deep:i=!0,listenToStorageChanges:s=!0,writeDefaults:l=!0,mergeDefaults:c=!1,shallow:f,window:p=_,eventFilter:d,onError:m=(e=>{console.error(e)}),initOnMounted:g}=r,h=(f?S:y)("function"==typeof t?t():t);if(!n)try{n=function(e,t){return q[e]||t}("getDefaultStorage",(()=>{var e;return null==(e=_)?void 0:e.localStorage}))()}catch(T){m(T)}if(!n)return h;const w=I(t),b=function(e){return null==e?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":"boolean"==typeof e?"boolean":"string"==typeof e?"string":"object"==typeof e?"object":Number.isNaN(e)?"any":"number"}(w),O=null!=(o=r.serializer)?o:z[b],{pause:A,resume:E}=P(h,(()=>function(t){try{const r=n.getItem(e);if(null==t)F(r,null),n.removeItem(e);else{const o=O.write(t);r!==o&&(n.setItem(e,o),F(r,o))}}catch(T){m(T)}}(h.value)),{flush:a,deep:i,eventFilter:d});function F(t,r){p&&p.dispatchEvent(new CustomEvent(C,{detail:{key:e,oldValue:t,newValue:r,storageArea:n}}))}function N(t){if(!t||t.storageArea===n)if(t&&null==t.key)h.value=w;else if(!t||t.key===e){A();try{(null==t?void 0:t.newValue)!==O.write(h.value)&&(h.value=function(t){const r=t?t.newValue:n.getItem(e);if(null==r)return l&&null!=w&&n.setItem(e,O.write(w)),w;if(!t&&c){const e=O.read(r);return"function"==typeof c?c(e,w):"object"!==b||Array.isArray(e)?e:u(u({},w),e)}return"string"!=typeof r?r:O.read(r)}(t))}catch(T){m(T)}finally{t?v(E):E()}}}function j(e){N(e.detail)}return p&&s&&k((()=>{Y(p,"storage",N),Y(p,C,j),g&&N()})),g||N(),h}function B(e){var t;const n=y(0);if("undefined"==typeof performance)return n;const r=null!=(t=null==e?void 0:e.every)?t:10;let o=performance.now(),a=0;return J((()=>{if(a+=1,a>=r){const e=performance.now(),t=e-o;n.value=Math.round(1e3/(t/a)),o=e,a=0}})),n}const $=["mousedown","mouseup","keydown","keyup"];function K(e,t={}){const{events:n=$,document:r=x,initial:o=null}=t,a=y(o);return r&&n.forEach((t=>{Y(r,t,(t=>{"function"==typeof t.getModifierState&&(a.value=t.getModifierState(e))}))})),a}const Q={page:e=>[e.pageX,e.pageY],client:e=>[e.clientX,e.clientY],screen:e=>[e.screenX,e.screenY],movement:e=>e instanceof Touch?null:[e.movementX,e.movementY]};function R(e={}){const{type:t="page",touch:n=!0,resetOnTouchEnds:r=!1,initialValue:o={x:0,y:0},window:a=_,target:i=a,scroll:u=!0,eventFilter:s}=e;let l=null;const c=y(o.x),f=y(o.y),v=y(null),p="function"==typeof t?t:Q[t],d=e=>{const t=p(e);l=e,t&&([c.value,f.value]=t,v.value="mouse")},m=e=>{if(e.touches.length>0){const t=p(e.touches[0]);t&&([c.value,f.value]=t,v.value="touch")}},g=()=>{if(!l||!a)return;const e=p(l);l instanceof MouseEvent&&e&&(c.value=e[0]+a.scrollX,f.value=e[1]+a.scrollY)},h=()=>{c.value=o.x,f.value=o.y},w=s?e=>s((()=>d(e)),{}):e=>d(e),b=s?e=>s((()=>m(e)),{}):e=>m(e),S=s?()=>s((()=>g()),{}):()=>g();if(i){const e={passive:!0};Y(i,["mousemove","dragover"],w,e),n&&"movement"!==t&&(Y(i,["touchstart","touchmove"],b,e),r&&Y(i,"touchend",h,e)),u&&"page"===t&&Y(a,"scroll",S,{passive:!0})}return{x:c,y:f,sourceType:v}}function U(e={}){const{touch:t=!0,drag:n=!0,capture:r=!1,initialValue:o=!1,window:a=_}=e,i=y(o),u=y(null);if(!a)return{pressed:i,sourceType:u};const s=e=>()=>{i.value=!0,u.value=e},l=()=>{i.value=!1,u.value=null},c=O((()=>V(e.target)||a));return Y(c,"mousedown",s("mouse"),{passive:!0,capture:r}),Y(a,"mouseleave",l,{passive:!0,capture:r}),Y(a,"mouseup",l,{passive:!0,capture:r}),n&&(Y(c,"dragstart",s("mouse"),{passive:!0,capture:r}),Y(a,"drop",l,{passive:!0,capture:r}),Y(a,"dragend",l,{passive:!0,capture:r})),t&&(Y(c,"touchstart",s("touch"),{passive:!0,capture:r}),Y(a,"touchend",l,{passive:!0,capture:r}),Y(a,"touchcancel",l,{passive:!0,capture:r})),{pressed:i,sourceType:u}}function Z(e={}){const{window:t=_,initialWidth:n=Number.POSITIVE_INFINITY,initialHeight:r=Number.POSITIVE_INFINITY,listenOrientation:o=!0,includeScrollbar:a=!0}=e,i=y(n),u=y(r),s=()=>{t&&(a?(i.value=t.innerWidth,u.value=t.innerHeight):(i.value=t.document.documentElement.clientWidth,u.value=t.document.documentElement.clientHeight))};if(s(),k(s),Y("resize",s,{passive:!0}),o){const e=function(e,t={}){const{window:n=_}=t,r=D((()=>n&&"matchMedia"in n&&"function"==typeof n.matchMedia));let o;const a=y(!1),i=e=>{a.value=e.matches},u=()=>{o&&("removeEventListener"in o?o.removeEventListener("change",i):o.removeListener(i))},s=b((()=>{r.value&&(u(),o=n.matchMedia(I(e)),"addEventListener"in o?o.addEventListener("change",i):o.addListener(i),a.value=o.matches)}));return A((()=>{s(),u(),o=void 0})),a}("(orientation: portrait)");w(e,(()=>s()))}return{width:i,height:u}}export{G as a,Y as b,E as c,R as d,U as e,K as f,B as g,J as h,F as i,Z as u};
