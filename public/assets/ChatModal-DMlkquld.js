import{_ as At,C as Lt,z as Xe,A as ve,B as Ot,D as Nt,E as Pt,S as Mt,G as jt,H as Bt,g as dt,r as h,q as Ge,I as Pe,p as Ye,J as Ft,K as ht,o as b,c as y,a as i,j as I,n as se,t as P,e as le,d as qt,b as w,x as ie,u as l,T as ae,F as Be,w as Me,f as fe,i as Ht,h as Je,y as zt}from"./index-zUKn7zLY.js";import{u as Vt,_ as Wt,I as J}from"./_plugin-vue_export-helper-DfxUGp_b.js";import{s as Kt,d as Ze,h as Qe,a as Xt,c as et,b as tt,q as Gt,o as Yt}from"./index.esm2017-DVcY__Yn.js";/**
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
 */class L extends Bt{constructor(t,s,n=0){super(Ce(t),`Firebase Storage: ${s} (${Ce(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,L.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Ce(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var A;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(A||(A={}));function Ce(e){return"storage/"+e}function Fe(){const e="An unknown error occurred, please check the error payload for server response.";return new L(A.UNKNOWN,e)}function Qt(e){return new L(A.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function es(e){return new L(A.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function ts(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new L(A.UNAUTHENTICATED,e)}function ss(){return new L(A.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function ns(e){return new L(A.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function rs(){return new L(A.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function os(){return new L(A.CANCELED,"User canceled the upload/download.")}function is(e){return new L(A.INVALID_URL,"Invalid URL '"+e+"'.")}function as(e){return new L(A.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function ls(){return new L(A.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+gt+"' property when initializing the app?")}function us(){return new L(A.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function cs(){return new L(A.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function ds(e){return new L(A.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function je(e){return new L(A.INVALID_ARGUMENT,e)}function mt(){return new L(A.APP_DELETED,"The Firebase app was deleted.")}function hs(e){return new L(A.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function pe(e,t){return new L(A.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function ge(e){throw new L(A.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class z{constructor(t,s){this.bucket=t,this.path_=s}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,s){let n;try{n=z.makeFromUrl(t,s)}catch{return new z(t,"")}if(n.path==="")return n;throw as(t)}static makeFromUrl(t,s){let n=null;const r="([A-Za-z0-9.\\-_]+)";function o($){$.path.charAt($.path.length-1)==="/"&&($.path_=$.path_.slice(0,-1))}const a="(/(.*))?$",c=new RegExp("^gs://"+r+a,"i"),d={bucket:1,path:3};function u($){$.path_=decodeURIComponent($.path)}const v="v[A-Za-z0-9_]+",x=s.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",p=new RegExp(`^https?://${x}/${v}/b/${r}/o${f}`,"i"),T={bucket:1,path:3},U=s===ft?"(?:storage.googleapis.com|storage.cloud.google.com)":s,m="([^?#]*)",_=new RegExp(`^https?://${U}/${r}/${m}`,"i"),C=[{regex:c,indices:d,postModify:o},{regex:p,indices:T,postModify:u},{regex:_,indices:{bucket:1,path:2},postModify:u}];for(let $=0;$<C.length;$++){const q=C[$],W=q.regex.exec(t);if(W){const k=W[q.indices.bucket];let E=W[q.indices.path];E||(E=""),n=new z(k,E),q.postModify(n);break}}if(n==null)throw is(t);return n}}class fs{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function gs(e,t,s){let n=1,r=null,o=null,a=!1,c=0;function d(){return c===2}let u=!1;function v(...m){u||(u=!0,t.apply(null,m))}function x(m){r=setTimeout(()=>{r=null,e(p,d())},m)}function f(){o&&clearTimeout(o)}function p(m,..._){if(u){f();return}if(m){f(),v.call(null,m,..._);return}if(d()||a){f(),v.call(null,m,..._);return}n<64&&(n*=2);let C;c===1?(c=2,C=0):C=(n+Math.random())*1e3,x(C)}let T=!1;function U(m){T||(T=!0,f(),!u&&(r!==null?(m||(c=2),clearTimeout(r),x(0)):m||(c=1)))}return x(0),o=setTimeout(()=>{a=!0,U(!0)},s),U}function ms(e){e(!1)}/**
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
 */function ps(e){return e!==void 0}function vs(e){return typeof e=="object"&&!Array.isArray(e)}function qe(e){return typeof e=="string"||e instanceof String}function st(e){return He()&&e instanceof Blob}function He(){return typeof Blob<"u"}function nt(e,t,s,n){if(n<t)throw je(`Invalid value for '${e}'. Expected ${t} or greater.`);if(n>s)throw je(`Invalid value for '${e}'. Expected ${s} or less.`)}/**
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
 */function ke(e,t,s){let n=t;return s==null&&(n=`https://${t}`),`${s}://${n}/v0${e}`}function pt(e){const t=encodeURIComponent;let s="?";for(const n in e)if(e.hasOwnProperty(n)){const r=t(n)+"="+t(e[n]);s=s+r+"&"}return s=s.slice(0,-1),s}/**
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
 */var ue;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(ue||(ue={}));/**
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
 */class ys{constructor(t,s,n,r,o,a,c,d,u,v,x,f=!0){this.url_=t,this.method_=s,this.headers_=n,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=a,this.callback_=c,this.errorCallback_=d,this.timeout_=u,this.progressCallback_=v,this.connectionFactory_=x,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,T)=>{this.resolve_=p,this.reject_=T,this.start_()})}start_(){const t=(n,r)=>{if(r){n(!1,new ye(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const a=c=>{const d=c.loaded,u=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(d,u)};this.progressCallback_!==null&&o.addUploadProgressListener(a),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(a),this.pendingConnection_=null;const c=o.getErrorCode()===ue.NO_ERROR,d=o.getStatus();if(!c||bs(d,this.additionalRetryCodes_)&&this.retry){const v=o.getErrorCode()===ue.ABORT;n(!1,new ye(!1,null,v));return}const u=this.successCodes_.indexOf(d)!==-1;n(!0,new ye(u,o))})},s=(n,r)=>{const o=this.resolve_,a=this.reject_,c=r.connection;if(r.wasSuccessCode)try{const d=this.callback_(c,c.getResponse());ps(d)?o(d):o()}catch(d){a(d)}else if(c!==null){const d=Fe();d.serverResponse=c.getErrorText(),this.errorCallback_?a(this.errorCallback_(c,d)):a(d)}else if(r.canceled){const d=this.appDelete_?mt():os();a(d)}else{const d=rs();a(d)}};this.canceled_?s(!1,new ye(!1,null,!0)):this.backoffId_=gs(t,s,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&ms(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ye{constructor(t,s,n){this.wasSuccessCode=t,this.connection=s,this.canceled=!!n}}function xs(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function ws(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function _s(e,t){t&&(e["X-Firebase-GMPID"]=t)}function ks(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function Rs(e,t,s,n,r,o,a=!0){const c=pt(e.urlParams),d=e.url+c,u=Object.assign({},e.headers);return _s(u,t),xs(u,s),ws(u,o),ks(u,n),new ys(d,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r,a)}/**
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
 */function Is(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Ts(...e){const t=Is();if(t!==void 0){const s=new t;for(let n=0;n<e.length;n++)s.append(e[n]);return s.getBlob()}else{if(He())return new Blob(e);throw new L(A.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Us(e,t,s){return e.webkitSlice?e.webkitSlice(t,s):e.mozSlice?e.mozSlice(t,s):e.slice?e.slice(t,s):null}/**
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
 */const X={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ee{constructor(t,s){this.data=t,this.contentType=s||null}}function Es(e,t){switch(e){case X.RAW:return new Ee(vt(t));case X.BASE64:case X.BASE64URL:return new Ee(bt(e,t));case X.DATA_URL:return new Ee(Ss(t),Ds(t))}throw Fe()}function vt(e){const t=[];for(let s=0;s<e.length;s++){let n=e.charCodeAt(s);if(n<=127)t.push(n);else if(n<=2047)t.push(192|n>>6,128|n&63);else if((n&64512)===55296)if(!(s<e.length-1&&(e.charCodeAt(s+1)&64512)===56320))t.push(239,191,189);else{const o=n,a=e.charCodeAt(++s);n=65536|(o&1023)<<10|a&1023,t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|n&63)}else(n&64512)===56320?t.push(239,191,189):t.push(224|n>>12,128|n>>6&63,128|n&63)}return new Uint8Array(t)}function $s(e){let t;try{t=decodeURIComponent(e)}catch{throw pe(X.DATA_URL,"Malformed data URL.")}return vt(t)}function bt(e,t){switch(e){case X.BASE64:{const r=t.indexOf("-")!==-1,o=t.indexOf("_")!==-1;if(r||o)throw pe(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case X.BASE64URL:{const r=t.indexOf("+")!==-1,o=t.indexOf("/")!==-1;if(r||o)throw pe(e,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let s;try{s=Cs(t)}catch(r){throw r.message.includes("polyfill")?r:pe(e,"Invalid character found")}const n=new Uint8Array(s.length);for(let r=0;r<s.length;r++)n[r]=s.charCodeAt(r);return n}class yt{constructor(t){this.base64=!1,this.contentType=null;const s=t.match(/^data:([^,]+)?,/);if(s===null)throw pe(X.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=s[1]||null;n!=null&&(this.base64=As(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=t.substring(t.indexOf(",")+1)}}function Ss(e){const t=new yt(e);return t.base64?bt(X.BASE64,t.rest):$s(t.rest)}function Ds(e){return new yt(e).contentType}function As(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class te{constructor(t,s){let n=0,r="";st(t)?(this.data_=t,n=t.size,r=t.type):t instanceof ArrayBuffer?(s?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(s?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,s){if(st(this.data_)){const n=this.data_,r=Us(n,t,s);return r===null?null:new te(r)}else{const n=new Uint8Array(this.data_.buffer,t,s-t);return new te(n,!0)}}static getBlob(...t){if(He()){const s=t.map(n=>n instanceof te?n.data_:n);return new te(Ts.apply(null,s))}else{const s=t.map(a=>qe(a)?Es(X.RAW,a).data:a.data_);let n=0;s.forEach(a=>{n+=a.byteLength});const r=new Uint8Array(n);let o=0;return s.forEach(a=>{for(let c=0;c<a.length;c++)r[o++]=a[c]}),new te(r,!0)}}uploadData(){return this.data_}}/**
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
 */function Ls(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function Os(e,t){const s=t.split("/").filter(n=>n.length>0).join("/");return e.length===0?s:e+"/"+s}function wt(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function Ns(e,t){return t}class j{constructor(t,s,n,r){this.server=t,this.local=s||t,this.writable=!!n,this.xform=r||Ns}}let xe=null;function Ps(e){return!qe(e)||e.length<2?e:wt(e)}function _t(){if(xe)return xe;const e=[];e.push(new j("bucket")),e.push(new j("generation")),e.push(new j("metageneration")),e.push(new j("name","fullPath",!0));function t(o,a){return Ps(a)}const s=new j("name");s.xform=t,e.push(s);function n(o,a){return a!==void 0?Number(a):a}const r=new j("size");return r.xform=n,e.push(r),e.push(new j("timeCreated")),e.push(new j("updated")),e.push(new j("md5Hash",null,!0)),e.push(new j("cacheControl",null,!0)),e.push(new j("contentDisposition",null,!0)),e.push(new j("contentEncoding",null,!0)),e.push(new j("contentLanguage",null,!0)),e.push(new j("contentType",null,!0)),e.push(new j("metadata","customMetadata",!0)),xe=e,xe}function Ms(e,t){function s(){const n=e.bucket,r=e.fullPath,o=new z(n,r);return t._makeStorageReference(o)}Object.defineProperty(e,"ref",{get:s})}function js(e,t,s){const n={};n.type="file";const r=s.length;for(let o=0;o<r;o++){const a=s[o];n[a.local]=a.xform(n,t[a.server])}return Ms(n,e),n}function kt(e,t,s){const n=xt(t);return n===null?null:js(e,n,s)}function Bs(e,t,s,n){const r=xt(t);if(r===null||!qe(r.downloadTokens))return null;const o=r.downloadTokens;if(o.length===0)return null;const a=encodeURIComponent;return o.split(",").map(u=>{const v=e.bucket,x=e.fullPath,f="/b/"+a(v)+"/o/"+a(x),p=ke(f,s,n),T=pt({alt:"media",token:u});return p+T})[0]}function Fs(e,t){const s={},n=t.length;for(let r=0;r<n;r++){const o=t[r];o.writable&&(s[o.server]=e[o.local])}return JSON.stringify(s)}class ze{constructor(t,s,n,r){this.url=t,this.method=s,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Rt(e){if(!e)throw Fe()}function qs(e,t){function s(n,r){const o=kt(e,r,t);return Rt(o!==null),o}return s}function Hs(e,t){function s(n,r){const o=kt(e,r,t);return Rt(o!==null),Bs(o,r,e.host,e._protocol)}return s}function It(e){function t(s,n){let r;return s.getStatus()===401?s.getErrorText().includes("Firebase App Check token is invalid")?r=ss():r=ts():s.getStatus()===402?r=es(e.bucket):s.getStatus()===403?r=ns(e.path):r=n,r.status=s.getStatus(),r.serverResponse=n.serverResponse,r}return t}function Tt(e){const t=It(e);function s(n,r){let o=t(n,r);return n.getStatus()===404&&(o=Qt(e.path)),o.serverResponse=r.serverResponse,o}return s}function zs(e,t,s){const n=t.fullServerUrl(),r=ke(n,e.host,e._protocol),o="GET",a=e.maxOperationRetryTime,c=new ze(r,o,Hs(e,s),a);return c.errorHandler=Tt(t),c}function Vs(e,t){const s=t.fullServerUrl(),n=ke(s,e.host,e._protocol),r="DELETE",o=e.maxOperationRetryTime;function a(d,u){}const c=new ze(n,r,a,o);return c.successCodes=[200,204],c.errorHandler=Tt(t),c}function Ws(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function Ks(e,t,s){const n=Object.assign({},s);return n.fullPath=e.path,n.size=t.size(),n.contentType||(n.contentType=Ws(null,t)),n}function Xs(e,t,s,n,r){const o=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function c(){let C="";for(let $=0;$<2;$++)C=C+Math.random().toString().slice(2);return C}const d=c();a["Content-Type"]="multipart/related; boundary="+d;const u=Ks(t,n,r),v=Fs(u,s),x="--"+d+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+v+`\r
--`+d+`\r
Content-Type: `+u.contentType+`\r
\r
`,f=`\r
--`+d+"--",p=te.getBlob(x,n,f);if(p===null)throw us();const T={name:u.fullPath},U=ke(o,e.host,e._protocol),m="POST",_=e.maxUploadRetryTime,B=new ze(U,m,qs(e,s),_);return B.urlParams=T,B.headers=a,B.body=p.uploadData(),B.errorHandler=It(t),B}class Gs{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ue.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ue.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ue.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,s,n,r){if(this.sent_)throw ge("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(s,t,!0),r!==void 0)for(const o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return n!==void 0?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ge("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ge("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ge("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ge("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class Ys extends Gs{initXhr(){this.xhr_.responseType="text"}}function Ve(){return new Ys}/**
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
 */class ce{constructor(t,s){this._service=t,s instanceof z?this._location=s:this._location=z.makeFromUrl(s,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,s){return new ce(t,s)}get root(){const t=new z(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return wt(this._location.path)}get storage(){return this._service}get parent(){const t=Ls(this._location.path);if(t===null)return null;const s=new z(this._location.bucket,t);return new ce(this._service,s)}_throwIfRoot(t){if(this._location.path==="")throw hs(t)}}function Js(e,t,s){e._throwIfRoot("uploadBytes");const n=Xs(e.storage,e._location,_t(),new te(t,!0),s);return e.storage.makeRequestWithTokens(n,Ve).then(r=>({metadata:r,ref:e}))}function Zs(e){e._throwIfRoot("getDownloadURL");const t=zs(e.storage,e._location,_t());return e.storage.makeRequestWithTokens(t,Ve).then(s=>{if(s===null)throw cs();return s})}function Qs(e){e._throwIfRoot("deleteObject");const t=Vs(e.storage,e._location);return e.storage.makeRequestWithTokens(t,Ve)}function en(e,t){const s=Os(e._location.path,t),n=new z(e._location.bucket,s);return new ce(e.storage,n)}/**
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
 */function tn(e){return/^[A-Za-z]+:\/\//.test(e)}function sn(e,t){return new ce(e,t)}function Ut(e,t){if(e instanceof We){const s=e;if(s._bucket==null)throw ls();const n=new ce(s,s._bucket);return t!=null?Ut(n,t):n}else return t!==void 0?en(e,t):e}function nn(e,t){if(t&&tn(t)){if(e instanceof We)return sn(e,t);throw je("To use ref(service, url), the first argument must be a Storage instance.")}else return Ut(e,t)}function rt(e,t){const s=t==null?void 0:t[gt];return s==null?null:z.makeFromBucketSpec(s,e)}function rn(e,t,s,n={}){e.host=`${t}:${s}`,e._protocol="http";const{mockUserToken:r}=n;r&&(e._overrideAuthToken=typeof r=="string"?r:jt(r,e.app.options.projectId))}class We{constructor(t,s,n,r,o){this.app=t,this._authProvider=s,this._appCheckProvider=n,this._url=r,this._firebaseVersion=o,this._bucket=null,this._host=ft,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Jt,this._maxUploadRetryTime=Zt,this._requests=new Set,r!=null?this._bucket=z.makeFromBucketSpec(r,this._host):this._bucket=rt(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=z.makeFromBucketSpec(this._url,t):this._bucket=rt(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){nt("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){nt("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const s=await t.getToken();if(s!==null)return s.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new ce(this,t)}_makeRequest(t,s,n,r,o=!0){if(this._deleted)return new fs(mt());{const a=Rs(t,this._appId,n,r,s,this._firebaseVersion,o);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(t,s){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,s,n,r).getPromise()}}const ot="@firebase/storage",it="0.12.5";/**
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
 */const Ct="storage";function at(e,t,s){return e=ve(e),Js(e,t,s)}function lt(e){return e=ve(e),Zs(e)}function oo(e){return e=ve(e),Qs(e)}function ut(e,t){return e=ve(e),nn(e,t)}function on(e=Pt(),t){e=ve(e);const n=Ot(e,Ct).getImmediate({identifier:t}),r=Nt("storage");return r&&an(n,...r),n}function an(e,t,s,n={}){rn(e,t,s,n)}function ln(e,{instanceIdentifier:t}){const s=e.getProvider("app").getImmediate(),n=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return new We(s,n,r,t,Mt)}function un(){At(new Lt(Ct,ln,"PUBLIC").setMultipleInstances(!0)),Xe(ot,it,""),Xe(ot,it,"esm2017")}un();function cn(){const e=dt(),t=h(e.currentUser),{uid:s,photoURL:n,displayName:r}=t.value,o=s,a=h([]),d=JSON.parse(localStorage.getItem("users")).filter(u=>u.id!==o);return a.value=d,{storedUsers:a}}function io(){const e=dt(),t=h(e.currentUser),{firestore:s}=Vt(),n=on(),r=t.value.uid,o=t.value.photoURL,a=t.value.displayName;Ft();const{storedUsers:c}=cn(),d=h(""),u=h([]),v=h(!1),x=h(null);let f=h({}),p=h(!1);const T=(g,R)=>[g,R].sort().join("_"),U=(g,R)=>{document.getElementById(g).showModal(),f.value=R,Ke(),console.log(u)},m=h(null),_=h(null),B=g=>{m.value=g},C=g=>{_.value=g},$=async()=>{if(d.value.trim()===""&&!m.value&&!_.value){console.warn("Please enter a message or select a file");return}p.value=!0;const g=T(r,f.value.userId),R={id:`temp_${Date.now()}`,senderId:r,recipientId:f.value.userId,message:d.value,imageUrl:_.value?URL.createObjectURL(_.value):null,imageName:_.value?_.value.name:null,fileUrl:m.value?URL.createObjectURL(m.value):null,fileName:m.value?m.value.name:null,isSending:!0,timestamp:new Date};u.value.push(R),Ie();let S=null,V=null;try{if(m.value){const O=`chats/${g}/${Date.now()}_${m.value.name}`,N=ut(n,O),K=await at(N,m.value);S=await lt(K.ref)}if(_.value){const O=`chats/${g}/${Date.now()}_${_.value.name}`,N=ut(n,O),K=await at(N,_.value);V=await lt(K.ref)}await Kt(Ze(s,`chats/${g}`),{participants:{[r]:!0,[f.value.userId]:!0},lastMessage:d.value||(S||V?"File attachment":""),sender:r,timestamp:Qe()},{merge:!0});const Y=await Xt(et(s,`chats/${g}/messages`),{senderId:r,recipientId:f.value.userId,message:d.value,imageUrl:V,imageName:_.value?_.value.name:null,fileUrl:S,fileName:m.value?m.value.name:null,timestamp:Qe()});u.value=u.value.map(O=>O.id===R.id?{...O,id:Y.id,isSending:!1,imageUrl:V,fileUrl:S}:O),localStorage.setItem(`messages_${g}`,JSON.stringify(u.value)),p.value=!1,d.value="",m.value=null,_.value=null}catch(Y){p.value=!1,console.error("Error sending message:",Y),u.value=u.value.map(O=>O.id===R.id?{...O,isSending:!1,error:"Failed to send message."}:O)}},q=h({}),W=h({}),k=h([]),E=h({}),G=h(0),M=Ge(()=>c.value.filter(g=>q.value[T(r,g.id)]).sort((g,R)=>{const S=T(r,g.id),V=T(r,R.id);return E.value[V]-E.value[S]})),be=()=>{k.value.forEach(R=>R()),k.value=[];const g=new Set;c.value.forEach(R=>{const S=T(r,R.id),V=Ze(s,"chats",S),Y=tt(V,O=>{if(O.exists()){const N=O.data(),K=N.lastMessage||"",ne=N.sender||"",Te=N.timestamp||"";q.value[S]=K,W.value[S]=ne,E.value[S]=Te,K&&ne!==r?g.has(ne)||(g.add(ne),G.value=g.size):g.has(ne)&&(g.delete(ne),G.value=g.size)}else{q.value[S]="",W.value[S]="",E.value[S]="";const N=W.value[S];g.has(N)&&(g.delete(N),G.value=g.size)}},O=>{console.error("Error listening to chat updates:",O)});k.value.push(Y)})};Pe(()=>{be()}),Ye(()=>{k.value.forEach(g=>g())});const Re=Ge(()=>u.value.filter(g=>g.senderId===r&&g.recipientId===f.value.userId||g.senderId===f.value.userId&&g.recipientId===r)),Ke=()=>{const g=T(r,f.value.userId),R=localStorage.getItem(`messages_${g}`);R&&(u.value=JSON.parse(R),Ie()),v.value=!0;const S=Gt(et(s,`chats/${g}/messages`),Yt("timestamp","asc")),V=tt(S,Y=>{const O=Y.docs.map(N=>({id:N.id,...N.data()}));u.value=O,v.value=!1,localStorage.setItem(`messages_${g}`,JSON.stringify(O)),Ie()});Ye(()=>{V()})};Pe(()=>{Ke()});const Ie=()=>{ht(()=>{x.value&&(x.value.scrollTop=x.value.scrollHeight)})};return{Time:g=>{if(g){const R=new Date(g.seconds*1e3),S=new Date,V=R.getHours()%12||12,Y=("0"+R.getMinutes()).slice(-2),O=R.getHours()<12?"am":"pm",N=`${V}:${Y} ${O}`;if(R.toDateString()===S.toDateString())return N;const K=new Date(S);if(K.setDate(K.getDate()-1),R.toDateString()===K.toDateString())return`Yesterday ${N}`;const Te=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][R.getDay()],Ue=new Date(S);if(Ue.setDate(Ue.getDate()-7),R>Ue)return`${Te} ${N}`;const St=R.toLocaleString("default",{month:"short"}),Dt=R.getDate();return`${St} ${Dt} ${N}`}return""},getChatId:T,yourChat:U,sendMessage:$,userId:r,newMessage:d,messages:u,isLoading:v,isSendMessageLoading:p,filteredMessages:Re,selectedUser:f,timestamp:E,userPhoto:o,userName:a,filteredUsers:M,latestMessages:q,isSender:W,storedUsers:c,newMessageArray:G,file:m,imageFile:_,handleImageUpdate:C,handleFileUpdate:B}}const dn={class:"w-10 rounded-full"},hn={key:0,class:"size-10 bg-gray-500/20 border border-gray-500/20 rounded-full"},fn=["src"],gn={class:""},mn={class:"text-sm font-medium capitalize"},pn={class:"flex gap-2 justify-start items-center"},vn={key:0,class:"text-xs"},bn={class:"text-[10px]"},ao={__name:"usersChatHeads",props:{yourChat:{type:Function,required:!0},formatTime:{type:Function,required:!0},user:{type:Object,required:!0},latestMessages:{type:Object,required:!0},getChatId:{type:Function,required:!0},userId:{type:[String,Number],required:!0},isSender:{type:Object,required:!0},timestamp:{type:Object,required:!0}},setup(e){const t=h(!0),s=()=>{console.log("loading is done!"),t.value=!1},n=()=>{t.value=!1};return(r,o)=>(b(),y("div",{onClick:o[0]||(o[0]=a=>e.yourChat(e.user)),class:"flex justify-start items-center gap-2 cursor-pointer hover:bg-gray-500/20 transition p-1 rounded-md"},[i("div",{class:se(["avatar",e.user.status==="online"?"online":"offline"])},[i("div",dn,[t.value?(b(),y("div",hn)):I("",!0),i("img",{src:e.user.userPhotoURL,loading:"lazy",class:"bg-gray-500/20 border border-gray-500/20 rounded-full",onLoad:s,onError:n},null,40,fn)])],2),i("div",gn,[i("h1",mn,P(e.user.userName),1),i("div",pn,[e.latestMessages[e.getChatId(e.userId,e.user.id)]?(b(),y("span",{key:0,class:se(["text-xs px-2 py-0.5 truncate max-w-40 bg-gray-500/20 rounded-full",e.isSender[e.getChatId(e.userId,e.user.id)]===e.userId?"":"text-blue-500"])},[e.isSender[e.getChatId(e.userId,e.user.id)]===e.userId?(b(),y("span",vn," You: ")):I("",!0),le(" "+P(e.latestMessages[e.getChatId(e.userId,e.user.id)]),1)],2)):I("",!0),i("span",bn,P(e.formatTime(e.timestamp[e.getChatId(e.userId,e.user.id)])),1)])])]))}},yn={},xn={class:"my-3"},wn=qt('<div class="flex flex-col gap-4 w-32 ml-2"><div class="flex gap-2 items-center"><div class="skeleton w-10 h-10 rounded-full shrink-0"></div><div class="flex flex-col gap-2"><div class="skeleton h-2 w-10"></div><div class="skeleton h-2 w-20"></div></div></div></div><div class="flex justify-end mr-5"><div class="flex flex-col gap-4 w-32"><div class="flex gap-2 items-center"><div class="flex flex-col gap-2"><div class="skeleton h-2 w-20"></div><div class="skeleton h-2 w-10"></div></div><div class="skeleton w-10 h-10 rounded-full shrink-0"></div></div></div></div>',2),_n=[wn];function kn(e,t){return b(),y("div",xn,_n)}const Rn=Wt(yn,[["render",kn]]),we=h(""),Z=h(null),Q=h(null),$e=h(null),Se=h(!1),re=h(!1),ct=h(""),De=h(""),oe=h(!0),Ae=h(!1),In=h(6e4);let Le=null,me=null,D=null,de=null;const he=h("0:00.0");let Oe=null,H=null;const ee=h(0),Ne=h(!1);let Tn=h(0),_e=h(null);const F=h({id:null,isClick:!1});function Et(e){const t=f=>{Se.value=!1;const p=f.target.files[0];p&&(Z.value=p,we.value=Z.value.name,console.log(Z.value),e("update:selectedFile",Z.value))},s=f=>{Se.value=!0;const p=f.target.files[0];p&&(Q.value=p,$e.value=URL.createObjectURL(p),we.value=Q.value.name,console.log(Q.value),e("update:selectedImage",Q.value))},n=()=>{(Z.value||Q.value)&&(we.value="",$e.value=null,Q.value=null,Z.value=null),console.log(Z.value,Q.value)},r=(f,p)=>{De.value=p,_e.value=f,console.log(f),F.value.id===f?(F.value.id=null,F.value.isClick=!1,console.log(F.value.id),console.log(F.value.isClick)):(F.value.isClick=!0,F.value.id=f)},o=h(!1),a=h(!1),c=h(!1);return{selectedChatId:_e,showDetailsId:F,isShowDeleteConfirmation:o,isShowCopied:a,isShowDeleted:c,isImage:Se,deleteChat:()=>{o.value=!0,F.value.isClick=!1,console.log(_e.value)},selectedFile:Z,selectedImage:Q,imageURL:$e,fileName:we,closeAttachements:n,cancelDeleteConfirmation:()=>{o.value=!1,F.value.id=null,F.value.isClick=!1},deleteConfirmation:()=>{console.log("delete confirmation id",_e.value),c.value=!0,setTimeout(()=>{c.value=!1},2e3),F.value.isClick=!1,o.value=!1},copyChat:()=>{navigator.clipboard.writeText(De).then(()=>{a.value=!0,console.log(De.value),setTimeout(()=>{a.value=!1},2e3)}).catch(f=>{console.error("Failed to copy text: ",f)}),F.value.id=null,F.value.isClick=!1,console.log("copied")},Icon:J,showInfo:r,handleFileChange:t,handleImageChange:s,emit:e}}function $t(){const e=u=>{const v=Math.floor(u/1e3),x=Math.floor(v/60).toString().padStart(1,"0"),f=(v%60).toString().padStart(2,"0"),p=(u%1e3).toString().padStart(3,"0").slice(0,1);return`${x}:${f}:${p}`},t=()=>{if(re.value){const v=Date.now()-Oe;he.value=e(v),ee.value=v/In.value*100}},s=async()=>{console.log("recording start..."),t(),ee.value=0,Tn.value=0,clearInterval(H),oe.value=!0;try{const u=await navigator.mediaDevices.getUserMedia({audio:!0});de=new MediaRecorder(u),de.ondataavailable=v=>{Le=v.data,me=URL.createObjectURL(Le),D=new Audio(me),D.addEventListener("timeupdate",n),D.addEventListener("ended",r)},de.start(),re.value=!0,Oe=Date.now(),D&&D.pause(),H=setInterval(()=>{t(),ee.value>=100&&o()},100)}catch(u){ct.value="Recording is not supported or failed.",Ne.value=!0,setTimeout(()=>{Ne.value=!1},2e3),console.error(u)}},n=()=>{if(D&&!re.value){const u=D.currentTime/D.duration*100;ee.value=u,he.value=e(D.currentTime*1e3)}},r=()=>{oe.value=!0,ee.value=100,D&&(he.value=e(D.duration*1e3))},o=()=>{if(console.log("recording stopped..."),de&&de.state!=="inactive"){de.stop(),re.value=!1,oe.value=!0,H&&(clearInterval(H),H=null);const u=Date.now()-Oe;he.value=e(u)}};return{startRecording:s,pauseRecording:()=>{console.log("paused"),re.value?o():D&&(D.pause(),oe.value=!0,H&&(clearInterval(H),H=null)),Ae.value=!0},deleteRecording:()=>{console.log("Recording deleted..."),o(),re.value=!1,Ae.value=!1,D&&(D.pause(),D.currentTime=0,D.removeEventListener("timeupdate",n),D.removeEventListener("ended",r)),H&&(clearInterval(H),H=null),me&&(URL.revokeObjectURL(me),Le=null,me=null,D=null,oe.value=!0,ee.value=0,he.value="0:00.0")},stopRecording:o,isShowRecordingModal:Ae,isPause:oe,playRecord:()=>{console.log("playing"),D&&(ee.value=0,D.currentTime=0,D.play(),oe.value=!1,H||(H=setInterval(()=>{n()},100)))},recordingProgress:ee,elapsedTime:he,isRecording:re,Icon:J,recordingError:ct,isRecordingError:Ne}}const Un={key:0,class:"backdrop-blur-2xl flex mb-1 justify-start items-center gap-1 bg-red-400/10 border py-1 px-2 text-sm font-medium transition border-red-500/20 rounded-full"},Cn={key:0,class:"flex mb-1 justify-center items-center gap-2"},En=i("span",{class:"backdrop-blur-2xl flex justify-center items-center gap-2 bg-green-400/10 border px-2 text-sm font-medium py-1 transition border-green-500/20 rounded-full"},[i("span",{class:"loading loading-ring text-green-500 loading-md"}),i("span",null,"Recording..")],-1),$n={key:0,class:"fixed bottom-0 backdrop-blur-2xl py-5 z-50 inset-x-0"},Sn={class:"flex justify-center items-center mb-4 gap-1 mx-2"},Dn={class:"backdrop-blur-2xl flex justify-start w-full items-center gap-2 bg-gray-400/20 border px-2 text-sm font-medium py-2 transition border-gray-500/20 rounded-l-xl"},An={class:"flex justify-start w-full items-center"},Ln={class:"w-full border flex justify-center item-center p-1 border-gray-500/20 rounded-2xl"},On=["value"],Nn={class:"max-w-16 tabular-nums font-mono text-[10px]"},Pn={class:"px-2 flex justify-between items-center gap-1"},Mn={class:"flex justify-start items-center gap-1"},jn={class:"bg-blue-500 cursor-not-allowed hover:bg-blue-600 transition text-gray-100 rounded-full px-4 py-2 flex justify-start items-center gap-2"},Bn=i("span",{class:"text-sm font-meduim"},"Send",-1),Fn={__name:"recordingModal",setup(e){const{startRecording:t,pauseRecording:s,deleteRecording:n,stopRecording:r,isShowRecordingModal:o,isPause:a,playRecord:c,recordingProgress:d,elapsedTime:u,isRecording:v,Icon:x,recordingError:f,isRecordingError:p}=$t();return(T,U)=>(b(),y(Be,null,[w(ae,null,{default:ie(()=>[l(p)?(b(),y("span",Un,[w(l(x),{icon:"material-symbols:error",class:"text-red-500",width:"20",height:"20"}),le(" "+P(l(f)),1)])):I("",!0)]),_:1}),w(ae,null,{default:ie(()=>[l(v)?(b(),y("div",Cn,[En,i("button",{onClick:U[0]||(U[0]=m=>l(s)()),class:"backdrop-blur-2xl flex justify-center items-center gap-1 bg-red-400/10 border py-1 px-2 text-sm font-medium transition border-red-500/20 rounded-full"},[w(l(x),{icon:"ic:round-pause",width:"20",height:"20",class:"text-red-500"}),le(" Pause ")]),i("button",{onClick:U[1]||(U[1]=m=>l(n)()),class:"backdrop-blur-2xl flex justify-center items-center gap-1 py-1 px-2 text-sm font-medium transition rounded-full"},[w(l(x),{icon:"mingcute:delete-fill",width:"20",height:"20",class:"text-red-500"})])])):I("",!0)]),_:1}),l(o)?(b(),y("div",$n,[i("div",Sn,[i("div",Dn,[i("div",An,[i("button",{onClick:U[2]||(U[2]=m=>l(a)?l(c)():l(s)())},[w(l(x),{icon:l(a)?"iconoir:play-solid":"ic:round-pause",width:"20",height:"20"},null,8,["icon"])]),i("div",Ln,[i("progress",{class:"progress progress-primary w-full mx-1",value:l(d),max:"100"},null,8,On)])]),i("div",Nn,P(l(u)),1)]),i("button",{class:"px-2 bg-gray-400/20 border hover:text-green-500 transition border-gray-500/20 rounded-r-xl py-2",onClick:U[3]||(U[3]=m=>l(v)?l(r)():l(t)())},[w(l(x),{icon:l(v)?"ic:round-stop":"fluent:mic-pulse-48-filled",width:"20",height:"20",class:se(l(v)?"text-red-500":"")},null,8,["icon","class"])])]),i("div",Pn,[i("div",Mn,[i("button",{onClick:U[4]||(U[4]=m=>l(n)()),class:"backdrop-blur-2xl flex justify-center items-center gap-1 py-1 hover:bg-red-500/10 px-2 text-sm font-medium transition rounded-full"},[w(l(x),{icon:"mingcute:delete-fill",width:"20",height:"20",class:"text-red-500"})]),i("button",{onClick:U[5]||(U[5]=m=>l(t)()),class:"backdrop-blur-2xl flex justify-center items-center hover:bg-green-500/10 gap-1 py-1 px-2 text-sm font-medium transition rounded-full"},[w(l(x),{icon:"ion:reload",width:"20",height:"20",class:"text-green-500"})])]),i("div",null,[i("button",jn,[Bn,w(l(x),{icon:"bxs:send",class:"text-xl text-gray-200"})])])])])):I("",!0)],64))}},qn={class:"chat-image avatar"},Hn={key:0,class:"size-5 rounded-full"},zn=["src"],Vn={key:0,class:"chat-header text-xs font-medium"},Wn={key:2,class:"w-52"},Kn={class:""},Xn={key:0,class:"w-52 h-32 bg-gray-500/20 border border-gray-500/20 rounded-2xl"},Gn=["src"],Yn={key:3,class:""},Jn={key:0,class:"w-52 h-32 bg-gray-500/20 border border-gray-500/20 rounded-2xl"},Zn=["src"],Qn={key:4,class:"text-sm rounded-2xl backdrop-blur-2xl max-w-52 bg-gray-500/20 font-medium border border-gray-500/20 px-4 py-3"},er=["href"],tr={key:5,class:"max-w-52"},sr={class:"text-sm rounded-b-2xl truncate backdrop-blur-2xl bg-gray-500/20 font-medium border border-gray-500/20 px-4 py-3"},nr=["href"],rr={key:6,class:"chat-footer opacity-50 font-semibold text-xs"},or={class:"text-[10px] opacity-80"},ir={key:7,class:"chat-footer opacity-50 font-semibold text-xs"},ar={__name:"messageLayout",props:{showInfo:{type:Function,required:!0},m:{type:Object,required:!0},userId:{type:String,required:!0},selectedUser:{type:Object,required:!0},isImageLoading:{type:Boolean,default:!1},showDetailsId:{type:Object,required:!0},formatTime:{type:Function,required:!0},onLoad:{type:Function,required:!0},onError:{type:Function,required:!0}},setup(e){return(t,s)=>(b(),y("div",{onClick:s[4]||(s[4]=n=>e.showInfo(e.m.id,e.m.message)),class:se(["chat cursor-pointer py-[1px]",e.m.senderId===e.userId?"chat-end":"chat-start"])},[i("div",qn,[e.userId!==e.m.senderId?(b(),y("div",Hn,[i("img",{src:e.selectedUser.userPhotoURL},null,8,zn)])):I("",!0)]),e.showDetailsId.isClick&&e.showDetailsId.id===e.m.id?(b(),y("div",Vn,P(e.m.senderId===e.userId?"":e.selectedUser.userName),1)):I("",!0),e.m.message&&e.m.imageUrl===null&&e.m.fileUrl===null?(b(),y("div",{key:1,class:se(["rounded-2xl whitespace-pre-line py-2 px-4 text-sm max-w-52",e.userId===e.m.senderId?"chat-bubble-primary":"bg-gray-400/20 rounded-2xl"])},P(e.m.message),3)):I("",!0),e.m.message&&e.m.imageUrl?(b(),y("div",Wn,[i("div",{class:se(["rounded-t-2xl whitespace-pre-line py-2 px-4 text-sm",e.userId===e.m.senderId?"chat-bubble-primary":"border border-gray-500/20"])},P(e.m.message),3),i("div",Kn,[e.isImageLoading?(b(),y("div",Xn)):I("",!0),e.m.imageUrl?(b(),y("img",{key:1,src:e.m.imageUrl,loading:"lazy",alt:"",class:"h-auto w-52 object-cover border bg-gray-500/20 border-gray-500/20 rounded-b-2xl",onLoad:s[0]||(s[0]=(...n)=>e.onLoad&&e.onLoad(...n)),onError:s[1]||(s[1]=(...n)=>e.onError&&e.onError(...n))},null,40,Gn)):I("",!0)])])):I("",!0),e.m.imageUrl&&e.m.message===""?(b(),y("div",Yn,[e.isImageLoading?(b(),y("div",Jn)):I("",!0),i("img",{src:e.m.imageUrl,loading:"lazy",alt:"",onLoad:s[2]||(s[2]=(...n)=>e.onLoad&&e.onLoad(...n)),onError:s[3]||(s[3]=(...n)=>e.onError&&e.onError(...n)),class:"h-auto w-52 object-cover bg-gray-500/20 border border-gray-500/20 rounded-2xl"},null,40,Zn)])):I("",!0),e.m.fileUrl&&e.m.message===""?(b(),y("div",Qn,[i("a",{href:e.m.fileUrl,download:"",class:"flex justify-start overflow-hidden items-center gap-2"},[w(l(J),{icon:"simple-icons:googledocs",width:"16",height:"16"}),le(P(e.m.fileName),1)],8,er)])):I("",!0),e.m.message&&e.m.fileUrl?(b(),y("div",tr,[i("div",{class:se(["rounded-t-2xl whitespace-pre-line py-2 px-4 text-sm",e.userId===e.m.senderId?"chat-bubble-primary":"border border-gray-500/20"])},P(e.m.message),3),i("div",sr,[i("a",{href:e.m.fileUrl,download:"",class:"flex justify-start items-center gap-2"},[w(l(J),{icon:"simple-icons:googledocs",width:"16",height:"16"}),le(P(e.m.fileName),1)],8,nr)])])):I("",!0),e.showDetailsId.isClick&&e.showDetailsId.id===e.m.id&&!e.m.isSending?(b(),y("div",rr,[le(P(e.m.isSending?"Sending...":"Delivered")+" ",1),i("time",or,P(e.formatTime(e.m.timestamp)),1)])):I("",!0),e.m.isSending?(b(),y("div",ir,P(e.m.isSending?"Sending...":""),1)):I("",!0)],2))}},lr={key:0,class:"flex mb-1 justify-center items-center"},ur=i("span",{class:"backdrop-blur-2xl flex justify-center items-center gap-4 bg-green-400/20 border px-4 text-sm font-medium py-1 transition border-green-500/20 text-green-500 rounded-full"},[i("p",{class:"text-xs"},"Copied!")],-1),cr=[ur],dr={key:0,class:"flex mb-1 justify-center items-center"},hr=i("span",{class:"backdrop-blur-2xl flex justify-center items-center gap-4 bg-red-400/20 border px-4 text-sm font-medium py-1 transition border-red-500/20 text-red-500 rounded-full"},[i("p",{class:"text-xs"},"Operation failed! (in dev mode)")],-1),fr=[hr],gr={key:0,class:"flex justify-center items-center"},mr={class:"backdrop-blur-2xl mb-1 flex justify-center items-center gap-4 bg-gray-400/20 border px-8 text-sm font-medium py-2 transition border-gray-500/20 rounded-md"},pr={class:"grid place-items-center cursor-pointer transition"},vr=i("p",{class:"text-xs"},"Are you sure to delete this message?",-1),br={class:"flex justify-start items-center gap-4 mt-2"},yr={key:0,class:"fixed bottom-0 backdrop-blur-2xl py-4 rounded-t-2xl z-50 inset-x-0"},xr={class:"flex justify-center items-center"},wr={class:"backdrop-blur-2xl flex justify-center items-center gap-4 bg-gray-400/20 border px-8 text-sm font-medium py-2 transition border-gray-500/20 rounded-full"},_r=i("p",{class:"text-xs"},"Copy",-1),kr=i("p",{class:"text-xs"},"Delete",-1),Rr={key:0,class:"ml-1 flex justify-start mb-1 items-end gap-1 text-xs"},Ir={key:0},Tr=["src"],Ur={class:"flex justify-start items-center gap-1"},Cr={class:"backdrop-blur-2xl flex bg-gray-400/20 justify-start items-center gap-2 px-2 py-1 border border-gray-500/20 rounded-xl"},Er={class:"truncate max-w-52"},$r={__name:"messageAttachments",props:{isSendMessageLoading:{type:Boolean,default:null}},setup(e){const t=e,{selectedChatId:s,showDetailsId:n,isShowDeleteConfirmation:r,isShowCopied:o,isShowDeleted:a,isImage:c,deleteChat:d,selectedFile:u,selectedImage:v,imageURL:x,fileName:f,closeAttachements:p,cancelDeleteConfirmation:T,deleteConfirmation:U,copyChat:m,Icon:_}=Et();return Me(()=>t.isSendMessageLoading,B=>{B||(v.value=null,u.value=null)}),(B,C)=>(b(),y(Be,null,[w(ae,null,{default:ie(()=>[l(o)?(b(),y("div",lr,cr)):I("",!0)]),_:1}),w(ae,null,{default:ie(()=>[l(a)?(b(),y("div",dr,fr)):I("",!0)]),_:1}),w(ae,null,{default:ie(()=>[l(r)?(b(),y("div",gr,[i("span",mr,[i("div",pr,[vr,i("div",br,[i("button",{onClick:C[0]||(C[0]=fe($=>l(T)(),["stop"])),class:"px-2 py-1 rounded-md border border-gray-400/50"}," Cancel "),i("button",{onClick:C[1]||(C[1]=fe($=>l(U)(),["stop"])),class:"px-2 py-1 rounded-md text-gray-300 border border-red-500/20 bg-red-500"}," Delete ")])])])])):I("",!0)]),_:1}),w(ae,null,{default:ie(()=>[l(s)===l(n).id&&l(n).isClick?(b(),y("div",yr,[i("div",xr,[i("span",wr,[i("div",{onClick:C[2]||(C[2]=$=>l(m)()),class:"grid place-items-center hover:text-green-500 cursor-pointer transition"},[w(l(_),{icon:"solar:copy-linear",width:"20",height:"20"}),_r]),i("div",{onClick:C[3]||(C[3]=$=>l(d)()),class:"grid place-items-center hover:text-red-500 cursor-pointer transition"},[w(l(_),{icon:"fluent:delete-32-regular",width:"20",height:"20"}),kr])])])])):I("",!0)]),_:1}),w(ae,null,{default:ie(()=>[l(u)||l(v)||e.isSendMessageLoading?(b(),y("div",Rr,[l(c)?(b(),y("div",Ir,[i("img",{src:l(x),loading:"lazy",alt:"",class:"size-14 rounded-xl backdrop-blur-2xl object-cover bg-gray-400/20 border border-gray-500/20"},null,8,Tr)])):I("",!0),i("div",Ur,[i("span",Cr,[w(l(_),{icon:"fluent:attach-16-regular",width:"20",height:"20"}),i("span",Er,P(l(f)),1)]),i("button",{onClick:C[4]||(C[4]=$=>l(p)()),class:"backdrop-blur-2xl bg-gray-400/20 border p-0.5 hover:text-red-500 transition border-gray-500/20 rounded-full"},[w(l(_),{icon:"iconamoon:close-light",width:"20",height:"20"})])])])):I("",!0)]),_:1})],64))}},Sr={class:"modal-box overflow-hidden relative p-2 no-scrollbar"},Dr={class:"flex justify-between items-center gap-2"},Ar={class:"flex justify-start items-center gap-2"},Lr={class:"avatar"},Or={class:"w-10 rounded-full"},Nr=["src"],Pr={class:"text-sm font-medium"},Mr={method:"dialog",class:"flex justify-start items-center"},jr={class:"px-0.5"},Br=i("hr",{class:"my-1 border border-gray-400/20"},null,-1),Fr={key:0,class:"my-2 flex justify-center items-center text-sm"},qr={class:"py-1 px-4 bg-primary/10 rounded-full"},Hr={class:"text-primary font-semibold"},zr={key:1},Vr={class:"fixed bottom-0 z-50 inset-x-0"},Wr={class:"flex justify-start items-center rounded-t-2xl gap-2 bg-gray-400/20 backdrop-blur-2xl shadow"},Kr={class:"w-full rounded-t-2xl border border-gray-500/20 shadow"},Xr=["disabled","value"],Gr={class:"flex justify-between items-center m-3 h-5"},Yr={class:"flex justify-center items-center gap-2"},Jr=["disabled"],Zr=["disabled"],Qr=10,eo=24,lo={__name:"ChatModal",props:{userId:{type:String,required:!0},userName:{type:String,required:!0},userPhoto:{type:String,required:!0},messages:{type:Array,required:!0},filteredMessages:{type:Array,default:()=>[]},selectedUser:{type:Object,required:!0},modelValue:{type:String,required:!0},selectedFile:{type:Object,default:null},selectedImage:{type:Object,default:null},isSendMessageLoading:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},formatTime:{type:Function,required:!0},sendMessage:{type:Function,required:!0}},emits:["update:selectedFile","update:modelValue","update:selectedImage"],setup(e,{emit:t}){const s=e,n=t,{startRecording:r}=$t(),{showDetailsId:o,showInfo:a,handleFileChange:c,handleImageChange:d,selectedFile:u,selectedImage:v}=Et(n),x=h(null),f=h(null),p=h(null),T=h(null),U=h(null),m=h(!0),_=()=>{var k;(k=x.value)==null||k.click()},B=()=>{var k;(k=f.value)==null||k.click()},C=()=>{console.log("Image loading completed"),m.value=!1},$=()=>{m.value=!1},q=()=>{const k=T.value;if(k){const E=k.scrollTop,G=k.scrollHeight;k.style.height="auto";const M=k.scrollHeight,be=Qr*eo;M>be?(k.style.height=`${be}px`,k.style.overflowY="auto"):k.style.height=`${M}px`;const Re=E+(M-G);k.scrollTop=Re}},W=k=>{n("update:modelValue",k.target.value),q()};return Me(()=>s.modelValue,k=>{if(k===""){const E=T.value;E&&(E.style.height="auto",E.style.overflowY="hidden")}else q()}),Me(()=>s.filteredMessages,()=>{ht(()=>{p.value&&(p.value.scrollTop=p.value.scrollHeight)})},{deep:!0}),Pe(()=>{q(),p.value&&(p.value.scrollTop=p.value.scrollHeight)}),(k,E)=>{const G=zt("motion-fade");return b(),y("div",Sr,[i("div",Dr,[i("div",Ar,[i("div",Lr,[i("div",Or,[i("img",{src:e.selectedUser.userPhotoURL,loading:"lazy",class:"bg-gray-500/20 border border-gray-500/20 rounded-full"},null,8,Nr)])]),i("div",null,[i("h1",Pr,P(e.selectedUser.userName),1)])]),i("form",Mr,[i("button",jr,[w(l(J),{icon:"carbon:close",width:"20",height:"20"})])])]),Br,i("div",{class:"h-[366px] mb-[86px] rounded-md overflow-auto",ref_key:"messageContainer",ref:p},[e.filteredMessages.length===0&&!e.isLoading?(b(),y("div",Fr,[i("span",qr,[le("No conversation with "),i("span",Hr,P(e.selectedUser.userName),1)])])):I("",!0),(b(!0),y(Be,null,Ht(e.filteredMessages,M=>(b(),y("div",{key:M.id,class:"relative"},[w(ar,{m:M,userId:e.userId,selectedUser:e.selectedUser,isImageLoading:m.value,showDetailsId:l(o),formatTime:e.formatTime,onLoad:C,onError:$,showInfo:l(a)},null,8,["m","userId","selectedUser","isImageLoading","showDetailsId","formatTime","showInfo"])]))),128)),e.isLoading?(b(),y("div",zr,[w(Rn)])):I("",!0)],512),i("div",Vr,[w($r,{isSendMessageLoading:e.isSendMessageLoading},null,8,["isSendMessageLoading"]),w(Fn),i("form",{ref_key:"messageBoxContainer",ref:U},[i("div",Wr,[i("div",Kr,[i("textarea",{type:"text",disabled:e.isSendMessageLoading,cols:"1",rows:"1",required:"",autofocus:"",ref_key:"autoExpand",ref:T,value:e.modelValue,onInput:W,placeholder:"Enter a message",class:"w-full px-3 pt-3 placeholder:text-sm placeholder:text-gray-500 resize-none rounded-t-2xl no-scrollbar bg-transparent outline-none"},null,40,Xr),i("div",Gr,[i("div",Yr,[i("button",{onClick:fe(_,["prevent"]),class:"transition p-1 rounded-full bg-gray-400/20 hover:text-success shadow"},[w(l(J),{icon:"tabler:photo",class:"text-xl"})]),i("input",{type:"file",ref_key:"imageInput",ref:x,accept:"image/*",onChange:E[0]||(E[0]=(...M)=>l(d)&&l(d)(...M)),class:"hidden"},null,544),i("input",{type:"file",ref_key:"fileInput",ref:f,accept:".pdf, .doc, .docx",onChange:E[1]||(E[1]=(...M)=>l(c)&&l(c)(...M)),class:"hidden"},null,544),i("button",{onClick:fe(B,["prevent"]),class:"transition p-1 rounded-full bg-gray-400/20 hover:text-secondary shadow"},[w(l(J),{icon:"tabler:file",class:"text-xl"})])]),i("div",{class:se(["rounded-full p-1.5 flex shadow justify-center transition items-center",e.modelValue||l(u)||l(v)!==null?"bg-blue-500 hover:bg-blue-500/90 ":"bg-primary/10 hover:bg-primary/20"])},[!e.isSendMessageLoading&&e.modelValue||l(u)||l(v)?Je((b(),y("button",{key:0,disabled:e.isSendMessageLoading,onClick:E[2]||(E[2]=fe((...M)=>e.sendMessage&&e.sendMessage(...M),["prevent"]))},[w(l(J),{icon:"bxs:send",class:"text-xl text-gray-200"})],8,Jr)),[[G]]):Je((b(),y("button",{key:1,disabled:e.isSendMessageLoading,onClick:E[3]||(E[3]=fe((...M)=>l(r)&&l(r)(...M),["prevent","stop"]))},[w(l(J),{icon:"ic:round-mic",class:"text-xl text-primary"})],8,Zr)),[[G]])],2)])])])],512)])])}}};export{io as C,ao as _,lt as a,lo as b,oo as d,on as g,ut as r,at as u};
