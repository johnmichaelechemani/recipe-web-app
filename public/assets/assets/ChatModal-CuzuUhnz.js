import{_ as ut,C as ct,z as xe,A as se,B as dt,D as ht,E as ft,S as gt,G as mt,H as pt,g as Fe,e as _,q as Re,I as he,p as ke,w as fe,J as _t,K as je,o as x,c as R,a,n as K,t as C,k as D,f as ee,d as bt,b as L,u as z,F as yt,j as vt,x as Te,T as Ie,h as ue,i as Ue,y as wt}from"./index-BiGuXBty.js";import{u as xt,_ as Rt,I as W}from"./_plugin-vue_export-helper-DbN_XhJq.js";import{s as kt,d as Ee,h as Ae,a as Tt,c as Ne,b as Oe,q as It,o as Ut}from"./index.esm2017-XXjZfn5E.js";/**
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
 */const qe="firebasestorage.googleapis.com",He="storageBucket",Et=2*60*1e3,At=10*60*1e3;/**
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
 */class T extends pt{constructor(t,s,n=0){super(ce(t),`Firebase Storage: ${s} (${ce(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,T.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return ce(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var k;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(k||(k={}));function ce(e){return"storage/"+e}function me(){const e="An unknown error occurred, please check the error payload for server response.";return new T(k.UNKNOWN,e)}function Nt(e){return new T(k.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function Ot(e){return new T(k.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Ct(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new T(k.UNAUTHENTICATED,e)}function Dt(){return new T(k.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function St(e){return new T(k.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function Lt(){return new T(k.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Pt(){return new T(k.CANCELED,"User canceled the upload/download.")}function Mt(e){return new T(k.INVALID_URL,"Invalid URL '"+e+"'.")}function Bt(e){return new T(k.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function $t(){return new T(k.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+He+"' property when initializing the app?")}function Ft(){return new T(k.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function jt(){return new T(k.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function qt(e){return new T(k.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ge(e){return new T(k.INVALID_ARGUMENT,e)}function Ve(){return new T(k.APP_DELETED,"The Firebase app was deleted.")}function Ht(e){return new T(k.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function te(e,t){return new T(k.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function Q(e){throw new T(k.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class S{constructor(t,s){this.bucket=t,this.path_=s}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,s){let n;try{n=S.makeFromUrl(t,s)}catch{return new S(t,"")}if(n.path==="")return n;throw Bt(t)}static makeFromUrl(t,s){let n=null;const r="([A-Za-z0-9.\\-_]+)";function o(A){A.path.charAt(A.path.length-1)==="/"&&(A.path_=A.path_.slice(0,-1))}const i="(/(.*))?$",u=new RegExp("^gs://"+r+i,"i"),c={bucket:1,path:3};function h(A){A.path_=decodeURIComponent(A.path)}const g="v[A-Za-z0-9_]+",b=s.replace(/[.]/g,"\\."),y="(/([^?#]*).*)?$",U=new RegExp(`^https?://${b}/${g}/b/${r}/o${y}`,"i"),w={bucket:1,path:3},F=s===qe?"(?:storage.googleapis.com|storage.cloud.google.com)":s,m="([^?#]*)",E=new RegExp(`^https?://${F}/${r}/${m}`,"i"),O=[{regex:u,indices:c,postModify:o},{regex:U,indices:w,postModify:h},{regex:E,indices:{bucket:1,path:2},postModify:h}];for(let A=0;A<O.length;A++){const f=O[A],p=f.regex.exec(t);if(p){const M=p[f.indices.bucket];let l=p[f.indices.path];l||(l=""),n=new S(M,l),f.postModify(n);break}}if(n==null)throw Mt(t);return n}}class Vt{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function zt(e,t,s){let n=1,r=null,o=null,i=!1,u=0;function c(){return u===2}let h=!1;function g(...m){h||(h=!0,t.apply(null,m))}function b(m){r=setTimeout(()=>{r=null,e(U,c())},m)}function y(){o&&clearTimeout(o)}function U(m,...E){if(h){y();return}if(m){y(),g.call(null,m,...E);return}if(c()||i){y(),g.call(null,m,...E);return}n<64&&(n*=2);let O;u===1?(u=2,O=0):O=(n+Math.random())*1e3,b(O)}let w=!1;function F(m){w||(w=!0,y(),!h&&(r!==null?(m||(u=2),clearTimeout(r),b(0)):m||(u=1)))}return b(0),o=setTimeout(()=>{i=!0,F(!0)},s),F}function Wt(e){e(!1)}/**
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
 */function Kt(e){return e!==void 0}function Xt(e){return typeof e=="object"&&!Array.isArray(e)}function pe(e){return typeof e=="string"||e instanceof String}function Ce(e){return _e()&&e instanceof Blob}function _e(){return typeof Blob<"u"}function De(e,t,s,n){if(n<t)throw ge(`Invalid value for '${e}'. Expected ${t} or greater.`);if(n>s)throw ge(`Invalid value for '${e}'. Expected ${s} or less.`)}/**
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
 */function oe(e,t,s){let n=t;return s==null&&(n=`https://${t}`),`${s}://${n}/v0${e}`}function ze(e){const t=encodeURIComponent;let s="?";for(const n in e)if(e.hasOwnProperty(n)){const r=t(n)+"="+t(e[n]);s=s+r+"&"}return s=s.slice(0,-1),s}/**
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
 */var Y;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(Y||(Y={}));/**
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
 */function Gt(e,t){const s=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,o=t.indexOf(e)!==-1;return s||r||o}/**
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
 */class Yt{constructor(t,s,n,r,o,i,u,c,h,g,b,y=!0){this.url_=t,this.method_=s,this.headers_=n,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=i,this.callback_=u,this.errorCallback_=c,this.timeout_=h,this.progressCallback_=g,this.connectionFactory_=b,this.retry=y,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((U,w)=>{this.resolve_=U,this.reject_=w,this.start_()})}start_(){const t=(n,r)=>{if(r){n(!1,new ne(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const i=u=>{const c=u.loaded,h=u.lengthComputable?u.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,h)};this.progressCallback_!==null&&o.addUploadProgressListener(i),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(i),this.pendingConnection_=null;const u=o.getErrorCode()===Y.NO_ERROR,c=o.getStatus();if(!u||Gt(c,this.additionalRetryCodes_)&&this.retry){const g=o.getErrorCode()===Y.ABORT;n(!1,new ne(!1,null,g));return}const h=this.successCodes_.indexOf(c)!==-1;n(!0,new ne(h,o))})},s=(n,r)=>{const o=this.resolve_,i=this.reject_,u=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(u,u.getResponse());Kt(c)?o(c):o()}catch(c){i(c)}else if(u!==null){const c=me();c.serverResponse=u.getErrorText(),this.errorCallback_?i(this.errorCallback_(u,c)):i(c)}else if(r.canceled){const c=this.appDelete_?Ve():Pt();i(c)}else{const c=Lt();i(c)}};this.canceled_?s(!1,new ne(!1,null,!0)):this.backoffId_=zt(t,s,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&Wt(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ne{constructor(t,s,n){this.wasSuccessCode=t,this.connection=s,this.canceled=!!n}}function Jt(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function Zt(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function Qt(e,t){t&&(e["X-Firebase-GMPID"]=t)}function es(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function ts(e,t,s,n,r,o,i=!0){const u=ze(e.urlParams),c=e.url+u,h=Object.assign({},e.headers);return Qt(h,t),Jt(h,s),Zt(h,o),es(h,n),new Yt(c,e.method,h,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r,i)}/**
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
 */function ss(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function ns(...e){const t=ss();if(t!==void 0){const s=new t;for(let n=0;n<e.length;n++)s.append(e[n]);return s.getBlob()}else{if(_e())return new Blob(e);throw new T(k.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function rs(e,t,s){return e.webkitSlice?e.webkitSlice(t,s):e.mozSlice?e.mozSlice(t,s):e.slice?e.slice(t,s):null}/**
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
 */function os(e){if(typeof atob>"u")throw qt("base-64");return atob(e)}/**
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
 */const H={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class de{constructor(t,s){this.data=t,this.contentType=s||null}}function is(e,t){switch(e){case H.RAW:return new de(We(t));case H.BASE64:case H.BASE64URL:return new de(Ke(e,t));case H.DATA_URL:return new de(ls(t),us(t))}throw me()}function We(e){const t=[];for(let s=0;s<e.length;s++){let n=e.charCodeAt(s);if(n<=127)t.push(n);else if(n<=2047)t.push(192|n>>6,128|n&63);else if((n&64512)===55296)if(!(s<e.length-1&&(e.charCodeAt(s+1)&64512)===56320))t.push(239,191,189);else{const o=n,i=e.charCodeAt(++s);n=65536|(o&1023)<<10|i&1023,t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|n&63)}else(n&64512)===56320?t.push(239,191,189):t.push(224|n>>12,128|n>>6&63,128|n&63)}return new Uint8Array(t)}function as(e){let t;try{t=decodeURIComponent(e)}catch{throw te(H.DATA_URL,"Malformed data URL.")}return We(t)}function Ke(e,t){switch(e){case H.BASE64:{const r=t.indexOf("-")!==-1,o=t.indexOf("_")!==-1;if(r||o)throw te(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case H.BASE64URL:{const r=t.indexOf("+")!==-1,o=t.indexOf("/")!==-1;if(r||o)throw te(e,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let s;try{s=os(t)}catch(r){throw r.message.includes("polyfill")?r:te(e,"Invalid character found")}const n=new Uint8Array(s.length);for(let r=0;r<s.length;r++)n[r]=s.charCodeAt(r);return n}class Xe{constructor(t){this.base64=!1,this.contentType=null;const s=t.match(/^data:([^,]+)?,/);if(s===null)throw te(H.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=s[1]||null;n!=null&&(this.base64=cs(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=t.substring(t.indexOf(",")+1)}}function ls(e){const t=new Xe(e);return t.base64?Ke(H.BASE64,t.rest):as(t.rest)}function us(e){return new Xe(e).contentType}function cs(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class X{constructor(t,s){let n=0,r="";Ce(t)?(this.data_=t,n=t.size,r=t.type):t instanceof ArrayBuffer?(s?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(s?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,s){if(Ce(this.data_)){const n=this.data_,r=rs(n,t,s);return r===null?null:new X(r)}else{const n=new Uint8Array(this.data_.buffer,t,s-t);return new X(n,!0)}}static getBlob(...t){if(_e()){const s=t.map(n=>n instanceof X?n.data_:n);return new X(ns.apply(null,s))}else{const s=t.map(i=>pe(i)?is(H.RAW,i).data:i.data_);let n=0;s.forEach(i=>{n+=i.byteLength});const r=new Uint8Array(n);let o=0;return s.forEach(i=>{for(let u=0;u<i.length;u++)r[o++]=i[u]}),new X(r,!0)}}uploadData(){return this.data_}}/**
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
 */function Ge(e){let t;try{t=JSON.parse(e)}catch{return null}return Xt(t)?t:null}/**
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
 */function ds(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function hs(e,t){const s=t.split("/").filter(n=>n.length>0).join("/");return e.length===0?s:e+"/"+s}function Ye(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function fs(e,t){return t}class N{constructor(t,s,n,r){this.server=t,this.local=s||t,this.writable=!!n,this.xform=r||fs}}let re=null;function gs(e){return!pe(e)||e.length<2?e:Ye(e)}function Je(){if(re)return re;const e=[];e.push(new N("bucket")),e.push(new N("generation")),e.push(new N("metageneration")),e.push(new N("name","fullPath",!0));function t(o,i){return gs(i)}const s=new N("name");s.xform=t,e.push(s);function n(o,i){return i!==void 0?Number(i):i}const r=new N("size");return r.xform=n,e.push(r),e.push(new N("timeCreated")),e.push(new N("updated")),e.push(new N("md5Hash",null,!0)),e.push(new N("cacheControl",null,!0)),e.push(new N("contentDisposition",null,!0)),e.push(new N("contentEncoding",null,!0)),e.push(new N("contentLanguage",null,!0)),e.push(new N("contentType",null,!0)),e.push(new N("metadata","customMetadata",!0)),re=e,re}function ms(e,t){function s(){const n=e.bucket,r=e.fullPath,o=new S(n,r);return t._makeStorageReference(o)}Object.defineProperty(e,"ref",{get:s})}function ps(e,t,s){const n={};n.type="file";const r=s.length;for(let o=0;o<r;o++){const i=s[o];n[i.local]=i.xform(n,t[i.server])}return ms(n,e),n}function Ze(e,t,s){const n=Ge(t);return n===null?null:ps(e,n,s)}function _s(e,t,s,n){const r=Ge(t);if(r===null||!pe(r.downloadTokens))return null;const o=r.downloadTokens;if(o.length===0)return null;const i=encodeURIComponent;return o.split(",").map(h=>{const g=e.bucket,b=e.fullPath,y="/b/"+i(g)+"/o/"+i(b),U=oe(y,s,n),w=ze({alt:"media",token:h});return U+w})[0]}function bs(e,t){const s={},n=t.length;for(let r=0;r<n;r++){const o=t[r];o.writable&&(s[o.server]=e[o.local])}return JSON.stringify(s)}class be{constructor(t,s,n,r){this.url=t,this.method=s,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Qe(e){if(!e)throw me()}function ys(e,t){function s(n,r){const o=Ze(e,r,t);return Qe(o!==null),o}return s}function vs(e,t){function s(n,r){const o=Ze(e,r,t);return Qe(o!==null),_s(o,r,e.host,e._protocol)}return s}function et(e){function t(s,n){let r;return s.getStatus()===401?s.getErrorText().includes("Firebase App Check token is invalid")?r=Dt():r=Ct():s.getStatus()===402?r=Ot(e.bucket):s.getStatus()===403?r=St(e.path):r=n,r.status=s.getStatus(),r.serverResponse=n.serverResponse,r}return t}function tt(e){const t=et(e);function s(n,r){let o=t(n,r);return n.getStatus()===404&&(o=Nt(e.path)),o.serverResponse=r.serverResponse,o}return s}function ws(e,t,s){const n=t.fullServerUrl(),r=oe(n,e.host,e._protocol),o="GET",i=e.maxOperationRetryTime,u=new be(r,o,vs(e,s),i);return u.errorHandler=tt(t),u}function xs(e,t){const s=t.fullServerUrl(),n=oe(s,e.host,e._protocol),r="DELETE",o=e.maxOperationRetryTime;function i(c,h){}const u=new be(n,r,i,o);return u.successCodes=[200,204],u.errorHandler=tt(t),u}function Rs(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function ks(e,t,s){const n=Object.assign({},s);return n.fullPath=e.path,n.size=t.size(),n.contentType||(n.contentType=Rs(null,t)),n}function Ts(e,t,s,n,r){const o=t.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};function u(){let O="";for(let A=0;A<2;A++)O=O+Math.random().toString().slice(2);return O}const c=u();i["Content-Type"]="multipart/related; boundary="+c;const h=ks(t,n,r),g=bs(h,s),b="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+g+`\r
--`+c+`\r
Content-Type: `+h.contentType+`\r
\r
`,y=`\r
--`+c+"--",U=X.getBlob(b,n,y);if(U===null)throw Ft();const w={name:h.fullPath},F=oe(o,e.host,e._protocol),m="POST",E=e.maxUploadRetryTime,P=new be(F,m,ys(e,s),E);return P.urlParams=w,P.headers=i,P.body=U.uploadData(),P.errorHandler=et(t),P}class Is{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Y.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Y.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Y.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,s,n,r){if(this.sent_)throw Q("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(s,t,!0),r!==void 0)for(const o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return n!==void 0?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Q("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Q("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Q("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Q("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class Us extends Is{initXhr(){this.xhr_.responseType="text"}}function ye(){return new Us}/**
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
 */class J{constructor(t,s){this._service=t,s instanceof S?this._location=s:this._location=S.makeFromUrl(s,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,s){return new J(t,s)}get root(){const t=new S(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ye(this._location.path)}get storage(){return this._service}get parent(){const t=ds(this._location.path);if(t===null)return null;const s=new S(this._location.bucket,t);return new J(this._service,s)}_throwIfRoot(t){if(this._location.path==="")throw Ht(t)}}function Es(e,t,s){e._throwIfRoot("uploadBytes");const n=Ts(e.storage,e._location,Je(),new X(t,!0),s);return e.storage.makeRequestWithTokens(n,ye).then(r=>({metadata:r,ref:e}))}function As(e){e._throwIfRoot("getDownloadURL");const t=ws(e.storage,e._location,Je());return e.storage.makeRequestWithTokens(t,ye).then(s=>{if(s===null)throw jt();return s})}function Ns(e){e._throwIfRoot("deleteObject");const t=xs(e.storage,e._location);return e.storage.makeRequestWithTokens(t,ye)}function Os(e,t){const s=hs(e._location.path,t),n=new S(e._location.bucket,s);return new J(e.storage,n)}/**
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
 */function Cs(e){return/^[A-Za-z]+:\/\//.test(e)}function Ds(e,t){return new J(e,t)}function st(e,t){if(e instanceof ve){const s=e;if(s._bucket==null)throw $t();const n=new J(s,s._bucket);return t!=null?st(n,t):n}else return t!==void 0?Os(e,t):e}function Ss(e,t){if(t&&Cs(t)){if(e instanceof ve)return Ds(e,t);throw ge("To use ref(service, url), the first argument must be a Storage instance.")}else return st(e,t)}function Se(e,t){const s=t==null?void 0:t[He];return s==null?null:S.makeFromBucketSpec(s,e)}function Ls(e,t,s,n={}){e.host=`${t}:${s}`,e._protocol="http";const{mockUserToken:r}=n;r&&(e._overrideAuthToken=typeof r=="string"?r:mt(r,e.app.options.projectId))}class ve{constructor(t,s,n,r,o){this.app=t,this._authProvider=s,this._appCheckProvider=n,this._url=r,this._firebaseVersion=o,this._bucket=null,this._host=qe,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Et,this._maxUploadRetryTime=At,this._requests=new Set,r!=null?this._bucket=S.makeFromBucketSpec(r,this._host):this._bucket=Se(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=S.makeFromBucketSpec(this._url,t):this._bucket=Se(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){De("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){De("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const s=await t.getToken();if(s!==null)return s.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new J(this,t)}_makeRequest(t,s,n,r,o=!0){if(this._deleted)return new Vt(Ve());{const i=ts(t,this._appId,n,r,s,this._firebaseVersion,o);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(t,s){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,s,n,r).getPromise()}}const Le="@firebase/storage",Pe="0.12.5";/**
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
 */const nt="storage";function Me(e,t,s){return e=se(e),Es(e,t,s)}function Be(e){return e=se(e),As(e)}function Qn(e){return e=se(e),Ns(e)}function $e(e,t){return e=se(e),Ss(e,t)}function Ps(e=ft(),t){e=se(e);const n=dt(e,nt).getImmediate({identifier:t}),r=ht("storage");return r&&Ms(n,...r),n}function Ms(e,t,s,n={}){Ls(e,t,s,n)}function Bs(e,{instanceIdentifier:t}){const s=e.getProvider("app").getImmediate(),n=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return new ve(s,n,r,t,gt)}function $s(){ut(new ct(nt,Bs,"PUBLIC").setMultipleInstances(!0)),xe(Le,Pe,""),xe(Le,Pe,"esm2017")}$s();function Fs(){const e=Fe(),t=_(e.currentUser),{uid:s,photoURL:n,displayName:r}=t.value,o=s,i=_([]),c=JSON.parse(localStorage.getItem("users")).filter(h=>h.id!==o);return i.value=c,{storedUsers:i}}function er(){const e=Fe(),t=_(e.currentUser),{firestore:s}=xt(),n=Ps(),r=t.value.uid,o=t.value.photoURL,i=t.value.displayName;_t();const{storedUsers:u}=Fs(),c=_(""),h=_([]),g=_(!1),b=_(null);let y=_({}),U=_(!1);const w=(d,v)=>[d,v].sort().join("_"),F=(d,v)=>{document.getElementById(d).showModal(),y.value=v,we(),console.log(h)},m=_(null),E=_(null),P=d=>{m.value=d},O=d=>{E.value=d},A=async()=>{if(!(c.value.trim()===""&&!m.value&&!E.value))try{const d=w(r,y.value.userId);U.value=!0,console.log(U.value);let v=null,I=null;if(m.value){const B=`chats/${d}/${Date.now()}_${m.value.name}`,j=$e(n,B),q=await Me(j,m.value);v=await Be(q.ref)}if(E.value){const B=`chats/${d}/${Date.now()}_${E.value.name}`,j=$e(n,B),q=await Me(j,E.value);I=await Be(q.ref)}await kt(Ee(s,`chats/${d}`),{participants:{[r]:!0,[y.value.userId]:!0},lastMessage:c.value||(v||I?"File attachment":""),sender:r,timestamp:Ae()},{merge:!0}),await Tt(Ne(s,`chats/${d}/messages`),{senderId:r,recipientId:y.value.userId,message:c.value,imageUrl:I,imageName:E.value?E.value.name:null,fileUrl:v,fileName:m.value?m.value.name:null,isSendMessageLoading:!1,timestamp:Ae()}),c.value="",m.value=null,E.value=null}catch(d){console.error("Error sending message: ",d)}finally{U.value=!1}},f=_({}),p=_({}),M=_([]),l=_({}),V=_(0),ie=Re(()=>u.value.filter(d=>f.value[w(r,d.id)]).sort((d,v)=>{const I=w(r,d.id),B=w(r,v.id);return l.value[B]-l.value[I]})),rt=()=>{M.value.forEach(v=>v()),M.value=[];const d=new Set;u.value.forEach(v=>{const I=w(r,v.id),B=Ee(s,"chats",I),j=Oe(B,q=>{if(q.exists()){const $=q.data(),Z=$.lastMessage||"",G=$.sender||"",ae=$.timestamp||"";f.value[I]=Z,p.value[I]=G,l.value[I]=ae,Z&&G!==r?d.has(G)||(d.add(G),V.value=d.size):d.has(G)&&(d.delete(G),V.value=d.size)}else{f.value[I]="",p.value[I]="",l.value[I]="";const $=p.value[I];d.has($)&&(d.delete($),V.value=d.size)}},q=>{console.error("Error listening to chat updates:",q)});M.value.push(j)})};he(()=>{rt()}),ke(()=>{M.value.forEach(d=>d())}),fe(V,d=>{console.log(V.value)});const ot=Re(()=>h.value.filter(d=>d.senderId===r&&d.recipientId===y.value.userId||d.senderId===y.value.userId&&d.recipientId===r)),it=()=>{je(()=>{b.value&&(b.value.scrollTop=b.value.scrollHeight)})},we=()=>{g.value=!0;const d=w(r,y.value.userId),v=It(Ne(s,`chats/${d}/messages`),Ut("timestamp","asc")),I=Oe(v,B=>{h.value=B.docs.map(j=>({id:j.id,...j.data()})),g.value=!1,it()});ke(()=>{I()})};return he(()=>{we()}),{Time:d=>{if(d){const v=new Date(d.seconds*1e3),I=new Date,B=v.getHours()%12||12,j=("0"+v.getMinutes()).slice(-2),q=v.getHours()<12?"am":"pm",$=`${B}:${j} ${q}`;if(v.toDateString()===I.toDateString())return $;const Z=new Date(I);if(Z.setDate(Z.getDate()-1),v.toDateString()===Z.toDateString())return`Yesterday ${$}`;const ae=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][v.getDay()],le=new Date(I);if(le.setDate(le.getDate()-7),v>le)return`${ae} ${$}`;const at=v.toLocaleString("default",{month:"short"}),lt=v.getDate();return`${at} ${lt} ${$}`}return""},getChatId:w,yourChat:F,sendMessage:A,userId:r,newMessage:c,messages:h,isLoading:g,isSendMessageLoading:U,filteredMessages:ot,selectedUser:y,timestamp:l,userPhoto:o,userName:i,filteredUsers:ie,latestMessages:f,isSender:p,storedUsers:u,newMessageArray:V,file:m,imageFile:E,handleImageUpdate:O,handleFileUpdate:P}}const js={class:"w-10 rounded-full"},qs=["src"],Hs={class:""},Vs={class:"text-sm font-medium capitalize"},zs={class:"flex gap-2 justify-start items-center"},Ws={key:0,class:"text-xs"},Ks={class:"text-[10px]"},tr={__name:"usersChatHeads",props:{yourChat:{type:Function,required:!0},formatTime:{type:Function,required:!0},user:{type:Object,required:!0},latestMessages:{type:Object,required:!0},getChatId:{type:Function,required:!0},userId:{type:[String,Number],required:!0},isSender:{type:Object,required:!0},timestamp:{type:Object,required:!0}},setup(e){return(t,s)=>(x(),R("div",{onClick:s[0]||(s[0]=n=>e.yourChat(e.user)),class:"flex justify-start items-center gap-2 cursor-pointer hover:bg-gray-500/20 transition p-1 rounded-md"},[a("div",{class:K(["avatar",e.user.status==="online"?"online":"offline"])},[a("div",js,[a("img",{src:e.user.userPhotoURL},null,8,qs)])],2),a("div",Hs,[a("h1",Vs,C(e.user.userName),1),a("div",zs,[e.latestMessages[e.getChatId(e.userId,e.user.id)]?(x(),R("span",{key:0,class:K(["text-xs px-2 py-0.5 truncate max-w-52 bg-gray-500/20 rounded-full",e.isSender[e.getChatId(e.userId,e.user.id)]===e.userId?"":"text-blue-500"])},[e.isSender[e.getChatId(e.userId,e.user.id)]===e.userId?(x(),R("span",Ws," You: ")):D("",!0),ee(" "+C(e.latestMessages[e.getChatId(e.userId,e.user.id)]),1)],2)):D("",!0),a("span",Ks,C(e.formatTime(e.timestamp[e.getChatId(e.userId,e.user.id)])),1)])])]))}},Xs={},Gs={class:"my-3"},Ys=bt('<div class="flex flex-col gap-4 w-32 ml-2"><div class="flex gap-2 items-center"><div class="skeleton w-10 h-10 rounded-full shrink-0"></div><div class="flex flex-col gap-2"><div class="skeleton h-2 w-10"></div><div class="skeleton h-2 w-20"></div></div></div></div><div class="flex justify-end mr-5"><div class="flex flex-col gap-4 w-32"><div class="flex gap-2 items-center"><div class="flex flex-col gap-2"><div class="skeleton h-2 w-20"></div><div class="skeleton h-2 w-10"></div></div><div class="skeleton w-10 h-10 rounded-full shrink-0"></div></div></div></div>',2),Js=[Ys];function Zs(e,t){return x(),R("div",Gs,Js)}const Qs=Rt(Xs,[["render",Zs]]),en={class:"modal-box relative p-2 no-scrollbar"},tn={class:"modal-action absolute z-10 -top-4 right-2"},sn={method:"dialog"},nn={class:"btn btn-xs px-0.5 rounded-full"},rn={class:"flex justify-start items-center gap-2"},on={class:"avatar"},an={class:"w-10 rounded-full"},ln=["src"],un={class:"text-sm font-medium"},cn=a("hr",{class:"my-1 border border-gray-400/20"},null,-1),dn={key:0,class:"my-2 flex justify-center items-center text-sm"},hn={class:"py-1 px-4 bg-primary/10 rounded-full"},fn={class:"text-primary font-semibold"},gn={class:"chat-image avatar"},mn={class:"w-10 rounded-full"},pn=["src"],_n=["src"],bn={class:"chat-header text-xs font-medium"},yn={class:"text-[10px] opacity-50"},vn={key:1,class:"w-52"},wn=["src"],xn={key:2,class:""},Rn=["src"],kn={key:3,class:"text-sm rounded-2xl backdrop-blur-2xl bg-gray-500/20 font-medium border border-gray-500/20 px-4 py-3"},Tn=["href"],In={key:4,class:"w-52"},Un={class:"text-sm rounded-b-2xl backdrop-blur-2xl bg-gray-500/20 font-medium border border-gray-500/20 px-4 py-3"},En=["href"],An={class:"chat-footer opacity-50 font-semibold text-xs"},Nn={key:1},On={class:"fixed bottom-0 z-50 inset-x-0"},Cn={key:0,class:"flex justify-center items-center"},Dn=a("span",{class:"backdrop-blur-2xl flex justify-center items-center gap-2 bg-gray-400/20 border px-4 text-sm font-medium py-1 transition border-gray-500/20 rounded-full"},[a("span",{class:"loading loading-dots loading-xs"}),a("span",null,"Sending..")],-1),Sn=[Dn],Ln={key:0,class:"ml-1 flex justify-start items-end gap-1 text-xs"},Pn={key:0},Mn=["src"],Bn={class:"flex justify-start items-center gap-1"},$n={class:"backdrop-blur-2xl flex bg-gray-400/20 justify-start items-center gap-2 px-2 py-1 border border-gray-500/20 rounded-xl"},Fn={class:"my-1 mx-1 flex justify-start items-center rounded-2xl gap-2 bg-gray-400/20 backdrop-blur-2xl shadow"},jn={class:"w-full rounded-2xl border border-gray-500/20 shadow"},qn=["disabled","value"],Hn={class:"flex justify-between items-center m-3 h-5"},Vn={class:"flex justify-center items-center gap-2"},zn=["disabled"],Wn={key:1,class:"cursor-not-allowed",disabled:""},Kn=10,Xn=24,sr={__name:"ChatModal",props:{userId:{type:String,required:!0},messages:{type:Array,required:!0},selectedUser:{type:Object,required:!0},userPhoto:{type:String,required:!0},userName:{type:String,required:!0},isSendMessageLoading:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},formatTime:{type:Function,required:!0},sendMessage:{type:Function,required:!0},filteredMessages:{type:Array},modelValue:{type:String,required:!0},selectedFile:{type:Object,default:null},selectedImage:{type:Object,default:null}},emits:["update:modelValue"],setup(e,{emit:t}){const s=e,n=t,r=_(null),o=_(null),i=_(null),u=_(null),c=_(null),h=_(""),g=_(null),b=_(null),y=_(null),U=_(!1),w=()=>{const f=o.value;if(f){const p=f.scrollTop,M=f.scrollHeight;f.style.height="auto";const l=f.scrollHeight,V=Kn*Xn;l>V?(f.style.height=`${V}px`,f.style.overflowY="auto"):f.style.height=`${l}px`;const ie=p+(l-M);f.scrollTop=ie}},F=f=>{n("update:modelValue",f.target.value),w()};fe(()=>s.modelValue,f=>{if(f===""){const p=o.value;p&&(p.style.height="auto",p.style.overflowY="hidden")}else w()}),he(()=>{w(),r.value&&(r.value.scrollTop=r.value.scrollHeight)}),fe(()=>s.filteredMessages,()=>{je(()=>{r.value&&(r.value.scrollTop=r.value.scrollHeight)})},{deep:!0},s.modelValue);const m=()=>{u.value&&(u.value.click(),U.value=!0)},E=()=>{U.value=!1,c.value&&c.value.click()},P=f=>{const p=f.target.files[0];p&&(g.value=p,n("update:selectedFile",g.value),h.value=g.value.name,console.log(g.value))},O=f=>{const p=f.target.files[0];p&&(b.value=p,n("update:selectedImage",b.value),y.value=URL.createObjectURL(p),h.value=b.value.name,console.log(b.value))},A=()=>{(g.value||b.value)&&(h.value="",y.value=null,b.value=null,g.value=null,n("update:selectedFile",null),n("update:selectedImage",null)),console.log(g.value,b.value)};return(f,p)=>{const M=wt("motion-fade");return x(),R("div",en,[a("div",tn,[a("form",sn,[a("button",nn,[L(z(W),{icon:"carbon:close",class:"text-xl text-red-500"})])])]),a("div",rn,[a("div",on,[a("div",an,[a("img",{src:e.selectedUser.userPhotoURL},null,8,ln)])]),a("div",null,[a("h1",un,C(e.selectedUser.userName),1)])]),cn,a("div",{class:"h-[366px] mb-[86px] rounded-md overflow-y-scroll",ref_key:"messageContainer",ref:r},[e.filteredMessages.length===0&&!e.isLoading?(x(),R("div",dn,[a("span",hn,[ee("No conversation with "),a("span",fn,C(e.selectedUser.userName),1)])])):D("",!0),(x(!0),R(yt,null,vt(e.filteredMessages,l=>(x(),R("div",{key:l.id},[a("div",{class:K(["chat",l.senderId===e.userId?"chat-end":"chat-start"])},[a("div",gn,[a("div",mn,[e.userId===l.senderId?(x(),R("img",{key:0,src:e.userPhoto},null,8,pn)):(x(),R("img",{key:1,src:e.selectedUser.userPhotoURL},null,8,_n))])]),a("div",bn,[ee(C(l.senderId===e.userId?e.userName:e.selectedUser.userName)+" ",1),a("time",yn,C(e.formatTime(l.timestamp)),1)]),l.message&&l.imageUrl===null&&l.fileUrl===null?(x(),R("div",{key:0,class:K(["chat-bubble text-sm",e.userId===l.senderId?"chat-bubble-primary":""])},C(l.message),3)):D("",!0),l.message&&l.imageUrl?(x(),R("div",vn,[a("div",{class:K(["rounded-t-2xl py-2 px-4 text-sm",e.userId===l.senderId?"chat-bubble-primary":""])},C(l.message),3),l.imageUrl?(x(),R("img",{key:0,src:l.imageUrl,loading:"lazy",alt:"",class:"h-auto w-52 object-cover border border-gray-500/20 rounded-b-2xl"},null,8,wn)):D("",!0)])):D("",!0),l.imageUrl&&l.message===""?(x(),R("div",xn,[a("img",{src:l.imageUrl,loading:"lazy",alt:"",class:"h-auto w-52 object-cover border border-gray-500/20 rounded-2xl"},null,8,Rn)])):D("",!0),l.fileUrl&&l.message===""?(x(),R("div",kn,[a("a",{href:l.fileUrl,download:"",class:"flex justify-start items-center gap-1"},[L(z(W),{icon:"simple-icons:googledocs",width:"16",height:"16"}),ee(C(l.fileName),1)],8,Tn)])):D("",!0),l.message&&l.fileUrl?(x(),R("div",In,[a("div",{class:K(["rounded-t-2xl py-2 px-4 text-sm",e.userId===l.senderId?"chat-bubble-primary":""])},C(l.message),3),a("div",Un,[a("a",{href:l.fileUrl,download:"",class:"flex justify-start items-center gap-1"},[L(z(W),{icon:"simple-icons:googledocs",width:"16",height:"16"}),ee(C(l.fileName),1)],8,En)])])):D("",!0),a("div",An,C(l.isSendMessageLoading?"Sending... bugs, hehehe":"Delivered"),1)],2)]))),128)),e.isLoading?(x(),R("div",Nn,[L(Qs)])):D("",!0)],512),a("div",On,[L(Ie,null,{default:Te(()=>[e.isSendMessageLoading?(x(),R("div",Cn,Sn)):D("",!0)]),_:1}),L(Ie,null,{default:Te(()=>[s.selectedFile||s.selectedImage!==null?(x(),R("div",Ln,[U.value?(x(),R("div",Pn,[a("img",{src:y.value,loading:"lazy",alt:"",class:"size-14 rounded-xl backdrop-blur-2xl object-cover bg-gray-400/20 border border-gray-500/20"},null,8,Mn)])):D("",!0),a("div",Bn,[a("span",$n,[L(z(W),{icon:"fluent:attach-16-regular",width:"20",height:"20"}),a("span",null,C(h.value),1)]),a("button",{onClick:p[0]||(p[0]=l=>A()),class:"backdrop-blur-2xl bg-gray-400/20 border p-0.5 hover:text-red-500 transition border-gray-500/20 rounded-full"},[L(z(W),{icon:"iconamoon:close-light",width:"20",height:"20"})])])])):D("",!0)]),_:1}),a("form",{ref_key:"messageBoxContainer",ref:i},[a("div",Fn,[a("div",jn,[a("textarea",{type:"text",disabled:e.isSendMessageLoading,cols:"1",rows:"1",required:"",autofocus:"",ref_key:"autoExpand",ref:o,value:e.modelValue,onInput:F,placeholder:"Enter a message",class:"w-full px-3 pt-3 placeholder:text-sm placeholder:text-gray-500 resize-none rounded-2xl no-scrollbar bg-transparent outline-none"},null,40,qn),a("div",Hn,[a("div",Vn,[a("button",{onClick:ue(m,["prevent"]),class:"transition p-1 rounded-full bg-gray-400/20 hover:text-success shadow"},[L(z(W),{icon:"tabler:photo",class:"text-xl"})]),a("input",{type:"file",ref_key:"imageInput",ref:u,accept:"image/*",onChange:O,class:"hidden"},null,544),a("input",{type:"file",ref_key:"fileInput",ref:c,accept:".pdf, .doc, .docx",onChange:P,class:"hidden"},null,544),a("button",{onClick:ue(E,["prevent"]),class:"transition p-1 rounded-full bg-gray-400/20 hover:text-secondary shadow"},[L(z(W),{icon:"tabler:file",class:"text-xl"})])]),a("div",{class:K(["rounded-full p-1.5 flex shadow justify-center transition items-center",e.modelValue||g.value||b.value!==null?"bg-blue-500 hover:bg-blue-500/90 ":"bg-primary/10 hover:bg-primary/20"])},[!e.isSendMessageLoading&&e.modelValue||g.value||b.value?Ue((x(),R("button",{key:0,class:K(e.isSendMessageLoading?"cursor-not-allowed":""),disabled:e.isSendMessageLoading,onClick:p[1]||(p[1]=ue((...l)=>e.sendMessage&&e.sendMessage(...l),["prevent"]))},[L(z(W),{icon:"bxs:send",class:"text-xl text-gray-200"})],10,zn)),[[M]]):Ue((x(),R("button",Wn,[L(z(W),{icon:"ic:round-mic",class:"text-xl text-primary"})])),[[M]])],2)])])])],512)])])}}};export{er as C,tr as _,Be as a,sr as b,Qn as d,Ps as g,$e as r,Me as u};
