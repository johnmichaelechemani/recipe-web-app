const __vite__fileDeps=["assets/home-BMuCC0hN.js","assets/_plugin-vue_export-helper-C69ZId_f.js","assets/index.esm2017-Drs02hiW.js","assets/ChatModal-CX_uYry3.js","assets/ChatModal-BsuiRtaR.css","assets/allChefs-CP1YjLm0.js","assets/yourChats-CICeqBSs.js","assets/login-DLYE6tBy.js","assets/crud-DNjFYMbk.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Gi(e,t){const n=new Set(e.split(","));return r=>n.has(r)}const le={},mn=[],Le=()=>{},Od=()=>!1,is=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Ji=e=>e.startsWith("onUpdate:"),ge=Object.assign,Yi=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Rd=Object.prototype.hasOwnProperty,Q=(e,t)=>Rd.call(e,t),B=Array.isArray,yn=e=>os(e)==="[object Map]",Jc=e=>os(e)==="[object Set]",K=e=>typeof e=="function",me=e=>typeof e=="string",ln=e=>typeof e=="symbol",ue=e=>e!==null&&typeof e=="object",Yc=e=>(ue(e)||K(e))&&K(e.then)&&K(e.catch),Xc=Object.prototype.toString,os=e=>Xc.call(e),Pd=e=>os(e).slice(8,-1),Qc=e=>os(e)==="[object Object]",Xi=e=>me(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Dn=Gi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),as=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},kd=/-(\w)/g,nt=as(e=>e.replace(kd,(t,n)=>n?n.toUpperCase():"")),Nd=/\B([A-Z])/g,An=as(e=>e.replace(Nd,"-$1").toLowerCase()),cs=as(e=>e.charAt(0).toUpperCase()+e.slice(1)),ks=as(e=>e?`on${cs(e)}`:""),Ft=(e,t)=>!Object.is(e,t),Cr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Zc=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},fi=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Md=e=>{const t=me(e)?Number(e):NaN;return isNaN(t)?e:t};let ea;const el=()=>ea||(ea=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Qi(e){if(B(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=me(r)?Fd(r):Qi(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(me(e)||ue(e))return e}const Dd=/;(?![^(]*\))/g,xd=/:([^]+)/,Ld=/\/\*[^]*?\*\//g;function Fd(e){const t={};return e.replace(Ld,"").split(Dd).forEach(n=>{if(n){const r=n.split(xd);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Zi(e){let t="";if(me(e))t=e;else if(B(e))for(let n=0;n<e.length;n++){const r=Zi(e[n]);r&&(t+=r+" ")}else if(ue(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ud="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",jd=Gi(Ud);function tl(e){return!!e||e===""}const iI=e=>me(e)?e:e==null?"":B(e)||ue(e)&&(e.toString===Xc||!K(e.toString))?JSON.stringify(e,nl,2):String(e),nl=(e,t)=>t&&t.__v_isRef?nl(e,t.value):yn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[Ns(r,i)+" =>"]=s,n),{})}:Jc(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Ns(n))}:ln(t)?Ns(t):ue(t)&&!B(t)&&!Qc(t)?String(t):t,Ns=(e,t="")=>{var n;return ln(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Me;class $d{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Me,!t&&Me&&(this.index=(Me.scopes||(Me.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Me;try{return Me=this,t()}finally{Me=n}}}on(){Me=this}off(){Me=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Vd(e,t=Me){t&&t.active&&t.effects.push(e)}function rl(){return Me}function Bd(e){Me&&Me.cleanups.push(e)}let tn;class eo{constructor(t,n,r,s){this.fn=t,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Vd(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,jt();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(Hd(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),$t()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=Dt,n=tn;try{return Dt=!0,tn=this,this._runnings++,ta(this),this.fn()}finally{na(this),this._runnings--,tn=n,Dt=t}}stop(){this.active&&(ta(this),na(this),this.onStop&&this.onStop(),this.active=!1)}}function Hd(e){return e.value}function ta(e){e._trackId++,e._depsLength=0}function na(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)sl(e.deps[t],e);e.deps.length=e._depsLength}}function sl(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let Dt=!0,di=0;const il=[];function jt(){il.push(Dt),Dt=!1}function $t(){const e=il.pop();Dt=e===void 0?!0:e}function to(){di++}function no(){for(di--;!di&&hi.length;)hi.shift()()}function ol(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&sl(r,e),e.deps[e._depsLength++]=t):e._depsLength++}}const hi=[];function al(e,t,n){to();for(const r of e.keys()){let s;r._dirtyLevel<t&&(s??(s=e.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=t),r._shouldSchedule&&(s??(s=e.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&hi.push(r.scheduler)))}no()}const cl=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},pi=new WeakMap,nn=Symbol(""),gi=Symbol("");function Pe(e,t,n){if(Dt&&tn){let r=pi.get(e);r||pi.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=cl(()=>r.delete(n))),ol(tn,s)}}function ut(e,t,n,r,s,i){const o=pi.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&B(e)){const c=Number(r);o.forEach((u,l)=>{(l==="length"||!ln(l)&&l>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":B(e)?Xi(n)&&a.push(o.get("length")):(a.push(o.get(nn)),yn(e)&&a.push(o.get(gi)));break;case"delete":B(e)||(a.push(o.get(nn)),yn(e)&&a.push(o.get(gi)));break;case"set":yn(e)&&a.push(o.get(nn));break}to();for(const c of a)c&&al(c,4);no()}const Wd=Gi("__proto__,__v_isRef,__isVue"),ll=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ln)),ra=Kd();function Kd(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=ee(this);for(let i=0,o=this.length;i<o;i++)Pe(r,"get",i+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(ee)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){jt(),to();const r=ee(this)[t].apply(this,n);return no(),$t(),r}}),e}function qd(e){ln(e)||(e=String(e));const t=ee(this);return Pe(t,"has",e),t.hasOwnProperty(e)}class ul{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?ih:pl:i?hl:dl).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=B(t);if(!s){if(o&&Q(ra,n))return Reflect.get(ra,n,r);if(n==="hasOwnProperty")return qd}const a=Reflect.get(t,n,r);return(ln(n)?ll.has(n):Wd(n))||(s||Pe(t,"get",n),i)?a:ke(a)?o&&Xi(n)?a:a.value:ue(a)?s?gl(a):pt(a):a}}class fl extends ul{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(!this._isShallow){const c=qn(i);if(!Vr(r)&&!qn(r)&&(i=ee(i),r=ee(r)),!B(t)&&ke(i)&&!ke(r))return c?!1:(i.value=r,!0)}const o=B(t)&&Xi(n)?Number(n)<t.length:Q(t,n),a=Reflect.set(t,n,r,s);return t===ee(s)&&(o?Ft(r,i)&&ut(t,"set",n,r):ut(t,"add",n,r)),a}deleteProperty(t,n){const r=Q(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&ut(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!ln(n)||!ll.has(n))&&Pe(t,"has",n),r}ownKeys(t){return Pe(t,"iterate",B(t)?"length":nn),Reflect.ownKeys(t)}}class zd extends ul{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Gd=new fl,Jd=new zd,Yd=new fl(!0);const ro=e=>e,ls=e=>Reflect.getPrototypeOf(e);function yr(e,t,n=!1,r=!1){e=e.__v_raw;const s=ee(e),i=ee(t);n||(Ft(t,i)&&Pe(s,"get",t),Pe(s,"get",i));const{has:o}=ls(s),a=r?ro:n?oo:zn;if(o.call(s,t))return a(e.get(t));if(o.call(s,i))return a(e.get(i));e!==s&&e.get(t)}function _r(e,t=!1){const n=this.__v_raw,r=ee(n),s=ee(e);return t||(Ft(e,s)&&Pe(r,"has",e),Pe(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function br(e,t=!1){return e=e.__v_raw,!t&&Pe(ee(e),"iterate",nn),Reflect.get(e,"size",e)}function sa(e){e=ee(e);const t=ee(this);return ls(t).has.call(t,e)||(t.add(e),ut(t,"add",e,e)),this}function ia(e,t){t=ee(t);const n=ee(this),{has:r,get:s}=ls(n);let i=r.call(n,e);i||(e=ee(e),i=r.call(n,e));const o=s.call(n,e);return n.set(e,t),i?Ft(t,o)&&ut(n,"set",e,t):ut(n,"add",e,t),this}function oa(e){const t=ee(this),{has:n,get:r}=ls(t);let s=n.call(t,e);s||(e=ee(e),s=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return s&&ut(t,"delete",e,void 0),i}function aa(){const e=ee(this),t=e.size!==0,n=e.clear();return t&&ut(e,"clear",void 0,void 0),n}function vr(e,t){return function(r,s){const i=this,o=i.__v_raw,a=ee(o),c=t?ro:e?oo:zn;return!e&&Pe(a,"iterate",nn),o.forEach((u,l)=>r.call(s,c(u),c(l),i))}}function wr(e,t,n){return function(...r){const s=this.__v_raw,i=ee(s),o=yn(i),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,u=s[e](...r),l=n?ro:t?oo:zn;return!t&&Pe(i,"iterate",c?gi:nn),{next(){const{value:f,done:h}=u.next();return h?{value:f,done:h}:{value:a?[l(f[0]),l(f[1])]:l(f),done:h}},[Symbol.iterator](){return this}}}}function _t(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Xd(){const e={get(i){return yr(this,i)},get size(){return br(this)},has:_r,add:sa,set:ia,delete:oa,clear:aa,forEach:vr(!1,!1)},t={get(i){return yr(this,i,!1,!0)},get size(){return br(this)},has:_r,add:sa,set:ia,delete:oa,clear:aa,forEach:vr(!1,!0)},n={get(i){return yr(this,i,!0)},get size(){return br(this,!0)},has(i){return _r.call(this,i,!0)},add:_t("add"),set:_t("set"),delete:_t("delete"),clear:_t("clear"),forEach:vr(!0,!1)},r={get(i){return yr(this,i,!0,!0)},get size(){return br(this,!0)},has(i){return _r.call(this,i,!0)},add:_t("add"),set:_t("set"),delete:_t("delete"),clear:_t("clear"),forEach:vr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=wr(i,!1,!1),n[i]=wr(i,!0,!1),t[i]=wr(i,!1,!0),r[i]=wr(i,!0,!0)}),[e,n,t,r]}const[Qd,Zd,eh,th]=Xd();function so(e,t){const n=t?e?th:eh:e?Zd:Qd;return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(Q(n,s)&&s in r?n:r,s,i)}const nh={get:so(!1,!1)},rh={get:so(!1,!0)},sh={get:so(!0,!1)};const dl=new WeakMap,hl=new WeakMap,pl=new WeakMap,ih=new WeakMap;function oh(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ah(e){return e.__v_skip||!Object.isExtensible(e)?0:oh(Pd(e))}function pt(e){return qn(e)?e:io(e,!1,Gd,nh,dl)}function ch(e){return io(e,!1,Yd,rh,hl)}function gl(e){return io(e,!0,Jd,sh,pl)}function io(e,t,n,r,s){if(!ue(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const o=ah(e);if(o===0)return e;const a=new Proxy(e,o===2?r:n);return s.set(e,a),a}function xn(e){return qn(e)?xn(e.__v_raw):!!(e&&e.__v_isReactive)}function qn(e){return!!(e&&e.__v_isReadonly)}function Vr(e){return!!(e&&e.__v_isShallow)}function ml(e){return e?!!e.__v_raw:!1}function ee(e){const t=e&&e.__v_raw;return t?ee(t):e}function lh(e){return Object.isExtensible(e)&&Zc(e,"__v_skip",!0),e}const zn=e=>ue(e)?pt(e):e,oo=e=>ue(e)?gl(e):e;class yl{constructor(t,n,r,s){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new eo(()=>t(this._value),()=>Or(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const t=ee(this);return(!t._cacheable||t.effect.dirty)&&Ft(t._value,t._value=t.effect.run())&&Or(t,4),_l(t),t.effect._dirtyLevel>=2&&Or(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function uh(e,t,n=!1){let r,s;const i=K(e);return i?(r=e,s=Le):(r=e.get,s=e.set),new yl(r,s,i||!s,n)}function _l(e){var t;Dt&&tn&&(e=ee(e),ol(tn,(t=e.dep)!=null?t:e.dep=cl(()=>e.dep=void 0,e instanceof yl?e:void 0)))}function Or(e,t=4,n){e=ee(e);const r=e.dep;r&&al(r,t)}function ke(e){return!!(e&&e.__v_isRef===!0)}function Ue(e){return bl(e,!1)}function fh(e){return bl(e,!0)}function bl(e,t){return ke(e)?e:new dh(e,t)}class dh{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:ee(t),this._value=n?t:zn(t)}get value(){return _l(this),this._value}set value(t){const n=this.__v_isShallow||Vr(t)||qn(t);t=n?t:ee(t),Ft(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:zn(t),Or(this,4))}}function De(e){return ke(e)?e.value:e}const hh={get:(e,t,n)=>De(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return ke(s)&&!ke(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function vl(e){return xn(e)?e:new Proxy(e,hh)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function xt(e,t,n,r){try{return r?e(...r):e()}catch(s){us(s,t,n)}}function je(e,t,n,r){if(K(e)){const s=xt(e,t,n,r);return s&&Yc(s)&&s.catch(i=>{us(i,t,n)}),s}if(B(e)){const s=[];for(let i=0;i<e.length;i++)s.push(je(e[i],t,n,r));return s}}function us(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](e,o,a)===!1)return}i=i.parent}const c=t.appContext.config.errorHandler;if(c){jt(),xt(c,null,10,[e,o,a]),$t();return}}ph(e,n,s,r)}function ph(e,t,n,r=!0){console.error(e)}let Gn=!1,mi=!1;const ve=[];let Qe=0;const _n=[];let Tt=null,Jt=0;const wl=Promise.resolve();let ao=null;function El(e){const t=ao||wl;return e?t.then(this?e.bind(this):e):t}function gh(e){let t=Qe+1,n=ve.length;for(;t<n;){const r=t+n>>>1,s=ve[r],i=Jn(s);i<e||i===e&&s.pre?t=r+1:n=r}return t}function co(e){(!ve.length||!ve.includes(e,Gn&&e.allowRecurse?Qe+1:Qe))&&(e.id==null?ve.push(e):ve.splice(gh(e.id),0,e),Il())}function Il(){!Gn&&!mi&&(mi=!0,ao=wl.then(Sl))}function mh(e){const t=ve.indexOf(e);t>Qe&&ve.splice(t,1)}function yh(e){B(e)?_n.push(...e):(!Tt||!Tt.includes(e,e.allowRecurse?Jt+1:Jt))&&_n.push(e),Il()}function ca(e,t,n=Gn?Qe+1:0){for(;n<ve.length;n++){const r=ve[n];if(r&&r.pre){if(e&&r.id!==e.uid)continue;ve.splice(n,1),n--,r()}}}function Tl(e){if(_n.length){const t=[...new Set(_n)].sort((n,r)=>Jn(n)-Jn(r));if(_n.length=0,Tt){Tt.push(...t);return}for(Tt=t,Jt=0;Jt<Tt.length;Jt++)Tt[Jt]();Tt=null,Jt=0}}const Jn=e=>e.id==null?1/0:e.id,_h=(e,t)=>{const n=Jn(e)-Jn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Sl(e){mi=!1,Gn=!0,ve.sort(_h);try{for(Qe=0;Qe<ve.length;Qe++){const t=ve[Qe];t&&t.active!==!1&&xt(t,null,14)}}finally{Qe=0,ve.length=0,Tl(),Gn=!1,ao=null,(ve.length||_n.length)&&Sl()}}function bh(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||le;let s=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=r[l]||le;h&&(s=n.map(g=>me(g)?g.trim():g)),f&&(s=n.map(fi))}let a,c=r[a=ks(t)]||r[a=ks(nt(t))];!c&&i&&(c=r[a=ks(An(t))]),c&&je(c,e,6,s);const u=r[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,je(u,e,6,s)}}function Al(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},a=!1;if(!K(e)){const c=u=>{const l=Al(u,t,!0);l&&(a=!0,ge(o,l))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(ue(e)&&r.set(e,null),null):(B(i)?i.forEach(c=>o[c]=null):ge(o,i),ue(e)&&r.set(e,o),o)}function fs(e,t){return!e||!is(t)?!1:(t=t.slice(2).replace(/Once$/,""),Q(e,t[0].toLowerCase()+t.slice(1))||Q(e,An(t))||Q(e,t))}let Te=null,Cl=null;function Br(e){const t=Te;return Te=e,Cl=e&&e.type.__scopeId||null,t}function vh(e,t=Te,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&va(-1);const i=Br(t);let o;try{o=e(...s)}finally{Br(i),r._d&&va(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ms(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:u,renderCache:l,props:f,data:h,setupState:g,ctx:y,inheritAttrs:A}=e,N=Br(e);let S,C;try{if(n.shapeFlag&4){const R=s||r,F=R;S=Xe(u.call(F,R,l,f,g,h,y)),C=a}else{const R=t;S=Xe(R.length>1?R(f,{attrs:a,slots:o,emit:c}):R(f,null)),C=t.props?a:wh(a)}}catch(R){Un.length=0,us(R,e,1),S=Re(Fe)}let E=S;if(C&&A!==!1){const R=Object.keys(C),{shapeFlag:F}=E;R.length&&F&7&&(i&&R.some(Ji)&&(C=Eh(C,i)),E=Ut(E,C,!1,!0))}return n.dirs&&(E=Ut(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),S=E,Br(N),S}const wh=e=>{let t;for(const n in e)(n==="class"||n==="style"||is(n))&&((t||(t={}))[n]=e[n]);return t},Eh=(e,t)=>{const n={};for(const r in e)(!Ji(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Ih(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:c}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?la(r,o,u):!!o;if(c&8){const l=t.dynamicProps;for(let f=0;f<l.length;f++){const h=l[f];if(o[h]!==r[h]&&!fs(u,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?la(r,o,u):!0:!!o;return!1}function la(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!fs(n,i))return!0}return!1}function Th({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const Ol="components",Sh="directives";function oI(e,t){return Rl(Ol,e,!0,t)||e}const Ah=Symbol.for("v-ndc");function aI(e){return Rl(Sh,e)}function Rl(e,t,n=!0,r=!1){const s=Te||be;if(s){const i=s.type;if(e===Ol){const a=wp(i,!1);if(a&&(a===t||a===nt(t)||a===cs(nt(t))))return i}const o=ua(s[e]||i[e],t)||ua(s.appContext[e],t);return!o&&r?i:o}}function ua(e,t){return e&&(e[t]||e[nt(t)]||e[cs(nt(t))])}const Ch=e=>e.__isSuspense;function Oh(e,t){t&&t.pendingBranch?B(e)?t.effects.push(...e):t.effects.push(e):yh(e)}const Rh=Symbol.for("v-scx"),Ph=()=>Ze(Rh),Er={};function we(e,t,n){return Pl(e,t,n)}function Pl(e,t,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=le){if(t&&i){const D=t;t=(...X)=>{D(...X),F()}}const c=be,u=D=>r===!0?D:Xt(D,r===!1?1:void 0);let l,f=!1,h=!1;if(ke(e)?(l=()=>e.value,f=Vr(e)):xn(e)?(l=()=>u(e),f=!0):B(e)?(h=!0,f=e.some(D=>xn(D)||Vr(D)),l=()=>e.map(D=>{if(ke(D))return D.value;if(xn(D))return u(D);if(K(D))return xt(D,c,2)})):K(e)?t?l=()=>xt(e,c,2):l=()=>(g&&g(),je(e,c,3,[y])):l=Le,t&&r){const D=l;l=()=>Xt(D())}let g,y=D=>{g=E.onStop=()=>{xt(D,c,4),g=E.onStop=void 0}},A;if(ys)if(y=Le,t?n&&je(t,c,3,[l(),h?[]:void 0,y]):l(),s==="sync"){const D=Ph();A=D.__watcherHandles||(D.__watcherHandles=[])}else return Le;let N=h?new Array(e.length).fill(Er):Er;const S=()=>{if(!(!E.active||!E.dirty))if(t){const D=E.run();(r||f||(h?D.some((X,V)=>Ft(X,N[V])):Ft(D,N)))&&(g&&g(),je(t,c,3,[D,N===Er?void 0:h&&N[0]===Er?[]:N,y]),N=D)}else E.run()};S.allowRecurse=!!t;let C;s==="sync"?C=S:s==="post"?C=()=>Ce(S,c&&c.suspense):(S.pre=!0,c&&(S.id=c.uid),C=()=>co(S));const E=new eo(l,Le,C),R=rl(),F=()=>{E.stop(),R&&Yi(R.effects,E)};return t?n?S():N=E.run():s==="post"?Ce(E.run.bind(E),c&&c.suspense):E.run(),A&&A.push(F),F}function kh(e,t,n){const r=this.proxy,s=me(e)?e.includes(".")?kl(r,e):()=>r[e]:e.bind(r,r);let i;K(t)?i=t:(i=t.handler,n=t);const o=ir(this),a=Pl(s,i.bind(r),n);return o(),a}function kl(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Xt(e,t=1/0,n){if(t<=0||!ue(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,ke(e))Xt(e.value,t,n);else if(B(e))for(let r=0;r<e.length;r++)Xt(e[r],t,n);else if(Jc(e)||yn(e))e.forEach(r=>{Xt(r,t,n)});else if(Qc(e))for(const r in e)Xt(e[r],t,n);return e}function cI(e,t){if(Te===null)return e;const n=_s(Te)||Te.proxy,r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,o,a,c=le]=t[s];i&&(K(i)&&(i={mounted:i,updated:i}),i.deep&&Xt(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return e}function Bt(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(jt(),je(c,n,8,[e.el,a,e,t]),$t())}}const St=Symbol("_leaveCb"),Ir=Symbol("_enterCb");function Nh(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return lo(()=>{e.isMounted=!0}),Ll(()=>{e.isUnmounting=!0}),e}const xe=[Function,Array],Nl={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:xe,onEnter:xe,onAfterEnter:xe,onEnterCancelled:xe,onBeforeLeave:xe,onLeave:xe,onAfterLeave:xe,onLeaveCancelled:xe,onBeforeAppear:xe,onAppear:xe,onAfterAppear:xe,onAppearCancelled:xe},Mh={name:"BaseTransition",props:Nl,setup(e,{slots:t}){const n=ms(),r=Nh();return()=>{const s=t.default&&Dl(t.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const h of s)if(h.type!==Fe){i=h;break}}const o=ee(e),{mode:a}=o;if(r.isLeaving)return Ds(i);const c=fa(i);if(!c)return Ds(i);const u=yi(c,o,r,n);_i(c,u);const l=n.subTree,f=l&&fa(l);if(f&&f.type!==Fe&&!Yt(c,f)){const h=yi(f,o,r,n);if(_i(f,h),a==="out-in"&&c.type!==Fe)return r.isLeaving=!0,h.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},Ds(i);a==="in-out"&&c.type!==Fe&&(h.delayLeave=(g,y,A)=>{const N=Ml(r,f);N[String(f.key)]=f,g[St]=()=>{y(),g[St]=void 0,delete u.delayedLeave},u.delayedLeave=A})}return i}}},Dh=Mh;function Ml(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function yi(e,t,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:f,onLeave:h,onAfterLeave:g,onLeaveCancelled:y,onBeforeAppear:A,onAppear:N,onAfterAppear:S,onAppearCancelled:C}=t,E=String(e.key),R=Ml(n,e),F=(V,G)=>{V&&je(V,r,9,G)},D=(V,G)=>{const Z=G[1];F(V,G),B(V)?V.every(he=>he.length<=1)&&Z():V.length<=1&&Z()},X={mode:i,persisted:o,beforeEnter(V){let G=a;if(!n.isMounted)if(s)G=A||a;else return;V[St]&&V[St](!0);const Z=R[E];Z&&Yt(e,Z)&&Z.el[St]&&Z.el[St](),F(G,[V])},enter(V){let G=c,Z=u,he=l;if(!n.isMounted)if(s)G=N||c,Z=S||u,he=C||l;else return;let L=!1;const re=V[Ir]=pe=>{L||(L=!0,pe?F(he,[V]):F(Z,[V]),X.delayedLeave&&X.delayedLeave(),V[Ir]=void 0)};G?D(G,[V,re]):re()},leave(V,G){const Z=String(e.key);if(V[Ir]&&V[Ir](!0),n.isUnmounting)return G();F(f,[V]);let he=!1;const L=V[St]=re=>{he||(he=!0,G(),re?F(y,[V]):F(g,[V]),V[St]=void 0,R[Z]===e&&delete R[Z])};R[Z]=e,h?D(h,[V,L]):L()},clone(V){return yi(V,t,n,r)}};return X}function Ds(e){if(hs(e))return e=Ut(e),e.children=null,e}function fa(e){if(!hs(e))return e;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&K(n.default))return n.default()}}function _i(e,t){e.shapeFlag&6&&e.component?_i(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Dl(e,t=!1,n){let r=[],s=0;for(let i=0;i<e.length;i++){let o=e[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ye?(o.patchFlag&128&&s++,r=r.concat(Dl(o.children,t,a))):(t||o.type!==Fe)&&r.push(a!=null?Ut(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function ds(e,t){return K(e)?ge({name:e.name},t,{setup:e}):e}const Rr=e=>!!e.type.__asyncLoader,hs=e=>e.type.__isKeepAlive;function xh(e,t){xl(e,"a",t)}function Lh(e,t){xl(e,"da",t)}function xl(e,t,n=be){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(ps(t,r,n),n){let s=n.parent;for(;s&&s.parent;)hs(s.parent.vnode)&&Fh(r,t,n,s),s=s.parent}}function Fh(e,t,n,r){const s=ps(t,e,r,!0);uo(()=>{Yi(r[t],s)},n)}function ps(e,t,n=be,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;jt();const a=ir(n),c=je(t,n,e,o);return a(),$t(),c});return r?s.unshift(i):s.push(i),i}}const gt=e=>(t,n=be)=>(!ys||e==="sp")&&ps(e,(...r)=>t(...r),n),Uh=gt("bm"),lo=gt("m"),jh=gt("bu"),$h=gt("u"),Ll=gt("bum"),uo=gt("um"),Vh=gt("sp"),Bh=gt("rtg"),Hh=gt("rtc");function Wh(e,t=be){ps("ec",e,t)}function lI(e,t,n,r){let s;const i=n;if(B(e)||me(e)){s=new Array(e.length);for(let o=0,a=e.length;o<a;o++)s[o]=t(e[o],o,void 0,i)}else if(typeof e=="number"){s=new Array(e);for(let o=0;o<e;o++)s[o]=t(o+1,o,void 0,i)}else if(ue(e))if(e[Symbol.iterator])s=Array.from(e,(o,a)=>t(o,a,void 0,i));else{const o=Object.keys(e);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];s[a]=t(e[u],u,a,i)}}else s=[];return s}const bi=e=>e?tu(e)?_s(e)||e.proxy:bi(e.parent):null,Ln=ge(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>bi(e.parent),$root:e=>bi(e.root),$emit:e=>e.emit,$options:e=>fo(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,co(e.update)}),$nextTick:e=>e.n||(e.n=El.bind(e.proxy)),$watch:e=>kh.bind(e)}),xs=(e,t)=>e!==le&&!e.__isScriptSetup&&Q(e,t),Kh={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=e;let u;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(xs(r,t))return o[t]=1,r[t];if(s!==le&&Q(s,t))return o[t]=2,s[t];if((u=e.propsOptions[0])&&Q(u,t))return o[t]=3,i[t];if(n!==le&&Q(n,t))return o[t]=4,n[t];vi&&(o[t]=0)}}const l=Ln[t];let f,h;if(l)return t==="$attrs"&&Pe(e.attrs,"get",""),l(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==le&&Q(n,t))return o[t]=4,n[t];if(h=c.config.globalProperties,Q(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return xs(s,t)?(s[t]=n,!0):r!==le&&Q(r,t)?(r[t]=n,!0):Q(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||e!==le&&Q(e,o)||xs(t,o)||(a=i[0])&&Q(a,o)||Q(r,o)||Q(Ln,o)||Q(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Q(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Fl(){return qh().slots}function qh(){const e=ms();return e.setupContext||(e.setupContext=ru(e))}function da(e){return B(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let vi=!0;function zh(e){const t=fo(e),n=e.proxy,r=e.ctx;vi=!1,t.beforeCreate&&ha(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:f,mounted:h,beforeUpdate:g,updated:y,activated:A,deactivated:N,beforeDestroy:S,beforeUnmount:C,destroyed:E,unmounted:R,render:F,renderTracked:D,renderTriggered:X,errorCaptured:V,serverPrefetch:G,expose:Z,inheritAttrs:he,components:L,directives:re,filters:pe}=t;if(u&&Gh(u,r,null),o)for(const se in o){const te=o[se];K(te)&&(r[se]=te.bind(n))}if(s){const se=s.call(n,n);ue(se)&&(e.data=pt(se))}if(vi=!0,i)for(const se in i){const te=i[se],Ve=K(te)?te.bind(n,n):K(te.get)?te.get.bind(n,n):Le,Vt=!K(te)&&K(te.set)?te.set.bind(n):Le,Be=_e({get:Ve,set:Vt});Object.defineProperty(r,se,{enumerable:!0,configurable:!0,get:()=>Be.value,set:Ae=>Be.value=Ae})}if(a)for(const se in a)Ul(a[se],r,n,se);if(c){const se=K(c)?c.call(n):c;Reflect.ownKeys(se).forEach(te=>{Pr(te,se[te])})}l&&ha(l,e,"c");function de(se,te){B(te)?te.forEach(Ve=>se(Ve.bind(n))):te&&se(te.bind(n))}if(de(Uh,f),de(lo,h),de(jh,g),de($h,y),de(xh,A),de(Lh,N),de(Wh,V),de(Hh,D),de(Bh,X),de(Ll,C),de(uo,R),de(Vh,G),B(Z))if(Z.length){const se=e.exposed||(e.exposed={});Z.forEach(te=>{Object.defineProperty(se,te,{get:()=>n[te],set:Ve=>n[te]=Ve})})}else e.exposed||(e.exposed={});F&&e.render===Le&&(e.render=F),he!=null&&(e.inheritAttrs=he),L&&(e.components=L),re&&(e.directives=re)}function Gh(e,t,n=Le){B(e)&&(e=wi(e));for(const r in e){const s=e[r];let i;ue(s)?"default"in s?i=Ze(s.from||r,s.default,!0):i=Ze(s.from||r):i=Ze(s),ke(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function ha(e,t,n){je(B(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ul(e,t,n,r){const s=r.includes(".")?kl(n,r):()=>n[r];if(me(e)){const i=t[e];K(i)&&we(s,i)}else if(K(e))we(s,e.bind(n));else if(ue(e))if(B(e))e.forEach(i=>Ul(i,t,n,r));else{const i=K(e.handler)?e.handler.bind(n):t[e.handler];K(i)&&we(s,i,e)}}function fo(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(u=>Hr(c,u,o,!0)),Hr(c,t,o)),ue(t)&&i.set(t,c),c}function Hr(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Hr(e,i,n,!0),s&&s.forEach(o=>Hr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=Jh[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const Jh={data:pa,props:ga,emits:ga,methods:Mn,computed:Mn,beforeCreate:Ie,created:Ie,beforeMount:Ie,mounted:Ie,beforeUpdate:Ie,updated:Ie,beforeDestroy:Ie,beforeUnmount:Ie,destroyed:Ie,unmounted:Ie,activated:Ie,deactivated:Ie,errorCaptured:Ie,serverPrefetch:Ie,components:Mn,directives:Mn,watch:Xh,provide:pa,inject:Yh};function pa(e,t){return t?e?function(){return ge(K(e)?e.call(this,this):e,K(t)?t.call(this,this):t)}:t:e}function Yh(e,t){return Mn(wi(e),wi(t))}function wi(e){if(B(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ie(e,t){return e?[...new Set([].concat(e,t))]:t}function Mn(e,t){return e?ge(Object.create(null),e,t):t}function ga(e,t){return e?B(e)&&B(t)?[...new Set([...e,...t])]:ge(Object.create(null),da(e),da(t??{})):t}function Xh(e,t){if(!e)return t;if(!t)return e;const n=ge(Object.create(null),e);for(const r in t)n[r]=Ie(e[r],t[r]);return n}function jl(){return{app:null,config:{isNativeTag:Od,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Qh=0;function Zh(e,t){return function(r,s=null){K(r)||(r=ge({},r)),s!=null&&!ue(s)&&(s=null);const i=jl(),o=new WeakSet;let a=!1;const c=i.app={_uid:Qh++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Ip,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&K(u.install)?(o.add(u),u.install(c,...l)):K(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,f){if(!a){const h=Re(r,s);return h.appContext=i,f===!0?f="svg":f===!1&&(f=void 0),l&&t?t(h,u):e(h,u,f),a=!0,c._container=u,u.__vue_app__=c,_s(h.component)||h.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c},runWithContext(u){const l=Fn;Fn=c;try{return u()}finally{Fn=l}}};return c}}let Fn=null;function Pr(e,t){if(be){let n=be.provides;const r=be.parent&&be.parent.provides;r===n&&(n=be.provides=Object.create(r)),n[e]=t}}function Ze(e,t,n=!1){const r=be||Te;if(r||Fn){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Fn._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&K(t)?t.call(r&&r.proxy):t}}const $l={},Vl=()=>Object.create($l),Bl=e=>Object.getPrototypeOf(e)===$l;function ep(e,t,n,r=!1){const s={},i=Vl();e.propsDefaults=Object.create(null),Hl(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:ch(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function tp(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,a=ee(s),[c]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const l=e.vnode.dynamicProps;for(let f=0;f<l.length;f++){let h=l[f];if(fs(e.emitsOptions,h))continue;const g=t[h];if(c)if(Q(i,h))g!==i[h]&&(i[h]=g,u=!0);else{const y=nt(h);s[y]=Ei(c,a,y,g,e,!1)}else g!==i[h]&&(i[h]=g,u=!0)}}}else{Hl(e,t,s,i)&&(u=!0);let l;for(const f in a)(!t||!Q(t,f)&&((l=An(f))===f||!Q(t,l)))&&(c?n&&(n[f]!==void 0||n[l]!==void 0)&&(s[f]=Ei(c,a,f,void 0,e,!0)):delete s[f]);if(i!==a)for(const f in i)(!t||!Q(t,f))&&(delete i[f],u=!0)}u&&ut(e.attrs,"set","")}function Hl(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(Dn(c))continue;const u=t[c];let l;s&&Q(s,l=nt(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:fs(e.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=ee(n),u=a||le;for(let l=0;l<i.length;l++){const f=i[l];n[f]=Ei(s,c,f,u[f],e,!Q(u,f))}}return o}function Ei(e,t,n,r,s,i){const o=e[n];if(o!=null){const a=Q(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&K(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const l=ir(s);r=u[n]=c.call(null,t),l()}}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===An(n))&&(r=!0))}return r}function Wl(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},a=[];let c=!1;if(!K(e)){const l=f=>{c=!0;const[h,g]=Wl(f,t,!0);ge(o,h),g&&a.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}if(!i&&!c)return ue(e)&&r.set(e,mn),mn;if(B(i))for(let l=0;l<i.length;l++){const f=nt(i[l]);ma(f)&&(o[f]=le)}else if(i)for(const l in i){const f=nt(l);if(ma(f)){const h=i[l],g=o[f]=B(h)||K(h)?{type:h}:ge({},h);if(g){const y=ba(Boolean,g.type),A=ba(String,g.type);g[0]=y>-1,g[1]=A<0||y<A,(y>-1||Q(g,"default"))&&a.push(f)}}}const u=[o,a];return ue(e)&&r.set(e,u),u}function ma(e){return e[0]!=="$"&&!Dn(e)}function ya(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function _a(e,t){return ya(e)===ya(t)}function ba(e,t){return B(t)?t.findIndex(n=>_a(n,e)):K(t)&&_a(t,e)?0:-1}const Kl=e=>e[0]==="_"||e==="$stable",ho=e=>B(e)?e.map(Xe):[Xe(e)],np=(e,t,n)=>{if(t._n)return t;const r=vh((...s)=>ho(t(...s)),n);return r._c=!1,r},ql=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Kl(s))continue;const i=e[s];if(K(i))t[s]=np(s,i,r);else if(i!=null){const o=ho(i);t[s]=()=>o}}},zl=(e,t)=>{const n=ho(t);e.slots.default=()=>n},rp=(e,t)=>{const n=e.slots=Vl();if(e.vnode.shapeFlag&32){const r=t._;r?(ge(n,t),Zc(n,"_",r,!0)):ql(t,n)}else t&&zl(e,t)},sp=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=le;if(r.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:(ge(s,t),!n&&a===1&&delete s._):(i=!t.$stable,ql(t,s)),o=t}else t&&(zl(e,t),o={default:1});if(i)for(const a in s)!Kl(a)&&o[a]==null&&delete s[a]};function Ii(e,t,n,r,s=!1){if(B(e)){e.forEach((h,g)=>Ii(h,t&&(B(t)?t[g]:t),n,r,s));return}if(Rr(r)&&!s)return;const i=r.shapeFlag&4?_s(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=e,u=t&&t.r,l=a.refs===le?a.refs={}:a.refs,f=a.setupState;if(u!=null&&u!==c&&(me(u)?(l[u]=null,Q(f,u)&&(f[u]=null)):ke(u)&&(u.value=null)),K(c))xt(c,a,12,[o,l]);else{const h=me(c),g=ke(c);if(h||g){const y=()=>{if(e.f){const A=h?Q(f,c)?f[c]:l[c]:c.value;s?B(A)&&Yi(A,i):B(A)?A.includes(i)||A.push(i):h?(l[c]=[i],Q(f,c)&&(f[c]=l[c])):(c.value=[i],e.k&&(l[e.k]=c.value))}else h?(l[c]=o,Q(f,c)&&(f[c]=o)):g&&(c.value=o,e.k&&(l[e.k]=o))};o?(y.id=-1,Ce(y,n)):y()}}}const Ce=Oh;function ip(e){return op(e)}function op(e,t){const n=el();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:f,nextSibling:h,setScopeId:g=Le,insertStaticContent:y}=e,A=(d,p,m,b=null,v=null,T=null,k=void 0,I=null,O=!!p.dynamicChildren)=>{if(d===p)return;d&&!Yt(d,p)&&(b=P(d),Ae(d,v,T,!0),d=null),p.patchFlag===-2&&(O=!1,p.dynamicChildren=null);const{type:w,ref:x,shapeFlag:$}=p;switch(w){case gs:N(d,p,m,b);break;case Fe:S(d,p,m,b);break;case kr:d==null&&C(p,m,b,k);break;case Ye:L(d,p,m,b,v,T,k,I,O);break;default:$&1?F(d,p,m,b,v,T,k,I,O):$&6?re(d,p,m,b,v,T,k,I,O):($&64||$&128)&&w.process(d,p,m,b,v,T,k,I,O,ce)}x!=null&&v&&Ii(x,d&&d.ref,T,p||d,!p)},N=(d,p,m,b)=>{if(d==null)r(p.el=a(p.children),m,b);else{const v=p.el=d.el;p.children!==d.children&&u(v,p.children)}},S=(d,p,m,b)=>{d==null?r(p.el=c(p.children||""),m,b):p.el=d.el},C=(d,p,m,b)=>{[d.el,d.anchor]=y(d.children,p,m,b,d.el,d.anchor)},E=({el:d,anchor:p},m,b)=>{let v;for(;d&&d!==p;)v=h(d),r(d,m,b),d=v;r(p,m,b)},R=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=h(d),s(d),d=m;s(p)},F=(d,p,m,b,v,T,k,I,O)=>{p.type==="svg"?k="svg":p.type==="math"&&(k="mathml"),d==null?D(p,m,b,v,T,k,I,O):G(d,p,v,T,k,I,O)},D=(d,p,m,b,v,T,k,I)=>{let O,w;const{props:x,shapeFlag:$,transition:j,dirs:W}=d;if(O=d.el=o(d.type,T,x&&x.is,x),$&8?l(O,d.children):$&16&&V(d.children,O,null,b,v,Ls(d,T),k,I),W&&Bt(d,null,b,"created"),X(O,d,d.scopeId,k,b),x){for(const ne in x)ne!=="value"&&!Dn(ne)&&i(O,ne,null,x[ne],T,d.children,b,v,M);"value"in x&&i(O,"value",null,x.value,T),(w=x.onVnodeBeforeMount)&&ze(w,b,d)}W&&Bt(d,null,b,"beforeMount");const Y=ap(v,j);Y&&j.beforeEnter(O),r(O,p,m),((w=x&&x.onVnodeMounted)||Y||W)&&Ce(()=>{w&&ze(w,b,d),Y&&j.enter(O),W&&Bt(d,null,b,"mounted")},v)},X=(d,p,m,b,v)=>{if(m&&g(d,m),b)for(let T=0;T<b.length;T++)g(d,b[T]);if(v){let T=v.subTree;if(p===T){const k=v.vnode;X(d,k,k.scopeId,k.slotScopeIds,v.parent)}}},V=(d,p,m,b,v,T,k,I,O=0)=>{for(let w=O;w<d.length;w++){const x=d[w]=I?At(d[w]):Xe(d[w]);A(null,x,p,m,b,v,T,k,I)}},G=(d,p,m,b,v,T,k)=>{const I=p.el=d.el;let{patchFlag:O,dynamicChildren:w,dirs:x}=p;O|=d.patchFlag&16;const $=d.props||le,j=p.props||le;let W;if(m&&Ht(m,!1),(W=j.onVnodeBeforeUpdate)&&ze(W,m,p,d),x&&Bt(p,d,m,"beforeUpdate"),m&&Ht(m,!0),w?Z(d.dynamicChildren,w,I,m,b,Ls(p,v),T):k||te(d,p,I,null,m,b,Ls(p,v),T,!1),O>0){if(O&16)he(I,p,$,j,m,b,v);else if(O&2&&$.class!==j.class&&i(I,"class",null,j.class,v),O&4&&i(I,"style",$.style,j.style,v),O&8){const Y=p.dynamicProps;for(let ne=0;ne<Y.length;ne++){const fe=Y[ne],ye=$[fe],He=j[fe];(He!==ye||fe==="value")&&i(I,fe,ye,He,v,d.children,m,b,M)}}O&1&&d.children!==p.children&&l(I,p.children)}else!k&&w==null&&he(I,p,$,j,m,b,v);((W=j.onVnodeUpdated)||x)&&Ce(()=>{W&&ze(W,m,p,d),x&&Bt(p,d,m,"updated")},b)},Z=(d,p,m,b,v,T,k)=>{for(let I=0;I<p.length;I++){const O=d[I],w=p[I],x=O.el&&(O.type===Ye||!Yt(O,w)||O.shapeFlag&70)?f(O.el):m;A(O,w,x,null,b,v,T,k,!0)}},he=(d,p,m,b,v,T,k)=>{if(m!==b){if(m!==le)for(const I in m)!Dn(I)&&!(I in b)&&i(d,I,m[I],null,k,p.children,v,T,M);for(const I in b){if(Dn(I))continue;const O=b[I],w=m[I];O!==w&&I!=="value"&&i(d,I,w,O,k,p.children,v,T,M)}"value"in b&&i(d,"value",m.value,b.value,k)}},L=(d,p,m,b,v,T,k,I,O)=>{const w=p.el=d?d.el:a(""),x=p.anchor=d?d.anchor:a("");let{patchFlag:$,dynamicChildren:j,slotScopeIds:W}=p;W&&(I=I?I.concat(W):W),d==null?(r(w,m,b),r(x,m,b),V(p.children||[],m,x,v,T,k,I,O)):$>0&&$&64&&j&&d.dynamicChildren?(Z(d.dynamicChildren,j,m,v,T,k,I),(p.key!=null||v&&p===v.subTree)&&Gl(d,p,!0)):te(d,p,m,x,v,T,k,I,O)},re=(d,p,m,b,v,T,k,I,O)=>{p.slotScopeIds=I,d==null?p.shapeFlag&512?v.ctx.activate(p,m,b,k,O):pe(p,m,b,v,T,k,O):$e(d,p,O)},pe=(d,p,m,b,v,T,k)=>{const I=d.component=yp(d,b,v);if(hs(d)&&(I.ctx.renderer=ce),_p(I),I.asyncDep){if(v&&v.registerDep(I,de),!d.el){const O=I.subTree=Re(Fe);S(null,O,p,m)}}else de(I,d,p,m,v,T,k)},$e=(d,p,m)=>{const b=p.component=d.component;if(Ih(d,p,m))if(b.asyncDep&&!b.asyncResolved){se(b,p,m);return}else b.next=p,mh(b.update),b.effect.dirty=!0,b.update();else p.el=d.el,b.vnode=p},de=(d,p,m,b,v,T,k)=>{const I=()=>{if(d.isMounted){let{next:x,bu:$,u:j,parent:W,vnode:Y}=d;{const dn=Jl(d);if(dn){x&&(x.el=Y.el,se(d,x,k)),dn.asyncDep.then(()=>{d.isUnmounted||I()});return}}let ne=x,fe;Ht(d,!1),x?(x.el=Y.el,se(d,x,k)):x=Y,$&&Cr($),(fe=x.props&&x.props.onVnodeBeforeUpdate)&&ze(fe,W,x,Y),Ht(d,!0);const ye=Ms(d),He=d.subTree;d.subTree=ye,A(He,ye,f(He.el),P(He),d,v,T),x.el=ye.el,ne===null&&Th(d,ye.el),j&&Ce(j,v),(fe=x.props&&x.props.onVnodeUpdated)&&Ce(()=>ze(fe,W,x,Y),v)}else{let x;const{el:$,props:j}=p,{bm:W,m:Y,parent:ne}=d,fe=Rr(p);if(Ht(d,!1),W&&Cr(W),!fe&&(x=j&&j.onVnodeBeforeMount)&&ze(x,ne,p),Ht(d,!0),$&&z){const ye=()=>{d.subTree=Ms(d),z($,d.subTree,d,v,null)};fe?p.type.__asyncLoader().then(()=>!d.isUnmounted&&ye()):ye()}else{const ye=d.subTree=Ms(d);A(null,ye,m,b,d,v,T),p.el=ye.el}if(Y&&Ce(Y,v),!fe&&(x=j&&j.onVnodeMounted)){const ye=p;Ce(()=>ze(x,ne,ye),v)}(p.shapeFlag&256||ne&&Rr(ne.vnode)&&ne.vnode.shapeFlag&256)&&d.a&&Ce(d.a,v),d.isMounted=!0,p=m=b=null}},O=d.effect=new eo(I,Le,()=>co(w),d.scope),w=d.update=()=>{O.dirty&&O.run()};w.id=d.uid,Ht(d,!0),w()},se=(d,p,m)=>{p.component=d;const b=d.vnode.props;d.vnode=p,d.next=null,tp(d,p.props,b,m),sp(d,p.children,m),jt(),ca(d),$t()},te=(d,p,m,b,v,T,k,I,O=!1)=>{const w=d&&d.children,x=d?d.shapeFlag:0,$=p.children,{patchFlag:j,shapeFlag:W}=p;if(j>0){if(j&128){Vt(w,$,m,b,v,T,k,I,O);return}else if(j&256){Ve(w,$,m,b,v,T,k,I,O);return}}W&8?(x&16&&M(w,v,T),$!==w&&l(m,$)):x&16?W&16?Vt(w,$,m,b,v,T,k,I,O):M(w,v,T,!0):(x&8&&l(m,""),W&16&&V($,m,b,v,T,k,I,O))},Ve=(d,p,m,b,v,T,k,I,O)=>{d=d||mn,p=p||mn;const w=d.length,x=p.length,$=Math.min(w,x);let j;for(j=0;j<$;j++){const W=p[j]=O?At(p[j]):Xe(p[j]);A(d[j],W,m,null,v,T,k,I,O)}w>x?M(d,v,T,!0,!1,$):V(p,m,b,v,T,k,I,O,$)},Vt=(d,p,m,b,v,T,k,I,O)=>{let w=0;const x=p.length;let $=d.length-1,j=x-1;for(;w<=$&&w<=j;){const W=d[w],Y=p[w]=O?At(p[w]):Xe(p[w]);if(Yt(W,Y))A(W,Y,m,null,v,T,k,I,O);else break;w++}for(;w<=$&&w<=j;){const W=d[$],Y=p[j]=O?At(p[j]):Xe(p[j]);if(Yt(W,Y))A(W,Y,m,null,v,T,k,I,O);else break;$--,j--}if(w>$){if(w<=j){const W=j+1,Y=W<x?p[W].el:b;for(;w<=j;)A(null,p[w]=O?At(p[w]):Xe(p[w]),m,Y,v,T,k,I,O),w++}}else if(w>j)for(;w<=$;)Ae(d[w],v,T,!0),w++;else{const W=w,Y=w,ne=new Map;for(w=Y;w<=j;w++){const Ne=p[w]=O?At(p[w]):Xe(p[w]);Ne.key!=null&&ne.set(Ne.key,w)}let fe,ye=0;const He=j-Y+1;let dn=!1,Xo=0;const Rn=new Array(He);for(w=0;w<He;w++)Rn[w]=0;for(w=W;w<=$;w++){const Ne=d[w];if(ye>=He){Ae(Ne,v,T,!0);continue}let qe;if(Ne.key!=null)qe=ne.get(Ne.key);else for(fe=Y;fe<=j;fe++)if(Rn[fe-Y]===0&&Yt(Ne,p[fe])){qe=fe;break}qe===void 0?Ae(Ne,v,T,!0):(Rn[qe-Y]=w+1,qe>=Xo?Xo=qe:dn=!0,A(Ne,p[qe],m,null,v,T,k,I,O),ye++)}const Qo=dn?cp(Rn):mn;for(fe=Qo.length-1,w=He-1;w>=0;w--){const Ne=Y+w,qe=p[Ne],Zo=Ne+1<x?p[Ne+1].el:b;Rn[w]===0?A(null,qe,m,Zo,v,T,k,I,O):dn&&(fe<0||w!==Qo[fe]?Be(qe,m,Zo,2):fe--)}}},Be=(d,p,m,b,v=null)=>{const{el:T,type:k,transition:I,children:O,shapeFlag:w}=d;if(w&6){Be(d.component.subTree,p,m,b);return}if(w&128){d.suspense.move(p,m,b);return}if(w&64){k.move(d,p,m,ce);return}if(k===Ye){r(T,p,m);for(let $=0;$<O.length;$++)Be(O[$],p,m,b);r(d.anchor,p,m);return}if(k===kr){E(d,p,m);return}if(b!==2&&w&1&&I)if(b===0)I.beforeEnter(T),r(T,p,m),Ce(()=>I.enter(T),v);else{const{leave:$,delayLeave:j,afterLeave:W}=I,Y=()=>r(T,p,m),ne=()=>{$(T,()=>{Y(),W&&W()})};j?j(T,Y,ne):ne()}else r(T,p,m)},Ae=(d,p,m,b=!1,v=!1)=>{const{type:T,props:k,ref:I,children:O,dynamicChildren:w,shapeFlag:x,patchFlag:$,dirs:j}=d;if(I!=null&&Ii(I,null,m,d,!0),x&256){p.ctx.deactivate(d);return}const W=x&1&&j,Y=!Rr(d);let ne;if(Y&&(ne=k&&k.onVnodeBeforeUnmount)&&ze(ne,p,d),x&6)_(d.component,m,b);else{if(x&128){d.suspense.unmount(m,b);return}W&&Bt(d,null,p,"beforeUnmount"),x&64?d.type.remove(d,p,m,v,ce,b):w&&(T!==Ye||$>0&&$&64)?M(w,p,m,!1,!0):(T===Ye&&$&384||!v&&x&16)&&M(O,p,m),b&&fn(d)}(Y&&(ne=k&&k.onVnodeUnmounted)||W)&&Ce(()=>{ne&&ze(ne,p,d),W&&Bt(d,null,p,"unmounted")},m)},fn=d=>{const{type:p,el:m,anchor:b,transition:v}=d;if(p===Ye){Yo(m,b);return}if(p===kr){R(d);return}const T=()=>{s(m),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(d.shapeFlag&1&&v&&!v.persisted){const{leave:k,delayLeave:I}=v,O=()=>k(m,T);I?I(d.el,T,O):O()}else T()},Yo=(d,p)=>{let m;for(;d!==p;)m=h(d),s(d),d=m;s(p)},_=(d,p,m)=>{const{bum:b,scope:v,update:T,subTree:k,um:I}=d;b&&Cr(b),v.stop(),T&&(T.active=!1,Ae(k,d,p,m)),I&&Ce(I,p),Ce(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},M=(d,p,m,b=!1,v=!1,T=0)=>{for(let k=T;k<d.length;k++)Ae(d[k],p,m,b,v)},P=d=>d.shapeFlag&6?P(d.component.subTree):d.shapeFlag&128?d.suspense.next():h(d.anchor||d.el);let U=!1;const ie=(d,p,m)=>{d==null?p._vnode&&Ae(p._vnode,null,null,!0):A(p._vnode||null,d,p,null,null,null,m),U||(U=!0,ca(),Tl(),U=!1),p._vnode=d},ce={p:A,um:Ae,m:Be,r:fn,mt:pe,mc:V,pc:te,pbc:Z,n:P,o:e};let J,z;return{render:ie,hydrate:J,createApp:Zh(ie,J)}}function Ls({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Ht({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function ap(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Gl(e,t,n=!1){const r=e.children,s=t.children;if(B(r)&&B(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=At(s[i]),a.el=o.el),n||Gl(o,a)),a.type===gs&&(a.el=o.el)}}function cp(e){const t=e.slice(),n=[0];let r,s,i,o,a;const c=e.length;for(r=0;r<c;r++){const u=e[r];if(u!==0){if(s=n[n.length-1],e[s]<u){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<u?i=a+1:o=a;u<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function Jl(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Jl(t)}const lp=e=>e.__isTeleport,Ye=Symbol.for("v-fgt"),gs=Symbol.for("v-txt"),Fe=Symbol.for("v-cmt"),kr=Symbol.for("v-stc"),Un=[];let We=null;function Yl(e=!1){Un.push(We=e?null:[])}function up(){Un.pop(),We=Un[Un.length-1]||null}let Yn=1;function va(e){Yn+=e}function Xl(e){return e.dynamicChildren=Yn>0?We||mn:null,up(),Yn>0&&We&&We.push(e),e}function uI(e,t,n,r,s,i){return Xl(eu(e,t,n,r,s,i,!0))}function Ql(e,t,n,r,s){return Xl(Re(e,t,n,r,s,!0))}function Ti(e){return e?e.__v_isVNode===!0:!1}function Yt(e,t){return e.type===t.type&&e.key===t.key}const Zl=({key:e})=>e??null,Nr=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?me(e)||ke(e)||K(e)?{i:Te,r:e,k:t,f:!!n}:e:null);function eu(e,t=null,n=null,r=0,s=null,i=e===Ye?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Zl(t),ref:t&&Nr(t),scopeId:Cl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Te};return a?(po(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=me(n)?8:16),Yn>0&&!o&&We&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&We.push(c),c}const Re=fp;function fp(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===Ah)&&(e=Fe),Ti(e)){const a=Ut(e,t,!0);return n&&po(a,n),Yn>0&&!i&&We&&(a.shapeFlag&6?We[We.indexOf(e)]=a:We.push(a)),a.patchFlag|=-2,a}if(Ep(e)&&(e=e.__vccOpts),t){t=dp(t);let{class:a,style:c}=t;a&&!me(a)&&(t.class=Zi(a)),ue(c)&&(ml(c)&&!B(c)&&(c=ge({},c)),t.style=Qi(c))}const o=me(e)?1:Ch(e)?128:lp(e)?64:ue(e)?4:K(e)?2:0;return eu(e,t,n,r,s,o,i,!0)}function dp(e){return e?ml(e)||Bl(e)?ge({},e):e:null}function Ut(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=e,u=t?pp(s||{},t):s,l={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&Zl(u),ref:t&&t.ref?n&&i?B(i)?i.concat(Nr(t)):[i,Nr(t)]:Nr(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ye?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ut(e.ssContent),ssFallback:e.ssFallback&&Ut(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&(l.transition=c.clone(l)),l}function hp(e=" ",t=0){return Re(gs,null,e,t)}function fI(e,t){const n=Re(kr,null,e);return n.staticCount=t,n}function dI(e="",t=!1){return t?(Yl(),Ql(Fe,null,e)):Re(Fe,null,e)}function Xe(e){return e==null||typeof e=="boolean"?Re(Fe):B(e)?Re(Ye,null,e.slice()):typeof e=="object"?At(e):Re(gs,null,String(e))}function At(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ut(e)}function po(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(B(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),po(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!Bl(t)?t._ctx=Te:s===3&&Te&&(Te.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else K(t)?(t={default:t,_ctx:Te},n=32):(t=String(t),r&64?(n=16,t=[hp(t)]):n=8);e.children=t,e.shapeFlag|=n}function pp(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=Zi([t.class,r.class]));else if(s==="style")t.style=Qi([t.style,r.style]);else if(is(s)){const i=t[s],o=r[s];o&&i!==o&&!(B(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function ze(e,t,n,r=null){je(e,t,7,[n,r])}const gp=jl();let mp=0;function yp(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||gp,i={uid:mp++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new $d(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wl(r,s),emitsOptions:Al(r,s),emit:null,emitted:null,propsDefaults:le,inheritAttrs:r.inheritAttrs,ctx:le,data:le,props:le,attrs:le,slots:le,refs:le,setupState:le,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=bh.bind(null,i),e.ce&&e.ce(i),i}let be=null;const ms=()=>be||Te;let Wr,Si;{const e=el(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Wr=t("__VUE_INSTANCE_SETTERS__",n=>be=n),Si=t("__VUE_SSR_SETTERS__",n=>ys=n)}const ir=e=>{const t=be;return Wr(e),e.scope.on(),()=>{e.scope.off(),Wr(t)}},wa=()=>{be&&be.scope.off(),Wr(null)};function tu(e){return e.vnode.shapeFlag&4}let ys=!1;function _p(e,t=!1){t&&Si(t);const{props:n,children:r}=e.vnode,s=tu(e);ep(e,n,s,t),rp(e,r);const i=s?bp(e,t):void 0;return t&&Si(!1),i}function bp(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Kh);const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?ru(e):null,i=ir(e);jt();const o=xt(r,e,0,[e.props,s]);if($t(),i(),Yc(o)){if(o.then(wa,wa),t)return o.then(a=>{Ea(e,a,t)}).catch(a=>{us(a,e,0)});e.asyncDep=o}else Ea(e,o,t)}else nu(e,t)}function Ea(e,t,n){K(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ue(t)&&(e.setupState=vl(t)),nu(e,n)}let Ia;function nu(e,t,n){const r=e.type;if(!e.render){if(!t&&Ia&&!r.render){const s=r.template||fo(e).template;if(s){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:c}=r,u=ge(ge({isCustomElement:i,delimiters:a},o),c);r.render=Ia(s,u)}}e.render=r.render||Le}{const s=ir(e);jt();try{zh(e)}finally{$t(),s()}}}const vp={get(e,t){return Pe(e,"get",""),e[t]}};function ru(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,vp),slots:e.slots,emit:e.emit,expose:t}}function _s(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(vl(lh(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ln)return Ln[n](e)},has(t,n){return n in t||n in Ln}}))}function wp(e,t=!0){return K(e)?e.displayName||e.name:e.name||t&&e.__name}function Ep(e){return K(e)&&"__vccOpts"in e}const _e=(e,t)=>uh(e,t,ys);function or(e,t,n){const r=arguments.length;return r===2?ue(t)&&!B(t)?Ti(t)?Re(e,null,[t]):Re(e,t):Re(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ti(n)&&(n=[n]),Re(e,t,n))}const Ip="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Tp="http://www.w3.org/2000/svg",Sp="http://www.w3.org/1998/Math/MathML",Ct=typeof document<"u"?document:null,Ta=Ct&&Ct.createElement("template"),Ap={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?Ct.createElementNS(Tp,e):t==="mathml"?Ct.createElementNS(Sp,e):Ct.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>Ct.createTextNode(e),createComment:e=>Ct.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ct.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ta.innerHTML=r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e;const a=Ta.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},bt="transition",Pn="animation",Xn=Symbol("_vtc"),su=(e,{slots:t})=>or(Dh,Cp(e),t);su.displayName="Transition";const iu={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};su.props=ge({},Nl,iu);const Wt=(e,t=[])=>{B(e)?e.forEach(n=>n(...t)):e&&e(...t)},Sa=e=>e?B(e)?e.some(t=>t.length>1):e.length>1:!1;function Cp(e){const t={};for(const L in e)L in iu||(t[L]=e[L]);if(e.css===!1)return t;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:l=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=e,y=Op(s),A=y&&y[0],N=y&&y[1],{onBeforeEnter:S,onEnter:C,onEnterCancelled:E,onLeave:R,onLeaveCancelled:F,onBeforeAppear:D=S,onAppear:X=C,onAppearCancelled:V=E}=t,G=(L,re,pe)=>{Kt(L,re?l:a),Kt(L,re?u:o),pe&&pe()},Z=(L,re)=>{L._isLeaving=!1,Kt(L,f),Kt(L,g),Kt(L,h),re&&re()},he=L=>(re,pe)=>{const $e=L?X:C,de=()=>G(re,L,pe);Wt($e,[re,de]),Aa(()=>{Kt(re,L?c:i),vt(re,L?l:a),Sa($e)||Ca(re,r,A,de)})};return ge(t,{onBeforeEnter(L){Wt(S,[L]),vt(L,i),vt(L,o)},onBeforeAppear(L){Wt(D,[L]),vt(L,c),vt(L,u)},onEnter:he(!1),onAppear:he(!0),onLeave(L,re){L._isLeaving=!0;const pe=()=>Z(L,re);vt(L,f),vt(L,h),kp(),Aa(()=>{L._isLeaving&&(Kt(L,f),vt(L,g),Sa(R)||Ca(L,r,N,pe))}),Wt(R,[L,pe])},onEnterCancelled(L){G(L,!1),Wt(E,[L])},onAppearCancelled(L){G(L,!0),Wt(V,[L])},onLeaveCancelled(L){Z(L),Wt(F,[L])}})}function Op(e){if(e==null)return null;if(ue(e))return[Fs(e.enter),Fs(e.leave)];{const t=Fs(e);return[t,t]}}function Fs(e){return Md(e)}function vt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Xn]||(e[Xn]=new Set)).add(t)}function Kt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[Xn];n&&(n.delete(t),n.size||(e[Xn]=void 0))}function Aa(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Rp=0;function Ca(e,t,n,r){const s=e._endId=++Rp,i=()=>{s===e._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=Pp(e,t);if(!o)return r();const u=o+"end";let l=0;const f=()=>{e.removeEventListener(u,h),i()},h=g=>{g.target===e&&++l>=c&&f()};setTimeout(()=>{l<c&&f()},a+1),e.addEventListener(u,h)}function Pp(e,t){const n=window.getComputedStyle(e),r=y=>(n[y]||"").split(", "),s=r(`${bt}Delay`),i=r(`${bt}Duration`),o=Oa(s,i),a=r(`${Pn}Delay`),c=r(`${Pn}Duration`),u=Oa(a,c);let l=null,f=0,h=0;t===bt?o>0&&(l=bt,f=o,h=i.length):t===Pn?u>0&&(l=Pn,f=u,h=c.length):(f=Math.max(o,u),l=f>0?o>u?bt:Pn:null,h=l?l===bt?i.length:c.length:0);const g=l===bt&&/\b(transform|all)(,|$)/.test(r(`${bt}Property`).toString());return{type:l,timeout:f,propCount:h,hasTransform:g}}function Oa(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>Ra(n)+Ra(e[r])))}function Ra(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function kp(){return document.body.offsetHeight}function Np(e,t,n){const r=e[Xn];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Pa=Symbol("_vod"),Mp=Symbol("_vsh"),Dp=Symbol(""),xp=/(^|;)\s*display\s*:/;function Lp(e,t,n){const r=e.style,s=me(n);let i=!1;if(n&&!s){if(t)if(me(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Mr(r,a,"")}else for(const o in t)n[o]==null&&Mr(r,o,"");for(const o in n)o==="display"&&(i=!0),Mr(r,o,n[o])}else if(s){if(t!==n){const o=r[Dp];o&&(n+=";"+o),r.cssText=n,i=xp.test(n)}}else t&&e.removeAttribute("style");Pa in e&&(e[Pa]=i?r.display:"",e[Mp]&&(r.display="none"))}const ka=/\s*!important$/;function Mr(e,t,n){if(B(n))n.forEach(r=>Mr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Fp(e,t);ka.test(n)?e.setProperty(An(r),n.replace(ka,""),"important"):e[r]=n}}const Na=["Webkit","Moz","ms"],Us={};function Fp(e,t){const n=Us[t];if(n)return n;let r=nt(t);if(r!=="filter"&&r in e)return Us[t]=r;r=cs(r);for(let s=0;s<Na.length;s++){const i=Na[s]+r;if(i in e)return Us[t]=i}return t}const Ma="http://www.w3.org/1999/xlink";function Up(e,t,n,r,s){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ma,t.slice(6,t.length)):e.setAttributeNS(Ma,t,n);else{const i=jd(t);n==null||i&&!tl(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function jp(e,t,n,r,s,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,s,i),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){const u=a==="OPTION"?e.getAttribute("value")||"":e.value,l=n??"";(u!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let c=!1;if(n===""||n==null){const u=typeof e[t];u==="boolean"?n=tl(n):n==null&&u==="string"?(n="",c=!0):u==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function pn(e,t,n,r){e.addEventListener(t,n,r)}function $p(e,t,n,r){e.removeEventListener(t,n,r)}const Da=Symbol("_vei");function Vp(e,t,n,r,s=null){const i=e[Da]||(e[Da]={}),o=i[t];if(r&&o)o.value=r;else{const[a,c]=Bp(t);if(r){const u=i[t]=Kp(r,s);pn(e,a,u,c)}else o&&($p(e,a,o,c),i[t]=void 0)}}const xa=/(?:Once|Passive|Capture)$/;function Bp(e){let t;if(xa.test(e)){t={};let r;for(;r=e.match(xa);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):An(e.slice(2)),t]}let js=0;const Hp=Promise.resolve(),Wp=()=>js||(Hp.then(()=>js=0),js=Date.now());function Kp(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;je(qp(r,n.value),t,5,[r])};return n.value=e,n.attached=Wp(),n}function qp(e,t){if(B(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const La=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,zp=(e,t,n,r,s,i,o,a,c)=>{const u=s==="svg";t==="class"?Np(e,r,u):t==="style"?Lp(e,n,r):is(t)?Ji(t)||Vp(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Gp(e,t,r,u))?jp(e,t,r,i,o,a,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Up(e,t,r,u))};function Gp(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&La(t)&&K(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return La(t)&&me(n)?!1:t in e}const Fa=e=>{const t=e.props["onUpdate:modelValue"]||!1;return B(t)?n=>Cr(t,n):t};function Jp(e){e.target.composing=!0}function Ua(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const $s=Symbol("_assign"),hI={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e[$s]=Fa(s);const i=r||s.props&&s.props.type==="number";pn(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),i&&(a=fi(a)),e[$s](a)}),n&&pn(e,"change",()=>{e.value=e.value.trim()}),t||(pn(e,"compositionstart",Jp),pn(e,"compositionend",Ua),pn(e,"change",Ua))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:s}},i){if(e[$s]=Fa(i),e.composing)return;const o=(s||e.type==="number")&&!/^0\d/.test(e.value)?fi(e.value):e.value,a=t??"";o!==a&&(document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===a)||(e.value=a))}},Yp=["ctrl","shift","alt","meta"],Xp={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Yp.some(n=>e[`${n}Key`]&&!t.includes(n))},pI=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<t.length;o++){const a=Xp[t[o]];if(a&&a(s,t))return}return e(s,...i)})},Qp=ge({patchProp:zp},Ap);let ja;function Zp(){return ja||(ja=ip(Qp))}const eg=(...e)=>{const t=Zp().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=ng(r);if(!s)return;const i=t._component;!K(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,tg(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function tg(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function ng(e){return me(e)?document.querySelector(e):e}/*!
  * vue-router v4.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const ou=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Cn=e=>ou?Symbol(e):"_vr_"+e,rg=Cn("rvlm"),$a=Cn("rvd"),bs=Cn("r"),au=Cn("rl"),Ai=Cn("rvl"),gn=typeof window<"u";function sg(e){return e.__esModule||ou&&e[Symbol.toStringTag]==="Module"}const oe=Object.assign;function Vs(e,t){const n={};for(const r in t){const s=t[r];n[r]=Array.isArray(s)?s.map(e):e(s)}return n}const jn=()=>{},ig=/\/$/,og=e=>e.replace(ig,"");function Bs(e,t,n="/"){let r,s={},i="",o="";const a=t.indexOf("?"),c=t.indexOf("#",a>-1?a:0);return a>-1&&(r=t.slice(0,a),i=t.slice(a+1,c>-1?c:t.length),s=e(i)),c>-1&&(r=r||t.slice(0,c),o=t.slice(c,t.length)),r=ug(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function ag(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Va(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function cg(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&In(t.matched[r],n.matched[s])&&cu(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function In(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function cu(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!lg(e[n],t[n]))return!1;return!0}function lg(e,t){return Array.isArray(e)?Ba(e,t):Array.isArray(t)?Ba(t,e):e===t}function Ba(e,t){return Array.isArray(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function ug(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Qn;(function(e){e.pop="pop",e.push="push"})(Qn||(Qn={}));var $n;(function(e){e.back="back",e.forward="forward",e.unknown=""})($n||($n={}));function fg(e){if(!e)if(gn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),og(e)}const dg=/^[^#]+#/;function hg(e,t){return e.replace(dg,"#")+t}function pg(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const vs=()=>({left:window.pageXOffset,top:window.pageYOffset});function gg(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=pg(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Ha(e,t){return(history.state?history.state.position-t:-1)+e}const Ci=new Map;function mg(e,t){Ci.set(e,t)}function yg(e){const t=Ci.get(e);return Ci.delete(e),t}let _g=()=>location.protocol+"//"+location.host;function lu(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let a=s.includes(e.slice(i))?e.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Va(c,"")}return Va(n,e)+r+s}function bg(e,t,n,r){let s=[],i=[],o=null;const a=({state:h})=>{const g=lu(e,location),y=n.value,A=t.value;let N=0;if(h){if(n.value=g,t.value=h,o&&o===y){o=null;return}N=A?h.position-A.position:0}else r(g);s.forEach(S=>{S(n.value,y,{delta:N,type:Qn.pop,direction:N?N>0?$n.forward:$n.back:$n.unknown})})};function c(){o=n.value}function u(h){s.push(h);const g=()=>{const y=s.indexOf(h);y>-1&&s.splice(y,1)};return i.push(g),g}function l(){const{history:h}=window;h.state&&h.replaceState(oe({},h.state,{scroll:vs()}),"")}function f(){for(const h of i)h();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:f}}function Wa(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?vs():null}}function vg(e){const{history:t,location:n}=window,r={value:lu(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const f=e.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:_g()+e+c;try{t[l?"replaceState":"pushState"](u,"",h),s.value=u}catch(g){console.error(g),n[l?"replace":"assign"](h)}}function o(c,u){const l=oe({},t.state,Wa(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,l,!0),r.value=c}function a(c,u){const l=oe({},s.value,t.state,{forward:c,scroll:vs()});i(l.current,l,!0);const f=oe({},Wa(r.value,c,null),{position:l.position+1},u);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function wg(e){e=fg(e);const t=vg(e),n=bg(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=oe({location:"",base:e,go:r,createHref:hg.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Eg(e){return typeof e=="string"||e&&typeof e=="object"}function uu(e){return typeof e=="string"||typeof e=="symbol"}const wt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},fu=Cn("nf");var Ka;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ka||(Ka={}));function Tn(e,t){return oe(new Error,{type:e,[fu]:!0},t)}function Et(e,t){return e instanceof Error&&fu in e&&(t==null||!!(e.type&t))}const qa="[^/]+?",Ig={sensitive:!1,strict:!1,start:!0,end:!0},Tg=/[.+*?^${}()[\]/\\]/g;function Sg(e,t){const n=oe({},Ig,t),r=[];let s=n.start?"^":"";const i=[];for(const u of e){const l=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let f=0;f<u.length;f++){const h=u[f];let g=40+(n.sensitive?.25:0);if(h.type===0)f||(s+="/"),s+=h.value.replace(Tg,"\\$&"),g+=40;else if(h.type===1){const{value:y,repeatable:A,optional:N,regexp:S}=h;i.push({name:y,repeatable:A,optional:N});const C=S||qa;if(C!==qa){g+=10;try{new RegExp(`(${C})`)}catch(R){throw new Error(`Invalid custom RegExp for param "${y}" (${C}): `+R.message)}}let E=A?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;f||(E=N&&u.length<2?`(?:/${E})`:"/"+E),N&&(E+="?"),s+=E,g+=20,N&&(g+=-8),A&&(g+=-20),C===".*"&&(g+=-50)}l.push(g)}r.push(l)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const l=u.match(o),f={};if(!l)return null;for(let h=1;h<l.length;h++){const g=l[h]||"",y=i[h-1];f[y.name]=g&&y.repeatable?g.split("/"):g}return f}function c(u){let l="",f=!1;for(const h of e){(!f||!l.endsWith("/"))&&(l+="/"),f=!1;for(const g of h)if(g.type===0)l+=g.value;else if(g.type===1){const{value:y,repeatable:A,optional:N}=g,S=y in u?u[y]:"";if(Array.isArray(S)&&!A)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const C=Array.isArray(S)?S.join("/"):S;if(!C)if(N)h.length<2&&(l.endsWith("/")?l=l.slice(0,-1):f=!0);else throw new Error(`Missing required param "${y}"`);l+=C}}return l}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Ag(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Cg(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=Ag(r[n],s[n]);if(i)return i;n++}return s.length-r.length}const Og={type:0,value:""},Rg=/[a-zA-Z0-9_]/;function Pg(e){if(!e)return[[]];if(e==="/")return[[Og]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,u="",l="";function f(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),u="")}function h(){u+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&f(),o()):c===":"?(f(),n=1):h();break;case 4:h(),n=r;break;case 1:c==="("?n=2:Rg.test(c)?h():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),f(),o(),s}function kg(e,t,n){const r=Sg(Pg(e.path),n),s=oe(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Ng(e,t){const n=[],r=new Map;t=Ga({strict:!1,end:!0,sensitive:!1},t);function s(l){return r.get(l)}function i(l,f,h){const g=!h,y=Dg(l);y.aliasOf=h&&h.record;const A=Ga(t,l),N=[y];if("alias"in l){const E=typeof l.alias=="string"?[l.alias]:l.alias;for(const R of E)N.push(oe({},y,{components:h?h.record.components:y.components,path:R,aliasOf:h?h.record:y}))}let S,C;for(const E of N){const{path:R}=E;if(f&&R[0]!=="/"){const F=f.record.path,D=F[F.length-1]==="/"?"":"/";E.path=f.record.path+(R&&D+R)}if(S=kg(E,f,A),h?h.alias.push(S):(C=C||S,C!==S&&C.alias.push(S),g&&l.name&&!za(S)&&o(l.name)),"children"in y){const F=y.children;for(let D=0;D<F.length;D++)i(F[D],S,h&&h.children[D])}h=h||S,c(S)}return C?()=>{o(C)}:jn}function o(l){if(uu(l)){const f=r.get(l);f&&(r.delete(l),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(l);f>-1&&(n.splice(f,1),l.record.name&&r.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let f=0;for(;f<n.length&&Cg(l,n[f])>=0&&(l.record.path!==n[f].record.path||!du(l,n[f]));)f++;n.splice(f,0,l),l.record.name&&!za(l)&&r.set(l.record.name,l)}function u(l,f){let h,g={},y,A;if("name"in l&&l.name){if(h=r.get(l.name),!h)throw Tn(1,{location:l});A=h.record.name,g=oe(Mg(f.params,h.keys.filter(C=>!C.optional).map(C=>C.name)),l.params),y=h.stringify(g)}else if("path"in l)y=l.path,h=n.find(C=>C.re.test(y)),h&&(g=h.parse(y),A=h.record.name);else{if(h=f.name?r.get(f.name):n.find(C=>C.re.test(f.path)),!h)throw Tn(1,{location:l,currentLocation:f});A=h.record.name,g=oe({},f.params,l.params),y=h.stringify(g)}const N=[];let S=h;for(;S;)N.unshift(S.record),S=S.parent;return{name:A,path:y,params:g,matched:N,meta:Lg(N)}}return e.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Mg(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Dg(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:xg(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function xg(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function za(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Lg(e){return e.reduce((t,n)=>oe(t,n.meta),{})}function Ga(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function du(e,t){return t.children.some(n=>n===e||du(e,n))}const hu=/#/g,Fg=/&/g,Ug=/\//g,jg=/=/g,$g=/\?/g,pu=/\+/g,Vg=/%5B/g,Bg=/%5D/g,gu=/%5E/g,Hg=/%60/g,mu=/%7B/g,Wg=/%7C/g,yu=/%7D/g,Kg=/%20/g;function go(e){return encodeURI(""+e).replace(Wg,"|").replace(Vg,"[").replace(Bg,"]")}function qg(e){return go(e).replace(mu,"{").replace(yu,"}").replace(gu,"^")}function Oi(e){return go(e).replace(pu,"%2B").replace(Kg,"+").replace(hu,"%23").replace(Fg,"%26").replace(Hg,"`").replace(mu,"{").replace(yu,"}").replace(gu,"^")}function zg(e){return Oi(e).replace(jg,"%3D")}function Gg(e){return go(e).replace(hu,"%23").replace($g,"%3F")}function Jg(e){return e==null?"":Gg(e).replace(Ug,"%2F")}function Kr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Yg(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(pu," "),o=i.indexOf("="),a=Kr(o<0?i:i.slice(0,o)),c=o<0?null:Kr(i.slice(o+1));if(a in t){let u=t[a];Array.isArray(u)||(u=t[a]=[u]),u.push(c)}else t[a]=c}return t}function Ja(e){let t="";for(let n in e){const r=e[n];if(n=zg(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&Oi(i)):[r&&Oi(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Xg(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}function kn(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Ot(e,t,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=f=>{f===!1?a(Tn(4,{from:n,to:t})):f instanceof Error?a(f):Eg(f)?a(Tn(2,{from:t,to:f})):(i&&r.enterCallbacks[s]===i&&typeof f=="function"&&i.push(f),o())},u=e.call(r&&r.instances[s],t,n,c);let l=Promise.resolve(u);e.length<3&&(l=l.then(c)),l.catch(f=>a(f))})}function Hs(e,t,n,r){const s=[];for(const i of e)for(const o in i.components){let a=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(Qg(a)){const u=(a.__vccOpts||a)[t];u&&s.push(Ot(u,n,r,i,o))}else{let c=a();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=sg(u)?u.default:u;i.components[o]=l;const h=(l.__vccOpts||l)[t];return h&&Ot(h,n,r,i,o)()}))}}return s}function Qg(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ya(e){const t=Ze(bs),n=Ze(au),r=_e(()=>t.resolve(De(e.to))),s=_e(()=>{const{matched:c}=r.value,{length:u}=c,l=c[u-1],f=n.matched;if(!l||!f.length)return-1;const h=f.findIndex(In.bind(null,l));if(h>-1)return h;const g=Xa(c[u-2]);return u>1&&Xa(l)===g&&f[f.length-1].path!==g?f.findIndex(In.bind(null,c[u-2])):h}),i=_e(()=>s.value>-1&&nm(n.params,r.value.params)),o=_e(()=>s.value>-1&&s.value===n.matched.length-1&&cu(n.params,r.value.params));function a(c={}){return tm(c)?t[De(e.replace)?"replace":"push"](De(e.to)).catch(jn):Promise.resolve()}return{route:r,href:_e(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Zg=ds({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ya,setup(e,{slots:t}){const n=pt(Ya(e)),{options:r}=Ze(bs),s=_e(()=>({[Qa(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Qa(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:or("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),em=Zg;function tm(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function nm(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Xa(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Qa=(e,t,n)=>e??t??n,rm=ds({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const r=Ze(Ai),s=_e(()=>e.route||r.value),i=Ze($a,0),o=_e(()=>s.value.matched[i]);Pr($a,i+1),Pr(rg,o),Pr(Ai,s);const a=Ue();return we(()=>[a.value,o.value,e.name],([c,u,l],[f,h,g])=>{u&&(u.instances[l]=c,h&&h!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!In(u,h)||!f)&&(u.enterCallbacks[l]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=s.value,u=o.value,l=u&&u.components[e.name],f=e.name;if(!l)return Za(n.default,{Component:l,route:c});const h=u.props[e.name],g=h?h===!0?c.params:typeof h=="function"?h(c):h:null,A=or(l,oe({},g,t,{onVnodeUnmounted:N=>{N.component.isUnmounted&&(u.instances[f]=null)},ref:a}));return Za(n.default,{Component:A,route:c})||A}}});function Za(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const _u=rm;function sm(e){const t=Ng(e.routes,e),n=e.parseQuery||Yg,r=e.stringifyQuery||Ja,s=e.history,i=kn(),o=kn(),a=kn(),c=fh(wt);let u=wt;gn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=Vs.bind(null,_=>""+_),f=Vs.bind(null,Jg),h=Vs.bind(null,Kr);function g(_,M){let P,U;return uu(_)?(P=t.getRecordMatcher(_),U=M):U=_,t.addRoute(U,P)}function y(_){const M=t.getRecordMatcher(_);M&&t.removeRoute(M)}function A(){return t.getRoutes().map(_=>_.record)}function N(_){return!!t.getRecordMatcher(_)}function S(_,M){if(M=oe({},M||c.value),typeof _=="string"){const z=Bs(n,_,M.path),d=t.resolve({path:z.path},M),p=s.createHref(z.fullPath);return oe(z,d,{params:h(d.params),hash:Kr(z.hash),redirectedFrom:void 0,href:p})}let P;if("path"in _)P=oe({},_,{path:Bs(n,_.path,M.path).path});else{const z=oe({},_.params);for(const d in z)z[d]==null&&delete z[d];P=oe({},_,{params:f(_.params)}),M.params=f(M.params)}const U=t.resolve(P,M),ie=_.hash||"";U.params=l(h(U.params));const ce=ag(r,oe({},_,{hash:qg(ie),path:U.path})),J=s.createHref(ce);return oe({fullPath:ce,hash:ie,query:r===Ja?Xg(_.query):_.query||{}},U,{redirectedFrom:void 0,href:J})}function C(_){return typeof _=="string"?Bs(n,_,c.value.path):oe({},_)}function E(_,M){if(u!==_)return Tn(8,{from:M,to:_})}function R(_){return X(_)}function F(_){return R(oe(C(_),{replace:!0}))}function D(_){const M=_.matched[_.matched.length-1];if(M&&M.redirect){const{redirect:P}=M;let U=typeof P=="function"?P(_):P;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=C(U):{path:U},U.params={}),oe({query:_.query,hash:_.hash,params:_.params},U)}}function X(_,M){const P=u=S(_),U=c.value,ie=_.state,ce=_.force,J=_.replace===!0,z=D(P);if(z)return X(oe(C(z),{state:ie,force:ce,replace:J}),M||P);const d=P;d.redirectedFrom=M;let p;return!ce&&cg(r,U,P)&&(p=Tn(16,{to:d,from:U}),Vt(U,U,!0,!1)),(p?Promise.resolve(p):G(d,U)).catch(m=>Et(m)?Et(m,2)?m:Ve(m):se(m,d,U)).then(m=>{if(m){if(Et(m,2))return X(oe(C(m.to),{state:ie,force:ce,replace:J}),M||d)}else m=he(d,U,!0,J,ie);return Z(d,U,m),m})}function V(_,M){const P=E(_,M);return P?Promise.reject(P):Promise.resolve()}function G(_,M){let P;const[U,ie,ce]=im(_,M);P=Hs(U.reverse(),"beforeRouteLeave",_,M);for(const z of U)z.leaveGuards.forEach(d=>{P.push(Ot(d,_,M))});const J=V.bind(null,_,M);return P.push(J),hn(P).then(()=>{P=[];for(const z of i.list())P.push(Ot(z,_,M));return P.push(J),hn(P)}).then(()=>{P=Hs(ie,"beforeRouteUpdate",_,M);for(const z of ie)z.updateGuards.forEach(d=>{P.push(Ot(d,_,M))});return P.push(J),hn(P)}).then(()=>{P=[];for(const z of _.matched)if(z.beforeEnter&&!M.matched.includes(z))if(Array.isArray(z.beforeEnter))for(const d of z.beforeEnter)P.push(Ot(d,_,M));else P.push(Ot(z.beforeEnter,_,M));return P.push(J),hn(P)}).then(()=>(_.matched.forEach(z=>z.enterCallbacks={}),P=Hs(ce,"beforeRouteEnter",_,M),P.push(J),hn(P))).then(()=>{P=[];for(const z of o.list())P.push(Ot(z,_,M));return P.push(J),hn(P)}).catch(z=>Et(z,8)?z:Promise.reject(z))}function Z(_,M,P){for(const U of a.list())U(_,M,P)}function he(_,M,P,U,ie){const ce=E(_,M);if(ce)return ce;const J=M===wt,z=gn?history.state:{};P&&(U||J?s.replace(_.fullPath,oe({scroll:J&&z&&z.scroll},ie)):s.push(_.fullPath,ie)),c.value=_,Vt(_,M,P,J),Ve()}let L;function re(){L=s.listen((_,M,P)=>{const U=S(_),ie=D(U);if(ie){X(oe(ie,{replace:!0}),U).catch(jn);return}u=U;const ce=c.value;gn&&mg(Ha(ce.fullPath,P.delta),vs()),G(U,ce).catch(J=>Et(J,12)?J:Et(J,2)?(X(J.to,U).then(z=>{Et(z,20)&&!P.delta&&P.type===Qn.pop&&s.go(-1,!1)}).catch(jn),Promise.reject()):(P.delta&&s.go(-P.delta,!1),se(J,U,ce))).then(J=>{J=J||he(U,ce,!1),J&&(P.delta?s.go(-P.delta,!1):P.type===Qn.pop&&Et(J,20)&&s.go(-1,!1)),Z(U,ce,J)}).catch(jn)})}let pe=kn(),$e=kn(),de;function se(_,M,P){Ve(_);const U=$e.list();return U.length?U.forEach(ie=>ie(_,M,P)):console.error(_),Promise.reject(_)}function te(){return de&&c.value!==wt?Promise.resolve():new Promise((_,M)=>{pe.add([_,M])})}function Ve(_){return de||(de=!_,re(),pe.list().forEach(([M,P])=>_?P(_):M()),pe.reset()),_}function Vt(_,M,P,U){const{scrollBehavior:ie}=e;if(!gn||!ie)return Promise.resolve();const ce=!P&&yg(Ha(_.fullPath,0))||(U||!P)&&history.state&&history.state.scroll||null;return El().then(()=>ie(_,M,ce)).then(J=>J&&gg(J)).catch(J=>se(J,_,M))}const Be=_=>s.go(_);let Ae;const fn=new Set;return{currentRoute:c,addRoute:g,removeRoute:y,hasRoute:N,getRoutes:A,resolve:S,options:e,push:R,replace:F,go:Be,back:()=>Be(-1),forward:()=>Be(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:$e.add,isReady:te,install(_){const M=this;_.component("RouterLink",em),_.component("RouterView",_u),_.config.globalProperties.$router=M,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>De(c)}),gn&&!Ae&&c.value===wt&&(Ae=!0,R(s.location).catch(ie=>{}));const P={};for(const ie in wt)P[ie]=_e(()=>c.value[ie]);_.provide(bs,M),_.provide(au,pt(P)),_.provide(Ai,c);const U=_.unmount;fn.add(_),_.unmount=function(){fn.delete(_),fn.size<1&&(u=wt,L&&L(),c.value=wt,Ae=!1,de=!1),U()}}}}function hn(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function im(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const a=t.matched[o];a&&(e.matched.find(u=>In(u,a))?r.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(u=>In(u,c))||s.push(c))}return[n,r,s]}function gI(){return Ze(bs)}const om={__name:"App",setup(e){return(t,n)=>(Yl(),Ql(De(_u)))}};function Ws(e){if(e===null||typeof e!="object")return!1;const t=Object.getPrototypeOf(e);return t!==null&&t!==Object.prototype&&Object.getPrototypeOf(t)!==null||Symbol.iterator in e?!1:Symbol.toStringTag in e?Object.prototype.toString.call(e)==="[object Module]":!0}function Ri(e,t,n=".",r){if(!Ws(t))return Ri(e,{},n,r);const s=Object.assign({},t);for(const i in e){if(i==="__proto__"||i==="constructor")continue;const o=e[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:Ws(o)&&Ws(s[i])?s[i]=Ri(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function am(e){return(...t)=>t.reduce((n,r)=>Ri(n,r,"",e),{})}const bu=am();function vu(e){return rl()?(Bd(e),!0):!1}function mo(e){return typeof e=="function"?e():De(e)}const cm=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const lm=e=>e!=null,um=Object.prototype.toString,qr=e=>um.call(e)==="[object Object]",Dr=()=>{};function fm(e){return ms()}function dm(e,t){fm()&&uo(e,t)}function Vn(e){var t;const n=mo(e);return(t=n==null?void 0:n.$el)!=null?t:n}const wu=cm?window:void 0;function Ge(...e){let t,n,r,s;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,r,s]=e,t=wu):[t,n,r,s]=e,!t)return Dr;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const i=[],o=()=>{i.forEach(l=>l()),i.length=0},a=(l,f,h,g)=>(l.addEventListener(f,h,g),()=>l.removeEventListener(f,h,g)),c=we(()=>[Vn(t),mo(s)],([l,f])=>{if(o(),!l)return;const h=qr(f)?{...f}:f;i.push(...n.flatMap(g=>r.map(y=>a(l,g,y,h))))},{immediate:!0,flush:"post"}),u=()=>{c(),o()};return vu(u),u}function hm(){const e=Ue(!1),t=ms();return t&&lo(()=>{e.value=!0},t),e}function pm(e){const t=hm();return _e(()=>(t.value,!!e()))}function gm(e,t,n={}){const{root:r,rootMargin:s="0px",threshold:i=.1,window:o=wu,immediate:a=!0}=n,c=pm(()=>o&&"IntersectionObserver"in o),u=_e(()=>{const y=mo(e);return(Array.isArray(y)?y:[y]).map(Vn).filter(lm)});let l=Dr;const f=Ue(a),h=c.value?we(()=>[u.value,Vn(r),f.value],([y,A])=>{if(l(),!f.value||!y.length)return;const N=new IntersectionObserver(t,{root:Vn(A),rootMargin:s,threshold:i});y.forEach(S=>S&&N.observe(S)),l=()=>{N.disconnect(),l=Dr}},{immediate:a,flush:"post"}):Dr,g=()=>{l(),h(),f.value=!1};return vu(g),{isSupported:c,isActive:f,pause(){l(),f.value=!1},resume(){f.value=!0},stop:g}}const Eu=1/60*1e3,mm=typeof performance<"u"?()=>performance.now():()=>Date.now(),Iu=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(mm()),Eu);function ym(e){let t=[],n=[],r=0,s=!1,i=!1;const o=new WeakSet,a={schedule:(c,u=!1,l=!1)=>{const f=l&&s,h=f?t:n;return u&&o.add(c),h.indexOf(c)===-1&&(h.push(c),f&&s&&(r=t.length)),c},cancel:c=>{const u=n.indexOf(c);u!==-1&&n.splice(u,1),o.delete(c)},process:c=>{if(s){i=!0;return}if(s=!0,[t,n]=[n,t],n.length=0,r=t.length,r)for(let u=0;u<r;u++){const l=t[u];l(c),o.has(l)&&(a.schedule(l),e())}s=!1,i&&(i=!1,a.process(c))}};return a}const _m=40;let Pi=!0,Zn=!1,ki=!1;const bn={delta:0,timestamp:0},ar=["read","update","preRender","render","postRender"],ws=ar.reduce((e,t)=>(e[t]=ym(()=>Zn=!0),e),{}),Ni=ar.reduce((e,t)=>{const n=ws[t];return e[t]=(r,s=!1,i=!1)=>(Zn||wm(),n.schedule(r,s,i)),e},{}),bm=ar.reduce((e,t)=>(e[t]=ws[t].cancel,e),{});ar.reduce((e,t)=>(e[t]=()=>ws[t].process(bn),e),{});const vm=e=>ws[e].process(bn),Tu=e=>{Zn=!1,bn.delta=Pi?Eu:Math.max(Math.min(e-bn.timestamp,_m),1),bn.timestamp=e,ki=!0,ar.forEach(vm),ki=!1,Zn&&(Pi=!1,Iu(Tu))},wm=()=>{Zn=!0,Pi=!0,ki||Iu(Tu)},Su=()=>bn;function Au(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n}var ec=function(){};const Mi=(e,t,n)=>Math.min(Math.max(n,e),t),Ks=.001,Em=.01,Im=10,Tm=.05,Sm=1;function Am({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let s,i,o=1-t;o=Mi(Tm,Sm,o),e=Mi(Em,Im,e/1e3),o<1?(s=u=>{const l=u*o,f=l*e,h=l-n,g=Di(u,o),y=Math.exp(-f);return Ks-h/g*y},i=u=>{const f=u*o*e,h=f*n+n,g=Math.pow(o,2)*Math.pow(u,2)*e,y=Math.exp(-f),A=Di(Math.pow(u,2),o);return(-s(u)+Ks>0?-1:1)*((h-g)*y)/A}):(s=u=>{const l=Math.exp(-u*e),f=(u-n)*e+1;return-Ks+l*f},i=u=>{const l=Math.exp(-u*e),f=(n-u)*(e*e);return l*f});const a=5/e,c=Om(s,i,a);if(e=e*1e3,isNaN(c))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(c,2)*r;return{stiffness:u,damping:o*2*Math.sqrt(r*u),duration:e}}}const Cm=12;function Om(e,t,n){let r=n;for(let s=1;s<Cm;s++)r=r-e(r)/t(r);return r}function Di(e,t){return e*Math.sqrt(1-t*t)}const Rm=["duration","bounce"],Pm=["stiffness","damping","mass"];function tc(e,t){return t.some(n=>e[n]!==void 0)}function km(e){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!tc(e,Pm)&&tc(e,Rm)){const n=Am(e);t=Object.assign(Object.assign(Object.assign({},t),n),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function yo(e){var{from:t=0,to:n=1,restSpeed:r=2,restDelta:s}=e,i=Au(e,["from","to","restSpeed","restDelta"]);const o={done:!1,value:t};let{stiffness:a,damping:c,mass:u,velocity:l,duration:f,isResolvedFromDuration:h}=km(i),g=nc,y=nc;function A(){const N=l?-(l/1e3):0,S=n-t,C=c/(2*Math.sqrt(a*u)),E=Math.sqrt(a/u)/1e3;if(s===void 0&&(s=Math.min(Math.abs(n-t)/100,.4)),C<1){const R=Di(E,C);g=F=>{const D=Math.exp(-C*E*F);return n-D*((N+C*E*S)/R*Math.sin(R*F)+S*Math.cos(R*F))},y=F=>{const D=Math.exp(-C*E*F);return C*E*D*(Math.sin(R*F)*(N+C*E*S)/R+S*Math.cos(R*F))-D*(Math.cos(R*F)*(N+C*E*S)-R*S*Math.sin(R*F))}}else if(C===1)g=R=>n-Math.exp(-E*R)*(S+(N+E*S)*R);else{const R=E*Math.sqrt(C*C-1);g=F=>{const D=Math.exp(-C*E*F),X=Math.min(R*F,300);return n-D*((N+C*E*S)*Math.sinh(X)+R*S*Math.cosh(X))/R}}}return A(),{next:N=>{const S=g(N);if(h)o.done=N>=f;else{const C=y(N)*1e3,E=Math.abs(C)<=r,R=Math.abs(n-S)<=s;o.done=E&&R}return o.value=o.done?n:S,o},flipTarget:()=>{l=-l,[t,n]=[n,t],A()}}}yo.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const nc=e=>0,Cu=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},_o=(e,t,n)=>-n*e+n*t+e,Ou=(e,t)=>n=>Math.max(Math.min(n,t),e),Bn=e=>e%1?Number(e.toFixed(5)):e,er=/(-)?([\d]*\.?[\d])+/g,xi=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,Nm=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function cr(e){return typeof e=="string"}const lr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Hn=Object.assign(Object.assign({},lr),{transform:Ou(0,1)}),Tr=Object.assign(Object.assign({},lr),{default:1}),bo=e=>({test:t=>cr(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),qt=bo("deg"),Wn=bo("%"),q=bo("px"),rc=Object.assign(Object.assign({},Wn),{parse:e=>Wn.parse(e)/100,transform:e=>Wn.transform(e*100)}),vo=(e,t)=>n=>!!(cr(n)&&Nm.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),Ru=(e,t,n)=>r=>{if(!cr(r))return r;const[s,i,o,a]=r.match(er);return{[e]:parseFloat(s),[t]:parseFloat(i),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},Qt={test:vo("hsl","hue"),parse:Ru("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Wn.transform(Bn(t))+", "+Wn.transform(Bn(n))+", "+Bn(Hn.transform(r))+")"},Mm=Ou(0,255),qs=Object.assign(Object.assign({},lr),{transform:e=>Math.round(Mm(e))}),Mt={test:vo("rgb","red"),parse:Ru("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+qs.transform(e)+", "+qs.transform(t)+", "+qs.transform(n)+", "+Bn(Hn.transform(r))+")"};function Dm(e){let t="",n="",r="",s="";return e.length>5?(t=e.substr(1,2),n=e.substr(3,2),r=e.substr(5,2),s=e.substr(7,2)):(t=e.substr(1,1),n=e.substr(2,1),r=e.substr(3,1),s=e.substr(4,1),t+=t,n+=n,r+=r,s+=s),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:s?parseInt(s,16)/255:1}}const Li={test:vo("#"),parse:Dm,transform:Mt.transform},Oe={test:e=>Mt.test(e)||Li.test(e)||Qt.test(e),parse:e=>Mt.test(e)?Mt.parse(e):Qt.test(e)?Qt.parse(e):Li.parse(e),transform:e=>cr(e)?e:e.hasOwnProperty("red")?Mt.transform(e):Qt.transform(e)},Pu="${c}",ku="${n}";function xm(e){var t,n,r,s;return isNaN(e)&&cr(e)&&((n=(t=e.match(er))===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)+((s=(r=e.match(xi))===null||r===void 0?void 0:r.length)!==null&&s!==void 0?s:0)>0}function Nu(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0;const r=e.match(xi);r&&(n=r.length,e=e.replace(xi,Pu),t.push(...r.map(Oe.parse)));const s=e.match(er);return s&&(e=e.replace(er,ku),t.push(...s.map(lr.parse))),{values:t,numColors:n,tokenised:e}}function Mu(e){return Nu(e).values}function Du(e){const{values:t,numColors:n,tokenised:r}=Nu(e),s=t.length;return i=>{let o=r;for(let a=0;a<s;a++)o=o.replace(a<n?Pu:ku,a<n?Oe.transform(i[a]):Bn(i[a]));return o}}const Lm=e=>typeof e=="number"?0:e;function Fm(e){const t=Mu(e);return Du(e)(t.map(Lm))}const ur={test:xm,parse:Mu,createTransformer:Du,getAnimatableNone:Fm},Um=new Set(["brightness","contrast","saturate","opacity"]);function jm(e){let[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(er)||[];if(!r)return e;const s=n.replace(r,"");let i=Um.has(t)?1:0;return r!==n&&(i*=100),t+"("+i+s+")"}const $m=/([a-z-]*)\(.*?\)/g,Fi=Object.assign(Object.assign({},ur),{getAnimatableNone:e=>{const t=e.match($m);return t?t.map(jm).join(" "):e}});function zs(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function sc({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let s=0,i=0,o=0;if(!t)s=i=o=n;else{const a=n<.5?n*(1+t):n+t-n*t,c=2*n-a;s=zs(c,a,e+1/3),i=zs(c,a,e),o=zs(c,a,e-1/3)}return{red:Math.round(s*255),green:Math.round(i*255),blue:Math.round(o*255),alpha:r}}const Vm=(e,t,n)=>{const r=e*e,s=t*t;return Math.sqrt(Math.max(0,n*(s-r)+r))},Bm=[Li,Mt,Qt],ic=e=>Bm.find(t=>t.test(e)),xu=(e,t)=>{let n=ic(e),r=ic(t),s=n.parse(e),i=r.parse(t);n===Qt&&(s=sc(s),n=Mt),r===Qt&&(i=sc(i),r=Mt);const o=Object.assign({},s);return a=>{for(const c in o)c!=="alpha"&&(o[c]=Vm(s[c],i[c],a));return o.alpha=_o(s.alpha,i.alpha,a),n.transform(o)}},Hm=e=>typeof e=="number",Wm=(e,t)=>n=>t(e(n)),Lu=(...e)=>e.reduce(Wm);function Fu(e,t){return Hm(e)?n=>_o(e,t,n):Oe.test(e)?xu(e,t):ju(e,t)}const Uu=(e,t)=>{const n=[...e],r=n.length,s=e.map((i,o)=>Fu(i,t[o]));return i=>{for(let o=0;o<r;o++)n[o]=s[o](i);return n}},Km=(e,t)=>{const n=Object.assign(Object.assign({},e),t),r={};for(const s in n)e[s]!==void 0&&t[s]!==void 0&&(r[s]=Fu(e[s],t[s]));return s=>{for(const i in r)n[i]=r[i](s);return n}};function oc(e){const t=ur.parse(e),n=t.length;let r=0,s=0,i=0;for(let o=0;o<n;o++)r||typeof t[o]=="number"?r++:t[o].hue!==void 0?i++:s++;return{parsed:t,numNumbers:r,numRGB:s,numHSL:i}}const ju=(e,t)=>{const n=ur.createTransformer(t),r=oc(e),s=oc(t);return r.numHSL===s.numHSL&&r.numRGB===s.numRGB&&r.numNumbers>=s.numNumbers?Lu(Uu(r.parsed,s.parsed),n):o=>`${o>0?t:e}`},qm=(e,t)=>n=>_o(e,t,n);function zm(e){if(typeof e=="number")return qm;if(typeof e=="string")return Oe.test(e)?xu:ju;if(Array.isArray(e))return Uu;if(typeof e=="object")return Km}function Gm(e,t,n){const r=[],s=n||zm(e[0]),i=e.length-1;for(let o=0;o<i;o++){let a=s(e[o],e[o+1]);if(t){const c=Array.isArray(t)?t[o]:t;a=Lu(c,a)}r.push(a)}return r}function Jm([e,t],[n]){return r=>n(Cu(e,t,r))}function Ym(e,t){const n=e.length,r=n-1;return s=>{let i=0,o=!1;if(s<=e[0]?o=!0:s>=e[r]&&(i=r-1,o=!0),!o){let c=1;for(;c<n&&!(e[c]>s||c===r);c++);i=c-1}const a=Cu(e[i],e[i+1],s);return t[i](a)}}function $u(e,t,{clamp:n=!0,ease:r,mixer:s}={}){const i=e.length;ec(i===t.length),ec(!r||!Array.isArray(r)||r.length===i-1),e[0]>e[i-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());const o=Gm(t,r,s),a=i===2?Jm(e,o):Ym(e,o);return n?c=>a(Mi(e[0],e[i-1],c)):a}const Es=e=>t=>1-e(1-t),wo=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Xm=e=>t=>Math.pow(t,e),Vu=e=>t=>t*t*((e+1)*t-e),Qm=e=>{const t=Vu(e);return n=>(n*=2)<1?.5*t(n):.5*(2-Math.pow(2,-10*(n-1)))},Bu=1.525,Zm=4/11,ey=8/11,ty=9/10,Hu=e=>e,Eo=Xm(2),ny=Es(Eo),Wu=wo(Eo),Ku=e=>1-Math.sin(Math.acos(e)),qu=Es(Ku),ry=wo(qu),Io=Vu(Bu),sy=Es(Io),iy=wo(Io),oy=Qm(Bu),ay=4356/361,cy=35442/1805,ly=16061/1805,zr=e=>{if(e===1||e===0)return e;const t=e*e;return e<Zm?7.5625*t:e<ey?9.075*t-9.9*e+3.4:e<ty?ay*t-cy*e+ly:10.8*e*e-20.52*e+10.72},uy=Es(zr),fy=e=>e<.5?.5*(1-zr(1-e*2)):.5*zr(e*2-1)+.5;function dy(e,t){return e.map(()=>t||Wu).splice(0,e.length-1)}function hy(e){const t=e.length;return e.map((n,r)=>r!==0?r/(t-1):0)}function py(e,t){return e.map(n=>n*t)}function xr({from:e=0,to:t=1,ease:n,offset:r,duration:s=300}){const i={done:!1,value:e},o=Array.isArray(t)?t:[e,t],a=py(r&&r.length===o.length?r:hy(o),s);function c(){return $u(a,o,{ease:Array.isArray(n)?n:dy(o,n)})}let u=c();return{next:l=>(i.value=u(l),i.done=l>=s,i),flipTarget:()=>{o.reverse(),u=c()}}}function gy({velocity:e=0,from:t=0,power:n=.8,timeConstant:r=350,restDelta:s=.5,modifyTarget:i}){const o={done:!1,value:t};let a=n*e;const c=t+a,u=i===void 0?c:i(c);return u!==c&&(a=u-t),{next:l=>{const f=-a*Math.exp(-l/r);return o.done=!(f>s||f<-s),o.value=o.done?u:u+f,o},flipTarget:()=>{}}}const ac={keyframes:xr,spring:yo,decay:gy};function my(e){if(Array.isArray(e.to))return xr;if(ac[e.type])return ac[e.type];const t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?xr:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?yo:xr}function zu(e,t,n=0){return e-t-n}function yy(e,t,n=0,r=!0){return r?zu(t+-e,t,n):t-(e-t)+n}function _y(e,t,n,r){return r?e>=t+n:e<=-n}const by=e=>{const t=({delta:n})=>e(n);return{start:()=>Ni.update(t,!0),stop:()=>bm.update(t)}};function Gu(e){var t,n,{from:r,autoplay:s=!0,driver:i=by,elapsed:o=0,repeat:a=0,repeatType:c="loop",repeatDelay:u=0,onPlay:l,onStop:f,onComplete:h,onRepeat:g,onUpdate:y}=e,A=Au(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:N}=A,S,C=0,E=A.duration,R,F=!1,D=!0,X;const V=my(A);!((n=(t=V).needsInterpolation)===null||n===void 0)&&n.call(t,r,N)&&(X=$u([0,100],[r,N],{clamp:!1}),r=0,N=100);const G=V(Object.assign(Object.assign({},A),{from:r,to:N}));function Z(){C++,c==="reverse"?(D=C%2===0,o=yy(o,E,u,D)):(o=zu(o,E,u),c==="mirror"&&G.flipTarget()),F=!1,g&&g()}function he(){S.stop(),h&&h()}function L(pe){if(D||(pe=-pe),o+=pe,!F){const $e=G.next(Math.max(0,o));R=$e.value,X&&(R=X(R)),F=D?$e.done:o<=0}y==null||y(R),F&&(C===0&&(E??(E=o)),C<a?_y(o,E,u,D)&&Z():he())}function re(){l==null||l(),S=i(L),S.start()}return s&&re(),{stop:()=>{f==null||f(),S.stop()}}}function Ju(e,t){return t?e*(1e3/t):0}function vy({from:e=0,velocity:t=0,min:n,max:r,power:s=.8,timeConstant:i=750,bounceStiffness:o=500,bounceDamping:a=10,restDelta:c=1,modifyTarget:u,driver:l,onUpdate:f,onComplete:h,onStop:g}){let y;function A(E){return n!==void 0&&E<n||r!==void 0&&E>r}function N(E){return n===void 0?r:r===void 0||Math.abs(n-E)<Math.abs(r-E)?n:r}function S(E){y==null||y.stop(),y=Gu(Object.assign(Object.assign({},E),{driver:l,onUpdate:R=>{var F;f==null||f(R),(F=E.onUpdate)===null||F===void 0||F.call(E,R)},onComplete:h,onStop:g}))}function C(E){S(Object.assign({type:"spring",stiffness:o,damping:a,restDelta:c},E))}if(A(e))C({from:e,velocity:t,to:N(e)});else{let E=s*t+e;typeof u<"u"&&(E=u(E));const R=N(E),F=R===n?-1:1;let D,X;const V=G=>{D=X,X=G,t=Ju(G-D,Su().delta),(F===1&&G>R||F===-1&&G<R)&&C({from:G,to:R,velocity:t})};S({type:"decay",from:e,velocity:t,timeConstant:i,power:s,restDelta:c,modifyTarget:u,onUpdate:A(E)?V:void 0})}return{stop:()=>y==null?void 0:y.stop()}}const Yu=(e,t)=>1-3*t+3*e,Xu=(e,t)=>3*t-6*e,Qu=e=>3*e,Gr=(e,t,n)=>((Yu(t,n)*e+Xu(t,n))*e+Qu(t))*e,Zu=(e,t,n)=>3*Yu(t,n)*e*e+2*Xu(t,n)*e+Qu(t),wy=1e-7,Ey=10;function Iy(e,t,n,r,s){let i,o,a=0;do o=t+(n-t)/2,i=Gr(o,r,s)-e,i>0?n=o:t=o;while(Math.abs(i)>wy&&++a<Ey);return o}const Ty=8,Sy=.001;function Ay(e,t,n,r){for(let s=0;s<Ty;++s){const i=Zu(t,n,r);if(i===0)return t;const o=Gr(t,n,r)-e;t-=o/i}return t}const Lr=11,Sr=1/(Lr-1);function Cy(e,t,n,r){if(e===t&&n===r)return Hu;const s=new Float32Array(Lr);for(let o=0;o<Lr;++o)s[o]=Gr(o*Sr,e,n);function i(o){let a=0,c=1;const u=Lr-1;for(;c!==u&&s[c]<=o;++c)a+=Sr;--c;const l=(o-s[c])/(s[c+1]-s[c]),f=a+l*Sr,h=Zu(f,e,n);return h>=Sy?Ay(o,f,e,n):h===0?f:Iy(o,a,a+Sr,e,n)}return o=>o===0||o===1?o:Gr(i(o),t,r)}var To={VITE_FIREBASE_API_KEY:"AIzaSyDFqqFcvC3WWQMGp_q00Y6BQ5y7uQpRrUg",VITE_FIREBASE_AUTH_DOMAIN:"recipe-2bcd4.firebaseapp.com",VITE_FIREBASE_PROJECT_ID:"recipe-2bcd4",VITE_FIREBASE_STORAGE_BUCKET:"recipe-2bcd4.appspot.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"214051528054",VITE_FIREBASE_APP_ID:"1:214051528054:web:9eb82bd7f5212581d36e57",VITE_FIREBASE_MEASUREMENT_ID:"G-4E17212C1W",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const Gs={};var Oy=Object.defineProperty,Ry=(e,t,n)=>t in e?Oy(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Py=(e,t,n)=>(Ry(e,t+"",n),n);class ky{constructor(){Py(this,"subscriptions",new Set)}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,n,r){if(this.subscriptions.size)for(const s of this.subscriptions)s(t,n,r)}clear(){this.subscriptions.clear()}}var Ny=Object.defineProperty,My=(e,t,n)=>t in e?Ny(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Je=(e,t,n)=>(My(e,typeof t!="symbol"?t+"":t,n),n);function cc(e){return!Number.isNaN(Number.parseFloat(e))}class Dy{constructor(t){Je(this,"current"),Je(this,"prev"),Je(this,"timeDelta",0),Je(this,"lastUpdated",0),Je(this,"updateSubscribers",new ky),Je(this,"stopAnimation"),Je(this,"canTrackVelocity",!1),Je(this,"updateAndNotify",n=>{this.prev=this.current,this.current=n;const{delta:r,timestamp:s}=Su();this.lastUpdated!==s&&(this.timeDelta=r,this.lastUpdated=s),Ni.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)}),Je(this,"scheduleVelocityCheck",()=>Ni.postRender(this.velocityCheck)),Je(this,"velocityCheck",({timestamp:n})=>{this.canTrackVelocity||(this.canTrackVelocity=cc(this.current)),n!==this.lastUpdated&&(this.prev=this.current)}),this.prev=this.current=t,this.canTrackVelocity=cc(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Ju(Number.parseFloat(this.current)-Number.parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{const{stop:r}=t(n);this.stopAnimation=r}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function xy(e){return new Dy(e)}const{isArray:Ly}=Array;function Fy(){const e=Ue({}),t=r=>{const s=i=>{e.value[i]&&(e.value[i].stop(),e.value[i].destroy(),delete e.value[i])};r?Ly(r)?r.forEach(s):s(r):Object.keys(e.value).forEach(s)},n=(r,s,i)=>{if(e.value[r])return e.value[r];const o=xy(s);return o.onChange(a=>i[r]=a),e.value[r]=o,o};return dm(t),{motionValues:e,get:n,stop:t}}function Uy(e){return Array.isArray(e)}function zt(){return{type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}}function Js(e){return{type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}}function jy(e){return{type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}}function Ys(){return{type:"keyframes",ease:"linear",duration:300}}function $y(e){return{type:"keyframes",duration:800,values:e}}const lc={default:jy,x:zt,y:zt,z:zt,rotate:zt,rotateX:zt,rotateY:zt,rotateZ:zt,scaleX:Js,scaleY:Js,scale:Js,backgroundColor:Ys,color:Ys,opacity:Ys};function ef(e,t){let n;return Uy(t)?n=$y:n=lc[e]||lc.default,{to:t,...n(t)}}const uc={...lr,transform:Math.round},tf={color:Oe,backgroundColor:Oe,outlineColor:Oe,fill:Oe,stroke:Oe,borderColor:Oe,borderTopColor:Oe,borderRightColor:Oe,borderBottomColor:Oe,borderLeftColor:Oe,borderWidth:q,borderTopWidth:q,borderRightWidth:q,borderBottomWidth:q,borderLeftWidth:q,borderRadius:q,radius:q,borderTopLeftRadius:q,borderTopRightRadius:q,borderBottomRightRadius:q,borderBottomLeftRadius:q,width:q,maxWidth:q,height:q,maxHeight:q,size:q,top:q,right:q,bottom:q,left:q,padding:q,paddingTop:q,paddingRight:q,paddingBottom:q,paddingLeft:q,margin:q,marginTop:q,marginRight:q,marginBottom:q,marginLeft:q,rotate:qt,rotateX:qt,rotateY:qt,rotateZ:qt,scale:Tr,scaleX:Tr,scaleY:Tr,scaleZ:Tr,skew:qt,skewX:qt,skewY:qt,distance:q,translateX:q,translateY:q,translateZ:q,x:q,y:q,z:q,perspective:q,transformPerspective:q,opacity:Hn,originX:rc,originY:rc,originZ:q,zIndex:uc,filter:Fi,WebkitFilter:Fi,fillOpacity:Hn,strokeOpacity:Hn,numOctaves:uc},So=e=>tf[e];function Ui(e,t){return t&&typeof e=="number"&&t.transform?t.transform(e):e}function Vy(e,t){let n=So(e);return n!==Fi&&(n=ur),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const By={linear:Hu,easeIn:Eo,easeInOut:Wu,easeOut:ny,circIn:Ku,circInOut:ry,circOut:qu,backIn:Io,backInOut:iy,backOut:sy,anticipate:oy,bounceIn:uy,bounceInOut:fy,bounceOut:zr};function fc(e){if(Array.isArray(e)){const[t,n,r,s]=e;return Cy(t,n,r,s)}else if(typeof e=="string")return By[e];return e}function Hy(e){return Array.isArray(e)&&typeof e[0]!="number"}function dc(e,t){return e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&ur.test(t)&&!t.startsWith("url("))}function Wy(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function Ky({ease:e,times:t,delay:n,...r}){const s={...r};return t&&(s.offset=t),e&&(s.ease=Hy(e)?e.map(fc):fc(e)),n&&(s.elapsed=-n),s}function qy(e,t,n){return Array.isArray(t.to)&&(e.duration||(e.duration=800)),Wy(t),zy(e)||(e={...e,...ef(n,t.to)}),{...t,...Ky(e)}}function zy({delay:e,repeat:t,repeatType:n,repeatDelay:r,from:s,...i}){return!!Object.keys(i).length}function Gy(e,t){return e[t]||e.default||e}function Jy(e,t,n,r,s){const i=Gy(r,e);let o=i.from===null||i.from===void 0?t.get():i.from;const a=dc(e,n);o==="none"&&a&&typeof n=="string"&&(o=Vy(e,n));const c=dc(e,o);function u(f){const h={from:o,to:n,velocity:r.velocity?r.velocity:t.getVelocity(),onUpdate:g=>t.set(g)};return i.type==="inertia"||i.type==="decay"?vy({...h,...i}):Gu({...qy(i,h,e),onUpdate:g=>{h.onUpdate(g),i.onUpdate&&i.onUpdate(g)},onComplete:()=>{s&&s(),f&&f()}})}function l(f){return t.set(n),s&&s(),f&&f(),{stop:()=>{}}}return!c||!a||i.type===!1?l:u}function Yy(){const{motionValues:e,stop:t,get:n}=Fy();return{motionValues:e,stop:t,push:(s,i,o,a={},c)=>{const u=o[s],l=n(s,u,o);if(a&&a.immediate){l.set(i);return}const f=Jy(s,l,i,a,c);l.start(f)}}}function Xy(e,t={},{motionValues:n,push:r,stop:s}=Yy()){const i=De(t),o=Ue(!1);we(n,f=>{o.value=Object.values(f).filter(h=>h.isAnimating()).length>0},{immediate:!0,deep:!0});const a=f=>{if(!i||!i[f])throw new Error(`The variant ${f} does not exist.`);return i[f]},c=f=>{typeof f=="string"&&(f=a(f));const h=Object.entries(f).map(([y,A])=>{if(y!=="transition")return new Promise(N=>r(y,A,e,f.transition||ef(y,f[y]),N))}).filter(Boolean);async function g(){var y,A;await Promise.all(h),(A=(y=f.transition)==null?void 0:y.onComplete)==null||A.call(y)}return Promise.all([g()])};return{isAnimating:o,apply:c,set:f=>{const h=qr(f)?f:a(f);Object.entries(h).forEach(([g,y])=>{g!=="transition"&&r(g,y,e,{immediate:!0})})},leave:async f=>{let h;if(i&&(i.leave&&(h=i.leave),!i.leave&&i.initial&&(h=i.initial)),!h){f();return}await c(h),f()},stop:s}}const Ao=typeof window<"u",Qy=()=>Ao&&(window.onpointerdown===null||To.TEST),Zy=()=>Ao&&(window.ontouchstart===null||To.TEST),e_=()=>Ao&&(window.onmousedown===null||To.TEST);function t_({target:e,state:t,variants:n,apply:r}){const s=De(n),i=Ue(!1),o=Ue(!1),a=Ue(!1),c=_e(()=>{let l=[...Object.keys(t.value||{})];return s&&(s.hovered&&(l=[...l,...Object.keys(s.hovered)]),s.tapped&&(l=[...l,...Object.keys(s.tapped)]),s.focused&&(l=[...l,...Object.keys(s.focused)])),l}),u=_e(()=>{const l={};Object.assign(l,t.value),i.value&&s.hovered&&Object.assign(l,s.hovered),o.value&&s.tapped&&Object.assign(l,s.tapped),a.value&&s.focused&&Object.assign(l,s.focused);for(const f in l)c.value.includes(f)||delete l[f];return l});s.hovered&&(Ge(e,"mouseenter",()=>i.value=!0),Ge(e,"mouseleave",()=>{i.value=!1,o.value=!1})),s.tapped&&(e_()&&(Ge(e,"mousedown",()=>o.value=!0),Ge(e,"mouseup",()=>o.value=!1)),Qy()&&(Ge(e,"pointerdown",()=>o.value=!0),Ge(e,"pointerup",()=>o.value=!1)),Zy()&&(Ge(e,"touchstart",()=>o.value=!0),Ge(e,"touchend",()=>o.value=!1))),s.focused&&(Ge(e,"focus",()=>a.value=!0),Ge(e,"blur",()=>a.value=!1)),we([i,o,a],()=>{r(u.value)})}function n_({set:e,target:t,variants:n,variant:r}){const s=De(n);we(()=>t,()=>{s&&(s.initial&&(e("initial"),r.value="initial"),s.enter&&(r.value="enter"))},{immediate:!0,flush:"pre"})}function r_({state:e,apply:t}){we(e,n=>{n&&t(n)},{immediate:!0})}function nf({target:e,variants:t,variant:n}){const r=De(t);r&&(r.visible||r.visibleOnce)&&gm(e,([{isIntersecting:s}])=>{r.visible?s?n.value="visible":n.value="initial":r.visibleOnce&&(s&&n.value!=="visibleOnce"?n.value="visibleOnce":n.value||(n.value="initial"))})}function s_(e,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){t.lifeCycleHooks&&n_(e),t.syncVariants&&r_(e),t.visibilityHooks&&nf(e),t.eventListeners&&t_(e)}function rf(e={}){const t=pt({...e}),n=Ue({});return we(t,()=>{const r={};for(const[s,i]of Object.entries(t)){const o=So(s),a=Ui(i,o);r[s]=a}n.value=r},{immediate:!0,deep:!0}),{state:t,style:n}}function Co(e,t){we(()=>Vn(e),n=>{n&&t(n)},{immediate:!0})}const i_={x:"translateX",y:"translateY",z:"translateZ"};function sf(e={},t=!0){const n=pt({...e}),r=Ue("");return we(n,s=>{let i="",o=!1;if(t&&(s.x||s.y||s.z)){const a=[s.x||0,s.y||0,s.z||0].map(c=>Ui(c,q)).join(",");i+=`translate3d(${a}) `,o=!0}for(const[a,c]of Object.entries(s)){if(t&&(a==="x"||a==="y"||a==="z"))continue;const u=So(a),l=Ui(c,u);i+=`${i_[a]||a}(${l}) `}t&&!o&&(i+="translateZ(0px) "),r.value=i.trim()},{immediate:!0,deep:!0}),{state:n,transform:r}}const o_=["","X","Y","Z"],a_=["perspective","translate","scale","rotate","skew"],of=["transformPerspective","x","y","z"];a_.forEach(e=>{o_.forEach(t=>{const n=e+t;of.push(n)})});const c_=new Set(of);function Oo(e){return c_.has(e)}const l_=new Set(["originX","originY","originZ"]);function af(e){return l_.has(e)}function u_(e){const t={},n={};return Object.entries(e).forEach(([r,s])=>{Oo(r)||af(r)?t[r]=s:n[r]=s}),{transform:t,style:n}}function Ro(e){const{transform:t,style:n}=u_(e),{transform:r}=sf(t),{style:s}=rf(n);return r.value&&(s.value.transform=r.value),s.value}function f_(e,t){let n,r;const{state:s,style:i}=rf();return Co(e,o=>{r=o;for(const a of Object.keys(tf))o.style[a]===null||o.style[a]===""||Oo(a)||af(a)||(s[a]=o.style[a]);n&&Object.entries(n).forEach(([a,c])=>o.style[a]=c),t&&t(s)}),we(i,o=>{if(!r){n=o;return}for(const a in o)r.style[a]=o[a]},{immediate:!0}),{style:s}}function d_(e){const t=e.trim().split(/\) |\)/);if(t.length===1)return{};const n=r=>r.endsWith("px")||r.endsWith("deg")?Number.parseFloat(r):Number.isNaN(Number(r))?Number(r):r;return t.reduce((r,s)=>{if(!s)return r;const[i,o]=s.split("("),c=o.split(",").map(l=>n(l.endsWith(")")?l.replace(")",""):l.trim())),u=c.length===1?c[0]:c;return{...r,[i]:u}},{})}function h_(e,t){Object.entries(d_(t)).forEach(([n,r])=>{const s=["x","y","z"];if(n==="translate3d"){if(r===0){s.forEach(i=>e[i]=0);return}r.forEach((i,o)=>e[s[o]]=i);return}if(r=Number.parseFloat(`${r}`),n==="translateX"){e.x=r;return}if(n==="translateY"){e.y=r;return}if(n==="translateZ"){e.z=r;return}e[n]=r})}function p_(e,t){let n,r;const{state:s,transform:i}=sf();return Co(e,o=>{r=o,o.style.transform&&h_(s,o.style.transform),n&&(o.style.transform=n),t&&t(s)}),we(i,o=>{if(!r){n=o;return}r.style.transform=o},{immediate:!0}),{transform:s}}function g_(e,t){const n=pt({}),r=o=>Object.entries(o).forEach(([a,c])=>n[a]=c),{style:s}=f_(e,r),{transform:i}=p_(e,r);return we(n,o=>{Object.entries(o).forEach(([a,c])=>{const u=Oo(a)?i:s;u[a]&&u[a]===c||(u[a]=c)})},{immediate:!0,deep:!0}),Co(e,()=>t),{motionProperties:n,style:s,transform:i}}function m_(e={}){const t=De(e),n=Ue();return{state:_e(()=>{if(n.value)return t[n.value]}),variant:n}}function cf(e,t={},n){const{motionProperties:r}=g_(e),{variant:s,state:i}=m_(t),o=Xy(r,t),a={target:e,variant:s,variants:t,state:i,motionProperties:r,...o};return s_(a,n),a}const lf=["delay","duration"],y_=["initial","enter","leave","visible","visible-once","visibleOnce","hovered","tapped","focused",...lf];function __(e){return lf.includes(e)}function b_(e,t){const n=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};if(n){n.variants&&qr(n.variants)&&(t.value={...t.value,...n.variants});for(let r of y_)if(!(!n||!n[r])){if(__(r)&&typeof n[r]=="number"){for(const s of["enter","visible","visibleOnce"]){const i=t.value[s];i!=null&&(i.transition??(i.transition={}),i.transition[r]=n[r])}continue}if(qr(n[r])){const s=n[r];r==="visible-once"&&(r="visibleOnce"),t.value[r]=s}}}}function Xs(e,t=!1){return{created:(s,i,o)=>{const a=i.value&&typeof i.value=="string"?i.value:o.key;a&&Gs[a]&&Gs[a].stop();const c=t?structuredClone(e||{}):e||{},u=Ue(c);typeof i.value=="object"&&(u.value=i.value),b_(o,u);const f=cf(s,u,{eventListeners:!0,lifeCycleHooks:!0,syncVariants:!0,visibilityHooks:!1});s.motionInstance=f,a&&(Gs[a]=f)},mounted:(s,i,o)=>{s.motionInstance&&nf(s.motionInstance)},getSSRProps(s,i){let{initial:o}=s.value||i&&(i==null?void 0:i.props)||{};o=De(o);const a=bu({},(e==null?void 0:e.initial)||{},o||{});return!a||Object.keys(a).length===0?void 0:{style:Ro(a)}}}}const v_={initial:{opacity:0},enter:{opacity:1}},w_={initial:{opacity:0},visible:{opacity:1}},E_={initial:{opacity:0},visibleOnce:{opacity:1}},I_={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},T_={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},S_={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},A_={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},C_={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},O_={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},R_={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},P_={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},k_={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},N_={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},M_={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},D_={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},x_={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},L_={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},F_={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},U_={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},j_={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},$_={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},V_={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},B_={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},H_={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},W_={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},K_={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},q_={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},z_={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},G_={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},J_={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},Jr={__proto__:null,fade:v_,fadeVisible:w_,fadeVisibleOnce:E_,pop:I_,popVisible:T_,popVisibleOnce:S_,rollBottom:x_,rollLeft:A_,rollRight:R_,rollTop:N_,rollVisibleBottom:L_,rollVisibleLeft:C_,rollVisibleOnceBottom:F_,rollVisibleOnceLeft:O_,rollVisibleOnceRight:k_,rollVisibleOnceTop:D_,rollVisibleRight:P_,rollVisibleTop:M_,slideBottom:z_,slideLeft:U_,slideRight:V_,slideTop:W_,slideVisibleBottom:G_,slideVisibleLeft:j_,slideVisibleOnceBottom:J_,slideVisibleOnceLeft:$_,slideVisibleOnceRight:H_,slideVisibleOnceTop:q_,slideVisibleRight:B_,slideVisibleTop:K_};function Y_(e){const t="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",n="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",r=new RegExp(t.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,s=>`-${s}`).toLowerCase().replace(/\s+/g,"-").replace(r,s=>n.charAt(t.indexOf(s))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/-{2,}/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const X_=e=>e in Jr,uf={preset:{type:String,validator:e=>X_(e),required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1},duration:{type:[Number,String],required:!1}};function ff(e){const t=pt({}),n=_e(()=>e.preset?structuredClone(Jr[e.preset]):{}),r=_e(()=>({initial:e.initial,enter:e.enter,leave:e.leave,visible:e.visible,visibleOnce:e.visibleOnce,hovered:e.hovered,tapped:e.tapped,focused:e.focused})),s=_e(()=>{const o=bu({},r.value,n.value,e.variants||{});for(const a of["delay","duration"]){if(!e[a])continue;const c=Number.parseInt(e[a]);for(const u of["enter","visible","visibleOnce"]){const l=o[u];l!=null&&(l.transition??(l.transition={}),l.transition[a]=c)}}return o});function i(o,a,c){var u;return o.props??(o.props={}),(u=o.props).style??(u.style={}),o.props.style={...o.props.style,...c},o.props.onVnodeMounted=({el:l})=>{t[a]=cf(l,s.value)},o}return{motionConfig:s,setNodeInstance:i}}const Q_=ds({props:{...uf,is:{type:[String,Object],default:"div"}},setup(e){const t=Fl(),{motionConfig:n,setNodeInstance:r}=ff(e);return()=>{const s=Ro(n.value.initial||{}),i=or(e.is,void 0,t);return r(i,0,s),i}}}),Z_=ds({props:{...uf,is:{type:[String,Object],required:!1}},setup(e){const t=Fl(),{motionConfig:n,setNodeInstance:r}=ff(e);return()=>{var o;const s=Ro(n.value.initial||{}),i=((o=t.default)==null?void 0:o.call(t))||[];for(let a=0;a<i.length;a++)r(i[a],a,s);return e.is?or(e.is,void 0,i):i}}}),eb={install(e,t){if(e.directive("motion",Xs()),e.component("Motion",Q_),e.component("MotionGroup",Z_),!t||t&&!t.excludePresets)for(const n in Jr){const r=Jr[n];e.directive(`motion-${Y_(n)}`,Xs(r,!0))}if(t&&t.directives)for(const n in t.directives){const r=t.directives[n];!r.initial&&__DEV__&&console.warn(`Your directive v-motion-${n} is missing initial variant!`),e.directive(`motion-${n}`,Xs(r,!0))}}};var hc={};/**
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
 */const df=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},tb=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},hf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,c=s+2<e.length,u=c?e[s+2]:0,l=i>>2,f=(i&3)<<4|a>>4;let h=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(h=64)),r.push(n[l],n[f],n[h],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(df(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):tb(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const u=s<e.length?n[e.charAt(s)]:64;++s;const f=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||u==null||f==null)throw new nb;const h=i<<2|a>>4;if(r.push(h),u!==64){const g=a<<4&240|u>>2;if(r.push(g),f!==64){const y=u<<6&192|f;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class nb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rb=function(e){const t=df(e);return hf.encodeByteArray(t,!0)},Yr=function(e){return rb(e).replace(/\./g,"")},pf=function(e){try{return hf.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function sb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ib=()=>sb().__FIREBASE_DEFAULTS__,ob=()=>{if(typeof process>"u"||typeof hc>"u")return;const e=hc.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},ab=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&pf(e[1]);return t&&JSON.parse(t)},Is=()=>{try{return ib()||ob()||ab()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},gf=e=>{var t,n;return(n=(t=Is())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},mI=e=>{const t=gf(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},mf=()=>{var e;return(e=Is())===null||e===void 0?void 0:e.config},yf=e=>{var t;return(t=Is())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class cb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function yI(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Yr(JSON.stringify(n)),Yr(JSON.stringify(o)),""].join(".")}/**
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
 */function Ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())}function ub(){var e;const t=(e=Is())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fb(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function db(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hb(){const e=Ee();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function _I(){return!ub()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function _f(){try{return typeof indexedDB=="object"}catch{return!1}}function bf(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function pb(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const gb="FirebaseError";class mt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=gb,Object.setPrototypeOf(this,mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,un.prototype.create)}}class un{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?mb(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new mt(s,a,r)}}function mb(e,t){return e.replace(yb,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const yb=/\{\$([^}]+)}/g;function _b(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Xr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(pc(i)&&pc(o)){if(!Xr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function pc(e){return e!==null&&typeof e=="object"}/**
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
 */function fr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function bb(e,t){const n=new vb(e,t);return n.subscribe.bind(n)}class vb{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let s;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");wb(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:r},s.next===void 0&&(s.next=Qs),s.error===void 0&&(s.error=Qs),s.complete===void 0&&(s.complete=Qs);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wb(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Qs(){}/**
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
 */function yt(e){return e&&e._delegate?e._delegate:e}class rt{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Gt="[DEFAULT]";/**
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
 */class Eb{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new cb;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Tb(t))try{this.getOrInitializeService({instanceIdentifier:Gt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Gt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Gt){return this.instances.has(t)}getOptions(t=Gt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ib(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Gt){return this.component?this.component.multipleInstances?t:Gt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ib(e){return e===Gt?void 0:e}function Tb(e){return e.instantiationMode==="EAGER"}/**
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
 */class Sb{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Eb(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ae;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ae||(ae={}));const Ab={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},Cb=ae.INFO,Ob={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},Rb=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=Ob[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class vf{constructor(t){this.name=t,this._logLevel=Cb,this._logHandler=Rb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ae))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Ab[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...t),this._logHandler(this,ae.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...t),this._logHandler(this,ae.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...t),this._logHandler(this,ae.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...t),this._logHandler(this,ae.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...t),this._logHandler(this,ae.ERROR,...t)}}const Pb=(e,t)=>t.some(n=>e instanceof n);let gc,mc;function kb(){return gc||(gc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Nb(){return mc||(mc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wf=new WeakMap,ji=new WeakMap,Ef=new WeakMap,Zs=new WeakMap,Po=new WeakMap;function Mb(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(ft(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&wf.set(n,e)}).catch(()=>{}),Po.set(t,e),t}function Db(e){if(ji.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});ji.set(e,t)}let $i={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ji.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ef.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ft(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function xb(e){$i=e($i)}function Lb(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ei(this),t,...n);return Ef.set(r,t.sort?t.sort():[t]),ft(r)}:Nb().includes(e)?function(...t){return e.apply(ei(this),t),ft(wf.get(this))}:function(...t){return ft(e.apply(ei(this),t))}}function Fb(e){return typeof e=="function"?Lb(e):(e instanceof IDBTransaction&&Db(e),Pb(e,kb())?new Proxy(e,$i):e)}function ft(e){if(e instanceof IDBRequest)return Mb(e);if(Zs.has(e))return Zs.get(e);const t=Fb(e);return t!==e&&(Zs.set(e,t),Po.set(t,e)),t}const ei=e=>Po.get(e);function Ts(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=ft(o);return r&&o.addEventListener("upgradeneeded",c=>{r(ft(o.result),c.oldVersion,c.newVersion,ft(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}function ti(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",r=>t(r.oldVersion,r)),ft(n).then(()=>{})}const Ub=["get","getKey","getAll","getAllKeys","count"],jb=["put","add","delete","clear"],ni=new Map;function yc(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ni.get(t))return ni.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=jb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ub.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return ni.set(t,i),i}xb(e=>({...e,get:(t,n,r)=>yc(t,n)||e.get(t,n,r),has:(t,n)=>!!yc(t,n)||e.has(t,n)}));/**
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
 */class $b{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Vb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Vb(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Vi="@firebase/app",_c="0.10.5";/**
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
 */const sn=new vf("@firebase/app"),Bb="@firebase/app-compat",Hb="@firebase/analytics-compat",Wb="@firebase/analytics",Kb="@firebase/app-check-compat",qb="@firebase/app-check",zb="@firebase/auth",Gb="@firebase/auth-compat",Jb="@firebase/database",Yb="@firebase/database-compat",Xb="@firebase/functions",Qb="@firebase/functions-compat",Zb="@firebase/installations",ev="@firebase/installations-compat",tv="@firebase/messaging",nv="@firebase/messaging-compat",rv="@firebase/performance",sv="@firebase/performance-compat",iv="@firebase/remote-config",ov="@firebase/remote-config-compat",av="@firebase/storage",cv="@firebase/storage-compat",lv="@firebase/firestore",uv="@firebase/vertexai-preview",fv="@firebase/firestore-compat",dv="firebase",hv="10.12.2";/**
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
 */const Bi="[DEFAULT]",pv={[Vi]:"fire-core",[Bb]:"fire-core-compat",[Wb]:"fire-analytics",[Hb]:"fire-analytics-compat",[qb]:"fire-app-check",[Kb]:"fire-app-check-compat",[zb]:"fire-auth",[Gb]:"fire-auth-compat",[Jb]:"fire-rtdb",[Yb]:"fire-rtdb-compat",[Xb]:"fire-fn",[Qb]:"fire-fn-compat",[Zb]:"fire-iid",[ev]:"fire-iid-compat",[tv]:"fire-fcm",[nv]:"fire-fcm-compat",[rv]:"fire-perf",[sv]:"fire-perf-compat",[iv]:"fire-rc",[ov]:"fire-rc-compat",[av]:"fire-gcs",[cv]:"fire-gcs-compat",[lv]:"fire-fst",[fv]:"fire-fst-compat",[uv]:"fire-vertex","fire-js":"fire-js",[dv]:"fire-js-all"};/**
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
 */const Qr=new Map,gv=new Map,Hi=new Map;function bc(e,t){try{e.container.addComponent(t)}catch(n){sn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function dt(e){const t=e.name;if(Hi.has(t))return sn.debug(`There were multiple attempts to register component ${t}.`),!1;Hi.set(t,e);for(const n of Qr.values())bc(n,e);for(const n of gv.values())bc(n,e);return!0}function dr(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function ot(e){return e.settings!==void 0}/**
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
 */const mv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Lt=new un("app","Firebase",mv);/**
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
 */class yv{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Lt.create("app-deleted",{appName:this._name})}}/**
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
 */const hr=hv;function If(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Bi,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Lt.create("bad-app-name",{appName:String(s)});if(n||(n=mf()),!n)throw Lt.create("no-options");const i=Qr.get(s);if(i){if(Xr(n,i.options)&&Xr(r,i.config))return i;throw Lt.create("duplicate-app",{appName:s})}const o=new Sb(s);for(const c of Hi.values())o.addComponent(c);const a=new yv(n,r,o);return Qr.set(s,a),a}function Tf(e=Bi){const t=Qr.get(e);if(!t&&e===Bi&&mf())return If();if(!t)throw Lt.create("no-app",{appName:e});return t}function et(e,t,n){var r;let s=(r=pv[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),sn.warn(a.join(" "));return}dt(new rt(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const _v="firebase-heartbeat-database",bv=1,tr="firebase-heartbeat-store";let ri=null;function Sf(){return ri||(ri=Ts(_v,bv,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(tr)}catch(n){console.warn(n)}}}}).catch(e=>{throw Lt.create("idb-open",{originalErrorMessage:e.message})})),ri}async function vv(e){try{const n=(await Sf()).transaction(tr),r=await n.objectStore(tr).get(Af(e));return await n.done,r}catch(t){if(t instanceof mt)sn.warn(t.message);else{const n=Lt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});sn.warn(n.message)}}}async function vc(e,t){try{const r=(await Sf()).transaction(tr,"readwrite");await r.objectStore(tr).put(t,Af(e)),await r.done}catch(n){if(n instanceof mt)sn.warn(n.message);else{const r=Lt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});sn.warn(r.message)}}}function Af(e){return`${e.name}!${e.options.appId}`}/**
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
 */const wv=1024,Ev=30*24*60*60*1e3;class Iv{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Sv(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=wc();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Ev}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=wc(),{heartbeatsToSend:r,unsentEntries:s}=Tv(this._heartbeatsCache.heartbeats),i=Yr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function wc(){return new Date().toISOString().substring(0,10)}function Tv(e,t=wv){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ec(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ec(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Sv{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _f()?bf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await vv(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return vc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return vc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Ec(e){return Yr(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Av(e){dt(new rt("platform-logger",t=>new $b(t),"PRIVATE")),dt(new rt("heartbeat",t=>new Iv(t),"PRIVATE")),et(Vi,_c,e),et(Vi,_c,"esm2017"),et("fire-js","")}Av("");var Cv="firebase",Ov="10.12.2";/**
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
 */et(Cv,Ov,"app");const Cf="@firebase/installations",ko="0.6.7";/**
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
 */const Of=1e4,Rf=`w:${ko}`,Pf="FIS_v2",Rv="https://firebaseinstallations.googleapis.com/v1",Pv=60*60*1e3,kv="installations",Nv="Installations";/**
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
 */const Mv={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},on=new un(kv,Nv,Mv);function kf(e){return e instanceof mt&&e.code.includes("request-failed")}/**
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
 */function Nf({projectId:e}){return`${Rv}/projects/${e}/installations`}function Mf(e){return{token:e.token,requestStatus:2,expiresIn:xv(e.expiresIn),creationTime:Date.now()}}async function Df(e,t){const r=(await t.json()).error;return on.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function xf({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Dv(e,{refreshToken:t}){const n=xf(e);return n.append("Authorization",Lv(t)),n}async function Lf(e){const t=await e();return t.status>=500&&t.status<600?e():t}function xv(e){return Number(e.replace("s","000"))}function Lv(e){return`${Pf} ${e}`}/**
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
 */async function Fv({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Nf(e),s=xf(e),i=t.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:n,authVersion:Pf,appId:e.appId,sdkVersion:Rf},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Lf(()=>fetch(r,a));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Mf(u.authToken)}}else throw await Df("Create Installation",c)}/**
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
 */function Ff(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function Uv(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const jv=/^[cdef][\w-]{21}$/,Wi="";function $v(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Vv(e);return jv.test(n)?n:Wi}catch{return Wi}}function Vv(e){return Uv(e).substr(0,22)}/**
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
 */function Ss(e){return`${e.appName}!${e.appId}`}/**
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
 */const Uf=new Map;function jf(e,t){const n=Ss(e);$f(n,t),Bv(n,t)}function $f(e,t){const n=Uf.get(e);if(n)for(const r of n)r(t)}function Bv(e,t){const n=Hv();n&&n.postMessage({key:e,fid:t}),Wv()}let Zt=null;function Hv(){return!Zt&&"BroadcastChannel"in self&&(Zt=new BroadcastChannel("[Firebase] FID Change"),Zt.onmessage=e=>{$f(e.data.key,e.data.fid)}),Zt}function Wv(){Uf.size===0&&Zt&&(Zt.close(),Zt=null)}/**
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
 */const Kv="firebase-installations-database",qv=1,an="firebase-installations-store";let si=null;function No(){return si||(si=Ts(Kv,qv,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(an)}}})),si}async function Zr(e,t){const n=Ss(e),s=(await No()).transaction(an,"readwrite"),i=s.objectStore(an),o=await i.get(n);return await i.put(t,n),await s.done,(!o||o.fid!==t.fid)&&jf(e,t.fid),t}async function Vf(e){const t=Ss(e),r=(await No()).transaction(an,"readwrite");await r.objectStore(an).delete(t),await r.done}async function As(e,t){const n=Ss(e),s=(await No()).transaction(an,"readwrite"),i=s.objectStore(an),o=await i.get(n),a=t(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&jf(e,a.fid),a}/**
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
 */async function Mo(e){let t;const n=await As(e.appConfig,r=>{const s=zv(r),i=Gv(e,s);return t=i.registrationPromise,i.installationEntry});return n.fid===Wi?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function zv(e){const t=e||{fid:$v(),registrationStatus:0};return Bf(t)}function Gv(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(on.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Jv(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Yv(e)}:{installationEntry:t}}async function Jv(e,t){try{const n=await Fv(e,t);return Zr(e.appConfig,n)}catch(n){throw kf(n)&&n.customData.serverCode===409?await Vf(e.appConfig):await Zr(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Yv(e){let t=await Ic(e.appConfig);for(;t.registrationStatus===1;)await Ff(100),t=await Ic(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Mo(e);return r||n}return t}function Ic(e){return As(e,t=>{if(!t)throw on.create("installation-not-found");return Bf(t)})}function Bf(e){return Xv(e)?{fid:e.fid,registrationStatus:0}:e}function Xv(e){return e.registrationStatus===1&&e.registrationTime+Of<Date.now()}/**
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
 */async function Qv({appConfig:e,heartbeatServiceProvider:t},n){const r=Zv(e,n),s=Dv(e,n),i=t.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:Rf,appId:e.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Lf(()=>fetch(r,a));if(c.ok){const u=await c.json();return Mf(u)}else throw await Df("Generate Auth Token",c)}function Zv(e,{fid:t}){return`${Nf(e)}/${t}/authTokens:generate`}/**
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
 */async function Do(e,t=!1){let n;const r=await As(e.appConfig,i=>{if(!Hf(i))throw on.create("not-registered");const o=i.authToken;if(!t&&n0(o))return i;if(o.requestStatus===1)return n=e0(e,t),i;{if(!navigator.onLine)throw on.create("app-offline");const a=s0(i);return n=t0(e,a),a}});return n?await n:r.authToken}async function e0(e,t){let n=await Tc(e.appConfig);for(;n.authToken.requestStatus===1;)await Ff(100),n=await Tc(e.appConfig);const r=n.authToken;return r.requestStatus===0?Do(e,t):r}function Tc(e){return As(e,t=>{if(!Hf(t))throw on.create("not-registered");const n=t.authToken;return i0(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function t0(e,t){try{const n=await Qv(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Zr(e.appConfig,r),n}catch(n){if(kf(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Vf(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Zr(e.appConfig,r)}throw n}}function Hf(e){return e!==void 0&&e.registrationStatus===2}function n0(e){return e.requestStatus===2&&!r0(e)}function r0(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Pv}function s0(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function i0(e){return e.requestStatus===1&&e.requestTime+Of<Date.now()}/**
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
 */async function o0(e){const t=e,{installationEntry:n,registrationPromise:r}=await Mo(t);return r?r.catch(console.error):Do(t).catch(console.error),n.fid}/**
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
 */async function a0(e,t=!1){const n=e;return await c0(n),(await Do(n,t)).token}async function c0(e){const{registrationPromise:t}=await Mo(e);t&&await t}/**
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
 */function l0(e){if(!e||!e.options)throw ii("App Configuration");if(!e.name)throw ii("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw ii(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function ii(e){return on.create("missing-app-config-values",{valueName:e})}/**
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
 */const Wf="installations",u0="installations-internal",f0=e=>{const t=e.getProvider("app").getImmediate(),n=l0(t),r=dr(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},d0=e=>{const t=e.getProvider("app").getImmediate(),n=dr(t,Wf).getImmediate();return{getId:()=>o0(n),getToken:s=>a0(n,s)}};function h0(){dt(new rt(Wf,f0,"PUBLIC")),dt(new rt(u0,d0,"PRIVATE"))}h0();et(Cf,ko);et(Cf,ko,"esm2017");/**
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
 */const p0="/firebase-messaging-sw.js",g0="/firebase-cloud-messaging-push-scope",Kf="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",m0="https://fcmregistrations.googleapis.com/v1",qf="google.c.a.c_id",y0="google.c.a.c_l",_0="google.c.a.ts",b0="google.c.a.e";var Sc;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Sc||(Sc={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var nr;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(nr||(nr={}));/**
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
 */function it(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function v0(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),s=new Uint8Array(r.length);for(let i=0;i<r.length;++i)s[i]=r.charCodeAt(i);return s}/**
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
 */const oi="fcm_token_details_db",w0=5,Ac="fcm_token_object_Store";async function E0(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(oi))return null;let t=null;return(await Ts(oi,w0,{upgrade:async(r,s,i,o)=>{var a;if(s<2||!r.objectStoreNames.contains(Ac))return;const c=o.objectStore(Ac),u=await c.index("fcmSenderId").get(e);if(await c.clear(),!!u){if(s===2){const l=u;if(!l.auth||!l.p256dh||!l.endpoint)return;t={token:l.fcmToken,createTime:(a=l.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:l.auth,p256dh:l.p256dh,endpoint:l.endpoint,swScope:l.swScope,vapidKey:typeof l.vapidKey=="string"?l.vapidKey:it(l.vapidKey)}}}else if(s===3){const l=u;t={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:it(l.auth),p256dh:it(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:it(l.vapidKey)}}}else if(s===4){const l=u;t={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:it(l.auth),p256dh:it(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:it(l.vapidKey)}}}}}})).close(),await ti(oi),await ti("fcm_vapid_details_db"),await ti("undefined"),I0(t)?t:null}function I0(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
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
 */const T0="firebase-messaging-database",S0=1,rr="firebase-messaging-store";let ai=null;function zf(){return ai||(ai=Ts(T0,S0,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(rr)}}})),ai}async function A0(e){const t=Gf(e),r=await(await zf()).transaction(rr).objectStore(rr).get(t);if(r)return r;{const s=await E0(e.appConfig.senderId);if(s)return await xo(e,s),s}}async function xo(e,t){const n=Gf(e),s=(await zf()).transaction(rr,"readwrite");return await s.objectStore(rr).put(t,n),await s.done,t}function Gf({appConfig:e}){return e.appId}/**
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
 */const C0={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Se=new un("messaging","Messaging",C0);/**
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
 */async function O0(e,t){const n=await Fo(e),r=Jf(t),s={method:"POST",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(Lo(e.appConfig),s)).json()}catch(o){throw Se.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw Se.create("token-subscribe-failed",{errorInfo:o})}if(!i.token)throw Se.create("token-subscribe-no-token");return i.token}async function R0(e,t){const n=await Fo(e),r=Jf(t.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(`${Lo(e.appConfig)}/${t.token}`,s)).json()}catch(o){throw Se.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw Se.create("token-update-failed",{errorInfo:o})}if(!i.token)throw Se.create("token-update-no-token");return i.token}async function P0(e,t){const r={method:"DELETE",headers:await Fo(e)};try{const i=await(await fetch(`${Lo(e.appConfig)}/${t}`,r)).json();if(i.error){const o=i.error.message;throw Se.create("token-unsubscribe-failed",{errorInfo:o})}}catch(s){throw Se.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function Lo({projectId:e}){return`${m0}/projects/${e}/registrations`}async function Fo({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Jf({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:t,p256dh:e}};return r!==Kf&&(s.web.applicationPubKey=r),s}/**
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
 */const k0=7*24*60*60*1e3;async function N0(e){const t=await D0(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:it(t.getKey("auth")),p256dh:it(t.getKey("p256dh"))},r=await A0(e.firebaseDependencies);if(r){if(x0(r.subscriptionOptions,n))return Date.now()>=r.createTime+k0?M0(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await P0(e.firebaseDependencies,r.token)}catch(s){console.warn(s)}return Cc(e.firebaseDependencies,n)}else return Cc(e.firebaseDependencies,n)}async function M0(e,t){try{const n=await R0(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await xo(e.firebaseDependencies,r),n}catch(n){throw n}}async function Cc(e,t){const r={token:await O0(e,t),createTime:Date.now(),subscriptionOptions:t};return await xo(e,r),r.token}async function D0(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:v0(t)})}function x0(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,s=t.auth===e.auth,i=t.p256dh===e.p256dh;return n&&r&&s&&i}/**
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
 */function Oc(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return L0(t,e),F0(t,e),U0(t,e),t}function L0(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const s=t.notification.image;s&&(e.notification.image=s);const i=t.notification.icon;i&&(e.notification.icon=i)}function F0(e,t){t.data&&(e.data=t.data)}function U0(e,t){var n,r,s,i,o;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const a=(s=(r=t.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(i=t.notification)===null||i===void 0?void 0:i.click_action;a&&(e.fcmOptions.link=a);const c=(o=t.fcmOptions)===null||o===void 0?void 0:o.analytics_label;c&&(e.fcmOptions.analyticsLabel=c)}/**
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
 */function j0(e){return typeof e=="object"&&!!e&&qf in e}/**
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
 */Yf("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");Yf("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function Yf(e,t){const n=[];for(let r=0;r<e.length;r++)n.push(e.charAt(r)),r<t.length&&n.push(t.charAt(r));return n.join("")}/**
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
 */function $0(e){if(!e||!e.options)throw ci("App Configuration Object");if(!e.name)throw ci("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const r of t)if(!n[r])throw ci(r);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function ci(e){return Se.create("missing-app-config-values",{valueName:e})}/**
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
 */class V0{constructor(t,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=$0(t);this.firebaseDependencies={app:t,appConfig:s,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function B0(e){try{e.swRegistration=await navigator.serviceWorker.register(p0,{scope:g0}),e.swRegistration.update().catch(()=>{})}catch(t){throw Se.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}/**
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
 */async function H0(e,t){if(!t&&!e.swRegistration&&await B0(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw Se.create("invalid-sw-registration");e.swRegistration=t}}/**
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
 */async function W0(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=Kf)}/**
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
 */async function K0(e,t){if(!navigator)throw Se.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Se.create("permission-blocked");return await W0(e,t==null?void 0:t.vapidKey),await H0(e,t==null?void 0:t.serviceWorkerRegistration),N0(e)}/**
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
 */async function q0(e,t,n){const r=z0(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[qf],message_name:n[y0],message_time:n[_0],message_device_time:Math.floor(Date.now()/1e3)})}function z0(e){switch(e){case nr.NOTIFICATION_CLICKED:return"notification_open";case nr.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function G0(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===nr.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(Oc(n)):e.onMessageHandler.next(Oc(n)));const r=n.data;j0(r)&&r[b0]==="1"&&await q0(e,n.messageType,r)}const Rc="@firebase/messaging",Pc="0.12.9";/**
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
 */const J0=e=>{const t=new V0(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>G0(t,n)),t},Y0=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:r=>K0(t,r)}};function X0(){dt(new rt("messaging",J0,"PUBLIC")),dt(new rt("messaging-internal",Y0,"PRIVATE")),et(Rc,Pc),et(Rc,Pc,"esm2017")}/**
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
 */async function Q0(){try{await bf()}catch{return!1}return typeof window<"u"&&_f()&&pb()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function Z0(e=Tf()){return Q0().then(t=>{if(!t)throw Se.create("unsupported-browser")},t=>{throw Se.create("indexed-db-unsupported")}),dr(yt(e),"messaging").getImmediate()}X0();const ew="modulepreload",tw=function(e){return"/"+e},kc={},Nn=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),o=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));s=Promise.all(n.map(a=>{if(a=tw(a),a in kc)return;kc[a]=!0;const c=a.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${u}`))return;const l=document.createElement("link");if(l.rel=c?"stylesheet":ew,c||(l.as="script",l.crossOrigin=""),l.href=a,o&&l.setAttribute("nonce",o),document.head.appendChild(l),c)return new Promise((f,h)=>{l.addEventListener("load",f),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${a}`)))})}))}return s.then(()=>t()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};function Uo(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n}function Xf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nw=Xf,Qf=new un("auth","Firebase",Xf());/**
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
 */const es=new vf("@firebase/auth");function rw(e,...t){es.logLevel<=ae.WARN&&es.warn(`Auth (${hr}): ${e}`,...t)}function Fr(e,...t){es.logLevel<=ae.ERROR&&es.error(`Auth (${hr}): ${e}`,...t)}/**
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
 */function st(e,...t){throw $o(e,...t)}function Ke(e,...t){return $o(e,...t)}function jo(e,t,n){const r=Object.assign(Object.assign({},nw()),{[t]:n});return new un("auth","Firebase",r).create(t,{appName:e.name})}function rn(e){return jo(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function sw(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&st(e,"argument-error"),jo(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function $o(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Qf.create(e,...t)}function H(e,t,...n){if(!e)throw $o(t,...n)}function at(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Fr(t),new Error(t)}function ht(e,t){e||at(t)}/**
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
 */function Ki(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function iw(){return Nc()==="http:"||Nc()==="https:"}function Nc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function ow(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iw()||fb()||"connection"in navigator)?navigator.onLine:!0}function aw(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class pr{constructor(t,n){this.shortDelay=t,this.longDelay=n,ht(n>t,"Short delay should be less than long delay!"),this.isMobile=lb()||db()}get(){return ow()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Vo(e,t){ht(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class Zf{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;at("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;at("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;at("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const cw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const lw=new pr(3e4,6e4);function Bo(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function On(e,t,n,r,s={}){return ed(e,s,async()=>{let i={},o={};r&&(t==="GET"?o=r:i={body:JSON.stringify(r)});const a=fr(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),Zf.fetch()(td(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},i))})}async function ed(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},cw),t);try{const s=new fw(e),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ar(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ar(e,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ar(e,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ar(e,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw jo(e,l,u);st(e,l)}}catch(s){if(s instanceof mt)throw s;st(e,"network-request-failed",{message:String(s)})}}async function uw(e,t,n,r,s={}){const i=await On(e,t,n,r,s);return"mfaPendingCredential"in i&&st(e,"multi-factor-auth-required",{_serverResponse:i}),i}function td(e,t,n,r){const s=`${t}${n}?${r}`;return e.config.emulator?Vo(e.config,s):`${e.config.apiScheme}://${s}`}class fw{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ke(this.auth,"network-request-failed")),lw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ar(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ke(e,t,r);return s.customData._tokenResponse=n,s}/**
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
 */async function dw(e,t){return On(e,"POST","/v1/accounts:delete",t)}async function nd(e,t){return On(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Kn(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function hw(e,t=!1){const n=yt(e),r=await n.getIdToken(t),s=Ho(r);H(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Kn(li(s.auth_time)),issuedAtTime:Kn(li(s.iat)),expirationTime:Kn(li(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function li(e){return Number(e)*1e3}function Ho(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Fr("JWT malformed, contained fewer than 3 sections"),null;try{const s=pf(n);return s?JSON.parse(s):(Fr("Failed to decode base64 JWT payload"),null)}catch(s){return Fr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Mc(e){const t=Ho(e);return H(t,"internal-error"),H(typeof t.exp<"u","internal-error"),H(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function sr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof mt&&pw(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function pw({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class gw{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class qi{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Kn(this.lastLoginAt),this.creationTime=Kn(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ts(e){var t;const n=e.auth,r=await e.getIdToken(),s=await sr(e,nd(n,{idToken:r}));H(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];e._notifyReloadListener(i);const o=!((t=i.providerUserInfo)===null||t===void 0)&&t.length?rd(i.providerUserInfo):[],a=yw(e.providerData,o),c=e.isAnonymous,u=!(e.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new qi(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(e,f)}async function mw(e){const t=yt(e);await ts(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function yw(e,t){return[...e.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function rd(e){return e.map(t=>{var{providerId:n}=t,r=Uo(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function _w(e,t){const n=await ed(e,{},async()=>{const r=fr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=e.config,o=td(e,s,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Zf.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function bw(e,t){return On(e,"POST","/v2/accounts:revokeToken",Bo(e,t))}/**
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
 */class vn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){H(t.idToken,"internal-error"),H(typeof t.idToken<"u","internal-error"),H(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Mc(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){H(t.length!==0,"internal-error");const n=Mc(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await _w(t,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new vn;return r&&(H(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),s&&(H(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),i&&(H(typeof i=="number","internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new vn,this.toJSON())}_performRefresh(){return at("not implemented")}}/**
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
 */function It(e,t){H(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class ct{constructor(t){var{uid:n,auth:r,stsTokenManager:s}=t,i=Uo(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new qi(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const n=await sr(this,this.stsTokenManager.getToken(this.auth,t));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return hw(this,t)}reload(){return mw(this)}_assign(t){this!==t&&(H(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new ct(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await ts(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ot(this.auth.app))return Promise.reject(rn(this.auth));const t=await this.getIdToken();return await sr(this,dw(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,s,i,o,a,c,u,l;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,S=(u=n.createdAt)!==null&&u!==void 0?u:void 0,C=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:E,emailVerified:R,isAnonymous:F,providerData:D,stsTokenManager:X}=n;H(E&&X,t,"internal-error");const V=vn.fromJSON(this.name,X);H(typeof E=="string",t,"internal-error"),It(f,t.name),It(h,t.name),H(typeof R=="boolean",t,"internal-error"),H(typeof F=="boolean",t,"internal-error"),It(g,t.name),It(y,t.name),It(A,t.name),It(N,t.name),It(S,t.name),It(C,t.name);const G=new ct({uid:E,auth:t,email:h,emailVerified:R,displayName:f,isAnonymous:F,photoURL:y,phoneNumber:g,tenantId:A,stsTokenManager:V,createdAt:S,lastLoginAt:C});return D&&Array.isArray(D)&&(G.providerData=D.map(Z=>Object.assign({},Z))),N&&(G._redirectEventId=N),G}static async _fromIdTokenResponse(t,n,r=!1){const s=new vn;s.updateFromServerResponse(n);const i=new ct({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await ts(i),i}static async _fromGetAccountInfoResponse(t,n,r){const s=n.users[0];H(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?rd(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new vn;a.updateFromIdToken(r);const c=new ct({uid:s.localId,auth:t,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new qi(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const Dc=new Map;function lt(e){ht(e instanceof Function,"Expected a class definition");let t=Dc.get(e);return t?(ht(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Dc.set(e,t),t)}/**
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
 */class sd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}sd.type="NONE";const xc=sd;/**
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
 */function Ur(e,t,n){return`firebase:${e}:${t}:${n}`}class wn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ur(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ur("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?ct._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new wn(lt(xc),t,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||lt(xc);const o=Ur(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const f=ct._fromJSON(t,l);u!==i&&(a=f),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new wn(i,t,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new wn(i,t,r))}}/**
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
 */function Lc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ad(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(id(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ld(t))return"Blackberry";if(ud(t))return"Webos";if(Wo(t))return"Safari";if((t.includes("chrome/")||od(t))&&!t.includes("edge/"))return"Chrome";if(cd(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function id(e=Ee()){return/firefox\//i.test(e)}function Wo(e=Ee()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function od(e=Ee()){return/crios\//i.test(e)}function ad(e=Ee()){return/iemobile/i.test(e)}function cd(e=Ee()){return/android/i.test(e)}function ld(e=Ee()){return/blackberry/i.test(e)}function ud(e=Ee()){return/webos/i.test(e)}function Cs(e=Ee()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function vw(e=Ee()){var t;return Cs(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function ww(){return hb()&&document.documentMode===10}function fd(e=Ee()){return Cs(e)||cd(e)||ud(e)||ld(e)||/windows phone/i.test(e)||ad(e)}function Ew(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function dd(e,t=[]){let n;switch(e){case"Browser":n=Lc(Ee());break;case"Worker":n=`${Lc(Ee())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${hr}/${r}`}/**
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
 */class Iw{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=i=>new Promise((o,a)=>{try{const c=t(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Tw(e,t={}){return On(e,"GET","/v2/passwordPolicy",Bo(e,t))}/**
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
 */const Sw=6;class Aw{constructor(t){var n,r,s,i;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Sw,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=t.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),s&&(n.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<t.length;s++)r=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}/**
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
 */class Cw{constructor(t,n,r,s){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fc(this),this.idTokenSubscription=new Fc(this),this.beforeStateQueue=new Iw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=lt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await wn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await nd(this,{idToken:t}),r=await ct._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(ot(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await ts(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=aw()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(ot(this.app))return Promise.reject(rn(this));const n=t?yt(t):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&H(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return ot(this.app)?Promise.reject(rn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return ot(this.app)?Promise.reject(rn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(lt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Tw(this),n=new Aw(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new un("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await bw(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&lt(t)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await wn.create(this,[lt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=t.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=t.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=dd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&rw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Os(e){return yt(e)}class Fc{constructor(t){this.auth=t,this.observer=null,this.addObserver=bb(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ko={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ow(e){Ko=e}function Rw(e){return Ko.loadJS(e)}function Pw(){return Ko.gapiScript}function kw(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Nw(e,t){const n=dr(e,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Xr(i,t??{}))return s;st(s,"already-initialized")}return n.initialize({options:t})}function Mw(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(lt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Dw(e,t,n){const r=Os(e);H(r._canInitEmulator,r,"emulator-config-failed"),H(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!1,i=hd(t),{host:o,port:a}=xw(t),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Lw()}function hd(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function xw(e){const t=hd(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Uc(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Uc(o)}}}function Uc(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Lw(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class pd{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return at("not implemented")}_getIdTokenResponse(t){return at("not implemented")}_linkToIdToken(t,n){return at("not implemented")}_getReauthenticationResolver(t){return at("not implemented")}}/**
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
 */async function En(e,t){return uw(e,"POST","/v1/accounts:signInWithIdp",Bo(e,t))}/**
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
 */const Fw="http://localhost";class cn extends pd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new cn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):st("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s}=n,i=Uo(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new cn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return En(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,En(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,En(t,n)}buildRequest(){const t={requestUri:Fw,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=fr(n)}return t}}/**
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
 */class qo{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class gr extends qo{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Rt extends gr{constructor(){super("facebook.com")}static credential(t){return cn._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Rt.credentialFromTaggedObject(t)}static credentialFromError(t){return Rt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Rt.credential(t.oauthAccessToken)}catch{return null}}}Rt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rt.PROVIDER_ID="facebook.com";/**
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
 */class Pt extends gr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return cn._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Pt.credentialFromTaggedObject(t)}static credentialFromError(t){return Pt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Pt.credential(n,r)}catch{return null}}}Pt.GOOGLE_SIGN_IN_METHOD="google.com";Pt.PROVIDER_ID="google.com";/**
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
 */class kt extends gr{constructor(){super("github.com")}static credential(t){return cn._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return kt.credentialFromTaggedObject(t)}static credentialFromError(t){return kt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return kt.credential(t.oauthAccessToken)}catch{return null}}}kt.GITHUB_SIGN_IN_METHOD="github.com";kt.PROVIDER_ID="github.com";/**
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
 */class Nt extends gr{constructor(){super("twitter.com")}static credential(t,n){return cn._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Nt.credentialFromTaggedObject(t)}static credentialFromError(t){return Nt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Nt.credential(n,r)}catch{return null}}}Nt.TWITTER_SIGN_IN_METHOD="twitter.com";Nt.PROVIDER_ID="twitter.com";/**
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
 */class Sn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,s=!1){const i=await ct._fromIdTokenResponse(t,r,s),o=jc(r);return new Sn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const s=jc(r);return new Sn({user:t,providerId:s,_tokenResponse:r,operationType:n})}}function jc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class ns extends mt{constructor(t,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ns.prototype),this.customData={appName:t.name,tenantId:(i=t.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,s){return new ns(t,n,r,s)}}function gd(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ns._fromErrorAndOperation(e,i,t,r):i})}async function Uw(e,t,n=!1){const r=await sr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Sn._forOperation(e,"link",r)}/**
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
 */async function jw(e,t,n=!1){const{auth:r}=e;if(ot(r.app))return Promise.reject(rn(r));const s="reauthenticate";try{const i=await sr(e,gd(r,s,t,e),n);H(i.idToken,r,"internal-error");const o=Ho(i.idToken);H(o,r,"internal-error");const{sub:a}=o;return H(e.uid===a,r,"user-mismatch"),Sn._forOperation(e,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&st(r,"user-mismatch"),i}}/**
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
 */async function $w(e,t,n=!1){if(ot(e.app))return Promise.reject(rn(e));const r="signIn",s=await gd(e,r,t),i=await Sn._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}function Vw(e,t,n,r){return yt(e).onIdTokenChanged(t,n,r)}function Bw(e,t,n){return yt(e).beforeAuthStateChanged(t,n)}function Hw(e,t,n,r){return yt(e).onAuthStateChanged(t,n,r)}function bI(e){return yt(e).signOut()}const rs="__sak";/**
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
 */class md{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(rs,"1"),this.storage.removeItem(rs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Ww(){const e=Ee();return Wo(e)||Cs(e)}const Kw=1e3,qw=10;class yd extends md{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ww()&&Ew(),this.fallbackToPolling=fd(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&t(n,s,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);ww()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,qw):s()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},Kw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}yd.type="LOCAL";const zw=yd;/**
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
 */class _d extends md{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}_d.type="SESSION";const bd=_d;/**
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
 */function Gw(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Rs{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const r=new Rs(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await Gw(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Rs.receivers=[];/**
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
 */function zo(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class Jw{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=zo("",20);s.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const h=f;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(h.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function tt(){return window}function Yw(e){tt().location.href=e}/**
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
 */function vd(){return typeof tt().WorkerGlobalScope<"u"&&typeof tt().importScripts=="function"}async function Xw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Qw(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Zw(){return vd()?self:null}/**
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
 */const wd="firebaseLocalStorageDb",eE=1,ss="firebaseLocalStorage",Ed="fbase_key";class mr{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ps(e,t){return e.transaction([ss],t?"readwrite":"readonly").objectStore(ss)}function tE(){const e=indexedDB.deleteDatabase(wd);return new mr(e).toPromise()}function zi(){const e=indexedDB.open(wd,eE);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(ss,{keyPath:Ed})}catch(s){n(s)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(ss)?t(r):(r.close(),await tE(),t(await zi()))})})}async function $c(e,t,n){const r=Ps(e,!0).put({[Ed]:t,value:n});return new mr(r).toPromise()}async function nE(e,t){const n=Ps(e,!1).get(t),r=await new mr(n).toPromise();return r===void 0?null:r.value}function Vc(e,t){const n=Ps(e,!0).delete(t);return new mr(n).toPromise()}const rE=800,sE=3;class Id{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zi(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>sE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rs._getInstance(Zw()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await Xw(),!this.activeServiceWorker)return;this.sender=new Jw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Qw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await zi();return await $c(t,rs,"1"),await Vc(t,rs),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>$c(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>nE(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vc(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const i=Ps(s,!1).getAll();return new mr(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:s,value:i}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Id.type="LOCAL";const iE=Id;new pr(3e4,6e4);/**
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
 */function Td(e,t){return t?lt(t):(H(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Go extends pd{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return En(t,this._buildIdpRequest())}_linkToIdToken(t,n){return En(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return En(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function oE(e){return $w(e.auth,new Go(e),e.bypassAuthState)}function aE(e){const{auth:t,user:n}=e;return H(n,t,"internal-error"),jw(n,new Go(e),e.bypassAuthState)}async function cE(e){const{auth:t,user:n}=e;return H(n,t,"internal-error"),Uw(n,new Go(e),e.bypassAuthState)}/**
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
 */class Sd{constructor(t,n,r,s,i=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return oE;case"linkViaPopup":case"linkViaRedirect":return cE;case"reauthViaPopup":case"reauthViaRedirect":return aE;default:st(this.auth,"internal-error")}}resolve(t){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const lE=new pr(2e3,1e4);async function vI(e,t,n){if(ot(e.app))return Promise.reject(Ke(e,"operation-not-supported-in-this-environment"));const r=Os(e);sw(e,t,qo);const s=Td(r,n);return new en(r,"signInViaPopup",t,s).executeNotNull()}class en extends Sd{constructor(t,n,r,s,i){super(t,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,en.currentPopupAction&&en.currentPopupAction.cancel(),en.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return H(t,this.auth,"internal-error"),t}async onExecution(){ht(this.filter.length===1,"Popup operations only handle one event");const t=zo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ke(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Ke(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,en.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ke(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,lE.get())};t()}}en.currentPopupAction=null;/**
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
 */const uE="pendingRedirect",jr=new Map;class fE extends Sd{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=jr.get(this.auth._key());if(!t){try{const r=await dE(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}jr.set(this.auth._key(),t)}return this.bypassAuthState||jr.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dE(e,t){const n=gE(t),r=pE(e);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function hE(e,t){jr.set(e._key(),t)}function pE(e){return lt(e._redirectPersistence)}function gE(e){return Ur(uE,e.config.apiKey,e.name)}async function mE(e,t,n=!1){if(ot(e.app))return Promise.reject(rn(e));const r=Os(e),s=Td(r,t),o=await new fE(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const yE=10*60*1e3;class _E{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!bE(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Ad(t)){const s=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ke(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=yE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bc(t))}saveEventToCache(t){this.cachedEventUids.add(Bc(t)),this.lastProcessedEventTime=Date.now()}}function Bc(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Ad({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function bE(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ad(e);default:return!1}}/**
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
 */async function vE(e,t={}){return On(e,"GET","/v1/projects",t)}/**
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
 */const wE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,EE=/^https?/;async function IE(e){if(e.config.emulator)return;const{authorizedDomains:t}=await vE(e);for(const n of t)try{if(TE(n))return}catch{}st(e,"unauthorized-domain")}function TE(e){const t=Ki(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!EE.test(n))return!1;if(wE.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const SE=new pr(3e4,6e4);function Hc(){const e=tt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function AE(e){return new Promise((t,n)=>{var r,s,i;function o(){Hc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Hc(),n(Ke(e,"network-request-failed"))},timeout:SE.get()})}if(!((s=(r=tt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((i=tt().gapi)===null||i===void 0)&&i.load)o();else{const a=kw("iframefcb");return tt()[a]=()=>{gapi.load?o():n(Ke(e,"network-request-failed"))},Rw(`${Pw()}?onload=${a}`).catch(c=>n(c))}}).catch(t=>{throw $r=null,t})}let $r=null;function CE(e){return $r=$r||AE(e),$r}/**
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
 */const OE=new pr(5e3,15e3),RE="__/auth/iframe",PE="emulator/auth/iframe",kE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},NE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ME(e){const t=e.config;H(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Vo(t,PE):`https://${e.config.authDomain}/${RE}`,r={apiKey:t.apiKey,appName:e.name,v:hr},s=NE.get(e.config.apiHost);s&&(r.eid=s);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${fr(r).slice(1)}`}async function DE(e){const t=await CE(e),n=tt().gapi;return H(n,e,"internal-error"),t.open({where:document.body,url:ME(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kE,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ke(e,"network-request-failed"),a=tt().setTimeout(()=>{i(o)},OE.get());function c(){tt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const xE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},LE=500,FE=600,UE="_blank",jE="http://localhost";class Wc{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $E(e,t,n,r=LE,s=FE){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},xE),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Ee().toLowerCase();n&&(a=od(u)?UE:n),id(u)&&(t=t||jE,c.scrollbars="yes");const l=Object.entries(c).reduce((h,[g,y])=>`${h}${g}=${y},`,"");if(vw(u)&&a!=="_self")return VE(t||"",a),new Wc(null);const f=window.open(t||"",a,l);H(f,e,"popup-blocked");try{f.focus()}catch{}return new Wc(f)}function VE(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const BE="__/auth/handler",HE="emulator/auth/handler",WE=encodeURIComponent("fac");async function Kc(e,t,n,r,s,i){H(e.config.authDomain,e,"auth-domain-config-required"),H(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:hr,eventId:s};if(t instanceof qo){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",_b(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[l,f]of Object.entries({}))o[l]=f}if(t instanceof gr){const l=t.getScopes().filter(f=>f!=="");l.length>0&&(o.scopes=l.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const c=await e._getAppCheckToken(),u=c?`#${WE}=${encodeURIComponent(c)}`:"";return`${KE(e)}?${fr(a).slice(1)}${u}`}function KE({config:e}){return e.emulator?Vo(e,HE):`https://${e.authDomain}/${BE}`}/**
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
 */const ui="webStorageSupport";class qE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bd,this._completeRedirectFn=mE,this._overrideRedirectResult=hE}async _openPopup(t,n,r,s){var i;ht((i=this.eventManagers[t._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Kc(t,n,r,Ki(),s);return $E(t,o,zo())}async _openRedirect(t,n,r,s){await this._originValidation(t);const i=await Kc(t,n,r,Ki(),s);return Yw(i),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ht(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await DE(t),r=new _E(t);return n.register("authEvent",s=>(H(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(ui,{type:ui},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ui];o!==void 0&&n(!!o),st(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=IE(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return fd()||Wo()||Cs()}}const zE=qE;var qc="@firebase/auth",zc="1.7.4";/**
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
 */class GE{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function JE(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function YE(e){dt(new rt("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dd(e)},u=new Cw(r,s,i,c);return Mw(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),dt(new rt("auth-internal",t=>{const n=Os(t.getProvider("auth").getImmediate());return(r=>new GE(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),et(qc,zc,JE(e)),et(qc,zc,"esm2017")}/**
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
 */const XE=5*60,QE=yf("authIdTokenMaxAge")||XE;let Gc=null;const ZE=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>QE)return;const s=n==null?void 0:n.token;Gc!==s&&(Gc=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function eI(e=Tf()){const t=dr(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Nw(e,{popupRedirectResolver:zE,persistence:[iE,zw,bd]}),r=yf("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=ZE(i.toString());Bw(n,o,()=>o(n.currentUser)),Vw(n,a=>o(a))}}const s=gf("auth");return s&&Dw(n,`http://${s}`),n}function tI(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}Ow({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=s=>{const i=Ke("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",tI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});YE("Browser");const Cd=sm({history:wg("/"),routes:[{path:"/home",name:"home",component:()=>Nn(()=>import("./home-BMuCC0hN.js"),__vite__mapDeps([0,1,2,3,4])),props:!0,meta:{requiresAuth:!0},children:[{path:"/chefs",name:"chefs",component:()=>Nn(()=>import("./allChefs-CP1YjLm0.js"),__vite__mapDeps([5,3,1,2,4]))},{path:"/yourChats",name:"yourChats",component:()=>Nn(()=>import("./yourChats-CICeqBSs.js"),__vite__mapDeps([6,3,1,2,4]))}]},{path:"/",name:"login",component:()=>Nn(()=>import("./login-DLYE6tBy.js"),__vite__mapDeps([7,1,2]))},{path:"/crud",name:"crud",component:()=>Nn(()=>import("./crud-DNjFYMbk.js"),__vite__mapDeps([8,2]))}]}),nI=()=>new Promise((e,t)=>{const n=Hw(eI(),r=>{n(),e(r)},t)});Cd.beforeEach(async(e,t,n)=>{e.matched.some(r=>r.meta.requiresAuth)?await nI()?n():(console.log("You dont have access!"),n("/")):n()});const rI={apiKey:"AIzaSyDFqqFcvC3WWQMGp_q00Y6BQ5y7uQpRrUg",authDomain:"recipe-2bcd4.firebaseapp.com",projectId:"recipe-2bcd4",storageBucket:"recipe-2bcd4.appspot.com",messagingSenderId:"214051528054",appId:"1:214051528054:web:9eb82bd7f5212581d36e57",measurementId:"G-4E17212C1W"},sI=If(rI);Z0(sI);const Jo=eg(om);Jo.use(eb);Jo.use(Cd);Jo.mount("#app");export{yt as A,dr as B,rt as C,mI as D,Tf as E,Ye as F,yI as G,mt as H,lo as I,gI as J,El as K,ds as L,or as M,Pt as N,vI as O,bI as P,vf as Q,ae as R,hr as S,su as T,_I as U,Ee as V,dt as _,eu as a,Re as b,uI as c,fI as d,Ue as e,hp as f,eI as g,pI as h,cI as i,lI as j,dI as k,Ql as l,pt as m,Zi as n,Yl as o,uo as p,_e as q,oI as r,ke as s,iI as t,De as u,hI as v,we as w,vh as x,aI as y,et as z};
