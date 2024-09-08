import{L as zc,M as _o,N as $c,_ as Gc,C as Qc,e as yo,F as Kc,O as Wt,g as Lt,i as Wc,f as Hc,h as Xc,S as Yc,j as Jc,P as Zc,Q as tl,l as ya,k as Nt,R as el,J as nl,T as rl,U as il,B as ri,z as sl}from"./index-DVbWvh0z.js";const rn=/^[a-z0-9]+(-[a-z0-9]+)*$/,hr=(n,t,e,r="")=>{const i=n.split(":");if(n.slice(0,1)==="@"){if(i.length<2||i.length>3)return null;r=i.shift().slice(1)}if(i.length>3||!i.length)return null;if(i.length>1){const c=i.pop(),h=i.pop(),f={provider:i.length>0?i[0]:r,prefix:h,name:c};return t&&!Hn(f)?null:f}const o=i[0],a=o.split("-");if(a.length>1){const c={provider:r,prefix:a.shift(),name:a.join("-")};return t&&!Hn(c)?null:c}if(e&&r===""){const c={provider:r,prefix:"",name:o};return t&&!Hn(c,e)?null:c}return null},Hn=(n,t)=>n?!!((n.provider===""||n.provider.match(rn))&&(t&&n.prefix===""||n.prefix.match(rn))&&n.name.match(rn)):!1,Ta=Object.freeze({left:0,top:0,width:16,height:16}),rr=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),fr=Object.freeze({...Ta,...rr}),li=Object.freeze({...fr,body:"",hidden:!1});function ol(n,t){const e={};!n.hFlip!=!t.hFlip&&(e.hFlip=!0),!n.vFlip!=!t.vFlip&&(e.vFlip=!0);const r=((n.rotate||0)+(t.rotate||0))%4;return r&&(e.rotate=r),e}function To(n,t){const e=ol(n,t);for(const r in li)r in rr?r in n&&!(r in e)&&(e[r]=rr[r]):r in t?e[r]=t[r]:r in n&&(e[r]=n[r]);return e}function al(n,t){const e=n.icons,r=n.aliases||Object.create(null),i=Object.create(null);function o(a){if(e[a])return i[a]=[];if(!(a in i)){i[a]=null;const c=r[a]&&r[a].parent,h=c&&o(c);h&&(i[a]=[c].concat(h))}return i[a]}return Object.keys(e).concat(Object.keys(r)).forEach(o),i}function ul(n,t,e){const r=n.icons,i=n.aliases||Object.create(null);let o={};function a(c){o=To(r[c]||i[c],o)}return a(t),e.forEach(a),To(n,o)}function Ea(n,t){const e=[];if(typeof n!="object"||typeof n.icons!="object")return e;n.not_found instanceof Array&&n.not_found.forEach(i=>{t(i,null),e.push(i)});const r=al(n);for(const i in r){const o=r[i];o&&(t(i,ul(n,i,o)),e.push(i))}return e}const cl={provider:"",aliases:{},not_found:{},...Ta};function ii(n,t){for(const e in t)if(e in n&&typeof n[e]!=typeof t[e])return!1;return!0}function va(n){if(typeof n!="object"||n===null)return null;const t=n;if(typeof t.prefix!="string"||!n.icons||typeof n.icons!="object"||!ii(n,cl))return null;const e=t.icons;for(const i in e){const o=e[i];if(!i.match(rn)||typeof o.body!="string"||!ii(o,li))return null}const r=t.aliases||Object.create(null);for(const i in r){const o=r[i],a=o.parent;if(!i.match(rn)||typeof a!="string"||!e[a]&&!r[a]||!ii(o,li))return null}return t}const Eo=Object.create(null);function ll(n,t){return{provider:n,prefix:t,icons:Object.create(null),missing:new Set}}function ce(n,t){const e=Eo[n]||(Eo[n]=Object.create(null));return e[t]||(e[t]=ll(n,t))}function xi(n,t){return va(t)?Ea(t,(e,r)=>{r?n.icons[e]=r:n.missing.add(e)}):[]}function hl(n,t,e){try{if(typeof e.body=="string")return n.icons[t]={...e},!0}catch{}return!1}let cn=!1;function Ia(n){return typeof n=="boolean"&&(cn=n),cn}function fl(n){const t=typeof n=="string"?hr(n,!0,cn):n;if(t){const e=ce(t.provider,t.prefix),r=t.name;return e.icons[r]||(e.missing.has(r)?null:void 0)}}function dl(n,t){const e=hr(n,!0,cn);if(!e)return!1;const r=ce(e.provider,e.prefix);return hl(r,e.name,t)}function pl(n,t){if(typeof n!="object")return!1;if(typeof t!="string"&&(t=n.provider||""),cn&&!t&&!n.prefix){let i=!1;return va(n)&&(n.prefix="",Ea(n,(o,a)=>{a&&dl(o,a)&&(i=!0)})),i}const e=n.prefix;if(!Hn({provider:t,prefix:e,name:"a"}))return!1;const r=ce(t,e);return!!xi(r,n)}const wa=Object.freeze({width:null,height:null}),Aa=Object.freeze({...wa,...rr}),gl=/(-?[0-9.]*[0-9]+[0-9.]*)/g,ml=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function vo(n,t,e){if(t===1)return n;if(e=e||100,typeof n=="number")return Math.ceil(n*t*e)/e;if(typeof n!="string")return n;const r=n.split(gl);if(r===null||!r.length)return n;const i=[];let o=r.shift(),a=ml.test(o);for(;;){if(a){const c=parseFloat(o);isNaN(c)?i.push(o):i.push(Math.ceil(c*t*e)/e)}else i.push(o);if(o=r.shift(),o===void 0)return i.join("");a=!a}}function _l(n,t="defs"){let e="";const r=n.indexOf("<"+t);for(;r>=0;){const i=n.indexOf(">",r),o=n.indexOf("</"+t);if(i===-1||o===-1)break;const a=n.indexOf(">",o);if(a===-1)break;e+=n.slice(i+1,o).trim(),n=n.slice(0,r).trim()+n.slice(a+1)}return{defs:e,content:n}}function yl(n,t){return n?"<defs>"+n+"</defs>"+t:t}function Tl(n,t,e){const r=_l(n);return yl(r.defs,t+r.content+e)}const El=n=>n==="unset"||n==="undefined"||n==="none";function vl(n,t){const e={...fr,...n},r={...Aa,...t},i={left:e.left,top:e.top,width:e.width,height:e.height};let o=e.body;[e,r].forEach(k=>{const P=[],B=k.hFlip,$=k.vFlip;let L=k.rotate;B?$?L+=2:(P.push("translate("+(i.width+i.left).toString()+" "+(0-i.top).toString()+")"),P.push("scale(-1 1)"),i.top=i.left=0):$&&(P.push("translate("+(0-i.left).toString()+" "+(i.height+i.top).toString()+")"),P.push("scale(1 -1)"),i.top=i.left=0);let z;switch(L<0&&(L-=Math.floor(L/4)*4),L=L%4,L){case 1:z=i.height/2+i.top,P.unshift("rotate(90 "+z.toString()+" "+z.toString()+")");break;case 2:P.unshift("rotate(180 "+(i.width/2+i.left).toString()+" "+(i.height/2+i.top).toString()+")");break;case 3:z=i.width/2+i.left,P.unshift("rotate(-90 "+z.toString()+" "+z.toString()+")");break}L%2===1&&(i.left!==i.top&&(z=i.left,i.left=i.top,i.top=z),i.width!==i.height&&(z=i.width,i.width=i.height,i.height=z)),P.length&&(o=Tl(o,'<g transform="'+P.join(" ")+'">',"</g>"))});const a=r.width,c=r.height,h=i.width,f=i.height;let p,v;a===null?(v=c===null?"1em":c==="auto"?f:c,p=vo(v,h/f)):(p=a==="auto"?h:a,v=c===null?vo(p,f/h):c==="auto"?f:c);const A={},S=(k,P)=>{El(P)||(A[k]=P.toString())};S("width",p),S("height",v);const D=[i.left,i.top,h,f];return A.viewBox=D.join(" "),{attributes:A,viewBox:D,body:o}}const Il=/\sid="(\S+)"/g,wl="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Al=0;function Rl(n,t=wl){const e=[];let r;for(;r=Il.exec(n);)e.push(r[1]);if(!e.length)return n;const i="suffix"+(Math.random()*16777216|Date.now()).toString(16);return e.forEach(o=>{const a=typeof t=="function"?t(o):t+(Al++).toString(),c=o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");n=n.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+a+i+"$3")}),n=n.replace(new RegExp(i,"g"),""),n}const hi=Object.create(null);function Pl(n,t){hi[n]=t}function fi(n){return hi[n]||hi[""]}function Mi(n){let t;if(typeof n.resources=="string")t=[n.resources];else if(t=n.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:n.path||"/",maxURL:n.maxURL||500,rotate:n.rotate||750,timeout:n.timeout||5e3,random:n.random===!0,index:n.index||0,dataAfterTimeout:n.dataAfterTimeout!==!1}}const Oi=Object.create(null),Ye=["https://api.simplesvg.com","https://api.unisvg.com"],Xn=[];for(;Ye.length>0;)Ye.length===1||Math.random()>.5?Xn.push(Ye.shift()):Xn.push(Ye.pop());Oi[""]=Mi({resources:["https://api.iconify.design"].concat(Xn)});function Sl(n,t){const e=Mi(t);return e===null?!1:(Oi[n]=e,!0)}function Li(n){return Oi[n]}const Vl=()=>{let n;try{if(n=fetch,typeof n=="function")return n}catch{}};let Io=Vl();function Cl(n,t){const e=Li(n);if(!e)return 0;let r;if(!e.maxURL)r=0;else{let i=0;e.resources.forEach(a=>{i=Math.max(i,a.length)});const o=t+".json?icons=";r=e.maxURL-i-e.path.length-o.length}return r}function bl(n){return n===404}const Dl=(n,t,e)=>{const r=[],i=Cl(n,t),o="icons";let a={type:o,provider:n,prefix:t,icons:[]},c=0;return e.forEach((h,f)=>{c+=h.length+1,c>=i&&f>0&&(r.push(a),a={type:o,provider:n,prefix:t,icons:[]},c=h.length),a.icons.push(h)}),r.push(a),r};function kl(n){if(typeof n=="string"){const t=Li(n);if(t)return t.path}return"/"}const Nl=(n,t,e)=>{if(!Io){e("abort",424);return}let r=kl(t.provider);switch(t.type){case"icons":{const o=t.prefix,c=t.icons.join(","),h=new URLSearchParams({icons:c});r+=o+".json?"+h.toString();break}case"custom":{const o=t.uri;r+=o.slice(0,1)==="/"?o.slice(1):o;break}default:e("abort",400);return}let i=503;Io(n+r).then(o=>{const a=o.status;if(a!==200){setTimeout(()=>{e(bl(a)?"abort":"next",a)});return}return i=501,o.json()}).then(o=>{if(typeof o!="object"||o===null){setTimeout(()=>{o===404?e("abort",o):e("next",i)});return}setTimeout(()=>{e("success",o)})}).catch(()=>{e("next",i)})},xl={prepare:Dl,send:Nl};function Ml(n){const t={loaded:[],missing:[],pending:[]},e=Object.create(null);n.sort((i,o)=>i.provider!==o.provider?i.provider.localeCompare(o.provider):i.prefix!==o.prefix?i.prefix.localeCompare(o.prefix):i.name.localeCompare(o.name));let r={provider:"",prefix:"",name:""};return n.forEach(i=>{if(r.name===i.name&&r.prefix===i.prefix&&r.provider===i.provider)return;r=i;const o=i.provider,a=i.prefix,c=i.name,h=e[o]||(e[o]=Object.create(null)),f=h[a]||(h[a]=ce(o,a));let p;c in f.icons?p=t.loaded:a===""||f.missing.has(c)?p=t.missing:p=t.pending;const v={provider:o,prefix:a,name:c};p.push(v)}),t}function Ra(n,t){n.forEach(e=>{const r=e.loaderCallbacks;r&&(e.loaderCallbacks=r.filter(i=>i.id!==t))})}function Ol(n){n.pendingCallbacksFlag||(n.pendingCallbacksFlag=!0,setTimeout(()=>{n.pendingCallbacksFlag=!1;const t=n.loaderCallbacks?n.loaderCallbacks.slice(0):[];if(!t.length)return;let e=!1;const r=n.provider,i=n.prefix;t.forEach(o=>{const a=o.icons,c=a.pending.length;a.pending=a.pending.filter(h=>{if(h.prefix!==i)return!0;const f=h.name;if(n.icons[f])a.loaded.push({provider:r,prefix:i,name:f});else if(n.missing.has(f))a.missing.push({provider:r,prefix:i,name:f});else return e=!0,!0;return!1}),a.pending.length!==c&&(e||Ra([n],o.id),o.callback(a.loaded.slice(0),a.missing.slice(0),a.pending.slice(0),o.abort))})}))}let Ll=0;function Fl(n,t,e){const r=Ll++,i=Ra.bind(null,e,r);if(!t.pending.length)return i;const o={id:r,icons:t,callback:n,abort:i};return e.forEach(a=>{(a.loaderCallbacks||(a.loaderCallbacks=[])).push(o)}),i}function Ul(n,t=!0,e=!1){const r=[];return n.forEach(i=>{const o=typeof i=="string"?hr(i,t,e):i;o&&r.push(o)}),r}var ql={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function jl(n,t,e,r){const i=n.resources.length,o=n.random?Math.floor(Math.random()*i):n.index;let a;if(n.random){let U=n.resources.slice(0);for(a=[];U.length>1;){const T=Math.floor(Math.random()*U.length);a.push(U[T]),U=U.slice(0,T).concat(U.slice(T+1))}a=a.concat(U)}else a=n.resources.slice(o).concat(n.resources.slice(0,o));const c=Date.now();let h="pending",f=0,p,v=null,A=[],S=[];typeof r=="function"&&S.push(r);function D(){v&&(clearTimeout(v),v=null)}function k(){h==="pending"&&(h="aborted"),D(),A.forEach(U=>{U.status==="pending"&&(U.status="aborted")}),A=[]}function P(U,T){T&&(S=[]),typeof U=="function"&&S.push(U)}function B(){return{startTime:c,payload:t,status:h,queriesSent:f,queriesPending:A.length,subscribe:P,abort:k}}function $(){h="failed",S.forEach(U=>{U(void 0,p)})}function L(){A.forEach(U=>{U.status==="pending"&&(U.status="aborted")}),A=[]}function z(U,T,g){const m=T!=="success";switch(A=A.filter(y=>y!==U),h){case"pending":break;case"failed":if(m||!n.dataAfterTimeout)return;break;default:return}if(T==="abort"){p=g,$();return}if(m){p=g,A.length||(a.length?ft():$());return}if(D(),L(),!n.random){const y=n.resources.indexOf(U.resource);y!==-1&&y!==n.index&&(n.index=y)}h="completed",S.forEach(y=>{y(g)})}function ft(){if(h!=="pending")return;D();const U=a.shift();if(U===void 0){if(A.length){v=setTimeout(()=>{D(),h==="pending"&&(L(),$())},n.timeout);return}$();return}const T={status:"pending",resource:U,callback:(g,m)=>{z(T,g,m)}};A.push(T),f++,v=setTimeout(ft,n.rotate),e(U,t,T.callback)}return setTimeout(ft),B}function Pa(n){const t={...ql,...n};let e=[];function r(){e=e.filter(c=>c().status==="pending")}function i(c,h,f){const p=jl(t,c,h,(v,A)=>{r(),f&&f(v,A)});return e.push(p),p}function o(c){return e.find(h=>c(h))||null}return{query:i,find:o,setIndex:c=>{t.index=c},getIndex:()=>t.index,cleanup:r}}function wo(){}const si=Object.create(null);function Bl(n){if(!si[n]){const t=Li(n);if(!t)return;const e=Pa(t),r={config:t,redundancy:e};si[n]=r}return si[n]}function zl(n,t,e){let r,i;if(typeof n=="string"){const o=fi(n);if(!o)return e(void 0,424),wo;i=o.send;const a=Bl(n);a&&(r=a.redundancy)}else{const o=Mi(n);if(o){r=Pa(o);const a=n.resources?n.resources[0]:"",c=fi(a);c&&(i=c.send)}}return!r||!i?(e(void 0,424),wo):r.query(t,i,e)().abort}const Ao="iconify2",ln="iconify",Sa=ln+"-count",Ro=ln+"-version",Va=36e5,$l=168,Gl=50;function di(n,t){try{return n.getItem(t)}catch{}}function Fi(n,t,e){try{return n.setItem(t,e),!0}catch{}}function Po(n,t){try{n.removeItem(t)}catch{}}function pi(n,t){return Fi(n,Sa,t.toString())}function gi(n){return parseInt(di(n,Sa))||0}const dr={local:!0,session:!0},Ca={local:new Set,session:new Set};let Ui=!1;function Ql(n){Ui=n}let $n=typeof window>"u"?{}:window;function ba(n){const t=n+"Storage";try{if($n&&$n[t]&&typeof $n[t].length=="number")return $n[t]}catch{}dr[n]=!1}function Da(n,t){const e=ba(n);if(!e)return;const r=di(e,Ro);if(r!==Ao){if(r){const c=gi(e);for(let h=0;h<c;h++)Po(e,ln+h.toString())}Fi(e,Ro,Ao),pi(e,0);return}const i=Math.floor(Date.now()/Va)-$l,o=c=>{const h=ln+c.toString(),f=di(e,h);if(typeof f=="string"){try{const p=JSON.parse(f);if(typeof p=="object"&&typeof p.cached=="number"&&p.cached>i&&typeof p.provider=="string"&&typeof p.data=="object"&&typeof p.data.prefix=="string"&&t(p,c))return!0}catch{}Po(e,h)}};let a=gi(e);for(let c=a-1;c>=0;c--)o(c)||(c===a-1?(a--,pi(e,a)):Ca[n].add(c))}function ka(){if(!Ui){Ql(!0);for(const n in dr)Da(n,t=>{const e=t.data,r=t.provider,i=e.prefix,o=ce(r,i);if(!xi(o,e).length)return!1;const a=e.lastModified||-1;return o.lastModifiedCached=o.lastModifiedCached?Math.min(o.lastModifiedCached,a):a,!0})}}function Kl(n,t){const e=n.lastModifiedCached;if(e&&e>=t)return e===t;if(n.lastModifiedCached=t,e)for(const r in dr)Da(r,i=>{const o=i.data;return i.provider!==n.provider||o.prefix!==n.prefix||o.lastModified===t});return!0}function Wl(n,t){Ui||ka();function e(r){let i;if(!dr[r]||!(i=ba(r)))return;const o=Ca[r];let a;if(o.size)o.delete(a=Array.from(o).shift());else if(a=gi(i),a>=Gl||!pi(i,a+1))return;const c={cached:Math.floor(Date.now()/Va),provider:n.provider,data:t};return Fi(i,ln+a.toString(),JSON.stringify(c))}t.lastModified&&!Kl(n,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),e("local")||e("session"))}function So(){}function Hl(n){n.iconsLoaderFlag||(n.iconsLoaderFlag=!0,setTimeout(()=>{n.iconsLoaderFlag=!1,Ol(n)}))}function Xl(n,t){n.iconsToLoad?n.iconsToLoad=n.iconsToLoad.concat(t).sort():n.iconsToLoad=t,n.iconsQueueFlag||(n.iconsQueueFlag=!0,setTimeout(()=>{n.iconsQueueFlag=!1;const{provider:e,prefix:r}=n,i=n.iconsToLoad;delete n.iconsToLoad;let o;if(!i||!(o=fi(e)))return;o.prepare(e,r,i).forEach(c=>{zl(e,c,h=>{if(typeof h!="object")c.icons.forEach(f=>{n.missing.add(f)});else try{const f=xi(n,h);if(!f.length)return;const p=n.pendingIcons;p&&f.forEach(v=>{p.delete(v)}),Wl(n,h)}catch(f){console.error(f)}Hl(n)})})}))}const Yl=(n,t)=>{const e=Ul(n,!0,Ia()),r=Ml(e);if(!r.pending.length){let h=!0;return t&&setTimeout(()=>{h&&t(r.loaded,r.missing,r.pending,So)}),()=>{h=!1}}const i=Object.create(null),o=[];let a,c;return r.pending.forEach(h=>{const{provider:f,prefix:p}=h;if(p===c&&f===a)return;a=f,c=p,o.push(ce(f,p));const v=i[f]||(i[f]=Object.create(null));v[p]||(v[p]=[])}),r.pending.forEach(h=>{const{provider:f,prefix:p,name:v}=h,A=ce(f,p),S=A.pendingIcons||(A.pendingIcons=new Set);S.has(v)||(S.add(v),i[f][p].push(v))}),o.forEach(h=>{const{provider:f,prefix:p}=h;i[f][p].length&&Xl(h,i[f][p])}),t?Fl(t,r,o):So};function Jl(n,t){const e={...n};for(const r in t){const i=t[r],o=typeof i;r in wa?(i===null||i&&(o==="string"||o==="number"))&&(e[r]=i):o===typeof e[r]&&(e[r]=r==="rotate"?i%4:i)}return e}const Zl=/[\s,]+/;function th(n,t){t.split(Zl).forEach(e=>{switch(e.trim()){case"horizontal":n.hFlip=!0;break;case"vertical":n.vFlip=!0;break}})}function eh(n,t=0){const e=n.replace(/^-?[0-9.]*/,"");function r(i){for(;i<0;)i+=4;return i%4}if(e===""){const i=parseInt(n);return isNaN(i)?0:r(i)}else if(e!==n){let i=0;switch(e){case"%":i=25;break;case"deg":i=90}if(i){let o=parseFloat(n.slice(0,n.length-e.length));return isNaN(o)?0:(o=o/i,o%1===0?r(o):0)}}return t}function nh(n,t){let e=n.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in t)e+=" "+r+'="'+t[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+e+">"+n+"</svg>"}function rh(n){return n.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function ih(n){return"data:image/svg+xml,"+rh(n)}function sh(n){return'url("'+ih(n)+'")'}const Vo={...Aa,inline:!1},oh={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},ah={display:"inline-block"},mi={backgroundColor:"currentColor"},Na={backgroundColor:"transparent"},Co={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},bo={webkitMask:mi,mask:mi,background:Na};for(const n in bo){const t=bo[n];for(const e in Co)t[n+e]=Co[e]}const Yn={};["horizontal","vertical"].forEach(n=>{const t=n.slice(0,1)+"Flip";Yn[n+"-flip"]=t,Yn[n.slice(0,1)+"-flip"]=t,Yn[n+"Flip"]=t});function Do(n){return n+(n.match(/^[-0-9.]+$/)?"px":"")}const ko=(n,t)=>{const e=Jl(Vo,t),r={...oh},i=t.mode||"svg",o={},a=t.style,c=typeof a=="object"&&!(a instanceof Array)?a:{};for(let k in t){const P=t[k];if(P!==void 0)switch(k){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":e[k]=P===!0||P==="true"||P===1;break;case"flip":typeof P=="string"&&th(e,P);break;case"color":o.color=P;break;case"rotate":typeof P=="string"?e[k]=eh(P):typeof P=="number"&&(e[k]=P);break;case"ariaHidden":case"aria-hidden":P!==!0&&P!=="true"&&delete r["aria-hidden"];break;default:{const B=Yn[k];B?(P===!0||P==="true"||P===1)&&(e[B]=!0):Vo[k]===void 0&&(r[k]=P)}}}const h=vl(n,e),f=h.attributes;if(e.inline&&(o.verticalAlign="-0.125em"),i==="svg"){r.style={...o,...c},Object.assign(r,f);let k=0,P=t.id;return typeof P=="string"&&(P=P.replace(/-/g,"_")),r.innerHTML=Rl(h.body,P?()=>P+"ID"+k++:"iconifyVue"),_o("svg",r)}const{body:p,width:v,height:A}=n,S=i==="mask"||(i==="bg"?!1:p.indexOf("currentColor")!==-1),D=nh(p,{...f,width:v+"",height:A+""});return r.style={...o,"--svg":sh(D),width:Do(f.width),height:Do(f.height),...ah,...S?mi:Na,...c},_o("span",r)};Ia(!0);Pl("",xl);if(typeof document<"u"&&typeof window<"u"){ka();const n=window;if(n.IconifyPreload!==void 0){const t=n.IconifyPreload,e="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!pl(r))&&console.error(e)}catch{console.error(e)}})}if(n.IconifyProviders!==void 0){const t=n.IconifyProviders;if(typeof t=="object"&&t!==null)for(let e in t){const r="IconifyProviders["+e+"] is invalid.";try{const i=t[e];if(typeof i!="object"||!i||i.resources===void 0)continue;Sl(e,i)||console.error(r)}catch{console.error(r)}}}}const uh={...fr,body:""},fp=zc({inheritAttrs:!1,data(){return{_name:"",_loadingIcon:null,iconMounted:!1,counter:0}},mounted(){this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(n,t){if(typeof n=="object"&&n!==null&&typeof n.body=="string")return this._name="",this.abortLoading(),{data:n};let e;if(typeof n!="string"||(e=hr(n,!1,!0))===null)return this.abortLoading(),null;const r=fl(e);if(!r)return(!this._loadingIcon||this._loadingIcon.name!==n)&&(this.abortLoading(),this._name="",r!==null&&(this._loadingIcon={name:n,abort:Yl([e],()=>{this.counter++})})),null;this.abortLoading(),this._name!==n&&(this._name=n,t&&t(n));const i=["iconify"];return e.prefix!==""&&i.push("iconify--"+e.prefix),e.provider!==""&&i.push("iconify--"+e.provider),{data:r,classes:i}}},render(){this.counter;const n=this.$attrs,t=this.iconMounted||n.ssr?this.getIcon(n.icon,n.onLoad):null;if(!t)return ko(uh,n);let e=n;return t.classes&&(e={...n,class:(typeof n.class=="string"?n.class+" ":"")+t.classes.join(" ")}),ko({...fr,...t.data},e)}});var No=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ue,xa;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,g){function m(){}m.prototype=g.prototype,T.D=g.prototype,T.prototype=new m,T.prototype.constructor=T,T.C=function(y,E,w){for(var _=Array(arguments.length-2),O=2;O<arguments.length;O++)_[O-2]=arguments[O];return g.prototype[E].apply(y,_)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,g,m){m||(m=0);var y=Array(16);if(typeof g=="string")for(var E=0;16>E;++E)y[E]=g.charCodeAt(m++)|g.charCodeAt(m++)<<8|g.charCodeAt(m++)<<16|g.charCodeAt(m++)<<24;else for(E=0;16>E;++E)y[E]=g[m++]|g[m++]<<8|g[m++]<<16|g[m++]<<24;g=T.g[0],m=T.g[1],E=T.g[2];var w=T.g[3],_=g+(w^m&(E^w))+y[0]+3614090360&4294967295;g=m+(_<<7&4294967295|_>>>25),_=w+(E^g&(m^E))+y[1]+3905402710&4294967295,w=g+(_<<12&4294967295|_>>>20),_=E+(m^w&(g^m))+y[2]+606105819&4294967295,E=w+(_<<17&4294967295|_>>>15),_=m+(g^E&(w^g))+y[3]+3250441966&4294967295,m=E+(_<<22&4294967295|_>>>10),_=g+(w^m&(E^w))+y[4]+4118548399&4294967295,g=m+(_<<7&4294967295|_>>>25),_=w+(E^g&(m^E))+y[5]+1200080426&4294967295,w=g+(_<<12&4294967295|_>>>20),_=E+(m^w&(g^m))+y[6]+2821735955&4294967295,E=w+(_<<17&4294967295|_>>>15),_=m+(g^E&(w^g))+y[7]+4249261313&4294967295,m=E+(_<<22&4294967295|_>>>10),_=g+(w^m&(E^w))+y[8]+1770035416&4294967295,g=m+(_<<7&4294967295|_>>>25),_=w+(E^g&(m^E))+y[9]+2336552879&4294967295,w=g+(_<<12&4294967295|_>>>20),_=E+(m^w&(g^m))+y[10]+4294925233&4294967295,E=w+(_<<17&4294967295|_>>>15),_=m+(g^E&(w^g))+y[11]+2304563134&4294967295,m=E+(_<<22&4294967295|_>>>10),_=g+(w^m&(E^w))+y[12]+1804603682&4294967295,g=m+(_<<7&4294967295|_>>>25),_=w+(E^g&(m^E))+y[13]+4254626195&4294967295,w=g+(_<<12&4294967295|_>>>20),_=E+(m^w&(g^m))+y[14]+2792965006&4294967295,E=w+(_<<17&4294967295|_>>>15),_=m+(g^E&(w^g))+y[15]+1236535329&4294967295,m=E+(_<<22&4294967295|_>>>10),_=g+(E^w&(m^E))+y[1]+4129170786&4294967295,g=m+(_<<5&4294967295|_>>>27),_=w+(m^E&(g^m))+y[6]+3225465664&4294967295,w=g+(_<<9&4294967295|_>>>23),_=E+(g^m&(w^g))+y[11]+643717713&4294967295,E=w+(_<<14&4294967295|_>>>18),_=m+(w^g&(E^w))+y[0]+3921069994&4294967295,m=E+(_<<20&4294967295|_>>>12),_=g+(E^w&(m^E))+y[5]+3593408605&4294967295,g=m+(_<<5&4294967295|_>>>27),_=w+(m^E&(g^m))+y[10]+38016083&4294967295,w=g+(_<<9&4294967295|_>>>23),_=E+(g^m&(w^g))+y[15]+3634488961&4294967295,E=w+(_<<14&4294967295|_>>>18),_=m+(w^g&(E^w))+y[4]+3889429448&4294967295,m=E+(_<<20&4294967295|_>>>12),_=g+(E^w&(m^E))+y[9]+568446438&4294967295,g=m+(_<<5&4294967295|_>>>27),_=w+(m^E&(g^m))+y[14]+3275163606&4294967295,w=g+(_<<9&4294967295|_>>>23),_=E+(g^m&(w^g))+y[3]+4107603335&4294967295,E=w+(_<<14&4294967295|_>>>18),_=m+(w^g&(E^w))+y[8]+1163531501&4294967295,m=E+(_<<20&4294967295|_>>>12),_=g+(E^w&(m^E))+y[13]+2850285829&4294967295,g=m+(_<<5&4294967295|_>>>27),_=w+(m^E&(g^m))+y[2]+4243563512&4294967295,w=g+(_<<9&4294967295|_>>>23),_=E+(g^m&(w^g))+y[7]+1735328473&4294967295,E=w+(_<<14&4294967295|_>>>18),_=m+(w^g&(E^w))+y[12]+2368359562&4294967295,m=E+(_<<20&4294967295|_>>>12),_=g+(m^E^w)+y[5]+4294588738&4294967295,g=m+(_<<4&4294967295|_>>>28),_=w+(g^m^E)+y[8]+2272392833&4294967295,w=g+(_<<11&4294967295|_>>>21),_=E+(w^g^m)+y[11]+1839030562&4294967295,E=w+(_<<16&4294967295|_>>>16),_=m+(E^w^g)+y[14]+4259657740&4294967295,m=E+(_<<23&4294967295|_>>>9),_=g+(m^E^w)+y[1]+2763975236&4294967295,g=m+(_<<4&4294967295|_>>>28),_=w+(g^m^E)+y[4]+1272893353&4294967295,w=g+(_<<11&4294967295|_>>>21),_=E+(w^g^m)+y[7]+4139469664&4294967295,E=w+(_<<16&4294967295|_>>>16),_=m+(E^w^g)+y[10]+3200236656&4294967295,m=E+(_<<23&4294967295|_>>>9),_=g+(m^E^w)+y[13]+681279174&4294967295,g=m+(_<<4&4294967295|_>>>28),_=w+(g^m^E)+y[0]+3936430074&4294967295,w=g+(_<<11&4294967295|_>>>21),_=E+(w^g^m)+y[3]+3572445317&4294967295,E=w+(_<<16&4294967295|_>>>16),_=m+(E^w^g)+y[6]+76029189&4294967295,m=E+(_<<23&4294967295|_>>>9),_=g+(m^E^w)+y[9]+3654602809&4294967295,g=m+(_<<4&4294967295|_>>>28),_=w+(g^m^E)+y[12]+3873151461&4294967295,w=g+(_<<11&4294967295|_>>>21),_=E+(w^g^m)+y[15]+530742520&4294967295,E=w+(_<<16&4294967295|_>>>16),_=m+(E^w^g)+y[2]+3299628645&4294967295,m=E+(_<<23&4294967295|_>>>9),_=g+(E^(m|~w))+y[0]+4096336452&4294967295,g=m+(_<<6&4294967295|_>>>26),_=w+(m^(g|~E))+y[7]+1126891415&4294967295,w=g+(_<<10&4294967295|_>>>22),_=E+(g^(w|~m))+y[14]+2878612391&4294967295,E=w+(_<<15&4294967295|_>>>17),_=m+(w^(E|~g))+y[5]+4237533241&4294967295,m=E+(_<<21&4294967295|_>>>11),_=g+(E^(m|~w))+y[12]+1700485571&4294967295,g=m+(_<<6&4294967295|_>>>26),_=w+(m^(g|~E))+y[3]+2399980690&4294967295,w=g+(_<<10&4294967295|_>>>22),_=E+(g^(w|~m))+y[10]+4293915773&4294967295,E=w+(_<<15&4294967295|_>>>17),_=m+(w^(E|~g))+y[1]+2240044497&4294967295,m=E+(_<<21&4294967295|_>>>11),_=g+(E^(m|~w))+y[8]+1873313359&4294967295,g=m+(_<<6&4294967295|_>>>26),_=w+(m^(g|~E))+y[15]+4264355552&4294967295,w=g+(_<<10&4294967295|_>>>22),_=E+(g^(w|~m))+y[6]+2734768916&4294967295,E=w+(_<<15&4294967295|_>>>17),_=m+(w^(E|~g))+y[13]+1309151649&4294967295,m=E+(_<<21&4294967295|_>>>11),_=g+(E^(m|~w))+y[4]+4149444226&4294967295,g=m+(_<<6&4294967295|_>>>26),_=w+(m^(g|~E))+y[11]+3174756917&4294967295,w=g+(_<<10&4294967295|_>>>22),_=E+(g^(w|~m))+y[2]+718787259&4294967295,E=w+(_<<15&4294967295|_>>>17),_=m+(w^(E|~g))+y[9]+3951481745&4294967295,T.g[0]=T.g[0]+g&4294967295,T.g[1]=T.g[1]+(E+(_<<21&4294967295|_>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+w&4294967295}r.prototype.u=function(T,g){g===void 0&&(g=T.length);for(var m=g-this.blockSize,y=this.B,E=this.h,w=0;w<g;){if(E==0)for(;w<=m;)i(this,T,w),w+=this.blockSize;if(typeof T=="string"){for(;w<g;)if(y[E++]=T.charCodeAt(w++),E==this.blockSize){i(this,y),E=0;break}}else for(;w<g;)if(y[E++]=T[w++],E==this.blockSize){i(this,y),E=0;break}}this.h=E,this.o+=g},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var g=1;g<T.length-8;++g)T[g]=0;var m=8*this.o;for(g=T.length-8;g<T.length;++g)T[g]=m&255,m/=256;for(this.u(T),T=Array(16),g=m=0;4>g;++g)for(var y=0;32>y;y+=8)T[m++]=this.g[g]>>>y&255;return T};function o(T,g){var m=c;return Object.prototype.hasOwnProperty.call(m,T)?m[T]:m[T]=g(T)}function a(T,g){this.h=g;for(var m=[],y=!0,E=T.length-1;0<=E;E--){var w=T[E]|0;y&&w==g||(m[E]=w,y=!1)}this.g=m}var c={};function h(T){return-128<=T&&128>T?o(T,function(g){return new a([g|0],0>g?-1:0)}):new a([T|0],0>T?-1:0)}function f(T){if(isNaN(T)||!isFinite(T))return v;if(0>T)return P(f(-T));for(var g=[],m=1,y=0;T>=m;y++)g[y]=T/m|0,m*=4294967296;return new a(g,0)}function p(T,g){if(T.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(T.charAt(0)=="-")return P(p(T.substring(1),g));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=f(Math.pow(g,8)),y=v,E=0;E<T.length;E+=8){var w=Math.min(8,T.length-E),_=parseInt(T.substring(E,E+w),g);8>w?(w=f(Math.pow(g,w)),y=y.j(w).add(f(_))):(y=y.j(m),y=y.add(f(_)))}return y}var v=h(0),A=h(1),S=h(16777216);n=a.prototype,n.m=function(){if(k(this))return-P(this).m();for(var T=0,g=1,m=0;m<this.g.length;m++){var y=this.i(m);T+=(0<=y?y:4294967296+y)*g,g*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(D(this))return"0";if(k(this))return"-"+P(this).toString(T);for(var g=f(Math.pow(T,6)),m=this,y="";;){var E=z(m,g).g;m=B(m,E.j(g));var w=((0<m.g.length?m.g[0]:m.h)>>>0).toString(T);if(m=E,D(m))return w+y;for(;6>w.length;)w="0"+w;y=w+y}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function D(T){if(T.h!=0)return!1;for(var g=0;g<T.g.length;g++)if(T.g[g]!=0)return!1;return!0}function k(T){return T.h==-1}n.l=function(T){return T=B(this,T),k(T)?-1:D(T)?0:1};function P(T){for(var g=T.g.length,m=[],y=0;y<g;y++)m[y]=~T.g[y];return new a(m,~T.h).add(A)}n.abs=function(){return k(this)?P(this):this},n.add=function(T){for(var g=Math.max(this.g.length,T.g.length),m=[],y=0,E=0;E<=g;E++){var w=y+(this.i(E)&65535)+(T.i(E)&65535),_=(w>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);y=_>>>16,w&=65535,_&=65535,m[E]=_<<16|w}return new a(m,m[m.length-1]&-2147483648?-1:0)};function B(T,g){return T.add(P(g))}n.j=function(T){if(D(this)||D(T))return v;if(k(this))return k(T)?P(this).j(P(T)):P(P(this).j(T));if(k(T))return P(this.j(P(T)));if(0>this.l(S)&&0>T.l(S))return f(this.m()*T.m());for(var g=this.g.length+T.g.length,m=[],y=0;y<2*g;y++)m[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<T.g.length;E++){var w=this.i(y)>>>16,_=this.i(y)&65535,O=T.i(E)>>>16,Q=T.i(E)&65535;m[2*y+2*E]+=_*Q,$(m,2*y+2*E),m[2*y+2*E+1]+=w*Q,$(m,2*y+2*E+1),m[2*y+2*E+1]+=_*O,$(m,2*y+2*E+1),m[2*y+2*E+2]+=w*O,$(m,2*y+2*E+2)}for(y=0;y<g;y++)m[y]=m[2*y+1]<<16|m[2*y];for(y=g;y<2*g;y++)m[y]=0;return new a(m,0)};function $(T,g){for(;(T[g]&65535)!=T[g];)T[g+1]+=T[g]>>>16,T[g]&=65535,g++}function L(T,g){this.g=T,this.h=g}function z(T,g){if(D(g))throw Error("division by zero");if(D(T))return new L(v,v);if(k(T))return g=z(P(T),g),new L(P(g.g),P(g.h));if(k(g))return g=z(T,P(g)),new L(P(g.g),g.h);if(30<T.g.length){if(k(T)||k(g))throw Error("slowDivide_ only works with positive integers.");for(var m=A,y=g;0>=y.l(T);)m=ft(m),y=ft(y);var E=U(m,1),w=U(y,1);for(y=U(y,2),m=U(m,2);!D(y);){var _=w.add(y);0>=_.l(T)&&(E=E.add(m),w=_),y=U(y,1),m=U(m,1)}return g=B(T,E.j(g)),new L(E,g)}for(E=v;0<=T.l(g);){for(m=Math.max(1,Math.floor(T.m()/g.m())),y=Math.ceil(Math.log(m)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),w=f(m),_=w.j(g);k(_)||0<_.l(T);)m-=y,w=f(m),_=w.j(g);D(w)&&(w=A),E=E.add(w),T=B(T,_)}return new L(E,T)}n.A=function(T){return z(this,T).h},n.and=function(T){for(var g=Math.max(this.g.length,T.g.length),m=[],y=0;y<g;y++)m[y]=this.i(y)&T.i(y);return new a(m,this.h&T.h)},n.or=function(T){for(var g=Math.max(this.g.length,T.g.length),m=[],y=0;y<g;y++)m[y]=this.i(y)|T.i(y);return new a(m,this.h|T.h)},n.xor=function(T){for(var g=Math.max(this.g.length,T.g.length),m=[],y=0;y<g;y++)m[y]=this.i(y)^T.i(y);return new a(m,this.h^T.h)};function ft(T){for(var g=T.g.length+1,m=[],y=0;y<g;y++)m[y]=T.i(y)<<1|T.i(y-1)>>>31;return new a(m,T.h)}function U(T,g){var m=g>>5;g%=32;for(var y=T.g.length-m,E=[],w=0;w<y;w++)E[w]=0<g?T.i(w+m)>>>g|T.i(w+m+1)<<32-g:T.i(w+m);return new a(E,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,xa=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=p,ue=a}).apply(typeof No<"u"?No:typeof self<"u"?self:typeof window<"u"?window:{});var Gn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ma,Oa,Ze,La,Jn,_i,Fa,Ua,qa;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,u,l){return s==Array.prototype||s==Object.prototype||(s[u]=l.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Gn=="object"&&Gn];for(var u=0;u<s.length;++u){var l=s[u];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function i(s,u){if(u)t:{var l=r;s=s.split(".");for(var d=0;d<s.length-1;d++){var I=s[d];if(!(I in l))break t;l=l[I]}s=s[s.length-1],d=l[s],u=u(d),u!=d&&u!=null&&t(l,s,{configurable:!0,writable:!0,value:u})}}function o(s,u){s instanceof String&&(s+="");var l=0,d=!1,I={next:function(){if(!d&&l<s.length){var R=l++;return{value:u(R,s[R]),done:!1}}return d=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}i("Array.prototype.values",function(s){return s||function(){return o(this,function(u,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function h(s){var u=typeof s;return u=u!="object"?u:s?Array.isArray(s)?"array":u:"null",u=="array"||u=="object"&&typeof s.length=="number"}function f(s){var u=typeof s;return u=="object"&&s!=null||u=="function"}function p(s,u,l){return s.call.apply(s.bind,arguments)}function v(s,u,l){if(!s)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,d),s.apply(u,I)}}return function(){return s.apply(u,arguments)}}function A(s,u,l){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:v,A.apply(null,arguments)}function S(s,u){var l=Array.prototype.slice.call(arguments,1);return function(){var d=l.slice();return d.push.apply(d,arguments),s.apply(this,d)}}function D(s,u){function l(){}l.prototype=u.prototype,s.aa=u.prototype,s.prototype=new l,s.prototype.constructor=s,s.Qb=function(d,I,R){for(var b=Array(arguments.length-2),X=2;X<arguments.length;X++)b[X-2]=arguments[X];return u.prototype[I].apply(d,b)}}function k(s){const u=s.length;if(0<u){const l=Array(u);for(let d=0;d<u;d++)l[d]=s[d];return l}return[]}function P(s,u){for(let l=1;l<arguments.length;l++){const d=arguments[l];if(h(d)){const I=s.length||0,R=d.length||0;s.length=I+R;for(let b=0;b<R;b++)s[I+b]=d[b]}else s.push(d)}}class B{constructor(u,l){this.i=u,this.j=l,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function $(s){return/^[\s\xa0]*$/.test(s)}function L(){var s=c.navigator;return s&&(s=s.userAgent)?s:""}function z(s){return z[" "](s),s}z[" "]=function(){};var ft=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function U(s,u,l){for(const d in s)u.call(l,s[d],d,s)}function T(s,u){for(const l in s)u.call(void 0,s[l],l,s)}function g(s){const u={};for(const l in s)u[l]=s[l];return u}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,u){let l,d;for(let I=1;I<arguments.length;I++){d=arguments[I];for(l in d)s[l]=d[l];for(let R=0;R<m.length;R++)l=m[R],Object.prototype.hasOwnProperty.call(d,l)&&(s[l]=d[l])}}function E(s){var u=1;s=s.split(":");const l=[];for(;0<u&&s.length;)l.push(s.shift()),u--;return s.length&&l.push(s.join(":")),l}function w(s){c.setTimeout(()=>{throw s},0)}function _(){var s=Ut;let u=null;return s.g&&(u=s.g,s.g=s.g.next,s.g||(s.h=null),u.next=null),u}class O{constructor(){this.h=this.g=null}add(u,l){const d=Q.get();d.set(u,l),this.h?this.h.next=d:this.g=d,this.h=d}}var Q=new B(()=>new wt,s=>s.reset());class wt{constructor(){this.next=this.g=this.h=null}set(u,l){this.h=u,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let At,Pt=!1,Ut=new O,me=()=>{const s=c.Promise.resolve(void 0);At=()=>{s.then(Oe)}};var Oe=()=>{for(var s;s=_();){try{s.h.call(s.g)}catch(l){w(l)}var u=Q;u.j(s),100>u.h&&(u.h++,s.next=u.g,u.g=s)}Pt=!1};function Dt(){this.s=this.s,this.C=this.C}Dt.prototype.s=!1,Dt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Dt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function st(s,u){this.type=s,this.g=this.target=u,this.defaultPrevented=!1}st.prototype.h=function(){this.defaultPrevented=!0};var Nr=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var s=!1,u=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const l=()=>{};c.addEventListener("test",l,u),c.removeEventListener("test",l,u)}catch{}return s}();function $t(s,u){if(st.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var l=this.type=s.type,d=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=u,u=s.relatedTarget){if(ft){t:{try{z(u.nodeName);var I=!0;break t}catch{}I=!1}I||(u=null)}}else l=="mouseover"?u=s.fromElement:l=="mouseout"&&(u=s.toElement);this.relatedTarget=u,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:hc[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&$t.aa.h.call(this)}}D($t,st);var hc={2:"touch",3:"pen",4:"mouse"};$t.prototype.h=function(){$t.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Pn="closure_listenable_"+(1e6*Math.random()|0),fc=0;function dc(s,u,l,d,I){this.listener=s,this.proxy=null,this.src=u,this.type=l,this.capture=!!d,this.ha=I,this.key=++fc,this.da=this.fa=!1}function Sn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function Vn(s){this.src=s,this.g={},this.h=0}Vn.prototype.add=function(s,u,l,d,I){var R=s.toString();s=this.g[R],s||(s=this.g[R]=[],this.h++);var b=Mr(s,u,d,I);return-1<b?(u=s[b],l||(u.fa=!1)):(u=new dc(u,this.src,R,!!d,I),u.fa=l,s.push(u)),u};function xr(s,u){var l=u.type;if(l in s.g){var d=s.g[l],I=Array.prototype.indexOf.call(d,u,void 0),R;(R=0<=I)&&Array.prototype.splice.call(d,I,1),R&&(Sn(u),s.g[l].length==0&&(delete s.g[l],s.h--))}}function Mr(s,u,l,d){for(var I=0;I<s.length;++I){var R=s[I];if(!R.da&&R.listener==u&&R.capture==!!l&&R.ha==d)return I}return-1}var Or="closure_lm_"+(1e6*Math.random()|0),Lr={};function _s(s,u,l,d,I){if(Array.isArray(u)){for(var R=0;R<u.length;R++)_s(s,u[R],l,d,I);return null}return l=Es(l),s&&s[Pn]?s.K(u,l,f(d)?!!d.capture:!!d,I):pc(s,u,l,!1,d,I)}function pc(s,u,l,d,I,R){if(!u)throw Error("Invalid event type");var b=f(I)?!!I.capture:!!I,X=Ur(s);if(X||(s[Or]=X=new Vn(s)),l=X.add(u,l,d,b,R),l.proxy)return l;if(d=gc(),l.proxy=d,d.src=s,d.listener=l,s.addEventListener)Nr||(I=b),I===void 0&&(I=!1),s.addEventListener(u.toString(),d,I);else if(s.attachEvent)s.attachEvent(Ts(u.toString()),d);else if(s.addListener&&s.removeListener)s.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return l}function gc(){function s(l){return u.call(s.src,s.listener,l)}const u=mc;return s}function ys(s,u,l,d,I){if(Array.isArray(u))for(var R=0;R<u.length;R++)ys(s,u[R],l,d,I);else d=f(d)?!!d.capture:!!d,l=Es(l),s&&s[Pn]?(s=s.i,u=String(u).toString(),u in s.g&&(R=s.g[u],l=Mr(R,l,d,I),-1<l&&(Sn(R[l]),Array.prototype.splice.call(R,l,1),R.length==0&&(delete s.g[u],s.h--)))):s&&(s=Ur(s))&&(u=s.g[u.toString()],s=-1,u&&(s=Mr(u,l,d,I)),(l=-1<s?u[s]:null)&&Fr(l))}function Fr(s){if(typeof s!="number"&&s&&!s.da){var u=s.src;if(u&&u[Pn])xr(u.i,s);else{var l=s.type,d=s.proxy;u.removeEventListener?u.removeEventListener(l,d,s.capture):u.detachEvent?u.detachEvent(Ts(l),d):u.addListener&&u.removeListener&&u.removeListener(d),(l=Ur(u))?(xr(l,s),l.h==0&&(l.src=null,u[Or]=null)):Sn(s)}}}function Ts(s){return s in Lr?Lr[s]:Lr[s]="on"+s}function mc(s,u){if(s.da)s=!0;else{u=new $t(u,this);var l=s.listener,d=s.ha||s.src;s.fa&&Fr(s),s=l.call(d,u)}return s}function Ur(s){return s=s[Or],s instanceof Vn?s:null}var qr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Es(s){return typeof s=="function"?s:(s[qr]||(s[qr]=function(u){return s.handleEvent(u)}),s[qr])}function dt(){Dt.call(this),this.i=new Vn(this),this.M=this,this.F=null}D(dt,Dt),dt.prototype[Pn]=!0,dt.prototype.removeEventListener=function(s,u,l,d){ys(this,s,u,l,d)};function vt(s,u){var l,d=s.F;if(d)for(l=[];d;d=d.F)l.push(d);if(s=s.M,d=u.type||u,typeof u=="string")u=new st(u,s);else if(u instanceof st)u.target=u.target||s;else{var I=u;u=new st(d,s),y(u,I)}if(I=!0,l)for(var R=l.length-1;0<=R;R--){var b=u.g=l[R];I=Cn(b,d,!0,u)&&I}if(b=u.g=s,I=Cn(b,d,!0,u)&&I,I=Cn(b,d,!1,u)&&I,l)for(R=0;R<l.length;R++)b=u.g=l[R],I=Cn(b,d,!1,u)&&I}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var s=this.i,u;for(u in s.g){for(var l=s.g[u],d=0;d<l.length;d++)Sn(l[d]);delete s.g[u],s.h--}}this.F=null},dt.prototype.K=function(s,u,l,d){return this.i.add(String(s),u,!1,l,d)},dt.prototype.L=function(s,u,l,d){return this.i.add(String(s),u,!0,l,d)};function Cn(s,u,l,d){if(u=s.i.g[String(u)],!u)return!0;u=u.concat();for(var I=!0,R=0;R<u.length;++R){var b=u[R];if(b&&!b.da&&b.capture==l){var X=b.listener,ut=b.ha||b.src;b.fa&&xr(s.i,b),I=X.call(ut,d)!==!1&&I}}return I&&!d.defaultPrevented}function vs(s,u,l){if(typeof s=="function")l&&(s=A(s,l));else if(s&&typeof s.handleEvent=="function")s=A(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(s,u||0)}function Is(s){s.g=vs(()=>{s.g=null,s.i&&(s.i=!1,Is(s))},s.l);const u=s.h;s.h=null,s.m.apply(null,u)}class _c extends Dt{constructor(u,l){super(),this.m=u,this.l=l,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Is(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Le(s){Dt.call(this),this.h=s,this.g={}}D(Le,Dt);var ws=[];function As(s){U(s.g,function(u,l){this.g.hasOwnProperty(l)&&Fr(u)},s),s.g={}}Le.prototype.N=function(){Le.aa.N.call(this),As(this)},Le.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var jr=c.JSON.stringify,yc=c.JSON.parse,Tc=class{stringify(s){return c.JSON.stringify(s,void 0)}parse(s){return c.JSON.parse(s,void 0)}};function Br(){}Br.prototype.h=null;function Rs(s){return s.h||(s.h=s.i())}function Ps(){}var Fe={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function zr(){st.call(this,"d")}D(zr,st);function $r(){st.call(this,"c")}D($r,st);var re={},Ss=null;function bn(){return Ss=Ss||new dt}re.La="serverreachability";function Vs(s){st.call(this,re.La,s)}D(Vs,st);function Ue(s){const u=bn();vt(u,new Vs(u))}re.STAT_EVENT="statevent";function Cs(s,u){st.call(this,re.STAT_EVENT,s),this.stat=u}D(Cs,st);function It(s){const u=bn();vt(u,new Cs(u,s))}re.Ma="timingevent";function bs(s,u){st.call(this,re.Ma,s),this.size=u}D(bs,st);function qe(s,u){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){s()},u)}function je(){this.g=!0}je.prototype.xa=function(){this.g=!1};function Ec(s,u,l,d,I,R){s.info(function(){if(s.g)if(R)for(var b="",X=R.split("&"),ut=0;ut<X.length;ut++){var W=X[ut].split("=");if(1<W.length){var pt=W[0];W=W[1];var gt=pt.split("_");b=2<=gt.length&&gt[1]=="type"?b+(pt+"="+W+"&"):b+(pt+"=redacted&")}}else b=null;else b=R;return"XMLHTTP REQ ("+d+") [attempt "+I+"]: "+u+`
`+l+`
`+b})}function vc(s,u,l,d,I,R,b){s.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+I+"]: "+u+`
`+l+`
`+R+" "+b})}function _e(s,u,l,d){s.info(function(){return"XMLHTTP TEXT ("+u+"): "+wc(s,l)+(d?" "+d:"")})}function Ic(s,u){s.info(function(){return"TIMEOUT: "+u})}je.prototype.info=function(){};function wc(s,u){if(!s.g)return u;if(!u)return null;try{var l=JSON.parse(u);if(l){for(s=0;s<l.length;s++)if(Array.isArray(l[s])){var d=l[s];if(!(2>d.length)){var I=d[1];if(Array.isArray(I)&&!(1>I.length)){var R=I[0];if(R!="noop"&&R!="stop"&&R!="close")for(var b=1;b<I.length;b++)I[b]=""}}}}return jr(l)}catch{return u}}var Dn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ds={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Gr;function kn(){}D(kn,Br),kn.prototype.g=function(){return new XMLHttpRequest},kn.prototype.i=function(){return{}},Gr=new kn;function Gt(s,u,l,d){this.j=s,this.i=u,this.l=l,this.R=d||1,this.U=new Le(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ks}function ks(){this.i=null,this.g="",this.h=!1}var Ns={},Qr={};function Kr(s,u,l){s.L=1,s.v=On(qt(u)),s.m=l,s.P=!0,xs(s,null)}function xs(s,u){s.F=Date.now(),Nn(s),s.A=qt(s.v);var l=s.A,d=s.R;Array.isArray(d)||(d=[String(d)]),Ws(l.i,"t",d),s.C=0,l=s.j.J,s.h=new ks,s.g=fo(s.j,l?u:null,!s.m),0<s.O&&(s.M=new _c(A(s.Y,s,s.g),s.O)),u=s.U,l=s.g,d=s.ca;var I="readystatechange";Array.isArray(I)||(I&&(ws[0]=I.toString()),I=ws);for(var R=0;R<I.length;R++){var b=_s(l,I[R],d||u.handleEvent,!1,u.h||u);if(!b)break;u.g[b.key]=b}u=s.H?g(s.H):{},s.m?(s.u||(s.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,u)):(s.u="GET",s.g.ea(s.A,s.u,null,u)),Ue(),Ec(s.i,s.u,s.A,s.l,s.R,s.m)}Gt.prototype.ca=function(s){s=s.target;const u=this.M;u&&jt(s)==3?u.j():this.Y(s)},Gt.prototype.Y=function(s){try{if(s==this.g)t:{const gt=jt(this.g);var u=this.g.Ba();const Ee=this.g.Z();if(!(3>gt)&&(gt!=3||this.g&&(this.h.h||this.g.oa()||eo(this.g)))){this.J||gt!=4||u==7||(u==8||0>=Ee?Ue(3):Ue(2)),Wr(this);var l=this.g.Z();this.X=l;e:if(Ms(this)){var d=eo(this.g);s="";var I=d.length,R=jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ie(this),Be(this);var b="";break e}this.h.i=new c.TextDecoder}for(u=0;u<I;u++)this.h.h=!0,s+=this.h.i.decode(d[u],{stream:!(R&&u==I-1)});d.length=0,this.h.g+=s,this.C=0,b=this.h.g}else b=this.g.oa();if(this.o=l==200,vc(this.i,this.u,this.A,this.l,this.R,gt,l),this.o){if(this.T&&!this.K){e:{if(this.g){var X,ut=this.g;if((X=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(X)){var W=X;break e}}W=null}if(l=W)_e(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Hr(this,l);else{this.o=!1,this.s=3,It(12),ie(this),Be(this);break t}}if(this.P){l=!0;let kt;for(;!this.J&&this.C<b.length;)if(kt=Ac(this,b),kt==Qr){gt==4&&(this.s=4,It(14),l=!1),_e(this.i,this.l,null,"[Incomplete Response]");break}else if(kt==Ns){this.s=4,It(15),_e(this.i,this.l,b,"[Invalid Chunk]"),l=!1;break}else _e(this.i,this.l,kt,null),Hr(this,kt);if(Ms(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),gt!=4||b.length!=0||this.h.h||(this.s=1,It(16),l=!1),this.o=this.o&&l,!l)_e(this.i,this.l,b,"[Invalid Chunked Response]"),ie(this),Be(this);else if(0<b.length&&!this.W){this.W=!0;var pt=this.j;pt.g==this&&pt.ba&&!pt.M&&(pt.j.info("Great, no buffering proxy detected. Bytes received: "+b.length),ei(pt),pt.M=!0,It(11))}}else _e(this.i,this.l,b,null),Hr(this,b);gt==4&&ie(this),this.o&&!this.J&&(gt==4?uo(this.j,this):(this.o=!1,Nn(this)))}else jc(this.g),l==400&&0<b.indexOf("Unknown SID")?(this.s=3,It(12)):(this.s=0,It(13)),ie(this),Be(this)}}}catch{}finally{}};function Ms(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Ac(s,u){var l=s.C,d=u.indexOf(`
`,l);return d==-1?Qr:(l=Number(u.substring(l,d)),isNaN(l)?Ns:(d+=1,d+l>u.length?Qr:(u=u.slice(d,d+l),s.C=d+l,u)))}Gt.prototype.cancel=function(){this.J=!0,ie(this)};function Nn(s){s.S=Date.now()+s.I,Os(s,s.I)}function Os(s,u){if(s.B!=null)throw Error("WatchDog timer not null");s.B=qe(A(s.ba,s),u)}function Wr(s){s.B&&(c.clearTimeout(s.B),s.B=null)}Gt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Ic(this.i,this.A),this.L!=2&&(Ue(),It(17)),ie(this),this.s=2,Be(this)):Os(this,this.S-s)};function Be(s){s.j.G==0||s.J||uo(s.j,s)}function ie(s){Wr(s);var u=s.M;u&&typeof u.ma=="function"&&u.ma(),s.M=null,As(s.U),s.g&&(u=s.g,s.g=null,u.abort(),u.ma())}function Hr(s,u){try{var l=s.j;if(l.G!=0&&(l.g==s||Xr(l.h,s))){if(!s.K&&Xr(l.h,s)&&l.G==3){try{var d=l.Da.g.parse(u)}catch{d=null}if(Array.isArray(d)&&d.length==3){var I=d;if(I[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<s.F)jn(l),Un(l);else break t;ti(l),It(18)}}else l.za=I[1],0<l.za-l.T&&37500>I[2]&&l.F&&l.v==0&&!l.C&&(l.C=qe(A(l.Za,l),6e3));if(1>=Us(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else oe(l,11)}else if((s.K||l.g==s)&&jn(l),!$(u))for(I=l.Da.g.parse(u),u=0;u<I.length;u++){let W=I[u];if(l.T=W[0],W=W[1],l.G==2)if(W[0]=="c"){l.K=W[1],l.ia=W[2];const pt=W[3];pt!=null&&(l.la=pt,l.j.info("VER="+l.la));const gt=W[4];gt!=null&&(l.Aa=gt,l.j.info("SVER="+l.Aa));const Ee=W[5];Ee!=null&&typeof Ee=="number"&&0<Ee&&(d=1.5*Ee,l.L=d,l.j.info("backChannelRequestTimeoutMs_="+d)),d=l;const kt=s.g;if(kt){const zn=kt.g?kt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(zn){var R=d.h;R.g||zn.indexOf("spdy")==-1&&zn.indexOf("quic")==-1&&zn.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Yr(R,R.h),R.h=null))}if(d.D){const ni=kt.g?kt.g.getResponseHeader("X-HTTP-Session-Id"):null;ni&&(d.ya=ni,J(d.I,d.D,ni))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-s.F,l.j.info("Handshake RTT: "+l.R+"ms")),d=l;var b=s;if(d.qa=ho(d,d.J?d.ia:null,d.W),b.K){qs(d.h,b);var X=b,ut=d.L;ut&&(X.I=ut),X.B&&(Wr(X),Nn(X)),d.g=b}else oo(d);0<l.i.length&&qn(l)}else W[0]!="stop"&&W[0]!="close"||oe(l,7);else l.G==3&&(W[0]=="stop"||W[0]=="close"?W[0]=="stop"?oe(l,7):Zr(l):W[0]!="noop"&&l.l&&l.l.ta(W),l.v=0)}}Ue(4)}catch{}}var Rc=class{constructor(s,u){this.g=s,this.map=u}};function Ls(s){this.l=s||10,c.PerformanceNavigationTiming?(s=c.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Fs(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Us(s){return s.h?1:s.g?s.g.size:0}function Xr(s,u){return s.h?s.h==u:s.g?s.g.has(u):!1}function Yr(s,u){s.g?s.g.add(u):s.h=u}function qs(s,u){s.h&&s.h==u?s.h=null:s.g&&s.g.has(u)&&s.g.delete(u)}Ls.prototype.cancel=function(){if(this.i=js(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function js(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let u=s.i;for(const l of s.g.values())u=u.concat(l.D);return u}return k(s.i)}function Pc(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var u=[],l=s.length,d=0;d<l;d++)u.push(s[d]);return u}u=[],l=0;for(d in s)u[l++]=s[d];return u}function Sc(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var u=[];s=s.length;for(var l=0;l<s;l++)u.push(l);return u}u=[],l=0;for(const d in s)u[l++]=d;return u}}}function Bs(s,u){if(s.forEach&&typeof s.forEach=="function")s.forEach(u,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,u,void 0);else for(var l=Sc(s),d=Pc(s),I=d.length,R=0;R<I;R++)u.call(void 0,d[R],l&&l[R],s)}var zs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Vc(s,u){if(s){s=s.split("&");for(var l=0;l<s.length;l++){var d=s[l].indexOf("="),I=null;if(0<=d){var R=s[l].substring(0,d);I=s[l].substring(d+1)}else R=s[l];u(R,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function se(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof se){this.h=s.h,xn(this,s.j),this.o=s.o,this.g=s.g,Mn(this,s.s),this.l=s.l;var u=s.i,l=new Ge;l.i=u.i,u.g&&(l.g=new Map(u.g),l.h=u.h),$s(this,l),this.m=s.m}else s&&(u=String(s).match(zs))?(this.h=!1,xn(this,u[1]||"",!0),this.o=ze(u[2]||""),this.g=ze(u[3]||"",!0),Mn(this,u[4]),this.l=ze(u[5]||"",!0),$s(this,u[6]||"",!0),this.m=ze(u[7]||"")):(this.h=!1,this.i=new Ge(null,this.h))}se.prototype.toString=function(){var s=[],u=this.j;u&&s.push($e(u,Gs,!0),":");var l=this.g;return(l||u=="file")&&(s.push("//"),(u=this.o)&&s.push($e(u,Gs,!0),"@"),s.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&s.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&s.push("/"),s.push($e(l,l.charAt(0)=="/"?Dc:bc,!0))),(l=this.i.toString())&&s.push("?",l),(l=this.m)&&s.push("#",$e(l,Nc)),s.join("")};function qt(s){return new se(s)}function xn(s,u,l){s.j=l?ze(u,!0):u,s.j&&(s.j=s.j.replace(/:$/,""))}function Mn(s,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);s.s=u}else s.s=null}function $s(s,u,l){u instanceof Ge?(s.i=u,xc(s.i,s.h)):(l||(u=$e(u,kc)),s.i=new Ge(u,s.h))}function J(s,u,l){s.i.set(u,l)}function On(s){return J(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function ze(s,u){return s?u?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function $e(s,u,l){return typeof s=="string"?(s=encodeURI(s).replace(u,Cc),l&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Cc(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Gs=/[#\/\?@]/g,bc=/[#\?:]/g,Dc=/[#\?]/g,kc=/[#\?@]/g,Nc=/#/g;function Ge(s,u){this.h=this.g=null,this.i=s||null,this.j=!!u}function Qt(s){s.g||(s.g=new Map,s.h=0,s.i&&Vc(s.i,function(u,l){s.add(decodeURIComponent(u.replace(/\+/g," ")),l)}))}n=Ge.prototype,n.add=function(s,u){Qt(this),this.i=null,s=ye(this,s);var l=this.g.get(s);return l||this.g.set(s,l=[]),l.push(u),this.h+=1,this};function Qs(s,u){Qt(s),u=ye(s,u),s.g.has(u)&&(s.i=null,s.h-=s.g.get(u).length,s.g.delete(u))}function Ks(s,u){return Qt(s),u=ye(s,u),s.g.has(u)}n.forEach=function(s,u){Qt(this),this.g.forEach(function(l,d){l.forEach(function(I){s.call(u,I,d,this)},this)},this)},n.na=function(){Qt(this);const s=Array.from(this.g.values()),u=Array.from(this.g.keys()),l=[];for(let d=0;d<u.length;d++){const I=s[d];for(let R=0;R<I.length;R++)l.push(u[d])}return l},n.V=function(s){Qt(this);let u=[];if(typeof s=="string")Ks(this,s)&&(u=u.concat(this.g.get(ye(this,s))));else{s=Array.from(this.g.values());for(let l=0;l<s.length;l++)u=u.concat(s[l])}return u},n.set=function(s,u){return Qt(this),this.i=null,s=ye(this,s),Ks(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[u]),this.h+=1,this},n.get=function(s,u){return s?(s=this.V(s),0<s.length?String(s[0]):u):u};function Ws(s,u,l){Qs(s,u),0<l.length&&(s.i=null,s.g.set(ye(s,u),k(l)),s.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],u=Array.from(this.g.keys());for(var l=0;l<u.length;l++){var d=u[l];const R=encodeURIComponent(String(d)),b=this.V(d);for(d=0;d<b.length;d++){var I=R;b[d]!==""&&(I+="="+encodeURIComponent(String(b[d]))),s.push(I)}}return this.i=s.join("&")};function ye(s,u){return u=String(u),s.j&&(u=u.toLowerCase()),u}function xc(s,u){u&&!s.j&&(Qt(s),s.i=null,s.g.forEach(function(l,d){var I=d.toLowerCase();d!=I&&(Qs(this,d),Ws(this,I,l))},s)),s.j=u}function Mc(s,u){const l=new je;if(c.Image){const d=new Image;d.onload=S(Kt,l,"TestLoadImage: loaded",!0,u,d),d.onerror=S(Kt,l,"TestLoadImage: error",!1,u,d),d.onabort=S(Kt,l,"TestLoadImage: abort",!1,u,d),d.ontimeout=S(Kt,l,"TestLoadImage: timeout",!1,u,d),c.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=s}else u(!1)}function Oc(s,u){const l=new je,d=new AbortController,I=setTimeout(()=>{d.abort(),Kt(l,"TestPingServer: timeout",!1,u)},1e4);fetch(s,{signal:d.signal}).then(R=>{clearTimeout(I),R.ok?Kt(l,"TestPingServer: ok",!0,u):Kt(l,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(I),Kt(l,"TestPingServer: error",!1,u)})}function Kt(s,u,l,d,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),d(l)}catch{}}function Lc(){this.g=new Tc}function Fc(s,u,l){const d=l||"";try{Bs(s,function(I,R){let b=I;f(I)&&(b=jr(I)),u.push(d+R+"="+encodeURIComponent(b))})}catch(I){throw u.push(d+"type="+encodeURIComponent("_badmap")),I}}function Qe(s){this.l=s.Ub||null,this.j=s.eb||!1}D(Qe,Br),Qe.prototype.g=function(){return new Ln(this.l,this.j)},Qe.prototype.i=function(s){return function(){return s}}({});function Ln(s,u){dt.call(this),this.D=s,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(Ln,dt),n=Ln.prototype,n.open=function(s,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=u,this.readyState=1,We(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(u.body=s),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ke(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,We(this)),this.g&&(this.readyState=3,We(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Hs(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function Hs(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var u=s.value?s.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!s.done}))&&(this.response=this.responseText+=u)}s.done?Ke(this):We(this),this.readyState==3&&Hs(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,Ke(this))},n.Qa=function(s){this.g&&(this.response=s,Ke(this))},n.ga=function(){this.g&&Ke(this)};function Ke(s){s.readyState=4,s.l=null,s.j=null,s.v=null,We(s)}n.setRequestHeader=function(s,u){this.u.append(s,u)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],u=this.h.entries();for(var l=u.next();!l.done;)l=l.value,s.push(l[0]+": "+l[1]),l=u.next();return s.join(`\r
`)};function We(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Ln.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Xs(s){let u="";return U(s,function(l,d){u+=d,u+=":",u+=l,u+=`\r
`}),u}function Jr(s,u,l){t:{for(d in l){var d=!1;break t}d=!0}d||(l=Xs(l),typeof s=="string"?l!=null&&encodeURIComponent(String(l)):J(s,u,l))}function et(s){dt.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(et,dt);var Uc=/^https?$/i,qc=["POST","PUT"];n=et.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,u,l,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);u=u?u.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Gr.g(),this.v=this.o?Rs(this.o):Rs(Gr),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(u,String(s),!0),this.B=!1}catch(R){Ys(this,R);return}if(s=l||"",l=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var I in d)l.set(I,d[I]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const R of d.keys())l.set(R,d.get(R));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(l.keys()).find(R=>R.toLowerCase()=="content-type"),I=c.FormData&&s instanceof c.FormData,!(0<=Array.prototype.indexOf.call(qc,u,void 0))||d||I||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,b]of l)this.g.setRequestHeader(R,b);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{to(this),this.u=!0,this.g.send(s),this.u=!1}catch(R){Ys(this,R)}};function Ys(s,u){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=u,s.m=5,Js(s),Fn(s)}function Js(s){s.A||(s.A=!0,vt(s,"complete"),vt(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,vt(this,"complete"),vt(this,"abort"),Fn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Fn(this,!0)),et.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Zs(this):this.bb())},n.bb=function(){Zs(this)};function Zs(s){if(s.h&&typeof a<"u"&&(!s.v[1]||jt(s)!=4||s.Z()!=2)){if(s.u&&jt(s)==4)vs(s.Ea,0,s);else if(vt(s,"readystatechange"),jt(s)==4){s.h=!1;try{const b=s.Z();t:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var l;if(!(l=u)){var d;if(d=b===0){var I=String(s.D).match(zs)[1]||null;!I&&c.self&&c.self.location&&(I=c.self.location.protocol.slice(0,-1)),d=!Uc.test(I?I.toLowerCase():"")}l=d}if(l)vt(s,"complete"),vt(s,"success");else{s.m=6;try{var R=2<jt(s)?s.g.statusText:""}catch{R=""}s.l=R+" ["+s.Z()+"]",Js(s)}}finally{Fn(s)}}}}function Fn(s,u){if(s.g){to(s);const l=s.g,d=s.v[0]?()=>{}:null;s.g=null,s.v=null,u||vt(s,"ready");try{l.onreadystatechange=d}catch{}}}function to(s){s.I&&(c.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function jt(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<jt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var u=this.g.responseText;return s&&u.indexOf(s)==0&&(u=u.substring(s.length)),yc(u)}};function eo(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function jc(s){const u={};s=(s.g&&2<=jt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<s.length;d++){if($(s[d]))continue;var l=E(s[d]);const I=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const R=u[I]||[];u[I]=R,R.push(l)}T(u,function(d){return d.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function He(s,u,l){return l&&l.internalChannelParams&&l.internalChannelParams[s]||u}function no(s){this.Aa=0,this.i=[],this.j=new je,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=He("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=He("baseRetryDelayMs",5e3,s),this.cb=He("retryDelaySeedMs",1e4,s),this.Wa=He("forwardChannelMaxRetries",2,s),this.wa=He("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Ls(s&&s.concurrentRequestLimit),this.Da=new Lc,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=no.prototype,n.la=8,n.G=1,n.connect=function(s,u,l,d){It(0),this.W=s,this.H=u||{},l&&d!==void 0&&(this.H.OSID=l,this.H.OAID=d),this.F=this.X,this.I=ho(this,null,this.W),qn(this)};function Zr(s){if(ro(s),s.G==3){var u=s.U++,l=qt(s.I);if(J(l,"SID",s.K),J(l,"RID",u),J(l,"TYPE","terminate"),Xe(s,l),u=new Gt(s,s.j,u),u.L=2,u.v=On(qt(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=u.v,l=!0),l||(u.g=fo(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Nn(u)}lo(s)}function Un(s){s.g&&(ei(s),s.g.cancel(),s.g=null)}function ro(s){Un(s),s.u&&(c.clearTimeout(s.u),s.u=null),jn(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&c.clearTimeout(s.s),s.s=null)}function qn(s){if(!Fs(s.h)&&!s.s){s.s=!0;var u=s.Ga;At||me(),Pt||(At(),Pt=!0),Ut.add(u,s),s.B=0}}function Bc(s,u){return Us(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=u.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=qe(A(s.Ga,s,u),co(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const I=new Gt(this,this.j,s);let R=this.o;if(this.S&&(R?(R=g(R),y(R,this.S)):R=this.S),this.m!==null||this.O||(I.H=R,R=null),this.P)t:{for(var u=0,l=0;l<this.i.length;l++){e:{var d=this.i[l];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(u+=d,4096<u){u=l;break t}if(u===4096||l===this.i.length-1){u=l+1;break t}}u=1e3}else u=1e3;u=so(this,I,u),l=qt(this.I),J(l,"RID",s),J(l,"CVER",22),this.D&&J(l,"X-HTTP-Session-Id",this.D),Xe(this,l),R&&(this.O?u="headers="+encodeURIComponent(String(Xs(R)))+"&"+u:this.m&&Jr(l,this.m,R)),Yr(this.h,I),this.Ua&&J(l,"TYPE","init"),this.P?(J(l,"$req",u),J(l,"SID","null"),I.T=!0,Kr(I,l,null)):Kr(I,l,u),this.G=2}}else this.G==3&&(s?io(this,s):this.i.length==0||Fs(this.h)||io(this))};function io(s,u){var l;u?l=u.l:l=s.U++;const d=qt(s.I);J(d,"SID",s.K),J(d,"RID",l),J(d,"AID",s.T),Xe(s,d),s.m&&s.o&&Jr(d,s.m,s.o),l=new Gt(s,s.j,l,s.B+1),s.m===null&&(l.H=s.o),u&&(s.i=u.D.concat(s.i)),u=so(s,l,1e3),l.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Yr(s.h,l),Kr(l,d,u)}function Xe(s,u){s.H&&U(s.H,function(l,d){J(u,d,l)}),s.l&&Bs({},function(l,d){J(u,d,l)})}function so(s,u,l){l=Math.min(s.i.length,l);var d=s.l?A(s.l.Na,s.l,s):null;t:{var I=s.i;let R=-1;for(;;){const b=["count="+l];R==-1?0<l?(R=I[0].g,b.push("ofs="+R)):R=0:b.push("ofs="+R);let X=!0;for(let ut=0;ut<l;ut++){let W=I[ut].g;const pt=I[ut].map;if(W-=R,0>W)R=Math.max(0,I[ut].g-100),X=!1;else try{Fc(pt,b,"req"+W+"_")}catch{d&&d(pt)}}if(X){d=b.join("&");break t}}}return s=s.i.splice(0,l),u.D=s,d}function oo(s){if(!s.g&&!s.u){s.Y=1;var u=s.Fa;At||me(),Pt||(At(),Pt=!0),Ut.add(u,s),s.v=0}}function ti(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=qe(A(s.Fa,s),co(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,ao(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=qe(A(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,It(10),Un(this),ao(this))};function ei(s){s.A!=null&&(c.clearTimeout(s.A),s.A=null)}function ao(s){s.g=new Gt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var u=qt(s.qa);J(u,"RID","rpc"),J(u,"SID",s.K),J(u,"AID",s.T),J(u,"CI",s.F?"0":"1"),!s.F&&s.ja&&J(u,"TO",s.ja),J(u,"TYPE","xmlhttp"),Xe(s,u),s.m&&s.o&&Jr(u,s.m,s.o),s.L&&(s.g.I=s.L);var l=s.g;s=s.ia,l.L=1,l.v=On(qt(u)),l.m=null,l.P=!0,xs(l,s)}n.Za=function(){this.C!=null&&(this.C=null,Un(this),ti(this),It(19))};function jn(s){s.C!=null&&(c.clearTimeout(s.C),s.C=null)}function uo(s,u){var l=null;if(s.g==u){jn(s),ei(s),s.g=null;var d=2}else if(Xr(s.h,u))l=u.D,qs(s.h,u),d=1;else return;if(s.G!=0){if(u.o)if(d==1){l=u.m?u.m.length:0,u=Date.now()-u.F;var I=s.B;d=bn(),vt(d,new bs(d,l)),qn(s)}else oo(s);else if(I=u.s,I==3||I==0&&0<u.X||!(d==1&&Bc(s,u)||d==2&&ti(s)))switch(l&&0<l.length&&(u=s.h,u.i=u.i.concat(l)),I){case 1:oe(s,5);break;case 4:oe(s,10);break;case 3:oe(s,6);break;default:oe(s,2)}}}function co(s,u){let l=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(l*=2),l*u}function oe(s,u){if(s.j.info("Error code "+u),u==2){var l=A(s.fb,s),d=s.Xa;const I=!d;d=new se(d||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||xn(d,"https"),On(d),I?Mc(d.toString(),l):Oc(d.toString(),l)}else It(2);s.G=0,s.l&&s.l.sa(u),lo(s),ro(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))};function lo(s){if(s.G=0,s.ka=[],s.l){const u=js(s.h);(u.length!=0||s.i.length!=0)&&(P(s.ka,u),P(s.ka,s.i),s.h.i.length=0,k(s.i),s.i.length=0),s.l.ra()}}function ho(s,u,l){var d=l instanceof se?qt(l):new se(l);if(d.g!="")u&&(d.g=u+"."+d.g),Mn(d,d.s);else{var I=c.location;d=I.protocol,u=u?u+"."+I.hostname:I.hostname,I=+I.port;var R=new se(null);d&&xn(R,d),u&&(R.g=u),I&&Mn(R,I),l&&(R.l=l),d=R}return l=s.D,u=s.ya,l&&u&&J(d,l,u),J(d,"VER",s.la),Xe(s,d),d}function fo(s,u,l){if(u&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=s.Ca&&!s.pa?new et(new Qe({eb:l})):new et(s.pa),u.Ha(s.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function po(){}n=po.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Bn(){}Bn.prototype.g=function(s,u){return new St(s,u)};function St(s,u){dt.call(this),this.g=new no(u),this.l=s,this.h=u&&u.messageUrlParams||null,s=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(s?s["X-WebChannel-Content-Type"]=u.messageContentType:s={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(s?s["X-WebChannel-Client-Profile"]=u.va:s={"X-WebChannel-Client-Profile":u.va}),this.g.S=s,(s=u&&u.Sb)&&!$(s)&&(this.g.m=s),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!$(u)&&(this.g.D=u,s=this.h,s!==null&&u in s&&(s=this.h,u in s&&delete s[u])),this.j=new Te(this)}D(St,dt),St.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},St.prototype.close=function(){Zr(this.g)},St.prototype.o=function(s){var u=this.g;if(typeof s=="string"){var l={};l.__data__=s,s=l}else this.u&&(l={},l.__data__=jr(s),s=l);u.i.push(new Rc(u.Ya++,s)),u.G==3&&qn(u)},St.prototype.N=function(){this.g.l=null,delete this.j,Zr(this.g),delete this.g,St.aa.N.call(this)};function go(s){zr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var u=s.__sm__;if(u){t:{for(const l in u){s=l;break t}s=void 0}(this.i=s)&&(s=this.i,u=u!==null&&s in u?u[s]:void 0),this.data=u}else this.data=s}D(go,zr);function mo(){$r.call(this),this.status=1}D(mo,$r);function Te(s){this.g=s}D(Te,po),Te.prototype.ua=function(){vt(this.g,"a")},Te.prototype.ta=function(s){vt(this.g,new go(s))},Te.prototype.sa=function(s){vt(this.g,new mo)},Te.prototype.ra=function(){vt(this.g,"b")},Bn.prototype.createWebChannel=Bn.prototype.g,St.prototype.send=St.prototype.o,St.prototype.open=St.prototype.m,St.prototype.close=St.prototype.close,qa=function(){return new Bn},Ua=function(){return bn()},Fa=re,_i={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Dn.NO_ERROR=0,Dn.TIMEOUT=8,Dn.HTTP_ERROR=6,Jn=Dn,Ds.COMPLETE="complete",La=Ds,Ps.EventType=Fe,Fe.OPEN="a",Fe.CLOSE="b",Fe.ERROR="c",Fe.MESSAGE="d",dt.prototype.listen=dt.prototype.K,Ze=Ps,Oa=Qe,et.prototype.listenOnce=et.prototype.L,et.prototype.getLastError=et.prototype.Ka,et.prototype.getLastErrorCode=et.prototype.Ba,et.prototype.getStatus=et.prototype.Z,et.prototype.getResponseJson=et.prototype.Oa,et.prototype.getResponseText=et.prototype.oa,et.prototype.send=et.prototype.ea,et.prototype.setWithCredentials=et.prototype.Ha,Ma=et}).apply(typeof Gn<"u"?Gn:typeof self<"u"?self:typeof window<"u"?window:{});const xo="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ke="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le=new $c("@firebase/firestore");function Je(){return le.logLevel}function x(n,...t){if(le.logLevel<=Wt.DEBUG){const e=t.map(qi);le.debug(`Firestore (${ke}): ${n}`,...e)}}function Bt(n,...t){if(le.logLevel<=Wt.ERROR){const e=t.map(qi);le.error(`Firestore (${ke}): ${n}`,...e)}}function Re(n,...t){if(le.logLevel<=Wt.WARN){const e=t.map(qi);le.warn(`Firestore (${ke}): ${n}`,...e)}}function qi(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(n="Unexpected state"){const t=`FIRESTORE (${ke}) INTERNAL ASSERTION FAILED: `+n;throw Bt(t),new Error(t)}function Y(n,t){n||F()}function j(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends Kc{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ch{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(_t.UNAUTHENTICATED))}shutdown(){}}class lh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class hh{constructor(t){this.t=t,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const i=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new Xt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Xt,t.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},c=h=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Xt)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Y(typeof r.accessToken=="string"),new ja(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Y(t===null||typeof t=="string"),new _t(t)}}class fh{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class dh{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new fh(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ph{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gh{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=o=>{o.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,x("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Y(typeof e.token=="string"),this.R=e.token,new ph(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=mh(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%t.length))}return r}}function H(n,t){return n<t?-1:n>t?1:0}function Pe(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new N(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ot.fromMillis(Date.now())}static fromDate(t){return ot.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new ot(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?H(this.nanoseconds,t.nanoseconds):H(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(t){this.timestamp=t}static fromTimestamp(t){return new q(t)}static min(){return new q(new ot(0,0))}static max(){return new q(new ot(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(t,e,r){e===void 0?e=0:e>t.length&&F(),r===void 0?r=t.length-e:r>t.length-e&&F(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return hn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof hn?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=t.get(i),a=e.get(i);if(o<a)return-1;if(o>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Z extends hn{construct(t,e,r){return new Z(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new N(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new Z(e)}static emptyPath(){return new Z([])}}const _h=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends hn{construct(t,e,r){return new lt(t,e,r)}static isValidIdentifier(t){return _h.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new lt(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new N(V.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;i<t.length;){const c=t[i];if(c==="\\"){if(i+1===t.length)throw new N(V.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new N(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(r+=c,i++):(o(),i++)}if(o(),a)throw new N(V.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new lt(e)}static emptyPath(){return new lt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(Z.fromString(t))}static fromName(t){return new M(Z.fromString(t).popFirst(5))}static empty(){return new M(Z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Z.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Z.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new Z(t.slice()))}}function yh(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=q.fromTimestamp(r===1e9?new ot(e+1,0):new ot(e,r));return new Jt(i,M.empty(),t)}function Th(n){return new Jt(n.readTime,n.key,-1)}class Jt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Jt(q.min(),M.empty(),-1)}static max(){return new Jt(q.max(),M.empty(),-1)}}function Eh(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(n.documentKey,t.documentKey),e!==0?e:H(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ih{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tn(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==vh)throw n;x("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new C((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof C?e:C.resolve(e)}catch(e){return C.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):C.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):C.reject(e)}static resolve(t){return new C((e,r)=>{e(t)})}static reject(t){return new C((e,r)=>{r(t)})}static waitFor(t){return new C((e,r)=>{let i=0,o=0,a=!1;t.forEach(c=>{++i,c.next(()=>{++o,a&&o===i&&e()},h=>r(h))}),a=!0,o===i&&e()})}static or(t){let e=C.resolve(!1);for(const r of t)e=e.next(i=>i?C.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,o)=>{r.push(e.call(this,i,o))}),this.waitFor(r)}static mapArray(t,e){return new C((r,i)=>{const o=t.length,a=new Array(o);let c=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(p=>{a[f]=p,++c,c===o&&r(a)},p=>i(p))}})}static doWhile(t,e){return new C((r,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):r()};o()})}}function wh(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function En(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}ji.oe=-1;function pr(n){return n==null}function ir(n){return n===0&&1/n==-1/0}function Ah(n){return typeof n=="number"&&Number.isInteger(n)&&!ir(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function de(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function za(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t,e){this.comparator=t,this.root=e||ct.EMPTY}insert(t,e){return new tt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(t){return new tt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ct.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Qn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Qn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Qn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Qn(this.root,t,this.comparator,!0)}}class Qn{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ct{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??ct.RED,this.left=i??ct.EMPTY,this.right=o??ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new ct(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ct.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return ct.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const t=this.left.check();if(t!==this.right.check())throw F();return t+(this.isRed()?0:1)}}ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(t,e,r,i,o){return this}insert(t,e,r){return new ct(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t){this.comparator=t,this.data=new tt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Oo(this.data.getIterator())}getIteratorFrom(t){return new Oo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof ht)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ht(this.comparator);return e.data=t,e}}class Oo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t){this.fields=t,t.sort(lt.comparator)}static empty(){return new Vt([])}unionWith(t){let e=new ht(lt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Vt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Pe(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new $a("Invalid base64 string: "+o):o}}(t);return new Et(e)}static fromUint8Array(t){const e=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(t);return new Et(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return H(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Et.EMPTY_BYTE_STRING=new Et("");const Rh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zt(n){if(Y(!!n),typeof n=="string"){let t=0;const e=Rh.exec(n);if(Y(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:rt(n.seconds),nanos:rt(n.nanos)}}function rt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function he(n){return typeof n=="string"?Et.fromBase64String(n):Et.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function zi(n){const t=n.mapValue.fields.__previous_value__;return Bi(t)?zi(t):t}function fn(n){const t=Zt(n.mapValue.fields.__local_write_time__.timestampValue);return new ot(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(t,e,r,i,o,a,c,h,f){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=f}}class dn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new dn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof dn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function fe(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Bi(n)?4:Sh(n)?9007199254740991:10:F()}function Ft(n,t){if(n===t)return!0;const e=fe(n);if(e!==fe(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return fn(n).isEqual(fn(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=Zt(i.timestampValue),c=Zt(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,o){return he(i.bytesValue).isEqual(he(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,o){return rt(i.geoPointValue.latitude)===rt(o.geoPointValue.latitude)&&rt(i.geoPointValue.longitude)===rt(o.geoPointValue.longitude)}(n,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return rt(i.integerValue)===rt(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=rt(i.doubleValue),c=rt(o.doubleValue);return a===c?ir(a)===ir(c):isNaN(a)&&isNaN(c)}return!1}(n,t);case 9:return Pe(n.arrayValue.values||[],t.arrayValue.values||[],Ft);case 10:return function(i,o){const a=i.mapValue.fields||{},c=o.mapValue.fields||{};if(Mo(a)!==Mo(c))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(c[h]===void 0||!Ft(a[h],c[h])))return!1;return!0}(n,t);default:return F()}}function pn(n,t){return(n.values||[]).find(e=>Ft(e,t))!==void 0}function Se(n,t){if(n===t)return 0;const e=fe(n),r=fe(t);if(e!==r)return H(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return H(n.booleanValue,t.booleanValue);case 2:return function(o,a){const c=rt(o.integerValue||o.doubleValue),h=rt(a.integerValue||a.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(n,t);case 3:return Lo(n.timestampValue,t.timestampValue);case 4:return Lo(fn(n),fn(t));case 5:return H(n.stringValue,t.stringValue);case 6:return function(o,a){const c=he(o),h=he(a);return c.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const c=o.split("/"),h=a.split("/");for(let f=0;f<c.length&&f<h.length;f++){const p=H(c[f],h[f]);if(p!==0)return p}return H(c.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const c=H(rt(o.latitude),rt(a.latitude));return c!==0?c:H(rt(o.longitude),rt(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(o,a){const c=o.values||[],h=a.values||[];for(let f=0;f<c.length&&f<h.length;++f){const p=Se(c[f],h[f]);if(p)return p}return H(c.length,h.length)}(n.arrayValue,t.arrayValue);case 10:return function(o,a){if(o===Kn.mapValue&&a===Kn.mapValue)return 0;if(o===Kn.mapValue)return 1;if(a===Kn.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),f=a.fields||{},p=Object.keys(f);h.sort(),p.sort();for(let v=0;v<h.length&&v<p.length;++v){const A=H(h[v],p[v]);if(A!==0)return A;const S=Se(c[h[v]],f[p[v]]);if(S!==0)return S}return H(h.length,p.length)}(n.mapValue,t.mapValue);default:throw F()}}function Lo(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return H(n,t);const e=Zt(n),r=Zt(t),i=H(e.seconds,r.seconds);return i!==0?i:H(e.nanos,r.nanos)}function Ve(n){return yi(n)}function yi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Zt(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return he(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return M.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=yi(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${yi(e.fields[a])}`;return i+"}"}(n.mapValue):F()}function Fo(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Ti(n){return!!n&&"integerValue"in n}function $i(n){return!!n&&"arrayValue"in n}function Uo(n){return!!n&&"nullValue"in n}function qo(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Zn(n){return!!n&&"mapValue"in n}function sn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return de(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=sn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=sn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Sh(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t){this.value=t}static empty(){return new Rt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Zn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=sn(e)}setAll(t){let e=lt.emptyPath(),r={},i=[];t.forEach((a,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,r,i),r={},i=[],e=c.popLast()}a?r[c.lastSegment()]=sn(a):i.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());Zn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ft(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];Zn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){de(e,(i,o)=>t[i]=o);for(const i of r)delete t[i]}clone(){return new Rt(sn(this.value))}}function Ga(n){const t=[];return de(n.fields,(e,r)=>{const i=new lt([e]);if(Zn(r)){const o=Ga(r.mapValue).fields;if(o.length===0)t.push(i);else for(const a of o)t.push(i.child(a))}else t.push(i)}),new Vt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t,e,r,i,o,a,c){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(t){return new yt(t,0,q.min(),q.min(),q.min(),Rt.empty(),0)}static newFoundDocument(t,e,r,i){return new yt(t,1,e,q.min(),r,i,0)}static newNoDocument(t,e){return new yt(t,2,e,q.min(),q.min(),Rt.empty(),0)}static newUnknownDocument(t,e){return new yt(t,3,e,q.min(),q.min(),Rt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof yt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(t,e){this.position=t,this.inclusive=e}}function jo(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],a=n.position[i];if(o.field.isKeyField()?r=M.comparator(M.fromName(a.referenceValue),e.key):r=Se(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Bo(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Ft(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Vh(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{}class it extends Qa{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new bh(t,e,r):e==="array-contains"?new Nh(t,r):e==="in"?new xh(t,r):e==="not-in"?new Mh(t,r):e==="array-contains-any"?new Oh(t,r):new it(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Dh(t,r):new kh(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Se(e,this.value)):e!==null&&fe(this.value)===fe(e)&&this.matchesComparison(Se(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return F()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xt extends Qa{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new xt(t,e)}matches(t){return Ka(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ka(n){return n.op==="and"}function Wa(n){return Ch(n)&&Ka(n)}function Ch(n){for(const t of n.filters)if(t instanceof xt)return!1;return!0}function Ei(n){if(n instanceof it)return n.field.canonicalString()+n.op.toString()+Ve(n.value);if(Wa(n))return n.filters.map(t=>Ei(t)).join(",");{const t=n.filters.map(e=>Ei(e)).join(",");return`${n.op}(${t})`}}function Ha(n,t){return n instanceof it?function(r,i){return i instanceof it&&r.op===i.op&&r.field.isEqual(i.field)&&Ft(r.value,i.value)}(n,t):n instanceof xt?function(r,i){return i instanceof xt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,c)=>o&&Ha(a,i.filters[c]),!0):!1}(n,t):void F()}function Xa(n){return n instanceof it?function(e){return`${e.field.canonicalString()} ${e.op} ${Ve(e.value)}`}(n):n instanceof xt?function(e){return e.op.toString()+" {"+e.getFilters().map(Xa).join(" ,")+"}"}(n):"Filter"}class bh extends it{constructor(t,e,r){super(t,e,r),this.key=M.fromName(r.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class Dh extends it{constructor(t,e){super(t,"in",e),this.keys=Ya("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class kh extends it{constructor(t,e){super(t,"not-in",e),this.keys=Ya("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Ya(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>M.fromName(r.referenceValue))}class Nh extends it{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return $i(e)&&pn(e.arrayValue,this.value)}}class xh extends it{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&pn(this.value.arrayValue,e)}}class Mh extends it{constructor(t,e){super(t,"not-in",e)}matches(t){if(pn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!pn(this.value.arrayValue,e)}}class Oh extends it{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!$i(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>pn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(t,e=null,r=[],i=[],o=null,a=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=c,this.ue=null}}function zo(n,t=null,e=[],r=[],i=null,o=null,a=null){return new Lh(n,t,e,r,i,o,a)}function Gi(n){const t=j(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Ei(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),pr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Ve(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Ve(r)).join(",")),t.ue=e}return t.ue}function Qi(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Vh(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Ha(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Bo(n.startAt,t.startAt)&&Bo(n.endAt,t.endAt)}function vi(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(t,e=null,r=[],i=[],o=null,a="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Fh(n,t,e,r,i,o,a,c){return new Ne(n,t,e,r,i,o,a,c)}function gr(n){return new Ne(n)}function $o(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ja(n){return n.collectionGroup!==null}function on(n){const t=j(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new ht(lt.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new gn(o,r))}),e.has(lt.keyField().canonicalString())||t.ce.push(new gn(lt.keyField(),r))}return t.ce}function Mt(n){const t=j(n);return t.le||(t.le=Uh(t,on(n))),t.le}function Uh(n,t){if(n.limitType==="F")return zo(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new gn(i.field,o)});const e=n.endAt?new sr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new sr(n.startAt.position,n.startAt.inclusive):null;return zo(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Ii(n,t){const e=n.filters.concat([t]);return new Ne(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function wi(n,t,e){return new Ne(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function mr(n,t){return Qi(Mt(n),Mt(t))&&n.limitType===t.limitType}function Za(n){return`${Gi(Mt(n))}|lt:${n.limitType}`}function ve(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>Xa(i)).join(", ")}]`),pr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>Ve(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>Ve(i)).join(",")),`Target(${r})`}(Mt(n))}; limitType=${n.limitType})`}function _r(n,t){return t.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):M.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,i){for(const o of on(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(a,c,h){const f=jo(a,c,h);return a.inclusive?f<=0:f<0}(r.startAt,on(r),i)||r.endAt&&!function(a,c,h){const f=jo(a,c,h);return a.inclusive?f>=0:f>0}(r.endAt,on(r),i))}(n,t)}function qh(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function tu(n){return(t,e)=>{let r=!1;for(const i of on(n)){const o=jh(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function jh(n,t,e){const r=n.field.isKeyField()?M.comparator(t.key,e.key):function(o,a,c){const h=a.data.field(o),f=c.data.field(o);return h!==null&&f!==null?Se(h,f):F()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return F()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){de(this.inner,(e,r)=>{for(const[i,o]of r)t(i,o)})}isEmpty(){return za(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh=new tt(M.comparator);function zt(){return Bh}const eu=new tt(M.comparator);function tn(...n){let t=eu;for(const e of n)t=t.insert(e.key,e);return t}function nu(n){let t=eu;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function ae(){return an()}function ru(){return an()}function an(){return new xe(n=>n.toString(),(n,t)=>n.isEqual(t))}const zh=new tt(M.comparator),$h=new ht(M.comparator);function G(...n){let t=$h;for(const e of n)t=t.add(e);return t}const Gh=new ht(H);function Qh(){return Gh}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ir(t)?"-0":t}}function su(n){return{integerValue:""+n}}function Kh(n,t){return Ah(t)?su(t):iu(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(){this._=void 0}}function Wh(n,t,e){return n instanceof mn?function(i,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Bi(o)&&(o=zi(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(e,t):n instanceof _n?au(n,t):n instanceof yn?uu(n,t):function(i,o){const a=ou(i,o),c=Go(a)+Go(i.Pe);return Ti(a)&&Ti(i.Pe)?su(c):iu(i.serializer,c)}(n,t)}function Hh(n,t,e){return n instanceof _n?au(n,t):n instanceof yn?uu(n,t):e}function ou(n,t){return n instanceof or?function(r){return Ti(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class mn extends yr{}class _n extends yr{constructor(t){super(),this.elements=t}}function au(n,t){const e=cu(t);for(const r of n.elements)e.some(i=>Ft(i,r))||e.push(r);return{arrayValue:{values:e}}}class yn extends yr{constructor(t){super(),this.elements=t}}function uu(n,t){let e=cu(t);for(const r of n.elements)e=e.filter(i=>!Ft(i,r));return{arrayValue:{values:e}}}class or extends yr{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Go(n){return rt(n.integerValue||n.doubleValue)}function cu(n){return $i(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(t,e){this.field=t,this.transform=e}}function Yh(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof _n&&i instanceof _n||r instanceof yn&&i instanceof yn?Pe(r.elements,i.elements,Ft):r instanceof or&&i instanceof or?Ft(r.Pe,i.Pe):r instanceof mn&&i instanceof mn}(n.transform,t.transform)}class Jh{constructor(t,e){this.version=t,this.transformResults=e}}class Ct{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ct}static exists(t){return new Ct(void 0,t)}static updateTime(t){return new Ct(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function tr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Tr{}function lu(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Ki(n.key,Ct.none()):new vn(n.key,n.data,Ct.none());{const e=n.data,r=Rt.empty();let i=new ht(lt.comparator);for(let o of t.fields)if(!i.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new ne(n.key,r,new Vt(i.toArray()),Ct.none())}}function Zh(n,t,e){n instanceof vn?function(i,o,a){const c=i.value.clone(),h=Ko(i.fieldTransforms,o,a.transformResults);c.setAll(h),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,t,e):n instanceof ne?function(i,o,a){if(!tr(i.precondition,o))return void o.convertToUnknownDocument(a.version);const c=Ko(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(hu(i)),h.setAll(c),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function un(n,t,e,r){return n instanceof vn?function(o,a,c,h){if(!tr(o.precondition,a))return c;const f=o.value.clone(),p=Wo(o.fieldTransforms,h,a);return f.setAll(p),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,t,e,r):n instanceof ne?function(o,a,c,h){if(!tr(o.precondition,a))return c;const f=Wo(o.fieldTransforms,h,a),p=a.data;return p.setAll(hu(o)),p.setAll(f),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(v=>v.field))}(n,t,e,r):function(o,a,c){return tr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,t,e)}function tf(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),o=ou(r.transform,i||null);o!=null&&(e===null&&(e=Rt.empty()),e.set(r.field,o))}return e||null}function Qo(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Pe(r,i,(o,a)=>Yh(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class vn extends Tr{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ne extends Tr{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function hu(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Ko(n,t,e){const r=new Map;Y(n.length===e.length);for(let i=0;i<e.length;i++){const o=n[i],a=o.transform,c=t.data.field(o.field);r.set(o.field,Hh(a,c,e[i]))}return r}function Wo(n,t,e){const r=new Map;for(const i of n){const o=i.transform,a=e.data.field(i.field);r.set(i.field,Wh(o,a,t))}return r}class Ki extends Tr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ef extends Tr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&Zh(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=un(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=un(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=ru();return this.mutations.forEach(i=>{const o=t.get(i.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=e.has(i.key)?null:c;const h=lu(a,c);h!==null&&r.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(q.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),G())}isEqual(t){return this.batchId===t.batchId&&Pe(this.mutations,t.mutations,(e,r)=>Qo(e,r))&&Pe(this.baseMutations,t.baseMutations,(e,r)=>Qo(e,r))}}class Wi{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){Y(t.mutations.length===r.length);let i=function(){return zh}();const o=t.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,r[a].version);return new Wi(t,e,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nt,K;function of(n){switch(n){default:return F();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function fu(n){if(n===void 0)return Bt("GRPC error has no .code"),V.UNKNOWN;switch(n){case nt.OK:return V.OK;case nt.CANCELLED:return V.CANCELLED;case nt.UNKNOWN:return V.UNKNOWN;case nt.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case nt.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case nt.INTERNAL:return V.INTERNAL;case nt.UNAVAILABLE:return V.UNAVAILABLE;case nt.UNAUTHENTICATED:return V.UNAUTHENTICATED;case nt.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case nt.NOT_FOUND:return V.NOT_FOUND;case nt.ALREADY_EXISTS:return V.ALREADY_EXISTS;case nt.PERMISSION_DENIED:return V.PERMISSION_DENIED;case nt.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case nt.ABORTED:return V.ABORTED;case nt.OUT_OF_RANGE:return V.OUT_OF_RANGE;case nt.UNIMPLEMENTED:return V.UNIMPLEMENTED;case nt.DATA_LOSS:return V.DATA_LOSS;default:return F()}}(K=nt||(nt={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf=new ue([4294967295,4294967295],0);function Ho(n){const t=af().encode(n),e=new xa;return e.update(t),new Uint8Array(e.digest())}function Xo(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new ue([e,r],0),new ue([i,o],0)]}class Hi{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new en(`Invalid padding: ${e}`);if(r<0)throw new en(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new en(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new en(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=ue.fromNumber(this.Ie)}Ee(t,e,r){let i=t.add(e.multiply(ue.fromNumber(r)));return i.compare(uf)===1&&(i=new ue([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Ho(t),[r,i]=Xo(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,i,o);if(!this.de(a))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Hi(o,i,e);return r.forEach(c=>a.insert(c)),a}insert(t){if(this.Ie===0)return;const e=Ho(t),[r,i]=Xo(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,i,o);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class en extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(t,e,r,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,In.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Er(q.min(),i,new tt(H),zt(),G())}}class In{constructor(t,e,r,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new In(r,e,G(),G(),G())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(t,e,r,i){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=i}}class du{constructor(t,e){this.targetId=t,this.me=e}}class pu{constructor(t,e,r=Et.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class Yo{constructor(){this.fe=0,this.ge=Zo(),this.pe=Et.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}Ce(){let t=G(),e=G(),r=G();return this.ge.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:F()}}),new In(this.pe,this.ye,t,e,r)}ve(){this.we=!1,this.ge=Zo()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,Y(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class cf{constructor(t){this.Le=t,this.Be=new Map,this.ke=zt(),this.qe=Jo(),this.Qe=new tt(H)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:F()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,i)=>{this.ze(i)&&e(i)})}He(t){const e=t.targetId,r=t.me.count,i=this.Je(e);if(i){const o=i.target;if(vi(o))if(r===0){const a=new M(o.path);this.Ue(e,a,yt.newNoDocument(a,q.min()))}else Y(r===1);else{const a=this.Ye(e);if(a!==r){const c=this.Ze(t),h=c?this.Xe(c,t,a):1;if(h!==0){this.je(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,f)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=e;let a,c;try{a=he(r).toUint8Array()}catch(h){if(h instanceof $a)return Re("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new Hi(a,i,o)}catch(h){return Re(h instanceof en?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.Ie===0?null:c}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let i=0;return r.forEach(o=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.Ue(e,o,null),i++)}),i}rt(t){const e=new Map;this.Be.forEach((o,a)=>{const c=this.Je(a);if(c){if(o.current&&vi(c.target)){const h=new M(c.target.path);this.ke.get(h)!==null||this.it(a,h)||this.Ue(a,h,yt.newNoDocument(h,t))}o.be&&(e.set(a,o.Ce()),o.ve())}});let r=G();this.qe.forEach((o,a)=>{let c=!0;a.forEachWhile(h=>{const f=this.Je(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(t));const i=new Er(t,e,this.Qe,this.ke,r);return this.ke=zt(),this.qe=Jo(),this.Qe=new tt(H),i}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,e)?i.Fe(e,1):i.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).Ce();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Yo,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new ht(H),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||x("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Yo),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Jo(){return new tt(M.comparator)}function Zo(){return new tt(M.comparator)}const lf={asc:"ASCENDING",desc:"DESCENDING"},hf={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ff={and:"AND",or:"OR"};class df{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ai(n,t){return n.useProto3Json||pr(t)?t:{value:t}}function ar(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function gu(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function pf(n,t){return ar(n,t.toTimestamp())}function Ot(n){return Y(!!n),q.fromTimestamp(function(e){const r=Zt(e);return new ot(r.seconds,r.nanos)}(n))}function Xi(n,t){return Ri(n,t).canonicalString()}function Ri(n,t){const e=function(i){return new Z(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function mu(n){const t=Z.fromString(n);return Y(vu(t)),t}function Pi(n,t){return Xi(n.databaseId,t.path)}function oi(n,t){const e=mu(t);if(e.get(1)!==n.databaseId.projectId)throw new N(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new N(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new M(yu(e))}function _u(n,t){return Xi(n.databaseId,t)}function gf(n){const t=mu(n);return t.length===4?Z.emptyPath():yu(t)}function Si(n){return new Z(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function yu(n){return Y(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function ta(n,t,e){return{name:Pi(n,t),fields:e.value.mapValue.fields}}function mf(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:F()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(f,p){return f.useProto3Json?(Y(p===void 0||typeof p=="string"),Et.fromBase64String(p||"")):(Y(p===void 0||p instanceof Buffer||p instanceof Uint8Array),Et.fromUint8Array(p||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(f){const p=f.code===void 0?V.UNKNOWN:fu(f.code);return new N(p,f.message||"")}(a);e=new pu(r,i,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=oi(n,r.document.name),o=Ot(r.document.updateTime),a=r.document.createTime?Ot(r.document.createTime):q.min(),c=new Rt({mapValue:{fields:r.document.fields}}),h=yt.newFoundDocument(i,o,a,c),f=r.targetIds||[],p=r.removedTargetIds||[];e=new er(f,p,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=oi(n,r.document),o=r.readTime?Ot(r.readTime):q.min(),a=yt.newNoDocument(i,o),c=r.removedTargetIds||[];e=new er([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=oi(n,r.document),o=r.removedTargetIds||[];e=new er([],o,i,null)}else{if(!("filter"in t))return F();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,a=new sf(i,o),c=r.targetId;e=new du(c,a)}}return e}function _f(n,t){let e;if(t instanceof vn)e={update:ta(n,t.key,t.value)};else if(t instanceof Ki)e={delete:Pi(n,t.key)};else if(t instanceof ne)e={update:ta(n,t.key,t.data),updateMask:Pf(t.fieldMask)};else{if(!(t instanceof ef))return F();e={verify:Pi(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const c=a.transform;if(c instanceof mn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof _n)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof yn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof or)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw F()}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:pf(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:F()}(n,t.precondition)),e}function yf(n,t){return n&&n.length>0?(Y(t!==void 0),n.map(e=>function(i,o){let a=i.updateTime?Ot(i.updateTime):Ot(o);return a.isEqual(q.min())&&(a=Ot(o)),new Jh(a,i.transformResults||[])}(e,t))):[]}function Tf(n,t){return{documents:[_u(n,t.path)]}}function Ef(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=_u(n,i);const o=function(f){if(f.length!==0)return Eu(xt.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(f){if(f.length!==0)return f.map(p=>function(A){return{field:Ie(A.field),direction:wf(A.dir)}}(p))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const c=Ai(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{_t:e,parent:i}}function vf(n){let t=gf(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){Y(r===1);const p=e.from[0];p.allDescendants?i=p.collectionId:t=t.child(p.collectionId)}let o=[];e.where&&(o=function(v){const A=Tu(v);return A instanceof xt&&Wa(A)?A.getFilters():[A]}(e.where));let a=[];e.orderBy&&(a=function(v){return v.map(A=>function(D){return new gn(we(D.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(A))}(e.orderBy));let c=null;e.limit&&(c=function(v){let A;return A=typeof v=="object"?v.value:v,pr(A)?null:A}(e.limit));let h=null;e.startAt&&(h=function(v){const A=!!v.before,S=v.values||[];return new sr(S,A)}(e.startAt));let f=null;return e.endAt&&(f=function(v){const A=!v.before,S=v.values||[];return new sr(S,A)}(e.endAt)),Fh(t,i,a,o,c,"F",h,f)}function If(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Tu(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=we(e.unaryFilter.field);return it.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=we(e.unaryFilter.field);return it.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=we(e.unaryFilter.field);return it.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=we(e.unaryFilter.field);return it.create(a,"!=",{nullValue:"NULL_VALUE"});default:return F()}}(n):n.fieldFilter!==void 0?function(e){return it.create(we(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return xt.create(e.compositeFilter.filters.map(r=>Tu(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return F()}}(e.compositeFilter.op))}(n):F()}function wf(n){return lf[n]}function Af(n){return hf[n]}function Rf(n){return ff[n]}function Ie(n){return{fieldPath:n.canonicalString()}}function we(n){return lt.fromServerFormat(n.fieldPath)}function Eu(n){return n instanceof it?function(e){if(e.op==="=="){if(qo(e.value))return{unaryFilter:{field:Ie(e.field),op:"IS_NAN"}};if(Uo(e.value))return{unaryFilter:{field:Ie(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(qo(e.value))return{unaryFilter:{field:Ie(e.field),op:"IS_NOT_NAN"}};if(Uo(e.value))return{unaryFilter:{field:Ie(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ie(e.field),op:Af(e.op),value:e.value}}}(n):n instanceof xt?function(e){const r=e.getFilters().map(i=>Eu(i));return r.length===1?r[0]:{compositeFilter:{op:Rf(e.op),filters:r}}}(n):F()}function Pf(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function vu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(t,e,r,i,o=q.min(),a=q.min(),c=Et.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new Ht(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(t){this.ct=t}}function Vf(n){const t=vf({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?wi(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(){this._n=new bf}addToCollectionParentIndex(t,e){return this._n.add(e),C.resolve()}getCollectionParents(t,e){return C.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return C.resolve()}deleteFieldIndex(t,e){return C.resolve()}deleteAllFieldIndexes(t){return C.resolve()}createTargetIndexes(t,e){return C.resolve()}getDocumentsMatchingTarget(t,e){return C.resolve(null)}getIndexType(t,e){return C.resolve(0)}getFieldIndexes(t,e){return C.resolve([])}getNextCollectionGroupToUpdate(t){return C.resolve(null)}getMinOffset(t,e){return C.resolve(Jt.min())}getMinOffsetFromCollectionGroup(t,e){return C.resolve(Jt.min())}updateCollectionGroup(t,e,r){return C.resolve()}updateIndexEntries(t,e){return C.resolve()}}class bf{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new ht(Z.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new ht(Z.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Ce(0)}static Ln(){return new Ce(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(){this.changes=new xe(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,yt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?C.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&un(r.mutation,i,Vt.empty(),ot.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,G()).next(()=>r))}getLocalViewOfDocuments(t,e,r=G()){const i=ae();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(o=>{let a=tn();return o.forEach((c,h)=>{a=a.insert(c,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=ae();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,G()))}populateOverlays(t,e,r){const i=[];return r.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((a,c)=>{e.set(a,c)})})}computeViews(t,e,r,i){let o=zt();const a=an(),c=function(){return an()}();return e.forEach((h,f)=>{const p=r.get(f.key);i.has(f.key)&&(p===void 0||p.mutation instanceof ne)?o=o.insert(f.key,f):p!==void 0?(a.set(f.key,p.mutation.getFieldMask()),un(p.mutation,f,p.mutation.getFieldMask(),ot.now())):a.set(f.key,Vt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,p)=>a.set(f,p)),e.forEach((f,p)=>{var v;return c.set(f,new kf(p,(v=a.get(f))!==null&&v!==void 0?v:null))}),c))}recalculateAndSaveOverlays(t,e){const r=an();let i=new tt((a,c)=>a-c),o=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const c of a)c.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let p=r.get(h)||Vt.empty();p=c.applyToLocalView(f,p),r.set(h,p);const v=(i.get(c.batchId)||G()).add(h);i=i.insert(c.batchId,v)})}).next(()=>{const a=[],c=i.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),f=h.key,p=h.value,v=ru();p.forEach(A=>{if(!o.has(A)){const S=lu(e.get(A),r.get(A));S!==null&&v.set(A,S),o=o.add(A)}}),a.push(this.documentOverlayCache.saveOverlays(t,f,v))}return C.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(a){return M.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Ja(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):C.resolve(ae());let c=-1,h=o;return a.next(f=>C.forEach(f,(p,v)=>(c<v.largestBatchId&&(c=v.largestBatchId),o.get(p)?C.resolve():this.remoteDocumentCache.getEntry(t,p).next(A=>{h=h.insert(p,A)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,G())).next(p=>({batchId:c,changes:nu(p)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next(r=>{let i=tn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let a=tn();return this.indexManager.getCollectionParents(t,o).next(c=>C.forEach(c,h=>{const f=function(v,A){return new Ne(A,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,i).next(p=>{p.forEach((v,A)=>{a=a.insert(v,A)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i))).next(a=>{o.forEach((h,f)=>{const p=f.getKey();a.get(p)===null&&(a=a.insert(p,yt.newInvalidDocument(p)))});let c=tn();return a.forEach((h,f)=>{const p=o.get(h);p!==void 0&&un(p.mutation,f,Vt.empty(),ot.now()),_r(e,f)&&(c=c.insert(h,f))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return C.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:Ot(i.createTime)}}(e)),C.resolve()}getNamedQuery(t,e){return C.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(i){return{name:i.name,query:Vf(i.bundledQuery),readTime:Ot(i.readTime)}}(e)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(){this.overlays=new tt(M.comparator),this.hr=new Map}getOverlay(t,e){return C.resolve(this.overlays.get(e))}getOverlays(t,e){const r=ae();return C.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,o)=>{this.ht(t,e,o)}),C.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.hr.delete(r)),C.resolve()}getOverlaysForCollection(t,e,r){const i=ae(),o=e.length+1,a=new M(e.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const h=c.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return C.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new tt((f,p)=>f-p);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let p=o.get(f.largestBatchId);p===null&&(p=ae(),o=o.insert(f.largestBatchId,p)),p.set(f.getKey(),f)}}const c=ae(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,p)=>c.set(f,p)),!(c.size()>=i)););return C.resolve(c)}ht(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new rf(e,r));let o=this.hr.get(e);o===void 0&&(o=G(),this.hr.set(e,o)),this.hr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(){this.Pr=new ht(at.Ir),this.Tr=new ht(at.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const r=new at(t,e);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Ar(new at(t,e))}Rr(t,e){t.forEach(r=>this.removeReference(r,e))}Vr(t){const e=new M(new Z([])),r=new at(e,t),i=new at(e,t+1),o=[];return this.Tr.forEachInRange([r,i],a=>{this.Ar(a),o.push(a.key)}),o}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new M(new Z([])),r=new at(e,t),i=new at(e,t+1);let o=G();return this.Tr.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new at(t,0),r=this.Pr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class at{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return M.comparator(t.key,e.key)||H(t.pr,e.pr)}static Er(t,e){return H(t.pr,e.pr)||M.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new ht(at.Ir)}checkEmpty(t){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new nf(o,e,r,i);this.mutationQueue.push(a);for(const c of i)this.wr=this.wr.add(new at(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return C.resolve(a)}lookupMutationBatch(t,e){return C.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.br(r),o=i<0?0:i;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new at(e,0),i=new at(e,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([r,i],a=>{const c=this.Sr(a.pr);o.push(c)}),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new ht(H);return e.forEach(i=>{const o=new at(i,0),a=new at(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([o,a],c=>{r=r.add(c.pr)})}),C.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;M.isDocumentKey(o)||(o=o.child(""));const a=new at(new M(o),0);let c=new ht(H);return this.wr.forEachWhile(h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===i&&(c=c.add(h.pr)),!0)},a),C.resolve(this.Dr(c))}Dr(t){const e=[];return t.forEach(r=>{const i=this.Sr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){Y(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return C.forEach(e.mutations,i=>{const o=new at(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,e){const r=new at(e,0),i=this.wr.firstAfterOrEqual(r);return C.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,C.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(t){this.vr=t,this.docs=function(){return new tt(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,a=this.vr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return C.resolve(r?r.document.mutableCopy():yt.newInvalidDocument(e))}getEntries(t,e){let r=zt();return e.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():yt.newInvalidDocument(i))}),C.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=zt();const a=e.path,c=new M(a.child("")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:f,value:{document:p}}=h.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||Eh(Th(p),r)<=0||(i.has(p.key)||_r(e,p))&&(o=o.insert(p.key,p.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(t,e,r,i){F()}Fr(t,e){return C.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Ff(this)}getSize(t){return C.resolve(this.size)}}class Ff extends Df{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.ar.addEntry(t,i)):this.ar.removeEntry(r)}),C.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(t){this.persistence=t,this.Mr=new xe(e=>Gi(e),Qi),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Yi,this.targetCount=0,this.Lr=Ce.Nn()}forEachTarget(t,e){return this.Mr.forEach((r,i)=>e(i)),C.resolve()}getLastRemoteSnapshotVersion(t){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return C.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Or&&(this.Or=e),C.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new Ce(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,C.resolve()}updateTargetData(t,e){return this.qn(e),C.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,C.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.Mr.forEach((a,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.Mr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),i++)}),C.waitFor(o).next(()=>i)}getTargetCount(t){return C.resolve(this.targetCount)}getTargetData(t,e){const r=this.Mr.get(e)||null;return C.resolve(r)}addMatchingKeys(t,e,r){return this.Nr.dr(e,r),C.resolve()}removeMatchingKeys(t,e,r){this.Nr.Rr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(a=>{o.push(i.markPotentiallyOrphaned(t,a))}),C.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),C.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Nr.gr(e);return C.resolve(r)}containsKey(t,e){return C.resolve(this.Nr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(t,e){this.Br={},this.overlays={},this.kr=new ji(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new Uf(this),this.indexManager=new Cf,this.remoteDocumentCache=function(i){return new Lf(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new Sf(e),this.$r=new xf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Mf,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Br[t.toKey()];return r||(r=new Of(e,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,r){x("MemoryPersistence","Starting transaction:",t);const i=new jf(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(o=>this.referenceDelegate.Wr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Gr(t,e){return C.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,e)))}}class jf extends Ih{constructor(t){super(),this.currentSequenceNumber=t}}class Ji{constructor(t){this.persistence=t,this.zr=new Yi,this.jr=null}static Hr(t){return new Ji(t)}get Jr(){if(this.jr)return this.jr;throw F()}addReference(t,e,r){return this.zr.addReference(r,e),this.Jr.delete(r.toString()),C.resolve()}removeReference(t,e,r){return this.zr.removeReference(r,e),this.Jr.add(r.toString()),C.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),C.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.Jr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Jr,r=>{const i=M.fromPath(r);return this.Yr(t,i).next(o=>{o||e.removeEntry(i,q.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(r=>{r?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return C.or([()=>C.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.qi=r,this.Qi=i}static Ki(t,e){let r=G(),i=G();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Zi(t,e.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Zc()?8:wh(tl())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.ji(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Hi(t,e,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Bf;return this.Ji(t,e,a).next(c=>{if(o.result=c,this.Ui)return this.Yi(t,e,a,c.size)})}).next(()=>o.result)}Yi(t,e,r,i){return r.documentReadCount<this.Wi?(Je()<=Wt.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",ve(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),C.resolve()):(Je()<=Wt.DEBUG&&x("QueryEngine","Query:",ve(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Je()<=Wt.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",ve(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Mt(e))):C.resolve())}ji(t,e){if($o(e))return C.resolve(null);let r=Mt(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=wi(e,null,"F"),r=Mt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=G(...o);return this.zi.getDocuments(t,a).next(c=>this.indexManager.getMinOffset(t,r).next(h=>{const f=this.Zi(e,c);return this.Xi(e,f,a,h.readTime)?this.ji(t,wi(e,null,"F")):this.es(t,f,e,h)}))})))}Hi(t,e,r,i){return $o(e)||i.isEqual(q.min())?C.resolve(null):this.zi.getDocuments(t,r).next(o=>{const a=this.Zi(e,o);return this.Xi(e,a,r,i)?C.resolve(null):(Je()<=Wt.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ve(e)),this.es(t,a,e,yh(i,-1)).next(c=>c))})}Zi(t,e){let r=new ht(tu(t));return e.forEach((i,o)=>{_r(t,o)&&(r=r.add(o))}),r}Xi(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ji(t,e,r){return Je()<=Wt.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",ve(e)),this.zi.getDocumentsMatchingQuery(t,e,Jt.min(),r)}es(t,e,r,i){return this.zi.getDocumentsMatchingQuery(t,r,i).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(t,e,r,i){this.persistence=t,this.ts=e,this.serializer=i,this.ns=new tt(H),this.rs=new xe(o=>Gi(o),Qi),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Nf(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function Gf(n,t,e,r){return new $f(n,t,e,r)}async function Iu(n,t){const e=j(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,e._s(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],c=[];let h=G();for(const f of i){a.push(f.batchId);for(const p of f.mutations)h=h.add(p.key)}for(const f of o){c.push(f.batchId);for(const p of f.mutations)h=h.add(p.key)}return e.localDocuments.getDocuments(r,h).next(f=>({us:f,removedBatchIds:a,addedBatchIds:c}))})})}function Qf(n,t){const e=j(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),o=e.os.newChangeBuffer({trackRemovals:!0});return function(c,h,f,p){const v=f.batch,A=v.keys();let S=C.resolve();return A.forEach(D=>{S=S.next(()=>p.getEntry(h,D)).next(k=>{const P=f.docVersions.get(D);Y(P!==null),k.version.compareTo(P)<0&&(v.applyToRemoteDocument(k,f),k.isValidDocument()&&(k.setReadTime(f.commitVersion),p.addEntry(k)))})}),S.next(()=>c.mutationQueue.removeMutationBatch(h,v))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let h=G();for(let f=0;f<c.mutationResults.length;++f)c.mutationResults[f].transformResults.length>0&&(h=h.add(c.batch.mutations[f].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function wu(n){const t=j(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function Kf(n,t){const e=j(n),r=t.snapshotVersion;let i=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.os.newChangeBuffer({trackRemovals:!0});i=e.ns;const c=[];t.targetChanges.forEach((p,v)=>{const A=i.get(v);if(!A)return;c.push(e.Qr.removeMatchingKeys(o,p.removedDocuments,v).next(()=>e.Qr.addMatchingKeys(o,p.addedDocuments,v)));let S=A.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(v)!==null?S=S.withResumeToken(Et.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):p.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(p.resumeToken,r)),i=i.insert(v,S),function(k,P,B){return k.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(A,S,p)&&c.push(e.Qr.updateTargetData(o,S))});let h=zt(),f=G();if(t.documentUpdates.forEach(p=>{t.resolvedLimboDocuments.has(p)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,p))}),c.push(Wf(o,a,t.documentUpdates).next(p=>{h=p.cs,f=p.ls})),!r.isEqual(q.min())){const p=e.Qr.getLastRemoteSnapshotVersion(o).next(v=>e.Qr.setTargetsMetadata(o,o.currentSequenceNumber,r));c.push(p)}return C.waitFor(c).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(e.ns=i,o))}function Wf(n,t,e){let r=G(),i=G();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=zt();return e.forEach((c,h)=>{const f=o.get(c);h.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(c)),h.isNoDocument()&&h.version.isEqual(q.min())?(t.removeEntry(c,h.readTime),a=a.insert(c,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),a=a.insert(c,h)):x("LocalStore","Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",h.version)}),{cs:a,ls:i}})}function Hf(n,t){const e=j(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Xf(n,t){const e=j(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.Qr.getTargetData(r,t).next(o=>o?(i=o,C.resolve(i)):e.Qr.allocateTargetId(r).next(a=>(i=new Ht(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.ns=e.ns.insert(r.targetId,r),e.rs.set(t,r.targetId)),r})}async function Vi(n,t,e){const r=j(n),i=r.ns.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!En(a))throw a;x("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.ns=r.ns.remove(t),r.rs.delete(i.target)}function ea(n,t,e){const r=j(n);let i=q.min(),o=G();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,f,p){const v=j(h),A=v.rs.get(p);return A!==void 0?C.resolve(v.ns.get(A)):v.Qr.getTargetData(f,p)}(r,a,Mt(t)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(a,c.targetId).next(h=>{o=h})}).next(()=>r.ts.getDocumentsMatchingQuery(a,t,e?i:q.min(),e?o:G())).next(c=>(Yf(r,qh(t),c),{documents:c,hs:o})))}function Yf(n,t,e){let r=n.ss.get(t)||q.min();e.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.ss.set(t,r)}class na{constructor(){this.activeTargetIds=Qh()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Jf{constructor(){this.no=new na,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,r){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new na,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{io(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wn=null;function ai(){return Wn===null?Wn=function(){return 268435456+Math.round(2147483648*Math.random())}():Wn++,"0x"+Wn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}Ao(t){this.Ro=t}onMessage(t){this.Vo=t}close(){this.ho()}send(t){this.lo(t)}mo(){this.Io()}fo(){this.Eo()}po(t){this.Ro(t)}yo(t){this.Vo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="WebChannelConnection";class nd extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+e.host,this.So=`projects/${i}/databases/${o}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Do(){return!1}Co(e,r,i,o,a){const c=ai(),h=this.vo(e,r.toUriEncodedString());x("RestConnection",`Sending RPC '${e}' ${c}:`,h,i);const f={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(f,o,a),this.Mo(e,h,f,i).then(p=>(x("RestConnection",`Received RPC '${e}' ${c}: `,p),p),p=>{throw Re("RestConnection",`RPC '${e}' ${c} failed with error: `,p,"url: ",h,"request:",i),p})}xo(e,r,i,o,a,c){return this.Co(e,r,i,o,a)}Fo(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ke}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>e[a]=o),i&&i.headers.forEach((o,a)=>e[a]=o)}vo(e,r){const i=td[e];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Mo(t,e,r,i){const o=ai();return new Promise((a,c)=>{const h=new Ma;h.setWithCredentials(!0),h.listenOnce(La.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Jn.NO_ERROR:const p=h.getResponseJson();x(mt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(p)),a(p);break;case Jn.TIMEOUT:x(mt,`RPC '${t}' ${o} timed out`),c(new N(V.DEADLINE_EXCEEDED,"Request time out"));break;case Jn.HTTP_ERROR:const v=h.getStatus();if(x(mt,`RPC '${t}' ${o} failed with status:`,v,"response text:",h.getResponseText()),v>0){let A=h.getResponseJson();Array.isArray(A)&&(A=A[0]);const S=A==null?void 0:A.error;if(S&&S.status&&S.message){const D=function(P){const B=P.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(B)>=0?B:V.UNKNOWN}(S.status);c(new N(D,S.message))}else c(new N(V.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new N(V.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{x(mt,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(i);x(mt,`RPC '${t}' ${o} sending request:`,i),h.send(e,"POST",f,r,15)})}Oo(t,e,r){const i=ai(),o=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=qa(),c=Ua(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.xmlHttpFactory=new Oa({})),this.Fo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const p=o.join("");x(mt,`Creating RPC '${t}' stream ${i}: ${p}`,h);const v=a.createWebChannel(p,h);let A=!1,S=!1;const D=new ed({lo:P=>{S?x(mt,`Not sending because RPC '${t}' stream ${i} is closed:`,P):(A||(x(mt,`Opening RPC '${t}' stream ${i} transport.`),v.open(),A=!0),x(mt,`RPC '${t}' stream ${i} sending:`,P),v.send(P))},ho:()=>v.close()}),k=(P,B,$)=>{P.listen(B,L=>{try{$(L)}catch(z){setTimeout(()=>{throw z},0)}})};return k(v,Ze.EventType.OPEN,()=>{S||(x(mt,`RPC '${t}' stream ${i} transport opened.`),D.mo())}),k(v,Ze.EventType.CLOSE,()=>{S||(S=!0,x(mt,`RPC '${t}' stream ${i} transport closed`),D.po())}),k(v,Ze.EventType.ERROR,P=>{S||(S=!0,Re(mt,`RPC '${t}' stream ${i} transport errored:`,P),D.po(new N(V.UNAVAILABLE,"The operation could not be completed")))}),k(v,Ze.EventType.MESSAGE,P=>{var B;if(!S){const $=P.data[0];Y(!!$);const L=$,z=L.error||((B=L[0])===null||B===void 0?void 0:B.error);if(z){x(mt,`RPC '${t}' stream ${i} received error:`,z);const ft=z.status;let U=function(m){const y=nt[m];if(y!==void 0)return fu(y)}(ft),T=z.message;U===void 0&&(U=V.INTERNAL,T="Unknown error status: "+ft+" with message "+z.message),S=!0,D.po(new N(U,T)),v.close()}else x(mt,`RPC '${t}' stream ${i} received:`,$),D.yo($)}}),k(c,Fa.STAT_EVENT,P=>{P.stat===_i.PROXY?x(mt,`RPC '${t}' stream ${i} detected buffering proxy`):P.stat===_i.NOPROXY&&x(mt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{D.fo()},0),D}}function ui(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(n){return new df(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(t,e,r=1e3,i=1.5,o=6e4){this.oi=t,this.timerId=e,this.No=r,this.Lo=i,this.Bo=o,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const e=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,e-r);i>0&&x("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),t())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(t,e,r,i,o,a,c,h){this.oi=t,this.Go=r,this.zo=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new Au(t,e)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(t){this.s_(),this.stream.send(t)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(t,e){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,t!==4?this.Yo.reset():e&&e.code===V.RESOURCE_EXHAUSTED?(Bt(e.toString()),Bt("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):e&&e.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ao(e)}__(){}auth(){this.state=1;const t=this.a_(this.jo),e=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===e&&this.u_(r,i)},r=>{t(()=>{const i=new N(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(t,e){const r=this.a_(this.jo);this.stream=this.l_(t,e),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(t){return x("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}a_(t){return e=>{this.oi.enqueueAndForget(()=>this.jo===t?e():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rd extends Ru{constructor(t,e,r,i,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,a),this.serializer=o}l_(t,e){return this.connection.Oo("Listen",t,e)}onMessage(t){this.Yo.reset();const e=mf(this.serializer,t),r=function(o){if(!("targetChange"in o))return q.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?q.min():a.readTime?Ot(a.readTime):q.min()}(t);return this.listener.h_(e,r)}P_(t){const e={};e.database=Si(this.serializer),e.addTarget=function(o,a){let c;const h=a.target;if(c=vi(h)?{documents:Tf(o,h)}:{query:Ef(o,h)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=gu(o,a.resumeToken);const f=Ai(o,a.expectedCount);f!==null&&(c.expectedCount=f)}else if(a.snapshotVersion.compareTo(q.min())>0){c.readTime=ar(o,a.snapshotVersion.toTimestamp());const f=Ai(o,a.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,t);const r=If(this.serializer,t);r&&(e.labels=r),this.i_(e)}I_(t){const e={};e.database=Si(this.serializer),e.removeTarget=t,this.i_(e)}}class id extends Ru{constructor(t,e,r,i,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,a),this.serializer=o,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(t,e){return this.connection.Oo("Write",t,e)}onMessage(t){if(Y(!!t.streamToken),this.lastStreamToken=t.streamToken,this.T_){this.Yo.reset();const e=yf(t.writeResults,t.commitTime),r=Ot(t.commitTime);return this.listener.A_(r,e)}return Y(!t.writeResults||t.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const t={};t.database=Si(this.serializer),this.i_(t)}d_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>_f(this.serializer,r))};this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new N(V.FAILED_PRECONDITION,"The client has already been terminated.")}Co(t,e,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Co(t,Ri(e,r),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(V.UNKNOWN,o.toString())})}xo(t,e,r,i,o){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.xo(t,Ri(e,r),i,a,c,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new N(V.UNKNOWN,a.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class od{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(t){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,t==="Online"&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Bt(e),this.y_=!1):x("OnlineStateTracker",e)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=o,this.O_.io(a=>{r.enqueueAndForget(async()=>{pe(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(h){const f=j(h);f.M_.add(4),await wn(f),f.N_.set("Unknown"),f.M_.delete(4),await Ir(f)}(this))})}),this.N_=new od(r,i)}}async function Ir(n){if(pe(n))for(const t of n.x_)await t(!0)}async function wn(n){for(const t of n.x_)await t(!1)}function Pu(n,t){const e=j(n);e.F_.has(t.targetId)||(e.F_.set(t.targetId,t),rs(e)?ns(e):Me(e).Xo()&&es(e,t))}function ts(n,t){const e=j(n),r=Me(e);e.F_.delete(t),r.Xo()&&Su(e,t),e.F_.size===0&&(r.Xo()?r.n_():pe(e)&&e.N_.set("Unknown"))}function es(n,t){if(n.L_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(q.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Me(n).P_(t)}function Su(n,t){n.L_.xe(t),Me(n).I_(t)}function ns(n){n.L_=new cf({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.F_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),Me(n).start(),n.N_.w_()}function rs(n){return pe(n)&&!Me(n).Zo()&&n.F_.size>0}function pe(n){return j(n).M_.size===0}function Vu(n){n.L_=void 0}async function ud(n){n.N_.set("Online")}async function cd(n){n.F_.forEach((t,e)=>{es(n,t)})}async function ld(n,t){Vu(n),rs(n)?(n.N_.D_(t),ns(n)):n.N_.set("Unknown")}async function hd(n,t,e){if(n.N_.set("Online"),t instanceof pu&&t.state===2&&t.cause)try{await async function(i,o){const a=o.cause;for(const c of o.targetIds)i.F_.has(c)&&(await i.remoteSyncer.rejectListen(c,a),i.F_.delete(c),i.L_.removeTarget(c))}(n,t)}catch(r){x("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await ur(n,r)}else if(t instanceof er?n.L_.Ke(t):t instanceof du?n.L_.He(t):n.L_.We(t),!e.isEqual(q.min()))try{const r=await wu(n.localStore);e.compareTo(r)>=0&&await function(o,a){const c=o.L_.rt(a);return c.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const p=o.F_.get(f);p&&o.F_.set(f,p.withResumeToken(h.resumeToken,a))}}),c.targetMismatches.forEach((h,f)=>{const p=o.F_.get(h);if(!p)return;o.F_.set(h,p.withResumeToken(Et.EMPTY_BYTE_STRING,p.snapshotVersion)),Su(o,h);const v=new Ht(p.target,h,f,p.sequenceNumber);es(o,v)}),o.remoteSyncer.applyRemoteEvent(c)}(n,e)}catch(r){x("RemoteStore","Failed to raise snapshot:",r),await ur(n,r)}}async function ur(n,t,e){if(!En(t))throw t;n.M_.add(1),await wn(n),n.N_.set("Offline"),e||(e=()=>wu(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{x("RemoteStore","Retrying IndexedDB access"),await e(),n.M_.delete(1),await Ir(n)})}function Cu(n,t){return t().catch(e=>ur(n,e,t))}async function wr(n){const t=j(n),e=te(t);let r=t.v_.length>0?t.v_[t.v_.length-1].batchId:-1;for(;fd(t);)try{const i=await Hf(t.localStore,r);if(i===null){t.v_.length===0&&e.n_();break}r=i.batchId,dd(t,i)}catch(i){await ur(t,i)}bu(t)&&Du(t)}function fd(n){return pe(n)&&n.v_.length<10}function dd(n,t){n.v_.push(t);const e=te(n);e.Xo()&&e.E_&&e.d_(t.mutations)}function bu(n){return pe(n)&&!te(n).Zo()&&n.v_.length>0}function Du(n){te(n).start()}async function pd(n){te(n).V_()}async function gd(n){const t=te(n);for(const e of n.v_)t.d_(e.mutations)}async function md(n,t,e){const r=n.v_.shift(),i=Wi.from(r,t,e);await Cu(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await wr(n)}async function _d(n,t){t&&te(n).E_&&await async function(r,i){if(function(a){return of(a)&&a!==V.ABORTED}(i.code)){const o=r.v_.shift();te(r).t_(),await Cu(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await wr(r)}}(n,t),bu(n)&&Du(n)}async function ia(n,t){const e=j(n);e.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");const r=pe(e);e.M_.add(3),await wn(e),r&&e.N_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.M_.delete(3),await Ir(e)}async function yd(n,t){const e=j(n);t?(e.M_.delete(2),await Ir(e)):t||(e.M_.add(2),await wn(e),e.N_.set("Unknown"))}function Me(n){return n.B_||(n.B_=function(e,r,i){const o=j(e);return o.f_(),new rd(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Po:ud.bind(null,n),To:cd.bind(null,n),Ao:ld.bind(null,n),h_:hd.bind(null,n)}),n.x_.push(async t=>{t?(n.B_.t_(),rs(n)?ns(n):n.N_.set("Unknown")):(await n.B_.stop(),Vu(n))})),n.B_}function te(n){return n.k_||(n.k_=function(e,r,i){const o=j(e);return o.f_(),new id(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Po:()=>Promise.resolve(),To:pd.bind(null,n),Ao:_d.bind(null,n),R_:gd.bind(null,n),A_:md.bind(null,n)}),n.x_.push(async t=>{t?(n.k_.t_(),await wr(n)):(await n.k_.stop(),n.v_.length>0&&(x("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Xt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const a=Date.now()+r,c=new is(t,e,a,i,o);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(V.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ss(n,t){if(Bt("AsyncQueue",`${t}: ${n}`),En(n))return new N(V.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(t){this.comparator=t?(e,r)=>t(e,r)||M.comparator(e.key,r.key):(e,r)=>M.comparator(e.key,r.key),this.keyedMap=tn(),this.sortedSet=new tt(this.comparator)}static emptySet(t){return new Ae(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ae)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Ae;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(){this.q_=new tt(M.comparator)}track(t){const e=t.doc.key,r=this.q_.get(e);r?t.type!==0&&r.type===3?this.q_=this.q_.insert(e,t):t.type===3&&r.type!==1?this.q_=this.q_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.q_=this.q_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.q_=this.q_.remove(e):t.type===1&&r.type===2?this.q_=this.q_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):F():this.q_=this.q_.insert(e,t)}Q_(){const t=[];return this.q_.inorderTraversal((e,r)=>{t.push(r)}),t}}class be{constructor(t,e,r,i,o,a,c,h,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,i,o){const a=[];return e.forEach(c=>{a.push({type:0,doc:c})}),new be(t,e,Ae.emptySet(e),a,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&mr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(t=>t.G_())}}class Ed{constructor(){this.queries=new xe(t=>Za(t),mr),this.onlineState="Unknown",this.z_=new Set}}async function ku(n,t){const e=j(n);let r=3;const i=t.query;let o=e.queries.get(i);o?!o.W_()&&t.G_()&&(r=2):(o=new Td,r=t.G_()?0:1);try{switch(r){case 0:o.K_=await e.onListen(i,!0);break;case 1:o.K_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(a){const c=ss(a,`Initialization of query '${ve(t.query)}' failed`);return void t.onError(c)}e.queries.set(i,o),o.U_.push(t),t.j_(e.onlineState),o.K_&&t.H_(o.K_)&&os(e)}async function Nu(n,t){const e=j(n),r=t.query;let i=3;const o=e.queries.get(r);if(o){const a=o.U_.indexOf(t);a>=0&&(o.U_.splice(a,1),o.U_.length===0?i=t.G_()?0:1:!o.W_()&&t.G_()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function vd(n,t){const e=j(n);let r=!1;for(const i of t){const o=i.query,a=e.queries.get(o);if(a){for(const c of a.U_)c.H_(i)&&(r=!0);a.K_=i}}r&&os(e)}function Id(n,t,e){const r=j(n),i=r.queries.get(t);if(i)for(const o of i.U_)o.onError(e);r.queries.delete(t)}function os(n){n.z_.forEach(t=>{t.next()})}var Ci,oa;(oa=Ci||(Ci={})).J_="default",oa.Cache="cache";class xu{constructor(t,e,r){this.query=t,this.Y_=e,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new be(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Z_?this.ea(t)&&(this.Y_.next(t),e=!0):this.ta(t,this.onlineState)&&(this.na(t),e=!0),this.X_=t,e}onError(t){this.Y_.error(t)}j_(t){this.onlineState=t;let e=!1;return this.X_&&!this.Z_&&this.ta(this.X_,t)&&(this.na(this.X_),e=!0),e}ta(t,e){if(!t.fromCache||!this.G_())return!0;const r=e!=="Offline";return(!this.options.ra||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ea(t){if(t.docChanges.length>0)return!0;const e=this.X_&&this.X_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}na(t){t=be.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Z_=!0,this.Y_.next(t)}G_(){return this.options.source!==Ci.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(t){this.key=t}}class Ou{constructor(t){this.key=t}}class wd{constructor(t,e){this.query=t,this.la=e,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=G(),this.mutatedKeys=G(),this.Ia=tu(t),this.Ta=new Ae(this.Ia)}get Ea(){return this.la}da(t,e){const r=e?e.Aa:new sa,i=e?e.Ta:this.Ta;let o=e?e.mutatedKeys:this.mutatedKeys,a=i,c=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((p,v)=>{const A=i.get(p),S=_r(this.query,v)?v:null,D=!!A&&this.mutatedKeys.has(A.key),k=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let P=!1;A&&S?A.data.isEqual(S.data)?D!==k&&(r.track({type:3,doc:S}),P=!0):this.Ra(A,S)||(r.track({type:2,doc:S}),P=!0,(h&&this.Ia(S,h)>0||f&&this.Ia(S,f)<0)&&(c=!0)):!A&&S?(r.track({type:0,doc:S}),P=!0):A&&!S&&(r.track({type:1,doc:A}),P=!0,(h||f)&&(c=!0)),P&&(S?(a=a.add(S),o=k?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),r.track({type:1,doc:p})}return{Ta:a,Aa:r,Xi:c,mutatedKeys:o}}Ra(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const o=this.Ta;this.Ta=t.Ta,this.mutatedKeys=t.mutatedKeys;const a=t.Aa.Q_();a.sort((p,v)=>function(S,D){const k=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return k(S)-k(D)}(p.type,v.type)||this.Ia(p.doc,v.doc)),this.Va(r),i=i!=null&&i;const c=e&&!i?this.ma():[],h=this.Pa.size===0&&this.current&&!i?1:0,f=h!==this.ha;return this.ha=h,a.length!==0||f?{snapshot:new be(this.query,t.Ta,o,a,t.mutatedKeys,h===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:c}:{fa:c}}j_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new sa,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(t){return!this.la.has(t)&&!!this.Ta.has(t)&&!this.Ta.get(t).hasLocalMutations}Va(t){t&&(t.addedDocuments.forEach(e=>this.la=this.la.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.la=this.la.delete(e)),this.current=t.current)}ma(){if(!this.current)return[];const t=this.Pa;this.Pa=G(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const e=[];return t.forEach(r=>{this.Pa.has(r)||e.push(new Ou(r))}),this.Pa.forEach(r=>{t.has(r)||e.push(new Mu(r))}),e}pa(t){this.la=t.hs,this.Pa=G();const e=this.da(t.documents);return this.applyChanges(e,!0)}ya(){return be.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class Ad{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Rd{constructor(t){this.key=t,this.wa=!1}}class Pd{constructor(t,e,r,i,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Sa={},this.ba=new xe(c=>Za(c),mr),this.Da=new Map,this.Ca=new Set,this.va=new tt(M.comparator),this.Fa=new Map,this.Ma=new Yi,this.xa={},this.Oa=new Map,this.Na=Ce.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function Sd(n,t,e=!0){const r=Bu(n);let i;const o=r.ba.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.ya()):i=await Lu(r,t,e,!0),i}async function Vd(n,t){const e=Bu(n);await Lu(e,t,!0,!1)}async function Lu(n,t,e,r){const i=await Xf(n.localStore,Mt(t)),o=i.targetId,a=e?n.sharedClientState.addLocalQueryTarget(o):"not-current";let c;return r&&(c=await Cd(n,t,o,a==="current",i.resumeToken)),n.isPrimaryClient&&e&&Pu(n.remoteStore,i),c}async function Cd(n,t,e,r,i){n.Ba=(v,A,S)=>async function(k,P,B,$){let L=P.view.da(B);L.Xi&&(L=await ea(k.localStore,P.query,!1).then(({documents:T})=>P.view.da(T,L)));const z=$&&$.targetChanges.get(P.targetId),ft=$&&$.targetMismatches.get(P.targetId)!=null,U=P.view.applyChanges(L,k.isPrimaryClient,z,ft);return ua(k,P.targetId,U.fa),U.snapshot}(n,v,A,S);const o=await ea(n.localStore,t,!0),a=new wd(t,o.hs),c=a.da(o.documents),h=In.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),f=a.applyChanges(c,n.isPrimaryClient,h);ua(n,e,f.fa);const p=new Ad(t,e,a);return n.ba.set(t,p),n.Da.has(e)?n.Da.get(e).push(t):n.Da.set(e,[t]),f.snapshot}async function bd(n,t,e){const r=j(n),i=r.ba.get(t),o=r.Da.get(i.targetId);if(o.length>1)return r.Da.set(i.targetId,o.filter(a=>!mr(a,t))),void r.ba.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Vi(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),e&&ts(r.remoteStore,i.targetId),bi(r,i.targetId)}).catch(Tn)):(bi(r,i.targetId),await Vi(r.localStore,i.targetId,!0))}async function Dd(n,t){const e=j(n),r=e.ba.get(t),i=e.Da.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),ts(e.remoteStore,r.targetId))}async function kd(n,t,e){const r=Ud(n);try{const i=await function(a,c){const h=j(a),f=ot.now(),p=c.reduce((S,D)=>S.add(D.key),G());let v,A;return h.persistence.runTransaction("Locally write mutations","readwrite",S=>{let D=zt(),k=G();return h.os.getEntries(S,p).next(P=>{D=P,D.forEach((B,$)=>{$.isValidDocument()||(k=k.add(B))})}).next(()=>h.localDocuments.getOverlayedDocuments(S,D)).next(P=>{v=P;const B=[];for(const $ of c){const L=tf($,v.get($.key).overlayedDocument);L!=null&&B.push(new ne($.key,L,Ga(L.value.mapValue),Ct.exists(!0)))}return h.mutationQueue.addMutationBatch(S,f,B,c)}).next(P=>{A=P;const B=P.applyToLocalDocumentSet(v,k);return h.documentOverlayCache.saveOverlays(S,P.batchId,B)})}).then(()=>({batchId:A.batchId,changes:nu(v)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(a,c,h){let f=a.xa[a.currentUser.toKey()];f||(f=new tt(H)),f=f.insert(c,h),a.xa[a.currentUser.toKey()]=f}(r,i.batchId,e),await An(r,i.changes),await wr(r.remoteStore)}catch(i){const o=ss(i,"Failed to persist write");e.reject(o)}}async function Fu(n,t){const e=j(n);try{const r=await Kf(e.localStore,t);t.targetChanges.forEach((i,o)=>{const a=e.Fa.get(o);a&&(Y(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.wa=!0:i.modifiedDocuments.size>0?Y(a.wa):i.removedDocuments.size>0&&(Y(a.wa),a.wa=!1))}),await An(e,r,t)}catch(r){await Tn(r)}}function aa(n,t,e){const r=j(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.ba.forEach((o,a)=>{const c=a.view.j_(t);c.snapshot&&i.push(c.snapshot)}),function(a,c){const h=j(a);h.onlineState=c;let f=!1;h.queries.forEach((p,v)=>{for(const A of v.U_)A.j_(c)&&(f=!0)}),f&&os(h)}(r.eventManager,t),i.length&&r.Sa.h_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Nd(n,t,e){const r=j(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Fa.get(t),o=i&&i.key;if(o){let a=new tt(M.comparator);a=a.insert(o,yt.newNoDocument(o,q.min()));const c=G().add(o),h=new Er(q.min(),new Map,new tt(H),a,c);await Fu(r,h),r.va=r.va.remove(o),r.Fa.delete(t),as(r)}else await Vi(r.localStore,t,!1).then(()=>bi(r,t,e)).catch(Tn)}async function xd(n,t){const e=j(n),r=t.batch.batchId;try{const i=await Qf(e.localStore,t);qu(e,r,null),Uu(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await An(e,i)}catch(i){await Tn(i)}}async function Md(n,t,e){const r=j(n);try{const i=await function(a,c){const h=j(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let p;return h.mutationQueue.lookupMutationBatch(f,c).next(v=>(Y(v!==null),p=v.keys(),h.mutationQueue.removeMutationBatch(f,v))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,p,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,p)).next(()=>h.localDocuments.getDocuments(f,p))})}(r.localStore,t);qu(r,t,e),Uu(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await An(r,i)}catch(i){await Tn(i)}}function Uu(n,t){(n.Oa.get(t)||[]).forEach(e=>{e.resolve()}),n.Oa.delete(t)}function qu(n,t,e){const r=j(n);let i=r.xa[r.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),r.xa[r.currentUser.toKey()]=i}}function bi(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Da.get(t))n.ba.delete(r),e&&n.Sa.ka(r,e);n.Da.delete(t),n.isPrimaryClient&&n.Ma.Vr(t).forEach(r=>{n.Ma.containsKey(r)||ju(n,r)})}function ju(n,t){n.Ca.delete(t.path.canonicalString());const e=n.va.get(t);e!==null&&(ts(n.remoteStore,e),n.va=n.va.remove(t),n.Fa.delete(e),as(n))}function ua(n,t,e){for(const r of e)r instanceof Mu?(n.Ma.addReference(r.key,t),Od(n,r)):r instanceof Ou?(x("SyncEngine","Document no longer in limbo: "+r.key),n.Ma.removeReference(r.key,t),n.Ma.containsKey(r.key)||ju(n,r.key)):F()}function Od(n,t){const e=t.key,r=e.path.canonicalString();n.va.get(e)||n.Ca.has(r)||(x("SyncEngine","New document in limbo: "+e),n.Ca.add(r),as(n))}function as(n){for(;n.Ca.size>0&&n.va.size<n.maxConcurrentLimboResolutions;){const t=n.Ca.values().next().value;n.Ca.delete(t);const e=new M(Z.fromString(t)),r=n.Na.next();n.Fa.set(r,new Rd(e)),n.va=n.va.insert(e,r),Pu(n.remoteStore,new Ht(Mt(gr(e.path)),r,"TargetPurposeLimboResolution",ji.oe))}}async function An(n,t,e){const r=j(n),i=[],o=[],a=[];r.ba.isEmpty()||(r.ba.forEach((c,h)=>{a.push(r.Ba(h,t,e).then(f=>{if((f||e)&&r.isPrimaryClient){const p=f&&!f.fromCache;r.sharedClientState.updateQueryState(h.targetId,p?"current":"not-current")}if(f){i.push(f);const p=Zi.Ki(h.targetId,f);o.push(p)}}))}),await Promise.all(a),r.Sa.h_(i),await async function(h,f){const p=j(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>C.forEach(f,A=>C.forEach(A.qi,S=>p.persistence.referenceDelegate.addReference(v,A.targetId,S)).next(()=>C.forEach(A.Qi,S=>p.persistence.referenceDelegate.removeReference(v,A.targetId,S)))))}catch(v){if(!En(v))throw v;x("LocalStore","Failed to update sequence numbers: "+v)}for(const v of f){const A=v.targetId;if(!v.fromCache){const S=p.ns.get(A),D=S.snapshotVersion,k=S.withLastLimboFreeSnapshotVersion(D);p.ns=p.ns.insert(A,k)}}}(r.localStore,o))}async function Ld(n,t){const e=j(n);if(!e.currentUser.isEqual(t)){x("SyncEngine","User change. New user:",t.toKey());const r=await Iu(e.localStore,t);e.currentUser=t,function(o,a){o.Oa.forEach(c=>{c.forEach(h=>{h.reject(new N(V.CANCELLED,a))})}),o.Oa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await An(e,r.us)}}function Fd(n,t){const e=j(n),r=e.Fa.get(t);if(r&&r.wa)return G().add(r.key);{let i=G();const o=e.Da.get(t);if(!o)return i;for(const a of o){const c=e.ba.get(a);i=i.unionWith(c.view.Ea)}return i}}function Bu(n){const t=j(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Fu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Fd.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Nd.bind(null,t),t.Sa.h_=vd.bind(null,t.eventManager),t.Sa.ka=Id.bind(null,t.eventManager),t}function Ud(n){const t=j(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=xd.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Md.bind(null,t),t}class ca{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=vr(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Gf(this.persistence,new zf,t.initialUser,this.serializer)}createPersistence(t){return new qf(Ji.Hr,this.serializer)}createSharedClientState(t){return new Jf}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class qd{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>aa(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ld.bind(null,this.syncEngine),await yd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Ed}()}createDatastore(t){const e=vr(t.databaseInfo.databaseId),r=function(o){return new nd(o)}(t.databaseInfo);return function(o,a,c,h){return new sd(o,a,c,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,o,a,c){return new ad(r,i,o,a,c)}(this.localStore,this.datastore,t.asyncQueue,e=>aa(this.syncEngine,e,0),function(){return ra.D()?new ra:new Zf}())}createSyncEngine(t,e){return function(i,o,a,c,h,f,p){const v=new Pd(i,o,a,c,h,f);return p&&(v.La=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(r){const i=j(r);x("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await wn(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ka(this.observer.next,t)}error(t){this.observer.error?this.Ka(this.observer.error,t):Bt("Uncaught Error in snapshot listener:",t.toString())}$a(){this.muted=!0}Ka(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(t,e,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=_t.UNAUTHENTICATED,this.clientId=Ba.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{x("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(x("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new N(V.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Xt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=ss(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function ci(n,t){n.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Iu(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function la(n,t){n.asyncQueue.verifyOperationInProgress();const e=await zd(n);x("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>ia(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>ia(t.remoteStore,i)),n._onlineComponents=t}function Bd(n){return n.name==="FirebaseError"?n.code===V.FAILED_PRECONDITION||n.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function zd(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){x("FirestoreClient","Using user provided OfflineComponentProvider");try{await ci(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!Bd(e))throw e;Re("Error using user provided cache. Falling back to memory cache: "+e),await ci(n,new ca)}}else x("FirestoreClient","Using default OfflineComponentProvider"),await ci(n,new ca);return n._offlineComponents}async function $u(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(x("FirestoreClient","Using user provided OnlineComponentProvider"),await la(n,n._uninitializedComponentsProvider._online)):(x("FirestoreClient","Using default OnlineComponentProvider"),await la(n,new qd))),n._onlineComponents}function $d(n){return $u(n).then(t=>t.syncEngine)}async function Di(n){const t=await $u(n),e=t.eventManager;return e.onListen=Sd.bind(null,t.syncEngine),e.onUnlisten=bd.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Vd.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Dd.bind(null,t.syncEngine),e}function Gd(n,t,e={}){const r=new Xt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,f){const p=new zu({next:A=>{a.enqueueAndForget(()=>Nu(o,v));const S=A.docs.has(c);!S&&A.fromCache?f.reject(new N(V.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&A.fromCache&&h&&h.source==="server"?f.reject(new N(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(A)},error:A=>f.reject(A)}),v=new xu(gr(c.path),p,{includeMetadataChanges:!0,ra:!0});return ku(o,v)}(await Di(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(n,t,e){if(!e)throw new N(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Qd(n,t,e,r){if(t===!0&&r===!0)throw new N(V.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function fa(n){if(!M.isDocumentKey(n))throw new N(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function da(n){if(M.isDocumentKey(n))throw new N(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ar(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":F()}function bt(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new N(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ar(n);throw new N(V.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new N(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new N(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Qd("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Gu((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new N(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new N(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new N(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Rr{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pa({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new N(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new N(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pa(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ch;switch(r.type){case"firstParty":return new dh(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=ha.get(e);r&&(x("ComponentProvider","Removing Datastore"),ha.delete(e),r.terminate())}(this),Promise.resolve()}}function Kd(n,t,e,r={}){var i;const o=(n=bt(n,Rr))._getSettings(),a=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&Re("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let c,h;if(typeof r.mockUserToken=="string")c=r.mockUserToken,h=_t.MOCK_USER;else{c=Jc(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new N(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new _t(f)}n._authCredentials=new lh(new ja(c,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new ge(this.firestore,t,this._query)}}class Tt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Yt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Tt(this.firestore,t,this._key)}}class Yt extends ge{constructor(t,e,r){super(t,e,gr(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Tt(this.firestore,null,new M(t))}withConverter(t){return new Yt(this.firestore,t,this._path)}}function ki(n,t,...e){if(n=Lt(n),Qu("collection","path",t),n instanceof Rr){const r=Z.fromString(t,...e);return da(r),new Yt(n,null,r)}{if(!(n instanceof Tt||n instanceof Yt))throw new N(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Z.fromString(t,...e));return da(r),new Yt(n.firestore,null,r)}}function cr(n,t,...e){if(n=Lt(n),arguments.length===1&&(t=Ba.newId()),Qu("doc","path",t),n instanceof Rr){const r=Z.fromString(t,...e);return fa(r),new Tt(n,null,new M(r))}{if(!(n instanceof Tt||n instanceof Yt))throw new N(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Z.fromString(t,...e));return fa(r),new Tt(n.firestore,n instanceof Yt?n.converter:null,new M(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new Au(this,"async_queue_retry"),this.hu=()=>{const e=ui();e&&x("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Yo.Wo()};const t=ui();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const e=ui();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const e=new Xt;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!En(t))throw t;x("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(t){const e=this.iu.then(()=>(this.uu=!0,t().catch(r=>{this.au=r,this.uu=!1;const i=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw Bt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=e,e}enqueueAfterDelay(t,e,r){this.Pu(),this.lu.indexOf(t)>-1&&(e=0);const i=is.createAndSchedule(this,t,e,r,o=>this.Eu(o));return this._u.push(i),i}Pu(){this.au&&F()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const e of this._u)if(e.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this._u)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const e=this._u.indexOf(t);this._u.splice(e,1)}}function ga(n){return function(e,r){if(typeof e!="object"||e===null)return!1;const i=e;for(const o of r)if(o in i&&typeof i[o]=="function")return!0;return!1}(n,["next","error","complete"])}class ee extends Rr{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=function(){return new Wd}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Wu(this),this._firestoreClient.terminate()}}function Ku(n,t){const e=Wc(),r="(default)",i=Hc(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Xc("firestore");o&&Kd(i,...o)}return i}function us(n){return n._firestoreClient||Wu(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Wu(n){var t,e,r;const i=n._freezeSettings(),o=function(c,h,f,p){return new Ph(c,h,f,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Gu(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new jd(n._authCredentials,n._appCheckCredentials,n._queue,o),!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(t){this._byteString=t}static fromBase64String(t){try{return new De(Et.fromBase64String(t))}catch(e){throw new N(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new De(Et.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return H(this._lat,t._lat)||H(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd=/^__.*__$/;class Xd{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new ne(t,this.data,this.fieldMask,e,this.fieldTransforms):new vn(t,this.data,e,this.fieldTransforms)}}class Hu{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new ne(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Xu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}class ls{constructor(t,e,r,i,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.mu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(t){return new ls(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.gu({path:r,yu:!1});return i.wu(t),i}Su(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(t){return this.gu({path:void 0,yu:!0})}Du(t){return lr(t,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}mu(){if(this.path)for(let t=0;t<this.path.length;t++)this.wu(this.path.get(t))}wu(t){if(t.length===0)throw this.Du("Document fields must not be empty");if(Xu(this.fu)&&Hd.test(t))throw this.Du('Document fields cannot begin and end with "__"')}}class Yd{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||vr(t)}Fu(t,e,r,i=!1){return new ls({fu:t,methodName:e,vu:r,path:lt.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Vr(n){const t=n._freezeSettings(),e=vr(n._databaseId);return new Yd(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Yu(n,t,e,r,i,o={}){const a=n.Fu(o.merge||o.mergeFields?2:0,t,e,i);fs("Data must be an object, but it was:",a,r);const c=Ju(r,a);let h,f;if(o.merge)h=new Vt(a.fieldMask),f=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const v of o.mergeFields){const A=Ni(t,v,e);if(!a.contains(A))throw new N(V.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);tc(p,A)||p.push(A)}h=new Vt(p),f=a.fieldTransforms.filter(v=>h.covers(v.field))}else h=null,f=a.fieldTransforms;return new Xd(new Rt(c),h,f)}class Cr extends Sr{_toFieldTransform(t){if(t.fu!==2)throw t.fu===1?t.Du(`${this._methodName}() can only appear at the top level of your update data`):t.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Cr}}class hs extends Sr{_toFieldTransform(t){return new Xh(t.path,new mn)}isEqual(t){return t instanceof hs}}function Jd(n,t,e,r){const i=n.Fu(1,t,e);fs("Data must be an object, but it was:",i,r);const o=[],a=Rt.empty();de(r,(h,f)=>{const p=ds(t,h,e);f=Lt(f);const v=i.Su(p);if(f instanceof Cr)o.push(p);else{const A=Rn(f,v);A!=null&&(o.push(p),a.set(p,A))}});const c=new Vt(o);return new Hu(a,c,i.fieldTransforms)}function Zd(n,t,e,r,i,o){const a=n.Fu(1,t,e),c=[Ni(t,r,e)],h=[i];if(o.length%2!=0)throw new N(V.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let A=0;A<o.length;A+=2)c.push(Ni(t,o[A])),h.push(o[A+1]);const f=[],p=Rt.empty();for(let A=c.length-1;A>=0;--A)if(!tc(f,c[A])){const S=c[A];let D=h[A];D=Lt(D);const k=a.Su(S);if(D instanceof Cr)f.push(S);else{const P=Rn(D,k);P!=null&&(f.push(S),p.set(S,P))}}const v=new Vt(f);return new Hu(p,v,a.fieldTransforms)}function tp(n,t,e,r=!1){return Rn(e,n.Fu(r?4:3,t))}function Rn(n,t){if(Zu(n=Lt(n)))return fs("Unsupported field value:",t,n),Ju(n,t);if(n instanceof Sr)return function(r,i){if(!Xu(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.yu&&t.fu!==4)throw t.Du("Nested arrays are not supported");return function(r,i){const o=[];let a=0;for(const c of r){let h=Rn(c,i.bu(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,i){if((r=Lt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Kh(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=ot.fromDate(r);return{timestampValue:ar(i.serializer,o)}}if(r instanceof ot){const o=new ot(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ar(i.serializer,o)}}if(r instanceof cs)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof De)return{bytesValue:gu(i.serializer,r._byteString)};if(r instanceof Tt){const o=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw i.Du(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Xi(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${Ar(r)}`)}(n,t)}function Ju(n,t){const e={};return za(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):de(n,(r,i)=>{const o=Rn(i,t.pu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function Zu(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ot||n instanceof cs||n instanceof De||n instanceof Tt||n instanceof Sr)}function fs(n,t,e){if(!Zu(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const r=Ar(e);throw r==="an object"?t.Du(n+" a custom object"):t.Du(n+" "+r)}}function Ni(n,t,e){if((t=Lt(t))instanceof Pr)return t._internalPath;if(typeof t=="string")return ds(n,t);throw lr("Field path arguments must be of type string or ",n,!1,void 0,e)}const ep=new RegExp("[~\\*/\\[\\]]");function ds(n,t,e){if(t.search(ep)>=0)throw lr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Pr(...t.split("."))._internalPath}catch{throw lr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function lr(n,t,e,r,i){const o=r&&!r.isEmpty(),a=i!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${i}`),h+=")"),new N(V.INVALID_ARGUMENT,c+n+h)}function tc(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new np(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(br("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class np extends ec{data(){return super.data()}}function br(n,t){return typeof t=="string"?ds(n,t):t instanceof Pr?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new N(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ps{}class nc extends ps{}function rc(n,t,...e){let r=[];t instanceof ps&&r.push(t),r=r.concat(e),function(o){const a=o.filter(h=>h instanceof gs).length,c=o.filter(h=>h instanceof Dr).length;if(a>1||a>0&&c>0)throw new N(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Dr extends nc{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new Dr(t,e,r)}_apply(t){const e=this._parse(t);return ic(t._query,e),new ge(t.firestore,t.converter,Ii(t._query,e))}_parse(t){const e=Vr(t.firestore);return function(o,a,c,h,f,p,v){let A;if(f.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new N(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){_a(v,p);const S=[];for(const D of v)S.push(ma(h,o,D));A={arrayValue:{values:S}}}else A=ma(h,o,v)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||_a(v,p),A=tp(c,a,v,p==="in"||p==="not-in");return it.create(f,p,A)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function ip(n,t,e){const r=t,i=br("where",n);return Dr._create(i,r,e)}class gs extends ps{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new gs(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:xt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,o){let a=i;const c=o.getFlattenedFilters();for(const h of c)ic(a,h),a=Ii(a,h)}(t._query,e),new ge(t.firestore,t.converter,Ii(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ms extends nc{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new ms(t,e)}_apply(t){const e=function(i,o,a){if(i.startAt!==null)throw new N(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new N(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new gn(o,a)}(t._query,this._field,this._direction);return new ge(t.firestore,t.converter,function(i,o){const a=i.explicitOrderBy.concat([o]);return new Ne(i.path,i.collectionGroup,a,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(t._query,e))}}function sp(n,t="asc"){const e=t,r=br("orderBy",n);return ms._create(r,e)}function ma(n,t,e){if(typeof(e=Lt(e))=="string"){if(e==="")throw new N(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ja(t)&&e.indexOf("/")!==-1)throw new N(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(Z.fromString(e));if(!M.isDocumentKey(r))throw new N(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Fo(n,new M(r))}if(e instanceof Tt)return Fo(n,e._key);throw new N(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ar(e)}.`)}function _a(n,t){if(!Array.isArray(n)||n.length===0)throw new N(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function ic(n,t){const e=function(i,o){for(const a of i)for(const c of a.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new N(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new N(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class op{convertValue(t,e="none"){switch(fe(t)){case 0:return null;case 1:return t.booleanValue;case 2:return rt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(he(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw F()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return de(t,(i,o)=>{r[i]=this.convertValue(o,e)}),r}convertGeoPoint(t){return new cs(rt(t.latitude),rt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=zi(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(fn(t));default:return null}}convertTimestamp(t){const e=Zt(t);return new ot(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=Z.fromString(t);Y(vu(r));const i=new dn(r.get(1),r.get(3)),o=new M(r.popFirst(5));return i.isEqual(e)||Bt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class oc extends ec{constructor(t,e,r,i,o,a){super(t,e,r,i,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new nr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(br("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class nr extends oc{data(t={}){return super.data(t)}}class ap{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new nn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new nr(this._firestore,this._userDataWriter,r.key,r,new nn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new N(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(c=>{const h=new nr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new nn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new nr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new nn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,p=-1;return c.type!==0&&(f=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),p=a.indexOf(c.doc.key)),{type:up(c.type),doc:h,oldIndex:f,newIndex:p}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function up(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cp(n){n=bt(n,Tt);const t=bt(n.firestore,ee);return Gd(us(t),n._key).then(e=>lc(t,n,e))}class ac extends op{constructor(t){super(),this.firestore=t}convertBytes(t){return new De(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Tt(this.firestore,null,e)}}function lp(n,t,e){n=bt(n,Tt);const r=bt(n.firestore,ee),i=sc(n.converter,t,e);return kr(r,[Yu(Vr(r),"setDoc",n._key,i,n.converter!==null,e).toMutation(n._key,Ct.none())])}function uc(n,t,e,...r){n=bt(n,Tt);const i=bt(n.firestore,ee),o=Vr(i);let a;return a=typeof(t=Lt(t))=="string"||t instanceof Pr?Zd(o,"updateDoc",n._key,t,e,r):Jd(o,"updateDoc",n._key,t),kr(i,[a.toMutation(n._key,Ct.exists(!0))])}function mp(n){return kr(bt(n.firestore,ee),[new Ki(n._key,Ct.none())])}function _p(n,t){const e=bt(n.firestore,ee),r=cr(n),i=sc(n.converter,t);return kr(e,[Yu(Vr(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Ct.exists(!1))]).then(()=>r)}function cc(n,...t){var e,r,i;n=Lt(n);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||ga(t[a])||(o=t[a],a++);const c={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(ga(t[a])){const v=t[a];t[a]=(e=v.next)===null||e===void 0?void 0:e.bind(v),t[a+1]=(r=v.error)===null||r===void 0?void 0:r.bind(v),t[a+2]=(i=v.complete)===null||i===void 0?void 0:i.bind(v)}let h,f,p;if(n instanceof Tt)f=bt(n.firestore,ee),p=gr(n._key.path),h={next:v=>{t[a]&&t[a](lc(f,n,v))},error:t[a+1],complete:t[a+2]};else{const v=bt(n,ge);f=bt(v.firestore,ee),p=v._query;const A=new ac(f);h={next:S=>{t[a]&&t[a](new ap(f,A,v,S))},error:t[a+1],complete:t[a+2]},rp(n._query)}return function(A,S,D,k){const P=new zu(k),B=new xu(S,P,D);return A.asyncQueue.enqueueAndForget(async()=>ku(await Di(A),B)),()=>{P.$a(),A.asyncQueue.enqueueAndForget(async()=>Nu(await Di(A),B))}}(us(f),p,c,h)}function kr(n,t){return function(r,i){const o=new Xt;return r.asyncQueue.enqueueAndForget(async()=>kd(await $d(r),i,o)),o.promise}(us(n),t)}function lc(n,t,e){const r=e.docs.get(t._key),i=new ac(n);return new oc(n,i,t._key,r,new nn(e.hasPendingWrites,e.fromCache),t.converter)}function yp(){return new hs("serverTimestamp")}(function(t,e=!0){(function(i){ke=i})(Yc),Gc(new Qc("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),c=new ee(new hh(r.getProvider("auth-internal")),new gh(r.getProvider("app-check-internal")),function(f,p){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new N(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new dn(f.options.projectId,p)}(a,i),a);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),yo(xo,"4.6.3",t),yo(xo,"4.6.3","esm2017")})();function Tp(){const n=ya(),t=Nt(n.currentUser);n.onAuthStateChanged(c=>{t.value=c});const e=Ku(),r=nl(),i=new el;return{user:t,signInWithGoogle:()=>{rl(n,i).then(c=>{const h=ki(e,"users"),f=cr(h,c.user.uid);lp(f,{userName:c.user.displayName,userId:c.user.uid,userPhotoURL:c.user.photoURL,status:"online"}),r.push("/home")}).catch(c=>{console.log(c)})},firestore:e,auth:n,logout:async()=>{if(t.value){const c=cr(e,"users",t.value.uid);try{await uc(c,{status:"offline"}),await il(n),r.push("/")}catch(h){console.error("Error during logout: ",h)}}else r.push({path:"/",state:{errorMessage:"You must login first"}})},collection:ki,query:rc,where:ip,onSnapshot:cc}}function Ep(n){const t=ya(),e=Ku(),r=Nt(!1),i=Nt(!0),o=Nt(t.currentUser);t.onAuthStateChanged(O=>{o.value=O});const a=Nt([]),c=ri(()=>a.value.filter(O=>O.title.toLowerCase().includes(n.searchQuery.toLowerCase()))),h=Nt({});let f=Nt(0);const p={1:"Poor",2:"Fair",3:"Good",4:"Very Good",5:"Excellent"},v=ri(()=>p[f.value]||""),A=ki(e,"recipe"),S=rc(A,sp("createdAt","asc")),D=cc(S,O=>{a.value=O.docs.map(Q=>({id:Q.id,...Q.data()})).reverse(),i.value=!1}),k=O=>{const Q=O.seconds,wt=O.nanoseconds/1e6;return new Date(Q*1e3+wt)},P=O=>{const Q=k(O),wt=Q.getFullYear().toString().slice(-2),At=Q.toLocaleString("default",{month:"short"}),Pt=Q.getUTCDate(),Ut=Q.getHours()%12||12,me=("0"+Q.getMinutes()).slice(-2),Oe=Q.getHours()<12?"am":"pm";return`${Pt} ${At} ${wt} (${Ut}:${me} ${Oe})`};let B=Nt(!1);const $=O=>{var wt;h.value=O,console.log(h.value),B.value=w((wt=o.value)==null?void 0:wt.uid),document.getElementById("my_modal_4").showModal()},L=Nt([]),z=Nt([]),ft=()=>{f.value=0,L.value=[],z.value=[],document.getElementById("my_modal_4").close()},U=O=>{if(console.log("instructions clicked",O),!L.value.includes(O))L.value.push(O);else{const Q=L.value.indexOf(O);Q!==-1&&L.value.splice(Q,1)}console.log(L.value)},T=O=>{if(console.log("ingre clicked",O),!z.value.includes(O))z.value.push(O);else{const Q=z.value.indexOf(O);Q!==-1&&z.value.splice(Q,1)}console.log(z.value)};let g=Nt("");const m=(O,Q)=>{g.value=Q,f.value=O},y=async(O,Q,wt)=>{try{r.value=!0;const At=cr(e,"recipe",O),Pt=await cp(At);if(Pt.exists()){const Ut=Pt.data(),me=Ut.totalRatings||0,Oe=Ut.ratingCount||0,Dt=me+Q,st=Oe+1,Nr=Dt/st,$t=Ut.usersIdThatRate||[];$t.push(wt),await uc(At,{totalRatings:Dt,ratingCount:st,averageRating:Nr,usersIdThatRate:$t})}}catch(At){console.error("Error updating ratings: ",At)}finally{r.value=!1}},E=async()=>{if(o.value){const O=f.value,Q=g.value,wt=o.value.uid;await y(Q,O,wt),ft()}},w=O=>(h.value.usersIdThatRate||[]).includes(O),_=ri(()=>{const O=[],Q=h.value.averageRating||0,wt=Math.floor(Q),At=Q%1!==0;for(let Pt=0;Pt<wt;Pt++)O.push("full");for(At&&O.push("half");O.length<5;)O.push("empty");return O});return sl(()=>{D()}),{sendingRatingLoading:r,recipe:a,formatHour:P,showRecipeAllModal:$,selectedAllRecipe:h,ratings:f,setRating:m,closeModal:ft,ratingsInText:v,sendRatings:E,starArray:_,filteredRecipes:c,muteRateBnt:B,loading:i,clickInstructions:U,instructionsDisables:L,clickIngredients:T,ingredientsDisables:z}}const vp=(n,t)=>{const e=n.__vccOpts||n;for(const[r,i]of t)e[r]=i;return e};export{fp as I,vp as _,_p as a,Ep as b,ki as c,cc as d,cr as e,cp as f,Ku as g,mp as h,uc as i,yp as j,sp as o,rc as q,lp as s,Tp as u,ip as w};
