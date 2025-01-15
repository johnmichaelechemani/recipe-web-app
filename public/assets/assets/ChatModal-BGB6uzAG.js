import{_ as at,C as lt,z as xe,A as te,B as ut,D as ct,E as dt,S as ht,G as ft,H as gt,g as Be,e as _,q as Re,I as he,p as Te,w as fe,J as mt,K as $e,o as E,c as A,a as u,n as Q,t as M,k as V,f as re,d as pt,b as H,u as z,F as _t,j as vt,h as ue,i as ke,y as bt}from"./index-EiKfNBML.js";import{u as yt,_ as wt,I as W}from"./_plugin-vue_export-helper-DJJixD6Z.js";import{s as xt,d as Ie,h as Ue,a as Rt,c as Ee,b as Ae,q as Tt,o as kt}from"./index.esm2017-IsbBChOf.js";/**
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
 */const Fe="firebasestorage.googleapis.com",je="storageBucket",It=2*60*1e3,Ut=10*60*1e3;/**
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
 */class R extends gt{constructor(t,n,s=0){super(ce(t),`Firebase Storage: ${n} (${ce(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,R.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return ce(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var x;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(x||(x={}));function ce(e){return"storage/"+e}function me(){const e="An unknown error occurred, please check the error payload for server response.";return new R(x.UNKNOWN,e)}function Et(e){return new R(x.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function At(e){return new R(x.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Nt(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new R(x.UNAUTHENTICATED,e)}function Ot(){return new R(x.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Ct(e){return new R(x.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function Dt(){return new R(x.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function St(){return new R(x.CANCELED,"User canceled the upload/download.")}function Lt(e){return new R(x.INVALID_URL,"Invalid URL '"+e+"'.")}function Pt(e){return new R(x.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Mt(){return new R(x.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+je+"' property when initializing the app?")}function Bt(){return new R(x.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function $t(){return new R(x.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Ft(e){return new R(x.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ge(e){return new R(x.INVALID_ARGUMENT,e)}function qe(){return new R(x.APP_DELETED,"The Firebase app was deleted.")}function jt(e){return new R(x.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ee(e,t){return new R(x.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function Z(e){throw new R(x.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class C{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let s;try{s=C.makeFromUrl(t,n)}catch{return new C(t,"")}if(s.path==="")return s;throw Pt(t)}static makeFromUrl(t,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function o(U){U.path.charAt(U.path.length-1)==="/"&&(U.path_=U.path_.slice(0,-1))}const i="(/(.*))?$",a=new RegExp("^gs://"+r+i,"i"),l={bucket:1,path:3};function d(U){U.path_=decodeURIComponent(U.path)}const g="v[A-Za-z0-9_]+",v=n.replace(/[.]/g,"\\."),b="(/([^?#]*).*)?$",k=new RegExp(`^https?://${v}/${g}/b/${r}/o${b}`,"i"),w={bucket:1,path:3},B=n===Fe?"(?:storage.googleapis.com|storage.cloud.google.com)":n,m="([^?#]*)",I=new RegExp(`^https?://${B}/${r}/${m}`,"i"),O=[{regex:a,indices:l,postModify:o},{regex:k,indices:w,postModify:d},{regex:I,indices:{bucket:1,path:2},postModify:d}];for(let U=0;U<O.length;U++){const f=O[U],p=f.regex.exec(t);if(p){const S=p[f.indices.bucket];let h=p[f.indices.path];h||(h=""),s=new C(S,h),f.postModify(s);break}}if(s==null)throw Lt(t);return s}}class qt{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function Ht(e,t,n){let s=1,r=null,o=null,i=!1,a=0;function l(){return a===2}let d=!1;function g(...m){d||(d=!0,t.apply(null,m))}function v(m){r=setTimeout(()=>{r=null,e(k,l())},m)}function b(){o&&clearTimeout(o)}function k(m,...I){if(d){b();return}if(m){b(),g.call(null,m,...I);return}if(l()||i){b(),g.call(null,m,...I);return}s<64&&(s*=2);let O;a===1?(a=2,O=0):O=(s+Math.random())*1e3,v(O)}let w=!1;function B(m){w||(w=!0,b(),!d&&(r!==null?(m||(a=2),clearTimeout(r),v(0)):m||(a=1)))}return v(0),o=setTimeout(()=>{i=!0,B(!0)},n),B}function Vt(e){e(!1)}/**
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
 */function zt(e){return e!==void 0}function Wt(e){return typeof e=="object"&&!Array.isArray(e)}function pe(e){return typeof e=="string"||e instanceof String}function Ne(e){return _e()&&e instanceof Blob}function _e(){return typeof Blob<"u"}function Oe(e,t,n,s){if(s<t)throw ge(`Invalid value for '${e}'. Expected ${t} or greater.`);if(s>n)throw ge(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
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
 */function oe(e,t,n){let s=t;return n==null&&(s=`https://${t}`),`${n}://${s}/v0${e}`}function He(e){const t=encodeURIComponent;let n="?";for(const s in e)if(e.hasOwnProperty(s)){const r=t(s)+"="+t(e[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
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
 */var G;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(G||(G={}));/**
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
 */function Kt(e,t){const n=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,o=t.indexOf(e)!==-1;return n||r||o}/**
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
 */class Xt{constructor(t,n,s,r,o,i,a,l,d,g,v,b=!0){this.url_=t,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=i,this.callback_=a,this.errorCallback_=l,this.timeout_=d,this.progressCallback_=g,this.connectionFactory_=v,this.retry=b,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((k,w)=>{this.resolve_=k,this.reject_=w,this.start_()})}start_(){const t=(s,r)=>{if(r){s(!1,new ne(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const i=a=>{const l=a.loaded,d=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,d)};this.progressCallback_!==null&&o.addUploadProgressListener(i),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(i),this.pendingConnection_=null;const a=o.getErrorCode()===G.NO_ERROR,l=o.getStatus();if(!a||Kt(l,this.additionalRetryCodes_)&&this.retry){const g=o.getErrorCode()===G.ABORT;s(!1,new ne(!1,null,g));return}const d=this.successCodes_.indexOf(l)!==-1;s(!0,new ne(d,o))})},n=(s,r)=>{const o=this.resolve_,i=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());zt(l)?o(l):o()}catch(l){i(l)}else if(a!==null){const l=me();l.serverResponse=a.getErrorText(),this.errorCallback_?i(this.errorCallback_(a,l)):i(l)}else if(r.canceled){const l=this.appDelete_?qe():St();i(l)}else{const l=Dt();i(l)}};this.canceled_?n(!1,new ne(!1,null,!0)):this.backoffId_=Ht(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&Vt(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ne{constructor(t,n,s){this.wasSuccessCode=t,this.connection=n,this.canceled=!!s}}function Gt(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function Yt(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function Jt(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Zt(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function Qt(e,t,n,s,r,o,i=!0){const a=He(e.urlParams),l=e.url+a,d=Object.assign({},e.headers);return Jt(d,t),Gt(d,n),Yt(d,o),Zt(d,s),new Xt(l,e.method,d,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r,i)}/**
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
 */function en(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function tn(...e){const t=en();if(t!==void 0){const n=new t;for(let s=0;s<e.length;s++)n.append(e[s]);return n.getBlob()}else{if(_e())return new Blob(e);throw new R(x.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function nn(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
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
 */function sn(e){if(typeof atob>"u")throw Ft("base-64");return atob(e)}/**
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
 */const j={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class de{constructor(t,n){this.data=t,this.contentType=n||null}}function rn(e,t){switch(e){case j.RAW:return new de(Ve(t));case j.BASE64:case j.BASE64URL:return new de(ze(e,t));case j.DATA_URL:return new de(an(t),ln(t))}throw me()}function Ve(e){const t=[];for(let n=0;n<e.length;n++){let s=e.charCodeAt(n);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const o=s,i=e.charCodeAt(++n);s=65536|(o&1023)<<10|i&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function on(e){let t;try{t=decodeURIComponent(e)}catch{throw ee(j.DATA_URL,"Malformed data URL.")}return Ve(t)}function ze(e,t){switch(e){case j.BASE64:{const r=t.indexOf("-")!==-1,o=t.indexOf("_")!==-1;if(r||o)throw ee(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case j.BASE64URL:{const r=t.indexOf("+")!==-1,o=t.indexOf("/")!==-1;if(r||o)throw ee(e,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=sn(t)}catch(r){throw r.message.includes("polyfill")?r:ee(e,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class We{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw ee(j.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=un(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function an(e){const t=new We(e);return t.base64?ze(j.BASE64,t.rest):on(t.rest)}function ln(e){return new We(e).contentType}function un(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class K{constructor(t,n){let s=0,r="";Ne(t)?(this.data_=t,s=t.size,r=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,n){if(Ne(this.data_)){const s=this.data_,r=nn(s,t,n);return r===null?null:new K(r)}else{const s=new Uint8Array(this.data_.buffer,t,n-t);return new K(s,!0)}}static getBlob(...t){if(_e()){const n=t.map(s=>s instanceof K?s.data_:s);return new K(tn.apply(null,n))}else{const n=t.map(i=>pe(i)?rn(j.RAW,i).data:i.data_);let s=0;n.forEach(i=>{s+=i.byteLength});const r=new Uint8Array(s);let o=0;return n.forEach(i=>{for(let a=0;a<i.length;a++)r[o++]=i[a]}),new K(r,!0)}}uploadData(){return this.data_}}/**
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
 */function Ke(e){let t;try{t=JSON.parse(e)}catch{return null}return Wt(t)?t:null}/**
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
 */function cn(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function dn(e,t){const n=t.split("/").filter(s=>s.length>0).join("/");return e.length===0?n:e+"/"+n}function Xe(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function hn(e,t){return t}class N{constructor(t,n,s,r){this.server=t,this.local=n||t,this.writable=!!s,this.xform=r||hn}}let se=null;function fn(e){return!pe(e)||e.length<2?e:Xe(e)}function Ge(){if(se)return se;const e=[];e.push(new N("bucket")),e.push(new N("generation")),e.push(new N("metageneration")),e.push(new N("name","fullPath",!0));function t(o,i){return fn(i)}const n=new N("name");n.xform=t,e.push(n);function s(o,i){return i!==void 0?Number(i):i}const r=new N("size");return r.xform=s,e.push(r),e.push(new N("timeCreated")),e.push(new N("updated")),e.push(new N("md5Hash",null,!0)),e.push(new N("cacheControl",null,!0)),e.push(new N("contentDisposition",null,!0)),e.push(new N("contentEncoding",null,!0)),e.push(new N("contentLanguage",null,!0)),e.push(new N("contentType",null,!0)),e.push(new N("metadata","customMetadata",!0)),se=e,se}function gn(e,t){function n(){const s=e.bucket,r=e.fullPath,o=new C(s,r);return t._makeStorageReference(o)}Object.defineProperty(e,"ref",{get:n})}function mn(e,t,n){const s={};s.type="file";const r=n.length;for(let o=0;o<r;o++){const i=n[o];s[i.local]=i.xform(s,t[i.server])}return gn(s,e),s}function Ye(e,t,n){const s=Ke(t);return s===null?null:mn(e,s,n)}function pn(e,t,n,s){const r=Ke(t);if(r===null||!pe(r.downloadTokens))return null;const o=r.downloadTokens;if(o.length===0)return null;const i=encodeURIComponent;return o.split(",").map(d=>{const g=e.bucket,v=e.fullPath,b="/b/"+i(g)+"/o/"+i(v),k=oe(b,n,s),w=He({alt:"media",token:d});return k+w})[0]}function _n(e,t){const n={},s=t.length;for(let r=0;r<s;r++){const o=t[r];o.writable&&(n[o.server]=e[o.local])}return JSON.stringify(n)}class ve{constructor(t,n,s,r){this.url=t,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Je(e){if(!e)throw me()}function vn(e,t){function n(s,r){const o=Ye(e,r,t);return Je(o!==null),o}return n}function bn(e,t){function n(s,r){const o=Ye(e,r,t);return Je(o!==null),pn(o,r,e.host,e._protocol)}return n}function Ze(e){function t(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=Ot():r=Nt():n.getStatus()===402?r=At(e.bucket):n.getStatus()===403?r=Ct(e.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return t}function Qe(e){const t=Ze(e);function n(s,r){let o=t(s,r);return s.getStatus()===404&&(o=Et(e.path)),o.serverResponse=r.serverResponse,o}return n}function yn(e,t,n){const s=t.fullServerUrl(),r=oe(s,e.host,e._protocol),o="GET",i=e.maxOperationRetryTime,a=new ve(r,o,bn(e,n),i);return a.errorHandler=Qe(t),a}function wn(e,t){const n=t.fullServerUrl(),s=oe(n,e.host,e._protocol),r="DELETE",o=e.maxOperationRetryTime;function i(l,d){}const a=new ve(s,r,i,o);return a.successCodes=[200,204],a.errorHandler=Qe(t),a}function xn(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function Rn(e,t,n){const s=Object.assign({},n);return s.fullPath=e.path,s.size=t.size(),s.contentType||(s.contentType=xn(null,t)),s}function Tn(e,t,n,s,r){const o=t.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};function a(){let O="";for(let U=0;U<2;U++)O=O+Math.random().toString().slice(2);return O}const l=a();i["Content-Type"]="multipart/related; boundary="+l;const d=Rn(t,s,r),g=_n(d,n),v="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+g+`\r
--`+l+`\r
Content-Type: `+d.contentType+`\r
\r
`,b=`\r
--`+l+"--",k=K.getBlob(v,s,b);if(k===null)throw Bt();const w={name:d.fullPath},B=oe(o,e.host,e._protocol),m="POST",I=e.maxUploadRetryTime,D=new ve(B,m,vn(e,n),I);return D.urlParams=w,D.headers=i,D.body=k.uploadData(),D.errorHandler=Ze(t),D}class kn{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=G.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=G.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=G.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,s,r){if(this.sent_)throw Z("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),r!==void 0)for(const o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Z("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Z("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Z("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Z("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class In extends kn{initXhr(){this.xhr_.responseType="text"}}function be(){return new In}/**
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
 */class Y{constructor(t,n){this._service=t,n instanceof C?this._location=n:this._location=C.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new Y(t,n)}get root(){const t=new C(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Xe(this._location.path)}get storage(){return this._service}get parent(){const t=cn(this._location.path);if(t===null)return null;const n=new C(this._location.bucket,t);return new Y(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw jt(t)}}function Un(e,t,n){e._throwIfRoot("uploadBytes");const s=Tn(e.storage,e._location,Ge(),new K(t,!0),n);return e.storage.makeRequestWithTokens(s,be).then(r=>({metadata:r,ref:e}))}function En(e){e._throwIfRoot("getDownloadURL");const t=yn(e.storage,e._location,Ge());return e.storage.makeRequestWithTokens(t,be).then(n=>{if(n===null)throw $t();return n})}function An(e){e._throwIfRoot("deleteObject");const t=wn(e.storage,e._location);return e.storage.makeRequestWithTokens(t,be)}function Nn(e,t){const n=dn(e._location.path,t),s=new C(e._location.bucket,n);return new Y(e.storage,s)}/**
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
 */function On(e){return/^[A-Za-z]+:\/\//.test(e)}function Cn(e,t){return new Y(e,t)}function et(e,t){if(e instanceof ye){const n=e;if(n._bucket==null)throw Mt();const s=new Y(n,n._bucket);return t!=null?et(s,t):s}else return t!==void 0?Nn(e,t):e}function Dn(e,t){if(t&&On(t)){if(e instanceof ye)return Cn(e,t);throw ge("To use ref(service, url), the first argument must be a Storage instance.")}else return et(e,t)}function Ce(e,t){const n=t==null?void 0:t[je];return n==null?null:C.makeFromBucketSpec(n,e)}function Sn(e,t,n,s={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:r}=s;r&&(e._overrideAuthToken=typeof r=="string"?r:ft(r,e.app.options.projectId))}class ye{constructor(t,n,s,r,o){this.app=t,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=o,this._bucket=null,this._host=Fe,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=It,this._maxUploadRetryTime=Ut,this._requests=new Set,r!=null?this._bucket=C.makeFromBucketSpec(r,this._host):this._bucket=Ce(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=C.makeFromBucketSpec(this._url,t):this._bucket=Ce(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Oe("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Oe("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Y(this,t)}_makeRequest(t,n,s,r,o=!0){if(this._deleted)return new qt(qe());{const i=Qt(t,this._appId,s,r,n,this._firebaseVersion,o);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(t,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,s,r).getPromise()}}const De="@firebase/storage",Se="0.12.5";/**
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
 */const tt="storage";function Le(e,t,n){return e=te(e),Un(e,t,n)}function Pe(e){return e=te(e),En(e)}function Hs(e){return e=te(e),An(e)}function Me(e,t){return e=te(e),Dn(e,t)}function Ln(e=dt(),t){e=te(e);const s=ut(e,tt).getImmediate({identifier:t}),r=ct("storage");return r&&Pn(s,...r),s}function Pn(e,t,n,s={}){Sn(e,t,n,s)}function Mn(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return new ye(n,s,r,t,ht)}function Bn(){at(new lt(tt,Mn,"PUBLIC").setMultipleInstances(!0)),xe(De,Se,""),xe(De,Se,"esm2017")}Bn();function $n(){const e=Be(),t=_(e.currentUser),{uid:n,photoURL:s,displayName:r}=t.value,o=n,i=_([]),l=JSON.parse(localStorage.getItem("users")).filter(d=>d.id!==o);return i.value=l,{storedUsers:i}}function Vs(){const e=Be(),t=_(e.currentUser),{firestore:n}=yt(),s=Ln(),r=t.value.uid,o=t.value.photoURL,i=t.value.displayName;mt();const{storedUsers:a}=$n(),l=_(""),d=_([]),g=_(!1),v=_(null);let b=_({}),k=_(!1);const w=(c,y)=>[c,y].sort().join("_"),B=(c,y)=>{document.getElementById(c).showModal(),b.value=y,we(),console.log(d)},m=_(null),I=_(null),D=c=>{m.value=c},O=c=>{I.value=c},U=async()=>{if(!(l.value.trim()===""&&!m.value&&!I.value))try{const c=w(r,b.value.userId);k.value=!0,console.log(k.value);let y=null,T=null;if(m.value){const L=`chats/${c}/${Date.now()}_${m.value.name}`,$=Me(s,L),F=await Le($,m.value);y=await Pe(F.ref)}if(I.value){const L=`chats/${c}/${Date.now()}_${I.value.name}`,$=Me(s,L),F=await Le($,I.value);T=await Pe(F.ref)}await xt(Ie(n,`chats/${c}`),{participants:{[r]:!0,[b.value.userId]:!0},lastMessage:l.value||(y||T?"File attachment":""),sender:r,timestamp:Ue()},{merge:!0}),await Rt(Ee(n,`chats/${c}/messages`),{senderId:r,recipientId:b.value.userId,message:l.value,imageUrl:T,imageName:I.value?I.value.name:null,fileUrl:y,fileName:m.value?m.value.name:null,isSendMessageLoading:!1,timestamp:Ue()}),l.value="",m.value=null,I.value=null}catch(c){console.error("Error sending message: ",c)}finally{k.value=!1}},f=_({}),p=_({}),S=_([]),h=_({}),q=_(0),ie=Re(()=>a.value.filter(c=>f.value[w(r,c.id)]).sort((c,y)=>{const T=w(r,c.id),L=w(r,y.id);return h.value[L]-h.value[T]})),nt=()=>{S.value.forEach(y=>y()),S.value=[];const c=new Set;a.value.forEach(y=>{const T=w(r,y.id),L=Ie(n,"chats",T),$=Ae(L,F=>{if(F.exists()){const P=F.data(),J=P.lastMessage||"",X=P.sender||"",ae=P.timestamp||"";f.value[T]=J,p.value[T]=X,h.value[T]=ae,J&&X!==r?c.has(X)||(c.add(X),q.value=c.size):c.has(X)&&(c.delete(X),q.value=c.size)}else{f.value[T]="",p.value[T]="",h.value[T]="";const P=p.value[T];c.has(P)&&(c.delete(P),q.value=c.size)}},F=>{console.error("Error listening to chat updates:",F)});S.value.push($)})};he(()=>{nt()}),Te(()=>{S.value.forEach(c=>c())}),fe(q,c=>{console.log(q.value)});const st=Re(()=>d.value.filter(c=>c.senderId===r&&c.recipientId===b.value.userId||c.senderId===b.value.userId&&c.recipientId===r)),rt=()=>{$e(()=>{v.value&&(v.value.scrollTop=v.value.scrollHeight)})},we=()=>{g.value=!0;const c=w(r,b.value.userId),y=Tt(Ee(n,`chats/${c}/messages`),kt("timestamp","asc")),T=Ae(y,L=>{d.value=L.docs.map($=>({id:$.id,...$.data()})),g.value=!1,rt()});Te(()=>{T()})};return he(()=>{we()}),{Time:c=>{if(c){const y=new Date(c.seconds*1e3),T=new Date,L=y.getHours()%12||12,$=("0"+y.getMinutes()).slice(-2),F=y.getHours()<12?"am":"pm",P=`${L}:${$} ${F}`;if(y.toDateString()===T.toDateString())return P;const J=new Date(T);if(J.setDate(J.getDate()-1),y.toDateString()===J.toDateString())return`Yesterday ${P}`;const ae=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][y.getDay()],le=new Date(T);if(le.setDate(le.getDate()-7),y>le)return`${ae} ${P}`;const ot=y.toLocaleString("default",{month:"short"}),it=y.getDate();return`${ot} ${it} ${P}`}return""},getChatId:w,yourChat:B,sendMessage:U,userId:r,newMessage:l,messages:d,isLoading:g,isSendMessageLoading:k,filteredMessages:st,selectedUser:b,timestamp:h,userPhoto:o,userName:i,filteredUsers:ie,latestMessages:f,isSender:p,storedUsers:a,newMessageArray:q,file:m,imageFile:I,handleImageUpdate:O,handleFileUpdate:D}}const Fn={class:"w-10 rounded-full"},jn=["src"],qn={class:""},Hn={class:"text-sm font-medium capitalize"},Vn={class:"flex gap-2 justify-start items-center"},zn={key:0,class:"text-xs"},Wn={class:"text-[10px]"},zs={__name:"usersChatHeads",props:{yourChat:{type:Function,required:!0},formatTime:{type:Function,required:!0},user:{type:Object,required:!0},latestMessages:{type:Object,required:!0},getChatId:{type:Function,required:!0},userId:{type:[String,Number],required:!0},isSender:{type:Object,required:!0},timestamp:{type:Object,required:!0}},setup(e){return(t,n)=>(E(),A("div",{onClick:n[0]||(n[0]=s=>e.yourChat(e.user)),class:"flex justify-start items-center gap-2 cursor-pointer hover:bg-gray-500/20 transition p-1 rounded-md"},[u("div",{class:Q(["avatar",e.user.status==="online"?"online":"offline"])},[u("div",Fn,[u("img",{src:e.user.userPhotoURL},null,8,jn)])],2),u("div",qn,[u("h1",Hn,M(e.user.userName),1),u("div",Vn,[e.latestMessages[e.getChatId(e.userId,e.user.id)]?(E(),A("span",{key:0,class:Q(["text-xs px-2 py-0.5 bg-gray-500/20 rounded-full",e.isSender[e.getChatId(e.userId,e.user.id)]===e.userId?"":"text-blue-500"])},[e.isSender[e.getChatId(e.userId,e.user.id)]===e.userId?(E(),A("span",zn," You: ")):V("",!0),re(" "+M(e.latestMessages[e.getChatId(e.userId,e.user.id)]),1)],2)):V("",!0),u("span",Wn,M(e.formatTime(e.timestamp[e.getChatId(e.userId,e.user.id)])),1)])])]))}},Kn={},Xn={class:"my-3"},Gn=pt('<div class="flex flex-col gap-4 w-32 ml-2"><div class="flex gap-2 items-center"><div class="skeleton w-10 h-10 rounded-full shrink-0"></div><div class="flex flex-col gap-2"><div class="skeleton h-2 w-10"></div><div class="skeleton h-2 w-20"></div></div></div></div><div class="flex justify-end mr-5"><div class="flex flex-col gap-4 w-32"><div class="flex gap-2 items-center"><div class="flex flex-col gap-2"><div class="skeleton h-2 w-20"></div><div class="skeleton h-2 w-10"></div></div><div class="skeleton w-10 h-10 rounded-full shrink-0"></div></div></div></div>',2),Yn=[Gn];function Jn(e,t){return E(),A("div",Xn,Yn)}const Zn=wt(Kn,[["render",Jn]]),Qn={class:"modal-box relative p-2 no-scrollbar"},es={class:"modal-action absolute z-10 -top-4 right-2"},ts={method:"dialog"},ns={class:"btn btn-xs px-0.5 rounded-full"},ss={class:"flex justify-start items-center gap-2"},rs={class:"avatar"},os={class:"w-10 rounded-full"},is=["src"],as={class:"text-sm font-medium"},ls=u("hr",{class:"my-1 border border-gray-400/20"},null,-1),us={key:0,class:"my-2 flex justify-center items-center text-sm"},cs={class:"py-1 px-4 bg-primary/10 rounded-full"},ds={class:"text-primary font-semibold"},hs={class:"chat-image avatar"},fs={class:"w-10 rounded-full"},gs=["src"],ms=["src"],ps={class:"chat-header text-xs font-medium"},_s={class:"text-[10px] opacity-50"},vs={key:1,class:"text-sm rounded-2xl backdrop-blur-2xl bg-gray-500/20 font-medium border border-gray-500/20 px-4 py-3"},bs=["href"],ys={key:2,class:""},ws=["src"],xs={class:"chat-footer opacity-50 font-semibold text-xs"},Rs={key:1},Ts={class:"fixed bottom-0 z-50 inset-x-0"},ks={key:0,class:"ml-1 flex justify-start items-end gap-1 text-xs"},Is={key:0},Us=["src"],Es={class:"flex justify-start items-center gap-1"},As={class:"backdrop-blur-2xl flex bg-gray-400/20 justify-start items-center gap-2 px-2 py-1 border border-gray-500/20 rounded-xl"},Ns={class:"my-1 mx-1 flex justify-start items-center rounded-2xl gap-2 bg-gray-400/20 backdrop-blur-2xl shadow"},Os={class:"w-full rounded-2xl border border-gray-500/20 shadow"},Cs=["disabled","value"],Ds={class:"flex justify-between items-center m-3 h-5"},Ss={class:"flex justify-center items-center gap-1"},Ls=["disabled"],Ps={key:1,class:"cursor-not-allowed",disabled:""},Ms=10,Bs=24,Ws={__name:"ChatModal",props:{userId:{type:String,required:!0},messages:{type:Array,required:!0},selectedUser:{type:Object,required:!0},userPhoto:{type:String,required:!0},userName:{type:String,required:!0},isSendMessageLoading:{type:Boolean,default:null},isLoading:{type:Boolean,default:!1},formatTime:{type:Function,required:!0},sendMessage:{type:Function,required:!0},filteredMessages:{type:Array},modelValue:{type:String,required:!0},selectedFile:{type:Object,default:null},selectedImage:{type:Object,default:null}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,s=t,r=_(null),o=_(null),i=_(null),a=_(null),l=_(null),d=_(""),g=_(null),v=_(null),b=_(null),k=_(!1),w=()=>{const f=o.value;if(f){const p=f.scrollTop,S=f.scrollHeight;f.style.height="auto";const h=f.scrollHeight,q=Ms*Bs;h>q?(f.style.height=`${q}px`,f.style.overflowY="auto"):f.style.height=`${h}px`;const ie=p+(h-S);f.scrollTop=ie}},B=f=>{s("update:modelValue",f.target.value),w()};fe(()=>n.modelValue,f=>{if(f===""){const p=o.value;p&&(p.style.height="auto",p.style.overflowY="hidden")}else w()}),he(()=>{w(),r.value&&(r.value.scrollTop=r.value.scrollHeight)}),fe(()=>n.filteredMessages,()=>{$e(()=>{r.value&&(r.value.scrollTop=r.value.scrollHeight)})},{deep:!0},n.modelValue);const m=()=>{a.value&&(a.value.click(),k.value=!0)},I=()=>{k.value=!1,l.value&&l.value.click()},D=f=>{const p=f.target.files[0];p&&(g.value=p,s("update:selectedFile",g.value),d.value=g.value.name,console.log(g.value))},O=f=>{const p=f.target.files[0];p&&(v.value=p,s("update:selectedImage",v.value),b.value=URL.createObjectURL(p),d.value=v.value.name,console.log(v.value))},U=()=>{(g.value||v.value)&&(d.value="",b.value=null,v.value=null,g.value=null)};return(f,p)=>{const S=bt("motion-fade");return E(),A("div",Qn,[u("div",es,[u("form",ts,[u("button",ns,[H(z(W),{icon:"carbon:close",class:"text-xl text-red-500"})])])]),u("div",ss,[u("div",rs,[u("div",os,[u("img",{src:e.selectedUser.userPhotoURL},null,8,is)])]),u("div",null,[u("h1",as,M(e.selectedUser.userName),1)])]),ls,u("div",{class:"h-[366px] mb-[86px] rounded-md overflow-y-scroll",ref_key:"messageContainer",ref:r},[e.filteredMessages.length===0&&!e.isLoading?(E(),A("div",us,[u("span",cs,[re("No conversation with "),u("span",ds,M(e.selectedUser.userName),1)])])):V("",!0),(E(!0),A(_t,null,vt(e.filteredMessages,h=>(E(),A("div",{key:h.id},[u("div",{class:Q(["chat",h.senderId===e.userId?"chat-end":"chat-start"])},[u("div",hs,[u("div",fs,[e.userId===h.senderId?(E(),A("img",{key:0,src:e.userPhoto},null,8,gs)):(E(),A("img",{key:1,src:e.selectedUser.userPhotoURL},null,8,ms))])]),u("div",ps,[re(M(h.senderId===e.userId?e.userName:e.selectedUser.userName)+" ",1),u("time",_s,M(e.formatTime(h.timestamp)),1)]),h.message?(E(),A("div",{key:0,class:Q(["chat-bubble text-sm",e.userId===h.senderId?"chat-bubble-primary":""])},M(h.message),3)):V("",!0),h.fileUrl?(E(),A("div",vs,[u("a",{href:h.fileUrl,download:"",class:"flex justify-start items-center gap-1"},[H(z(W),{icon:"simple-icons:googledocs",width:"16",height:"16"}),re(M(h.fileName),1)],8,bs)])):V("",!0),h.imageUrl?(E(),A("div",ys,[u("img",{src:h.imageUrl,alt:"",class:"h-auto w-52 object-cover border border-gray-500/20 rounded-2xl"},null,8,ws)])):V("",!0),u("div",xs,M(h.isSendMessageLoading?"Sending... bugs, hehehe":"Delivered"),1)],2)]))),128)),e.isLoading?(E(),A("div",Rs,[H(Zn)])):V("",!0)],512),u("div",Ts,[n.selectedFile||n.selectedImage?(E(),A("div",ks,[k.value?(E(),A("div",Is,[u("img",{src:b.value,alt:"",class:"size-14 rounded-xl backdrop-blur-2xl object-cover bg-gray-400/20 border border-gray-500/20"},null,8,Us)])):V("",!0),u("div",Es,[u("span",As,[H(z(W),{icon:"fluent:attach-16-regular",width:"20",height:"20"}),u("span",null,M(d.value),1)]),u("button",{onClick:p[0]||(p[0]=h=>U(g.value,d.value,v.value)),class:"backdrop-blur-2xl bg-gray-400/20 border p-0.5 hover:text-red-500 transition border-gray-500/20 rounded-full"},[H(z(W),{icon:"iconamoon:close-light",width:"20",height:"20"})])])])):V("",!0),u("form",{ref_key:"messageBoxContainer",ref:i},[u("div",Ns,[u("div",Os,[u("textarea",{type:"text",disabled:e.isSendMessageLoading,cols:"1",rows:"1",required:"",autofocus:"",ref_key:"autoExpand",ref:o,value:e.modelValue,onInput:B,placeholder:"Enter a message",class:"w-full px-3 pt-3 placeholder:text-sm placeholder:text-gray-500 resize-none rounded-2xl no-scrollbar bg-transparent outline-none"},null,40,Cs),u("div",Ds,[u("div",Ss,[u("button",{onClick:ue(m,["prevent"]),class:"transition p-1 rounded-full bg-gray-400/20 hover:text-success shadow"},[H(z(W),{icon:"tabler:photo",class:"text-xl"})]),u("input",{type:"file",ref_key:"imageInput",ref:a,accept:"image/*",onChange:O,class:"hidden"},null,544),u("input",{type:"file",ref_key:"fileInput",ref:l,accept:".pdf, .doc, .docx",onChange:D,class:"hidden"},null,544),u("button",{onClick:ue(I,["prevent"]),class:"transition p-1 rounded-full bg-gray-400/20 hover:text-secondary shadow"},[H(z(W),{icon:"tabler:file",class:"text-xl"})])]),u("div",{class:Q(["rounded-full p-1.5 flex shadow justify-center transition items-center",e.modelValue||g.value||v.value!==null?"bg-blue-500 hover:bg-blue-500/90 ":"bg-primary/10 hover:bg-primary/20"])},[!e.isSendMessageLoading&&e.modelValue||g.value||v.value?ke((E(),A("button",{key:0,disabled:e.isSendMessageLoading,onClick:p[1]||(p[1]=ue((...h)=>e.sendMessage&&e.sendMessage(...h),["prevent"]))},[H(z(W),{icon:"bxs:send",class:"text-xl text-gray-200"})],8,Ls)),[[S]]):ke((E(),A("button",Ps,[H(z(W),{icon:"ic:round-mic",class:"text-xl text-primary"})])),[[S]])],2)])])])],512)])])}}};export{Vs as C,zs as _,Pe as a,Ws as b,Hs as d,Ln as g,Me as r,Le as u};
