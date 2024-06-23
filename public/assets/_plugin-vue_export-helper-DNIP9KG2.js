import{L as Uu,_ as qu,C as Bu,e as ji,F as ju,H as Wt,g as Ot,i as zu,f as Gu,h as $u,S as Ku,j as Qu,I as Wu,J as Hu,l as Co,k as bt,K as Xu,M as Yu,N as Ju,O as Zu,E as Gr,z as tl}from"./index-DISoZ8OD.js";var zi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ue,Do;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,p){function _(){}_.prototype=p.prototype,E.D=p.prototype,E.prototype=new _,E.prototype.constructor=E,E.C=function(y,T,I){for(var g=Array(arguments.length-2),L=2;L<arguments.length;L++)g[L-2]=arguments[L];return p.prototype[T].apply(y,g)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,p,_){_||(_=0);var y=Array(16);if(typeof p=="string")for(var T=0;16>T;++T)y[T]=p.charCodeAt(_++)|p.charCodeAt(_++)<<8|p.charCodeAt(_++)<<16|p.charCodeAt(_++)<<24;else for(T=0;16>T;++T)y[T]=p[_++]|p[_++]<<8|p[_++]<<16|p[_++]<<24;p=E.g[0],_=E.g[1],T=E.g[2];var I=E.g[3],g=p+(I^_&(T^I))+y[0]+3614090360&4294967295;p=_+(g<<7&4294967295|g>>>25),g=I+(T^p&(_^T))+y[1]+3905402710&4294967295,I=p+(g<<12&4294967295|g>>>20),g=T+(_^I&(p^_))+y[2]+606105819&4294967295,T=I+(g<<17&4294967295|g>>>15),g=_+(p^T&(I^p))+y[3]+3250441966&4294967295,_=T+(g<<22&4294967295|g>>>10),g=p+(I^_&(T^I))+y[4]+4118548399&4294967295,p=_+(g<<7&4294967295|g>>>25),g=I+(T^p&(_^T))+y[5]+1200080426&4294967295,I=p+(g<<12&4294967295|g>>>20),g=T+(_^I&(p^_))+y[6]+2821735955&4294967295,T=I+(g<<17&4294967295|g>>>15),g=_+(p^T&(I^p))+y[7]+4249261313&4294967295,_=T+(g<<22&4294967295|g>>>10),g=p+(I^_&(T^I))+y[8]+1770035416&4294967295,p=_+(g<<7&4294967295|g>>>25),g=I+(T^p&(_^T))+y[9]+2336552879&4294967295,I=p+(g<<12&4294967295|g>>>20),g=T+(_^I&(p^_))+y[10]+4294925233&4294967295,T=I+(g<<17&4294967295|g>>>15),g=_+(p^T&(I^p))+y[11]+2304563134&4294967295,_=T+(g<<22&4294967295|g>>>10),g=p+(I^_&(T^I))+y[12]+1804603682&4294967295,p=_+(g<<7&4294967295|g>>>25),g=I+(T^p&(_^T))+y[13]+4254626195&4294967295,I=p+(g<<12&4294967295|g>>>20),g=T+(_^I&(p^_))+y[14]+2792965006&4294967295,T=I+(g<<17&4294967295|g>>>15),g=_+(p^T&(I^p))+y[15]+1236535329&4294967295,_=T+(g<<22&4294967295|g>>>10),g=p+(T^I&(_^T))+y[1]+4129170786&4294967295,p=_+(g<<5&4294967295|g>>>27),g=I+(_^T&(p^_))+y[6]+3225465664&4294967295,I=p+(g<<9&4294967295|g>>>23),g=T+(p^_&(I^p))+y[11]+643717713&4294967295,T=I+(g<<14&4294967295|g>>>18),g=_+(I^p&(T^I))+y[0]+3921069994&4294967295,_=T+(g<<20&4294967295|g>>>12),g=p+(T^I&(_^T))+y[5]+3593408605&4294967295,p=_+(g<<5&4294967295|g>>>27),g=I+(_^T&(p^_))+y[10]+38016083&4294967295,I=p+(g<<9&4294967295|g>>>23),g=T+(p^_&(I^p))+y[15]+3634488961&4294967295,T=I+(g<<14&4294967295|g>>>18),g=_+(I^p&(T^I))+y[4]+3889429448&4294967295,_=T+(g<<20&4294967295|g>>>12),g=p+(T^I&(_^T))+y[9]+568446438&4294967295,p=_+(g<<5&4294967295|g>>>27),g=I+(_^T&(p^_))+y[14]+3275163606&4294967295,I=p+(g<<9&4294967295|g>>>23),g=T+(p^_&(I^p))+y[3]+4107603335&4294967295,T=I+(g<<14&4294967295|g>>>18),g=_+(I^p&(T^I))+y[8]+1163531501&4294967295,_=T+(g<<20&4294967295|g>>>12),g=p+(T^I&(_^T))+y[13]+2850285829&4294967295,p=_+(g<<5&4294967295|g>>>27),g=I+(_^T&(p^_))+y[2]+4243563512&4294967295,I=p+(g<<9&4294967295|g>>>23),g=T+(p^_&(I^p))+y[7]+1735328473&4294967295,T=I+(g<<14&4294967295|g>>>18),g=_+(I^p&(T^I))+y[12]+2368359562&4294967295,_=T+(g<<20&4294967295|g>>>12),g=p+(_^T^I)+y[5]+4294588738&4294967295,p=_+(g<<4&4294967295|g>>>28),g=I+(p^_^T)+y[8]+2272392833&4294967295,I=p+(g<<11&4294967295|g>>>21),g=T+(I^p^_)+y[11]+1839030562&4294967295,T=I+(g<<16&4294967295|g>>>16),g=_+(T^I^p)+y[14]+4259657740&4294967295,_=T+(g<<23&4294967295|g>>>9),g=p+(_^T^I)+y[1]+2763975236&4294967295,p=_+(g<<4&4294967295|g>>>28),g=I+(p^_^T)+y[4]+1272893353&4294967295,I=p+(g<<11&4294967295|g>>>21),g=T+(I^p^_)+y[7]+4139469664&4294967295,T=I+(g<<16&4294967295|g>>>16),g=_+(T^I^p)+y[10]+3200236656&4294967295,_=T+(g<<23&4294967295|g>>>9),g=p+(_^T^I)+y[13]+681279174&4294967295,p=_+(g<<4&4294967295|g>>>28),g=I+(p^_^T)+y[0]+3936430074&4294967295,I=p+(g<<11&4294967295|g>>>21),g=T+(I^p^_)+y[3]+3572445317&4294967295,T=I+(g<<16&4294967295|g>>>16),g=_+(T^I^p)+y[6]+76029189&4294967295,_=T+(g<<23&4294967295|g>>>9),g=p+(_^T^I)+y[9]+3654602809&4294967295,p=_+(g<<4&4294967295|g>>>28),g=I+(p^_^T)+y[12]+3873151461&4294967295,I=p+(g<<11&4294967295|g>>>21),g=T+(I^p^_)+y[15]+530742520&4294967295,T=I+(g<<16&4294967295|g>>>16),g=_+(T^I^p)+y[2]+3299628645&4294967295,_=T+(g<<23&4294967295|g>>>9),g=p+(T^(_|~I))+y[0]+4096336452&4294967295,p=_+(g<<6&4294967295|g>>>26),g=I+(_^(p|~T))+y[7]+1126891415&4294967295,I=p+(g<<10&4294967295|g>>>22),g=T+(p^(I|~_))+y[14]+2878612391&4294967295,T=I+(g<<15&4294967295|g>>>17),g=_+(I^(T|~p))+y[5]+4237533241&4294967295,_=T+(g<<21&4294967295|g>>>11),g=p+(T^(_|~I))+y[12]+1700485571&4294967295,p=_+(g<<6&4294967295|g>>>26),g=I+(_^(p|~T))+y[3]+2399980690&4294967295,I=p+(g<<10&4294967295|g>>>22),g=T+(p^(I|~_))+y[10]+4293915773&4294967295,T=I+(g<<15&4294967295|g>>>17),g=_+(I^(T|~p))+y[1]+2240044497&4294967295,_=T+(g<<21&4294967295|g>>>11),g=p+(T^(_|~I))+y[8]+1873313359&4294967295,p=_+(g<<6&4294967295|g>>>26),g=I+(_^(p|~T))+y[15]+4264355552&4294967295,I=p+(g<<10&4294967295|g>>>22),g=T+(p^(I|~_))+y[6]+2734768916&4294967295,T=I+(g<<15&4294967295|g>>>17),g=_+(I^(T|~p))+y[13]+1309151649&4294967295,_=T+(g<<21&4294967295|g>>>11),g=p+(T^(_|~I))+y[4]+4149444226&4294967295,p=_+(g<<6&4294967295|g>>>26),g=I+(_^(p|~T))+y[11]+3174756917&4294967295,I=p+(g<<10&4294967295|g>>>22),g=T+(p^(I|~_))+y[2]+718787259&4294967295,T=I+(g<<15&4294967295|g>>>17),g=_+(I^(T|~p))+y[9]+3951481745&4294967295,E.g[0]=E.g[0]+p&4294967295,E.g[1]=E.g[1]+(T+(g<<21&4294967295|g>>>11))&4294967295,E.g[2]=E.g[2]+T&4294967295,E.g[3]=E.g[3]+I&4294967295}n.prototype.u=function(E,p){p===void 0&&(p=E.length);for(var _=p-this.blockSize,y=this.B,T=this.h,I=0;I<p;){if(T==0)for(;I<=_;)i(this,E,I),I+=this.blockSize;if(typeof E=="string"){for(;I<p;)if(y[T++]=E.charCodeAt(I++),T==this.blockSize){i(this,y),T=0;break}}else for(;I<p;)if(y[T++]=E[I++],T==this.blockSize){i(this,y),T=0;break}}this.h=T,this.o+=p},n.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var p=1;p<E.length-8;++p)E[p]=0;var _=8*this.o;for(p=E.length-8;p<E.length;++p)E[p]=_&255,_/=256;for(this.u(E),E=Array(16),p=_=0;4>p;++p)for(var y=0;32>y;y+=8)E[_++]=this.g[p]>>>y&255;return E};function o(E,p){var _=c;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=p(E)}function u(E,p){this.h=p;for(var _=[],y=!0,T=E.length-1;0<=T;T--){var I=E[T]|0;y&&I==p||(_[T]=I,y=!1)}this.g=_}var c={};function h(E){return-128<=E&&128>E?o(E,function(p){return new u([p|0],0>p?-1:0)}):new u([E|0],0>E?-1:0)}function f(E){if(isNaN(E)||!isFinite(E))return A;if(0>E)return D(f(-E));for(var p=[],_=1,y=0;E>=_;y++)p[y]=E/_|0,_*=4294967296;return new u(p,0)}function m(E,p){if(E.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(E.charAt(0)=="-")return D(m(E.substring(1),p));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=f(Math.pow(p,8)),y=A,T=0;T<E.length;T+=8){var I=Math.min(8,E.length-T),g=parseInt(E.substring(T,T+I),p);8>I?(I=f(Math.pow(p,I)),y=y.j(I).add(f(g))):(y=y.j(_),y=y.add(f(g)))}return y}var A=h(0),R=h(1),V=h(16777216);r=u.prototype,r.m=function(){if(x(this))return-D(this).m();for(var E=0,p=1,_=0;_<this.g.length;_++){var y=this.i(_);E+=(0<=y?y:4294967296+y)*p,p*=4294967296}return E},r.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(k(this))return"0";if(x(this))return"-"+D(this).toString(E);for(var p=f(Math.pow(E,6)),_=this,y="";;){var T=H(_,p).g;_=B(_,T.j(p));var I=((0<_.g.length?_.g[0]:_.h)>>>0).toString(E);if(_=T,k(_))return I+y;for(;6>I.length;)I="0"+I;y=I+y}},r.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function k(E){if(E.h!=0)return!1;for(var p=0;p<E.g.length;p++)if(E.g[p]!=0)return!1;return!0}function x(E){return E.h==-1}r.l=function(E){return E=B(this,E),x(E)?-1:k(E)?0:1};function D(E){for(var p=E.g.length,_=[],y=0;y<p;y++)_[y]=~E.g[y];return new u(_,~E.h).add(R)}r.abs=function(){return x(this)?D(this):this},r.add=function(E){for(var p=Math.max(this.g.length,E.g.length),_=[],y=0,T=0;T<=p;T++){var I=y+(this.i(T)&65535)+(E.i(T)&65535),g=(I>>>16)+(this.i(T)>>>16)+(E.i(T)>>>16);y=g>>>16,I&=65535,g&=65535,_[T]=g<<16|I}return new u(_,_[_.length-1]&-2147483648?-1:0)};function B(E,p){return E.add(D(p))}r.j=function(E){if(k(this)||k(E))return A;if(x(this))return x(E)?D(this).j(D(E)):D(D(this).j(E));if(x(E))return D(this.j(D(E)));if(0>this.l(V)&&0>E.l(V))return f(this.m()*E.m());for(var p=this.g.length+E.g.length,_=[],y=0;y<2*p;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var T=0;T<E.g.length;T++){var I=this.i(y)>>>16,g=this.i(y)&65535,L=E.i(T)>>>16,z=E.i(T)&65535;_[2*y+2*T]+=g*z,Q(_,2*y+2*T),_[2*y+2*T+1]+=I*z,Q(_,2*y+2*T+1),_[2*y+2*T+1]+=g*L,Q(_,2*y+2*T+1),_[2*y+2*T+2]+=I*L,Q(_,2*y+2*T+2)}for(y=0;y<p;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=p;y<2*p;y++)_[y]=0;return new u(_,0)};function Q(E,p){for(;(E[p]&65535)!=E[p];)E[p+1]+=E[p]>>>16,E[p]&=65535,p++}function j(E,p){this.g=E,this.h=p}function H(E,p){if(k(p))throw Error("division by zero");if(k(E))return new j(A,A);if(x(E))return p=H(D(E),p),new j(D(p.g),D(p.h));if(x(p))return p=H(E,D(p)),new j(D(p.g),p.h);if(30<E.g.length){if(x(E)||x(p))throw Error("slowDivide_ only works with positive integers.");for(var _=R,y=p;0>=y.l(E);)_=St(_),y=St(y);var T=st(_,1),I=st(y,1);for(y=st(y,2),_=st(_,2);!k(y);){var g=I.add(y);0>=g.l(E)&&(T=T.add(_),I=g),y=st(y,1),_=st(_,1)}return p=B(E,T.j(p)),new j(T,p)}for(T=A;0<=E.l(p);){for(_=Math.max(1,Math.floor(E.m()/p.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),I=f(_),g=I.j(p);x(g)||0<g.l(E);)_-=y,I=f(_),g=I.j(p);k(I)&&(I=R),T=T.add(I),E=B(E,g)}return new j(T,E)}r.A=function(E){return H(this,E).h},r.and=function(E){for(var p=Math.max(this.g.length,E.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)&E.i(y);return new u(_,this.h&E.h)},r.or=function(E){for(var p=Math.max(this.g.length,E.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)|E.i(y);return new u(_,this.h|E.h)},r.xor=function(E){for(var p=Math.max(this.g.length,E.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)^E.i(y);return new u(_,this.h^E.h)};function St(E){for(var p=E.g.length+1,_=[],y=0;y<p;y++)_[y]=E.i(y)<<1|E.i(y-1)>>>31;return new u(_,E.h)}function st(E,p){var _=p>>5;p%=32;for(var y=E.g.length-_,T=[],I=0;I<y;I++)T[I]=0<p?E.i(I+_)>>>p|E.i(I+_+1)<<32-p:E.i(I+_);return new u(T,E.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Do=n,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=f,u.fromString=m,ue=u}).apply(typeof zi<"u"?zi:typeof self<"u"?self:typeof window<"u"?window:{});var Un=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ko,No,Ye,bo,zn,Hr,xo,Mo,Lo;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,l){return s==Array.prototype||s==Object.prototype||(s[a]=l.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Un=="object"&&Un];for(var a=0;a<s.length;++a){var l=s[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var n=e(this);function i(s,a){if(a)t:{var l=n;s=s.split(".");for(var d=0;d<s.length-1;d++){var v=s[d];if(!(v in l))break t;l=l[v]}s=s[s.length-1],d=l[s],a=a(d),a!=d&&a!=null&&t(l,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var l=0,d=!1,v={next:function(){if(!d&&l<s.length){var w=l++;return{value:a(w,s[w]),done:!1}}return d=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}i("Array.prototype.values",function(s){return s||function(){return o(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},c=this||self;function h(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function f(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function m(s,a,l){return s.call.apply(s.bind,arguments)}function A(s,a,l){if(!s)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,d),s.apply(a,v)}}return function(){return s.apply(a,arguments)}}function R(s,a,l){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:A,R.apply(null,arguments)}function V(s,a){var l=Array.prototype.slice.call(arguments,1);return function(){var d=l.slice();return d.push.apply(d,arguments),s.apply(this,d)}}function k(s,a){function l(){}l.prototype=a.prototype,s.aa=a.prototype,s.prototype=new l,s.prototype.constructor=s,s.Qb=function(d,v,w){for(var C=Array(arguments.length-2),W=2;W<arguments.length;W++)C[W-2]=arguments[W];return a.prototype[v].apply(d,C)}}function x(s){const a=s.length;if(0<a){const l=Array(a);for(let d=0;d<a;d++)l[d]=s[d];return l}return[]}function D(s,a){for(let l=1;l<arguments.length;l++){const d=arguments[l];if(h(d)){const v=s.length||0,w=d.length||0;s.length=v+w;for(let C=0;C<w;C++)s[v+C]=d[C]}else s.push(d)}}class B{constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function Q(s){return/^[\s\xa0]*$/.test(s)}function j(){var s=c.navigator;return s&&(s=s.userAgent)?s:""}function H(s){return H[" "](s),s}H[" "]=function(){};var St=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function st(s,a,l){for(const d in s)a.call(l,s[d],d,s)}function E(s,a){for(const l in s)a.call(void 0,s[l],l,s)}function p(s){const a={};for(const l in s)a[l]=s[l];return a}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,a){let l,d;for(let v=1;v<arguments.length;v++){d=arguments[v];for(l in d)s[l]=d[l];for(let w=0;w<_.length;w++)l=_[w],Object.prototype.hasOwnProperty.call(d,l)&&(s[l]=d[l])}}function T(s){var a=1;s=s.split(":");const l=[];for(;0<a&&s.length;)l.push(s.shift()),a--;return s.length&&l.push(s.join(":")),l}function I(s){c.setTimeout(()=>{throw s},0)}function g(){var s=Ut;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class L{constructor(){this.h=this.g=null}add(a,l){const d=z.get();d.set(a,l),this.h?this.h.next=d:this.g=d,this.h=d}}var z=new B(()=>new It,s=>s.reset());class It{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let At,Rt=!1,Ut=new L,me=()=>{const s=c.Promise.resolve(void 0);At=()=>{s.then(Me)}};var Me=()=>{for(var s;s=g();){try{s.h.call(s.g)}catch(l){I(l)}var a=z;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}Rt=!1};function kt(){this.s=this.s,this.C=this.C}kt.prototype.s=!1,kt.prototype.ma=function(){this.s||(this.s=!0,this.N())},kt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function it(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}it.prototype.h=function(){this.defaultPrevented=!0};var Er=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const l=()=>{};c.addEventListener("test",l,a),c.removeEventListener("test",l,a)}catch{}return s}();function Gt(s,a){if(it.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var l=this.type=s.type,d=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(St){t:{try{H(a.nodeName);var v=!0;break t}catch{}v=!1}v||(a=null)}}else l=="mouseover"?a=s.fromElement:l=="mouseout"&&(a=s.toElement);this.relatedTarget=a,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:au[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Gt.aa.h.call(this)}}k(Gt,it);var au={2:"touch",3:"pen",4:"mouse"};Gt.prototype.h=function(){Gt.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var vn="closure_listenable_"+(1e6*Math.random()|0),uu=0;function lu(s,a,l,d,v){this.listener=s,this.proxy=null,this.src=a,this.type=l,this.capture=!!d,this.ha=v,this.key=++uu,this.da=this.fa=!1}function In(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function An(s){this.src=s,this.g={},this.h=0}An.prototype.add=function(s,a,l,d,v){var w=s.toString();s=this.g[w],s||(s=this.g[w]=[],this.h++);var C=Ir(s,a,d,v);return-1<C?(a=s[C],l||(a.fa=!1)):(a=new lu(a,this.src,w,!!d,v),a.fa=l,s.push(a)),a};function vr(s,a){var l=a.type;if(l in s.g){var d=s.g[l],v=Array.prototype.indexOf.call(d,a,void 0),w;(w=0<=v)&&Array.prototype.splice.call(d,v,1),w&&(In(a),s.g[l].length==0&&(delete s.g[l],s.h--))}}function Ir(s,a,l,d){for(var v=0;v<s.length;++v){var w=s[v];if(!w.da&&w.listener==a&&w.capture==!!l&&w.ha==d)return v}return-1}var Ar="closure_lm_"+(1e6*Math.random()|0),wr={};function zs(s,a,l,d,v){if(Array.isArray(a)){for(var w=0;w<a.length;w++)zs(s,a[w],l,d,v);return null}return l=Ks(l),s&&s[vn]?s.K(a,l,f(d)?!!d.capture:!!d,v):cu(s,a,l,!1,d,v)}function cu(s,a,l,d,v,w){if(!a)throw Error("Invalid event type");var C=f(v)?!!v.capture:!!v,W=Pr(s);if(W||(s[Ar]=W=new An(s)),l=W.add(a,l,d,C,w),l.proxy)return l;if(d=hu(),l.proxy=d,d.src=s,d.listener=l,s.addEventListener)Er||(v=C),v===void 0&&(v=!1),s.addEventListener(a.toString(),d,v);else if(s.attachEvent)s.attachEvent($s(a.toString()),d);else if(s.addListener&&s.removeListener)s.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return l}function hu(){function s(l){return a.call(s.src,s.listener,l)}const a=du;return s}function Gs(s,a,l,d,v){if(Array.isArray(a))for(var w=0;w<a.length;w++)Gs(s,a[w],l,d,v);else d=f(d)?!!d.capture:!!d,l=Ks(l),s&&s[vn]?(s=s.i,a=String(a).toString(),a in s.g&&(w=s.g[a],l=Ir(w,l,d,v),-1<l&&(In(w[l]),Array.prototype.splice.call(w,l,1),w.length==0&&(delete s.g[a],s.h--)))):s&&(s=Pr(s))&&(a=s.g[a.toString()],s=-1,a&&(s=Ir(a,l,d,v)),(l=-1<s?a[s]:null)&&Rr(l))}function Rr(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[vn])vr(a.i,s);else{var l=s.type,d=s.proxy;a.removeEventListener?a.removeEventListener(l,d,s.capture):a.detachEvent?a.detachEvent($s(l),d):a.addListener&&a.removeListener&&a.removeListener(d),(l=Pr(a))?(vr(l,s),l.h==0&&(l.src=null,a[Ar]=null)):In(s)}}}function $s(s){return s in wr?wr[s]:wr[s]="on"+s}function du(s,a){if(s.da)s=!0;else{a=new Gt(a,this);var l=s.listener,d=s.ha||s.src;s.fa&&Rr(s),s=l.call(d,a)}return s}function Pr(s){return s=s[Ar],s instanceof An?s:null}var Vr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ks(s){return typeof s=="function"?s:(s[Vr]||(s[Vr]=function(a){return s.handleEvent(a)}),s[Vr])}function dt(){kt.call(this),this.i=new An(this),this.M=this,this.F=null}k(dt,kt),dt.prototype[vn]=!0,dt.prototype.removeEventListener=function(s,a,l,d){Gs(this,s,a,l,d)};function Et(s,a){var l,d=s.F;if(d)for(l=[];d;d=d.F)l.push(d);if(s=s.M,d=a.type||a,typeof a=="string")a=new it(a,s);else if(a instanceof it)a.target=a.target||s;else{var v=a;a=new it(d,s),y(a,v)}if(v=!0,l)for(var w=l.length-1;0<=w;w--){var C=a.g=l[w];v=wn(C,d,!0,a)&&v}if(C=a.g=s,v=wn(C,d,!0,a)&&v,v=wn(C,d,!1,a)&&v,l)for(w=0;w<l.length;w++)C=a.g=l[w],v=wn(C,d,!1,a)&&v}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var l=s.g[a],d=0;d<l.length;d++)In(l[d]);delete s.g[a],s.h--}}this.F=null},dt.prototype.K=function(s,a,l,d){return this.i.add(String(s),a,!1,l,d)},dt.prototype.L=function(s,a,l,d){return this.i.add(String(s),a,!0,l,d)};function wn(s,a,l,d){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var v=!0,w=0;w<a.length;++w){var C=a[w];if(C&&!C.da&&C.capture==l){var W=C.listener,ut=C.ha||C.src;C.fa&&vr(s.i,C),v=W.call(ut,d)!==!1&&v}}return v&&!d.defaultPrevented}function Qs(s,a,l){if(typeof s=="function")l&&(s=R(s,l));else if(s&&typeof s.handleEvent=="function")s=R(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(s,a||0)}function Ws(s){s.g=Qs(()=>{s.g=null,s.i&&(s.i=!1,Ws(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class fu extends kt{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Ws(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Le(s){kt.call(this),this.h=s,this.g={}}k(Le,kt);var Hs=[];function Xs(s){st(s.g,function(a,l){this.g.hasOwnProperty(l)&&Rr(a)},s),s.g={}}Le.prototype.N=function(){Le.aa.N.call(this),Xs(this)},Le.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Sr=c.JSON.stringify,pu=c.JSON.parse,mu=class{stringify(s){return c.JSON.stringify(s,void 0)}parse(s){return c.JSON.parse(s,void 0)}};function Cr(){}Cr.prototype.h=null;function Ys(s){return s.h||(s.h=s.i())}function Js(){}var Oe={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Dr(){it.call(this,"d")}k(Dr,it);function kr(){it.call(this,"c")}k(kr,it);var re={},Zs=null;function Rn(){return Zs=Zs||new dt}re.La="serverreachability";function ti(s){it.call(this,re.La,s)}k(ti,it);function Fe(s){const a=Rn();Et(a,new ti(a))}re.STAT_EVENT="statevent";function ei(s,a){it.call(this,re.STAT_EVENT,s),this.stat=a}k(ei,it);function vt(s){const a=Rn();Et(a,new ei(a,s))}re.Ma="timingevent";function ni(s,a){it.call(this,re.Ma,s),this.size=a}k(ni,it);function Ue(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){s()},a)}function qe(){this.g=!0}qe.prototype.xa=function(){this.g=!1};function gu(s,a,l,d,v,w){s.info(function(){if(s.g)if(w)for(var C="",W=w.split("&"),ut=0;ut<W.length;ut++){var $=W[ut].split("=");if(1<$.length){var ft=$[0];$=$[1];var pt=ft.split("_");C=2<=pt.length&&pt[1]=="type"?C+(ft+"="+$+"&"):C+(ft+"=redacted&")}}else C=null;else C=w;return"XMLHTTP REQ ("+d+") [attempt "+v+"]: "+a+`
`+l+`
`+C})}function _u(s,a,l,d,v,w,C){s.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+v+"]: "+a+`
`+l+`
`+w+" "+C})}function ge(s,a,l,d){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+Tu(s,l)+(d?" "+d:"")})}function yu(s,a){s.info(function(){return"TIMEOUT: "+a})}qe.prototype.info=function(){};function Tu(s,a){if(!s.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(s=0;s<l.length;s++)if(Array.isArray(l[s])){var d=l[s];if(!(2>d.length)){var v=d[1];if(Array.isArray(v)&&!(1>v.length)){var w=v[0];if(w!="noop"&&w!="stop"&&w!="close")for(var C=1;C<v.length;C++)v[C]=""}}}}return Sr(l)}catch{return a}}var Pn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ri={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Nr;function Vn(){}k(Vn,Cr),Vn.prototype.g=function(){return new XMLHttpRequest},Vn.prototype.i=function(){return{}},Nr=new Vn;function $t(s,a,l,d){this.j=s,this.i=a,this.l=l,this.R=d||1,this.U=new Le(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new si}function si(){this.i=null,this.g="",this.h=!1}var ii={},br={};function xr(s,a,l){s.L=1,s.v=kn(qt(a)),s.m=l,s.P=!0,oi(s,null)}function oi(s,a){s.F=Date.now(),Sn(s),s.A=qt(s.v);var l=s.A,d=s.R;Array.isArray(d)||(d=[String(d)]),Ei(l.i,"t",d),s.C=0,l=s.j.J,s.h=new si,s.g=Fi(s.j,l?a:null,!s.m),0<s.O&&(s.M=new fu(R(s.Y,s,s.g),s.O)),a=s.U,l=s.g,d=s.ca;var v="readystatechange";Array.isArray(v)||(v&&(Hs[0]=v.toString()),v=Hs);for(var w=0;w<v.length;w++){var C=zs(l,v[w],d||a.handleEvent,!1,a.h||a);if(!C)break;a.g[C.key]=C}a=s.H?p(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),Fe(),gu(s.i,s.u,s.A,s.l,s.R,s.m)}$t.prototype.ca=function(s){s=s.target;const a=this.M;a&&Bt(s)==3?a.j():this.Y(s)},$t.prototype.Y=function(s){try{if(s==this.g)t:{const pt=Bt(this.g);var a=this.g.Ba();const Te=this.g.Z();if(!(3>pt)&&(pt!=3||this.g&&(this.h.h||this.g.oa()||Vi(this.g)))){this.J||pt!=4||a==7||(a==8||0>=Te?Fe(3):Fe(2)),Mr(this);var l=this.g.Z();this.X=l;e:if(ai(this)){var d=Vi(this.g);s="";var v=d.length,w=Bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){se(this),Be(this);var C="";break e}this.h.i=new c.TextDecoder}for(a=0;a<v;a++)this.h.h=!0,s+=this.h.i.decode(d[a],{stream:!(w&&a==v-1)});d.length=0,this.h.g+=s,this.C=0,C=this.h.g}else C=this.g.oa();if(this.o=l==200,_u(this.i,this.u,this.A,this.l,this.R,pt,l),this.o){if(this.T&&!this.K){e:{if(this.g){var W,ut=this.g;if((W=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Q(W)){var $=W;break e}}$=null}if(l=$)ge(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Lr(this,l);else{this.o=!1,this.s=3,vt(12),se(this),Be(this);break t}}if(this.P){l=!0;let Nt;for(;!this.J&&this.C<C.length;)if(Nt=Eu(this,C),Nt==br){pt==4&&(this.s=4,vt(14),l=!1),ge(this.i,this.l,null,"[Incomplete Response]");break}else if(Nt==ii){this.s=4,vt(15),ge(this.i,this.l,C,"[Invalid Chunk]"),l=!1;break}else ge(this.i,this.l,Nt,null),Lr(this,Nt);if(ai(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pt!=4||C.length!=0||this.h.h||(this.s=1,vt(16),l=!1),this.o=this.o&&l,!l)ge(this.i,this.l,C,"[Invalid Chunked Response]"),se(this),Be(this);else if(0<C.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+C.length),jr(ft),ft.M=!0,vt(11))}}else ge(this.i,this.l,C,null),Lr(this,C);pt==4&&se(this),this.o&&!this.J&&(pt==4?xi(this.j,this):(this.o=!1,Sn(this)))}else Ou(this.g),l==400&&0<C.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),se(this),Be(this)}}}catch{}finally{}};function ai(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Eu(s,a){var l=s.C,d=a.indexOf(`
`,l);return d==-1?br:(l=Number(a.substring(l,d)),isNaN(l)?ii:(d+=1,d+l>a.length?br:(a=a.slice(d,d+l),s.C=d+l,a)))}$t.prototype.cancel=function(){this.J=!0,se(this)};function Sn(s){s.S=Date.now()+s.I,ui(s,s.I)}function ui(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Ue(R(s.ba,s),a)}function Mr(s){s.B&&(c.clearTimeout(s.B),s.B=null)}$t.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(yu(this.i,this.A),this.L!=2&&(Fe(),vt(17)),se(this),this.s=2,Be(this)):ui(this,this.S-s)};function Be(s){s.j.G==0||s.J||xi(s.j,s)}function se(s){Mr(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,Xs(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function Lr(s,a){try{var l=s.j;if(l.G!=0&&(l.g==s||Or(l.h,s))){if(!s.K&&Or(l.h,s)&&l.G==3){try{var d=l.Da.g.parse(a)}catch{d=null}if(Array.isArray(d)&&d.length==3){var v=d;if(v[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<s.F)Ln(l),xn(l);else break t;Br(l),vt(18)}}else l.za=v[1],0<l.za-l.T&&37500>v[2]&&l.F&&l.v==0&&!l.C&&(l.C=Ue(R(l.Za,l),6e3));if(1>=hi(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else oe(l,11)}else if((s.K||l.g==s)&&Ln(l),!Q(a))for(v=l.Da.g.parse(a),a=0;a<v.length;a++){let $=v[a];if(l.T=$[0],$=$[1],l.G==2)if($[0]=="c"){l.K=$[1],l.ia=$[2];const ft=$[3];ft!=null&&(l.la=ft,l.j.info("VER="+l.la));const pt=$[4];pt!=null&&(l.Aa=pt,l.j.info("SVER="+l.Aa));const Te=$[5];Te!=null&&typeof Te=="number"&&0<Te&&(d=1.5*Te,l.L=d,l.j.info("backChannelRequestTimeoutMs_="+d)),d=l;const Nt=s.g;if(Nt){const Fn=Nt.g?Nt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fn){var w=d.h;w.g||Fn.indexOf("spdy")==-1&&Fn.indexOf("quic")==-1&&Fn.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(Fr(w,w.h),w.h=null))}if(d.D){const zr=Nt.g?Nt.g.getResponseHeader("X-HTTP-Session-Id"):null;zr&&(d.ya=zr,Y(d.I,d.D,zr))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-s.F,l.j.info("Handshake RTT: "+l.R+"ms")),d=l;var C=s;if(d.qa=Oi(d,d.J?d.ia:null,d.W),C.K){di(d.h,C);var W=C,ut=d.L;ut&&(W.I=ut),W.B&&(Mr(W),Sn(W)),d.g=C}else Ni(d);0<l.i.length&&Mn(l)}else $[0]!="stop"&&$[0]!="close"||oe(l,7);else l.G==3&&($[0]=="stop"||$[0]=="close"?$[0]=="stop"?oe(l,7):qr(l):$[0]!="noop"&&l.l&&l.l.ta($),l.v=0)}}Fe(4)}catch{}}var vu=class{constructor(s,a){this.g=s,this.map=a}};function li(s){this.l=s||10,c.PerformanceNavigationTiming?(s=c.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ci(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function hi(s){return s.h?1:s.g?s.g.size:0}function Or(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function Fr(s,a){s.g?s.g.add(a):s.h=a}function di(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}li.prototype.cancel=function(){if(this.i=fi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function fi(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const l of s.g.values())a=a.concat(l.D);return a}return x(s.i)}function Iu(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var a=[],l=s.length,d=0;d<l;d++)a.push(s[d]);return a}a=[],l=0;for(d in s)a[l++]=s[d];return a}function Au(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var a=[];s=s.length;for(var l=0;l<s;l++)a.push(l);return a}a=[],l=0;for(const d in s)a[l++]=d;return a}}}function pi(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var l=Au(s),d=Iu(s),v=d.length,w=0;w<v;w++)a.call(void 0,d[w],l&&l[w],s)}var mi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function wu(s,a){if(s){s=s.split("&");for(var l=0;l<s.length;l++){var d=s[l].indexOf("="),v=null;if(0<=d){var w=s[l].substring(0,d);v=s[l].substring(d+1)}else w=s[l];a(w,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function ie(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof ie){this.h=s.h,Cn(this,s.j),this.o=s.o,this.g=s.g,Dn(this,s.s),this.l=s.l;var a=s.i,l=new Ge;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),gi(this,l),this.m=s.m}else s&&(a=String(s).match(mi))?(this.h=!1,Cn(this,a[1]||"",!0),this.o=je(a[2]||""),this.g=je(a[3]||"",!0),Dn(this,a[4]),this.l=je(a[5]||"",!0),gi(this,a[6]||"",!0),this.m=je(a[7]||"")):(this.h=!1,this.i=new Ge(null,this.h))}ie.prototype.toString=function(){var s=[],a=this.j;a&&s.push(ze(a,_i,!0),":");var l=this.g;return(l||a=="file")&&(s.push("//"),(a=this.o)&&s.push(ze(a,_i,!0),"@"),s.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&s.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&s.push("/"),s.push(ze(l,l.charAt(0)=="/"?Vu:Pu,!0))),(l=this.i.toString())&&s.push("?",l),(l=this.m)&&s.push("#",ze(l,Cu)),s.join("")};function qt(s){return new ie(s)}function Cn(s,a,l){s.j=l?je(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function Dn(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function gi(s,a,l){a instanceof Ge?(s.i=a,Du(s.i,s.h)):(l||(a=ze(a,Su)),s.i=new Ge(a,s.h))}function Y(s,a,l){s.i.set(a,l)}function kn(s){return Y(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function je(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function ze(s,a,l){return typeof s=="string"?(s=encodeURI(s).replace(a,Ru),l&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Ru(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var _i=/[#\/\?@]/g,Pu=/[#\?:]/g,Vu=/[#\?]/g,Su=/[#\?@]/g,Cu=/#/g;function Ge(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function Kt(s){s.g||(s.g=new Map,s.h=0,s.i&&wu(s.i,function(a,l){s.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}r=Ge.prototype,r.add=function(s,a){Kt(this),this.i=null,s=_e(this,s);var l=this.g.get(s);return l||this.g.set(s,l=[]),l.push(a),this.h+=1,this};function yi(s,a){Kt(s),a=_e(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function Ti(s,a){return Kt(s),a=_e(s,a),s.g.has(a)}r.forEach=function(s,a){Kt(this),this.g.forEach(function(l,d){l.forEach(function(v){s.call(a,v,d,this)},this)},this)},r.na=function(){Kt(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let d=0;d<a.length;d++){const v=s[d];for(let w=0;w<v.length;w++)l.push(a[d])}return l},r.V=function(s){Kt(this);let a=[];if(typeof s=="string")Ti(this,s)&&(a=a.concat(this.g.get(_e(this,s))));else{s=Array.from(this.g.values());for(let l=0;l<s.length;l++)a=a.concat(s[l])}return a},r.set=function(s,a){return Kt(this),this.i=null,s=_e(this,s),Ti(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},r.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function Ei(s,a,l){yi(s,a),0<l.length&&(s.i=null,s.g.set(_e(s,a),x(l)),s.h+=l.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var d=a[l];const w=encodeURIComponent(String(d)),C=this.V(d);for(d=0;d<C.length;d++){var v=w;C[d]!==""&&(v+="="+encodeURIComponent(String(C[d]))),s.push(v)}}return this.i=s.join("&")};function _e(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function Du(s,a){a&&!s.j&&(Kt(s),s.i=null,s.g.forEach(function(l,d){var v=d.toLowerCase();d!=v&&(yi(this,d),Ei(this,v,l))},s)),s.j=a}function ku(s,a){const l=new qe;if(c.Image){const d=new Image;d.onload=V(Qt,l,"TestLoadImage: loaded",!0,a,d),d.onerror=V(Qt,l,"TestLoadImage: error",!1,a,d),d.onabort=V(Qt,l,"TestLoadImage: abort",!1,a,d),d.ontimeout=V(Qt,l,"TestLoadImage: timeout",!1,a,d),c.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=s}else a(!1)}function Nu(s,a){const l=new qe,d=new AbortController,v=setTimeout(()=>{d.abort(),Qt(l,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:d.signal}).then(w=>{clearTimeout(v),w.ok?Qt(l,"TestPingServer: ok",!0,a):Qt(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(v),Qt(l,"TestPingServer: error",!1,a)})}function Qt(s,a,l,d,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),d(l)}catch{}}function bu(){this.g=new mu}function xu(s,a,l){const d=l||"";try{pi(s,function(v,w){let C=v;f(v)&&(C=Sr(v)),a.push(d+w+"="+encodeURIComponent(C))})}catch(v){throw a.push(d+"type="+encodeURIComponent("_badmap")),v}}function $e(s){this.l=s.Ub||null,this.j=s.eb||!1}k($e,Cr),$e.prototype.g=function(){return new Nn(this.l,this.j)},$e.prototype.i=function(s){return function(){return s}}({});function Nn(s,a){dt.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Nn,dt),r=Nn.prototype,r.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,Qe(this)},r.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ke(this)),this.readyState=0},r.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Qe(this)),this.g&&(this.readyState=3,Qe(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;vi(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function vi(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}r.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?Ke(this):Qe(this),this.readyState==3&&vi(this)}},r.Ra=function(s){this.g&&(this.response=this.responseText=s,Ke(this))},r.Qa=function(s){this.g&&(this.response=s,Ke(this))},r.ga=function(){this.g&&Ke(this)};function Ke(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Qe(s)}r.setRequestHeader=function(s,a){this.u.append(s,a)},r.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,s.push(l[0]+": "+l[1]),l=a.next();return s.join(`\r
`)};function Qe(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Nn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Ii(s){let a="";return st(s,function(l,d){a+=d,a+=":",a+=l,a+=`\r
`}),a}function Ur(s,a,l){t:{for(d in l){var d=!1;break t}d=!0}d||(l=Ii(l),typeof s=="string"?l!=null&&encodeURIComponent(String(l)):Y(s,a,l))}function tt(s){dt.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(tt,dt);var Mu=/^https?$/i,Lu=["POST","PUT"];r=tt.prototype,r.Ha=function(s){this.J=s},r.ea=function(s,a,l,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Nr.g(),this.v=this.o?Ys(this.o):Ys(Nr),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(w){Ai(this,w);return}if(s=l||"",l=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var v in d)l.set(v,d[v]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const w of d.keys())l.set(w,d.get(w));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(l.keys()).find(w=>w.toLowerCase()=="content-type"),v=c.FormData&&s instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Lu,a,void 0))||d||v||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,C]of l)this.g.setRequestHeader(w,C);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Pi(this),this.u=!0,this.g.send(s),this.u=!1}catch(w){Ai(this,w)}};function Ai(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,wi(s),bn(s)}function wi(s){s.A||(s.A=!0,Et(s,"complete"),Et(s,"error"))}r.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,Et(this,"complete"),Et(this,"abort"),bn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),bn(this,!0)),tt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Ri(this):this.bb())},r.bb=function(){Ri(this)};function Ri(s){if(s.h&&typeof u<"u"&&(!s.v[1]||Bt(s)!=4||s.Z()!=2)){if(s.u&&Bt(s)==4)Qs(s.Ea,0,s);else if(Et(s,"readystatechange"),Bt(s)==4){s.h=!1;try{const C=s.Z();t:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var d;if(d=C===0){var v=String(s.D).match(mi)[1]||null;!v&&c.self&&c.self.location&&(v=c.self.location.protocol.slice(0,-1)),d=!Mu.test(v?v.toLowerCase():"")}l=d}if(l)Et(s,"complete"),Et(s,"success");else{s.m=6;try{var w=2<Bt(s)?s.g.statusText:""}catch{w=""}s.l=w+" ["+s.Z()+"]",wi(s)}}finally{bn(s)}}}}function bn(s,a){if(s.g){Pi(s);const l=s.g,d=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||Et(s,"ready");try{l.onreadystatechange=d}catch{}}}function Pi(s){s.I&&(c.clearTimeout(s.I),s.I=null)}r.isActive=function(){return!!this.g};function Bt(s){return s.g?s.g.readyState:0}r.Z=function(){try{return 2<Bt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),pu(a)}};function Vi(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Ou(s){const a={};s=(s.g&&2<=Bt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<s.length;d++){if(Q(s[d]))continue;var l=T(s[d]);const v=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const w=a[v]||[];a[v]=w,w.push(l)}E(a,function(d){return d.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function We(s,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[s]||a}function Si(s){this.Aa=0,this.i=[],this.j=new qe,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=We("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=We("baseRetryDelayMs",5e3,s),this.cb=We("retryDelaySeedMs",1e4,s),this.Wa=We("forwardChannelMaxRetries",2,s),this.wa=We("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new li(s&&s.concurrentRequestLimit),this.Da=new bu,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Si.prototype,r.la=8,r.G=1,r.connect=function(s,a,l,d){vt(0),this.W=s,this.H=a||{},l&&d!==void 0&&(this.H.OSID=l,this.H.OAID=d),this.F=this.X,this.I=Oi(this,null,this.W),Mn(this)};function qr(s){if(Ci(s),s.G==3){var a=s.U++,l=qt(s.I);if(Y(l,"SID",s.K),Y(l,"RID",a),Y(l,"TYPE","terminate"),He(s,l),a=new $t(s,s.j,a),a.L=2,a.v=kn(qt(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=a.v,l=!0),l||(a.g=Fi(a.j,null),a.g.ea(a.v)),a.F=Date.now(),Sn(a)}Li(s)}function xn(s){s.g&&(jr(s),s.g.cancel(),s.g=null)}function Ci(s){xn(s),s.u&&(c.clearTimeout(s.u),s.u=null),Ln(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&c.clearTimeout(s.s),s.s=null)}function Mn(s){if(!ci(s.h)&&!s.s){s.s=!0;var a=s.Ga;At||me(),Rt||(At(),Rt=!0),Ut.add(a,s),s.B=0}}function Fu(s,a){return hi(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Ue(R(s.Ga,s,a),Mi(s,s.B)),s.B++,!0)}r.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const v=new $t(this,this.j,s);let w=this.o;if(this.S&&(w?(w=p(w),y(w,this.S)):w=this.S),this.m!==null||this.O||(v.H=w,w=null),this.P)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var d=this.i[l];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(a+=d,4096<a){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=ki(this,v,a),l=qt(this.I),Y(l,"RID",s),Y(l,"CVER",22),this.D&&Y(l,"X-HTTP-Session-Id",this.D),He(this,l),w&&(this.O?a="headers="+encodeURIComponent(String(Ii(w)))+"&"+a:this.m&&Ur(l,this.m,w)),Fr(this.h,v),this.Ua&&Y(l,"TYPE","init"),this.P?(Y(l,"$req",a),Y(l,"SID","null"),v.T=!0,xr(v,l,null)):xr(v,l,a),this.G=2}}else this.G==3&&(s?Di(this,s):this.i.length==0||ci(this.h)||Di(this))};function Di(s,a){var l;a?l=a.l:l=s.U++;const d=qt(s.I);Y(d,"SID",s.K),Y(d,"RID",l),Y(d,"AID",s.T),He(s,d),s.m&&s.o&&Ur(d,s.m,s.o),l=new $t(s,s.j,l,s.B+1),s.m===null&&(l.H=s.o),a&&(s.i=a.D.concat(s.i)),a=ki(s,l,1e3),l.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Fr(s.h,l),xr(l,d,a)}function He(s,a){s.H&&st(s.H,function(l,d){Y(a,d,l)}),s.l&&pi({},function(l,d){Y(a,d,l)})}function ki(s,a,l){l=Math.min(s.i.length,l);var d=s.l?R(s.l.Na,s.l,s):null;t:{var v=s.i;let w=-1;for(;;){const C=["count="+l];w==-1?0<l?(w=v[0].g,C.push("ofs="+w)):w=0:C.push("ofs="+w);let W=!0;for(let ut=0;ut<l;ut++){let $=v[ut].g;const ft=v[ut].map;if($-=w,0>$)w=Math.max(0,v[ut].g-100),W=!1;else try{xu(ft,C,"req"+$+"_")}catch{d&&d(ft)}}if(W){d=C.join("&");break t}}}return s=s.i.splice(0,l),a.D=s,d}function Ni(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;At||me(),Rt||(At(),Rt=!0),Ut.add(a,s),s.v=0}}function Br(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Ue(R(s.Fa,s),Mi(s,s.v)),s.v++,!0)}r.Fa=function(){if(this.u=null,bi(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Ue(R(this.ab,this),s)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,vt(10),xn(this),bi(this))};function jr(s){s.A!=null&&(c.clearTimeout(s.A),s.A=null)}function bi(s){s.g=new $t(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=qt(s.qa);Y(a,"RID","rpc"),Y(a,"SID",s.K),Y(a,"AID",s.T),Y(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&Y(a,"TO",s.ja),Y(a,"TYPE","xmlhttp"),He(s,a),s.m&&s.o&&Ur(a,s.m,s.o),s.L&&(s.g.I=s.L);var l=s.g;s=s.ia,l.L=1,l.v=kn(qt(a)),l.m=null,l.P=!0,oi(l,s)}r.Za=function(){this.C!=null&&(this.C=null,xn(this),Br(this),vt(19))};function Ln(s){s.C!=null&&(c.clearTimeout(s.C),s.C=null)}function xi(s,a){var l=null;if(s.g==a){Ln(s),jr(s),s.g=null;var d=2}else if(Or(s.h,a))l=a.D,di(s.h,a),d=1;else return;if(s.G!=0){if(a.o)if(d==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var v=s.B;d=Rn(),Et(d,new ni(d,l)),Mn(s)}else Ni(s);else if(v=a.s,v==3||v==0&&0<a.X||!(d==1&&Fu(s,a)||d==2&&Br(s)))switch(l&&0<l.length&&(a=s.h,a.i=a.i.concat(l)),v){case 1:oe(s,5);break;case 4:oe(s,10);break;case 3:oe(s,6);break;default:oe(s,2)}}}function Mi(s,a){let l=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(l*=2),l*a}function oe(s,a){if(s.j.info("Error code "+a),a==2){var l=R(s.fb,s),d=s.Xa;const v=!d;d=new ie(d||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Cn(d,"https"),kn(d),v?ku(d.toString(),l):Nu(d.toString(),l)}else vt(2);s.G=0,s.l&&s.l.sa(a),Li(s),Ci(s)}r.fb=function(s){s?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function Li(s){if(s.G=0,s.ka=[],s.l){const a=fi(s.h);(a.length!=0||s.i.length!=0)&&(D(s.ka,a),D(s.ka,s.i),s.h.i.length=0,x(s.i),s.i.length=0),s.l.ra()}}function Oi(s,a,l){var d=l instanceof ie?qt(l):new ie(l);if(d.g!="")a&&(d.g=a+"."+d.g),Dn(d,d.s);else{var v=c.location;d=v.protocol,a=a?a+"."+v.hostname:v.hostname,v=+v.port;var w=new ie(null);d&&Cn(w,d),a&&(w.g=a),v&&Dn(w,v),l&&(w.l=l),d=w}return l=s.D,a=s.ya,l&&a&&Y(d,l,a),Y(d,"VER",s.la),He(s,d),d}function Fi(s,a,l){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new tt(new $e({eb:l})):new tt(s.pa),a.Ha(s.J),a}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ui(){}r=Ui.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function On(){}On.prototype.g=function(s,a){return new Pt(s,a)};function Pt(s,a){dt.call(this),this.g=new Si(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!Q(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!Q(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new ye(this)}k(Pt,dt),Pt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Pt.prototype.close=function(){qr(this.g)},Pt.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var l={};l.__data__=s,s=l}else this.u&&(l={},l.__data__=Sr(s),s=l);a.i.push(new vu(a.Ya++,s)),a.G==3&&Mn(a)},Pt.prototype.N=function(){this.g.l=null,delete this.j,qr(this.g),delete this.g,Pt.aa.N.call(this)};function qi(s){Dr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const l in a){s=l;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}k(qi,Dr);function Bi(){kr.call(this),this.status=1}k(Bi,kr);function ye(s){this.g=s}k(ye,Ui),ye.prototype.ua=function(){Et(this.g,"a")},ye.prototype.ta=function(s){Et(this.g,new qi(s))},ye.prototype.sa=function(s){Et(this.g,new Bi)},ye.prototype.ra=function(){Et(this.g,"b")},On.prototype.createWebChannel=On.prototype.g,Pt.prototype.send=Pt.prototype.o,Pt.prototype.open=Pt.prototype.m,Pt.prototype.close=Pt.prototype.close,Lo=function(){return new On},Mo=function(){return Rn()},xo=re,Hr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Pn.NO_ERROR=0,Pn.TIMEOUT=8,Pn.HTTP_ERROR=6,zn=Pn,ri.COMPLETE="complete",bo=ri,Js.EventType=Oe,Oe.OPEN="a",Oe.CLOSE="b",Oe.ERROR="c",Oe.MESSAGE="d",dt.prototype.listen=dt.prototype.K,Ye=Js,No=$e,tt.prototype.listenOnce=tt.prototype.L,tt.prototype.getLastError=tt.prototype.Ka,tt.prototype.getLastErrorCode=tt.prototype.Ba,tt.prototype.getStatus=tt.prototype.Z,tt.prototype.getResponseJson=tt.prototype.Oa,tt.prototype.getResponseText=tt.prototype.oa,tt.prototype.send=tt.prototype.ea,tt.prototype.setWithCredentials=tt.prototype.Ha,ko=tt}).apply(typeof Un<"u"?Un:typeof self<"u"?self:typeof window<"u"?window:{});const Gi="@firebase/firestore";/**
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
 */class gt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
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
 */const le=new Uu("@firebase/firestore");function Xe(){return le.logLevel}function b(r,...t){if(le.logLevel<=Wt.DEBUG){const e=t.map(ds);le.debug(`Firestore (${ke}): ${r}`,...e)}}function jt(r,...t){if(le.logLevel<=Wt.ERROR){const e=t.map(ds);le.error(`Firestore (${ke}): ${r}`,...e)}}function we(r,...t){if(le.logLevel<=Wt.WARN){const e=t.map(ds);le.warn(`Firestore (${ke}): ${r}`,...e)}}function ds(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function O(r="Unexpected state"){const t=`FIRESTORE (${ke}) INTERNAL ASSERTION FAILED: `+r;throw jt(t),new Error(t)}function X(r,t){r||O()}function U(r,t){return r}/**
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
 */class Oo{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class el{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(gt.UNAUTHENTICATED))}shutdown(){}}class nl{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class rl{constructor(t){this.t=t,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const i=h=>this.i!==n?(n=this.i,e(h)):Promise.resolve();let o=new Xt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Xt,t.enqueueRetryable(()=>i(this.currentUser))};const u=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},c=h=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.auth.addAuthTokenListener(this.o),u()};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Xt)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(X(typeof n.accessToken=="string"),new Oo(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return X(t===null||typeof t=="string"),new gt(t)}}class sl{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class il{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new sl(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ol{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class al{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const n=o=>{o.error!=null&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,b("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>n(o))};const i=o=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(X(typeof e.token=="string"),this.R=e.token,new ol(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Fo{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=ul(40);for(let o=0;o<i.length;++o)n.length<20&&i[o]<e&&(n+=t.charAt(i[o]%t.length))}return n}}function K(r,t){return r<t?-1:r>t?1:0}function Re(r,t,e){return r.length===t.length&&r.every((n,i)=>e(n,t[i]))}/**
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
 */class ot{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new N(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ot.fromMillis(Date.now())}static fromDate(t){return ot.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new ot(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?K(this.nanoseconds,t.nanoseconds):K(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class F{constructor(t){this.timestamp=t}static fromTimestamp(t){return new F(t)}static min(){return new F(new ot(0,0))}static max(){return new F(new ot(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class on{constructor(t,e,n){e===void 0?e=0:e>t.length&&O(),n===void 0?n=t.length-e:n>t.length-e&&O(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return on.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof on?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const o=t.get(i),u=e.get(i);if(o<u)return-1;if(o>u)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class J extends on{construct(t,e,n){return new J(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new N(P.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(i=>i.length>0))}return new J(e)}static emptyPath(){return new J([])}}const ll=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends on{construct(t,e,n){return new ct(t,e,n)}static isValidIdentifier(t){return ll.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ct(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const o=()=>{if(n.length===0)throw new N(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let u=!1;for(;i<t.length;){const c=t[i];if(c==="\\"){if(i+1===t.length)throw new N(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new N(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=h,i+=2}else c==="`"?(u=!u,i++):c!=="."||u?(n+=c,i++):(o(),i++)}if(o(),u)throw new N(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ct(e)}static emptyPath(){return new ct([])}}/**
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
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(J.fromString(t))}static fromName(t){return new M(J.fromString(t).popFirst(5))}static empty(){return new M(J.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&J.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return J.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new J(t.slice()))}}function cl(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=F.fromTimestamp(n===1e9?new ot(e+1,0):new ot(e,n));return new Jt(i,M.empty(),t)}function hl(r){return new Jt(r.readTime,r.key,-1)}class Jt{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Jt(F.min(),M.empty(),-1)}static max(){return new Jt(F.max(),M.empty(),-1)}}function dl(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(r.documentKey,t.documentKey),e!==0?e:K(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function pn(r){if(r.code!==P.FAILED_PRECONDITION||r.message!==fl)throw r;b("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class S{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new S((n,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof S?e:S.resolve(e)}catch(e){return S.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):S.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):S.reject(e)}static resolve(t){return new S((e,n)=>{e(t)})}static reject(t){return new S((e,n)=>{n(t)})}static waitFor(t){return new S((e,n)=>{let i=0,o=0,u=!1;t.forEach(c=>{++i,c.next(()=>{++o,u&&o===i&&e()},h=>n(h))}),u=!0,o===i&&e()})}static or(t){let e=S.resolve(!1);for(const n of t)e=e.next(i=>i?S.resolve(i):n());return e}static forEach(t,e){const n=[];return t.forEach((i,o)=>{n.push(e.call(this,i,o))}),this.waitFor(n)}static mapArray(t,e){return new S((n,i)=>{const o=t.length,u=new Array(o);let c=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(m=>{u[f]=m,++c,c===o&&n(u)},m=>i(m))}})}static doWhile(t,e){return new S((n,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):n()};o()})}}function ml(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function mn(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class fs{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ie(n),this.se=n=>e.writeSequenceNumber(n))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}fs.oe=-1;function er(r){return r==null}function Wn(r){return r===0&&1/r==-1/0}function gl(r){return typeof r=="number"&&Number.isInteger(r)&&!Wn(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */function $i(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function de(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function Uo(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class Z{constructor(t,e){this.comparator=t,this.root=e||lt.EMPTY}insert(t,e){return new Z(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(t){return new Z(this.comparator,this.root.remove(t,this.comparator).copy(null,null,lt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new qn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new qn(this.root,t,this.comparator,!1)}getReverseIterator(){return new qn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new qn(this.root,t,this.comparator,!0)}}class qn{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class lt{constructor(t,e,n,i,o){this.key=t,this.value=e,this.color=n??lt.RED,this.left=i??lt.EMPTY,this.right=o??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,o){return new lt(t??this.key,e??this.value,n??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const o=n(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,n),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return lt.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw O();const t=this.left.check();if(t!==this.right.check())throw O();return t+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw O()}get value(){throw O()}get color(){throw O()}get left(){throw O()}get right(){throw O()}copy(t,e,n,i,o){return this}insert(t,e,n){return new lt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ht{constructor(t){this.comparator=t,this.data=new Z(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ki(this.data.getIterator())}getIteratorFrom(t){return new Ki(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof ht)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ht(this.comparator);return e.data=t,e}}class Ki{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t){this.fields=t,t.sort(ct.comparator)}static empty(){return new Vt([])}unionWith(t){let e=new ht(ct.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Vt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Re(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
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
 */class qo extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new qo("Invalid base64 string: "+o):o}}(t);return new Tt(e)}static fromUint8Array(t){const e=function(i){let o="";for(let u=0;u<i.length;++u)o+=String.fromCharCode(i[u]);return o}(t);return new Tt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return K(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Tt.EMPTY_BYTE_STRING=new Tt("");const _l=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zt(r){if(X(!!r),typeof r=="string"){let t=0;const e=_l.exec(r);if(X(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:nt(r.seconds),nanos:nt(r.nanos)}}function nt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ce(r){return typeof r=="string"?Tt.fromBase64String(r):Tt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function ms(r){const t=r.mapValue.fields.__previous_value__;return ps(t)?ms(t):t}function an(r){const t=Zt(r.mapValue.fields.__local_write_time__.timestampValue);return new ot(t.seconds,t.nanos)}/**
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
 */class yl{constructor(t,e,n,i,o,u,c,h,f){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=f}}class un{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new un("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof un&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function he(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?ps(r)?4:Tl(r)?9007199254740991:10:O()}function Ft(r,t){if(r===t)return!0;const e=he(r);if(e!==he(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return an(r).isEqual(an(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const u=Zt(i.timestampValue),c=Zt(o.timestampValue);return u.seconds===c.seconds&&u.nanos===c.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(i,o){return ce(i.bytesValue).isEqual(ce(o.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(i,o){return nt(i.geoPointValue.latitude)===nt(o.geoPointValue.latitude)&&nt(i.geoPointValue.longitude)===nt(o.geoPointValue.longitude)}(r,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return nt(i.integerValue)===nt(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const u=nt(i.doubleValue),c=nt(o.doubleValue);return u===c?Wn(u)===Wn(c):isNaN(u)&&isNaN(c)}return!1}(r,t);case 9:return Re(r.arrayValue.values||[],t.arrayValue.values||[],Ft);case 10:return function(i,o){const u=i.mapValue.fields||{},c=o.mapValue.fields||{};if($i(u)!==$i(c))return!1;for(const h in u)if(u.hasOwnProperty(h)&&(c[h]===void 0||!Ft(u[h],c[h])))return!1;return!0}(r,t);default:return O()}}function ln(r,t){return(r.values||[]).find(e=>Ft(e,t))!==void 0}function Pe(r,t){if(r===t)return 0;const e=he(r),n=he(t);if(e!==n)return K(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return K(r.booleanValue,t.booleanValue);case 2:return function(o,u){const c=nt(o.integerValue||o.doubleValue),h=nt(u.integerValue||u.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(r,t);case 3:return Qi(r.timestampValue,t.timestampValue);case 4:return Qi(an(r),an(t));case 5:return K(r.stringValue,t.stringValue);case 6:return function(o,u){const c=ce(o),h=ce(u);return c.compareTo(h)}(r.bytesValue,t.bytesValue);case 7:return function(o,u){const c=o.split("/"),h=u.split("/");for(let f=0;f<c.length&&f<h.length;f++){const m=K(c[f],h[f]);if(m!==0)return m}return K(c.length,h.length)}(r.referenceValue,t.referenceValue);case 8:return function(o,u){const c=K(nt(o.latitude),nt(u.latitude));return c!==0?c:K(nt(o.longitude),nt(u.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return function(o,u){const c=o.values||[],h=u.values||[];for(let f=0;f<c.length&&f<h.length;++f){const m=Pe(c[f],h[f]);if(m)return m}return K(c.length,h.length)}(r.arrayValue,t.arrayValue);case 10:return function(o,u){if(o===Bn.mapValue&&u===Bn.mapValue)return 0;if(o===Bn.mapValue)return 1;if(u===Bn.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),f=u.fields||{},m=Object.keys(f);h.sort(),m.sort();for(let A=0;A<h.length&&A<m.length;++A){const R=K(h[A],m[A]);if(R!==0)return R;const V=Pe(c[h[A]],f[m[A]]);if(V!==0)return V}return K(h.length,m.length)}(r.mapValue,t.mapValue);default:throw O()}}function Qi(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return K(r,t);const e=Zt(r),n=Zt(t),i=K(e.seconds,n.seconds);return i!==0?i:K(e.nanos,n.nanos)}function Ve(r){return Xr(r)}function Xr(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=Zt(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return ce(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return M.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",i=!0;for(const o of e.values||[])i?i=!1:n+=",",n+=Xr(o);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const u of n)o?o=!1:i+=",",i+=`${u}:${Xr(e.fields[u])}`;return i+"}"}(r.mapValue):O()}function Wi(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function Yr(r){return!!r&&"integerValue"in r}function gs(r){return!!r&&"arrayValue"in r}function Hi(r){return!!r&&"nullValue"in r}function Xi(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Gn(r){return!!r&&"mapValue"in r}function en(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return de(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=en(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=en(r.arrayValue.values[e]);return t}return Object.assign({},r)}function Tl(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class wt{constructor(t){this.value=t}static empty(){return new wt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Gn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=en(e)}setAll(t){let e=ct.emptyPath(),n={},i=[];t.forEach((u,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,n,i),n={},i=[],e=c.popLast()}u?n[c.lastSegment()]=en(u):i.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,n,i)}delete(t){const e=this.field(t.popLast());Gn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ft(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];Gn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){de(e,(i,o)=>t[i]=o);for(const i of n)delete t[i]}clone(){return new wt(en(this.value))}}function Bo(r){const t=[];return de(r.fields,(e,n)=>{const i=new ct([e]);if(Gn(n)){const o=Bo(n.mapValue).fields;if(o.length===0)t.push(i);else for(const u of o)t.push(i.child(u))}else t.push(i)}),new Vt(t)}/**
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
 */class _t{constructor(t,e,n,i,o,u,c){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=o,this.data=u,this.documentState=c}static newInvalidDocument(t){return new _t(t,0,F.min(),F.min(),F.min(),wt.empty(),0)}static newFoundDocument(t,e,n,i){return new _t(t,1,e,F.min(),n,i,0)}static newNoDocument(t,e){return new _t(t,2,e,F.min(),F.min(),wt.empty(),0)}static newUnknownDocument(t,e){return new _t(t,3,e,F.min(),F.min(),wt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof _t&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Hn{constructor(t,e){this.position=t,this.inclusive=e}}function Yi(r,t,e){let n=0;for(let i=0;i<r.position.length;i++){const o=t[i],u=r.position[i];if(o.field.isKeyField()?n=M.comparator(M.fromName(u.referenceValue),e.key):n=Pe(u,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function Ji(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!Ft(r.position[e],t.position[e]))return!1;return!0}/**
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
 */class cn{constructor(t,e="asc"){this.field=t,this.dir=e}}function El(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class jo{}class rt extends jo{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new Il(t,e,n):e==="array-contains"?new Rl(t,n):e==="in"?new Pl(t,n):e==="not-in"?new Vl(t,n):e==="array-contains-any"?new Sl(t,n):new rt(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new Al(t,n):new wl(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Pe(e,this.value)):e!==null&&he(this.value)===he(e)&&this.matchesComparison(Pe(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return O()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xt extends jo{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new xt(t,e)}matches(t){return zo(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function zo(r){return r.op==="and"}function Go(r){return vl(r)&&zo(r)}function vl(r){for(const t of r.filters)if(t instanceof xt)return!1;return!0}function Jr(r){if(r instanceof rt)return r.field.canonicalString()+r.op.toString()+Ve(r.value);if(Go(r))return r.filters.map(t=>Jr(t)).join(",");{const t=r.filters.map(e=>Jr(e)).join(",");return`${r.op}(${t})`}}function $o(r,t){return r instanceof rt?function(n,i){return i instanceof rt&&n.op===i.op&&n.field.isEqual(i.field)&&Ft(n.value,i.value)}(r,t):r instanceof xt?function(n,i){return i instanceof xt&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((o,u,c)=>o&&$o(u,i.filters[c]),!0):!1}(r,t):void O()}function Ko(r){return r instanceof rt?function(e){return`${e.field.canonicalString()} ${e.op} ${Ve(e.value)}`}(r):r instanceof xt?function(e){return e.op.toString()+" {"+e.getFilters().map(Ko).join(" ,")+"}"}(r):"Filter"}class Il extends rt{constructor(t,e,n){super(t,e,n),this.key=M.fromName(n.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class Al extends rt{constructor(t,e){super(t,"in",e),this.keys=Qo("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class wl extends rt{constructor(t,e){super(t,"not-in",e),this.keys=Qo("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Qo(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>M.fromName(n.referenceValue))}class Rl extends rt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return gs(e)&&ln(e.arrayValue,this.value)}}class Pl extends rt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&ln(this.value.arrayValue,e)}}class Vl extends rt{constructor(t,e){super(t,"not-in",e)}matches(t){if(ln(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!ln(this.value.arrayValue,e)}}class Sl extends rt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!gs(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>ln(this.value.arrayValue,n))}}/**
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
 */class Cl{constructor(t,e=null,n=[],i=[],o=null,u=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=o,this.startAt=u,this.endAt=c,this.ue=null}}function Zi(r,t=null,e=[],n=[],i=null,o=null,u=null){return new Cl(r,t,e,n,i,o,u)}function _s(r){const t=U(r);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>Jr(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),er(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Ve(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Ve(n)).join(",")),t.ue=e}return t.ue}function ys(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!El(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!$o(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!Ji(r.startAt,t.startAt)&&Ji(r.endAt,t.endAt)}function Zr(r){return M.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class Ne{constructor(t,e=null,n=[],i=[],o=null,u="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=o,this.limitType=u,this.startAt=c,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Dl(r,t,e,n,i,o,u,c){return new Ne(r,t,e,n,i,o,u,c)}function nr(r){return new Ne(r)}function to(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Wo(r){return r.collectionGroup!==null}function nn(r){const t=U(r);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let c=new ht(ct.comparator);return u.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new cn(o,n))}),e.has(ct.keyField().canonicalString())||t.ce.push(new cn(ct.keyField(),n))}return t.ce}function Mt(r){const t=U(r);return t.le||(t.le=kl(t,nn(r))),t.le}function kl(r,t){if(r.limitType==="F")return Zi(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new cn(i.field,o)});const e=r.endAt?new Hn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Hn(r.startAt.position,r.startAt.inclusive):null;return Zi(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function ts(r,t){const e=r.filters.concat([t]);return new Ne(r.path,r.collectionGroup,r.explicitOrderBy.slice(),e,r.limit,r.limitType,r.startAt,r.endAt)}function es(r,t,e){return new Ne(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function rr(r,t){return ys(Mt(r),Mt(t))&&r.limitType===t.limitType}function Ho(r){return`${_s(Mt(r))}|lt:${r.limitType}`}function Ee(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>Ko(i)).join(", ")}]`),er(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Ve(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Ve(i)).join(",")),`Target(${n})`}(Mt(r))}; limitType=${r.limitType})`}function sr(r,t){return t.isFoundDocument()&&function(n,i){const o=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):M.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(r,t)&&function(n,i){for(const o of nn(n))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(r,t)&&function(n,i){for(const o of n.filters)if(!o.matches(i))return!1;return!0}(r,t)&&function(n,i){return!(n.startAt&&!function(u,c,h){const f=Yi(u,c,h);return u.inclusive?f<=0:f<0}(n.startAt,nn(n),i)||n.endAt&&!function(u,c,h){const f=Yi(u,c,h);return u.inclusive?f>=0:f>0}(n.endAt,nn(n),i))}(r,t)}function Nl(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Xo(r){return(t,e)=>{let n=!1;for(const i of nn(r)){const o=bl(i,t,e);if(o!==0)return o;n=n||i.field.isKeyField()}return 0}}function bl(r,t,e){const n=r.field.isKeyField()?M.comparator(t.key,e.key):function(o,u,c){const h=u.data.field(o),f=c.data.field(o);return h!==null&&f!==null?Pe(h,f):O()}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return O()}}/**
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
 */class be{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[i,o]of n)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return n.length===1?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){de(this.inner,(e,n)=>{for(const[i,o]of n)t(i,o)})}isEmpty(){return Uo(this.inner)}size(){return this.innerSize}}/**
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
 */const xl=new Z(M.comparator);function zt(){return xl}const Yo=new Z(M.comparator);function Je(...r){let t=Yo;for(const e of r)t=t.insert(e.key,e);return t}function Jo(r){let t=Yo;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function ae(){return rn()}function Zo(){return rn()}function rn(){return new be(r=>r.toString(),(r,t)=>r.isEqual(t))}const Ml=new Z(M.comparator),Ll=new ht(M.comparator);function q(...r){let t=Ll;for(const e of r)t=t.add(e);return t}const Ol=new ht(K);function Fl(){return Ol}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wn(t)?"-0":t}}function ea(r){return{integerValue:""+r}}function Ul(r,t){return gl(t)?ea(t):ta(r,t)}/**
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
 */class ir{constructor(){this._=void 0}}function ql(r,t,e){return r instanceof hn?function(i,o){const u={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&ps(o)&&(o=ms(o)),o&&(u.fields.__previous_value__=o),{mapValue:u}}(e,t):r instanceof dn?ra(r,t):r instanceof fn?sa(r,t):function(i,o){const u=na(i,o),c=eo(u)+eo(i.Pe);return Yr(u)&&Yr(i.Pe)?ea(c):ta(i.serializer,c)}(r,t)}function Bl(r,t,e){return r instanceof dn?ra(r,t):r instanceof fn?sa(r,t):e}function na(r,t){return r instanceof Xn?function(n){return Yr(n)||function(o){return!!o&&"doubleValue"in o}(n)}(t)?t:{integerValue:0}:null}class hn extends ir{}class dn extends ir{constructor(t){super(),this.elements=t}}function ra(r,t){const e=ia(t);for(const n of r.elements)e.some(i=>Ft(i,n))||e.push(n);return{arrayValue:{values:e}}}class fn extends ir{constructor(t){super(),this.elements=t}}function sa(r,t){let e=ia(t);for(const n of r.elements)e=e.filter(i=>!Ft(i,n));return{arrayValue:{values:e}}}class Xn extends ir{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function eo(r){return nt(r.integerValue||r.doubleValue)}function ia(r){return gs(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class jl{constructor(t,e){this.field=t,this.transform=e}}function zl(r,t){return r.field.isEqual(t.field)&&function(n,i){return n instanceof dn&&i instanceof dn||n instanceof fn&&i instanceof fn?Re(n.elements,i.elements,Ft):n instanceof Xn&&i instanceof Xn?Ft(n.Pe,i.Pe):n instanceof hn&&i instanceof hn}(r.transform,t.transform)}class Gl{constructor(t,e){this.version=t,this.transformResults=e}}class Ct{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ct}static exists(t){return new Ct(void 0,t)}static updateTime(t){return new Ct(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function $n(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class or{}function oa(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Ts(r.key,Ct.none()):new gn(r.key,r.data,Ct.none());{const e=r.data,n=wt.empty();let i=new ht(ct.comparator);for(let o of t.fields)if(!i.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?n.delete(o):n.set(o,u),i=i.add(o)}return new ne(r.key,n,new Vt(i.toArray()),Ct.none())}}function $l(r,t,e){r instanceof gn?function(i,o,u){const c=i.value.clone(),h=ro(i.fieldTransforms,o,u.transformResults);c.setAll(h),o.convertToFoundDocument(u.version,c).setHasCommittedMutations()}(r,t,e):r instanceof ne?function(i,o,u){if(!$n(i.precondition,o))return void o.convertToUnknownDocument(u.version);const c=ro(i.fieldTransforms,o,u.transformResults),h=o.data;h.setAll(aa(i)),h.setAll(c),o.convertToFoundDocument(u.version,h).setHasCommittedMutations()}(r,t,e):function(i,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function sn(r,t,e,n){return r instanceof gn?function(o,u,c,h){if(!$n(o.precondition,u))return c;const f=o.value.clone(),m=so(o.fieldTransforms,h,u);return f.setAll(m),u.convertToFoundDocument(u.version,f).setHasLocalMutations(),null}(r,t,e,n):r instanceof ne?function(o,u,c,h){if(!$n(o.precondition,u))return c;const f=so(o.fieldTransforms,h,u),m=u.data;return m.setAll(aa(o)),m.setAll(f),u.convertToFoundDocument(u.version,m).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(A=>A.field))}(r,t,e,n):function(o,u,c){return $n(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):c}(r,t,e)}function Kl(r,t){let e=null;for(const n of r.fieldTransforms){const i=t.data.field(n.field),o=na(n.transform,i||null);o!=null&&(e===null&&(e=wt.empty()),e.set(n.field,o))}return e||null}function no(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Re(n,i,(o,u)=>zl(o,u))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class gn extends or{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ne extends or{constructor(t,e,n,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function aa(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function ro(r,t,e){const n=new Map;X(r.length===e.length);for(let i=0;i<e.length;i++){const o=r[i],u=o.transform,c=t.data.field(o.field);n.set(o.field,Bl(u,c,e[i]))}return n}function so(r,t,e){const n=new Map;for(const i of r){const o=i.transform,u=e.data.field(i.field);n.set(i.field,ql(o,u,t))}return n}class Ts extends or{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ql extends or{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Wl{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&$l(o,t,n[i])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=sn(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=sn(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Zo();return this.mutations.forEach(i=>{const o=t.get(i.key),u=o.overlayedDocument;let c=this.applyToLocalView(u,o.mutatedFields);c=e.has(i.key)?null:c;const h=oa(u,c);h!==null&&n.set(i.key,h),u.isValidDocument()||u.convertToNoDocument(F.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),q())}isEqual(t){return this.batchId===t.batchId&&Re(this.mutations,t.mutations,(e,n)=>no(e,n))&&Re(this.baseMutations,t.baseMutations,(e,n)=>no(e,n))}}class Es{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){X(t.mutations.length===n.length);let i=function(){return Ml}();const o=t.mutations;for(let u=0;u<o.length;u++)i=i.insert(o[u].key,n[u].version);return new Es(t,e,n,i)}}/**
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
 */var et,G;function Yl(r){switch(r){default:return O();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function ua(r){if(r===void 0)return jt("GRPC error has no .code"),P.UNKNOWN;switch(r){case et.OK:return P.OK;case et.CANCELLED:return P.CANCELLED;case et.UNKNOWN:return P.UNKNOWN;case et.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case et.INTERNAL:return P.INTERNAL;case et.UNAVAILABLE:return P.UNAVAILABLE;case et.UNAUTHENTICATED:return P.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case et.NOT_FOUND:return P.NOT_FOUND;case et.ALREADY_EXISTS:return P.ALREADY_EXISTS;case et.PERMISSION_DENIED:return P.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case et.ABORTED:return P.ABORTED;case et.OUT_OF_RANGE:return P.OUT_OF_RANGE;case et.UNIMPLEMENTED:return P.UNIMPLEMENTED;case et.DATA_LOSS:return P.DATA_LOSS;default:return O()}}(G=et||(et={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const Zl=new ue([4294967295,4294967295],0);function io(r){const t=Jl().encode(r),e=new Do;return e.update(t),new Uint8Array(e.digest())}function oo(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new ue([e,n],0),new ue([i,o],0)]}class vs{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Ze(`Invalid padding: ${e}`);if(n<0)throw new Ze(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new Ze(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new Ze(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=ue.fromNumber(this.Ie)}Ee(t,e,n){let i=t.add(e.multiply(ue.fromNumber(n)));return i.compare(Zl)===1&&(i=new ue([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=io(t),[n,i]=oo(e);for(let o=0;o<this.hashCount;o++){const u=this.Ee(n,i,o);if(!this.de(u))return!1}return!0}static create(t,e,n){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),u=new vs(o,i,e);return n.forEach(c=>u.insert(c)),u}insert(t){if(this.Ie===0)return;const e=io(t),[n,i]=oo(e);for(let o=0;o<this.hashCount;o++){const u=this.Ee(n,i,o);this.Ae(u)}}Ae(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Ze extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ar{constructor(t,e,n,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,_n.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new ar(F.min(),i,new Z(K),zt(),q())}}class _n{constructor(t,e,n,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new _n(n,e,q(),q(),q())}}/**
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
 */class Kn{constructor(t,e,n,i){this.Re=t,this.removedTargetIds=e,this.key=n,this.Ve=i}}class la{constructor(t,e){this.targetId=t,this.me=e}}class ca{constructor(t,e,n=Tt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class ao{constructor(){this.fe=0,this.ge=lo(),this.pe=Tt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}Ce(){let t=q(),e=q(),n=q();return this.ge.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:O()}}),new _n(this.pe,this.ye,t,e,n)}ve(){this.we=!1,this.ge=lo()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,X(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class tc{constructor(t){this.Le=t,this.Be=new Map,this.ke=zt(),this.qe=uo(),this.Qe=new Z(K)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const n=this.Ge(e);switch(t.state){case 0:this.ze(e)&&n.De(t.resumeToken);break;case 1:n.Oe(),n.Se||n.ve(),n.De(t.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(n.Ne(),n.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),n.De(t.resumeToken));break;default:O()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((n,i)=>{this.ze(i)&&e(i)})}He(t){const e=t.targetId,n=t.me.count,i=this.Je(e);if(i){const o=i.target;if(Zr(o))if(n===0){const u=new M(o.path);this.Ue(e,u,_t.newNoDocument(u,F.min()))}else X(n===1);else{const u=this.Ye(e);if(u!==n){const c=this.Ze(t),h=c?this.Xe(c,t,u):1;if(h!==0){this.je(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,f)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:o=0}=e;let u,c;try{u=ce(n).toUint8Array()}catch(h){if(h instanceof qo)return we("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new vs(u,i,o)}catch(h){return we(h instanceof Ze?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.Ie===0?null:c}Xe(t,e,n){return e.me.count===n-this.nt(t,e.targetId)?0:2}nt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let i=0;return n.forEach(o=>{const u=this.Le.tt(),c=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.Ue(e,o,null),i++)}),i}rt(t){const e=new Map;this.Be.forEach((o,u)=>{const c=this.Je(u);if(c){if(o.current&&Zr(c.target)){const h=new M(c.target.path);this.ke.get(h)!==null||this.it(u,h)||this.Ue(u,h,_t.newNoDocument(h,t))}o.be&&(e.set(u,o.Ce()),o.ve())}});let n=q();this.qe.forEach((o,u)=>{let c=!0;u.forEachWhile(h=>{const f=this.Je(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(n=n.add(o))}),this.ke.forEach((o,u)=>u.setReadTime(t));const i=new ar(t,e,this.Qe,this.ke,n);return this.ke=zt(),this.qe=uo(),this.Qe=new Z(K),i}$e(t,e){if(!this.ze(t))return;const n=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,n),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,n){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,e)?i.Fe(e,1):i.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),n&&(this.ke=this.ke.insert(e,n))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).Ce();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new ao,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new ht(K),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||b("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new ao),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function uo(){return new Z(M.comparator)}function lo(){return new Z(M.comparator)}const ec={asc:"ASCENDING",desc:"DESCENDING"},nc={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},rc={and:"AND",or:"OR"};class sc{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ns(r,t){return r.useProto3Json||er(t)?t:{value:t}}function Yn(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ha(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function ic(r,t){return Yn(r,t.toTimestamp())}function Lt(r){return X(!!r),F.fromTimestamp(function(e){const n=Zt(e);return new ot(n.seconds,n.nanos)}(r))}function Is(r,t){return rs(r,t).canonicalString()}function rs(r,t){const e=function(i){return new J(["projects",i.projectId,"databases",i.database])}(r).child("documents");return t===void 0?e:e.child(t)}function da(r){const t=J.fromString(r);return X(_a(t)),t}function ss(r,t){return Is(r.databaseId,t.path)}function $r(r,t){const e=da(t);if(e.get(1)!==r.databaseId.projectId)throw new N(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new N(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new M(pa(e))}function fa(r,t){return Is(r.databaseId,t)}function oc(r){const t=da(r);return t.length===4?J.emptyPath():pa(t)}function is(r){return new J(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function pa(r){return X(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function co(r,t,e){return{name:ss(r,t),fields:e.value.mapValue.fields}}function ac(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:O()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(f,m){return f.useProto3Json?(X(m===void 0||typeof m=="string"),Tt.fromBase64String(m||"")):(X(m===void 0||m instanceof Buffer||m instanceof Uint8Array),Tt.fromUint8Array(m||new Uint8Array))}(r,t.targetChange.resumeToken),u=t.targetChange.cause,c=u&&function(f){const m=f.code===void 0?P.UNKNOWN:ua(f.code);return new N(m,f.message||"")}(u);e=new ca(n,i,o,c||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const i=$r(r,n.document.name),o=Lt(n.document.updateTime),u=n.document.createTime?Lt(n.document.createTime):F.min(),c=new wt({mapValue:{fields:n.document.fields}}),h=_t.newFoundDocument(i,o,u,c),f=n.targetIds||[],m=n.removedTargetIds||[];e=new Kn(f,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const i=$r(r,n.document),o=n.readTime?Lt(n.readTime):F.min(),u=_t.newNoDocument(i,o),c=n.removedTargetIds||[];e=new Kn([],c,u.key,u)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const i=$r(r,n.document),o=n.removedTargetIds||[];e=new Kn([],o,i,null)}else{if(!("filter"in t))return O();{t.filter;const n=t.filter;n.targetId;const{count:i=0,unchangedNames:o}=n,u=new Xl(i,o),c=n.targetId;e=new la(c,u)}}return e}function uc(r,t){let e;if(t instanceof gn)e={update:co(r,t.key,t.value)};else if(t instanceof Ts)e={delete:ss(r,t.key)};else if(t instanceof ne)e={update:co(r,t.key,t.data),updateMask:_c(t.fieldMask)};else{if(!(t instanceof Ql))return O();e={verify:ss(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(o,u){const c=u.transform;if(c instanceof hn)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof dn)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof fn)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Xn)return{fieldPath:u.field.canonicalString(),increment:c.Pe};throw O()}(0,n))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:ic(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:O()}(r,t.precondition)),e}function lc(r,t){return r&&r.length>0?(X(t!==void 0),r.map(e=>function(i,o){let u=i.updateTime?Lt(i.updateTime):Lt(o);return u.isEqual(F.min())&&(u=Lt(o)),new Gl(u,i.transformResults||[])}(e,t))):[]}function cc(r,t){return{documents:[fa(r,t.path)]}}function hc(r,t){const e={structuredQuery:{}},n=t.path;let i;t.collectionGroup!==null?(i=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=fa(r,i);const o=function(f){if(f.length!==0)return ga(xt.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const u=function(f){if(f.length!==0)return f.map(m=>function(R){return{field:ve(R.field),direction:pc(R.dir)}}(m))}(t.orderBy);u&&(e.structuredQuery.orderBy=u);const c=ns(r,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{_t:e,parent:i}}function dc(r){let t=oc(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let i=null;if(n>0){X(n===1);const m=e.from[0];m.allDescendants?i=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=function(A){const R=ma(A);return R instanceof xt&&Go(R)?R.getFilters():[R]}(e.where));let u=[];e.orderBy&&(u=function(A){return A.map(R=>function(k){return new cn(Ie(k.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(R))}(e.orderBy));let c=null;e.limit&&(c=function(A){let R;return R=typeof A=="object"?A.value:A,er(R)?null:R}(e.limit));let h=null;e.startAt&&(h=function(A){const R=!!A.before,V=A.values||[];return new Hn(V,R)}(e.startAt));let f=null;return e.endAt&&(f=function(A){const R=!A.before,V=A.values||[];return new Hn(V,R)}(e.endAt)),Dl(t,i,u,o,c,"F",h,f)}function fc(r,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function ma(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ie(e.unaryFilter.field);return rt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=Ie(e.unaryFilter.field);return rt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Ie(e.unaryFilter.field);return rt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Ie(e.unaryFilter.field);return rt.create(u,"!=",{nullValue:"NULL_VALUE"});default:return O()}}(r):r.fieldFilter!==void 0?function(e){return rt.create(Ie(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return xt.create(e.compositeFilter.filters.map(n=>ma(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return O()}}(e.compositeFilter.op))}(r):O()}function pc(r){return ec[r]}function mc(r){return nc[r]}function gc(r){return rc[r]}function ve(r){return{fieldPath:r.canonicalString()}}function Ie(r){return ct.fromServerFormat(r.fieldPath)}function ga(r){return r instanceof rt?function(e){if(e.op==="=="){if(Xi(e.value))return{unaryFilter:{field:ve(e.field),op:"IS_NAN"}};if(Hi(e.value))return{unaryFilter:{field:ve(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Xi(e.value))return{unaryFilter:{field:ve(e.field),op:"IS_NOT_NAN"}};if(Hi(e.value))return{unaryFilter:{field:ve(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ve(e.field),op:mc(e.op),value:e.value}}}(r):r instanceof xt?function(e){const n=e.getFilters().map(i=>ga(i));return n.length===1?n[0]:{compositeFilter:{op:gc(e.op),filters:n}}}(r):O()}function _c(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function _a(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class Ht{constructor(t,e,n,i,o=F.min(),u=F.min(),c=Tt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new Ht(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class yc{constructor(t){this.ct=t}}function Tc(r){const t=dc({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?es(t,t.limit,"L"):t}/**
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
 */class Ec{constructor(){this._n=new vc}addToCollectionParentIndex(t,e){return this._n.add(e),S.resolve()}getCollectionParents(t,e){return S.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return S.resolve()}deleteFieldIndex(t,e){return S.resolve()}deleteAllFieldIndexes(t){return S.resolve()}createTargetIndexes(t,e){return S.resolve()}getDocumentsMatchingTarget(t,e){return S.resolve(null)}getIndexType(t,e){return S.resolve(0)}getFieldIndexes(t,e){return S.resolve([])}getNextCollectionGroupToUpdate(t){return S.resolve(null)}getMinOffset(t,e){return S.resolve(Jt.min())}getMinOffsetFromCollectionGroup(t,e){return S.resolve(Jt.min())}updateCollectionGroup(t,e,n){return S.resolve()}updateIndexEntries(t,e){return S.resolve()}}class vc{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new ht(J.comparator),o=!i.has(n);return this.index[e]=i.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new ht(J.comparator)).toArray()}}/**
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
 */class Se{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Se(0)}static Ln(){return new Se(-1)}}/**
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
 */class Ic{constructor(){this.changes=new be(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,_t.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?S.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class wc{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(n=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(n!==null&&sn(n.mutation,i,Vt.empty(),ot.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,q()).next(()=>n))}getLocalViewOfDocuments(t,e,n=q()){const i=ae();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,n).next(o=>{let u=Je();return o.forEach((c,h)=>{u=u.insert(c,h.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const n=ae();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,q()))}populateOverlays(t,e,n){const i=[];return n.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((u,c)=>{e.set(u,c)})})}computeViews(t,e,n,i){let o=zt();const u=rn(),c=function(){return rn()}();return e.forEach((h,f)=>{const m=n.get(f.key);i.has(f.key)&&(m===void 0||m.mutation instanceof ne)?o=o.insert(f.key,f):m!==void 0?(u.set(f.key,m.mutation.getFieldMask()),sn(m.mutation,f,m.mutation.getFieldMask(),ot.now())):u.set(f.key,Vt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,m)=>u.set(f,m)),e.forEach((f,m)=>{var A;return c.set(f,new Ac(m,(A=u.get(f))!==null&&A!==void 0?A:null))}),c))}recalculateAndSaveOverlays(t,e){const n=rn();let i=new Z((u,c)=>u-c),o=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const c of u)c.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let m=n.get(h)||Vt.empty();m=c.applyToLocalView(f,m),n.set(h,m);const A=(i.get(c.batchId)||q()).add(h);i=i.insert(c.batchId,A)})}).next(()=>{const u=[],c=i.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),f=h.key,m=h.value,A=Zo();m.forEach(R=>{if(!o.has(R)){const V=oa(e.get(R),n.get(R));V!==null&&A.set(R,V),o=o.add(R)}}),u.push(this.documentOverlayCache.saveOverlays(t,f,A))}return S.waitFor(u)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,i){return function(u){return M.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Wo(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next(o=>{const u=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-o.size):S.resolve(ae());let c=-1,h=o;return u.next(f=>S.forEach(f,(m,A)=>(c<A.largestBatchId&&(c=A.largestBatchId),o.get(m)?S.resolve():this.remoteDocumentCache.getEntry(t,m).next(R=>{h=h.insert(m,R)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,q())).next(m=>({batchId:c,changes:Jo(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next(n=>{let i=Je();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){const o=e.collectionGroup;let u=Je();return this.indexManager.getCollectionParents(t,o).next(c=>S.forEach(c,h=>{const f=function(A,R){return new Ne(R,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,n,i).next(m=>{m.forEach((A,R)=>{u=u.insert(A,R)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,n,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,i))).next(u=>{o.forEach((h,f)=>{const m=f.getKey();u.get(m)===null&&(u=u.insert(m,_t.newInvalidDocument(m)))});let c=Je();return u.forEach((h,f)=>{const m=o.get(h);m!==void 0&&sn(m.mutation,f,Vt.empty(),ot.now()),sr(e,f)&&(c=c.insert(h,f))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return S.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:Lt(i.createTime)}}(e)),S.resolve()}getNamedQuery(t,e){return S.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(i){return{name:i.name,query:Tc(i.bundledQuery),readTime:Lt(i.readTime)}}(e)),S.resolve()}}/**
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
 */class Pc{constructor(){this.overlays=new Z(M.comparator),this.hr=new Map}getOverlay(t,e){return S.resolve(this.overlays.get(e))}getOverlays(t,e){const n=ae();return S.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&n.set(i,o)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((i,o)=>{this.ht(t,e,o)}),S.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.hr.get(n);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.hr.delete(n)),S.resolve()}getOverlaysForCollection(t,e,n){const i=ae(),o=e.length+1,u=new M(e.child("")),c=this.overlays.getIteratorFrom(u);for(;c.hasNext();){const h=c.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>n&&i.set(h.getKey(),h)}return S.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let o=new Z((f,m)=>f-m);const u=this.overlays.getIterator();for(;u.hasNext();){const f=u.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>n){let m=o.get(f.largestBatchId);m===null&&(m=ae(),o=o.insert(f.largestBatchId,m)),m.set(f.getKey(),f)}}const c=ae(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,m)=>c.set(f,m)),!(c.size()>=i)););return S.resolve(c)}ht(t,e,n){const i=this.overlays.get(n.key);if(i!==null){const u=this.hr.get(i.largestBatchId).delete(n.key);this.hr.set(i.largestBatchId,u)}this.overlays=this.overlays.insert(n.key,new Hl(e,n));let o=this.hr.get(e);o===void 0&&(o=q(),this.hr.set(e,o)),this.hr.set(e,o.add(n.key))}}/**
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
 */class As{constructor(){this.Pr=new ht(at.Ir),this.Tr=new ht(at.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const n=new at(t,e);this.Pr=this.Pr.add(n),this.Tr=this.Tr.add(n)}dr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.Ar(new at(t,e))}Rr(t,e){t.forEach(n=>this.removeReference(n,e))}Vr(t){const e=new M(new J([])),n=new at(e,t),i=new at(e,t+1),o=[];return this.Tr.forEachInRange([n,i],u=>{this.Ar(u),o.push(u.key)}),o}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new M(new J([])),n=new at(e,t),i=new at(e,t+1);let o=q();return this.Tr.forEachInRange([n,i],u=>{o=o.add(u.key)}),o}containsKey(t){const e=new at(t,0),n=this.Pr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class at{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return M.comparator(t.key,e.key)||K(t.pr,e.pr)}static Er(t,e){return K(t.pr,e.pr)||M.comparator(t.key,e.key)}}/**
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
 */class Vc{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new ht(at.Ir)}checkEmpty(t){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,i){const o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new Wl(o,e,n,i);this.mutationQueue.push(u);for(const c of i)this.wr=this.wr.add(new at(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return S.resolve(u)}lookupMutationBatch(t,e){return S.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.br(n),o=i<0?0:i;return S.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new at(e,0),i=new at(e,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([n,i],u=>{const c=this.Sr(u.pr);o.push(c)}),S.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new ht(K);return e.forEach(i=>{const o=new at(i,0),u=new at(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([o,u],c=>{n=n.add(c.pr)})}),S.resolve(this.Dr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let o=n;M.isDocumentKey(o)||(o=o.child(""));const u=new at(new M(o),0);let c=new ht(K);return this.wr.forEachWhile(h=>{const f=h.key.path;return!!n.isPrefixOf(f)&&(f.length===i&&(c=c.add(h.pr)),!0)},u),S.resolve(this.Dr(c))}Dr(t){const e=[];return t.forEach(n=>{const i=this.Sr(n);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){X(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let n=this.wr;return S.forEach(e.mutations,i=>{const o=new at(i.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.wr=n})}Mn(t){}containsKey(t,e){const n=new at(e,0),i=this.wr.firstAfterOrEqual(n);return S.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,S.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Sc{constructor(t){this.vr=t,this.docs=function(){return new Z(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),o=i?i.size:0,u=this.vr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return S.resolve(n?n.document.mutableCopy():_t.newInvalidDocument(e))}getEntries(t,e){let n=zt();return e.forEach(i=>{const o=this.docs.get(i);n=n.insert(i,o?o.document.mutableCopy():_t.newInvalidDocument(i))}),S.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let o=zt();const u=e.path,c=new M(u.child("")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:f,value:{document:m}}=h.getNext();if(!u.isPrefixOf(f.path))break;f.path.length>u.length+1||dl(hl(m),n)<=0||(i.has(m.key)||sr(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return S.resolve(o)}getAllFromCollectionGroup(t,e,n,i){O()}Fr(t,e){return S.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new Cc(this)}getSize(t){return S.resolve(this.size)}}class Cc extends Ic{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?e.push(this.ar.addEntry(t,i)):this.ar.removeEntry(n)}),S.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
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
 */class Dc{constructor(t){this.persistence=t,this.Mr=new be(e=>_s(e),ys),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.Or=0,this.Nr=new As,this.targetCount=0,this.Lr=Se.Nn()}forEachTarget(t,e){return this.Mr.forEach((n,i)=>e(i)),S.resolve()}getLastRemoteSnapshotVersion(t){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return S.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Or&&(this.Or=e),S.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new Se(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,S.resolve()}updateTargetData(t,e){return this.qn(e),S.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,S.resolve()}removeTargets(t,e,n){let i=0;const o=[];return this.Mr.forEach((u,c)=>{c.sequenceNumber<=e&&n.get(c.targetId)===null&&(this.Mr.delete(u),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),i++)}),S.waitFor(o).next(()=>i)}getTargetCount(t){return S.resolve(this.targetCount)}getTargetData(t,e){const n=this.Mr.get(e)||null;return S.resolve(n)}addMatchingKeys(t,e,n){return this.Nr.dr(e,n),S.resolve()}removeMatchingKeys(t,e,n){this.Nr.Rr(e,n);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(u=>{o.push(i.markPotentiallyOrphaned(t,u))}),S.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),S.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Nr.gr(e);return S.resolve(n)}containsKey(t,e){return S.resolve(this.Nr.containsKey(e))}}/**
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
 */class kc{constructor(t,e){this.Br={},this.overlays={},this.kr=new fs(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new Dc(this),this.indexManager=new Ec,this.remoteDocumentCache=function(i){return new Sc(i)}(n=>this.referenceDelegate.Kr(n)),this.serializer=new yc(e),this.$r=new Rc(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Pc,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Br[t.toKey()];return n||(n=new Vc(e,this.referenceDelegate),this.Br[t.toKey()]=n),n}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,n){b("MemoryPersistence","Starting transaction:",t);const i=new Nc(this.kr.next());return this.referenceDelegate.Ur(),n(i).next(o=>this.referenceDelegate.Wr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Gr(t,e){return S.or(Object.values(this.Br).map(n=>()=>n.containsKey(t,e)))}}class Nc extends pl{constructor(t){super(),this.currentSequenceNumber=t}}class ws{constructor(t){this.persistence=t,this.zr=new As,this.jr=null}static Hr(t){return new ws(t)}get Jr(){if(this.jr)return this.jr;throw O()}addReference(t,e,n){return this.zr.addReference(n,e),this.Jr.delete(n.toString()),S.resolve()}removeReference(t,e,n){return this.zr.removeReference(n,e),this.Jr.add(n.toString()),S.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),S.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(i=>this.Jr.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.Jr.add(o.toString()))}).next(()=>n.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Jr,n=>{const i=M.fromPath(n);return this.Yr(t,i).next(o=>{o||e.removeEntry(i,F.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(n=>{n?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return S.or([()=>S.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
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
 */class Rs{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.qi=n,this.Qi=i}static Ki(t,e){let n=q(),i=q();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Rs(t,e.fromCache,n,i)}}/**
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
 */class xc{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Wu()?8:ml(Hu())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,n,i){const o={result:null};return this.ji(t,e).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.Hi(t,e,i,n).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new bc;return this.Ji(t,e,u).next(c=>{if(o.result=c,this.Ui)return this.Yi(t,e,u,c.size)})}).next(()=>o.result)}Yi(t,e,n,i){return n.documentReadCount<this.Wi?(Xe()<=Wt.DEBUG&&b("QueryEngine","SDK will not create cache indexes for query:",Ee(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),S.resolve()):(Xe()<=Wt.DEBUG&&b("QueryEngine","Query:",Ee(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Gi*i?(Xe()<=Wt.DEBUG&&b("QueryEngine","The SDK decides to create cache indexes for query:",Ee(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Mt(e))):S.resolve())}ji(t,e){if(to(e))return S.resolve(null);let n=Mt(e);return this.indexManager.getIndexType(t,n).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=es(e,null,"F"),n=Mt(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(o=>{const u=q(...o);return this.zi.getDocuments(t,u).next(c=>this.indexManager.getMinOffset(t,n).next(h=>{const f=this.Zi(e,c);return this.Xi(e,f,u,h.readTime)?this.ji(t,es(e,null,"F")):this.es(t,f,e,h)}))})))}Hi(t,e,n,i){return to(e)||i.isEqual(F.min())?S.resolve(null):this.zi.getDocuments(t,n).next(o=>{const u=this.Zi(e,o);return this.Xi(e,u,n,i)?S.resolve(null):(Xe()<=Wt.DEBUG&&b("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ee(e)),this.es(t,u,e,cl(i,-1)).next(c=>c))})}Zi(t,e){let n=new ht(Xo(t));return e.forEach((i,o)=>{sr(t,o)&&(n=n.add(o))}),n}Xi(t,e,n,i){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ji(t,e,n){return Xe()<=Wt.DEBUG&&b("QueryEngine","Using full collection scan to execute query:",Ee(e)),this.zi.getDocumentsMatchingQuery(t,e,Jt.min(),n)}es(t,e,n,i){return this.zi.getDocumentsMatchingQuery(t,n,i).next(o=>(e.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(t,e,n,i){this.persistence=t,this.ts=e,this.serializer=i,this.ns=new Z(K),this.rs=new be(o=>_s(o),ys),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(n)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new wc(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function Lc(r,t,e,n){return new Mc(r,t,e,n)}async function ya(r,t){const e=U(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let i;return e.mutationQueue.getAllMutationBatches(n).next(o=>(i=o,e._s(t),e.mutationQueue.getAllMutationBatches(n))).next(o=>{const u=[],c=[];let h=q();for(const f of i){u.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}for(const f of o){c.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(n,h).next(f=>({us:f,removedBatchIds:u,addedBatchIds:c}))})})}function Oc(r,t){const e=U(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=t.batch.keys(),o=e.os.newChangeBuffer({trackRemovals:!0});return function(c,h,f,m){const A=f.batch,R=A.keys();let V=S.resolve();return R.forEach(k=>{V=V.next(()=>m.getEntry(h,k)).next(x=>{const D=f.docVersions.get(k);X(D!==null),x.version.compareTo(D)<0&&(A.applyToRemoteDocument(x,f),x.isValidDocument()&&(x.setReadTime(f.commitVersion),m.addEntry(x)))})}),V.next(()=>c.mutationQueue.removeMutationBatch(h,A))}(e,n,t,o).next(()=>o.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(c){let h=q();for(let f=0;f<c.mutationResults.length;++f)c.mutationResults[f].transformResults.length>0&&(h=h.add(c.batch.mutations[f].key));return h}(t))).next(()=>e.localDocuments.getDocuments(n,i))})}function Ta(r){const t=U(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function Fc(r,t){const e=U(r),n=t.snapshotVersion;let i=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=e.os.newChangeBuffer({trackRemovals:!0});i=e.ns;const c=[];t.targetChanges.forEach((m,A)=>{const R=i.get(A);if(!R)return;c.push(e.Qr.removeMatchingKeys(o,m.removedDocuments,A).next(()=>e.Qr.addMatchingKeys(o,m.addedDocuments,A)));let V=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(A)!==null?V=V.withResumeToken(Tt.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):m.resumeToken.approximateByteSize()>0&&(V=V.withResumeToken(m.resumeToken,n)),i=i.insert(A,V),function(x,D,B){return x.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(R,V,m)&&c.push(e.Qr.updateTargetData(o,V))});let h=zt(),f=q();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))}),c.push(Uc(o,u,t.documentUpdates).next(m=>{h=m.cs,f=m.ls})),!n.isEqual(F.min())){const m=e.Qr.getLastRemoteSnapshotVersion(o).next(A=>e.Qr.setTargetsMetadata(o,o.currentSequenceNumber,n));c.push(m)}return S.waitFor(c).next(()=>u.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(e.ns=i,o))}function Uc(r,t,e){let n=q(),i=q();return e.forEach(o=>n=n.add(o)),t.getEntries(r,n).next(o=>{let u=zt();return e.forEach((c,h)=>{const f=o.get(c);h.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(c)),h.isNoDocument()&&h.version.isEqual(F.min())?(t.removeEntry(c,h.readTime),u=u.insert(c,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),u=u.insert(c,h)):b("LocalStore","Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",h.version)}),{cs:u,ls:i}})}function qc(r,t){const e=U(r);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function Bc(r,t){const e=U(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return e.Qr.getTargetData(n,t).next(o=>o?(i=o,S.resolve(i)):e.Qr.allocateTargetId(n).next(u=>(i=new Ht(t,u,"TargetPurposeListen",n.currentSequenceNumber),e.Qr.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=e.ns.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.ns=e.ns.insert(n.targetId,n),e.rs.set(t,n.targetId)),n})}async function os(r,t,e){const n=U(r),i=n.ns.get(t),o=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",o,u=>n.persistence.referenceDelegate.removeTarget(u,i))}catch(u){if(!mn(u))throw u;b("LocalStore",`Failed to update sequence numbers for target ${t}: ${u}`)}n.ns=n.ns.remove(t),n.rs.delete(i.target)}function ho(r,t,e){const n=U(r);let i=F.min(),o=q();return n.persistence.runTransaction("Execute query","readwrite",u=>function(h,f,m){const A=U(h),R=A.rs.get(m);return R!==void 0?S.resolve(A.ns.get(R)):A.Qr.getTargetData(f,m)}(n,u,Mt(t)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,n.Qr.getMatchingKeysForTargetId(u,c.targetId).next(h=>{o=h})}).next(()=>n.ts.getDocumentsMatchingQuery(u,t,e?i:F.min(),e?o:q())).next(c=>(jc(n,Nl(t),c),{documents:c,hs:o})))}function jc(r,t,e){let n=r.ss.get(t)||F.min();e.forEach((i,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),r.ss.set(t,n)}class fo{constructor(){this.activeTargetIds=Fl()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class zc{constructor(){this.no=new fo,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,n){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new fo,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class po{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){b("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){b("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let jn=null;function Kr(){return jn===null?jn=function(){return 268435456+Math.round(2147483648*Math.random())}():jn++,"0x"+jn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const mt="WebChannelConnection";class Qc extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.wo=n+"://"+e.host,this.So=`projects/${i}/databases/${o}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Do(){return!1}Co(e,n,i,o,u){const c=Kr(),h=this.vo(e,n.toUriEncodedString());b("RestConnection",`Sending RPC '${e}' ${c}:`,h,i);const f={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(f,o,u),this.Mo(e,h,f,i).then(m=>(b("RestConnection",`Received RPC '${e}' ${c}: `,m),m),m=>{throw we("RestConnection",`RPC '${e}' ${c} failed with error: `,m,"url: ",h,"request:",i),m})}xo(e,n,i,o,u,c){return this.Co(e,n,i,o,u)}Fo(e,n,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ke}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,u)=>e[u]=o),i&&i.headers.forEach((o,u)=>e[u]=o)}vo(e,n){const i=$c[e];return`${this.wo}/v1/${n}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Mo(t,e,n,i){const o=Kr();return new Promise((u,c)=>{const h=new ko;h.setWithCredentials(!0),h.listenOnce(bo.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case zn.NO_ERROR:const m=h.getResponseJson();b(mt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(m)),u(m);break;case zn.TIMEOUT:b(mt,`RPC '${t}' ${o} timed out`),c(new N(P.DEADLINE_EXCEEDED,"Request time out"));break;case zn.HTTP_ERROR:const A=h.getStatus();if(b(mt,`RPC '${t}' ${o} failed with status:`,A,"response text:",h.getResponseText()),A>0){let R=h.getResponseJson();Array.isArray(R)&&(R=R[0]);const V=R==null?void 0:R.error;if(V&&V.status&&V.message){const k=function(D){const B=D.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(B)>=0?B:P.UNKNOWN}(V.status);c(new N(k,V.message))}else c(new N(P.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new N(P.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{b(mt,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(i);b(mt,`RPC '${t}' ${o} sending request:`,i),h.send(e,"POST",f,n,15)})}Oo(t,e,n){const i=Kr(),o=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=Lo(),c=Mo(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.xmlHttpFactory=new No({})),this.Fo(h.initMessageHeaders,e,n),h.encodeInitMessageHeaders=!0;const m=o.join("");b(mt,`Creating RPC '${t}' stream ${i}: ${m}`,h);const A=u.createWebChannel(m,h);let R=!1,V=!1;const k=new Kc({lo:D=>{V?b(mt,`Not sending because RPC '${t}' stream ${i} is closed:`,D):(R||(b(mt,`Opening RPC '${t}' stream ${i} transport.`),A.open(),R=!0),b(mt,`RPC '${t}' stream ${i} sending:`,D),A.send(D))},ho:()=>A.close()}),x=(D,B,Q)=>{D.listen(B,j=>{try{Q(j)}catch(H){setTimeout(()=>{throw H},0)}})};return x(A,Ye.EventType.OPEN,()=>{V||(b(mt,`RPC '${t}' stream ${i} transport opened.`),k.mo())}),x(A,Ye.EventType.CLOSE,()=>{V||(V=!0,b(mt,`RPC '${t}' stream ${i} transport closed`),k.po())}),x(A,Ye.EventType.ERROR,D=>{V||(V=!0,we(mt,`RPC '${t}' stream ${i} transport errored:`,D),k.po(new N(P.UNAVAILABLE,"The operation could not be completed")))}),x(A,Ye.EventType.MESSAGE,D=>{var B;if(!V){const Q=D.data[0];X(!!Q);const j=Q,H=j.error||((B=j[0])===null||B===void 0?void 0:B.error);if(H){b(mt,`RPC '${t}' stream ${i} received error:`,H);const St=H.status;let st=function(_){const y=et[_];if(y!==void 0)return ua(y)}(St),E=H.message;st===void 0&&(st=P.INTERNAL,E="Unknown error status: "+St+" with message "+H.message),V=!0,k.po(new N(st,E)),A.close()}else b(mt,`RPC '${t}' stream ${i} received:`,Q),k.yo(Q)}}),x(c,xo.STAT_EVENT,D=>{D.stat===Hr.PROXY?b(mt,`RPC '${t}' stream ${i} detected buffering proxy`):D.stat===Hr.NOPROXY&&b(mt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.fo()},0),k}}function Qr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(r){return new sc(r,!0)}/**
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
 */class Ea{constructor(t,e,n=1e3,i=1.5,o=6e4){this.oi=t,this.timerId=e,this.No=n,this.Lo=i,this.Bo=o,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const e=Math.floor(this.ko+this.Uo()),n=Math.max(0,Date.now()-this.Qo),i=Math.max(0,e-n);i>0&&b("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),t())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class va{constructor(t,e,n,i,o,u,c,h){this.oi=t,this.Go=n,this.zo=i,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new Ea(t,e)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(t){this.s_(),this.stream.send(t)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(t,e){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,t!==4?this.Yo.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(jt(e.toString()),jt("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ao(e)}__(){}auth(){this.state=1;const t=this.a_(this.jo),e=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.jo===e&&this.u_(n,i)},n=>{t(()=>{const i=new N(P.UNKNOWN,"Fetching auth token failed: "+n.message);return this.c_(i)})})}u_(t,e){const n=this.a_(this.jo);this.stream=this.l_(t,e),this.stream.Po(()=>{n(()=>this.listener.Po())}),this.stream.To(()=>{n(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{n(()=>this.c_(i))}),this.stream.onMessage(i=>{n(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(t){return b("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}a_(t){return e=>{this.oi.enqueueAndForget(()=>this.jo===t?e():(b("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Wc extends va{constructor(t,e,n,i,o,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,u),this.serializer=o}l_(t,e){return this.connection.Oo("Listen",t,e)}onMessage(t){this.Yo.reset();const e=ac(this.serializer,t),n=function(o){if(!("targetChange"in o))return F.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?F.min():u.readTime?Lt(u.readTime):F.min()}(t);return this.listener.h_(e,n)}P_(t){const e={};e.database=is(this.serializer),e.addTarget=function(o,u){let c;const h=u.target;if(c=Zr(h)?{documents:cc(o,h)}:{query:hc(o,h)._t},c.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){c.resumeToken=ha(o,u.resumeToken);const f=ns(o,u.expectedCount);f!==null&&(c.expectedCount=f)}else if(u.snapshotVersion.compareTo(F.min())>0){c.readTime=Yn(o,u.snapshotVersion.toTimestamp());const f=ns(o,u.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,t);const n=fc(this.serializer,t);n&&(e.labels=n),this.i_(e)}I_(t){const e={};e.database=is(this.serializer),e.removeTarget=t,this.i_(e)}}class Hc extends va{constructor(t,e,n,i,o,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,u),this.serializer=o,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(t,e){return this.connection.Oo("Write",t,e)}onMessage(t){if(X(!!t.streamToken),this.lastStreamToken=t.streamToken,this.T_){this.Yo.reset();const e=lc(t.writeResults,t.commitTime),n=Lt(t.commitTime);return this.listener.A_(n,e)}return X(!t.writeResults||t.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const t={};t.database=is(this.serializer),this.i_(t)}d_(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>uc(this.serializer,n))};this.i_(e)}}/**
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
 */class Xc extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.")}Co(t,e,n,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.Co(t,rs(e,n),i,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(P.UNKNOWN,o.toString())})}xo(t,e,n,i,o){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,c])=>this.connection.xo(t,rs(e,n),i,u,c,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new N(P.UNKNOWN,u.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class Yc{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(t){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,t==="Online"&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(jt(e),this.y_=!1):b("OnlineStateTracker",e)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class Jc{constructor(t,e,n,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=o,this.O_.io(u=>{n.enqueueAndForget(async()=>{fe(this)&&(b("RemoteStore","Restarting streams for network reachability change."),await async function(h){const f=U(h);f.M_.add(4),await yn(f),f.N_.set("Unknown"),f.M_.delete(4),await lr(f)}(this))})}),this.N_=new Yc(n,i)}}async function lr(r){if(fe(r))for(const t of r.x_)await t(!0)}async function yn(r){for(const t of r.x_)await t(!1)}function Ia(r,t){const e=U(r);e.F_.has(t.targetId)||(e.F_.set(t.targetId,t),Cs(e)?Ss(e):xe(e).Xo()&&Vs(e,t))}function Ps(r,t){const e=U(r),n=xe(e);e.F_.delete(t),n.Xo()&&Aa(e,t),e.F_.size===0&&(n.Xo()?n.n_():fe(e)&&e.N_.set("Unknown"))}function Vs(r,t){if(r.L_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(F.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}xe(r).P_(t)}function Aa(r,t){r.L_.xe(t),xe(r).I_(t)}function Ss(r){r.L_=new tc({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>r.F_.get(t)||null,tt:()=>r.datastore.serializer.databaseId}),xe(r).start(),r.N_.w_()}function Cs(r){return fe(r)&&!xe(r).Zo()&&r.F_.size>0}function fe(r){return U(r).M_.size===0}function wa(r){r.L_=void 0}async function Zc(r){r.N_.set("Online")}async function th(r){r.F_.forEach((t,e)=>{Vs(r,t)})}async function eh(r,t){wa(r),Cs(r)?(r.N_.D_(t),Ss(r)):r.N_.set("Unknown")}async function nh(r,t,e){if(r.N_.set("Online"),t instanceof ca&&t.state===2&&t.cause)try{await async function(i,o){const u=o.cause;for(const c of o.targetIds)i.F_.has(c)&&(await i.remoteSyncer.rejectListen(c,u),i.F_.delete(c),i.L_.removeTarget(c))}(r,t)}catch(n){b("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Jn(r,n)}else if(t instanceof Kn?r.L_.Ke(t):t instanceof la?r.L_.He(t):r.L_.We(t),!e.isEqual(F.min()))try{const n=await Ta(r.localStore);e.compareTo(n)>=0&&await function(o,u){const c=o.L_.rt(u);return c.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.F_.get(f);m&&o.F_.set(f,m.withResumeToken(h.resumeToken,u))}}),c.targetMismatches.forEach((h,f)=>{const m=o.F_.get(h);if(!m)return;o.F_.set(h,m.withResumeToken(Tt.EMPTY_BYTE_STRING,m.snapshotVersion)),Aa(o,h);const A=new Ht(m.target,h,f,m.sequenceNumber);Vs(o,A)}),o.remoteSyncer.applyRemoteEvent(c)}(r,e)}catch(n){b("RemoteStore","Failed to raise snapshot:",n),await Jn(r,n)}}async function Jn(r,t,e){if(!mn(t))throw t;r.M_.add(1),await yn(r),r.N_.set("Offline"),e||(e=()=>Ta(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{b("RemoteStore","Retrying IndexedDB access"),await e(),r.M_.delete(1),await lr(r)})}function Ra(r,t){return t().catch(e=>Jn(r,e,t))}async function cr(r){const t=U(r),e=te(t);let n=t.v_.length>0?t.v_[t.v_.length-1].batchId:-1;for(;rh(t);)try{const i=await qc(t.localStore,n);if(i===null){t.v_.length===0&&e.n_();break}n=i.batchId,sh(t,i)}catch(i){await Jn(t,i)}Pa(t)&&Va(t)}function rh(r){return fe(r)&&r.v_.length<10}function sh(r,t){r.v_.push(t);const e=te(r);e.Xo()&&e.E_&&e.d_(t.mutations)}function Pa(r){return fe(r)&&!te(r).Zo()&&r.v_.length>0}function Va(r){te(r).start()}async function ih(r){te(r).V_()}async function oh(r){const t=te(r);for(const e of r.v_)t.d_(e.mutations)}async function ah(r,t,e){const n=r.v_.shift(),i=Es.from(n,t,e);await Ra(r,()=>r.remoteSyncer.applySuccessfulWrite(i)),await cr(r)}async function uh(r,t){t&&te(r).E_&&await async function(n,i){if(function(u){return Yl(u)&&u!==P.ABORTED}(i.code)){const o=n.v_.shift();te(n).t_(),await Ra(n,()=>n.remoteSyncer.rejectFailedWrite(o.batchId,i)),await cr(n)}}(r,t),Pa(r)&&Va(r)}async function mo(r,t){const e=U(r);e.asyncQueue.verifyOperationInProgress(),b("RemoteStore","RemoteStore received new credentials");const n=fe(e);e.M_.add(3),await yn(e),n&&e.N_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.M_.delete(3),await lr(e)}async function lh(r,t){const e=U(r);t?(e.M_.delete(2),await lr(e)):t||(e.M_.add(2),await yn(e),e.N_.set("Unknown"))}function xe(r){return r.B_||(r.B_=function(e,n,i){const o=U(e);return o.f_(),new Wc(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{Po:Zc.bind(null,r),To:th.bind(null,r),Ao:eh.bind(null,r),h_:nh.bind(null,r)}),r.x_.push(async t=>{t?(r.B_.t_(),Cs(r)?Ss(r):r.N_.set("Unknown")):(await r.B_.stop(),wa(r))})),r.B_}function te(r){return r.k_||(r.k_=function(e,n,i){const o=U(e);return o.f_(),new Hc(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{Po:()=>Promise.resolve(),To:ih.bind(null,r),Ao:uh.bind(null,r),R_:oh.bind(null,r),A_:ah.bind(null,r)}),r.x_.push(async t=>{t?(r.k_.t_(),await cr(r)):(await r.k_.stop(),r.v_.length>0&&(b("RemoteStore",`Stopping write stream with ${r.v_.length} pending writes`),r.v_=[]))})),r.k_}/**
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
 */class Ds{constructor(t,e,n,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=o,this.deferred=new Xt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,o){const u=Date.now()+n,c=new Ds(t,e,u,i,o);return c.start(n),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ks(r,t){if(jt("AsyncQueue",`${t}: ${r}`),mn(r))return new N(P.UNAVAILABLE,`${t}: ${r}`);throw r}/**
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
 */class Ae{constructor(t){this.comparator=t?(e,n)=>t(e,n)||M.comparator(e.key,n.key):(e,n)=>M.comparator(e.key,n.key),this.keyedMap=Je(),this.sortedSet=new Z(this.comparator)}static emptySet(t){return new Ae(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ae)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new Ae;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
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
 */class go{constructor(){this.q_=new Z(M.comparator)}track(t){const e=t.doc.key,n=this.q_.get(e);n?t.type!==0&&n.type===3?this.q_=this.q_.insert(e,t):t.type===3&&n.type!==1?this.q_=this.q_.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.q_=this.q_.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.q_=this.q_.remove(e):t.type===1&&n.type===2?this.q_=this.q_.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):O():this.q_=this.q_.insert(e,t)}Q_(){const t=[];return this.q_.inorderTraversal((e,n)=>{t.push(n)}),t}}class Ce{constructor(t,e,n,i,o,u,c,h,f){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,n,i,o){const u=[];return e.forEach(c=>{u.push({type:0,doc:c})}),new Ce(t,e,Ae.emptySet(e),u,n,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&rr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
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
 */class ch{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(t=>t.G_())}}class hh{constructor(){this.queries=new be(t=>Ho(t),rr),this.onlineState="Unknown",this.z_=new Set}}async function Sa(r,t){const e=U(r);let n=3;const i=t.query;let o=e.queries.get(i);o?!o.W_()&&t.G_()&&(n=2):(o=new ch,n=t.G_()?0:1);try{switch(n){case 0:o.K_=await e.onListen(i,!0);break;case 1:o.K_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(u){const c=ks(u,`Initialization of query '${Ee(t.query)}' failed`);return void t.onError(c)}e.queries.set(i,o),o.U_.push(t),t.j_(e.onlineState),o.K_&&t.H_(o.K_)&&Ns(e)}async function Ca(r,t){const e=U(r),n=t.query;let i=3;const o=e.queries.get(n);if(o){const u=o.U_.indexOf(t);u>=0&&(o.U_.splice(u,1),o.U_.length===0?i=t.G_()?0:1:!o.W_()&&t.G_()&&(i=2))}switch(i){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function dh(r,t){const e=U(r);let n=!1;for(const i of t){const o=i.query,u=e.queries.get(o);if(u){for(const c of u.U_)c.H_(i)&&(n=!0);u.K_=i}}n&&Ns(e)}function fh(r,t,e){const n=U(r),i=n.queries.get(t);if(i)for(const o of i.U_)o.onError(e);n.queries.delete(t)}function Ns(r){r.z_.forEach(t=>{t.next()})}var as,_o;(_o=as||(as={})).J_="default",_o.Cache="cache";class Da{constructor(t,e,n){this.query=t,this.Y_=e,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=n||{}}H_(t){if(!this.options.includeMetadataChanges){const n=[];for(const i of t.docChanges)i.type!==3&&n.push(i);t=new Ce(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Z_?this.ea(t)&&(this.Y_.next(t),e=!0):this.ta(t,this.onlineState)&&(this.na(t),e=!0),this.X_=t,e}onError(t){this.Y_.error(t)}j_(t){this.onlineState=t;let e=!1;return this.X_&&!this.Z_&&this.ta(this.X_,t)&&(this.na(this.X_),e=!0),e}ta(t,e){if(!t.fromCache||!this.G_())return!0;const n=e!=="Offline";return(!this.options.ra||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ea(t){if(t.docChanges.length>0)return!0;const e=this.X_&&this.X_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}na(t){t=Ce.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Z_=!0,this.Y_.next(t)}G_(){return this.options.source!==as.Cache}}/**
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
 */class ka{constructor(t){this.key=t}}class Na{constructor(t){this.key=t}}class ph{constructor(t,e){this.query=t,this.la=e,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=q(),this.mutatedKeys=q(),this.Ia=Xo(t),this.Ta=new Ae(this.Ia)}get Ea(){return this.la}da(t,e){const n=e?e.Aa:new go,i=e?e.Ta:this.Ta;let o=e?e.mutatedKeys:this.mutatedKeys,u=i,c=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((m,A)=>{const R=i.get(m),V=sr(this.query,A)?A:null,k=!!R&&this.mutatedKeys.has(R.key),x=!!V&&(V.hasLocalMutations||this.mutatedKeys.has(V.key)&&V.hasCommittedMutations);let D=!1;R&&V?R.data.isEqual(V.data)?k!==x&&(n.track({type:3,doc:V}),D=!0):this.Ra(R,V)||(n.track({type:2,doc:V}),D=!0,(h&&this.Ia(V,h)>0||f&&this.Ia(V,f)<0)&&(c=!0)):!R&&V?(n.track({type:0,doc:V}),D=!0):R&&!V&&(n.track({type:1,doc:R}),D=!0,(h||f)&&(c=!0)),D&&(V?(u=u.add(V),o=x?o.add(m):o.delete(m)):(u=u.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const m=this.query.limitType==="F"?u.last():u.first();u=u.delete(m.key),o=o.delete(m.key),n.track({type:1,doc:m})}return{Ta:u,Aa:n,Xi:c,mutatedKeys:o}}Ra(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,i){const o=this.Ta;this.Ta=t.Ta,this.mutatedKeys=t.mutatedKeys;const u=t.Aa.Q_();u.sort((m,A)=>function(V,k){const x=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O()}};return x(V)-x(k)}(m.type,A.type)||this.Ia(m.doc,A.doc)),this.Va(n),i=i!=null&&i;const c=e&&!i?this.ma():[],h=this.Pa.size===0&&this.current&&!i?1:0,f=h!==this.ha;return this.ha=h,u.length!==0||f?{snapshot:new Ce(this.query,t.Ta,o,u,t.mutatedKeys,h===0,f,!1,!!n&&n.resumeToken.approximateByteSize()>0),fa:c}:{fa:c}}j_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new go,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(t){return!this.la.has(t)&&!!this.Ta.has(t)&&!this.Ta.get(t).hasLocalMutations}Va(t){t&&(t.addedDocuments.forEach(e=>this.la=this.la.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.la=this.la.delete(e)),this.current=t.current)}ma(){if(!this.current)return[];const t=this.Pa;this.Pa=q(),this.Ta.forEach(n=>{this.ga(n.key)&&(this.Pa=this.Pa.add(n.key))});const e=[];return t.forEach(n=>{this.Pa.has(n)||e.push(new Na(n))}),this.Pa.forEach(n=>{t.has(n)||e.push(new ka(n))}),e}pa(t){this.la=t.hs,this.Pa=q();const e=this.da(t.documents);return this.applyChanges(e,!0)}ya(){return Ce.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class mh{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class gh{constructor(t){this.key=t,this.wa=!1}}class _h{constructor(t,e,n,i,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.Sa={},this.ba=new be(c=>Ho(c),rr),this.Da=new Map,this.Ca=new Set,this.va=new Z(M.comparator),this.Fa=new Map,this.Ma=new As,this.xa={},this.Oa=new Map,this.Na=Se.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function yh(r,t,e=!0){const n=Fa(r);let i;const o=n.ba.get(t);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.ya()):i=await ba(n,t,e,!0),i}async function Th(r,t){const e=Fa(r);await ba(e,t,!0,!1)}async function ba(r,t,e,n){const i=await Bc(r.localStore,Mt(t)),o=i.targetId,u=e?r.sharedClientState.addLocalQueryTarget(o):"not-current";let c;return n&&(c=await Eh(r,t,o,u==="current",i.resumeToken)),r.isPrimaryClient&&e&&Ia(r.remoteStore,i),c}async function Eh(r,t,e,n,i){r.Ba=(A,R,V)=>async function(x,D,B,Q){let j=D.view.da(B);j.Xi&&(j=await ho(x.localStore,D.query,!1).then(({documents:E})=>D.view.da(E,j)));const H=Q&&Q.targetChanges.get(D.targetId),St=Q&&Q.targetMismatches.get(D.targetId)!=null,st=D.view.applyChanges(j,x.isPrimaryClient,H,St);return To(x,D.targetId,st.fa),st.snapshot}(r,A,R,V);const o=await ho(r.localStore,t,!0),u=new ph(t,o.hs),c=u.da(o.documents),h=_n.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",i),f=u.applyChanges(c,r.isPrimaryClient,h);To(r,e,f.fa);const m=new mh(t,e,u);return r.ba.set(t,m),r.Da.has(e)?r.Da.get(e).push(t):r.Da.set(e,[t]),f.snapshot}async function vh(r,t,e){const n=U(r),i=n.ba.get(t),o=n.Da.get(i.targetId);if(o.length>1)return n.Da.set(i.targetId,o.filter(u=>!rr(u,t))),void n.ba.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await os(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),e&&Ps(n.remoteStore,i.targetId),us(n,i.targetId)}).catch(pn)):(us(n,i.targetId),await os(n.localStore,i.targetId,!0))}async function Ih(r,t){const e=U(r),n=e.ba.get(t),i=e.Da.get(n.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),Ps(e.remoteStore,n.targetId))}async function Ah(r,t,e){const n=Dh(r);try{const i=await function(u,c){const h=U(u),f=ot.now(),m=c.reduce((V,k)=>V.add(k.key),q());let A,R;return h.persistence.runTransaction("Locally write mutations","readwrite",V=>{let k=zt(),x=q();return h.os.getEntries(V,m).next(D=>{k=D,k.forEach((B,Q)=>{Q.isValidDocument()||(x=x.add(B))})}).next(()=>h.localDocuments.getOverlayedDocuments(V,k)).next(D=>{A=D;const B=[];for(const Q of c){const j=Kl(Q,A.get(Q.key).overlayedDocument);j!=null&&B.push(new ne(Q.key,j,Bo(j.value.mapValue),Ct.exists(!0)))}return h.mutationQueue.addMutationBatch(V,f,B,c)}).next(D=>{R=D;const B=D.applyToLocalDocumentSet(A,x);return h.documentOverlayCache.saveOverlays(V,D.batchId,B)})}).then(()=>({batchId:R.batchId,changes:Jo(A)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(i.batchId),function(u,c,h){let f=u.xa[u.currentUser.toKey()];f||(f=new Z(K)),f=f.insert(c,h),u.xa[u.currentUser.toKey()]=f}(n,i.batchId,e),await Tn(n,i.changes),await cr(n.remoteStore)}catch(i){const o=ks(i,"Failed to persist write");e.reject(o)}}async function xa(r,t){const e=U(r);try{const n=await Fc(e.localStore,t);t.targetChanges.forEach((i,o)=>{const u=e.Fa.get(o);u&&(X(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?u.wa=!0:i.modifiedDocuments.size>0?X(u.wa):i.removedDocuments.size>0&&(X(u.wa),u.wa=!1))}),await Tn(e,n,t)}catch(n){await pn(n)}}function yo(r,t,e){const n=U(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const i=[];n.ba.forEach((o,u)=>{const c=u.view.j_(t);c.snapshot&&i.push(c.snapshot)}),function(u,c){const h=U(u);h.onlineState=c;let f=!1;h.queries.forEach((m,A)=>{for(const R of A.U_)R.j_(c)&&(f=!0)}),f&&Ns(h)}(n.eventManager,t),i.length&&n.Sa.h_(i),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function wh(r,t,e){const n=U(r);n.sharedClientState.updateQueryState(t,"rejected",e);const i=n.Fa.get(t),o=i&&i.key;if(o){let u=new Z(M.comparator);u=u.insert(o,_t.newNoDocument(o,F.min()));const c=q().add(o),h=new ar(F.min(),new Map,new Z(K),u,c);await xa(n,h),n.va=n.va.remove(o),n.Fa.delete(t),bs(n)}else await os(n.localStore,t,!1).then(()=>us(n,t,e)).catch(pn)}async function Rh(r,t){const e=U(r),n=t.batch.batchId;try{const i=await Oc(e.localStore,t);La(e,n,null),Ma(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await Tn(e,i)}catch(i){await pn(i)}}async function Ph(r,t,e){const n=U(r);try{const i=await function(u,c){const h=U(u);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let m;return h.mutationQueue.lookupMutationBatch(f,c).next(A=>(X(A!==null),m=A.keys(),h.mutationQueue.removeMutationBatch(f,A))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,m,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,m)).next(()=>h.localDocuments.getDocuments(f,m))})}(n.localStore,t);La(n,t,e),Ma(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await Tn(n,i)}catch(i){await pn(i)}}function Ma(r,t){(r.Oa.get(t)||[]).forEach(e=>{e.resolve()}),r.Oa.delete(t)}function La(r,t,e){const n=U(r);let i=n.xa[n.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),n.xa[n.currentUser.toKey()]=i}}function us(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Da.get(t))r.ba.delete(n),e&&r.Sa.ka(n,e);r.Da.delete(t),r.isPrimaryClient&&r.Ma.Vr(t).forEach(n=>{r.Ma.containsKey(n)||Oa(r,n)})}function Oa(r,t){r.Ca.delete(t.path.canonicalString());const e=r.va.get(t);e!==null&&(Ps(r.remoteStore,e),r.va=r.va.remove(t),r.Fa.delete(e),bs(r))}function To(r,t,e){for(const n of e)n instanceof ka?(r.Ma.addReference(n.key,t),Vh(r,n)):n instanceof Na?(b("SyncEngine","Document no longer in limbo: "+n.key),r.Ma.removeReference(n.key,t),r.Ma.containsKey(n.key)||Oa(r,n.key)):O()}function Vh(r,t){const e=t.key,n=e.path.canonicalString();r.va.get(e)||r.Ca.has(n)||(b("SyncEngine","New document in limbo: "+e),r.Ca.add(n),bs(r))}function bs(r){for(;r.Ca.size>0&&r.va.size<r.maxConcurrentLimboResolutions;){const t=r.Ca.values().next().value;r.Ca.delete(t);const e=new M(J.fromString(t)),n=r.Na.next();r.Fa.set(n,new gh(e)),r.va=r.va.insert(e,n),Ia(r.remoteStore,new Ht(Mt(nr(e.path)),n,"TargetPurposeLimboResolution",fs.oe))}}async function Tn(r,t,e){const n=U(r),i=[],o=[],u=[];n.ba.isEmpty()||(n.ba.forEach((c,h)=>{u.push(n.Ba(h,t,e).then(f=>{if((f||e)&&n.isPrimaryClient){const m=f&&!f.fromCache;n.sharedClientState.updateQueryState(h.targetId,m?"current":"not-current")}if(f){i.push(f);const m=Rs.Ki(h.targetId,f);o.push(m)}}))}),await Promise.all(u),n.Sa.h_(i),await async function(h,f){const m=U(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>S.forEach(f,R=>S.forEach(R.qi,V=>m.persistence.referenceDelegate.addReference(A,R.targetId,V)).next(()=>S.forEach(R.Qi,V=>m.persistence.referenceDelegate.removeReference(A,R.targetId,V)))))}catch(A){if(!mn(A))throw A;b("LocalStore","Failed to update sequence numbers: "+A)}for(const A of f){const R=A.targetId;if(!A.fromCache){const V=m.ns.get(R),k=V.snapshotVersion,x=V.withLastLimboFreeSnapshotVersion(k);m.ns=m.ns.insert(R,x)}}}(n.localStore,o))}async function Sh(r,t){const e=U(r);if(!e.currentUser.isEqual(t)){b("SyncEngine","User change. New user:",t.toKey());const n=await ya(e.localStore,t);e.currentUser=t,function(o,u){o.Oa.forEach(c=>{c.forEach(h=>{h.reject(new N(P.CANCELLED,u))})}),o.Oa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await Tn(e,n.us)}}function Ch(r,t){const e=U(r),n=e.Fa.get(t);if(n&&n.wa)return q().add(n.key);{let i=q();const o=e.Da.get(t);if(!o)return i;for(const u of o){const c=e.ba.get(u);i=i.unionWith(c.view.Ea)}return i}}function Fa(r){const t=U(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=xa.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ch.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=wh.bind(null,t),t.Sa.h_=dh.bind(null,t.eventManager),t.Sa.ka=fh.bind(null,t.eventManager),t}function Dh(r){const t=U(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Rh.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Ph.bind(null,t),t}class Eo{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=ur(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Lc(this.persistence,new xc,t.initialUser,this.serializer)}createPersistence(t){return new kc(ws.Hr,this.serializer)}createSharedClientState(t){return new zc}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class kh{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>yo(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Sh.bind(null,this.syncEngine),await lh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new hh}()}createDatastore(t){const e=ur(t.databaseInfo.databaseId),n=function(o){return new Qc(o)}(t.databaseInfo);return function(o,u,c,h){return new Xc(o,u,c,h)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,i,o,u,c){return new Jc(n,i,o,u,c)}(this.localStore,this.datastore,t.asyncQueue,e=>yo(this.syncEngine,e,0),function(){return po.D()?new po:new Gc}())}createSyncEngine(t,e){return function(i,o,u,c,h,f,m){const A=new _h(i,o,u,c,h,f);return m&&(A.La=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(n){const i=U(n);b("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await yn(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ua{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ka(this.observer.next,t)}error(t){this.observer.error?this.Ka(this.observer.error,t):jt("Uncaught Error in snapshot listener:",t.toString())}$a(){this.muted=!0}Ka(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class Nh{constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=gt.UNAUTHENTICATED,this.clientId=Fo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async o=>{b("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(n,o=>(b("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Xt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=ks(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Wr(r,t){r.asyncQueue.verifyOperationInProgress(),b("FirestoreClient","Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async i=>{n.isEqual(i)||(await ya(t.localStore,i),n=i)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function vo(r,t){r.asyncQueue.verifyOperationInProgress();const e=await xh(r);b("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>mo(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,i)=>mo(t.remoteStore,i)),r._onlineComponents=t}function bh(r){return r.name==="FirebaseError"?r.code===P.FAILED_PRECONDITION||r.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}async function xh(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){b("FirestoreClient","Using user provided OfflineComponentProvider");try{await Wr(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!bh(e))throw e;we("Error using user provided cache. Falling back to memory cache: "+e),await Wr(r,new Eo)}}else b("FirestoreClient","Using default OfflineComponentProvider"),await Wr(r,new Eo);return r._offlineComponents}async function qa(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(b("FirestoreClient","Using user provided OnlineComponentProvider"),await vo(r,r._uninitializedComponentsProvider._online)):(b("FirestoreClient","Using default OnlineComponentProvider"),await vo(r,new kh))),r._onlineComponents}function Mh(r){return qa(r).then(t=>t.syncEngine)}async function ls(r){const t=await qa(r),e=t.eventManager;return e.onListen=yh.bind(null,t.syncEngine),e.onUnlisten=vh.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Th.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Ih.bind(null,t.syncEngine),e}function Lh(r,t,e={}){const n=new Xt;return r.asyncQueue.enqueueAndForget(async()=>function(o,u,c,h,f){const m=new Ua({next:R=>{u.enqueueAndForget(()=>Ca(o,A));const V=R.docs.has(c);!V&&R.fromCache?f.reject(new N(P.UNAVAILABLE,"Failed to get document because the client is offline.")):V&&R.fromCache&&h&&h.source==="server"?f.reject(new N(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(R)},error:R=>f.reject(R)}),A=new Da(nr(c.path),m,{includeMetadataChanges:!0,ra:!0});return Sa(o,A)}(await ls(r),r.asyncQueue,t,e,n)),n.promise}/**
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
 */function Ba(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io=new Map;/**
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
 */function ja(r,t,e){if(!e)throw new N(P.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function Oh(r,t,e,n){if(t===!0&&n===!0)throw new N(P.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function Ao(r){if(!M.isDocumentKey(r))throw new N(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function wo(r){if(M.isDocumentKey(r))throw new N(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function hr(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":O()}function Dt(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new N(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=hr(r);throw new N(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new N(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new N(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Oh("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ba((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class dr{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ro({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new N(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new N(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ro(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new el;switch(n.type){case"firstParty":return new il(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new N(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Io.get(e);n&&(b("ComponentProvider","Removing Datastore"),Io.delete(e),n.terminate())}(this),Promise.resolve()}}function Fh(r,t,e,n={}){var i;const o=(r=Dt(r,dr))._getSettings(),u=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==u&&we("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},o),{host:u,ssl:!1})),n.mockUserToken){let c,h;if(typeof n.mockUserToken=="string")c=n.mockUserToken,h=gt.MOCK_USER;else{c=Qu(n.mockUserToken,(i=r._app)===null||i===void 0?void 0:i.options.projectId);const f=n.mockUserToken.sub||n.mockUserToken.user_id;if(!f)throw new N(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new gt(f)}r._authCredentials=new nl(new Oo(c,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new pe(this.firestore,t,this._query)}}class yt{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Yt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new yt(this.firestore,t,this._key)}}class Yt extends pe{constructor(t,e,n){super(t,e,nr(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new yt(this.firestore,null,new M(t))}withConverter(t){return new Yt(this.firestore,t,this._path)}}function cs(r,t,...e){if(r=Ot(r),ja("collection","path",t),r instanceof dr){const n=J.fromString(t,...e);return wo(n),new Yt(r,null,n)}{if(!(r instanceof yt||r instanceof Yt))throw new N(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(J.fromString(t,...e));return wo(n),new Yt(r.firestore,null,n)}}function Zn(r,t,...e){if(r=Ot(r),arguments.length===1&&(t=Fo.newId()),ja("doc","path",t),r instanceof dr){const n=J.fromString(t,...e);return Ao(n),new yt(r,null,new M(n))}{if(!(r instanceof yt||r instanceof Yt))throw new N(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(J.fromString(t,...e));return Ao(n),new yt(r.firestore,r instanceof Yt?r.converter:null,new M(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new Ea(this,"async_queue_retry"),this.hu=()=>{const e=Qr();e&&b("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Yo.Wo()};const t=Qr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const e=Qr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const e=new Xt;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!mn(t))throw t;b("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(t){const e=this.iu.then(()=>(this.uu=!0,t().catch(n=>{this.au=n,this.uu=!1;const i=function(u){let c=u.message||"";return u.stack&&(c=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),c}(n);throw jt("INTERNAL UNHANDLED ERROR: ",i),n}).then(n=>(this.uu=!1,n))));return this.iu=e,e}enqueueAfterDelay(t,e,n){this.Pu(),this.lu.indexOf(t)>-1&&(e=0);const i=Ds.createAndSchedule(this,t,e,n,o=>this.Eu(o));return this._u.push(i),i}Pu(){this.au&&O()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const e of this._u)if(e.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this._u)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const e=this._u.indexOf(t);this._u.splice(e,1)}}function Po(r){return function(e,n){if(typeof e!="object"||e===null)return!1;const i=e;for(const o of n)if(o in i&&typeof i[o]=="function")return!0;return!1}(r,["next","error","complete"])}class ee extends dr{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=function(){return new Uh}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ga(this),this._firestoreClient.terminate()}}function za(r,t){const e=zu(),n="(default)",i=Gu(e,"firestore").getImmediate({identifier:n});if(!i._initialized){const o=$u("firestore");o&&Fh(i,...o)}return i}function xs(r){return r._firestoreClient||Ga(r),r._firestoreClient.verifyNotTerminated(),r._firestoreClient}function Ga(r){var t,e,n;const i=r._freezeSettings(),o=function(c,h,f,m){return new yl(c,h,f,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Ba(m.experimentalLongPollingOptions),m.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,i);r._firestoreClient=new Nh(r._authCredentials,r._appCheckCredentials,r._queue,o),!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(t){this._byteString=t}static fromBase64String(t){try{return new De(Tt.fromBase64String(t))}catch(e){throw new N(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new De(Tt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ms{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return K(this._lat,t._lat)||K(this._long,t._long)}}/**
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
 */const qh=/^__.*__$/;class Bh{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new ne(t,this.data,this.fieldMask,e,this.fieldTransforms):new gn(t,this.data,e,this.fieldTransforms)}}class $a{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new ne(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Ka(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}class Ls{constructor(t,e,n,i,o,u){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,o===void 0&&this.mu(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(t){return new Ls(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.gu({path:n,yu:!1});return i.wu(t),i}Su(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.gu({path:n,yu:!1});return i.mu(),i}bu(t){return this.gu({path:void 0,yu:!0})}Du(t){return tr(t,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}mu(){if(this.path)for(let t=0;t<this.path.length;t++)this.wu(this.path.get(t))}wu(t){if(t.length===0)throw this.Du("Document fields must not be empty");if(Ka(this.fu)&&qh.test(t))throw this.Du('Document fields cannot begin and end with "__"')}}class jh{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||ur(t)}Fu(t,e,n,i=!1){return new Ls({fu:t,methodName:e,vu:n,path:ct.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function mr(r){const t=r._freezeSettings(),e=ur(r._databaseId);return new jh(r._databaseId,!!t.ignoreUndefinedProperties,e)}function Qa(r,t,e,n,i,o={}){const u=r.Fu(o.merge||o.mergeFields?2:0,t,e,i);Fs("Data must be an object, but it was:",u,n);const c=Wa(n,u);let h,f;if(o.merge)h=new Vt(u.fieldMask),f=u.fieldTransforms;else if(o.mergeFields){const m=[];for(const A of o.mergeFields){const R=hs(t,A,e);if(!u.contains(R))throw new N(P.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);Xa(m,R)||m.push(R)}h=new Vt(m),f=u.fieldTransforms.filter(A=>h.covers(A.field))}else h=null,f=u.fieldTransforms;return new Bh(new wt(c),h,f)}class gr extends pr{_toFieldTransform(t){if(t.fu!==2)throw t.fu===1?t.Du(`${this._methodName}() can only appear at the top level of your update data`):t.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof gr}}class Os extends pr{_toFieldTransform(t){return new jl(t.path,new hn)}isEqual(t){return t instanceof Os}}function zh(r,t,e,n){const i=r.Fu(1,t,e);Fs("Data must be an object, but it was:",i,n);const o=[],u=wt.empty();de(n,(h,f)=>{const m=Us(t,h,e);f=Ot(f);const A=i.Su(m);if(f instanceof gr)o.push(m);else{const R=En(f,A);R!=null&&(o.push(m),u.set(m,R))}});const c=new Vt(o);return new $a(u,c,i.fieldTransforms)}function Gh(r,t,e,n,i,o){const u=r.Fu(1,t,e),c=[hs(t,n,e)],h=[i];if(o.length%2!=0)throw new N(P.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let R=0;R<o.length;R+=2)c.push(hs(t,o[R])),h.push(o[R+1]);const f=[],m=wt.empty();for(let R=c.length-1;R>=0;--R)if(!Xa(f,c[R])){const V=c[R];let k=h[R];k=Ot(k);const x=u.Su(V);if(k instanceof gr)f.push(V);else{const D=En(k,x);D!=null&&(f.push(V),m.set(V,D))}}const A=new Vt(f);return new $a(m,A,u.fieldTransforms)}function $h(r,t,e,n=!1){return En(e,r.Fu(n?4:3,t))}function En(r,t){if(Ha(r=Ot(r)))return Fs("Unsupported field value:",t,r),Wa(r,t);if(r instanceof pr)return function(n,i){if(!Ka(i.fu))throw i.Du(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.yu&&t.fu!==4)throw t.Du("Nested arrays are not supported");return function(n,i){const o=[];let u=0;for(const c of n){let h=En(c,i.bu(u));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),u++}return{arrayValue:{values:o}}}(r,t)}return function(n,i){if((n=Ot(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Ul(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=ot.fromDate(n);return{timestampValue:Yn(i.serializer,o)}}if(n instanceof ot){const o=new ot(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Yn(i.serializer,o)}}if(n instanceof Ms)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof De)return{bytesValue:ha(i.serializer,n._byteString)};if(n instanceof yt){const o=i.databaseId,u=n.firestore._databaseId;if(!u.isEqual(o))throw i.Du(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Is(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i.Du(`Unsupported field value: ${hr(n)}`)}(r,t)}function Wa(r,t){const e={};return Uo(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):de(r,(n,i)=>{const o=En(i,t.pu(n));o!=null&&(e[n]=o)}),{mapValue:{fields:e}}}function Ha(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof ot||r instanceof Ms||r instanceof De||r instanceof yt||r instanceof pr)}function Fs(r,t,e){if(!Ha(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const n=hr(e);throw n==="an object"?t.Du(r+" a custom object"):t.Du(r+" "+n)}}function hs(r,t,e){if((t=Ot(t))instanceof fr)return t._internalPath;if(typeof t=="string")return Us(r,t);throw tr("Field path arguments must be of type string or ",r,!1,void 0,e)}const Kh=new RegExp("[~\\*/\\[\\]]");function Us(r,t,e){if(t.search(Kh)>=0)throw tr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new fr(...t.split("."))._internalPath}catch{throw tr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function tr(r,t,e,n,i){const o=n&&!n.isEmpty(),u=i!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||u)&&(h+=" (found",o&&(h+=` in field ${n}`),u&&(h+=` in document ${i}`),h+=")"),new N(P.INVALID_ARGUMENT,c+r+h)}function Xa(r,t){return r.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(t,e,n,i,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Qh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(_r("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Qh extends Ya{data(){return super.data()}}function _r(r,t){return typeof t=="string"?Us(r,t):t instanceof fr?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wh(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new N(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class qs{}class Ja extends qs{}function Za(r,t,...e){let n=[];t instanceof qs&&n.push(t),n=n.concat(e),function(o){const u=o.filter(h=>h instanceof Bs).length,c=o.filter(h=>h instanceof yr).length;if(u>1||u>0&&c>0)throw new N(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const i of n)r=i._apply(r);return r}class yr extends Ja{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new yr(t,e,n)}_apply(t){const e=this._parse(t);return tu(t._query,e),new pe(t.firestore,t.converter,ts(t._query,e))}_parse(t){const e=mr(t.firestore);return function(o,u,c,h,f,m,A){let R;if(f.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new N(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){So(A,m);const V=[];for(const k of A)V.push(Vo(h,o,k));R={arrayValue:{values:V}}}else R=Vo(h,o,A)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||So(A,m),R=$h(c,u,A,m==="in"||m==="not-in");return rt.create(f,m,R)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Hh(r,t,e){const n=t,i=_r("where",r);return yr._create(i,n,e)}class Bs extends qs{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Bs(t,e)}_parse(t){const e=this._queryConstraints.map(n=>n._parse(t)).filter(n=>n.getFilters().length>0);return e.length===1?e[0]:xt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,o){let u=i;const c=o.getFlattenedFilters();for(const h of c)tu(u,h),u=ts(u,h)}(t._query,e),new pe(t.firestore,t.converter,ts(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class js extends Ja{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new js(t,e)}_apply(t){const e=function(i,o,u){if(i.startAt!==null)throw new N(P.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new N(P.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new cn(o,u)}(t._query,this._field,this._direction);return new pe(t.firestore,t.converter,function(i,o){const u=i.explicitOrderBy.concat([o]);return new Ne(i.path,i.collectionGroup,u,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(t._query,e))}}function Xh(r,t="asc"){const e=t,n=_r("orderBy",r);return js._create(n,e)}function Vo(r,t,e){if(typeof(e=Ot(e))=="string"){if(e==="")throw new N(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Wo(t)&&e.indexOf("/")!==-1)throw new N(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const n=t.path.child(J.fromString(e));if(!M.isDocumentKey(n))throw new N(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Wi(r,new M(n))}if(e instanceof yt)return Wi(r,e._key);throw new N(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${hr(e)}.`)}function So(r,t){if(!Array.isArray(r)||r.length===0)throw new N(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function tu(r,t){const e=function(i,o){for(const u of i)for(const c of u.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null}(r.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new N(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new N(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Yh{convertValue(t,e="none"){switch(he(t)){case 0:return null;case 1:return t.booleanValue;case 2:return nt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ce(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw O()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return de(t,(i,o)=>{n[i]=this.convertValue(o,e)}),n}convertGeoPoint(t){return new Ms(nt(t.latitude),nt(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=ms(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(an(t));default:return null}}convertTimestamp(t){const e=Zt(t);return new ot(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=J.fromString(t);X(_a(n));const i=new un(n.get(1),n.get(3)),o=new M(n.popFirst(5));return i.isEqual(e)||jt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(r,t,e){let n;return n=r?r.toFirestore(t):t,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class nu extends Ya{constructor(t,e,n,i,o,u){super(t,e,n,i,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Qn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(_r("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Qn extends nu{data(t={}){return super.data(t)}}class Jh{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new tn(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new Qn(this._firestore,this._userDataWriter,n.key,n,new tn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new N(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let u=0;return i._snapshot.docChanges.map(c=>{const h=new Qn(i._firestore,i._userDataWriter,c.doc.key,c.doc,new tn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:u++}})}{let u=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new Qn(i._firestore,i._userDataWriter,c.doc.key,c.doc,new tn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,m=-1;return c.type!==0&&(f=u.indexOf(c.doc.key),u=u.delete(c.doc.key)),c.type!==1&&(u=u.add(c.doc),m=u.indexOf(c.doc.key)),{type:Zh(c.type),doc:h,oldIndex:f,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Zh(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(r){r=Dt(r,yt);const t=Dt(r.firestore,ee);return Lh(xs(t),r._key).then(e=>ou(t,r,e))}class ru extends Yh{constructor(t){super(),this.firestore=t}convertBytes(t){return new De(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new yt(this.firestore,null,e)}}function ed(r,t,e){r=Dt(r,yt);const n=Dt(r.firestore,ee),i=eu(r.converter,t);return Tr(n,[Qa(mr(n),"setDoc",r._key,i,r.converter!==null,e).toMutation(r._key,Ct.none())])}function su(r,t,e,...n){r=Dt(r,yt);const i=Dt(r.firestore,ee),o=mr(i);let u;return u=typeof(t=Ot(t))=="string"||t instanceof fr?Gh(o,"updateDoc",r._key,t,e,n):zh(o,"updateDoc",r._key,t),Tr(i,[u.toMutation(r._key,Ct.exists(!0))])}function od(r){return Tr(Dt(r.firestore,ee),[new Ts(r._key,Ct.none())])}function ad(r,t){const e=Dt(r.firestore,ee),n=Zn(r),i=eu(r.converter,t);return Tr(e,[Qa(mr(r.firestore),"addDoc",n._key,i,r.converter!==null,{}).toMutation(n._key,Ct.exists(!1))]).then(()=>n)}function iu(r,...t){var e,n,i;r=Ot(r);let o={includeMetadataChanges:!1,source:"default"},u=0;typeof t[u]!="object"||Po(t[u])||(o=t[u],u++);const c={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(Po(t[u])){const A=t[u];t[u]=(e=A.next)===null||e===void 0?void 0:e.bind(A),t[u+1]=(n=A.error)===null||n===void 0?void 0:n.bind(A),t[u+2]=(i=A.complete)===null||i===void 0?void 0:i.bind(A)}let h,f,m;if(r instanceof yt)f=Dt(r.firestore,ee),m=nr(r._key.path),h={next:A=>{t[u]&&t[u](ou(f,r,A))},error:t[u+1],complete:t[u+2]};else{const A=Dt(r,pe);f=Dt(A.firestore,ee),m=A._query;const R=new ru(f);h={next:V=>{t[u]&&t[u](new Jh(f,R,A,V))},error:t[u+1],complete:t[u+2]},Wh(r._query)}return function(R,V,k,x){const D=new Ua(x),B=new Da(V,D,k);return R.asyncQueue.enqueueAndForget(async()=>Sa(await ls(R),B)),()=>{D.$a(),R.asyncQueue.enqueueAndForget(async()=>Ca(await ls(R),B))}}(xs(f),m,c,h)}function Tr(r,t){return function(n,i){const o=new Xt;return n.asyncQueue.enqueueAndForget(async()=>Ah(await Mh(n),i,o)),o.promise}(xs(r),t)}function ou(r,t,e){const n=e.docs.get(t._key),i=new ru(r);return new nu(r,i,t._key,n,new tn(e.hasPendingWrites,e.fromCache),t.converter)}function ud(){return new Os("serverTimestamp")}(function(t,e=!0){(function(i){ke=i})(Ku),qu(new Bu("firestore",(n,{instanceIdentifier:i,options:o})=>{const u=n.getProvider("app").getImmediate(),c=new ee(new rl(n.getProvider("auth-internal")),new al(n.getProvider("app-check-internal")),function(f,m){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new N(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new un(f.options.projectId,m)}(u,i),u);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),ji(Gi,"4.6.3",t),ji(Gi,"4.6.3","esm2017")})();function ld(){const r=Co(),t=bt(r.currentUser);r.onAuthStateChanged(c=>{t.value=c});const e=za(),n=Yu(),i=new Xu;return{user:t,signInWithGoogle:()=>{Ju(r,i).then(c=>{const h=cs(e,"users"),f=Zn(h,c.user.uid);ed(f,{userName:c.user.displayName,userId:c.user.uid,userPhotoURL:c.user.photoURL,status:"online"}),n.push("/home")}).catch(c=>{console.log(c)})},firestore:e,auth:r,logout:async()=>{if(t.value){const c=Zn(e,"users",t.value.uid);try{await su(c,{status:"offline"}),await Zu(r),n.push("/")}catch(h){console.error("Error during logout: ",h)}}else n.push({path:"/",state:{errorMessage:"You must login first"}})},collection:cs,query:Za,where:Hh,onSnapshot:iu}}function cd(r){const t=Co(),e=za(),n=bt(!1),i=bt(!0),o=bt(t.currentUser);t.onAuthStateChanged(L=>{o.value=L});const u=bt([]),c=Gr(()=>u.value.filter(L=>L.title.toLowerCase().includes(r.searchQuery.toLowerCase()))),h=bt({});let f=bt(0);const m={1:"Poor",2:"Fair",3:"Good",4:"Very Good",5:"Excellent"},A=Gr(()=>m[f.value]||""),R=cs(e,"recipe"),V=Za(R,Xh("createdAt","asc")),k=iu(V,L=>{u.value=L.docs.map(z=>({id:z.id,...z.data()})).reverse(),i.value=!1}),x=L=>{const z=L.seconds,It=L.nanoseconds/1e6;return new Date(z*1e3+It)},D=L=>{const z=x(L),It=z.getFullYear().toString().slice(-2),At=z.toLocaleString("default",{month:"short"}),Rt=z.getUTCDate(),Ut=z.getHours()%12||12,me=("0"+z.getMinutes()).slice(-2),Me=z.getHours()<12?"am":"pm";return`${Rt} ${At} ${It} (${Ut}:${me} ${Me})`};let B=bt(!1);const Q=L=>{var It;h.value=L,console.log(h.value),B.value=I((It=o.value)==null?void 0:It.uid),document.getElementById("my_modal_4").showModal()},j=bt([]),H=bt([]),St=()=>{f.value=0,j.value=[],H.value=[],document.getElementById("my_modal_4").close()},st=L=>{if(console.log("instructions clicked",L),!j.value.includes(L))j.value.push(L);else{const z=j.value.indexOf(L);z!==-1&&j.value.splice(z,1)}console.log(j.value)},E=L=>{if(console.log("ingre clicked",L),!H.value.includes(L))H.value.push(L);else{const z=H.value.indexOf(L);z!==-1&&H.value.splice(z,1)}console.log(H.value)};let p=bt("");const _=(L,z)=>{p.value=z,f.value=L},y=async(L,z,It)=>{try{n.value=!0;const At=Zn(e,"recipe",L),Rt=await td(At);if(Rt.exists()){const Ut=Rt.data(),me=Ut.totalRatings||0,Me=Ut.ratingCount||0,kt=me+z,it=Me+1,Er=kt/it,Gt=Ut.usersIdThatRate||[];Gt.push(It),await su(At,{totalRatings:kt,ratingCount:it,averageRating:Er,usersIdThatRate:Gt}),console.log(`Updated recipe ${L} with new ratings and average rating.`)}else console.log("No such recipe document!")}catch(At){console.error("Error updating ratings: ",At)}finally{n.value=!1}},T=async()=>{if(o.value){const L=f.value,z=p.value,It=o.value.uid;await y(z,L,It),St()}},I=L=>(h.value.usersIdThatRate||[]).includes(L),g=Gr(()=>{const L=[],z=h.value.averageRating||0,It=Math.floor(z),At=z%1!==0;for(let Rt=0;Rt<It;Rt++)L.push("full");for(At&&L.push("half");L.length<5;)L.push("empty");return L});return tl(()=>{k()}),{sendingRatingLoading:n,recipe:u,formatHour:D,showRecipeAllModal:Q,selectedAllRecipe:h,ratings:f,setRating:_,closeModal:St,ratingsInText:A,sendRatings:T,starArray:g,filteredRecipes:c,muteRateBnt:B,loading:i,clickInstructions:st,instructionsDisables:j,clickIngredients:E,ingredientsDisables:H}}const hd=(r,t)=>{const e=r.__vccOpts||r;for(const[n,i]of t)e[n]=i;return e};export{hd as _,ad as a,cd as b,cs as c,iu as d,Zn as e,td as f,za as g,od as h,su as i,Xh as o,Za as q,ud as s,ld as u,Hh as w};
