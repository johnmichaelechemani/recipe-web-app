import{L as Uu,_ as qu,C as Bu,e as Bs,F as ju,E as $t,g as Nt,i as zu,f as Gu,h as $u,S as Ku,j as Qu,G as Wu,H as Hu,l as So,k as Ft,I as Xu,J as Yu,K as Ju,M as Zu,D as zr,z as tl}from"./index-DOVgOklS.js";var js=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var se,Co;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,p){function _(){}_.prototype=p.prototype,E.D=p.prototype,E.prototype=new _,E.prototype.constructor=E,E.C=function(y,T,v){for(var g=Array(arguments.length-2),st=2;st<arguments.length;st++)g[st-2]=arguments[st];return p.prototype[T].apply(y,g)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,p,_){_||(_=0);var y=Array(16);if(typeof p=="string")for(var T=0;16>T;++T)y[T]=p.charCodeAt(_++)|p.charCodeAt(_++)<<8|p.charCodeAt(_++)<<16|p.charCodeAt(_++)<<24;else for(T=0;16>T;++T)y[T]=p[_++]|p[_++]<<8|p[_++]<<16|p[_++]<<24;p=E.g[0],_=E.g[1],T=E.g[2];var v=E.g[3],g=p+(v^_&(T^v))+y[0]+3614090360&4294967295;p=_+(g<<7&4294967295|g>>>25),g=v+(T^p&(_^T))+y[1]+3905402710&4294967295,v=p+(g<<12&4294967295|g>>>20),g=T+(_^v&(p^_))+y[2]+606105819&4294967295,T=v+(g<<17&4294967295|g>>>15),g=_+(p^T&(v^p))+y[3]+3250441966&4294967295,_=T+(g<<22&4294967295|g>>>10),g=p+(v^_&(T^v))+y[4]+4118548399&4294967295,p=_+(g<<7&4294967295|g>>>25),g=v+(T^p&(_^T))+y[5]+1200080426&4294967295,v=p+(g<<12&4294967295|g>>>20),g=T+(_^v&(p^_))+y[6]+2821735955&4294967295,T=v+(g<<17&4294967295|g>>>15),g=_+(p^T&(v^p))+y[7]+4249261313&4294967295,_=T+(g<<22&4294967295|g>>>10),g=p+(v^_&(T^v))+y[8]+1770035416&4294967295,p=_+(g<<7&4294967295|g>>>25),g=v+(T^p&(_^T))+y[9]+2336552879&4294967295,v=p+(g<<12&4294967295|g>>>20),g=T+(_^v&(p^_))+y[10]+4294925233&4294967295,T=v+(g<<17&4294967295|g>>>15),g=_+(p^T&(v^p))+y[11]+2304563134&4294967295,_=T+(g<<22&4294967295|g>>>10),g=p+(v^_&(T^v))+y[12]+1804603682&4294967295,p=_+(g<<7&4294967295|g>>>25),g=v+(T^p&(_^T))+y[13]+4254626195&4294967295,v=p+(g<<12&4294967295|g>>>20),g=T+(_^v&(p^_))+y[14]+2792965006&4294967295,T=v+(g<<17&4294967295|g>>>15),g=_+(p^T&(v^p))+y[15]+1236535329&4294967295,_=T+(g<<22&4294967295|g>>>10),g=p+(T^v&(_^T))+y[1]+4129170786&4294967295,p=_+(g<<5&4294967295|g>>>27),g=v+(_^T&(p^_))+y[6]+3225465664&4294967295,v=p+(g<<9&4294967295|g>>>23),g=T+(p^_&(v^p))+y[11]+643717713&4294967295,T=v+(g<<14&4294967295|g>>>18),g=_+(v^p&(T^v))+y[0]+3921069994&4294967295,_=T+(g<<20&4294967295|g>>>12),g=p+(T^v&(_^T))+y[5]+3593408605&4294967295,p=_+(g<<5&4294967295|g>>>27),g=v+(_^T&(p^_))+y[10]+38016083&4294967295,v=p+(g<<9&4294967295|g>>>23),g=T+(p^_&(v^p))+y[15]+3634488961&4294967295,T=v+(g<<14&4294967295|g>>>18),g=_+(v^p&(T^v))+y[4]+3889429448&4294967295,_=T+(g<<20&4294967295|g>>>12),g=p+(T^v&(_^T))+y[9]+568446438&4294967295,p=_+(g<<5&4294967295|g>>>27),g=v+(_^T&(p^_))+y[14]+3275163606&4294967295,v=p+(g<<9&4294967295|g>>>23),g=T+(p^_&(v^p))+y[3]+4107603335&4294967295,T=v+(g<<14&4294967295|g>>>18),g=_+(v^p&(T^v))+y[8]+1163531501&4294967295,_=T+(g<<20&4294967295|g>>>12),g=p+(T^v&(_^T))+y[13]+2850285829&4294967295,p=_+(g<<5&4294967295|g>>>27),g=v+(_^T&(p^_))+y[2]+4243563512&4294967295,v=p+(g<<9&4294967295|g>>>23),g=T+(p^_&(v^p))+y[7]+1735328473&4294967295,T=v+(g<<14&4294967295|g>>>18),g=_+(v^p&(T^v))+y[12]+2368359562&4294967295,_=T+(g<<20&4294967295|g>>>12),g=p+(_^T^v)+y[5]+4294588738&4294967295,p=_+(g<<4&4294967295|g>>>28),g=v+(p^_^T)+y[8]+2272392833&4294967295,v=p+(g<<11&4294967295|g>>>21),g=T+(v^p^_)+y[11]+1839030562&4294967295,T=v+(g<<16&4294967295|g>>>16),g=_+(T^v^p)+y[14]+4259657740&4294967295,_=T+(g<<23&4294967295|g>>>9),g=p+(_^T^v)+y[1]+2763975236&4294967295,p=_+(g<<4&4294967295|g>>>28),g=v+(p^_^T)+y[4]+1272893353&4294967295,v=p+(g<<11&4294967295|g>>>21),g=T+(v^p^_)+y[7]+4139469664&4294967295,T=v+(g<<16&4294967295|g>>>16),g=_+(T^v^p)+y[10]+3200236656&4294967295,_=T+(g<<23&4294967295|g>>>9),g=p+(_^T^v)+y[13]+681279174&4294967295,p=_+(g<<4&4294967295|g>>>28),g=v+(p^_^T)+y[0]+3936430074&4294967295,v=p+(g<<11&4294967295|g>>>21),g=T+(v^p^_)+y[3]+3572445317&4294967295,T=v+(g<<16&4294967295|g>>>16),g=_+(T^v^p)+y[6]+76029189&4294967295,_=T+(g<<23&4294967295|g>>>9),g=p+(_^T^v)+y[9]+3654602809&4294967295,p=_+(g<<4&4294967295|g>>>28),g=v+(p^_^T)+y[12]+3873151461&4294967295,v=p+(g<<11&4294967295|g>>>21),g=T+(v^p^_)+y[15]+530742520&4294967295,T=v+(g<<16&4294967295|g>>>16),g=_+(T^v^p)+y[2]+3299628645&4294967295,_=T+(g<<23&4294967295|g>>>9),g=p+(T^(_|~v))+y[0]+4096336452&4294967295,p=_+(g<<6&4294967295|g>>>26),g=v+(_^(p|~T))+y[7]+1126891415&4294967295,v=p+(g<<10&4294967295|g>>>22),g=T+(p^(v|~_))+y[14]+2878612391&4294967295,T=v+(g<<15&4294967295|g>>>17),g=_+(v^(T|~p))+y[5]+4237533241&4294967295,_=T+(g<<21&4294967295|g>>>11),g=p+(T^(_|~v))+y[12]+1700485571&4294967295,p=_+(g<<6&4294967295|g>>>26),g=v+(_^(p|~T))+y[3]+2399980690&4294967295,v=p+(g<<10&4294967295|g>>>22),g=T+(p^(v|~_))+y[10]+4293915773&4294967295,T=v+(g<<15&4294967295|g>>>17),g=_+(v^(T|~p))+y[1]+2240044497&4294967295,_=T+(g<<21&4294967295|g>>>11),g=p+(T^(_|~v))+y[8]+1873313359&4294967295,p=_+(g<<6&4294967295|g>>>26),g=v+(_^(p|~T))+y[15]+4264355552&4294967295,v=p+(g<<10&4294967295|g>>>22),g=T+(p^(v|~_))+y[6]+2734768916&4294967295,T=v+(g<<15&4294967295|g>>>17),g=_+(v^(T|~p))+y[13]+1309151649&4294967295,_=T+(g<<21&4294967295|g>>>11),g=p+(T^(_|~v))+y[4]+4149444226&4294967295,p=_+(g<<6&4294967295|g>>>26),g=v+(_^(p|~T))+y[11]+3174756917&4294967295,v=p+(g<<10&4294967295|g>>>22),g=T+(p^(v|~_))+y[2]+718787259&4294967295,T=v+(g<<15&4294967295|g>>>17),g=_+(v^(T|~p))+y[9]+3951481745&4294967295,E.g[0]=E.g[0]+p&4294967295,E.g[1]=E.g[1]+(T+(g<<21&4294967295|g>>>11))&4294967295,E.g[2]=E.g[2]+T&4294967295,E.g[3]=E.g[3]+v&4294967295}n.prototype.u=function(E,p){p===void 0&&(p=E.length);for(var _=p-this.blockSize,y=this.B,T=this.h,v=0;v<p;){if(T==0)for(;v<=_;)s(this,E,v),v+=this.blockSize;if(typeof E=="string"){for(;v<p;)if(y[T++]=E.charCodeAt(v++),T==this.blockSize){s(this,y),T=0;break}}else for(;v<p;)if(y[T++]=E[v++],T==this.blockSize){s(this,y),T=0;break}}this.h=T,this.o+=p},n.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var p=1;p<E.length-8;++p)E[p]=0;var _=8*this.o;for(p=E.length-8;p<E.length;++p)E[p]=_&255,_/=256;for(this.u(E),E=Array(16),p=_=0;4>p;++p)for(var y=0;32>y;y+=8)E[_++]=this.g[p]>>>y&255;return E};function o(E,p){var _=c;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=p(E)}function u(E,p){this.h=p;for(var _=[],y=!0,T=E.length-1;0<=T;T--){var v=E[T]|0;y&&v==p||(_[T]=v,y=!1)}this.g=_}var c={};function h(E){return-128<=E&&128>E?o(E,function(p){return new u([p|0],0>p?-1:0)}):new u([E|0],0>E?-1:0)}function f(E){if(isNaN(E)||!isFinite(E))return A;if(0>E)return D(f(-E));for(var p=[],_=1,y=0;E>=_;y++)p[y]=E/_|0,_*=4294967296;return new u(p,0)}function m(E,p){if(E.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(E.charAt(0)=="-")return D(m(E.substring(1),p));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=f(Math.pow(p,8)),y=A,T=0;T<E.length;T+=8){var v=Math.min(8,E.length-T),g=parseInt(E.substring(T,T+v),p);8>v?(v=f(Math.pow(p,v)),y=y.j(v).add(f(g))):(y=y.j(_),y=y.add(f(g)))}return y}var A=h(0),R=h(1),V=h(16777216);r=u.prototype,r.m=function(){if(x(this))return-D(this).m();for(var E=0,p=1,_=0;_<this.g.length;_++){var y=this.i(_);E+=(0<=y?y:4294967296+y)*p,p*=4294967296}return E},r.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(k(this))return"0";if(x(this))return"-"+D(this).toString(E);for(var p=f(Math.pow(E,6)),_=this,y="";;){var T=J(_,p).g;_=q(_,T.j(p));var v=((0<_.g.length?_.g[0]:_.h)>>>0).toString(E);if(_=T,k(_))return v+y;for(;6>v.length;)v="0"+v;y=v+y}},r.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function k(E){if(E.h!=0)return!1;for(var p=0;p<E.g.length;p++)if(E.g[p]!=0)return!1;return!0}function x(E){return E.h==-1}r.l=function(E){return E=q(this,E),x(E)?-1:k(E)?0:1};function D(E){for(var p=E.g.length,_=[],y=0;y<p;y++)_[y]=~E.g[y];return new u(_,~E.h).add(R)}r.abs=function(){return x(this)?D(this):this},r.add=function(E){for(var p=Math.max(this.g.length,E.g.length),_=[],y=0,T=0;T<=p;T++){var v=y+(this.i(T)&65535)+(E.i(T)&65535),g=(v>>>16)+(this.i(T)>>>16)+(E.i(T)>>>16);y=g>>>16,v&=65535,g&=65535,_[T]=g<<16|v}return new u(_,_[_.length-1]&-2147483648?-1:0)};function q(E,p){return E.add(D(p))}r.j=function(E){if(k(this)||k(E))return A;if(x(this))return x(E)?D(this).j(D(E)):D(D(this).j(E));if(x(E))return D(this.j(D(E)));if(0>this.l(V)&&0>E.l(V))return f(this.m()*E.m());for(var p=this.g.length+E.g.length,_=[],y=0;y<2*p;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var T=0;T<E.g.length;T++){var v=this.i(y)>>>16,g=this.i(y)&65535,st=E.i(T)>>>16,Vt=E.i(T)&65535;_[2*y+2*T]+=g*Vt,G(_,2*y+2*T),_[2*y+2*T+1]+=v*Vt,G(_,2*y+2*T+1),_[2*y+2*T+1]+=g*st,G(_,2*y+2*T+1),_[2*y+2*T+2]+=v*st,G(_,2*y+2*T+2)}for(y=0;y<p;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=p;y<2*p;y++)_[y]=0;return new u(_,0)};function G(E,p){for(;(E[p]&65535)!=E[p];)E[p+1]+=E[p]>>>16,E[p]&=65535,p++}function $(E,p){this.g=E,this.h=p}function J(E,p){if(k(p))throw Error("division by zero");if(k(E))return new $(A,A);if(x(E))return p=J(D(E),p),new $(D(p.g),D(p.h));if(x(p))return p=J(E,D(p)),new $(D(p.g),p.h);if(30<E.g.length){if(x(E)||x(p))throw Error("slowDivide_ only works with positive integers.");for(var _=R,y=p;0>=y.l(E);)_=Pt(_),y=Pt(y);var T=nt(_,1),v=nt(y,1);for(y=nt(y,2),_=nt(_,2);!k(y);){var g=v.add(y);0>=g.l(E)&&(T=T.add(_),v=g),y=nt(y,1),_=nt(_,1)}return p=q(E,T.j(p)),new $(T,p)}for(T=A;0<=E.l(p);){for(_=Math.max(1,Math.floor(E.m()/p.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),v=f(_),g=v.j(p);x(g)||0<g.l(E);)_-=y,v=f(_),g=v.j(p);k(v)&&(v=R),T=T.add(v),E=q(E,g)}return new $(T,E)}r.A=function(E){return J(this,E).h},r.and=function(E){for(var p=Math.max(this.g.length,E.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)&E.i(y);return new u(_,this.h&E.h)},r.or=function(E){for(var p=Math.max(this.g.length,E.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)|E.i(y);return new u(_,this.h|E.h)},r.xor=function(E){for(var p=Math.max(this.g.length,E.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)^E.i(y);return new u(_,this.h^E.h)};function Pt(E){for(var p=E.g.length+1,_=[],y=0;y<p;y++)_[y]=E.i(y)<<1|E.i(y-1)>>>31;return new u(_,E.h)}function nt(E,p){var _=p>>5;p%=32;for(var y=E.g.length-_,T=[],v=0;v<y;v++)T[v]=0<p?E.i(v+_)>>>p|E.i(v+_+1)<<32-p:E.i(v+_);return new u(T,E.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Co=n,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=f,u.fromString=m,se=u}).apply(typeof js<"u"?js:typeof self<"u"?self:typeof window<"u"?window:{});var Un=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Do,ko,He,No,zn,Wr,bo,xo,Mo;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,a,l){return i==Array.prototype||i==Object.prototype||(i[a]=l.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Un=="object"&&Un];for(var a=0;a<i.length;++a){var l=i[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var n=e(this);function s(i,a){if(a)t:{var l=n;i=i.split(".");for(var d=0;d<i.length-1;d++){var I=i[d];if(!(I in l))break t;l=l[I]}i=i[i.length-1],d=l[i],a=a(d),a!=d&&a!=null&&t(l,i,{configurable:!0,writable:!0,value:a})}}function o(i,a){i instanceof String&&(i+="");var l=0,d=!1,I={next:function(){if(!d&&l<i.length){var w=l++;return{value:a(w,i[w]),done:!1}}return d=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}s("Array.prototype.values",function(i){return i||function(){return o(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},c=this||self;function h(i){var a=typeof i;return a=a!="object"?a:i?Array.isArray(i)?"array":a:"null",a=="array"||a=="object"&&typeof i.length=="number"}function f(i){var a=typeof i;return a=="object"&&i!=null||a=="function"}function m(i,a,l){return i.call.apply(i.bind,arguments)}function A(i,a,l){if(!i)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,d),i.apply(a,I)}}return function(){return i.apply(a,arguments)}}function R(i,a,l){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:A,R.apply(null,arguments)}function V(i,a){var l=Array.prototype.slice.call(arguments,1);return function(){var d=l.slice();return d.push.apply(d,arguments),i.apply(this,d)}}function k(i,a){function l(){}l.prototype=a.prototype,i.aa=a.prototype,i.prototype=new l,i.prototype.constructor=i,i.Qb=function(d,I,w){for(var C=Array(arguments.length-2),K=2;K<arguments.length;K++)C[K-2]=arguments[K];return a.prototype[I].apply(d,C)}}function x(i){const a=i.length;if(0<a){const l=Array(a);for(let d=0;d<a;d++)l[d]=i[d];return l}return[]}function D(i,a){for(let l=1;l<arguments.length;l++){const d=arguments[l];if(h(d)){const I=i.length||0,w=d.length||0;i.length=I+w;for(let C=0;C<w;C++)i[I+C]=d[C]}else i.push(d)}}class q{constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function G(i){return/^[\s\xa0]*$/.test(i)}function $(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function J(i){return J[" "](i),i}J[" "]=function(){};var Pt=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function nt(i,a,l){for(const d in i)a.call(l,i[d],d,i)}function E(i,a){for(const l in i)a.call(void 0,i[l],l,i)}function p(i){const a={};for(const l in i)a[l]=i[l];return a}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(i,a){let l,d;for(let I=1;I<arguments.length;I++){d=arguments[I];for(l in d)i[l]=d[l];for(let w=0;w<_.length;w++)l=_[w],Object.prototype.hasOwnProperty.call(d,l)&&(i[l]=d[l])}}function T(i){var a=1;i=i.split(":");const l=[];for(;0<a&&i.length;)l.push(i.shift()),a--;return i.length&&l.push(i.join(":")),l}function v(i){c.setTimeout(()=>{throw i},0)}function g(){var i=de;let a=null;return i.g&&(a=i.g,i.g=i.g.next,i.g||(i.h=null),a.next=null),a}class st{constructor(){this.h=this.g=null}add(a,l){const d=Vt.get();d.set(a,l),this.h?this.h.next=d:this.g=d,this.h=d}}var Vt=new q(()=>new Ne,i=>i.reset());class Ne{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let xt,qt=!1,de=new st,Tn=()=>{const i=c.Promise.resolve(void 0);xt=()=>{i.then(En)}};var En=()=>{for(var i;i=g();){try{i.h.call(i.g)}catch(l){v(l)}var a=Vt;a.j(i),100>a.h&&(a.h++,i.next=a.g,a.g=i)}qt=!1};function Bt(){this.s=this.s,this.C=this.C}Bt.prototype.s=!1,Bt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Bt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ct(i,a){this.type=i,this.g=this.target=a,this.defaultPrevented=!1}ct.prototype.h=function(){this.defaultPrevented=!0};var ou=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,a=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};c.addEventListener("test",l,a),c.removeEventListener("test",l,a)}catch{}return i}();function be(i,a){if(ct.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var l=this.type=i.type,d=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=a,a=i.relatedTarget){if(Pt){t:{try{J(a.nodeName);var I=!0;break t}catch{}I=!1}I||(a=null)}}else l=="mouseover"?a=i.fromElement:l=="mouseout"&&(a=i.toElement);this.relatedTarget=a,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:au[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&be.aa.h.call(this)}}k(be,ct);var au={2:"touch",3:"pen",4:"mouse"};be.prototype.h=function(){be.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var vn="closure_listenable_"+(1e6*Math.random()|0),uu=0;function lu(i,a,l,d,I){this.listener=i,this.proxy=null,this.src=a,this.type=l,this.capture=!!d,this.ha=I,this.key=++uu,this.da=this.fa=!1}function In(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function An(i){this.src=i,this.g={},this.h=0}An.prototype.add=function(i,a,l,d,I){var w=i.toString();i=this.g[w],i||(i=this.g[w]=[],this.h++);var C=vr(i,a,d,I);return-1<C?(a=i[C],l||(a.fa=!1)):(a=new lu(a,this.src,w,!!d,I),a.fa=l,i.push(a)),a};function Er(i,a){var l=a.type;if(l in i.g){var d=i.g[l],I=Array.prototype.indexOf.call(d,a,void 0),w;(w=0<=I)&&Array.prototype.splice.call(d,I,1),w&&(In(a),i.g[l].length==0&&(delete i.g[l],i.h--))}}function vr(i,a,l,d){for(var I=0;I<i.length;++I){var w=i[I];if(!w.da&&w.listener==a&&w.capture==!!l&&w.ha==d)return I}return-1}var Ir="closure_lm_"+(1e6*Math.random()|0),Ar={};function ji(i,a,l,d,I){if(Array.isArray(a)){for(var w=0;w<a.length;w++)ji(i,a[w],l,d,I);return null}return l=$i(l),i&&i[vn]?i.K(a,l,f(d)?!!d.capture:!!d,I):cu(i,a,l,!1,d,I)}function cu(i,a,l,d,I,w){if(!a)throw Error("Invalid event type");var C=f(I)?!!I.capture:!!I,K=Rr(i);if(K||(i[Ir]=K=new An(i)),l=K.add(a,l,d,C,w),l.proxy)return l;if(d=hu(),l.proxy=d,d.src=i,d.listener=l,i.addEventListener)ou||(I=C),I===void 0&&(I=!1),i.addEventListener(a.toString(),d,I);else if(i.attachEvent)i.attachEvent(Gi(a.toString()),d);else if(i.addListener&&i.removeListener)i.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return l}function hu(){function i(l){return a.call(i.src,i.listener,l)}const a=du;return i}function zi(i,a,l,d,I){if(Array.isArray(a))for(var w=0;w<a.length;w++)zi(i,a[w],l,d,I);else d=f(d)?!!d.capture:!!d,l=$i(l),i&&i[vn]?(i=i.i,a=String(a).toString(),a in i.g&&(w=i.g[a],l=vr(w,l,d,I),-1<l&&(In(w[l]),Array.prototype.splice.call(w,l,1),w.length==0&&(delete i.g[a],i.h--)))):i&&(i=Rr(i))&&(a=i.g[a.toString()],i=-1,a&&(i=vr(a,l,d,I)),(l=-1<i?a[i]:null)&&wr(l))}function wr(i){if(typeof i!="number"&&i&&!i.da){var a=i.src;if(a&&a[vn])Er(a.i,i);else{var l=i.type,d=i.proxy;a.removeEventListener?a.removeEventListener(l,d,i.capture):a.detachEvent?a.detachEvent(Gi(l),d):a.addListener&&a.removeListener&&a.removeListener(d),(l=Rr(a))?(Er(l,i),l.h==0&&(l.src=null,a[Ir]=null)):In(i)}}}function Gi(i){return i in Ar?Ar[i]:Ar[i]="on"+i}function du(i,a){if(i.da)i=!0;else{a=new be(a,this);var l=i.listener,d=i.ha||i.src;i.fa&&wr(i),i=l.call(d,a)}return i}function Rr(i){return i=i[Ir],i instanceof An?i:null}var Pr="__closure_events_fn_"+(1e9*Math.random()>>>0);function $i(i){return typeof i=="function"?i:(i[Pr]||(i[Pr]=function(a){return i.handleEvent(a)}),i[Pr])}function ht(){Bt.call(this),this.i=new An(this),this.M=this,this.F=null}k(ht,Bt),ht.prototype[vn]=!0,ht.prototype.removeEventListener=function(i,a,l,d){zi(this,i,a,l,d)};function Tt(i,a){var l,d=i.F;if(d)for(l=[];d;d=d.F)l.push(d);if(i=i.M,d=a.type||a,typeof a=="string")a=new ct(a,i);else if(a instanceof ct)a.target=a.target||i;else{var I=a;a=new ct(d,i),y(a,I)}if(I=!0,l)for(var w=l.length-1;0<=w;w--){var C=a.g=l[w];I=wn(C,d,!0,a)&&I}if(C=a.g=i,I=wn(C,d,!0,a)&&I,I=wn(C,d,!1,a)&&I,l)for(w=0;w<l.length;w++)C=a.g=l[w],I=wn(C,d,!1,a)&&I}ht.prototype.N=function(){if(ht.aa.N.call(this),this.i){var i=this.i,a;for(a in i.g){for(var l=i.g[a],d=0;d<l.length;d++)In(l[d]);delete i.g[a],i.h--}}this.F=null},ht.prototype.K=function(i,a,l,d){return this.i.add(String(i),a,!1,l,d)},ht.prototype.L=function(i,a,l,d){return this.i.add(String(i),a,!0,l,d)};function wn(i,a,l,d){if(a=i.i.g[String(a)],!a)return!0;a=a.concat();for(var I=!0,w=0;w<a.length;++w){var C=a[w];if(C&&!C.da&&C.capture==l){var K=C.listener,ot=C.ha||C.src;C.fa&&Er(i.i,C),I=K.call(ot,d)!==!1&&I}}return I&&!d.defaultPrevented}function Ki(i,a,l){if(typeof i=="function")l&&(i=R(i,l));else if(i&&typeof i.handleEvent=="function")i=R(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(i,a||0)}function Qi(i){i.g=Ki(()=>{i.g=null,i.i&&(i.i=!1,Qi(i))},i.l);const a=i.h;i.h=null,i.m.apply(null,a)}class fu extends Bt{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Qi(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xe(i){Bt.call(this),this.h=i,this.g={}}k(xe,Bt);var Wi=[];function Hi(i){nt(i.g,function(a,l){this.g.hasOwnProperty(l)&&wr(a)},i),i.g={}}xe.prototype.N=function(){xe.aa.N.call(this),Hi(this)},xe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Vr=c.JSON.stringify,pu=c.JSON.parse,mu=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function Sr(){}Sr.prototype.h=null;function Xi(i){return i.h||(i.h=i.i())}function Yi(){}var Me={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Cr(){ct.call(this,"d")}k(Cr,ct);function Dr(){ct.call(this,"c")}k(Dr,ct);var te={},Ji=null;function Rn(){return Ji=Ji||new ht}te.La="serverreachability";function Zi(i){ct.call(this,te.La,i)}k(Zi,ct);function Le(i){const a=Rn();Tt(a,new Zi(a))}te.STAT_EVENT="statevent";function ts(i,a){ct.call(this,te.STAT_EVENT,i),this.stat=a}k(ts,ct);function Et(i){const a=Rn();Tt(a,new ts(a,i))}te.Ma="timingevent";function es(i,a){ct.call(this,te.Ma,i),this.size=a}k(es,ct);function Fe(i,a){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},a)}function Oe(){this.g=!0}Oe.prototype.xa=function(){this.g=!1};function gu(i,a,l,d,I,w){i.info(function(){if(i.g)if(w)for(var C="",K=w.split("&"),ot=0;ot<K.length;ot++){var j=K[ot].split("=");if(1<j.length){var dt=j[0];j=j[1];var ft=dt.split("_");C=2<=ft.length&&ft[1]=="type"?C+(dt+"="+j+"&"):C+(dt+"=redacted&")}}else C=null;else C=w;return"XMLHTTP REQ ("+d+") [attempt "+I+"]: "+a+`
`+l+`
`+C})}function _u(i,a,l,d,I,w,C){i.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+I+"]: "+a+`
`+l+`
`+w+" "+C})}function fe(i,a,l,d){i.info(function(){return"XMLHTTP TEXT ("+a+"): "+Tu(i,l)+(d?" "+d:"")})}function yu(i,a){i.info(function(){return"TIMEOUT: "+a})}Oe.prototype.info=function(){};function Tu(i,a){if(!i.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(i=0;i<l.length;i++)if(Array.isArray(l[i])){var d=l[i];if(!(2>d.length)){var I=d[1];if(Array.isArray(I)&&!(1>I.length)){var w=I[0];if(w!="noop"&&w!="stop"&&w!="close")for(var C=1;C<I.length;C++)I[C]=""}}}}return Vr(l)}catch{return a}}var Pn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ns={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},kr;function Vn(){}k(Vn,Sr),Vn.prototype.g=function(){return new XMLHttpRequest},Vn.prototype.i=function(){return{}},kr=new Vn;function jt(i,a,l,d){this.j=i,this.i=a,this.l=l,this.R=d||1,this.U=new xe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new rs}function rs(){this.i=null,this.g="",this.h=!1}var is={},Nr={};function br(i,a,l){i.L=1,i.v=kn(Mt(a)),i.m=l,i.P=!0,ss(i,null)}function ss(i,a){i.F=Date.now(),Sn(i),i.A=Mt(i.v);var l=i.A,d=i.R;Array.isArray(d)||(d=[String(d)]),Ts(l.i,"t",d),i.C=0,l=i.j.J,i.h=new rs,i.g=Fs(i.j,l?a:null,!i.m),0<i.O&&(i.M=new fu(R(i.Y,i,i.g),i.O)),a=i.U,l=i.g,d=i.ca;var I="readystatechange";Array.isArray(I)||(I&&(Wi[0]=I.toString()),I=Wi);for(var w=0;w<I.length;w++){var C=ji(l,I[w],d||a.handleEvent,!1,a.h||a);if(!C)break;a.g[C.key]=C}a=i.H?p(i.H):{},i.m?(i.u||(i.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,a)):(i.u="GET",i.g.ea(i.A,i.u,null,a)),Le(),gu(i.i,i.u,i.A,i.l,i.R,i.m)}jt.prototype.ca=function(i){i=i.target;const a=this.M;a&&Lt(i)==3?a.j():this.Y(i)},jt.prototype.Y=function(i){try{if(i==this.g)t:{const ft=Lt(this.g);var a=this.g.Ba();const ge=this.g.Z();if(!(3>ft)&&(ft!=3||this.g&&(this.h.h||this.g.oa()||Ps(this.g)))){this.J||ft!=4||a==7||(a==8||0>=ge?Le(3):Le(2)),xr(this);var l=this.g.Z();this.X=l;e:if(os(this)){var d=Ps(this.g);i="";var I=d.length,w=Lt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ee(this),Ue(this);var C="";break e}this.h.i=new c.TextDecoder}for(a=0;a<I;a++)this.h.h=!0,i+=this.h.i.decode(d[a],{stream:!(w&&a==I-1)});d.length=0,this.h.g+=i,this.C=0,C=this.h.g}else C=this.g.oa();if(this.o=l==200,_u(this.i,this.u,this.A,this.l,this.R,ft,l),this.o){if(this.T&&!this.K){e:{if(this.g){var K,ot=this.g;if((K=ot.g?ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(K)){var j=K;break e}}j=null}if(l=j)fe(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Mr(this,l);else{this.o=!1,this.s=3,Et(12),ee(this),Ue(this);break t}}if(this.P){l=!0;let St;for(;!this.J&&this.C<C.length;)if(St=Eu(this,C),St==Nr){ft==4&&(this.s=4,Et(14),l=!1),fe(this.i,this.l,null,"[Incomplete Response]");break}else if(St==is){this.s=4,Et(15),fe(this.i,this.l,C,"[Invalid Chunk]"),l=!1;break}else fe(this.i,this.l,St,null),Mr(this,St);if(os(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ft!=4||C.length!=0||this.h.h||(this.s=1,Et(16),l=!1),this.o=this.o&&l,!l)fe(this.i,this.l,C,"[Invalid Chunked Response]"),ee(this),Ue(this);else if(0<C.length&&!this.W){this.W=!0;var dt=this.j;dt.g==this&&dt.ba&&!dt.M&&(dt.j.info("Great, no buffering proxy detected. Bytes received: "+C.length),Br(dt),dt.M=!0,Et(11))}}else fe(this.i,this.l,C,null),Mr(this,C);ft==4&&ee(this),this.o&&!this.J&&(ft==4?bs(this.j,this):(this.o=!1,Sn(this)))}else Fu(this.g),l==400&&0<C.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),ee(this),Ue(this)}}}catch{}finally{}};function os(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function Eu(i,a){var l=i.C,d=a.indexOf(`
`,l);return d==-1?Nr:(l=Number(a.substring(l,d)),isNaN(l)?is:(d+=1,d+l>a.length?Nr:(a=a.slice(d,d+l),i.C=d+l,a)))}jt.prototype.cancel=function(){this.J=!0,ee(this)};function Sn(i){i.S=Date.now()+i.I,as(i,i.I)}function as(i,a){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Fe(R(i.ba,i),a)}function xr(i){i.B&&(c.clearTimeout(i.B),i.B=null)}jt.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(yu(this.i,this.A),this.L!=2&&(Le(),Et(17)),ee(this),this.s=2,Ue(this)):as(this,this.S-i)};function Ue(i){i.j.G==0||i.J||bs(i.j,i)}function ee(i){xr(i);var a=i.M;a&&typeof a.ma=="function"&&a.ma(),i.M=null,Hi(i.U),i.g&&(a=i.g,i.g=null,a.abort(),a.ma())}function Mr(i,a){try{var l=i.j;if(l.G!=0&&(l.g==i||Lr(l.h,i))){if(!i.K&&Lr(l.h,i)&&l.G==3){try{var d=l.Da.g.parse(a)}catch{d=null}if(Array.isArray(d)&&d.length==3){var I=d;if(I[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<i.F)Ln(l),xn(l);else break t;qr(l),Et(18)}}else l.za=I[1],0<l.za-l.T&&37500>I[2]&&l.F&&l.v==0&&!l.C&&(l.C=Fe(R(l.Za,l),6e3));if(1>=cs(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else re(l,11)}else if((i.K||l.g==i)&&Ln(l),!G(a))for(I=l.Da.g.parse(a),a=0;a<I.length;a++){let j=I[a];if(l.T=j[0],j=j[1],l.G==2)if(j[0]=="c"){l.K=j[1],l.ia=j[2];const dt=j[3];dt!=null&&(l.la=dt,l.j.info("VER="+l.la));const ft=j[4];ft!=null&&(l.Aa=ft,l.j.info("SVER="+l.Aa));const ge=j[5];ge!=null&&typeof ge=="number"&&0<ge&&(d=1.5*ge,l.L=d,l.j.info("backChannelRequestTimeoutMs_="+d)),d=l;const St=i.g;if(St){const On=St.g?St.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(On){var w=d.h;w.g||On.indexOf("spdy")==-1&&On.indexOf("quic")==-1&&On.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(Fr(w,w.h),w.h=null))}if(d.D){const jr=St.g?St.g.getResponseHeader("X-HTTP-Session-Id"):null;jr&&(d.ya=jr,W(d.I,d.D,jr))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-i.F,l.j.info("Handshake RTT: "+l.R+"ms")),d=l;var C=i;if(d.qa=Ls(d,d.J?d.ia:null,d.W),C.K){hs(d.h,C);var K=C,ot=d.L;ot&&(K.I=ot),K.B&&(xr(K),Sn(K)),d.g=C}else ks(d);0<l.i.length&&Mn(l)}else j[0]!="stop"&&j[0]!="close"||re(l,7);else l.G==3&&(j[0]=="stop"||j[0]=="close"?j[0]=="stop"?re(l,7):Ur(l):j[0]!="noop"&&l.l&&l.l.ta(j),l.v=0)}}Le(4)}catch{}}var vu=class{constructor(i,a){this.g=i,this.map=a}};function us(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ls(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function cs(i){return i.h?1:i.g?i.g.size:0}function Lr(i,a){return i.h?i.h==a:i.g?i.g.has(a):!1}function Fr(i,a){i.g?i.g.add(a):i.h=a}function hs(i,a){i.h&&i.h==a?i.h=null:i.g&&i.g.has(a)&&i.g.delete(a)}us.prototype.cancel=function(){if(this.i=ds(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function ds(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let a=i.i;for(const l of i.g.values())a=a.concat(l.D);return a}return x(i.i)}function Iu(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var a=[],l=i.length,d=0;d<l;d++)a.push(i[d]);return a}a=[],l=0;for(d in i)a[l++]=i[d];return a}function Au(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var a=[];i=i.length;for(var l=0;l<i;l++)a.push(l);return a}a=[],l=0;for(const d in i)a[l++]=d;return a}}}function fs(i,a){if(i.forEach&&typeof i.forEach=="function")i.forEach(a,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,a,void 0);else for(var l=Au(i),d=Iu(i),I=d.length,w=0;w<I;w++)a.call(void 0,d[w],l&&l[w],i)}var ps=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function wu(i,a){if(i){i=i.split("&");for(var l=0;l<i.length;l++){var d=i[l].indexOf("="),I=null;if(0<=d){var w=i[l].substring(0,d);I=i[l].substring(d+1)}else w=i[l];a(w,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function ne(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof ne){this.h=i.h,Cn(this,i.j),this.o=i.o,this.g=i.g,Dn(this,i.s),this.l=i.l;var a=i.i,l=new je;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),ms(this,l),this.m=i.m}else i&&(a=String(i).match(ps))?(this.h=!1,Cn(this,a[1]||"",!0),this.o=qe(a[2]||""),this.g=qe(a[3]||"",!0),Dn(this,a[4]),this.l=qe(a[5]||"",!0),ms(this,a[6]||"",!0),this.m=qe(a[7]||"")):(this.h=!1,this.i=new je(null,this.h))}ne.prototype.toString=function(){var i=[],a=this.j;a&&i.push(Be(a,gs,!0),":");var l=this.g;return(l||a=="file")&&(i.push("//"),(a=this.o)&&i.push(Be(a,gs,!0),"@"),i.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&i.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(Be(l,l.charAt(0)=="/"?Vu:Pu,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",Be(l,Cu)),i.join("")};function Mt(i){return new ne(i)}function Cn(i,a,l){i.j=l?qe(a,!0):a,i.j&&(i.j=i.j.replace(/:$/,""))}function Dn(i,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);i.s=a}else i.s=null}function ms(i,a,l){a instanceof je?(i.i=a,Du(i.i,i.h)):(l||(a=Be(a,Su)),i.i=new je(a,i.h))}function W(i,a,l){i.i.set(a,l)}function kn(i){return W(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function qe(i,a){return i?a?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Be(i,a,l){return typeof i=="string"?(i=encodeURI(i).replace(a,Ru),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Ru(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var gs=/[#\/\?@]/g,Pu=/[#\?:]/g,Vu=/[#\?]/g,Su=/[#\?@]/g,Cu=/#/g;function je(i,a){this.h=this.g=null,this.i=i||null,this.j=!!a}function zt(i){i.g||(i.g=new Map,i.h=0,i.i&&wu(i.i,function(a,l){i.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}r=je.prototype,r.add=function(i,a){zt(this),this.i=null,i=pe(this,i);var l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(a),this.h+=1,this};function _s(i,a){zt(i),a=pe(i,a),i.g.has(a)&&(i.i=null,i.h-=i.g.get(a).length,i.g.delete(a))}function ys(i,a){return zt(i),a=pe(i,a),i.g.has(a)}r.forEach=function(i,a){zt(this),this.g.forEach(function(l,d){l.forEach(function(I){i.call(a,I,d,this)},this)},this)},r.na=function(){zt(this);const i=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let d=0;d<a.length;d++){const I=i[d];for(let w=0;w<I.length;w++)l.push(a[d])}return l},r.V=function(i){zt(this);let a=[];if(typeof i=="string")ys(this,i)&&(a=a.concat(this.g.get(pe(this,i))));else{i=Array.from(this.g.values());for(let l=0;l<i.length;l++)a=a.concat(i[l])}return a},r.set=function(i,a){return zt(this),this.i=null,i=pe(this,i),ys(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[a]),this.h+=1,this},r.get=function(i,a){return i?(i=this.V(i),0<i.length?String(i[0]):a):a};function Ts(i,a,l){_s(i,a),0<l.length&&(i.i=null,i.g.set(pe(i,a),x(l)),i.h+=l.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var d=a[l];const w=encodeURIComponent(String(d)),C=this.V(d);for(d=0;d<C.length;d++){var I=w;C[d]!==""&&(I+="="+encodeURIComponent(String(C[d]))),i.push(I)}}return this.i=i.join("&")};function pe(i,a){return a=String(a),i.j&&(a=a.toLowerCase()),a}function Du(i,a){a&&!i.j&&(zt(i),i.i=null,i.g.forEach(function(l,d){var I=d.toLowerCase();d!=I&&(_s(this,d),Ts(this,I,l))},i)),i.j=a}function ku(i,a){const l=new Oe;if(c.Image){const d=new Image;d.onload=V(Gt,l,"TestLoadImage: loaded",!0,a,d),d.onerror=V(Gt,l,"TestLoadImage: error",!1,a,d),d.onabort=V(Gt,l,"TestLoadImage: abort",!1,a,d),d.ontimeout=V(Gt,l,"TestLoadImage: timeout",!1,a,d),c.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=i}else a(!1)}function Nu(i,a){const l=new Oe,d=new AbortController,I=setTimeout(()=>{d.abort(),Gt(l,"TestPingServer: timeout",!1,a)},1e4);fetch(i,{signal:d.signal}).then(w=>{clearTimeout(I),w.ok?Gt(l,"TestPingServer: ok",!0,a):Gt(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(I),Gt(l,"TestPingServer: error",!1,a)})}function Gt(i,a,l,d,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),d(l)}catch{}}function bu(){this.g=new mu}function xu(i,a,l){const d=l||"";try{fs(i,function(I,w){let C=I;f(I)&&(C=Vr(I)),a.push(d+w+"="+encodeURIComponent(C))})}catch(I){throw a.push(d+"type="+encodeURIComponent("_badmap")),I}}function ze(i){this.l=i.Ub||null,this.j=i.eb||!1}k(ze,Sr),ze.prototype.g=function(){return new Nn(this.l,this.j)},ze.prototype.i=function(i){return function(){return i}}({});function Nn(i,a){ht.call(this),this.D=i,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Nn,ht),r=Nn.prototype,r.open=function(i,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=a,this.readyState=1,$e(this)},r.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(a.body=i),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ge(this)),this.readyState=0},r.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,$e(this)),this.g&&(this.readyState=3,$e(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Es(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function Es(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}r.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var a=i.value?i.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!i.done}))&&(this.response=this.responseText+=a)}i.done?Ge(this):$e(this),this.readyState==3&&Es(this)}},r.Ra=function(i){this.g&&(this.response=this.responseText=i,Ge(this))},r.Qa=function(i){this.g&&(this.response=i,Ge(this))},r.ga=function(){this.g&&Ge(this)};function Ge(i){i.readyState=4,i.l=null,i.j=null,i.v=null,$e(i)}r.setRequestHeader=function(i,a){this.u.append(i,a)},r.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=a.next();return i.join(`\r
`)};function $e(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Nn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function vs(i){let a="";return nt(i,function(l,d){a+=d,a+=":",a+=l,a+=`\r
`}),a}function Or(i,a,l){t:{for(d in l){var d=!1;break t}d=!0}d||(l=vs(l),typeof i=="string"?l!=null&&encodeURIComponent(String(l)):W(i,a,l))}function Y(i){ht.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(Y,ht);var Mu=/^https?$/i,Lu=["POST","PUT"];r=Y.prototype,r.Ha=function(i){this.J=i},r.ea=function(i,a,l,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);a=a?a.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():kr.g(),this.v=this.o?Xi(this.o):Xi(kr),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(a,String(i),!0),this.B=!1}catch(w){Is(this,w);return}if(i=l||"",l=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var I in d)l.set(I,d[I]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const w of d.keys())l.set(w,d.get(w));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(l.keys()).find(w=>w.toLowerCase()=="content-type"),I=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Lu,a,void 0))||d||I||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,C]of l)this.g.setRequestHeader(w,C);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Rs(this),this.u=!0,this.g.send(i),this.u=!1}catch(w){Is(this,w)}};function Is(i,a){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=a,i.m=5,As(i),bn(i)}function As(i){i.A||(i.A=!0,Tt(i,"complete"),Tt(i,"error"))}r.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,Tt(this,"complete"),Tt(this,"abort"),bn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),bn(this,!0)),Y.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?ws(this):this.bb())},r.bb=function(){ws(this)};function ws(i){if(i.h&&typeof u<"u"&&(!i.v[1]||Lt(i)!=4||i.Z()!=2)){if(i.u&&Lt(i)==4)Ki(i.Ea,0,i);else if(Tt(i,"readystatechange"),Lt(i)==4){i.h=!1;try{const C=i.Z();t:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var d;if(d=C===0){var I=String(i.D).match(ps)[1]||null;!I&&c.self&&c.self.location&&(I=c.self.location.protocol.slice(0,-1)),d=!Mu.test(I?I.toLowerCase():"")}l=d}if(l)Tt(i,"complete"),Tt(i,"success");else{i.m=6;try{var w=2<Lt(i)?i.g.statusText:""}catch{w=""}i.l=w+" ["+i.Z()+"]",As(i)}}finally{bn(i)}}}}function bn(i,a){if(i.g){Rs(i);const l=i.g,d=i.v[0]?()=>{}:null;i.g=null,i.v=null,a||Tt(i,"ready");try{l.onreadystatechange=d}catch{}}}function Rs(i){i.I&&(c.clearTimeout(i.I),i.I=null)}r.isActive=function(){return!!this.g};function Lt(i){return i.g?i.g.readyState:0}r.Z=function(){try{return 2<Lt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(i){if(this.g){var a=this.g.responseText;return i&&a.indexOf(i)==0&&(a=a.substring(i.length)),pu(a)}};function Ps(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Fu(i){const a={};i=(i.g&&2<=Lt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<i.length;d++){if(G(i[d]))continue;var l=T(i[d]);const I=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const w=a[I]||[];a[I]=w,w.push(l)}E(a,function(d){return d.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ke(i,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||a}function Vs(i){this.Aa=0,this.i=[],this.j=new Oe,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ke("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ke("baseRetryDelayMs",5e3,i),this.cb=Ke("retryDelaySeedMs",1e4,i),this.Wa=Ke("forwardChannelMaxRetries",2,i),this.wa=Ke("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new us(i&&i.concurrentRequestLimit),this.Da=new bu,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Vs.prototype,r.la=8,r.G=1,r.connect=function(i,a,l,d){Et(0),this.W=i,this.H=a||{},l&&d!==void 0&&(this.H.OSID=l,this.H.OAID=d),this.F=this.X,this.I=Ls(this,null,this.W),Mn(this)};function Ur(i){if(Ss(i),i.G==3){var a=i.U++,l=Mt(i.I);if(W(l,"SID",i.K),W(l,"RID",a),W(l,"TYPE","terminate"),Qe(i,l),a=new jt(i,i.j,a),a.L=2,a.v=kn(Mt(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=a.v,l=!0),l||(a.g=Fs(a.j,null),a.g.ea(a.v)),a.F=Date.now(),Sn(a)}Ms(i)}function xn(i){i.g&&(Br(i),i.g.cancel(),i.g=null)}function Ss(i){xn(i),i.u&&(c.clearTimeout(i.u),i.u=null),Ln(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function Mn(i){if(!ls(i.h)&&!i.s){i.s=!0;var a=i.Ga;xt||Tn(),qt||(xt(),qt=!0),de.add(a,i),i.B=0}}function Ou(i,a){return cs(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=a.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=Fe(R(i.Ga,i,a),xs(i,i.B)),i.B++,!0)}r.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const I=new jt(this,this.j,i);let w=this.o;if(this.S&&(w?(w=p(w),y(w,this.S)):w=this.S),this.m!==null||this.O||(I.H=w,w=null),this.P)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var d=this.i[l];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(a+=d,4096<a){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=Ds(this,I,a),l=Mt(this.I),W(l,"RID",i),W(l,"CVER",22),this.D&&W(l,"X-HTTP-Session-Id",this.D),Qe(this,l),w&&(this.O?a="headers="+encodeURIComponent(String(vs(w)))+"&"+a:this.m&&Or(l,this.m,w)),Fr(this.h,I),this.Ua&&W(l,"TYPE","init"),this.P?(W(l,"$req",a),W(l,"SID","null"),I.T=!0,br(I,l,null)):br(I,l,a),this.G=2}}else this.G==3&&(i?Cs(this,i):this.i.length==0||ls(this.h)||Cs(this))};function Cs(i,a){var l;a?l=a.l:l=i.U++;const d=Mt(i.I);W(d,"SID",i.K),W(d,"RID",l),W(d,"AID",i.T),Qe(i,d),i.m&&i.o&&Or(d,i.m,i.o),l=new jt(i,i.j,l,i.B+1),i.m===null&&(l.H=i.o),a&&(i.i=a.D.concat(i.i)),a=Ds(i,l,1e3),l.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),Fr(i.h,l),br(l,d,a)}function Qe(i,a){i.H&&nt(i.H,function(l,d){W(a,d,l)}),i.l&&fs({},function(l,d){W(a,d,l)})}function Ds(i,a,l){l=Math.min(i.i.length,l);var d=i.l?R(i.l.Na,i.l,i):null;t:{var I=i.i;let w=-1;for(;;){const C=["count="+l];w==-1?0<l?(w=I[0].g,C.push("ofs="+w)):w=0:C.push("ofs="+w);let K=!0;for(let ot=0;ot<l;ot++){let j=I[ot].g;const dt=I[ot].map;if(j-=w,0>j)w=Math.max(0,I[ot].g-100),K=!1;else try{xu(dt,C,"req"+j+"_")}catch{d&&d(dt)}}if(K){d=C.join("&");break t}}}return i=i.i.splice(0,l),a.D=i,d}function ks(i){if(!i.g&&!i.u){i.Y=1;var a=i.Fa;xt||Tn(),qt||(xt(),qt=!0),de.add(a,i),i.v=0}}function qr(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=Fe(R(i.Fa,i),xs(i,i.v)),i.v++,!0)}r.Fa=function(){if(this.u=null,Ns(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=Fe(R(this.ab,this),i)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),xn(this),Ns(this))};function Br(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function Ns(i){i.g=new jt(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var a=Mt(i.qa);W(a,"RID","rpc"),W(a,"SID",i.K),W(a,"AID",i.T),W(a,"CI",i.F?"0":"1"),!i.F&&i.ja&&W(a,"TO",i.ja),W(a,"TYPE","xmlhttp"),Qe(i,a),i.m&&i.o&&Or(a,i.m,i.o),i.L&&(i.g.I=i.L);var l=i.g;i=i.ia,l.L=1,l.v=kn(Mt(a)),l.m=null,l.P=!0,ss(l,i)}r.Za=function(){this.C!=null&&(this.C=null,xn(this),qr(this),Et(19))};function Ln(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function bs(i,a){var l=null;if(i.g==a){Ln(i),Br(i),i.g=null;var d=2}else if(Lr(i.h,a))l=a.D,hs(i.h,a),d=1;else return;if(i.G!=0){if(a.o)if(d==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var I=i.B;d=Rn(),Tt(d,new es(d,l)),Mn(i)}else ks(i);else if(I=a.s,I==3||I==0&&0<a.X||!(d==1&&Ou(i,a)||d==2&&qr(i)))switch(l&&0<l.length&&(a=i.h,a.i=a.i.concat(l)),I){case 1:re(i,5);break;case 4:re(i,10);break;case 3:re(i,6);break;default:re(i,2)}}}function xs(i,a){let l=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(l*=2),l*a}function re(i,a){if(i.j.info("Error code "+a),a==2){var l=R(i.fb,i),d=i.Xa;const I=!d;d=new ne(d||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Cn(d,"https"),kn(d),I?ku(d.toString(),l):Nu(d.toString(),l)}else Et(2);i.G=0,i.l&&i.l.sa(a),Ms(i),Ss(i)}r.fb=function(i){i?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function Ms(i){if(i.G=0,i.ka=[],i.l){const a=ds(i.h);(a.length!=0||i.i.length!=0)&&(D(i.ka,a),D(i.ka,i.i),i.h.i.length=0,x(i.i),i.i.length=0),i.l.ra()}}function Ls(i,a,l){var d=l instanceof ne?Mt(l):new ne(l);if(d.g!="")a&&(d.g=a+"."+d.g),Dn(d,d.s);else{var I=c.location;d=I.protocol,a=a?a+"."+I.hostname:I.hostname,I=+I.port;var w=new ne(null);d&&Cn(w,d),a&&(w.g=a),I&&Dn(w,I),l&&(w.l=l),d=w}return l=i.D,a=i.ya,l&&a&&W(d,l,a),W(d,"VER",i.la),Qe(i,d),d}function Fs(i,a,l){if(a&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=i.Ca&&!i.pa?new Y(new ze({eb:l})):new Y(i.pa),a.Ha(i.J),a}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Os(){}r=Os.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Fn(){}Fn.prototype.g=function(i,a){return new It(i,a)};function It(i,a){ht.call(this),this.g=new Vs(a),this.l=i,this.h=a&&a.messageUrlParams||null,i=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(i?i["X-WebChannel-Content-Type"]=a.messageContentType:i={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(i?i["X-WebChannel-Client-Profile"]=a.va:i={"X-WebChannel-Client-Profile":a.va}),this.g.S=i,(i=a&&a.Sb)&&!G(i)&&(this.g.m=i),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!G(a)&&(this.g.D=a,i=this.h,i!==null&&a in i&&(i=this.h,a in i&&delete i[a])),this.j=new me(this)}k(It,ht),It.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},It.prototype.close=function(){Ur(this.g)},It.prototype.o=function(i){var a=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.u&&(l={},l.__data__=Vr(i),i=l);a.i.push(new vu(a.Ya++,i)),a.G==3&&Mn(a)},It.prototype.N=function(){this.g.l=null,delete this.j,Ur(this.g),delete this.g,It.aa.N.call(this)};function Us(i){Cr.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var a=i.__sm__;if(a){t:{for(const l in a){i=l;break t}i=void 0}(this.i=i)&&(i=this.i,a=a!==null&&i in a?a[i]:void 0),this.data=a}else this.data=i}k(Us,Cr);function qs(){Dr.call(this),this.status=1}k(qs,Dr);function me(i){this.g=i}k(me,Os),me.prototype.ua=function(){Tt(this.g,"a")},me.prototype.ta=function(i){Tt(this.g,new Us(i))},me.prototype.sa=function(i){Tt(this.g,new qs)},me.prototype.ra=function(){Tt(this.g,"b")},Fn.prototype.createWebChannel=Fn.prototype.g,It.prototype.send=It.prototype.o,It.prototype.open=It.prototype.m,It.prototype.close=It.prototype.close,Mo=function(){return new Fn},xo=function(){return Rn()},bo=te,Wr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Pn.NO_ERROR=0,Pn.TIMEOUT=8,Pn.HTTP_ERROR=6,zn=Pn,ns.COMPLETE="complete",No=ns,Yi.EventType=Me,Me.OPEN="a",Me.CLOSE="b",Me.ERROR="c",Me.MESSAGE="d",ht.prototype.listen=ht.prototype.K,He=Yi,ko=ze,Y.prototype.listenOnce=Y.prototype.L,Y.prototype.getLastError=Y.prototype.Ka,Y.prototype.getLastErrorCode=Y.prototype.Ba,Y.prototype.getStatus=Y.prototype.Z,Y.prototype.getResponseJson=Y.prototype.Oa,Y.prototype.getResponseText=Y.prototype.oa,Y.prototype.send=Y.prototype.ea,Y.prototype.setWithCredentials=Y.prototype.Ha,Do=Y}).apply(typeof Un<"u"?Un:typeof self<"u"?self:typeof window<"u"?window:{});const zs="@firebase/firestore";/**
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
 */class mt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
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
 */let Se="10.12.1";/**
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
 */const oe=new Uu("@firebase/firestore");function We(){return oe.logLevel}function b(r,...t){if(oe.logLevel<=$t.DEBUG){const e=t.map(hi);oe.debug(`Firestore (${Se}): ${r}`,...e)}}function Ot(r,...t){if(oe.logLevel<=$t.ERROR){const e=t.map(hi);oe.error(`Firestore (${Se}): ${r}`,...e)}}function ve(r,...t){if(oe.logLevel<=$t.WARN){const e=t.map(hi);oe.warn(`Firestore (${Se}): ${r}`,...e)}}function hi(r){if(typeof r=="string")return r;try{/**
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
*/return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
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
 */function L(r="Unexpected state"){const t=`FIRESTORE (${Se}) INTERNAL ASSERTION FAILED: `+r;throw Ot(t),new Error(t)}function Q(r,t){r||L()}function O(r,t){return r}/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends ju{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Qt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class Lo{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class el{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(mt.UNAUTHENTICATED))}shutdown(){}}class nl{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class rl{constructor(t){this.t=t,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const s=h=>this.i!==n?(n=this.i,e(h)):Promise.resolve();let o=new Qt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Qt,t.enqueueRetryable(()=>s(this.currentUser))};const u=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},c=h=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.auth.addAuthTokenListener(this.o),u()};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Qt)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(Q(typeof n.accessToken=="string"),new Lo(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Q(t===null||typeof t=="string"),new mt(t)}}class il{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class sl{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new il(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ol{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class al{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const n=o=>{o.error!=null&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,b("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>n(o))};const s=o=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Q(typeof e.token=="string"),this.R=e.token,new ol(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function ul(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
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
 */class Fo{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=ul(40);for(let o=0;o<s.length;++o)n.length<20&&s[o]<e&&(n+=t.charAt(s[o]%t.length))}return n}}function z(r,t){return r<t?-1:r>t?1:0}function Ie(r,t,e){return r.length===t.length&&r.every((n,s)=>e(n,t[s]))}/**
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
 */class rt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new N(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return rt.fromMillis(Date.now())}static fromDate(t){return rt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new rt(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?z(this.nanoseconds,t.nanoseconds):z(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class F{constructor(t){this.timestamp=t}static fromTimestamp(t){return new F(t)}static min(){return new F(new rt(0,0))}static max(){return new F(new rt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class rn{constructor(t,e,n){e===void 0?e=0:e>t.length&&L(),n===void 0?n=t.length-e:n>t.length-e&&L(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return rn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof rn?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const o=t.get(s),u=e.get(s);if(o<u)return-1;if(o>u)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class H extends rn{construct(t,e,n){return new H(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new N(P.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(s=>s.length>0))}return new H(e)}static emptyPath(){return new H([])}}const ll=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends rn{construct(t,e,n){return new ut(t,e,n)}static isValidIdentifier(t){return ll.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ut(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const o=()=>{if(n.length===0)throw new N(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let u=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new N(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new N(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=h,s+=2}else c==="`"?(u=!u,s++):c!=="."||u?(n+=c,s++):(o(),s++)}if(o(),u)throw new N(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ut(e)}static emptyPath(){return new ut([])}}/**
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
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(H.fromString(t))}static fromName(t){return new M(H.fromString(t).popFirst(5))}static empty(){return new M(H.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&H.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return H.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new H(t.slice()))}}function cl(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=F.fromTimestamp(n===1e9?new rt(e+1,0):new rt(e,n));return new Ht(s,M.empty(),t)}function hl(r){return new Ht(r.readTime,r.key,-1)}class Ht{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Ht(F.min(),M.empty(),-1)}static max(){return new Ht(F.max(),M.empty(),-1)}}function dl(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(r.documentKey,t.documentKey),e!==0?e:z(r.largestBatchId,t.largestBatchId))}/**
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
 */const fl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class pl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function dn(r){if(r.code!==P.FAILED_PRECONDITION||r.message!==fl)throw r;b("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class S{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&L(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new S((n,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof S?e:S.resolve(e)}catch(e){return S.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):S.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):S.reject(e)}static resolve(t){return new S((e,n)=>{e(t)})}static reject(t){return new S((e,n)=>{n(t)})}static waitFor(t){return new S((e,n)=>{let s=0,o=0,u=!1;t.forEach(c=>{++s,c.next(()=>{++o,u&&o===s&&e()},h=>n(h))}),u=!0,o===s&&e()})}static or(t){let e=S.resolve(!1);for(const n of t)e=e.next(s=>s?S.resolve(s):n());return e}static forEach(t,e){const n=[];return t.forEach((s,o)=>{n.push(e.call(this,s,o))}),this.waitFor(n)}static mapArray(t,e){return new S((n,s)=>{const o=t.length,u=new Array(o);let c=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(m=>{u[f]=m,++c,c===o&&n(u)},m=>s(m))}})}static doWhile(t,e){return new S((n,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):n()};o()})}}function ml(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function fn(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class di{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ie(n),this.se=n=>e.writeSequenceNumber(n))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}di.oe=-1;function er(r){return r==null}function Wn(r){return r===0&&1/r==-1/0}function gl(r){return typeof r=="number"&&Number.isInteger(r)&&!Wn(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */function Gs(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function le(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function Oo(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class X{constructor(t,e){this.comparator=t,this.root=e||at.EMPTY}insert(t,e){return new X(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,at.BLACK,null,null))}remove(t){return new X(this.comparator,this.root.remove(t,this.comparator).copy(null,null,at.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new qn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new qn(this.root,t,this.comparator,!1)}getReverseIterator(){return new qn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new qn(this.root,t,this.comparator,!0)}}class qn{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class at{constructor(t,e,n,s,o){this.key=t,this.value=e,this.color=n??at.RED,this.left=s??at.EMPTY,this.right=o??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,o){return new at(t??this.key,e??this.value,n??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const o=n(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,n),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return at.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw L();const t=this.left.check();if(t!==this.right.check())throw L();return t+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw L()}get value(){throw L()}get color(){throw L()}get left(){throw L()}get right(){throw L()}copy(t,e,n,s,o){return this}insert(t,e,n){return new at(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class lt{constructor(t){this.comparator=t,this.data=new X(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new $s(this.data.getIterator())}getIteratorFrom(t){return new $s(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof lt)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=n.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new lt(this.comparator);return e.data=t,e}}class $s{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class At{constructor(t){this.fields=t,t.sort(ut.comparator)}static empty(){return new At([])}unionWith(t){let e=new lt(ut.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new At(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ie(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
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
 */class Uo extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class yt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Uo("Invalid base64 string: "+o):o}}(t);return new yt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let u=0;u<s.length;++u)o+=String.fromCharCode(s[u]);return o}(t);return new yt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return z(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}yt.EMPTY_BYTE_STRING=new yt("");const _l=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xt(r){if(Q(!!r),typeof r=="string"){let t=0;const e=_l.exec(r);if(Q(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:tt(r.seconds),nanos:tt(r.nanos)}}function tt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ae(r){return typeof r=="string"?yt.fromBase64String(r):yt.fromUint8Array(r)}/**
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
 */function fi(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function pi(r){const t=r.mapValue.fields.__previous_value__;return fi(t)?pi(t):t}function sn(r){const t=Xt(r.mapValue.fields.__local_write_time__.timestampValue);return new rt(t.seconds,t.nanos)}/**
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
 */class yl{constructor(t,e,n,s,o,u,c,h,f){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=f}}class on{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new on("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof on&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Bn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ue(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?fi(r)?4:Tl(r)?9007199254740991:10:L()}function bt(r,t){if(r===t)return!0;const e=ue(r);if(e!==ue(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return sn(r).isEqual(sn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const u=Xt(s.timestampValue),c=Xt(o.timestampValue);return u.seconds===c.seconds&&u.nanos===c.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(s,o){return ae(s.bytesValue).isEqual(ae(o.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(s,o){return tt(s.geoPointValue.latitude)===tt(o.geoPointValue.latitude)&&tt(s.geoPointValue.longitude)===tt(o.geoPointValue.longitude)}(r,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return tt(s.integerValue)===tt(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const u=tt(s.doubleValue),c=tt(o.doubleValue);return u===c?Wn(u)===Wn(c):isNaN(u)&&isNaN(c)}return!1}(r,t);case 9:return Ie(r.arrayValue.values||[],t.arrayValue.values||[],bt);case 10:return function(s,o){const u=s.mapValue.fields||{},c=o.mapValue.fields||{};if(Gs(u)!==Gs(c))return!1;for(const h in u)if(u.hasOwnProperty(h)&&(c[h]===void 0||!bt(u[h],c[h])))return!1;return!0}(r,t);default:return L()}}function an(r,t){return(r.values||[]).find(e=>bt(e,t))!==void 0}function Ae(r,t){if(r===t)return 0;const e=ue(r),n=ue(t);if(e!==n)return z(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return z(r.booleanValue,t.booleanValue);case 2:return function(o,u){const c=tt(o.integerValue||o.doubleValue),h=tt(u.integerValue||u.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(r,t);case 3:return Ks(r.timestampValue,t.timestampValue);case 4:return Ks(sn(r),sn(t));case 5:return z(r.stringValue,t.stringValue);case 6:return function(o,u){const c=ae(o),h=ae(u);return c.compareTo(h)}(r.bytesValue,t.bytesValue);case 7:return function(o,u){const c=o.split("/"),h=u.split("/");for(let f=0;f<c.length&&f<h.length;f++){const m=z(c[f],h[f]);if(m!==0)return m}return z(c.length,h.length)}(r.referenceValue,t.referenceValue);case 8:return function(o,u){const c=z(tt(o.latitude),tt(u.latitude));return c!==0?c:z(tt(o.longitude),tt(u.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return function(o,u){const c=o.values||[],h=u.values||[];for(let f=0;f<c.length&&f<h.length;++f){const m=Ae(c[f],h[f]);if(m)return m}return z(c.length,h.length)}(r.arrayValue,t.arrayValue);case 10:return function(o,u){if(o===Bn.mapValue&&u===Bn.mapValue)return 0;if(o===Bn.mapValue)return 1;if(u===Bn.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),f=u.fields||{},m=Object.keys(f);h.sort(),m.sort();for(let A=0;A<h.length&&A<m.length;++A){const R=z(h[A],m[A]);if(R!==0)return R;const V=Ae(c[h[A]],f[m[A]]);if(V!==0)return V}return z(h.length,m.length)}(r.mapValue,t.mapValue);default:throw L()}}function Ks(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return z(r,t);const e=Xt(r),n=Xt(t),s=z(e.seconds,n.seconds);return s!==0?s:z(e.nanos,n.nanos)}function we(r){return Hr(r)}function Hr(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=Xt(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return ae(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return M.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",s=!0;for(const o of e.values||[])s?s=!1:n+=",",n+=Hr(o);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const u of n)o?o=!1:s+=",",s+=`${u}:${Hr(e.fields[u])}`;return s+"}"}(r.mapValue):L()}function Qs(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function Xr(r){return!!r&&"integerValue"in r}function mi(r){return!!r&&"arrayValue"in r}function Ws(r){return!!r&&"nullValue"in r}function Hs(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Gn(r){return!!r&&"mapValue"in r}function Ze(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return le(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=Ze(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Ze(r.arrayValue.values[e]);return t}return Object.assign({},r)}function Tl(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class vt{constructor(t){this.value=t}static empty(){return new vt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Gn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ze(e)}setAll(t){let e=ut.emptyPath(),n={},s=[];t.forEach((u,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,n,s),n={},s=[],e=c.popLast()}u?n[c.lastSegment()]=Ze(u):s.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,n,s)}delete(t){const e=this.field(t.popLast());Gn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return bt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];Gn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){le(e,(s,o)=>t[s]=o);for(const s of n)delete t[s]}clone(){return new vt(Ze(this.value))}}function qo(r){const t=[];return le(r.fields,(e,n)=>{const s=new ut([e]);if(Gn(n)){const o=qo(n.mapValue).fields;if(o.length===0)t.push(s);else for(const u of o)t.push(s.child(u))}else t.push(s)}),new At(t)}/**
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
 */class gt{constructor(t,e,n,s,o,u,c){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=o,this.data=u,this.documentState=c}static newInvalidDocument(t){return new gt(t,0,F.min(),F.min(),F.min(),vt.empty(),0)}static newFoundDocument(t,e,n,s){return new gt(t,1,e,F.min(),n,s,0)}static newNoDocument(t,e){return new gt(t,2,e,F.min(),F.min(),vt.empty(),0)}static newUnknownDocument(t,e){return new gt(t,3,e,F.min(),F.min(),vt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=vt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof gt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Hn{constructor(t,e){this.position=t,this.inclusive=e}}function Xs(r,t,e){let n=0;for(let s=0;s<r.position.length;s++){const o=t[s],u=r.position[s];if(o.field.isKeyField()?n=M.comparator(M.fromName(u.referenceValue),e.key):n=Ae(u,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function Ys(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!bt(r.position[e],t.position[e]))return!1;return!0}/**
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
 */class un{constructor(t,e="asc"){this.field=t,this.dir=e}}function El(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class Bo{}class et extends Bo{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new Il(t,e,n):e==="array-contains"?new Rl(t,n):e==="in"?new Pl(t,n):e==="not-in"?new Vl(t,n):e==="array-contains-any"?new Sl(t,n):new et(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new Al(t,n):new wl(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Ae(e,this.value)):e!==null&&ue(this.value)===ue(e)&&this.matchesComparison(Ae(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return L()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ct extends Bo{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Ct(t,e)}matches(t){return jo(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function jo(r){return r.op==="and"}function zo(r){return vl(r)&&jo(r)}function vl(r){for(const t of r.filters)if(t instanceof Ct)return!1;return!0}function Yr(r){if(r instanceof et)return r.field.canonicalString()+r.op.toString()+we(r.value);if(zo(r))return r.filters.map(t=>Yr(t)).join(",");{const t=r.filters.map(e=>Yr(e)).join(",");return`${r.op}(${t})`}}function Go(r,t){return r instanceof et?function(n,s){return s instanceof et&&n.op===s.op&&n.field.isEqual(s.field)&&bt(n.value,s.value)}(r,t):r instanceof Ct?function(n,s){return s instanceof Ct&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((o,u,c)=>o&&Go(u,s.filters[c]),!0):!1}(r,t):void L()}function $o(r){return r instanceof et?function(e){return`${e.field.canonicalString()} ${e.op} ${we(e.value)}`}(r):r instanceof Ct?function(e){return e.op.toString()+" {"+e.getFilters().map($o).join(" ,")+"}"}(r):"Filter"}class Il extends et{constructor(t,e,n){super(t,e,n),this.key=M.fromName(n.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class Al extends et{constructor(t,e){super(t,"in",e),this.keys=Ko("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class wl extends et{constructor(t,e){super(t,"not-in",e),this.keys=Ko("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Ko(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>M.fromName(n.referenceValue))}class Rl extends et{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return mi(e)&&an(e.arrayValue,this.value)}}class Pl extends et{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&an(this.value.arrayValue,e)}}class Vl extends et{constructor(t,e){super(t,"not-in",e)}matches(t){if(an(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!an(this.value.arrayValue,e)}}class Sl extends et{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!mi(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>an(this.value.arrayValue,n))}}/**
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
 */class Cl{constructor(t,e=null,n=[],s=[],o=null,u=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=o,this.startAt=u,this.endAt=c,this.ue=null}}function Js(r,t=null,e=[],n=[],s=null,o=null,u=null){return new Cl(r,t,e,n,s,o,u)}function gi(r){const t=O(r);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>Yr(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),er(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>we(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>we(n)).join(",")),t.ue=e}return t.ue}function _i(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!El(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!Go(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!Ys(r.startAt,t.startAt)&&Ys(r.endAt,t.endAt)}function Jr(r){return M.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class Ce{constructor(t,e=null,n=[],s=[],o=null,u="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=o,this.limitType=u,this.startAt=c,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Dl(r,t,e,n,s,o,u,c){return new Ce(r,t,e,n,s,o,u,c)}function nr(r){return new Ce(r)}function Zs(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Qo(r){return r.collectionGroup!==null}function tn(r){const t=O(r);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let c=new lt(ut.comparator);return u.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new un(o,n))}),e.has(ut.keyField().canonicalString())||t.ce.push(new un(ut.keyField(),n))}return t.ce}function Dt(r){const t=O(r);return t.le||(t.le=kl(t,tn(r))),t.le}function kl(r,t){if(r.limitType==="F")return Js(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new un(s.field,o)});const e=r.endAt?new Hn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Hn(r.startAt.position,r.startAt.inclusive):null;return Js(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function Zr(r,t){const e=r.filters.concat([t]);return new Ce(r.path,r.collectionGroup,r.explicitOrderBy.slice(),e,r.limit,r.limitType,r.startAt,r.endAt)}function ti(r,t,e){return new Ce(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function rr(r,t){return _i(Dt(r),Dt(t))&&r.limitType===t.limitType}function Wo(r){return`${gi(Dt(r))}|lt:${r.limitType}`}function _e(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>$o(s)).join(", ")}]`),er(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>we(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>we(s)).join(",")),`Target(${n})`}(Dt(r))}; limitType=${r.limitType})`}function ir(r,t){return t.isFoundDocument()&&function(n,s){const o=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):M.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(r,t)&&function(n,s){for(const o of tn(n))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(r,t)&&function(n,s){for(const o of n.filters)if(!o.matches(s))return!1;return!0}(r,t)&&function(n,s){return!(n.startAt&&!function(u,c,h){const f=Xs(u,c,h);return u.inclusive?f<=0:f<0}(n.startAt,tn(n),s)||n.endAt&&!function(u,c,h){const f=Xs(u,c,h);return u.inclusive?f>=0:f>0}(n.endAt,tn(n),s))}(r,t)}function Nl(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Ho(r){return(t,e)=>{let n=!1;for(const s of tn(r)){const o=bl(s,t,e);if(o!==0)return o;n=n||s.field.isKeyField()}return 0}}function bl(r,t,e){const n=r.field.isKeyField()?M.comparator(t.key,e.key):function(o,u,c){const h=u.data.field(o),f=c.data.field(o);return h!==null&&f!==null?Ae(h,f):L()}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return L()}}/**
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
 */class De{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[s,o]of n)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return n.length===1?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){le(this.inner,(e,n)=>{for(const[s,o]of n)t(s,o)})}isEmpty(){return Oo(this.inner)}size(){return this.innerSize}}/**
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
 */const xl=new X(M.comparator);function Ut(){return xl}const Xo=new X(M.comparator);function Xe(...r){let t=Xo;for(const e of r)t=t.insert(e.key,e);return t}function Yo(r){let t=Xo;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function ie(){return en()}function Jo(){return en()}function en(){return new De(r=>r.toString(),(r,t)=>r.isEqual(t))}const Ml=new X(M.comparator),Ll=new lt(M.comparator);function U(...r){let t=Ll;for(const e of r)t=t.add(e);return t}const Fl=new lt(z);function Ol(){return Fl}/**
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
 */function Zo(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wn(t)?"-0":t}}function ta(r){return{integerValue:""+r}}function Ul(r,t){return gl(t)?ta(t):Zo(r,t)}/**
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
 */class sr{constructor(){this._=void 0}}function ql(r,t,e){return r instanceof ln?function(s,o){const u={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&fi(o)&&(o=pi(o)),o&&(u.fields.__previous_value__=o),{mapValue:u}}(e,t):r instanceof cn?na(r,t):r instanceof hn?ra(r,t):function(s,o){const u=ea(s,o),c=to(u)+to(s.Pe);return Xr(u)&&Xr(s.Pe)?ta(c):Zo(s.serializer,c)}(r,t)}function Bl(r,t,e){return r instanceof cn?na(r,t):r instanceof hn?ra(r,t):e}function ea(r,t){return r instanceof Xn?function(n){return Xr(n)||function(o){return!!o&&"doubleValue"in o}(n)}(t)?t:{integerValue:0}:null}class ln extends sr{}class cn extends sr{constructor(t){super(),this.elements=t}}function na(r,t){const e=ia(t);for(const n of r.elements)e.some(s=>bt(s,n))||e.push(n);return{arrayValue:{values:e}}}class hn extends sr{constructor(t){super(),this.elements=t}}function ra(r,t){let e=ia(t);for(const n of r.elements)e=e.filter(s=>!bt(s,n));return{arrayValue:{values:e}}}class Xn extends sr{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function to(r){return tt(r.integerValue||r.doubleValue)}function ia(r){return mi(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class jl{constructor(t,e){this.field=t,this.transform=e}}function zl(r,t){return r.field.isEqual(t.field)&&function(n,s){return n instanceof cn&&s instanceof cn||n instanceof hn&&s instanceof hn?Ie(n.elements,s.elements,bt):n instanceof Xn&&s instanceof Xn?bt(n.Pe,s.Pe):n instanceof ln&&s instanceof ln}(r.transform,t.transform)}class Gl{constructor(t,e){this.version=t,this.transformResults=e}}class wt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new wt}static exists(t){return new wt(void 0,t)}static updateTime(t){return new wt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function $n(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class or{}function sa(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new yi(r.key,wt.none()):new pn(r.key,r.data,wt.none());{const e=r.data,n=vt.empty();let s=new lt(ut.comparator);for(let o of t.fields)if(!s.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?n.delete(o):n.set(o,u),s=s.add(o)}return new Zt(r.key,n,new At(s.toArray()),wt.none())}}function $l(r,t,e){r instanceof pn?function(s,o,u){const c=s.value.clone(),h=no(s.fieldTransforms,o,u.transformResults);c.setAll(h),o.convertToFoundDocument(u.version,c).setHasCommittedMutations()}(r,t,e):r instanceof Zt?function(s,o,u){if(!$n(s.precondition,o))return void o.convertToUnknownDocument(u.version);const c=no(s.fieldTransforms,o,u.transformResults),h=o.data;h.setAll(oa(s)),h.setAll(c),o.convertToFoundDocument(u.version,h).setHasCommittedMutations()}(r,t,e):function(s,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function nn(r,t,e,n){return r instanceof pn?function(o,u,c,h){if(!$n(o.precondition,u))return c;const f=o.value.clone(),m=ro(o.fieldTransforms,h,u);return f.setAll(m),u.convertToFoundDocument(u.version,f).setHasLocalMutations(),null}(r,t,e,n):r instanceof Zt?function(o,u,c,h){if(!$n(o.precondition,u))return c;const f=ro(o.fieldTransforms,h,u),m=u.data;return m.setAll(oa(o)),m.setAll(f),u.convertToFoundDocument(u.version,m).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(A=>A.field))}(r,t,e,n):function(o,u,c){return $n(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):c}(r,t,e)}function Kl(r,t){let e=null;for(const n of r.fieldTransforms){const s=t.data.field(n.field),o=ea(n.transform,s||null);o!=null&&(e===null&&(e=vt.empty()),e.set(n.field,o))}return e||null}function eo(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Ie(n,s,(o,u)=>zl(o,u))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class pn extends or{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Zt extends or{constructor(t,e,n,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function oa(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function no(r,t,e){const n=new Map;Q(r.length===e.length);for(let s=0;s<e.length;s++){const o=r[s],u=o.transform,c=t.data.field(o.field);n.set(o.field,Bl(u,c,e[s]))}return n}function ro(r,t,e){const n=new Map;for(const s of r){const o=s.transform,u=e.data.field(s.field);n.set(s.field,ql(o,u,t))}return n}class yi extends or{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ql extends or{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Wl{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&$l(o,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=nn(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=nn(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Jo();return this.mutations.forEach(s=>{const o=t.get(s.key),u=o.overlayedDocument;let c=this.applyToLocalView(u,o.mutatedFields);c=e.has(s.key)?null:c;const h=sa(u,c);h!==null&&n.set(s.key,h),u.isValidDocument()||u.convertToNoDocument(F.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),U())}isEqual(t){return this.batchId===t.batchId&&Ie(this.mutations,t.mutations,(e,n)=>eo(e,n))&&Ie(this.baseMutations,t.baseMutations,(e,n)=>eo(e,n))}}class Ti{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){Q(t.mutations.length===n.length);let s=function(){return Ml}();const o=t.mutations;for(let u=0;u<o.length;u++)s=s.insert(o[u].key,n[u].version);return new Ti(t,e,n,s)}}/**
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
 */class Hl{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Xl{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var Z,B;function Yl(r){switch(r){default:return L();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function aa(r){if(r===void 0)return Ot("GRPC error has no .code"),P.UNKNOWN;switch(r){case Z.OK:return P.OK;case Z.CANCELLED:return P.CANCELLED;case Z.UNKNOWN:return P.UNKNOWN;case Z.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case Z.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case Z.INTERNAL:return P.INTERNAL;case Z.UNAVAILABLE:return P.UNAVAILABLE;case Z.UNAUTHENTICATED:return P.UNAUTHENTICATED;case Z.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case Z.NOT_FOUND:return P.NOT_FOUND;case Z.ALREADY_EXISTS:return P.ALREADY_EXISTS;case Z.PERMISSION_DENIED:return P.PERMISSION_DENIED;case Z.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case Z.ABORTED:return P.ABORTED;case Z.OUT_OF_RANGE:return P.OUT_OF_RANGE;case Z.UNIMPLEMENTED:return P.UNIMPLEMENTED;case Z.DATA_LOSS:return P.DATA_LOSS;default:return L()}}(B=Z||(Z={}))[B.OK=0]="OK",B[B.CANCELLED=1]="CANCELLED",B[B.UNKNOWN=2]="UNKNOWN",B[B.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",B[B.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",B[B.NOT_FOUND=5]="NOT_FOUND",B[B.ALREADY_EXISTS=6]="ALREADY_EXISTS",B[B.PERMISSION_DENIED=7]="PERMISSION_DENIED",B[B.UNAUTHENTICATED=16]="UNAUTHENTICATED",B[B.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",B[B.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",B[B.ABORTED=10]="ABORTED",B[B.OUT_OF_RANGE=11]="OUT_OF_RANGE",B[B.UNIMPLEMENTED=12]="UNIMPLEMENTED",B[B.INTERNAL=13]="INTERNAL",B[B.UNAVAILABLE=14]="UNAVAILABLE",B[B.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Jl(){return new TextEncoder}/**
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
 */const Zl=new se([4294967295,4294967295],0);function io(r){const t=Jl().encode(r),e=new Co;return e.update(t),new Uint8Array(e.digest())}function so(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new se([e,n],0),new se([s,o],0)]}class Ei{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Ye(`Invalid padding: ${e}`);if(n<0)throw new Ye(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new Ye(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new Ye(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=se.fromNumber(this.Ie)}Ee(t,e,n){let s=t.add(e.multiply(se.fromNumber(n)));return s.compare(Zl)===1&&(s=new se([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=io(t),[n,s]=so(e);for(let o=0;o<this.hashCount;o++){const u=this.Ee(n,s,o);if(!this.de(u))return!1}return!0}static create(t,e,n){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),u=new Ei(o,s,e);return n.forEach(c=>u.insert(c)),u}insert(t){if(this.Ie===0)return;const e=io(t),[n,s]=so(e);for(let o=0;o<this.hashCount;o++){const u=this.Ee(n,s,o);this.Ae(u)}}Ae(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Ye extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ar{constructor(t,e,n,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,mn.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new ar(F.min(),s,new X(z),Ut(),U())}}class mn{constructor(t,e,n,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new mn(n,e,U(),U(),U())}}/**
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
 */class Kn{constructor(t,e,n,s){this.Re=t,this.removedTargetIds=e,this.key=n,this.Ve=s}}class ua{constructor(t,e){this.targetId=t,this.me=e}}class la{constructor(t,e,n=yt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class oo{constructor(){this.fe=0,this.ge=uo(),this.pe=yt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}Ce(){let t=U(),e=U(),n=U();return this.ge.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:L()}}),new mn(this.pe,this.ye,t,e,n)}ve(){this.we=!1,this.ge=uo()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,Q(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class tc{constructor(t){this.Le=t,this.Be=new Map,this.ke=Ut(),this.qe=ao(),this.Qe=new X(z)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const n=this.Ge(e);switch(t.state){case 0:this.ze(e)&&n.De(t.resumeToken);break;case 1:n.Oe(),n.Se||n.ve(),n.De(t.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(n.Ne(),n.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),n.De(t.resumeToken));break;default:L()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((n,s)=>{this.ze(s)&&e(s)})}He(t){const e=t.targetId,n=t.me.count,s=this.Je(e);if(s){const o=s.target;if(Jr(o))if(n===0){const u=new M(o.path);this.Ue(e,u,gt.newNoDocument(u,F.min()))}else Q(n===1);else{const u=this.Ye(e);if(u!==n){const c=this.Ze(t),h=c?this.Xe(c,t,u):1;if(h!==0){this.je(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,f)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:o=0}=e;let u,c;try{u=ae(n).toUint8Array()}catch(h){if(h instanceof Uo)return ve("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new Ei(u,s,o)}catch(h){return ve(h instanceof Ye?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.Ie===0?null:c}Xe(t,e,n){return e.me.count===n-this.nt(t,e.targetId)?0:2}nt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let s=0;return n.forEach(o=>{const u=this.Le.tt(),c=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.Ue(e,o,null),s++)}),s}rt(t){const e=new Map;this.Be.forEach((o,u)=>{const c=this.Je(u);if(c){if(o.current&&Jr(c.target)){const h=new M(c.target.path);this.ke.get(h)!==null||this.it(u,h)||this.Ue(u,h,gt.newNoDocument(h,t))}o.be&&(e.set(u,o.Ce()),o.ve())}});let n=U();this.qe.forEach((o,u)=>{let c=!0;u.forEachWhile(h=>{const f=this.Je(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(n=n.add(o))}),this.ke.forEach((o,u)=>u.setReadTime(t));const s=new ar(t,e,this.Qe,this.ke,n);return this.ke=Ut(),this.qe=ao(),this.Qe=new X(z),s}$e(t,e){if(!this.ze(t))return;const n=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,n),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,n){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),n&&(this.ke=this.ke.insert(e,n))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).Ce();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new oo,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new lt(z),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||b("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new oo),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function ao(){return new X(M.comparator)}function uo(){return new X(M.comparator)}const ec={asc:"ASCENDING",desc:"DESCENDING"},nc={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},rc={and:"AND",or:"OR"};class ic{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ei(r,t){return r.useProto3Json||er(t)?t:{value:t}}function Yn(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ca(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function sc(r,t){return Yn(r,t.toTimestamp())}function kt(r){return Q(!!r),F.fromTimestamp(function(e){const n=Xt(e);return new rt(n.seconds,n.nanos)}(r))}function vi(r,t){return ni(r,t).canonicalString()}function ni(r,t){const e=function(s){return new H(["projects",s.projectId,"databases",s.database])}(r).child("documents");return t===void 0?e:e.child(t)}function ha(r){const t=H.fromString(r);return Q(ga(t)),t}function ri(r,t){return vi(r.databaseId,t.path)}function Gr(r,t){const e=ha(t);if(e.get(1)!==r.databaseId.projectId)throw new N(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new N(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new M(fa(e))}function da(r,t){return vi(r.databaseId,t)}function oc(r){const t=ha(r);return t.length===4?H.emptyPath():fa(t)}function ii(r){return new H(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function fa(r){return Q(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function lo(r,t,e){return{name:ri(r,t),fields:e.value.mapValue.fields}}function ac(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:L()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(f,m){return f.useProto3Json?(Q(m===void 0||typeof m=="string"),yt.fromBase64String(m||"")):(Q(m===void 0||m instanceof Buffer||m instanceof Uint8Array),yt.fromUint8Array(m||new Uint8Array))}(r,t.targetChange.resumeToken),u=t.targetChange.cause,c=u&&function(f){const m=f.code===void 0?P.UNKNOWN:aa(f.code);return new N(m,f.message||"")}(u);e=new la(n,s,o,c||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const s=Gr(r,n.document.name),o=kt(n.document.updateTime),u=n.document.createTime?kt(n.document.createTime):F.min(),c=new vt({mapValue:{fields:n.document.fields}}),h=gt.newFoundDocument(s,o,u,c),f=n.targetIds||[],m=n.removedTargetIds||[];e=new Kn(f,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const s=Gr(r,n.document),o=n.readTime?kt(n.readTime):F.min(),u=gt.newNoDocument(s,o),c=n.removedTargetIds||[];e=new Kn([],c,u.key,u)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const s=Gr(r,n.document),o=n.removedTargetIds||[];e=new Kn([],o,s,null)}else{if(!("filter"in t))return L();{t.filter;const n=t.filter;n.targetId;const{count:s=0,unchangedNames:o}=n,u=new Xl(s,o),c=n.targetId;e=new ua(c,u)}}return e}function uc(r,t){let e;if(t instanceof pn)e={update:lo(r,t.key,t.value)};else if(t instanceof yi)e={delete:ri(r,t.key)};else if(t instanceof Zt)e={update:lo(r,t.key,t.data),updateMask:_c(t.fieldMask)};else{if(!(t instanceof Ql))return L();e={verify:ri(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(o,u){const c=u.transform;if(c instanceof ln)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof cn)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof hn)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Xn)return{fieldPath:u.field.canonicalString(),increment:c.Pe};throw L()}(0,n))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:sc(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:L()}(r,t.precondition)),e}function lc(r,t){return r&&r.length>0?(Q(t!==void 0),r.map(e=>function(s,o){let u=s.updateTime?kt(s.updateTime):kt(o);return u.isEqual(F.min())&&(u=kt(o)),new Gl(u,s.transformResults||[])}(e,t))):[]}function cc(r,t){return{documents:[da(r,t.path)]}}function hc(r,t){const e={structuredQuery:{}},n=t.path;let s;t.collectionGroup!==null?(s=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=da(r,s);const o=function(f){if(f.length!==0)return ma(Ct.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const u=function(f){if(f.length!==0)return f.map(m=>function(R){return{field:ye(R.field),direction:pc(R.dir)}}(m))}(t.orderBy);u&&(e.structuredQuery.orderBy=u);const c=ei(r,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{_t:e,parent:s}}function dc(r){let t=oc(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let s=null;if(n>0){Q(n===1);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=function(A){const R=pa(A);return R instanceof Ct&&zo(R)?R.getFilters():[R]}(e.where));let u=[];e.orderBy&&(u=function(A){return A.map(R=>function(k){return new un(Te(k.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(R))}(e.orderBy));let c=null;e.limit&&(c=function(A){let R;return R=typeof A=="object"?A.value:A,er(R)?null:R}(e.limit));let h=null;e.startAt&&(h=function(A){const R=!!A.before,V=A.values||[];return new Hn(V,R)}(e.startAt));let f=null;return e.endAt&&(f=function(A){const R=!A.before,V=A.values||[];return new Hn(V,R)}(e.endAt)),Dl(t,s,u,o,c,"F",h,f)}function fc(r,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function pa(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Te(e.unaryFilter.field);return et.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Te(e.unaryFilter.field);return et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Te(e.unaryFilter.field);return et.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Te(e.unaryFilter.field);return et.create(u,"!=",{nullValue:"NULL_VALUE"});default:return L()}}(r):r.fieldFilter!==void 0?function(e){return et.create(Te(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return L()}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return Ct.create(e.compositeFilter.filters.map(n=>pa(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return L()}}(e.compositeFilter.op))}(r):L()}function pc(r){return ec[r]}function mc(r){return nc[r]}function gc(r){return rc[r]}function ye(r){return{fieldPath:r.canonicalString()}}function Te(r){return ut.fromServerFormat(r.fieldPath)}function ma(r){return r instanceof et?function(e){if(e.op==="=="){if(Hs(e.value))return{unaryFilter:{field:ye(e.field),op:"IS_NAN"}};if(Ws(e.value))return{unaryFilter:{field:ye(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Hs(e.value))return{unaryFilter:{field:ye(e.field),op:"IS_NOT_NAN"}};if(Ws(e.value))return{unaryFilter:{field:ye(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ye(e.field),op:mc(e.op),value:e.value}}}(r):r instanceof Ct?function(e){const n=e.getFilters().map(s=>ma(s));return n.length===1?n[0]:{compositeFilter:{op:gc(e.op),filters:n}}}(r):L()}function _c(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function ga(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class Kt{constructor(t,e,n,s,o=F.min(),u=F.min(),c=yt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new Kt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Kt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class yc{constructor(t){this.ct=t}}function Tc(r){const t=dc({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?ti(t,t.limit,"L"):t}/**
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
 */class Ec{constructor(){this._n=new vc}addToCollectionParentIndex(t,e){return this._n.add(e),S.resolve()}getCollectionParents(t,e){return S.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return S.resolve()}deleteFieldIndex(t,e){return S.resolve()}deleteAllFieldIndexes(t){return S.resolve()}createTargetIndexes(t,e){return S.resolve()}getDocumentsMatchingTarget(t,e){return S.resolve(null)}getIndexType(t,e){return S.resolve(0)}getFieldIndexes(t,e){return S.resolve([])}getNextCollectionGroupToUpdate(t){return S.resolve(null)}getMinOffset(t,e){return S.resolve(Ht.min())}getMinOffsetFromCollectionGroup(t,e){return S.resolve(Ht.min())}updateCollectionGroup(t,e,n){return S.resolve()}updateIndexEntries(t,e){return S.resolve()}}class vc{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new lt(H.comparator),o=!s.has(n);return this.index[e]=s.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new lt(H.comparator)).toArray()}}/**
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
 */class Re{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Re(0)}static Ln(){return new Re(-1)}}/**
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
 */class Ic{constructor(){this.changes=new De(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,gt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?S.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Ac{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class wc{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(n=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(n!==null&&nn(n.mutation,s,At.empty(),rt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,U()).next(()=>n))}getLocalViewOfDocuments(t,e,n=U()){const s=ie();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,n).next(o=>{let u=Xe();return o.forEach((c,h)=>{u=u.insert(c,h.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const n=ie();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,U()))}populateOverlays(t,e,n){const s=[];return n.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((u,c)=>{e.set(u,c)})})}computeViews(t,e,n,s){let o=Ut();const u=en(),c=function(){return en()}();return e.forEach((h,f)=>{const m=n.get(f.key);s.has(f.key)&&(m===void 0||m.mutation instanceof Zt)?o=o.insert(f.key,f):m!==void 0?(u.set(f.key,m.mutation.getFieldMask()),nn(m.mutation,f,m.mutation.getFieldMask(),rt.now())):u.set(f.key,At.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,m)=>u.set(f,m)),e.forEach((f,m)=>{var A;return c.set(f,new Ac(m,(A=u.get(f))!==null&&A!==void 0?A:null))}),c))}recalculateAndSaveOverlays(t,e){const n=en();let s=new X((u,c)=>u-c),o=U();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const c of u)c.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let m=n.get(h)||At.empty();m=c.applyToLocalView(f,m),n.set(h,m);const A=(s.get(c.batchId)||U()).add(h);s=s.insert(c.batchId,A)})}).next(()=>{const u=[],c=s.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),f=h.key,m=h.value,A=Jo();m.forEach(R=>{if(!o.has(R)){const V=sa(e.get(R),n.get(R));V!==null&&A.set(R,V),o=o.add(R)}}),u.push(this.documentOverlayCache.saveOverlays(t,f,A))}return S.waitFor(u)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,s){return function(u){return M.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Qo(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,s):this.getDocumentsMatchingCollectionQuery(t,e,n,s)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next(o=>{const u=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-o.size):S.resolve(ie());let c=-1,h=o;return u.next(f=>S.forEach(f,(m,A)=>(c<A.largestBatchId&&(c=A.largestBatchId),o.get(m)?S.resolve():this.remoteDocumentCache.getEntry(t,m).next(R=>{h=h.insert(m,R)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,U())).next(m=>({batchId:c,changes:Yo(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next(n=>{let s=Xe();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,n,s){const o=e.collectionGroup;let u=Xe();return this.indexManager.getCollectionParents(t,o).next(c=>S.forEach(c,h=>{const f=function(A,R){return new Ce(R,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,n,s).next(m=>{m.forEach((A,R)=>{u=u.insert(A,R)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,n,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,s))).next(u=>{o.forEach((h,f)=>{const m=f.getKey();u.get(m)===null&&(u=u.insert(m,gt.newInvalidDocument(m)))});let c=Xe();return u.forEach((h,f)=>{const m=o.get(h);m!==void 0&&nn(m.mutation,f,At.empty(),rt.now()),ir(e,f)&&(c=c.insert(h,f))}),c})}}/**
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
 */class Rc{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return S.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:kt(s.createTime)}}(e)),S.resolve()}getNamedQuery(t,e){return S.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(s){return{name:s.name,query:Tc(s.bundledQuery),readTime:kt(s.readTime)}}(e)),S.resolve()}}/**
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
 */class Pc{constructor(){this.overlays=new X(M.comparator),this.hr=new Map}getOverlay(t,e){return S.resolve(this.overlays.get(e))}getOverlays(t,e){const n=ie();return S.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&n.set(s,o)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((s,o)=>{this.ht(t,e,o)}),S.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.hr.get(n);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.hr.delete(n)),S.resolve()}getOverlaysForCollection(t,e,n){const s=ie(),o=e.length+1,u=new M(e.child("")),c=this.overlays.getIteratorFrom(u);for(;c.hasNext();){const h=c.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>n&&s.set(h.getKey(),h)}return S.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let o=new X((f,m)=>f-m);const u=this.overlays.getIterator();for(;u.hasNext();){const f=u.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>n){let m=o.get(f.largestBatchId);m===null&&(m=ie(),o=o.insert(f.largestBatchId,m)),m.set(f.getKey(),f)}}const c=ie(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,m)=>c.set(f,m)),!(c.size()>=s)););return S.resolve(c)}ht(t,e,n){const s=this.overlays.get(n.key);if(s!==null){const u=this.hr.get(s.largestBatchId).delete(n.key);this.hr.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(n.key,new Hl(e,n));let o=this.hr.get(e);o===void 0&&(o=U(),this.hr.set(e,o)),this.hr.set(e,o.add(n.key))}}/**
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
 */class Ii{constructor(){this.Pr=new lt(it.Ir),this.Tr=new lt(it.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const n=new it(t,e);this.Pr=this.Pr.add(n),this.Tr=this.Tr.add(n)}dr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.Ar(new it(t,e))}Rr(t,e){t.forEach(n=>this.removeReference(n,e))}Vr(t){const e=new M(new H([])),n=new it(e,t),s=new it(e,t+1),o=[];return this.Tr.forEachInRange([n,s],u=>{this.Ar(u),o.push(u.key)}),o}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new M(new H([])),n=new it(e,t),s=new it(e,t+1);let o=U();return this.Tr.forEachInRange([n,s],u=>{o=o.add(u.key)}),o}containsKey(t){const e=new it(t,0),n=this.Pr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class it{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return M.comparator(t.key,e.key)||z(t.pr,e.pr)}static Er(t,e){return z(t.pr,e.pr)||M.comparator(t.key,e.key)}}/**
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
 */class Vc{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new lt(it.Ir)}checkEmpty(t){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,s){const o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new Wl(o,e,n,s);this.mutationQueue.push(u);for(const c of s)this.wr=this.wr.add(new it(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return S.resolve(u)}lookupMutationBatch(t,e){return S.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.br(n),o=s<0?0:s;return S.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new it(e,0),s=new it(e,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([n,s],u=>{const c=this.Sr(u.pr);o.push(c)}),S.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new lt(z);return e.forEach(s=>{const o=new it(s,0),u=new it(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([o,u],c=>{n=n.add(c.pr)})}),S.resolve(this.Dr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let o=n;M.isDocumentKey(o)||(o=o.child(""));const u=new it(new M(o),0);let c=new lt(z);return this.wr.forEachWhile(h=>{const f=h.key.path;return!!n.isPrefixOf(f)&&(f.length===s&&(c=c.add(h.pr)),!0)},u),S.resolve(this.Dr(c))}Dr(t){const e=[];return t.forEach(n=>{const s=this.Sr(n);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){Q(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let n=this.wr;return S.forEach(e.mutations,s=>{const o=new it(s.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=n})}Mn(t){}containsKey(t,e){const n=new it(e,0),s=this.wr.firstAfterOrEqual(n);return S.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,S.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Sc{constructor(t){this.vr=t,this.docs=function(){return new X(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),o=s?s.size:0,u=this.vr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return S.resolve(n?n.document.mutableCopy():gt.newInvalidDocument(e))}getEntries(t,e){let n=Ut();return e.forEach(s=>{const o=this.docs.get(s);n=n.insert(s,o?o.document.mutableCopy():gt.newInvalidDocument(s))}),S.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let o=Ut();const u=e.path,c=new M(u.child("")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:f,value:{document:m}}=h.getNext();if(!u.isPrefixOf(f.path))break;f.path.length>u.length+1||dl(hl(m),n)<=0||(s.has(m.key)||ir(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return S.resolve(o)}getAllFromCollectionGroup(t,e,n,s){L()}Fr(t,e){return S.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new Cc(this)}getSize(t){return S.resolve(this.size)}}class Cc extends Ic{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?e.push(this.ar.addEntry(t,s)):this.ar.removeEntry(n)}),S.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
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
 */class Dc{constructor(t){this.persistence=t,this.Mr=new De(e=>gi(e),_i),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Ii,this.targetCount=0,this.Lr=Re.Nn()}forEachTarget(t,e){return this.Mr.forEach((n,s)=>e(s)),S.resolve()}getLastRemoteSnapshotVersion(t){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return S.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Or&&(this.Or=e),S.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new Re(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,S.resolve()}updateTargetData(t,e){return this.qn(e),S.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,S.resolve()}removeTargets(t,e,n){let s=0;const o=[];return this.Mr.forEach((u,c)=>{c.sequenceNumber<=e&&n.get(c.targetId)===null&&(this.Mr.delete(u),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),S.waitFor(o).next(()=>s)}getTargetCount(t){return S.resolve(this.targetCount)}getTargetData(t,e){const n=this.Mr.get(e)||null;return S.resolve(n)}addMatchingKeys(t,e,n){return this.Nr.dr(e,n),S.resolve()}removeMatchingKeys(t,e,n){this.Nr.Rr(e,n);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(u=>{o.push(s.markPotentiallyOrphaned(t,u))}),S.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),S.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Nr.gr(e);return S.resolve(n)}containsKey(t,e){return S.resolve(this.Nr.containsKey(e))}}/**
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
 */class kc{constructor(t,e){this.Br={},this.overlays={},this.kr=new di(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new Dc(this),this.indexManager=new Ec,this.remoteDocumentCache=function(s){return new Sc(s)}(n=>this.referenceDelegate.Kr(n)),this.serializer=new yc(e),this.$r=new Rc(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Pc,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Br[t.toKey()];return n||(n=new Vc(e,this.referenceDelegate),this.Br[t.toKey()]=n),n}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,n){b("MemoryPersistence","Starting transaction:",t);const s=new Nc(this.kr.next());return this.referenceDelegate.Ur(),n(s).next(o=>this.referenceDelegate.Wr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Gr(t,e){return S.or(Object.values(this.Br).map(n=>()=>n.containsKey(t,e)))}}class Nc extends pl{constructor(t){super(),this.currentSequenceNumber=t}}class Ai{constructor(t){this.persistence=t,this.zr=new Ii,this.jr=null}static Hr(t){return new Ai(t)}get Jr(){if(this.jr)return this.jr;throw L()}addReference(t,e,n){return this.zr.addReference(n,e),this.Jr.delete(n.toString()),S.resolve()}removeReference(t,e,n){return this.zr.removeReference(n,e),this.Jr.add(n.toString()),S.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),S.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(s=>this.Jr.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Jr.add(o.toString()))}).next(()=>n.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Jr,n=>{const s=M.fromPath(n);return this.Yr(t,s).next(o=>{o||e.removeEntry(s,F.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(n=>{n?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return S.or([()=>S.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
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
 */class wi{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.qi=n,this.Qi=s}static Ki(t,e){let n=U(),s=U();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new wi(t,e.fromCache,n,s)}}/**
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
 */class bc{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class xc{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Wu()?8:ml(Hu())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,n,s){const o={result:null};return this.ji(t,e).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.Hi(t,e,s,n).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new bc;return this.Ji(t,e,u).next(c=>{if(o.result=c,this.Ui)return this.Yi(t,e,u,c.size)})}).next(()=>o.result)}Yi(t,e,n,s){return n.documentReadCount<this.Wi?(We()<=$t.DEBUG&&b("QueryEngine","SDK will not create cache indexes for query:",_e(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),S.resolve()):(We()<=$t.DEBUG&&b("QueryEngine","Query:",_e(e),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.Gi*s?(We()<=$t.DEBUG&&b("QueryEngine","The SDK decides to create cache indexes for query:",_e(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Dt(e))):S.resolve())}ji(t,e){if(Zs(e))return S.resolve(null);let n=Dt(e);return this.indexManager.getIndexType(t,n).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=ti(e,null,"F"),n=Dt(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(o=>{const u=U(...o);return this.zi.getDocuments(t,u).next(c=>this.indexManager.getMinOffset(t,n).next(h=>{const f=this.Zi(e,c);return this.Xi(e,f,u,h.readTime)?this.ji(t,ti(e,null,"F")):this.es(t,f,e,h)}))})))}Hi(t,e,n,s){return Zs(e)||s.isEqual(F.min())?S.resolve(null):this.zi.getDocuments(t,n).next(o=>{const u=this.Zi(e,o);return this.Xi(e,u,n,s)?S.resolve(null):(We()<=$t.DEBUG&&b("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),_e(e)),this.es(t,u,e,cl(s,-1)).next(c=>c))})}Zi(t,e){let n=new lt(Ho(t));return e.forEach((s,o)=>{ir(t,o)&&(n=n.add(o))}),n}Xi(t,e,n,s){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Ji(t,e,n){return We()<=$t.DEBUG&&b("QueryEngine","Using full collection scan to execute query:",_e(e)),this.zi.getDocumentsMatchingQuery(t,e,Ht.min(),n)}es(t,e,n,s){return this.zi.getDocumentsMatchingQuery(t,n,s).next(o=>(e.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
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
 */class Mc{constructor(t,e,n,s){this.persistence=t,this.ts=e,this.serializer=s,this.ns=new X(z),this.rs=new De(o=>gi(o),_i),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(n)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new wc(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function Lc(r,t,e,n){return new Mc(r,t,e,n)}async function _a(r,t){const e=O(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let s;return e.mutationQueue.getAllMutationBatches(n).next(o=>(s=o,e._s(t),e.mutationQueue.getAllMutationBatches(n))).next(o=>{const u=[],c=[];let h=U();for(const f of s){u.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}for(const f of o){c.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(n,h).next(f=>({us:f,removedBatchIds:u,addedBatchIds:c}))})})}function Fc(r,t){const e=O(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=t.batch.keys(),o=e.os.newChangeBuffer({trackRemovals:!0});return function(c,h,f,m){const A=f.batch,R=A.keys();let V=S.resolve();return R.forEach(k=>{V=V.next(()=>m.getEntry(h,k)).next(x=>{const D=f.docVersions.get(k);Q(D!==null),x.version.compareTo(D)<0&&(A.applyToRemoteDocument(x,f),x.isValidDocument()&&(x.setReadTime(f.commitVersion),m.addEntry(x)))})}),V.next(()=>c.mutationQueue.removeMutationBatch(h,A))}(e,n,t,o).next(()=>o.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(c){let h=U();for(let f=0;f<c.mutationResults.length;++f)c.mutationResults[f].transformResults.length>0&&(h=h.add(c.batch.mutations[f].key));return h}(t))).next(()=>e.localDocuments.getDocuments(n,s))})}function ya(r){const t=O(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function Oc(r,t){const e=O(r),n=t.snapshotVersion;let s=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=e.os.newChangeBuffer({trackRemovals:!0});s=e.ns;const c=[];t.targetChanges.forEach((m,A)=>{const R=s.get(A);if(!R)return;c.push(e.Qr.removeMatchingKeys(o,m.removedDocuments,A).next(()=>e.Qr.addMatchingKeys(o,m.addedDocuments,A)));let V=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(A)!==null?V=V.withResumeToken(yt.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):m.resumeToken.approximateByteSize()>0&&(V=V.withResumeToken(m.resumeToken,n)),s=s.insert(A,V),function(x,D,q){return x.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(R,V,m)&&c.push(e.Qr.updateTargetData(o,V))});let h=Ut(),f=U();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))}),c.push(Uc(o,u,t.documentUpdates).next(m=>{h=m.cs,f=m.ls})),!n.isEqual(F.min())){const m=e.Qr.getLastRemoteSnapshotVersion(o).next(A=>e.Qr.setTargetsMetadata(o,o.currentSequenceNumber,n));c.push(m)}return S.waitFor(c).next(()=>u.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(e.ns=s,o))}function Uc(r,t,e){let n=U(),s=U();return e.forEach(o=>n=n.add(o)),t.getEntries(r,n).next(o=>{let u=Ut();return e.forEach((c,h)=>{const f=o.get(c);h.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(c)),h.isNoDocument()&&h.version.isEqual(F.min())?(t.removeEntry(c,h.readTime),u=u.insert(c,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),u=u.insert(c,h)):b("LocalStore","Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",h.version)}),{cs:u,ls:s}})}function qc(r,t){const e=O(r);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function Bc(r,t){const e=O(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return e.Qr.getTargetData(n,t).next(o=>o?(s=o,S.resolve(s)):e.Qr.allocateTargetId(n).next(u=>(s=new Kt(t,u,"TargetPurposeListen",n.currentSequenceNumber),e.Qr.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=e.ns.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.ns=e.ns.insert(n.targetId,n),e.rs.set(t,n.targetId)),n})}async function si(r,t,e){const n=O(r),s=n.ns.get(t),o=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",o,u=>n.persistence.referenceDelegate.removeTarget(u,s))}catch(u){if(!fn(u))throw u;b("LocalStore",`Failed to update sequence numbers for target ${t}: ${u}`)}n.ns=n.ns.remove(t),n.rs.delete(s.target)}function co(r,t,e){const n=O(r);let s=F.min(),o=U();return n.persistence.runTransaction("Execute query","readwrite",u=>function(h,f,m){const A=O(h),R=A.rs.get(m);return R!==void 0?S.resolve(A.ns.get(R)):A.Qr.getTargetData(f,m)}(n,u,Dt(t)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,n.Qr.getMatchingKeysForTargetId(u,c.targetId).next(h=>{o=h})}).next(()=>n.ts.getDocumentsMatchingQuery(u,t,e?s:F.min(),e?o:U())).next(c=>(jc(n,Nl(t),c),{documents:c,hs:o})))}function jc(r,t,e){let n=r.ss.get(t)||F.min();e.forEach((s,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),r.ss.set(t,n)}class ho{constructor(){this.activeTargetIds=Ol()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class zc{constructor(){this.no=new ho,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,n){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new ho,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Gc{io(t){}shutdown(){}}/**
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
 */class fo{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){b("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){b("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let jn=null;function $r(){return jn===null?jn=function(){return 268435456+Math.round(2147483648*Math.random())}():jn++,"0x"+jn.toString(16)}/**
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
 */const $c={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Kc{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}Ao(t){this.Ro=t}onMessage(t){this.Vo=t}close(){this.ho()}send(t){this.lo(t)}mo(){this.Io()}fo(){this.Eo()}po(t){this.Ro(t)}yo(t){this.Vo(t)}}/**
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
 */const pt="WebChannelConnection";class Qc extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.wo=n+"://"+e.host,this.So=`projects/${s}/databases/${o}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Do(){return!1}Co(e,n,s,o,u){const c=$r(),h=this.vo(e,n.toUriEncodedString());b("RestConnection",`Sending RPC '${e}' ${c}:`,h,s);const f={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(f,o,u),this.Mo(e,h,f,s).then(m=>(b("RestConnection",`Received RPC '${e}' ${c}: `,m),m),m=>{throw ve("RestConnection",`RPC '${e}' ${c} failed with error: `,m,"url: ",h,"request:",s),m})}xo(e,n,s,o,u,c){return this.Co(e,n,s,o,u)}Fo(e,n,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Se}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}vo(e,n){const s=$c[e];return`${this.wo}/v1/${n}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Mo(t,e,n,s){const o=$r();return new Promise((u,c)=>{const h=new Do;h.setWithCredentials(!0),h.listenOnce(No.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case zn.NO_ERROR:const m=h.getResponseJson();b(pt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(m)),u(m);break;case zn.TIMEOUT:b(pt,`RPC '${t}' ${o} timed out`),c(new N(P.DEADLINE_EXCEEDED,"Request time out"));break;case zn.HTTP_ERROR:const A=h.getStatus();if(b(pt,`RPC '${t}' ${o} failed with status:`,A,"response text:",h.getResponseText()),A>0){let R=h.getResponseJson();Array.isArray(R)&&(R=R[0]);const V=R==null?void 0:R.error;if(V&&V.status&&V.message){const k=function(D){const q=D.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(q)>=0?q:P.UNKNOWN}(V.status);c(new N(k,V.message))}else c(new N(P.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new N(P.UNAVAILABLE,"Connection failed."));break;default:L()}}finally{b(pt,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(s);b(pt,`RPC '${t}' ${o} sending request:`,s),h.send(e,"POST",f,n,15)})}Oo(t,e,n){const s=$r(),o=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=Mo(),c=xo(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.xmlHttpFactory=new ko({})),this.Fo(h.initMessageHeaders,e,n),h.encodeInitMessageHeaders=!0;const m=o.join("");b(pt,`Creating RPC '${t}' stream ${s}: ${m}`,h);const A=u.createWebChannel(m,h);let R=!1,V=!1;const k=new Kc({lo:D=>{V?b(pt,`Not sending because RPC '${t}' stream ${s} is closed:`,D):(R||(b(pt,`Opening RPC '${t}' stream ${s} transport.`),A.open(),R=!0),b(pt,`RPC '${t}' stream ${s} sending:`,D),A.send(D))},ho:()=>A.close()}),x=(D,q,G)=>{D.listen(q,$=>{try{G($)}catch(J){setTimeout(()=>{throw J},0)}})};return x(A,He.EventType.OPEN,()=>{V||(b(pt,`RPC '${t}' stream ${s} transport opened.`),k.mo())}),x(A,He.EventType.CLOSE,()=>{V||(V=!0,b(pt,`RPC '${t}' stream ${s} transport closed`),k.po())}),x(A,He.EventType.ERROR,D=>{V||(V=!0,ve(pt,`RPC '${t}' stream ${s} transport errored:`,D),k.po(new N(P.UNAVAILABLE,"The operation could not be completed")))}),x(A,He.EventType.MESSAGE,D=>{var q;if(!V){const G=D.data[0];Q(!!G);const $=G,J=$.error||((q=$[0])===null||q===void 0?void 0:q.error);if(J){b(pt,`RPC '${t}' stream ${s} received error:`,J);const Pt=J.status;let nt=function(_){const y=Z[_];if(y!==void 0)return aa(y)}(Pt),E=J.message;nt===void 0&&(nt=P.INTERNAL,E="Unknown error status: "+Pt+" with message "+J.message),V=!0,k.po(new N(nt,E)),A.close()}else b(pt,`RPC '${t}' stream ${s} received:`,G),k.yo(G)}}),x(c,bo.STAT_EVENT,D=>{D.stat===Wr.PROXY?b(pt,`RPC '${t}' stream ${s} detected buffering proxy`):D.stat===Wr.NOPROXY&&b(pt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.fo()},0),k}}function Kr(){return typeof document<"u"?document:null}/**
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
 */function ur(r){return new ic(r,!0)}/**
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
 */class Ta{constructor(t,e,n=1e3,s=1.5,o=6e4){this.oi=t,this.timerId=e,this.No=n,this.Lo=s,this.Bo=o,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const e=Math.floor(this.ko+this.Uo()),n=Math.max(0,Date.now()-this.Qo),s=Math.max(0,e-n);s>0&&b("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),t())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class Ea{constructor(t,e,n,s,o,u,c,h){this.oi=t,this.Go=n,this.zo=s,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new Ta(t,e)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(t){this.s_(),this.stream.send(t)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(t,e){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,t!==4?this.Yo.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(Ot(e.toString()),Ot("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ao(e)}__(){}auth(){this.state=1;const t=this.a_(this.jo),e=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.jo===e&&this.u_(n,s)},n=>{t(()=>{const s=new N(P.UNKNOWN,"Fetching auth token failed: "+n.message);return this.c_(s)})})}u_(t,e){const n=this.a_(this.jo);this.stream=this.l_(t,e),this.stream.Po(()=>{n(()=>this.listener.Po())}),this.stream.To(()=>{n(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{n(()=>this.c_(s))}),this.stream.onMessage(s=>{n(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(t){return b("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}a_(t){return e=>{this.oi.enqueueAndForget(()=>this.jo===t?e():(b("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Wc extends Ea{constructor(t,e,n,s,o,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,u),this.serializer=o}l_(t,e){return this.connection.Oo("Listen",t,e)}onMessage(t){this.Yo.reset();const e=ac(this.serializer,t),n=function(o){if(!("targetChange"in o))return F.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?F.min():u.readTime?kt(u.readTime):F.min()}(t);return this.listener.h_(e,n)}P_(t){const e={};e.database=ii(this.serializer),e.addTarget=function(o,u){let c;const h=u.target;if(c=Jr(h)?{documents:cc(o,h)}:{query:hc(o,h)._t},c.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){c.resumeToken=ca(o,u.resumeToken);const f=ei(o,u.expectedCount);f!==null&&(c.expectedCount=f)}else if(u.snapshotVersion.compareTo(F.min())>0){c.readTime=Yn(o,u.snapshotVersion.toTimestamp());const f=ei(o,u.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,t);const n=fc(this.serializer,t);n&&(e.labels=n),this.i_(e)}I_(t){const e={};e.database=ii(this.serializer),e.removeTarget=t,this.i_(e)}}class Hc extends Ea{constructor(t,e,n,s,o,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,u),this.serializer=o,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(t,e){return this.connection.Oo("Write",t,e)}onMessage(t){if(Q(!!t.streamToken),this.lastStreamToken=t.streamToken,this.T_){this.Yo.reset();const e=lc(t.writeResults,t.commitTime),n=kt(t.commitTime);return this.listener.A_(n,e)}return Q(!t.writeResults||t.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const t={};t.database=ii(this.serializer),this.i_(t)}d_(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>uc(this.serializer,n))};this.i_(e)}}/**
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
 */class Xc extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.")}Co(t,e,n,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.Co(t,ni(e,n),s,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(P.UNKNOWN,o.toString())})}xo(t,e,n,s,o){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,c])=>this.connection.xo(t,ni(e,n),s,u,c,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new N(P.UNKNOWN,u.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class Yc{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(t){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,t==="Online"&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Ot(e),this.y_=!1):b("OnlineStateTracker",e)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class Jc{constructor(t,e,n,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=o,this.O_.io(u=>{n.enqueueAndForget(async()=>{ce(this)&&(b("RemoteStore","Restarting streams for network reachability change."),await async function(h){const f=O(h);f.M_.add(4),await gn(f),f.N_.set("Unknown"),f.M_.delete(4),await lr(f)}(this))})}),this.N_=new Yc(n,s)}}async function lr(r){if(ce(r))for(const t of r.x_)await t(!0)}async function gn(r){for(const t of r.x_)await t(!1)}function va(r,t){const e=O(r);e.F_.has(t.targetId)||(e.F_.set(t.targetId,t),Si(e)?Vi(e):ke(e).Xo()&&Pi(e,t))}function Ri(r,t){const e=O(r),n=ke(e);e.F_.delete(t),n.Xo()&&Ia(e,t),e.F_.size===0&&(n.Xo()?n.n_():ce(e)&&e.N_.set("Unknown"))}function Pi(r,t){if(r.L_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(F.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}ke(r).P_(t)}function Ia(r,t){r.L_.xe(t),ke(r).I_(t)}function Vi(r){r.L_=new tc({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>r.F_.get(t)||null,tt:()=>r.datastore.serializer.databaseId}),ke(r).start(),r.N_.w_()}function Si(r){return ce(r)&&!ke(r).Zo()&&r.F_.size>0}function ce(r){return O(r).M_.size===0}function Aa(r){r.L_=void 0}async function Zc(r){r.N_.set("Online")}async function th(r){r.F_.forEach((t,e)=>{Pi(r,t)})}async function eh(r,t){Aa(r),Si(r)?(r.N_.D_(t),Vi(r)):r.N_.set("Unknown")}async function nh(r,t,e){if(r.N_.set("Online"),t instanceof la&&t.state===2&&t.cause)try{await async function(s,o){const u=o.cause;for(const c of o.targetIds)s.F_.has(c)&&(await s.remoteSyncer.rejectListen(c,u),s.F_.delete(c),s.L_.removeTarget(c))}(r,t)}catch(n){b("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Jn(r,n)}else if(t instanceof Kn?r.L_.Ke(t):t instanceof ua?r.L_.He(t):r.L_.We(t),!e.isEqual(F.min()))try{const n=await ya(r.localStore);e.compareTo(n)>=0&&await function(o,u){const c=o.L_.rt(u);return c.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.F_.get(f);m&&o.F_.set(f,m.withResumeToken(h.resumeToken,u))}}),c.targetMismatches.forEach((h,f)=>{const m=o.F_.get(h);if(!m)return;o.F_.set(h,m.withResumeToken(yt.EMPTY_BYTE_STRING,m.snapshotVersion)),Ia(o,h);const A=new Kt(m.target,h,f,m.sequenceNumber);Pi(o,A)}),o.remoteSyncer.applyRemoteEvent(c)}(r,e)}catch(n){b("RemoteStore","Failed to raise snapshot:",n),await Jn(r,n)}}async function Jn(r,t,e){if(!fn(t))throw t;r.M_.add(1),await gn(r),r.N_.set("Offline"),e||(e=()=>ya(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{b("RemoteStore","Retrying IndexedDB access"),await e(),r.M_.delete(1),await lr(r)})}function wa(r,t){return t().catch(e=>Jn(r,e,t))}async function cr(r){const t=O(r),e=Yt(t);let n=t.v_.length>0?t.v_[t.v_.length-1].batchId:-1;for(;rh(t);)try{const s=await qc(t.localStore,n);if(s===null){t.v_.length===0&&e.n_();break}n=s.batchId,ih(t,s)}catch(s){await Jn(t,s)}Ra(t)&&Pa(t)}function rh(r){return ce(r)&&r.v_.length<10}function ih(r,t){r.v_.push(t);const e=Yt(r);e.Xo()&&e.E_&&e.d_(t.mutations)}function Ra(r){return ce(r)&&!Yt(r).Zo()&&r.v_.length>0}function Pa(r){Yt(r).start()}async function sh(r){Yt(r).V_()}async function oh(r){const t=Yt(r);for(const e of r.v_)t.d_(e.mutations)}async function ah(r,t,e){const n=r.v_.shift(),s=Ti.from(n,t,e);await wa(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await cr(r)}async function uh(r,t){t&&Yt(r).E_&&await async function(n,s){if(function(u){return Yl(u)&&u!==P.ABORTED}(s.code)){const o=n.v_.shift();Yt(n).t_(),await wa(n,()=>n.remoteSyncer.rejectFailedWrite(o.batchId,s)),await cr(n)}}(r,t),Ra(r)&&Pa(r)}async function po(r,t){const e=O(r);e.asyncQueue.verifyOperationInProgress(),b("RemoteStore","RemoteStore received new credentials");const n=ce(e);e.M_.add(3),await gn(e),n&&e.N_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.M_.delete(3),await lr(e)}async function lh(r,t){const e=O(r);t?(e.M_.delete(2),await lr(e)):t||(e.M_.add(2),await gn(e),e.N_.set("Unknown"))}function ke(r){return r.B_||(r.B_=function(e,n,s){const o=O(e);return o.f_(),new Wc(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(r.datastore,r.asyncQueue,{Po:Zc.bind(null,r),To:th.bind(null,r),Ao:eh.bind(null,r),h_:nh.bind(null,r)}),r.x_.push(async t=>{t?(r.B_.t_(),Si(r)?Vi(r):r.N_.set("Unknown")):(await r.B_.stop(),Aa(r))})),r.B_}function Yt(r){return r.k_||(r.k_=function(e,n,s){const o=O(e);return o.f_(),new Hc(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(r.datastore,r.asyncQueue,{Po:()=>Promise.resolve(),To:sh.bind(null,r),Ao:uh.bind(null,r),R_:oh.bind(null,r),A_:ah.bind(null,r)}),r.x_.push(async t=>{t?(r.k_.t_(),await cr(r)):(await r.k_.stop(),r.v_.length>0&&(b("RemoteStore",`Stopping write stream with ${r.v_.length} pending writes`),r.v_=[]))})),r.k_}/**
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
 */class Ci{constructor(t,e,n,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=o,this.deferred=new Qt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,s,o){const u=Date.now()+n,c=new Ci(t,e,u,s,o);return c.start(n),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Di(r,t){if(Ot("AsyncQueue",`${t}: ${r}`),fn(r))return new N(P.UNAVAILABLE,`${t}: ${r}`);throw r}/**
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
 */class Ee{constructor(t){this.comparator=t?(e,n)=>t(e,n)||M.comparator(e.key,n.key):(e,n)=>M.comparator(e.key,n.key),this.keyedMap=Xe(),this.sortedSet=new X(this.comparator)}static emptySet(t){return new Ee(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ee)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=n.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new Ee;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
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
 */class mo{constructor(){this.q_=new X(M.comparator)}track(t){const e=t.doc.key,n=this.q_.get(e);n?t.type!==0&&n.type===3?this.q_=this.q_.insert(e,t):t.type===3&&n.type!==1?this.q_=this.q_.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.q_=this.q_.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.q_=this.q_.remove(e):t.type===1&&n.type===2?this.q_=this.q_.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):L():this.q_=this.q_.insert(e,t)}Q_(){const t=[];return this.q_.inorderTraversal((e,n)=>{t.push(n)}),t}}class Pe{constructor(t,e,n,s,o,u,c,h,f){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,n,s,o){const u=[];return e.forEach(c=>{u.push({type:0,doc:c})}),new Pe(t,e,Ee.emptySet(e),u,n,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&rr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
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
 */class ch{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(t=>t.G_())}}class hh{constructor(){this.queries=new De(t=>Wo(t),rr),this.onlineState="Unknown",this.z_=new Set}}async function Va(r,t){const e=O(r);let n=3;const s=t.query;let o=e.queries.get(s);o?!o.W_()&&t.G_()&&(n=2):(o=new ch,n=t.G_()?0:1);try{switch(n){case 0:o.K_=await e.onListen(s,!0);break;case 1:o.K_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(u){const c=Di(u,`Initialization of query '${_e(t.query)}' failed`);return void t.onError(c)}e.queries.set(s,o),o.U_.push(t),t.j_(e.onlineState),o.K_&&t.H_(o.K_)&&ki(e)}async function Sa(r,t){const e=O(r),n=t.query;let s=3;const o=e.queries.get(n);if(o){const u=o.U_.indexOf(t);u>=0&&(o.U_.splice(u,1),o.U_.length===0?s=t.G_()?0:1:!o.W_()&&t.G_()&&(s=2))}switch(s){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function dh(r,t){const e=O(r);let n=!1;for(const s of t){const o=s.query,u=e.queries.get(o);if(u){for(const c of u.U_)c.H_(s)&&(n=!0);u.K_=s}}n&&ki(e)}function fh(r,t,e){const n=O(r),s=n.queries.get(t);if(s)for(const o of s.U_)o.onError(e);n.queries.delete(t)}function ki(r){r.z_.forEach(t=>{t.next()})}var oi,go;(go=oi||(oi={})).J_="default",go.Cache="cache";class Ca{constructor(t,e,n){this.query=t,this.Y_=e,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=n||{}}H_(t){if(!this.options.includeMetadataChanges){const n=[];for(const s of t.docChanges)s.type!==3&&n.push(s);t=new Pe(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Z_?this.ea(t)&&(this.Y_.next(t),e=!0):this.ta(t,this.onlineState)&&(this.na(t),e=!0),this.X_=t,e}onError(t){this.Y_.error(t)}j_(t){this.onlineState=t;let e=!1;return this.X_&&!this.Z_&&this.ta(this.X_,t)&&(this.na(this.X_),e=!0),e}ta(t,e){if(!t.fromCache||!this.G_())return!0;const n=e!=="Offline";return(!this.options.ra||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ea(t){if(t.docChanges.length>0)return!0;const e=this.X_&&this.X_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}na(t){t=Pe.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Z_=!0,this.Y_.next(t)}G_(){return this.options.source!==oi.Cache}}/**
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
 */class Da{constructor(t){this.key=t}}class ka{constructor(t){this.key=t}}class ph{constructor(t,e){this.query=t,this.la=e,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=U(),this.mutatedKeys=U(),this.Ia=Ho(t),this.Ta=new Ee(this.Ia)}get Ea(){return this.la}da(t,e){const n=e?e.Aa:new mo,s=e?e.Ta:this.Ta;let o=e?e.mutatedKeys:this.mutatedKeys,u=s,c=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((m,A)=>{const R=s.get(m),V=ir(this.query,A)?A:null,k=!!R&&this.mutatedKeys.has(R.key),x=!!V&&(V.hasLocalMutations||this.mutatedKeys.has(V.key)&&V.hasCommittedMutations);let D=!1;R&&V?R.data.isEqual(V.data)?k!==x&&(n.track({type:3,doc:V}),D=!0):this.Ra(R,V)||(n.track({type:2,doc:V}),D=!0,(h&&this.Ia(V,h)>0||f&&this.Ia(V,f)<0)&&(c=!0)):!R&&V?(n.track({type:0,doc:V}),D=!0):R&&!V&&(n.track({type:1,doc:R}),D=!0,(h||f)&&(c=!0)),D&&(V?(u=u.add(V),o=x?o.add(m):o.delete(m)):(u=u.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const m=this.query.limitType==="F"?u.last():u.first();u=u.delete(m.key),o=o.delete(m.key),n.track({type:1,doc:m})}return{Ta:u,Aa:n,Xi:c,mutatedKeys:o}}Ra(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,s){const o=this.Ta;this.Ta=t.Ta,this.mutatedKeys=t.mutatedKeys;const u=t.Aa.Q_();u.sort((m,A)=>function(V,k){const x=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L()}};return x(V)-x(k)}(m.type,A.type)||this.Ia(m.doc,A.doc)),this.Va(n),s=s!=null&&s;const c=e&&!s?this.ma():[],h=this.Pa.size===0&&this.current&&!s?1:0,f=h!==this.ha;return this.ha=h,u.length!==0||f?{snapshot:new Pe(this.query,t.Ta,o,u,t.mutatedKeys,h===0,f,!1,!!n&&n.resumeToken.approximateByteSize()>0),fa:c}:{fa:c}}j_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new mo,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(t){return!this.la.has(t)&&!!this.Ta.has(t)&&!this.Ta.get(t).hasLocalMutations}Va(t){t&&(t.addedDocuments.forEach(e=>this.la=this.la.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.la=this.la.delete(e)),this.current=t.current)}ma(){if(!this.current)return[];const t=this.Pa;this.Pa=U(),this.Ta.forEach(n=>{this.ga(n.key)&&(this.Pa=this.Pa.add(n.key))});const e=[];return t.forEach(n=>{this.Pa.has(n)||e.push(new ka(n))}),this.Pa.forEach(n=>{t.has(n)||e.push(new Da(n))}),e}pa(t){this.la=t.hs,this.Pa=U();const e=this.da(t.documents);return this.applyChanges(e,!0)}ya(){return Pe.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class mh{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class gh{constructor(t){this.key=t,this.wa=!1}}class _h{constructor(t,e,n,s,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.Sa={},this.ba=new De(c=>Wo(c),rr),this.Da=new Map,this.Ca=new Set,this.va=new X(M.comparator),this.Fa=new Map,this.Ma=new Ii,this.xa={},this.Oa=new Map,this.Na=Re.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function yh(r,t,e=!0){const n=Fa(r);let s;const o=n.ba.get(t);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.ya()):s=await Na(n,t,e,!0),s}async function Th(r,t){const e=Fa(r);await Na(e,t,!0,!1)}async function Na(r,t,e,n){const s=await Bc(r.localStore,Dt(t)),o=s.targetId,u=e?r.sharedClientState.addLocalQueryTarget(o):"not-current";let c;return n&&(c=await Eh(r,t,o,u==="current",s.resumeToken)),r.isPrimaryClient&&e&&va(r.remoteStore,s),c}async function Eh(r,t,e,n,s){r.Ba=(A,R,V)=>async function(x,D,q,G){let $=D.view.da(q);$.Xi&&($=await co(x.localStore,D.query,!1).then(({documents:E})=>D.view.da(E,$)));const J=G&&G.targetChanges.get(D.targetId),Pt=G&&G.targetMismatches.get(D.targetId)!=null,nt=D.view.applyChanges($,x.isPrimaryClient,J,Pt);return yo(x,D.targetId,nt.fa),nt.snapshot}(r,A,R,V);const o=await co(r.localStore,t,!0),u=new ph(t,o.hs),c=u.da(o.documents),h=mn.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",s),f=u.applyChanges(c,r.isPrimaryClient,h);yo(r,e,f.fa);const m=new mh(t,e,u);return r.ba.set(t,m),r.Da.has(e)?r.Da.get(e).push(t):r.Da.set(e,[t]),f.snapshot}async function vh(r,t,e){const n=O(r),s=n.ba.get(t),o=n.Da.get(s.targetId);if(o.length>1)return n.Da.set(s.targetId,o.filter(u=>!rr(u,t))),void n.ba.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await si(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),e&&Ri(n.remoteStore,s.targetId),ai(n,s.targetId)}).catch(dn)):(ai(n,s.targetId),await si(n.localStore,s.targetId,!0))}async function Ih(r,t){const e=O(r),n=e.ba.get(t),s=e.Da.get(n.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),Ri(e.remoteStore,n.targetId))}async function Ah(r,t,e){const n=Dh(r);try{const s=await function(u,c){const h=O(u),f=rt.now(),m=c.reduce((V,k)=>V.add(k.key),U());let A,R;return h.persistence.runTransaction("Locally write mutations","readwrite",V=>{let k=Ut(),x=U();return h.os.getEntries(V,m).next(D=>{k=D,k.forEach((q,G)=>{G.isValidDocument()||(x=x.add(q))})}).next(()=>h.localDocuments.getOverlayedDocuments(V,k)).next(D=>{A=D;const q=[];for(const G of c){const $=Kl(G,A.get(G.key).overlayedDocument);$!=null&&q.push(new Zt(G.key,$,qo($.value.mapValue),wt.exists(!0)))}return h.mutationQueue.addMutationBatch(V,f,q,c)}).next(D=>{R=D;const q=D.applyToLocalDocumentSet(A,x);return h.documentOverlayCache.saveOverlays(V,D.batchId,q)})}).then(()=>({batchId:R.batchId,changes:Yo(A)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(s.batchId),function(u,c,h){let f=u.xa[u.currentUser.toKey()];f||(f=new X(z)),f=f.insert(c,h),u.xa[u.currentUser.toKey()]=f}(n,s.batchId,e),await _n(n,s.changes),await cr(n.remoteStore)}catch(s){const o=Di(s,"Failed to persist write");e.reject(o)}}async function ba(r,t){const e=O(r);try{const n=await Oc(e.localStore,t);t.targetChanges.forEach((s,o)=>{const u=e.Fa.get(o);u&&(Q(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?u.wa=!0:s.modifiedDocuments.size>0?Q(u.wa):s.removedDocuments.size>0&&(Q(u.wa),u.wa=!1))}),await _n(e,n,t)}catch(n){await dn(n)}}function _o(r,t,e){const n=O(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const s=[];n.ba.forEach((o,u)=>{const c=u.view.j_(t);c.snapshot&&s.push(c.snapshot)}),function(u,c){const h=O(u);h.onlineState=c;let f=!1;h.queries.forEach((m,A)=>{for(const R of A.U_)R.j_(c)&&(f=!0)}),f&&ki(h)}(n.eventManager,t),s.length&&n.Sa.h_(s),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function wh(r,t,e){const n=O(r);n.sharedClientState.updateQueryState(t,"rejected",e);const s=n.Fa.get(t),o=s&&s.key;if(o){let u=new X(M.comparator);u=u.insert(o,gt.newNoDocument(o,F.min()));const c=U().add(o),h=new ar(F.min(),new Map,new X(z),u,c);await ba(n,h),n.va=n.va.remove(o),n.Fa.delete(t),Ni(n)}else await si(n.localStore,t,!1).then(()=>ai(n,t,e)).catch(dn)}async function Rh(r,t){const e=O(r),n=t.batch.batchId;try{const s=await Fc(e.localStore,t);Ma(e,n,null),xa(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await _n(e,s)}catch(s){await dn(s)}}async function Ph(r,t,e){const n=O(r);try{const s=await function(u,c){const h=O(u);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let m;return h.mutationQueue.lookupMutationBatch(f,c).next(A=>(Q(A!==null),m=A.keys(),h.mutationQueue.removeMutationBatch(f,A))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,m,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,m)).next(()=>h.localDocuments.getDocuments(f,m))})}(n.localStore,t);Ma(n,t,e),xa(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await _n(n,s)}catch(s){await dn(s)}}function xa(r,t){(r.Oa.get(t)||[]).forEach(e=>{e.resolve()}),r.Oa.delete(t)}function Ma(r,t,e){const n=O(r);let s=n.xa[n.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),n.xa[n.currentUser.toKey()]=s}}function ai(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Da.get(t))r.ba.delete(n),e&&r.Sa.ka(n,e);r.Da.delete(t),r.isPrimaryClient&&r.Ma.Vr(t).forEach(n=>{r.Ma.containsKey(n)||La(r,n)})}function La(r,t){r.Ca.delete(t.path.canonicalString());const e=r.va.get(t);e!==null&&(Ri(r.remoteStore,e),r.va=r.va.remove(t),r.Fa.delete(e),Ni(r))}function yo(r,t,e){for(const n of e)n instanceof Da?(r.Ma.addReference(n.key,t),Vh(r,n)):n instanceof ka?(b("SyncEngine","Document no longer in limbo: "+n.key),r.Ma.removeReference(n.key,t),r.Ma.containsKey(n.key)||La(r,n.key)):L()}function Vh(r,t){const e=t.key,n=e.path.canonicalString();r.va.get(e)||r.Ca.has(n)||(b("SyncEngine","New document in limbo: "+e),r.Ca.add(n),Ni(r))}function Ni(r){for(;r.Ca.size>0&&r.va.size<r.maxConcurrentLimboResolutions;){const t=r.Ca.values().next().value;r.Ca.delete(t);const e=new M(H.fromString(t)),n=r.Na.next();r.Fa.set(n,new gh(e)),r.va=r.va.insert(e,n),va(r.remoteStore,new Kt(Dt(nr(e.path)),n,"TargetPurposeLimboResolution",di.oe))}}async function _n(r,t,e){const n=O(r),s=[],o=[],u=[];n.ba.isEmpty()||(n.ba.forEach((c,h)=>{u.push(n.Ba(h,t,e).then(f=>{if((f||e)&&n.isPrimaryClient){const m=f&&!f.fromCache;n.sharedClientState.updateQueryState(h.targetId,m?"current":"not-current")}if(f){s.push(f);const m=wi.Ki(h.targetId,f);o.push(m)}}))}),await Promise.all(u),n.Sa.h_(s),await async function(h,f){const m=O(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>S.forEach(f,R=>S.forEach(R.qi,V=>m.persistence.referenceDelegate.addReference(A,R.targetId,V)).next(()=>S.forEach(R.Qi,V=>m.persistence.referenceDelegate.removeReference(A,R.targetId,V)))))}catch(A){if(!fn(A))throw A;b("LocalStore","Failed to update sequence numbers: "+A)}for(const A of f){const R=A.targetId;if(!A.fromCache){const V=m.ns.get(R),k=V.snapshotVersion,x=V.withLastLimboFreeSnapshotVersion(k);m.ns=m.ns.insert(R,x)}}}(n.localStore,o))}async function Sh(r,t){const e=O(r);if(!e.currentUser.isEqual(t)){b("SyncEngine","User change. New user:",t.toKey());const n=await _a(e.localStore,t);e.currentUser=t,function(o,u){o.Oa.forEach(c=>{c.forEach(h=>{h.reject(new N(P.CANCELLED,u))})}),o.Oa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await _n(e,n.us)}}function Ch(r,t){const e=O(r),n=e.Fa.get(t);if(n&&n.wa)return U().add(n.key);{let s=U();const o=e.Da.get(t);if(!o)return s;for(const u of o){const c=e.ba.get(u);s=s.unionWith(c.view.Ea)}return s}}function Fa(r){const t=O(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=ba.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ch.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=wh.bind(null,t),t.Sa.h_=dh.bind(null,t.eventManager),t.Sa.ka=fh.bind(null,t.eventManager),t}function Dh(r){const t=O(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Rh.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Ph.bind(null,t),t}class To{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=ur(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Lc(this.persistence,new xc,t.initialUser,this.serializer)}createPersistence(t){return new kc(Ai.Hr,this.serializer)}createSharedClientState(t){return new zc}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class kh{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>_o(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Sh.bind(null,this.syncEngine),await lh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new hh}()}createDatastore(t){const e=ur(t.databaseInfo.databaseId),n=function(o){return new Qc(o)}(t.databaseInfo);return function(o,u,c,h){return new Xc(o,u,c,h)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,s,o,u,c){return new Jc(n,s,o,u,c)}(this.localStore,this.datastore,t.asyncQueue,e=>_o(this.syncEngine,e,0),function(){return fo.D()?new fo:new Gc}())}createSyncEngine(t,e){return function(s,o,u,c,h,f,m){const A=new _h(s,o,u,c,h,f);return m&&(A.La=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(n){const s=O(n);b("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await gn(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
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
 */class Oa{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ka(this.observer.next,t)}error(t){this.observer.error?this.Ka(this.observer.error,t):Ot("Uncaught Error in snapshot listener:",t.toString())}$a(){this.muted=!0}Ka(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class Nh{constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=mt.UNAUTHENTICATED,this.clientId=Fo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async o=>{b("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(n,o=>(b("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Qt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Di(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Qr(r,t){r.asyncQueue.verifyOperationInProgress(),b("FirestoreClient","Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await _a(t.localStore,s),n=s)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function Eo(r,t){r.asyncQueue.verifyOperationInProgress();const e=await xh(r);b("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>po(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>po(t.remoteStore,s)),r._onlineComponents=t}function bh(r){return r.name==="FirebaseError"?r.code===P.FAILED_PRECONDITION||r.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}async function xh(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){b("FirestoreClient","Using user provided OfflineComponentProvider");try{await Qr(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!bh(e))throw e;ve("Error using user provided cache. Falling back to memory cache: "+e),await Qr(r,new To)}}else b("FirestoreClient","Using default OfflineComponentProvider"),await Qr(r,new To);return r._offlineComponents}async function Ua(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(b("FirestoreClient","Using user provided OnlineComponentProvider"),await Eo(r,r._uninitializedComponentsProvider._online)):(b("FirestoreClient","Using default OnlineComponentProvider"),await Eo(r,new kh))),r._onlineComponents}function Mh(r){return Ua(r).then(t=>t.syncEngine)}async function ui(r){const t=await Ua(r),e=t.eventManager;return e.onListen=yh.bind(null,t.syncEngine),e.onUnlisten=vh.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Th.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Ih.bind(null,t.syncEngine),e}function Lh(r,t,e={}){const n=new Qt;return r.asyncQueue.enqueueAndForget(async()=>function(o,u,c,h,f){const m=new Oa({next:R=>{u.enqueueAndForget(()=>Sa(o,A));const V=R.docs.has(c);!V&&R.fromCache?f.reject(new N(P.UNAVAILABLE,"Failed to get document because the client is offline.")):V&&R.fromCache&&h&&h.source==="server"?f.reject(new N(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(R)},error:R=>f.reject(R)}),A=new Ca(nr(c.path),m,{includeMetadataChanges:!0,ra:!0});return Va(o,A)}(await ui(r),r.asyncQueue,t,e,n)),n.promise}/**
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
 */function qa(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
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
 */const vo=new Map;/**
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
 */function Ba(r,t,e){if(!e)throw new N(P.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function Fh(r,t,e,n){if(t===!0&&n===!0)throw new N(P.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function Io(r){if(!M.isDocumentKey(r))throw new N(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Ao(r){if(M.isDocumentKey(r))throw new N(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function hr(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":L()}function Rt(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new N(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=hr(r);throw new N(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
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
 */class wo{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new N(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new N(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Fh("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=qa((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class dr{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wo({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new N(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new N(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wo(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new el;switch(n.type){case"firstParty":return new sl(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new N(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=vo.get(e);n&&(b("ComponentProvider","Removing Datastore"),vo.delete(e),n.terminate())}(this),Promise.resolve()}}function Oh(r,t,e,n={}){var s;const o=(r=Rt(r,dr))._getSettings(),u=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==u&&ve("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},o),{host:u,ssl:!1})),n.mockUserToken){let c,h;if(typeof n.mockUserToken=="string")c=n.mockUserToken,h=mt.MOCK_USER;else{c=Qu(n.mockUserToken,(s=r._app)===null||s===void 0?void 0:s.options.projectId);const f=n.mockUserToken.sub||n.mockUserToken.user_id;if(!f)throw new N(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new mt(f)}r._authCredentials=new nl(new Lo(c,h))}}/**
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
 */class he{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new he(this.firestore,t,this._query)}}class _t{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new _t(this.firestore,t,this._key)}}class Wt extends he{constructor(t,e,n){super(t,e,nr(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new _t(this.firestore,null,new M(t))}withConverter(t){return new Wt(this.firestore,t,this._path)}}function li(r,t,...e){if(r=Nt(r),Ba("collection","path",t),r instanceof dr){const n=H.fromString(t,...e);return Ao(n),new Wt(r,null,n)}{if(!(r instanceof _t||r instanceof Wt))throw new N(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(H.fromString(t,...e));return Ao(n),new Wt(r.firestore,null,n)}}function Zn(r,t,...e){if(r=Nt(r),arguments.length===1&&(t=Fo.newId()),Ba("doc","path",t),r instanceof dr){const n=H.fromString(t,...e);return Io(n),new _t(r,null,new M(n))}{if(!(r instanceof _t||r instanceof Wt))throw new N(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(H.fromString(t,...e));return Io(n),new _t(r.firestore,r instanceof Wt?r.converter:null,new M(n))}}/**
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
 */class Uh{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new Ta(this,"async_queue_retry"),this.hu=()=>{const e=Kr();e&&b("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Yo.Wo()};const t=Kr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const e=Kr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const e=new Qt;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!fn(t))throw t;b("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(t){const e=this.iu.then(()=>(this.uu=!0,t().catch(n=>{this.au=n,this.uu=!1;const s=function(u){let c=u.message||"";return u.stack&&(c=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),c}(n);throw Ot("INTERNAL UNHANDLED ERROR: ",s),n}).then(n=>(this.uu=!1,n))));return this.iu=e,e}enqueueAfterDelay(t,e,n){this.Pu(),this.lu.indexOf(t)>-1&&(e=0);const s=Ci.createAndSchedule(this,t,e,n,o=>this.Eu(o));return this._u.push(s),s}Pu(){this.au&&L()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const e of this._u)if(e.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this._u)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const e=this._u.indexOf(t);this._u.splice(e,1)}}function Ro(r){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const o of n)if(o in s&&typeof s[o]=="function")return!0;return!1}(r,["next","error","complete"])}class Jt extends dr{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=function(){return new Uh}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||za(this),this._firestoreClient.terminate()}}function ja(r,t){const e=zu(),n="(default)",s=Gu(e,"firestore").getImmediate({identifier:n});if(!s._initialized){const o=$u("firestore");o&&Oh(s,...o)}return s}function bi(r){return r._firestoreClient||za(r),r._firestoreClient.verifyNotTerminated(),r._firestoreClient}function za(r){var t,e,n;const s=r._freezeSettings(),o=function(c,h,f,m){return new yl(c,h,f,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,qa(m.experimentalLongPollingOptions),m.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,s);r._firestoreClient=new Nh(r._authCredentials,r._appCheckCredentials,r._queue,o),!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class Ve{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ve(yt.fromBase64String(t))}catch(e){throw new N(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ve(yt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class fr{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class pr{constructor(t){this._methodName=t}}/**
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
 */class xi{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return z(this._lat,t._lat)||z(this._long,t._long)}}/**
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
 */const qh=/^__.*__$/;class Bh{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new Zt(t,this.data,this.fieldMask,e,this.fieldTransforms):new pn(t,this.data,e,this.fieldTransforms)}}class Ga{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Zt(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function $a(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L()}}class Mi{constructor(t,e,n,s,o,u){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=s,o===void 0&&this.mu(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(t){return new Mi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:n,yu:!1});return s.wu(t),s}Su(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:n,yu:!1});return s.mu(),s}bu(t){return this.gu({path:void 0,yu:!0})}Du(t){return tr(t,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}mu(){if(this.path)for(let t=0;t<this.path.length;t++)this.wu(this.path.get(t))}wu(t){if(t.length===0)throw this.Du("Document fields must not be empty");if($a(this.fu)&&qh.test(t))throw this.Du('Document fields cannot begin and end with "__"')}}class jh{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||ur(t)}Fu(t,e,n,s=!1){return new Mi({fu:t,methodName:e,vu:n,path:ut.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function mr(r){const t=r._freezeSettings(),e=ur(r._databaseId);return new jh(r._databaseId,!!t.ignoreUndefinedProperties,e)}function Ka(r,t,e,n,s,o={}){const u=r.Fu(o.merge||o.mergeFields?2:0,t,e,s);Fi("Data must be an object, but it was:",u,n);const c=Qa(n,u);let h,f;if(o.merge)h=new At(u.fieldMask),f=u.fieldTransforms;else if(o.mergeFields){const m=[];for(const A of o.mergeFields){const R=ci(t,A,e);if(!u.contains(R))throw new N(P.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);Ha(m,R)||m.push(R)}h=new At(m),f=u.fieldTransforms.filter(A=>h.covers(A.field))}else h=null,f=u.fieldTransforms;return new Bh(new vt(c),h,f)}class gr extends pr{_toFieldTransform(t){if(t.fu!==2)throw t.fu===1?t.Du(`${this._methodName}() can only appear at the top level of your update data`):t.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof gr}}class Li extends pr{_toFieldTransform(t){return new jl(t.path,new ln)}isEqual(t){return t instanceof Li}}function zh(r,t,e,n){const s=r.Fu(1,t,e);Fi("Data must be an object, but it was:",s,n);const o=[],u=vt.empty();le(n,(h,f)=>{const m=Oi(t,h,e);f=Nt(f);const A=s.Su(m);if(f instanceof gr)o.push(m);else{const R=yn(f,A);R!=null&&(o.push(m),u.set(m,R))}});const c=new At(o);return new Ga(u,c,s.fieldTransforms)}function Gh(r,t,e,n,s,o){const u=r.Fu(1,t,e),c=[ci(t,n,e)],h=[s];if(o.length%2!=0)throw new N(P.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let R=0;R<o.length;R+=2)c.push(ci(t,o[R])),h.push(o[R+1]);const f=[],m=vt.empty();for(let R=c.length-1;R>=0;--R)if(!Ha(f,c[R])){const V=c[R];let k=h[R];k=Nt(k);const x=u.Su(V);if(k instanceof gr)f.push(V);else{const D=yn(k,x);D!=null&&(f.push(V),m.set(V,D))}}const A=new At(f);return new Ga(m,A,u.fieldTransforms)}function $h(r,t,e,n=!1){return yn(e,r.Fu(n?4:3,t))}function yn(r,t){if(Wa(r=Nt(r)))return Fi("Unsupported field value:",t,r),Qa(r,t);if(r instanceof pr)return function(n,s){if(!$a(s.fu))throw s.Du(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.yu&&t.fu!==4)throw t.Du("Nested arrays are not supported");return function(n,s){const o=[];let u=0;for(const c of n){let h=yn(c,s.bu(u));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),u++}return{arrayValue:{values:o}}}(r,t)}return function(n,s){if((n=Nt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Ul(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=rt.fromDate(n);return{timestampValue:Yn(s.serializer,o)}}if(n instanceof rt){const o=new rt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Yn(s.serializer,o)}}if(n instanceof xi)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ve)return{bytesValue:ca(s.serializer,n._byteString)};if(n instanceof _t){const o=s.databaseId,u=n.firestore._databaseId;if(!u.isEqual(o))throw s.Du(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:vi(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.Du(`Unsupported field value: ${hr(n)}`)}(r,t)}function Qa(r,t){const e={};return Oo(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):le(r,(n,s)=>{const o=yn(s,t.pu(n));o!=null&&(e[n]=o)}),{mapValue:{fields:e}}}function Wa(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof rt||r instanceof xi||r instanceof Ve||r instanceof _t||r instanceof pr)}function Fi(r,t,e){if(!Wa(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const n=hr(e);throw n==="an object"?t.Du(r+" a custom object"):t.Du(r+" "+n)}}function ci(r,t,e){if((t=Nt(t))instanceof fr)return t._internalPath;if(typeof t=="string")return Oi(r,t);throw tr("Field path arguments must be of type string or ",r,!1,void 0,e)}const Kh=new RegExp("[~\\*/\\[\\]]");function Oi(r,t,e){if(t.search(Kh)>=0)throw tr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new fr(...t.split("."))._internalPath}catch{throw tr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function tr(r,t,e,n,s){const o=n&&!n.isEmpty(),u=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||u)&&(h+=" (found",o&&(h+=` in field ${n}`),u&&(h+=` in document ${s}`),h+=")"),new N(P.INVALID_ARGUMENT,c+r+h)}function Ha(r,t){return r.some(e=>e.isEqual(t))}/**
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
 */class Xa{constructor(t,e,n,s,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new _t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Qh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(_r("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Qh extends Xa{data(){return super.data()}}function _r(r,t){return typeof t=="string"?Oi(r,t):t instanceof fr?t._internalPath:t._delegate._internalPath}/**
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
 */function Wh(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new N(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ui{}class Ya extends Ui{}function Ja(r,t,...e){let n=[];t instanceof Ui&&n.push(t),n=n.concat(e),function(o){const u=o.filter(h=>h instanceof qi).length,c=o.filter(h=>h instanceof yr).length;if(u>1||u>0&&c>0)throw new N(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const s of n)r=s._apply(r);return r}class yr extends Ya{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new yr(t,e,n)}_apply(t){const e=this._parse(t);return Za(t._query,e),new he(t.firestore,t.converter,Zr(t._query,e))}_parse(t){const e=mr(t.firestore);return function(o,u,c,h,f,m,A){let R;if(f.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new N(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Vo(A,m);const V=[];for(const k of A)V.push(Po(h,o,k));R={arrayValue:{values:V}}}else R=Po(h,o,A)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Vo(A,m),R=$h(c,u,A,m==="in"||m==="not-in");return et.create(f,m,R)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Hh(r,t,e){const n=t,s=_r("where",r);return yr._create(s,n,e)}class qi extends Ui{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new qi(t,e)}_parse(t){const e=this._queryConstraints.map(n=>n._parse(t)).filter(n=>n.getFilters().length>0);return e.length===1?e[0]:Ct.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,o){let u=s;const c=o.getFlattenedFilters();for(const h of c)Za(u,h),u=Zr(u,h)}(t._query,e),new he(t.firestore,t.converter,Zr(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Bi extends Ya{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Bi(t,e)}_apply(t){const e=function(s,o,u){if(s.startAt!==null)throw new N(P.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new N(P.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new un(o,u)}(t._query,this._field,this._direction);return new he(t.firestore,t.converter,function(s,o){const u=s.explicitOrderBy.concat([o]);return new Ce(s.path,s.collectionGroup,u,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,e))}}function Xh(r,t="asc"){const e=t,n=_r("orderBy",r);return Bi._create(n,e)}function Po(r,t,e){if(typeof(e=Nt(e))=="string"){if(e==="")throw new N(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Qo(t)&&e.indexOf("/")!==-1)throw new N(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const n=t.path.child(H.fromString(e));if(!M.isDocumentKey(n))throw new N(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Qs(r,new M(n))}if(e instanceof _t)return Qs(r,e._key);throw new N(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${hr(e)}.`)}function Vo(r,t){if(!Array.isArray(r)||r.length===0)throw new N(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Za(r,t){const e=function(s,o){for(const u of s)for(const c of u.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null}(r.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new N(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new N(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Yh{convertValue(t,e="none"){switch(ue(t)){case 0:return null;case 1:return t.booleanValue;case 2:return tt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ae(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw L()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return le(t,(s,o)=>{n[s]=this.convertValue(o,e)}),n}convertGeoPoint(t){return new xi(tt(t.latitude),tt(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=pi(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(sn(t));default:return null}}convertTimestamp(t){const e=Xt(t);return new rt(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=H.fromString(t);Q(ga(n));const s=new on(n.get(1),n.get(3)),o=new M(n.popFirst(5));return s.isEqual(e)||Ot(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */function tu(r,t,e){let n;return n=r?r.toFirestore(t):t,n}/**
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
 */class Je{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class eu extends Xa{constructor(t,e,n,s,o,u){super(t,e,n,s,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Qn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(_r("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Qn extends eu{data(t={}){return super.data(t)}}class Jh{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Je(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new Qn(this._firestore,this._userDataWriter,n.key,n,new Je(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new N(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let u=0;return s._snapshot.docChanges.map(c=>{const h=new Qn(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Je(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:u++}})}{let u=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new Qn(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Je(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,m=-1;return c.type!==0&&(f=u.indexOf(c.doc.key),u=u.delete(c.doc.key)),c.type!==1&&(u=u.add(c.doc),m=u.indexOf(c.doc.key)),{type:Zh(c.type),doc:h,oldIndex:f,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Zh(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L()}}/**
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
 */function td(r){r=Rt(r,_t);const t=Rt(r.firestore,Jt);return Lh(bi(t),r._key).then(e=>su(t,r,e))}class nu extends Yh{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ve(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new _t(this.firestore,null,e)}}function ed(r,t,e){r=Rt(r,_t);const n=Rt(r.firestore,Jt),s=tu(r.converter,t);return Tr(n,[Ka(mr(n),"setDoc",r._key,s,r.converter!==null,e).toMutation(r._key,wt.none())])}function ru(r,t,e,...n){r=Rt(r,_t);const s=Rt(r.firestore,Jt),o=mr(s);let u;return u=typeof(t=Nt(t))=="string"||t instanceof fr?Gh(o,"updateDoc",r._key,t,e,n):zh(o,"updateDoc",r._key,t),Tr(s,[u.toMutation(r._key,wt.exists(!0))])}function od(r){return Tr(Rt(r.firestore,Jt),[new yi(r._key,wt.none())])}function ad(r,t){const e=Rt(r.firestore,Jt),n=Zn(r),s=tu(r.converter,t);return Tr(e,[Ka(mr(r.firestore),"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,wt.exists(!1))]).then(()=>n)}function iu(r,...t){var e,n,s;r=Nt(r);let o={includeMetadataChanges:!1,source:"default"},u=0;typeof t[u]!="object"||Ro(t[u])||(o=t[u],u++);const c={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(Ro(t[u])){const A=t[u];t[u]=(e=A.next)===null||e===void 0?void 0:e.bind(A),t[u+1]=(n=A.error)===null||n===void 0?void 0:n.bind(A),t[u+2]=(s=A.complete)===null||s===void 0?void 0:s.bind(A)}let h,f,m;if(r instanceof _t)f=Rt(r.firestore,Jt),m=nr(r._key.path),h={next:A=>{t[u]&&t[u](su(f,r,A))},error:t[u+1],complete:t[u+2]};else{const A=Rt(r,he);f=Rt(A.firestore,Jt),m=A._query;const R=new nu(f);h={next:V=>{t[u]&&t[u](new Jh(f,R,A,V))},error:t[u+1],complete:t[u+2]},Wh(r._query)}return function(R,V,k,x){const D=new Oa(x),q=new Ca(V,D,k);return R.asyncQueue.enqueueAndForget(async()=>Va(await ui(R),q)),()=>{D.$a(),R.asyncQueue.enqueueAndForget(async()=>Sa(await ui(R),q))}}(bi(f),m,c,h)}function Tr(r,t){return function(n,s){const o=new Qt;return n.asyncQueue.enqueueAndForget(async()=>Ah(await Mh(n),s,o)),o.promise}(bi(r),t)}function su(r,t,e){const n=e.docs.get(t._key),s=new nu(r);return new eu(r,s,t._key,n,new Je(e.hasPendingWrites,e.fromCache),t.converter)}function ud(){return new Li("serverTimestamp")}(function(t,e=!0){(function(s){Se=s})(Ku),qu(new Bu("firestore",(n,{instanceIdentifier:s,options:o})=>{const u=n.getProvider("app").getImmediate(),c=new Jt(new rl(n.getProvider("auth-internal")),new al(n.getProvider("app-check-internal")),function(f,m){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new N(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new on(f.options.projectId,m)}(u,s),u);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),Bs(zs,"4.6.3",t),Bs(zs,"4.6.3","esm2017")})();function ld(){const r=So(),t=Ft(r.currentUser);r.onAuthStateChanged(c=>{t.value=c});const e=ja(),n=Yu(),s=new Xu;return{user:t,signInWithGoogle:()=>{Ju(r,s).then(c=>{const h=li(e,"users"),f=Zn(h,c.user.uid);ed(f,{userName:c.user.displayName,userId:c.user.uid,userPhotoURL:c.user.photoURL,status:"online"}),n.push("/home")}).catch(c=>{console.log(c)})},firestore:e,auth:r,logout:async()=>{if(t.value){const c=Zn(e,"users",t.value.uid);try{await ru(c,{status:"offline"}),await Zu(r),n.push("/")}catch(h){console.error("Error during logout: ",h)}}else n.push({path:"/",state:{errorMessage:"You must login first"}})},collection:li,query:Ja,where:Hh,onSnapshot:iu}}function cd(r){const t=So(),e=ja(),n=Ft(!1),s=Ft(!0),o=Ft(t.currentUser);t.onAuthStateChanged(y=>{o.value=y});const u=Ft([]),c=zr(()=>u.value.filter(y=>y.title.toLowerCase().includes(r.searchQuery.toLowerCase()))),h=Ft({});let f=Ft(0);const m={1:"Poor",2:"Fair",3:"Good",4:"Very Good",5:"Excellent"},A=zr(()=>m[f.value]||""),R=li(e,"recipe"),V=Ja(R,Xh("createdAt","asc")),k=iu(V,y=>{u.value=y.docs.map(T=>({id:T.id,...T.data()})).reverse(),s.value=!1}),x=y=>{const T=y.seconds,v=y.nanoseconds/1e6;return new Date(T*1e3+v)},D=y=>{const T=x(y),v=T.getFullYear().toString().slice(-2),g=T.toLocaleString("default",{month:"short"}),st=T.getUTCDate(),Vt=T.getHours()%12||12,Ne=("0"+T.getMinutes()).slice(-2),xt=T.getHours()<12?"am":"pm";return`${st} ${g} ${v} (${Vt}:${Ne} ${xt})`};let q=Ft(!1);const G=y=>{var v;h.value=y,console.log(h.value),q.value=p((v=o.value)==null?void 0:v.uid),document.getElementById("my_modal_4").showModal()},$=()=>{f.value=0,document.getElementById("my_modal_4").close()};let J=Ft("");const Pt=(y,T)=>{J.value=T,f.value=y},nt=async(y,T,v)=>{try{n.value=!0;const g=Zn(e,"recipe",y),st=await td(g);if(st.exists()){const Vt=st.data(),Ne=Vt.totalRatings||0,xt=Vt.ratingCount||0,qt=Ne+T,de=xt+1,Tn=qt/de,En=Vt.usersIdThatRate||[];En.push(v),await ru(g,{totalRatings:qt,ratingCount:de,averageRating:Tn,usersIdThatRate:En}),console.log(`Updated recipe ${y} with new ratings and average rating.`)}else console.log("No such recipe document!")}catch(g){console.error("Error updating ratings: ",g)}finally{n.value=!1}},E=async()=>{if(o.value){const y=f.value,T=J.value,v=o.value.uid;await nt(T,y,v),$()}},p=y=>(h.value.usersIdThatRate||[]).includes(y),_=zr(()=>{const y=[],T=h.value.averageRating||0,v=Math.floor(T),g=T%1!==0;for(let st=0;st<v;st++)y.push("full");for(g&&y.push("half");y.length<5;)y.push("empty");return y});return tl(()=>{k()}),{sendingRatingLoading:n,recipe:u,formatHour:D,showRecipeAllModal:G,selectedAllRecipe:h,ratings:f,setRating:Pt,closeModal:$,ratingsInText:A,sendRatings:E,starArray:_,filteredRecipes:c,muteRateBnt:q,loading:s}}const hd=(r,t)=>{const e=r.__vccOpts||r;for(const[n,s]of t)e[n]=s;return e};export{hd as _,ad as a,cd as b,li as c,iu as d,Zn as e,td as f,ja as g,od as h,ru as i,Xh as o,Ja as q,ud as s,ld as u,Hh as w};
