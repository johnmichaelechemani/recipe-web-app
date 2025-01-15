import{_ as ct,C as dt,z as Ee,A as ae,B as ht,D as ft,E as gt,S as pt,G as mt,H as _t,g as Ve,e as g,q as Ae,I as be,p as Ne,w as ye,J as bt,K as ze,o as x,c as R,a,n as Y,t as D,k as O,f as Q,d as yt,b as C,u as q,F as vt,j as wt,x as le,T as ue,h as ce,i as Ce,y as xt}from"./index-l3fcX_0W.js";import{u as Rt,_ as kt,I as H}from"./_plugin-vue_export-helper-1rZEJ72k.js";import{s as Tt,d as Oe,h as Se,a as It,c as De,b as Le,q as Ut,o as Et}from"./index.esm2017-Cwscf8G8.js";/**
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
 */class T extends _t{constructor(t,n,s=0){super(me(t),`Firebase Storage: ${n} (${me(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,T.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return me(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var k;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(k||(k={}));function me(e){return"storage/"+e}function we(){const e="An unknown error occurred, please check the error payload for server response.";return new T(k.UNKNOWN,e)}function Ct(e){return new T(k.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function Ot(e){return new T(k.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function St(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new T(k.UNAUTHENTICATED,e)}function Dt(){return new T(k.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Lt(e){return new T(k.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function Pt(){return new T(k.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Mt(){return new T(k.CANCELED,"User canceled the upload/download.")}function Bt(e){return new T(k.INVALID_URL,"Invalid URL '"+e+"'.")}function $t(e){return new T(k.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function jt(){return new T(k.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Ke+"' property when initializing the app?")}function Ft(){return new T(k.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function qt(){return new T(k.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Ht(e){return new T(k.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ve(e){return new T(k.INVALID_ARGUMENT,e)}function Xe(){return new T(k.APP_DELETED,"The Firebase app was deleted.")}function Vt(e){return new T(k.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ie(e,t){return new T(k.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function oe(e){throw new T(k.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class L{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let s;try{s=L.makeFromUrl(t,n)}catch{return new L(t,"")}if(s.path==="")return s;throw $t(t)}static makeFromUrl(t,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function o(A){A.path.charAt(A.path.length-1)==="/"&&(A.path_=A.path_.slice(0,-1))}const i="(/(.*))?$",l=new RegExp("^gs://"+r+i,"i"),u={bucket:1,path:3};function h(A){A.path_=decodeURIComponent(A.path)}const p="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),_="(/([^?#]*).*)?$",U=new RegExp(`^https?://${m}/${p}/b/${r}/o${_}`,"i"),v={bucket:1,path:3},P=n===We?"(?:storage.googleapis.com|storage.cloud.google.com)":n,f="([^?#]*)",E=new RegExp(`^https?://${P}/${r}/${f}`,"i"),N=[{regex:l,indices:u,postModify:o},{regex:U,indices:v,postModify:h},{regex:E,indices:{bucket:1,path:2},postModify:h}];for(let A=0;A<N.length;A++){const B=N[A],V=B.regex.exec(t);if(V){const X=V[B.indices.bucket];let $=V[B.indices.path];$||($=""),s=new L(X,$),B.postModify(s);break}}if(s==null)throw Bt(t);return s}}class zt{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function Wt(e,t,n){let s=1,r=null,o=null,i=!1,l=0;function u(){return l===2}let h=!1;function p(...f){h||(h=!0,t.apply(null,f))}function m(f){r=setTimeout(()=>{r=null,e(U,u())},f)}function _(){o&&clearTimeout(o)}function U(f,...E){if(h){_();return}if(f){_(),p.call(null,f,...E);return}if(u()||i){_(),p.call(null,f,...E);return}s<64&&(s*=2);let N;l===1?(l=2,N=0):N=(s+Math.random())*1e3,m(N)}let v=!1;function P(f){v||(v=!0,_(),!h&&(r!==null?(f||(l=2),clearTimeout(r),m(0)):f||(l=1)))}return m(0),o=setTimeout(()=>{i=!0,P(!0)},n),P}function Kt(e){e(!1)}/**
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
 */function Xt(e){return e!==void 0}function Gt(e){return typeof e=="object"&&!Array.isArray(e)}function xe(e){return typeof e=="string"||e instanceof String}function Pe(e){return Re()&&e instanceof Blob}function Re(){return typeof Blob<"u"}function Me(e,t,n,s){if(s<t)throw ve(`Invalid value for '${e}'. Expected ${t} or greater.`);if(s>n)throw ve(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
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
 */function fe(e,t,n){let s=t;return n==null&&(s=`https://${t}`),`${n}://${s}/v0${e}`}function Ge(e){const t=encodeURIComponent;let n="?";for(const s in e)if(e.hasOwnProperty(s)){const r=t(s)+"="+t(e[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
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
 */var ee;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(ee||(ee={}));/**
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
 */function Yt(e,t){const n=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,o=t.indexOf(e)!==-1;return n||r||o}/**
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
 */class Jt{constructor(t,n,s,r,o,i,l,u,h,p,m,_=!0){this.url_=t,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=i,this.callback_=l,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=p,this.connectionFactory_=m,this.retry=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((U,v)=>{this.resolve_=U,this.reject_=v,this.start_()})}start_(){const t=(s,r)=>{if(r){s(!1,new de(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const i=l=>{const u=l.loaded,h=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&o.addUploadProgressListener(i),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(i),this.pendingConnection_=null;const l=o.getErrorCode()===ee.NO_ERROR,u=o.getStatus();if(!l||Yt(u,this.additionalRetryCodes_)&&this.retry){const p=o.getErrorCode()===ee.ABORT;s(!1,new de(!1,null,p));return}const h=this.successCodes_.indexOf(u)!==-1;s(!0,new de(h,o))})},n=(s,r)=>{const o=this.resolve_,i=this.reject_,l=r.connection;if(r.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());Xt(u)?o(u):o()}catch(u){i(u)}else if(l!==null){const u=we();u.serverResponse=l.getErrorText(),this.errorCallback_?i(this.errorCallback_(l,u)):i(u)}else if(r.canceled){const u=this.appDelete_?Xe():Mt();i(u)}else{const u=Pt();i(u)}};this.canceled_?n(!1,new de(!1,null,!0)):this.backoffId_=Wt(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&Kt(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class de{constructor(t,n,s){this.wasSuccessCode=t,this.connection=n,this.canceled=!!s}}function Zt(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function Qt(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function en(e,t){t&&(e["X-Firebase-GMPID"]=t)}function tn(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function nn(e,t,n,s,r,o,i=!0){const l=Ge(e.urlParams),u=e.url+l,h=Object.assign({},e.headers);return en(h,t),Zt(h,n),Qt(h,o),tn(h,s),new Jt(u,e.method,h,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r,i)}/**
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
 */function sn(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function rn(...e){const t=sn();if(t!==void 0){const n=new t;for(let s=0;s<e.length;s++)n.append(e[s]);return n.getBlob()}else{if(Re())return new Blob(e);throw new T(k.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function on(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
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
 */const K={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class _e{constructor(t,n){this.data=t,this.contentType=n||null}}function ln(e,t){switch(e){case K.RAW:return new _e(Ye(t));case K.BASE64:case K.BASE64URL:return new _e(Je(e,t));case K.DATA_URL:return new _e(cn(t),dn(t))}throw we()}function Ye(e){const t=[];for(let n=0;n<e.length;n++){let s=e.charCodeAt(n);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const o=s,i=e.charCodeAt(++n);s=65536|(o&1023)<<10|i&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function un(e){let t;try{t=decodeURIComponent(e)}catch{throw ie(K.DATA_URL,"Malformed data URL.")}return Ye(t)}function Je(e,t){switch(e){case K.BASE64:{const r=t.indexOf("-")!==-1,o=t.indexOf("_")!==-1;if(r||o)throw ie(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case K.BASE64URL:{const r=t.indexOf("+")!==-1,o=t.indexOf("/")!==-1;if(r||o)throw ie(e,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=an(t)}catch(r){throw r.message.includes("polyfill")?r:ie(e,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class Ze{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw ie(K.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=hn(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function cn(e){const t=new Ze(e);return t.base64?Je(K.BASE64,t.rest):un(t.rest)}function dn(e){return new Ze(e).contentType}function hn(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class J{constructor(t,n){let s=0,r="";Pe(t)?(this.data_=t,s=t.size,r=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,n){if(Pe(this.data_)){const s=this.data_,r=on(s,t,n);return r===null?null:new J(r)}else{const s=new Uint8Array(this.data_.buffer,t,n-t);return new J(s,!0)}}static getBlob(...t){if(Re()){const n=t.map(s=>s instanceof J?s.data_:s);return new J(rn.apply(null,n))}else{const n=t.map(i=>xe(i)?ln(K.RAW,i).data:i.data_);let s=0;n.forEach(i=>{s+=i.byteLength});const r=new Uint8Array(s);let o=0;return n.forEach(i=>{for(let l=0;l<i.length;l++)r[o++]=i[l]}),new J(r,!0)}}uploadData(){return this.data_}}/**
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
 */function pn(e,t){return t}class S{constructor(t,n,s,r){this.server=t,this.local=n||t,this.writable=!!s,this.xform=r||pn}}let he=null;function mn(e){return!xe(e)||e.length<2?e:et(e)}function tt(){if(he)return he;const e=[];e.push(new S("bucket")),e.push(new S("generation")),e.push(new S("metageneration")),e.push(new S("name","fullPath",!0));function t(o,i){return mn(i)}const n=new S("name");n.xform=t,e.push(n);function s(o,i){return i!==void 0?Number(i):i}const r=new S("size");return r.xform=s,e.push(r),e.push(new S("timeCreated")),e.push(new S("updated")),e.push(new S("md5Hash",null,!0)),e.push(new S("cacheControl",null,!0)),e.push(new S("contentDisposition",null,!0)),e.push(new S("contentEncoding",null,!0)),e.push(new S("contentLanguage",null,!0)),e.push(new S("contentType",null,!0)),e.push(new S("metadata","customMetadata",!0)),he=e,he}function _n(e,t){function n(){const s=e.bucket,r=e.fullPath,o=new L(s,r);return t._makeStorageReference(o)}Object.defineProperty(e,"ref",{get:n})}function bn(e,t,n){const s={};s.type="file";const r=n.length;for(let o=0;o<r;o++){const i=n[o];s[i.local]=i.xform(s,t[i.server])}return _n(s,e),s}function nt(e,t,n){const s=Qe(t);return s===null?null:bn(e,s,n)}function yn(e,t,n,s){const r=Qe(t);if(r===null||!xe(r.downloadTokens))return null;const o=r.downloadTokens;if(o.length===0)return null;const i=encodeURIComponent;return o.split(",").map(h=>{const p=e.bucket,m=e.fullPath,_="/b/"+i(p)+"/o/"+i(m),U=fe(_,n,s),v=Ge({alt:"media",token:h});return U+v})[0]}function vn(e,t){const n={},s=t.length;for(let r=0;r<s;r++){const o=t[r];o.writable&&(n[o.server]=e[o.local])}return JSON.stringify(n)}class ke{constructor(t,n,s,r){this.url=t,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function st(e){if(!e)throw we()}function wn(e,t){function n(s,r){const o=nt(e,r,t);return st(o!==null),o}return n}function xn(e,t){function n(s,r){const o=nt(e,r,t);return st(o!==null),yn(o,r,e.host,e._protocol)}return n}function rt(e){function t(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=Dt():r=St():n.getStatus()===402?r=Ot(e.bucket):n.getStatus()===403?r=Lt(e.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return t}function ot(e){const t=rt(e);function n(s,r){let o=t(s,r);return s.getStatus()===404&&(o=Ct(e.path)),o.serverResponse=r.serverResponse,o}return n}function Rn(e,t,n){const s=t.fullServerUrl(),r=fe(s,e.host,e._protocol),o="GET",i=e.maxOperationRetryTime,l=new ke(r,o,xn(e,n),i);return l.errorHandler=ot(t),l}function kn(e,t){const n=t.fullServerUrl(),s=fe(n,e.host,e._protocol),r="DELETE",o=e.maxOperationRetryTime;function i(u,h){}const l=new ke(s,r,i,o);return l.successCodes=[200,204],l.errorHandler=ot(t),l}function Tn(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function In(e,t,n){const s=Object.assign({},n);return s.fullPath=e.path,s.size=t.size(),s.contentType||(s.contentType=Tn(null,t)),s}function Un(e,t,n,s,r){const o=t.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};function l(){let N="";for(let A=0;A<2;A++)N=N+Math.random().toString().slice(2);return N}const u=l();i["Content-Type"]="multipart/related; boundary="+u;const h=In(t,s,r),p=vn(h,n),m="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+p+`\r
--`+u+`\r
Content-Type: `+h.contentType+`\r
\r
`,_=`\r
--`+u+"--",U=J.getBlob(m,s,_);if(U===null)throw Ft();const v={name:h.fullPath},P=fe(o,e.host,e._protocol),f="POST",E=e.maxUploadRetryTime,M=new ke(P,f,wn(e,n),E);return M.urlParams=v,M.headers=i,M.body=U.uploadData(),M.errorHandler=rt(t),M}class En{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ee.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ee.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ee.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,s,r){if(this.sent_)throw oe("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),r!==void 0)for(const o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw oe("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw oe("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw oe("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw oe("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class An extends En{initXhr(){this.xhr_.responseType="text"}}function Te(){return new An}/**
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
 */class te{constructor(t,n){this._service=t,n instanceof L?this._location=n:this._location=L.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new te(t,n)}get root(){const t=new L(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return et(this._location.path)}get storage(){return this._service}get parent(){const t=fn(this._location.path);if(t===null)return null;const n=new L(this._location.bucket,t);return new te(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw Vt(t)}}function Nn(e,t,n){e._throwIfRoot("uploadBytes");const s=Un(e.storage,e._location,tt(),new J(t,!0),n);return e.storage.makeRequestWithTokens(s,Te).then(r=>({metadata:r,ref:e}))}function Cn(e){e._throwIfRoot("getDownloadURL");const t=Rn(e.storage,e._location,tt());return e.storage.makeRequestWithTokens(t,Te).then(n=>{if(n===null)throw qt();return n})}function On(e){e._throwIfRoot("deleteObject");const t=kn(e.storage,e._location);return e.storage.makeRequestWithTokens(t,Te)}function Sn(e,t){const n=gn(e._location.path,t),s=new L(e._location.bucket,n);return new te(e.storage,s)}/**
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
 */function Dn(e){return/^[A-Za-z]+:\/\//.test(e)}function Ln(e,t){return new te(e,t)}function it(e,t){if(e instanceof Ie){const n=e;if(n._bucket==null)throw jt();const s=new te(n,n._bucket);return t!=null?it(s,t):s}else return t!==void 0?Sn(e,t):e}function Pn(e,t){if(t&&Dn(t)){if(e instanceof Ie)return Ln(e,t);throw ve("To use ref(service, url), the first argument must be a Storage instance.")}else return it(e,t)}function Be(e,t){const n=t==null?void 0:t[Ke];return n==null?null:L.makeFromBucketSpec(n,e)}function Mn(e,t,n,s={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:r}=s;r&&(e._overrideAuthToken=typeof r=="string"?r:mt(r,e.app.options.projectId))}class Ie{constructor(t,n,s,r,o){this.app=t,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=o,this._bucket=null,this._host=We,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=At,this._maxUploadRetryTime=Nt,this._requests=new Set,r!=null?this._bucket=L.makeFromBucketSpec(r,this._host):this._bucket=Be(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=L.makeFromBucketSpec(this._url,t):this._bucket=Be(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Me("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Me("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new te(this,t)}_makeRequest(t,n,s,r,o=!0){if(this._deleted)return new zt(Xe());{const i=nn(t,this._appId,s,r,n,this._firebaseVersion,o);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(t,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,s,r).getPromise()}}const $e="@firebase/storage",je="0.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at="storage";function Fe(e,t,n){return e=ae(e),Nn(e,t,n)}function qe(e){return e=ae(e),Cn(e)}function er(e){return e=ae(e),On(e)}function He(e,t){return e=ae(e),Pn(e,t)}function Bn(e=gt(),t){e=ae(e);const s=ht(e,at).getImmediate({identifier:t}),r=ft("storage");return r&&$n(s,...r),s}function $n(e,t,n,s={}){Mn(e,t,n,s)}function jn(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return new Ie(n,s,r,t,pt)}function Fn(){ct(new dt(at,jn,"PUBLIC").setMultipleInstances(!0)),Ee($e,je,""),Ee($e,je,"esm2017")}Fn();function qn(){const e=Ve(),t=g(e.currentUser),{uid:n,photoURL:s,displayName:r}=t.value,o=n,i=g([]),u=JSON.parse(localStorage.getItem("users")).filter(h=>h.id!==o);return i.value=u,{storedUsers:i}}function tr(){const e=Ve(),t=g(e.currentUser),{firestore:n}=Rt(),s=Bn(),r=t.value.uid,o=t.value.photoURL,i=t.value.displayName;bt();const{storedUsers:l}=qn(),u=g(""),h=g([]),p=g(!1),m=g(null);let _=g({}),U=g(!1);const v=(c,y)=>[c,y].sort().join("_"),P=(c,y)=>{document.getElementById(c).showModal(),_.value=y,re(),console.log(h)},f=g(null),E=g(null),M=c=>{f.value=c},N=c=>{E.value=c},A=async()=>{if(!(u.value.trim()===""&&!f.value&&!E.value))try{const c=v(r,_.value.userId);U.value=!0,console.log(U.value);let y=null,I=null;if(f.value){const j=`chats/${c}/${Date.now()}_${f.value.name}`,z=He(s,j),W=await Fe(z,f.value);y=await qe(W.ref)}if(E.value){const j=`chats/${c}/${Date.now()}_${E.value.name}`,z=He(s,j),W=await Fe(z,E.value);I=await qe(W.ref)}await Tt(Oe(n,`chats/${c}`),{participants:{[r]:!0,[_.value.userId]:!0},lastMessage:u.value||(y||I?"File attachment":""),sender:r,timestamp:Se()},{merge:!0}),await It(De(n,`chats/${c}/messages`),{senderId:r,recipientId:_.value.userId,message:u.value,imageUrl:I,imageName:E.value?E.value.name:null,fileUrl:y,fileName:f.value?f.value.name:null,isSendMessageLoading:!1,timestamp:Se()}),u.value="",f.value=null,E.value=null}catch(c){console.error("Error sending message: ",c)}finally{U.value=!1}},B=g({}),V=g({}),X=g([]),$=g({}),G=g(0),b=Ae(()=>l.value.filter(c=>B.value[v(r,c.id)]).sort((c,y)=>{const I=v(r,c.id),j=v(r,y.id);return $.value[j]-$.value[I]})),w=()=>{X.value.forEach(y=>y()),X.value=[];const c=new Set;l.value.forEach(y=>{const I=v(r,y.id),j=Oe(n,"chats",I),z=Le(j,W=>{if(W.exists()){const F=W.data(),se=F.lastMessage||"",Z=F.sender||"",ge=F.timestamp||"";B.value[I]=se,V.value[I]=Z,$.value[I]=ge,se&&Z!==r?c.has(Z)||(c.add(Z),G.value=c.size):c.has(Z)&&(c.delete(Z),G.value=c.size)}else{B.value[I]="",V.value[I]="",$.value[I]="";const F=V.value[I];c.has(F)&&(c.delete(F),G.value=c.size)}},W=>{console.error("Error listening to chat updates:",W)});X.value.push(z)})};be(()=>{w()}),Ne(()=>{X.value.forEach(c=>c())}),ye(G,c=>{console.log(G.value)});const ne=Ae(()=>h.value.filter(c=>c.senderId===r&&c.recipientId===_.value.userId||c.senderId===_.value.userId&&c.recipientId===r)),d=()=>{ze(()=>{m.value&&(m.value.scrollTop=m.value.scrollHeight)})},re=()=>{p.value=!0;const c=v(r,_.value.userId),y=Ut(De(n,`chats/${c}/messages`),Et("timestamp","asc")),I=Le(y,j=>{h.value=j.docs.map(z=>({id:z.id,...z.data()})),p.value=!1,d()});Ne(()=>{I()})};return be(()=>{re()}),{Time:c=>{if(c){const y=new Date(c.seconds*1e3),I=new Date,j=y.getHours()%12||12,z=("0"+y.getMinutes()).slice(-2),W=y.getHours()<12?"am":"pm",F=`${j}:${z} ${W}`;if(y.toDateString()===I.toDateString())return F;const se=new Date(I);if(se.setDate(se.getDate()-1),y.toDateString()===se.toDateString())return`Yesterday ${F}`;const ge=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][y.getDay()],pe=new Date(I);if(pe.setDate(pe.getDate()-7),y>pe)return`${ge} ${F}`;const lt=y.toLocaleString("default",{month:"short"}),ut=y.getDate();return`${lt} ${ut} ${F}`}return""},getChatId:v,yourChat:P,sendMessage:A,userId:r,newMessage:u,messages:h,isLoading:p,isSendMessageLoading:U,filteredMessages:ne,selectedUser:_,timestamp:$,userPhoto:o,userName:i,filteredUsers:b,latestMessages:B,isSender:V,storedUsers:l,newMessageArray:G,file:f,imageFile:E,handleImageUpdate:N,handleFileUpdate:M}}const Hn={class:"w-10 rounded-full"},Vn=["src"],zn={class:""},Wn={class:"text-sm font-medium capitalize"},Kn={class:"flex gap-2 justify-start items-center"},Xn={key:0,class:"text-xs"},Gn={class:"text-[10px]"},nr={__name:"usersChatHeads",props:{yourChat:{type:Function,required:!0},formatTime:{type:Function,required:!0},user:{type:Object,required:!0},latestMessages:{type:Object,required:!0},getChatId:{type:Function,required:!0},userId:{type:[String,Number],required:!0},isSender:{type:Object,required:!0},timestamp:{type:Object,required:!0}},setup(e){return(t,n)=>(x(),R("div",{onClick:n[0]||(n[0]=s=>e.yourChat(e.user)),class:"flex justify-start items-center gap-2 cursor-pointer hover:bg-gray-500/20 transition p-1 rounded-md"},[a("div",{class:Y(["avatar",e.user.status==="online"?"online":"offline"])},[a("div",Hn,[a("img",{src:e.user.userPhotoURL},null,8,Vn)])],2),a("div",zn,[a("h1",Wn,D(e.user.userName),1),a("div",Kn,[e.latestMessages[e.getChatId(e.userId,e.user.id)]?(x(),R("span",{key:0,class:Y(["text-xs px-2 py-0.5 truncate max-w-52 bg-gray-500/20 rounded-full",e.isSender[e.getChatId(e.userId,e.user.id)]===e.userId?"":"text-blue-500"])},[e.isSender[e.getChatId(e.userId,e.user.id)]===e.userId?(x(),R("span",Xn," You: ")):O("",!0),Q(" "+D(e.latestMessages[e.getChatId(e.userId,e.user.id)]),1)],2)):O("",!0),a("span",Gn,D(e.formatTime(e.timestamp[e.getChatId(e.userId,e.user.id)])),1)])])]))}},Yn={},Jn={class:"my-3"},Zn=yt('<div class="flex flex-col gap-4 w-32 ml-2"><div class="flex gap-2 items-center"><div class="skeleton w-10 h-10 rounded-full shrink-0"></div><div class="flex flex-col gap-2"><div class="skeleton h-2 w-10"></div><div class="skeleton h-2 w-20"></div></div></div></div><div class="flex justify-end mr-5"><div class="flex flex-col gap-4 w-32"><div class="flex gap-2 items-center"><div class="flex flex-col gap-2"><div class="skeleton h-2 w-20"></div><div class="skeleton h-2 w-10"></div></div><div class="skeleton w-10 h-10 rounded-full shrink-0"></div></div></div></div>',2),Qn=[Zn];function es(e,t){return x(),R("div",Jn,Qn)}const ts=kt(Yn,[["render",es]]),ns={class:"modal-box relative p-2 no-scrollbar"},ss={class:"modal-action absolute z-10 -top-4 right-2"},rs={method:"dialog"},os={class:"btn btn-xs px-0.5 rounded-full"},is={class:"flex justify-start items-center gap-2"},as={class:"avatar"},ls={class:"w-10 rounded-full"},us=["src"],cs={class:"text-sm font-medium"},ds=a("hr",{class:"my-1 border border-gray-400/20"},null,-1),hs={key:0,class:"my-2 flex justify-center items-center text-sm"},fs={class:"py-1 px-4 bg-primary/10 rounded-full"},gs={class:"text-primary font-semibold"},ps={class:"chat-image avatar"},ms={key:0,class:"w-10 rounded-full"},_s=["src"],bs={class:"chat-header text-xs font-medium"},ys={class:"text-[10px] opacity-50"},vs={key:1,class:"w-52"},ws=["src"],xs={key:2,class:""},Rs=["src"],ks={key:3,class:"text-sm rounded-2xl backdrop-blur-2xl max-w-52 bg-gray-500/20 font-medium border border-gray-500/20 px-4 py-3"},Ts=["href"],Is={key:4,class:"max-w-52"},Us={class:"text-sm rounded-b-2xl backdrop-blur-2xl bg-gray-500/20 font-medium border border-gray-500/20 px-4 py-3"},Es=["href"],As={class:"chat-footer opacity-50 font-semibold text-xs"},Ns={key:1},Cs={class:"fixed bottom-0 z-50 inset-x-0"},Os={key:0,class:"flex justify-center items-center"},Ss=a("span",{class:"backdrop-blur-2xl flex justify-center items-center gap-2 bg-gray-400/20 border px-4 text-sm font-medium py-1 transition border-gray-500/20 rounded-full"},[a("span",{class:"loading loading-dots loading-xs"}),a("span",null,"Sending..")],-1),Ds=[Ss],Ls={key:0,class:"flex justify-center items-center gap-2"},Ps=a("span",{class:"backdrop-blur-2xl flex justify-center items-center gap-2 bg-green-400/10 border px-2 text-sm font-medium py-1 transition border-green-500/20 rounded-full"},[a("span",{class:"loading loading-ring text-green-500 loading-md"}),a("span",null,"Recording..")],-1),Ms={key:0,class:"backdrop-blur-2xl flex justify-start items-center gap-1 bg-red-400/10 border py-1 px-2 text-sm font-medium transition border-red-500/20 rounded-full"},Bs={key:0,class:"ml-1 flex justify-start items-end gap-1 text-xs"},$s={key:0},js=["src"],Fs={class:"flex justify-start items-center gap-1"},qs={class:"backdrop-blur-2xl flex bg-gray-400/20 justify-start items-center gap-2 px-2 py-1 border border-gray-500/20 rounded-xl"},Hs={class:"my-1 mx-1 flex justify-start items-center rounded-2xl gap-2 bg-gray-400/20 backdrop-blur-2xl shadow"},Vs={class:"w-full rounded-2xl border border-gray-500/20 shadow"},zs=["disabled","value"],Ws={class:"flex justify-between items-center m-3 h-5"},Ks={class:"flex justify-center items-center gap-2"},Xs=["disabled"],Gs=10,Ys=24,sr={__name:"ChatModal",props:{userId:{type:String,required:!0},messages:{type:Array,required:!0},selectedUser:{type:Object,required:!0},userPhoto:{type:String,required:!0},userName:{type:String,required:!0},isSendMessageLoading:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},formatTime:{type:Function,required:!0},sendMessage:{type:Function,required:!0},filteredMessages:{type:Array},modelValue:{type:String,required:!0},selectedFile:{type:Object,default:null},selectedImage:{type:Object,default:null}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,s=t,r=g(null),o=g(null),i=g(null),l=g(null),u=g(null),h=g(""),p=g(null),m=g(null),_=g(null),U=g(!1),v=g(!1),P=g("");let f;const E=()=>{if(!("webkitSpeechRecognition"in window)){P.value="Speech recognition is not supported in this browser.",console.error("Speech recognition is not supported in this browser.");return}f=new webkitSpeechRecognition,f.continuous=!0,f.interimResults=!1,f.lang="en-US",f.onstart=()=>{v.value=!0},f.onresult=b=>{const w=b.results[b.results.length-1][0].transcript;s("update:modelValue",w)},f.onerror=b=>{console.error("Speech recognition error:",b)},f.onend=()=>{v.value=!1},f.start()},M=()=>{f&&(f.stop(),v.value=!1)},N=()=>{const b=o.value;if(b){const w=b.scrollTop,ne=b.scrollHeight;b.style.height="auto";const d=b.scrollHeight,re=Gs*Ys;d>re?(b.style.height=`${re}px`,b.style.overflowY="auto"):b.style.height=`${d}px`;const Ue=w+(d-ne);b.scrollTop=Ue}},A=b=>{s("update:modelValue",b.target.value),N()};ye(()=>n.modelValue,b=>{if(b===""){const w=o.value;w&&(w.style.height="auto",w.style.overflowY="hidden")}else N()}),be(()=>{N(),r.value&&(r.value.scrollTop=r.value.scrollHeight)}),ye(()=>n.filteredMessages,()=>{ze(()=>{r.value&&(r.value.scrollTop=r.value.scrollHeight)})},{deep:!0},n.modelValue);const B=()=>{l.value&&(l.value.click(),U.value=!0)},V=()=>{U.value=!1,u.value&&u.value.click()},X=b=>{const w=b.target.files[0];w&&(p.value=w,s("update:selectedFile",p.value),h.value=p.value.name,console.log(p.value))},$=b=>{const w=b.target.files[0];w&&(m.value=w,s("update:selectedImage",m.value),_.value=URL.createObjectURL(w),h.value=m.value.name,console.log(m.value))},G=()=>{(p.value||m.value)&&(h.value="",_.value=null,m.value=null,p.value=null,s("update:selectedFile",null),s("update:selectedImage",null)),console.log(p.value,m.value)};return(b,w)=>{const ne=xt("motion-fade");return x(),R("div",ns,[a("div",ss,[a("form",rs,[a("button",os,[C(q(H),{icon:"carbon:close",class:"text-xl text-red-500"})])])]),a("div",is,[a("div",as,[a("div",ls,[a("img",{src:e.selectedUser.userPhotoURL},null,8,us)])]),a("div",null,[a("h1",cs,D(e.selectedUser.userName),1)])]),ds,a("div",{class:"h-[366px] mb-[86px] rounded-md overflow-y-scroll",ref_key:"messageContainer",ref:r},[e.filteredMessages.length===0&&!e.isLoading?(x(),R("div",hs,[a("span",fs,[Q("No conversation with "),a("span",gs,D(e.selectedUser.userName),1)])])):O("",!0),(x(!0),R(vt,null,wt(e.filteredMessages,d=>(x(),R("div",{key:d.id},[a("div",{class:Y(["chat",d.senderId===e.userId?"chat-end":"chat-start"])},[a("div",ps,[e.userId!==d.senderId?(x(),R("div",ms,[a("img",{src:e.selectedUser.userPhotoURL},null,8,_s)])):O("",!0)]),a("div",bs,[Q(D(d.senderId===e.userId?"You":e.selectedUser.userName)+" ",1),a("time",ys,D(e.formatTime(d.timestamp)),1)]),d.message&&d.imageUrl===null&&d.fileUrl===null?(x(),R("div",{key:0,class:Y(["rounded-2xl py-2 px-4 text-sm max-w-52",e.userId===d.senderId?"chat-bubble-primary":"chat-bubble"])},D(d.message),3)):O("",!0),d.message&&d.imageUrl?(x(),R("div",vs,[a("div",{class:Y(["rounded-t-2xl py-2 px-4 text-sm",e.userId===d.senderId?"chat-bubble-primary":"border border-gray-500/20"])},D(d.message),3),d.imageUrl?(x(),R("img",{key:0,src:d.imageUrl,loading:"lazy",alt:"",class:"h-auto w-52 object-cover border border-gray-500/20 rounded-b-2xl"},null,8,ws)):O("",!0)])):O("",!0),d.imageUrl&&d.message===""?(x(),R("div",xs,[a("img",{src:d.imageUrl,loading:"lazy",alt:"",class:"h-auto w-52 object-cover border border-gray-500/20 rounded-2xl"},null,8,Rs)])):O("",!0),d.fileUrl&&d.message===""?(x(),R("div",ks,[a("a",{href:d.fileUrl,download:"",class:"flex justify-start items-center gap-2"},[C(q(H),{icon:"simple-icons:googledocs",width:"16",height:"16"}),Q(D(d.fileName),1)],8,Ts)])):O("",!0),d.message&&d.fileUrl?(x(),R("div",Is,[a("div",{class:Y(["rounded-t-2xl py-2 px-4 text-sm",e.userId===d.senderId?"chat-bubble-primary":"border border-gray-500/20"])},D(d.message),3),a("div",Us,[a("a",{href:d.fileUrl,download:"",class:"flex justify-start items-center gap-2"},[C(q(H),{icon:"simple-icons:googledocs",width:"16",height:"16"}),Q(D(d.fileName),1)],8,Es)])])):O("",!0),a("div",As,D(d.isSendMessageLoading?"Sending... bugs, hehehe":"Delivered"),1)],2)]))),128)),e.isLoading?(x(),R("div",Ns,[C(ts)])):O("",!0)],512),a("div",Cs,[C(ue,null,{default:le(()=>[e.isSendMessageLoading?(x(),R("div",Os,Ds)):O("",!0)]),_:1}),C(ue,null,{default:le(()=>[v.value?(x(),R("div",Ls,[Ps,a("button",{onClick:w[0]||(w[0]=d=>M()),class:"backdrop-blur-2xl flex justify-center items-center gap-1 bg-red-400/10 border py-1 px-2 text-sm font-medium transition border-red-500/20 rounded-full"},[C(q(H),{icon:"mynaui:stop-solid",width:"20",height:"20",class:"text-red-500"}),Q(" Stop ")])])):O("",!0)]),_:1}),C(ue,null,{default:le(()=>[P.value?(x(),R("span",Ms,[C(q(H),{icon:"material-symbols:error",class:"text-red-500",width:"20",height:"20"}),Q(" "+D(P.value),1)])):O("",!0)]),_:1}),C(ue,null,{default:le(()=>[n.selectedFile||n.selectedImage!==null?(x(),R("div",Bs,[U.value?(x(),R("div",$s,[a("img",{src:_.value,loading:"lazy",alt:"",class:"size-14 rounded-xl backdrop-blur-2xl object-cover bg-gray-400/20 border border-gray-500/20"},null,8,js)])):O("",!0),a("div",Fs,[a("span",qs,[C(q(H),{icon:"fluent:attach-16-regular",width:"20",height:"20"}),a("span",null,D(h.value),1)]),a("button",{onClick:w[1]||(w[1]=d=>G()),class:"backdrop-blur-2xl bg-gray-400/20 border p-0.5 hover:text-red-500 transition border-gray-500/20 rounded-full"},[C(q(H),{icon:"iconamoon:close-light",width:"20",height:"20"})])])])):O("",!0)]),_:1}),a("form",{ref_key:"messageBoxContainer",ref:i},[a("div",Hs,[a("div",Vs,[a("textarea",{type:"text",disabled:e.isSendMessageLoading,cols:"1",rows:"1",required:"",autofocus:"",ref_key:"autoExpand",ref:o,value:e.modelValue,onInput:A,placeholder:"Enter a message",class:"w-full px-3 pt-3 placeholder:text-sm placeholder:text-gray-500 resize-none rounded-2xl no-scrollbar bg-transparent outline-none"},null,40,zs),a("div",Ws,[a("div",Ks,[a("button",{onClick:ce(B,["prevent"]),class:"transition p-1 rounded-full bg-gray-400/20 hover:text-success shadow"},[C(q(H),{icon:"tabler:photo",class:"text-xl"})]),a("input",{type:"file",ref_key:"imageInput",ref:l,accept:"image/*",onChange:$,class:"hidden"},null,544),a("input",{type:"file",ref_key:"fileInput",ref:u,accept:".pdf, .doc, .docx",onChange:X,class:"hidden"},null,544),a("button",{onClick:ce(V,["prevent"]),class:"transition p-1 rounded-full bg-gray-400/20 hover:text-secondary shadow"},[C(q(H),{icon:"tabler:file",class:"text-xl"})])]),a("div",{class:Y(["rounded-full p-1.5 flex shadow justify-center transition items-center",e.modelValue||p.value||m.value!==null?"bg-blue-500 hover:bg-blue-500/90 ":"bg-primary/10 hover:bg-primary/20"])},[!e.isSendMessageLoading&&e.modelValue||p.value||m.value?Ce((x(),R("button",{key:0,class:Y(e.isSendMessageLoading?"cursor-not-allowed":""),disabled:e.isSendMessageLoading,onClick:w[2]||(w[2]=ce((...d)=>e.sendMessage&&e.sendMessage(...d),["prevent"]))},[C(q(H),{icon:"bxs:send",class:"text-xl text-gray-200"})],10,Xs)),[[ne]]):Ce((x(),R("button",{key:1,onClick:ce(E,["prevent","stop"])},[C(q(H),{icon:"ic:round-mic",class:"text-xl text-primary"})])),[[ne]])],2)])])])],512)])])}}};export{tr as C,nr as _,qe as a,sr as b,er as d,Bn as g,He as r,Fe as u};
