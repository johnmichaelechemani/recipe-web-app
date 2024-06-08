const __vite__fileDeps=["assets/home-CJscjCxj.js","assets/index.esm2017-CCvwWLrA.js","assets/login-BcUD3G-N.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ms(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const te={},$t=[],Ie=()=>{},Pc=()=>!1,ur=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),_s=t=>t.startsWith("onUpdate:"),le=Object.assign,vs=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Oc=Object.prototype.hasOwnProperty,K=(t,e)=>Oc.call(t,e),x=Array.isArray,Bt=t=>fr(t)==="[object Map]",wo=t=>fr(t)==="[object Set]",B=t=>typeof t=="function",oe=t=>typeof t=="string",Nt=t=>typeof t=="symbol",re=t=>t!==null&&typeof t=="object",Eo=t=>(re(t)||B(t))&&B(t.then)&&B(t.catch),Io=Object.prototype.toString,fr=t=>Io.call(t),kc=t=>fr(t).slice(8,-1),So=t=>fr(t)==="[object Object]",ys=t=>oe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,an=ms(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),dr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Nc=/-(\w)/g,$e=dr(t=>t.replace(Nc,(e,n)=>n?n.toUpperCase():"")),Dc=/\B([A-Z])/g,Qt=dr(t=>t.replace(Dc,"-$1").toLowerCase()),hr=dr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Cr=dr(t=>t?`on${hr(t)}`:""),ht=(t,e)=>!Object.is(t,e),$n=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},To=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Kr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Xs;const Ao=()=>Xs||(Xs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function bs(t){if(x(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=oe(r)?Uc(r):bs(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(oe(t)||re(t))return t}const Mc=/;(?![^(]*\))/g,Lc=/:([^]+)/,xc=/\/\*[^]*?\*\//g;function Uc(t){const e={};return t.replace(xc,"").split(Mc).forEach(n=>{if(n){const r=n.split(Lc);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ws(t){let e="";if(oe(t))e=t;else if(x(t))for(let n=0;n<t.length;n++){const r=ws(t[n]);r&&(e+=r+" ")}else if(re(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Fc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$c=ms(Fc);function Ro(t){return!!t||t===""}const Bg=t=>oe(t)?t:t==null?"":x(t)||re(t)&&(t.toString===Io||!B(t.toString))?JSON.stringify(t,Co,2):String(t),Co=(t,e)=>e&&e.__v_isRef?Co(t,e.value):Bt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Pr(r,i)+" =>"]=s,n),{})}:wo(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Pr(n))}:Nt(e)?Pr(e):re(e)&&!x(e)&&!So(e)?String(e):e,Pr=(t,e="")=>{var n;return Nt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Re;class Bc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Re,!e&&Re&&(this.index=(Re.scopes||(Re.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Re;try{return Re=this,e()}finally{Re=n}}}on(){Re=this}off(){Re=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Hc(t,e=Re){e&&e.active&&e.effects.push(t)}function jc(){return Re}let At;class Es{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Hc(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,pt();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(Vc(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),gt()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=lt,n=At;try{return lt=!0,At=this,this._runnings++,Qs(this),this.fn()}finally{Zs(this),this._runnings--,At=n,lt=e}}stop(){this.active&&(Qs(this),Zs(this),this.onStop&&this.onStop(),this.active=!1)}}function Vc(t){return t.value}function Qs(t){t._trackId++,t._depsLength=0}function Zs(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Po(t.deps[e],t);t.deps.length=t._depsLength}}function Po(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let lt=!0,Gr=0;const Oo=[];function pt(){Oo.push(lt),lt=!1}function gt(){const t=Oo.pop();lt=t===void 0?!0:t}function Is(){Gr++}function Ss(){for(Gr--;!Gr&&qr.length;)qr.shift()()}function ko(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Po(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const qr=[];function No(t,e,n){Is();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&qr.push(r.scheduler)))}Ss()}const Do=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Jr=new WeakMap,Rt=Symbol(""),Yr=Symbol("");function ye(t,e,n){if(lt&&At){let r=Jr.get(t);r||Jr.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Do(()=>r.delete(n))),ko(At,s)}}function Ke(t,e,n,r,s,i){const o=Jr.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&x(t)){const a=Number(r);o.forEach((l,u)=>{(u==="length"||!Nt(u)&&u>=a)&&c.push(l)})}else switch(n!==void 0&&c.push(o.get(n)),e){case"add":x(t)?ys(n)&&c.push(o.get("length")):(c.push(o.get(Rt)),Bt(t)&&c.push(o.get(Yr)));break;case"delete":x(t)||(c.push(o.get(Rt)),Bt(t)&&c.push(o.get(Yr)));break;case"set":Bt(t)&&c.push(o.get(Rt));break}Is();for(const a of c)a&&No(a,4);Ss()}const Wc=ms("__proto__,__v_isRef,__isVue"),Mo=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Nt)),ei=zc();function zc(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=G(this);for(let i=0,o=this.length;i<o;i++)ye(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(G)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){pt(),Is();const r=G(this)[e].apply(this,n);return Ss(),gt(),r}}),t}function Kc(t){Nt(t)||(t=String(t));const e=G(this);return ye(e,"has",t),e.hasOwnProperty(t)}class Lo{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?il:$o:i?Fo:Uo).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=x(e);if(!s){if(o&&K(ei,n))return Reflect.get(ei,n,r);if(n==="hasOwnProperty")return Kc}const c=Reflect.get(e,n,r);return(Nt(n)?Mo.has(n):Wc(n))||(s||ye(e,"get",n),i)?c:be(c)?o&&ys(n)?c:c.value:re(c)?s?Bo(c):Sn(c):c}}class xo extends Lo{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const a=gn(i);if(!Xn(r)&&!gn(r)&&(i=G(i),r=G(r)),!x(e)&&be(i)&&!be(r))return a?!1:(i.value=r,!0)}const o=x(e)&&ys(n)?Number(n)<e.length:K(e,n),c=Reflect.set(e,n,r,s);return e===G(s)&&(o?ht(r,i)&&Ke(e,"set",n,r):Ke(e,"add",n,r)),c}deleteProperty(e,n){const r=K(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Ke(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Nt(n)||!Mo.has(n))&&ye(e,"has",n),r}ownKeys(e){return ye(e,"iterate",x(e)?"length":Rt),Reflect.ownKeys(e)}}class Gc extends Lo{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const qc=new xo,Jc=new Gc,Yc=new xo(!0);const Ts=t=>t,pr=t=>Reflect.getPrototypeOf(t);function Nn(t,e,n=!1,r=!1){t=t.__v_raw;const s=G(t),i=G(e);n||(ht(e,i)&&ye(s,"get",e),ye(s,"get",i));const{has:o}=pr(s),c=r?Ts:n?Cs:mn;if(o.call(s,e))return c(t.get(e));if(o.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function Dn(t,e=!1){const n=this.__v_raw,r=G(n),s=G(t);return e||(ht(t,s)&&ye(r,"has",t),ye(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Mn(t,e=!1){return t=t.__v_raw,!e&&ye(G(t),"iterate",Rt),Reflect.get(t,"size",t)}function ti(t){t=G(t);const e=G(this);return pr(e).has.call(e,t)||(e.add(t),Ke(e,"add",t,t)),this}function ni(t,e){e=G(e);const n=G(this),{has:r,get:s}=pr(n);let i=r.call(n,t);i||(t=G(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?ht(e,o)&&Ke(n,"set",t,e):Ke(n,"add",t,e),this}function ri(t){const e=G(this),{has:n,get:r}=pr(e);let s=n.call(e,t);s||(t=G(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Ke(e,"delete",t,void 0),i}function si(){const t=G(this),e=t.size!==0,n=t.clear();return e&&Ke(t,"clear",void 0,void 0),n}function Ln(t,e){return function(r,s){const i=this,o=i.__v_raw,c=G(o),a=e?Ts:t?Cs:mn;return!t&&ye(c,"iterate",Rt),o.forEach((l,u)=>r.call(s,a(l),a(u),i))}}function xn(t,e,n){return function(...r){const s=this.__v_raw,i=G(s),o=Bt(i),c=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,l=s[t](...r),u=n?Ts:e?Cs:mn;return!e&&ye(i,"iterate",a?Yr:Rt),{next(){const{value:h,done:p}=l.next();return p?{value:h,done:p}:{value:c?[u(h[0]),u(h[1])]:u(h),done:p}},[Symbol.iterator](){return this}}}}function Xe(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Xc(){const t={get(i){return Nn(this,i)},get size(){return Mn(this)},has:Dn,add:ti,set:ni,delete:ri,clear:si,forEach:Ln(!1,!1)},e={get(i){return Nn(this,i,!1,!0)},get size(){return Mn(this)},has:Dn,add:ti,set:ni,delete:ri,clear:si,forEach:Ln(!1,!0)},n={get(i){return Nn(this,i,!0)},get size(){return Mn(this,!0)},has(i){return Dn.call(this,i,!0)},add:Xe("add"),set:Xe("set"),delete:Xe("delete"),clear:Xe("clear"),forEach:Ln(!0,!1)},r={get(i){return Nn(this,i,!0,!0)},get size(){return Mn(this,!0)},has(i){return Dn.call(this,i,!0)},add:Xe("add"),set:Xe("set"),delete:Xe("delete"),clear:Xe("clear"),forEach:Ln(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=xn(i,!1,!1),n[i]=xn(i,!0,!1),e[i]=xn(i,!1,!0),r[i]=xn(i,!0,!0)}),[t,n,e,r]}const[Qc,Zc,el,tl]=Xc();function As(t,e){const n=e?t?tl:el:t?Zc:Qc;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(K(n,s)&&s in r?n:r,s,i)}const nl={get:As(!1,!1)},rl={get:As(!1,!0)},sl={get:As(!0,!1)};const Uo=new WeakMap,Fo=new WeakMap,$o=new WeakMap,il=new WeakMap;function ol(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function al(t){return t.__v_skip||!Object.isExtensible(t)?0:ol(kc(t))}function Sn(t){return gn(t)?t:Rs(t,!1,qc,nl,Uo)}function cl(t){return Rs(t,!1,Yc,rl,Fo)}function Bo(t){return Rs(t,!0,Jc,sl,$o)}function Rs(t,e,n,r,s){if(!re(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=al(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function cn(t){return gn(t)?cn(t.__v_raw):!!(t&&t.__v_isReactive)}function gn(t){return!!(t&&t.__v_isReadonly)}function Xn(t){return!!(t&&t.__v_isShallow)}function Ho(t){return t?!!t.__v_raw:!1}function G(t){const e=t&&t.__v_raw;return e?G(e):t}function ll(t){return Object.isExtensible(t)&&To(t,"__v_skip",!0),t}const mn=t=>re(t)?Sn(t):t,Cs=t=>re(t)?Bo(t):t;class jo{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Es(()=>e(this._value),()=>Bn(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=G(this);return(!e._cacheable||e.effect.dirty)&&ht(e._value,e._value=e.effect.run())&&Bn(e,4),Vo(e),e.effect._dirtyLevel>=2&&Bn(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function ul(t,e,n=!1){let r,s;const i=B(t);return i?(r=t,s=Ie):(r=t.get,s=t.set),new jo(r,s,i||!s,n)}function Vo(t){var e;lt&&At&&(t=G(t),ko(At,(e=t.dep)!=null?e:t.dep=Do(()=>t.dep=void 0,t instanceof jo?t:void 0)))}function Bn(t,e=4,n){t=G(t);const r=t.dep;r&&No(r,e)}function be(t){return!!(t&&t.__v_isRef===!0)}function fl(t){return Wo(t,!1)}function dl(t){return Wo(t,!0)}function Wo(t,e){return be(t)?t:new hl(t,e)}class hl{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:G(e),this._value=n?e:mn(e)}get value(){return Vo(this),this._value}set value(e){const n=this.__v_isShallow||Xn(e)||gn(e);e=n?e:G(e),ht(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:mn(e),Bn(this,4))}}function Ht(t){return be(t)?t.value:t}const pl={get:(t,e,n)=>Ht(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return be(s)&&!be(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function zo(t){return cn(t)?t:new Proxy(t,pl)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ut(t,e,n,r){try{return r?t(...r):t()}catch(s){gr(s,e,n)}}function Pe(t,e,n,r){if(B(t)){const s=ut(t,e,n,r);return s&&Eo(s)&&s.catch(i=>{gr(i,e,n)}),s}if(x(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Pe(t[i],e,n,r));return s}}function gr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,c)===!1)return}i=i.parent}const a=e.appContext.config.errorHandler;if(a){pt(),ut(a,null,10,[t,o,c]),gt();return}}gl(t,n,s,r)}function gl(t,e,n,r=!0){console.error(t)}let _n=!1,Xr=!1;const ue=[];let Le=0;const jt=[];let tt=null,It=0;const Ko=Promise.resolve();let Ps=null;function Go(t){const e=Ps||Ko;return t?e.then(this?t.bind(this):t):e}function ml(t){let e=Le+1,n=ue.length;for(;e<n;){const r=e+n>>>1,s=ue[r],i=vn(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function Os(t){(!ue.length||!ue.includes(t,_n&&t.allowRecurse?Le+1:Le))&&(t.id==null?ue.push(t):ue.splice(ml(t.id),0,t),qo())}function qo(){!_n&&!Xr&&(Xr=!0,Ps=Ko.then(Yo))}function _l(t){const e=ue.indexOf(t);e>Le&&ue.splice(e,1)}function vl(t){x(t)?jt.push(...t):(!tt||!tt.includes(t,t.allowRecurse?It+1:It))&&jt.push(t),qo()}function ii(t,e,n=_n?Le+1:0){for(;n<ue.length;n++){const r=ue[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;ue.splice(n,1),n--,r()}}}function Jo(t){if(jt.length){const e=[...new Set(jt)].sort((n,r)=>vn(n)-vn(r));if(jt.length=0,tt){tt.push(...e);return}for(tt=e,It=0;It<tt.length;It++)tt[It]();tt=null,It=0}}const vn=t=>t.id==null?1/0:t.id,yl=(t,e)=>{const n=vn(t)-vn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Yo(t){Xr=!1,_n=!0,ue.sort(yl);try{for(Le=0;Le<ue.length;Le++){const e=ue[Le];e&&e.active!==!1&&ut(e,null,14)}}finally{Le=0,ue.length=0,Jo(),_n=!1,Ps=null,(ue.length||jt.length)&&Yo()}}function bl(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||te;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=r[u]||te;p&&(s=n.map(y=>oe(y)?y.trim():y)),h&&(s=n.map(Kr))}let c,a=r[c=Cr(e)]||r[c=Cr($e(e))];!a&&i&&(a=r[c=Cr(Qt(e))]),a&&Pe(a,t,6,s);const l=r[c+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Pe(l,t,6,s)}}function Xo(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!B(t)){const a=l=>{const u=Xo(l,e,!0);u&&(c=!0,le(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!i&&!c?(re(t)&&r.set(t,null),null):(x(i)?i.forEach(a=>o[a]=null):le(o,i),re(t)&&r.set(t,o),o)}function mr(t,e){return!t||!ur(e)?!1:(e=e.slice(2).replace(/Once$/,""),K(t,e[0].toLowerCase()+e.slice(1))||K(t,Qt(e))||K(t,e))}let _e=null,Qo=null;function Qn(t){const e=_e;return _e=t,Qo=t&&t.type.__scopeId||null,e}function wl(t,e=_e,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&mi(-1);const i=Qn(e);let o;try{o=t(...s)}finally{Qn(i),r._d&&mi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Or(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:a,render:l,renderCache:u,props:h,data:p,setupState:y,ctx:C,inheritAttrs:k}=t,H=Qn(t);let D,M;try{if(n.shapeFlag&4){const z=s||r,se=z;D=Me(l.call(se,z,u,h,y,p,C)),M=c}else{const z=e;D=Me(z.length>1?z(h,{attrs:c,slots:o,emit:a}):z(h,null)),M=e.props?c:El(c)}}catch(z){fn.length=0,gr(z,t,1),D=ve(Pt)}let U=D;if(M&&k!==!1){const z=Object.keys(M),{shapeFlag:se}=U;z.length&&se&7&&(i&&z.some(_s)&&(M=Il(M,i)),U=Gt(U,M,!1,!0))}return n.dirs&&(U=Gt(U,null,!1,!0),U.dirs=U.dirs?U.dirs.concat(n.dirs):n.dirs),n.transition&&(U.transition=n.transition),D=U,Qn(H),D}const El=t=>{let e;for(const n in t)(n==="class"||n==="style"||ur(n))&&((e||(e={}))[n]=t[n]);return e},Il=(t,e)=>{const n={};for(const r in t)(!_s(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Sl(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:a}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?oi(r,o,l):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const p=u[h];if(o[p]!==r[p]&&!mr(l,p))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?oi(r,o,l):!0:!!o;return!1}function oi(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!mr(n,i))return!0}return!1}function Tl({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Al="components";function Hg(t,e){return Cl(Al,t,!0,e)||t}const Rl=Symbol.for("v-ndc");function Cl(t,e,n=!0,r=!1){const s=_e||fe;if(s){const i=s.type;{const c=Eu(i,!1);if(c&&(c===e||c===$e(e)||c===hr($e(e))))return i}const o=ai(s[t]||i[t],e)||ai(s.appContext[t],e);return!o&&r?i:o}}function ai(t,e){return t&&(t[e]||t[$e(e)]||t[hr($e(e))])}const Pl=t=>t.__isSuspense;function Ol(t,e){e&&e.pendingBranch?x(t)?e.effects.push(...t):e.effects.push(t):vl(t)}const kl=Symbol.for("v-scx"),Nl=()=>Ue(kl),Un={};function Hn(t,e,n){return Zo(t,e,n)}function Zo(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:c}=te){if(e&&i){const F=e;e=(...ae)=>{F(...ae),se()}}const a=fe,l=F=>r===!0?F:St(F,r===!1?1:void 0);let u,h=!1,p=!1;if(be(t)?(u=()=>t.value,h=Xn(t)):cn(t)?(u=()=>l(t),h=!0):x(t)?(p=!0,h=t.some(F=>cn(F)||Xn(F)),u=()=>t.map(F=>{if(be(F))return F.value;if(cn(F))return l(F);if(B(F))return ut(F,a,2)})):B(t)?e?u=()=>ut(t,a,2):u=()=>(y&&y(),Pe(t,a,3,[C])):u=Ie,e&&r){const F=u;u=()=>St(F())}let y,C=F=>{y=U.onStop=()=>{ut(F,a,4),y=U.onStop=void 0}},k;if(yr)if(C=Ie,e?n&&Pe(e,a,3,[u(),p?[]:void 0,C]):u(),s==="sync"){const F=Nl();k=F.__watcherHandles||(F.__watcherHandles=[])}else return Ie;let H=p?new Array(t.length).fill(Un):Un;const D=()=>{if(!(!U.active||!U.dirty))if(e){const F=U.run();(r||h||(p?F.some((ae,pe)=>ht(ae,H[pe])):ht(F,H)))&&(y&&y(),Pe(e,a,3,[F,H===Un?void 0:p&&H[0]===Un?[]:H,C]),H=F)}else U.run()};D.allowRecurse=!!e;let M;s==="sync"?M=D:s==="post"?M=()=>me(D,a&&a.suspense):(D.pre=!0,a&&(D.id=a.uid),M=()=>Os(D));const U=new Es(u,Ie,M),z=jc(),se=()=>{U.stop(),z&&vs(z.effects,U)};return e?n?D():H=U.run():s==="post"?me(U.run.bind(U),a&&a.suspense):U.run(),k&&k.push(se),se}function Dl(t,e,n){const r=this.proxy,s=oe(t)?t.includes(".")?ea(r,t):()=>r[t]:t.bind(r,r);let i;B(e)?i=e:(i=e.handler,n=e);const o=Tn(this),c=Zo(s,i.bind(r),n);return o(),c}function ea(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function St(t,e=1/0,n){if(e<=0||!re(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,be(t))St(t.value,e,n);else if(x(t))for(let r=0;r<t.length;r++)St(t[r],e,n);else if(wo(t)||Bt(t))t.forEach(r=>{St(r,e,n)});else if(So(t))for(const r in t)St(t[r],e,n);return t}function jg(t,e){if(_e===null)return t;const n=br(_e)||_e.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,a=te]=e[s];i&&(B(i)&&(i={mounted:i,updated:i}),i.deep&&St(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:a}))}return t}function bt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let a=c.dir[r];a&&(pt(),Pe(a,n,8,[t.el,c,t,e]),gt())}}/*! #__NO_SIDE_EFFECTS__ */function ta(t,e){return B(t)?le({name:t.name},e,{setup:t}):t}const jn=t=>!!t.type.__asyncLoader,na=t=>t.type.__isKeepAlive;function Ml(t,e){ra(t,"a",e)}function Ll(t,e){ra(t,"da",e)}function ra(t,e,n=fe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(_r(e,r,n),n){let s=n.parent;for(;s&&s.parent;)na(s.parent.vnode)&&xl(r,e,n,s),s=s.parent}}function xl(t,e,n,r){const s=_r(e,t,r,!0);sa(()=>{vs(r[e],s)},n)}function _r(t,e,n=fe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;pt();const c=Tn(n),a=Pe(e,n,t,o);return c(),gt(),a});return r?s.unshift(i):s.push(i),i}}const qe=t=>(e,n=fe)=>(!yr||t==="sp")&&_r(t,(...r)=>e(...r),n),Ul=qe("bm"),Fl=qe("m"),$l=qe("bu"),Bl=qe("u"),Hl=qe("bum"),sa=qe("um"),jl=qe("sp"),Vl=qe("rtg"),Wl=qe("rtc");function zl(t,e=fe){_r("ec",t,e)}function Vg(t,e,n,r){let s;const i=n;if(x(t)||oe(t)){s=new Array(t.length);for(let o=0,c=t.length;o<c;o++)s[o]=e(t[o],o,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i)}else if(re(t))if(t[Symbol.iterator])s=Array.from(t,(o,c)=>e(o,c,void 0,i));else{const o=Object.keys(t);s=new Array(o.length);for(let c=0,a=o.length;c<a;c++){const l=o[c];s[c]=e(t[l],l,c,i)}}else s=[];return s}const Qr=t=>t?Ea(t)?br(t)||t.proxy:Qr(t.parent):null,ln=le(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Qr(t.parent),$root:t=>Qr(t.root),$emit:t=>t.emit,$options:t=>ks(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Os(t.update)}),$nextTick:t=>t.n||(t.n=Go.bind(t.proxy)),$watch:t=>Dl.bind(t)}),kr=(t,e)=>t!==te&&!t.__isScriptSetup&&K(t,e),Kl={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:a}=t;let l;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(kr(r,e))return o[e]=1,r[e];if(s!==te&&K(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&K(l,e))return o[e]=3,i[e];if(n!==te&&K(n,e))return o[e]=4,n[e];Zr&&(o[e]=0)}}const u=ln[e];let h,p;if(u)return e==="$attrs"&&ye(t.attrs,"get",""),u(t);if((h=c.__cssModules)&&(h=h[e]))return h;if(n!==te&&K(n,e))return o[e]=4,n[e];if(p=a.config.globalProperties,K(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return kr(s,e)?(s[e]=n,!0):r!==te&&K(r,e)?(r[e]=n,!0):K(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==te&&K(t,o)||kr(e,o)||(c=i[0])&&K(c,o)||K(r,o)||K(ln,o)||K(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:K(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ci(t){return x(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Zr=!0;function Gl(t){const e=ks(t),n=t.proxy,r=t.ctx;Zr=!1,e.beforeCreate&&li(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:a,inject:l,created:u,beforeMount:h,mounted:p,beforeUpdate:y,updated:C,activated:k,deactivated:H,beforeDestroy:D,beforeUnmount:M,destroyed:U,unmounted:z,render:se,renderTracked:F,renderTriggered:ae,errorCaptured:pe,serverPrefetch:ke,expose:Ee,inheritAttrs:Je,components:Ye,directives:Dt,filters:vt}=e;if(l&&ql(l,r,null),o)for(const Y in o){const q=o[Y];B(q)&&(r[Y]=q.bind(n))}if(s){const Y=s.call(n,n);re(Y)&&(t.data=Sn(Y))}if(Zr=!0,i)for(const Y in i){const q=i[Y],Se=B(q)?q.bind(n,n):B(q.get)?q.get.bind(n,n):Ie,yt=!B(q)&&B(q.set)?q.set.bind(n):Ie,Te=xe({get:Se,set:yt});Object.defineProperty(r,Y,{enumerable:!0,configurable:!0,get:()=>Te.value,set:ge=>Te.value=ge})}if(c)for(const Y in c)ia(c[Y],r,n,Y);if(a){const Y=B(a)?a.call(n):a;Reflect.ownKeys(Y).forEach(q=>{Vn(q,Y[q])})}u&&li(u,t,"c");function ie(Y,q){x(q)?q.forEach(Se=>Y(Se.bind(n))):q&&Y(q.bind(n))}if(ie(Ul,h),ie(Fl,p),ie($l,y),ie(Bl,C),ie(Ml,k),ie(Ll,H),ie(zl,pe),ie(Wl,F),ie(Vl,ae),ie(Hl,M),ie(sa,z),ie(jl,ke),x(Ee))if(Ee.length){const Y=t.exposed||(t.exposed={});Ee.forEach(q=>{Object.defineProperty(Y,q,{get:()=>n[q],set:Se=>n[q]=Se})})}else t.exposed||(t.exposed={});se&&t.render===Ie&&(t.render=se),Je!=null&&(t.inheritAttrs=Je),Ye&&(t.components=Ye),Dt&&(t.directives=Dt)}function ql(t,e,n=Ie){x(t)&&(t=es(t));for(const r in t){const s=t[r];let i;re(s)?"default"in s?i=Ue(s.from||r,s.default,!0):i=Ue(s.from||r):i=Ue(s),be(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function li(t,e,n){Pe(x(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function ia(t,e,n,r){const s=r.includes(".")?ea(n,r):()=>n[r];if(oe(t)){const i=e[t];B(i)&&Hn(s,i)}else if(B(t))Hn(s,t.bind(n));else if(re(t))if(x(t))t.forEach(i=>ia(i,e,n,r));else{const i=B(t.handler)?t.handler.bind(n):e[t.handler];B(i)&&Hn(s,i,t)}}function ks(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let a;return c?a=c:!s.length&&!n&&!r?a=e:(a={},s.length&&s.forEach(l=>Zn(a,l,o,!0)),Zn(a,e,o)),re(e)&&i.set(e,a),a}function Zn(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Zn(t,i,n,!0),s&&s.forEach(o=>Zn(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=Jl[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const Jl={data:ui,props:fi,emits:fi,methods:on,computed:on,beforeCreate:he,created:he,beforeMount:he,mounted:he,beforeUpdate:he,updated:he,beforeDestroy:he,beforeUnmount:he,destroyed:he,unmounted:he,activated:he,deactivated:he,errorCaptured:he,serverPrefetch:he,components:on,directives:on,watch:Xl,provide:ui,inject:Yl};function ui(t,e){return e?t?function(){return le(B(t)?t.call(this,this):t,B(e)?e.call(this,this):e)}:e:t}function Yl(t,e){return on(es(t),es(e))}function es(t){if(x(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function he(t,e){return t?[...new Set([].concat(t,e))]:e}function on(t,e){return t?le(Object.create(null),t,e):e}function fi(t,e){return t?x(t)&&x(e)?[...new Set([...t,...e])]:le(Object.create(null),ci(t),ci(e??{})):e}function Xl(t,e){if(!t)return e;if(!e)return t;const n=le(Object.create(null),t);for(const r in e)n[r]=he(t[r],e[r]);return n}function oa(){return{app:null,config:{isNativeTag:Pc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ql=0;function Zl(t,e){return function(r,s=null){B(r)||(r=le({},r)),s!=null&&!re(s)&&(s=null);const i=oa(),o=new WeakSet;let c=!1;const a=i.app={_uid:Ql++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Su,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&B(l.install)?(o.add(l),l.install(a,...u)):B(l)&&(o.add(l),l(a,...u))),a},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),a},component(l,u){return u?(i.components[l]=u,a):i.components[l]},directive(l,u){return u?(i.directives[l]=u,a):i.directives[l]},mount(l,u,h){if(!c){const p=ve(r,s);return p.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(p,l):t(p,l,h),c=!0,a._container=l,l.__vue_app__=a,br(p.component)||p.component.proxy}},unmount(){c&&(t(null,a._container),delete a._container.__vue_app__)},provide(l,u){return i.provides[l]=u,a},runWithContext(l){const u=un;un=a;try{return l()}finally{un=u}}};return a}}let un=null;function Vn(t,e){if(fe){let n=fe.provides;const r=fe.parent&&fe.parent.provides;r===n&&(n=fe.provides=Object.create(r)),n[t]=e}}function Ue(t,e,n=!1){const r=fe||_e;if(r||un){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:un._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&B(e)?e.call(r&&r.proxy):e}}const aa={},ca=()=>Object.create(aa),la=t=>Object.getPrototypeOf(t)===aa;function eu(t,e,n,r=!1){const s={},i=ca();t.propsDefaults=Object.create(null),ua(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:cl(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function tu(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=G(s),[a]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let p=u[h];if(mr(t.emitsOptions,p))continue;const y=e[p];if(a)if(K(i,p))y!==i[p]&&(i[p]=y,l=!0);else{const C=$e(p);s[C]=ts(a,c,C,y,t,!1)}else y!==i[p]&&(i[p]=y,l=!0)}}}else{ua(t,e,s,i)&&(l=!0);let u;for(const h in c)(!e||!K(e,h)&&((u=Qt(h))===h||!K(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=ts(a,c,h,void 0,t,!0)):delete s[h]);if(i!==c)for(const h in i)(!e||!K(e,h))&&(delete i[h],l=!0)}l&&Ke(t.attrs,"set","")}function ua(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let a in e){if(an(a))continue;const l=e[a];let u;s&&K(s,u=$e(a))?!i||!i.includes(u)?n[u]=l:(c||(c={}))[u]=l:mr(t.emitsOptions,a)||(!(a in r)||l!==r[a])&&(r[a]=l,o=!0)}if(i){const a=G(n),l=c||te;for(let u=0;u<i.length;u++){const h=i[u];n[h]=ts(s,a,h,l[h],t,!K(l,h))}}return o}function ts(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=K(o,"default");if(c&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&B(a)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=Tn(s);r=l[n]=a.call(null,e),u()}}else r=a}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Qt(n))&&(r=!0))}return r}function fa(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let a=!1;if(!B(t)){const u=h=>{a=!0;const[p,y]=fa(h,e,!0);le(o,p),y&&c.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!a)return re(t)&&r.set(t,$t),$t;if(x(i))for(let u=0;u<i.length;u++){const h=$e(i[u]);di(h)&&(o[h]=te)}else if(i)for(const u in i){const h=$e(u);if(di(h)){const p=i[u],y=o[h]=x(p)||B(p)?{type:p}:le({},p);if(y){const C=gi(Boolean,y.type),k=gi(String,y.type);y[0]=C>-1,y[1]=k<0||C<k,(C>-1||K(y,"default"))&&c.push(h)}}}const l=[o,c];return re(t)&&r.set(t,l),l}function di(t){return t[0]!=="$"&&!an(t)}function hi(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function pi(t,e){return hi(t)===hi(e)}function gi(t,e){return x(e)?e.findIndex(n=>pi(n,t)):B(e)&&pi(e,t)?0:-1}const da=t=>t[0]==="_"||t==="$stable",Ns=t=>x(t)?t.map(Me):[Me(t)],nu=(t,e,n)=>{if(e._n)return e;const r=wl((...s)=>Ns(e(...s)),n);return r._c=!1,r},ha=(t,e,n)=>{const r=t._ctx;for(const s in t){if(da(s))continue;const i=t[s];if(B(i))e[s]=nu(s,i,r);else if(i!=null){const o=Ns(i);e[s]=()=>o}}},pa=(t,e)=>{const n=Ns(e);t.slots.default=()=>n},ru=(t,e)=>{const n=t.slots=ca();if(t.vnode.shapeFlag&32){const r=e._;r?(le(n,e),To(n,"_",r,!0)):ha(e,n)}else e&&pa(t,e)},su=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=te;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:(le(s,e),!n&&c===1&&delete s._):(i=!e.$stable,ha(e,s)),o=e}else e&&(pa(t,e),o={default:1});if(i)for(const c in s)!da(c)&&o[c]==null&&delete s[c]};function ns(t,e,n,r,s=!1){if(x(t)){t.forEach((p,y)=>ns(p,e&&(x(e)?e[y]:e),n,r,s));return}if(jn(r)&&!s)return;const i=r.shapeFlag&4?br(r.component)||r.component.proxy:r.el,o=s?null:i,{i:c,r:a}=t,l=e&&e.r,u=c.refs===te?c.refs={}:c.refs,h=c.setupState;if(l!=null&&l!==a&&(oe(l)?(u[l]=null,K(h,l)&&(h[l]=null)):be(l)&&(l.value=null)),B(a))ut(a,c,12,[o,u]);else{const p=oe(a),y=be(a);if(p||y){const C=()=>{if(t.f){const k=p?K(h,a)?h[a]:u[a]:a.value;s?x(k)&&vs(k,i):x(k)?k.includes(i)||k.push(i):p?(u[a]=[i],K(h,a)&&(h[a]=u[a])):(a.value=[i],t.k&&(u[t.k]=a.value))}else p?(u[a]=o,K(h,a)&&(h[a]=o)):y&&(a.value=o,t.k&&(u[t.k]=o))};o?(C.id=-1,me(C,n)):C()}}}const me=Ol;function iu(t){return ou(t)}function ou(t,e){const n=Ao();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:a,setText:l,setElementText:u,parentNode:h,nextSibling:p,setScopeId:y=Ie,insertStaticContent:C}=t,k=(f,d,g,_=null,v=null,E=null,T=void 0,w=null,I=!!d.dynamicChildren)=>{if(f===d)return;f&&!rn(f,d)&&(_=S(f),ge(f,v,E,!0),f=null),d.patchFlag===-2&&(I=!1,d.dynamicChildren=null);const{type:b,ref:R,shapeFlag:N}=d;switch(b){case vr:H(f,d,g,_);break;case Pt:D(f,d,g,_);break;case Wn:f==null&&M(d,g,_,T);break;case He:Ye(f,d,g,_,v,E,T,w,I);break;default:N&1?se(f,d,g,_,v,E,T,w,I):N&6?Dt(f,d,g,_,v,E,T,w,I):(N&64||N&128)&&b.process(f,d,g,_,v,E,T,w,I,ee)}R!=null&&v&&ns(R,f&&f.ref,E,d||f,!d)},H=(f,d,g,_)=>{if(f==null)r(d.el=c(d.children),g,_);else{const v=d.el=f.el;d.children!==f.children&&l(v,d.children)}},D=(f,d,g,_)=>{f==null?r(d.el=a(d.children||""),g,_):d.el=f.el},M=(f,d,g,_)=>{[f.el,f.anchor]=C(f.children,d,g,_,f.el,f.anchor)},U=({el:f,anchor:d},g,_)=>{let v;for(;f&&f!==d;)v=p(f),r(f,g,_),f=v;r(d,g,_)},z=({el:f,anchor:d})=>{let g;for(;f&&f!==d;)g=p(f),s(f),f=g;s(d)},se=(f,d,g,_,v,E,T,w,I)=>{d.type==="svg"?T="svg":d.type==="math"&&(T="mathml"),f==null?F(d,g,_,v,E,T,w,I):ke(f,d,v,E,T,w,I)},F=(f,d,g,_,v,E,T,w)=>{let I,b;const{props:R,shapeFlag:N,transition:O,dirs:$}=f;if(I=f.el=o(f.type,E,R&&R.is,R),N&8?u(I,f.children):N&16&&pe(f.children,I,null,_,v,Nr(f,E),T,w),$&&bt(f,null,_,"created"),ae(I,f,f.scopeId,T,_),R){for(const J in R)J!=="value"&&!an(J)&&i(I,J,null,R[J],E,f.children,_,v,A);"value"in R&&i(I,"value",null,R.value,E),(b=R.onVnodeBeforeMount)&&De(b,_,f)}$&&bt(f,null,_,"beforeMount");const W=au(v,O);W&&O.beforeEnter(I),r(I,d,g),((b=R&&R.onVnodeMounted)||W||$)&&me(()=>{b&&De(b,_,f),W&&O.enter(I),$&&bt(f,null,_,"mounted")},v)},ae=(f,d,g,_,v)=>{if(g&&y(f,g),_)for(let E=0;E<_.length;E++)y(f,_[E]);if(v){let E=v.subTree;if(d===E){const T=v.vnode;ae(f,T,T.scopeId,T.slotScopeIds,v.parent)}}},pe=(f,d,g,_,v,E,T,w,I=0)=>{for(let b=I;b<f.length;b++){const R=f[b]=w?nt(f[b]):Me(f[b]);k(null,R,d,g,_,v,E,T,w)}},ke=(f,d,g,_,v,E,T)=>{const w=d.el=f.el;let{patchFlag:I,dynamicChildren:b,dirs:R}=d;I|=f.patchFlag&16;const N=f.props||te,O=d.props||te;let $;if(g&&wt(g,!1),($=O.onVnodeBeforeUpdate)&&De($,g,d,f),R&&bt(d,f,g,"beforeUpdate"),g&&wt(g,!0),b?Ee(f.dynamicChildren,b,w,g,_,Nr(d,v),E):T||q(f,d,w,null,g,_,Nr(d,v),E,!1),I>0){if(I&16)Je(w,d,N,O,g,_,v);else if(I&2&&N.class!==O.class&&i(w,"class",null,O.class,v),I&4&&i(w,"style",N.style,O.style,v),I&8){const W=d.dynamicProps;for(let J=0;J<W.length;J++){const ne=W[J],ce=N[ne],Ae=O[ne];(Ae!==ce||ne==="value")&&i(w,ne,ce,Ae,v,f.children,g,_,A)}}I&1&&f.children!==d.children&&u(w,d.children)}else!T&&b==null&&Je(w,d,N,O,g,_,v);(($=O.onVnodeUpdated)||R)&&me(()=>{$&&De($,g,d,f),R&&bt(d,f,g,"updated")},_)},Ee=(f,d,g,_,v,E,T)=>{for(let w=0;w<d.length;w++){const I=f[w],b=d[w],R=I.el&&(I.type===He||!rn(I,b)||I.shapeFlag&70)?h(I.el):g;k(I,b,R,null,_,v,E,T,!0)}},Je=(f,d,g,_,v,E,T)=>{if(g!==_){if(g!==te)for(const w in g)!an(w)&&!(w in _)&&i(f,w,g[w],null,T,d.children,v,E,A);for(const w in _){if(an(w))continue;const I=_[w],b=g[w];I!==b&&w!=="value"&&i(f,w,b,I,T,d.children,v,E,A)}"value"in _&&i(f,"value",g.value,_.value,T)}},Ye=(f,d,g,_,v,E,T,w,I)=>{const b=d.el=f?f.el:c(""),R=d.anchor=f?f.anchor:c("");let{patchFlag:N,dynamicChildren:O,slotScopeIds:$}=d;$&&(w=w?w.concat($):$),f==null?(r(b,g,_),r(R,g,_),pe(d.children||[],g,R,v,E,T,w,I)):N>0&&N&64&&O&&f.dynamicChildren?(Ee(f.dynamicChildren,O,g,v,E,T,w),(d.key!=null||v&&d===v.subTree)&&ga(f,d,!0)):q(f,d,g,R,v,E,T,w,I)},Dt=(f,d,g,_,v,E,T,w,I)=>{d.slotScopeIds=w,f==null?d.shapeFlag&512?v.ctx.activate(d,g,_,T,I):vt(d,g,_,v,E,T,I):tn(f,d,I)},vt=(f,d,g,_,v,E,T)=>{const w=f.component=_u(f,_,v);if(na(f)&&(w.ctx.renderer=ee),vu(w),w.asyncDep){if(v&&v.registerDep(w,ie),!f.el){const I=w.subTree=ve(Pt);D(null,I,d,g)}}else ie(w,f,d,g,v,E,T)},tn=(f,d,g)=>{const _=d.component=f.component;if(Sl(f,d,g))if(_.asyncDep&&!_.asyncResolved){Y(_,d,g);return}else _.next=d,_l(_.update),_.effect.dirty=!0,_.update();else d.el=f.el,_.vnode=d},ie=(f,d,g,_,v,E,T)=>{const w=()=>{if(f.isMounted){let{next:R,bu:N,u:O,parent:$,vnode:W}=f;{const Lt=ma(f);if(Lt){R&&(R.el=W.el,Y(f,R,T)),Lt.asyncDep.then(()=>{f.isUnmounted||w()});return}}let J=R,ne;wt(f,!1),R?(R.el=W.el,Y(f,R,T)):R=W,N&&$n(N),(ne=R.props&&R.props.onVnodeBeforeUpdate)&&De(ne,$,R,W),wt(f,!0);const ce=Or(f),Ae=f.subTree;f.subTree=ce,k(Ae,ce,h(Ae.el),S(Ae),f,v,E),R.el=ce.el,J===null&&Tl(f,ce.el),O&&me(O,v),(ne=R.props&&R.props.onVnodeUpdated)&&me(()=>De(ne,$,R,W),v)}else{let R;const{el:N,props:O}=d,{bm:$,m:W,parent:J}=f,ne=jn(d);if(wt(f,!1),$&&$n($),!ne&&(R=O&&O.onVnodeBeforeMount)&&De(R,J,d),wt(f,!0),N&&j){const ce=()=>{f.subTree=Or(f),j(N,f.subTree,f,v,null)};ne?d.type.__asyncLoader().then(()=>!f.isUnmounted&&ce()):ce()}else{const ce=f.subTree=Or(f);k(null,ce,g,_,f,v,E),d.el=ce.el}if(W&&me(W,v),!ne&&(R=O&&O.onVnodeMounted)){const ce=d;me(()=>De(R,J,ce),v)}(d.shapeFlag&256||J&&jn(J.vnode)&&J.vnode.shapeFlag&256)&&f.a&&me(f.a,v),f.isMounted=!0,d=g=_=null}},I=f.effect=new Es(w,Ie,()=>Os(b),f.scope),b=f.update=()=>{I.dirty&&I.run()};b.id=f.uid,wt(f,!0),b()},Y=(f,d,g)=>{d.component=f;const _=f.vnode.props;f.vnode=d,f.next=null,tu(f,d.props,_,g),su(f,d.children,g),pt(),ii(f),gt()},q=(f,d,g,_,v,E,T,w,I=!1)=>{const b=f&&f.children,R=f?f.shapeFlag:0,N=d.children,{patchFlag:O,shapeFlag:$}=d;if(O>0){if(O&128){yt(b,N,g,_,v,E,T,w,I);return}else if(O&256){Se(b,N,g,_,v,E,T,w,I);return}}$&8?(R&16&&A(b,v,E),N!==b&&u(g,N)):R&16?$&16?yt(b,N,g,_,v,E,T,w,I):A(b,v,E,!0):(R&8&&u(g,""),$&16&&pe(N,g,_,v,E,T,w,I))},Se=(f,d,g,_,v,E,T,w,I)=>{f=f||$t,d=d||$t;const b=f.length,R=d.length,N=Math.min(b,R);let O;for(O=0;O<N;O++){const $=d[O]=I?nt(d[O]):Me(d[O]);k(f[O],$,g,null,v,E,T,w,I)}b>R?A(f,v,E,!0,!1,N):pe(d,g,_,v,E,T,w,I,N)},yt=(f,d,g,_,v,E,T,w,I)=>{let b=0;const R=d.length;let N=f.length-1,O=R-1;for(;b<=N&&b<=O;){const $=f[b],W=d[b]=I?nt(d[b]):Me(d[b]);if(rn($,W))k($,W,g,null,v,E,T,w,I);else break;b++}for(;b<=N&&b<=O;){const $=f[N],W=d[O]=I?nt(d[O]):Me(d[O]);if(rn($,W))k($,W,g,null,v,E,T,w,I);else break;N--,O--}if(b>N){if(b<=O){const $=O+1,W=$<R?d[$].el:_;for(;b<=O;)k(null,d[b]=I?nt(d[b]):Me(d[b]),g,W,v,E,T,w,I),b++}}else if(b>O)for(;b<=N;)ge(f[b],v,E,!0),b++;else{const $=b,W=b,J=new Map;for(b=W;b<=O;b++){const we=d[b]=I?nt(d[b]):Me(d[b]);we.key!=null&&J.set(we.key,b)}let ne,ce=0;const Ae=O-W+1;let Lt=!1,qs=0;const nn=new Array(Ae);for(b=0;b<Ae;b++)nn[b]=0;for(b=$;b<=N;b++){const we=f[b];if(ce>=Ae){ge(we,v,E,!0);continue}let Ne;if(we.key!=null)Ne=J.get(we.key);else for(ne=W;ne<=O;ne++)if(nn[ne-W]===0&&rn(we,d[ne])){Ne=ne;break}Ne===void 0?ge(we,v,E,!0):(nn[Ne-W]=b+1,Ne>=qs?qs=Ne:Lt=!0,k(we,d[Ne],g,null,v,E,T,w,I),ce++)}const Js=Lt?cu(nn):$t;for(ne=Js.length-1,b=Ae-1;b>=0;b--){const we=W+b,Ne=d[we],Ys=we+1<R?d[we+1].el:_;nn[b]===0?k(null,Ne,g,Ys,v,E,T,w,I):Lt&&(ne<0||b!==Js[ne]?Te(Ne,g,Ys,2):ne--)}}},Te=(f,d,g,_,v=null)=>{const{el:E,type:T,transition:w,children:I,shapeFlag:b}=f;if(b&6){Te(f.component.subTree,d,g,_);return}if(b&128){f.suspense.move(d,g,_);return}if(b&64){T.move(f,d,g,ee);return}if(T===He){r(E,d,g);for(let N=0;N<I.length;N++)Te(I[N],d,g,_);r(f.anchor,d,g);return}if(T===Wn){U(f,d,g);return}if(_!==2&&b&1&&w)if(_===0)w.beforeEnter(E),r(E,d,g),me(()=>w.enter(E),v);else{const{leave:N,delayLeave:O,afterLeave:$}=w,W=()=>r(E,d,g),J=()=>{N(E,()=>{W(),$&&$()})};O?O(E,W,J):J()}else r(E,d,g)},ge=(f,d,g,_=!1,v=!1)=>{const{type:E,props:T,ref:w,children:I,dynamicChildren:b,shapeFlag:R,patchFlag:N,dirs:O}=f;if(w!=null&&ns(w,null,g,f,!0),R&256){d.ctx.deactivate(f);return}const $=R&1&&O,W=!jn(f);let J;if(W&&(J=T&&T.onVnodeBeforeUnmount)&&De(J,d,f),R&6)m(f.component,g,_);else{if(R&128){f.suspense.unmount(g,_);return}$&&bt(f,null,d,"beforeUnmount"),R&64?f.type.remove(f,d,g,v,ee,_):b&&(E!==He||N>0&&N&64)?A(b,d,g,!1,!0):(E===He&&N&384||!v&&R&16)&&A(I,d,g),_&&Mt(f)}(W&&(J=T&&T.onVnodeUnmounted)||$)&&me(()=>{J&&De(J,d,f),$&&bt(f,null,d,"unmounted")},g)},Mt=f=>{const{type:d,el:g,anchor:_,transition:v}=f;if(d===He){Gs(g,_);return}if(d===Wn){z(f);return}const E=()=>{s(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:T,delayLeave:w}=v,I=()=>T(g,E);w?w(f.el,E,I):I()}else E()},Gs=(f,d)=>{let g;for(;f!==d;)g=p(f),s(f),f=g;s(d)},m=(f,d,g)=>{const{bum:_,scope:v,update:E,subTree:T,um:w}=f;_&&$n(_),v.stop(),E&&(E.active=!1,ge(T,f,d,g)),w&&me(w,d),me(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},A=(f,d,g,_=!1,v=!1,E=0)=>{for(let T=E;T<f.length;T++)ge(f[T],d,g,_,v)},S=f=>f.shapeFlag&6?S(f.component.subTree):f.shapeFlag&128?f.suspense.next():p(f.anchor||f.el);let P=!1;const X=(f,d,g)=>{f==null?d._vnode&&ge(d._vnode,null,null,!0):k(d._vnode||null,f,d,null,null,null,g),P||(P=!0,ii(),Jo(),P=!1),d._vnode=f},ee={p:k,um:ge,m:Te,r:Mt,mt:vt,mc:pe,pc:q,pbc:Ee,n:S,o:t};let V,j;return{render:X,hydrate:V,createApp:Zl(X,V)}}function Nr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function wt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function au(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ga(t,e,n=!1){const r=t.children,s=e.children;if(x(r)&&x(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=nt(s[i]),c.el=o.el),n||ga(o,c)),c.type===vr&&(c.el=o.el)}}function cu(t){const e=t.slice(),n=[0];let r,s,i,o,c;const a=t.length;for(r=0;r<a;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<l?i=c+1:o=c;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function ma(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ma(e)}const lu=t=>t.__isTeleport,He=Symbol.for("v-fgt"),vr=Symbol.for("v-txt"),Pt=Symbol.for("v-cmt"),Wn=Symbol.for("v-stc"),fn=[];let Ce=null;function _a(t=!1){fn.push(Ce=t?null:[])}function uu(){fn.pop(),Ce=fn[fn.length-1]||null}let yn=1;function mi(t){yn+=t}function va(t){return t.dynamicChildren=yn>0?Ce||$t:null,uu(),yn>0&&Ce&&Ce.push(t),t}function Wg(t,e,n,r,s,i){return va(wa(t,e,n,r,s,i,!0))}function ya(t,e,n,r,s){return va(ve(t,e,n,r,s,!0))}function rs(t){return t?t.__v_isVNode===!0:!1}function rn(t,e){return t.type===e.type&&t.key===e.key}const ba=({key:t})=>t??null,zn=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?oe(t)||be(t)||B(t)?{i:_e,r:t,k:e,f:!!n}:t:null);function wa(t,e=null,n=null,r=0,s=null,i=t===He?0:1,o=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ba(e),ref:e&&zn(e),scopeId:Qo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:_e};return c?(Ds(a,n),i&128&&t.normalize(a)):n&&(a.shapeFlag|=oe(n)?8:16),yn>0&&!o&&Ce&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&Ce.push(a),a}const ve=fu;function fu(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Rl)&&(t=Pt),rs(t)){const c=Gt(t,e,!0);return n&&Ds(c,n),yn>0&&!i&&Ce&&(c.shapeFlag&6?Ce[Ce.indexOf(t)]=c:Ce.push(c)),c.patchFlag|=-2,c}if(Iu(t)&&(t=t.__vccOpts),e){e=du(e);let{class:c,style:a}=e;c&&!oe(c)&&(e.class=ws(c)),re(a)&&(Ho(a)&&!x(a)&&(a=le({},a)),e.style=bs(a))}const o=oe(t)?1:Pl(t)?128:lu(t)?64:re(t)?4:B(t)?2:0;return wa(t,e,n,r,s,o,i,!0)}function du(t){return t?Ho(t)||la(t)?le({},t):t:null}function Gt(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:a}=t,l=e?pu(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&ba(l),ref:e&&e.ref?n&&i?x(i)?i.concat(zn(e)):[i,zn(e)]:zn(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==He?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Gt(t.ssContent),ssFallback:t.ssFallback&&Gt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&r&&(u.transition=a.clone(u)),u}function hu(t=" ",e=0){return ve(vr,null,t,e)}function zg(t,e){const n=ve(Wn,null,t);return n.staticCount=e,n}function Kg(t="",e=!1){return e?(_a(),ya(Pt,null,t)):ve(Pt,null,t)}function Me(t){return t==null||typeof t=="boolean"?ve(Pt):x(t)?ve(He,null,t.slice()):typeof t=="object"?nt(t):ve(vr,null,String(t))}function nt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Gt(t)}function Ds(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(x(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ds(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!la(e)?e._ctx=_e:s===3&&_e&&(_e.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else B(e)?(e={default:e,_ctx:_e},n=32):(e=String(e),r&64?(n=16,e=[hu(e)]):n=8);t.children=e,t.shapeFlag|=n}function pu(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ws([e.class,r.class]));else if(s==="style")e.style=bs([e.style,r.style]);else if(ur(s)){const i=e[s],o=r[s];o&&i!==o&&!(x(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function De(t,e,n,r=null){Pe(t,e,7,[n,r])}const gu=oa();let mu=0;function _u(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||gu,i={uid:mu++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Bc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:fa(r,s),emitsOptions:Xo(r,s),emit:null,emitted:null,propsDefaults:te,inheritAttrs:r.inheritAttrs,ctx:te,data:te,props:te,attrs:te,slots:te,refs:te,setupState:te,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=bl.bind(null,i),t.ce&&t.ce(i),i}let fe=null,er,ss;{const t=Ao(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};er=e("__VUE_INSTANCE_SETTERS__",n=>fe=n),ss=e("__VUE_SSR_SETTERS__",n=>yr=n)}const Tn=t=>{const e=fe;return er(t),t.scope.on(),()=>{t.scope.off(),er(e)}},_i=()=>{fe&&fe.scope.off(),er(null)};function Ea(t){return t.vnode.shapeFlag&4}let yr=!1;function vu(t,e=!1){e&&ss(e);const{props:n,children:r}=t.vnode,s=Ea(t);eu(t,n,s,e),ru(t,r);const i=s?yu(t,e):void 0;return e&&ss(!1),i}function yu(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Kl);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?wu(t):null,i=Tn(t);pt();const o=ut(r,t,0,[t.props,s]);if(gt(),i(),Eo(o)){if(o.then(_i,_i),e)return o.then(c=>{vi(t,c,e)}).catch(c=>{gr(c,t,0)});t.asyncDep=o}else vi(t,o,e)}else Ia(t,e)}function vi(t,e,n){B(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:re(e)&&(t.setupState=zo(e)),Ia(t,n)}let yi;function Ia(t,e,n){const r=t.type;if(!t.render){if(!e&&yi&&!r.render){const s=r.template||ks(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:a}=r,l=le(le({isCustomElement:i,delimiters:c},o),a);r.render=yi(s,l)}}t.render=r.render||Ie}{const s=Tn(t);pt();try{Gl(t)}finally{gt(),s()}}}const bu={get(t,e){return ye(t,"get",""),t[e]}};function wu(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,bu),slots:t.slots,emit:t.emit,expose:e}}function br(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(zo(ll(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ln)return ln[n](t)},has(e,n){return n in e||n in ln}}))}function Eu(t,e=!0){return B(t)?t.displayName||t.name:t.name||e&&t.__name}function Iu(t){return B(t)&&"__vccOpts"in t}const xe=(t,e)=>ul(t,e,yr);function Sa(t,e,n){const r=arguments.length;return r===2?re(e)&&!x(e)?rs(e)?ve(t,null,[e]):ve(t,e):ve(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&rs(n)&&(n=[n]),ve(t,e,n))}const Su="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Tu="http://www.w3.org/2000/svg",Au="http://www.w3.org/1998/Math/MathML",rt=typeof document<"u"?document:null,bi=rt&&rt.createElement("template"),Ru={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?rt.createElementNS(Tu,t):e==="mathml"?rt.createElementNS(Au,t):rt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>rt.createTextNode(t),createComment:t=>rt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>rt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{bi.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const c=bi.content;if(r==="svg"||r==="mathml"){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Cu=Symbol("_vtc");function Pu(t,e,n){const r=t[Cu];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const wi=Symbol("_vod"),Ou=Symbol("_vsh"),ku=Symbol(""),Nu=/(^|;)\s*display\s*:/;function Du(t,e,n){const r=t.style,s=oe(n);let i=!1;if(n&&!s){if(e)if(oe(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&Kn(r,c,"")}else for(const o in e)n[o]==null&&Kn(r,o,"");for(const o in n)o==="display"&&(i=!0),Kn(r,o,n[o])}else if(s){if(e!==n){const o=r[ku];o&&(n+=";"+o),r.cssText=n,i=Nu.test(n)}}else e&&t.removeAttribute("style");wi in t&&(t[wi]=i?r.display:"",t[Ou]&&(r.display="none"))}const Ei=/\s*!important$/;function Kn(t,e,n){if(x(n))n.forEach(r=>Kn(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Mu(t,e);Ei.test(n)?t.setProperty(Qt(r),n.replace(Ei,""),"important"):t[r]=n}}const Ii=["Webkit","Moz","ms"],Dr={};function Mu(t,e){const n=Dr[e];if(n)return n;let r=$e(e);if(r!=="filter"&&r in t)return Dr[e]=r;r=hr(r);for(let s=0;s<Ii.length;s++){const i=Ii[s]+r;if(i in t)return Dr[e]=i}return e}const Si="http://www.w3.org/1999/xlink";function Lu(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Si,e.slice(6,e.length)):t.setAttributeNS(Si,e,n);else{const i=$c(e);n==null||i&&!Ro(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function xu(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const c=t.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){const l=c==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(l!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Ro(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Ut(t,e,n,r){t.addEventListener(e,n,r)}function Uu(t,e,n,r){t.removeEventListener(e,n,r)}const Ti=Symbol("_vei");function Fu(t,e,n,r,s=null){const i=t[Ti]||(t[Ti]={}),o=i[e];if(r&&o)o.value=r;else{const[c,a]=$u(e);if(r){const l=i[e]=ju(r,s);Ut(t,c,l,a)}else o&&(Uu(t,c,o,a),i[e]=void 0)}}const Ai=/(?:Once|Passive|Capture)$/;function $u(t){let e;if(Ai.test(t)){e={};let r;for(;r=t.match(Ai);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Qt(t.slice(2)),e]}let Mr=0;const Bu=Promise.resolve(),Hu=()=>Mr||(Bu.then(()=>Mr=0),Mr=Date.now());function ju(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Pe(Vu(r,n.value),e,5,[r])};return n.value=t,n.attached=Hu(),n}function Vu(t,e){if(x(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ri=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Wu=(t,e,n,r,s,i,o,c,a)=>{const l=s==="svg";e==="class"?Pu(t,r,l):e==="style"?Du(t,n,r):ur(e)?_s(e)||Fu(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):zu(t,e,r,l))?xu(t,e,r,i,o,c,a):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Lu(t,e,r,l))};function zu(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ri(e)&&B(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ri(e)&&oe(n)?!1:e in t}const Ci=t=>{const e=t.props["onUpdate:modelValue"]||!1;return x(e)?n=>$n(e,n):e};function Ku(t){t.target.composing=!0}function Pi(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Lr=Symbol("_assign"),Gg={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Lr]=Ci(s);const i=r||s.props&&s.props.type==="number";Ut(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=Kr(c)),t[Lr](c)}),n&&Ut(t,"change",()=>{t.value=t.value.trim()}),e||(Ut(t,"compositionstart",Ku),Ut(t,"compositionend",Pi),Ut(t,"change",Pi))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[Lr]=Ci(i),t.composing)return;const o=(s||t.type==="number")&&!/^0\d/.test(t.value)?Kr(t.value):t.value,c=e??"";o!==c&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===c)||(t.value=c))}},Gu=["ctrl","shift","alt","meta"],qu={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Gu.some(n=>t[`${n}Key`]&&!e.includes(n))},qg=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=qu[e[o]];if(c&&c(s,e))return}return t(s,...i)})},Ju=le({patchProp:Wu},Ru);let Oi;function Yu(){return Oi||(Oi=iu(Ju))}const Xu=(...t)=>{const e=Yu().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Zu(r);if(!s)return;const i=e._component;!B(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,Qu(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Qu(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Zu(t){return oe(t)?document.querySelector(t):t}/*!
  * vue-router v4.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ta=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Zt=t=>Ta?Symbol(t):"_vr_"+t,ef=Zt("rvlm"),ki=Zt("rvd"),wr=Zt("r"),Aa=Zt("rl"),is=Zt("rvl"),Ft=typeof window<"u";function tf(t){return t.__esModule||Ta&&t[Symbol.toStringTag]==="Module"}const Q=Object.assign;function xr(t,e){const n={};for(const r in e){const s=e[r];n[r]=Array.isArray(s)?s.map(t):t(s)}return n}const dn=()=>{},nf=/\/$/,rf=t=>t.replace(nf,"");function Ur(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("?"),a=e.indexOf("#",c>-1?c:0);return c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=cf(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function sf(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ni(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function of(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&qt(e.matched[r],n.matched[s])&&Ra(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function qt(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ra(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!af(t[n],e[n]))return!1;return!0}function af(t,e){return Array.isArray(t)?Di(t,e):Array.isArray(e)?Di(e,t):t===e}function Di(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function cf(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var bn;(function(t){t.pop="pop",t.push="push"})(bn||(bn={}));var hn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(hn||(hn={}));function lf(t){if(!t)if(Ft){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),rf(t)}const uf=/^[^#]+#/;function ff(t,e){return t.replace(uf,"#")+e}function df(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Er=()=>({left:window.pageXOffset,top:window.pageYOffset});function hf(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=df(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Mi(t,e){return(history.state?history.state.position-e:-1)+t}const os=new Map;function pf(t,e){os.set(t,e)}function gf(t){const e=os.get(t);return os.delete(t),e}let mf=()=>location.protocol+"//"+location.host;function Ca(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,a=s.slice(c);return a[0]!=="/"&&(a="/"+a),Ni(a,"")}return Ni(n,t)+r+s}function _f(t,e,n,r){let s=[],i=[],o=null;const c=({state:p})=>{const y=Ca(t,location),C=n.value,k=e.value;let H=0;if(p){if(n.value=y,e.value=p,o&&o===C){o=null;return}H=k?p.position-k.position:0}else r(y);s.forEach(D=>{D(n.value,C,{delta:H,type:bn.pop,direction:H?H>0?hn.forward:hn.back:hn.unknown})})};function a(){o=n.value}function l(p){s.push(p);const y=()=>{const C=s.indexOf(p);C>-1&&s.splice(C,1)};return i.push(y),y}function u(){const{history:p}=window;p.state&&p.replaceState(Q({},p.state,{scroll:Er()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",u),{pauseListeners:a,listen:l,destroy:h}}function Li(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Er():null}}function vf(t){const{history:e,location:n}=window,r={value:Ca(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(a,l,u){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+a:mf()+t+a;try{e[u?"replaceState":"pushState"](l,"",p),s.value=l}catch(y){console.error(y),n[u?"replace":"assign"](p)}}function o(a,l){const u=Q({},e.state,Li(s.value.back,a,s.value.forward,!0),l,{position:s.value.position});i(a,u,!0),r.value=a}function c(a,l){const u=Q({},s.value,e.state,{forward:a,scroll:Er()});i(u.current,u,!0);const h=Q({},Li(r.value,a,null),{position:u.position+1},l);i(a,h,!1),r.value=a}return{location:r,state:s,push:c,replace:o}}function yf(t){t=lf(t);const e=vf(t),n=_f(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Q({location:"",base:t,go:r,createHref:ff.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function bf(t){return typeof t=="string"||t&&typeof t=="object"}function Pa(t){return typeof t=="string"||typeof t=="symbol"}const Qe={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Oa=Zt("nf");var xi;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(xi||(xi={}));function Jt(t,e){return Q(new Error,{type:t,[Oa]:!0},e)}function Ze(t,e){return t instanceof Error&&Oa in t&&(e==null||!!(t.type&e))}const Ui="[^/]+?",wf={sensitive:!1,strict:!1,start:!0,end:!0},Ef=/[.+*?^${}()[\]/\\]/g;function If(t,e){const n=Q({},wf,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const p=l[h];let y=40+(n.sensitive?.25:0);if(p.type===0)h||(s+="/"),s+=p.value.replace(Ef,"\\$&"),y+=40;else if(p.type===1){const{value:C,repeatable:k,optional:H,regexp:D}=p;i.push({name:C,repeatable:k,optional:H});const M=D||Ui;if(M!==Ui){y+=10;try{new RegExp(`(${M})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${C}" (${M}): `+z.message)}}let U=k?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;h||(U=H&&l.length<2?`(?:/${U})`:"/"+U),H&&(U+="?"),s+=U,y+=20,H&&(y+=-8),k&&(y+=-20),M===".*"&&(y+=-50)}u.push(y)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(l){const u=l.match(o),h={};if(!u)return null;for(let p=1;p<u.length;p++){const y=u[p]||"",C=i[p-1];h[C.name]=y&&C.repeatable?y.split("/"):y}return h}function a(l){let u="",h=!1;for(const p of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const y of p)if(y.type===0)u+=y.value;else if(y.type===1){const{value:C,repeatable:k,optional:H}=y,D=C in l?l[C]:"";if(Array.isArray(D)&&!k)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const M=Array.isArray(D)?D.join("/"):D;if(!M)if(H)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${C}"`);u+=M}}return u}return{re:o,score:r,keys:i,parse:c,stringify:a}}function Sf(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Tf(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Sf(r[n],s[n]);if(i)return i;n++}return s.length-r.length}const Af={type:0,value:""},Rf=/[a-zA-Z0-9_]/;function Cf(t){if(!t)return[[]];if(t==="/")return[[Af]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${l}": ${y}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,a,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=a}for(;c<t.length;){if(a=t[c++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(l&&h(),o()):a===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:a==="("?n=2:Rf.test(a)?p():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function Pf(t,e,n){const r=If(Cf(t.path),n),s=Q(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Of(t,e){const n=[],r=new Map;e=$i({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,p){const y=!p,C=Nf(u);C.aliasOf=p&&p.record;const k=$i(e,u),H=[C];if("alias"in u){const U=typeof u.alias=="string"?[u.alias]:u.alias;for(const z of U)H.push(Q({},C,{components:p?p.record.components:C.components,path:z,aliasOf:p?p.record:C}))}let D,M;for(const U of H){const{path:z}=U;if(h&&z[0]!=="/"){const se=h.record.path,F=se[se.length-1]==="/"?"":"/";U.path=h.record.path+(z&&F+z)}if(D=Pf(U,h,k),p?p.alias.push(D):(M=M||D,M!==D&&M.alias.push(D),y&&u.name&&!Fi(D)&&o(u.name)),"children"in C){const se=C.children;for(let F=0;F<se.length;F++)i(se[F],D,p&&p.children[F])}p=p||D,a(D)}return M?()=>{o(M)}:dn}function o(u){if(Pa(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function c(){return n}function a(u){let h=0;for(;h<n.length&&Tf(u,n[h])>=0&&(u.record.path!==n[h].record.path||!ka(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Fi(u)&&r.set(u.record.name,u)}function l(u,h){let p,y={},C,k;if("name"in u&&u.name){if(p=r.get(u.name),!p)throw Jt(1,{location:u});k=p.record.name,y=Q(kf(h.params,p.keys.filter(M=>!M.optional).map(M=>M.name)),u.params),C=p.stringify(y)}else if("path"in u)C=u.path,p=n.find(M=>M.re.test(C)),p&&(y=p.parse(C),k=p.record.name);else{if(p=h.name?r.get(h.name):n.find(M=>M.re.test(h.path)),!p)throw Jt(1,{location:u,currentLocation:h});k=p.record.name,y=Q({},h.params,u.params),C=p.stringify(y)}const H=[];let D=p;for(;D;)H.unshift(D.record),D=D.parent;return{name:k,path:C,params:y,matched:H,meta:Mf(H)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:c,getRecordMatcher:s}}function kf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Nf(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Df(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function Df(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Fi(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Mf(t){return t.reduce((e,n)=>Q(e,n.meta),{})}function $i(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function ka(t,e){return e.children.some(n=>n===t||ka(t,n))}const Na=/#/g,Lf=/&/g,xf=/\//g,Uf=/=/g,Ff=/\?/g,Da=/\+/g,$f=/%5B/g,Bf=/%5D/g,Ma=/%5E/g,Hf=/%60/g,La=/%7B/g,jf=/%7C/g,xa=/%7D/g,Vf=/%20/g;function Ms(t){return encodeURI(""+t).replace(jf,"|").replace($f,"[").replace(Bf,"]")}function Wf(t){return Ms(t).replace(La,"{").replace(xa,"}").replace(Ma,"^")}function as(t){return Ms(t).replace(Da,"%2B").replace(Vf,"+").replace(Na,"%23").replace(Lf,"%26").replace(Hf,"`").replace(La,"{").replace(xa,"}").replace(Ma,"^")}function zf(t){return as(t).replace(Uf,"%3D")}function Kf(t){return Ms(t).replace(Na,"%23").replace(Ff,"%3F")}function Gf(t){return t==null?"":Kf(t).replace(xf,"%2F")}function tr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function qf(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Da," "),o=i.indexOf("="),c=tr(o<0?i:i.slice(0,o)),a=o<0?null:tr(i.slice(o+1));if(c in e){let l=e[c];Array.isArray(l)||(l=e[c]=[l]),l.push(a)}else e[c]=a}return e}function Bi(t){let e="";for(let n in t){const r=t[n];if(n=zf(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&as(i)):[r&&as(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Jf(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function sn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function st(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,c)=>{const a=h=>{h===!1?c(Jt(4,{from:n,to:e})):h instanceof Error?c(h):bf(h)?c(Jt(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,a);let u=Promise.resolve(l);t.length<3&&(u=u.then(a)),u.catch(h=>c(h))})}function Fr(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let c=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Yf(c)){const l=(c.__vccOpts||c)[e];l&&s.push(st(l,n,r,i,o))}else{let a=c();s.push(()=>a.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=tf(l)?l.default:l;i.components[o]=u;const p=(u.__vccOpts||u)[e];return p&&st(p,n,r,i,o)()}))}}return s}function Yf(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Hi(t){const e=Ue(wr),n=Ue(Aa),r=xe(()=>e.resolve(Ht(t.to))),s=xe(()=>{const{matched:a}=r.value,{length:l}=a,u=a[l-1],h=n.matched;if(!u||!h.length)return-1;const p=h.findIndex(qt.bind(null,u));if(p>-1)return p;const y=ji(a[l-2]);return l>1&&ji(u)===y&&h[h.length-1].path!==y?h.findIndex(qt.bind(null,a[l-2])):p}),i=xe(()=>s.value>-1&&ed(n.params,r.value.params)),o=xe(()=>s.value>-1&&s.value===n.matched.length-1&&Ra(n.params,r.value.params));function c(a={}){return Zf(a)?e[Ht(t.replace)?"replace":"push"](Ht(t.to)).catch(dn):Promise.resolve()}return{route:r,href:xe(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const Xf=ta({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Hi,setup(t,{slots:e}){const n=Sn(Hi(t)),{options:r}=Ue(wr),s=xe(()=>({[Vi(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Vi(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Sa("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Qf=Xf;function Zf(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ed(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function ji(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Vi=(t,e,n)=>t??e??n,td=ta({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const r=Ue(is),s=xe(()=>t.route||r.value),i=Ue(ki,0),o=xe(()=>s.value.matched[i]);Vn(ki,i+1),Vn(ef,o),Vn(is,s);const c=fl();return Hn(()=>[c.value,o.value,t.name],([a,l,u],[h,p,y])=>{l&&(l.instances[u]=a,p&&p!==l&&a&&a===h&&(l.leaveGuards.size||(l.leaveGuards=p.leaveGuards),l.updateGuards.size||(l.updateGuards=p.updateGuards))),a&&l&&(!p||!qt(l,p)||!h)&&(l.enterCallbacks[u]||[]).forEach(C=>C(a))},{flush:"post"}),()=>{const a=s.value,l=o.value,u=l&&l.components[t.name],h=t.name;if(!u)return Wi(n.default,{Component:u,route:a});const p=l.props[t.name],y=p?p===!0?a.params:typeof p=="function"?p(a):p:null,k=Sa(u,Q({},y,e,{onVnodeUnmounted:H=>{H.component.isUnmounted&&(l.instances[h]=null)},ref:c}));return Wi(n.default,{Component:k,route:a})||k}}});function Wi(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Ua=td;function nd(t){const e=Of(t.routes,t),n=t.parseQuery||qf,r=t.stringifyQuery||Bi,s=t.history,i=sn(),o=sn(),c=sn(),a=dl(Qe);let l=Qe;Ft&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=xr.bind(null,m=>""+m),h=xr.bind(null,Gf),p=xr.bind(null,tr);function y(m,A){let S,P;return Pa(m)?(S=e.getRecordMatcher(m),P=A):P=m,e.addRoute(P,S)}function C(m){const A=e.getRecordMatcher(m);A&&e.removeRoute(A)}function k(){return e.getRoutes().map(m=>m.record)}function H(m){return!!e.getRecordMatcher(m)}function D(m,A){if(A=Q({},A||a.value),typeof m=="string"){const j=Ur(n,m,A.path),f=e.resolve({path:j.path},A),d=s.createHref(j.fullPath);return Q(j,f,{params:p(f.params),hash:tr(j.hash),redirectedFrom:void 0,href:d})}let S;if("path"in m)S=Q({},m,{path:Ur(n,m.path,A.path).path});else{const j=Q({},m.params);for(const f in j)j[f]==null&&delete j[f];S=Q({},m,{params:h(m.params)}),A.params=h(A.params)}const P=e.resolve(S,A),X=m.hash||"";P.params=u(p(P.params));const ee=sf(r,Q({},m,{hash:Wf(X),path:P.path})),V=s.createHref(ee);return Q({fullPath:ee,hash:X,query:r===Bi?Jf(m.query):m.query||{}},P,{redirectedFrom:void 0,href:V})}function M(m){return typeof m=="string"?Ur(n,m,a.value.path):Q({},m)}function U(m,A){if(l!==m)return Jt(8,{from:A,to:m})}function z(m){return ae(m)}function se(m){return z(Q(M(m),{replace:!0}))}function F(m){const A=m.matched[m.matched.length-1];if(A&&A.redirect){const{redirect:S}=A;let P=typeof S=="function"?S(m):S;return typeof P=="string"&&(P=P.includes("?")||P.includes("#")?P=M(P):{path:P},P.params={}),Q({query:m.query,hash:m.hash,params:m.params},P)}}function ae(m,A){const S=l=D(m),P=a.value,X=m.state,ee=m.force,V=m.replace===!0,j=F(S);if(j)return ae(Q(M(j),{state:X,force:ee,replace:V}),A||S);const f=S;f.redirectedFrom=A;let d;return!ee&&of(r,P,S)&&(d=Jt(16,{to:f,from:P}),yt(P,P,!0,!1)),(d?Promise.resolve(d):ke(f,P)).catch(g=>Ze(g)?Ze(g,2)?g:Se(g):Y(g,f,P)).then(g=>{if(g){if(Ze(g,2))return ae(Q(M(g.to),{state:X,force:ee,replace:V}),A||f)}else g=Je(f,P,!0,V,X);return Ee(f,P,g),g})}function pe(m,A){const S=U(m,A);return S?Promise.reject(S):Promise.resolve()}function ke(m,A){let S;const[P,X,ee]=rd(m,A);S=Fr(P.reverse(),"beforeRouteLeave",m,A);for(const j of P)j.leaveGuards.forEach(f=>{S.push(st(f,m,A))});const V=pe.bind(null,m,A);return S.push(V),xt(S).then(()=>{S=[];for(const j of i.list())S.push(st(j,m,A));return S.push(V),xt(S)}).then(()=>{S=Fr(X,"beforeRouteUpdate",m,A);for(const j of X)j.updateGuards.forEach(f=>{S.push(st(f,m,A))});return S.push(V),xt(S)}).then(()=>{S=[];for(const j of m.matched)if(j.beforeEnter&&!A.matched.includes(j))if(Array.isArray(j.beforeEnter))for(const f of j.beforeEnter)S.push(st(f,m,A));else S.push(st(j.beforeEnter,m,A));return S.push(V),xt(S)}).then(()=>(m.matched.forEach(j=>j.enterCallbacks={}),S=Fr(ee,"beforeRouteEnter",m,A),S.push(V),xt(S))).then(()=>{S=[];for(const j of o.list())S.push(st(j,m,A));return S.push(V),xt(S)}).catch(j=>Ze(j,8)?j:Promise.reject(j))}function Ee(m,A,S){for(const P of c.list())P(m,A,S)}function Je(m,A,S,P,X){const ee=U(m,A);if(ee)return ee;const V=A===Qe,j=Ft?history.state:{};S&&(P||V?s.replace(m.fullPath,Q({scroll:V&&j&&j.scroll},X)):s.push(m.fullPath,X)),a.value=m,yt(m,A,S,V),Se()}let Ye;function Dt(){Ye=s.listen((m,A,S)=>{const P=D(m),X=F(P);if(X){ae(Q(X,{replace:!0}),P).catch(dn);return}l=P;const ee=a.value;Ft&&pf(Mi(ee.fullPath,S.delta),Er()),ke(P,ee).catch(V=>Ze(V,12)?V:Ze(V,2)?(ae(V.to,P).then(j=>{Ze(j,20)&&!S.delta&&S.type===bn.pop&&s.go(-1,!1)}).catch(dn),Promise.reject()):(S.delta&&s.go(-S.delta,!1),Y(V,P,ee))).then(V=>{V=V||Je(P,ee,!1),V&&(S.delta?s.go(-S.delta,!1):S.type===bn.pop&&Ze(V,20)&&s.go(-1,!1)),Ee(P,ee,V)}).catch(dn)})}let vt=sn(),tn=sn(),ie;function Y(m,A,S){Se(m);const P=tn.list();return P.length?P.forEach(X=>X(m,A,S)):console.error(m),Promise.reject(m)}function q(){return ie&&a.value!==Qe?Promise.resolve():new Promise((m,A)=>{vt.add([m,A])})}function Se(m){return ie||(ie=!m,Dt(),vt.list().forEach(([A,S])=>m?S(m):A()),vt.reset()),m}function yt(m,A,S,P){const{scrollBehavior:X}=t;if(!Ft||!X)return Promise.resolve();const ee=!S&&gf(Mi(m.fullPath,0))||(P||!S)&&history.state&&history.state.scroll||null;return Go().then(()=>X(m,A,ee)).then(V=>V&&hf(V)).catch(V=>Y(V,m,A))}const Te=m=>s.go(m);let ge;const Mt=new Set;return{currentRoute:a,addRoute:y,removeRoute:C,hasRoute:H,getRoutes:k,resolve:D,options:t,push:z,replace:se,go:Te,back:()=>Te(-1),forward:()=>Te(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:tn.add,isReady:q,install(m){const A=this;m.component("RouterLink",Qf),m.component("RouterView",Ua),m.config.globalProperties.$router=A,Object.defineProperty(m.config.globalProperties,"$route",{enumerable:!0,get:()=>Ht(a)}),Ft&&!ge&&a.value===Qe&&(ge=!0,z(s.location).catch(X=>{}));const S={};for(const X in Qe)S[X]=xe(()=>a.value[X]);m.provide(wr,A),m.provide(Aa,Sn(S)),m.provide(is,a);const P=m.unmount;Mt.add(m),m.unmount=function(){Mt.delete(m),Mt.size<1&&(l=Qe,Ye&&Ye(),a.value=Qe,ge=!1,ie=!1),P()}}}}function xt(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function rd(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(l=>qt(l,c))?r.push(c):n.push(c));const a=t.matched[o];a&&(e.matched.find(l=>qt(l,a))||s.push(a))}return[n,r,s]}function Jg(){return Ue(wr)}const sd={__name:"App",setup(t){return(e,n)=>(_a(),ya(Ht(Ua)))}};var zi={};/**
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
 */const Fa=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},id=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},$a={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,a=s+2<t.length,l=a?t[s+2]:0,u=i>>2,h=(i&3)<<4|c>>4;let p=(c&15)<<2|l>>6,y=l&63;a||(y=64,o||(p=64)),r.push(n[u],n[h],n[p],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Fa(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):id(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||l==null||h==null)throw new od;const p=i<<2|c>>4;if(r.push(p),l!==64){const y=c<<4&240|l>>2;if(r.push(y),h!==64){const C=l<<6&192|h;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class od extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ad=function(t){const e=Fa(t);return $a.encodeByteArray(e,!0)},nr=function(t){return ad(t).replace(/\./g,"")},Ba=function(t){try{return $a.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function cd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ld=()=>cd().__FIREBASE_DEFAULTS__,ud=()=>{if(typeof process>"u"||typeof zi>"u")return;const t=zi.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},fd=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ba(t[1]);return e&&JSON.parse(e)},Ir=()=>{try{return ld()||ud()||fd()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ha=t=>{var e,n;return(n=(e=Ir())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Yg=t=>{const e=Ha(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ja=()=>{var t;return(t=Ir())===null||t===void 0?void 0:t.config},Va=t=>{var e;return(e=Ir())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class dd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Xg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[nr(JSON.stringify(n)),nr(JSON.stringify(o)),""].join(".")}/**
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
 */function de(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(de())}function pd(){var t;const e=(t=Ir())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function gd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function md(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _d(){const t=de();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Qg(){return!pd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function vd(){try{return typeof indexedDB=="object"}catch{return!1}}function yd(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const bd="FirebaseError";class mt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=bd,Object.setPrototypeOf(this,mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,An.prototype.create)}}class An{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?wd(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new mt(s,c,r)}}function wd(t,e){return t.replace(Ed,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Ed=/\{\$([^}]+)}/g;function Id(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function rr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ki(i)&&Ki(o)){if(!rr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ki(t){return t!==null&&typeof t=="object"}/**
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
 */function Rn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Sd(t,e){const n=new Td(t,e);return n.subscribe.bind(n)}class Td{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ad(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=$r),s.error===void 0&&(s.error=$r),s.complete===void 0&&(s.complete=$r);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ad(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $r(){}/**
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
 */function _t(t){return t&&t._delegate?t._delegate:t}class Yt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Et="[DEFAULT]";/**
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
 */class Rd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new dd;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Pd(e))try{this.getOrInitializeService({instanceIdentifier:Et})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Et){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Et){return this.instances.has(e)}getOptions(e=Et){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Cd(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Et){return this.component?this.component.multipleInstances?e:Et:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Cd(t){return t===Et?void 0:t}function Pd(t){return t.instantiationMode==="EAGER"}/**
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
 */class Od{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Rd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Z||(Z={}));const kd={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},Nd=Z.INFO,Dd={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},Md=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Dd[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wa{constructor(e){this.name=e,this._logLevel=Nd,this._logHandler=Md,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const Ld=(t,e)=>e.some(n=>t instanceof n);let Gi,qi;function xd(){return Gi||(Gi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ud(){return qi||(qi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const za=new WeakMap,cs=new WeakMap,Ka=new WeakMap,Br=new WeakMap,Ls=new WeakMap;function Fd(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ft(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&za.set(n,t)}).catch(()=>{}),Ls.set(e,t),e}function $d(t){if(cs.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});cs.set(t,e)}let ls={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return cs.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ka.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ft(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Bd(t){ls=t(ls)}function Hd(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Hr(this),e,...n);return Ka.set(r,e.sort?e.sort():[e]),ft(r)}:Ud().includes(t)?function(...e){return t.apply(Hr(this),e),ft(za.get(this))}:function(...e){return ft(t.apply(Hr(this),e))}}function jd(t){return typeof t=="function"?Hd(t):(t instanceof IDBTransaction&&$d(t),Ld(t,xd())?new Proxy(t,ls):t)}function ft(t){if(t instanceof IDBRequest)return Fd(t);if(Br.has(t))return Br.get(t);const e=jd(t);return e!==t&&(Br.set(t,e),Ls.set(e,t)),e}const Hr=t=>Ls.get(t);function Vd(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=ft(o);return r&&o.addEventListener("upgradeneeded",a=>{r(ft(o.result),a.oldVersion,a.newVersion,ft(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const Wd=["get","getKey","getAll","getAllKeys","count"],zd=["put","add","delete","clear"],jr=new Map;function Ji(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(jr.get(e))return jr.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=zd.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Wd.includes(n)))return;const i=async function(o,...c){const a=this.transaction(o,s?"readwrite":"readonly");let l=a.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),s&&a.done]))[0]};return jr.set(e,i),i}Bd(t=>({...t,get:(e,n,r)=>Ji(e,n)||t.get(e,n,r),has:(e,n)=>!!Ji(e,n)||t.has(e,n)}));/**
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
 */class Kd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Gd(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Gd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const us="@firebase/app",Yi="0.10.5";/**
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
 */const Ot=new Wa("@firebase/app"),qd="@firebase/app-compat",Jd="@firebase/analytics-compat",Yd="@firebase/analytics",Xd="@firebase/app-check-compat",Qd="@firebase/app-check",Zd="@firebase/auth",eh="@firebase/auth-compat",th="@firebase/database",nh="@firebase/database-compat",rh="@firebase/functions",sh="@firebase/functions-compat",ih="@firebase/installations",oh="@firebase/installations-compat",ah="@firebase/messaging",ch="@firebase/messaging-compat",lh="@firebase/performance",uh="@firebase/performance-compat",fh="@firebase/remote-config",dh="@firebase/remote-config-compat",hh="@firebase/storage",ph="@firebase/storage-compat",gh="@firebase/firestore",mh="@firebase/vertexai-preview",_h="@firebase/firestore-compat",vh="firebase",yh="10.12.2";/**
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
 */const fs="[DEFAULT]",bh={[us]:"fire-core",[qd]:"fire-core-compat",[Yd]:"fire-analytics",[Jd]:"fire-analytics-compat",[Qd]:"fire-app-check",[Xd]:"fire-app-check-compat",[Zd]:"fire-auth",[eh]:"fire-auth-compat",[th]:"fire-rtdb",[nh]:"fire-rtdb-compat",[rh]:"fire-fn",[sh]:"fire-fn-compat",[ih]:"fire-iid",[oh]:"fire-iid-compat",[ah]:"fire-fcm",[ch]:"fire-fcm-compat",[lh]:"fire-perf",[uh]:"fire-perf-compat",[fh]:"fire-rc",[dh]:"fire-rc-compat",[hh]:"fire-gcs",[ph]:"fire-gcs-compat",[gh]:"fire-fst",[_h]:"fire-fst-compat",[mh]:"fire-vertex","fire-js":"fire-js",[vh]:"fire-js-all"};/**
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
 */const sr=new Map,wh=new Map,ds=new Map;function Xi(t,e){try{t.container.addComponent(e)}catch(n){Ot.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function wn(t){const e=t.name;if(ds.has(e))return Ot.debug(`There were multiple attempts to register component ${e}.`),!1;ds.set(e,t);for(const n of sr.values())Xi(n,t);for(const n of wh.values())Xi(n,t);return!0}function Ga(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function je(t){return t.settings!==void 0}/**
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
 */const Eh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},dt=new An("app","Firebase",Eh);/**
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
 */class Ih{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Yt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dt.create("app-deleted",{appName:this._name})}}/**
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
 */const Cn=yh;function qa(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:fs,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw dt.create("bad-app-name",{appName:String(s)});if(n||(n=ja()),!n)throw dt.create("no-options");const i=sr.get(s);if(i){if(rr(n,i.options)&&rr(r,i.config))return i;throw dt.create("duplicate-app",{appName:s})}const o=new Od(s);for(const a of ds.values())o.addComponent(a);const c=new Ih(n,r,o);return sr.set(s,c),c}function Sh(t=fs){const e=sr.get(t);if(!e&&t===fs&&ja())return qa();if(!e)throw dt.create("no-app",{appName:t});return e}function Vt(t,e,n){var r;let s=(r=bh[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ot.warn(c.join(" "));return}wn(new Yt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Th="firebase-heartbeat-database",Ah=1,En="firebase-heartbeat-store";let Vr=null;function Ja(){return Vr||(Vr=Vd(Th,Ah,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(En)}catch(n){console.warn(n)}}}}).catch(t=>{throw dt.create("idb-open",{originalErrorMessage:t.message})})),Vr}async function Rh(t){try{const n=(await Ja()).transaction(En),r=await n.objectStore(En).get(Ya(t));return await n.done,r}catch(e){if(e instanceof mt)Ot.warn(e.message);else{const n=dt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ot.warn(n.message)}}}async function Qi(t,e){try{const r=(await Ja()).transaction(En,"readwrite");await r.objectStore(En).put(e,Ya(t)),await r.done}catch(n){if(n instanceof mt)Ot.warn(n.message);else{const r=dt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ot.warn(r.message)}}}function Ya(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ch=1024,Ph=30*24*60*60*1e3;class Oh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Nh(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Zi();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=Ph}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Zi(),{heartbeatsToSend:r,unsentEntries:s}=kh(this._heartbeatsCache.heartbeats),i=nr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Zi(){return new Date().toISOString().substring(0,10)}function kh(t,e=Ch){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),eo(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),eo(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Nh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vd()?yd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Rh(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Qi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Qi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function eo(t){return nr(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Dh(t){wn(new Yt("platform-logger",e=>new Kd(e),"PRIVATE")),wn(new Yt("heartbeat",e=>new Oh(e),"PRIVATE")),Vt(us,Yi,t),Vt(us,Yi,"esm2017"),Vt("fire-js","")}Dh("");var Mh="firebase",Lh="10.12.2";/**
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
 */Vt(Mh,Lh,"app");const xh="modulepreload",Uh=function(t){return"/"+t},to={},no=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),o=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));s=Promise.all(n.map(c=>{if(c=Uh(c),c in to)return;to[c]=!0;const a=c.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${l}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":xh,a||(u.as="script",u.crossOrigin=""),u.href=c,o&&u.setAttribute("nonce",o),document.head.appendChild(u),a)return new Promise((h,p)=>{u.addEventListener("load",h),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}return s.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};function xs(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Xa(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Fh=Xa,Qa=new An("auth","Firebase",Xa());/**
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
 */const ir=new Wa("@firebase/auth");function $h(t,...e){ir.logLevel<=Z.WARN&&ir.warn(`Auth (${Cn}): ${t}`,...e)}function Gn(t,...e){ir.logLevel<=Z.ERROR&&ir.error(`Auth (${Cn}): ${t}`,...e)}/**
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
 */function Be(t,...e){throw Fs(t,...e)}function Oe(t,...e){return Fs(t,...e)}function Us(t,e,n){const r=Object.assign(Object.assign({},Fh()),{[e]:n});return new An("auth","Firebase",r).create(e,{appName:t.name})}function Ct(t){return Us(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Bh(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Be(t,"argument-error"),Us(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Fs(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Qa.create(t,...e)}function L(t,e,...n){if(!t)throw Fs(e,...n)}function Ve(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Gn(e),new Error(e)}function Ge(t,e){t||Ve(e)}/**
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
 */function hs(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Hh(){return ro()==="http:"||ro()==="https:"}function ro(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function jh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Hh()||gd()||"connection"in navigator)?navigator.onLine:!0}function Vh(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Pn{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ge(n>e,"Short delay should be less than long delay!"),this.isMobile=hd()||md()}get(){return jh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function $s(t,e){Ge(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Za{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ve("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ve("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ve("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Wh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const zh=new Pn(3e4,6e4);function Bs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function en(t,e,n,r,s={}){return ec(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Rn(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),Za.fetch()(tc(t,t.config.apiHost,n,c),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))})}async function ec(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Wh),e);try{const s=new Gh(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Fn(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[a,l]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fn(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Fn(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Fn(t,"user-disabled",o);const u=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Us(t,u,l);Be(t,u)}}catch(s){if(s instanceof mt)throw s;Be(t,"network-request-failed",{message:String(s)})}}async function Kh(t,e,n,r,s={}){const i=await en(t,e,n,r,s);return"mfaPendingCredential"in i&&Be(t,"multi-factor-auth-required",{_serverResponse:i}),i}function tc(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?$s(t.config,s):`${t.config.apiScheme}://${s}`}class Gh{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Oe(this.auth,"network-request-failed")),zh.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Fn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Oe(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function qh(t,e){return en(t,"POST","/v1/accounts:delete",e)}async function nc(t,e){return en(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function pn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Jh(t,e=!1){const n=_t(t),r=await n.getIdToken(e),s=Hs(r);L(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:pn(Wr(s.auth_time)),issuedAtTime:pn(Wr(s.iat)),expirationTime:pn(Wr(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Wr(t){return Number(t)*1e3}function Hs(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Gn("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ba(n);return s?JSON.parse(s):(Gn("Failed to decode base64 JWT payload"),null)}catch(s){return Gn("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function so(t){const e=Hs(t);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function In(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof mt&&Yh(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Yh({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Xh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ps{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=pn(this.lastLoginAt),this.creationTime=pn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function or(t){var e;const n=t.auth,r=await t.getIdToken(),s=await In(t,nc(n,{idToken:r}));L(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?rc(i.providerUserInfo):[],c=Zh(t.providerData,o),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),u=a?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new ps(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Qh(t){const e=_t(t);await or(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Zh(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function rc(t){return t.map(e=>{var{providerId:n}=e,r=xs(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function ep(t,e){const n=await ec(t,{},async()=>{const r=Rn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=tc(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Za.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function tp(t,e){return en(t,"POST","/v2/accounts:revokeToken",Bs(t,e))}/**
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
 */class Wt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):so(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){L(e.length!==0,"internal-error");const n=so(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(L(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await ep(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Wt;return r&&(L(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(L(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(L(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Wt,this.toJSON())}_performRefresh(){return Ve("not implemented")}}/**
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
 */function et(t,e){L(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class We{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=xs(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Xh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ps(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await In(this,this.stsTokenManager.getToken(this.auth,e));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Jh(this,e)}reload(){return Qh(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new We(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await or(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(je(this.auth.app))return Promise.reject(Ct(this.auth));const e=await this.getIdToken();return await In(this,qh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,a,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,y=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(c=n.tenantId)!==null&&c!==void 0?c:void 0,H=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,D=(l=n.createdAt)!==null&&l!==void 0?l:void 0,M=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:U,emailVerified:z,isAnonymous:se,providerData:F,stsTokenManager:ae}=n;L(U&&ae,e,"internal-error");const pe=Wt.fromJSON(this.name,ae);L(typeof U=="string",e,"internal-error"),et(h,e.name),et(p,e.name),L(typeof z=="boolean",e,"internal-error"),L(typeof se=="boolean",e,"internal-error"),et(y,e.name),et(C,e.name),et(k,e.name),et(H,e.name),et(D,e.name),et(M,e.name);const ke=new We({uid:U,auth:e,email:p,emailVerified:z,displayName:h,isAnonymous:se,photoURL:C,phoneNumber:y,tenantId:k,stsTokenManager:pe,createdAt:D,lastLoginAt:M});return F&&Array.isArray(F)&&(ke.providerData=F.map(Ee=>Object.assign({},Ee))),H&&(ke._redirectEventId=H),ke}static async _fromIdTokenResponse(e,n,r=!1){const s=new Wt;s.updateFromServerResponse(n);const i=new We({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await or(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];L(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?rc(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Wt;c.updateFromIdToken(r);const a=new We({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ps(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(a,l),a}}/**
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
 */const io=new Map;function ze(t){Ge(t instanceof Function,"Expected a class definition");let e=io.get(t);return e?(Ge(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,io.set(t,e),e)}/**
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
 */class sc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}sc.type="NONE";const oo=sc;/**
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
 */function qn(t,e,n){return`firebase:${t}:${e}:${n}`}class zt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=qn(this.userKey,s.apiKey,i),this.fullPersistenceKey=qn("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?We._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new zt(ze(oo),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||ze(oo);const o=qn(r,e.config.apiKey,e.name);let c=null;for(const l of n)try{const u=await l._get(o);if(u){const h=We._fromJSON(e,u);l!==i&&(c=h),i=l;break}}catch{}const a=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new zt(i,e,r):(i=a[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new zt(i,e,r))}}/**
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
 */function ao(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ac(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ic(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lc(e))return"Blackberry";if(uc(e))return"Webos";if(js(e))return"Safari";if((e.includes("chrome/")||oc(e))&&!e.includes("edge/"))return"Chrome";if(cc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ic(t=de()){return/firefox\//i.test(t)}function js(t=de()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function oc(t=de()){return/crios\//i.test(t)}function ac(t=de()){return/iemobile/i.test(t)}function cc(t=de()){return/android/i.test(t)}function lc(t=de()){return/blackberry/i.test(t)}function uc(t=de()){return/webos/i.test(t)}function Sr(t=de()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function np(t=de()){var e;return Sr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function rp(){return _d()&&document.documentMode===10}function fc(t=de()){return Sr(t)||cc(t)||uc(t)||lc(t)||/windows phone/i.test(t)||ac(t)}function sp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function dc(t,e=[]){let n;switch(t){case"Browser":n=ao(de());break;case"Worker":n=`${ao(de())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Cn}/${r}`}/**
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
 */class ip{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const a=e(i);o(a)}catch(a){c(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function op(t,e={}){return en(t,"GET","/v2/passwordPolicy",Bs(t,e))}/**
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
 */const ap=6;class cp{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:ap,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(s=a.containsLowercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(c=a.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class lp{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new co(this),this.idTokenSubscription=new co(this),this.beforeStateQueue=new ip(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qa,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ze(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await zt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await nc(this,{idToken:e}),r=await We._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(je(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&(a!=null&&a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await or(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Vh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(je(this.app))return Promise.reject(Ct(this));const n=e?_t(e):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return je(this.app)?Promise.reject(Ct(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return je(this.app)?Promise.reject(Ct(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ze(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await op(this),n=new cp(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new An("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await tp(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ze(e)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await zt.create(this,[ze(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,s);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=dc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&$h(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Tr(t){return _t(t)}class co{constructor(e){this.auth=e,this.observer=null,this.addObserver=Sd(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Vs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function up(t){Vs=t}function fp(t){return Vs.loadJS(t)}function dp(){return Vs.gapiScript}function hp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function pp(t,e){const n=Ga(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(rr(i,e??{}))return s;Be(s,"already-initialized")}return n.initialize({options:e})}function gp(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ze);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function mp(t,e,n){const r=Tr(t);L(r._canInitEmulator,r,"emulator-config-failed"),L(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=hc(e),{host:o,port:c}=_p(e),a=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),vp()}function hc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function _p(t){const e=hc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:lo(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:lo(o)}}}function lo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function vp(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class pc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ve("not implemented")}_getIdTokenResponse(e){return Ve("not implemented")}_linkToIdToken(e,n){return Ve("not implemented")}_getReauthenticationResolver(e){return Ve("not implemented")}}/**
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
 */async function Kt(t,e){return Kh(t,"POST","/v1/accounts:signInWithIdp",Bs(t,e))}/**
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
 */const yp="http://localhost";class kt extends pc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new kt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Be("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=xs(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new kt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Kt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Kt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Kt(e,n)}buildRequest(){const e={requestUri:yp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Rn(n)}return e}}/**
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
 */class Ws{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class On extends Ws{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class it extends On{constructor(){super("facebook.com")}static credential(e){return kt._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return it.credential(e.oauthAccessToken)}catch{return null}}}it.FACEBOOK_SIGN_IN_METHOD="facebook.com";it.PROVIDER_ID="facebook.com";/**
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
 */class ot extends On{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return kt._fromParams({providerId:ot.PROVIDER_ID,signInMethod:ot.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ot.credentialFromTaggedObject(e)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ot.credential(n,r)}catch{return null}}}ot.GOOGLE_SIGN_IN_METHOD="google.com";ot.PROVIDER_ID="google.com";/**
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
 */class at extends On{constructor(){super("github.com")}static credential(e){return kt._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return at.credential(e.oauthAccessToken)}catch{return null}}}at.GITHUB_SIGN_IN_METHOD="github.com";at.PROVIDER_ID="github.com";/**
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
 */class ct extends On{constructor(){super("twitter.com")}static credential(e,n){return kt._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ct.credential(n,r)}catch{return null}}}ct.TWITTER_SIGN_IN_METHOD="twitter.com";ct.PROVIDER_ID="twitter.com";/**
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
 */class Xt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await We._fromIdTokenResponse(e,r,s),o=uo(r);return new Xt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=uo(r);return new Xt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function uo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ar extends mt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ar.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ar(e,n,r,s)}}function gc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ar._fromErrorAndOperation(t,i,e,r):i})}async function bp(t,e,n=!1){const r=await In(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Xt._forOperation(t,"link",r)}/**
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
 */async function wp(t,e,n=!1){const{auth:r}=t;if(je(r.app))return Promise.reject(Ct(r));const s="reauthenticate";try{const i=await In(t,gc(r,s,e,t),n);L(i.idToken,r,"internal-error");const o=Hs(i.idToken);L(o,r,"internal-error");const{sub:c}=o;return L(t.uid===c,r,"user-mismatch"),Xt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Be(r,"user-mismatch"),i}}/**
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
 */async function Ep(t,e,n=!1){if(je(t.app))return Promise.reject(Ct(t));const r="signIn",s=await gc(t,r,e),i=await Xt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function Ip(t,e,n,r){return _t(t).onIdTokenChanged(e,n,r)}function Sp(t,e,n){return _t(t).beforeAuthStateChanged(e,n)}function Tp(t,e,n,r){return _t(t).onAuthStateChanged(e,n,r)}function Zg(t){return _t(t).signOut()}const cr="__sak";/**
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
 */class mc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(cr,"1"),this.storage.removeItem(cr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Ap(){const t=de();return js(t)||Sr(t)}const Rp=1e3,Cp=10;class _c extends mc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ap()&&sp(),this.fallbackToPolling=fc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);rp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Cp):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Rp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}_c.type="LOCAL";const Pp=_c;/**
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
 */class vc extends mc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}vc.type="SESSION";const yc=vc;/**
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
 */function Op(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ar{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ar(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async l=>l(n.origin,i)),a=await Op(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ar.receivers=[];/**
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
 */function zs(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class kp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,a)=>{const l=zs("",20);s.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const p=h;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(p.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Fe(){return window}function Np(t){Fe().location.href=t}/**
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
 */function bc(){return typeof Fe().WorkerGlobalScope<"u"&&typeof Fe().importScripts=="function"}async function Dp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Mp(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Lp(){return bc()?self:null}/**
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
 */const wc="firebaseLocalStorageDb",xp=1,lr="firebaseLocalStorage",Ec="fbase_key";class kn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Rr(t,e){return t.transaction([lr],e?"readwrite":"readonly").objectStore(lr)}function Up(){const t=indexedDB.deleteDatabase(wc);return new kn(t).toPromise()}function gs(){const t=indexedDB.open(wc,xp);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(lr,{keyPath:Ec})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(lr)?e(r):(r.close(),await Up(),e(await gs()))})})}async function fo(t,e,n){const r=Rr(t,!0).put({[Ec]:e,value:n});return new kn(r).toPromise()}async function Fp(t,e){const n=Rr(t,!1).get(e),r=await new kn(n).toPromise();return r===void 0?null:r.value}function ho(t,e){const n=Rr(t,!0).delete(e);return new kn(n).toPromise()}const $p=800,Bp=3;class Ic{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gs(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Bp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ar._getInstance(Lp()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Dp(),!this.activeServiceWorker)return;this.sender=new kp(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Mp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gs();return await fo(e,cr,"1"),await ho(e,cr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>fo(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Fp(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ho(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Rr(s,!1).getAll();return new kn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$p)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ic.type="LOCAL";const Hp=Ic;new Pn(3e4,6e4);/**
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
 */function Sc(t,e){return e?ze(e):(L(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ks extends pc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Kt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Kt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Kt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function jp(t){return Ep(t.auth,new Ks(t),t.bypassAuthState)}function Vp(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),wp(n,new Ks(t),t.bypassAuthState)}async function Wp(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),bp(n,new Ks(t),t.bypassAuthState)}/**
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
 */class Tc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jp;case"linkViaPopup":case"linkViaRedirect":return Wp;case"reauthViaPopup":case"reauthViaRedirect":return Vp;default:Be(this.auth,"internal-error")}}resolve(e){Ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const zp=new Pn(2e3,1e4);async function em(t,e,n){if(je(t.app))return Promise.reject(Oe(t,"operation-not-supported-in-this-environment"));const r=Tr(t);Bh(t,e,Ws);const s=Sc(r,n);return new Tt(r,"signInViaPopup",e,s).executeNotNull()}class Tt extends Tc{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Tt.currentPopupAction&&Tt.currentPopupAction.cancel(),Tt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){Ge(this.filter.length===1,"Popup operations only handle one event");const e=zs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Oe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Oe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Tt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Oe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,zp.get())};e()}}Tt.currentPopupAction=null;/**
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
 */const Kp="pendingRedirect",Jn=new Map;class Gp extends Tc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Jn.get(this.auth._key());if(!e){try{const r=await qp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Jn.set(this.auth._key(),e)}return this.bypassAuthState||Jn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qp(t,e){const n=Xp(e),r=Yp(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Jp(t,e){Jn.set(t._key(),e)}function Yp(t){return ze(t._redirectPersistence)}function Xp(t){return qn(Kp,t.config.apiKey,t.name)}async function Qp(t,e,n=!1){if(je(t.app))return Promise.reject(Ct(t));const r=Tr(t),s=Sc(r,e),o=await new Gp(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Zp=10*60*1e3;class eg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ac(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Oe(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Zp&&this.cachedEventUids.clear(),this.cachedEventUids.has(po(e))}saveEventToCache(e){this.cachedEventUids.add(po(e)),this.lastProcessedEventTime=Date.now()}}function po(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ac({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function tg(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ac(t);default:return!1}}/**
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
 */async function ng(t,e={}){return en(t,"GET","/v1/projects",e)}/**
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
 */const rg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sg=/^https?/;async function ig(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ng(t);for(const n of e)try{if(og(n))return}catch{}Be(t,"unauthorized-domain")}function og(t){const e=hs(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!sg.test(n))return!1;if(rg.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const ag=new Pn(3e4,6e4);function go(){const t=Fe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function cg(t){return new Promise((e,n)=>{var r,s,i;function o(){go(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{go(),n(Oe(t,"network-request-failed"))},timeout:ag.get()})}if(!((s=(r=Fe().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Fe().gapi)===null||i===void 0)&&i.load)o();else{const c=hp("iframefcb");return Fe()[c]=()=>{gapi.load?o():n(Oe(t,"network-request-failed"))},fp(`${dp()}?onload=${c}`).catch(a=>n(a))}}).catch(e=>{throw Yn=null,e})}let Yn=null;function lg(t){return Yn=Yn||cg(t),Yn}/**
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
 */const ug=new Pn(5e3,15e3),fg="__/auth/iframe",dg="emulator/auth/iframe",hg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gg(t){const e=t.config;L(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?$s(e,dg):`https://${t.config.authDomain}/${fg}`,r={apiKey:e.apiKey,appName:t.name,v:Cn},s=pg.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Rn(r).slice(1)}`}async function mg(t){const e=await lg(t),n=Fe().gapi;return L(n,t,"internal-error"),e.open({where:document.body,url:gg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Oe(t,"network-request-failed"),c=Fe().setTimeout(()=>{i(o)},ug.get());function a(){Fe().clearTimeout(c),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
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
 */const _g={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vg=500,yg=600,bg="_blank",wg="http://localhost";class mo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Eg(t,e,n,r=vg,s=yg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const a=Object.assign(Object.assign({},_g),{width:r.toString(),height:s.toString(),top:i,left:o}),l=de().toLowerCase();n&&(c=oc(l)?bg:n),ic(l)&&(e=e||wg,a.scrollbars="yes");const u=Object.entries(a).reduce((p,[y,C])=>`${p}${y}=${C},`,"");if(np(l)&&c!=="_self")return Ig(e||"",c),new mo(null);const h=window.open(e||"",c,u);L(h,t,"popup-blocked");try{h.focus()}catch{}return new mo(h)}function Ig(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Sg="__/auth/handler",Tg="emulator/auth/handler",Ag=encodeURIComponent("fac");async function _o(t,e,n,r,s,i){L(t.config.authDomain,t,"auth-domain-config-required"),L(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Cn,eventId:s};if(e instanceof Ws){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Id(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof On){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const u of Object.keys(c))c[u]===void 0&&delete c[u];const a=await t._getAppCheckToken(),l=a?`#${Ag}=${encodeURIComponent(a)}`:"";return`${Rg(t)}?${Rn(c).slice(1)}${l}`}function Rg({config:t}){return t.emulator?$s(t,Tg):`https://${t.authDomain}/${Sg}`}/**
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
 */const zr="webStorageSupport";class Cg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yc,this._completeRedirectFn=Qp,this._overrideRedirectResult=Jp}async _openPopup(e,n,r,s){var i;Ge((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await _o(e,n,r,hs(),s);return Eg(e,o,zs())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await _o(e,n,r,hs(),s);return Np(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Ge(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await mg(e),r=new eg(e);return n.register("authEvent",s=>(L(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(zr,{type:zr},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[zr];o!==void 0&&n(!!o),Be(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ig(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return fc()||js()||Sr()}}const Pg=Cg;var vo="@firebase/auth",yo="1.7.4";/**
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
 */class Og{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function kg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ng(t){wn(new Yt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;L(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dc(t)},l=new lp(r,s,i,a);return gp(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),wn(new Yt("auth-internal",e=>{const n=Tr(e.getProvider("auth").getImmediate());return(r=>new Og(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vt(vo,yo,kg(t)),Vt(vo,yo,"esm2017")}/**
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
 */const Dg=5*60,Mg=Va("authIdTokenMaxAge")||Dg;let bo=null;const Lg=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Mg)return;const s=n==null?void 0:n.token;bo!==s&&(bo=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function xg(t=Sh()){const e=Ga(t,"auth");if(e.isInitialized())return e.getImmediate();const n=pp(t,{popupRedirectResolver:Pg,persistence:[Hp,Pp,yc]}),r=Va("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Lg(i.toString());Sp(n,o,()=>o(n.currentUser)),Ip(n,c=>o(c))}}const s=Ha("auth");return s&&mp(n,`http://${s}`),n}function Ug(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}up({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Oe("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Ug().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ng("Browser");const Rc=nd({history:yf("/"),routes:[{path:"/home",name:"home",component:()=>no(()=>import("./home-CJscjCxj.js"),__vite__mapDeps([0,1])),props:!0,meta:{requiresAuth:!0}},{path:"/",name:"login",component:()=>no(()=>import("./login-BcUD3G-N.js"),__vite__mapDeps([2,1]))}]}),Fg=()=>new Promise((t,e)=>{const n=Tp(xg(),r=>{n(),t(r)},e)});Rc.beforeEach(async(t,e,n)=>{t.matched.some(r=>r.meta.requiresAuth)?await Fg()?n():(console.log("You dont have access!"),n("/")):n()});const $g={apiKey:"AIzaSyDFqqFcvC3WWQMGp_q00Y6BQ5y7uQpRrUg",authDomain:"recipe-2bcd4.firebaseapp.com",projectId:"recipe-2bcd4",storageBucket:"recipe-2bcd4.appspot.com",messagingSenderId:"214051528054",appId:"1:214051528054:web:9eb82bd7f5212581d36e57",measurementId:"G-4E17212C1W"};qa($g);const Cc=Xu(sd);Cc.use(Rc);Cc.mount("#app");export{xe as A,sa as B,Yt as C,em as D,ta as E,mt as F,ot as G,Sa as H,Z as I,Qg as J,de as K,Wa as L,Cn as S,wn as _,wa as a,ve as b,Wg as c,zg as d,Hg as e,Vt as f,xg as g,_t as h,Ga as i,Yg as j,Sh as k,Xg as l,hu as m,qg as n,_a as o,jg as p,ws as q,fl as r,Zg as s,Bg as t,Jg as u,Gg as v,Hn as w,He as x,Vg as y,Kg as z};
