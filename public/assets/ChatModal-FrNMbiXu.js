import{_ as ct,C as dt,z as Ee,A as oe,B as ht,D as ft,E as gt,S as pt,G as mt,H as _t,g as Ve,e as f,q as Ae,I as ye,p as Ne,w as ve,J as bt,K as ze,o as y,c as v,a as l,n as G,t as S,k as A,f as Z,d as yt,b as N,u as q,F as vt,j as wt,x as ie,T as ae,h as le,i as Ce,y as xt}from"./index-Bw6gc8wN.js";import{u as Rt,_ as kt,I as H}from"./_plugin-vue_export-helper-m75E8i4W.js";import{s as Tt,d as Oe,h as Se,a as It,c as De,b as Le,q as Ut,o as Et}from"./index.esm2017-BKpxu4rY.js";/**
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
 */const We="firebasestorage.googleapis.com",Ke="storageBucket",At=2*60*1e3,Nt=10*60*1e3;/**
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
 */class I extends _t{constructor(t,n,s=0){super(_e(t),`Firebase Storage: ${n} (${_e(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,I.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return _e(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var T;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(T||(T={}));function _e(e){return"storage/"+e}function xe(){const e="An unknown error occurred, please check the error payload for server response.";return new I(T.UNKNOWN,e)}function Ct(e){return new I(T.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function Ot(e){return new I(T.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function St(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new I(T.UNAUTHENTICATED,e)}function Dt(){return new I(T.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Lt(e){return new I(T.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function Pt(){return new I(T.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Mt(){return new I(T.CANCELED,"User canceled the upload/download.")}function Bt(e){return new I(T.INVALID_URL,"Invalid URL '"+e+"'.")}function $t(e){return new I(T.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function jt(){return new I(T.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Ke+"' property when initializing the app?")}function Ft(){return new I(T.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function qt(){return new I(T.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Ht(e){return new I(T.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function we(e){return new I(T.INVALID_ARGUMENT,e)}function Xe(){return new I(T.APP_DELETED,"The Firebase app was deleted.")}function Vt(e){return new I(T.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function re(e,t){return new I(T.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function se(e){throw new I(T.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class D{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let s;try{s=D.makeFromUrl(t,n)}catch{return new D(t,"")}if(s.path==="")return s;throw $t(t)}static makeFromUrl(t,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const a="(/(.*))?$",u=new RegExp("^gs://"+r+a,"i"),c={bucket:1,path:3};function d(E){E.path_=decodeURIComponent(E.path)}const p="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),_="(/([^?#]*).*)?$",U=new RegExp(`^https?://${m}/${p}/b/${r}/o${_}`,"i"),x={bucket:1,path:3},L=n===We?"(?:storage.googleapis.com|storage.cloud.google.com)":n,h="([^?#]*)",R=new RegExp(`^https?://${L}/${r}/${h}`,"i"),C=[{regex:u,indices:c,postModify:i},{regex:U,indices:x,postModify:d},{regex:R,indices:{bucket:1,path:2},postModify:d}];for(let E=0;E<C.length;E++){const B=C[E],M=B.regex.exec(t);if(M){const K=M[B.indices.bucket];let $=M[B.indices.path];$||($=""),s=new D(K,$),B.postModify(s);break}}if(s==null)throw Bt(t);return s}}class zt{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function Wt(e,t,n){let s=1,r=null,i=null,a=!1,u=0;function c(){return u===2}let d=!1;function p(...h){d||(d=!0,t.apply(null,h))}function m(h){r=setTimeout(()=>{r=null,e(U,c())},h)}function _(){i&&clearTimeout(i)}function U(h,...R){if(d){_();return}if(h){_(),p.call(null,h,...R);return}if(c()||a){_(),p.call(null,h,...R);return}s<64&&(s*=2);let C;u===1?(u=2,C=0):C=(s+Math.random())*1e3,m(C)}let x=!1;function L(h){x||(x=!0,_(),!d&&(r!==null?(h||(u=2),clearTimeout(r),m(0)):h||(u=1)))}return m(0),i=setTimeout(()=>{a=!0,L(!0)},n),L}function Kt(e){e(!1)}/**
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
 */function Xt(e){return e!==void 0}function Gt(e){return typeof e=="object"&&!Array.isArray(e)}function Re(e){return typeof e=="string"||e instanceof String}function Pe(e){return ke()&&e instanceof Blob}function ke(){return typeof Blob<"u"}function Me(e,t,n,s){if(s<t)throw we(`Invalid value for '${e}'. Expected ${t} or greater.`);if(s>n)throw we(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
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
 */function de(e,t,n){let s=t;return n==null&&(s=`https://${t}`),`${n}://${s}/v0${e}`}function Ge(e){const t=encodeURIComponent;let n="?";for(const s in e)if(e.hasOwnProperty(s)){const r=t(s)+"="+t(e[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
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
 */var Q;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(Q||(Q={}));/**
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
 */function Yt(e,t){const n=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,i=t.indexOf(e)!==-1;return n||r||i}/**
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
 */class Jt{constructor(t,n,s,r,i,a,u,c,d,p,m,_=!0){this.url_=t,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=u,this.errorCallback_=c,this.timeout_=d,this.progressCallback_=p,this.connectionFactory_=m,this.retry=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((U,x)=>{this.resolve_=U,this.reject_=x,this.start_()})}start_(){const t=(s,r)=>{if(r){s(!1,new ue(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=u=>{const c=u.loaded,d=u.lengthComputable?u.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,d)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const u=i.getErrorCode()===Q.NO_ERROR,c=i.getStatus();if(!u||Yt(c,this.additionalRetryCodes_)&&this.retry){const p=i.getErrorCode()===Q.ABORT;s(!1,new ue(!1,null,p));return}const d=this.successCodes_.indexOf(c)!==-1;s(!0,new ue(d,i))})},n=(s,r)=>{const i=this.resolve_,a=this.reject_,u=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(u,u.getResponse());Xt(c)?i(c):i()}catch(c){a(c)}else if(u!==null){const c=xe();c.serverResponse=u.getErrorText(),this.errorCallback_?a(this.errorCallback_(u,c)):a(c)}else if(r.canceled){const c=this.appDelete_?Xe():Mt();a(c)}else{const c=Pt();a(c)}};this.canceled_?n(!1,new ue(!1,null,!0)):this.backoffId_=Wt(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&Kt(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ue{constructor(t,n,s){this.wasSuccessCode=t,this.connection=n,this.canceled=!!s}}function Zt(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function Qt(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function en(e,t){t&&(e["X-Firebase-GMPID"]=t)}function tn(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function nn(e,t,n,s,r,i,a=!0){const u=Ge(e.urlParams),c=e.url+u,d=Object.assign({},e.headers);return en(d,t),Zt(d,n),Qt(d,i),tn(d,s),new Jt(c,e.method,d,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r,a)}/**
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
 */function sn(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function rn(...e){const t=sn();if(t!==void 0){const n=new t;for(let s=0;s<e.length;s++)n.append(e[s]);return n.getBlob()}else{if(ke())return new Blob(e);throw new I(T.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function on(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
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
 */function an(e){if(typeof atob>"u")throw Ht("base-64");return atob(e)}/**
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
 */const W={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class be{constructor(t,n){this.data=t,this.contentType=n||null}}function ln(e,t){switch(e){case W.RAW:return new be(Ye(t));case W.BASE64:case W.BASE64URL:return new be(Je(e,t));case W.DATA_URL:return new be(cn(t),dn(t))}throw xe()}function Ye(e){const t=[];for(let n=0;n<e.length;n++){let s=e.charCodeAt(n);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const i=s,a=e.charCodeAt(++n);s=65536|(i&1023)<<10|a&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function un(e){let t;try{t=decodeURIComponent(e)}catch{throw re(W.DATA_URL,"Malformed data URL.")}return Ye(t)}function Je(e,t){switch(e){case W.BASE64:{const r=t.indexOf("-")!==-1,i=t.indexOf("_")!==-1;if(r||i)throw re(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case W.BASE64URL:{const r=t.indexOf("+")!==-1,i=t.indexOf("/")!==-1;if(r||i)throw re(e,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=an(t)}catch(r){throw r.message.includes("polyfill")?r:re(e,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class Ze{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw re(W.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=hn(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function cn(e){const t=new Ze(e);return t.base64?Je(W.BASE64,t.rest):un(t.rest)}function dn(e){return new Ze(e).contentType}function hn(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class Y{constructor(t,n){let s=0,r="";Pe(t)?(this.data_=t,s=t.size,r=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,n){if(Pe(this.data_)){const s=this.data_,r=on(s,t,n);return r===null?null:new Y(r)}else{const s=new Uint8Array(this.data_.buffer,t,n-t);return new Y(s,!0)}}static getBlob(...t){if(ke()){const n=t.map(s=>s instanceof Y?s.data_:s);return new Y(rn.apply(null,n))}else{const n=t.map(a=>Re(a)?ln(W.RAW,a).data:a.data_);let s=0;n.forEach(a=>{s+=a.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(a=>{for(let u=0;u<a.length;u++)r[i++]=a[u]}),new Y(r,!0)}}uploadData(){return this.data_}}/**
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
 */function Qe(e){let t;try{t=JSON.parse(e)}catch{return null}return Gt(t)?t:null}/**
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
 */function fn(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function gn(e,t){const n=t.split("/").filter(s=>s.length>0).join("/");return e.length===0?n:e+"/"+n}function et(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function pn(e,t){return t}class O{constructor(t,n,s,r){this.server=t,this.local=n||t,this.writable=!!s,this.xform=r||pn}}let ce=null;function mn(e){return!Re(e)||e.length<2?e:et(e)}function tt(){if(ce)return ce;const e=[];e.push(new O("bucket")),e.push(new O("generation")),e.push(new O("metageneration")),e.push(new O("name","fullPath",!0));function t(i,a){return mn(a)}const n=new O("name");n.xform=t,e.push(n);function s(i,a){return a!==void 0?Number(a):a}const r=new O("size");return r.xform=s,e.push(r),e.push(new O("timeCreated")),e.push(new O("updated")),e.push(new O("md5Hash",null,!0)),e.push(new O("cacheControl",null,!0)),e.push(new O("contentDisposition",null,!0)),e.push(new O("contentEncoding",null,!0)),e.push(new O("contentLanguage",null,!0)),e.push(new O("contentType",null,!0)),e.push(new O("metadata","customMetadata",!0)),ce=e,ce}function _n(e,t){function n(){const s=e.bucket,r=e.fullPath,i=new D(s,r);return t._makeStorageReference(i)}Object.defineProperty(e,"ref",{get:n})}function bn(e,t,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const a=n[i];s[a.local]=a.xform(s,t[a.server])}return _n(s,e),s}function nt(e,t,n){const s=Qe(t);return s===null?null:bn(e,s,n)}function yn(e,t,n,s){const r=Qe(t);if(r===null||!Re(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const a=encodeURIComponent;return i.split(",").map(d=>{const p=e.bucket,m=e.fullPath,_="/b/"+a(p)+"/o/"+a(m),U=de(_,n,s),x=Ge({alt:"media",token:d});return U+x})[0]}function vn(e,t){const n={},s=t.length;for(let r=0;r<s;r++){const i=t[r];i.writable&&(n[i.server]=e[i.local])}return JSON.stringify(n)}class Te{constructor(t,n,s,r){this.url=t,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function st(e){if(!e)throw xe()}function wn(e,t){function n(s,r){const i=nt(e,r,t);return st(i!==null),i}return n}function xn(e,t){function n(s,r){const i=nt(e,r,t);return st(i!==null),yn(i,r,e.host,e._protocol)}return n}function rt(e){function t(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=Dt():r=St():n.getStatus()===402?r=Ot(e.bucket):n.getStatus()===403?r=Lt(e.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return t}function ot(e){const t=rt(e);function n(s,r){let i=t(s,r);return s.getStatus()===404&&(i=Ct(e.path)),i.serverResponse=r.serverResponse,i}return n}function Rn(e,t,n){const s=t.fullServerUrl(),r=de(s,e.host,e._protocol),i="GET",a=e.maxOperationRetryTime,u=new Te(r,i,xn(e,n),a);return u.errorHandler=ot(t),u}function kn(e,t){const n=t.fullServerUrl(),s=de(n,e.host,e._protocol),r="DELETE",i=e.maxOperationRetryTime;function a(c,d){}const u=new Te(s,r,a,i);return u.successCodes=[200,204],u.errorHandler=ot(t),u}function Tn(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function In(e,t,n){const s=Object.assign({},n);return s.fullPath=e.path,s.size=t.size(),s.contentType||(s.contentType=Tn(null,t)),s}function Un(e,t,n,s,r){const i=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function u(){let C="";for(let E=0;E<2;E++)C=C+Math.random().toString().slice(2);return C}const c=u();a["Content-Type"]="multipart/related; boundary="+c;const d=In(t,s,r),p=vn(d,n),m="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+p+`\r
--`+c+`\r
Content-Type: `+d.contentType+`\r
\r
`,_=`\r
--`+c+"--",U=Y.getBlob(m,s,_);if(U===null)throw Ft();const x={name:d.fullPath},L=de(i,e.host,e._protocol),h="POST",R=e.maxUploadRetryTime,P=new Te(L,h,wn(e,n),R);return P.urlParams=x,P.headers=a,P.body=U.uploadData(),P.errorHandler=rt(t),P}class En{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Q.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Q.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Q.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,s,r){if(this.sent_)throw se("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw se("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw se("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw se("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw se("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class An extends En{initXhr(){this.xhr_.responseType="text"}}function Ie(){return new An}/**
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
 */class ee{constructor(t,n){this._service=t,n instanceof D?this._location=n:this._location=D.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new ee(t,n)}get root(){const t=new D(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return et(this._location.path)}get storage(){return this._service}get parent(){const t=fn(this._location.path);if(t===null)return null;const n=new D(this._location.bucket,t);return new ee(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw Vt(t)}}function Nn(e,t,n){e._throwIfRoot("uploadBytes");const s=Un(e.storage,e._location,tt(),new Y(t,!0),n);return e.storage.makeRequestWithTokens(s,Ie).then(r=>({metadata:r,ref:e}))}function Cn(e){e._throwIfRoot("getDownloadURL");const t=Rn(e.storage,e._location,tt());return e.storage.makeRequestWithTokens(t,Ie).then(n=>{if(n===null)throw qt();return n})}function On(e){e._throwIfRoot("deleteObject");const t=kn(e.storage,e._location);return e.storage.makeRequestWithTokens(t,Ie)}function Sn(e,t){const n=gn(e._location.path,t),s=new D(e._location.bucket,n);return new ee(e.storage,s)}/**
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
 */function Dn(e){return/^[A-Za-z]+:\/\//.test(e)}function Ln(e,t){return new ee(e,t)}function it(e,t){if(e instanceof Ue){const n=e;if(n._bucket==null)throw jt();const s=new ee(n,n._bucket);return t!=null?it(s,t):s}else return t!==void 0?Sn(e,t):e}function Pn(e,t){if(t&&Dn(t)){if(e instanceof Ue)return Ln(e,t);throw we("To use ref(service, url), the first argument must be a Storage instance.")}else return it(e,t)}function Be(e,t){const n=t==null?void 0:t[Ke];return n==null?null:D.makeFromBucketSpec(n,e)}function Mn(e,t,n,s={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:r}=s;r&&(e._overrideAuthToken=typeof r=="string"?r:mt(r,e.app.options.projectId))}class Ue{constructor(t,n,s,r,i){this.app=t,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=We,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=At,this._maxUploadRetryTime=Nt,this._requests=new Set,r!=null?this._bucket=D.makeFromBucketSpec(r,this._host):this._bucket=Be(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=D.makeFromBucketSpec(this._url,t):this._bucket=Be(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Me("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Me("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new ee(this,t)}_makeRequest(t,n,s,r,i=!0){if(this._deleted)return new zt(Xe());{const a=nn(t,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(t,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,s,r).getPromise()}}const $e="@firebase/storage",je="0.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at="storage";function Fe(e,t,n){return e=oe(e),Nn(e,t,n)}function qe(e){return e=oe(e),Cn(e)}function sr(e){return e=oe(e),On(e)}function He(e,t){return e=oe(e),Pn(e,t)}function Bn(e=gt(),t){e=oe(e);const s=ht(e,at).getImmediate({identifier:t}),r=ft("storage");return r&&$n(s,...r),s}function $n(e,t,n,s={}){Mn(e,t,n,s)}function jn(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return new Ue(n,s,r,t,pt)}function Fn(){ct(new dt(at,jn,"PUBLIC").setMultipleInstances(!0)),Ee($e,je,""),Ee($e,je,"esm2017")}Fn();function qn(){const e=Ve(),t=f(e.currentUser),{uid:n,photoURL:s,displayName:r}=t.value,i=n,a=f([]),c=JSON.parse(localStorage.getItem("users")).filter(d=>d.id!==i);return a.value=c,{storedUsers:a}}function rr(){const e=Ve(),t=f(e.currentUser),{firestore:n}=Rt(),s=Bn(),r=t.value.uid,i=t.value.photoURL,a=t.value.displayName;bt();const{storedUsers:u}=qn(),c=f(""),d=f([]),p=f(!1),m=f(null);let _=f({}),U=f(!1);const x=(o,g)=>[o,g].sort().join("_"),L=(o,g)=>{document.getElementById(o).showModal(),_.value=g,w(),console.log(d)},h=f(null),R=f(null),P=o=>{h.value=o},C=o=>{R.value=o},E=async()=>{if(!(c.value.trim()===""&&!h.value&&!R.value))try{const o=x(r,_.value.userId);U.value=!0,console.log(U.value);let g=null,k=null;if(h.value){const j=`chats/${o}/${Date.now()}_${h.value.name}`,V=He(s,j),z=await Fe(V,h.value);g=await qe(z.ref)}if(R.value){const j=`chats/${o}/${Date.now()}_${R.value.name}`,V=He(s,j),z=await Fe(V,R.value);k=await qe(z.ref)}await Tt(Oe(n,`chats/${o}`),{participants:{[r]:!0,[_.value.userId]:!0},lastMessage:c.value||(g||k?"File attachment":""),sender:r,timestamp:Se()},{merge:!0}),await It(De(n,`chats/${o}/messages`),{senderId:r,recipientId:_.value.userId,message:c.value,imageUrl:k,imageName:R.value?R.value.name:null,fileUrl:g,fileName:h.value?h.value.name:null,isSendMessageLoading:!1,timestamp:Se()}),c.value="",h.value=null,R.value=null}catch(o){console.error("Error sending message: ",o)}finally{U.value=!1}},B=f({}),M=f({}),K=f([]),$=f({}),X=f(0),he=Ae(()=>u.value.filter(o=>B.value[x(r,o.id)]).sort((o,g)=>{const k=x(r,o.id),j=x(r,g.id);return $.value[j]-$.value[k]})),fe=()=>{K.value.forEach(g=>g()),K.value=[];const o=new Set;u.value.forEach(g=>{const k=x(r,g.id),j=Oe(n,"chats",k),V=Le(j,z=>{if(z.exists()){const F=z.data(),te=F.lastMessage||"",J=F.sender||"",pe=F.timestamp||"";B.value[k]=te,M.value[k]=J,$.value[k]=pe,te&&J!==r?o.has(J)||(o.add(J),X.value=o.size):o.has(J)&&(o.delete(J),X.value=o.size)}else{B.value[k]="",M.value[k]="",$.value[k]="";const F=M.value[k];o.has(F)&&(o.delete(F),X.value=o.size)}},z=>{console.error("Error listening to chat updates:",z)});K.value.push(V)})};ye(()=>{fe()}),Ne(()=>{K.value.forEach(o=>o())}),ve(X,o=>{console.log(X.value)});const ge=Ae(()=>d.value.filter(o=>o.senderId===r&&o.recipientId===_.value.userId||o.senderId===_.value.userId&&o.recipientId===r)),b=()=>{ze(()=>{m.value&&(m.value.scrollTop=m.value.scrollHeight)})},w=()=>{p.value=!0;const o=x(r,_.value.userId),g=Ut(De(n,`chats/${o}/messages`),Et("timestamp","asc")),k=Le(g,j=>{d.value=j.docs.map(V=>({id:V.id,...V.data()})),p.value=!1,b()});Ne(()=>{k()})};return ye(()=>{w()}),{Time:o=>{if(o){const g=new Date(o.seconds*1e3),k=new Date,j=g.getHours()%12||12,V=("0"+g.getMinutes()).slice(-2),z=g.getHours()<12?"am":"pm",F=`${j}:${V} ${z}`;if(g.toDateString()===k.toDateString())return F;const te=new Date(k);if(te.setDate(te.getDate()-1),g.toDateString()===te.toDateString())return`Yesterday ${F}`;const pe=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][g.getDay()],me=new Date(k);if(me.setDate(me.getDate()-7),g>me)return`${pe} ${F}`;const lt=g.toLocaleString("default",{month:"short"}),ut=g.getDate();return`${lt} ${ut} ${F}`}return""},getChatId:x,yourChat:L,sendMessage:E,userId:r,newMessage:c,messages:d,isLoading:p,isSendMessageLoading:U,filteredMessages:ge,selectedUser:_,timestamp:$,userPhoto:i,userName:a,filteredUsers:he,latestMessages:B,isSender:M,storedUsers:u,newMessageArray:X,file:h,imageFile:R,handleImageUpdate:C,handleFileUpdate:P}}const Hn={class:"w-10 rounded-full"},Vn=["src"],zn={class:""},Wn={class:"text-sm font-medium capitalize"},Kn={class:"flex gap-2 justify-start items-center"},Xn={key:0,class:"text-xs"},Gn={class:"text-[10px]"},or={__name:"usersChatHeads",props:{yourChat:{type:Function,required:!0},formatTime:{type:Function,required:!0},user:{type:Object,required:!0},latestMessages:{type:Object,required:!0},getChatId:{type:Function,required:!0},userId:{type:[String,Number],required:!0},isSender:{type:Object,required:!0},timestamp:{type:Object,required:!0}},setup(e){return(t,n)=>(y(),v("div",{onClick:n[0]||(n[0]=s=>e.yourChat(e.user)),class:"flex justify-start items-center gap-2 cursor-pointer hover:bg-gray-500/20 transition p-1 rounded-md"},[l("div",{class:G(["avatar",e.user.status==="online"?"online":"offline"])},[l("div",Hn,[l("img",{src:e.user.userPhotoURL},null,8,Vn)])],2),l("div",zn,[l("h1",Wn,S(e.user.userName),1),l("div",Kn,[e.latestMessages[e.getChatId(e.userId,e.user.id)]?(y(),v("span",{key:0,class:G(["text-xs px-2 py-0.5 truncate max-w-52 bg-gray-500/20 rounded-full",e.isSender[e.getChatId(e.userId,e.user.id)]===e.userId?"":"text-blue-500"])},[e.isSender[e.getChatId(e.userId,e.user.id)]===e.userId?(y(),v("span",Xn," You: ")):A("",!0),Z(" "+S(e.latestMessages[e.getChatId(e.userId,e.user.id)]),1)],2)):A("",!0),l("span",Gn,S(e.formatTime(e.timestamp[e.getChatId(e.userId,e.user.id)])),1)])])]))}},Yn={},Jn={class:"my-3"},Zn=yt('<div class="flex flex-col gap-4 w-32 ml-2"><div class="flex gap-2 items-center"><div class="skeleton w-10 h-10 rounded-full shrink-0"></div><div class="flex flex-col gap-2"><div class="skeleton h-2 w-10"></div><div class="skeleton h-2 w-20"></div></div></div></div><div class="flex justify-end mr-5"><div class="flex flex-col gap-4 w-32"><div class="flex gap-2 items-center"><div class="flex flex-col gap-2"><div class="skeleton h-2 w-20"></div><div class="skeleton h-2 w-10"></div></div><div class="skeleton w-10 h-10 rounded-full shrink-0"></div></div></div></div>',2),Qn=[Zn];function es(e,t){return y(),v("div",Jn,Qn)}const ts=kt(Yn,[["render",es]]),ns={class:"modal-box relative p-2 no-scrollbar"},ss={class:"modal-action absolute z-10 -top-4 right-2"},rs={method:"dialog"},os={class:"btn btn-xs px-0.5 rounded-full"},is={class:"flex justify-start items-center gap-2"},as={class:"avatar"},ls={class:"w-10 rounded-full"},us=["src"],cs={class:"text-sm font-medium"},ds=l("hr",{class:"my-1 border border-gray-400/20"},null,-1),hs={key:0,class:"my-2 flex justify-center items-center text-sm"},fs={class:"py-1 px-4 bg-primary/10 rounded-full"},gs={class:"text-primary font-semibold"},ps={class:"chat-image avatar"},ms={key:0,class:"size-5 rounded-full"},_s=["src"],bs={class:"chat-header text-xs font-medium"},ys={class:"text-[10px] opacity-50"},vs={key:1,class:"w-52"},ws={class:""},xs={key:0,class:"w-52 h-32 bg-gray-500/20 border border-gray-500/20 rounded-2xl"},Rs=["src"],ks={key:2,class:""},Ts={key:0,class:"w-52 h-32 bg-gray-500/20 border border-gray-500/20 rounded-2xl"},Is=["src"],Us={key:3,class:"text-sm rounded-2xl backdrop-blur-2xl max-w-52 bg-gray-500/20 font-medium border border-gray-500/20 px-4 py-3"},Es=["href"],As={key:4,class:"max-w-52"},Ns={class:"text-sm rounded-b-2xl backdrop-blur-2xl bg-gray-500/20 font-medium border border-gray-500/20 px-4 py-3"},Cs=["href"],Os={class:"chat-footer opacity-50 font-semibold text-xs"},Ss={key:1},Ds={class:"fixed bottom-0 z-50 inset-x-0"},Ls={key:0,class:"flex justify-center items-center"},Ps=l("span",{class:"backdrop-blur-2xl flex justify-center items-center gap-2 bg-gray-400/20 border px-4 text-sm font-medium py-1 transition border-gray-500/20 rounded-full"},[l("span",{class:"loading loading-dots loading-xs"}),l("span",null,"Sending..")],-1),Ms=[Ps],Bs={key:0,class:"flex justify-center items-center gap-2"},$s=l("span",{class:"backdrop-blur-2xl flex justify-center items-center gap-2 bg-green-400/10 border px-2 text-sm font-medium py-1 transition border-green-500/20 rounded-full"},[l("span",{class:"loading loading-ring text-green-500 loading-md"}),l("span",null,"Recording..")],-1),js={key:0,class:"backdrop-blur-2xl flex justify-start items-center gap-1 bg-red-400/10 border py-1 px-2 text-sm font-medium transition border-red-500/20 rounded-full"},Fs={key:0,class:"ml-1 flex justify-start items-end gap-1 text-xs"},qs={key:0},Hs=["src"],Vs={class:"flex justify-start items-center gap-1"},zs={class:"backdrop-blur-2xl flex bg-gray-400/20 justify-start items-center gap-2 px-2 py-1 border border-gray-500/20 rounded-xl"},Ws={class:"my-1 mx-1 flex justify-start items-center rounded-2xl gap-2 bg-gray-400/20 backdrop-blur-2xl shadow"},Ks={class:"w-full rounded-2xl border border-gray-500/20 shadow"},Xs=["disabled","value"],Gs={class:"flex justify-between items-center m-3 h-5"},Ys={class:"flex justify-center items-center gap-2"},Js=["disabled"],Zs=10,Qs=24,ir={__name:"ChatModal",props:{userId:{type:String,required:!0},messages:{type:Array,required:!0},selectedUser:{type:Object,required:!0},userPhoto:{type:String,required:!0},userName:{type:String,required:!0},isSendMessageLoading:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},formatTime:{type:Function,required:!0},sendMessage:{type:Function,required:!0},filteredMessages:{type:Array},modelValue:{type:String,required:!0},selectedFile:{type:Object,default:null},selectedImage:{type:Object,default:null}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,s=t,r=f(null),i=f(null),a=f(null),u=f(null),c=f(null),d=f(""),p=f(null),m=f(null),_=f(null),U=f(!1),x=f(!1),L=f("");let h;const R=f(!0),P=()=>{console.log("loading is done!"),R.value=!1},C=()=>{R.value=!1},E=()=>{if(!("webkitSpeechRecognition"in window)){L.value="Speech recognition is not supported in this browser.",console.error("Speech recognition is not supported in this browser.");return}h=new webkitSpeechRecognition,h.continuous=!0,h.interimResults=!1,h.lang="en-US",h.onstart=()=>{x.value=!0},h.onresult=b=>{const w=b.results[b.results.length-1][0].transcript;s("update:modelValue",w)},h.onerror=b=>{console.error("Speech recognition error:",b)},h.onend=()=>{x.value=!1},h.start()},B=()=>{h&&(h.stop(),x.value=!1)},M=()=>{const b=i.value;if(b){const w=b.scrollTop,ne=b.scrollHeight;b.style.height="auto";const o=b.scrollHeight,g=Zs*Qs;o>g?(b.style.height=`${g}px`,b.style.overflowY="auto"):b.style.height=`${o}px`;const k=w+(o-ne);b.scrollTop=k}},K=b=>{s("update:modelValue",b.target.value),M()};ve(()=>n.modelValue,b=>{if(b===""){const w=i.value;w&&(w.style.height="auto",w.style.overflowY="hidden")}else M()}),ye(()=>{M(),r.value&&(r.value.scrollTop=r.value.scrollHeight)}),ve(()=>n.filteredMessages,()=>{ze(()=>{r.value&&(r.value.scrollTop=r.value.scrollHeight)})},{deep:!0},n.modelValue);const $=()=>{u.value&&(u.value.click(),U.value=!0)},X=()=>{U.value=!1,c.value&&c.value.click()},he=b=>{const w=b.target.files[0];w&&(p.value=w,s("update:selectedFile",p.value),d.value=p.value.name,console.log(p.value))},fe=b=>{const w=b.target.files[0];w&&(m.value=w,s("update:selectedImage",m.value),_.value=URL.createObjectURL(w),d.value=m.value.name,console.log(m.value))},ge=()=>{(p.value||m.value)&&(d.value="",_.value=null,m.value=null,p.value=null,s("update:selectedFile",null),s("update:selectedImage",null)),console.log(p.value,m.value)};return(b,w)=>{const ne=xt("motion-fade");return y(),v("div",ns,[l("div",ss,[l("form",rs,[l("button",os,[N(q(H),{icon:"carbon:close",class:"text-xl text-red-500"})])])]),l("div",is,[l("div",as,[l("div",ls,[l("img",{src:e.selectedUser.userPhotoURL},null,8,us)])]),l("div",null,[l("h1",cs,S(e.selectedUser.userName),1)])]),ds,l("div",{class:"h-[366px] mb-[86px] rounded-md overflow-y-scroll",ref_key:"messageContainer",ref:r},[e.filteredMessages.length===0&&!R.value?(y(),v("div",hs,[l("span",fs,[Z("No conversation with "),l("span",gs,S(e.selectedUser.userName),1)])])):A("",!0),(y(!0),v(vt,null,wt(e.filteredMessages,o=>(y(),v("div",{key:o.id},[l("div",{class:G(["chat",o.senderId===e.userId?"chat-end":"chat-start"])},[l("div",ps,[e.userId!==o.senderId?(y(),v("div",ms,[l("img",{src:e.selectedUser.userPhotoURL},null,8,_s)])):A("",!0)]),l("div",bs,[Z(S(o.senderId===e.userId?"You":e.selectedUser.userName)+" ",1),l("time",ys,S(e.formatTime(o.timestamp)),1)]),o.message&&o.imageUrl===null&&o.fileUrl===null?(y(),v("div",{key:0,class:G(["rounded-2xl py-2 px-4 text-sm max-w-52",e.userId===o.senderId?"chat-bubble-primary":"chat-bubble"])},S(o.message),3)):A("",!0),o.message&&o.imageUrl?(y(),v("div",vs,[l("div",{class:G(["rounded-t-2xl py-2 px-4 text-sm",e.userId===o.senderId?"chat-bubble-primary":"border border-gray-500/20"])},S(o.message),3),l("div",ws,[R.value?(y(),v("div",xs)):A("",!0),o.imageUrl?(y(),v("img",{key:1,src:o.imageUrl,loading:"lazy",alt:"",class:"h-auto w-52 object-cover border bg-gray-500/20 border-gray-500/20 rounded-b-2xl",onLoad:P,onError:C},null,40,Rs)):A("",!0)])])):A("",!0),o.imageUrl&&o.message===""?(y(),v("div",ks,[R.value?(y(),v("div",Ts)):A("",!0),l("img",{src:o.imageUrl,loading:"lazy",alt:"",onLoad:P,onError:C,class:"h-auto w-52 object-cover bg-gray-500/20 border border-gray-500/20 rounded-2xl"},null,40,Is)])):A("",!0),o.fileUrl&&o.message===""?(y(),v("div",Us,[l("a",{href:o.fileUrl,download:"",class:"flex justify-start items-center gap-2"},[N(q(H),{icon:"simple-icons:googledocs",width:"16",height:"16"}),Z(S(o.fileName),1)],8,Es)])):A("",!0),o.message&&o.fileUrl?(y(),v("div",As,[l("div",{class:G(["rounded-t-2xl py-2 px-4 text-sm",e.userId===o.senderId?"chat-bubble-primary":"border border-gray-500/20"])},S(o.message),3),l("div",Ns,[l("a",{href:o.fileUrl,download:"",class:"flex justify-start items-center gap-2"},[N(q(H),{icon:"simple-icons:googledocs",width:"16",height:"16"}),Z(S(o.fileName),1)],8,Cs)])])):A("",!0),l("div",Os,S(o.isSendMessageLoading?"Sending... bugs, hehehe":"Delivered"),1)],2)]))),128)),R.value?(y(),v("div",Ss,[N(ts)])):A("",!0)],512),l("div",Ds,[N(ae,null,{default:ie(()=>[e.isSendMessageLoading?(y(),v("div",Ls,Ms)):A("",!0)]),_:1}),N(ae,null,{default:ie(()=>[x.value?(y(),v("div",Bs,[$s,l("button",{onClick:w[0]||(w[0]=o=>B()),class:"backdrop-blur-2xl flex justify-center items-center gap-1 bg-red-400/10 border py-1 px-2 text-sm font-medium transition border-red-500/20 rounded-full"},[N(q(H),{icon:"mynaui:stop-solid",width:"20",height:"20",class:"text-red-500"}),Z(" Stop ")])])):A("",!0)]),_:1}),N(ae,null,{default:ie(()=>[L.value?(y(),v("span",js,[N(q(H),{icon:"material-symbols:error",class:"text-red-500",width:"20",height:"20"}),Z(" "+S(L.value),1)])):A("",!0)]),_:1}),N(ae,null,{default:ie(()=>[n.selectedFile||n.selectedImage!==null?(y(),v("div",Fs,[U.value?(y(),v("div",qs,[l("img",{src:_.value,loading:"lazy",alt:"",class:"size-14 rounded-xl backdrop-blur-2xl object-cover bg-gray-400/20 border border-gray-500/20"},null,8,Hs)])):A("",!0),l("div",Vs,[l("span",zs,[N(q(H),{icon:"fluent:attach-16-regular",width:"20",height:"20"}),l("span",null,S(d.value),1)]),l("button",{onClick:w[1]||(w[1]=o=>ge()),class:"backdrop-blur-2xl bg-gray-400/20 border p-0.5 hover:text-red-500 transition border-gray-500/20 rounded-full"},[N(q(H),{icon:"iconamoon:close-light",width:"20",height:"20"})])])])):A("",!0)]),_:1}),l("form",{ref_key:"messageBoxContainer",ref:a},[l("div",Ws,[l("div",Ks,[l("textarea",{type:"text",disabled:e.isSendMessageLoading,cols:"1",rows:"1",required:"",autofocus:"",ref_key:"autoExpand",ref:i,value:e.modelValue,onInput:K,placeholder:"Enter a message",class:"w-full px-3 pt-3 placeholder:text-sm placeholder:text-gray-500 resize-none rounded-2xl no-scrollbar bg-transparent outline-none"},null,40,Xs),l("div",Gs,[l("div",Ys,[l("button",{onClick:le($,["prevent"]),class:"transition p-1 rounded-full bg-gray-400/20 hover:text-success shadow"},[N(q(H),{icon:"tabler:photo",class:"text-xl"})]),l("input",{type:"file",ref_key:"imageInput",ref:u,accept:"image/*",onChange:fe,class:"hidden"},null,544),l("input",{type:"file",ref_key:"fileInput",ref:c,accept:".pdf, .doc, .docx",onChange:he,class:"hidden"},null,544),l("button",{onClick:le(X,["prevent"]),class:"transition p-1 rounded-full bg-gray-400/20 hover:text-secondary shadow"},[N(q(H),{icon:"tabler:file",class:"text-xl"})])]),l("div",{class:G(["rounded-full p-1.5 flex shadow justify-center transition items-center",e.modelValue||p.value||m.value!==null?"bg-blue-500 hover:bg-blue-500/90 ":"bg-primary/10 hover:bg-primary/20"])},[!e.isSendMessageLoading&&e.modelValue||p.value||m.value?Ce((y(),v("button",{key:0,class:G(e.isSendMessageLoading?"cursor-not-allowed":""),disabled:e.isSendMessageLoading,onClick:w[2]||(w[2]=le((...o)=>e.sendMessage&&e.sendMessage(...o),["prevent"]))},[N(q(H),{icon:"bxs:send",class:"text-xl text-gray-200"})],10,Js)),[[ne]]):Ce((y(),v("button",{key:1,onClick:le(E,["prevent","stop"])},[N(q(H),{icon:"ic:round-mic",class:"text-xl text-primary"})])),[[ne]])],2)])])])],512)])])}}};export{rr as C,or as _,qe as a,ir as b,sr as d,Bn as g,He as r,Fe as u};
