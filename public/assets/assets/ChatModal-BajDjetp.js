import{_ as Et,C as Ct,z as je,A as pe,B as At,D as Lt,E as St,S as Dt,G as Ot,H as Nt,g as tt,e as d,q as Be,I as Ce,p as Fe,w as Ae,J as Pt,K as nt,o as m,c as p,a as o,k as T,n as Z,t as M,f as oe,d as $t,b as v,u as C,x as ne,l as Mt,T as se,F as jt,j as Bt,h as be,i as qe,y as Ft}from"./index-7m33UpnV.js";import{u as qt,_ as Ht,I as L}from"./_plugin-vue_export-helper-DFJ2YENE.js";import{s as zt,d as He,h as ze,a as Vt,c as Ve,b as We,q as Wt,o as Kt}from"./index.esm2017-C6wP14zN.js";/**
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
 */const st="firebasestorage.googleapis.com",rt="storageBucket",Xt=2*60*1e3,Gt=10*60*1e3;/**
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
 */class E extends Nt{constructor(t,n,s=0){super(Ue(t),`Firebase Storage: ${n} (${Ue(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,E.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Ue(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var U;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(U||(U={}));function Ue(e){return"storage/"+e}function Se(){const e="An unknown error occurred, please check the error payload for server response.";return new E(U.UNKNOWN,e)}function Yt(e){return new E(U.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function Jt(e){return new E(U.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Zt(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new E(U.UNAUTHENTICATED,e)}function Qt(){return new E(U.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function en(e){return new E(U.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function tn(){return new E(U.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function nn(){return new E(U.CANCELED,"User canceled the upload/download.")}function sn(e){return new E(U.INVALID_URL,"Invalid URL '"+e+"'.")}function rn(e){return new E(U.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function on(){return new E(U.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+rt+"' property when initializing the app?")}function an(){return new E(U.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function ln(){return new E(U.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function un(e){return new E(U.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Le(e){return new E(U.INVALID_ARGUMENT,e)}function ot(){return new E(U.APP_DELETED,"The Firebase app was deleted.")}function cn(e){return new E(U.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function me(e,t){return new E(U.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function ge(e){throw new E(U.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class X{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let s;try{s=X.makeFromUrl(t,n)}catch{return new X(t,"")}if(s.path==="")return s;throw rn(t)}static makeFromUrl(t,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const a="(/(.*))?$",l=new RegExp("^gs://"+r+a,"i"),u={bucket:1,path:3};function f(D){D.path_=decodeURIComponent(D.path)}const _="v[A-Za-z0-9_]+",R=n.replace(/[.]/g,"\\."),k="(/([^?#]*).*)?$",S=new RegExp(`^https?://${R}/${_}/b/${r}/o${k}`,"i"),w={bucket:1,path:3},Y=n===st?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",A=new RegExp(`^https?://${Y}/${r}/${b}`,"i"),N=[{regex:l,indices:u,postModify:i},{regex:S,indices:w,postModify:f},{regex:A,indices:{bucket:1,path:2},postModify:f}];for(let D=0;D<N.length;D++){const W=N[D],H=W.regex.exec(t);if(H){const y=H[W.indices.bucket];let P=H[W.indices.path];P||(P=""),s=new X(y,P),W.postModify(s);break}}if(s==null)throw sn(t);return s}}class dn{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function hn(e,t,n){let s=1,r=null,i=null,a=!1,l=0;function u(){return l===2}let f=!1;function _(...b){f||(f=!0,t.apply(null,b))}function R(b){r=setTimeout(()=>{r=null,e(S,u())},b)}function k(){i&&clearTimeout(i)}function S(b,...A){if(f){k();return}if(b){k(),_.call(null,b,...A);return}if(u()||a){k(),_.call(null,b,...A);return}s<64&&(s*=2);let N;l===1?(l=2,N=0):N=(s+Math.random())*1e3,R(N)}let w=!1;function Y(b){w||(w=!0,k(),!f&&(r!==null?(b||(l=2),clearTimeout(r),R(0)):b||(l=1)))}return R(0),i=setTimeout(()=>{a=!0,Y(!0)},n),Y}function fn(e){e(!1)}/**
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
 */function gn(e){return e!==void 0}function mn(e){return typeof e=="object"&&!Array.isArray(e)}function De(e){return typeof e=="string"||e instanceof String}function Ke(e){return Oe()&&e instanceof Blob}function Oe(){return typeof Blob<"u"}function Xe(e,t,n,s){if(s<t)throw Le(`Invalid value for '${e}'. Expected ${t} or greater.`);if(s>n)throw Le(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
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
 */function _e(e,t,n){let s=t;return n==null&&(s=`https://${t}`),`${n}://${s}/v0${e}`}function it(e){const t=encodeURIComponent;let n="?";for(const s in e)if(e.hasOwnProperty(s)){const r=t(s)+"="+t(e[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
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
 */var ae;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(ae||(ae={}));/**
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
 */function pn(e,t){const n=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,i=t.indexOf(e)!==-1;return n||r||i}/**
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
 */class vn{constructor(t,n,s,r,i,a,l,u,f,_,R,k=!0){this.url_=t,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=l,this.errorCallback_=u,this.timeout_=f,this.progressCallback_=_,this.connectionFactory_=R,this.retry=k,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((S,w)=>{this.resolve_=S,this.reject_=w,this.start_()})}start_(){const t=(s,r)=>{if(r){s(!1,new xe(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=l=>{const u=l.loaded,f=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,f)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const l=i.getErrorCode()===ae.NO_ERROR,u=i.getStatus();if(!l||pn(u,this.additionalRetryCodes_)&&this.retry){const _=i.getErrorCode()===ae.ABORT;s(!1,new xe(!1,null,_));return}const f=this.successCodes_.indexOf(u)!==-1;s(!0,new xe(f,i))})},n=(s,r)=>{const i=this.resolve_,a=this.reject_,l=r.connection;if(r.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());gn(u)?i(u):i()}catch(u){a(u)}else if(l!==null){const u=Se();u.serverResponse=l.getErrorText(),this.errorCallback_?a(this.errorCallback_(l,u)):a(u)}else if(r.canceled){const u=this.appDelete_?ot():nn();a(u)}else{const u=tn();a(u)}};this.canceled_?n(!1,new xe(!1,null,!0)):this.backoffId_=hn(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&fn(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class xe{constructor(t,n,s){this.wasSuccessCode=t,this.connection=n,this.canceled=!!s}}function yn(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function bn(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function xn(e,t){t&&(e["X-Firebase-GMPID"]=t)}function wn(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function _n(e,t,n,s,r,i,a=!0){const l=it(e.urlParams),u=e.url+l,f=Object.assign({},e.headers);return xn(f,t),yn(f,n),bn(f,i),wn(f,s),new vn(u,e.method,f,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r,a)}/**
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
 */function Rn(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function kn(...e){const t=Rn();if(t!==void 0){const n=new t;for(let s=0;s<e.length;s++)n.append(e[s]);return n.getBlob()}else{if(Oe())return new Blob(e);throw new E(U.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function In(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
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
 */function Tn(e){if(typeof atob>"u")throw un("base-64");return atob(e)}/**
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
 */const Q={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ee{constructor(t,n){this.data=t,this.contentType=n||null}}function Un(e,t){switch(e){case Q.RAW:return new Ee(at(t));case Q.BASE64:case Q.BASE64URL:return new Ee(lt(e,t));case Q.DATA_URL:return new Ee(Cn(t),An(t))}throw Se()}function at(e){const t=[];for(let n=0;n<e.length;n++){let s=e.charCodeAt(n);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const i=s,a=e.charCodeAt(++n);s=65536|(i&1023)<<10|a&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function En(e){let t;try{t=decodeURIComponent(e)}catch{throw me(Q.DATA_URL,"Malformed data URL.")}return at(t)}function lt(e,t){switch(e){case Q.BASE64:{const r=t.indexOf("-")!==-1,i=t.indexOf("_")!==-1;if(r||i)throw me(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case Q.BASE64URL:{const r=t.indexOf("+")!==-1,i=t.indexOf("/")!==-1;if(r||i)throw me(e,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Tn(t)}catch(r){throw r.message.includes("polyfill")?r:me(e,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class ut{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw me(Q.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=Ln(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function Cn(e){const t=new ut(e);return t.base64?lt(Q.BASE64,t.rest):En(t.rest)}function An(e){return new ut(e).contentType}function Ln(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class re{constructor(t,n){let s=0,r="";Ke(t)?(this.data_=t,s=t.size,r=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,n){if(Ke(this.data_)){const s=this.data_,r=In(s,t,n);return r===null?null:new re(r)}else{const s=new Uint8Array(this.data_.buffer,t,n-t);return new re(s,!0)}}static getBlob(...t){if(Oe()){const n=t.map(s=>s instanceof re?s.data_:s);return new re(kn.apply(null,n))}else{const n=t.map(a=>De(a)?Un(Q.RAW,a).data:a.data_);let s=0;n.forEach(a=>{s+=a.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(a=>{for(let l=0;l<a.length;l++)r[i++]=a[l]}),new re(r,!0)}}uploadData(){return this.data_}}/**
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
 */function ct(e){let t;try{t=JSON.parse(e)}catch{return null}return mn(t)?t:null}/**
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
 */function Sn(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function Dn(e,t){const n=t.split("/").filter(s=>s.length>0).join("/");return e.length===0?n:e+"/"+n}function dt(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function On(e,t){return t}class q{constructor(t,n,s,r){this.server=t,this.local=n||t,this.writable=!!s,this.xform=r||On}}let we=null;function Nn(e){return!De(e)||e.length<2?e:dt(e)}function ht(){if(we)return we;const e=[];e.push(new q("bucket")),e.push(new q("generation")),e.push(new q("metageneration")),e.push(new q("name","fullPath",!0));function t(i,a){return Nn(a)}const n=new q("name");n.xform=t,e.push(n);function s(i,a){return a!==void 0?Number(a):a}const r=new q("size");return r.xform=s,e.push(r),e.push(new q("timeCreated")),e.push(new q("updated")),e.push(new q("md5Hash",null,!0)),e.push(new q("cacheControl",null,!0)),e.push(new q("contentDisposition",null,!0)),e.push(new q("contentEncoding",null,!0)),e.push(new q("contentLanguage",null,!0)),e.push(new q("contentType",null,!0)),e.push(new q("metadata","customMetadata",!0)),we=e,we}function Pn(e,t){function n(){const s=e.bucket,r=e.fullPath,i=new X(s,r);return t._makeStorageReference(i)}Object.defineProperty(e,"ref",{get:n})}function $n(e,t,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const a=n[i];s[a.local]=a.xform(s,t[a.server])}return Pn(s,e),s}function ft(e,t,n){const s=ct(t);return s===null?null:$n(e,s,n)}function Mn(e,t,n,s){const r=ct(t);if(r===null||!De(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const a=encodeURIComponent;return i.split(",").map(f=>{const _=e.bucket,R=e.fullPath,k="/b/"+a(_)+"/o/"+a(R),S=_e(k,n,s),w=it({alt:"media",token:f});return S+w})[0]}function jn(e,t){const n={},s=t.length;for(let r=0;r<s;r++){const i=t[r];i.writable&&(n[i.server]=e[i.local])}return JSON.stringify(n)}class Ne{constructor(t,n,s,r){this.url=t,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function gt(e){if(!e)throw Se()}function Bn(e,t){function n(s,r){const i=ft(e,r,t);return gt(i!==null),i}return n}function Fn(e,t){function n(s,r){const i=ft(e,r,t);return gt(i!==null),Mn(i,r,e.host,e._protocol)}return n}function mt(e){function t(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=Qt():r=Zt():n.getStatus()===402?r=Jt(e.bucket):n.getStatus()===403?r=en(e.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return t}function pt(e){const t=mt(e);function n(s,r){let i=t(s,r);return s.getStatus()===404&&(i=Yt(e.path)),i.serverResponse=r.serverResponse,i}return n}function qn(e,t,n){const s=t.fullServerUrl(),r=_e(s,e.host,e._protocol),i="GET",a=e.maxOperationRetryTime,l=new Ne(r,i,Fn(e,n),a);return l.errorHandler=pt(t),l}function Hn(e,t){const n=t.fullServerUrl(),s=_e(n,e.host,e._protocol),r="DELETE",i=e.maxOperationRetryTime;function a(u,f){}const l=new Ne(s,r,a,i);return l.successCodes=[200,204],l.errorHandler=pt(t),l}function zn(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function Vn(e,t,n){const s=Object.assign({},n);return s.fullPath=e.path,s.size=t.size(),s.contentType||(s.contentType=zn(null,t)),s}function Wn(e,t,n,s,r){const i=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function l(){let N="";for(let D=0;D<2;D++)N=N+Math.random().toString().slice(2);return N}const u=l();a["Content-Type"]="multipart/related; boundary="+u;const f=Vn(t,s,r),_=jn(f,n),R="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+_+`\r
--`+u+`\r
Content-Type: `+f.contentType+`\r
\r
`,k=`\r
--`+u+"--",S=re.getBlob(R,s,k);if(S===null)throw an();const w={name:f.fullPath},Y=_e(i,e.host,e._protocol),b="POST",A=e.maxUploadRetryTime,O=new Ne(Y,b,Bn(e,n),A);return O.urlParams=w,O.headers=a,O.body=S.uploadData(),O.errorHandler=mt(t),O}class Kn{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ae.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ae.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ae.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,s,r){if(this.sent_)throw ge("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ge("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ge("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ge("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ge("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class Xn extends Kn{initXhr(){this.xhr_.responseType="text"}}function Pe(){return new Xn}/**
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
 */class le{constructor(t,n){this._service=t,n instanceof X?this._location=n:this._location=X.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new le(t,n)}get root(){const t=new X(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return dt(this._location.path)}get storage(){return this._service}get parent(){const t=Sn(this._location.path);if(t===null)return null;const n=new X(this._location.bucket,t);return new le(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw cn(t)}}function Gn(e,t,n){e._throwIfRoot("uploadBytes");const s=Wn(e.storage,e._location,ht(),new re(t,!0),n);return e.storage.makeRequestWithTokens(s,Pe).then(r=>({metadata:r,ref:e}))}function Yn(e){e._throwIfRoot("getDownloadURL");const t=qn(e.storage,e._location,ht());return e.storage.makeRequestWithTokens(t,Pe).then(n=>{if(n===null)throw ln();return n})}function Jn(e){e._throwIfRoot("deleteObject");const t=Hn(e.storage,e._location);return e.storage.makeRequestWithTokens(t,Pe)}function Zn(e,t){const n=Dn(e._location.path,t),s=new X(e._location.bucket,n);return new le(e.storage,s)}/**
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
 */function Qn(e){return/^[A-Za-z]+:\/\//.test(e)}function es(e,t){return new le(e,t)}function vt(e,t){if(e instanceof $e){const n=e;if(n._bucket==null)throw on();const s=new le(n,n._bucket);return t!=null?vt(s,t):s}else return t!==void 0?Zn(e,t):e}function ts(e,t){if(t&&Qn(t)){if(e instanceof $e)return es(e,t);throw Le("To use ref(service, url), the first argument must be a Storage instance.")}else return vt(e,t)}function Ge(e,t){const n=t==null?void 0:t[rt];return n==null?null:X.makeFromBucketSpec(n,e)}function ns(e,t,n,s={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:r}=s;r&&(e._overrideAuthToken=typeof r=="string"?r:Ot(r,e.app.options.projectId))}class $e{constructor(t,n,s,r,i){this.app=t,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=st,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Xt,this._maxUploadRetryTime=Gt,this._requests=new Set,r!=null?this._bucket=X.makeFromBucketSpec(r,this._host):this._bucket=Ge(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=X.makeFromBucketSpec(this._url,t):this._bucket=Ge(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Xe("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Xe("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new le(this,t)}_makeRequest(t,n,s,r,i=!0){if(this._deleted)return new dn(ot());{const a=_n(t,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(t,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,s,r).getPromise()}}const Ye="@firebase/storage",Je="0.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="storage";function Ze(e,t,n){return e=pe(e),Gn(e,t,n)}function Qe(e){return e=pe(e),Yn(e)}function Jr(e){return e=pe(e),Jn(e)}function et(e,t){return e=pe(e),ts(e,t)}function ss(e=St(),t){e=pe(e);const s=At(e,yt).getImmediate({identifier:t}),r=Lt("storage");return r&&rs(s,...r),s}function rs(e,t,n,s={}){ns(e,t,n,s)}function os(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return new $e(n,s,r,t,Dt)}function is(){Et(new Ct(yt,os,"PUBLIC").setMultipleInstances(!0)),je(Ye,Je,""),je(Ye,Je,"esm2017")}is();function as(){const e=tt(),t=d(e.currentUser),{uid:n,photoURL:s,displayName:r}=t.value,i=n,a=d([]),u=JSON.parse(localStorage.getItem("users")).filter(f=>f.id!==i);return a.value=u,{storedUsers:a}}function Zr(){const e=tt(),t=d(e.currentUser),{firestore:n}=qt(),s=ss(),r=t.value.uid,i=t.value.photoURL,a=t.value.displayName;Pt();const{storedUsers:l}=as(),u=d(""),f=d([]),_=d(!1),R=d(null);let k=d({}),S=d(!1);const w=(c,x)=>[c,x].sort().join("_"),Y=(c,x)=>{document.getElementById(c).showModal(),k.value=x,ve(),console.log(f)},b=d(null),A=d(null),O=c=>{b.value=c},N=c=>{A.value=c},D=async()=>{if(!(u.value.trim()===""&&!b.value&&!A.value))try{const c=w(r,k.value.userId);S.value=!0,console.log(S.value);let x=null,I=null;if(b.value){const z=`chats/${c}/${Date.now()}_${b.value.name}`,B=et(s,z),G=await Ze(B,b.value);x=await Qe(G.ref)}if(A.value){const z=`chats/${c}/${Date.now()}_${A.value.name}`,B=et(s,z),G=await Ze(B,A.value);I=await Qe(G.ref)}await zt(He(n,`chats/${c}`),{participants:{[r]:!0,[k.value.userId]:!0},lastMessage:u.value||(x||I?"File attachment":""),sender:r,timestamp:ze()},{merge:!0}),await Vt(Ve(n,`chats/${c}/messages`),{senderId:r,recipientId:k.value.userId,message:u.value,imageUrl:I,imageName:A.value?A.value.name:null,fileUrl:x,fileName:b.value?b.value.name:null,isSendMessageLoading:!1,timestamp:ze()}),u.value="",b.value=null,A.value=null}catch(c){console.error("Error sending message: ",c)}finally{S.value=!1}},W=d({}),H=d({}),y=d([]),P=d({}),K=d(0),ce=Be(()=>l.value.filter(c=>W.value[w(r,c.id)]).sort((c,x)=>{const I=w(r,c.id),z=w(r,x.id);return P.value[z]-P.value[I]})),j=()=>{y.value.forEach(x=>x()),y.value=[];const c=new Set;l.value.forEach(x=>{const I=w(r,x.id),z=He(n,"chats",I),B=We(z,G=>{if(G.exists()){const V=G.data(),ee=V.lastMessage||"",te=V.sender||"",fe=V.timestamp||"";W.value[I]=ee,H.value[I]=te,P.value[I]=fe,ee&&te!==r?c.has(te)||(c.add(te),K.value=c.size):c.has(te)&&(c.delete(te),K.value=c.size)}else{W.value[I]="",H.value[I]="",P.value[I]="";const V=H.value[I];c.has(V)&&(c.delete(V),K.value=c.size)}},G=>{console.error("Error listening to chat updates:",G)});y.value.push(B)})};Ce(()=>{j()}),Fe(()=>{y.value.forEach(c=>c())}),Ae(K,c=>{console.log(K.value)});const J=Be(()=>f.value.filter(c=>c.senderId===r&&c.recipientId===k.value.userId||c.senderId===k.value.userId&&c.recipientId===r)),de=()=>{nt(()=>{R.value&&(R.value.scrollTop=R.value.scrollHeight)})},ve=()=>{_.value=!0;const c=w(r,k.value.userId),x=Wt(Ve(n,`chats/${c}/messages`),Kt("timestamp","asc")),I=We(x,z=>{f.value=z.docs.map(B=>({id:B.id,...B.data()})),_.value=!1,de()});Fe(()=>{I()})};return Ce(()=>{ve()}),{Time:c=>{if(c){const x=new Date(c.seconds*1e3),I=new Date,z=x.getHours()%12||12,B=("0"+x.getMinutes()).slice(-2),G=x.getHours()<12?"am":"pm",V=`${z}:${B} ${G}`;if(x.toDateString()===I.toDateString())return V;const ee=new Date(I);if(ee.setDate(ee.getDate()-1),x.toDateString()===ee.toDateString())return`Yesterday ${V}`;const fe=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][x.getDay()],ie=new Date(I);if(ie.setDate(ie.getDate()-7),x>ie)return`${fe} ${V}`;const Re=x.toLocaleString("default",{month:"short"}),ke=x.getDate();return`${Re} ${ke} ${V}`}return""},getChatId:w,yourChat:Y,sendMessage:D,userId:r,newMessage:u,messages:f,isLoading:_,isSendMessageLoading:S,filteredMessages:J,selectedUser:k,timestamp:P,userPhoto:i,userName:a,filteredUsers:ce,latestMessages:W,isSender:H,storedUsers:l,newMessageArray:K,file:b,imageFile:A,handleImageUpdate:N,handleFileUpdate:O}}const ls={class:"w-10 rounded-full"},us={key:0,class:"size-10 bg-gray-500/20 border border-gray-500/20 rounded-full"},cs=["src"],ds={class:""},hs={class:"text-sm font-medium capitalize"},fs={class:"flex gap-2 justify-start items-center"},gs={key:0,class:"text-xs"},ms={class:"text-[10px]"},Qr={__name:"usersChatHeads",props:{yourChat:{type:Function,required:!0},formatTime:{type:Function,required:!0},user:{type:Object,required:!0},latestMessages:{type:Object,required:!0},getChatId:{type:Function,required:!0},userId:{type:[String,Number],required:!0},isSender:{type:Object,required:!0},timestamp:{type:Object,required:!0}},setup(e){const t=d(!0),n=()=>{console.log("loading is done!"),t.value=!1},s=()=>{t.value=!1};return(r,i)=>(m(),p("div",{onClick:i[0]||(i[0]=a=>e.yourChat(e.user)),class:"flex justify-start items-center gap-2 cursor-pointer hover:bg-gray-500/20 transition p-1 rounded-md"},[o("div",{class:Z(["avatar",e.user.status==="online"?"online":"offline"])},[o("div",ls,[t.value?(m(),p("div",us)):T("",!0),o("img",{src:e.user.userPhotoURL,loading:"lazy",class:"bg-gray-500/20 border border-gray-500/20 rounded-full",onLoad:n,onError:s},null,40,cs)])],2),o("div",ds,[o("h1",hs,M(e.user.userName),1),o("div",fs,[e.latestMessages[e.getChatId(e.userId,e.user.id)]?(m(),p("span",{key:0,class:Z(["text-xs px-2 py-0.5 truncate max-w-52 bg-gray-500/20 rounded-full",e.isSender[e.getChatId(e.userId,e.user.id)]===e.userId?"":"text-blue-500"])},[e.isSender[e.getChatId(e.userId,e.user.id)]===e.userId?(m(),p("span",gs," You: ")):T("",!0),oe(" "+M(e.latestMessages[e.getChatId(e.userId,e.user.id)]),1)],2)):T("",!0),o("span",ms,M(e.formatTime(e.timestamp[e.getChatId(e.userId,e.user.id)])),1)])])]))}},ps={},vs={class:"my-3"},ys=$t('<div class="flex flex-col gap-4 w-32 ml-2"><div class="flex gap-2 items-center"><div class="skeleton w-10 h-10 rounded-full shrink-0"></div><div class="flex flex-col gap-2"><div class="skeleton h-2 w-10"></div><div class="skeleton h-2 w-20"></div></div></div></div><div class="flex justify-end mr-5"><div class="flex flex-col gap-4 w-32"><div class="flex gap-2 items-center"><div class="flex flex-col gap-2"><div class="skeleton h-2 w-20"></div><div class="skeleton h-2 w-10"></div></div><div class="skeleton w-10 h-10 rounded-full shrink-0"></div></div></div></div>',2),bs=[ys];function xs(e,t){return m(),p("div",vs,bs)}const ws=Ht(ps,[["render",xs]]),_s={key:0,class:"fixed bottom-0 backdrop-blur-2xl py-5 z-50 inset-x-0"},Rs={class:"flex justify-center items-center mb-4 gap-1 mx-2"},ks={class:"backdrop-blur-2xl flex justify-start w-full items-center gap-2 bg-gray-400/20 border px-2 text-sm font-medium py-2 transition border-gray-500/20 rounded-l-xl"},Is={class:"flex justify-start w-full items-center"},Ts={class:"w-full border flex justify-center item-center p-1 border-gray-500/20 rounded-2xl"},Us=["value"],Es={class:"max-w-16 tabular-nums font-mono text-[10px]"},Cs={class:"px-2 flex justify-between items-center gap-1"},As={class:"flex justify-start items-center gap-1"},Ls={class:"bg-blue-500 cursor-not-allowed hover:bg-blue-600 transition text-gray-100 rounded-full px-4 py-2 flex justify-start items-center gap-2"},Ss=o("span",{class:"text-sm font-meduim"},"Send",-1),Ds={__name:"recordingModal",props:{startRecording:{type:Function,required:!0},deleteRecording:{type:Function,required:!0},pauseRecording:{type:Function,required:!0},playRecord:{type:Function,required:!0},stopRecording:{type:Function,required:!0},isShowRecordingModal:{type:Boolean,default:!1},isPause:{type:Boolean,default:!1},isRecording:{type:Boolean,default:!1},elapsedTime:{type:String,default:null},recordingProgress:{type:Number,default:0}},setup(e){return(t,n)=>e.isShowRecordingModal?(m(),p("div",_s,[o("div",Rs,[o("div",ks,[o("div",Is,[o("button",{onClick:n[0]||(n[0]=s=>e.isPause?e.playRecord():e.pauseRecording())},[v(C(L),{icon:e.isPause?"iconoir:play-solid":"ic:round-pause",width:"20",height:"20"},null,8,["icon"])]),o("div",Ts,[o("progress",{class:"progress progress-primary w-full mx-1",value:e.recordingProgress,max:"100"},null,8,Us)])]),o("div",Es,M(e.elapsedTime),1)]),o("button",{class:"px-2 bg-gray-400/20 border hover:text-green-500 transition border-gray-500/20 rounded-r-xl py-2",onClick:n[1]||(n[1]=s=>e.isRecording?e.stopRecording():e.startRecording())},[v(C(L),{icon:e.isRecording?"ic:round-stop":"fluent:mic-pulse-48-filled",width:"20",height:"20",class:Z(e.isRecording?"text-red-500":"")},null,8,["icon","class"])])]),o("div",Cs,[o("div",As,[o("button",{onClick:n[2]||(n[2]=s=>e.deleteRecording()),class:"backdrop-blur-2xl flex justify-center items-center gap-1 py-1 hover:bg-red-500/10 px-2 text-sm font-medium transition rounded-full"},[v(C(L),{icon:"mingcute:delete-fill",width:"20",height:"20",class:"text-red-500"})]),o("button",{onClick:n[3]||(n[3]=s=>e.startRecording()),class:"backdrop-blur-2xl flex justify-center items-center hover:bg-green-500/10 gap-1 py-1 px-2 text-sm font-medium transition rounded-full"},[v(C(L),{icon:"ion:reload",width:"20",height:"20",class:"text-green-500"})])]),o("div",null,[o("button",Ls,[Ss,v(C(L),{icon:"bxs:send",class:"text-xl text-gray-200"})])])])])):T("",!0)}},Os={class:"chat-image avatar"},Ns={key:0,class:"size-5 rounded-full"},Ps=["src"],$s={class:"chat-header text-xs font-medium"},Ms={class:"text-[10px] opacity-50"},js={key:1,class:"w-52"},Bs={class:""},Fs={key:0,class:"w-52 h-32 bg-gray-500/20 border border-gray-500/20 rounded-2xl"},qs=["src"],Hs={key:2,class:""},zs={key:0,class:"w-52 h-32 bg-gray-500/20 border border-gray-500/20 rounded-2xl"},Vs=["src"],Ws={key:3,class:"text-sm rounded-2xl backdrop-blur-2xl max-w-52 bg-gray-500/20 font-medium border border-gray-500/20 px-4 py-3"},Ks=["href"],Xs={key:4,class:"max-w-52"},Gs={class:"text-sm rounded-b-2xl backdrop-blur-2xl bg-gray-500/20 font-medium border border-gray-500/20 px-4 py-3"},Ys=["href"],Js={key:0,class:"chat-footer opacity-50 font-semibold text-xs"},Zs={__name:"messageLayout",props:{showInfo:{type:Function,required:!0},m:{type:Object,required:!0},userId:{type:String,required:!0},selectedUser:{type:Object,required:!0},isImageLoading:{type:Boolean,default:!1},showDetailsId:{type:Object,required:!0},formatTime:{type:Function,required:!0},onLoad:{type:Function,required:!0},onError:{type:Function,required:!0}},setup(e){return(t,n)=>(m(),p("div",{onClick:n[4]||(n[4]=s=>e.showInfo(e.m.id,e.m.message)),class:Z(["chat cursor-pointer",e.m.senderId===e.userId?"chat-end":"chat-start"])},[o("div",Os,[e.userId!==e.m.senderId?(m(),p("div",Ns,[o("img",{src:e.selectedUser.userPhotoURL},null,8,Ps)])):T("",!0)]),o("div",$s,[oe(M(e.m.senderId===e.userId?"You":e.selectedUser.userName)+" ",1),o("time",Ms,M(e.formatTime(e.m.timestamp)),1)]),e.m.message&&e.m.imageUrl===null&&e.m.fileUrl===null?(m(),p("div",{key:0,class:Z(["rounded-2xl whitespace-pre-line py-2 px-4 text-sm max-w-52",e.userId===e.m.senderId?"chat-bubble-primary":"chat-bubble"])},M(e.m.message),3)):T("",!0),e.m.message&&e.m.imageUrl?(m(),p("div",js,[o("div",{class:Z(["rounded-t-2xl whitespace-pre-line py-2 px-4 text-sm",e.userId===e.m.senderId?"chat-bubble-primary":"border border-gray-500/20"])},M(e.m.message),3),o("div",Bs,[e.isImageLoading?(m(),p("div",Fs)):T("",!0),e.m.imageUrl?(m(),p("img",{key:1,src:e.m.imageUrl,loading:"lazy",alt:"",class:"h-auto w-52 object-cover border bg-gray-500/20 border-gray-500/20 rounded-b-2xl",onLoad:n[0]||(n[0]=(...s)=>e.onLoad&&e.onLoad(...s)),onError:n[1]||(n[1]=(...s)=>e.onError&&e.onError(...s))},null,40,qs)):T("",!0)])])):T("",!0),e.m.imageUrl&&e.m.message===""?(m(),p("div",Hs,[e.isImageLoading?(m(),p("div",zs)):T("",!0),o("img",{src:e.m.imageUrl,loading:"lazy",alt:"",onLoad:n[2]||(n[2]=(...s)=>e.onLoad&&e.onLoad(...s)),onError:n[3]||(n[3]=(...s)=>e.onError&&e.onError(...s)),class:"h-auto w-52 object-cover bg-gray-500/20 border border-gray-500/20 rounded-2xl"},null,40,Vs)])):T("",!0),e.m.fileUrl&&e.m.message===""?(m(),p("div",Ws,[o("a",{href:e.m.fileUrl,download:"",class:"flex justify-start items-center gap-2"},[v(C(L),{icon:"simple-icons:googledocs",width:"16",height:"16"}),oe(M(e.m.fileName),1)],8,Ks)])):T("",!0),e.m.message&&e.m.fileUrl?(m(),p("div",Xs,[o("div",{class:Z(["rounded-t-2xl whitespace-pre-line py-2 px-4 text-sm",e.userId===e.m.senderId?"chat-bubble-primary":"border border-gray-500/20"])},M(e.m.message),3),o("div",Gs,[o("a",{href:e.m.fileUrl,download:"",class:"flex justify-start items-center gap-2"},[v(C(L),{icon:"simple-icons:googledocs",width:"16",height:"16"}),oe(M(e.m.fileName),1)],8,Ys)])])):T("",!0),v(se,null,{default:ne(()=>[e.showDetailsId.isClick&&e.showDetailsId.id===e.m.id?(m(),p("div",Js,[oe(M(e.m.isSendMessageLoading?"Sending...":"")+" ",1),e.m.isSendMessageLoading?T("",!0):(m(),Mt(C(L),{key:0,class:Z(e.userId!==e.m.senderId?"hidden":""),icon:"material-symbols-light:check-circle"},null,8,["class"]))])):T("",!0)]),_:1})],2))}},Qs={class:"modal-box overflow-hidden relative p-2 no-scrollbar"},er={class:"flex justify-between items-center gap-2"},tr={class:"flex justify-start items-center gap-2"},nr={class:"avatar"},sr={class:"w-10 rounded-full"},rr=["src"],or={class:"text-sm font-medium"},ir={method:"dialog",class:"flex justify-start items-center"},ar={class:"px-0.5"},lr=o("hr",{class:"my-1 border border-gray-400/20"},null,-1),ur={key:0,class:"my-2 flex justify-center items-center text-sm"},cr={class:"py-1 px-4 bg-primary/10 rounded-full"},dr={class:"text-primary font-semibold"},hr={key:1},fr={class:"fixed bottom-0 z-50 inset-x-0"},gr={key:0,class:"flex justify-center items-center"},mr=o("span",{class:"backdrop-blur-2xl flex justify-center items-center gap-4 bg-green-400/20 border px-4 text-sm font-medium py-1 transition border-green-500/20 text-green-500 rounded-full"},[o("p",{class:"text-xs"},"Copied!")],-1),pr=[mr],vr={key:0,class:"flex justify-center items-center"},yr={class:"backdrop-blur-2xl flex justify-center items-center gap-4 bg-gray-400/20 border px-8 text-sm font-medium py-2 transition border-gray-500/20 rounded-md"},br={class:"grid place-items-center cursor-pointer transition"},xr=o("p",{class:"text-xs"},"Are you sure to delete this message?",-1),wr={class:"flex justify-start items-center gap-4 mt-2"},_r=o("button",{class:"px-2 py-1 rounded-md border text-red-500 border-red-500/50"}," Delete ",-1),Rr={key:0,class:"fixed bottom-0 backdrop-blur-2xl py-5 z-50 inset-x-0"},kr={class:"flex justify-center items-center"},Ir={class:"backdrop-blur-2xl flex justify-center items-center gap-4 bg-gray-400/20 border px-8 text-sm font-medium py-2 transition border-gray-500/20 rounded-full"},Tr=o("p",{class:"text-xs"},"Copy",-1),Ur=o("p",{class:"text-xs"},"Delete",-1),Er={key:0,class:"flex justify-center mb-1 items-center"},Cr=o("span",{class:"backdrop-blur-2xl flex justify-center items-center gap-2 bg-gray-400/20 border px-4 text-sm font-medium py-1 transition border-gray-500/20 rounded-full"},[o("span",{class:"loading loading-dots loading-xs"}),o("span",null,"Sending..")],-1),Ar=[Cr],Lr={key:0,class:"flex mb-1 justify-center items-center gap-2"},Sr=o("span",{class:"backdrop-blur-2xl flex justify-center items-center gap-2 bg-green-400/10 border px-2 text-sm font-medium py-1 transition border-green-500/20 rounded-full"},[o("span",{class:"loading loading-ring text-green-500 loading-md"}),o("span",null,"Recording..")],-1),Dr={key:0,class:"backdrop-blur-2xl flex mb-1 justify-start items-center gap-1 bg-red-400/10 border py-1 px-2 text-sm font-medium transition border-red-500/20 rounded-full"},Or={key:0,class:"ml-1 flex justify-start mb-1 items-end gap-1 text-xs"},Nr={key:0},Pr=["src"],$r={class:"flex justify-start items-center gap-1"},Mr={class:"backdrop-blur-2xl flex bg-gray-400/20 justify-start items-center gap-2 px-2 py-1 border border-gray-500/20 rounded-xl"},jr={class:"truncate max-w-52"},Br={class:"flex justify-start items-center rounded-t-2xl gap-2 bg-gray-400/20 backdrop-blur-2xl shadow"},Fr={class:"w-full rounded-t-2xl border border-gray-500/20 shadow"},qr=["disabled","value"],Hr={class:"flex justify-between items-center m-3 h-5"},zr={class:"flex justify-center items-center gap-2"},Vr=["disabled"],Wr=10,Kr=24,eo={__name:"ChatModal",props:{userId:{type:String,required:!0},messages:{type:Array,required:!0},selectedUser:{type:Object,required:!0},userPhoto:{type:String,required:!0},userName:{type:String,required:!0},isSendMessageLoading:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},formatTime:{type:Function,required:!0},sendMessage:{type:Function,required:!0},filteredMessages:{type:Array},modelValue:{type:String,required:!0},selectedFile:{type:Object,default:null},selectedImage:{type:Object,default:null}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,s=t,r=d(null),i=d(null),a=d(null),l=d(null),u=d(null),f=d(""),_=d(null),R=d(null),k=d(null),S=d(!1),w=d(!1),Y=d(""),b=d(!0),A=d(""),O=d(!0),N=d(!1),D=d(6e4);let W=null,H=null,y=null,P=null;const K=d("0:00.0");let ce=null,j=null;const J=d(0),de=d(!1);let ve=d(0);const he=h=>{const g=Math.floor(h/1e3),ue=Math.floor(g/60).toString().padStart(1,"0"),$=(g%60).toString().padStart(2,"0"),ye=(h%1e3).toString().padStart(3,"0").slice(0,1);return`${ue}:${$}:${ye}`},c=()=>{if(w.value){const g=Date.now()-ce;K.value=he(g),J.value=g/D.value*100}},x=async()=>{console.log("recording start..."),c(),J.value=0,ve.value=0,clearInterval(j),O.value=!0;try{const h=await navigator.mediaDevices.getUserMedia({audio:!0});P=new MediaRecorder(h),P.ondataavailable=g=>{W=g.data,H=URL.createObjectURL(W),y=new Audio(H),y.addEventListener("timeupdate",I),y.addEventListener("ended",z)},P.start(),w.value=!0,ce=Date.now(),y&&y.pause(),j=setInterval(()=>{c(),J.value>=100&&B()},100)}catch(h){Y.value="Recording is not supported or failed.",de.value=!0,setTimeout(()=>{de.value=!1},2e3),console.error(h)}},I=()=>{if(y&&!w.value){const h=y.currentTime/y.duration*100;J.value=h,K.value=he(y.currentTime*1e3)}},z=()=>{O.value=!0,J.value=100,y&&(K.value=he(y.duration*1e3))},B=()=>{if(console.log("recording stopped..."),P&&P.state!=="inactive"){P.stop(),w.value=!1,O.value=!0,j&&(clearInterval(j),j=null);const h=Date.now()-ce;K.value=he(h)}},G=()=>{console.log("playing"),y&&(J.value=0,y.currentTime=0,y.play(),O.value=!1,j||(j=setInterval(()=>{I()},100)))},V=()=>{console.log("paused"),w.value?B():y&&(y.pause(),O.value=!0,j&&(clearInterval(j),j=null)),N.value=!0},ee=()=>{console.log("Recording deleted..."),B(),w.value=!1,N.value=!1,y&&(y.pause(),y.currentTime=0,y.removeEventListener("timeupdate",I),y.removeEventListener("ended",z)),j&&(clearInterval(j),j=null),H&&(URL.revokeObjectURL(H),W=null,H=null,y=null,O.value=!0,J.value=0,K.value="0:00.0")},te=()=>{console.log("loading is done!"),b.value=!1},fe=()=>{b.value=!1},ie=()=>{const h=i.value;if(h){const g=h.scrollTop,ue=h.scrollHeight;h.style.height="auto";const $=h.scrollHeight,ye=Wr*Kr;$>ye?(h.style.height=`${ye}px`,h.style.overflowY="auto"):h.style.height=`${$}px`;const Ut=g+($-ue);h.scrollTop=Ut}},Re=h=>{s("update:modelValue",h.target.value),ie()};Ae(()=>n.modelValue,h=>{if(h===""){const g=i.value;g&&(g.style.height="auto",g.style.overflowY="hidden")}else ie()}),Ce(()=>{ie(),r.value&&(r.value.scrollTop=r.value.scrollHeight)}),Ae(()=>n.filteredMessages,()=>{nt(()=>{r.value&&(r.value.scrollTop=r.value.scrollHeight)})},{deep:!0},n.modelValue);const ke=()=>{l.value&&(l.value.click(),S.value=!0)},bt=()=>{S.value=!1,u.value&&u.value.click()},xt=h=>{const g=h.target.files[0];g&&(_.value=g,s("update:selectedFile",_.value),f.value=_.value.name,console.log(_.value))},wt=h=>{const g=h.target.files[0];g&&(R.value=g,s("update:selectedImage",R.value),k.value=URL.createObjectURL(g),f.value=R.value.name,console.log(R.value))},_t=()=>{(_.value||R.value)&&(f.value="",k.value=null,R.value=null,_.value=null,s("update:selectedFile",null),s("update:selectedImage",null)),console.log(_.value,R.value)};let Me=d(null);const F=d({id:null,isClick:!1}),Rt=(h,g)=>{A.value=g,Me.value=h,console.log(h),F.value.id===h?(F.value.id=null,F.value.isClick=!1,console.log(F.value.id),console.log(F.value.isClick)):(F.value.isClick=!0,F.value.id=h)},Ie=d(!1),Te=d(!1),kt=()=>{Ie.value=!1,F.value.id=null,F.value.isClick=!1},It=h=>{Ie.value=!0,console.log(h)},Tt=()=>{navigator.clipboard.writeText(A).then(()=>{Te.value=!0,console.log(A.value),setTimeout(()=>{Te.value=!1},2e3)}).catch(h=>{console.error("Failed to copy text: ",h)}),F.value.id=null,F.value.isClick=!1,console.log("copied")};return(h,g)=>{const ue=Ft("motion-fade");return m(),p("div",Qs,[o("div",er,[o("div",tr,[o("div",nr,[o("div",sr,[o("img",{src:e.selectedUser.userPhotoURL,loading:"lazy",class:"bg-gray-500/20 border border-gray-500/20 rounded-full"},null,8,rr)])]),o("div",null,[o("h1",or,M(e.selectedUser.userName),1)])]),o("form",ir,[o("button",ar,[v(C(L),{icon:"carbon:close",width:"20",height:"20"})])])]),lr,o("div",{class:"h-dvh pb-[165px] sm:pb-0 sm:h-[366px] sm:mb-[86px] rounded-md overflow-auto",ref_key:"messageContainer",ref:r},[e.filteredMessages.length===0&&!e.isLoading?(m(),p("div",ur,[o("span",cr,[oe("No conversation with "),o("span",dr,M(e.selectedUser.userName),1)])])):T("",!0),(m(!0),p(jt,null,Bt(e.filteredMessages,$=>(m(),p("div",{key:$.id,class:"relative"},[v(Zs,{m:$,userId:e.userId,selectedUser:e.selectedUser,isImageLoading:b.value,showDetailsId:F.value,formatTime:e.formatTime,onLoad:te,onError:fe,showInfo:Rt,isSendMessageLoading:e.isSendMessageLoading},null,8,["m","userId","selectedUser","isImageLoading","showDetailsId","formatTime","isSendMessageLoading"])]))),128)),e.isLoading?(m(),p("div",hr,[v(ws)])):T("",!0)],512),o("div",fr,[v(se,null,{default:ne(()=>[Te.value?(m(),p("div",gr,pr)):T("",!0)]),_:1}),v(se,null,{default:ne(()=>[Ie.value?(m(),p("div",vr,[o("span",yr,[o("div",br,[xr,o("div",wr,[o("button",{onClick:g[0]||(g[0]=$=>kt()),class:"text-gray-600 px-2 py-1 rounded-md border border-gray-500/50"}," Cancel "),_r])])])])):T("",!0)]),_:1}),v(se,null,{default:ne(()=>[C(Me)===F.value.id&&F.value.isClick?(m(),p("div",Rr,[o("div",kr,[o("span",Ir,[o("div",{onClick:g[1]||(g[1]=$=>Tt()),class:"grid place-items-center hover:text-green-500 cursor-pointer transition"},[v(C(L),{icon:"solar:copy-linear",width:"20",height:"20"}),Tr]),o("div",{onClick:g[2]||(g[2]=$=>It(F.value.id)),class:"grid place-items-center hover:text-red-500 cursor-pointer transition"},[v(C(L),{icon:"fluent:delete-32-regular",width:"20",height:"20"}),Ur])])])])):T("",!0)]),_:1}),v(se,null,{default:ne(()=>[e.isSendMessageLoading?(m(),p("div",Er,Ar)):T("",!0)]),_:1}),v(se,null,{default:ne(()=>[v(Ds,{isShowRecordingModal:N.value,isPause:O.value,playRecord:G,pauseRecording:V,isRecording:w.value,elapsedTime:K.value,stopRecording:B,startRecording:x,deleteRecording:ee,recordingProgress:J.value},null,8,["isShowRecordingModal","isPause","isRecording","elapsedTime","recordingProgress"])]),_:1}),v(se,null,{default:ne(()=>[w.value?(m(),p("div",Lr,[Sr,o("button",{onClick:g[3]||(g[3]=$=>V()),class:"backdrop-blur-2xl flex justify-center items-center gap-1 bg-red-400/10 border py-1 px-2 text-sm font-medium transition border-red-500/20 rounded-full"},[v(C(L),{icon:"ic:round-pause",width:"20",height:"20",class:"text-red-500"}),oe(" Pause ")]),o("button",{onClick:g[4]||(g[4]=$=>ee()),class:"backdrop-blur-2xl flex justify-center items-center gap-1 py-1 px-2 text-sm font-medium transition rounded-full"},[v(C(L),{icon:"mingcute:delete-fill",width:"20",height:"20",class:"text-red-500"})])])):T("",!0)]),_:1}),v(se,null,{default:ne(()=>[de.value?(m(),p("span",Dr,[v(C(L),{icon:"material-symbols:error",class:"text-red-500",width:"20",height:"20"}),oe(" "+M(Y.value),1)])):T("",!0)]),_:1}),v(se,null,{default:ne(()=>[n.selectedFile||n.selectedImage!==null?(m(),p("div",Or,[S.value?(m(),p("div",Nr,[o("img",{src:k.value,loading:"lazy",alt:"",class:"size-14 rounded-xl backdrop-blur-2xl object-cover bg-gray-400/20 border border-gray-500/20"},null,8,Pr)])):T("",!0),o("div",$r,[o("span",Mr,[v(C(L),{icon:"fluent:attach-16-regular",width:"20",height:"20"}),o("span",jr,M(f.value),1)]),o("button",{onClick:g[5]||(g[5]=$=>_t()),class:"backdrop-blur-2xl bg-gray-400/20 border p-0.5 hover:text-red-500 transition border-gray-500/20 rounded-full"},[v(C(L),{icon:"iconamoon:close-light",width:"20",height:"20"})])])])):T("",!0)]),_:1}),o("form",{ref_key:"messageBoxContainer",ref:a},[o("div",Br,[o("div",Fr,[o("textarea",{type:"text",disabled:e.isSendMessageLoading,cols:"1",rows:"1",required:"",autofocus:"",ref_key:"autoExpand",ref:i,value:e.modelValue,onInput:Re,placeholder:"Enter a message",class:"w-full px-3 pt-3 placeholder:text-sm placeholder:text-gray-500 resize-none rounded-t-2xl no-scrollbar bg-transparent outline-none"},null,40,qr),o("div",Hr,[o("div",zr,[o("button",{onClick:be(ke,["prevent"]),class:"transition p-1 rounded-full bg-gray-400/20 hover:text-success shadow"},[v(C(L),{icon:"tabler:photo",class:"text-xl"})]),o("input",{type:"file",ref_key:"imageInput",ref:l,accept:"image/*",onChange:wt,class:"hidden"},null,544),o("input",{type:"file",ref_key:"fileInput",ref:u,accept:".pdf, .doc, .docx",onChange:xt,class:"hidden"},null,544),o("button",{onClick:be(bt,["prevent"]),class:"transition p-1 rounded-full bg-gray-400/20 hover:text-secondary shadow"},[v(C(L),{icon:"tabler:file",class:"text-xl"})])]),o("div",{class:Z(["rounded-full p-1.5 flex shadow justify-center transition items-center",e.modelValue||_.value||R.value!==null?"bg-blue-500 hover:bg-blue-500/90 ":"bg-primary/10 hover:bg-primary/20"])},[!e.isSendMessageLoading&&e.modelValue||_.value||R.value?qe((m(),p("button",{key:0,class:Z(e.isSendMessageLoading?"cursor-not-allowed":""),disabled:e.isSendMessageLoading,onClick:g[6]||(g[6]=be((...$)=>e.sendMessage&&e.sendMessage(...$),["prevent"]))},[v(C(L),{icon:"bxs:send",class:"text-xl text-gray-200"})],10,Vr)),[[ue]]):qe((m(),p("button",{key:1,onClick:be(x,["prevent","stop"])},[v(C(L),{icon:"ic:round-mic",class:"text-xl text-primary"})])),[[ue]])],2)])])])],512)])])}}};export{Zr as C,Qr as _,Qe as a,eo as b,Jr as d,ss as g,et as r,Ze as u};
