import{_ as St,C as Lt,z as We,A as pe,B as Ot,D as Nt,E as Pt,S as jt,G as Mt,H as Bt,g as dt,r as g,q as Ke,I as Ne,p as Xe,J as Ft,K as ht,o as v,c as b,a as i,j as C,n as se,t as N,e as ie,d as qt,b as _,x as de,u as l,T as he,F as je,w as Ge,i as Ht,f as be,h as Ye,y as zt}from"./index-CDVM4yHM.js";import{u as Vt,_ as Wt,I as J}from"./_plugin-vue_export-helper-BEbyEXf8.js";import{s as Kt,d as Je,h as Ze,a as Xt,c as Qe,b as et,q as Gt,o as Yt}from"./index.esm2017-D-vO9r7u.js";/**
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
 */const ft="firebasestorage.googleapis.com",gt="storageBucket",Jt=2*60*1e3,Zt=10*60*1e3;/**
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
 */class A extends Bt{constructor(t,s,n=0){super(Ue(t),`Firebase Storage: ${s} (${Ue(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,A.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Ue(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var D;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(D||(D={}));function Ue(e){return"storage/"+e}function Me(){const e="An unknown error occurred, please check the error payload for server response.";return new A(D.UNKNOWN,e)}function Qt(e){return new A(D.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function es(e){return new A(D.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function ts(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new A(D.UNAUTHENTICATED,e)}function ss(){return new A(D.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function ns(e){return new A(D.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function rs(){return new A(D.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function os(){return new A(D.CANCELED,"User canceled the upload/download.")}function is(e){return new A(D.INVALID_URL,"Invalid URL '"+e+"'.")}function as(e){return new A(D.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function ls(){return new A(D.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+gt+"' property when initializing the app?")}function us(){return new A(D.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function cs(){return new A(D.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function ds(e){return new A(D.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Pe(e){return new A(D.INVALID_ARGUMENT,e)}function mt(){return new A(D.APP_DELETED,"The Firebase app was deleted.")}function hs(e){return new A(D.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function me(e,t){return new A(D.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function fe(e){throw new A(D.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class q{constructor(t,s){this.bucket=t,this.path_=s}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,s){let n;try{n=q.makeFromUrl(t,s)}catch{return new q(t,"")}if(n.path==="")return n;throw as(t)}static makeFromUrl(t,s){let n=null;const r="([A-Za-z0-9.\\-_]+)";function o(L){L.path.charAt(L.path.length-1)==="/"&&(L.path_=L.path_.slice(0,-1))}const a="(/(.*))?$",c=new RegExp("^gs://"+r+a,"i"),d={bucket:1,path:3};function u(L){L.path_=decodeURIComponent(L.path)}const h="v[A-Za-z0-9_]+",p=s.replace(/[.]/g,"\\."),y="(/([^?#]*).*)?$",x=new RegExp(`^https?://${p}/${h}/b/${r}/o${y}`,"i"),w={bucket:1,path:3},T=s===ft?"(?:storage.googleapis.com|storage.cloud.google.com)":s,f="([^?#]*)",R=new RegExp(`^https?://${T}/${r}/${f}`,"i"),M=[{regex:c,indices:d,postModify:o},{regex:x,indices:w,postModify:u},{regex:R,indices:{bucket:1,path:2},postModify:u}];for(let L=0;L<M.length;L++){const B=M[L],W=B.regex.exec(t);if(W){const I=W[B.indices.bucket];let U=W[B.indices.path];U||(U=""),n=new q(I,U),B.postModify(n);break}}if(n==null)throw is(t);return n}}class fs{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function gs(e,t,s){let n=1,r=null,o=null,a=!1,c=0;function d(){return c===2}let u=!1;function h(...f){u||(u=!0,t.apply(null,f))}function p(f){r=setTimeout(()=>{r=null,e(x,d())},f)}function y(){o&&clearTimeout(o)}function x(f,...R){if(u){y();return}if(f){y(),h.call(null,f,...R);return}if(d()||a){y(),h.call(null,f,...R);return}n<64&&(n*=2);let M;c===1?(c=2,M=0):M=(n+Math.random())*1e3,p(M)}let w=!1;function T(f){w||(w=!0,y(),!u&&(r!==null?(f||(c=2),clearTimeout(r),p(0)):f||(c=1)))}return p(0),o=setTimeout(()=>{a=!0,T(!0)},s),T}function ms(e){e(!1)}/**
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
 */function ps(e){return e!==void 0}function vs(e){return typeof e=="object"&&!Array.isArray(e)}function Be(e){return typeof e=="string"||e instanceof String}function tt(e){return Fe()&&e instanceof Blob}function Fe(){return typeof Blob<"u"}function st(e,t,s,n){if(n<t)throw Pe(`Invalid value for '${e}'. Expected ${t} or greater.`);if(n>s)throw Pe(`Invalid value for '${e}'. Expected ${s} or less.`)}/**
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
 */function we(e,t,s){let n=t;return s==null&&(n=`https://${t}`),`${s}://${n}/v0${e}`}function pt(e){const t=encodeURIComponent;let s="?";for(const n in e)if(e.hasOwnProperty(n)){const r=t(n)+"="+t(e[n]);s=s+r+"&"}return s=s.slice(0,-1),s}/**
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
 */function bs(e,t){const s=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,o=t.indexOf(e)!==-1;return s||r||o}/**
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
 */class ys{constructor(t,s,n,r,o,a,c,d,u,h,p,y=!0){this.url_=t,this.method_=s,this.headers_=n,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=a,this.callback_=c,this.errorCallback_=d,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=p,this.retry=y,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((x,w)=>{this.resolve_=x,this.reject_=w,this.start_()})}start_(){const t=(n,r)=>{if(r){n(!1,new ye(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const a=c=>{const d=c.loaded,u=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(d,u)};this.progressCallback_!==null&&o.addUploadProgressListener(a),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(a),this.pendingConnection_=null;const c=o.getErrorCode()===ae.NO_ERROR,d=o.getStatus();if(!c||bs(d,this.additionalRetryCodes_)&&this.retry){const h=o.getErrorCode()===ae.ABORT;n(!1,new ye(!1,null,h));return}const u=this.successCodes_.indexOf(d)!==-1;n(!0,new ye(u,o))})},s=(n,r)=>{const o=this.resolve_,a=this.reject_,c=r.connection;if(r.wasSuccessCode)try{const d=this.callback_(c,c.getResponse());ps(d)?o(d):o()}catch(d){a(d)}else if(c!==null){const d=Me();d.serverResponse=c.getErrorText(),this.errorCallback_?a(this.errorCallback_(c,d)):a(d)}else if(r.canceled){const d=this.appDelete_?mt():os();a(d)}else{const d=rs();a(d)}};this.canceled_?s(!1,new ye(!1,null,!0)):this.backoffId_=gs(t,s,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&ms(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ye{constructor(t,s,n){this.wasSuccessCode=t,this.connection=s,this.canceled=!!n}}function xs(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function _s(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function ws(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Is(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function Rs(e,t,s,n,r,o,a=!0){const c=pt(e.urlParams),d=e.url+c,u=Object.assign({},e.headers);return ws(u,t),xs(u,s),_s(u,o),Is(u,n),new ys(d,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r,a)}/**
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
 */function ks(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Ts(...e){const t=ks();if(t!==void 0){const s=new t;for(let n=0;n<e.length;n++)s.append(e[n]);return s.getBlob()}else{if(Fe())return new Blob(e);throw new A(D.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Us(e,t,s){return e.webkitSlice?e.webkitSlice(t,s):e.mozSlice?e.mozSlice(t,s):e.slice?e.slice(t,s):null}/**
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
 */function Cs(e){if(typeof atob>"u")throw ds("base-64");return atob(e)}/**
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
 */const X={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ce{constructor(t,s){this.data=t,this.contentType=s||null}}function Es(e,t){switch(e){case X.RAW:return new Ce(vt(t));case X.BASE64:case X.BASE64URL:return new Ce(bt(e,t));case X.DATA_URL:return new Ce(Ds(t),As(t))}throw Me()}function vt(e){const t=[];for(let s=0;s<e.length;s++){let n=e.charCodeAt(s);if(n<=127)t.push(n);else if(n<=2047)t.push(192|n>>6,128|n&63);else if((n&64512)===55296)if(!(s<e.length-1&&(e.charCodeAt(s+1)&64512)===56320))t.push(239,191,189);else{const o=n,a=e.charCodeAt(++s);n=65536|(o&1023)<<10|a&1023,t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|n&63)}else(n&64512)===56320?t.push(239,191,189):t.push(224|n>>12,128|n>>6&63,128|n&63)}return new Uint8Array(t)}function $s(e){let t;try{t=decodeURIComponent(e)}catch{throw me(X.DATA_URL,"Malformed data URL.")}return vt(t)}function bt(e,t){switch(e){case X.BASE64:{const r=t.indexOf("-")!==-1,o=t.indexOf("_")!==-1;if(r||o)throw me(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case X.BASE64URL:{const r=t.indexOf("+")!==-1,o=t.indexOf("/")!==-1;if(r||o)throw me(e,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let s;try{s=Cs(t)}catch(r){throw r.message.includes("polyfill")?r:me(e,"Invalid character found")}const n=new Uint8Array(s.length);for(let r=0;r<s.length;r++)n[r]=s.charCodeAt(r);return n}class yt{constructor(t){this.base64=!1,this.contentType=null;const s=t.match(/^data:([^,]+)?,/);if(s===null)throw me(X.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=s[1]||null;n!=null&&(this.base64=Ss(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=t.substring(t.indexOf(",")+1)}}function Ds(e){const t=new yt(e);return t.base64?bt(X.BASE64,t.rest):$s(t.rest)}function As(e){return new yt(e).contentType}function Ss(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class te{constructor(t,s){let n=0,r="";tt(t)?(this.data_=t,n=t.size,r=t.type):t instanceof ArrayBuffer?(s?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(s?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,s){if(tt(this.data_)){const n=this.data_,r=Us(n,t,s);return r===null?null:new te(r)}else{const n=new Uint8Array(this.data_.buffer,t,s-t);return new te(n,!0)}}static getBlob(...t){if(Fe()){const s=t.map(n=>n instanceof te?n.data_:n);return new te(Ts.apply(null,s))}else{const s=t.map(a=>Be(a)?Es(X.RAW,a).data:a.data_);let n=0;s.forEach(a=>{n+=a.byteLength});const r=new Uint8Array(n);let o=0;return s.forEach(a=>{for(let c=0;c<a.length;c++)r[o++]=a[c]}),new te(r,!0)}}uploadData(){return this.data_}}/**
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
 */function xt(e){let t;try{t=JSON.parse(e)}catch{return null}return vs(t)?t:null}/**
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
 */function Ls(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function Os(e,t){const s=t.split("/").filter(n=>n.length>0).join("/");return e.length===0?s:e+"/"+s}function _t(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function Ns(e,t){return t}class j{constructor(t,s,n,r){this.server=t,this.local=s||t,this.writable=!!n,this.xform=r||Ns}}let xe=null;function Ps(e){return!Be(e)||e.length<2?e:_t(e)}function wt(){if(xe)return xe;const e=[];e.push(new j("bucket")),e.push(new j("generation")),e.push(new j("metageneration")),e.push(new j("name","fullPath",!0));function t(o,a){return Ps(a)}const s=new j("name");s.xform=t,e.push(s);function n(o,a){return a!==void 0?Number(a):a}const r=new j("size");return r.xform=n,e.push(r),e.push(new j("timeCreated")),e.push(new j("updated")),e.push(new j("md5Hash",null,!0)),e.push(new j("cacheControl",null,!0)),e.push(new j("contentDisposition",null,!0)),e.push(new j("contentEncoding",null,!0)),e.push(new j("contentLanguage",null,!0)),e.push(new j("contentType",null,!0)),e.push(new j("metadata","customMetadata",!0)),xe=e,xe}function js(e,t){function s(){const n=e.bucket,r=e.fullPath,o=new q(n,r);return t._makeStorageReference(o)}Object.defineProperty(e,"ref",{get:s})}function Ms(e,t,s){const n={};n.type="file";const r=s.length;for(let o=0;o<r;o++){const a=s[o];n[a.local]=a.xform(n,t[a.server])}return js(n,e),n}function It(e,t,s){const n=xt(t);return n===null?null:Ms(e,n,s)}function Bs(e,t,s,n){const r=xt(t);if(r===null||!Be(r.downloadTokens))return null;const o=r.downloadTokens;if(o.length===0)return null;const a=encodeURIComponent;return o.split(",").map(u=>{const h=e.bucket,p=e.fullPath,y="/b/"+a(h)+"/o/"+a(p),x=we(y,s,n),w=pt({alt:"media",token:u});return x+w})[0]}function Fs(e,t){const s={},n=t.length;for(let r=0;r<n;r++){const o=t[r];o.writable&&(s[o.server]=e[o.local])}return JSON.stringify(s)}class qe{constructor(t,s,n,r){this.url=t,this.method=s,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Rt(e){if(!e)throw Me()}function qs(e,t){function s(n,r){const o=It(e,r,t);return Rt(o!==null),o}return s}function Hs(e,t){function s(n,r){const o=It(e,r,t);return Rt(o!==null),Bs(o,r,e.host,e._protocol)}return s}function kt(e){function t(s,n){let r;return s.getStatus()===401?s.getErrorText().includes("Firebase App Check token is invalid")?r=ss():r=ts():s.getStatus()===402?r=es(e.bucket):s.getStatus()===403?r=ns(e.path):r=n,r.status=s.getStatus(),r.serverResponse=n.serverResponse,r}return t}function Tt(e){const t=kt(e);function s(n,r){let o=t(n,r);return n.getStatus()===404&&(o=Qt(e.path)),o.serverResponse=r.serverResponse,o}return s}function zs(e,t,s){const n=t.fullServerUrl(),r=we(n,e.host,e._protocol),o="GET",a=e.maxOperationRetryTime,c=new qe(r,o,Hs(e,s),a);return c.errorHandler=Tt(t),c}function Vs(e,t){const s=t.fullServerUrl(),n=we(s,e.host,e._protocol),r="DELETE",o=e.maxOperationRetryTime;function a(d,u){}const c=new qe(n,r,a,o);return c.successCodes=[200,204],c.errorHandler=Tt(t),c}function Ws(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function Ks(e,t,s){const n=Object.assign({},s);return n.fullPath=e.path,n.size=t.size(),n.contentType||(n.contentType=Ws(null,t)),n}function Xs(e,t,s,n,r){const o=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function c(){let M="";for(let L=0;L<2;L++)M=M+Math.random().toString().slice(2);return M}const d=c();a["Content-Type"]="multipart/related; boundary="+d;const u=Ks(t,n,r),h=Fs(u,s),p="--"+d+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+d+`\r
Content-Type: `+u.contentType+`\r
\r
`,y=`\r
--`+d+"--",x=te.getBlob(p,n,y);if(x===null)throw us();const w={name:u.fullPath},T=we(o,e.host,e._protocol),f="POST",R=e.maxUploadRetryTime,V=new qe(T,f,qs(e,s),R);return V.urlParams=w,V.headers=a,V.body=x.uploadData(),V.errorHandler=kt(t),V}class Gs{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ae.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ae.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ae.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,s,n,r){if(this.sent_)throw fe("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(s,t,!0),r!==void 0)for(const o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return n!==void 0?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw fe("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw fe("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw fe("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw fe("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class Ys extends Gs{initXhr(){this.xhr_.responseType="text"}}function He(){return new Ys}/**
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
 */class le{constructor(t,s){this._service=t,s instanceof q?this._location=s:this._location=q.makeFromUrl(s,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,s){return new le(t,s)}get root(){const t=new q(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return _t(this._location.path)}get storage(){return this._service}get parent(){const t=Ls(this._location.path);if(t===null)return null;const s=new q(this._location.bucket,t);return new le(this._service,s)}_throwIfRoot(t){if(this._location.path==="")throw hs(t)}}function Js(e,t,s){e._throwIfRoot("uploadBytes");const n=Xs(e.storage,e._location,wt(),new te(t,!0),s);return e.storage.makeRequestWithTokens(n,He).then(r=>({metadata:r,ref:e}))}function Zs(e){e._throwIfRoot("getDownloadURL");const t=zs(e.storage,e._location,wt());return e.storage.makeRequestWithTokens(t,He).then(s=>{if(s===null)throw cs();return s})}function Qs(e){e._throwIfRoot("deleteObject");const t=Vs(e.storage,e._location);return e.storage.makeRequestWithTokens(t,He)}function en(e,t){const s=Os(e._location.path,t),n=new q(e._location.bucket,s);return new le(e.storage,n)}/**
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
 */function tn(e){return/^[A-Za-z]+:\/\//.test(e)}function sn(e,t){return new le(e,t)}function Ut(e,t){if(e instanceof ze){const s=e;if(s._bucket==null)throw ls();const n=new le(s,s._bucket);return t!=null?Ut(n,t):n}else return t!==void 0?en(e,t):e}function nn(e,t){if(t&&tn(t)){if(e instanceof ze)return sn(e,t);throw Pe("To use ref(service, url), the first argument must be a Storage instance.")}else return Ut(e,t)}function nt(e,t){const s=t==null?void 0:t[gt];return s==null?null:q.makeFromBucketSpec(s,e)}function rn(e,t,s,n={}){e.host=`${t}:${s}`,e._protocol="http";const{mockUserToken:r}=n;r&&(e._overrideAuthToken=typeof r=="string"?r:Mt(r,e.app.options.projectId))}class ze{constructor(t,s,n,r,o){this.app=t,this._authProvider=s,this._appCheckProvider=n,this._url=r,this._firebaseVersion=o,this._bucket=null,this._host=ft,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Jt,this._maxUploadRetryTime=Zt,this._requests=new Set,r!=null?this._bucket=q.makeFromBucketSpec(r,this._host):this._bucket=nt(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=q.makeFromBucketSpec(this._url,t):this._bucket=nt(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){st("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){st("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const s=await t.getToken();if(s!==null)return s.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new le(this,t)}_makeRequest(t,s,n,r,o=!0){if(this._deleted)return new fs(mt());{const a=Rs(t,this._appId,n,r,s,this._firebaseVersion,o);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(t,s){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,s,n,r).getPromise()}}const rt="@firebase/storage",ot="0.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct="storage";function it(e,t,s){return e=pe(e),Js(e,t,s)}function at(e){return e=pe(e),Zs(e)}function no(e){return e=pe(e),Qs(e)}function lt(e,t){return e=pe(e),nn(e,t)}function on(e=Pt(),t){e=pe(e);const n=Ot(e,Ct).getImmediate({identifier:t}),r=Nt("storage");return r&&an(n,...r),n}function an(e,t,s,n={}){rn(e,t,s,n)}function ln(e,{instanceIdentifier:t}){const s=e.getProvider("app").getImmediate(),n=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return new ze(s,n,r,t,jt)}function un(){St(new Lt(Ct,ln,"PUBLIC").setMultipleInstances(!0)),We(rt,ot,""),We(rt,ot,"esm2017")}un();function cn(){const e=dt(),t=g(e.currentUser),{uid:s,photoURL:n,displayName:r}=t.value,o=s,a=g([]),d=JSON.parse(localStorage.getItem("users")).filter(u=>u.id!==o);return a.value=d,{storedUsers:a}}function ro(){const e=dt(),t=g(e.currentUser),{firestore:s}=Vt(),n=on(),r=t.value.uid,o=t.value.photoURL,a=t.value.displayName;Ft();const{storedUsers:c}=cn(),d=g(""),u=g([]),h=g(!1),p=g(null);let y=g({}),x=g(!1);const w=(m,k)=>[m,k].sort().join("_"),T=(m,k)=>{document.getElementById(m).showModal(),y.value=k,Ve(),console.log(u)},f=g(null),R=g(null),V=m=>{f.value=m},M=m=>{R.value=m},L=async()=>{if(d.value.trim()===""&&!f.value&&!R.value){console.warn("Please enter a message or select a file");return}x.value=!0;const m=w(r,y.value.userId),k={id:`temp_${Date.now()}`,senderId:r,recipientId:y.value.userId,message:d.value,imageUrl:R.value?URL.createObjectURL(R.value):null,imageName:R.value?R.value.name:null,fileUrl:f.value?URL.createObjectURL(f.value):null,fileName:f.value?f.value.name:null,isSending:!0,timestamp:new Date};u.value.push(k),Re();let E=null,H=null;try{if(f.value){const S=`chats/${m}/${Date.now()}_${f.value.name}`,O=lt(n,S),K=await it(O,f.value);E=await at(K.ref)}if(R.value){const S=`chats/${m}/${Date.now()}_${R.value.name}`,O=lt(n,S),K=await it(O,R.value);H=await at(K.ref)}await Kt(Je(s,`chats/${m}`),{participants:{[r]:!0,[y.value.userId]:!0},lastMessage:d.value||(E||H?"File attachment":""),sender:r,timestamp:Ze()},{merge:!0});const Y=await Xt(Qe(s,`chats/${m}/messages`),{senderId:r,recipientId:y.value.userId,message:d.value,imageUrl:H,imageName:R.value?R.value.name:null,fileUrl:E,fileName:f.value?f.value.name:null,timestamp:Ze()});u.value=u.value.map(S=>S.id===k.id?{...S,id:Y.id,isSending:!1,imageUrl:H,fileUrl:E}:S),localStorage.setItem(`messages_${m}`,JSON.stringify(u.value)),x.value=!1,d.value="",f.value=null,R.value=null}catch(Y){x.value=!1,console.error("Error sending message:",Y),u.value=u.value.map(S=>S.id===k.id?{...S,isSending:!1,error:"Failed to send message."}:S)}},B=g({}),W=g({}),I=g([]),U=g({}),G=g(0),P=Ke(()=>c.value.filter(m=>B.value[w(r,m.id)]).sort((m,k)=>{const E=w(r,m.id),H=w(r,k.id);return U.value[H]-U.value[E]})),ve=()=>{I.value.forEach(k=>k()),I.value=[];const m=new Set;c.value.forEach(k=>{const E=w(r,k.id),H=Je(s,"chats",E),Y=et(H,S=>{if(S.exists()){const O=S.data(),K=O.lastMessage||"",ne=O.sender||"",ke=O.timestamp||"";B.value[E]=K,W.value[E]=ne,U.value[E]=ke,K&&ne!==r?m.has(ne)||(m.add(ne),G.value=m.size):m.has(ne)&&(m.delete(ne),G.value=m.size)}else{B.value[E]="",W.value[E]="",U.value[E]="";const O=W.value[E];m.has(O)&&(m.delete(O),G.value=m.size)}},S=>{console.error("Error listening to chat updates:",S)});I.value.push(Y)})};Ne(()=>{ve()}),Xe(()=>{I.value.forEach(m=>m())});const Ie=Ke(()=>u.value.filter(m=>m.senderId===r&&m.recipientId===y.value.userId||m.senderId===y.value.userId&&m.recipientId===r)),Ve=()=>{const m=w(r,y.value.userId),k=localStorage.getItem(`messages_${m}`);k&&(u.value=JSON.parse(k),Re()),h.value=!0;const E=Gt(Qe(s,`chats/${m}/messages`),Yt("timestamp","asc")),H=et(E,Y=>{const S=Y.docs.map(O=>({id:O.id,...O.data()}));u.value=S,h.value=!1,localStorage.setItem(`messages_${m}`,JSON.stringify(S)),Re()});Xe(()=>{H()})};Ne(()=>{Ve()});const Re=()=>{ht(()=>{p.value&&(p.value.scrollTop=p.value.scrollHeight)})};return{Time:m=>{if(m){const k=new Date(m.seconds*1e3),E=new Date,H=k.getHours()%12||12,Y=("0"+k.getMinutes()).slice(-2),S=k.getHours()<12?"am":"pm",O=`${H}:${Y} ${S}`;if(k.toDateString()===E.toDateString())return O;const K=new Date(E);if(K.setDate(K.getDate()-1),k.toDateString()===K.toDateString())return`Yesterday ${O}`;const ke=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][k.getDay()],Te=new Date(E);if(Te.setDate(Te.getDate()-7),k>Te)return`${ke} ${O}`;const Dt=k.toLocaleString("default",{month:"short"}),At=k.getDate();return`${Dt} ${At} ${O}`}return""},getChatId:w,yourChat:T,sendMessage:L,userId:r,newMessage:d,messages:u,isLoading:h,isSendMessageLoading:x,filteredMessages:Ie,selectedUser:y,timestamp:U,userPhoto:o,userName:a,filteredUsers:P,latestMessages:B,isSender:W,storedUsers:c,newMessageArray:G,file:f,imageFile:R,handleImageUpdate:M,handleFileUpdate:V}}const dn={class:"w-10 rounded-full"},hn={key:0,class:"size-10 bg-gray-500/20 border border-gray-500/20 rounded-full"},fn=["src"],gn={class:""},mn={class:"text-sm font-medium capitalize"},pn={class:"flex gap-2 justify-start items-center"},vn={key:0,class:"text-xs"},bn={class:"text-[10px]"},oo={__name:"usersChatHeads",props:{yourChat:{type:Function,required:!0},formatTime:{type:Function,required:!0},user:{type:Object,required:!0},latestMessages:{type:Object,required:!0},getChatId:{type:Function,required:!0},userId:{type:[String,Number],required:!0},isSender:{type:Object,required:!0},timestamp:{type:Object,required:!0}},setup(e){const t=g(!0),s=()=>{console.log("loading is done!"),t.value=!1},n=()=>{t.value=!1};return(r,o)=>(v(),b("div",{onClick:o[0]||(o[0]=a=>e.yourChat(e.user)),class:"flex justify-start items-center gap-2 cursor-pointer hover:bg-gray-500/20 transition p-1 rounded-md"},[i("div",{class:se(["avatar",e.user.status==="online"?"online":"offline"])},[i("div",dn,[t.value?(v(),b("div",hn)):C("",!0),i("img",{src:e.user.userPhotoURL,loading:"lazy",class:"bg-gray-500/20 border border-gray-500/20 rounded-full",onLoad:s,onError:n},null,40,fn)])],2),i("div",gn,[i("h1",mn,N(e.user.userName),1),i("div",pn,[e.latestMessages[e.getChatId(e.userId,e.user.id)]?(v(),b("span",{key:0,class:se(["text-xs px-2 py-0.5 truncate max-w-52 bg-gray-500/20 rounded-full",e.isSender[e.getChatId(e.userId,e.user.id)]===e.userId?"":"text-blue-500"])},[e.isSender[e.getChatId(e.userId,e.user.id)]===e.userId?(v(),b("span",vn," You: ")):C("",!0),ie(" "+N(e.latestMessages[e.getChatId(e.userId,e.user.id)]),1)],2)):C("",!0),i("span",bn,N(e.formatTime(e.timestamp[e.getChatId(e.userId,e.user.id)])),1)])])]))}},yn={},xn={class:"my-3"},_n=qt('<div class="flex flex-col gap-4 w-32 ml-2"><div class="flex gap-2 items-center"><div class="skeleton w-10 h-10 rounded-full shrink-0"></div><div class="flex flex-col gap-2"><div class="skeleton h-2 w-10"></div><div class="skeleton h-2 w-20"></div></div></div></div><div class="flex justify-end mr-5"><div class="flex flex-col gap-4 w-32"><div class="flex gap-2 items-center"><div class="flex flex-col gap-2"><div class="skeleton h-2 w-20"></div><div class="skeleton h-2 w-10"></div></div><div class="skeleton w-10 h-10 rounded-full shrink-0"></div></div></div></div>',2),wn=[_n];function In(e,t){return v(),b("div",xn,wn)}const Rn=Wt(yn,[["render",In]]),_e=g(""),Z=g(null),Q=g(null),Ee=g(null),$e=g(!1),re=g(!1),ut=g(""),De=g(""),oe=g(!0),Ae=g(!1),kn=g(6e4);let Se=null,ge=null,$=null,ue=null;const ce=g("0:00.0");let Le=null,F=null;const ee=g(0),Oe=g(!1);let Tn=g(0),ct=g(null);const z=g({id:null,isClick:!1});function Et(e){const t=h=>{$e.value=!1;const p=h.target.files[0];p&&(Z.value=p,_e.value=Z.value.name,console.log(Z.value),e("update:selectedFile",Z.value))},s=h=>{$e.value=!0;const p=h.target.files[0];p&&(Q.value=p,Ee.value=URL.createObjectURL(p),_e.value=Q.value.name,console.log(Q.value),e("update:selectedImage",Q.value))},n=()=>{(Z.value||Q.value)&&(_e.value="",Ee.value=null,Q.value=null,Z.value=null,e("update:selectedFile",null),e("update:selectedImage",null)),console.log(Z.value,Q.value)},r=(h,p)=>{De.value=p,ct.value=h,console.log(h),z.value.id===h?(z.value.id=null,z.value.isClick=!1,console.log(z.value.id),console.log(z.value.isClick)):(z.value.isClick=!0,z.value.id=h)},o=g(!1),a=g(!1);return{selectedChatId:ct,showDetailsId:z,isShowDeleteConfirmation:o,isShowCopied:a,isImage:$e,deleteChat:h=>{o.value=!0,console.log(h)},selectedFile:Z,selectedImage:Q,imageURL:Ee,fileName:_e,closeAttachements:n,cancelDeleteConfirmation:()=>{o.value=!1,z.value.id=null,z.value.isClick=!1},copyChat:()=>{navigator.clipboard.writeText(De).then(()=>{a.value=!0,console.log(De.value),setTimeout(()=>{a.value=!1},2e3)}).catch(h=>{console.error("Failed to copy text: ",h)}),z.value.id=null,z.value.isClick=!1,console.log("copied")},Icon:J,showInfo:r,handleFileChange:t,handleImageChange:s,emit:e}}function $t(){const e=u=>{const h=Math.floor(u/1e3),p=Math.floor(h/60).toString().padStart(1,"0"),y=(h%60).toString().padStart(2,"0"),x=(u%1e3).toString().padStart(3,"0").slice(0,1);return`${p}:${y}:${x}`},t=()=>{if(re.value){const h=Date.now()-Le;ce.value=e(h),ee.value=h/kn.value*100}},s=async()=>{console.log("recording start..."),t(),ee.value=0,Tn.value=0,clearInterval(F),oe.value=!0;try{const u=await navigator.mediaDevices.getUserMedia({audio:!0});ue=new MediaRecorder(u),ue.ondataavailable=h=>{Se=h.data,ge=URL.createObjectURL(Se),$=new Audio(ge),$.addEventListener("timeupdate",n),$.addEventListener("ended",r)},ue.start(),re.value=!0,Le=Date.now(),$&&$.pause(),F=setInterval(()=>{t(),ee.value>=100&&o()},100)}catch(u){ut.value="Recording is not supported or failed.",Oe.value=!0,setTimeout(()=>{Oe.value=!1},2e3),console.error(u)}},n=()=>{if($&&!re.value){const u=$.currentTime/$.duration*100;ee.value=u,ce.value=e($.currentTime*1e3)}},r=()=>{oe.value=!0,ee.value=100,$&&(ce.value=e($.duration*1e3))},o=()=>{if(console.log("recording stopped..."),ue&&ue.state!=="inactive"){ue.stop(),re.value=!1,oe.value=!0,F&&(clearInterval(F),F=null);const u=Date.now()-Le;ce.value=e(u)}};return{startRecording:s,pauseRecording:()=>{console.log("paused"),re.value?o():$&&($.pause(),oe.value=!0,F&&(clearInterval(F),F=null)),Ae.value=!0},deleteRecording:()=>{console.log("Recording deleted..."),o(),re.value=!1,Ae.value=!1,$&&($.pause(),$.currentTime=0,$.removeEventListener("timeupdate",n),$.removeEventListener("ended",r)),F&&(clearInterval(F),F=null),ge&&(URL.revokeObjectURL(ge),Se=null,ge=null,$=null,oe.value=!0,ee.value=0,ce.value="0:00.0")},stopRecording:o,isShowRecordingModal:Ae,isPause:oe,playRecord:()=>{console.log("playing"),$&&(ee.value=0,$.currentTime=0,$.play(),oe.value=!1,F||(F=setInterval(()=>{n()},100)))},recordingProgress:ee,elapsedTime:ce,isRecording:re,Icon:J,recordingError:ut,isRecordingError:Oe}}const Un={key:0,class:"backdrop-blur-2xl flex mb-1 justify-start items-center gap-1 bg-red-400/10 border py-1 px-2 text-sm font-medium transition border-red-500/20 rounded-full"},Cn={key:0,class:"flex mb-1 justify-center items-center gap-2"},En=i("span",{class:"backdrop-blur-2xl flex justify-center items-center gap-2 bg-green-400/10 border px-2 text-sm font-medium py-1 transition border-green-500/20 rounded-full"},[i("span",{class:"loading loading-ring text-green-500 loading-md"}),i("span",null,"Recording..")],-1),$n={key:0,class:"fixed bottom-0 backdrop-blur-2xl py-5 z-50 inset-x-0"},Dn={class:"flex justify-center items-center mb-4 gap-1 mx-2"},An={class:"backdrop-blur-2xl flex justify-start w-full items-center gap-2 bg-gray-400/20 border px-2 text-sm font-medium py-2 transition border-gray-500/20 rounded-l-xl"},Sn={class:"flex justify-start w-full items-center"},Ln={class:"w-full border flex justify-center item-center p-1 border-gray-500/20 rounded-2xl"},On=["value"],Nn={class:"max-w-16 tabular-nums font-mono text-[10px]"},Pn={class:"px-2 flex justify-between items-center gap-1"},jn={class:"flex justify-start items-center gap-1"},Mn={class:"bg-blue-500 cursor-not-allowed hover:bg-blue-600 transition text-gray-100 rounded-full px-4 py-2 flex justify-start items-center gap-2"},Bn=i("span",{class:"text-sm font-meduim"},"Send",-1),Fn={__name:"recordingModal",setup(e){const{startRecording:t,pauseRecording:s,deleteRecording:n,stopRecording:r,isShowRecordingModal:o,isPause:a,playRecord:c,recordingProgress:d,elapsedTime:u,isRecording:h,Icon:p,recordingError:y,isRecordingError:x}=$t();return(w,T)=>(v(),b(je,null,[_(he,null,{default:de(()=>[l(x)?(v(),b("span",Un,[_(l(p),{icon:"material-symbols:error",class:"text-red-500",width:"20",height:"20"}),ie(" "+N(l(y)),1)])):C("",!0)]),_:1}),_(he,null,{default:de(()=>[l(h)?(v(),b("div",Cn,[En,i("button",{onClick:T[0]||(T[0]=f=>l(s)()),class:"backdrop-blur-2xl flex justify-center items-center gap-1 bg-red-400/10 border py-1 px-2 text-sm font-medium transition border-red-500/20 rounded-full"},[_(l(p),{icon:"ic:round-pause",width:"20",height:"20",class:"text-red-500"}),ie(" Pause ")]),i("button",{onClick:T[1]||(T[1]=f=>l(n)()),class:"backdrop-blur-2xl flex justify-center items-center gap-1 py-1 px-2 text-sm font-medium transition rounded-full"},[_(l(p),{icon:"mingcute:delete-fill",width:"20",height:"20",class:"text-red-500"})])])):C("",!0)]),_:1}),l(o)?(v(),b("div",$n,[i("div",Dn,[i("div",An,[i("div",Sn,[i("button",{onClick:T[2]||(T[2]=f=>l(a)?l(c)():l(s)())},[_(l(p),{icon:l(a)?"iconoir:play-solid":"ic:round-pause",width:"20",height:"20"},null,8,["icon"])]),i("div",Ln,[i("progress",{class:"progress progress-primary w-full mx-1",value:l(d),max:"100"},null,8,On)])]),i("div",Nn,N(l(u)),1)]),i("button",{class:"px-2 bg-gray-400/20 border hover:text-green-500 transition border-gray-500/20 rounded-r-xl py-2",onClick:T[3]||(T[3]=f=>l(h)?l(r)():l(t)())},[_(l(p),{icon:l(h)?"ic:round-stop":"fluent:mic-pulse-48-filled",width:"20",height:"20",class:se(l(h)?"text-red-500":"")},null,8,["icon","class"])])]),i("div",Pn,[i("div",jn,[i("button",{onClick:T[4]||(T[4]=f=>l(n)()),class:"backdrop-blur-2xl flex justify-center items-center gap-1 py-1 hover:bg-red-500/10 px-2 text-sm font-medium transition rounded-full"},[_(l(p),{icon:"mingcute:delete-fill",width:"20",height:"20",class:"text-red-500"})]),i("button",{onClick:T[5]||(T[5]=f=>l(t)()),class:"backdrop-blur-2xl flex justify-center items-center hover:bg-green-500/10 gap-1 py-1 px-2 text-sm font-medium transition rounded-full"},[_(l(p),{icon:"ion:reload",width:"20",height:"20",class:"text-green-500"})])]),i("div",null,[i("button",Mn,[Bn,_(l(p),{icon:"bxs:send",class:"text-xl text-gray-200"})])])])])):C("",!0)],64))}},qn={class:"chat-image avatar"},Hn={key:0,class:"size-5 rounded-full"},zn=["src"],Vn={key:0,class:"chat-header text-xs font-medium"},Wn={class:"text-[10px] opacity-50"},Kn={key:2,class:"w-52"},Xn={class:""},Gn={key:0,class:"w-52 h-32 bg-gray-500/20 border border-gray-500/20 rounded-2xl"},Yn=["src"],Jn={key:3,class:""},Zn={key:0,class:"w-52 h-32 bg-gray-500/20 border border-gray-500/20 rounded-2xl"},Qn=["src"],er={key:4,class:"text-sm rounded-2xl backdrop-blur-2xl max-w-52 bg-gray-500/20 font-medium border border-gray-500/20 px-4 py-3"},tr=["href"],sr={key:5,class:"max-w-52"},nr={class:"text-sm rounded-b-2xl backdrop-blur-2xl bg-gray-500/20 font-medium border border-gray-500/20 px-4 py-3"},rr=["href"],or={key:6,class:"chat-footer opacity-50 font-semibold text-xs"},ir={class:"chat-footer opacity-50 font-semibold text-xs"},ar={__name:"messageLayout",props:{showInfo:{type:Function,required:!0},m:{type:Object,required:!0},userId:{type:String,required:!0},selectedUser:{type:Object,required:!0},isImageLoading:{type:Boolean,default:!1},showDetailsId:{type:Object,required:!0},formatTime:{type:Function,required:!0},onLoad:{type:Function,required:!0},onError:{type:Function,required:!0}},setup(e){return(t,s)=>(v(),b("div",{onClick:s[4]||(s[4]=n=>e.showInfo(e.m.id,e.m.message)),class:se(["chat cursor-pointer py-[1px]",e.m.senderId===e.userId?"chat-end":"chat-start"])},[i("div",qn,[e.userId!==e.m.senderId?(v(),b("div",Hn,[i("img",{src:e.selectedUser.userPhotoURL},null,8,zn)])):C("",!0)]),e.showDetailsId.isClick&&e.showDetailsId.id===e.m.id?(v(),b("div",Vn,[ie(N(e.m.senderId===e.userId?"You":e.selectedUser.userName)+" ",1),i("time",Wn,N(e.formatTime(e.m.timestamp)),1)])):C("",!0),e.m.message&&e.m.imageUrl===null&&e.m.fileUrl===null?(v(),b("div",{key:1,class:se(["rounded-2xl whitespace-pre-line py-2 px-4 text-sm max-w-52",e.userId===e.m.senderId?"chat-bubble-primary":"bg-gray-400/20 rounded-2xl"])},N(e.m.message),3)):C("",!0),e.m.message&&e.m.imageUrl?(v(),b("div",Kn,[i("div",{class:se(["rounded-t-2xl whitespace-pre-line py-2 px-4 text-sm",e.userId===e.m.senderId?"chat-bubble-primary":"border border-gray-500/20"])},N(e.m.message),3),i("div",Xn,[e.isImageLoading?(v(),b("div",Gn)):C("",!0),e.m.imageUrl?(v(),b("img",{key:1,src:e.m.imageUrl,loading:"lazy",alt:"",class:"h-auto w-52 object-cover border bg-gray-500/20 border-gray-500/20 rounded-b-2xl",onLoad:s[0]||(s[0]=(...n)=>e.onLoad&&e.onLoad(...n)),onError:s[1]||(s[1]=(...n)=>e.onError&&e.onError(...n))},null,40,Yn)):C("",!0)])])):C("",!0),e.m.imageUrl&&e.m.message===""?(v(),b("div",Jn,[e.isImageLoading?(v(),b("div",Zn)):C("",!0),i("img",{src:e.m.imageUrl,loading:"lazy",alt:"",onLoad:s[2]||(s[2]=(...n)=>e.onLoad&&e.onLoad(...n)),onError:s[3]||(s[3]=(...n)=>e.onError&&e.onError(...n)),class:"h-auto w-52 object-cover bg-gray-500/20 border border-gray-500/20 rounded-2xl"},null,40,Qn)])):C("",!0),e.m.fileUrl&&e.m.message===""?(v(),b("div",er,[i("a",{href:e.m.fileUrl,download:"",class:"flex justify-start items-center gap-2"},[_(l(J),{icon:"simple-icons:googledocs",width:"16",height:"16"}),ie(N(e.m.fileName),1)],8,tr)])):C("",!0),e.m.message&&e.m.fileUrl?(v(),b("div",sr,[i("div",{class:se(["rounded-t-2xl whitespace-pre-line py-2 px-4 text-sm",e.userId===e.m.senderId?"chat-bubble-primary":"border border-gray-500/20"])},N(e.m.message),3),i("div",nr,[i("a",{href:e.m.fileUrl,download:"",class:"flex justify-start items-center gap-2"},[_(l(J),{icon:"simple-icons:googledocs",width:"16",height:"16"}),ie(N(e.m.fileName),1)],8,rr)])])):C("",!0),e.showDetailsId.isClick&&e.showDetailsId.id===e.m.id?(v(),b("div",or,N(e.m.isSending?"Sending...":"Delivered"),1)):C("",!0),i("div",ir,N(e.m.isSending?"Sending...":""),1)],2))}},lr={key:0,class:"flex mb-1 justify-center items-center"},ur=i("span",{class:"backdrop-blur-2xl flex justify-center items-center gap-4 bg-green-400/20 border px-4 text-sm font-medium py-1 transition border-green-500/20 text-green-500 rounded-full"},[i("p",{class:"text-xs"},"Copied!")],-1),cr=[ur],dr={key:0,class:"flex justify-center items-center"},hr={class:"backdrop-blur-2xl flex justify-center items-center gap-4 bg-gray-400/20 border px-8 text-sm font-medium py-2 transition border-gray-500/20 rounded-md"},fr={class:"grid place-items-center cursor-pointer transition"},gr=i("p",{class:"text-xs"},"Are you sure to delete this message?",-1),mr={class:"flex justify-start items-center gap-4 mt-2"},pr=i("button",{class:"px-2 py-1 rounded-md border text-red-500 border-red-500/50"}," Delete ",-1),vr={key:0,class:"fixed bottom-0 backdrop-blur-2xl py-5 z-50 inset-x-0"},br={class:"flex justify-center items-center"},yr={class:"backdrop-blur-2xl flex justify-center items-center gap-4 bg-gray-400/20 border px-8 text-sm font-medium py-2 transition border-gray-500/20 rounded-full"},xr=i("p",{class:"text-xs"},"Copy",-1),_r=i("p",{class:"text-xs"},"Delete",-1),wr={key:0,class:"ml-1 flex justify-start mb-1 items-end gap-1 text-xs"},Ir={key:0},Rr=["src"],kr={class:"flex justify-start items-center gap-1"},Tr={class:"backdrop-blur-2xl flex bg-gray-400/20 justify-start items-center gap-2 px-2 py-1 border border-gray-500/20 rounded-xl"},Ur={class:"truncate max-w-52"},Cr={__name:"messageAttachments",setup(e){const{selectedChatId:t,showDetailsId:s,isShowDeleteConfirmation:n,isShowCopied:r,isImage:o,deleteChat:a,selectedFile:c,selectedImage:d,imageURL:u,fileName:h,closeAttachements:p,cancelDeleteConfirmation:y,copyChat:x,Icon:w}=Et();return(T,f)=>(v(),b(je,null,[_(he,null,{default:de(()=>[l(r)?(v(),b("div",lr,cr)):C("",!0)]),_:1}),_(he,null,{default:de(()=>[l(n)?(v(),b("div",dr,[i("span",hr,[i("div",fr,[gr,i("div",mr,[i("button",{onClick:f[0]||(f[0]=R=>l(y)()),class:"text-gray-600 px-2 py-1 rounded-md border border-gray-500/50"}," Cancel "),pr])])])])):C("",!0)]),_:1}),_(he,null,{default:de(()=>[l(t)===l(s).id&&l(s).isClick?(v(),b("div",vr,[i("div",br,[i("span",yr,[i("div",{onClick:f[1]||(f[1]=R=>l(x)()),class:"grid place-items-center hover:text-green-500 cursor-pointer transition"},[_(l(w),{icon:"solar:copy-linear",width:"20",height:"20"}),xr]),i("div",{onClick:f[2]||(f[2]=R=>l(a)()),class:"grid place-items-center hover:text-red-500 cursor-pointer transition"},[_(l(w),{icon:"fluent:delete-32-regular",width:"20",height:"20"}),_r])])])])):C("",!0)]),_:1}),_(he,null,{default:de(()=>[l(c)||l(d)?(v(),b("div",wr,[l(o)?(v(),b("div",Ir,[i("img",{src:l(u),loading:"lazy",alt:"",class:"size-14 rounded-xl backdrop-blur-2xl object-cover bg-gray-400/20 border border-gray-500/20"},null,8,Rr)])):C("",!0),i("div",kr,[i("span",Tr,[_(l(w),{icon:"fluent:attach-16-regular",width:"20",height:"20"}),i("span",Ur,N(l(h)),1)]),i("button",{onClick:f[3]||(f[3]=R=>l(p)()),class:"backdrop-blur-2xl bg-gray-400/20 border p-0.5 hover:text-red-500 transition border-gray-500/20 rounded-full"},[_(l(w),{icon:"iconamoon:close-light",width:"20",height:"20"})])])])):C("",!0)]),_:1})],64))}},Er={class:"modal-box overflow-hidden relative p-2 no-scrollbar"},$r={class:"flex justify-between items-center gap-2"},Dr={class:"flex justify-start items-center gap-2"},Ar={class:"avatar"},Sr={class:"w-10 rounded-full"},Lr=["src"],Or={class:"text-sm font-medium"},Nr={method:"dialog",class:"flex justify-start items-center"},Pr={class:"px-0.5"},jr=i("hr",{class:"my-1 border border-gray-400/20"},null,-1),Mr={key:0,class:"my-2 flex justify-center items-center text-sm"},Br={class:"py-1 px-4 bg-primary/10 rounded-full"},Fr={class:"text-primary font-semibold"},qr={key:1},Hr={class:"fixed bottom-0 z-50 inset-x-0"},zr={class:"flex justify-start items-center rounded-t-2xl gap-2 bg-gray-400/20 backdrop-blur-2xl shadow"},Vr={class:"w-full rounded-t-2xl border border-gray-500/20 shadow"},Wr=["disabled","value"],Kr={class:"flex justify-between items-center m-3 h-5"},Xr={class:"flex justify-center items-center gap-2"},Gr=["disabled"],Yr=["disabled"],Jr=10,Zr=24,io={__name:"ChatModal",props:{userId:{type:String,required:!0},userName:{type:String,required:!0},userPhoto:{type:String,required:!0},messages:{type:Array,required:!0},filteredMessages:{type:Array,default:()=>[]},selectedUser:{type:Object,required:!0},modelValue:{type:String,required:!0},selectedFile:{type:Object,default:null},selectedImage:{type:Object,default:null},isSendMessageLoading:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},formatTime:{type:Function,required:!0},sendMessage:{type:Function,required:!0}},emits:["update:selectedFile","update:modelValue","update:selectedImage"],setup(e,{emit:t}){const s=e,n=t,{startRecording:r}=$t(),{showDetailsId:o,showInfo:a,handleFileChange:c,handleImageChange:d,selectedFile:u,selectedImage:h}=Et(n),p=g(null),y=g(null),x=g(null),w=g(null),T=g(null),f=g(!0),R=()=>{var I;(I=p.value)==null||I.click()},V=()=>{var I;(I=y.value)==null||I.click()},M=()=>{console.log("Image loading completed"),f.value=!1},L=()=>{f.value=!1},B=()=>{const I=w.value;if(I){const U=I.scrollTop,G=I.scrollHeight;I.style.height="auto";const P=I.scrollHeight,ve=Jr*Zr;P>ve?(I.style.height=`${ve}px`,I.style.overflowY="auto"):I.style.height=`${P}px`;const Ie=U+(P-G);I.scrollTop=Ie}},W=I=>{n("update:modelValue",I.target.value),B()};return Ge(()=>s.modelValue,I=>{if(I===""){const U=w.value;U&&(U.style.height="auto",U.style.overflowY="hidden")}else B()}),Ge(()=>s.filteredMessages,()=>{ht(()=>{x.value&&(x.value.scrollTop=x.value.scrollHeight)})},{deep:!0}),Ne(()=>{B(),x.value&&(x.value.scrollTop=x.value.scrollHeight)}),(I,U)=>{const G=zt("motion-fade");return v(),b("div",Er,[i("div",$r,[i("div",Dr,[i("div",Ar,[i("div",Sr,[i("img",{src:e.selectedUser.userPhotoURL,loading:"lazy",class:"bg-gray-500/20 border border-gray-500/20 rounded-full"},null,8,Lr)])]),i("div",null,[i("h1",Or,N(e.selectedUser.userName),1)])]),i("form",Nr,[i("button",Pr,[_(l(J),{icon:"carbon:close",width:"20",height:"20"})])])]),jr,i("div",{class:"h-dvh pb-[165px] sm:pb-0 sm:h-[366px] sm:mb-[86px] rounded-md overflow-auto",ref_key:"messageContainer",ref:x},[e.filteredMessages.length===0&&!e.isLoading?(v(),b("div",Mr,[i("span",Br,[ie("No conversation with "),i("span",Fr,N(e.selectedUser.userName),1)])])):C("",!0),(v(!0),b(je,null,Ht(e.filteredMessages,P=>(v(),b("div",{key:P.id,class:"relative"},[_(ar,{m:P,userId:e.userId,selectedUser:e.selectedUser,isImageLoading:f.value,showDetailsId:l(o),formatTime:e.formatTime,onLoad:M,onError:L,showInfo:l(a)},null,8,["m","userId","selectedUser","isImageLoading","showDetailsId","formatTime","showInfo"])]))),128)),e.isLoading?(v(),b("div",qr,[_(Rn)])):C("",!0)],512),i("div",Hr,[_(Cr),_(Fn),i("form",{ref_key:"messageBoxContainer",ref:T},[i("div",zr,[i("div",Vr,[i("textarea",{type:"text",disabled:e.isSendMessageLoading,cols:"1",rows:"1",required:"",autofocus:"",ref_key:"autoExpand",ref:w,value:e.modelValue,onInput:W,placeholder:"Enter a message",class:"w-full px-3 pt-3 placeholder:text-sm placeholder:text-gray-500 resize-none rounded-t-2xl no-scrollbar bg-transparent outline-none"},null,40,Wr),i("div",Kr,[i("div",Xr,[i("button",{onClick:be(R,["prevent"]),class:"transition p-1 rounded-full bg-gray-400/20 hover:text-success shadow"},[_(l(J),{icon:"tabler:photo",class:"text-xl"})]),i("input",{type:"file",ref_key:"imageInput",ref:p,accept:"image/*",onChange:U[0]||(U[0]=(...P)=>l(d)&&l(d)(...P)),class:"hidden"},null,544),i("input",{type:"file",ref_key:"fileInput",ref:y,accept:".pdf, .doc, .docx",onChange:U[1]||(U[1]=(...P)=>l(c)&&l(c)(...P)),class:"hidden"},null,544),i("button",{onClick:be(V,["prevent"]),class:"transition p-1 rounded-full bg-gray-400/20 hover:text-secondary shadow"},[_(l(J),{icon:"tabler:file",class:"text-xl"})])]),i("div",{class:se(["rounded-full p-1.5 flex shadow justify-center transition items-center",e.modelValue||l(u)||l(h)!==null?"bg-blue-500 hover:bg-blue-500/90 ":"bg-primary/10 hover:bg-primary/20"])},[!e.isSendMessageLoading&&e.modelValue||l(u)||l(h)?Ye((v(),b("button",{key:0,disabled:e.isSendMessageLoading,onClick:U[2]||(U[2]=be((...P)=>e.sendMessage&&e.sendMessage(...P),["prevent"]))},[_(l(J),{icon:"bxs:send",class:"text-xl text-gray-200"})],8,Gr)),[[G]]):Ye((v(),b("button",{key:1,disabled:e.isSendMessageLoading,onClick:U[3]||(U[3]=be((...P)=>l(r)&&l(r)(...P),["prevent","stop"]))},[_(l(J),{icon:"ic:round-mic",class:"text-xl text-primary"})],8,Yr)),[[G]])],2)])])])],512)])])}}};export{ro as C,oo as _,at as a,io as b,no as d,on as g,lt as r,it as u};
