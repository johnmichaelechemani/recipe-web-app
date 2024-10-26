import{_ as ut,C as dt,z as Ee,A as oe,B as ht,D as ft,E as gt,S as pt,G as mt,H as _t,g as Ve,e as f,q as Ae,I as ye,p as Ne,w as ve,J as bt,K as ze,o as p,c as _,a as l,k as U,n as K,t as S,f as Y,d as yt,b as N,u as B,F as vt,j as wt,l as xt,x as ie,T as ae,h as le,i as Ce,y as kt}from"./index-a4a_AF9g.js";import{u as Rt,_ as It,I as $}from"./_plugin-vue_export-helper-C1XF-57B.js";import{s as Tt,d as Oe,h as Se,a as Ut,c as De,b as Le,q as Et,o as At}from"./index.esm2017-gHe4UrWf.js";/**
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
 */const We="firebasestorage.googleapis.com",Ke="storageBucket",Nt=2*60*1e3,Ct=10*60*1e3;/**
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
${this.customData.serverResponse}`:this.message=this._baseMessage}}var R;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(R||(R={}));function _e(e){return"storage/"+e}function xe(){const e="An unknown error occurred, please check the error payload for server response.";return new I(R.UNKNOWN,e)}function Ot(e){return new I(R.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function St(e){return new I(R.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Dt(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new I(R.UNAUTHENTICATED,e)}function Lt(){return new I(R.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Pt(e){return new I(R.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function Mt(){return new I(R.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Bt(){return new I(R.CANCELED,"User canceled the upload/download.")}function $t(e){return new I(R.INVALID_URL,"Invalid URL '"+e+"'.")}function jt(e){return new I(R.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Ft(){return new I(R.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Ke+"' property when initializing the app?")}function qt(){return new I(R.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Ht(){return new I(R.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Vt(e){return new I(R.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function we(e){return new I(R.INVALID_ARGUMENT,e)}function Xe(){return new I(R.APP_DELETED,"The Firebase app was deleted.")}function zt(e){return new I(R.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function re(e,t){return new I(R.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function se(e){throw new I(R.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class D{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let s;try{s=D.makeFromUrl(t,n)}catch{return new D(t,"")}if(s.path==="")return s;throw jt(t)}static makeFromUrl(t,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(A){A.path.charAt(A.path.length-1)==="/"&&(A.path_=A.path_.slice(0,-1))}const a="(/(.*))?$",c=new RegExp("^gs://"+r+a,"i"),u={bucket:1,path:3};function d(A){A.path_=decodeURIComponent(A.path)}const m="v[A-Za-z0-9_]+",b=n.replace(/[.]/g,"\\."),y="(/([^?#]*).*)?$",E=new RegExp(`^https?://${b}/${m}/b/${r}/o${y}`,"i"),x={bucket:1,path:3},L=n===We?"(?:storage.googleapis.com|storage.cloud.google.com)":n,h="([^?#]*)",T=new RegExp(`^https?://${L}/${r}/${h}`,"i"),C=[{regex:c,indices:u,postModify:i},{regex:E,indices:x,postModify:d},{regex:T,indices:{bucket:1,path:2},postModify:d}];for(let A=0;A<C.length;A++){const j=C[A],M=j.regex.exec(t);if(M){const X=M[j.indices.bucket];let F=M[j.indices.path];F||(F=""),s=new D(X,F),j.postModify(s);break}}if(s==null)throw $t(t);return s}}class Wt{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function Kt(e,t,n){let s=1,r=null,i=null,a=!1,c=0;function u(){return c===2}let d=!1;function m(...h){d||(d=!0,t.apply(null,h))}function b(h){r=setTimeout(()=>{r=null,e(E,u())},h)}function y(){i&&clearTimeout(i)}function E(h,...T){if(d){y();return}if(h){y(),m.call(null,h,...T);return}if(u()||a){y(),m.call(null,h,...T);return}s<64&&(s*=2);let C;c===1?(c=2,C=0):C=(s+Math.random())*1e3,b(C)}let x=!1;function L(h){x||(x=!0,y(),!d&&(r!==null?(h||(c=2),clearTimeout(r),b(0)):h||(c=1)))}return b(0),i=setTimeout(()=>{a=!0,L(!0)},n),L}function Xt(e){e(!1)}/**
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
 */function Gt(e){return e!==void 0}function Yt(e){return typeof e=="object"&&!Array.isArray(e)}function ke(e){return typeof e=="string"||e instanceof String}function Pe(e){return Re()&&e instanceof Blob}function Re(){return typeof Blob<"u"}function Me(e,t,n,s){if(s<t)throw we(`Invalid value for '${e}'. Expected ${t} or greater.`);if(s>n)throw we(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
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
 */function Jt(e,t){const n=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,i=t.indexOf(e)!==-1;return n||r||i}/**
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
 */class Zt{constructor(t,n,s,r,i,a,c,u,d,m,b,y=!0){this.url_=t,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=c,this.errorCallback_=u,this.timeout_=d,this.progressCallback_=m,this.connectionFactory_=b,this.retry=y,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((E,x)=>{this.resolve_=E,this.reject_=x,this.start_()})}start_(){const t=(s,r)=>{if(r){s(!1,new ce(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=c=>{const u=c.loaded,d=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,d)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const c=i.getErrorCode()===Q.NO_ERROR,u=i.getStatus();if(!c||Jt(u,this.additionalRetryCodes_)&&this.retry){const m=i.getErrorCode()===Q.ABORT;s(!1,new ce(!1,null,m));return}const d=this.successCodes_.indexOf(u)!==-1;s(!0,new ce(d,i))})},n=(s,r)=>{const i=this.resolve_,a=this.reject_,c=r.connection;if(r.wasSuccessCode)try{const u=this.callback_(c,c.getResponse());Gt(u)?i(u):i()}catch(u){a(u)}else if(c!==null){const u=xe();u.serverResponse=c.getErrorText(),this.errorCallback_?a(this.errorCallback_(c,u)):a(u)}else if(r.canceled){const u=this.appDelete_?Xe():Bt();a(u)}else{const u=Mt();a(u)}};this.canceled_?n(!1,new ce(!1,null,!0)):this.backoffId_=Kt(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&Xt(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ce{constructor(t,n,s){this.wasSuccessCode=t,this.connection=n,this.canceled=!!s}}function Qt(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function en(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function tn(e,t){t&&(e["X-Firebase-GMPID"]=t)}function nn(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function sn(e,t,n,s,r,i,a=!0){const c=Ge(e.urlParams),u=e.url+c,d=Object.assign({},e.headers);return tn(d,t),Qt(d,n),en(d,i),nn(d,s),new Zt(u,e.method,d,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r,a)}/**
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
 */function rn(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function on(...e){const t=rn();if(t!==void 0){const n=new t;for(let s=0;s<e.length;s++)n.append(e[s]);return n.getBlob()}else{if(Re())return new Blob(e);throw new I(R.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function an(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
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
 */function ln(e){if(typeof atob>"u")throw Vt("base-64");return atob(e)}/**
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
 */const W={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class be{constructor(t,n){this.data=t,this.contentType=n||null}}function cn(e,t){switch(e){case W.RAW:return new be(Ye(t));case W.BASE64:case W.BASE64URL:return new be(Je(e,t));case W.DATA_URL:return new be(dn(t),hn(t))}throw xe()}function Ye(e){const t=[];for(let n=0;n<e.length;n++){let s=e.charCodeAt(n);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const i=s,a=e.charCodeAt(++n);s=65536|(i&1023)<<10|a&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function un(e){let t;try{t=decodeURIComponent(e)}catch{throw re(W.DATA_URL,"Malformed data URL.")}return Ye(t)}function Je(e,t){switch(e){case W.BASE64:{const r=t.indexOf("-")!==-1,i=t.indexOf("_")!==-1;if(r||i)throw re(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case W.BASE64URL:{const r=t.indexOf("+")!==-1,i=t.indexOf("/")!==-1;if(r||i)throw re(e,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=ln(t)}catch(r){throw r.message.includes("polyfill")?r:re(e,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class Ze{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw re(W.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=fn(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function dn(e){const t=new Ze(e);return t.base64?Je(W.BASE64,t.rest):un(t.rest)}function hn(e){return new Ze(e).contentType}function fn(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class J{constructor(t,n){let s=0,r="";Pe(t)?(this.data_=t,s=t.size,r=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,n){if(Pe(this.data_)){const s=this.data_,r=an(s,t,n);return r===null?null:new J(r)}else{const s=new Uint8Array(this.data_.buffer,t,n-t);return new J(s,!0)}}static getBlob(...t){if(Re()){const n=t.map(s=>s instanceof J?s.data_:s);return new J(on.apply(null,n))}else{const n=t.map(a=>ke(a)?cn(W.RAW,a).data:a.data_);let s=0;n.forEach(a=>{s+=a.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(a=>{for(let c=0;c<a.length;c++)r[i++]=a[c]}),new J(r,!0)}}uploadData(){return this.data_}}/**
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
 */function Qe(e){let t;try{t=JSON.parse(e)}catch{return null}return Yt(t)?t:null}/**
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
 */function gn(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function pn(e,t){const n=t.split("/").filter(s=>s.length>0).join("/");return e.length===0?n:e+"/"+n}function et(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function mn(e,t){return t}class O{constructor(t,n,s,r){this.server=t,this.local=n||t,this.writable=!!s,this.xform=r||mn}}let ue=null;function _n(e){return!ke(e)||e.length<2?e:et(e)}function tt(){if(ue)return ue;const e=[];e.push(new O("bucket")),e.push(new O("generation")),e.push(new O("metageneration")),e.push(new O("name","fullPath",!0));function t(i,a){return _n(a)}const n=new O("name");n.xform=t,e.push(n);function s(i,a){return a!==void 0?Number(a):a}const r=new O("size");return r.xform=s,e.push(r),e.push(new O("timeCreated")),e.push(new O("updated")),e.push(new O("md5Hash",null,!0)),e.push(new O("cacheControl",null,!0)),e.push(new O("contentDisposition",null,!0)),e.push(new O("contentEncoding",null,!0)),e.push(new O("contentLanguage",null,!0)),e.push(new O("contentType",null,!0)),e.push(new O("metadata","customMetadata",!0)),ue=e,ue}function bn(e,t){function n(){const s=e.bucket,r=e.fullPath,i=new D(s,r);return t._makeStorageReference(i)}Object.defineProperty(e,"ref",{get:n})}function yn(e,t,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const a=n[i];s[a.local]=a.xform(s,t[a.server])}return bn(s,e),s}function nt(e,t,n){const s=Qe(t);return s===null?null:yn(e,s,n)}function vn(e,t,n,s){const r=Qe(t);if(r===null||!ke(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const a=encodeURIComponent;return i.split(",").map(d=>{const m=e.bucket,b=e.fullPath,y="/b/"+a(m)+"/o/"+a(b),E=de(y,n,s),x=Ge({alt:"media",token:d});return E+x})[0]}function wn(e,t){const n={},s=t.length;for(let r=0;r<s;r++){const i=t[r];i.writable&&(n[i.server]=e[i.local])}return JSON.stringify(n)}class Ie{constructor(t,n,s,r){this.url=t,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function st(e){if(!e)throw xe()}function xn(e,t){function n(s,r){const i=nt(e,r,t);return st(i!==null),i}return n}function kn(e,t){function n(s,r){const i=nt(e,r,t);return st(i!==null),vn(i,r,e.host,e._protocol)}return n}function rt(e){function t(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=Lt():r=Dt():n.getStatus()===402?r=St(e.bucket):n.getStatus()===403?r=Pt(e.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return t}function ot(e){const t=rt(e);function n(s,r){let i=t(s,r);return s.getStatus()===404&&(i=Ot(e.path)),i.serverResponse=r.serverResponse,i}return n}function Rn(e,t,n){const s=t.fullServerUrl(),r=de(s,e.host,e._protocol),i="GET",a=e.maxOperationRetryTime,c=new Ie(r,i,kn(e,n),a);return c.errorHandler=ot(t),c}function In(e,t){const n=t.fullServerUrl(),s=de(n,e.host,e._protocol),r="DELETE",i=e.maxOperationRetryTime;function a(u,d){}const c=new Ie(s,r,a,i);return c.successCodes=[200,204],c.errorHandler=ot(t),c}function Tn(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function Un(e,t,n){const s=Object.assign({},n);return s.fullPath=e.path,s.size=t.size(),s.contentType||(s.contentType=Tn(null,t)),s}function En(e,t,n,s,r){const i=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function c(){let C="";for(let A=0;A<2;A++)C=C+Math.random().toString().slice(2);return C}const u=c();a["Content-Type"]="multipart/related; boundary="+u;const d=Un(t,s,r),m=wn(d,n),b="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+m+`\r
--`+u+`\r
Content-Type: `+d.contentType+`\r
\r
`,y=`\r
--`+u+"--",E=J.getBlob(b,s,y);if(E===null)throw qt();const x={name:d.fullPath},L=de(i,e.host,e._protocol),h="POST",T=e.maxUploadRetryTime,P=new Ie(L,h,xn(e,n),T);return P.urlParams=x,P.headers=a,P.body=E.uploadData(),P.errorHandler=rt(t),P}class An{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Q.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Q.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Q.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,s,r){if(this.sent_)throw se("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw se("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw se("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw se("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw se("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class Nn extends An{initXhr(){this.xhr_.responseType="text"}}function Te(){return new Nn}/**
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
 */class ee{constructor(t,n){this._service=t,n instanceof D?this._location=n:this._location=D.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new ee(t,n)}get root(){const t=new D(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return et(this._location.path)}get storage(){return this._service}get parent(){const t=gn(this._location.path);if(t===null)return null;const n=new D(this._location.bucket,t);return new ee(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw zt(t)}}function Cn(e,t,n){e._throwIfRoot("uploadBytes");const s=En(e.storage,e._location,tt(),new J(t,!0),n);return e.storage.makeRequestWithTokens(s,Te).then(r=>({metadata:r,ref:e}))}function On(e){e._throwIfRoot("getDownloadURL");const t=Rn(e.storage,e._location,tt());return e.storage.makeRequestWithTokens(t,Te).then(n=>{if(n===null)throw Ht();return n})}function Sn(e){e._throwIfRoot("deleteObject");const t=In(e.storage,e._location);return e.storage.makeRequestWithTokens(t,Te)}function Dn(e,t){const n=pn(e._location.path,t),s=new D(e._location.bucket,n);return new ee(e.storage,s)}/**
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
 */function Ln(e){return/^[A-Za-z]+:\/\//.test(e)}function Pn(e,t){return new ee(e,t)}function it(e,t){if(e instanceof Ue){const n=e;if(n._bucket==null)throw Ft();const s=new ee(n,n._bucket);return t!=null?it(s,t):s}else return t!==void 0?Dn(e,t):e}function Mn(e,t){if(t&&Ln(t)){if(e instanceof Ue)return Pn(e,t);throw we("To use ref(service, url), the first argument must be a Storage instance.")}else return it(e,t)}function Be(e,t){const n=t==null?void 0:t[Ke];return n==null?null:D.makeFromBucketSpec(n,e)}function Bn(e,t,n,s={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:r}=s;r&&(e._overrideAuthToken=typeof r=="string"?r:mt(r,e.app.options.projectId))}class Ue{constructor(t,n,s,r,i){this.app=t,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=We,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Nt,this._maxUploadRetryTime=Ct,this._requests=new Set,r!=null?this._bucket=D.makeFromBucketSpec(r,this._host):this._bucket=Be(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=D.makeFromBucketSpec(this._url,t):this._bucket=Be(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Me("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Me("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new ee(this,t)}_makeRequest(t,n,s,r,i=!0){if(this._deleted)return new Wt(Xe());{const a=sn(t,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(t,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,s,r).getPromise()}}const $e="@firebase/storage",je="0.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at="storage";function Fe(e,t,n){return e=oe(e),Cn(e,t,n)}function qe(e){return e=oe(e),On(e)}function ir(e){return e=oe(e),Sn(e)}function He(e,t){return e=oe(e),Mn(e,t)}function $n(e=gt(),t){e=oe(e);const s=ht(e,at).getImmediate({identifier:t}),r=ft("storage");return r&&jn(s,...r),s}function jn(e,t,n,s={}){Bn(e,t,n,s)}function Fn(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return new Ue(n,s,r,t,pt)}function qn(){ut(new dt(at,Fn,"PUBLIC").setMultipleInstances(!0)),Ee($e,je,""),Ee($e,je,"esm2017")}qn();function Hn(){const e=Ve(),t=f(e.currentUser),{uid:n,photoURL:s,displayName:r}=t.value,i=n,a=f([]),u=JSON.parse(localStorage.getItem("users")).filter(d=>d.id!==i);return a.value=u,{storedUsers:a}}function ar(){const e=Ve(),t=f(e.currentUser),{firestore:n}=Rt(),s=$n(),r=t.value.uid,i=t.value.photoURL,a=t.value.displayName;bt();const{storedUsers:c}=Hn(),u=f(""),d=f([]),m=f(!1),b=f(null);let y=f({}),E=f(!1);const x=(o,g)=>[o,g].sort().join("_"),L=(o,g)=>{document.getElementById(o).showModal(),y.value=g,w(),console.log(d)},h=f(null),T=f(null),P=o=>{h.value=o},C=o=>{T.value=o},A=async()=>{if(!(u.value.trim()===""&&!h.value&&!T.value))try{const o=x(r,y.value.userId);E.value=!0,console.log(E.value);let g=null,k=null;if(h.value){const q=`chats/${o}/${Date.now()}_${h.value.name}`,V=He(s,q),z=await Fe(V,h.value);g=await qe(z.ref)}if(T.value){const q=`chats/${o}/${Date.now()}_${T.value.name}`,V=He(s,q),z=await Fe(V,T.value);k=await qe(z.ref)}await Tt(Oe(n,`chats/${o}`),{participants:{[r]:!0,[y.value.userId]:!0},lastMessage:u.value||(g||k?"File attachment":""),sender:r,timestamp:Se()},{merge:!0}),await Ut(De(n,`chats/${o}/messages`),{senderId:r,recipientId:y.value.userId,message:u.value,imageUrl:k,imageName:T.value?T.value.name:null,fileUrl:g,fileName:h.value?h.value.name:null,isSendMessageLoading:!1,timestamp:Se()}),u.value="",h.value=null,T.value=null}catch(o){console.error("Error sending message: ",o)}finally{E.value=!1}},j=f({}),M=f({}),X=f([]),F=f({}),G=f(0),he=Ae(()=>c.value.filter(o=>j.value[x(r,o.id)]).sort((o,g)=>{const k=x(r,o.id),q=x(r,g.id);return F.value[q]-F.value[k]})),fe=()=>{X.value.forEach(g=>g()),X.value=[];const o=new Set;c.value.forEach(g=>{const k=x(r,g.id),q=Oe(n,"chats",k),V=Le(q,z=>{if(z.exists()){const H=z.data(),te=H.lastMessage||"",Z=H.sender||"",pe=H.timestamp||"";j.value[k]=te,M.value[k]=Z,F.value[k]=pe,te&&Z!==r?o.has(Z)||(o.add(Z),G.value=o.size):o.has(Z)&&(o.delete(Z),G.value=o.size)}else{j.value[k]="",M.value[k]="",F.value[k]="";const H=M.value[k];o.has(H)&&(o.delete(H),G.value=o.size)}},z=>{console.error("Error listening to chat updates:",z)});X.value.push(V)})};ye(()=>{fe()}),Ne(()=>{X.value.forEach(o=>o())}),ve(G,o=>{console.log(G.value)});const ge=Ae(()=>d.value.filter(o=>o.senderId===r&&o.recipientId===y.value.userId||o.senderId===y.value.userId&&o.recipientId===r)),v=()=>{ze(()=>{b.value&&(b.value.scrollTop=b.value.scrollHeight)})},w=()=>{m.value=!0;const o=x(r,y.value.userId),g=Et(De(n,`chats/${o}/messages`),At("timestamp","asc")),k=Le(g,q=>{d.value=q.docs.map(V=>({id:V.id,...V.data()})),m.value=!1,v()});Ne(()=>{k()})};return ye(()=>{w()}),{Time:o=>{if(o){const g=new Date(o.seconds*1e3),k=new Date,q=g.getHours()%12||12,V=("0"+g.getMinutes()).slice(-2),z=g.getHours()<12?"am":"pm",H=`${q}:${V} ${z}`;if(g.toDateString()===k.toDateString())return H;const te=new Date(k);if(te.setDate(te.getDate()-1),g.toDateString()===te.toDateString())return`Yesterday ${H}`;const pe=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][g.getDay()],me=new Date(k);if(me.setDate(me.getDate()-7),g>me)return`${pe} ${H}`;const lt=g.toLocaleString("default",{month:"short"}),ct=g.getDate();return`${lt} ${ct} ${H}`}return""},getChatId:x,yourChat:L,sendMessage:A,userId:r,newMessage:u,messages:d,isLoading:m,isSendMessageLoading:E,filteredMessages:ge,selectedUser:y,timestamp:F,userPhoto:i,userName:a,filteredUsers:he,latestMessages:j,isSender:M,storedUsers:c,newMessageArray:G,file:h,imageFile:T,handleImageUpdate:C,handleFileUpdate:P}}const Vn={class:"w-10 rounded-full"},zn={key:0,class:"size-10 bg-gray-500/20 border border-gray-500/20 rounded-full"},Wn=["src"],Kn={class:""},Xn={class:"text-sm font-medium capitalize"},Gn={class:"flex gap-2 justify-start items-center"},Yn={key:0,class:"text-xs"},Jn={class:"text-[10px]"},lr={__name:"usersChatHeads",props:{yourChat:{type:Function,required:!0},formatTime:{type:Function,required:!0},user:{type:Object,required:!0},latestMessages:{type:Object,required:!0},getChatId:{type:Function,required:!0},userId:{type:[String,Number],required:!0},isSender:{type:Object,required:!0},timestamp:{type:Object,required:!0}},setup(e){const t=f(!0),n=()=>{console.log("loading is done!"),t.value=!1},s=()=>{t.value=!1};return(r,i)=>(p(),_("div",{onClick:i[0]||(i[0]=a=>e.yourChat(e.user)),class:"flex justify-start items-center gap-2 cursor-pointer hover:bg-gray-500/20 transition p-1 rounded-md"},[l("div",{class:K(["avatar",e.user.status==="online"?"online":"offline"])},[l("div",Vn,[t.value?(p(),_("div",zn)):U("",!0),l("img",{src:e.user.userPhotoURL,loading:"lazy",class:"bg-gray-500/20 border border-gray-500/20 rounded-full",onLoad:n,onError:s},null,40,Wn)])],2),l("div",Kn,[l("h1",Xn,S(e.user.userName),1),l("div",Gn,[e.latestMessages[e.getChatId(e.userId,e.user.id)]?(p(),_("span",{key:0,class:K(["text-xs px-2 py-0.5 truncate max-w-52 bg-gray-500/20 rounded-full",e.isSender[e.getChatId(e.userId,e.user.id)]===e.userId?"":"text-blue-500"])},[e.isSender[e.getChatId(e.userId,e.user.id)]===e.userId?(p(),_("span",Yn," You: ")):U("",!0),Y(" "+S(e.latestMessages[e.getChatId(e.userId,e.user.id)]),1)],2)):U("",!0),l("span",Jn,S(e.formatTime(e.timestamp[e.getChatId(e.userId,e.user.id)])),1)])])]))}},Zn={},Qn={class:"my-3"},es=yt('<div class="flex flex-col gap-4 w-32 ml-2"><div class="flex gap-2 items-center"><div class="skeleton w-10 h-10 rounded-full shrink-0"></div><div class="flex flex-col gap-2"><div class="skeleton h-2 w-10"></div><div class="skeleton h-2 w-20"></div></div></div></div><div class="flex justify-end mr-5"><div class="flex flex-col gap-4 w-32"><div class="flex gap-2 items-center"><div class="flex flex-col gap-2"><div class="skeleton h-2 w-20"></div><div class="skeleton h-2 w-10"></div></div><div class="skeleton w-10 h-10 rounded-full shrink-0"></div></div></div></div>',2),ts=[es];function ns(e,t){return p(),_("div",Qn,ts)}const ss=It(Zn,[["render",ns]]),rs={class:"modal-box relative p-2 no-scrollbar"},os={class:"modal-action absolute z-10 -top-4 right-2"},is={method:"dialog"},as={class:"btn btn-xs px-0.5 rounded-full"},ls={class:"flex justify-start items-center gap-2"},cs={class:"avatar"},us={class:"w-10 rounded-full"},ds=["src"],hs={class:"text-sm font-medium"},fs=l("hr",{class:"my-1 border border-gray-400/20"},null,-1),gs={key:0,class:"my-2 flex justify-center items-center text-sm"},ps={class:"py-1 px-4 bg-primary/10 rounded-full"},ms={class:"text-primary font-semibold"},_s={class:"chat-image avatar"},bs={key:0,class:"size-5 rounded-full"},ys=["src"],vs={class:"chat-header text-xs font-medium"},ws={class:"text-[10px] opacity-50"},xs={key:1,class:"w-52"},ks={class:""},Rs={key:0,class:"w-52 h-32 bg-gray-500/20 border border-gray-500/20 rounded-2xl"},Is=["src"],Ts={key:2,class:""},Us={key:0,class:"w-52 h-32 bg-gray-500/20 border border-gray-500/20 rounded-2xl"},Es=["src"],As={key:3,class:"text-sm rounded-2xl backdrop-blur-2xl max-w-52 bg-gray-500/20 font-medium border border-gray-500/20 px-4 py-3"},Ns=["href"],Cs={key:4,class:"max-w-52"},Os={class:"text-sm rounded-b-2xl backdrop-blur-2xl bg-gray-500/20 font-medium border border-gray-500/20 px-4 py-3"},Ss=["href"],Ds={class:"chat-footer opacity-50 font-semibold text-xs"},Ls={key:1},Ps={class:"fixed bottom-0 z-50 inset-x-0"},Ms={key:0,class:"flex justify-center items-center"},Bs=l("span",{class:"backdrop-blur-2xl flex justify-center items-center gap-2 bg-gray-400/20 border px-4 text-sm font-medium py-1 transition border-gray-500/20 rounded-full"},[l("span",{class:"loading loading-dots loading-xs"}),l("span",null,"Sending..")],-1),$s=[Bs],js={key:0,class:"flex justify-center items-center gap-2"},Fs=l("span",{class:"backdrop-blur-2xl flex justify-center items-center gap-2 bg-green-400/10 border px-2 text-sm font-medium py-1 transition border-green-500/20 rounded-full"},[l("span",{class:"loading loading-ring text-green-500 loading-md"}),l("span",null,"Recording..")],-1),qs={key:0,class:"backdrop-blur-2xl flex justify-start items-center gap-1 bg-red-400/10 border py-1 px-2 text-sm font-medium transition border-red-500/20 rounded-full"},Hs={key:0,class:"ml-1 flex justify-start items-end gap-1 text-xs"},Vs={key:0},zs=["src"],Ws={class:"flex justify-start items-center gap-1"},Ks={class:"backdrop-blur-2xl flex bg-gray-400/20 justify-start items-center gap-2 px-2 py-1 border border-gray-500/20 rounded-xl"},Xs={class:"truncate max-w-52"},Gs={class:"my-1 mx-1 flex justify-start items-center rounded-2xl gap-2 bg-gray-400/20 backdrop-blur-2xl shadow"},Ys={class:"w-full rounded-2xl border border-gray-500/20 shadow"},Js=["disabled","value"],Zs={class:"flex justify-between items-center m-3 h-5"},Qs={class:"flex justify-center items-center gap-2"},er=["disabled"],tr=10,nr=24,cr={__name:"ChatModal",props:{userId:{type:String,required:!0},messages:{type:Array,required:!0},selectedUser:{type:Object,required:!0},userPhoto:{type:String,required:!0},userName:{type:String,required:!0},isSendMessageLoading:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},formatTime:{type:Function,required:!0},sendMessage:{type:Function,required:!0},filteredMessages:{type:Array},modelValue:{type:String,required:!0},selectedFile:{type:Object,default:null},selectedImage:{type:Object,default:null}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,s=t,r=f(null),i=f(null),a=f(null),c=f(null),u=f(null),d=f(""),m=f(null),b=f(null),y=f(null),E=f(!1),x=f(!1),L=f("");let h;const T=f(!0),P=()=>{console.log("loading is done!"),T.value=!1},C=()=>{T.value=!1},A=()=>{if(!("webkitSpeechRecognition"in window)){L.value="Speech recognition is not supported in this browser.",console.error("Speech recognition is not supported in this browser.");return}h=new webkitSpeechRecognition,h.continuous=!0,h.interimResults=!1,h.lang="en-US",h.onstart=()=>{x.value=!0},h.onresult=v=>{const w=v.results[v.results.length-1][0].transcript;s("update:modelValue",w)},h.onerror=v=>{console.error("Speech recognition error:",v)},h.onend=()=>{x.value=!1},h.start()},j=()=>{h&&(h.stop(),x.value=!1)},M=()=>{const v=i.value;if(v){const w=v.scrollTop,ne=v.scrollHeight;v.style.height="auto";const o=v.scrollHeight,g=tr*nr;o>g?(v.style.height=`${g}px`,v.style.overflowY="auto"):v.style.height=`${o}px`;const k=w+(o-ne);v.scrollTop=k}},X=v=>{s("update:modelValue",v.target.value),M()};ve(()=>n.modelValue,v=>{if(v===""){const w=i.value;w&&(w.style.height="auto",w.style.overflowY="hidden")}else M()}),ye(()=>{M(),r.value&&(r.value.scrollTop=r.value.scrollHeight)}),ve(()=>n.filteredMessages,()=>{ze(()=>{r.value&&(r.value.scrollTop=r.value.scrollHeight)})},{deep:!0},n.modelValue);const F=()=>{c.value&&(c.value.click(),E.value=!0)},G=()=>{E.value=!1,u.value&&u.value.click()},he=v=>{const w=v.target.files[0];w&&(m.value=w,s("update:selectedFile",m.value),d.value=m.value.name,console.log(m.value))},fe=v=>{const w=v.target.files[0];w&&(b.value=w,s("update:selectedImage",b.value),y.value=URL.createObjectURL(w),d.value=b.value.name,console.log(b.value))},ge=()=>{(m.value||b.value)&&(d.value="",y.value=null,b.value=null,m.value=null,s("update:selectedFile",null),s("update:selectedImage",null)),console.log(m.value,b.value)};return(v,w)=>{const ne=kt("motion-fade");return p(),_("div",rs,[l("div",os,[l("form",is,[l("button",as,[N(B($),{icon:"carbon:close",class:"text-xl text-red-500"})])])]),l("div",ls,[l("div",cs,[l("div",us,[l("img",{src:e.selectedUser.userPhotoURL,loading:"lazy",class:"bg-gray-500/20 border border-gray-500/20 rounded-full"},null,8,ds)])]),l("div",null,[l("h1",hs,S(e.selectedUser.userName),1)])]),fs,l("div",{class:"h-[366px] mb-[86px] rounded-md overflow-y-scroll",ref_key:"messageContainer",ref:r},[e.filteredMessages.length===0&&!e.isLoading?(p(),_("div",gs,[l("span",ps,[Y("No conversation with "),l("span",ms,S(e.selectedUser.userName),1)])])):U("",!0),(p(!0),_(vt,null,wt(e.filteredMessages,o=>(p(),_("div",{key:o.id},[l("div",{class:K(["chat",o.senderId===e.userId?"chat-end":"chat-start"])},[l("div",_s,[e.userId!==o.senderId?(p(),_("div",bs,[l("img",{src:e.selectedUser.userPhotoURL},null,8,ys)])):U("",!0)]),l("div",vs,[Y(S(o.senderId===e.userId?"You":e.selectedUser.userName)+" ",1),l("time",ws,S(e.formatTime(o.timestamp)),1)]),o.message&&o.imageUrl===null&&o.fileUrl===null?(p(),_("div",{key:0,class:K(["rounded-2xl whitespace-pre-line py-2 px-4 text-sm max-w-52",e.userId===o.senderId?"chat-bubble-primary":"chat-bubble"])},S(o.message),3)):U("",!0),o.message&&o.imageUrl?(p(),_("div",xs,[l("div",{class:K(["rounded-t-2xl whitespace-pre-line py-2 px-4 text-sm",e.userId===o.senderId?"chat-bubble-primary":"border border-gray-500/20"])},S(o.message),3),l("div",ks,[T.value?(p(),_("div",Rs)):U("",!0),o.imageUrl?(p(),_("img",{key:1,src:o.imageUrl,loading:"lazy",alt:"",class:"h-auto w-52 object-cover border bg-gray-500/20 border-gray-500/20 rounded-b-2xl",onLoad:P,onError:C},null,40,Is)):U("",!0)])])):U("",!0),o.imageUrl&&o.message===""?(p(),_("div",Ts,[T.value?(p(),_("div",Us)):U("",!0),l("img",{src:o.imageUrl,loading:"lazy",alt:"",onLoad:P,onError:C,class:"h-auto w-52 object-cover bg-gray-500/20 border border-gray-500/20 rounded-2xl"},null,40,Es)])):U("",!0),o.fileUrl&&o.message===""?(p(),_("div",As,[l("a",{href:o.fileUrl,download:"",class:"flex justify-start items-center gap-2"},[N(B($),{icon:"simple-icons:googledocs",width:"16",height:"16"}),Y(S(o.fileName),1)],8,Ns)])):U("",!0),o.message&&o.fileUrl?(p(),_("div",Cs,[l("div",{class:K(["rounded-t-2xl whitespace-pre-line py-2 px-4 text-sm",e.userId===o.senderId?"chat-bubble-primary":"border border-gray-500/20"])},S(o.message),3),l("div",Os,[l("a",{href:o.fileUrl,download:"",class:"flex justify-start items-center gap-2"},[N(B($),{icon:"simple-icons:googledocs",width:"16",height:"16"}),Y(S(o.fileName),1)],8,Ss)])])):U("",!0),l("div",Ds,[Y(S(o.isSendMessageLoading?"Sending...":"")+" ",1),o.isSendMessageLoading?U("",!0):(p(),xt(B($),{key:0,class:K(e.userId!==o.senderId?"hidden":""),icon:"material-symbols-light:check-circle"},null,8,["class"]))])],2)]))),128)),e.isLoading?(p(),_("div",Ls,[N(ss)])):U("",!0)],512),l("div",Ps,[N(ae,null,{default:ie(()=>[e.isSendMessageLoading?(p(),_("div",Ms,$s)):U("",!0)]),_:1}),N(ae,null,{default:ie(()=>[x.value?(p(),_("div",js,[Fs,l("button",{onClick:w[0]||(w[0]=o=>j()),class:"backdrop-blur-2xl flex justify-center items-center gap-1 bg-red-400/10 border py-1 px-2 text-sm font-medium transition border-red-500/20 rounded-full"},[N(B($),{icon:"mynaui:stop-solid",width:"20",height:"20",class:"text-red-500"}),Y(" Stop ")])])):U("",!0)]),_:1}),N(ae,null,{default:ie(()=>[L.value?(p(),_("span",qs,[N(B($),{icon:"material-symbols:error",class:"text-red-500",width:"20",height:"20"}),Y(" "+S(L.value),1)])):U("",!0)]),_:1}),N(ae,null,{default:ie(()=>[n.selectedFile||n.selectedImage!==null?(p(),_("div",Hs,[E.value?(p(),_("div",Vs,[l("img",{src:y.value,loading:"lazy",alt:"",class:"size-14 rounded-xl backdrop-blur-2xl object-cover bg-gray-400/20 border border-gray-500/20"},null,8,zs)])):U("",!0),l("div",Ws,[l("span",Ks,[N(B($),{icon:"fluent:attach-16-regular",width:"20",height:"20"}),l("span",Xs,S(d.value),1)]),l("button",{onClick:w[1]||(w[1]=o=>ge()),class:"backdrop-blur-2xl bg-gray-400/20 border p-0.5 hover:text-red-500 transition border-gray-500/20 rounded-full"},[N(B($),{icon:"iconamoon:close-light",width:"20",height:"20"})])])])):U("",!0)]),_:1}),l("form",{ref_key:"messageBoxContainer",ref:a},[l("div",Gs,[l("div",Ys,[l("textarea",{type:"text",disabled:e.isSendMessageLoading,cols:"1",rows:"1",required:"",autofocus:"",ref_key:"autoExpand",ref:i,value:e.modelValue,onInput:X,placeholder:"Enter a message",class:"w-full px-3 pt-3 placeholder:text-sm placeholder:text-gray-500 resize-none rounded-2xl no-scrollbar bg-transparent outline-none"},null,40,Js),l("div",Zs,[l("div",Qs,[l("button",{onClick:le(F,["prevent"]),class:"transition p-1 rounded-full bg-gray-400/20 hover:text-success shadow"},[N(B($),{icon:"tabler:photo",class:"text-xl"})]),l("input",{type:"file",ref_key:"imageInput",ref:c,accept:"image/*",onChange:fe,class:"hidden"},null,544),l("input",{type:"file",ref_key:"fileInput",ref:u,accept:".pdf, .doc, .docx",onChange:he,class:"hidden"},null,544),l("button",{onClick:le(G,["prevent"]),class:"transition p-1 rounded-full bg-gray-400/20 hover:text-secondary shadow"},[N(B($),{icon:"tabler:file",class:"text-xl"})])]),l("div",{class:K(["rounded-full p-1.5 flex shadow justify-center transition items-center",e.modelValue||m.value||b.value!==null?"bg-blue-500 hover:bg-blue-500/90 ":"bg-primary/10 hover:bg-primary/20"])},[!e.isSendMessageLoading&&e.modelValue||m.value||b.value?Ce((p(),_("button",{key:0,class:K(e.isSendMessageLoading?"cursor-not-allowed":""),disabled:e.isSendMessageLoading,onClick:w[2]||(w[2]=le((...o)=>e.sendMessage&&e.sendMessage(...o),["prevent"]))},[N(B($),{icon:"bxs:send",class:"text-xl text-gray-200"})],10,er)),[[ne]]):Ce((p(),_("button",{key:1,onClick:le(A,["prevent","stop"])},[N(B($),{icon:"ic:round-mic",class:"text-xl text-primary"})])),[[ne]])],2)])])])],512)])])}}};export{ar as C,lr as _,qe as a,cr as b,ir as d,$n as g,He as r,Fe as u};
