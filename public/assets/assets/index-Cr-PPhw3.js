const __vite__fileDeps=["assets/home-Dnbd9j6W.js","assets/iconify-BEOusgv0.js","assets/_plugin-vue_export-helper-DTfP13uL.js","assets/allChefs-BkVz1XZx.js","assets/getUsers-FtIhv9Rv.js","assets/yourChats-q7Z8UXM8.js","assets/login-Wm7hve_Z.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function pi(e,t){const n=new Set(e.split(","));return r=>n.has(r)}const se={},Qt=[],Pe=()=>{},Yu=()=>!1,Vr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),mi=e=>e.startsWith("onUpdate:"),he=Object.assign,gi=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Xu=Object.prototype.hasOwnProperty,G=(e,t)=>Xu.call(e,t),$=Array.isArray,Zt=e=>$r(e)==="[object Map]",Ga=e=>$r(e)==="[object Set]",H=e=>typeof e=="function",ue=e=>typeof e=="string",Kt=e=>typeof e=="symbol",oe=e=>e!==null&&typeof e=="object",Ja=e=>(oe(e)||H(e))&&H(e.then)&&H(e.catch),Ya=Object.prototype.toString,$r=e=>Ya.call(e),Qu=e=>$r(e).slice(8,-1),Xa=e=>$r(e)==="[object Object]",yi=e=>ue(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,vn=pi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Br=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Zu=/-(\w)/g,Je=Br(e=>e.replace(Zu,(t,n)=>n?n.toUpperCase():"")),ef=/\B([A-Z])/g,dn=Br(e=>e.replace(ef,"-$1").toLowerCase()),Hr=Br(e=>e.charAt(0).toUpperCase()+e.slice(1)),cs=Br(e=>e?`on${Hr(e)}`:""),Tt=(e,t)=>!Object.is(e,t),lr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Qa=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Ms=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ho;const Za=()=>ho||(ho=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function _i(e){if($(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=ue(r)?sf(r):_i(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(ue(e)||oe(e))return e}const tf=/;(?![^(]*\))/g,nf=/:([^]+)/,rf=/\/\*[^]*?\*\//g;function sf(e){const t={};return e.replace(rf,"").split(tf).forEach(n=>{if(n){const r=n.split(nf);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function vi(e){let t="";if(ue(e))t=e;else if($(e))for(let n=0;n<e.length;n++){const r=vi(e[n]);r&&(t+=r+" ")}else if(oe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const of="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",af=pi(of);function ec(e){return!!e||e===""}const Qb=e=>ue(e)?e:e==null?"":$(e)||oe(e)&&(e.toString===Ya||!H(e.toString))?JSON.stringify(e,tc,2):String(e),tc=(e,t)=>t&&t.__v_isRef?tc(e,t.value):Zt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[ls(r,i)+" =>"]=s,n),{})}:Ga(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>ls(n))}:Kt(t)?ls(t):oe(t)&&!$(t)&&!Xa(t)?String(t):t,ls=(e,t="")=>{var n;return Kt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Re;class cf{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Re,!t&&Re&&(this.index=(Re.scopes||(Re.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Re;try{return Re=this,t()}finally{Re=n}}}on(){Re=this}off(){Re=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function lf(e,t=Re){t&&t.active&&t.effects.push(e)}function nc(){return Re}function uf(e){Re&&Re.cleanups.push(e)}let Vt;class bi{constructor(t,n,r,s){this.fn=t,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,lf(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Ot();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(ff(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),At()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=wt,n=Vt;try{return wt=!0,Vt=this,this._runnings++,po(this),this.fn()}finally{mo(this),this._runnings--,Vt=n,wt=t}}stop(){this.active&&(po(this),mo(this),this.onStop&&this.onStop(),this.active=!1)}}function ff(e){return e.value}function po(e){e._trackId++,e._depsLength=0}function mo(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)rc(e.deps[t],e);e.deps.length=e._depsLength}}function rc(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let wt=!0,Ds=0;const sc=[];function Ot(){sc.push(wt),wt=!1}function At(){const e=sc.pop();wt=e===void 0?!0:e}function wi(){Ds++}function Ei(){for(Ds--;!Ds&&Ls.length;)Ls.shift()()}function ic(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&rc(r,e),e.deps[e._depsLength++]=t):e._depsLength++}}const Ls=[];function oc(e,t,n){wi();for(const r of e.keys()){let s;r._dirtyLevel<t&&(s??(s=e.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=t),r._shouldSchedule&&(s??(s=e.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&Ls.push(r.scheduler)))}Ei()}const ac=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},Us=new WeakMap,$t=Symbol(""),Fs=Symbol("");function Te(e,t,n){if(wt&&Vt){let r=Us.get(e);r||Us.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=ac(()=>r.delete(n))),ic(Vt,s)}}function nt(e,t,n,r,s,i){const o=Us.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&$(e)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||!Kt(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":$(e)?yi(n)&&a.push(o.get("length")):(a.push(o.get($t)),Zt(e)&&a.push(o.get(Fs)));break;case"delete":$(e)||(a.push(o.get($t)),Zt(e)&&a.push(o.get(Fs)));break;case"set":Zt(e)&&a.push(o.get($t));break}wi();for(const c of a)c&&oc(c,4);Ei()}const df=pi("__proto__,__v_isRef,__isVue"),cc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Kt)),go=hf();function hf(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=J(this);for(let i=0,o=this.length;i<o;i++)Te(r,"get",i+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(J)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Ot(),wi();const r=J(this)[t].apply(this,n);return Ei(),At(),r}}),e}function pf(e){Kt(e)||(e=String(e));const t=J(this);return Te(t,"has",e),t.hasOwnProperty(e)}class lc{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Af:hc:i?dc:fc).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=$(t);if(!s){if(o&&G(go,n))return Reflect.get(go,n,r);if(n==="hasOwnProperty")return pf}const a=Reflect.get(t,n,r);return(Kt(n)?cc.has(n):df(n))||(s||Te(t,"get",n),i)?a:Oe(a)?o&&yi(n)?a:a.value:oe(a)?s?pc(a):st(a):a}}class uc extends lc{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(!this._isShallow){const c=xn(i);if(!Ir(r)&&!xn(r)&&(i=J(i),r=J(r)),!$(t)&&Oe(i)&&!Oe(r))return c?!1:(i.value=r,!0)}const o=$(t)&&yi(n)?Number(n)<t.length:G(t,n),a=Reflect.set(t,n,r,s);return t===J(s)&&(o?Tt(r,i)&&nt(t,"set",n,r):nt(t,"add",n,r)),a}deleteProperty(t,n){const r=G(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&nt(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!Kt(n)||!cc.has(n))&&Te(t,"has",n),r}ownKeys(t){return Te(t,"iterate",$(t)?"length":$t),Reflect.ownKeys(t)}}class mf extends lc{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const gf=new uc,yf=new mf,_f=new uc(!0);const Ii=e=>e,Wr=e=>Reflect.getPrototypeOf(e);function Zn(e,t,n=!1,r=!1){e=e.__v_raw;const s=J(e),i=J(t);n||(Tt(t,i)&&Te(s,"get",t),Te(s,"get",i));const{has:o}=Wr(s),a=r?Ii:n?Oi:kn;if(o.call(s,t))return a(e.get(t));if(o.call(s,i))return a(e.get(i));e!==s&&e.get(t)}function er(e,t=!1){const n=this.__v_raw,r=J(n),s=J(e);return t||(Tt(e,s)&&Te(r,"has",e),Te(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function tr(e,t=!1){return e=e.__v_raw,!t&&Te(J(e),"iterate",$t),Reflect.get(e,"size",e)}function yo(e){e=J(e);const t=J(this);return Wr(t).has.call(t,e)||(t.add(e),nt(t,"add",e,e)),this}function _o(e,t){t=J(t);const n=J(this),{has:r,get:s}=Wr(n);let i=r.call(n,e);i||(e=J(e),i=r.call(n,e));const o=s.call(n,e);return n.set(e,t),i?Tt(t,o)&&nt(n,"set",e,t):nt(n,"add",e,t),this}function vo(e){const t=J(this),{has:n,get:r}=Wr(t);let s=n.call(t,e);s||(e=J(e),s=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return s&&nt(t,"delete",e,void 0),i}function bo(){const e=J(this),t=e.size!==0,n=e.clear();return t&&nt(e,"clear",void 0,void 0),n}function nr(e,t){return function(r,s){const i=this,o=i.__v_raw,a=J(o),c=t?Ii:e?Oi:kn;return!e&&Te(a,"iterate",$t),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function rr(e,t,n){return function(...r){const s=this.__v_raw,i=J(s),o=Zt(i),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=s[e](...r),u=n?Ii:t?Oi:kn;return!t&&Te(i,"iterate",c?Fs:$t),{next(){const{value:f,done:h}=l.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function ct(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function vf(){const e={get(i){return Zn(this,i)},get size(){return tr(this)},has:er,add:yo,set:_o,delete:vo,clear:bo,forEach:nr(!1,!1)},t={get(i){return Zn(this,i,!1,!0)},get size(){return tr(this)},has:er,add:yo,set:_o,delete:vo,clear:bo,forEach:nr(!1,!0)},n={get(i){return Zn(this,i,!0)},get size(){return tr(this,!0)},has(i){return er.call(this,i,!0)},add:ct("add"),set:ct("set"),delete:ct("delete"),clear:ct("clear"),forEach:nr(!0,!1)},r={get(i){return Zn(this,i,!0,!0)},get size(){return tr(this,!0)},has(i){return er.call(this,i,!0)},add:ct("add"),set:ct("set"),delete:ct("delete"),clear:ct("clear"),forEach:nr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=rr(i,!1,!1),n[i]=rr(i,!0,!1),t[i]=rr(i,!1,!0),r[i]=rr(i,!0,!0)}),[e,n,t,r]}const[bf,wf,Ef,If]=vf();function Si(e,t){const n=t?e?If:Ef:e?wf:bf;return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(G(n,s)&&s in r?n:r,s,i)}const Sf={get:Si(!1,!1)},Tf={get:Si(!1,!0)},Of={get:Si(!0,!1)};const fc=new WeakMap,dc=new WeakMap,hc=new WeakMap,Af=new WeakMap;function Rf(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Cf(e){return e.__v_skip||!Object.isExtensible(e)?0:Rf(Qu(e))}function st(e){return xn(e)?e:Ti(e,!1,gf,Sf,fc)}function Pf(e){return Ti(e,!1,_f,Tf,dc)}function pc(e){return Ti(e,!0,yf,Of,hc)}function Ti(e,t,n,r,s){if(!oe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const o=Cf(e);if(o===0)return e;const a=new Proxy(e,o===2?r:n);return s.set(e,a),a}function bn(e){return xn(e)?bn(e.__v_raw):!!(e&&e.__v_isReactive)}function xn(e){return!!(e&&e.__v_isReadonly)}function Ir(e){return!!(e&&e.__v_isShallow)}function mc(e){return e?!!e.__v_raw:!1}function J(e){const t=e&&e.__v_raw;return t?J(t):e}function xf(e){return Object.isExtensible(e)&&Qa(e,"__v_skip",!0),e}const kn=e=>oe(e)?st(e):e,Oi=e=>oe(e)?pc(e):e;class gc{constructor(t,n,r,s){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new bi(()=>t(this._value),()=>ur(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const t=J(this);return(!t._cacheable||t.effect.dirty)&&Tt(t._value,t._value=t.effect.run())&&ur(t,4),yc(t),t.effect._dirtyLevel>=2&&ur(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function kf(e,t,n=!1){let r,s;const i=H(e);return i?(r=e,s=Pe):(r=e.get,s=e.set),new gc(r,s,i||!s,n)}function yc(e){var t;wt&&Vt&&(e=J(e),ic(Vt,(t=e.dep)!=null?t:e.dep=ac(()=>e.dep=void 0,e instanceof gc?e:void 0)))}function ur(e,t=4,n){e=J(e);const r=e.dep;r&&oc(r,t)}function Oe(e){return!!(e&&e.__v_isRef===!0)}function xe(e){return _c(e,!1)}function Nf(e){return _c(e,!0)}function _c(e,t){return Oe(e)?e:new Mf(e,t)}class Mf{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:J(t),this._value=n?t:kn(t)}get value(){return yc(this),this._value}set value(t){const n=this.__v_isShallow||Ir(t)||xn(t);t=n?t:J(t),Tt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:kn(t),ur(this,4))}}function Ce(e){return Oe(e)?e.value:e}const Df={get:(e,t,n)=>Ce(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return Oe(s)&&!Oe(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function vc(e){return bn(e)?e:new Proxy(e,Df)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Et(e,t,n,r){try{return r?e(...r):e()}catch(s){zr(s,t,n)}}function Ue(e,t,n,r){if(H(e)){const s=Et(e,t,n,r);return s&&Ja(s)&&s.catch(i=>{zr(i,t,n)}),s}if($(e)){const s=[];for(let i=0;i<e.length;i++)s.push(Ue(e[i],t,n,r));return s}}function zr(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,o,a)===!1)return}i=i.parent}const c=t.appContext.config.errorHandler;if(c){Ot(),Et(c,null,10,[e,o,a]),At();return}}Lf(e,n,s,r)}function Lf(e,t,n,r=!0){console.error(e)}let Nn=!1,js=!1;const me=[];let Ke=0;const en=[];let dt=null,Lt=0;const bc=Promise.resolve();let Ai=null;function wc(e){const t=Ai||bc;return e?t.then(this?e.bind(this):e):t}function Uf(e){let t=Ke+1,n=me.length;for(;t<n;){const r=t+n>>>1,s=me[r],i=Mn(s);i<e||i===e&&s.pre?t=r+1:n=r}return t}function Ri(e){(!me.length||!me.includes(e,Nn&&e.allowRecurse?Ke+1:Ke))&&(e.id==null?me.push(e):me.splice(Uf(e.id),0,e),Ec())}function Ec(){!Nn&&!js&&(js=!0,Ai=bc.then(Sc))}function Ff(e){const t=me.indexOf(e);t>Ke&&me.splice(t,1)}function jf(e){$(e)?en.push(...e):(!dt||!dt.includes(e,e.allowRecurse?Lt+1:Lt))&&en.push(e),Ec()}function wo(e,t,n=Nn?Ke+1:0){for(;n<me.length;n++){const r=me[n];if(r&&r.pre){if(e&&r.id!==e.uid)continue;me.splice(n,1),n--,r()}}}function Ic(e){if(en.length){const t=[...new Set(en)].sort((n,r)=>Mn(n)-Mn(r));if(en.length=0,dt){dt.push(...t);return}for(dt=t,Lt=0;Lt<dt.length;Lt++)dt[Lt]();dt=null,Lt=0}}const Mn=e=>e.id==null?1/0:e.id,Vf=(e,t)=>{const n=Mn(e)-Mn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Sc(e){js=!1,Nn=!0,me.sort(Vf);try{for(Ke=0;Ke<me.length;Ke++){const t=me[Ke];t&&t.active!==!1&&Et(t,null,14)}}finally{Ke=0,me.length=0,Ic(),Nn=!1,Ai=null,(me.length||en.length)&&Sc()}}function $f(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||se;let s=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=r[u]||se;h&&(s=n.map(g=>ue(g)?g.trim():g)),f&&(s=n.map(Ms))}let a,c=r[a=cs(t)]||r[a=cs(Je(t))];!c&&i&&(c=r[a=cs(dn(t))]),c&&Ue(c,e,6,s);const l=r[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Ue(l,e,6,s)}}function Tc(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},a=!1;if(!H(e)){const c=l=>{const u=Tc(l,t,!0);u&&(a=!0,he(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(oe(e)&&r.set(e,null),null):($(i)?i.forEach(c=>o[c]=null):he(o,i),oe(e)&&r.set(e,o),o)}function Kr(e,t){return!e||!Vr(t)?!1:(t=t.slice(2).replace(/Once$/,""),G(e,t[0].toLowerCase()+t.slice(1))||G(e,dn(t))||G(e,t))}let ve=null,Oc=null;function Sr(e){const t=ve;return ve=e,Oc=e&&e.type.__scopeId||null,t}function Bf(e,t=ve,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&ko(-1);const i=Sr(t);let o;try{o=e(...s)}finally{Sr(i),r._d&&ko(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function us(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:f,data:h,setupState:g,ctx:y,inheritAttrs:R}=e,M=Sr(e);let O,A;try{if(n.shapeFlag&4){const N=s||r,j=N;O=ze(l.call(j,N,u,f,g,h,y)),A=a}else{const N=t;O=ze(N.length>1?N(f,{attrs:a,slots:o,emit:c}):N(f,null)),A=t.props?a:Hf(a)}}catch(N){In.length=0,zr(N,e,1),O=Se(Ht)}let E=O;if(A&&R!==!1){const N=Object.keys(A),{shapeFlag:j}=E;N.length&&j&7&&(i&&N.some(mi)&&(A=Wf(A,i)),E=an(E,A,!1,!0))}return n.dirs&&(E=an(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),O=E,Sr(M),O}const Hf=e=>{let t;for(const n in e)(n==="class"||n==="style"||Vr(n))&&((t||(t={}))[n]=e[n]);return t},Wf=(e,t)=>{const n={};for(const r in e)(!mi(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function zf(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:c}=t,l=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Eo(r,o,l):!!o;if(c&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==r[h]&&!Kr(l,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Eo(r,o,l):!0:!!o;return!1}function Eo(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!Kr(n,i))return!0}return!1}function Kf({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const Ac="components",qf="directives";function Zb(e,t){return Rc(Ac,e,!0,t)||e}const Gf=Symbol.for("v-ndc");function e0(e){return Rc(qf,e)}function Rc(e,t,n=!0,r=!1){const s=ve||pe;if(s){const i=s.type;if(e===Ac){const a=$d(i,!1);if(a&&(a===t||a===Je(t)||a===Hr(Je(t))))return i}const o=Io(s[e]||i[e],t)||Io(s.appContext[e],t);return!o&&r?i:o}}function Io(e,t){return e&&(e[t]||e[Je(t)]||e[Hr(Je(t))])}const Jf=e=>e.__isSuspense;function Yf(e,t){t&&t.pendingBranch?$(e)?t.effects.push(...e):t.effects.push(e):jf(e)}const Xf=Symbol.for("v-scx"),Qf=()=>qe(Xf),sr={};function ge(e,t,n){return Cc(e,t,n)}function Cc(e,t,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=se){if(t&&i){const D=t;t=(...Y)=>{D(...Y),j()}}const c=pe,l=D=>r===!0?D:Ut(D,r===!1?1:void 0);let u,f=!1,h=!1;if(Oe(e)?(u=()=>e.value,f=Ir(e)):bn(e)?(u=()=>l(e),f=!0):$(e)?(h=!0,f=e.some(D=>bn(D)||Ir(D)),u=()=>e.map(D=>{if(Oe(D))return D.value;if(bn(D))return l(D);if(H(D))return Et(D,c,2)})):H(e)?t?u=()=>Et(e,c,2):u=()=>(g&&g(),Ue(e,c,3,[y])):u=Pe,t&&r){const D=u;u=()=>Ut(D())}let g,y=D=>{g=E.onStop=()=>{Et(D,c,4),g=E.onStop=void 0}},R;if(Yr)if(y=Pe,t?n&&Ue(t,c,3,[u(),h?[]:void 0,y]):u(),s==="sync"){const D=Qf();R=D.__watcherHandles||(D.__watcherHandles=[])}else return Pe;let M=h?new Array(e.length).fill(sr):sr;const O=()=>{if(!(!E.active||!E.dirty))if(t){const D=E.run();(r||f||(h?D.some((Y,ce)=>Tt(Y,M[ce])):Tt(D,M)))&&(g&&g(),Ue(t,c,3,[D,M===sr?void 0:h&&M[0]===sr?[]:M,y]),M=D)}else E.run()};O.allowRecurse=!!t;let A;s==="sync"?A=O:s==="post"?A=()=>Ee(O,c&&c.suspense):(O.pre=!0,c&&(O.id=c.uid),A=()=>Ri(O));const E=new bi(u,Pe,A),N=nc(),j=()=>{E.stop(),N&&gi(N.effects,E)};return t?n?O():M=E.run():s==="post"?Ee(E.run.bind(E),c&&c.suspense):E.run(),R&&R.push(j),j}function Zf(e,t,n){const r=this.proxy,s=ue(e)?e.includes(".")?Pc(r,e):()=>r[e]:e.bind(r,r);let i;H(t)?i=t:(i=t.handler,n=t);const o=Bn(this),a=Cc(s,i.bind(r),n);return o(),a}function Pc(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Ut(e,t=1/0,n){if(t<=0||!oe(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,Oe(e))Ut(e.value,t,n);else if($(e))for(let r=0;r<e.length;r++)Ut(e[r],t,n);else if(Ga(e)||Zt(e))e.forEach(r=>{Ut(r,t,n)});else if(Xa(e))for(const r in e)Ut(e[r],t,n);return e}function t0(e,t){if(ve===null)return e;const n=Xr(ve)||ve.proxy,r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,o,a,c=se]=t[s];i&&(H(i)&&(i={mounted:i,updated:i}),i.deep&&Ut(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return e}function xt(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Ot(),Ue(c,n,8,[e.el,a,e,t]),At())}}/*! #__NO_SIDE_EFFECTS__ */function qr(e,t){return H(e)?he({name:e.name},t,{setup:e}):e}const fr=e=>!!e.type.__asyncLoader,xc=e=>e.type.__isKeepAlive;function ed(e,t){kc(e,"a",t)}function td(e,t){kc(e,"da",t)}function kc(e,t,n=pe){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Gr(t,r,n),n){let s=n.parent;for(;s&&s.parent;)xc(s.parent.vnode)&&nd(r,t,n,s),s=s.parent}}function nd(e,t,n,r){const s=Gr(t,e,r,!0);Ci(()=>{gi(r[t],s)},n)}function Gr(e,t,n=pe,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Ot();const a=Bn(n),c=Ue(t,n,e,o);return a(),At(),c});return r?s.unshift(i):s.push(i),i}}const it=e=>(t,n=pe)=>(!Yr||e==="sp")&&Gr(e,(...r)=>t(...r),n),rd=it("bm"),Nc=it("m"),sd=it("bu"),id=it("u"),od=it("bum"),Ci=it("um"),ad=it("sp"),cd=it("rtg"),ld=it("rtc");function ud(e,t=pe){Gr("ec",e,t)}function n0(e,t,n,r){let s;const i=n;if($(e)||ue(e)){s=new Array(e.length);for(let o=0,a=e.length;o<a;o++)s[o]=t(e[o],o,void 0,i)}else if(typeof e=="number"){s=new Array(e);for(let o=0;o<e;o++)s[o]=t(o+1,o,void 0,i)}else if(oe(e))if(e[Symbol.iterator])s=Array.from(e,(o,a)=>t(o,a,void 0,i));else{const o=Object.keys(e);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=t(e[l],l,a,i)}}else s=[];return s}const Vs=e=>e?Qc(e)?Xr(e)||e.proxy:Vs(e.parent):null,wn=he(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Vs(e.parent),$root:e=>Vs(e.root),$emit:e=>e.emit,$options:e=>Pi(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,Ri(e.update)}),$nextTick:e=>e.n||(e.n=wc.bind(e.proxy)),$watch:e=>Zf.bind(e)}),fs=(e,t)=>e!==se&&!e.__isScriptSetup&&G(e,t),fd={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(fs(r,t))return o[t]=1,r[t];if(s!==se&&G(s,t))return o[t]=2,s[t];if((l=e.propsOptions[0])&&G(l,t))return o[t]=3,i[t];if(n!==se&&G(n,t))return o[t]=4,n[t];$s&&(o[t]=0)}}const u=wn[t];let f,h;if(u)return t==="$attrs"&&Te(e.attrs,"get",""),u(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==se&&G(n,t))return o[t]=4,n[t];if(h=c.config.globalProperties,G(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return fs(s,t)?(s[t]=n,!0):r!==se&&G(r,t)?(r[t]=n,!0):G(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||e!==se&&G(e,o)||fs(t,o)||(a=i[0])&&G(a,o)||G(r,o)||G(wn,o)||G(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:G(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Mc(){return dd().slots}function dd(){const e=Ni();return e.setupContext||(e.setupContext=el(e))}function So(e){return $(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let $s=!0;function hd(e){const t=Pi(e),n=e.proxy,r=e.ctx;$s=!1,t.beforeCreate&&To(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:h,beforeUpdate:g,updated:y,activated:R,deactivated:M,beforeDestroy:O,beforeUnmount:A,destroyed:E,unmounted:N,render:j,renderTracked:D,renderTriggered:Y,errorCaptured:ce,serverPrefetch:le,expose:be,inheritAttrs:je,components:Ve,directives:ot,filters:ke}=t;if(l&&pd(l,r,null),o)for(const Z in o){const X=o[Z];H(X)&&(r[Z]=X.bind(n))}if(s){const Z=s.call(n,n);oe(Z)&&(e.data=st(Z))}if($s=!0,i)for(const Z in i){const X=i[Z],Ne=H(X)?X.bind(n,n):H(X.get)?X.get.bind(n,n):Pe,Pt=!H(X)&&H(X.set)?X.set.bind(n):Pe,Me=de({get:Ne,set:Pt});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>Me.value,set:we=>Me.value=we})}if(a)for(const Z in a)Dc(a[Z],r,n,Z);if(c){const Z=H(c)?c.call(n):c;Reflect.ownKeys(Z).forEach(X=>{dr(X,Z[X])})}u&&To(u,e,"c");function ae(Z,X){$(X)?X.forEach(Ne=>Z(Ne.bind(n))):X&&Z(X.bind(n))}if(ae(rd,f),ae(Nc,h),ae(sd,g),ae(id,y),ae(ed,R),ae(td,M),ae(ud,ce),ae(ld,D),ae(cd,Y),ae(od,A),ae(Ci,N),ae(ad,le),$(be))if(be.length){const Z=e.exposed||(e.exposed={});be.forEach(X=>{Object.defineProperty(Z,X,{get:()=>n[X],set:Ne=>n[X]=Ne})})}else e.exposed||(e.exposed={});j&&e.render===Pe&&(e.render=j),je!=null&&(e.inheritAttrs=je),Ve&&(e.components=Ve),ot&&(e.directives=ot)}function pd(e,t,n=Pe){$(e)&&(e=Bs(e));for(const r in e){const s=e[r];let i;oe(s)?"default"in s?i=qe(s.from||r,s.default,!0):i=qe(s.from||r):i=qe(s),Oe(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function To(e,t,n){Ue($(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Dc(e,t,n,r){const s=r.includes(".")?Pc(n,r):()=>n[r];if(ue(e)){const i=t[e];H(i)&&ge(s,i)}else if(H(e))ge(s,e.bind(n));else if(oe(e))if($(e))e.forEach(i=>Dc(i,t,n,r));else{const i=H(e.handler)?e.handler.bind(n):t[e.handler];H(i)&&ge(s,i,e)}}function Pi(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(l=>Tr(c,l,o,!0)),Tr(c,t,o)),oe(t)&&i.set(t,c),c}function Tr(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Tr(e,i,n,!0),s&&s.forEach(o=>Tr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=md[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const md={data:Oo,props:Ao,emits:Ao,methods:_n,computed:_n,beforeCreate:_e,created:_e,beforeMount:_e,mounted:_e,beforeUpdate:_e,updated:_e,beforeDestroy:_e,beforeUnmount:_e,destroyed:_e,unmounted:_e,activated:_e,deactivated:_e,errorCaptured:_e,serverPrefetch:_e,components:_n,directives:_n,watch:yd,provide:Oo,inject:gd};function Oo(e,t){return t?e?function(){return he(H(e)?e.call(this,this):e,H(t)?t.call(this,this):t)}:t:e}function gd(e,t){return _n(Bs(e),Bs(t))}function Bs(e){if($(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function _e(e,t){return e?[...new Set([].concat(e,t))]:t}function _n(e,t){return e?he(Object.create(null),e,t):t}function Ao(e,t){return e?$(e)&&$(t)?[...new Set([...e,...t])]:he(Object.create(null),So(e),So(t??{})):t}function yd(e,t){if(!e)return t;if(!t)return e;const n=he(Object.create(null),e);for(const r in t)n[r]=_e(e[r],t[r]);return n}function Lc(){return{app:null,config:{isNativeTag:Yu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _d=0;function vd(e,t){return function(r,s=null){H(r)||(r=he({},r)),s!=null&&!oe(s)&&(s=null);const i=Lc(),o=new WeakSet;let a=!1;const c=i.app={_uid:_d++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Hd,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&H(l.install)?(o.add(l),l.install(c,...u)):H(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,f){if(!a){const h=Se(r,s);return h.appContext=i,f===!0?f="svg":f===!1&&(f=void 0),u&&t?t(h,l):e(h,l,f),a=!0,c._container=l,l.__vue_app__=c,Xr(h.component)||h.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){const u=En;En=c;try{return l()}finally{En=u}}};return c}}let En=null;function dr(e,t){if(pe){let n=pe.provides;const r=pe.parent&&pe.parent.provides;r===n&&(n=pe.provides=Object.create(r)),n[e]=t}}function qe(e,t,n=!1){const r=pe||ve;if(r||En){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:En._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&H(t)?t.call(r&&r.proxy):t}}const Uc={},Fc=()=>Object.create(Uc),jc=e=>Object.getPrototypeOf(e)===Uc;function bd(e,t,n,r=!1){const s={},i=Fc();e.propsDefaults=Object.create(null),Vc(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:Pf(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function wd(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,a=J(s),[c]=e.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Kr(e.emitsOptions,h))continue;const g=t[h];if(c)if(G(i,h))g!==i[h]&&(i[h]=g,l=!0);else{const y=Je(h);s[y]=Hs(c,a,y,g,e,!1)}else g!==i[h]&&(i[h]=g,l=!0)}}}else{Vc(e,t,s,i)&&(l=!0);let u;for(const f in a)(!t||!G(t,f)&&((u=dn(f))===f||!G(t,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=Hs(c,a,f,void 0,e,!0)):delete s[f]);if(i!==a)for(const f in i)(!t||!G(t,f))&&(delete i[f],l=!0)}l&&nt(e.attrs,"set","")}function Vc(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(vn(c))continue;const l=t[c];let u;s&&G(s,u=Je(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Kr(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=J(n),l=a||se;for(let u=0;u<i.length;u++){const f=i[u];n[f]=Hs(s,c,f,l[f],e,!G(l,f))}}return o}function Hs(e,t,n,r,s,i){const o=e[n];if(o!=null){const a=G(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&H(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=Bn(s);r=l[n]=c.call(null,t),u()}}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===dn(n))&&(r=!0))}return r}function $c(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},a=[];let c=!1;if(!H(e)){const u=f=>{c=!0;const[h,g]=$c(f,t,!0);he(o,h),g&&a.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!c)return oe(e)&&r.set(e,Qt),Qt;if($(i))for(let u=0;u<i.length;u++){const f=Je(i[u]);Ro(f)&&(o[f]=se)}else if(i)for(const u in i){const f=Je(u);if(Ro(f)){const h=i[u],g=o[f]=$(h)||H(h)?{type:h}:he({},h);if(g){const y=xo(Boolean,g.type),R=xo(String,g.type);g[0]=y>-1,g[1]=R<0||y<R,(y>-1||G(g,"default"))&&a.push(f)}}}const l=[o,a];return oe(e)&&r.set(e,l),l}function Ro(e){return e[0]!=="$"&&!vn(e)}function Co(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function Po(e,t){return Co(e)===Co(t)}function xo(e,t){return $(t)?t.findIndex(n=>Po(n,e)):H(t)&&Po(t,e)?0:-1}const Bc=e=>e[0]==="_"||e==="$stable",xi=e=>$(e)?e.map(ze):[ze(e)],Ed=(e,t,n)=>{if(t._n)return t;const r=Bf((...s)=>xi(t(...s)),n);return r._c=!1,r},Hc=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Bc(s))continue;const i=e[s];if(H(i))t[s]=Ed(s,i,r);else if(i!=null){const o=xi(i);t[s]=()=>o}}},Wc=(e,t)=>{const n=xi(t);e.slots.default=()=>n},Id=(e,t)=>{const n=e.slots=Fc();if(e.vnode.shapeFlag&32){const r=t._;r?(he(n,t),Qa(n,"_",r,!0)):Hc(t,n)}else t&&Wc(e,t)},Sd=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=se;if(r.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:(he(s,t),!n&&a===1&&delete s._):(i=!t.$stable,Hc(t,s)),o=t}else t&&(Wc(e,t),o={default:1});if(i)for(const a in s)!Bc(a)&&o[a]==null&&delete s[a]};function Ws(e,t,n,r,s=!1){if($(e)){e.forEach((h,g)=>Ws(h,t&&($(t)?t[g]:t),n,r,s));return}if(fr(r)&&!s)return;const i=r.shapeFlag&4?Xr(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=e,l=t&&t.r,u=a.refs===se?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(ue(l)?(u[l]=null,G(f,l)&&(f[l]=null)):Oe(l)&&(l.value=null)),H(c))Et(c,a,12,[o,u]);else{const h=ue(c),g=Oe(c);if(h||g){const y=()=>{if(e.f){const R=h?G(f,c)?f[c]:u[c]:c.value;s?$(R)&&gi(R,i):$(R)?R.includes(i)||R.push(i):h?(u[c]=[i],G(f,c)&&(f[c]=u[c])):(c.value=[i],e.k&&(u[e.k]=c.value))}else h?(u[c]=o,G(f,c)&&(f[c]=o)):g&&(c.value=o,e.k&&(u[e.k]=o))};o?(y.id=-1,Ee(y,n)):y()}}}const Ee=Yf;function Td(e){return Od(e)}function Od(e,t){const n=Za();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:h,setScopeId:g=Pe,insertStaticContent:y}=e,R=(d,p,m,v=null,b=null,S=null,P=void 0,I=null,T=!!p.dynamicChildren)=>{if(d===p)return;d&&!gn(d,p)&&(v=C(d),we(d,b,S,!0),d=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:w,ref:k,shapeFlag:F}=p;switch(w){case Jr:M(d,p,m,v);break;case Ht:O(d,p,m,v);break;case hr:d==null&&A(p,m,v,P);break;case Xe:Ve(d,p,m,v,b,S,P,I,T);break;default:F&1?j(d,p,m,v,b,S,P,I,T):F&6?ot(d,p,m,v,b,S,P,I,T):(F&64||F&128)&&w.process(d,p,m,v,b,S,P,I,T,re)}k!=null&&b&&Ws(k,d&&d.ref,S,p||d,!p)},M=(d,p,m,v)=>{if(d==null)r(p.el=a(p.children),m,v);else{const b=p.el=d.el;p.children!==d.children&&l(b,p.children)}},O=(d,p,m,v)=>{d==null?r(p.el=c(p.children||""),m,v):p.el=d.el},A=(d,p,m,v)=>{[d.el,d.anchor]=y(d.children,p,m,v,d.el,d.anchor)},E=({el:d,anchor:p},m,v)=>{let b;for(;d&&d!==p;)b=h(d),r(d,m,v),d=b;r(p,m,v)},N=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=h(d),s(d),d=m;s(p)},j=(d,p,m,v,b,S,P,I,T)=>{p.type==="svg"?P="svg":p.type==="math"&&(P="mathml"),d==null?D(p,m,v,b,S,P,I,T):le(d,p,b,S,P,I,T)},D=(d,p,m,v,b,S,P,I)=>{let T,w;const{props:k,shapeFlag:F,transition:U,dirs:B}=d;if(T=d.el=o(d.type,S,k&&k.is,k),F&8?u(T,d.children):F&16&&ce(d.children,T,null,v,b,ds(d,S),P,I),B&&xt(d,null,v,"created"),Y(T,d,d.scopeId,P,v),k){for(const Q in k)Q!=="value"&&!vn(Q)&&i(T,Q,null,k[Q],S,d.children,v,b,x);"value"in k&&i(T,"value",null,k.value,S),(w=k.onVnodeBeforeMount)&&Be(w,v,d)}B&&xt(d,null,v,"beforeMount");const q=Ad(b,U);q&&U.beforeEnter(T),r(T,p,m),((w=k&&k.onVnodeMounted)||q||B)&&Ee(()=>{w&&Be(w,v,d),q&&U.enter(T),B&&xt(d,null,v,"mounted")},b)},Y=(d,p,m,v,b)=>{if(m&&g(d,m),v)for(let S=0;S<v.length;S++)g(d,v[S]);if(b){let S=b.subTree;if(p===S){const P=b.vnode;Y(d,P,P.scopeId,P.slotScopeIds,b.parent)}}},ce=(d,p,m,v,b,S,P,I,T=0)=>{for(let w=T;w<d.length;w++){const k=d[w]=I?ht(d[w]):ze(d[w]);R(null,k,p,m,v,b,S,P,I)}},le=(d,p,m,v,b,S,P)=>{const I=p.el=d.el;let{patchFlag:T,dynamicChildren:w,dirs:k}=p;T|=d.patchFlag&16;const F=d.props||se,U=p.props||se;let B;if(m&&kt(m,!1),(B=U.onVnodeBeforeUpdate)&&Be(B,m,p,d),k&&xt(p,d,m,"beforeUpdate"),m&&kt(m,!0),w?be(d.dynamicChildren,w,I,m,v,ds(p,b),S):P||X(d,p,I,null,m,v,ds(p,b),S,!1),T>0){if(T&16)je(I,p,F,U,m,v,b);else if(T&2&&F.class!==U.class&&i(I,"class",null,U.class,b),T&4&&i(I,"style",F.style,U.style,b),T&8){const q=p.dynamicProps;for(let Q=0;Q<q.length;Q++){const ie=q[Q],fe=F[ie],De=U[ie];(De!==fe||ie==="value")&&i(I,ie,fe,De,b,d.children,m,v,x)}}T&1&&d.children!==p.children&&u(I,p.children)}else!P&&w==null&&je(I,p,F,U,m,v,b);((B=U.onVnodeUpdated)||k)&&Ee(()=>{B&&Be(B,m,p,d),k&&xt(p,d,m,"updated")},v)},be=(d,p,m,v,b,S,P)=>{for(let I=0;I<p.length;I++){const T=d[I],w=p[I],k=T.el&&(T.type===Xe||!gn(T,w)||T.shapeFlag&70)?f(T.el):m;R(T,w,k,null,v,b,S,P,!0)}},je=(d,p,m,v,b,S,P)=>{if(m!==v){if(m!==se)for(const I in m)!vn(I)&&!(I in v)&&i(d,I,m[I],null,P,p.children,b,S,x);for(const I in v){if(vn(I))continue;const T=v[I],w=m[I];T!==w&&I!=="value"&&i(d,I,w,T,P,p.children,b,S,x)}"value"in v&&i(d,"value",m.value,v.value,P)}},Ve=(d,p,m,v,b,S,P,I,T)=>{const w=p.el=d?d.el:a(""),k=p.anchor=d?d.anchor:a("");let{patchFlag:F,dynamicChildren:U,slotScopeIds:B}=p;B&&(I=I?I.concat(B):B),d==null?(r(w,m,v),r(k,m,v),ce(p.children||[],m,k,b,S,P,I,T)):F>0&&F&64&&U&&d.dynamicChildren?(be(d.dynamicChildren,U,m,b,S,P,I),(p.key!=null||b&&p===b.subTree)&&zc(d,p,!0)):X(d,p,m,k,b,S,P,I,T)},ot=(d,p,m,v,b,S,P,I,T)=>{p.slotScopeIds=I,d==null?p.shapeFlag&512?b.ctx.activate(p,m,v,P,T):ke(p,m,v,b,S,P,T):at(d,p,T)},ke=(d,p,m,v,b,S,P)=>{const I=d.component=Ud(d,v,b);if(xc(d)&&(I.ctx.renderer=re),Fd(I),I.asyncDep){if(b&&b.registerDep(I,ae),!d.el){const T=I.subTree=Se(Ht);O(null,T,p,m)}}else ae(I,d,p,m,b,S,P)},at=(d,p,m)=>{const v=p.component=d.component;if(zf(d,p,m))if(v.asyncDep&&!v.asyncResolved){Z(v,p,m);return}else v.next=p,Ff(v.update),v.effect.dirty=!0,v.update();else p.el=d.el,v.vnode=p},ae=(d,p,m,v,b,S,P)=>{const I=()=>{if(d.isMounted){let{next:k,bu:F,u:U,parent:B,vnode:q}=d;{const Gt=Kc(d);if(Gt){k&&(k.el=q.el,Z(d,k,P)),Gt.asyncDep.then(()=>{d.isUnmounted||I()});return}}let Q=k,ie;kt(d,!1),k?(k.el=q.el,Z(d,k,P)):k=q,F&&lr(F),(ie=k.props&&k.props.onVnodeBeforeUpdate)&&Be(ie,B,k,q),kt(d,!0);const fe=us(d),De=d.subTree;d.subTree=fe,R(De,fe,f(De.el),C(De),d,b,S),k.el=fe.el,Q===null&&Kf(d,fe.el),U&&Ee(U,b),(ie=k.props&&k.props.onVnodeUpdated)&&Ee(()=>Be(ie,B,k,q),b)}else{let k;const{el:F,props:U}=p,{bm:B,m:q,parent:Q}=d,ie=fr(p);if(kt(d,!1),B&&lr(B),!ie&&(k=U&&U.onVnodeBeforeMount)&&Be(k,Q,p),kt(d,!0),F&&z){const fe=()=>{d.subTree=us(d),z(F,d.subTree,d,b,null)};ie?p.type.__asyncLoader().then(()=>!d.isUnmounted&&fe()):fe()}else{const fe=d.subTree=us(d);R(null,fe,m,v,d,b,S),p.el=fe.el}if(q&&Ee(q,b),!ie&&(k=U&&U.onVnodeMounted)){const fe=p;Ee(()=>Be(k,Q,fe),b)}(p.shapeFlag&256||Q&&fr(Q.vnode)&&Q.vnode.shapeFlag&256)&&d.a&&Ee(d.a,b),d.isMounted=!0,p=m=v=null}},T=d.effect=new bi(I,Pe,()=>Ri(w),d.scope),w=d.update=()=>{T.dirty&&T.run()};w.id=d.uid,kt(d,!0),w()},Z=(d,p,m)=>{p.component=d;const v=d.vnode.props;d.vnode=p,d.next=null,wd(d,p.props,v,m),Sd(d,p.children,m),Ot(),wo(d),At()},X=(d,p,m,v,b,S,P,I,T=!1)=>{const w=d&&d.children,k=d?d.shapeFlag:0,F=p.children,{patchFlag:U,shapeFlag:B}=p;if(U>0){if(U&128){Pt(w,F,m,v,b,S,P,I,T);return}else if(U&256){Ne(w,F,m,v,b,S,P,I,T);return}}B&8?(k&16&&x(w,b,S),F!==w&&u(m,F)):k&16?B&16?Pt(w,F,m,v,b,S,P,I,T):x(w,b,S,!0):(k&8&&u(m,""),B&16&&ce(F,m,v,b,S,P,I,T))},Ne=(d,p,m,v,b,S,P,I,T)=>{d=d||Qt,p=p||Qt;const w=d.length,k=p.length,F=Math.min(w,k);let U;for(U=0;U<F;U++){const B=p[U]=T?ht(p[U]):ze(p[U]);R(d[U],B,m,null,b,S,P,I,T)}w>k?x(d,b,S,!0,!1,F):ce(p,m,v,b,S,P,I,T,F)},Pt=(d,p,m,v,b,S,P,I,T)=>{let w=0;const k=p.length;let F=d.length-1,U=k-1;for(;w<=F&&w<=U;){const B=d[w],q=p[w]=T?ht(p[w]):ze(p[w]);if(gn(B,q))R(B,q,m,null,b,S,P,I,T);else break;w++}for(;w<=F&&w<=U;){const B=d[F],q=p[U]=T?ht(p[U]):ze(p[U]);if(gn(B,q))R(B,q,m,null,b,S,P,I,T);else break;F--,U--}if(w>F){if(w<=U){const B=U+1,q=B<k?p[B].el:v;for(;w<=U;)R(null,p[w]=T?ht(p[w]):ze(p[w]),m,q,b,S,P,I,T),w++}}else if(w>U)for(;w<=F;)we(d[w],b,S,!0),w++;else{const B=w,q=w,Q=new Map;for(w=q;w<=U;w++){const Ae=p[w]=T?ht(p[w]):ze(p[w]);Ae.key!=null&&Q.set(Ae.key,w)}let ie,fe=0;const De=U-q+1;let Gt=!1,lo=0;const mn=new Array(De);for(w=0;w<De;w++)mn[w]=0;for(w=B;w<=F;w++){const Ae=d[w];if(fe>=De){we(Ae,b,S,!0);continue}let $e;if(Ae.key!=null)$e=Q.get(Ae.key);else for(ie=q;ie<=U;ie++)if(mn[ie-q]===0&&gn(Ae,p[ie])){$e=ie;break}$e===void 0?we(Ae,b,S,!0):(mn[$e-q]=w+1,$e>=lo?lo=$e:Gt=!0,R(Ae,p[$e],m,null,b,S,P,I,T),fe++)}const uo=Gt?Rd(mn):Qt;for(ie=uo.length-1,w=De-1;w>=0;w--){const Ae=q+w,$e=p[Ae],fo=Ae+1<k?p[Ae+1].el:v;mn[w]===0?R(null,$e,m,fo,b,S,P,I,T):Gt&&(ie<0||w!==uo[ie]?Me($e,m,fo,2):ie--)}}},Me=(d,p,m,v,b=null)=>{const{el:S,type:P,transition:I,children:T,shapeFlag:w}=d;if(w&6){Me(d.component.subTree,p,m,v);return}if(w&128){d.suspense.move(p,m,v);return}if(w&64){P.move(d,p,m,re);return}if(P===Xe){r(S,p,m);for(let F=0;F<T.length;F++)Me(T[F],p,m,v);r(d.anchor,p,m);return}if(P===hr){E(d,p,m);return}if(v!==2&&w&1&&I)if(v===0)I.beforeEnter(S),r(S,p,m),Ee(()=>I.enter(S),b);else{const{leave:F,delayLeave:U,afterLeave:B}=I,q=()=>r(S,p,m),Q=()=>{F(S,()=>{q(),B&&B()})};U?U(S,q,Q):Q()}else r(S,p,m)},we=(d,p,m,v=!1,b=!1)=>{const{type:S,props:P,ref:I,children:T,dynamicChildren:w,shapeFlag:k,patchFlag:F,dirs:U}=d;if(I!=null&&Ws(I,null,m,d,!0),k&256){p.ctx.deactivate(d);return}const B=k&1&&U,q=!fr(d);let Q;if(q&&(Q=P&&P.onVnodeBeforeUnmount)&&Be(Q,p,d),k&6)_(d.component,m,v);else{if(k&128){d.suspense.unmount(m,v);return}B&&xt(d,null,p,"beforeUnmount"),k&64?d.type.remove(d,p,m,b,re,v):w&&(S!==Xe||F>0&&F&64)?x(w,p,m,!1,!0):(S===Xe&&F&384||!b&&k&16)&&x(T,p,m),v&&qt(d)}(q&&(Q=P&&P.onVnodeUnmounted)||B)&&Ee(()=>{Q&&Be(Q,p,d),B&&xt(d,null,p,"unmounted")},m)},qt=d=>{const{type:p,el:m,anchor:v,transition:b}=d;if(p===Xe){co(m,v);return}if(p===hr){N(d);return}const S=()=>{s(m),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(d.shapeFlag&1&&b&&!b.persisted){const{leave:P,delayLeave:I}=b,T=()=>P(m,S);I?I(d.el,S,T):T()}else S()},co=(d,p)=>{let m;for(;d!==p;)m=h(d),s(d),d=m;s(p)},_=(d,p,m)=>{const{bum:v,scope:b,update:S,subTree:P,um:I}=d;v&&lr(v),b.stop(),S&&(S.active=!1,we(P,d,p,m)),I&&Ee(I,p),Ee(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},x=(d,p,m,v=!1,b=!1,S=0)=>{for(let P=S;P<d.length;P++)we(d[P],p,m,v,b)},C=d=>d.shapeFlag&6?C(d.component.subTree):d.shapeFlag&128?d.suspense.next():h(d.anchor||d.el);let L=!1;const ee=(d,p,m)=>{d==null?p._vnode&&we(p._vnode,null,null,!0):R(p._vnode||null,d,p,null,null,null,m),L||(L=!0,wo(),Ic(),L=!1),p._vnode=d},re={p:R,um:we,m:Me,r:qt,mt:ke,mc:ce,pc:X,pbc:be,n:C,o:e};let K,z;return{render:ee,hydrate:K,createApp:vd(ee,K)}}function ds({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function kt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Ad(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function zc(e,t,n=!1){const r=e.children,s=t.children;if($(r)&&$(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=ht(s[i]),a.el=o.el),n||zc(o,a)),a.type===Jr&&(a.el=o.el)}}function Rd(e){const t=e.slice(),n=[0];let r,s,i,o,a;const c=e.length;for(r=0;r<c;r++){const l=e[r];if(l!==0){if(s=n[n.length-1],e[s]<l){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<l?i=a+1:o=a;l<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function Kc(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Kc(t)}const Cd=e=>e.__isTeleport,Xe=Symbol.for("v-fgt"),Jr=Symbol.for("v-txt"),Ht=Symbol.for("v-cmt"),hr=Symbol.for("v-stc"),In=[];let Le=null;function qc(e=!1){In.push(Le=e?null:[])}function Pd(){In.pop(),Le=In[In.length-1]||null}let Dn=1;function ko(e){Dn+=e}function Gc(e){return e.dynamicChildren=Dn>0?Le||Qt:null,Pd(),Dn>0&&Le&&Le.push(e),e}function r0(e,t,n,r,s,i){return Gc(Xc(e,t,n,r,s,i,!0))}function Jc(e,t,n,r,s){return Gc(Se(e,t,n,r,s,!0))}function zs(e){return e?e.__v_isVNode===!0:!1}function gn(e,t){return e.type===t.type&&e.key===t.key}const Yc=({key:e})=>e??null,pr=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ue(e)||Oe(e)||H(e)?{i:ve,r:e,k:t,f:!!n}:e:null);function Xc(e,t=null,n=null,r=0,s=null,i=e===Xe?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Yc(t),ref:t&&pr(t),scopeId:Oc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ve};return a?(ki(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=ue(n)?8:16),Dn>0&&!o&&Le&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Le.push(c),c}const Se=xd;function xd(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===Gf)&&(e=Ht),zs(e)){const a=an(e,t,!0);return n&&ki(a,n),Dn>0&&!i&&Le&&(a.shapeFlag&6?Le[Le.indexOf(e)]=a:Le.push(a)),a.patchFlag|=-2,a}if(Bd(e)&&(e=e.__vccOpts),t){t=kd(t);let{class:a,style:c}=t;a&&!ue(a)&&(t.class=vi(a)),oe(c)&&(mc(c)&&!$(c)&&(c=he({},c)),t.style=_i(c))}const o=ue(e)?1:Jf(e)?128:Cd(e)?64:oe(e)?4:H(e)?2:0;return Xc(e,t,n,r,s,o,i,!0)}function kd(e){return e?mc(e)||jc(e)?he({},e):e:null}function an(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=e,l=t?Md(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Yc(l),ref:t&&t.ref?n&&i?$(i)?i.concat(pr(t)):[i,pr(t)]:pr(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Xe?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&an(e.ssContent),ssFallback:e.ssFallback&&an(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&(u.transition=c.clone(u)),u}function Nd(e=" ",t=0){return Se(Jr,null,e,t)}function s0(e,t){const n=Se(hr,null,e);return n.staticCount=t,n}function i0(e="",t=!1){return t?(qc(),Jc(Ht,null,e)):Se(Ht,null,e)}function ze(e){return e==null||typeof e=="boolean"?Se(Ht):$(e)?Se(Xe,null,e.slice()):typeof e=="object"?ht(e):Se(Jr,null,String(e))}function ht(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:an(e)}function ki(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if($(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),ki(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!jc(t)?t._ctx=ve:s===3&&ve&&(ve.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else H(t)?(t={default:t,_ctx:ve},n=32):(t=String(t),r&64?(n=16,t=[Nd(t)]):n=8);e.children=t,e.shapeFlag|=n}function Md(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=vi([t.class,r.class]));else if(s==="style")t.style=_i([t.style,r.style]);else if(Vr(s)){const i=t[s],o=r[s];o&&i!==o&&!($(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function Be(e,t,n,r=null){Ue(e,t,7,[n,r])}const Dd=Lc();let Ld=0;function Ud(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||Dd,i={uid:Ld++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new cf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$c(r,s),emitsOptions:Tc(r,s),emit:null,emitted:null,propsDefaults:se,inheritAttrs:r.inheritAttrs,ctx:se,data:se,props:se,attrs:se,slots:se,refs:se,setupState:se,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=$f.bind(null,i),e.ce&&e.ce(i),i}let pe=null;const Ni=()=>pe||ve;let Or,Ks;{const e=Za(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Or=t("__VUE_INSTANCE_SETTERS__",n=>pe=n),Ks=t("__VUE_SSR_SETTERS__",n=>Yr=n)}const Bn=e=>{const t=pe;return Or(e),e.scope.on(),()=>{e.scope.off(),Or(t)}},No=()=>{pe&&pe.scope.off(),Or(null)};function Qc(e){return e.vnode.shapeFlag&4}let Yr=!1;function Fd(e,t=!1){t&&Ks(t);const{props:n,children:r}=e.vnode,s=Qc(e);bd(e,n,s,t),Id(e,r);const i=s?jd(e,t):void 0;return t&&Ks(!1),i}function jd(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,fd);const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?el(e):null,i=Bn(e);Ot();const o=Et(r,e,0,[e.props,s]);if(At(),i(),Ja(o)){if(o.then(No,No),t)return o.then(a=>{Mo(e,a,t)}).catch(a=>{zr(a,e,0)});e.asyncDep=o}else Mo(e,o,t)}else Zc(e,t)}function Mo(e,t,n){H(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:oe(t)&&(e.setupState=vc(t)),Zc(e,n)}let Do;function Zc(e,t,n){const r=e.type;if(!e.render){if(!t&&Do&&!r.render){const s=r.template||Pi(e).template;if(s){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:c}=r,l=he(he({isCustomElement:i,delimiters:a},o),c);r.render=Do(s,l)}}e.render=r.render||Pe}{const s=Bn(e);Ot();try{hd(e)}finally{At(),s()}}}const Vd={get(e,t){return Te(e,"get",""),e[t]}};function el(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Vd),slots:e.slots,emit:e.emit,expose:t}}function Xr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(vc(xf(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in wn)return wn[n](e)},has(t,n){return n in t||n in wn}}))}function $d(e,t=!0){return H(e)?e.displayName||e.name:e.name||t&&e.__name}function Bd(e){return H(e)&&"__vccOpts"in e}const de=(e,t)=>kf(e,t,Yr);function Qr(e,t,n){const r=arguments.length;return r===2?oe(t)&&!$(t)?zs(t)?Se(e,null,[t]):Se(e,t):Se(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&zs(n)&&(n=[n]),Se(e,t,n))}const Hd="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Wd="http://www.w3.org/2000/svg",zd="http://www.w3.org/1998/Math/MathML",pt=typeof document<"u"?document:null,Lo=pt&&pt.createElement("template"),Kd={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?pt.createElementNS(Wd,e):t==="mathml"?pt.createElementNS(zd,e):pt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>pt.createTextNode(e),createComment:e=>pt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>pt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Lo.innerHTML=r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e;const a=Lo.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},qd=Symbol("_vtc");function Gd(e,t,n){const r=e[qd];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Uo=Symbol("_vod"),Jd=Symbol("_vsh"),Yd=Symbol(""),Xd=/(^|;)\s*display\s*:/;function Qd(e,t,n){const r=e.style,s=ue(n);let i=!1;if(n&&!s){if(t)if(ue(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&mr(r,a,"")}else for(const o in t)n[o]==null&&mr(r,o,"");for(const o in n)o==="display"&&(i=!0),mr(r,o,n[o])}else if(s){if(t!==n){const o=r[Yd];o&&(n+=";"+o),r.cssText=n,i=Xd.test(n)}}else t&&e.removeAttribute("style");Uo in e&&(e[Uo]=i?r.display:"",e[Jd]&&(r.display="none"))}const Fo=/\s*!important$/;function mr(e,t,n){if($(n))n.forEach(r=>mr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Zd(e,t);Fo.test(n)?e.setProperty(dn(r),n.replace(Fo,""),"important"):e[r]=n}}const jo=["Webkit","Moz","ms"],hs={};function Zd(e,t){const n=hs[t];if(n)return n;let r=Je(t);if(r!=="filter"&&r in e)return hs[t]=r;r=Hr(r);for(let s=0;s<jo.length;s++){const i=jo[s]+r;if(i in e)return hs[t]=i}return t}const Vo="http://www.w3.org/1999/xlink";function eh(e,t,n,r,s){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Vo,t.slice(6,t.length)):e.setAttributeNS(Vo,t,n);else{const i=af(t);n==null||i&&!ec(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function th(e,t,n,r,s,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,s,i),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){const l=a==="OPTION"?e.getAttribute("value")||"":e.value,u=n??"";(l!==u||!("_value"in e))&&(e.value=u),n==null&&e.removeAttribute(t),e._value=n;return}let c=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=ec(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function Yt(e,t,n,r){e.addEventListener(t,n,r)}function nh(e,t,n,r){e.removeEventListener(t,n,r)}const $o=Symbol("_vei");function rh(e,t,n,r,s=null){const i=e[$o]||(e[$o]={}),o=i[t];if(r&&o)o.value=r;else{const[a,c]=sh(t);if(r){const l=i[t]=ah(r,s);Yt(e,a,l,c)}else o&&(nh(e,a,o,c),i[t]=void 0)}}const Bo=/(?:Once|Passive|Capture)$/;function sh(e){let t;if(Bo.test(e)){t={};let r;for(;r=e.match(Bo);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):dn(e.slice(2)),t]}let ps=0;const ih=Promise.resolve(),oh=()=>ps||(ih.then(()=>ps=0),ps=Date.now());function ah(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ue(ch(r,n.value),t,5,[r])};return n.value=e,n.attached=oh(),n}function ch(e,t){if($(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const Ho=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,lh=(e,t,n,r,s,i,o,a,c)=>{const l=s==="svg";t==="class"?Gd(e,r,l):t==="style"?Qd(e,n,r):Vr(t)?mi(t)||rh(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):uh(e,t,r,l))?th(e,t,r,i,o,a,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),eh(e,t,r,l))};function uh(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Ho(t)&&H(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ho(t)&&ue(n)?!1:t in e}const Wo=e=>{const t=e.props["onUpdate:modelValue"]||!1;return $(t)?n=>lr(t,n):t};function fh(e){e.target.composing=!0}function zo(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ms=Symbol("_assign"),o0={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e[ms]=Wo(s);const i=r||s.props&&s.props.type==="number";Yt(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),i&&(a=Ms(a)),e[ms](a)}),n&&Yt(e,"change",()=>{e.value=e.value.trim()}),t||(Yt(e,"compositionstart",fh),Yt(e,"compositionend",zo),Yt(e,"change",zo))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:s}},i){if(e[ms]=Wo(i),e.composing)return;const o=(s||e.type==="number")&&!/^0\d/.test(e.value)?Ms(e.value):e.value,a=t??"";o!==a&&(document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===a)||(e.value=a))}},dh=["ctrl","shift","alt","meta"],hh={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>dh.some(n=>e[`${n}Key`]&&!t.includes(n))},a0=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<t.length;o++){const a=hh[t[o]];if(a&&a(s,t))return}return e(s,...i)})},ph=he({patchProp:lh},Kd);let Ko;function mh(){return Ko||(Ko=Td(ph))}const gh=(...e)=>{const t=mh().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=_h(r);if(!s)return;const i=t._component;!H(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,yh(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function yh(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function _h(e){return ue(e)?document.querySelector(e):e}/*!
  * vue-router v4.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const tl=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",hn=e=>tl?Symbol(e):"_vr_"+e,vh=hn("rvlm"),qo=hn("rvd"),Zr=hn("r"),nl=hn("rl"),qs=hn("rvl"),Xt=typeof window<"u";function bh(e){return e.__esModule||tl&&e[Symbol.toStringTag]==="Module"}const te=Object.assign;function gs(e,t){const n={};for(const r in t){const s=t[r];n[r]=Array.isArray(s)?s.map(e):e(s)}return n}const Sn=()=>{},wh=/\/$/,Eh=e=>e.replace(wh,"");function ys(e,t,n="/"){let r,s={},i="",o="";const a=t.indexOf("?"),c=t.indexOf("#",a>-1?a:0);return a>-1&&(r=t.slice(0,a),i=t.slice(a+1,c>-1?c:t.length),s=e(i)),c>-1&&(r=r||t.slice(0,c),o=t.slice(c,t.length)),r=Oh(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Ih(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Go(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Sh(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&cn(t.matched[r],n.matched[s])&&rl(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function cn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function rl(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Th(e[n],t[n]))return!1;return!0}function Th(e,t){return Array.isArray(e)?Jo(e,t):Array.isArray(t)?Jo(t,e):e===t}function Jo(e,t){return Array.isArray(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Oh(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Ln;(function(e){e.pop="pop",e.push="push"})(Ln||(Ln={}));var Tn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Tn||(Tn={}));function Ah(e){if(!e)if(Xt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Eh(e)}const Rh=/^[^#]+#/;function Ch(e,t){return e.replace(Rh,"#")+t}function Ph(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const es=()=>({left:window.pageXOffset,top:window.pageYOffset});function xh(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=Ph(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Yo(e,t){return(history.state?history.state.position-t:-1)+e}const Gs=new Map;function kh(e,t){Gs.set(e,t)}function Nh(e){const t=Gs.get(e);return Gs.delete(e),t}let Mh=()=>location.protocol+"//"+location.host;function sl(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let a=s.includes(e.slice(i))?e.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Go(c,"")}return Go(n,e)+r+s}function Dh(e,t,n,r){let s=[],i=[],o=null;const a=({state:h})=>{const g=sl(e,location),y=n.value,R=t.value;let M=0;if(h){if(n.value=g,t.value=h,o&&o===y){o=null;return}M=R?h.position-R.position:0}else r(g);s.forEach(O=>{O(n.value,y,{delta:M,type:Ln.pop,direction:M?M>0?Tn.forward:Tn.back:Tn.unknown})})};function c(){o=n.value}function l(h){s.push(h);const g=()=>{const y=s.indexOf(h);y>-1&&s.splice(y,1)};return i.push(g),g}function u(){const{history:h}=window;h.state&&h.replaceState(te({},h.state,{scroll:es()}),"")}function f(){for(const h of i)h();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:f}}function Xo(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?es():null}}function Lh(e){const{history:t,location:n}=window,r={value:sl(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=e.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:Mh()+e+c;try{t[u?"replaceState":"pushState"](l,"",h),s.value=l}catch(g){console.error(g),n[u?"replace":"assign"](h)}}function o(c,l){const u=te({},t.state,Xo(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=te({},s.value,t.state,{forward:c,scroll:es()});i(u.current,u,!0);const f=te({},Xo(r.value,c,null),{position:u.position+1},l);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Uh(e){e=Ah(e);const t=Lh(e),n=Dh(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=te({location:"",base:e,go:r,createHref:Ch.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Fh(e){return typeof e=="string"||e&&typeof e=="object"}function il(e){return typeof e=="string"||typeof e=="symbol"}const lt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ol=hn("nf");var Qo;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Qo||(Qo={}));function ln(e,t){return te(new Error,{type:e,[ol]:!0},t)}function ut(e,t){return e instanceof Error&&ol in e&&(t==null||!!(e.type&t))}const Zo="[^/]+?",jh={sensitive:!1,strict:!1,start:!0,end:!0},Vh=/[.+*?^${}()[\]/\\]/g;function $h(e,t){const n=te({},jh,t),r=[];let s=n.start?"^":"";const i=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const h=l[f];let g=40+(n.sensitive?.25:0);if(h.type===0)f||(s+="/"),s+=h.value.replace(Vh,"\\$&"),g+=40;else if(h.type===1){const{value:y,repeatable:R,optional:M,regexp:O}=h;i.push({name:y,repeatable:R,optional:M});const A=O||Zo;if(A!==Zo){g+=10;try{new RegExp(`(${A})`)}catch(N){throw new Error(`Invalid custom RegExp for param "${y}" (${A}): `+N.message)}}let E=R?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;f||(E=M&&l.length<2?`(?:/${E})`:"/"+E),M&&(E+="?"),s+=E,g+=20,M&&(g+=-8),R&&(g+=-20),A===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const g=u[h]||"",y=i[h-1];f[y.name]=g&&y.repeatable?g.split("/"):g}return f}function c(l){let u="",f=!1;for(const h of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const g of h)if(g.type===0)u+=g.value;else if(g.type===1){const{value:y,repeatable:R,optional:M}=g,O=y in l?l[y]:"";if(Array.isArray(O)&&!R)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const A=Array.isArray(O)?O.join("/"):O;if(!A)if(M)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${y}"`);u+=A}}return u}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Bh(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Hh(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=Bh(r[n],s[n]);if(i)return i;n++}return s.length-r.length}const Wh={type:0,value:""},zh=/[a-zA-Z0-9_]/;function Kh(e){if(!e)return[[]];if(e==="/")return[[Wh]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function h(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):h();break;case 4:h(),n=r;break;case 1:c==="("?n=2:zh.test(c)?h():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}function qh(e,t,n){const r=$h(Kh(e.path),n),s=te(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Gh(e,t){const n=[],r=new Map;t=ta({strict:!1,end:!0,sensitive:!1},t);function s(u){return r.get(u)}function i(u,f,h){const g=!h,y=Yh(u);y.aliasOf=h&&h.record;const R=ta(t,u),M=[y];if("alias"in u){const E=typeof u.alias=="string"?[u.alias]:u.alias;for(const N of E)M.push(te({},y,{components:h?h.record.components:y.components,path:N,aliasOf:h?h.record:y}))}let O,A;for(const E of M){const{path:N}=E;if(f&&N[0]!=="/"){const j=f.record.path,D=j[j.length-1]==="/"?"":"/";E.path=f.record.path+(N&&D+N)}if(O=qh(E,f,R),h?h.alias.push(O):(A=A||O,A!==O&&A.alias.push(O),g&&u.name&&!ea(O)&&o(u.name)),"children"in y){const j=y.children;for(let D=0;D<j.length;D++)i(j[D],O,h&&h.children[D])}h=h||O,c(O)}return A?()=>{o(A)}:Sn}function o(u){if(il(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let f=0;for(;f<n.length&&Hh(u,n[f])>=0&&(u.record.path!==n[f].record.path||!al(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!ea(u)&&r.set(u.record.name,u)}function l(u,f){let h,g={},y,R;if("name"in u&&u.name){if(h=r.get(u.name),!h)throw ln(1,{location:u});R=h.record.name,g=te(Jh(f.params,h.keys.filter(A=>!A.optional).map(A=>A.name)),u.params),y=h.stringify(g)}else if("path"in u)y=u.path,h=n.find(A=>A.re.test(y)),h&&(g=h.parse(y),R=h.record.name);else{if(h=f.name?r.get(f.name):n.find(A=>A.re.test(f.path)),!h)throw ln(1,{location:u,currentLocation:f});R=h.record.name,g=te({},f.params,u.params),y=h.stringify(g)}const M=[];let O=h;for(;O;)M.unshift(O.record),O=O.parent;return{name:R,path:y,params:g,matched:M,meta:Qh(M)}}return e.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Jh(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Yh(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Xh(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function Xh(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function ea(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Qh(e){return e.reduce((t,n)=>te(t,n.meta),{})}function ta(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function al(e,t){return t.children.some(n=>n===e||al(e,n))}const cl=/#/g,Zh=/&/g,ep=/\//g,tp=/=/g,np=/\?/g,ll=/\+/g,rp=/%5B/g,sp=/%5D/g,ul=/%5E/g,ip=/%60/g,fl=/%7B/g,op=/%7C/g,dl=/%7D/g,ap=/%20/g;function Mi(e){return encodeURI(""+e).replace(op,"|").replace(rp,"[").replace(sp,"]")}function cp(e){return Mi(e).replace(fl,"{").replace(dl,"}").replace(ul,"^")}function Js(e){return Mi(e).replace(ll,"%2B").replace(ap,"+").replace(cl,"%23").replace(Zh,"%26").replace(ip,"`").replace(fl,"{").replace(dl,"}").replace(ul,"^")}function lp(e){return Js(e).replace(tp,"%3D")}function up(e){return Mi(e).replace(cl,"%23").replace(np,"%3F")}function fp(e){return e==null?"":up(e).replace(ep,"%2F")}function Ar(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function dp(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(ll," "),o=i.indexOf("="),a=Ar(o<0?i:i.slice(0,o)),c=o<0?null:Ar(i.slice(o+1));if(a in t){let l=t[a];Array.isArray(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function na(e){let t="";for(let n in e){const r=e[n];if(n=lp(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&Js(i)):[r&&Js(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function hp(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}function yn(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function mt(e,t,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=f=>{f===!1?a(ln(4,{from:n,to:t})):f instanceof Error?a(f):Fh(f)?a(ln(2,{from:t,to:f})):(i&&r.enterCallbacks[s]===i&&typeof f=="function"&&i.push(f),o())},l=e.call(r&&r.instances[s],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch(f=>a(f))})}function _s(e,t,n,r){const s=[];for(const i of e)for(const o in i.components){let a=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(pp(a)){const l=(a.__vccOpts||a)[t];l&&s.push(mt(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=bh(l)?l.default:l;i.components[o]=u;const h=(u.__vccOpts||u)[t];return h&&mt(h,n,r,i,o)()}))}}return s}function pp(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function ra(e){const t=qe(Zr),n=qe(nl),r=de(()=>t.resolve(Ce(e.to))),s=de(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(cn.bind(null,u));if(h>-1)return h;const g=sa(c[l-2]);return l>1&&sa(u)===g&&f[f.length-1].path!==g?f.findIndex(cn.bind(null,c[l-2])):h}),i=de(()=>s.value>-1&&_p(n.params,r.value.params)),o=de(()=>s.value>-1&&s.value===n.matched.length-1&&rl(n.params,r.value.params));function a(c={}){return yp(c)?t[Ce(e.replace)?"replace":"push"](Ce(e.to)).catch(Sn):Promise.resolve()}return{route:r,href:de(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const mp=qr({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ra,setup(e,{slots:t}){const n=st(ra(e)),{options:r}=qe(Zr),s=de(()=>({[ia(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ia(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Qr("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),gp=mp;function yp(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function _p(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function sa(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ia=(e,t,n)=>e??t??n,vp=qr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const r=qe(qs),s=de(()=>e.route||r.value),i=qe(qo,0),o=de(()=>s.value.matched[i]);dr(qo,i+1),dr(vh,o),dr(qs,s);const a=xe();return ge(()=>[a.value,o.value,e.name],([c,l,u],[f,h,g])=>{l&&(l.instances[u]=c,h&&h!==l&&c&&c===f&&(l.leaveGuards.size||(l.leaveGuards=h.leaveGuards),l.updateGuards.size||(l.updateGuards=h.updateGuards))),c&&l&&(!h||!cn(l,h)||!f)&&(l.enterCallbacks[u]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=s.value,l=o.value,u=l&&l.components[e.name],f=e.name;if(!u)return oa(n.default,{Component:u,route:c});const h=l.props[e.name],g=h?h===!0?c.params:typeof h=="function"?h(c):h:null,R=Qr(u,te({},g,t,{onVnodeUnmounted:M=>{M.component.isUnmounted&&(l.instances[f]=null)},ref:a}));return oa(n.default,{Component:R,route:c})||R}}});function oa(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const hl=vp;function bp(e){const t=Gh(e.routes,e),n=e.parseQuery||dp,r=e.stringifyQuery||na,s=e.history,i=yn(),o=yn(),a=yn(),c=Nf(lt);let l=lt;Xt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=gs.bind(null,_=>""+_),f=gs.bind(null,fp),h=gs.bind(null,Ar);function g(_,x){let C,L;return il(_)?(C=t.getRecordMatcher(_),L=x):L=_,t.addRoute(L,C)}function y(_){const x=t.getRecordMatcher(_);x&&t.removeRoute(x)}function R(){return t.getRoutes().map(_=>_.record)}function M(_){return!!t.getRecordMatcher(_)}function O(_,x){if(x=te({},x||c.value),typeof _=="string"){const z=ys(n,_,x.path),d=t.resolve({path:z.path},x),p=s.createHref(z.fullPath);return te(z,d,{params:h(d.params),hash:Ar(z.hash),redirectedFrom:void 0,href:p})}let C;if("path"in _)C=te({},_,{path:ys(n,_.path,x.path).path});else{const z=te({},_.params);for(const d in z)z[d]==null&&delete z[d];C=te({},_,{params:f(_.params)}),x.params=f(x.params)}const L=t.resolve(C,x),ee=_.hash||"";L.params=u(h(L.params));const re=Ih(r,te({},_,{hash:cp(ee),path:L.path})),K=s.createHref(re);return te({fullPath:re,hash:ee,query:r===na?hp(_.query):_.query||{}},L,{redirectedFrom:void 0,href:K})}function A(_){return typeof _=="string"?ys(n,_,c.value.path):te({},_)}function E(_,x){if(l!==_)return ln(8,{from:x,to:_})}function N(_){return Y(_)}function j(_){return N(te(A(_),{replace:!0}))}function D(_){const x=_.matched[_.matched.length-1];if(x&&x.redirect){const{redirect:C}=x;let L=typeof C=="function"?C(_):C;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=A(L):{path:L},L.params={}),te({query:_.query,hash:_.hash,params:_.params},L)}}function Y(_,x){const C=l=O(_),L=c.value,ee=_.state,re=_.force,K=_.replace===!0,z=D(C);if(z)return Y(te(A(z),{state:ee,force:re,replace:K}),x||C);const d=C;d.redirectedFrom=x;let p;return!re&&Sh(r,L,C)&&(p=ln(16,{to:d,from:L}),Pt(L,L,!0,!1)),(p?Promise.resolve(p):le(d,L)).catch(m=>ut(m)?ut(m,2)?m:Ne(m):Z(m,d,L)).then(m=>{if(m){if(ut(m,2))return Y(te(A(m.to),{state:ee,force:re,replace:K}),x||d)}else m=je(d,L,!0,K,ee);return be(d,L,m),m})}function ce(_,x){const C=E(_,x);return C?Promise.reject(C):Promise.resolve()}function le(_,x){let C;const[L,ee,re]=wp(_,x);C=_s(L.reverse(),"beforeRouteLeave",_,x);for(const z of L)z.leaveGuards.forEach(d=>{C.push(mt(d,_,x))});const K=ce.bind(null,_,x);return C.push(K),Jt(C).then(()=>{C=[];for(const z of i.list())C.push(mt(z,_,x));return C.push(K),Jt(C)}).then(()=>{C=_s(ee,"beforeRouteUpdate",_,x);for(const z of ee)z.updateGuards.forEach(d=>{C.push(mt(d,_,x))});return C.push(K),Jt(C)}).then(()=>{C=[];for(const z of _.matched)if(z.beforeEnter&&!x.matched.includes(z))if(Array.isArray(z.beforeEnter))for(const d of z.beforeEnter)C.push(mt(d,_,x));else C.push(mt(z.beforeEnter,_,x));return C.push(K),Jt(C)}).then(()=>(_.matched.forEach(z=>z.enterCallbacks={}),C=_s(re,"beforeRouteEnter",_,x),C.push(K),Jt(C))).then(()=>{C=[];for(const z of o.list())C.push(mt(z,_,x));return C.push(K),Jt(C)}).catch(z=>ut(z,8)?z:Promise.reject(z))}function be(_,x,C){for(const L of a.list())L(_,x,C)}function je(_,x,C,L,ee){const re=E(_,x);if(re)return re;const K=x===lt,z=Xt?history.state:{};C&&(L||K?s.replace(_.fullPath,te({scroll:K&&z&&z.scroll},ee)):s.push(_.fullPath,ee)),c.value=_,Pt(_,x,C,K),Ne()}let Ve;function ot(){Ve=s.listen((_,x,C)=>{const L=O(_),ee=D(L);if(ee){Y(te(ee,{replace:!0}),L).catch(Sn);return}l=L;const re=c.value;Xt&&kh(Yo(re.fullPath,C.delta),es()),le(L,re).catch(K=>ut(K,12)?K:ut(K,2)?(Y(K.to,L).then(z=>{ut(z,20)&&!C.delta&&C.type===Ln.pop&&s.go(-1,!1)}).catch(Sn),Promise.reject()):(C.delta&&s.go(-C.delta,!1),Z(K,L,re))).then(K=>{K=K||je(L,re,!1),K&&(C.delta?s.go(-C.delta,!1):C.type===Ln.pop&&ut(K,20)&&s.go(-1,!1)),be(L,re,K)}).catch(Sn)})}let ke=yn(),at=yn(),ae;function Z(_,x,C){Ne(_);const L=at.list();return L.length?L.forEach(ee=>ee(_,x,C)):console.error(_),Promise.reject(_)}function X(){return ae&&c.value!==lt?Promise.resolve():new Promise((_,x)=>{ke.add([_,x])})}function Ne(_){return ae||(ae=!_,ot(),ke.list().forEach(([x,C])=>_?C(_):x()),ke.reset()),_}function Pt(_,x,C,L){const{scrollBehavior:ee}=e;if(!Xt||!ee)return Promise.resolve();const re=!C&&Nh(Yo(_.fullPath,0))||(L||!C)&&history.state&&history.state.scroll||null;return wc().then(()=>ee(_,x,re)).then(K=>K&&xh(K)).catch(K=>Z(K,_,x))}const Me=_=>s.go(_);let we;const qt=new Set;return{currentRoute:c,addRoute:g,removeRoute:y,hasRoute:M,getRoutes:R,resolve:O,options:e,push:N,replace:j,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:at.add,isReady:X,install(_){const x=this;_.component("RouterLink",gp),_.component("RouterView",hl),_.config.globalProperties.$router=x,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>Ce(c)}),Xt&&!we&&c.value===lt&&(we=!0,N(s.location).catch(ee=>{}));const C={};for(const ee in lt)C[ee]=de(()=>c.value[ee]);_.provide(Zr,x),_.provide(nl,st(C)),_.provide(qs,c);const L=_.unmount;qt.add(_),_.unmount=function(){qt.delete(_),qt.size<1&&(l=lt,Ve&&Ve(),c.value=lt,we=!1,ae=!1),L()}}}}function Jt(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function wp(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const a=t.matched[o];a&&(e.matched.find(l=>cn(l,a))?r.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(l=>cn(l,c))||s.push(c))}return[n,r,s]}function c0(){return qe(Zr)}const Ep={__name:"App",setup(e){return(t,n)=>(qc(),Jc(Ce(hl)))}};function vs(e){if(e===null||typeof e!="object")return!1;const t=Object.getPrototypeOf(e);return t!==null&&t!==Object.prototype&&Object.getPrototypeOf(t)!==null||Symbol.iterator in e?!1:Symbol.toStringTag in e?Object.prototype.toString.call(e)==="[object Module]":!0}function Ys(e,t,n=".",r){if(!vs(t))return Ys(e,{},n,r);const s=Object.assign({},t);for(const i in e){if(i==="__proto__"||i==="constructor")continue;const o=e[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:vs(o)&&vs(s[i])?s[i]=Ys(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function Ip(e){return(...t)=>t.reduce((n,r)=>Ys(n,r,"",e),{})}const pl=Ip();function ml(e){return nc()?(uf(e),!0):!1}function Di(e){return typeof e=="function"?e():Ce(e)}const Sp=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Tp=e=>e!=null,Op=Object.prototype.toString,Rr=e=>Op.call(e)==="[object Object]",gr=()=>{};function Ap(e){return Ni()}function Rp(e,t){Ap()&&Ci(e,t)}function On(e){var t;const n=Di(e);return(t=n==null?void 0:n.$el)!=null?t:n}const gl=Sp?window:void 0;function He(...e){let t,n,r,s;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,r,s]=e,t=gl):[t,n,r,s]=e,!t)return gr;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const i=[],o=()=>{i.forEach(u=>u()),i.length=0},a=(u,f,h,g)=>(u.addEventListener(f,h,g),()=>u.removeEventListener(f,h,g)),c=ge(()=>[On(t),Di(s)],([u,f])=>{if(o(),!u)return;const h=Rr(f)?{...f}:f;i.push(...n.flatMap(g=>r.map(y=>a(u,g,y,h))))},{immediate:!0,flush:"post"}),l=()=>{c(),o()};return ml(l),l}function Cp(){const e=xe(!1),t=Ni();return t&&Nc(()=>{e.value=!0},t),e}function Pp(e){const t=Cp();return de(()=>(t.value,!!e()))}function xp(e,t,n={}){const{root:r,rootMargin:s="0px",threshold:i=.1,window:o=gl,immediate:a=!0}=n,c=Pp(()=>o&&"IntersectionObserver"in o),l=de(()=>{const y=Di(e);return(Array.isArray(y)?y:[y]).map(On).filter(Tp)});let u=gr;const f=xe(a),h=c.value?ge(()=>[l.value,On(r),f.value],([y,R])=>{if(u(),!f.value||!y.length)return;const M=new IntersectionObserver(t,{root:On(R),rootMargin:s,threshold:i});y.forEach(O=>O&&M.observe(O)),u=()=>{M.disconnect(),u=gr}},{immediate:a,flush:"post"}):gr,g=()=>{u(),h(),f.value=!1};return ml(g),{isSupported:c,isActive:f,pause(){u(),f.value=!1},resume(){f.value=!0},stop:g}}const yl=1/60*1e3,kp=typeof performance<"u"?()=>performance.now():()=>Date.now(),_l=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(kp()),yl);function Np(e){let t=[],n=[],r=0,s=!1,i=!1;const o=new WeakSet,a={schedule:(c,l=!1,u=!1)=>{const f=u&&s,h=f?t:n;return l&&o.add(c),h.indexOf(c)===-1&&(h.push(c),f&&s&&(r=t.length)),c},cancel:c=>{const l=n.indexOf(c);l!==-1&&n.splice(l,1),o.delete(c)},process:c=>{if(s){i=!0;return}if(s=!0,[t,n]=[n,t],n.length=0,r=t.length,r)for(let l=0;l<r;l++){const u=t[l];u(c),o.has(u)&&(a.schedule(u),e())}s=!1,i&&(i=!1,a.process(c))}};return a}const Mp=40;let Xs=!0,Un=!1,Qs=!1;const tn={delta:0,timestamp:0},Hn=["read","update","preRender","render","postRender"],ts=Hn.reduce((e,t)=>(e[t]=Np(()=>Un=!0),e),{}),Zs=Hn.reduce((e,t)=>{const n=ts[t];return e[t]=(r,s=!1,i=!1)=>(Un||Up(),n.schedule(r,s,i)),e},{}),Dp=Hn.reduce((e,t)=>(e[t]=ts[t].cancel,e),{});Hn.reduce((e,t)=>(e[t]=()=>ts[t].process(tn),e),{});const Lp=e=>ts[e].process(tn),vl=e=>{Un=!1,tn.delta=Xs?yl:Math.max(Math.min(e-tn.timestamp,Mp),1),tn.timestamp=e,Qs=!0,Hn.forEach(Lp),Qs=!1,Un&&(Xs=!1,_l(vl))},Up=()=>{Un=!0,Xs=!0,Qs||_l(vl)},bl=()=>tn;function wl(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n}var aa=function(){};const ei=(e,t,n)=>Math.min(Math.max(n,e),t),bs=.001,Fp=.01,jp=10,Vp=.05,$p=1;function Bp({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let s,i,o=1-t;o=ei(Vp,$p,o),e=ei(Fp,jp,e/1e3),o<1?(s=l=>{const u=l*o,f=u*e,h=u-n,g=ti(l,o),y=Math.exp(-f);return bs-h/g*y},i=l=>{const f=l*o*e,h=f*n+n,g=Math.pow(o,2)*Math.pow(l,2)*e,y=Math.exp(-f),R=ti(Math.pow(l,2),o);return(-s(l)+bs>0?-1:1)*((h-g)*y)/R}):(s=l=>{const u=Math.exp(-l*e),f=(l-n)*e+1;return-bs+u*f},i=l=>{const u=Math.exp(-l*e),f=(n-l)*(e*e);return u*f});const a=5/e,c=Wp(s,i,a);if(e=e*1e3,isNaN(c))return{stiffness:100,damping:10,duration:e};{const l=Math.pow(c,2)*r;return{stiffness:l,damping:o*2*Math.sqrt(r*l),duration:e}}}const Hp=12;function Wp(e,t,n){let r=n;for(let s=1;s<Hp;s++)r=r-e(r)/t(r);return r}function ti(e,t){return e*Math.sqrt(1-t*t)}const zp=["duration","bounce"],Kp=["stiffness","damping","mass"];function ca(e,t){return t.some(n=>e[n]!==void 0)}function qp(e){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!ca(e,Kp)&&ca(e,zp)){const n=Bp(e);t=Object.assign(Object.assign(Object.assign({},t),n),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function Li(e){var{from:t=0,to:n=1,restSpeed:r=2,restDelta:s}=e,i=wl(e,["from","to","restSpeed","restDelta"]);const o={done:!1,value:t};let{stiffness:a,damping:c,mass:l,velocity:u,duration:f,isResolvedFromDuration:h}=qp(i),g=la,y=la;function R(){const M=u?-(u/1e3):0,O=n-t,A=c/(2*Math.sqrt(a*l)),E=Math.sqrt(a/l)/1e3;if(s===void 0&&(s=Math.min(Math.abs(n-t)/100,.4)),A<1){const N=ti(E,A);g=j=>{const D=Math.exp(-A*E*j);return n-D*((M+A*E*O)/N*Math.sin(N*j)+O*Math.cos(N*j))},y=j=>{const D=Math.exp(-A*E*j);return A*E*D*(Math.sin(N*j)*(M+A*E*O)/N+O*Math.cos(N*j))-D*(Math.cos(N*j)*(M+A*E*O)-N*O*Math.sin(N*j))}}else if(A===1)g=N=>n-Math.exp(-E*N)*(O+(M+E*O)*N);else{const N=E*Math.sqrt(A*A-1);g=j=>{const D=Math.exp(-A*E*j),Y=Math.min(N*j,300);return n-D*((M+A*E*O)*Math.sinh(Y)+N*O*Math.cosh(Y))/N}}}return R(),{next:M=>{const O=g(M);if(h)o.done=M>=f;else{const A=y(M)*1e3,E=Math.abs(A)<=r,N=Math.abs(n-O)<=s;o.done=E&&N}return o.value=o.done?n:O,o},flipTarget:()=>{u=-u,[t,n]=[n,t],R()}}}Li.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const la=e=>0,El=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},Ui=(e,t,n)=>-n*e+n*t+e,Il=(e,t)=>n=>Math.max(Math.min(n,t),e),An=e=>e%1?Number(e.toFixed(5)):e,Fn=/(-)?([\d]*\.?[\d])+/g,ni=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,Gp=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Wn(e){return typeof e=="string"}const zn={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Rn=Object.assign(Object.assign({},zn),{transform:Il(0,1)}),ir=Object.assign(Object.assign({},zn),{default:1}),Fi=e=>({test:t=>Wn(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Nt=Fi("deg"),Cn=Fi("%"),W=Fi("px"),ua=Object.assign(Object.assign({},Cn),{parse:e=>Cn.parse(e)/100,transform:e=>Cn.transform(e*100)}),ji=(e,t)=>n=>!!(Wn(n)&&Gp.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),Sl=(e,t,n)=>r=>{if(!Wn(r))return r;const[s,i,o,a]=r.match(Fn);return{[e]:parseFloat(s),[t]:parseFloat(i),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},Ft={test:ji("hsl","hue"),parse:Sl("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Cn.transform(An(t))+", "+Cn.transform(An(n))+", "+An(Rn.transform(r))+")"},Jp=Il(0,255),ws=Object.assign(Object.assign({},zn),{transform:e=>Math.round(Jp(e))}),bt={test:ji("rgb","red"),parse:Sl("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+ws.transform(e)+", "+ws.transform(t)+", "+ws.transform(n)+", "+An(Rn.transform(r))+")"};function Yp(e){let t="",n="",r="",s="";return e.length>5?(t=e.substr(1,2),n=e.substr(3,2),r=e.substr(5,2),s=e.substr(7,2)):(t=e.substr(1,1),n=e.substr(2,1),r=e.substr(3,1),s=e.substr(4,1),t+=t,n+=n,r+=r,s+=s),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:s?parseInt(s,16)/255:1}}const ri={test:ji("#"),parse:Yp,transform:bt.transform},Ie={test:e=>bt.test(e)||ri.test(e)||Ft.test(e),parse:e=>bt.test(e)?bt.parse(e):Ft.test(e)?Ft.parse(e):ri.parse(e),transform:e=>Wn(e)?e:e.hasOwnProperty("red")?bt.transform(e):Ft.transform(e)},Tl="${c}",Ol="${n}";function Xp(e){var t,n,r,s;return isNaN(e)&&Wn(e)&&((n=(t=e.match(Fn))===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)+((s=(r=e.match(ni))===null||r===void 0?void 0:r.length)!==null&&s!==void 0?s:0)>0}function Al(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0;const r=e.match(ni);r&&(n=r.length,e=e.replace(ni,Tl),t.push(...r.map(Ie.parse)));const s=e.match(Fn);return s&&(e=e.replace(Fn,Ol),t.push(...s.map(zn.parse))),{values:t,numColors:n,tokenised:e}}function Rl(e){return Al(e).values}function Cl(e){const{values:t,numColors:n,tokenised:r}=Al(e),s=t.length;return i=>{let o=r;for(let a=0;a<s;a++)o=o.replace(a<n?Tl:Ol,a<n?Ie.transform(i[a]):An(i[a]));return o}}const Qp=e=>typeof e=="number"?0:e;function Zp(e){const t=Rl(e);return Cl(e)(t.map(Qp))}const Kn={test:Xp,parse:Rl,createTransformer:Cl,getAnimatableNone:Zp},em=new Set(["brightness","contrast","saturate","opacity"]);function tm(e){let[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Fn)||[];if(!r)return e;const s=n.replace(r,"");let i=em.has(t)?1:0;return r!==n&&(i*=100),t+"("+i+s+")"}const nm=/([a-z-]*)\(.*?\)/g,si=Object.assign(Object.assign({},Kn),{getAnimatableNone:e=>{const t=e.match(nm);return t?t.map(tm).join(" "):e}});function Es(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function fa({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let s=0,i=0,o=0;if(!t)s=i=o=n;else{const a=n<.5?n*(1+t):n+t-n*t,c=2*n-a;s=Es(c,a,e+1/3),i=Es(c,a,e),o=Es(c,a,e-1/3)}return{red:Math.round(s*255),green:Math.round(i*255),blue:Math.round(o*255),alpha:r}}const rm=(e,t,n)=>{const r=e*e,s=t*t;return Math.sqrt(Math.max(0,n*(s-r)+r))},sm=[ri,bt,Ft],da=e=>sm.find(t=>t.test(e)),Pl=(e,t)=>{let n=da(e),r=da(t),s=n.parse(e),i=r.parse(t);n===Ft&&(s=fa(s),n=bt),r===Ft&&(i=fa(i),r=bt);const o=Object.assign({},s);return a=>{for(const c in o)c!=="alpha"&&(o[c]=rm(s[c],i[c],a));return o.alpha=Ui(s.alpha,i.alpha,a),n.transform(o)}},im=e=>typeof e=="number",om=(e,t)=>n=>t(e(n)),xl=(...e)=>e.reduce(om);function kl(e,t){return im(e)?n=>Ui(e,t,n):Ie.test(e)?Pl(e,t):Ml(e,t)}const Nl=(e,t)=>{const n=[...e],r=n.length,s=e.map((i,o)=>kl(i,t[o]));return i=>{for(let o=0;o<r;o++)n[o]=s[o](i);return n}},am=(e,t)=>{const n=Object.assign(Object.assign({},e),t),r={};for(const s in n)e[s]!==void 0&&t[s]!==void 0&&(r[s]=kl(e[s],t[s]));return s=>{for(const i in r)n[i]=r[i](s);return n}};function ha(e){const t=Kn.parse(e),n=t.length;let r=0,s=0,i=0;for(let o=0;o<n;o++)r||typeof t[o]=="number"?r++:t[o].hue!==void 0?i++:s++;return{parsed:t,numNumbers:r,numRGB:s,numHSL:i}}const Ml=(e,t)=>{const n=Kn.createTransformer(t),r=ha(e),s=ha(t);return r.numHSL===s.numHSL&&r.numRGB===s.numRGB&&r.numNumbers>=s.numNumbers?xl(Nl(r.parsed,s.parsed),n):o=>`${o>0?t:e}`},cm=(e,t)=>n=>Ui(e,t,n);function lm(e){if(typeof e=="number")return cm;if(typeof e=="string")return Ie.test(e)?Pl:Ml;if(Array.isArray(e))return Nl;if(typeof e=="object")return am}function um(e,t,n){const r=[],s=n||lm(e[0]),i=e.length-1;for(let o=0;o<i;o++){let a=s(e[o],e[o+1]);if(t){const c=Array.isArray(t)?t[o]:t;a=xl(c,a)}r.push(a)}return r}function fm([e,t],[n]){return r=>n(El(e,t,r))}function dm(e,t){const n=e.length,r=n-1;return s=>{let i=0,o=!1;if(s<=e[0]?o=!0:s>=e[r]&&(i=r-1,o=!0),!o){let c=1;for(;c<n&&!(e[c]>s||c===r);c++);i=c-1}const a=El(e[i],e[i+1],s);return t[i](a)}}function Dl(e,t,{clamp:n=!0,ease:r,mixer:s}={}){const i=e.length;aa(i===t.length),aa(!r||!Array.isArray(r)||r.length===i-1),e[0]>e[i-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());const o=um(t,r,s),a=i===2?fm(e,o):dm(e,o);return n?c=>a(ei(e[0],e[i-1],c)):a}const ns=e=>t=>1-e(1-t),Vi=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,hm=e=>t=>Math.pow(t,e),Ll=e=>t=>t*t*((e+1)*t-e),pm=e=>{const t=Ll(e);return n=>(n*=2)<1?.5*t(n):.5*(2-Math.pow(2,-10*(n-1)))},Ul=1.525,mm=4/11,gm=8/11,ym=9/10,Fl=e=>e,$i=hm(2),_m=ns($i),jl=Vi($i),Vl=e=>1-Math.sin(Math.acos(e)),$l=ns(Vl),vm=Vi($l),Bi=Ll(Ul),bm=ns(Bi),wm=Vi(Bi),Em=pm(Ul),Im=4356/361,Sm=35442/1805,Tm=16061/1805,Cr=e=>{if(e===1||e===0)return e;const t=e*e;return e<mm?7.5625*t:e<gm?9.075*t-9.9*e+3.4:e<ym?Im*t-Sm*e+Tm:10.8*e*e-20.52*e+10.72},Om=ns(Cr),Am=e=>e<.5?.5*(1-Cr(1-e*2)):.5*Cr(e*2-1)+.5;function Rm(e,t){return e.map(()=>t||jl).splice(0,e.length-1)}function Cm(e){const t=e.length;return e.map((n,r)=>r!==0?r/(t-1):0)}function Pm(e,t){return e.map(n=>n*t)}function yr({from:e=0,to:t=1,ease:n,offset:r,duration:s=300}){const i={done:!1,value:e},o=Array.isArray(t)?t:[e,t],a=Pm(r&&r.length===o.length?r:Cm(o),s);function c(){return Dl(a,o,{ease:Array.isArray(n)?n:Rm(o,n)})}let l=c();return{next:u=>(i.value=l(u),i.done=u>=s,i),flipTarget:()=>{o.reverse(),l=c()}}}function xm({velocity:e=0,from:t=0,power:n=.8,timeConstant:r=350,restDelta:s=.5,modifyTarget:i}){const o={done:!1,value:t};let a=n*e;const c=t+a,l=i===void 0?c:i(c);return l!==c&&(a=l-t),{next:u=>{const f=-a*Math.exp(-u/r);return o.done=!(f>s||f<-s),o.value=o.done?l:l+f,o},flipTarget:()=>{}}}const pa={keyframes:yr,spring:Li,decay:xm};function km(e){if(Array.isArray(e.to))return yr;if(pa[e.type])return pa[e.type];const t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?yr:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?Li:yr}function Bl(e,t,n=0){return e-t-n}function Nm(e,t,n=0,r=!0){return r?Bl(t+-e,t,n):t-(e-t)+n}function Mm(e,t,n,r){return r?e>=t+n:e<=-n}const Dm=e=>{const t=({delta:n})=>e(n);return{start:()=>Zs.update(t,!0),stop:()=>Dp.update(t)}};function Hl(e){var t,n,{from:r,autoplay:s=!0,driver:i=Dm,elapsed:o=0,repeat:a=0,repeatType:c="loop",repeatDelay:l=0,onPlay:u,onStop:f,onComplete:h,onRepeat:g,onUpdate:y}=e,R=wl(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:M}=R,O,A=0,E=R.duration,N,j=!1,D=!0,Y;const ce=km(R);!((n=(t=ce).needsInterpolation)===null||n===void 0)&&n.call(t,r,M)&&(Y=Dl([0,100],[r,M],{clamp:!1}),r=0,M=100);const le=ce(Object.assign(Object.assign({},R),{from:r,to:M}));function be(){A++,c==="reverse"?(D=A%2===0,o=Nm(o,E,l,D)):(o=Bl(o,E,l),c==="mirror"&&le.flipTarget()),j=!1,g&&g()}function je(){O.stop(),h&&h()}function Ve(ke){if(D||(ke=-ke),o+=ke,!j){const at=le.next(Math.max(0,o));N=at.value,Y&&(N=Y(N)),j=D?at.done:o<=0}y==null||y(N),j&&(A===0&&(E??(E=o)),A<a?Mm(o,E,l,D)&&be():je())}function ot(){u==null||u(),O=i(Ve),O.start()}return s&&ot(),{stop:()=>{f==null||f(),O.stop()}}}function Wl(e,t){return t?e*(1e3/t):0}function Lm({from:e=0,velocity:t=0,min:n,max:r,power:s=.8,timeConstant:i=750,bounceStiffness:o=500,bounceDamping:a=10,restDelta:c=1,modifyTarget:l,driver:u,onUpdate:f,onComplete:h,onStop:g}){let y;function R(E){return n!==void 0&&E<n||r!==void 0&&E>r}function M(E){return n===void 0?r:r===void 0||Math.abs(n-E)<Math.abs(r-E)?n:r}function O(E){y==null||y.stop(),y=Hl(Object.assign(Object.assign({},E),{driver:u,onUpdate:N=>{var j;f==null||f(N),(j=E.onUpdate)===null||j===void 0||j.call(E,N)},onComplete:h,onStop:g}))}function A(E){O(Object.assign({type:"spring",stiffness:o,damping:a,restDelta:c},E))}if(R(e))A({from:e,velocity:t,to:M(e)});else{let E=s*t+e;typeof l<"u"&&(E=l(E));const N=M(E),j=N===n?-1:1;let D,Y;const ce=le=>{D=Y,Y=le,t=Wl(le-D,bl().delta),(j===1&&le>N||j===-1&&le<N)&&A({from:le,to:N,velocity:t})};O({type:"decay",from:e,velocity:t,timeConstant:i,power:s,restDelta:c,modifyTarget:l,onUpdate:R(E)?ce:void 0})}return{stop:()=>y==null?void 0:y.stop()}}const zl=(e,t)=>1-3*t+3*e,Kl=(e,t)=>3*t-6*e,ql=e=>3*e,Pr=(e,t,n)=>((zl(t,n)*e+Kl(t,n))*e+ql(t))*e,Gl=(e,t,n)=>3*zl(t,n)*e*e+2*Kl(t,n)*e+ql(t),Um=1e-7,Fm=10;function jm(e,t,n,r,s){let i,o,a=0;do o=t+(n-t)/2,i=Pr(o,r,s)-e,i>0?n=o:t=o;while(Math.abs(i)>Um&&++a<Fm);return o}const Vm=8,$m=.001;function Bm(e,t,n,r){for(let s=0;s<Vm;++s){const i=Gl(t,n,r);if(i===0)return t;const o=Pr(t,n,r)-e;t-=o/i}return t}const _r=11,or=1/(_r-1);function Hm(e,t,n,r){if(e===t&&n===r)return Fl;const s=new Float32Array(_r);for(let o=0;o<_r;++o)s[o]=Pr(o*or,e,n);function i(o){let a=0,c=1;const l=_r-1;for(;c!==l&&s[c]<=o;++c)a+=or;--c;const u=(o-s[c])/(s[c+1]-s[c]),f=a+u*or,h=Gl(f,e,n);return h>=$m?Bm(o,f,e,n):h===0?f:jm(o,a,a+or,e,n)}return o=>o===0||o===1?o:Pr(i(o),t,r)}var Hi={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const Is={};var Wm=Object.defineProperty,zm=(e,t,n)=>t in e?Wm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Km=(e,t,n)=>(zm(e,t+"",n),n);class qm{constructor(){Km(this,"subscriptions",new Set)}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,n,r){if(this.subscriptions.size)for(const s of this.subscriptions)s(t,n,r)}clear(){this.subscriptions.clear()}}var Gm=Object.defineProperty,Jm=(e,t,n)=>t in e?Gm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,We=(e,t,n)=>(Jm(e,typeof t!="symbol"?t+"":t,n),n);function ma(e){return!Number.isNaN(Number.parseFloat(e))}class Ym{constructor(t){We(this,"current"),We(this,"prev"),We(this,"timeDelta",0),We(this,"lastUpdated",0),We(this,"updateSubscribers",new qm),We(this,"stopAnimation"),We(this,"canTrackVelocity",!1),We(this,"updateAndNotify",n=>{this.prev=this.current,this.current=n;const{delta:r,timestamp:s}=bl();this.lastUpdated!==s&&(this.timeDelta=r,this.lastUpdated=s),Zs.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)}),We(this,"scheduleVelocityCheck",()=>Zs.postRender(this.velocityCheck)),We(this,"velocityCheck",({timestamp:n})=>{this.canTrackVelocity||(this.canTrackVelocity=ma(this.current)),n!==this.lastUpdated&&(this.prev=this.current)}),this.prev=this.current=t,this.canTrackVelocity=ma(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Wl(Number.parseFloat(this.current)-Number.parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{const{stop:r}=t(n);this.stopAnimation=r}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function Xm(e){return new Ym(e)}const{isArray:Qm}=Array;function Zm(){const e=xe({}),t=r=>{const s=i=>{e.value[i]&&(e.value[i].stop(),e.value[i].destroy(),delete e.value[i])};r?Qm(r)?r.forEach(s):s(r):Object.keys(e.value).forEach(s)},n=(r,s,i)=>{if(e.value[r])return e.value[r];const o=Xm(s);return o.onChange(a=>i[r]=a),e.value[r]=o,o};return Rp(t),{motionValues:e,get:n,stop:t}}function eg(e){return Array.isArray(e)}function Mt(){return{type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}}function Ss(e){return{type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}}function tg(e){return{type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}}function Ts(){return{type:"keyframes",ease:"linear",duration:300}}function ng(e){return{type:"keyframes",duration:800,values:e}}const ga={default:tg,x:Mt,y:Mt,z:Mt,rotate:Mt,rotateX:Mt,rotateY:Mt,rotateZ:Mt,scaleX:Ss,scaleY:Ss,scale:Ss,backgroundColor:Ts,color:Ts,opacity:Ts};function Jl(e,t){let n;return eg(t)?n=ng:n=ga[e]||ga.default,{to:t,...n(t)}}const ya={...zn,transform:Math.round},Yl={color:Ie,backgroundColor:Ie,outlineColor:Ie,fill:Ie,stroke:Ie,borderColor:Ie,borderTopColor:Ie,borderRightColor:Ie,borderBottomColor:Ie,borderLeftColor:Ie,borderWidth:W,borderTopWidth:W,borderRightWidth:W,borderBottomWidth:W,borderLeftWidth:W,borderRadius:W,radius:W,borderTopLeftRadius:W,borderTopRightRadius:W,borderBottomRightRadius:W,borderBottomLeftRadius:W,width:W,maxWidth:W,height:W,maxHeight:W,size:W,top:W,right:W,bottom:W,left:W,padding:W,paddingTop:W,paddingRight:W,paddingBottom:W,paddingLeft:W,margin:W,marginTop:W,marginRight:W,marginBottom:W,marginLeft:W,rotate:Nt,rotateX:Nt,rotateY:Nt,rotateZ:Nt,scale:ir,scaleX:ir,scaleY:ir,scaleZ:ir,skew:Nt,skewX:Nt,skewY:Nt,distance:W,translateX:W,translateY:W,translateZ:W,x:W,y:W,z:W,perspective:W,transformPerspective:W,opacity:Rn,originX:ua,originY:ua,originZ:W,zIndex:ya,filter:si,WebkitFilter:si,fillOpacity:Rn,strokeOpacity:Rn,numOctaves:ya},Wi=e=>Yl[e];function ii(e,t){return t&&typeof e=="number"&&t.transform?t.transform(e):e}function rg(e,t){let n=Wi(e);return n!==si&&(n=Kn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const sg={linear:Fl,easeIn:$i,easeInOut:jl,easeOut:_m,circIn:Vl,circInOut:vm,circOut:$l,backIn:Bi,backInOut:wm,backOut:bm,anticipate:Em,bounceIn:Om,bounceInOut:Am,bounceOut:Cr};function _a(e){if(Array.isArray(e)){const[t,n,r,s]=e;return Hm(t,n,r,s)}else if(typeof e=="string")return sg[e];return e}function ig(e){return Array.isArray(e)&&typeof e[0]!="number"}function va(e,t){return e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&Kn.test(t)&&!t.startsWith("url("))}function og(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function ag({ease:e,times:t,delay:n,...r}){const s={...r};return t&&(s.offset=t),e&&(s.ease=ig(e)?e.map(_a):_a(e)),n&&(s.elapsed=-n),s}function cg(e,t,n){return Array.isArray(t.to)&&(e.duration||(e.duration=800)),og(t),lg(e)||(e={...e,...Jl(n,t.to)}),{...t,...ag(e)}}function lg({delay:e,repeat:t,repeatType:n,repeatDelay:r,from:s,...i}){return!!Object.keys(i).length}function ug(e,t){return e[t]||e.default||e}function fg(e,t,n,r,s){const i=ug(r,e);let o=i.from===null||i.from===void 0?t.get():i.from;const a=va(e,n);o==="none"&&a&&typeof n=="string"&&(o=rg(e,n));const c=va(e,o);function l(f){const h={from:o,to:n,velocity:r.velocity?r.velocity:t.getVelocity(),onUpdate:g=>t.set(g)};return i.type==="inertia"||i.type==="decay"?Lm({...h,...i}):Hl({...cg(i,h,e),onUpdate:g=>{h.onUpdate(g),i.onUpdate&&i.onUpdate(g)},onComplete:()=>{s&&s(),f&&f()}})}function u(f){return t.set(n),s&&s(),f&&f(),{stop:()=>{}}}return!c||!a||i.type===!1?u:l}function dg(){const{motionValues:e,stop:t,get:n}=Zm();return{motionValues:e,stop:t,push:(s,i,o,a={},c)=>{const l=o[s],u=n(s,l,o);if(a&&a.immediate){u.set(i);return}const f=fg(s,u,i,a,c);u.start(f)}}}function hg(e,t={},{motionValues:n,push:r,stop:s}=dg()){const i=Ce(t),o=xe(!1);ge(n,f=>{o.value=Object.values(f).filter(h=>h.isAnimating()).length>0},{immediate:!0,deep:!0});const a=f=>{if(!i||!i[f])throw new Error(`The variant ${f} does not exist.`);return i[f]},c=f=>{typeof f=="string"&&(f=a(f));const h=Object.entries(f).map(([y,R])=>{if(y!=="transition")return new Promise(M=>r(y,R,e,f.transition||Jl(y,f[y]),M))}).filter(Boolean);async function g(){var y,R;await Promise.all(h),(R=(y=f.transition)==null?void 0:y.onComplete)==null||R.call(y)}return Promise.all([g()])};return{isAnimating:o,apply:c,set:f=>{const h=Rr(f)?f:a(f);Object.entries(h).forEach(([g,y])=>{g!=="transition"&&r(g,y,e,{immediate:!0})})},leave:async f=>{let h;if(i&&(i.leave&&(h=i.leave),!i.leave&&i.initial&&(h=i.initial)),!h){f();return}await c(h),f()},stop:s}}const zi=typeof window<"u",pg=()=>zi&&(window.onpointerdown===null||Hi.TEST),mg=()=>zi&&(window.ontouchstart===null||Hi.TEST),gg=()=>zi&&(window.onmousedown===null||Hi.TEST);function yg({target:e,state:t,variants:n,apply:r}){const s=Ce(n),i=xe(!1),o=xe(!1),a=xe(!1),c=de(()=>{let u=[...Object.keys(t.value||{})];return s&&(s.hovered&&(u=[...u,...Object.keys(s.hovered)]),s.tapped&&(u=[...u,...Object.keys(s.tapped)]),s.focused&&(u=[...u,...Object.keys(s.focused)])),u}),l=de(()=>{const u={};Object.assign(u,t.value),i.value&&s.hovered&&Object.assign(u,s.hovered),o.value&&s.tapped&&Object.assign(u,s.tapped),a.value&&s.focused&&Object.assign(u,s.focused);for(const f in u)c.value.includes(f)||delete u[f];return u});s.hovered&&(He(e,"mouseenter",()=>i.value=!0),He(e,"mouseleave",()=>{i.value=!1,o.value=!1})),s.tapped&&(gg()&&(He(e,"mousedown",()=>o.value=!0),He(e,"mouseup",()=>o.value=!1)),pg()&&(He(e,"pointerdown",()=>o.value=!0),He(e,"pointerup",()=>o.value=!1)),mg()&&(He(e,"touchstart",()=>o.value=!0),He(e,"touchend",()=>o.value=!1))),s.focused&&(He(e,"focus",()=>a.value=!0),He(e,"blur",()=>a.value=!1)),ge([i,o,a],()=>{r(l.value)})}function _g({set:e,target:t,variants:n,variant:r}){const s=Ce(n);ge(()=>t,()=>{s&&(s.initial&&(e("initial"),r.value="initial"),s.enter&&(r.value="enter"))},{immediate:!0,flush:"pre"})}function vg({state:e,apply:t}){ge(e,n=>{n&&t(n)},{immediate:!0})}function Xl({target:e,variants:t,variant:n}){const r=Ce(t);r&&(r.visible||r.visibleOnce)&&xp(e,([{isIntersecting:s}])=>{r.visible?s?n.value="visible":n.value="initial":r.visibleOnce&&(s&&n.value!=="visibleOnce"?n.value="visibleOnce":n.value||(n.value="initial"))})}function bg(e,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){t.lifeCycleHooks&&_g(e),t.syncVariants&&vg(e),t.visibilityHooks&&Xl(e),t.eventListeners&&yg(e)}function Ql(e={}){const t=st({...e}),n=xe({});return ge(t,()=>{const r={};for(const[s,i]of Object.entries(t)){const o=Wi(s),a=ii(i,o);r[s]=a}n.value=r},{immediate:!0,deep:!0}),{state:t,style:n}}function Ki(e,t){ge(()=>On(e),n=>{n&&t(n)},{immediate:!0})}const wg={x:"translateX",y:"translateY",z:"translateZ"};function Zl(e={},t=!0){const n=st({...e}),r=xe("");return ge(n,s=>{let i="",o=!1;if(t&&(s.x||s.y||s.z)){const a=[s.x||0,s.y||0,s.z||0].map(c=>ii(c,W)).join(",");i+=`translate3d(${a}) `,o=!0}for(const[a,c]of Object.entries(s)){if(t&&(a==="x"||a==="y"||a==="z"))continue;const l=Wi(a),u=ii(c,l);i+=`${wg[a]||a}(${u}) `}t&&!o&&(i+="translateZ(0px) "),r.value=i.trim()},{immediate:!0,deep:!0}),{state:n,transform:r}}const Eg=["","X","Y","Z"],Ig=["perspective","translate","scale","rotate","skew"],eu=["transformPerspective","x","y","z"];Ig.forEach(e=>{Eg.forEach(t=>{const n=e+t;eu.push(n)})});const Sg=new Set(eu);function qi(e){return Sg.has(e)}const Tg=new Set(["originX","originY","originZ"]);function tu(e){return Tg.has(e)}function Og(e){const t={},n={};return Object.entries(e).forEach(([r,s])=>{qi(r)||tu(r)?t[r]=s:n[r]=s}),{transform:t,style:n}}function Gi(e){const{transform:t,style:n}=Og(e),{transform:r}=Zl(t),{style:s}=Ql(n);return r.value&&(s.value.transform=r.value),s.value}function Ag(e,t){let n,r;const{state:s,style:i}=Ql();return Ki(e,o=>{r=o;for(const a of Object.keys(Yl))o.style[a]===null||o.style[a]===""||qi(a)||tu(a)||(s[a]=o.style[a]);n&&Object.entries(n).forEach(([a,c])=>o.style[a]=c),t&&t(s)}),ge(i,o=>{if(!r){n=o;return}for(const a in o)r.style[a]=o[a]},{immediate:!0}),{style:s}}function Rg(e){const t=e.trim().split(/\) |\)/);if(t.length===1)return{};const n=r=>r.endsWith("px")||r.endsWith("deg")?Number.parseFloat(r):Number.isNaN(Number(r))?Number(r):r;return t.reduce((r,s)=>{if(!s)return r;const[i,o]=s.split("("),c=o.split(",").map(u=>n(u.endsWith(")")?u.replace(")",""):u.trim())),l=c.length===1?c[0]:c;return{...r,[i]:l}},{})}function Cg(e,t){Object.entries(Rg(t)).forEach(([n,r])=>{const s=["x","y","z"];if(n==="translate3d"){if(r===0){s.forEach(i=>e[i]=0);return}r.forEach((i,o)=>e[s[o]]=i);return}if(r=Number.parseFloat(`${r}`),n==="translateX"){e.x=r;return}if(n==="translateY"){e.y=r;return}if(n==="translateZ"){e.z=r;return}e[n]=r})}function Pg(e,t){let n,r;const{state:s,transform:i}=Zl();return Ki(e,o=>{r=o,o.style.transform&&Cg(s,o.style.transform),n&&(o.style.transform=n),t&&t(s)}),ge(i,o=>{if(!r){n=o;return}r.style.transform=o},{immediate:!0}),{transform:s}}function xg(e,t){const n=st({}),r=o=>Object.entries(o).forEach(([a,c])=>n[a]=c),{style:s}=Ag(e,r),{transform:i}=Pg(e,r);return ge(n,o=>{Object.entries(o).forEach(([a,c])=>{const l=qi(a)?i:s;l[a]&&l[a]===c||(l[a]=c)})},{immediate:!0,deep:!0}),Ki(e,()=>t),{motionProperties:n,style:s,transform:i}}function kg(e={}){const t=Ce(e),n=xe();return{state:de(()=>{if(n.value)return t[n.value]}),variant:n}}function nu(e,t={},n){const{motionProperties:r}=xg(e),{variant:s,state:i}=kg(t),o=hg(r,t),a={target:e,variant:s,variants:t,state:i,motionProperties:r,...o};return bg(a,n),a}const ru=["delay","duration"],Ng=["initial","enter","leave","visible","visible-once","visibleOnce","hovered","tapped","focused",...ru];function Mg(e){return ru.includes(e)}function Dg(e,t){const n=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};if(n){n.variants&&Rr(n.variants)&&(t.value={...t.value,...n.variants});for(let r of Ng)if(!(!n||!n[r])){if(Mg(r)&&typeof n[r]=="number"){for(const s of["enter","visible","visibleOnce"]){const i=t.value[s];i!=null&&(i.transition??(i.transition={}),i.transition[r]=n[r])}continue}if(Rr(n[r])){const s=n[r];r==="visible-once"&&(r="visibleOnce"),t.value[r]=s}}}}function Os(e,t=!1){return{created:(s,i,o)=>{const a=i.value&&typeof i.value=="string"?i.value:o.key;a&&Is[a]&&Is[a].stop();const c=t?structuredClone(e||{}):e||{},l=xe(c);typeof i.value=="object"&&(l.value=i.value),Dg(o,l);const f=nu(s,l,{eventListeners:!0,lifeCycleHooks:!0,syncVariants:!0,visibilityHooks:!1});s.motionInstance=f,a&&(Is[a]=f)},mounted:(s,i,o)=>{s.motionInstance&&Xl(s.motionInstance)},getSSRProps(s,i){let{initial:o}=s.value||i&&(i==null?void 0:i.props)||{};o=Ce(o);const a=pl({},(e==null?void 0:e.initial)||{},o||{});return!a||Object.keys(a).length===0?void 0:{style:Gi(a)}}}}const Lg={initial:{opacity:0},enter:{opacity:1}},Ug={initial:{opacity:0},visible:{opacity:1}},Fg={initial:{opacity:0},visibleOnce:{opacity:1}},jg={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},Vg={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},$g={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},Bg={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},Hg={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},Wg={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},zg={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},Kg={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},qg={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},Gg={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},Jg={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},Yg={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},Xg={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},Qg={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},Zg={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},ey={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},ty={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},ny={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},ry={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},sy={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},iy={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},oy={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},ay={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},cy={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},ly={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},uy={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},fy={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},xr={__proto__:null,fade:Lg,fadeVisible:Ug,fadeVisibleOnce:Fg,pop:jg,popVisible:Vg,popVisibleOnce:$g,rollBottom:Xg,rollLeft:Bg,rollRight:zg,rollTop:Gg,rollVisibleBottom:Qg,rollVisibleLeft:Hg,rollVisibleOnceBottom:Zg,rollVisibleOnceLeft:Wg,rollVisibleOnceRight:qg,rollVisibleOnceTop:Yg,rollVisibleRight:Kg,rollVisibleTop:Jg,slideBottom:ly,slideLeft:ey,slideRight:ry,slideTop:oy,slideVisibleBottom:uy,slideVisibleLeft:ty,slideVisibleOnceBottom:fy,slideVisibleOnceLeft:ny,slideVisibleOnceRight:iy,slideVisibleOnceTop:cy,slideVisibleRight:sy,slideVisibleTop:ay};function dy(e){const t="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",n="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",r=new RegExp(t.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,s=>`-${s}`).toLowerCase().replace(/\s+/g,"-").replace(r,s=>n.charAt(t.indexOf(s))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/-{2,}/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const hy=e=>e in xr,su={preset:{type:String,validator:e=>hy(e),required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1},duration:{type:[Number,String],required:!1}};function iu(e){const t=st({}),n=de(()=>e.preset?structuredClone(xr[e.preset]):{}),r=de(()=>({initial:e.initial,enter:e.enter,leave:e.leave,visible:e.visible,visibleOnce:e.visibleOnce,hovered:e.hovered,tapped:e.tapped,focused:e.focused})),s=de(()=>{const o=pl({},r.value,n.value,e.variants||{});for(const a of["delay","duration"]){if(!e[a])continue;const c=Number.parseInt(e[a]);for(const l of["enter","visible","visibleOnce"]){const u=o[l];u!=null&&(u.transition??(u.transition={}),u.transition[a]=c)}}return o});function i(o,a,c){var l;return o.props??(o.props={}),(l=o.props).style??(l.style={}),o.props.style={...o.props.style,...c},o.props.onVnodeMounted=({el:u})=>{t[a]=nu(u,s.value)},o}return{motionConfig:s,setNodeInstance:i}}const py=qr({props:{...su,is:{type:[String,Object],default:"div"}},setup(e){const t=Mc(),{motionConfig:n,setNodeInstance:r}=iu(e);return()=>{const s=Gi(n.value.initial||{}),i=Qr(e.is,void 0,t);return r(i,0,s),i}}}),my=qr({props:{...su,is:{type:[String,Object],required:!1}},setup(e){const t=Mc(),{motionConfig:n,setNodeInstance:r}=iu(e);return()=>{var o;const s=Gi(n.value.initial||{}),i=((o=t.default)==null?void 0:o.call(t))||[];for(let a=0;a<i.length;a++)r(i[a],a,s);return e.is?Qr(e.is,void 0,i):i}}}),gy={install(e,t){if(e.directive("motion",Os()),e.component("Motion",py),e.component("MotionGroup",my),!t||t&&!t.excludePresets)for(const n in xr){const r=xr[n];e.directive(`motion-${dy(n)}`,Os(r,!0))}if(t&&t.directives)for(const n in t.directives){const r=t.directives[n];!r.initial&&__DEV__&&console.warn(`Your directive v-motion-${n} is missing initial variant!`),e.directive(`motion-${n}`,Os(r,!0))}}};var ba={};/**
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
 */const ou=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},yy=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},au={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,c=s+2<e.length,l=c?e[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let h=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(h=64)),r.push(n[u],n[f],n[h],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ou(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):yy(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const f=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw new _y;const h=i<<2|a>>4;if(r.push(h),l!==64){const g=a<<4&240|l>>2;if(r.push(g),f!==64){const y=l<<6&192|f;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class _y extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vy=function(e){const t=ou(e);return au.encodeByteArray(t,!0)},kr=function(e){return vy(e).replace(/\./g,"")},cu=function(e){try{return au.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function by(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const wy=()=>by().__FIREBASE_DEFAULTS__,Ey=()=>{if(typeof process>"u"||typeof ba>"u")return;const e=ba.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Iy=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&cu(e[1]);return t&&JSON.parse(t)},rs=()=>{try{return wy()||Ey()||Iy()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},lu=e=>{var t,n;return(n=(t=rs())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},l0=e=>{const t=lu(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},uu=()=>{var e;return(e=rs())===null||e===void 0?void 0:e.config},fu=e=>{var t;return(t=rs())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class Sy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function u0(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[kr(JSON.stringify(n)),kr(JSON.stringify(o)),""].join(".")}/**
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
 */function ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ty(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ye())}function Oy(){var e;const t=(e=rs())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ay(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Ry(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Cy(){const e=ye();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function f0(){return!Oy()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Py(){try{return typeof indexedDB=="object"}catch{return!1}}function xy(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
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
 */const ky="FirebaseError";class Rt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=ky,Object.setPrototypeOf(this,Rt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qn.prototype.create)}}class qn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?Ny(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Rt(s,a,r)}}function Ny(e,t){return e.replace(My,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const My=/\{\$([^}]+)}/g;function Dy(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Nr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(wa(i)&&wa(o)){if(!Nr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function wa(e){return e!==null&&typeof e=="object"}/**
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
 */function Gn(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Ly(e,t){const n=new Uy(e,t);return n.subscribe.bind(n)}class Uy{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let s;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Fy(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:r},s.next===void 0&&(s.next=As),s.error===void 0&&(s.error=As),s.complete===void 0&&(s.complete=As);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Fy(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function As(){}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function Ct(e){return e&&e._delegate?e._delegate:e}class un{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Dt="[DEFAULT]";/**
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
 */class jy{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Sy;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if($y(t))try{this.getOrInitializeService({instanceIdentifier:Dt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Dt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Dt){return this.instances.has(t)}getOptions(t=Dt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Vy(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Dt){return this.component?this.component.multipleInstances?t:Dt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vy(e){return e===Dt?void 0:e}function $y(e){return e.instantiationMode==="EAGER"}/**
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
 */class By{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new jy(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ne;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ne||(ne={}));const Hy={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},Wy=ne.INFO,zy={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},Ky=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=zy[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class du{constructor(t){this.name=t,this._logLevel=Wy,this._logHandler=Ky,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ne))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Hy[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...t),this._logHandler(this,ne.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...t),this._logHandler(this,ne.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...t),this._logHandler(this,ne.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...t),this._logHandler(this,ne.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...t),this._logHandler(this,ne.ERROR,...t)}}const qy=(e,t)=>t.some(n=>e instanceof n);let Ea,Ia;function Gy(){return Ea||(Ea=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jy(){return Ia||(Ia=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hu=new WeakMap,oi=new WeakMap,pu=new WeakMap,Rs=new WeakMap,Ji=new WeakMap;function Yy(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(It(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&hu.set(n,e)}).catch(()=>{}),Ji.set(t,e),t}function Xy(e){if(oi.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});oi.set(e,t)}let ai={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return oi.get(e);if(t==="objectStoreNames")return e.objectStoreNames||pu.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return It(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Qy(e){ai=e(ai)}function Zy(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Cs(this),t,...n);return pu.set(r,t.sort?t.sort():[t]),It(r)}:Jy().includes(e)?function(...t){return e.apply(Cs(this),t),It(hu.get(this))}:function(...t){return It(e.apply(Cs(this),t))}}function e_(e){return typeof e=="function"?Zy(e):(e instanceof IDBTransaction&&Xy(e),qy(e,Gy())?new Proxy(e,ai):e)}function It(e){if(e instanceof IDBRequest)return Yy(e);if(Rs.has(e))return Rs.get(e);const t=e_(e);return t!==e&&(Rs.set(e,t),Ji.set(t,e)),t}const Cs=e=>Ji.get(e);function t_(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=It(o);return r&&o.addEventListener("upgradeneeded",c=>{r(It(o.result),c.oldVersion,c.newVersion,It(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const n_=["get","getKey","getAll","getAllKeys","count"],r_=["put","add","delete","clear"],Ps=new Map;function Sa(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ps.get(t))return Ps.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=r_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||n_.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Ps.set(t,i),i}Qy(e=>({...e,get:(t,n,r)=>Sa(t,n)||e.get(t,n,r),has:(t,n)=>!!Sa(t,n)||e.has(t,n)}));/**
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
 */class s_{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(i_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function i_(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ci="@firebase/app",Ta="0.10.5";/**
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
 */const Wt=new du("@firebase/app"),o_="@firebase/app-compat",a_="@firebase/analytics-compat",c_="@firebase/analytics",l_="@firebase/app-check-compat",u_="@firebase/app-check",f_="@firebase/auth",d_="@firebase/auth-compat",h_="@firebase/database",p_="@firebase/database-compat",m_="@firebase/functions",g_="@firebase/functions-compat",y_="@firebase/installations",__="@firebase/installations-compat",v_="@firebase/messaging",b_="@firebase/messaging-compat",w_="@firebase/performance",E_="@firebase/performance-compat",I_="@firebase/remote-config",S_="@firebase/remote-config-compat",T_="@firebase/storage",O_="@firebase/storage-compat",A_="@firebase/firestore",R_="@firebase/vertexai-preview",C_="@firebase/firestore-compat",P_="firebase",x_="10.12.2";/**
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
 */const li="[DEFAULT]",k_={[ci]:"fire-core",[o_]:"fire-core-compat",[c_]:"fire-analytics",[a_]:"fire-analytics-compat",[u_]:"fire-app-check",[l_]:"fire-app-check-compat",[f_]:"fire-auth",[d_]:"fire-auth-compat",[h_]:"fire-rtdb",[p_]:"fire-rtdb-compat",[m_]:"fire-fn",[g_]:"fire-fn-compat",[y_]:"fire-iid",[__]:"fire-iid-compat",[v_]:"fire-fcm",[b_]:"fire-fcm-compat",[w_]:"fire-perf",[E_]:"fire-perf-compat",[I_]:"fire-rc",[S_]:"fire-rc-compat",[T_]:"fire-gcs",[O_]:"fire-gcs-compat",[A_]:"fire-fst",[C_]:"fire-fst-compat",[R_]:"fire-vertex","fire-js":"fire-js",[P_]:"fire-js-all"};/**
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
 */const Mr=new Map,N_=new Map,ui=new Map;function Oa(e,t){try{e.container.addComponent(t)}catch(n){Wt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function jn(e){const t=e.name;if(ui.has(t))return Wt.debug(`There were multiple attempts to register component ${t}.`),!1;ui.set(t,e);for(const n of Mr.values())Oa(n,e);for(const n of N_.values())Oa(n,e);return!0}function mu(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Qe(e){return e.settings!==void 0}/**
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
 */const M_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},St=new qn("app","Firebase",M_);/**
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
 */class D_{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw St.create("app-deleted",{appName:this._name})}}/**
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
 */const Jn=x_;function gu(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:li,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw St.create("bad-app-name",{appName:String(s)});if(n||(n=uu()),!n)throw St.create("no-options");const i=Mr.get(s);if(i){if(Nr(n,i.options)&&Nr(r,i.config))return i;throw St.create("duplicate-app",{appName:s})}const o=new By(s);for(const c of ui.values())o.addComponent(c);const a=new D_(n,r,o);return Mr.set(s,a),a}function L_(e=li){const t=Mr.get(e);if(!t&&e===li&&uu())return gu();if(!t)throw St.create("no-app",{appName:e});return t}function nn(e,t,n){var r;let s=(r=k_[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Wt.warn(a.join(" "));return}jn(new un(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const U_="firebase-heartbeat-database",F_=1,Vn="firebase-heartbeat-store";let xs=null;function yu(){return xs||(xs=t_(U_,F_,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Vn)}catch(n){console.warn(n)}}}}).catch(e=>{throw St.create("idb-open",{originalErrorMessage:e.message})})),xs}async function j_(e){try{const n=(await yu()).transaction(Vn),r=await n.objectStore(Vn).get(_u(e));return await n.done,r}catch(t){if(t instanceof Rt)Wt.warn(t.message);else{const n=St.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Wt.warn(n.message)}}}async function Aa(e,t){try{const r=(await yu()).transaction(Vn,"readwrite");await r.objectStore(Vn).put(t,_u(e)),await r.done}catch(n){if(n instanceof Rt)Wt.warn(n.message);else{const r=St.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Wt.warn(r.message)}}}function _u(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const V_=1024,$_=30*24*60*60*1e3;class B_{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new W_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ra();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=$_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ra(),{heartbeatsToSend:r,unsentEntries:s}=H_(this._heartbeatsCache.heartbeats),i=kr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ra(){return new Date().toISOString().substring(0,10)}function H_(e,t=V_){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ca(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ca(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class W_{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Py()?xy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await j_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Aa(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Aa(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Ca(e){return kr(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function z_(e){jn(new un("platform-logger",t=>new s_(t),"PRIVATE")),jn(new un("heartbeat",t=>new B_(t),"PRIVATE")),nn(ci,Ta,e),nn(ci,Ta,"esm2017"),nn("fire-js","")}z_("");var K_="firebase",q_="10.12.2";/**
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
 */nn(K_,q_,"app");const G_="modulepreload",J_=function(e){return"/"+e},Pa={},ar=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),o=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));s=Promise.all(n.map(a=>{if(a=J_(a),a in Pa)return;Pa[a]=!0;const c=a.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${l}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":G_,c||(u.as="script",u.crossOrigin=""),u.href=a,o&&u.setAttribute("nonce",o),document.head.appendChild(u),c)return new Promise((f,h)=>{u.addEventListener("load",f),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${a}`)))})}))}return s.then(()=>t()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};function Yi(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n}function vu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Y_=vu,bu=new qn("auth","Firebase",vu());/**
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
 */const Dr=new du("@firebase/auth");function X_(e,...t){Dr.logLevel<=ne.WARN&&Dr.warn(`Auth (${Jn}): ${e}`,...t)}function vr(e,...t){Dr.logLevel<=ne.ERROR&&Dr.error(`Auth (${Jn}): ${e}`,...t)}/**
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
 */function Ye(e,...t){throw Qi(e,...t)}function Fe(e,...t){return Qi(e,...t)}function Xi(e,t,n){const r=Object.assign(Object.assign({},Y_()),{[t]:n});return new qn("auth","Firebase",r).create(t,{appName:e.name})}function Bt(e){return Xi(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Q_(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&Ye(e,"argument-error"),Xi(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Qi(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return bu.create(e,...t)}function V(e,t,...n){if(!e)throw Qi(t,...n)}function Ze(e){const t="INTERNAL ASSERTION FAILED: "+e;throw vr(t),new Error(t)}function rt(e,t){e||Ze(t)}/**
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
 */function fi(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function Z_(){return xa()==="http:"||xa()==="https:"}function xa(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function ev(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Z_()||Ay()||"connection"in navigator)?navigator.onLine:!0}function tv(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Yn{constructor(t,n){this.shortDelay=t,this.longDelay=n,rt(n>t,"Short delay should be less than long delay!"),this.isMobile=Ty()||Ry()}get(){return ev()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Zi(e,t){rt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class wu{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ze("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ze("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ze("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const nv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const rv=new Yn(3e4,6e4);function eo(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function pn(e,t,n,r,s={}){return Eu(e,s,async()=>{let i={},o={};r&&(t==="GET"?o=r:i={body:JSON.stringify(r)});const a=Gn(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),wu.fetch()(Iu(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},i))})}async function Eu(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},nv),t);try{const s=new iv(e),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw cr(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw cr(e,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw cr(e,"email-already-in-use",o);if(c==="USER_DISABLED")throw cr(e,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Xi(e,u,l);Ye(e,u)}}catch(s){if(s instanceof Rt)throw s;Ye(e,"network-request-failed",{message:String(s)})}}async function sv(e,t,n,r,s={}){const i=await pn(e,t,n,r,s);return"mfaPendingCredential"in i&&Ye(e,"multi-factor-auth-required",{_serverResponse:i}),i}function Iu(e,t,n,r){const s=`${t}${n}?${r}`;return e.config.emulator?Zi(e.config,s):`${e.config.apiScheme}://${s}`}class iv{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Fe(this.auth,"network-request-failed")),rv.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function cr(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Fe(e,t,r);return s.customData._tokenResponse=n,s}/**
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
 */async function ov(e,t){return pn(e,"POST","/v1/accounts:delete",t)}async function Su(e,t){return pn(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Pn(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function av(e,t=!1){const n=Ct(e),r=await n.getIdToken(t),s=to(r);V(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Pn(ks(s.auth_time)),issuedAtTime:Pn(ks(s.iat)),expirationTime:Pn(ks(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ks(e){return Number(e)*1e3}function to(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return vr("JWT malformed, contained fewer than 3 sections"),null;try{const s=cu(n);return s?JSON.parse(s):(vr("Failed to decode base64 JWT payload"),null)}catch(s){return vr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ka(e){const t=to(e);return V(t,"internal-error"),V(typeof t.exp<"u","internal-error"),V(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function $n(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Rt&&cv(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function cv({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class lv{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class di{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pn(this.lastLoginAt),this.creationTime=Pn(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Lr(e){var t;const n=e.auth,r=await e.getIdToken(),s=await $n(e,Su(n,{idToken:r}));V(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];e._notifyReloadListener(i);const o=!((t=i.providerUserInfo)===null||t===void 0)&&t.length?Tu(i.providerUserInfo):[],a=fv(e.providerData,o),c=e.isAnonymous,l=!(e.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new di(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(e,f)}async function uv(e){const t=Ct(e);await Lr(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function fv(e,t){return[...e.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function Tu(e){return e.map(t=>{var{providerId:n}=t,r=Yi(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function dv(e,t){const n=await Eu(e,{},async()=>{const r=Gn({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=e.config,o=Iu(e,s,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",wu.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function hv(e,t){return pn(e,"POST","/v2/accounts:revokeToken",eo(e,t))}/**
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
 */class rn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){V(t.idToken,"internal-error"),V(typeof t.idToken<"u","internal-error"),V(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):ka(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){V(t.length!==0,"internal-error");const n=ka(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(V(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await dv(t,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new rn;return r&&(V(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),s&&(V(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),i&&(V(typeof i=="number","internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new rn,this.toJSON())}_performRefresh(){return Ze("not implemented")}}/**
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
 */function ft(e,t){V(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class et{constructor(t){var{uid:n,auth:r,stsTokenManager:s}=t,i=Yi(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new lv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new di(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const n=await $n(this,this.stsTokenManager.getToken(this.auth,t));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return av(this,t)}reload(){return uv(this)}_assign(t){this!==t&&(V(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new et(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Lr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qe(this.auth.app))return Promise.reject(Bt(this.auth));const t=await this.getIdToken();return await $n(this,ov(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,s,i,o,a,c,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,R=(a=n.tenantId)!==null&&a!==void 0?a:void 0,M=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,O=(l=n.createdAt)!==null&&l!==void 0?l:void 0,A=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:E,emailVerified:N,isAnonymous:j,providerData:D,stsTokenManager:Y}=n;V(E&&Y,t,"internal-error");const ce=rn.fromJSON(this.name,Y);V(typeof E=="string",t,"internal-error"),ft(f,t.name),ft(h,t.name),V(typeof N=="boolean",t,"internal-error"),V(typeof j=="boolean",t,"internal-error"),ft(g,t.name),ft(y,t.name),ft(R,t.name),ft(M,t.name),ft(O,t.name),ft(A,t.name);const le=new et({uid:E,auth:t,email:h,emailVerified:N,displayName:f,isAnonymous:j,photoURL:y,phoneNumber:g,tenantId:R,stsTokenManager:ce,createdAt:O,lastLoginAt:A});return D&&Array.isArray(D)&&(le.providerData=D.map(be=>Object.assign({},be))),M&&(le._redirectEventId=M),le}static async _fromIdTokenResponse(t,n,r=!1){const s=new rn;s.updateFromServerResponse(n);const i=new et({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await Lr(i),i}static async _fromGetAccountInfoResponse(t,n,r){const s=n.users[0];V(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Tu(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new rn;a.updateFromIdToken(r);const c=new et({uid:s.localId,auth:t,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new di(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
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
 */const Na=new Map;function tt(e){rt(e instanceof Function,"Expected a class definition");let t=Na.get(e);return t?(rt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Na.set(e,t),t)}/**
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
 */class Ou{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Ou.type="NONE";const Ma=Ou;/**
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
 */function br(e,t,n){return`firebase:${e}:${t}:${n}`}class sn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=br(this.userKey,s.apiKey,i),this.fullPersistenceKey=br("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?et._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new sn(tt(Ma),t,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||tt(Ma);const o=br(r,t.config.apiKey,t.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const f=et._fromJSON(t,u);l!==i&&(a=f),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new sn(i,t,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new sn(i,t,r))}}/**
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
 */function Da(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Cu(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Au(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(xu(t))return"Blackberry";if(ku(t))return"Webos";if(no(t))return"Safari";if((t.includes("chrome/")||Ru(t))&&!t.includes("edge/"))return"Chrome";if(Pu(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Au(e=ye()){return/firefox\//i.test(e)}function no(e=ye()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Ru(e=ye()){return/crios\//i.test(e)}function Cu(e=ye()){return/iemobile/i.test(e)}function Pu(e=ye()){return/android/i.test(e)}function xu(e=ye()){return/blackberry/i.test(e)}function ku(e=ye()){return/webos/i.test(e)}function ss(e=ye()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function pv(e=ye()){var t;return ss(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function mv(){return Cy()&&document.documentMode===10}function Nu(e=ye()){return ss(e)||Pu(e)||ku(e)||xu(e)||/windows phone/i.test(e)||Cu(e)}function gv(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Mu(e,t=[]){let n;switch(e){case"Browser":n=Da(ye());break;case"Worker":n=`${Da(ye())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Jn}/${r}`}/**
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
 */class yv{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=i=>new Promise((o,a)=>{try{const c=t(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function _v(e,t={}){return pn(e,"GET","/v2/passwordPolicy",eo(e,t))}/**
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
 */const vv=6;class bv{constructor(t){var n,r,s,i;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:vv,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=t.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),s&&(n.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<t.length;s++)r=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}/**
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
 */class wv{constructor(t,n,r,s){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new La(this),this.idTokenSubscription=new La(this),this.beforeStateQueue=new yv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=tt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await sn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Su(this,{idToken:t}),r=await et._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(Qe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Lr(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=tv()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Qe(this.app))return Promise.reject(Bt(this));const n=t?Ct(t):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&V(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Qe(this.app)?Promise.reject(Bt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Qe(this.app)?Promise.reject(Bt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(tt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await _v(this),n=new bv(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new qn("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await hv(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&tt(t)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await sn.create(this,[tt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(V(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=t.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=t.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Mu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&X_(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function is(e){return Ct(e)}class La{constructor(t){this.auth=t,this.observer=null,this.addObserver=Ly(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ro={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ev(e){ro=e}function Iv(e){return ro.loadJS(e)}function Sv(){return ro.gapiScript}function Tv(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Ov(e,t){const n=mu(e,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Nr(i,t??{}))return s;Ye(s,"already-initialized")}return n.initialize({options:t})}function Av(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(tt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Rv(e,t,n){const r=is(e);V(r._canInitEmulator,r,"emulator-config-failed"),V(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!1,i=Du(t),{host:o,port:a}=Cv(t),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Pv()}function Du(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Cv(e){const t=Du(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Ua(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Ua(o)}}}function Ua(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Pv(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class Lu{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Ze("not implemented")}_getIdTokenResponse(t){return Ze("not implemented")}_linkToIdToken(t,n){return Ze("not implemented")}_getReauthenticationResolver(t){return Ze("not implemented")}}/**
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
 */async function on(e,t){return sv(e,"POST","/v1/accounts:signInWithIdp",eo(e,t))}/**
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
 */const xv="http://localhost";class zt extends Lu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new zt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Ye("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s}=n,i=Yi(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new zt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return on(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,on(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,on(t,n)}buildRequest(){const t={requestUri:xv,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Gn(n)}return t}}/**
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
 */class so{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Xn extends so{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class gt extends Xn{constructor(){super("facebook.com")}static credential(t){return zt._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return gt.credentialFromTaggedObject(t)}static credentialFromError(t){return gt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return gt.credential(t.oauthAccessToken)}catch{return null}}}gt.FACEBOOK_SIGN_IN_METHOD="facebook.com";gt.PROVIDER_ID="facebook.com";/**
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
 */class yt extends Xn{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return zt._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return yt.credentialFromTaggedObject(t)}static credentialFromError(t){return yt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return yt.credential(n,r)}catch{return null}}}yt.GOOGLE_SIGN_IN_METHOD="google.com";yt.PROVIDER_ID="google.com";/**
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
 */class _t extends Xn{constructor(){super("github.com")}static credential(t){return zt._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return _t.credentialFromTaggedObject(t)}static credentialFromError(t){return _t.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return _t.credential(t.oauthAccessToken)}catch{return null}}}_t.GITHUB_SIGN_IN_METHOD="github.com";_t.PROVIDER_ID="github.com";/**
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
 */class vt extends Xn{constructor(){super("twitter.com")}static credential(t,n){return zt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return vt.credentialFromTaggedObject(t)}static credentialFromError(t){return vt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return vt.credential(n,r)}catch{return null}}}vt.TWITTER_SIGN_IN_METHOD="twitter.com";vt.PROVIDER_ID="twitter.com";/**
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
 */class fn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,s=!1){const i=await et._fromIdTokenResponse(t,r,s),o=Fa(r);return new fn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const s=Fa(r);return new fn({user:t,providerId:s,_tokenResponse:r,operationType:n})}}function Fa(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class Ur extends Rt{constructor(t,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ur.prototype),this.customData={appName:t.name,tenantId:(i=t.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,s){return new Ur(t,n,r,s)}}function Uu(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ur._fromErrorAndOperation(e,i,t,r):i})}async function kv(e,t,n=!1){const r=await $n(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return fn._forOperation(e,"link",r)}/**
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
 */async function Nv(e,t,n=!1){const{auth:r}=e;if(Qe(r.app))return Promise.reject(Bt(r));const s="reauthenticate";try{const i=await $n(e,Uu(r,s,t,e),n);V(i.idToken,r,"internal-error");const o=to(i.idToken);V(o,r,"internal-error");const{sub:a}=o;return V(e.uid===a,r,"user-mismatch"),fn._forOperation(e,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ye(r,"user-mismatch"),i}}/**
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
 */async function Mv(e,t,n=!1){if(Qe(e.app))return Promise.reject(Bt(e));const r="signIn",s=await Uu(e,r,t),i=await fn._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}function Dv(e,t,n,r){return Ct(e).onIdTokenChanged(t,n,r)}function Lv(e,t,n){return Ct(e).beforeAuthStateChanged(t,n)}function Uv(e,t,n,r){return Ct(e).onAuthStateChanged(t,n,r)}function d0(e){return Ct(e).signOut()}const Fr="__sak";/**
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
 */class Fu{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Fr,"1"),this.storage.removeItem(Fr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Fv(){const e=ye();return no(e)||ss(e)}const jv=1e3,Vv=10;class ju extends Fu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Fv()&&gv(),this.fallbackToPolling=Nu(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&t(n,s,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);mv()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,Vv):s()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},jv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}ju.type="LOCAL";const $v=ju;/**
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
 */class Vu extends Fu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Vu.type="SESSION";const $u=Vu;/**
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
 */function Bv(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class os{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const r=new os(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Bv(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}os.receivers=[];/**
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
 */function io(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class Hv{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=io("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const h=f;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(h.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ge(){return window}function Wv(e){Ge().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function Bu(){return typeof Ge().WorkerGlobalScope<"u"&&typeof Ge().importScripts=="function"}async function zv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Kv(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function qv(){return Bu()?self:null}/**
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
 */const Hu="firebaseLocalStorageDb",Gv=1,jr="firebaseLocalStorage",Wu="fbase_key";class Qn{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function as(e,t){return e.transaction([jr],t?"readwrite":"readonly").objectStore(jr)}function Jv(){const e=indexedDB.deleteDatabase(Hu);return new Qn(e).toPromise()}function hi(){const e=indexedDB.open(Hu,Gv);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(jr,{keyPath:Wu})}catch(s){n(s)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(jr)?t(r):(r.close(),await Jv(),t(await hi()))})})}async function ja(e,t,n){const r=as(e,!0).put({[Wu]:t,value:n});return new Qn(r).toPromise()}async function Yv(e,t){const n=as(e,!1).get(t),r=await new Qn(n).toPromise();return r===void 0?null:r.value}function Va(e,t){const n=as(e,!0).delete(t);return new Qn(n).toPromise()}const Xv=800,Qv=3;class zu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hi(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Qv)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=os._getInstance(qv()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await zv(),!this.activeServiceWorker)return;this.sender=new Hv(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Kv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await hi();return await ja(t,Fr,"1"),await Va(t,Fr),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ja(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>Yv(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Va(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const i=as(s,!1).getAll();return new Qn(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:s,value:i}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Xv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zu.type="LOCAL";const Zv=zu;new Yn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
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
 */function Ku(e,t){return t?tt(t):(V(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class oo extends Lu{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return on(t,this._buildIdpRequest())}_linkToIdToken(t,n){return on(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return on(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function eb(e){return Mv(e.auth,new oo(e),e.bypassAuthState)}function tb(e){const{auth:t,user:n}=e;return V(n,t,"internal-error"),Nv(n,new oo(e),e.bypassAuthState)}async function nb(e){const{auth:t,user:n}=e;return V(n,t,"internal-error"),kv(n,new oo(e),e.bypassAuthState)}/**
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
 */class qu{constructor(t,n,r,s,i=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return eb;case"linkViaPopup":case"linkViaRedirect":return nb;case"reauthViaPopup":case"reauthViaRedirect":return tb;default:Ye(this.auth,"internal-error")}}resolve(t){rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const rb=new Yn(2e3,1e4);async function h0(e,t,n){if(Qe(e.app))return Promise.reject(Fe(e,"operation-not-supported-in-this-environment"));const r=is(e);Q_(e,t,so);const s=Ku(r,n);return new jt(r,"signInViaPopup",t,s).executeNotNull()}class jt extends qu{constructor(t,n,r,s,i){super(t,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,jt.currentPopupAction&&jt.currentPopupAction.cancel(),jt.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return V(t,this.auth,"internal-error"),t}async onExecution(){rt(this.filter.length===1,"Popup operations only handle one event");const t=io();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Fe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Fe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jt.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Fe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,rb.get())};t()}}jt.currentPopupAction=null;/**
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
 */const sb="pendingRedirect",wr=new Map;class ib extends qu{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=wr.get(this.auth._key());if(!t){try{const r=await ob(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}wr.set(this.auth._key(),t)}return this.bypassAuthState||wr.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ob(e,t){const n=lb(t),r=cb(e);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function ab(e,t){wr.set(e._key(),t)}function cb(e){return tt(e._redirectPersistence)}function lb(e){return br(sb,e.config.apiKey,e.name)}async function ub(e,t,n=!1){if(Qe(e.app))return Promise.reject(Bt(e));const r=is(e),s=Ku(r,t),o=await new ib(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const fb=10*60*1e3;class db{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!hb(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Gu(t)){const s=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Fe(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=fb&&this.cachedEventUids.clear(),this.cachedEventUids.has($a(t))}saveEventToCache(t){this.cachedEventUids.add($a(t)),this.lastProcessedEventTime=Date.now()}}function $a(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Gu({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function hb(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Gu(e);default:return!1}}/**
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
 */async function pb(e,t={}){return pn(e,"GET","/v1/projects",t)}/**
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
 */const mb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gb=/^https?/;async function yb(e){if(e.config.emulator)return;const{authorizedDomains:t}=await pb(e);for(const n of t)try{if(_b(n))return}catch{}Ye(e,"unauthorized-domain")}function _b(e){const t=fi(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!gb.test(n))return!1;if(mb.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const vb=new Yn(3e4,6e4);function Ba(){const e=Ge().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function bb(e){return new Promise((t,n)=>{var r,s,i;function o(){Ba(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ba(),n(Fe(e,"network-request-failed"))},timeout:vb.get()})}if(!((s=(r=Ge().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((i=Ge().gapi)===null||i===void 0)&&i.load)o();else{const a=Tv("iframefcb");return Ge()[a]=()=>{gapi.load?o():n(Fe(e,"network-request-failed"))},Iv(`${Sv()}?onload=${a}`).catch(c=>n(c))}}).catch(t=>{throw Er=null,t})}let Er=null;function wb(e){return Er=Er||bb(e),Er}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Eb=new Yn(5e3,15e3),Ib="__/auth/iframe",Sb="emulator/auth/iframe",Tb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ob=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ab(e){const t=e.config;V(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Zi(t,Sb):`https://${e.config.authDomain}/${Ib}`,r={apiKey:t.apiKey,appName:e.name,v:Jn},s=Ob.get(e.config.apiHost);s&&(r.eid=s);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Gn(r).slice(1)}`}async function Rb(e){const t=await wb(e),n=Ge().gapi;return V(n,e,"internal-error"),t.open({where:document.body,url:Ab(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Tb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Fe(e,"network-request-failed"),a=Ge().setTimeout(()=>{i(o)},Eb.get());function c(){Ge().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Cb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Pb=500,xb=600,kb="_blank",Nb="http://localhost";class Ha{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Mb(e,t,n,r=Pb,s=xb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Cb),{width:r.toString(),height:s.toString(),top:i,left:o}),l=ye().toLowerCase();n&&(a=Ru(l)?kb:n),Au(l)&&(t=t||Nb,c.scrollbars="yes");const u=Object.entries(c).reduce((h,[g,y])=>`${h}${g}=${y},`,"");if(pv(l)&&a!=="_self")return Db(t||"",a),new Ha(null);const f=window.open(t||"",a,u);V(f,e,"popup-blocked");try{f.focus()}catch{}return new Ha(f)}function Db(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const Lb="__/auth/handler",Ub="emulator/auth/handler",Fb=encodeURIComponent("fac");async function Wa(e,t,n,r,s,i){V(e.config.authDomain,e,"auth-domain-config-required"),V(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Jn,eventId:s};if(t instanceof so){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Dy(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,f]of Object.entries({}))o[u]=f}if(t instanceof Xn){const u=t.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await e._getAppCheckToken(),l=c?`#${Fb}=${encodeURIComponent(c)}`:"";return`${jb(e)}?${Gn(a).slice(1)}${l}`}function jb({config:e}){return e.emulator?Zi(e,Ub):`https://${e.authDomain}/${Lb}`}/**
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
 */const Ns="webStorageSupport";class Vb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$u,this._completeRedirectFn=ub,this._overrideRedirectResult=ab}async _openPopup(t,n,r,s){var i;rt((i=this.eventManagers[t._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Wa(t,n,r,fi(),s);return Mb(t,o,io())}async _openRedirect(t,n,r,s){await this._originValidation(t);const i=await Wa(t,n,r,fi(),s);return Wv(i),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(rt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await Rb(t),r=new db(t);return n.register("authEvent",s=>(V(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Ns,{type:Ns},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ns];o!==void 0&&n(!!o),Ye(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=yb(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Nu()||no()||ss()}}const $b=Vb;var za="@firebase/auth",Ka="1.7.4";/**
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
 */class Bb{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Hb(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Wb(e){jn(new un("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;V(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mu(e)},l=new wv(r,s,i,c);return Av(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),jn(new un("auth-internal",t=>{const n=is(t.getProvider("auth").getImmediate());return(r=>new Bb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nn(za,Ka,Hb(e)),nn(za,Ka,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const zb=5*60,Kb=fu("authIdTokenMaxAge")||zb;let qa=null;const qb=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Kb)return;const s=n==null?void 0:n.token;qa!==s&&(qa=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Gb(e=L_()){const t=mu(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Ov(e,{popupRedirectResolver:$b,persistence:[Zv,$v,$u]}),r=fu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=qb(i.toString());Lv(n,o,()=>o(n.currentUser)),Dv(n,a=>o(a))}}const s=lu("auth");return s&&Rv(n,`http://${s}`),n}function Jb(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}Ev({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=s=>{const i=Fe("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Jb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Wb("Browser");const Ju=bp({history:Uh("/"),routes:[{path:"/home",name:"home",component:()=>ar(()=>import("./home-Dnbd9j6W.js"),__vite__mapDeps([0,1,2])),props:!0,meta:{requiresAuth:!0},children:[{path:"/chefs",name:"chefs",component:()=>ar(()=>import("./allChefs-BkVz1XZx.js"),__vite__mapDeps([3,4,1]))},{path:"/yourChats",name:"yourChats",component:()=>ar(()=>import("./yourChats-q7Z8UXM8.js"),__vite__mapDeps([5,1,4,2]))}]},{path:"/",name:"login",component:()=>ar(()=>import("./login-Wm7hve_Z.js"),__vite__mapDeps([6,1,2]))}]}),Yb=()=>new Promise((e,t)=>{const n=Uv(Gb(),r=>{n(),e(r)},t)});Ju.beforeEach(async(e,t,n)=>{e.matched.some(r=>r.meta.requiresAuth)?await Yb()?n():(console.log("You dont have access!"),n("/")):n()});const Xb={apiKey:"AIzaSyDFqqFcvC3WWQMGp_q00Y6BQ5y7uQpRrUg",authDomain:"recipe-2bcd4.firebaseapp.com",projectId:"recipe-2bcd4",storageBucket:"recipe-2bcd4.appspot.com",messagingSenderId:"214051528054",appId:"1:214051528054:web:9eb82bd7f5212581d36e57",measurementId:"G-4E17212C1W"};gu(Xb);const ao=gh(Ep);ao.use(gy);ao.use(Ju);ao.mount("#app");export{Bf as A,e0 as B,un as C,Ce as D,de as E,Rt as F,wc as G,ne as H,f0 as I,ye as J,yt as K,du as L,c0 as M,h0 as N,d0 as O,qr as P,Qr as Q,Jn as S,jn as _,Xc as a,Se as b,r0 as c,s0 as d,nn as e,mu as f,Ct as g,l0 as h,L_ as i,u0 as j,xe as k,Gb as l,Nd as m,a0 as n,qc as o,t0 as p,vi as q,Zb as r,Xe as s,Qb as t,n0 as u,o0 as v,ge as w,i0 as x,st as y,Ci as z};
