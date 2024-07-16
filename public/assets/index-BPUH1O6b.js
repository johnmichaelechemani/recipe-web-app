const __vite__fileDeps=["assets/home-DK-y3Pyo.js","assets/iconify-DlN6m1Cd.js","assets/_plugin-vue_export-helper-AFu1rJK7.js","assets/home-D-_ZmQkB.css","assets/allChefs-BY8mGK5z.js","assets/getUsers-CZo5MH6X.js","assets/yourChats-2dD9akCY.js","assets/login-CUApq2zb.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Mi(e,t){const n=new Set(e.split(","));return r=>n.has(r)}const se={},cn=[],ke=()=>{},rd=()=>!1,Jr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),xi=e=>e.startsWith("onUpdate:"),he=Object.assign,Di=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},sd=Object.prototype.hasOwnProperty,G=(e,t)=>sd.call(e,t),V=Array.isArray,ln=e=>Yr(e)==="[object Map]",Cc=e=>Yr(e)==="[object Set]",H=e=>typeof e=="function",ue=e=>typeof e=="string",en=e=>typeof e=="symbol",oe=e=>e!==null&&typeof e=="object",Rc=e=>(oe(e)||H(e))&&H(e.then)&&H(e.catch),Pc=Object.prototype.toString,Yr=e=>Pc.call(e),id=e=>Yr(e).slice(8,-1),kc=e=>Yr(e)==="[object Object]",Li=e=>ue(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,An=Mi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},od=/-(\w)/g,Xe=Xr(e=>e.replace(od,(t,n)=>n?n.toUpperCase():"")),ad=/\B([A-Z])/g,bn=Xr(e=>e.replace(ad,"-$1").toLowerCase()),Qr=Xr(e=>e.charAt(0).toUpperCase()+e.slice(1)),vs=Xr(e=>e?`on${Qr(e)}`:""),Nt=(e,t)=>!Object.is(e,t),yr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Nc=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Qs=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let jo;const Mc=()=>jo||(jo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ui(e){if(V(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=ue(r)?fd(r):Ui(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(ue(e)||oe(e))return e}const cd=/;(?![^(]*\))/g,ld=/:([^]+)/,ud=/\/\*[^]*?\*\//g;function fd(e){const t={};return e.replace(ud,"").split(cd).forEach(n=>{if(n){const r=n.split(ld);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Fi(e){let t="";if(ue(e))t=e;else if(V(e))for(let n=0;n<e.length;n++){const r=Fi(e[n]);r&&(t+=r+" ")}else if(oe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const dd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",hd=Mi(dd);function xc(e){return!!e||e===""}const OI=e=>ue(e)?e:e==null?"":V(e)||oe(e)&&(e.toString===Pc||!H(e.toString))?JSON.stringify(e,Dc,2):String(e),Dc=(e,t)=>t&&t.__v_isRef?Dc(e,t.value):ln(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[ws(r,i)+" =>"]=s,n),{})}:Cc(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>ws(n))}:en(t)?ws(t):oe(t)&&!V(t)&&!kc(t)?String(t):t,ws=(e,t="")=>{var n;return en(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Re;class pd{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Re,!t&&Re&&(this.index=(Re.scopes||(Re.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Re;try{return Re=this,t()}finally{Re=n}}}on(){Re=this}off(){Re=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function gd(e,t=Re){t&&t.active&&t.effects.push(e)}function Lc(){return Re}function md(e){Re&&Re.cleanups.push(e)}let qt;class ji{constructor(t,n,r,s){this.fn=t,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,gd(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Mt();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(yd(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),xt()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=Rt,n=qt;try{return Rt=!0,qt=this,this._runnings++,$o(this),this.fn()}finally{Vo(this),this._runnings--,qt=n,Rt=t}}stop(){this.active&&($o(this),Vo(this),this.onStop&&this.onStop(),this.active=!1)}}function yd(e){return e.value}function $o(e){e._trackId++,e._depsLength=0}function Vo(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)Uc(e.deps[t],e);e.deps.length=e._depsLength}}function Uc(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let Rt=!0,Zs=0;const Fc=[];function Mt(){Fc.push(Rt),Rt=!1}function xt(){const e=Fc.pop();Rt=e===void 0?!0:e}function $i(){Zs++}function Vi(){for(Zs--;!Zs&&ei.length;)ei.shift()()}function jc(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&Uc(r,e),e.deps[e._depsLength++]=t):e._depsLength++}}const ei=[];function $c(e,t,n){$i();for(const r of e.keys()){let s;r._dirtyLevel<t&&(s??(s=e.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=t),r._shouldSchedule&&(s??(s=e.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&ei.push(r.scheduler)))}Vi()}const Vc=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},ti=new WeakMap,zt=Symbol(""),ni=Symbol("");function Ae(e,t,n){if(Rt&&qt){let r=ti.get(e);r||ti.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=Vc(()=>r.delete(n))),jc(qt,s)}}function ot(e,t,n,r,s,i){const o=ti.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&V(e)){const c=Number(r);o.forEach((u,l)=>{(l==="length"||!en(l)&&l>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":V(e)?Li(n)&&a.push(o.get("length")):(a.push(o.get(zt)),ln(e)&&a.push(o.get(ni)));break;case"delete":V(e)||(a.push(o.get(zt)),ln(e)&&a.push(o.get(ni)));break;case"set":ln(e)&&a.push(o.get(zt));break}$i();for(const c of a)c&&$c(c,4);Vi()}const _d=Mi("__proto__,__v_isRef,__isVue"),Bc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(en)),Bo=bd();function bd(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=J(this);for(let i=0,o=this.length;i<o;i++)Ae(r,"get",i+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(J)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Mt(),$i();const r=J(this)[t].apply(this,n);return Vi(),xt(),r}}),e}function vd(e){en(e)||(e=String(e));const t=J(this);return Ae(t,"has",e),t.hasOwnProperty(e)}class Hc{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Md:zc:i?qc:Kc).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=V(t);if(!s){if(o&&G(Bo,n))return Reflect.get(Bo,n,r);if(n==="hasOwnProperty")return vd}const a=Reflect.get(t,n,r);return(en(n)?Bc.has(n):_d(n))||(s||Ae(t,"get",n),i)?a:Oe(a)?o&&Li(n)?a:a.value:oe(a)?s?Gc(a):ut(a):a}}class Wc extends Hc{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(!this._isShallow){const c=Fn(i);if(!kr(r)&&!Fn(r)&&(i=J(i),r=J(r)),!V(t)&&Oe(i)&&!Oe(r))return c?!1:(i.value=r,!0)}const o=V(t)&&Li(n)?Number(n)<t.length:G(t,n),a=Reflect.set(t,n,r,s);return t===J(s)&&(o?Nt(r,i)&&ot(t,"set",n,r):ot(t,"add",n,r)),a}deleteProperty(t,n){const r=G(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&ot(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!en(n)||!Bc.has(n))&&Ae(t,"has",n),r}ownKeys(t){return Ae(t,"iterate",V(t)?"length":zt),Reflect.ownKeys(t)}}class wd extends Hc{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Id=new Wc,Ed=new wd,Sd=new Wc(!0);const Bi=e=>e,Zr=e=>Reflect.getPrototypeOf(e);function ar(e,t,n=!1,r=!1){e=e.__v_raw;const s=J(e),i=J(t);n||(Nt(t,i)&&Ae(s,"get",t),Ae(s,"get",i));const{has:o}=Zr(s),a=r?Bi:n?Ki:jn;if(o.call(s,t))return a(e.get(t));if(o.call(s,i))return a(e.get(i));e!==s&&e.get(t)}function cr(e,t=!1){const n=this.__v_raw,r=J(n),s=J(e);return t||(Nt(e,s)&&Ae(r,"has",e),Ae(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function lr(e,t=!1){return e=e.__v_raw,!t&&Ae(J(e),"iterate",zt),Reflect.get(e,"size",e)}function Ho(e){e=J(e);const t=J(this);return Zr(t).has.call(t,e)||(t.add(e),ot(t,"add",e,e)),this}function Wo(e,t){t=J(t);const n=J(this),{has:r,get:s}=Zr(n);let i=r.call(n,e);i||(e=J(e),i=r.call(n,e));const o=s.call(n,e);return n.set(e,t),i?Nt(t,o)&&ot(n,"set",e,t):ot(n,"add",e,t),this}function Ko(e){const t=J(this),{has:n,get:r}=Zr(t);let s=n.call(t,e);s||(e=J(e),s=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return s&&ot(t,"delete",e,void 0),i}function qo(){const e=J(this),t=e.size!==0,n=e.clear();return t&&ot(e,"clear",void 0,void 0),n}function ur(e,t){return function(r,s){const i=this,o=i.__v_raw,a=J(o),c=t?Bi:e?Ki:jn;return!e&&Ae(a,"iterate",zt),o.forEach((u,l)=>r.call(s,c(u),c(l),i))}}function fr(e,t,n){return function(...r){const s=this.__v_raw,i=J(s),o=ln(i),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,u=s[e](...r),l=n?Bi:t?Ki:jn;return!t&&Ae(i,"iterate",c?ni:zt),{next(){const{value:f,done:h}=u.next();return h?{value:f,done:h}:{value:a?[l(f[0]),l(f[1])]:l(f),done:h}},[Symbol.iterator](){return this}}}}function mt(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Td(){const e={get(i){return ar(this,i)},get size(){return lr(this)},has:cr,add:Ho,set:Wo,delete:Ko,clear:qo,forEach:ur(!1,!1)},t={get(i){return ar(this,i,!1,!0)},get size(){return lr(this)},has:cr,add:Ho,set:Wo,delete:Ko,clear:qo,forEach:ur(!1,!0)},n={get(i){return ar(this,i,!0)},get size(){return lr(this,!0)},has(i){return cr.call(this,i,!0)},add:mt("add"),set:mt("set"),delete:mt("delete"),clear:mt("clear"),forEach:ur(!0,!1)},r={get(i){return ar(this,i,!0,!0)},get size(){return lr(this,!0)},has(i){return cr.call(this,i,!0)},add:mt("add"),set:mt("set"),delete:mt("delete"),clear:mt("clear"),forEach:ur(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=fr(i,!1,!1),n[i]=fr(i,!0,!1),t[i]=fr(i,!1,!0),r[i]=fr(i,!0,!0)}),[e,n,t,r]}const[Ad,Od,Cd,Rd]=Td();function Hi(e,t){const n=t?e?Rd:Cd:e?Od:Ad;return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(G(n,s)&&s in r?n:r,s,i)}const Pd={get:Hi(!1,!1)},kd={get:Hi(!1,!0)},Nd={get:Hi(!0,!1)};const Kc=new WeakMap,qc=new WeakMap,zc=new WeakMap,Md=new WeakMap;function xd(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Dd(e){return e.__v_skip||!Object.isExtensible(e)?0:xd(id(e))}function ut(e){return Fn(e)?e:Wi(e,!1,Id,Pd,Kc)}function Ld(e){return Wi(e,!1,Sd,kd,qc)}function Gc(e){return Wi(e,!0,Ed,Nd,zc)}function Wi(e,t,n,r,s){if(!oe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const o=Dd(e);if(o===0)return e;const a=new Proxy(e,o===2?r:n);return s.set(e,a),a}function On(e){return Fn(e)?On(e.__v_raw):!!(e&&e.__v_isReactive)}function Fn(e){return!!(e&&e.__v_isReadonly)}function kr(e){return!!(e&&e.__v_isShallow)}function Jc(e){return e?!!e.__v_raw:!1}function J(e){const t=e&&e.__v_raw;return t?J(t):e}function Ud(e){return Object.isExtensible(e)&&Nc(e,"__v_skip",!0),e}const jn=e=>oe(e)?ut(e):e,Ki=e=>oe(e)?Gc(e):e;class Yc{constructor(t,n,r,s){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new ji(()=>t(this._value),()=>_r(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const t=J(this);return(!t._cacheable||t.effect.dirty)&&Nt(t._value,t._value=t.effect.run())&&_r(t,4),Xc(t),t.effect._dirtyLevel>=2&&_r(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function Fd(e,t,n=!1){let r,s;const i=H(e);return i?(r=e,s=ke):(r=e.get,s=e.set),new Yc(r,s,i||!s,n)}function Xc(e){var t;Rt&&qt&&(e=J(e),jc(qt,(t=e.dep)!=null?t:e.dep=Vc(()=>e.dep=void 0,e instanceof Yc?e:void 0)))}function _r(e,t=4,n){e=J(e);const r=e.dep;r&&$c(r,t)}function Oe(e){return!!(e&&e.__v_isRef===!0)}function Ne(e){return Qc(e,!1)}function jd(e){return Qc(e,!0)}function Qc(e,t){return Oe(e)?e:new $d(e,t)}class $d{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:J(t),this._value=n?t:jn(t)}get value(){return Xc(this),this._value}set value(t){const n=this.__v_isShallow||kr(t)||Fn(t);t=n?t:J(t),Nt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:jn(t),_r(this,4))}}function Pe(e){return Oe(e)?e.value:e}const Vd={get:(e,t,n)=>Pe(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return Oe(s)&&!Oe(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Zc(e){return On(e)?e:new Proxy(e,Vd)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Pt(e,t,n,r){try{return r?e(...r):e()}catch(s){es(s,t,n)}}function Fe(e,t,n,r){if(H(e)){const s=Pt(e,t,n,r);return s&&Rc(s)&&s.catch(i=>{es(i,t,n)}),s}if(V(e)){const s=[];for(let i=0;i<e.length;i++)s.push(Fe(e[i],t,n,r));return s}}function es(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](e,o,a)===!1)return}i=i.parent}const c=t.appContext.config.errorHandler;if(c){Mt(),Pt(c,null,10,[e,o,a]),xt();return}}Bd(e,n,s,r)}function Bd(e,t,n,r=!0){console.error(e)}let $n=!1,ri=!1;const ge=[];let ze=0;const un=[];let vt=null,Vt=0;const el=Promise.resolve();let qi=null;function tl(e){const t=qi||el;return e?t.then(this?e.bind(this):e):t}function Hd(e){let t=ze+1,n=ge.length;for(;t<n;){const r=t+n>>>1,s=ge[r],i=Vn(s);i<e||i===e&&s.pre?t=r+1:n=r}return t}function zi(e){(!ge.length||!ge.includes(e,$n&&e.allowRecurse?ze+1:ze))&&(e.id==null?ge.push(e):ge.splice(Hd(e.id),0,e),nl())}function nl(){!$n&&!ri&&(ri=!0,qi=el.then(sl))}function Wd(e){const t=ge.indexOf(e);t>ze&&ge.splice(t,1)}function Kd(e){V(e)?un.push(...e):(!vt||!vt.includes(e,e.allowRecurse?Vt+1:Vt))&&un.push(e),nl()}function zo(e,t,n=$n?ze+1:0){for(;n<ge.length;n++){const r=ge[n];if(r&&r.pre){if(e&&r.id!==e.uid)continue;ge.splice(n,1),n--,r()}}}function rl(e){if(un.length){const t=[...new Set(un)].sort((n,r)=>Vn(n)-Vn(r));if(un.length=0,vt){vt.push(...t);return}for(vt=t,Vt=0;Vt<vt.length;Vt++)vt[Vt]();vt=null,Vt=0}}const Vn=e=>e.id==null?1/0:e.id,qd=(e,t)=>{const n=Vn(e)-Vn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function sl(e){ri=!1,$n=!0,ge.sort(qd);try{for(ze=0;ze<ge.length;ze++){const t=ge[ze];t&&t.active!==!1&&Pt(t,null,14)}}finally{ze=0,ge.length=0,rl(),$n=!1,qi=null,(ge.length||un.length)&&sl()}}function zd(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||se;let s=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=r[l]||se;h&&(s=n.map(m=>ue(m)?m.trim():m)),f&&(s=n.map(Qs))}let a,c=r[a=vs(t)]||r[a=vs(Xe(t))];!c&&i&&(c=r[a=vs(bn(t))]),c&&Fe(c,e,6,s);const u=r[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Fe(u,e,6,s)}}function il(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},a=!1;if(!H(e)){const c=u=>{const l=il(u,t,!0);l&&(a=!0,he(o,l))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(oe(e)&&r.set(e,null),null):(V(i)?i.forEach(c=>o[c]=null):he(o,i),oe(e)&&r.set(e,o),o)}function ts(e,t){return!e||!Jr(t)?!1:(t=t.slice(2).replace(/Once$/,""),G(e,t[0].toLowerCase()+t.slice(1))||G(e,bn(t))||G(e,t))}let be=null,ol=null;function Nr(e){const t=be;return be=e,ol=e&&e.type.__scopeId||null,t}function Gd(e,t=be,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&sa(-1);const i=Nr(t);let o;try{o=e(...s)}finally{Nr(i),r._d&&sa(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Is(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:u,renderCache:l,props:f,data:h,setupState:m,ctx:y,inheritAttrs:C}=e,x=Nr(e);let A,O;try{if(n.shapeFlag&4){const M=s||r,j=M;A=qe(u.call(j,M,l,f,m,h,y)),O=a}else{const M=t;A=qe(M.length>1?M(f,{attrs:a,slots:o,emit:c}):M(f,null)),O=t.props?a:Jd(a)}}catch(M){Pn.length=0,es(M,e,1),A=Te(Jt)}let I=A;if(O&&C!==!1){const M=Object.keys(O),{shapeFlag:j}=I;M.length&&j&7&&(i&&M.some(xi)&&(O=Yd(O,i)),I=gn(I,O,!1,!0))}return n.dirs&&(I=gn(I,null,!1,!0),I.dirs=I.dirs?I.dirs.concat(n.dirs):n.dirs),n.transition&&(I.transition=n.transition),A=I,Nr(x),A}const Jd=e=>{let t;for(const n in e)(n==="class"||n==="style"||Jr(n))&&((t||(t={}))[n]=e[n]);return t},Yd=(e,t)=>{const n={};for(const r in e)(!xi(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Xd(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:c}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Go(r,o,u):!!o;if(c&8){const l=t.dynamicProps;for(let f=0;f<l.length;f++){const h=l[f];if(o[h]!==r[h]&&!ts(u,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Go(r,o,u):!0:!!o;return!1}function Go(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!ts(n,i))return!0}return!1}function Qd({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const al="components",Zd="directives";function CI(e,t){return cl(al,e,!0,t)||e}const eh=Symbol.for("v-ndc");function RI(e){return cl(Zd,e)}function cl(e,t,n=!0,r=!1){const s=be||pe;if(s){const i=s.type;if(e===al){const a=zh(i,!1);if(a&&(a===t||a===Xe(t)||a===Qr(Xe(t))))return i}const o=Jo(s[e]||i[e],t)||Jo(s.appContext[e],t);return!o&&r?i:o}}function Jo(e,t){return e&&(e[t]||e[Xe(t)]||e[Qr(Xe(t))])}const th=e=>e.__isSuspense;function nh(e,t){t&&t.pendingBranch?V(e)?t.effects.push(...e):t.effects.push(e):Kd(e)}const rh=Symbol.for("v-scx"),sh=()=>Ge(rh),dr={};function me(e,t,n){return ll(e,t,n)}function ll(e,t,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=se){if(t&&i){const D=t;t=(...Y)=>{D(...Y),j()}}const c=pe,u=D=>r===!0?D:Bt(D,r===!1?1:void 0);let l,f=!1,h=!1;if(Oe(e)?(l=()=>e.value,f=kr(e)):On(e)?(l=()=>u(e),f=!0):V(e)?(h=!0,f=e.some(D=>On(D)||kr(D)),l=()=>e.map(D=>{if(Oe(D))return D.value;if(On(D))return u(D);if(H(D))return Pt(D,c,2)})):H(e)?t?l=()=>Pt(e,c,2):l=()=>(m&&m(),Fe(e,c,3,[y])):l=ke,t&&r){const D=l;l=()=>Bt(D())}let m,y=D=>{m=I.onStop=()=>{Pt(D,c,4),m=I.onStop=void 0}},C;if(is)if(y=ke,t?n&&Fe(t,c,3,[l(),h?[]:void 0,y]):l(),s==="sync"){const D=sh();C=D.__watcherHandles||(D.__watcherHandles=[])}else return ke;let x=h?new Array(e.length).fill(dr):dr;const A=()=>{if(!(!I.active||!I.dirty))if(t){const D=I.run();(r||f||(h?D.some((Y,ce)=>Nt(Y,x[ce])):Nt(D,x)))&&(m&&m(),Fe(t,c,3,[D,x===dr?void 0:h&&x[0]===dr?[]:x,y]),x=D)}else I.run()};A.allowRecurse=!!t;let O;s==="sync"?O=A:s==="post"?O=()=>Ee(A,c&&c.suspense):(A.pre=!0,c&&(A.id=c.uid),O=()=>zi(A));const I=new ji(l,ke,O),M=Lc(),j=()=>{I.stop(),M&&Di(M.effects,I)};return t?n?A():x=I.run():s==="post"?Ee(I.run.bind(I),c&&c.suspense):I.run(),C&&C.push(j),j}function ih(e,t,n){const r=this.proxy,s=ue(e)?e.includes(".")?ul(r,e):()=>r[e]:e.bind(r,r);let i;H(t)?i=t:(i=t.handler,n=t);const o=Yn(this),a=ll(s,i.bind(r),n);return o(),a}function ul(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Bt(e,t=1/0,n){if(t<=0||!oe(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,Oe(e))Bt(e.value,t,n);else if(V(e))for(let r=0;r<e.length;r++)Bt(e[r],t,n);else if(Cc(e)||ln(e))e.forEach(r=>{Bt(r,t,n)});else if(kc(e))for(const r in e)Bt(e[r],t,n);return e}function PI(e,t){if(be===null)return e;const n=os(be)||be.proxy,r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,o,a,c=se]=t[s];i&&(H(i)&&(i={mounted:i,updated:i}),i.deep&&Bt(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return e}function Lt(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Mt(),Fe(c,n,8,[e.el,a,e,t]),xt())}}/*! #__NO_SIDE_EFFECTS__ */function ns(e,t){return H(e)?he({name:e.name},t,{setup:e}):e}const br=e=>!!e.type.__asyncLoader,fl=e=>e.type.__isKeepAlive;function oh(e,t){dl(e,"a",t)}function ah(e,t){dl(e,"da",t)}function dl(e,t,n=pe){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(rs(t,r,n),n){let s=n.parent;for(;s&&s.parent;)fl(s.parent.vnode)&&ch(r,t,n,s),s=s.parent}}function ch(e,t,n,r){const s=rs(t,e,r,!0);Gi(()=>{Di(r[t],s)},n)}function rs(e,t,n=pe,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Mt();const a=Yn(n),c=Fe(t,n,e,o);return a(),xt(),c});return r?s.unshift(i):s.push(i),i}}const ft=e=>(t,n=pe)=>(!is||e==="sp")&&rs(e,(...r)=>t(...r),n),lh=ft("bm"),hl=ft("m"),uh=ft("bu"),fh=ft("u"),dh=ft("bum"),Gi=ft("um"),hh=ft("sp"),ph=ft("rtg"),gh=ft("rtc");function mh(e,t=pe){rs("ec",e,t)}function kI(e,t,n,r){let s;const i=n;if(V(e)||ue(e)){s=new Array(e.length);for(let o=0,a=e.length;o<a;o++)s[o]=t(e[o],o,void 0,i)}else if(typeof e=="number"){s=new Array(e);for(let o=0;o<e;o++)s[o]=t(o+1,o,void 0,i)}else if(oe(e))if(e[Symbol.iterator])s=Array.from(e,(o,a)=>t(o,a,void 0,i));else{const o=Object.keys(e);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];s[a]=t(e[u],u,a,i)}}else s=[];return s}const si=e=>e?Nl(e)?os(e)||e.proxy:si(e.parent):null,Cn=he(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>si(e.parent),$root:e=>si(e.root),$emit:e=>e.emit,$options:e=>Ji(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,zi(e.update)}),$nextTick:e=>e.n||(e.n=tl.bind(e.proxy)),$watch:e=>ih.bind(e)}),Es=(e,t)=>e!==se&&!e.__isScriptSetup&&G(e,t),yh={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=e;let u;if(t[0]!=="$"){const m=o[t];if(m!==void 0)switch(m){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(Es(r,t))return o[t]=1,r[t];if(s!==se&&G(s,t))return o[t]=2,s[t];if((u=e.propsOptions[0])&&G(u,t))return o[t]=3,i[t];if(n!==se&&G(n,t))return o[t]=4,n[t];ii&&(o[t]=0)}}const l=Cn[t];let f,h;if(l)return t==="$attrs"&&Ae(e.attrs,"get",""),l(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==se&&G(n,t))return o[t]=4,n[t];if(h=c.config.globalProperties,G(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return Es(s,t)?(s[t]=n,!0):r!==se&&G(r,t)?(r[t]=n,!0):G(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||e!==se&&G(e,o)||Es(t,o)||(a=i[0])&&G(a,o)||G(r,o)||G(Cn,o)||G(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:G(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function pl(){return _h().slots}function _h(){const e=Qi();return e.setupContext||(e.setupContext=xl(e))}function Yo(e){return V(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ii=!0;function bh(e){const t=Ji(e),n=e.proxy,r=e.ctx;ii=!1,t.beforeCreate&&Xo(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:f,mounted:h,beforeUpdate:m,updated:y,activated:C,deactivated:x,beforeDestroy:A,beforeUnmount:O,destroyed:I,unmounted:M,render:j,renderTracked:D,renderTriggered:Y,errorCaptured:ce,serverPrefetch:le,expose:we,inheritAttrs:$e,components:Ve,directives:pt,filters:Me}=t;if(u&&vh(u,r,null),o)for(const Z in o){const X=o[Z];H(X)&&(r[Z]=X.bind(n))}if(s){const Z=s.call(n,n);oe(Z)&&(e.data=ut(Z))}if(ii=!0,i)for(const Z in i){const X=i[Z],xe=H(X)?X.bind(n,n):H(X.get)?X.get.bind(n,n):ke,Dt=!H(X)&&H(X.set)?X.set.bind(n):ke,De=de({get:xe,set:Dt});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>De.value,set:Ie=>De.value=Ie})}if(a)for(const Z in a)gl(a[Z],r,n,Z);if(c){const Z=H(c)?c.call(n):c;Reflect.ownKeys(Z).forEach(X=>{vr(X,Z[X])})}l&&Xo(l,e,"c");function ae(Z,X){V(X)?X.forEach(xe=>Z(xe.bind(n))):X&&Z(X.bind(n))}if(ae(lh,f),ae(hl,h),ae(uh,m),ae(fh,y),ae(oh,C),ae(ah,x),ae(mh,ce),ae(gh,D),ae(ph,Y),ae(dh,O),ae(Gi,M),ae(hh,le),V(we))if(we.length){const Z=e.exposed||(e.exposed={});we.forEach(X=>{Object.defineProperty(Z,X,{get:()=>n[X],set:xe=>n[X]=xe})})}else e.exposed||(e.exposed={});j&&e.render===ke&&(e.render=j),$e!=null&&(e.inheritAttrs=$e),Ve&&(e.components=Ve),pt&&(e.directives=pt)}function vh(e,t,n=ke){V(e)&&(e=oi(e));for(const r in e){const s=e[r];let i;oe(s)?"default"in s?i=Ge(s.from||r,s.default,!0):i=Ge(s.from||r):i=Ge(s),Oe(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function Xo(e,t,n){Fe(V(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function gl(e,t,n,r){const s=r.includes(".")?ul(n,r):()=>n[r];if(ue(e)){const i=t[e];H(i)&&me(s,i)}else if(H(e))me(s,e.bind(n));else if(oe(e))if(V(e))e.forEach(i=>gl(i,t,n,r));else{const i=H(e.handler)?e.handler.bind(n):t[e.handler];H(i)&&me(s,i,e)}}function Ji(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(u=>Mr(c,u,o,!0)),Mr(c,t,o)),oe(t)&&i.set(t,c),c}function Mr(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Mr(e,i,n,!0),s&&s.forEach(o=>Mr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=wh[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const wh={data:Qo,props:Zo,emits:Zo,methods:Tn,computed:Tn,beforeCreate:_e,created:_e,beforeMount:_e,mounted:_e,beforeUpdate:_e,updated:_e,beforeDestroy:_e,beforeUnmount:_e,destroyed:_e,unmounted:_e,activated:_e,deactivated:_e,errorCaptured:_e,serverPrefetch:_e,components:Tn,directives:Tn,watch:Eh,provide:Qo,inject:Ih};function Qo(e,t){return t?e?function(){return he(H(e)?e.call(this,this):e,H(t)?t.call(this,this):t)}:t:e}function Ih(e,t){return Tn(oi(e),oi(t))}function oi(e){if(V(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function _e(e,t){return e?[...new Set([].concat(e,t))]:t}function Tn(e,t){return e?he(Object.create(null),e,t):t}function Zo(e,t){return e?V(e)&&V(t)?[...new Set([...e,...t])]:he(Object.create(null),Yo(e),Yo(t??{})):t}function Eh(e,t){if(!e)return t;if(!t)return e;const n=he(Object.create(null),e);for(const r in t)n[r]=_e(e[r],t[r]);return n}function ml(){return{app:null,config:{isNativeTag:rd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Sh=0;function Th(e,t){return function(r,s=null){H(r)||(r=he({},r)),s!=null&&!oe(s)&&(s=null);const i=ml(),o=new WeakSet;let a=!1;const c=i.app={_uid:Sh++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Jh,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&H(u.install)?(o.add(u),u.install(c,...l)):H(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,f){if(!a){const h=Te(r,s);return h.appContext=i,f===!0?f="svg":f===!1&&(f=void 0),l&&t?t(h,u):e(h,u,f),a=!0,c._container=u,u.__vue_app__=c,os(h.component)||h.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c},runWithContext(u){const l=Rn;Rn=c;try{return u()}finally{Rn=l}}};return c}}let Rn=null;function vr(e,t){if(pe){let n=pe.provides;const r=pe.parent&&pe.parent.provides;r===n&&(n=pe.provides=Object.create(r)),n[e]=t}}function Ge(e,t,n=!1){const r=pe||be;if(r||Rn){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Rn._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&H(t)?t.call(r&&r.proxy):t}}const yl={},_l=()=>Object.create(yl),bl=e=>Object.getPrototypeOf(e)===yl;function Ah(e,t,n,r=!1){const s={},i=_l();e.propsDefaults=Object.create(null),vl(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:Ld(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function Oh(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,a=J(s),[c]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const l=e.vnode.dynamicProps;for(let f=0;f<l.length;f++){let h=l[f];if(ts(e.emitsOptions,h))continue;const m=t[h];if(c)if(G(i,h))m!==i[h]&&(i[h]=m,u=!0);else{const y=Xe(h);s[y]=ai(c,a,y,m,e,!1)}else m!==i[h]&&(i[h]=m,u=!0)}}}else{vl(e,t,s,i)&&(u=!0);let l;for(const f in a)(!t||!G(t,f)&&((l=bn(f))===f||!G(t,l)))&&(c?n&&(n[f]!==void 0||n[l]!==void 0)&&(s[f]=ai(c,a,f,void 0,e,!0)):delete s[f]);if(i!==a)for(const f in i)(!t||!G(t,f))&&(delete i[f],u=!0)}u&&ot(e.attrs,"set","")}function vl(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(An(c))continue;const u=t[c];let l;s&&G(s,l=Xe(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:ts(e.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=J(n),u=a||se;for(let l=0;l<i.length;l++){const f=i[l];n[f]=ai(s,c,f,u[f],e,!G(u,f))}}return o}function ai(e,t,n,r,s,i){const o=e[n];if(o!=null){const a=G(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&H(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const l=Yn(s);r=u[n]=c.call(null,t),l()}}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===bn(n))&&(r=!0))}return r}function wl(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},a=[];let c=!1;if(!H(e)){const l=f=>{c=!0;const[h,m]=wl(f,t,!0);he(o,h),m&&a.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}if(!i&&!c)return oe(e)&&r.set(e,cn),cn;if(V(i))for(let l=0;l<i.length;l++){const f=Xe(i[l]);ea(f)&&(o[f]=se)}else if(i)for(const l in i){const f=Xe(l);if(ea(f)){const h=i[l],m=o[f]=V(h)||H(h)?{type:h}:he({},h);if(m){const y=ra(Boolean,m.type),C=ra(String,m.type);m[0]=y>-1,m[1]=C<0||y<C,(y>-1||G(m,"default"))&&a.push(f)}}}const u=[o,a];return oe(e)&&r.set(e,u),u}function ea(e){return e[0]!=="$"&&!An(e)}function ta(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function na(e,t){return ta(e)===ta(t)}function ra(e,t){return V(t)?t.findIndex(n=>na(n,e)):H(t)&&na(t,e)?0:-1}const Il=e=>e[0]==="_"||e==="$stable",Yi=e=>V(e)?e.map(qe):[qe(e)],Ch=(e,t,n)=>{if(t._n)return t;const r=Gd((...s)=>Yi(t(...s)),n);return r._c=!1,r},El=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Il(s))continue;const i=e[s];if(H(i))t[s]=Ch(s,i,r);else if(i!=null){const o=Yi(i);t[s]=()=>o}}},Sl=(e,t)=>{const n=Yi(t);e.slots.default=()=>n},Rh=(e,t)=>{const n=e.slots=_l();if(e.vnode.shapeFlag&32){const r=t._;r?(he(n,t),Nc(n,"_",r,!0)):El(t,n)}else t&&Sl(e,t)},Ph=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=se;if(r.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:(he(s,t),!n&&a===1&&delete s._):(i=!t.$stable,El(t,s)),o=t}else t&&(Sl(e,t),o={default:1});if(i)for(const a in s)!Il(a)&&o[a]==null&&delete s[a]};function ci(e,t,n,r,s=!1){if(V(e)){e.forEach((h,m)=>ci(h,t&&(V(t)?t[m]:t),n,r,s));return}if(br(r)&&!s)return;const i=r.shapeFlag&4?os(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=e,u=t&&t.r,l=a.refs===se?a.refs={}:a.refs,f=a.setupState;if(u!=null&&u!==c&&(ue(u)?(l[u]=null,G(f,u)&&(f[u]=null)):Oe(u)&&(u.value=null)),H(c))Pt(c,a,12,[o,l]);else{const h=ue(c),m=Oe(c);if(h||m){const y=()=>{if(e.f){const C=h?G(f,c)?f[c]:l[c]:c.value;s?V(C)&&Di(C,i):V(C)?C.includes(i)||C.push(i):h?(l[c]=[i],G(f,c)&&(f[c]=l[c])):(c.value=[i],e.k&&(l[e.k]=c.value))}else h?(l[c]=o,G(f,c)&&(f[c]=o)):m&&(c.value=o,e.k&&(l[e.k]=o))};o?(y.id=-1,Ee(y,n)):y()}}}const Ee=nh;function kh(e){return Nh(e)}function Nh(e,t){const n=Mc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:f,nextSibling:h,setScopeId:m=ke,insertStaticContent:y}=e,C=(d,p,g,b=null,v=null,S=null,P=void 0,E=null,T=!!p.dynamicChildren)=>{if(d===p)return;d&&!En(d,p)&&(b=R(d),Ie(d,v,S,!0),d=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:w,ref:N,shapeFlag:F}=p;switch(w){case ss:x(d,p,g,b);break;case Jt:A(d,p,g,b);break;case wr:d==null&&O(p,g,b,P);break;case tt:Ve(d,p,g,b,v,S,P,E,T);break;default:F&1?j(d,p,g,b,v,S,P,E,T):F&6?pt(d,p,g,b,v,S,P,E,T):(F&64||F&128)&&w.process(d,p,g,b,v,S,P,E,T,re)}N!=null&&v&&ci(N,d&&d.ref,S,p||d,!p)},x=(d,p,g,b)=>{if(d==null)r(p.el=a(p.children),g,b);else{const v=p.el=d.el;p.children!==d.children&&u(v,p.children)}},A=(d,p,g,b)=>{d==null?r(p.el=c(p.children||""),g,b):p.el=d.el},O=(d,p,g,b)=>{[d.el,d.anchor]=y(d.children,p,g,b,d.el,d.anchor)},I=({el:d,anchor:p},g,b)=>{let v;for(;d&&d!==p;)v=h(d),r(d,g,b),d=v;r(p,g,b)},M=({el:d,anchor:p})=>{let g;for(;d&&d!==p;)g=h(d),s(d),d=g;s(p)},j=(d,p,g,b,v,S,P,E,T)=>{p.type==="svg"?P="svg":p.type==="math"&&(P="mathml"),d==null?D(p,g,b,v,S,P,E,T):le(d,p,v,S,P,E,T)},D=(d,p,g,b,v,S,P,E)=>{let T,w;const{props:N,shapeFlag:F,transition:U,dirs:B}=d;if(T=d.el=o(d.type,S,N&&N.is,N),F&8?l(T,d.children):F&16&&ce(d.children,T,null,b,v,Ss(d,S),P,E),B&&Lt(d,null,b,"created"),Y(T,d,d.scopeId,P,b),N){for(const Q in N)Q!=="value"&&!An(Q)&&i(T,Q,null,N[Q],S,d.children,b,v,k);"value"in N&&i(T,"value",null,N.value,S),(w=N.onVnodeBeforeMount)&&He(w,b,d)}B&&Lt(d,null,b,"beforeMount");const z=Mh(v,U);z&&U.beforeEnter(T),r(T,p,g),((w=N&&N.onVnodeMounted)||z||B)&&Ee(()=>{w&&He(w,b,d),z&&U.enter(T),B&&Lt(d,null,b,"mounted")},v)},Y=(d,p,g,b,v)=>{if(g&&m(d,g),b)for(let S=0;S<b.length;S++)m(d,b[S]);if(v){let S=v.subTree;if(p===S){const P=v.vnode;Y(d,P,P.scopeId,P.slotScopeIds,v.parent)}}},ce=(d,p,g,b,v,S,P,E,T=0)=>{for(let w=T;w<d.length;w++){const N=d[w]=E?wt(d[w]):qe(d[w]);C(null,N,p,g,b,v,S,P,E)}},le=(d,p,g,b,v,S,P)=>{const E=p.el=d.el;let{patchFlag:T,dynamicChildren:w,dirs:N}=p;T|=d.patchFlag&16;const F=d.props||se,U=p.props||se;let B;if(g&&Ut(g,!1),(B=U.onVnodeBeforeUpdate)&&He(B,g,p,d),N&&Lt(p,d,g,"beforeUpdate"),g&&Ut(g,!0),w?we(d.dynamicChildren,w,E,g,b,Ss(p,v),S):P||X(d,p,E,null,g,b,Ss(p,v),S,!1),T>0){if(T&16)$e(E,p,F,U,g,b,v);else if(T&2&&F.class!==U.class&&i(E,"class",null,U.class,v),T&4&&i(E,"style",F.style,U.style,v),T&8){const z=p.dynamicProps;for(let Q=0;Q<z.length;Q++){const ie=z[Q],fe=F[ie],Le=U[ie];(Le!==fe||ie==="value")&&i(E,ie,fe,Le,v,d.children,g,b,k)}}T&1&&d.children!==p.children&&l(E,p.children)}else!P&&w==null&&$e(E,p,F,U,g,b,v);((B=U.onVnodeUpdated)||N)&&Ee(()=>{B&&He(B,g,p,d),N&&Lt(p,d,g,"updated")},b)},we=(d,p,g,b,v,S,P)=>{for(let E=0;E<p.length;E++){const T=d[E],w=p[E],N=T.el&&(T.type===tt||!En(T,w)||T.shapeFlag&70)?f(T.el):g;C(T,w,N,null,b,v,S,P,!0)}},$e=(d,p,g,b,v,S,P)=>{if(g!==b){if(g!==se)for(const E in g)!An(E)&&!(E in b)&&i(d,E,g[E],null,P,p.children,v,S,k);for(const E in b){if(An(E))continue;const T=b[E],w=g[E];T!==w&&E!=="value"&&i(d,E,w,T,P,p.children,v,S,k)}"value"in b&&i(d,"value",g.value,b.value,P)}},Ve=(d,p,g,b,v,S,P,E,T)=>{const w=p.el=d?d.el:a(""),N=p.anchor=d?d.anchor:a("");let{patchFlag:F,dynamicChildren:U,slotScopeIds:B}=p;B&&(E=E?E.concat(B):B),d==null?(r(w,g,b),r(N,g,b),ce(p.children||[],g,N,v,S,P,E,T)):F>0&&F&64&&U&&d.dynamicChildren?(we(d.dynamicChildren,U,g,v,S,P,E),(p.key!=null||v&&p===v.subTree)&&Tl(d,p,!0)):X(d,p,g,N,v,S,P,E,T)},pt=(d,p,g,b,v,S,P,E,T)=>{p.slotScopeIds=E,d==null?p.shapeFlag&512?v.ctx.activate(p,g,b,P,T):Me(p,g,b,v,S,P,T):gt(d,p,T)},Me=(d,p,g,b,v,S,P)=>{const E=d.component=Hh(d,b,v);if(fl(d)&&(E.ctx.renderer=re),Wh(E),E.asyncDep){if(v&&v.registerDep(E,ae),!d.el){const T=E.subTree=Te(Jt);A(null,T,p,g)}}else ae(E,d,p,g,v,S,P)},gt=(d,p,g)=>{const b=p.component=d.component;if(Xd(d,p,g))if(b.asyncDep&&!b.asyncResolved){Z(b,p,g);return}else b.next=p,Wd(b.update),b.effect.dirty=!0,b.update();else p.el=d.el,b.vnode=p},ae=(d,p,g,b,v,S,P)=>{const E=()=>{if(d.isMounted){let{next:N,bu:F,u:U,parent:B,vnode:z}=d;{const rn=Al(d);if(rn){N&&(N.el=z.el,Z(d,N,P)),rn.asyncDep.then(()=>{d.isUnmounted||E()});return}}let Q=N,ie;Ut(d,!1),N?(N.el=z.el,Z(d,N,P)):N=z,F&&yr(F),(ie=N.props&&N.props.onVnodeBeforeUpdate)&&He(ie,B,N,z),Ut(d,!0);const fe=Is(d),Le=d.subTree;d.subTree=fe,C(Le,fe,f(Le.el),R(Le),d,v,S),N.el=fe.el,Q===null&&Qd(d,fe.el),U&&Ee(U,v),(ie=N.props&&N.props.onVnodeUpdated)&&Ee(()=>He(ie,B,N,z),v)}else{let N;const{el:F,props:U}=p,{bm:B,m:z,parent:Q}=d,ie=br(p);if(Ut(d,!1),B&&yr(B),!ie&&(N=U&&U.onVnodeBeforeMount)&&He(N,Q,p),Ut(d,!0),F&&K){const fe=()=>{d.subTree=Is(d),K(F,d.subTree,d,v,null)};ie?p.type.__asyncLoader().then(()=>!d.isUnmounted&&fe()):fe()}else{const fe=d.subTree=Is(d);C(null,fe,g,b,d,v,S),p.el=fe.el}if(z&&Ee(z,v),!ie&&(N=U&&U.onVnodeMounted)){const fe=p;Ee(()=>He(N,Q,fe),v)}(p.shapeFlag&256||Q&&br(Q.vnode)&&Q.vnode.shapeFlag&256)&&d.a&&Ee(d.a,v),d.isMounted=!0,p=g=b=null}},T=d.effect=new ji(E,ke,()=>zi(w),d.scope),w=d.update=()=>{T.dirty&&T.run()};w.id=d.uid,Ut(d,!0),w()},Z=(d,p,g)=>{p.component=d;const b=d.vnode.props;d.vnode=p,d.next=null,Oh(d,p.props,b,g),Ph(d,p.children,g),Mt(),zo(d),xt()},X=(d,p,g,b,v,S,P,E,T=!1)=>{const w=d&&d.children,N=d?d.shapeFlag:0,F=p.children,{patchFlag:U,shapeFlag:B}=p;if(U>0){if(U&128){Dt(w,F,g,b,v,S,P,E,T);return}else if(U&256){xe(w,F,g,b,v,S,P,E,T);return}}B&8?(N&16&&k(w,v,S),F!==w&&l(g,F)):N&16?B&16?Dt(w,F,g,b,v,S,P,E,T):k(w,v,S,!0):(N&8&&l(g,""),B&16&&ce(F,g,b,v,S,P,E,T))},xe=(d,p,g,b,v,S,P,E,T)=>{d=d||cn,p=p||cn;const w=d.length,N=p.length,F=Math.min(w,N);let U;for(U=0;U<F;U++){const B=p[U]=T?wt(p[U]):qe(p[U]);C(d[U],B,g,null,v,S,P,E,T)}w>N?k(d,v,S,!0,!1,F):ce(p,g,b,v,S,P,E,T,F)},Dt=(d,p,g,b,v,S,P,E,T)=>{let w=0;const N=p.length;let F=d.length-1,U=N-1;for(;w<=F&&w<=U;){const B=d[w],z=p[w]=T?wt(p[w]):qe(p[w]);if(En(B,z))C(B,z,g,null,v,S,P,E,T);else break;w++}for(;w<=F&&w<=U;){const B=d[F],z=p[U]=T?wt(p[U]):qe(p[U]);if(En(B,z))C(B,z,g,null,v,S,P,E,T);else break;F--,U--}if(w>F){if(w<=U){const B=U+1,z=B<N?p[B].el:b;for(;w<=U;)C(null,p[w]=T?wt(p[w]):qe(p[w]),g,z,v,S,P,E,T),w++}}else if(w>U)for(;w<=F;)Ie(d[w],v,S,!0),w++;else{const B=w,z=w,Q=new Map;for(w=z;w<=U;w++){const Ce=p[w]=T?wt(p[w]):qe(p[w]);Ce.key!=null&&Q.set(Ce.key,w)}let ie,fe=0;const Le=U-z+1;let rn=!1,Lo=0;const In=new Array(Le);for(w=0;w<Le;w++)In[w]=0;for(w=B;w<=F;w++){const Ce=d[w];if(fe>=Le){Ie(Ce,v,S,!0);continue}let Be;if(Ce.key!=null)Be=Q.get(Ce.key);else for(ie=z;ie<=U;ie++)if(In[ie-z]===0&&En(Ce,p[ie])){Be=ie;break}Be===void 0?Ie(Ce,v,S,!0):(In[Be-z]=w+1,Be>=Lo?Lo=Be:rn=!0,C(Ce,p[Be],g,null,v,S,P,E,T),fe++)}const Uo=rn?xh(In):cn;for(ie=Uo.length-1,w=Le-1;w>=0;w--){const Ce=z+w,Be=p[Ce],Fo=Ce+1<N?p[Ce+1].el:b;In[w]===0?C(null,Be,g,Fo,v,S,P,E,T):rn&&(ie<0||w!==Uo[ie]?De(Be,g,Fo,2):ie--)}}},De=(d,p,g,b,v=null)=>{const{el:S,type:P,transition:E,children:T,shapeFlag:w}=d;if(w&6){De(d.component.subTree,p,g,b);return}if(w&128){d.suspense.move(p,g,b);return}if(w&64){P.move(d,p,g,re);return}if(P===tt){r(S,p,g);for(let F=0;F<T.length;F++)De(T[F],p,g,b);r(d.anchor,p,g);return}if(P===wr){I(d,p,g);return}if(b!==2&&w&1&&E)if(b===0)E.beforeEnter(S),r(S,p,g),Ee(()=>E.enter(S),v);else{const{leave:F,delayLeave:U,afterLeave:B}=E,z=()=>r(S,p,g),Q=()=>{F(S,()=>{z(),B&&B()})};U?U(S,z,Q):Q()}else r(S,p,g)},Ie=(d,p,g,b=!1,v=!1)=>{const{type:S,props:P,ref:E,children:T,dynamicChildren:w,shapeFlag:N,patchFlag:F,dirs:U}=d;if(E!=null&&ci(E,null,g,d,!0),N&256){p.ctx.deactivate(d);return}const B=N&1&&U,z=!br(d);let Q;if(z&&(Q=P&&P.onVnodeBeforeUnmount)&&He(Q,p,d),N&6)_(d.component,g,b);else{if(N&128){d.suspense.unmount(g,b);return}B&&Lt(d,null,p,"beforeUnmount"),N&64?d.type.remove(d,p,g,v,re,b):w&&(S!==tt||F>0&&F&64)?k(w,p,g,!1,!0):(S===tt&&F&384||!v&&N&16)&&k(T,p,g),b&&nn(d)}(z&&(Q=P&&P.onVnodeUnmounted)||B)&&Ee(()=>{Q&&He(Q,p,d),B&&Lt(d,null,p,"unmounted")},g)},nn=d=>{const{type:p,el:g,anchor:b,transition:v}=d;if(p===tt){Do(g,b);return}if(p===wr){M(d);return}const S=()=>{s(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(d.shapeFlag&1&&v&&!v.persisted){const{leave:P,delayLeave:E}=v,T=()=>P(g,S);E?E(d.el,S,T):T()}else S()},Do=(d,p)=>{let g;for(;d!==p;)g=h(d),s(d),d=g;s(p)},_=(d,p,g)=>{const{bum:b,scope:v,update:S,subTree:P,um:E}=d;b&&yr(b),v.stop(),S&&(S.active=!1,Ie(P,d,p,g)),E&&Ee(E,p),Ee(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},k=(d,p,g,b=!1,v=!1,S=0)=>{for(let P=S;P<d.length;P++)Ie(d[P],p,g,b,v)},R=d=>d.shapeFlag&6?R(d.component.subTree):d.shapeFlag&128?d.suspense.next():h(d.anchor||d.el);let L=!1;const ee=(d,p,g)=>{d==null?p._vnode&&Ie(p._vnode,null,null,!0):C(p._vnode||null,d,p,null,null,null,g),L||(L=!0,zo(),rl(),L=!1),p._vnode=d},re={p:C,um:Ie,m:De,r:nn,mt:Me,mc:ce,pc:X,pbc:we,n:R,o:e};let q,K;return{render:ee,hydrate:q,createApp:Th(ee,q)}}function Ss({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Ut({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Mh(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Tl(e,t,n=!1){const r=e.children,s=t.children;if(V(r)&&V(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=wt(s[i]),a.el=o.el),n||Tl(o,a)),a.type===ss&&(a.el=o.el)}}function xh(e){const t=e.slice(),n=[0];let r,s,i,o,a;const c=e.length;for(r=0;r<c;r++){const u=e[r];if(u!==0){if(s=n[n.length-1],e[s]<u){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<u?i=a+1:o=a;u<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function Al(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Al(t)}const Dh=e=>e.__isTeleport,tt=Symbol.for("v-fgt"),ss=Symbol.for("v-txt"),Jt=Symbol.for("v-cmt"),wr=Symbol.for("v-stc"),Pn=[];let Ue=null;function Ol(e=!1){Pn.push(Ue=e?null:[])}function Lh(){Pn.pop(),Ue=Pn[Pn.length-1]||null}let Bn=1;function sa(e){Bn+=e}function Cl(e){return e.dynamicChildren=Bn>0?Ue||cn:null,Lh(),Bn>0&&Ue&&Ue.push(e),e}function NI(e,t,n,r,s,i){return Cl(kl(e,t,n,r,s,i,!0))}function Rl(e,t,n,r,s){return Cl(Te(e,t,n,r,s,!0))}function li(e){return e?e.__v_isVNode===!0:!1}function En(e,t){return e.type===t.type&&e.key===t.key}const Pl=({key:e})=>e??null,Ir=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ue(e)||Oe(e)||H(e)?{i:be,r:e,k:t,f:!!n}:e:null);function kl(e,t=null,n=null,r=0,s=null,i=e===tt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Pl(t),ref:t&&Ir(t),scopeId:ol,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:be};return a?(Xi(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=ue(n)?8:16),Bn>0&&!o&&Ue&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ue.push(c),c}const Te=Uh;function Uh(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===eh)&&(e=Jt),li(e)){const a=gn(e,t,!0);return n&&Xi(a,n),Bn>0&&!i&&Ue&&(a.shapeFlag&6?Ue[Ue.indexOf(e)]=a:Ue.push(a)),a.patchFlag|=-2,a}if(Gh(e)&&(e=e.__vccOpts),t){t=Fh(t);let{class:a,style:c}=t;a&&!ue(a)&&(t.class=Fi(a)),oe(c)&&(Jc(c)&&!V(c)&&(c=he({},c)),t.style=Ui(c))}const o=ue(e)?1:th(e)?128:Dh(e)?64:oe(e)?4:H(e)?2:0;return kl(e,t,n,r,s,o,i,!0)}function Fh(e){return e?Jc(e)||bl(e)?he({},e):e:null}function gn(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=e,u=t?$h(s||{},t):s,l={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&Pl(u),ref:t&&t.ref?n&&i?V(i)?i.concat(Ir(t)):[i,Ir(t)]:Ir(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==tt?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&gn(e.ssContent),ssFallback:e.ssFallback&&gn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&(l.transition=c.clone(l)),l}function jh(e=" ",t=0){return Te(ss,null,e,t)}function MI(e,t){const n=Te(wr,null,e);return n.staticCount=t,n}function xI(e="",t=!1){return t?(Ol(),Rl(Jt,null,e)):Te(Jt,null,e)}function qe(e){return e==null||typeof e=="boolean"?Te(Jt):V(e)?Te(tt,null,e.slice()):typeof e=="object"?wt(e):Te(ss,null,String(e))}function wt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:gn(e)}function Xi(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(V(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),Xi(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!bl(t)?t._ctx=be:s===3&&be&&(be.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else H(t)?(t={default:t,_ctx:be},n=32):(t=String(t),r&64?(n=16,t=[jh(t)]):n=8);e.children=t,e.shapeFlag|=n}function $h(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=Fi([t.class,r.class]));else if(s==="style")t.style=Ui([t.style,r.style]);else if(Jr(s)){const i=t[s],o=r[s];o&&i!==o&&!(V(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function He(e,t,n,r=null){Fe(e,t,7,[n,r])}const Vh=ml();let Bh=0;function Hh(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||Vh,i={uid:Bh++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new pd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wl(r,s),emitsOptions:il(r,s),emit:null,emitted:null,propsDefaults:se,inheritAttrs:r.inheritAttrs,ctx:se,data:se,props:se,attrs:se,slots:se,refs:se,setupState:se,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=zd.bind(null,i),e.ce&&e.ce(i),i}let pe=null;const Qi=()=>pe||be;let xr,ui;{const e=Mc(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};xr=t("__VUE_INSTANCE_SETTERS__",n=>pe=n),ui=t("__VUE_SSR_SETTERS__",n=>is=n)}const Yn=e=>{const t=pe;return xr(e),e.scope.on(),()=>{e.scope.off(),xr(t)}},ia=()=>{pe&&pe.scope.off(),xr(null)};function Nl(e){return e.vnode.shapeFlag&4}let is=!1;function Wh(e,t=!1){t&&ui(t);const{props:n,children:r}=e.vnode,s=Nl(e);Ah(e,n,s,t),Rh(e,r);const i=s?Kh(e,t):void 0;return t&&ui(!1),i}function Kh(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,yh);const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?xl(e):null,i=Yn(e);Mt();const o=Pt(r,e,0,[e.props,s]);if(xt(),i(),Rc(o)){if(o.then(ia,ia),t)return o.then(a=>{oa(e,a,t)}).catch(a=>{es(a,e,0)});e.asyncDep=o}else oa(e,o,t)}else Ml(e,t)}function oa(e,t,n){H(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:oe(t)&&(e.setupState=Zc(t)),Ml(e,n)}let aa;function Ml(e,t,n){const r=e.type;if(!e.render){if(!t&&aa&&!r.render){const s=r.template||Ji(e).template;if(s){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:c}=r,u=he(he({isCustomElement:i,delimiters:a},o),c);r.render=aa(s,u)}}e.render=r.render||ke}{const s=Yn(e);Mt();try{bh(e)}finally{xt(),s()}}}const qh={get(e,t){return Ae(e,"get",""),e[t]}};function xl(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,qh),slots:e.slots,emit:e.emit,expose:t}}function os(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Zc(Ud(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Cn)return Cn[n](e)},has(t,n){return n in t||n in Cn}}))}function zh(e,t=!0){return H(e)?e.displayName||e.name:e.name||t&&e.__name}function Gh(e){return H(e)&&"__vccOpts"in e}const de=(e,t)=>Fd(e,t,is);function as(e,t,n){const r=arguments.length;return r===2?oe(t)&&!V(t)?li(t)?Te(e,null,[t]):Te(e,t):Te(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&li(n)&&(n=[n]),Te(e,t,n))}const Jh="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Yh="http://www.w3.org/2000/svg",Xh="http://www.w3.org/1998/Math/MathML",It=typeof document<"u"?document:null,ca=It&&It.createElement("template"),Qh={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?It.createElementNS(Yh,e):t==="mathml"?It.createElementNS(Xh,e):It.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>It.createTextNode(e),createComment:e=>It.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>It.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ca.innerHTML=r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e;const a=ca.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Zh=Symbol("_vtc");function ep(e,t,n){const r=e[Zh];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const la=Symbol("_vod"),tp=Symbol("_vsh"),np=Symbol(""),rp=/(^|;)\s*display\s*:/;function sp(e,t,n){const r=e.style,s=ue(n);let i=!1;if(n&&!s){if(t)if(ue(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Er(r,a,"")}else for(const o in t)n[o]==null&&Er(r,o,"");for(const o in n)o==="display"&&(i=!0),Er(r,o,n[o])}else if(s){if(t!==n){const o=r[np];o&&(n+=";"+o),r.cssText=n,i=rp.test(n)}}else t&&e.removeAttribute("style");la in e&&(e[la]=i?r.display:"",e[tp]&&(r.display="none"))}const ua=/\s*!important$/;function Er(e,t,n){if(V(n))n.forEach(r=>Er(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=ip(e,t);ua.test(n)?e.setProperty(bn(r),n.replace(ua,""),"important"):e[r]=n}}const fa=["Webkit","Moz","ms"],Ts={};function ip(e,t){const n=Ts[t];if(n)return n;let r=Xe(t);if(r!=="filter"&&r in e)return Ts[t]=r;r=Qr(r);for(let s=0;s<fa.length;s++){const i=fa[s]+r;if(i in e)return Ts[t]=i}return t}const da="http://www.w3.org/1999/xlink";function op(e,t,n,r,s){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(da,t.slice(6,t.length)):e.setAttributeNS(da,t,n);else{const i=hd(t);n==null||i&&!xc(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function ap(e,t,n,r,s,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,s,i),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){const u=a==="OPTION"?e.getAttribute("value")||"":e.value,l=n??"";(u!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let c=!1;if(n===""||n==null){const u=typeof e[t];u==="boolean"?n=xc(n):n==null&&u==="string"?(n="",c=!0):u==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function on(e,t,n,r){e.addEventListener(t,n,r)}function cp(e,t,n,r){e.removeEventListener(t,n,r)}const ha=Symbol("_vei");function lp(e,t,n,r,s=null){const i=e[ha]||(e[ha]={}),o=i[t];if(r&&o)o.value=r;else{const[a,c]=up(t);if(r){const u=i[t]=hp(r,s);on(e,a,u,c)}else o&&(cp(e,a,o,c),i[t]=void 0)}}const pa=/(?:Once|Passive|Capture)$/;function up(e){let t;if(pa.test(e)){t={};let r;for(;r=e.match(pa);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):bn(e.slice(2)),t]}let As=0;const fp=Promise.resolve(),dp=()=>As||(fp.then(()=>As=0),As=Date.now());function hp(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Fe(pp(r,n.value),t,5,[r])};return n.value=e,n.attached=dp(),n}function pp(e,t){if(V(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const ga=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,gp=(e,t,n,r,s,i,o,a,c)=>{const u=s==="svg";t==="class"?ep(e,r,u):t==="style"?sp(e,n,r):Jr(t)?xi(t)||lp(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):mp(e,t,r,u))?ap(e,t,r,i,o,a,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),op(e,t,r,u))};function mp(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&ga(t)&&H(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ga(t)&&ue(n)?!1:t in e}const ma=e=>{const t=e.props["onUpdate:modelValue"]||!1;return V(t)?n=>yr(t,n):t};function yp(e){e.target.composing=!0}function ya(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Os=Symbol("_assign"),DI={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e[Os]=ma(s);const i=r||s.props&&s.props.type==="number";on(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),i&&(a=Qs(a)),e[Os](a)}),n&&on(e,"change",()=>{e.value=e.value.trim()}),t||(on(e,"compositionstart",yp),on(e,"compositionend",ya),on(e,"change",ya))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:s}},i){if(e[Os]=ma(i),e.composing)return;const o=(s||e.type==="number")&&!/^0\d/.test(e.value)?Qs(e.value):e.value,a=t??"";o!==a&&(document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===a)||(e.value=a))}},_p=["ctrl","shift","alt","meta"],bp={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>_p.some(n=>e[`${n}Key`]&&!t.includes(n))},LI=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<t.length;o++){const a=bp[t[o]];if(a&&a(s,t))return}return e(s,...i)})},vp=he({patchProp:gp},Qh);let _a;function wp(){return _a||(_a=kh(vp))}const Ip=(...e)=>{const t=wp().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=Sp(r);if(!s)return;const i=t._component;!H(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,Ep(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function Ep(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Sp(e){return ue(e)?document.querySelector(e):e}/*!
  * vue-router v4.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Dl=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",vn=e=>Dl?Symbol(e):"_vr_"+e,Tp=vn("rvlm"),ba=vn("rvd"),cs=vn("r"),Ll=vn("rl"),fi=vn("rvl"),an=typeof window<"u";function Ap(e){return e.__esModule||Dl&&e[Symbol.toStringTag]==="Module"}const te=Object.assign;function Cs(e,t){const n={};for(const r in t){const s=t[r];n[r]=Array.isArray(s)?s.map(e):e(s)}return n}const kn=()=>{},Op=/\/$/,Cp=e=>e.replace(Op,"");function Rs(e,t,n="/"){let r,s={},i="",o="";const a=t.indexOf("?"),c=t.indexOf("#",a>-1?a:0);return a>-1&&(r=t.slice(0,a),i=t.slice(a+1,c>-1?c:t.length),s=e(i)),c>-1&&(r=r||t.slice(0,c),o=t.slice(c,t.length)),r=Np(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Rp(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function va(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Pp(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&mn(t.matched[r],n.matched[s])&&Ul(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function mn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ul(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!kp(e[n],t[n]))return!1;return!0}function kp(e,t){return Array.isArray(e)?wa(e,t):Array.isArray(t)?wa(t,e):e===t}function wa(e,t){return Array.isArray(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Np(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Hn;(function(e){e.pop="pop",e.push="push"})(Hn||(Hn={}));var Nn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Nn||(Nn={}));function Mp(e){if(!e)if(an){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Cp(e)}const xp=/^[^#]+#/;function Dp(e,t){return e.replace(xp,"#")+t}function Lp(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const ls=()=>({left:window.pageXOffset,top:window.pageYOffset});function Up(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=Lp(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Ia(e,t){return(history.state?history.state.position-t:-1)+e}const di=new Map;function Fp(e,t){di.set(e,t)}function jp(e){const t=di.get(e);return di.delete(e),t}let $p=()=>location.protocol+"//"+location.host;function Fl(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let a=s.includes(e.slice(i))?e.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),va(c,"")}return va(n,e)+r+s}function Vp(e,t,n,r){let s=[],i=[],o=null;const a=({state:h})=>{const m=Fl(e,location),y=n.value,C=t.value;let x=0;if(h){if(n.value=m,t.value=h,o&&o===y){o=null;return}x=C?h.position-C.position:0}else r(m);s.forEach(A=>{A(n.value,y,{delta:x,type:Hn.pop,direction:x?x>0?Nn.forward:Nn.back:Nn.unknown})})};function c(){o=n.value}function u(h){s.push(h);const m=()=>{const y=s.indexOf(h);y>-1&&s.splice(y,1)};return i.push(m),m}function l(){const{history:h}=window;h.state&&h.replaceState(te({},h.state,{scroll:ls()}),"")}function f(){for(const h of i)h();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:f}}function Ea(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?ls():null}}function Bp(e){const{history:t,location:n}=window,r={value:Fl(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const f=e.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:$p()+e+c;try{t[l?"replaceState":"pushState"](u,"",h),s.value=u}catch(m){console.error(m),n[l?"replace":"assign"](h)}}function o(c,u){const l=te({},t.state,Ea(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,l,!0),r.value=c}function a(c,u){const l=te({},s.value,t.state,{forward:c,scroll:ls()});i(l.current,l,!0);const f=te({},Ea(r.value,c,null),{position:l.position+1},u);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Hp(e){e=Mp(e);const t=Bp(e),n=Vp(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=te({location:"",base:e,go:r,createHref:Dp.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Wp(e){return typeof e=="string"||e&&typeof e=="object"}function jl(e){return typeof e=="string"||typeof e=="symbol"}const yt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},$l=vn("nf");var Sa;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Sa||(Sa={}));function yn(e,t){return te(new Error,{type:e,[$l]:!0},t)}function _t(e,t){return e instanceof Error&&$l in e&&(t==null||!!(e.type&t))}const Ta="[^/]+?",Kp={sensitive:!1,strict:!1,start:!0,end:!0},qp=/[.+*?^${}()[\]/\\]/g;function zp(e,t){const n=te({},Kp,t),r=[];let s=n.start?"^":"";const i=[];for(const u of e){const l=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let f=0;f<u.length;f++){const h=u[f];let m=40+(n.sensitive?.25:0);if(h.type===0)f||(s+="/"),s+=h.value.replace(qp,"\\$&"),m+=40;else if(h.type===1){const{value:y,repeatable:C,optional:x,regexp:A}=h;i.push({name:y,repeatable:C,optional:x});const O=A||Ta;if(O!==Ta){m+=10;try{new RegExp(`(${O})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${y}" (${O}): `+M.message)}}let I=C?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;f||(I=x&&u.length<2?`(?:/${I})`:"/"+I),x&&(I+="?"),s+=I,m+=20,x&&(m+=-8),C&&(m+=-20),O===".*"&&(m+=-50)}l.push(m)}r.push(l)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const l=u.match(o),f={};if(!l)return null;for(let h=1;h<l.length;h++){const m=l[h]||"",y=i[h-1];f[y.name]=m&&y.repeatable?m.split("/"):m}return f}function c(u){let l="",f=!1;for(const h of e){(!f||!l.endsWith("/"))&&(l+="/"),f=!1;for(const m of h)if(m.type===0)l+=m.value;else if(m.type===1){const{value:y,repeatable:C,optional:x}=m,A=y in u?u[y]:"";if(Array.isArray(A)&&!C)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const O=Array.isArray(A)?A.join("/"):A;if(!O)if(x)h.length<2&&(l.endsWith("/")?l=l.slice(0,-1):f=!0);else throw new Error(`Missing required param "${y}"`);l+=O}}return l}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Gp(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Jp(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=Gp(r[n],s[n]);if(i)return i;n++}return s.length-r.length}const Yp={type:0,value:""},Xp=/[a-zA-Z0-9_]/;function Qp(e){if(!e)return[[]];if(e==="/")return[[Yp]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,u="",l="";function f(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),u="")}function h(){u+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&f(),o()):c===":"?(f(),n=1):h();break;case 4:h(),n=r;break;case 1:c==="("?n=2:Xp.test(c)?h():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),f(),o(),s}function Zp(e,t,n){const r=zp(Qp(e.path),n),s=te(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function eg(e,t){const n=[],r=new Map;t=Oa({strict:!1,end:!0,sensitive:!1},t);function s(l){return r.get(l)}function i(l,f,h){const m=!h,y=ng(l);y.aliasOf=h&&h.record;const C=Oa(t,l),x=[y];if("alias"in l){const I=typeof l.alias=="string"?[l.alias]:l.alias;for(const M of I)x.push(te({},y,{components:h?h.record.components:y.components,path:M,aliasOf:h?h.record:y}))}let A,O;for(const I of x){const{path:M}=I;if(f&&M[0]!=="/"){const j=f.record.path,D=j[j.length-1]==="/"?"":"/";I.path=f.record.path+(M&&D+M)}if(A=Zp(I,f,C),h?h.alias.push(A):(O=O||A,O!==A&&O.alias.push(A),m&&l.name&&!Aa(A)&&o(l.name)),"children"in y){const j=y.children;for(let D=0;D<j.length;D++)i(j[D],A,h&&h.children[D])}h=h||A,c(A)}return O?()=>{o(O)}:kn}function o(l){if(jl(l)){const f=r.get(l);f&&(r.delete(l),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(l);f>-1&&(n.splice(f,1),l.record.name&&r.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let f=0;for(;f<n.length&&Jp(l,n[f])>=0&&(l.record.path!==n[f].record.path||!Vl(l,n[f]));)f++;n.splice(f,0,l),l.record.name&&!Aa(l)&&r.set(l.record.name,l)}function u(l,f){let h,m={},y,C;if("name"in l&&l.name){if(h=r.get(l.name),!h)throw yn(1,{location:l});C=h.record.name,m=te(tg(f.params,h.keys.filter(O=>!O.optional).map(O=>O.name)),l.params),y=h.stringify(m)}else if("path"in l)y=l.path,h=n.find(O=>O.re.test(y)),h&&(m=h.parse(y),C=h.record.name);else{if(h=f.name?r.get(f.name):n.find(O=>O.re.test(f.path)),!h)throw yn(1,{location:l,currentLocation:f});C=h.record.name,m=te({},f.params,l.params),y=h.stringify(m)}const x=[];let A=h;for(;A;)x.unshift(A.record),A=A.parent;return{name:C,path:y,params:m,matched:x,meta:sg(x)}}return e.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function tg(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function ng(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:rg(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function rg(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function Aa(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function sg(e){return e.reduce((t,n)=>te(t,n.meta),{})}function Oa(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Vl(e,t){return t.children.some(n=>n===e||Vl(e,n))}const Bl=/#/g,ig=/&/g,og=/\//g,ag=/=/g,cg=/\?/g,Hl=/\+/g,lg=/%5B/g,ug=/%5D/g,Wl=/%5E/g,fg=/%60/g,Kl=/%7B/g,dg=/%7C/g,ql=/%7D/g,hg=/%20/g;function Zi(e){return encodeURI(""+e).replace(dg,"|").replace(lg,"[").replace(ug,"]")}function pg(e){return Zi(e).replace(Kl,"{").replace(ql,"}").replace(Wl,"^")}function hi(e){return Zi(e).replace(Hl,"%2B").replace(hg,"+").replace(Bl,"%23").replace(ig,"%26").replace(fg,"`").replace(Kl,"{").replace(ql,"}").replace(Wl,"^")}function gg(e){return hi(e).replace(ag,"%3D")}function mg(e){return Zi(e).replace(Bl,"%23").replace(cg,"%3F")}function yg(e){return e==null?"":mg(e).replace(og,"%2F")}function Dr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function _g(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Hl," "),o=i.indexOf("="),a=Dr(o<0?i:i.slice(0,o)),c=o<0?null:Dr(i.slice(o+1));if(a in t){let u=t[a];Array.isArray(u)||(u=t[a]=[u]),u.push(c)}else t[a]=c}return t}function Ca(e){let t="";for(let n in e){const r=e[n];if(n=gg(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&hi(i)):[r&&hi(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function bg(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}function Sn(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Et(e,t,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=f=>{f===!1?a(yn(4,{from:n,to:t})):f instanceof Error?a(f):Wp(f)?a(yn(2,{from:t,to:f})):(i&&r.enterCallbacks[s]===i&&typeof f=="function"&&i.push(f),o())},u=e.call(r&&r.instances[s],t,n,c);let l=Promise.resolve(u);e.length<3&&(l=l.then(c)),l.catch(f=>a(f))})}function Ps(e,t,n,r){const s=[];for(const i of e)for(const o in i.components){let a=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(vg(a)){const u=(a.__vccOpts||a)[t];u&&s.push(Et(u,n,r,i,o))}else{let c=a();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=Ap(u)?u.default:u;i.components[o]=l;const h=(l.__vccOpts||l)[t];return h&&Et(h,n,r,i,o)()}))}}return s}function vg(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ra(e){const t=Ge(cs),n=Ge(Ll),r=de(()=>t.resolve(Pe(e.to))),s=de(()=>{const{matched:c}=r.value,{length:u}=c,l=c[u-1],f=n.matched;if(!l||!f.length)return-1;const h=f.findIndex(mn.bind(null,l));if(h>-1)return h;const m=Pa(c[u-2]);return u>1&&Pa(l)===m&&f[f.length-1].path!==m?f.findIndex(mn.bind(null,c[u-2])):h}),i=de(()=>s.value>-1&&Sg(n.params,r.value.params)),o=de(()=>s.value>-1&&s.value===n.matched.length-1&&Ul(n.params,r.value.params));function a(c={}){return Eg(c)?t[Pe(e.replace)?"replace":"push"](Pe(e.to)).catch(kn):Promise.resolve()}return{route:r,href:de(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const wg=ns({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ra,setup(e,{slots:t}){const n=ut(Ra(e)),{options:r}=Ge(cs),s=de(()=>({[ka(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ka(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:as("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Ig=wg;function Eg(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Sg(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Pa(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ka=(e,t,n)=>e??t??n,Tg=ns({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const r=Ge(fi),s=de(()=>e.route||r.value),i=Ge(ba,0),o=de(()=>s.value.matched[i]);vr(ba,i+1),vr(Tp,o),vr(fi,s);const a=Ne();return me(()=>[a.value,o.value,e.name],([c,u,l],[f,h,m])=>{u&&(u.instances[l]=c,h&&h!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!mn(u,h)||!f)&&(u.enterCallbacks[l]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=s.value,u=o.value,l=u&&u.components[e.name],f=e.name;if(!l)return Na(n.default,{Component:l,route:c});const h=u.props[e.name],m=h?h===!0?c.params:typeof h=="function"?h(c):h:null,C=as(l,te({},m,t,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(u.instances[f]=null)},ref:a}));return Na(n.default,{Component:C,route:c})||C}}});function Na(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const zl=Tg;function Ag(e){const t=eg(e.routes,e),n=e.parseQuery||_g,r=e.stringifyQuery||Ca,s=e.history,i=Sn(),o=Sn(),a=Sn(),c=jd(yt);let u=yt;an&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=Cs.bind(null,_=>""+_),f=Cs.bind(null,yg),h=Cs.bind(null,Dr);function m(_,k){let R,L;return jl(_)?(R=t.getRecordMatcher(_),L=k):L=_,t.addRoute(L,R)}function y(_){const k=t.getRecordMatcher(_);k&&t.removeRoute(k)}function C(){return t.getRoutes().map(_=>_.record)}function x(_){return!!t.getRecordMatcher(_)}function A(_,k){if(k=te({},k||c.value),typeof _=="string"){const K=Rs(n,_,k.path),d=t.resolve({path:K.path},k),p=s.createHref(K.fullPath);return te(K,d,{params:h(d.params),hash:Dr(K.hash),redirectedFrom:void 0,href:p})}let R;if("path"in _)R=te({},_,{path:Rs(n,_.path,k.path).path});else{const K=te({},_.params);for(const d in K)K[d]==null&&delete K[d];R=te({},_,{params:f(_.params)}),k.params=f(k.params)}const L=t.resolve(R,k),ee=_.hash||"";L.params=l(h(L.params));const re=Rp(r,te({},_,{hash:pg(ee),path:L.path})),q=s.createHref(re);return te({fullPath:re,hash:ee,query:r===Ca?bg(_.query):_.query||{}},L,{redirectedFrom:void 0,href:q})}function O(_){return typeof _=="string"?Rs(n,_,c.value.path):te({},_)}function I(_,k){if(u!==_)return yn(8,{from:k,to:_})}function M(_){return Y(_)}function j(_){return M(te(O(_),{replace:!0}))}function D(_){const k=_.matched[_.matched.length-1];if(k&&k.redirect){const{redirect:R}=k;let L=typeof R=="function"?R(_):R;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=O(L):{path:L},L.params={}),te({query:_.query,hash:_.hash,params:_.params},L)}}function Y(_,k){const R=u=A(_),L=c.value,ee=_.state,re=_.force,q=_.replace===!0,K=D(R);if(K)return Y(te(O(K),{state:ee,force:re,replace:q}),k||R);const d=R;d.redirectedFrom=k;let p;return!re&&Pp(r,L,R)&&(p=yn(16,{to:d,from:L}),Dt(L,L,!0,!1)),(p?Promise.resolve(p):le(d,L)).catch(g=>_t(g)?_t(g,2)?g:xe(g):Z(g,d,L)).then(g=>{if(g){if(_t(g,2))return Y(te(O(g.to),{state:ee,force:re,replace:q}),k||d)}else g=$e(d,L,!0,q,ee);return we(d,L,g),g})}function ce(_,k){const R=I(_,k);return R?Promise.reject(R):Promise.resolve()}function le(_,k){let R;const[L,ee,re]=Og(_,k);R=Ps(L.reverse(),"beforeRouteLeave",_,k);for(const K of L)K.leaveGuards.forEach(d=>{R.push(Et(d,_,k))});const q=ce.bind(null,_,k);return R.push(q),sn(R).then(()=>{R=[];for(const K of i.list())R.push(Et(K,_,k));return R.push(q),sn(R)}).then(()=>{R=Ps(ee,"beforeRouteUpdate",_,k);for(const K of ee)K.updateGuards.forEach(d=>{R.push(Et(d,_,k))});return R.push(q),sn(R)}).then(()=>{R=[];for(const K of _.matched)if(K.beforeEnter&&!k.matched.includes(K))if(Array.isArray(K.beforeEnter))for(const d of K.beforeEnter)R.push(Et(d,_,k));else R.push(Et(K.beforeEnter,_,k));return R.push(q),sn(R)}).then(()=>(_.matched.forEach(K=>K.enterCallbacks={}),R=Ps(re,"beforeRouteEnter",_,k),R.push(q),sn(R))).then(()=>{R=[];for(const K of o.list())R.push(Et(K,_,k));return R.push(q),sn(R)}).catch(K=>_t(K,8)?K:Promise.reject(K))}function we(_,k,R){for(const L of a.list())L(_,k,R)}function $e(_,k,R,L,ee){const re=I(_,k);if(re)return re;const q=k===yt,K=an?history.state:{};R&&(L||q?s.replace(_.fullPath,te({scroll:q&&K&&K.scroll},ee)):s.push(_.fullPath,ee)),c.value=_,Dt(_,k,R,q),xe()}let Ve;function pt(){Ve=s.listen((_,k,R)=>{const L=A(_),ee=D(L);if(ee){Y(te(ee,{replace:!0}),L).catch(kn);return}u=L;const re=c.value;an&&Fp(Ia(re.fullPath,R.delta),ls()),le(L,re).catch(q=>_t(q,12)?q:_t(q,2)?(Y(q.to,L).then(K=>{_t(K,20)&&!R.delta&&R.type===Hn.pop&&s.go(-1,!1)}).catch(kn),Promise.reject()):(R.delta&&s.go(-R.delta,!1),Z(q,L,re))).then(q=>{q=q||$e(L,re,!1),q&&(R.delta?s.go(-R.delta,!1):R.type===Hn.pop&&_t(q,20)&&s.go(-1,!1)),we(L,re,q)}).catch(kn)})}let Me=Sn(),gt=Sn(),ae;function Z(_,k,R){xe(_);const L=gt.list();return L.length?L.forEach(ee=>ee(_,k,R)):console.error(_),Promise.reject(_)}function X(){return ae&&c.value!==yt?Promise.resolve():new Promise((_,k)=>{Me.add([_,k])})}function xe(_){return ae||(ae=!_,pt(),Me.list().forEach(([k,R])=>_?R(_):k()),Me.reset()),_}function Dt(_,k,R,L){const{scrollBehavior:ee}=e;if(!an||!ee)return Promise.resolve();const re=!R&&jp(Ia(_.fullPath,0))||(L||!R)&&history.state&&history.state.scroll||null;return tl().then(()=>ee(_,k,re)).then(q=>q&&Up(q)).catch(q=>Z(q,_,k))}const De=_=>s.go(_);let Ie;const nn=new Set;return{currentRoute:c,addRoute:m,removeRoute:y,hasRoute:x,getRoutes:C,resolve:A,options:e,push:M,replace:j,go:De,back:()=>De(-1),forward:()=>De(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:gt.add,isReady:X,install(_){const k=this;_.component("RouterLink",Ig),_.component("RouterView",zl),_.config.globalProperties.$router=k,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>Pe(c)}),an&&!Ie&&c.value===yt&&(Ie=!0,M(s.location).catch(ee=>{}));const R={};for(const ee in yt)R[ee]=de(()=>c.value[ee]);_.provide(cs,k),_.provide(Ll,ut(R)),_.provide(fi,c);const L=_.unmount;nn.add(_),_.unmount=function(){nn.delete(_),nn.size<1&&(u=yt,Ve&&Ve(),c.value=yt,Ie=!1,ae=!1),L()}}}}function sn(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function Og(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const a=t.matched[o];a&&(e.matched.find(u=>mn(u,a))?r.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(u=>mn(u,c))||s.push(c))}return[n,r,s]}function UI(){return Ge(cs)}const Cg={__name:"App",setup(e){return(t,n)=>(Ol(),Rl(Pe(zl)))}};function ks(e){if(e===null||typeof e!="object")return!1;const t=Object.getPrototypeOf(e);return t!==null&&t!==Object.prototype&&Object.getPrototypeOf(t)!==null||Symbol.iterator in e?!1:Symbol.toStringTag in e?Object.prototype.toString.call(e)==="[object Module]":!0}function pi(e,t,n=".",r){if(!ks(t))return pi(e,{},n,r);const s=Object.assign({},t);for(const i in e){if(i==="__proto__"||i==="constructor")continue;const o=e[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:ks(o)&&ks(s[i])?s[i]=pi(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function Rg(e){return(...t)=>t.reduce((n,r)=>pi(n,r,"",e),{})}const Gl=Rg();function Jl(e){return Lc()?(md(e),!0):!1}function eo(e){return typeof e=="function"?e():Pe(e)}const Pg=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const kg=e=>e!=null,Ng=Object.prototype.toString,Lr=e=>Ng.call(e)==="[object Object]",Sr=()=>{};function Mg(e){return Qi()}function xg(e,t){Mg()&&Gi(e,t)}function Mn(e){var t;const n=eo(e);return(t=n==null?void 0:n.$el)!=null?t:n}const Yl=Pg?window:void 0;function We(...e){let t,n,r,s;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,r,s]=e,t=Yl):[t,n,r,s]=e,!t)return Sr;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const i=[],o=()=>{i.forEach(l=>l()),i.length=0},a=(l,f,h,m)=>(l.addEventListener(f,h,m),()=>l.removeEventListener(f,h,m)),c=me(()=>[Mn(t),eo(s)],([l,f])=>{if(o(),!l)return;const h=Lr(f)?{...f}:f;i.push(...n.flatMap(m=>r.map(y=>a(l,m,y,h))))},{immediate:!0,flush:"post"}),u=()=>{c(),o()};return Jl(u),u}function Dg(){const e=Ne(!1),t=Qi();return t&&hl(()=>{e.value=!0},t),e}function Lg(e){const t=Dg();return de(()=>(t.value,!!e()))}function Ug(e,t,n={}){const{root:r,rootMargin:s="0px",threshold:i=.1,window:o=Yl,immediate:a=!0}=n,c=Lg(()=>o&&"IntersectionObserver"in o),u=de(()=>{const y=eo(e);return(Array.isArray(y)?y:[y]).map(Mn).filter(kg)});let l=Sr;const f=Ne(a),h=c.value?me(()=>[u.value,Mn(r),f.value],([y,C])=>{if(l(),!f.value||!y.length)return;const x=new IntersectionObserver(t,{root:Mn(C),rootMargin:s,threshold:i});y.forEach(A=>A&&x.observe(A)),l=()=>{x.disconnect(),l=Sr}},{immediate:a,flush:"post"}):Sr,m=()=>{l(),h(),f.value=!1};return Jl(m),{isSupported:c,isActive:f,pause(){l(),f.value=!1},resume(){f.value=!0},stop:m}}const Xl=1/60*1e3,Fg=typeof performance<"u"?()=>performance.now():()=>Date.now(),Ql=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(Fg()),Xl);function jg(e){let t=[],n=[],r=0,s=!1,i=!1;const o=new WeakSet,a={schedule:(c,u=!1,l=!1)=>{const f=l&&s,h=f?t:n;return u&&o.add(c),h.indexOf(c)===-1&&(h.push(c),f&&s&&(r=t.length)),c},cancel:c=>{const u=n.indexOf(c);u!==-1&&n.splice(u,1),o.delete(c)},process:c=>{if(s){i=!0;return}if(s=!0,[t,n]=[n,t],n.length=0,r=t.length,r)for(let u=0;u<r;u++){const l=t[u];l(c),o.has(l)&&(a.schedule(l),e())}s=!1,i&&(i=!1,a.process(c))}};return a}const $g=40;let gi=!0,Wn=!1,mi=!1;const fn={delta:0,timestamp:0},Xn=["read","update","preRender","render","postRender"],us=Xn.reduce((e,t)=>(e[t]=jg(()=>Wn=!0),e),{}),yi=Xn.reduce((e,t)=>{const n=us[t];return e[t]=(r,s=!1,i=!1)=>(Wn||Hg(),n.schedule(r,s,i)),e},{}),Vg=Xn.reduce((e,t)=>(e[t]=us[t].cancel,e),{});Xn.reduce((e,t)=>(e[t]=()=>us[t].process(fn),e),{});const Bg=e=>us[e].process(fn),Zl=e=>{Wn=!1,fn.delta=gi?Xl:Math.max(Math.min(e-fn.timestamp,$g),1),fn.timestamp=e,mi=!0,Xn.forEach(Bg),mi=!1,Wn&&(gi=!1,Ql(Zl))},Hg=()=>{Wn=!0,gi=!0,mi||Ql(Zl)},eu=()=>fn;function tu(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n}var Ma=function(){};const _i=(e,t,n)=>Math.min(Math.max(n,e),t),Ns=.001,Wg=.01,Kg=10,qg=.05,zg=1;function Gg({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let s,i,o=1-t;o=_i(qg,zg,o),e=_i(Wg,Kg,e/1e3),o<1?(s=u=>{const l=u*o,f=l*e,h=l-n,m=bi(u,o),y=Math.exp(-f);return Ns-h/m*y},i=u=>{const f=u*o*e,h=f*n+n,m=Math.pow(o,2)*Math.pow(u,2)*e,y=Math.exp(-f),C=bi(Math.pow(u,2),o);return(-s(u)+Ns>0?-1:1)*((h-m)*y)/C}):(s=u=>{const l=Math.exp(-u*e),f=(u-n)*e+1;return-Ns+l*f},i=u=>{const l=Math.exp(-u*e),f=(n-u)*(e*e);return l*f});const a=5/e,c=Yg(s,i,a);if(e=e*1e3,isNaN(c))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(c,2)*r;return{stiffness:u,damping:o*2*Math.sqrt(r*u),duration:e}}}const Jg=12;function Yg(e,t,n){let r=n;for(let s=1;s<Jg;s++)r=r-e(r)/t(r);return r}function bi(e,t){return e*Math.sqrt(1-t*t)}const Xg=["duration","bounce"],Qg=["stiffness","damping","mass"];function xa(e,t){return t.some(n=>e[n]!==void 0)}function Zg(e){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!xa(e,Qg)&&xa(e,Xg)){const n=Gg(e);t=Object.assign(Object.assign(Object.assign({},t),n),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function to(e){var{from:t=0,to:n=1,restSpeed:r=2,restDelta:s}=e,i=tu(e,["from","to","restSpeed","restDelta"]);const o={done:!1,value:t};let{stiffness:a,damping:c,mass:u,velocity:l,duration:f,isResolvedFromDuration:h}=Zg(i),m=Da,y=Da;function C(){const x=l?-(l/1e3):0,A=n-t,O=c/(2*Math.sqrt(a*u)),I=Math.sqrt(a/u)/1e3;if(s===void 0&&(s=Math.min(Math.abs(n-t)/100,.4)),O<1){const M=bi(I,O);m=j=>{const D=Math.exp(-O*I*j);return n-D*((x+O*I*A)/M*Math.sin(M*j)+A*Math.cos(M*j))},y=j=>{const D=Math.exp(-O*I*j);return O*I*D*(Math.sin(M*j)*(x+O*I*A)/M+A*Math.cos(M*j))-D*(Math.cos(M*j)*(x+O*I*A)-M*A*Math.sin(M*j))}}else if(O===1)m=M=>n-Math.exp(-I*M)*(A+(x+I*A)*M);else{const M=I*Math.sqrt(O*O-1);m=j=>{const D=Math.exp(-O*I*j),Y=Math.min(M*j,300);return n-D*((x+O*I*A)*Math.sinh(Y)+M*A*Math.cosh(Y))/M}}}return C(),{next:x=>{const A=m(x);if(h)o.done=x>=f;else{const O=y(x)*1e3,I=Math.abs(O)<=r,M=Math.abs(n-A)<=s;o.done=I&&M}return o.value=o.done?n:A,o},flipTarget:()=>{l=-l,[t,n]=[n,t],C()}}}to.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const Da=e=>0,nu=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},no=(e,t,n)=>-n*e+n*t+e,ru=(e,t)=>n=>Math.max(Math.min(n,t),e),xn=e=>e%1?Number(e.toFixed(5)):e,Kn=/(-)?([\d]*\.?[\d])+/g,vi=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,em=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Qn(e){return typeof e=="string"}const Zn={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Dn=Object.assign(Object.assign({},Zn),{transform:ru(0,1)}),hr=Object.assign(Object.assign({},Zn),{default:1}),ro=e=>({test:t=>Qn(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Ft=ro("deg"),Ln=ro("%"),W=ro("px"),La=Object.assign(Object.assign({},Ln),{parse:e=>Ln.parse(e)/100,transform:e=>Ln.transform(e*100)}),so=(e,t)=>n=>!!(Qn(n)&&em.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),su=(e,t,n)=>r=>{if(!Qn(r))return r;const[s,i,o,a]=r.match(Kn);return{[e]:parseFloat(s),[t]:parseFloat(i),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},Ht={test:so("hsl","hue"),parse:su("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Ln.transform(xn(t))+", "+Ln.transform(xn(n))+", "+xn(Dn.transform(r))+")"},tm=ru(0,255),Ms=Object.assign(Object.assign({},Zn),{transform:e=>Math.round(tm(e))}),Ct={test:so("rgb","red"),parse:su("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Ms.transform(e)+", "+Ms.transform(t)+", "+Ms.transform(n)+", "+xn(Dn.transform(r))+")"};function nm(e){let t="",n="",r="",s="";return e.length>5?(t=e.substr(1,2),n=e.substr(3,2),r=e.substr(5,2),s=e.substr(7,2)):(t=e.substr(1,1),n=e.substr(2,1),r=e.substr(3,1),s=e.substr(4,1),t+=t,n+=n,r+=r,s+=s),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:s?parseInt(s,16)/255:1}}const wi={test:so("#"),parse:nm,transform:Ct.transform},Se={test:e=>Ct.test(e)||wi.test(e)||Ht.test(e),parse:e=>Ct.test(e)?Ct.parse(e):Ht.test(e)?Ht.parse(e):wi.parse(e),transform:e=>Qn(e)?e:e.hasOwnProperty("red")?Ct.transform(e):Ht.transform(e)},iu="${c}",ou="${n}";function rm(e){var t,n,r,s;return isNaN(e)&&Qn(e)&&((n=(t=e.match(Kn))===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)+((s=(r=e.match(vi))===null||r===void 0?void 0:r.length)!==null&&s!==void 0?s:0)>0}function au(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0;const r=e.match(vi);r&&(n=r.length,e=e.replace(vi,iu),t.push(...r.map(Se.parse)));const s=e.match(Kn);return s&&(e=e.replace(Kn,ou),t.push(...s.map(Zn.parse))),{values:t,numColors:n,tokenised:e}}function cu(e){return au(e).values}function lu(e){const{values:t,numColors:n,tokenised:r}=au(e),s=t.length;return i=>{let o=r;for(let a=0;a<s;a++)o=o.replace(a<n?iu:ou,a<n?Se.transform(i[a]):xn(i[a]));return o}}const sm=e=>typeof e=="number"?0:e;function im(e){const t=cu(e);return lu(e)(t.map(sm))}const er={test:rm,parse:cu,createTransformer:lu,getAnimatableNone:im},om=new Set(["brightness","contrast","saturate","opacity"]);function am(e){let[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Kn)||[];if(!r)return e;const s=n.replace(r,"");let i=om.has(t)?1:0;return r!==n&&(i*=100),t+"("+i+s+")"}const cm=/([a-z-]*)\(.*?\)/g,Ii=Object.assign(Object.assign({},er),{getAnimatableNone:e=>{const t=e.match(cm);return t?t.map(am).join(" "):e}});function xs(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Ua({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let s=0,i=0,o=0;if(!t)s=i=o=n;else{const a=n<.5?n*(1+t):n+t-n*t,c=2*n-a;s=xs(c,a,e+1/3),i=xs(c,a,e),o=xs(c,a,e-1/3)}return{red:Math.round(s*255),green:Math.round(i*255),blue:Math.round(o*255),alpha:r}}const lm=(e,t,n)=>{const r=e*e,s=t*t;return Math.sqrt(Math.max(0,n*(s-r)+r))},um=[wi,Ct,Ht],Fa=e=>um.find(t=>t.test(e)),uu=(e,t)=>{let n=Fa(e),r=Fa(t),s=n.parse(e),i=r.parse(t);n===Ht&&(s=Ua(s),n=Ct),r===Ht&&(i=Ua(i),r=Ct);const o=Object.assign({},s);return a=>{for(const c in o)c!=="alpha"&&(o[c]=lm(s[c],i[c],a));return o.alpha=no(s.alpha,i.alpha,a),n.transform(o)}},fm=e=>typeof e=="number",dm=(e,t)=>n=>t(e(n)),fu=(...e)=>e.reduce(dm);function du(e,t){return fm(e)?n=>no(e,t,n):Se.test(e)?uu(e,t):pu(e,t)}const hu=(e,t)=>{const n=[...e],r=n.length,s=e.map((i,o)=>du(i,t[o]));return i=>{for(let o=0;o<r;o++)n[o]=s[o](i);return n}},hm=(e,t)=>{const n=Object.assign(Object.assign({},e),t),r={};for(const s in n)e[s]!==void 0&&t[s]!==void 0&&(r[s]=du(e[s],t[s]));return s=>{for(const i in r)n[i]=r[i](s);return n}};function ja(e){const t=er.parse(e),n=t.length;let r=0,s=0,i=0;for(let o=0;o<n;o++)r||typeof t[o]=="number"?r++:t[o].hue!==void 0?i++:s++;return{parsed:t,numNumbers:r,numRGB:s,numHSL:i}}const pu=(e,t)=>{const n=er.createTransformer(t),r=ja(e),s=ja(t);return r.numHSL===s.numHSL&&r.numRGB===s.numRGB&&r.numNumbers>=s.numNumbers?fu(hu(r.parsed,s.parsed),n):o=>`${o>0?t:e}`},pm=(e,t)=>n=>no(e,t,n);function gm(e){if(typeof e=="number")return pm;if(typeof e=="string")return Se.test(e)?uu:pu;if(Array.isArray(e))return hu;if(typeof e=="object")return hm}function mm(e,t,n){const r=[],s=n||gm(e[0]),i=e.length-1;for(let o=0;o<i;o++){let a=s(e[o],e[o+1]);if(t){const c=Array.isArray(t)?t[o]:t;a=fu(c,a)}r.push(a)}return r}function ym([e,t],[n]){return r=>n(nu(e,t,r))}function _m(e,t){const n=e.length,r=n-1;return s=>{let i=0,o=!1;if(s<=e[0]?o=!0:s>=e[r]&&(i=r-1,o=!0),!o){let c=1;for(;c<n&&!(e[c]>s||c===r);c++);i=c-1}const a=nu(e[i],e[i+1],s);return t[i](a)}}function gu(e,t,{clamp:n=!0,ease:r,mixer:s}={}){const i=e.length;Ma(i===t.length),Ma(!r||!Array.isArray(r)||r.length===i-1),e[0]>e[i-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());const o=mm(t,r,s),a=i===2?ym(e,o):_m(e,o);return n?c=>a(_i(e[0],e[i-1],c)):a}const fs=e=>t=>1-e(1-t),io=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,bm=e=>t=>Math.pow(t,e),mu=e=>t=>t*t*((e+1)*t-e),vm=e=>{const t=mu(e);return n=>(n*=2)<1?.5*t(n):.5*(2-Math.pow(2,-10*(n-1)))},yu=1.525,wm=4/11,Im=8/11,Em=9/10,_u=e=>e,oo=bm(2),Sm=fs(oo),bu=io(oo),vu=e=>1-Math.sin(Math.acos(e)),wu=fs(vu),Tm=io(wu),ao=mu(yu),Am=fs(ao),Om=io(ao),Cm=vm(yu),Rm=4356/361,Pm=35442/1805,km=16061/1805,Ur=e=>{if(e===1||e===0)return e;const t=e*e;return e<wm?7.5625*t:e<Im?9.075*t-9.9*e+3.4:e<Em?Rm*t-Pm*e+km:10.8*e*e-20.52*e+10.72},Nm=fs(Ur),Mm=e=>e<.5?.5*(1-Ur(1-e*2)):.5*Ur(e*2-1)+.5;function xm(e,t){return e.map(()=>t||bu).splice(0,e.length-1)}function Dm(e){const t=e.length;return e.map((n,r)=>r!==0?r/(t-1):0)}function Lm(e,t){return e.map(n=>n*t)}function Tr({from:e=0,to:t=1,ease:n,offset:r,duration:s=300}){const i={done:!1,value:e},o=Array.isArray(t)?t:[e,t],a=Lm(r&&r.length===o.length?r:Dm(o),s);function c(){return gu(a,o,{ease:Array.isArray(n)?n:xm(o,n)})}let u=c();return{next:l=>(i.value=u(l),i.done=l>=s,i),flipTarget:()=>{o.reverse(),u=c()}}}function Um({velocity:e=0,from:t=0,power:n=.8,timeConstant:r=350,restDelta:s=.5,modifyTarget:i}){const o={done:!1,value:t};let a=n*e;const c=t+a,u=i===void 0?c:i(c);return u!==c&&(a=u-t),{next:l=>{const f=-a*Math.exp(-l/r);return o.done=!(f>s||f<-s),o.value=o.done?u:u+f,o},flipTarget:()=>{}}}const $a={keyframes:Tr,spring:to,decay:Um};function Fm(e){if(Array.isArray(e.to))return Tr;if($a[e.type])return $a[e.type];const t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?Tr:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?to:Tr}function Iu(e,t,n=0){return e-t-n}function jm(e,t,n=0,r=!0){return r?Iu(t+-e,t,n):t-(e-t)+n}function $m(e,t,n,r){return r?e>=t+n:e<=-n}const Vm=e=>{const t=({delta:n})=>e(n);return{start:()=>yi.update(t,!0),stop:()=>Vg.update(t)}};function Eu(e){var t,n,{from:r,autoplay:s=!0,driver:i=Vm,elapsed:o=0,repeat:a=0,repeatType:c="loop",repeatDelay:u=0,onPlay:l,onStop:f,onComplete:h,onRepeat:m,onUpdate:y}=e,C=tu(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:x}=C,A,O=0,I=C.duration,M,j=!1,D=!0,Y;const ce=Fm(C);!((n=(t=ce).needsInterpolation)===null||n===void 0)&&n.call(t,r,x)&&(Y=gu([0,100],[r,x],{clamp:!1}),r=0,x=100);const le=ce(Object.assign(Object.assign({},C),{from:r,to:x}));function we(){O++,c==="reverse"?(D=O%2===0,o=jm(o,I,u,D)):(o=Iu(o,I,u),c==="mirror"&&le.flipTarget()),j=!1,m&&m()}function $e(){A.stop(),h&&h()}function Ve(Me){if(D||(Me=-Me),o+=Me,!j){const gt=le.next(Math.max(0,o));M=gt.value,Y&&(M=Y(M)),j=D?gt.done:o<=0}y==null||y(M),j&&(O===0&&(I??(I=o)),O<a?$m(o,I,u,D)&&we():$e())}function pt(){l==null||l(),A=i(Ve),A.start()}return s&&pt(),{stop:()=>{f==null||f(),A.stop()}}}function Su(e,t){return t?e*(1e3/t):0}function Bm({from:e=0,velocity:t=0,min:n,max:r,power:s=.8,timeConstant:i=750,bounceStiffness:o=500,bounceDamping:a=10,restDelta:c=1,modifyTarget:u,driver:l,onUpdate:f,onComplete:h,onStop:m}){let y;function C(I){return n!==void 0&&I<n||r!==void 0&&I>r}function x(I){return n===void 0?r:r===void 0||Math.abs(n-I)<Math.abs(r-I)?n:r}function A(I){y==null||y.stop(),y=Eu(Object.assign(Object.assign({},I),{driver:l,onUpdate:M=>{var j;f==null||f(M),(j=I.onUpdate)===null||j===void 0||j.call(I,M)},onComplete:h,onStop:m}))}function O(I){A(Object.assign({type:"spring",stiffness:o,damping:a,restDelta:c},I))}if(C(e))O({from:e,velocity:t,to:x(e)});else{let I=s*t+e;typeof u<"u"&&(I=u(I));const M=x(I),j=M===n?-1:1;let D,Y;const ce=le=>{D=Y,Y=le,t=Su(le-D,eu().delta),(j===1&&le>M||j===-1&&le<M)&&O({from:le,to:M,velocity:t})};A({type:"decay",from:e,velocity:t,timeConstant:i,power:s,restDelta:c,modifyTarget:u,onUpdate:C(I)?ce:void 0})}return{stop:()=>y==null?void 0:y.stop()}}const Tu=(e,t)=>1-3*t+3*e,Au=(e,t)=>3*t-6*e,Ou=e=>3*e,Fr=(e,t,n)=>((Tu(t,n)*e+Au(t,n))*e+Ou(t))*e,Cu=(e,t,n)=>3*Tu(t,n)*e*e+2*Au(t,n)*e+Ou(t),Hm=1e-7,Wm=10;function Km(e,t,n,r,s){let i,o,a=0;do o=t+(n-t)/2,i=Fr(o,r,s)-e,i>0?n=o:t=o;while(Math.abs(i)>Hm&&++a<Wm);return o}const qm=8,zm=.001;function Gm(e,t,n,r){for(let s=0;s<qm;++s){const i=Cu(t,n,r);if(i===0)return t;const o=Fr(t,n,r)-e;t-=o/i}return t}const Ar=11,pr=1/(Ar-1);function Jm(e,t,n,r){if(e===t&&n===r)return _u;const s=new Float32Array(Ar);for(let o=0;o<Ar;++o)s[o]=Fr(o*pr,e,n);function i(o){let a=0,c=1;const u=Ar-1;for(;c!==u&&s[c]<=o;++c)a+=pr;--c;const l=(o-s[c])/(s[c+1]-s[c]),f=a+l*pr,h=Cu(f,e,n);return h>=zm?Gm(o,f,e,n):h===0?f:Km(o,a,a+pr,e,n)}return o=>o===0||o===1?o:Fr(i(o),t,r)}var co={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const Ds={};var Ym=Object.defineProperty,Xm=(e,t,n)=>t in e?Ym(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Qm=(e,t,n)=>(Xm(e,t+"",n),n);class Zm{constructor(){Qm(this,"subscriptions",new Set)}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,n,r){if(this.subscriptions.size)for(const s of this.subscriptions)s(t,n,r)}clear(){this.subscriptions.clear()}}var ey=Object.defineProperty,ty=(e,t,n)=>t in e?ey(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ke=(e,t,n)=>(ty(e,typeof t!="symbol"?t+"":t,n),n);function Va(e){return!Number.isNaN(Number.parseFloat(e))}class ny{constructor(t){Ke(this,"current"),Ke(this,"prev"),Ke(this,"timeDelta",0),Ke(this,"lastUpdated",0),Ke(this,"updateSubscribers",new Zm),Ke(this,"stopAnimation"),Ke(this,"canTrackVelocity",!1),Ke(this,"updateAndNotify",n=>{this.prev=this.current,this.current=n;const{delta:r,timestamp:s}=eu();this.lastUpdated!==s&&(this.timeDelta=r,this.lastUpdated=s),yi.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)}),Ke(this,"scheduleVelocityCheck",()=>yi.postRender(this.velocityCheck)),Ke(this,"velocityCheck",({timestamp:n})=>{this.canTrackVelocity||(this.canTrackVelocity=Va(this.current)),n!==this.lastUpdated&&(this.prev=this.current)}),this.prev=this.current=t,this.canTrackVelocity=Va(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Su(Number.parseFloat(this.current)-Number.parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{const{stop:r}=t(n);this.stopAnimation=r}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function ry(e){return new ny(e)}const{isArray:sy}=Array;function iy(){const e=Ne({}),t=r=>{const s=i=>{e.value[i]&&(e.value[i].stop(),e.value[i].destroy(),delete e.value[i])};r?sy(r)?r.forEach(s):s(r):Object.keys(e.value).forEach(s)},n=(r,s,i)=>{if(e.value[r])return e.value[r];const o=ry(s);return o.onChange(a=>i[r]=a),e.value[r]=o,o};return xg(t),{motionValues:e,get:n,stop:t}}function oy(e){return Array.isArray(e)}function jt(){return{type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}}function Ls(e){return{type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}}function ay(e){return{type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}}function Us(){return{type:"keyframes",ease:"linear",duration:300}}function cy(e){return{type:"keyframes",duration:800,values:e}}const Ba={default:ay,x:jt,y:jt,z:jt,rotate:jt,rotateX:jt,rotateY:jt,rotateZ:jt,scaleX:Ls,scaleY:Ls,scale:Ls,backgroundColor:Us,color:Us,opacity:Us};function Ru(e,t){let n;return oy(t)?n=cy:n=Ba[e]||Ba.default,{to:t,...n(t)}}const Ha={...Zn,transform:Math.round},Pu={color:Se,backgroundColor:Se,outlineColor:Se,fill:Se,stroke:Se,borderColor:Se,borderTopColor:Se,borderRightColor:Se,borderBottomColor:Se,borderLeftColor:Se,borderWidth:W,borderTopWidth:W,borderRightWidth:W,borderBottomWidth:W,borderLeftWidth:W,borderRadius:W,radius:W,borderTopLeftRadius:W,borderTopRightRadius:W,borderBottomRightRadius:W,borderBottomLeftRadius:W,width:W,maxWidth:W,height:W,maxHeight:W,size:W,top:W,right:W,bottom:W,left:W,padding:W,paddingTop:W,paddingRight:W,paddingBottom:W,paddingLeft:W,margin:W,marginTop:W,marginRight:W,marginBottom:W,marginLeft:W,rotate:Ft,rotateX:Ft,rotateY:Ft,rotateZ:Ft,scale:hr,scaleX:hr,scaleY:hr,scaleZ:hr,skew:Ft,skewX:Ft,skewY:Ft,distance:W,translateX:W,translateY:W,translateZ:W,x:W,y:W,z:W,perspective:W,transformPerspective:W,opacity:Dn,originX:La,originY:La,originZ:W,zIndex:Ha,filter:Ii,WebkitFilter:Ii,fillOpacity:Dn,strokeOpacity:Dn,numOctaves:Ha},lo=e=>Pu[e];function Ei(e,t){return t&&typeof e=="number"&&t.transform?t.transform(e):e}function ly(e,t){let n=lo(e);return n!==Ii&&(n=er),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const uy={linear:_u,easeIn:oo,easeInOut:bu,easeOut:Sm,circIn:vu,circInOut:Tm,circOut:wu,backIn:ao,backInOut:Om,backOut:Am,anticipate:Cm,bounceIn:Nm,bounceInOut:Mm,bounceOut:Ur};function Wa(e){if(Array.isArray(e)){const[t,n,r,s]=e;return Jm(t,n,r,s)}else if(typeof e=="string")return uy[e];return e}function fy(e){return Array.isArray(e)&&typeof e[0]!="number"}function Ka(e,t){return e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&er.test(t)&&!t.startsWith("url("))}function dy(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function hy({ease:e,times:t,delay:n,...r}){const s={...r};return t&&(s.offset=t),e&&(s.ease=fy(e)?e.map(Wa):Wa(e)),n&&(s.elapsed=-n),s}function py(e,t,n){return Array.isArray(t.to)&&(e.duration||(e.duration=800)),dy(t),gy(e)||(e={...e,...Ru(n,t.to)}),{...t,...hy(e)}}function gy({delay:e,repeat:t,repeatType:n,repeatDelay:r,from:s,...i}){return!!Object.keys(i).length}function my(e,t){return e[t]||e.default||e}function yy(e,t,n,r,s){const i=my(r,e);let o=i.from===null||i.from===void 0?t.get():i.from;const a=Ka(e,n);o==="none"&&a&&typeof n=="string"&&(o=ly(e,n));const c=Ka(e,o);function u(f){const h={from:o,to:n,velocity:r.velocity?r.velocity:t.getVelocity(),onUpdate:m=>t.set(m)};return i.type==="inertia"||i.type==="decay"?Bm({...h,...i}):Eu({...py(i,h,e),onUpdate:m=>{h.onUpdate(m),i.onUpdate&&i.onUpdate(m)},onComplete:()=>{s&&s(),f&&f()}})}function l(f){return t.set(n),s&&s(),f&&f(),{stop:()=>{}}}return!c||!a||i.type===!1?l:u}function _y(){const{motionValues:e,stop:t,get:n}=iy();return{motionValues:e,stop:t,push:(s,i,o,a={},c)=>{const u=o[s],l=n(s,u,o);if(a&&a.immediate){l.set(i);return}const f=yy(s,l,i,a,c);l.start(f)}}}function by(e,t={},{motionValues:n,push:r,stop:s}=_y()){const i=Pe(t),o=Ne(!1);me(n,f=>{o.value=Object.values(f).filter(h=>h.isAnimating()).length>0},{immediate:!0,deep:!0});const a=f=>{if(!i||!i[f])throw new Error(`The variant ${f} does not exist.`);return i[f]},c=f=>{typeof f=="string"&&(f=a(f));const h=Object.entries(f).map(([y,C])=>{if(y!=="transition")return new Promise(x=>r(y,C,e,f.transition||Ru(y,f[y]),x))}).filter(Boolean);async function m(){var y,C;await Promise.all(h),(C=(y=f.transition)==null?void 0:y.onComplete)==null||C.call(y)}return Promise.all([m()])};return{isAnimating:o,apply:c,set:f=>{const h=Lr(f)?f:a(f);Object.entries(h).forEach(([m,y])=>{m!=="transition"&&r(m,y,e,{immediate:!0})})},leave:async f=>{let h;if(i&&(i.leave&&(h=i.leave),!i.leave&&i.initial&&(h=i.initial)),!h){f();return}await c(h),f()},stop:s}}const uo=typeof window<"u",vy=()=>uo&&(window.onpointerdown===null||co.TEST),wy=()=>uo&&(window.ontouchstart===null||co.TEST),Iy=()=>uo&&(window.onmousedown===null||co.TEST);function Ey({target:e,state:t,variants:n,apply:r}){const s=Pe(n),i=Ne(!1),o=Ne(!1),a=Ne(!1),c=de(()=>{let l=[...Object.keys(t.value||{})];return s&&(s.hovered&&(l=[...l,...Object.keys(s.hovered)]),s.tapped&&(l=[...l,...Object.keys(s.tapped)]),s.focused&&(l=[...l,...Object.keys(s.focused)])),l}),u=de(()=>{const l={};Object.assign(l,t.value),i.value&&s.hovered&&Object.assign(l,s.hovered),o.value&&s.tapped&&Object.assign(l,s.tapped),a.value&&s.focused&&Object.assign(l,s.focused);for(const f in l)c.value.includes(f)||delete l[f];return l});s.hovered&&(We(e,"mouseenter",()=>i.value=!0),We(e,"mouseleave",()=>{i.value=!1,o.value=!1})),s.tapped&&(Iy()&&(We(e,"mousedown",()=>o.value=!0),We(e,"mouseup",()=>o.value=!1)),vy()&&(We(e,"pointerdown",()=>o.value=!0),We(e,"pointerup",()=>o.value=!1)),wy()&&(We(e,"touchstart",()=>o.value=!0),We(e,"touchend",()=>o.value=!1))),s.focused&&(We(e,"focus",()=>a.value=!0),We(e,"blur",()=>a.value=!1)),me([i,o,a],()=>{r(u.value)})}function Sy({set:e,target:t,variants:n,variant:r}){const s=Pe(n);me(()=>t,()=>{s&&(s.initial&&(e("initial"),r.value="initial"),s.enter&&(r.value="enter"))},{immediate:!0,flush:"pre"})}function Ty({state:e,apply:t}){me(e,n=>{n&&t(n)},{immediate:!0})}function ku({target:e,variants:t,variant:n}){const r=Pe(t);r&&(r.visible||r.visibleOnce)&&Ug(e,([{isIntersecting:s}])=>{r.visible?s?n.value="visible":n.value="initial":r.visibleOnce&&(s&&n.value!=="visibleOnce"?n.value="visibleOnce":n.value||(n.value="initial"))})}function Ay(e,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){t.lifeCycleHooks&&Sy(e),t.syncVariants&&Ty(e),t.visibilityHooks&&ku(e),t.eventListeners&&Ey(e)}function Nu(e={}){const t=ut({...e}),n=Ne({});return me(t,()=>{const r={};for(const[s,i]of Object.entries(t)){const o=lo(s),a=Ei(i,o);r[s]=a}n.value=r},{immediate:!0,deep:!0}),{state:t,style:n}}function fo(e,t){me(()=>Mn(e),n=>{n&&t(n)},{immediate:!0})}const Oy={x:"translateX",y:"translateY",z:"translateZ"};function Mu(e={},t=!0){const n=ut({...e}),r=Ne("");return me(n,s=>{let i="",o=!1;if(t&&(s.x||s.y||s.z)){const a=[s.x||0,s.y||0,s.z||0].map(c=>Ei(c,W)).join(",");i+=`translate3d(${a}) `,o=!0}for(const[a,c]of Object.entries(s)){if(t&&(a==="x"||a==="y"||a==="z"))continue;const u=lo(a),l=Ei(c,u);i+=`${Oy[a]||a}(${l}) `}t&&!o&&(i+="translateZ(0px) "),r.value=i.trim()},{immediate:!0,deep:!0}),{state:n,transform:r}}const Cy=["","X","Y","Z"],Ry=["perspective","translate","scale","rotate","skew"],xu=["transformPerspective","x","y","z"];Ry.forEach(e=>{Cy.forEach(t=>{const n=e+t;xu.push(n)})});const Py=new Set(xu);function ho(e){return Py.has(e)}const ky=new Set(["originX","originY","originZ"]);function Du(e){return ky.has(e)}function Ny(e){const t={},n={};return Object.entries(e).forEach(([r,s])=>{ho(r)||Du(r)?t[r]=s:n[r]=s}),{transform:t,style:n}}function po(e){const{transform:t,style:n}=Ny(e),{transform:r}=Mu(t),{style:s}=Nu(n);return r.value&&(s.value.transform=r.value),s.value}function My(e,t){let n,r;const{state:s,style:i}=Nu();return fo(e,o=>{r=o;for(const a of Object.keys(Pu))o.style[a]===null||o.style[a]===""||ho(a)||Du(a)||(s[a]=o.style[a]);n&&Object.entries(n).forEach(([a,c])=>o.style[a]=c),t&&t(s)}),me(i,o=>{if(!r){n=o;return}for(const a in o)r.style[a]=o[a]},{immediate:!0}),{style:s}}function xy(e){const t=e.trim().split(/\) |\)/);if(t.length===1)return{};const n=r=>r.endsWith("px")||r.endsWith("deg")?Number.parseFloat(r):Number.isNaN(Number(r))?Number(r):r;return t.reduce((r,s)=>{if(!s)return r;const[i,o]=s.split("("),c=o.split(",").map(l=>n(l.endsWith(")")?l.replace(")",""):l.trim())),u=c.length===1?c[0]:c;return{...r,[i]:u}},{})}function Dy(e,t){Object.entries(xy(t)).forEach(([n,r])=>{const s=["x","y","z"];if(n==="translate3d"){if(r===0){s.forEach(i=>e[i]=0);return}r.forEach((i,o)=>e[s[o]]=i);return}if(r=Number.parseFloat(`${r}`),n==="translateX"){e.x=r;return}if(n==="translateY"){e.y=r;return}if(n==="translateZ"){e.z=r;return}e[n]=r})}function Ly(e,t){let n,r;const{state:s,transform:i}=Mu();return fo(e,o=>{r=o,o.style.transform&&Dy(s,o.style.transform),n&&(o.style.transform=n),t&&t(s)}),me(i,o=>{if(!r){n=o;return}r.style.transform=o},{immediate:!0}),{transform:s}}function Uy(e,t){const n=ut({}),r=o=>Object.entries(o).forEach(([a,c])=>n[a]=c),{style:s}=My(e,r),{transform:i}=Ly(e,r);return me(n,o=>{Object.entries(o).forEach(([a,c])=>{const u=ho(a)?i:s;u[a]&&u[a]===c||(u[a]=c)})},{immediate:!0,deep:!0}),fo(e,()=>t),{motionProperties:n,style:s,transform:i}}function Fy(e={}){const t=Pe(e),n=Ne();return{state:de(()=>{if(n.value)return t[n.value]}),variant:n}}function Lu(e,t={},n){const{motionProperties:r}=Uy(e),{variant:s,state:i}=Fy(t),o=by(r,t),a={target:e,variant:s,variants:t,state:i,motionProperties:r,...o};return Ay(a,n),a}const Uu=["delay","duration"],jy=["initial","enter","leave","visible","visible-once","visibleOnce","hovered","tapped","focused",...Uu];function $y(e){return Uu.includes(e)}function Vy(e,t){const n=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};if(n){n.variants&&Lr(n.variants)&&(t.value={...t.value,...n.variants});for(let r of jy)if(!(!n||!n[r])){if($y(r)&&typeof n[r]=="number"){for(const s of["enter","visible","visibleOnce"]){const i=t.value[s];i!=null&&(i.transition??(i.transition={}),i.transition[r]=n[r])}continue}if(Lr(n[r])){const s=n[r];r==="visible-once"&&(r="visibleOnce"),t.value[r]=s}}}}function Fs(e,t=!1){return{created:(s,i,o)=>{const a=i.value&&typeof i.value=="string"?i.value:o.key;a&&Ds[a]&&Ds[a].stop();const c=t?structuredClone(e||{}):e||{},u=Ne(c);typeof i.value=="object"&&(u.value=i.value),Vy(o,u);const f=Lu(s,u,{eventListeners:!0,lifeCycleHooks:!0,syncVariants:!0,visibilityHooks:!1});s.motionInstance=f,a&&(Ds[a]=f)},mounted:(s,i,o)=>{s.motionInstance&&ku(s.motionInstance)},getSSRProps(s,i){let{initial:o}=s.value||i&&(i==null?void 0:i.props)||{};o=Pe(o);const a=Gl({},(e==null?void 0:e.initial)||{},o||{});return!a||Object.keys(a).length===0?void 0:{style:po(a)}}}}const By={initial:{opacity:0},enter:{opacity:1}},Hy={initial:{opacity:0},visible:{opacity:1}},Wy={initial:{opacity:0},visibleOnce:{opacity:1}},Ky={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},qy={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},zy={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},Gy={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},Jy={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},Yy={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},Xy={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},Qy={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},Zy={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},e_={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},t_={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},n_={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},r_={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},s_={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},i_={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},o_={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},a_={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},c_={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},l_={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},u_={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},f_={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},d_={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},h_={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},p_={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},g_={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},m_={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},y_={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},jr={__proto__:null,fade:By,fadeVisible:Hy,fadeVisibleOnce:Wy,pop:Ky,popVisible:qy,popVisibleOnce:zy,rollBottom:r_,rollLeft:Gy,rollRight:Xy,rollTop:e_,rollVisibleBottom:s_,rollVisibleLeft:Jy,rollVisibleOnceBottom:i_,rollVisibleOnceLeft:Yy,rollVisibleOnceRight:Zy,rollVisibleOnceTop:n_,rollVisibleRight:Qy,rollVisibleTop:t_,slideBottom:g_,slideLeft:o_,slideRight:l_,slideTop:d_,slideVisibleBottom:m_,slideVisibleLeft:a_,slideVisibleOnceBottom:y_,slideVisibleOnceLeft:c_,slideVisibleOnceRight:f_,slideVisibleOnceTop:p_,slideVisibleRight:u_,slideVisibleTop:h_};function __(e){const t="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",n="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",r=new RegExp(t.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,s=>`-${s}`).toLowerCase().replace(/\s+/g,"-").replace(r,s=>n.charAt(t.indexOf(s))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/-{2,}/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const b_=e=>e in jr,Fu={preset:{type:String,validator:e=>b_(e),required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1},duration:{type:[Number,String],required:!1}};function ju(e){const t=ut({}),n=de(()=>e.preset?structuredClone(jr[e.preset]):{}),r=de(()=>({initial:e.initial,enter:e.enter,leave:e.leave,visible:e.visible,visibleOnce:e.visibleOnce,hovered:e.hovered,tapped:e.tapped,focused:e.focused})),s=de(()=>{const o=Gl({},r.value,n.value,e.variants||{});for(const a of["delay","duration"]){if(!e[a])continue;const c=Number.parseInt(e[a]);for(const u of["enter","visible","visibleOnce"]){const l=o[u];l!=null&&(l.transition??(l.transition={}),l.transition[a]=c)}}return o});function i(o,a,c){var u;return o.props??(o.props={}),(u=o.props).style??(u.style={}),o.props.style={...o.props.style,...c},o.props.onVnodeMounted=({el:l})=>{t[a]=Lu(l,s.value)},o}return{motionConfig:s,setNodeInstance:i}}const v_=ns({props:{...Fu,is:{type:[String,Object],default:"div"}},setup(e){const t=pl(),{motionConfig:n,setNodeInstance:r}=ju(e);return()=>{const s=po(n.value.initial||{}),i=as(e.is,void 0,t);return r(i,0,s),i}}}),w_=ns({props:{...Fu,is:{type:[String,Object],required:!1}},setup(e){const t=pl(),{motionConfig:n,setNodeInstance:r}=ju(e);return()=>{var o;const s=po(n.value.initial||{}),i=((o=t.default)==null?void 0:o.call(t))||[];for(let a=0;a<i.length;a++)r(i[a],a,s);return e.is?as(e.is,void 0,i):i}}}),I_={install(e,t){if(e.directive("motion",Fs()),e.component("Motion",v_),e.component("MotionGroup",w_),!t||t&&!t.excludePresets)for(const n in jr){const r=jr[n];e.directive(`motion-${__(n)}`,Fs(r,!0))}if(t&&t.directives)for(const n in t.directives){const r=t.directives[n];!r.initial&&__DEV__&&console.warn(`Your directive v-motion-${n} is missing initial variant!`),e.directive(`motion-${n}`,Fs(r,!0))}}};var qa={};/**
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
 */const $u=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},E_=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Vu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,c=s+2<e.length,u=c?e[s+2]:0,l=i>>2,f=(i&3)<<4|a>>4;let h=(a&15)<<2|u>>6,m=u&63;c||(m=64,o||(h=64)),r.push(n[l],n[f],n[h],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray($u(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):E_(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const u=s<e.length?n[e.charAt(s)]:64;++s;const f=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||u==null||f==null)throw new S_;const h=i<<2|a>>4;if(r.push(h),u!==64){const m=a<<4&240|u>>2;if(r.push(m),f!==64){const y=u<<6&192|f;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class S_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const T_=function(e){const t=$u(e);return Vu.encodeByteArray(t,!0)},$r=function(e){return T_(e).replace(/\./g,"")},Bu=function(e){try{return Vu.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function A_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const O_=()=>A_().__FIREBASE_DEFAULTS__,C_=()=>{if(typeof process>"u"||typeof qa>"u")return;const e=qa.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},R_=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Bu(e[1]);return t&&JSON.parse(t)},ds=()=>{try{return O_()||C_()||R_()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Hu=e=>{var t,n;return(n=(t=ds())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},FI=e=>{const t=Hu(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Wu=()=>{var e;return(e=ds())===null||e===void 0?void 0:e.config},Ku=e=>{var t;return(t=ds())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class P_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function jI(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[$r(JSON.stringify(n)),$r(JSON.stringify(o)),""].join(".")}/**
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
 */function ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function k_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ye())}function N_(){var e;const t=(e=ds())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function M_(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function x_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function D_(){const e=ye();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function $I(){return!N_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function qu(){try{return typeof indexedDB=="object"}catch{return!1}}function zu(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function L_(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const U_="FirebaseError";class dt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=U_,Object.setPrototypeOf(this,dt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,tn.prototype.create)}}class tn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?F_(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new dt(s,a,r)}}function F_(e,t){return e.replace(j_,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const j_=/\{\$([^}]+)}/g;function $_(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Vr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(za(i)&&za(o)){if(!Vr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function za(e){return e!==null&&typeof e=="object"}/**
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
 */function tr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function V_(e,t){const n=new B_(e,t);return n.subscribe.bind(n)}class B_{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let s;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");H_(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:r},s.next===void 0&&(s.next=js),s.error===void 0&&(s.error=js),s.complete===void 0&&(s.complete=js);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function H_(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function js(){}/**
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
 */function ht(e){return e&&e._delegate?e._delegate:e}class Qe{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const $t="[DEFAULT]";/**
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
 */class W_{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new P_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(q_(t))try{this.getOrInitializeService({instanceIdentifier:$t})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=$t){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=$t){return this.instances.has(t)}getOptions(t=$t){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:K_(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=$t){return this.component?this.component.multipleInstances?t:$t:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function K_(e){return e===$t?void 0:e}function q_(e){return e.instantiationMode==="EAGER"}/**
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
 */class z_{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new W_(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ne;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ne||(ne={}));const G_={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},J_=ne.INFO,Y_={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},X_=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=Y_[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Gu{constructor(t){this.name=t,this._logLevel=J_,this._logHandler=X_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ne))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?G_[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...t),this._logHandler(this,ne.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...t),this._logHandler(this,ne.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...t),this._logHandler(this,ne.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...t),this._logHandler(this,ne.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...t),this._logHandler(this,ne.ERROR,...t)}}const Q_=(e,t)=>t.some(n=>e instanceof n);let Ga,Ja;function Z_(){return Ga||(Ga=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function eb(){return Ja||(Ja=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ju=new WeakMap,Si=new WeakMap,Yu=new WeakMap,$s=new WeakMap,go=new WeakMap;function tb(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(at(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Ju.set(n,e)}).catch(()=>{}),go.set(t,e),t}function nb(e){if(Si.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Si.set(e,t)}let Ti={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Si.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Yu.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return at(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function rb(e){Ti=e(Ti)}function sb(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Vs(this),t,...n);return Yu.set(r,t.sort?t.sort():[t]),at(r)}:eb().includes(e)?function(...t){return e.apply(Vs(this),t),at(Ju.get(this))}:function(...t){return at(e.apply(Vs(this),t))}}function ib(e){return typeof e=="function"?sb(e):(e instanceof IDBTransaction&&nb(e),Q_(e,Z_())?new Proxy(e,Ti):e)}function at(e){if(e instanceof IDBRequest)return tb(e);if($s.has(e))return $s.get(e);const t=ib(e);return t!==e&&($s.set(e,t),go.set(t,e)),t}const Vs=e=>go.get(e);function hs(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=at(o);return r&&o.addEventListener("upgradeneeded",c=>{r(at(o.result),c.oldVersion,c.newVersion,at(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}function Bs(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",r=>t(r.oldVersion,r)),at(n).then(()=>{})}const ob=["get","getKey","getAll","getAllKeys","count"],ab=["put","add","delete","clear"],Hs=new Map;function Ya(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Hs.get(t))return Hs.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=ab.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ob.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return Hs.set(t,i),i}rb(e=>({...e,get:(t,n,r)=>Ya(t,n)||e.get(t,n,r),has:(t,n)=>!!Ya(t,n)||e.has(t,n)}));/**
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
 */class cb{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(lb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function lb(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ai="@firebase/app",Xa="0.10.5";/**
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
 */const Yt=new Gu("@firebase/app"),ub="@firebase/app-compat",fb="@firebase/analytics-compat",db="@firebase/analytics",hb="@firebase/app-check-compat",pb="@firebase/app-check",gb="@firebase/auth",mb="@firebase/auth-compat",yb="@firebase/database",_b="@firebase/database-compat",bb="@firebase/functions",vb="@firebase/functions-compat",wb="@firebase/installations",Ib="@firebase/installations-compat",Eb="@firebase/messaging",Sb="@firebase/messaging-compat",Tb="@firebase/performance",Ab="@firebase/performance-compat",Ob="@firebase/remote-config",Cb="@firebase/remote-config-compat",Rb="@firebase/storage",Pb="@firebase/storage-compat",kb="@firebase/firestore",Nb="@firebase/vertexai-preview",Mb="@firebase/firestore-compat",xb="firebase",Db="10.12.2";/**
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
 */const Oi="[DEFAULT]",Lb={[Ai]:"fire-core",[ub]:"fire-core-compat",[db]:"fire-analytics",[fb]:"fire-analytics-compat",[pb]:"fire-app-check",[hb]:"fire-app-check-compat",[gb]:"fire-auth",[mb]:"fire-auth-compat",[yb]:"fire-rtdb",[_b]:"fire-rtdb-compat",[bb]:"fire-fn",[vb]:"fire-fn-compat",[wb]:"fire-iid",[Ib]:"fire-iid-compat",[Eb]:"fire-fcm",[Sb]:"fire-fcm-compat",[Tb]:"fire-perf",[Ab]:"fire-perf-compat",[Ob]:"fire-rc",[Cb]:"fire-rc-compat",[Rb]:"fire-gcs",[Pb]:"fire-gcs-compat",[kb]:"fire-fst",[Mb]:"fire-fst-compat",[Nb]:"fire-vertex","fire-js":"fire-js",[xb]:"fire-js-all"};/**
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
 */const Br=new Map,Ub=new Map,Ci=new Map;function Qa(e,t){try{e.container.addComponent(t)}catch(n){Yt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ct(e){const t=e.name;if(Ci.has(t))return Yt.debug(`There were multiple attempts to register component ${t}.`),!1;Ci.set(t,e);for(const n of Br.values())Qa(n,e);for(const n of Ub.values())Qa(n,e);return!0}function nr(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function nt(e){return e.settings!==void 0}/**
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
 */const Fb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},kt=new tn("app","Firebase",Fb);/**
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
 */class jb{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Qe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw kt.create("app-deleted",{appName:this._name})}}/**
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
 */const rr=Db;function Xu(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Oi,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw kt.create("bad-app-name",{appName:String(s)});if(n||(n=Wu()),!n)throw kt.create("no-options");const i=Br.get(s);if(i){if(Vr(n,i.options)&&Vr(r,i.config))return i;throw kt.create("duplicate-app",{appName:s})}const o=new z_(s);for(const c of Ci.values())o.addComponent(c);const a=new jb(n,r,o);return Br.set(s,a),a}function Qu(e=Oi){const t=Br.get(e);if(!t&&e===Oi&&Wu())return Xu();if(!t)throw kt.create("no-app",{appName:e});return t}function Je(e,t,n){var r;let s=(r=Lb[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Yt.warn(a.join(" "));return}ct(new Qe(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const $b="firebase-heartbeat-database",Vb=1,qn="firebase-heartbeat-store";let Ws=null;function Zu(){return Ws||(Ws=hs($b,Vb,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(qn)}catch(n){console.warn(n)}}}}).catch(e=>{throw kt.create("idb-open",{originalErrorMessage:e.message})})),Ws}async function Bb(e){try{const n=(await Zu()).transaction(qn),r=await n.objectStore(qn).get(ef(e));return await n.done,r}catch(t){if(t instanceof dt)Yt.warn(t.message);else{const n=kt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Yt.warn(n.message)}}}async function Za(e,t){try{const r=(await Zu()).transaction(qn,"readwrite");await r.objectStore(qn).put(t,ef(e)),await r.done}catch(n){if(n instanceof dt)Yt.warn(n.message);else{const r=kt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Yt.warn(r.message)}}}function ef(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Hb=1024,Wb=30*24*60*60*1e3;class Kb{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new zb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ec();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Wb}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ec(),{heartbeatsToSend:r,unsentEntries:s}=qb(this._heartbeatsCache.heartbeats),i=$r(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ec(){return new Date().toISOString().substring(0,10)}function qb(e,t=Hb){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),tc(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),tc(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class zb{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qu()?zu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Bb(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Za(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Za(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function tc(e){return $r(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Gb(e){ct(new Qe("platform-logger",t=>new cb(t),"PRIVATE")),ct(new Qe("heartbeat",t=>new Kb(t),"PRIVATE")),Je(Ai,Xa,e),Je(Ai,Xa,"esm2017"),Je("fire-js","")}Gb("");var Jb="firebase",Yb="10.12.2";/**
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
 */Je(Jb,Yb,"app");const tf="@firebase/installations",mo="0.6.7";/**
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
 */const nf=1e4,rf=`w:${mo}`,sf="FIS_v2",Xb="https://firebaseinstallations.googleapis.com/v1",Qb=60*60*1e3,Zb="installations",ev="Installations";/**
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
 */const tv={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Xt=new tn(Zb,ev,tv);function of(e){return e instanceof dt&&e.code.includes("request-failed")}/**
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
 */function af({projectId:e}){return`${Xb}/projects/${e}/installations`}function cf(e){return{token:e.token,requestStatus:2,expiresIn:rv(e.expiresIn),creationTime:Date.now()}}async function lf(e,t){const r=(await t.json()).error;return Xt.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function uf({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function nv(e,{refreshToken:t}){const n=uf(e);return n.append("Authorization",sv(t)),n}async function ff(e){const t=await e();return t.status>=500&&t.status<600?e():t}function rv(e){return Number(e.replace("s","000"))}function sv(e){return`${sf} ${e}`}/**
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
 */async function iv({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=af(e),s=uf(e),i=t.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:n,authVersion:sf,appId:e.appId,sdkVersion:rf},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await ff(()=>fetch(r,a));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:cf(u.authToken)}}else throw await lf("Create Installation",c)}/**
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
 */function df(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function ov(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const av=/^[cdef][\w-]{21}$/,Ri="";function cv(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=lv(e);return av.test(n)?n:Ri}catch{return Ri}}function lv(e){return ov(e).substr(0,22)}/**
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
 */function ps(e){return`${e.appName}!${e.appId}`}/**
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
 */const hf=new Map;function pf(e,t){const n=ps(e);gf(n,t),uv(n,t)}function gf(e,t){const n=hf.get(e);if(n)for(const r of n)r(t)}function uv(e,t){const n=fv();n&&n.postMessage({key:e,fid:t}),dv()}let Wt=null;function fv(){return!Wt&&"BroadcastChannel"in self&&(Wt=new BroadcastChannel("[Firebase] FID Change"),Wt.onmessage=e=>{gf(e.data.key,e.data.fid)}),Wt}function dv(){hf.size===0&&Wt&&(Wt.close(),Wt=null)}/**
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
 */const hv="firebase-installations-database",pv=1,Qt="firebase-installations-store";let Ks=null;function yo(){return Ks||(Ks=hs(hv,pv,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Qt)}}})),Ks}async function Hr(e,t){const n=ps(e),s=(await yo()).transaction(Qt,"readwrite"),i=s.objectStore(Qt),o=await i.get(n);return await i.put(t,n),await s.done,(!o||o.fid!==t.fid)&&pf(e,t.fid),t}async function mf(e){const t=ps(e),r=(await yo()).transaction(Qt,"readwrite");await r.objectStore(Qt).delete(t),await r.done}async function gs(e,t){const n=ps(e),s=(await yo()).transaction(Qt,"readwrite"),i=s.objectStore(Qt),o=await i.get(n),a=t(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&pf(e,a.fid),a}/**
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
 */async function _o(e){let t;const n=await gs(e.appConfig,r=>{const s=gv(r),i=mv(e,s);return t=i.registrationPromise,i.installationEntry});return n.fid===Ri?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function gv(e){const t=e||{fid:cv(),registrationStatus:0};return yf(t)}function mv(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Xt.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=yv(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:_v(e)}:{installationEntry:t}}async function yv(e,t){try{const n=await iv(e,t);return Hr(e.appConfig,n)}catch(n){throw of(n)&&n.customData.serverCode===409?await mf(e.appConfig):await Hr(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function _v(e){let t=await nc(e.appConfig);for(;t.registrationStatus===1;)await df(100),t=await nc(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await _o(e);return r||n}return t}function nc(e){return gs(e,t=>{if(!t)throw Xt.create("installation-not-found");return yf(t)})}function yf(e){return bv(e)?{fid:e.fid,registrationStatus:0}:e}function bv(e){return e.registrationStatus===1&&e.registrationTime+nf<Date.now()}/**
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
 */async function vv({appConfig:e,heartbeatServiceProvider:t},n){const r=wv(e,n),s=nv(e,n),i=t.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:rf,appId:e.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await ff(()=>fetch(r,a));if(c.ok){const u=await c.json();return cf(u)}else throw await lf("Generate Auth Token",c)}function wv(e,{fid:t}){return`${af(e)}/${t}/authTokens:generate`}/**
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
 */async function bo(e,t=!1){let n;const r=await gs(e.appConfig,i=>{if(!_f(i))throw Xt.create("not-registered");const o=i.authToken;if(!t&&Sv(o))return i;if(o.requestStatus===1)return n=Iv(e,t),i;{if(!navigator.onLine)throw Xt.create("app-offline");const a=Av(i);return n=Ev(e,a),a}});return n?await n:r.authToken}async function Iv(e,t){let n=await rc(e.appConfig);for(;n.authToken.requestStatus===1;)await df(100),n=await rc(e.appConfig);const r=n.authToken;return r.requestStatus===0?bo(e,t):r}function rc(e){return gs(e,t=>{if(!_f(t))throw Xt.create("not-registered");const n=t.authToken;return Ov(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Ev(e,t){try{const n=await vv(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Hr(e.appConfig,r),n}catch(n){if(of(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await mf(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Hr(e.appConfig,r)}throw n}}function _f(e){return e!==void 0&&e.registrationStatus===2}function Sv(e){return e.requestStatus===2&&!Tv(e)}function Tv(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Qb}function Av(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Ov(e){return e.requestStatus===1&&e.requestTime+nf<Date.now()}/**
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
 */async function Cv(e){const t=e,{installationEntry:n,registrationPromise:r}=await _o(t);return r?r.catch(console.error):bo(t).catch(console.error),n.fid}/**
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
 */async function Rv(e,t=!1){const n=e;return await Pv(n),(await bo(n,t)).token}async function Pv(e){const{registrationPromise:t}=await _o(e);t&&await t}/**
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
 */function kv(e){if(!e||!e.options)throw qs("App Configuration");if(!e.name)throw qs("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw qs(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function qs(e){return Xt.create("missing-app-config-values",{valueName:e})}/**
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
 */const bf="installations",Nv="installations-internal",Mv=e=>{const t=e.getProvider("app").getImmediate(),n=kv(t),r=nr(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},xv=e=>{const t=e.getProvider("app").getImmediate(),n=nr(t,bf).getImmediate();return{getId:()=>Cv(n),getToken:s=>Rv(n,s)}};function Dv(){ct(new Qe(bf,Mv,"PUBLIC")),ct(new Qe(Nv,xv,"PRIVATE"))}Dv();Je(tf,mo);Je(tf,mo,"esm2017");/**
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
 */const Lv="/firebase-messaging-sw.js",Uv="/firebase-cloud-messaging-push-scope",vf="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Fv="https://fcmregistrations.googleapis.com/v1",wf="google.c.a.c_id",jv="google.c.a.c_l",$v="google.c.a.ts",Vv="google.c.a.e";var sc;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(sc||(sc={}));/**
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
 */var zn;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(zn||(zn={}));/**
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
 */function et(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Bv(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),s=new Uint8Array(r.length);for(let i=0;i<r.length;++i)s[i]=r.charCodeAt(i);return s}/**
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
 */const zs="fcm_token_details_db",Hv=5,ic="fcm_token_object_Store";async function Wv(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(zs))return null;let t=null;return(await hs(zs,Hv,{upgrade:async(r,s,i,o)=>{var a;if(s<2||!r.objectStoreNames.contains(ic))return;const c=o.objectStore(ic),u=await c.index("fcmSenderId").get(e);if(await c.clear(),!!u){if(s===2){const l=u;if(!l.auth||!l.p256dh||!l.endpoint)return;t={token:l.fcmToken,createTime:(a=l.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:l.auth,p256dh:l.p256dh,endpoint:l.endpoint,swScope:l.swScope,vapidKey:typeof l.vapidKey=="string"?l.vapidKey:et(l.vapidKey)}}}else if(s===3){const l=u;t={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:et(l.auth),p256dh:et(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:et(l.vapidKey)}}}else if(s===4){const l=u;t={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:et(l.auth),p256dh:et(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:et(l.vapidKey)}}}}}})).close(),await Bs(zs),await Bs("fcm_vapid_details_db"),await Bs("undefined"),Kv(t)?t:null}function Kv(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
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
 */const qv="firebase-messaging-database",zv=1,Gn="firebase-messaging-store";let Gs=null;function If(){return Gs||(Gs=hs(qv,zv,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Gn)}}})),Gs}async function Gv(e){const t=Ef(e),r=await(await If()).transaction(Gn).objectStore(Gn).get(t);if(r)return r;{const s=await Wv(e.appConfig.senderId);if(s)return await vo(e,s),s}}async function vo(e,t){const n=Ef(e),s=(await If()).transaction(Gn,"readwrite");return await s.objectStore(Gn).put(t,n),await s.done,t}function Ef({appConfig:e}){return e.appId}/**
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
 */const Jv={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},ve=new tn("messaging","Messaging",Jv);/**
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
 */async function Yv(e,t){const n=await Io(e),r=Sf(t),s={method:"POST",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(wo(e.appConfig),s)).json()}catch(o){throw ve.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw ve.create("token-subscribe-failed",{errorInfo:o})}if(!i.token)throw ve.create("token-subscribe-no-token");return i.token}async function Xv(e,t){const n=await Io(e),r=Sf(t.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(`${wo(e.appConfig)}/${t.token}`,s)).json()}catch(o){throw ve.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw ve.create("token-update-failed",{errorInfo:o})}if(!i.token)throw ve.create("token-update-no-token");return i.token}async function Qv(e,t){const r={method:"DELETE",headers:await Io(e)};try{const i=await(await fetch(`${wo(e.appConfig)}/${t}`,r)).json();if(i.error){const o=i.error.message;throw ve.create("token-unsubscribe-failed",{errorInfo:o})}}catch(s){throw ve.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function wo({projectId:e}){return`${Fv}/projects/${e}/registrations`}async function Io({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Sf({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:t,p256dh:e}};return r!==vf&&(s.web.applicationPubKey=r),s}/**
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
 */const Zv=7*24*60*60*1e3;async function e0(e){const t=await n0(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:et(t.getKey("auth")),p256dh:et(t.getKey("p256dh"))},r=await Gv(e.firebaseDependencies);if(r){if(r0(r.subscriptionOptions,n))return Date.now()>=r.createTime+Zv?t0(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await Qv(e.firebaseDependencies,r.token)}catch(s){console.warn(s)}return oc(e.firebaseDependencies,n)}else return oc(e.firebaseDependencies,n)}async function t0(e,t){try{const n=await Xv(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await vo(e.firebaseDependencies,r),n}catch(n){throw n}}async function oc(e,t){const r={token:await Yv(e,t),createTime:Date.now(),subscriptionOptions:t};return await vo(e,r),r.token}async function n0(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Bv(t)})}function r0(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,s=t.auth===e.auth,i=t.p256dh===e.p256dh;return n&&r&&s&&i}/**
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
 */function ac(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return s0(t,e),i0(t,e),o0(t,e),t}function s0(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const s=t.notification.image;s&&(e.notification.image=s);const i=t.notification.icon;i&&(e.notification.icon=i)}function i0(e,t){t.data&&(e.data=t.data)}function o0(e,t){var n,r,s,i,o;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const a=(s=(r=t.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(i=t.notification)===null||i===void 0?void 0:i.click_action;a&&(e.fcmOptions.link=a);const c=(o=t.fcmOptions)===null||o===void 0?void 0:o.analytics_label;c&&(e.fcmOptions.analyticsLabel=c)}/**
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
 */function a0(e){return typeof e=="object"&&!!e&&wf in e}/**
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
 */Tf("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");Tf("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function Tf(e,t){const n=[];for(let r=0;r<e.length;r++)n.push(e.charAt(r)),r<t.length&&n.push(t.charAt(r));return n.join("")}/**
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
 */function c0(e){if(!e||!e.options)throw Js("App Configuration Object");if(!e.name)throw Js("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const r of t)if(!n[r])throw Js(r);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Js(e){return ve.create("missing-app-config-values",{valueName:e})}/**
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
 */class l0{constructor(t,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=c0(t);this.firebaseDependencies={app:t,appConfig:s,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function u0(e){try{e.swRegistration=await navigator.serviceWorker.register(Lv,{scope:Uv}),e.swRegistration.update().catch(()=>{})}catch(t){throw ve.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}/**
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
 */async function f0(e,t){if(!t&&!e.swRegistration&&await u0(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw ve.create("invalid-sw-registration");e.swRegistration=t}}/**
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
 */async function d0(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=vf)}/**
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
 */async function h0(e,t){if(!navigator)throw ve.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw ve.create("permission-blocked");return await d0(e,t==null?void 0:t.vapidKey),await f0(e,t==null?void 0:t.serviceWorkerRegistration),e0(e)}/**
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
 */async function p0(e,t,n){const r=g0(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[wf],message_name:n[jv],message_time:n[$v],message_device_time:Math.floor(Date.now()/1e3)})}function g0(e){switch(e){case zn.NOTIFICATION_CLICKED:return"notification_open";case zn.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function m0(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===zn.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(ac(n)):e.onMessageHandler.next(ac(n)));const r=n.data;a0(r)&&r[Vv]==="1"&&await p0(e,n.messageType,r)}const cc="@firebase/messaging",lc="0.12.9";/**
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
 */const y0=e=>{const t=new l0(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>m0(t,n)),t},_0=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:r=>h0(t,r)}};function b0(){ct(new Qe("messaging",y0,"PUBLIC")),ct(new Qe("messaging-internal",_0,"PRIVATE")),Je(cc,lc),Je(cc,lc,"esm2017")}/**
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
 */async function v0(){try{await zu()}catch{return!1}return typeof window<"u"&&qu()&&L_()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function w0(e=Qu()){return v0().then(t=>{if(!t)throw ve.create("unsupported-browser")},t=>{throw ve.create("indexed-db-unsupported")}),nr(ht(e),"messaging").getImmediate()}b0();const I0="modulepreload",E0=function(e){return"/"+e},uc={},gr=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),o=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));s=Promise.all(n.map(a=>{if(a=E0(a),a in uc)return;uc[a]=!0;const c=a.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${u}`))return;const l=document.createElement("link");if(l.rel=c?"stylesheet":I0,c||(l.as="script",l.crossOrigin=""),l.href=a,o&&l.setAttribute("nonce",o),document.head.appendChild(l),c)return new Promise((f,h)=>{l.addEventListener("load",f),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${a}`)))})}))}return s.then(()=>t()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};function Eo(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n}function Af(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const S0=Af,Of=new tn("auth","Firebase",Af());/**
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
 */const Wr=new Gu("@firebase/auth");function T0(e,...t){Wr.logLevel<=ne.WARN&&Wr.warn(`Auth (${rr}): ${e}`,...t)}function Or(e,...t){Wr.logLevel<=ne.ERROR&&Wr.error(`Auth (${rr}): ${e}`,...t)}/**
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
 */function Ze(e,...t){throw To(e,...t)}function je(e,...t){return To(e,...t)}function So(e,t,n){const r=Object.assign(Object.assign({},S0()),{[t]:n});return new tn("auth","Firebase",r).create(t,{appName:e.name})}function Gt(e){return So(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function A0(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&Ze(e,"argument-error"),So(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function To(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Of.create(e,...t)}function $(e,t,...n){if(!e)throw To(t,...n)}function rt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Or(t),new Error(t)}function lt(e,t){e||rt(t)}/**
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
 */function Pi(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function O0(){return fc()==="http:"||fc()==="https:"}function fc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function C0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(O0()||M_()||"connection"in navigator)?navigator.onLine:!0}function R0(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class sr{constructor(t,n){this.shortDelay=t,this.longDelay=n,lt(n>t,"Short delay should be less than long delay!"),this.isMobile=k_()||x_()}get(){return C0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ao(e,t){lt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class Cf{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const P0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const k0=new sr(3e4,6e4);function Oo(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function wn(e,t,n,r,s={}){return Rf(e,s,async()=>{let i={},o={};r&&(t==="GET"?o=r:i={body:JSON.stringify(r)});const a=tr(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),Cf.fetch()(Pf(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},i))})}async function Rf(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},P0),t);try{const s=new M0(e),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw mr(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw mr(e,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw mr(e,"email-already-in-use",o);if(c==="USER_DISABLED")throw mr(e,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw So(e,l,u);Ze(e,l)}}catch(s){if(s instanceof dt)throw s;Ze(e,"network-request-failed",{message:String(s)})}}async function N0(e,t,n,r,s={}){const i=await wn(e,t,n,r,s);return"mfaPendingCredential"in i&&Ze(e,"multi-factor-auth-required",{_serverResponse:i}),i}function Pf(e,t,n,r){const s=`${t}${n}?${r}`;return e.config.emulator?Ao(e.config,s):`${e.config.apiScheme}://${s}`}class M0{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(je(this.auth,"network-request-failed")),k0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function mr(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=je(e,t,r);return s.customData._tokenResponse=n,s}/**
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
 */async function x0(e,t){return wn(e,"POST","/v1/accounts:delete",t)}async function kf(e,t){return wn(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Un(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function D0(e,t=!1){const n=ht(e),r=await n.getIdToken(t),s=Co(r);$(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Un(Ys(s.auth_time)),issuedAtTime:Un(Ys(s.iat)),expirationTime:Un(Ys(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ys(e){return Number(e)*1e3}function Co(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Or("JWT malformed, contained fewer than 3 sections"),null;try{const s=Bu(n);return s?JSON.parse(s):(Or("Failed to decode base64 JWT payload"),null)}catch(s){return Or("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function dc(e){const t=Co(e);return $(t,"internal-error"),$(typeof t.exp<"u","internal-error"),$(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Jn(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof dt&&L0(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function L0({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class U0{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ki{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Un(this.lastLoginAt),this.creationTime=Un(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Kr(e){var t;const n=e.auth,r=await e.getIdToken(),s=await Jn(e,kf(n,{idToken:r}));$(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];e._notifyReloadListener(i);const o=!((t=i.providerUserInfo)===null||t===void 0)&&t.length?Nf(i.providerUserInfo):[],a=j0(e.providerData,o),c=e.isAnonymous,u=!(e.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ki(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(e,f)}async function F0(e){const t=ht(e);await Kr(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function j0(e,t){return[...e.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function Nf(e){return e.map(t=>{var{providerId:n}=t,r=Eo(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function $0(e,t){const n=await Rf(e,{},async()=>{const r=tr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=e.config,o=Pf(e,s,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Cf.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function V0(e,t){return wn(e,"POST","/v2/accounts:revokeToken",Oo(e,t))}/**
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
 */class dn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){$(t.idToken,"internal-error"),$(typeof t.idToken<"u","internal-error"),$(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):dc(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){$(t.length!==0,"internal-error");const n=dc(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await $0(t,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new dn;return r&&($(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),s&&($(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),i&&($(typeof i=="number","internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new dn,this.toJSON())}_performRefresh(){return rt("not implemented")}}/**
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
 */function bt(e,t){$(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class st{constructor(t){var{uid:n,auth:r,stsTokenManager:s}=t,i=Eo(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new U0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ki(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const n=await Jn(this,this.stsTokenManager.getToken(this.auth,t));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return D0(this,t)}reload(){return F0(this)}_assign(t){this!==t&&($(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new st(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Kr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(nt(this.auth.app))return Promise.reject(Gt(this.auth));const t=await this.getIdToken();return await Jn(this,x0(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,s,i,o,a,c,u,l;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,A=(u=n.createdAt)!==null&&u!==void 0?u:void 0,O=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:I,emailVerified:M,isAnonymous:j,providerData:D,stsTokenManager:Y}=n;$(I&&Y,t,"internal-error");const ce=dn.fromJSON(this.name,Y);$(typeof I=="string",t,"internal-error"),bt(f,t.name),bt(h,t.name),$(typeof M=="boolean",t,"internal-error"),$(typeof j=="boolean",t,"internal-error"),bt(m,t.name),bt(y,t.name),bt(C,t.name),bt(x,t.name),bt(A,t.name),bt(O,t.name);const le=new st({uid:I,auth:t,email:h,emailVerified:M,displayName:f,isAnonymous:j,photoURL:y,phoneNumber:m,tenantId:C,stsTokenManager:ce,createdAt:A,lastLoginAt:O});return D&&Array.isArray(D)&&(le.providerData=D.map(we=>Object.assign({},we))),x&&(le._redirectEventId=x),le}static async _fromIdTokenResponse(t,n,r=!1){const s=new dn;s.updateFromServerResponse(n);const i=new st({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await Kr(i),i}static async _fromGetAccountInfoResponse(t,n,r){const s=n.users[0];$(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Nf(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new dn;a.updateFromIdToken(r);const c=new st({uid:s.localId,auth:t,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ki(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const hc=new Map;function it(e){lt(e instanceof Function,"Expected a class definition");let t=hc.get(e);return t?(lt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,hc.set(e,t),t)}/**
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
 */class Mf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Mf.type="NONE";const pc=Mf;/**
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
 */function Cr(e,t,n){return`firebase:${e}:${t}:${n}`}class hn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Cr(this.userKey,s.apiKey,i),this.fullPersistenceKey=Cr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?st._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new hn(it(pc),t,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||it(pc);const o=Cr(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const f=st._fromJSON(t,l);u!==i&&(a=f),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new hn(i,t,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new hn(i,t,r))}}/**
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
 */function gc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Lf(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(xf(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ff(t))return"Blackberry";if(jf(t))return"Webos";if(Ro(t))return"Safari";if((t.includes("chrome/")||Df(t))&&!t.includes("edge/"))return"Chrome";if(Uf(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function xf(e=ye()){return/firefox\//i.test(e)}function Ro(e=ye()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Df(e=ye()){return/crios\//i.test(e)}function Lf(e=ye()){return/iemobile/i.test(e)}function Uf(e=ye()){return/android/i.test(e)}function Ff(e=ye()){return/blackberry/i.test(e)}function jf(e=ye()){return/webos/i.test(e)}function ms(e=ye()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function B0(e=ye()){var t;return ms(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function H0(){return D_()&&document.documentMode===10}function $f(e=ye()){return ms(e)||Uf(e)||jf(e)||Ff(e)||/windows phone/i.test(e)||Lf(e)}function W0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Vf(e,t=[]){let n;switch(e){case"Browser":n=gc(ye());break;case"Worker":n=`${gc(ye())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${rr}/${r}`}/**
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
 */class K0{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=i=>new Promise((o,a)=>{try{const c=t(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function q0(e,t={}){return wn(e,"GET","/v2/passwordPolicy",Oo(e,t))}/**
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
 */const z0=6;class G0{constructor(t){var n,r,s,i;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:z0,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=t.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),s&&(n.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<t.length;s++)r=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}/**
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
 */class J0{constructor(t,n,r,s){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mc(this),this.idTokenSubscription=new mc(this),this.beforeStateQueue=new K0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Of,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=it(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await hn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await kf(this,{idToken:t}),r=await st._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(nt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Kr(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=R0()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(nt(this.app))return Promise.reject(Gt(this));const n=t?ht(t):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&$(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return nt(this.app)?Promise.reject(Gt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return nt(this.app)?Promise.reject(Gt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(it(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await q0(this),n=new G0(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new tn("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await V0(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&it(t)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await hn.create(this,[it(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if($(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=t.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=t.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Vf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&T0(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ys(e){return ht(e)}class mc{constructor(t){this.auth=t,this.observer=null,this.addObserver=V_(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Po={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Y0(e){Po=e}function X0(e){return Po.loadJS(e)}function Q0(){return Po.gapiScript}function Z0(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
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
 */function ew(e,t){const n=nr(e,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Vr(i,t??{}))return s;Ze(s,"already-initialized")}return n.initialize({options:t})}function tw(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(it);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function nw(e,t,n){const r=ys(e);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!1,i=Bf(t),{host:o,port:a}=rw(t),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),sw()}function Bf(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function rw(e){const t=Bf(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:yc(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:yc(o)}}}function yc(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function sw(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class Hf{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return rt("not implemented")}_getIdTokenResponse(t){return rt("not implemented")}_linkToIdToken(t,n){return rt("not implemented")}_getReauthenticationResolver(t){return rt("not implemented")}}/**
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
 */async function pn(e,t){return N0(e,"POST","/v1/accounts:signInWithIdp",Oo(e,t))}/**
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
 */const iw="http://localhost";class Zt extends Hf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Zt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Ze("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s}=n,i=Eo(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Zt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return pn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,pn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,pn(t,n)}buildRequest(){const t={requestUri:iw,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=tr(n)}return t}}/**
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
 */class ko{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ir extends ko{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class St extends ir{constructor(){super("facebook.com")}static credential(t){return Zt._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return St.credentialFromTaggedObject(t)}static credentialFromError(t){return St.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return St.credential(t.oauthAccessToken)}catch{return null}}}St.FACEBOOK_SIGN_IN_METHOD="facebook.com";St.PROVIDER_ID="facebook.com";/**
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
 */class Tt extends ir{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Zt._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Tt.credentialFromTaggedObject(t)}static credentialFromError(t){return Tt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Tt.credential(n,r)}catch{return null}}}Tt.GOOGLE_SIGN_IN_METHOD="google.com";Tt.PROVIDER_ID="google.com";/**
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
 */class At extends ir{constructor(){super("github.com")}static credential(t){return Zt._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return At.credentialFromTaggedObject(t)}static credentialFromError(t){return At.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return At.credential(t.oauthAccessToken)}catch{return null}}}At.GITHUB_SIGN_IN_METHOD="github.com";At.PROVIDER_ID="github.com";/**
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
 */class Ot extends ir{constructor(){super("twitter.com")}static credential(t,n){return Zt._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Ot.credentialFromTaggedObject(t)}static credentialFromError(t){return Ot.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Ot.credential(n,r)}catch{return null}}}Ot.TWITTER_SIGN_IN_METHOD="twitter.com";Ot.PROVIDER_ID="twitter.com";/**
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
 */class _n{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,s=!1){const i=await st._fromIdTokenResponse(t,r,s),o=_c(r);return new _n({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const s=_c(r);return new _n({user:t,providerId:s,_tokenResponse:r,operationType:n})}}function _c(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class qr extends dt{constructor(t,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,qr.prototype),this.customData={appName:t.name,tenantId:(i=t.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,s){return new qr(t,n,r,s)}}function Wf(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?qr._fromErrorAndOperation(e,i,t,r):i})}async function ow(e,t,n=!1){const r=await Jn(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return _n._forOperation(e,"link",r)}/**
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
 */async function aw(e,t,n=!1){const{auth:r}=e;if(nt(r.app))return Promise.reject(Gt(r));const s="reauthenticate";try{const i=await Jn(e,Wf(r,s,t,e),n);$(i.idToken,r,"internal-error");const o=Co(i.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(e.uid===a,r,"user-mismatch"),_n._forOperation(e,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ze(r,"user-mismatch"),i}}/**
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
 */async function cw(e,t,n=!1){if(nt(e.app))return Promise.reject(Gt(e));const r="signIn",s=await Wf(e,r,t),i=await _n._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}function lw(e,t,n,r){return ht(e).onIdTokenChanged(t,n,r)}function uw(e,t,n){return ht(e).beforeAuthStateChanged(t,n)}function fw(e,t,n,r){return ht(e).onAuthStateChanged(t,n,r)}function VI(e){return ht(e).signOut()}const zr="__sak";/**
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
 */class Kf{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(zr,"1"),this.storage.removeItem(zr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function dw(){const e=ye();return Ro(e)||ms(e)}const hw=1e3,pw=10;class qf extends Kf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=dw()&&W0(),this.fallbackToPolling=$f(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&t(n,s,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);H0()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,pw):s()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},hw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}qf.type="LOCAL";const gw=qf;/**
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
 */class zf extends Kf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}zf.type="SESSION";const Gf=zf;/**
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
 */function mw(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class _s{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const r=new _s(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await mw(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_s.receivers=[];/**
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
 */function No(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class yw{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=No("",20);s.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const h=f;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(h.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ye(){return window}function _w(e){Ye().location.href=e}/**
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
 */function Jf(){return typeof Ye().WorkerGlobalScope<"u"&&typeof Ye().importScripts=="function"}async function bw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vw(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function ww(){return Jf()?self:null}/**
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
 */const Yf="firebaseLocalStorageDb",Iw=1,Gr="firebaseLocalStorage",Xf="fbase_key";class or{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function bs(e,t){return e.transaction([Gr],t?"readwrite":"readonly").objectStore(Gr)}function Ew(){const e=indexedDB.deleteDatabase(Yf);return new or(e).toPromise()}function Ni(){const e=indexedDB.open(Yf,Iw);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Gr,{keyPath:Xf})}catch(s){n(s)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Gr)?t(r):(r.close(),await Ew(),t(await Ni()))})})}async function bc(e,t,n){const r=bs(e,!0).put({[Xf]:t,value:n});return new or(r).toPromise()}async function Sw(e,t){const n=bs(e,!1).get(t),r=await new or(n).toPromise();return r===void 0?null:r.value}function vc(e,t){const n=bs(e,!0).delete(t);return new or(n).toPromise()}const Tw=800,Aw=3;class Qf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ni(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Aw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Jf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_s._getInstance(ww()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await bw(),!this.activeServiceWorker)return;this.sender=new yw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||vw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ni();return await bc(t,zr,"1"),await vc(t,zr),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>bc(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>Sw(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>vc(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const i=bs(s,!1).getAll();return new or(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:s,value:i}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Tw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Qf.type="LOCAL";const Ow=Qf;new sr(3e4,6e4);/**
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
 */function Zf(e,t){return t?it(t):($(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Mo extends Hf{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return pn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return pn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return pn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function Cw(e){return cw(e.auth,new Mo(e),e.bypassAuthState)}function Rw(e){const{auth:t,user:n}=e;return $(n,t,"internal-error"),aw(n,new Mo(e),e.bypassAuthState)}async function Pw(e){const{auth:t,user:n}=e;return $(n,t,"internal-error"),ow(n,new Mo(e),e.bypassAuthState)}/**
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
 */class ed{constructor(t,n,r,s,i=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Cw;case"linkViaPopup":case"linkViaRedirect":return Pw;case"reauthViaPopup":case"reauthViaRedirect":return Rw;default:Ze(this.auth,"internal-error")}}resolve(t){lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const kw=new sr(2e3,1e4);async function BI(e,t,n){if(nt(e.app))return Promise.reject(je(e,"operation-not-supported-in-this-environment"));const r=ys(e);A0(e,t,ko);const s=Zf(r,n);return new Kt(r,"signInViaPopup",t,s).executeNotNull()}class Kt extends ed{constructor(t,n,r,s,i){super(t,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Kt.currentPopupAction&&Kt.currentPopupAction.cancel(),Kt.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return $(t,this.auth,"internal-error"),t}async onExecution(){lt(this.filter.length===1,"Popup operations only handle one event");const t=No();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Kt.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(je(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,kw.get())};t()}}Kt.currentPopupAction=null;/**
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
 */const Nw="pendingRedirect",Rr=new Map;class Mw extends ed{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Rr.get(this.auth._key());if(!t){try{const r=await xw(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Rr.set(this.auth._key(),t)}return this.bypassAuthState||Rr.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xw(e,t){const n=Uw(t),r=Lw(e);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Dw(e,t){Rr.set(e._key(),t)}function Lw(e){return it(e._redirectPersistence)}function Uw(e){return Cr(Nw,e.config.apiKey,e.name)}async function Fw(e,t,n=!1){if(nt(e.app))return Promise.reject(Gt(e));const r=ys(e),s=Zf(r,t),o=await new Mw(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const jw=10*60*1e3;class $w{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Vw(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!td(t)){const s=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(je(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=jw&&this.cachedEventUids.clear(),this.cachedEventUids.has(wc(t))}saveEventToCache(t){this.cachedEventUids.add(wc(t)),this.lastProcessedEventTime=Date.now()}}function wc(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function td({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Vw(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return td(e);default:return!1}}/**
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
 */async function Bw(e,t={}){return wn(e,"GET","/v1/projects",t)}/**
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
 */const Hw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ww=/^https?/;async function Kw(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Bw(e);for(const n of t)try{if(qw(n))return}catch{}Ze(e,"unauthorized-domain")}function qw(e){const t=Pi(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Ww.test(n))return!1;if(Hw.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const zw=new sr(3e4,6e4);function Ic(){const e=Ye().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Gw(e){return new Promise((t,n)=>{var r,s,i;function o(){Ic(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ic(),n(je(e,"network-request-failed"))},timeout:zw.get()})}if(!((s=(r=Ye().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((i=Ye().gapi)===null||i===void 0)&&i.load)o();else{const a=Z0("iframefcb");return Ye()[a]=()=>{gapi.load?o():n(je(e,"network-request-failed"))},X0(`${Q0()}?onload=${a}`).catch(c=>n(c))}}).catch(t=>{throw Pr=null,t})}let Pr=null;function Jw(e){return Pr=Pr||Gw(e),Pr}/**
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
 */const Yw=new sr(5e3,15e3),Xw="__/auth/iframe",Qw="emulator/auth/iframe",Zw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},eI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tI(e){const t=e.config;$(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Ao(t,Qw):`https://${e.config.authDomain}/${Xw}`,r={apiKey:t.apiKey,appName:e.name,v:rr},s=eI.get(e.config.apiHost);s&&(r.eid=s);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${tr(r).slice(1)}`}async function nI(e){const t=await Jw(e),n=Ye().gapi;return $(n,e,"internal-error"),t.open({where:document.body,url:tI(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Zw,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=je(e,"network-request-failed"),a=Ye().setTimeout(()=>{i(o)},Yw.get());function c(){Ye().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const rI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sI=500,iI=600,oI="_blank",aI="http://localhost";class Ec{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cI(e,t,n,r=sI,s=iI){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},rI),{width:r.toString(),height:s.toString(),top:i,left:o}),u=ye().toLowerCase();n&&(a=Df(u)?oI:n),xf(u)&&(t=t||aI,c.scrollbars="yes");const l=Object.entries(c).reduce((h,[m,y])=>`${h}${m}=${y},`,"");if(B0(u)&&a!=="_self")return lI(t||"",a),new Ec(null);const f=window.open(t||"",a,l);$(f,e,"popup-blocked");try{f.focus()}catch{}return new Ec(f)}function lI(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const uI="__/auth/handler",fI="emulator/auth/handler",dI=encodeURIComponent("fac");async function Sc(e,t,n,r,s,i){$(e.config.authDomain,e,"auth-domain-config-required"),$(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:rr,eventId:s};if(t instanceof ko){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",$_(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[l,f]of Object.entries({}))o[l]=f}if(t instanceof ir){const l=t.getScopes().filter(f=>f!=="");l.length>0&&(o.scopes=l.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const c=await e._getAppCheckToken(),u=c?`#${dI}=${encodeURIComponent(c)}`:"";return`${hI(e)}?${tr(a).slice(1)}${u}`}function hI({config:e}){return e.emulator?Ao(e,fI):`https://${e.authDomain}/${uI}`}/**
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
 */const Xs="webStorageSupport";class pI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Gf,this._completeRedirectFn=Fw,this._overrideRedirectResult=Dw}async _openPopup(t,n,r,s){var i;lt((i=this.eventManagers[t._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Sc(t,n,r,Pi(),s);return cI(t,o,No())}async _openRedirect(t,n,r,s){await this._originValidation(t);const i=await Sc(t,n,r,Pi(),s);return _w(i),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(lt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await nI(t),r=new $w(t);return n.register("authEvent",s=>($(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Xs,{type:Xs},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Xs];o!==void 0&&n(!!o),Ze(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Kw(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return $f()||Ro()||ms()}}const gI=pI;var Tc="@firebase/auth",Ac="1.7.4";/**
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
 */class mI{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function yI(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function _I(e){ct(new Qe("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vf(e)},u=new J0(r,s,i,c);return tw(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),ct(new Qe("auth-internal",t=>{const n=ys(t.getProvider("auth").getImmediate());return(r=>new mI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Je(Tc,Ac,yI(e)),Je(Tc,Ac,"esm2017")}/**
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
 */const bI=5*60,vI=Ku("authIdTokenMaxAge")||bI;let Oc=null;const wI=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>vI)return;const s=n==null?void 0:n.token;Oc!==s&&(Oc=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function II(e=Qu()){const t=nr(e,"auth");if(t.isInitialized())return t.getImmediate();const n=ew(e,{popupRedirectResolver:gI,persistence:[Ow,gw,Gf]}),r=Ku("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=wI(i.toString());uw(n,o,()=>o(n.currentUser)),lw(n,a=>o(a))}}const s=Hu("auth");return s&&nw(n,`http://${s}`),n}function EI(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}Y0({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=s=>{const i=je("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",EI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});_I("Browser");const nd=Ag({history:Hp("/"),routes:[{path:"/home",name:"home",component:()=>gr(()=>import("./home-DK-y3Pyo.js"),__vite__mapDeps([0,1,2,3])),props:!0,meta:{requiresAuth:!0},children:[{path:"/chefs",name:"chefs",component:()=>gr(()=>import("./allChefs-BY8mGK5z.js"),__vite__mapDeps([4,5,1]))},{path:"/yourChats",name:"yourChats",component:()=>gr(()=>import("./yourChats-2dD9akCY.js"),__vite__mapDeps([6,1,5,2]))}]},{path:"/",name:"login",component:()=>gr(()=>import("./login-CUApq2zb.js"),__vite__mapDeps([7,1,2]))}]}),SI=()=>new Promise((e,t)=>{const n=fw(II(),r=>{n(),e(r)},t)});nd.beforeEach(async(e,t,n)=>{e.matched.some(r=>r.meta.requiresAuth)?await SI()?n():(console.log("You dont have access!"),n("/")):n()});const TI={apiKey:"AIzaSyDFqqFcvC3WWQMGp_q00Y6BQ5y7uQpRrUg",authDomain:"recipe-2bcd4.firebaseapp.com",projectId:"recipe-2bcd4",storageBucket:"recipe-2bcd4.appspot.com",messagingSenderId:"214051528054",appId:"1:214051528054:web:9eb82bd7f5212581d36e57",measurementId:"G-4E17212C1W"},AI=Xu(TI);w0(AI);const xo=Ip(Cg);xo.use(I_);xo.use(nd);xo.mount("#app");export{Rl as A,Gd as B,Qe as C,Pe as D,hl as E,dt as F,RI as G,UI as H,de as I,tl as J,ne as K,Gu as L,$I as M,ye as N,Tt as O,BI as P,VI as Q,ns as R,rr as S,as as T,ct as _,kl as a,Te as b,NI as c,MI as d,Je as e,nr as f,ht as g,FI as h,Qu as i,jI as j,Ne as k,II as l,jh as m,LI as n,Ol as o,PI as p,Fi as q,CI as r,tt as s,OI as t,kI as u,DI as v,me as w,xI as x,ut as y,Gi as z};
