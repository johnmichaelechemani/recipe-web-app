import{L as tt,M as me,l as Ee,k as C,N as nt,J as ot,O as st,P as rt,D as J,B as it}from"./index-OfqcJFP7.js";import{g as Le,c as X,q as Ae,w as ct,b as Oe,d as Z,s as at,u as Fe,o as lt,e as ut}from"./index.esm2017-CX63Xga-.js";const D=/^[a-z0-9]+(-[a-z0-9]+)*$/,V=(e,t,n,s="")=>{const o=e.split(":");if(e.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;s=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const c=o.pop(),a=o.pop(),l={provider:o.length>0?o[0]:s,prefix:a,name:c};return t&&!U(l)?null:l}const r=o[0],i=r.split("-");if(i.length>1){const c={provider:s,prefix:i.shift(),name:i.join("-")};return t&&!U(c)?null:c}if(n&&s===""){const c={provider:s,prefix:"",name:r};return t&&!U(c,n)?null:c}return null},U=(e,t)=>e?!!((e.provider===""||e.provider.match(D))&&(t&&e.prefix===""||e.prefix.match(D))&&e.name.match(D)):!1,De=Object.freeze({left:0,top:0,width:16,height:16}),Q=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),q=Object.freeze({...De,...Q}),ee=Object.freeze({...q,body:"",hidden:!1});function ft(e,t){const n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);const s=((e.rotate||0)+(t.rotate||0))%4;return s&&(n.rotate=s),n}function ye(e,t){const n=ft(e,t);for(const s in ee)s in Q?s in e&&!(s in n)&&(n[s]=Q[s]):s in t?n[s]=t[s]:s in e&&(n[s]=e[s]);return n}function dt(e,t){const n=e.icons,s=e.aliases||Object.create(null),o=Object.create(null);function r(i){if(n[i])return o[i]=[];if(!(i in o)){o[i]=null;const c=s[i]&&s[i].parent,a=c&&r(c);a&&(o[i]=[c].concat(a))}return o[i]}return Object.keys(n).concat(Object.keys(s)).forEach(r),o}function ht(e,t,n){const s=e.icons,o=e.aliases||Object.create(null);let r={};function i(c){r=ye(s[c]||o[c],r)}return i(t),n.forEach(i),ye(e,r)}function _e(e,t){const n=[];if(typeof e!="object"||typeof e.icons!="object")return n;e.not_found instanceof Array&&e.not_found.forEach(o=>{t(o,null),n.push(o)});const s=dt(e);for(const o in s){const r=s[o];r&&(t(o,ht(e,o,r)),n.push(o))}return n}const pt={provider:"",aliases:{},not_found:{},...De};function K(e,t){for(const n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function Ne(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!K(e,pt))return null;const n=t.icons;for(const o in n){const r=n[o];if(!o.match(D)||typeof r.body!="string"||!K(r,ee))return null}const s=t.aliases||Object.create(null);for(const o in s){const r=s[o],i=r.parent;if(!o.match(D)||typeof i!="string"||!n[i]&&!s[i]||!K(r,ee))return null}return t}const we=Object.create(null);function gt(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function E(e,t){const n=we[e]||(we[e]=Object.create(null));return n[t]||(n[t]=gt(e,t))}function ce(e,t){return Ne(t)?_e(t,(n,s)=>{s?e.icons[n]=s:e.missing.add(n)}):[]}function mt(e,t,n){try{if(typeof n.body=="string")return e.icons[t]={...n},!0}catch{}return!1}let _=!1;function Be(e){return typeof e=="boolean"&&(_=e),_}function yt(e){const t=typeof e=="string"?V(e,!0,_):e;if(t){const n=E(t.provider,t.prefix),s=t.name;return n.icons[s]||(n.missing.has(s)?null:void 0)}}function wt(e,t){const n=V(e,!0,_);if(!n)return!1;const s=E(n.provider,n.prefix);return mt(s,n.name,t)}function bt(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),_&&!t&&!e.prefix){let o=!1;return Ne(e)&&(e.prefix="",_e(e,(r,i)=>{i&&wt(r,i)&&(o=!0)})),o}const n=e.prefix;if(!U({provider:t,prefix:n,name:"a"}))return!1;const s=E(t,n);return!!ce(s,e)}const Ue=Object.freeze({width:null,height:null}),$e=Object.freeze({...Ue,...Q}),vt=/(-?[0-9.]*[0-9]+[0-9.]*)/g,It=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function be(e,t,n){if(t===1)return e;if(n=n||100,typeof e=="number")return Math.ceil(e*t*n)/n;if(typeof e!="string")return e;const s=e.split(vt);if(s===null||!s.length)return e;const o=[];let r=s.shift(),i=It.test(r);for(;;){if(i){const c=parseFloat(r);isNaN(c)?o.push(r):o.push(Math.ceil(c*t*n)/n)}else o.push(r);if(r=s.shift(),r===void 0)return o.join("");i=!i}}function xt(e,t="defs"){let n="";const s=e.indexOf("<"+t);for(;s>=0;){const o=e.indexOf(">",s),r=e.indexOf("</"+t);if(o===-1||r===-1)break;const i=e.indexOf(">",r);if(i===-1)break;n+=e.slice(o+1,r).trim(),e=e.slice(0,s).trim()+e.slice(i+1)}return{defs:n,content:e}}function St(e,t){return e?"<defs>"+e+"</defs>"+t:t}function Ct(e,t,n){const s=xt(e);return St(s.defs,t+s.content+n)}const Tt=e=>e==="unset"||e==="undefined"||e==="none";function kt(e,t){const n={...q,...e},s={...$e,...t},o={left:n.left,top:n.top,width:n.width,height:n.height};let r=n.body;[n,s].forEach(y=>{const f=[],T=y.hFlip,k=y.vFlip;let b=y.rotate;T?k?b+=2:(f.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),f.push("scale(-1 1)"),o.top=o.left=0):k&&(f.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),f.push("scale(1 -1)"),o.top=o.left=0);let w;switch(b<0&&(b-=Math.floor(b/4)*4),b=b%4,b){case 1:w=o.height/2+o.top,f.unshift("rotate(90 "+w.toString()+" "+w.toString()+")");break;case 2:f.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:w=o.width/2+o.left,f.unshift("rotate(-90 "+w.toString()+" "+w.toString()+")");break}b%2===1&&(o.left!==o.top&&(w=o.left,o.left=o.top,o.top=w),o.width!==o.height&&(w=o.width,o.width=o.height,o.height=w)),f.length&&(r=Ct(r,'<g transform="'+f.join(" ")+'">',"</g>"))});const i=s.width,c=s.height,a=o.width,l=o.height;let u,p;i===null?(p=c===null?"1em":c==="auto"?l:c,u=be(p,a/l)):(u=i==="auto"?a:i,p=c===null?be(u,l/a):c==="auto"?l:c);const m={},v=(y,f)=>{Tt(f)||(m[y]=f.toString())};v("width",u),v("height",p);const S=[o.left,o.top,a,l];return m.viewBox=S.join(" "),{attributes:m,viewBox:S,body:r}}const Rt=/\sid="(\S+)"/g,Mt="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Pt=0;function jt(e,t=Mt){const n=[];let s;for(;s=Rt.exec(e);)n.push(s[1]);if(!n.length)return e;const o="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(r=>{const i=typeof t=="function"?t(r):t+(Pt++).toString(),c=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+i+o+"$3")}),e=e.replace(new RegExp(o,"g"),""),e}const te=Object.create(null);function Et(e,t){te[e]=t}function ne(e){return te[e]||te[""]}function ae(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const le=Object.create(null),F=["https://api.simplesvg.com","https://api.unisvg.com"],$=[];for(;F.length>0;)F.length===1||Math.random()>.5?$.push(F.shift()):$.push(F.pop());le[""]=ae({resources:["https://api.iconify.design"].concat($)});function Lt(e,t){const n=ae(t);return n===null?!1:(le[e]=n,!0)}function ue(e){return le[e]}const At=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let ve=At();function Ot(e,t){const n=ue(e);if(!n)return 0;let s;if(!n.maxURL)s=0;else{let o=0;n.resources.forEach(i=>{o=Math.max(o,i.length)});const r=t+".json?icons=";s=n.maxURL-o-n.path.length-r.length}return s}function Ft(e){return e===404}const Dt=(e,t,n)=>{const s=[],o=Ot(e,t),r="icons";let i={type:r,provider:e,prefix:t,icons:[]},c=0;return n.forEach((a,l)=>{c+=a.length+1,c>=o&&l>0&&(s.push(i),i={type:r,provider:e,prefix:t,icons:[]},c=a.length),i.icons.push(a)}),s.push(i),s};function _t(e){if(typeof e=="string"){const t=ue(e);if(t)return t.path}return"/"}const Nt=(e,t,n)=>{if(!ve){n("abort",424);return}let s=_t(t.provider);switch(t.type){case"icons":{const r=t.prefix,c=t.icons.join(","),a=new URLSearchParams({icons:c});s+=r+".json?"+a.toString();break}case"custom":{const r=t.uri;s+=r.slice(0,1)==="/"?r.slice(1):r;break}default:n("abort",400);return}let o=503;ve(e+s).then(r=>{const i=r.status;if(i!==200){setTimeout(()=>{n(Ft(i)?"abort":"next",i)});return}return o=501,r.json()}).then(r=>{if(typeof r!="object"||r===null){setTimeout(()=>{r===404?n("abort",r):n("next",o)});return}setTimeout(()=>{n("success",r)})}).catch(()=>{n("next",o)})},Bt={prepare:Dt,send:Nt};function Ut(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort((o,r)=>o.provider!==r.provider?o.provider.localeCompare(r.provider):o.prefix!==r.prefix?o.prefix.localeCompare(r.prefix):o.name.localeCompare(r.name));let s={provider:"",prefix:"",name:""};return e.forEach(o=>{if(s.name===o.name&&s.prefix===o.prefix&&s.provider===o.provider)return;s=o;const r=o.provider,i=o.prefix,c=o.name,a=n[r]||(n[r]=Object.create(null)),l=a[i]||(a[i]=E(r,i));let u;c in l.icons?u=t.loaded:i===""||l.missing.has(c)?u=t.missing:u=t.pending;const p={provider:r,prefix:i,name:c};u.push(p)}),t}function He(e,t){e.forEach(n=>{const s=n.loaderCallbacks;s&&(n.loaderCallbacks=s.filter(o=>o.id!==t))})}function $t(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1;const s=e.provider,o=e.prefix;t.forEach(r=>{const i=r.icons,c=i.pending.length;i.pending=i.pending.filter(a=>{if(a.prefix!==o)return!0;const l=a.name;if(e.icons[l])i.loaded.push({provider:s,prefix:o,name:l});else if(e.missing.has(l))i.missing.push({provider:s,prefix:o,name:l});else return n=!0,!0;return!1}),i.pending.length!==c&&(n||He([e],r.id),r.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),r.abort))})}))}let Ht=0;function Qt(e,t,n){const s=Ht++,o=He.bind(null,n,s);if(!t.pending.length)return o;const r={id:s,icons:t,callback:e,abort:o};return n.forEach(i=>{(i.loaderCallbacks||(i.loaderCallbacks=[])).push(r)}),o}function Vt(e,t=!0,n=!1){const s=[];return e.forEach(o=>{const r=typeof o=="string"?V(o,t,n):o;r&&s.push(r)}),s}var qt={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function zt(e,t,n,s){const o=e.resources.length,r=e.random?Math.floor(Math.random()*o):e.index;let i;if(e.random){let g=e.resources.slice(0);for(i=[];g.length>1;){const I=Math.floor(Math.random()*g.length);i.push(g[I]),g=g.slice(0,I).concat(g.slice(I+1))}i=i.concat(g)}else i=e.resources.slice(r).concat(e.resources.slice(0,r));const c=Date.now();let a="pending",l=0,u,p=null,m=[],v=[];typeof s=="function"&&v.push(s);function S(){p&&(clearTimeout(p),p=null)}function y(){a==="pending"&&(a="aborted"),S(),m.forEach(g=>{g.status==="pending"&&(g.status="aborted")}),m=[]}function f(g,I){I&&(v=[]),typeof g=="function"&&v.push(g)}function T(){return{startTime:c,payload:t,status:a,queriesSent:l,queriesPending:m.length,subscribe:f,abort:y}}function k(){a="failed",v.forEach(g=>{g(void 0,u)})}function b(){m.forEach(g=>{g.status==="pending"&&(g.status="aborted")}),m=[]}function w(g,I,M){const A=I!=="success";switch(m=m.filter(R=>R!==g),a){case"pending":break;case"failed":if(A||!e.dataAfterTimeout)return;break;default:return}if(I==="abort"){u=M,k();return}if(A){u=M,m.length||(i.length?L():k());return}if(S(),b(),!e.random){const R=e.resources.indexOf(g.resource);R!==-1&&R!==e.index&&(e.index=R)}a="completed",v.forEach(R=>{R(M)})}function L(){if(a!=="pending")return;S();const g=i.shift();if(g===void 0){if(m.length){p=setTimeout(()=>{S(),a==="pending"&&(b(),k())},e.timeout);return}k();return}const I={status:"pending",resource:g,callback:(M,A)=>{w(I,M,A)}};m.push(I),l++,p=setTimeout(L,e.rotate),n(g,t,I.callback)}return setTimeout(L),T}function Qe(e){const t={...qt,...e};let n=[];function s(){n=n.filter(c=>c().status==="pending")}function o(c,a,l){const u=zt(t,c,a,(p,m)=>{s(),l&&l(p,m)});return n.push(u),u}function r(c){return n.find(a=>c(a))||null}return{query:o,find:r,setIndex:c=>{t.index=c},getIndex:()=>t.index,cleanup:s}}function Ie(){}const Y=Object.create(null);function Gt(e){if(!Y[e]){const t=ue(e);if(!t)return;const n=Qe(t),s={config:t,redundancy:n};Y[e]=s}return Y[e]}function Wt(e,t,n){let s,o;if(typeof e=="string"){const r=ne(e);if(!r)return n(void 0,424),Ie;o=r.send;const i=Gt(e);i&&(s=i.redundancy)}else{const r=ae(e);if(r){s=Qe(r);const i=e.resources?e.resources[0]:"",c=ne(i);c&&(o=c.send)}}return!s||!o?(n(void 0,424),Ie):s.query(t,o,n)().abort}const xe="iconify2",N="iconify",Ve=N+"-count",Se=N+"-version",qe=36e5,Jt=168,Kt=50;function oe(e,t){try{return e.getItem(t)}catch{}}function fe(e,t,n){try{return e.setItem(t,n),!0}catch{}}function Ce(e,t){try{e.removeItem(t)}catch{}}function se(e,t){return fe(e,Ve,t.toString())}function re(e){return parseInt(oe(e,Ve))||0}const z={local:!0,session:!0},ze={local:new Set,session:new Set};let de=!1;function Yt(e){de=e}let B=typeof window>"u"?{}:window;function Ge(e){const t=e+"Storage";try{if(B&&B[t]&&typeof B[t].length=="number")return B[t]}catch{}z[e]=!1}function We(e,t){const n=Ge(e);if(!n)return;const s=oe(n,Se);if(s!==xe){if(s){const c=re(n);for(let a=0;a<c;a++)Ce(n,N+a.toString())}fe(n,Se,xe),se(n,0);return}const o=Math.floor(Date.now()/qe)-Jt,r=c=>{const a=N+c.toString(),l=oe(n,a);if(typeof l=="string"){try{const u=JSON.parse(l);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>o&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&t(u,c))return!0}catch{}Ce(n,a)}};let i=re(n);for(let c=i-1;c>=0;c--)r(c)||(c===i-1?(i--,se(n,i)):ze[e].add(c))}function Je(){if(!de){Yt(!0);for(const e in z)We(e,t=>{const n=t.data,s=t.provider,o=n.prefix,r=E(s,o);if(!ce(r,n).length)return!1;const i=n.lastModified||-1;return r.lastModifiedCached=r.lastModifiedCached?Math.min(r.lastModifiedCached,i):i,!0})}}function Xt(e,t){const n=e.lastModifiedCached;if(n&&n>=t)return n===t;if(e.lastModifiedCached=t,n)for(const s in z)We(s,o=>{const r=o.data;return o.provider!==e.provider||r.prefix!==e.prefix||r.lastModified===t});return!0}function Zt(e,t){de||Je();function n(s){let o;if(!z[s]||!(o=Ge(s)))return;const r=ze[s];let i;if(r.size)r.delete(i=Array.from(r).shift());else if(i=re(o),i>=Kt||!se(o,i+1))return;const c={cached:Math.floor(Date.now()/qe),provider:e.provider,data:t};return fe(o,N+i.toString(),JSON.stringify(c))}t.lastModified&&!Xt(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),n("local")||n("session"))}function Te(){}function en(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,$t(e)}))}function tn(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:n,prefix:s}=e,o=e.iconsToLoad;delete e.iconsToLoad;let r;if(!o||!(r=ne(n)))return;r.prepare(n,s,o).forEach(c=>{Wt(n,c,a=>{if(typeof a!="object")c.icons.forEach(l=>{e.missing.add(l)});else try{const l=ce(e,a);if(!l.length)return;const u=e.pendingIcons;u&&l.forEach(p=>{u.delete(p)}),Zt(e,a)}catch(l){console.error(l)}en(e)})})}))}const nn=(e,t)=>{const n=Vt(e,!0,Be()),s=Ut(n);if(!s.pending.length){let a=!0;return t&&setTimeout(()=>{a&&t(s.loaded,s.missing,s.pending,Te)}),()=>{a=!1}}const o=Object.create(null),r=[];let i,c;return s.pending.forEach(a=>{const{provider:l,prefix:u}=a;if(u===c&&l===i)return;i=l,c=u,r.push(E(l,u));const p=o[l]||(o[l]=Object.create(null));p[u]||(p[u]=[])}),s.pending.forEach(a=>{const{provider:l,prefix:u,name:p}=a,m=E(l,u),v=m.pendingIcons||(m.pendingIcons=new Set);v.has(p)||(v.add(p),o[l][u].push(p))}),r.forEach(a=>{const{provider:l,prefix:u}=a;o[l][u].length&&tn(a,o[l][u])}),t?Qt(t,s,r):Te};function on(e,t){const n={...e};for(const s in t){const o=t[s],r=typeof o;s in Ue?(o===null||o&&(r==="string"||r==="number"))&&(n[s]=o):r===typeof n[s]&&(n[s]=s==="rotate"?o%4:o)}return n}const sn=/[\s,]+/;function rn(e,t){t.split(sn).forEach(n=>{switch(n.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function cn(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function s(o){for(;o<0;)o+=4;return o%4}if(n===""){const o=parseInt(e);return isNaN(o)?0:s(o)}else if(n!==e){let o=0;switch(n){case"%":o=25;break;case"deg":o=90}if(o){let r=parseFloat(e.slice(0,e.length-n.length));return isNaN(r)?0:(r=r/o,r%1===0?s(r):0)}}return t}function an(e,t){let n=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const s in t)n+=" "+s+'="'+t[s]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}function ln(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function un(e){return"data:image/svg+xml,"+ln(e)}function fn(e){return'url("'+un(e)+'")'}const ke={...$e,inline:!1},dn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},hn={display:"inline-block"},ie={backgroundColor:"currentColor"},Ke={backgroundColor:"transparent"},Re={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},Me={webkitMask:ie,mask:ie,background:Ke};for(const e in Me){const t=Me[e];for(const n in Re)t[e+n]=Re[n]}const H={};["horizontal","vertical"].forEach(e=>{const t=e.slice(0,1)+"Flip";H[e+"-flip"]=t,H[e.slice(0,1)+"-flip"]=t,H[e+"Flip"]=t});function Pe(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}const je=(e,t)=>{const n=on(ke,t),s={...dn},o=t.mode||"svg",r={},i=t.style,c=typeof i=="object"&&!(i instanceof Array)?i:{};for(let y in t){const f=t[y];if(f!==void 0)switch(y){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[y]=f===!0||f==="true"||f===1;break;case"flip":typeof f=="string"&&rn(n,f);break;case"color":r.color=f;break;case"rotate":typeof f=="string"?n[y]=cn(f):typeof f=="number"&&(n[y]=f);break;case"ariaHidden":case"aria-hidden":f!==!0&&f!=="true"&&delete s["aria-hidden"];break;default:{const T=H[y];T?(f===!0||f==="true"||f===1)&&(n[T]=!0):ke[y]===void 0&&(s[y]=f)}}}const a=kt(e,n),l=a.attributes;if(n.inline&&(r.verticalAlign="-0.125em"),o==="svg"){s.style={...r,...c},Object.assign(s,l);let y=0,f=t.id;return typeof f=="string"&&(f=f.replace(/-/g,"_")),s.innerHTML=jt(a.body,f?()=>f+"ID"+y++:"iconifyVue"),me("svg",s)}const{body:u,width:p,height:m}=e,v=o==="mask"||(o==="bg"?!1:u.indexOf("currentColor")!==-1),S=an(u,{...l,width:p+"",height:m+""});return s.style={...r,"--svg":fn(S),width:Pe(l.width),height:Pe(l.height),...hn,...v?ie:Ke,...c},me("span",s)};Be(!0);Et("",Bt);if(typeof document<"u"&&typeof window<"u"){Je();const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(s=>{try{(typeof s!="object"||s===null||s instanceof Array||typeof s.icons!="object"||typeof s.prefix!="string"||!bt(s))&&console.error(n)}catch{console.error(n)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let n in t){const s="IconifyProviders["+n+"] is invalid.";try{const o=t[n];if(typeof o!="object"||!o||o.resources===void 0)continue;Lt(n,o)||console.error(s)}catch{console.error(s)}}}}const pn={...q,body:""},yn=tt({inheritAttrs:!1,data(){return{_name:"",_loadingIcon:null,iconMounted:!1,counter:0}},mounted(){this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(e,t){if(typeof e=="object"&&e!==null&&typeof e.body=="string")return this._name="",this.abortLoading(),{data:e};let n;if(typeof e!="string"||(n=V(e,!1,!0))===null)return this.abortLoading(),null;const s=yt(n);if(!s)return(!this._loadingIcon||this._loadingIcon.name!==e)&&(this.abortLoading(),this._name="",s!==null&&(this._loadingIcon={name:e,abort:nn([n],()=>{this.counter++})})),null;this.abortLoading(),this._name!==e&&(this._name=e,t&&t(e));const o=["iconify"];return n.prefix!==""&&o.push("iconify--"+n.prefix),n.provider!==""&&o.push("iconify--"+n.provider),{data:s,classes:o}}},render(){this.counter;const e=this.$attrs,t=this.iconMounted||e.ssr?this.getIcon(e.icon,e.onLoad):null;if(!t)return je(pn,e);let n=e;return t.classes&&(n={...e,class:(typeof e.class=="string"?e.class+" ":"")+t.classes.join(" ")}),je({...q,...t.data},n)}});function wn(){const e=Ee(),t=C(e.currentUser);e.onAuthStateChanged(c=>{t.value=c});const n=Le(),s=ot(),o=new nt;return{user:t,signInWithGoogle:()=>{st(e,o).then(c=>{const a=X(n,"users"),l=Z(a,c.user.uid);at(l,{userName:c.user.displayName,userId:c.user.uid,userPhotoURL:c.user.photoURL,status:"online"}),s.push("/home")}).catch(c=>{console.log(c)})},firestore:n,auth:e,logout:async()=>{if(t.value){const c=Z(n,"users",t.value.uid);try{await Fe(c,{status:"offline"}),await rt(e),s.push("/")}catch(a){console.error("Error during logout: ",a)}}else s.push({path:"/",state:{errorMessage:"You must login first"}})},collection:X,query:Ae,where:ct,onSnapshot:Oe}}function bn(e){const t=Ee(),n=Le(),s=C(!1),o=C(!0),r=C(t.currentUser);t.onAuthStateChanged(d=>{r.value=d});const i=C([]),c=J(()=>i.value.filter(d=>d.title.toLowerCase().includes(e.searchQuery.toLowerCase()))),a=C({});let l=C(0);const u={1:"Poor",2:"Fair",3:"Good",4:"Very Good",5:"Excellent"},p=J(()=>u[l.value]||""),m=X(n,"recipe"),v=Ae(m,lt("createdAt","asc")),S=Oe(v,d=>{i.value=d.docs.map(h=>({id:h.id,...h.data()})).reverse(),o.value=!1}),y=d=>{const h=d.seconds,x=d.nanoseconds/1e6;return new Date(h*1e3+x)},f=d=>{const h=y(d),x=h.getFullYear().toString().slice(-2),P=h.toLocaleString("default",{month:"short"}),j=h.getUTCDate(),O=h.getHours()%12||12,G=("0"+h.getMinutes()).slice(-2),W=h.getHours()<12?"am":"pm";return`${j} ${P} ${x} (${O}:${G} ${W})`};let T=C(!1);const k=d=>{var x;a.value=d,console.log(a.value),T.value=Xe((x=r.value)==null?void 0:x.uid),document.getElementById("my_modal_4").showModal()},b=C([]),w=C([]),L=()=>{l.value=0,b.value=[],w.value=[],document.getElementById("my_modal_4").close()},g=d=>{if(console.log("instructions clicked",d),!b.value.includes(d))b.value.push(d);else{const h=b.value.indexOf(d);h!==-1&&b.value.splice(h,1)}console.log(b.value)},I=d=>{if(console.log("ingre clicked",d),!w.value.includes(d))w.value.push(d);else{const h=w.value.indexOf(d);h!==-1&&w.value.splice(h,1)}console.log(w.value)};let M=C("");const A=(d,h)=>{M.value=h,l.value=d},R=async(d,h,x)=>{try{s.value=!0;const P=Z(n,"recipe",d),j=await ut(P);if(j.exists()){const O=j.data(),G=O.totalRatings||0,W=O.ratingCount||0,he=G+h,pe=W+1,et=he/pe,ge=O.usersIdThatRate||[];ge.push(x),await Fe(P,{totalRatings:he,ratingCount:pe,averageRating:et,usersIdThatRate:ge})}}catch(P){console.error("Error updating ratings: ",P)}finally{s.value=!1}},Ye=async()=>{if(r.value){const d=l.value,h=M.value,x=r.value.uid;await R(h,d,x),L()}},Xe=d=>(a.value.usersIdThatRate||[]).includes(d),Ze=J(()=>{const d=[],h=a.value.averageRating||0,x=Math.floor(h),P=h%1!==0;for(let j=0;j<x;j++)d.push("full");for(P&&d.push("half");d.length<5;)d.push("empty");return d});return it(()=>{S()}),{sendingRatingLoading:s,recipe:i,formatHour:f,showRecipeAllModal:k,selectedAllRecipe:a,ratings:l,setRating:A,closeModal:L,ratingsInText:p,sendRatings:Ye,starArray:Ze,filteredRecipes:c,muteRateBnt:T,loading:o,clickInstructions:g,instructionsDisables:b,clickIngredients:I,ingredientsDisables:w}}const vn=(e,t)=>{const n=e.__vccOpts||e;for(const[s,o]of t)n[s]=o;return n};export{yn as I,vn as _,bn as g,wn as u};
