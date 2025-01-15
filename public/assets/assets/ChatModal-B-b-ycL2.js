import{_ as At,C as Lt,z as Ke,A as pe,B as Ot,D as Nt,E as Pt,S as Mt,G as jt,H as Bt,g as dt,r as f,q as Xe,I as Ne,p as Ge,J as Ft,K as ht,o as v,c as b,a as i,j as C,n as se,t as N,e as ie,d as qt,b as _,x as de,u as l,T as he,F as je,w as Pe,i as Ht,f as be,h as Ye,y as zt}from"./index-BKro8zOE.js";import{u as Vt,_ as Wt,I as J}from"./_plugin-vue_export-helper-voprqtUv.js";import{s as Kt,d as Je,h as Ze,a as Xt,c as Qe,b as et,q as Gt,o as Yt}from"./index.esm2017-CrkKzH3m.js";/**
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
 */class D extends Bt{constructor(t,s,n=0){super(Ue(t),`Firebase Storage: ${s} (${Ue(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,D.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Ue(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var S;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(S||(S={}));function Ue(e){return"storage/"+e}function Be(){const e="An unknown error occurred, please check the error payload for server response.";return new D(S.UNKNOWN,e)}function Qt(e){return new D(S.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function es(e){return new D(S.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function ts(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new D(S.UNAUTHENTICATED,e)}function ss(){return new D(S.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function ns(e){return new D(S.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function rs(){return new D(S.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function os(){return new D(S.CANCELED,"User canceled the upload/download.")}function is(e){return new D(S.INVALID_URL,"Invalid URL '"+e+"'.")}function as(e){return new D(S.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function ls(){return new D(S.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+gt+"' property when initializing the app?")}function us(){return new D(S.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function cs(){return new D(S.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function ds(e){return new D(S.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Me(e){return new D(S.INVALID_ARGUMENT,e)}function mt(){return new D(S.APP_DELETED,"The Firebase app was deleted.")}function hs(e){return new D(S.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function me(e,t){return new D(S.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function fe(e){throw new D(S.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class H{constructor(t,s){this.bucket=t,this.path_=s}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,s){let n;try{n=H.makeFromUrl(t,s)}catch{return new H(t,"")}if(n.path==="")return n;throw as(t)}static makeFromUrl(t,s){let n=null;const r="([A-Za-z0-9.\\-_]+)";function o(L){L.path.charAt(L.path.length-1)==="/"&&(L.path_=L.path_.slice(0,-1))}const a="(/(.*))?$",d=new RegExp("^gs://"+r+a,"i"),c={bucket:1,path:3};function u(L){L.path_=decodeURIComponent(L.path)}const h="v[A-Za-z0-9_]+",p=s.replace(/[.]/g,"\\."),y="(/([^?#]*).*)?$",w=new RegExp(`^https?://${p}/${h}/b/${r}/o${y}`,"i"),T={bucket:1,path:3},R=s===ft?"(?:storage.googleapis.com|storage.cloud.google.com)":s,g="([^?#]*)",x=new RegExp(`^https?://${R}/${r}/${g}`,"i"),B=[{regex:d,indices:c,postModify:o},{regex:w,indices:T,postModify:u},{regex:x,indices:{bucket:1,path:2},postModify:u}];for(let L=0;L<B.length;L++){const F=B[L],W=F.regex.exec(t);if(W){const I=W[F.indices.bucket];let U=W[F.indices.path];U||(U=""),n=new H(I,U),F.postModify(n);break}}if(n==null)throw is(t);return n}}class fs{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function gs(e,t,s){let n=1,r=null,o=null,a=!1,d=0;function c(){return d===2}let u=!1;function h(...g){u||(u=!0,t.apply(null,g))}function p(g){r=setTimeout(()=>{r=null,e(w,c())},g)}function y(){o&&clearTimeout(o)}function w(g,...x){if(u){y();return}if(g){y(),h.call(null,g,...x);return}if(c()||a){y(),h.call(null,g,...x);return}n<64&&(n*=2);let B;d===1?(d=2,B=0):B=(n+Math.random())*1e3,p(B)}let T=!1;function R(g){T||(T=!0,y(),!u&&(r!==null?(g||(d=2),clearTimeout(r),p(0)):g||(d=1)))}return p(0),o=setTimeout(()=>{a=!0,R(!0)},s),R}function ms(e){e(!1)}/**
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
 */function ps(e){return e!==void 0}function vs(e){return typeof e=="object"&&!Array.isArray(e)}function Fe(e){return typeof e=="string"||e instanceof String}function tt(e){return qe()&&e instanceof Blob}function qe(){return typeof Blob<"u"}function st(e,t,s,n){if(n<t)throw Me(`Invalid value for '${e}'. Expected ${t} or greater.`);if(n>s)throw Me(`Invalid value for '${e}'. Expected ${s} or less.`)}/**
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
 */function _e(e,t,s){let n=t;return s==null&&(n=`https://${t}`),`${s}://${n}/v0${e}`}function pt(e){const t=encodeURIComponent;let s="?";for(const n in e)if(e.hasOwnProperty(n)){const r=t(n)+"="+t(e[n]);s=s+r+"&"}return s=s.slice(0,-1),s}/**
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
 */class ys{constructor(t,s,n,r,o,a,d,c,u,h,p,y=!0){this.url_=t,this.method_=s,this.headers_=n,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=a,this.callback_=d,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=p,this.retry=y,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((w,T)=>{this.resolve_=w,this.reject_=T,this.start_()})}start_(){const t=(n,r)=>{if(r){n(!1,new ye(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const a=d=>{const c=d.loaded,u=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&o.addUploadProgressListener(a),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(a),this.pendingConnection_=null;const d=o.getErrorCode()===ae.NO_ERROR,c=o.getStatus();if(!d||bs(c,this.additionalRetryCodes_)&&this.retry){const h=o.getErrorCode()===ae.ABORT;n(!1,new ye(!1,null,h));return}const u=this.successCodes_.indexOf(c)!==-1;n(!0,new ye(u,o))})},s=(n,r)=>{const o=this.resolve_,a=this.reject_,d=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(d,d.getResponse());ps(c)?o(c):o()}catch(c){a(c)}else if(d!==null){const c=Be();c.serverResponse=d.getErrorText(),this.errorCallback_?a(this.errorCallback_(d,c)):a(c)}else if(r.canceled){const c=this.appDelete_?mt():os();a(c)}else{const c=rs();a(c)}};this.canceled_?s(!1,new ye(!1,null,!0)):this.backoffId_=gs(t,s,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&ms(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ye{constructor(t,s,n){this.wasSuccessCode=t,this.connection=s,this.canceled=!!n}}function xs(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function ws(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function _s(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Rs(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function Is(e,t,s,n,r,o,a=!0){const d=pt(e.urlParams),c=e.url+d,u=Object.assign({},e.headers);return _s(u,t),xs(u,s),ws(u,o),Rs(u,n),new ys(c,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r,a)}/**
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
 */function ks(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Ts(...e){const t=ks();if(t!==void 0){const s=new t;for(let n=0;n<e.length;n++)s.append(e[n]);return s.getBlob()}else{if(qe())return new Blob(e);throw new D(S.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Us(e,t,s){return e.webkitSlice?e.webkitSlice(t,s):e.mozSlice?e.mozSlice(t,s):e.slice?e.slice(t,s):null}/**
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
 */const X={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ce{constructor(t,s){this.data=t,this.contentType=s||null}}function Es(e,t){switch(e){case X.RAW:return new Ce(vt(t));case X.BASE64:case X.BASE64URL:return new Ce(bt(e,t));case X.DATA_URL:return new Ce(Ss(t),Ds(t))}throw Be()}function vt(e){const t=[];for(let s=0;s<e.length;s++){let n=e.charCodeAt(s);if(n<=127)t.push(n);else if(n<=2047)t.push(192|n>>6,128|n&63);else if((n&64512)===55296)if(!(s<e.length-1&&(e.charCodeAt(s+1)&64512)===56320))t.push(239,191,189);else{const o=n,a=e.charCodeAt(++s);n=65536|(o&1023)<<10|a&1023,t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|n&63)}else(n&64512)===56320?t.push(239,191,189):t.push(224|n>>12,128|n>>6&63,128|n&63)}return new Uint8Array(t)}function $s(e){let t;try{t=decodeURIComponent(e)}catch{throw me(X.DATA_URL,"Malformed data URL.")}return vt(t)}function bt(e,t){switch(e){case X.BASE64:{const r=t.indexOf("-")!==-1,o=t.indexOf("_")!==-1;if(r||o)throw me(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case X.BASE64URL:{const r=t.indexOf("+")!==-1,o=t.indexOf("/")!==-1;if(r||o)throw me(e,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let s;try{s=Cs(t)}catch(r){throw r.message.includes("polyfill")?r:me(e,"Invalid character found")}const n=new Uint8Array(s.length);for(let r=0;r<s.length;r++)n[r]=s.charCodeAt(r);return n}class yt{constructor(t){this.base64=!1,this.contentType=null;const s=t.match(/^data:([^,]+)?,/);if(s===null)throw me(X.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=s[1]||null;n!=null&&(this.base64=As(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=t.substring(t.indexOf(",")+1)}}function Ss(e){const t=new yt(e);return t.base64?bt(X.BASE64,t.rest):$s(t.rest)}function Ds(e){return new yt(e).contentType}function As(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class te{constructor(t,s){let n=0,r="";tt(t)?(this.data_=t,n=t.size,r=t.type):t instanceof ArrayBuffer?(s?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(s?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,s){if(tt(this.data_)){const n=this.data_,r=Us(n,t,s);return r===null?null:new te(r)}else{const n=new Uint8Array(this.data_.buffer,t,s-t);return new te(n,!0)}}static getBlob(...t){if(qe()){const s=t.map(n=>n instanceof te?n.data_:n);return new te(Ts.apply(null,s))}else{const s=t.map(a=>Fe(a)?Es(X.RAW,a).data:a.data_);let n=0;s.forEach(a=>{n+=a.byteLength});const r=new Uint8Array(n);let o=0;return s.forEach(a=>{for(let d=0;d<a.length;d++)r[o++]=a[d]}),new te(r,!0)}}uploadData(){return this.data_}}/**
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
 */function Ns(e,t){return t}class j{constructor(t,s,n,r){this.server=t,this.local=s||t,this.writable=!!n,this.xform=r||Ns}}let xe=null;function Ps(e){return!Fe(e)||e.length<2?e:wt(e)}function _t(){if(xe)return xe;const e=[];e.push(new j("bucket")),e.push(new j("generation")),e.push(new j("metageneration")),e.push(new j("name","fullPath",!0));function t(o,a){return Ps(a)}const s=new j("name");s.xform=t,e.push(s);function n(o,a){return a!==void 0?Number(a):a}const r=new j("size");return r.xform=n,e.push(r),e.push(new j("timeCreated")),e.push(new j("updated")),e.push(new j("md5Hash",null,!0)),e.push(new j("cacheControl",null,!0)),e.push(new j("contentDisposition",null,!0)),e.push(new j("contentEncoding",null,!0)),e.push(new j("contentLanguage",null,!0)),e.push(new j("contentType",null,!0)),e.push(new j("metadata","customMetadata",!0)),xe=e,xe}function Ms(e,t){function s(){const n=e.bucket,r=e.fullPath,o=new H(n,r);return t._makeStorageReference(o)}Object.defineProperty(e,"ref",{get:s})}function js(e,t,s){const n={};n.type="file";const r=s.length;for(let o=0;o<r;o++){const a=s[o];n[a.local]=a.xform(n,t[a.server])}return Ms(n,e),n}function Rt(e,t,s){const n=xt(t);return n===null?null:js(e,n,s)}function Bs(e,t,s,n){const r=xt(t);if(r===null||!Fe(r.downloadTokens))return null;const o=r.downloadTokens;if(o.length===0)return null;const a=encodeURIComponent;return o.split(",").map(u=>{const h=e.bucket,p=e.fullPath,y="/b/"+a(h)+"/o/"+a(p),w=_e(y,s,n),T=pt({alt:"media",token:u});return w+T})[0]}function Fs(e,t){const s={},n=t.length;for(let r=0;r<n;r++){const o=t[r];o.writable&&(s[o.server]=e[o.local])}return JSON.stringify(s)}class He{constructor(t,s,n,r){this.url=t,this.method=s,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function It(e){if(!e)throw Be()}function qs(e,t){function s(n,r){const o=Rt(e,r,t);return It(o!==null),o}return s}function Hs(e,t){function s(n,r){const o=Rt(e,r,t);return It(o!==null),Bs(o,r,e.host,e._protocol)}return s}function kt(e){function t(s,n){let r;return s.getStatus()===401?s.getErrorText().includes("Firebase App Check token is invalid")?r=ss():r=ts():s.getStatus()===402?r=es(e.bucket):s.getStatus()===403?r=ns(e.path):r=n,r.status=s.getStatus(),r.serverResponse=n.serverResponse,r}return t}function Tt(e){const t=kt(e);function s(n,r){let o=t(n,r);return n.getStatus()===404&&(o=Qt(e.path)),o.serverResponse=r.serverResponse,o}return s}function zs(e,t,s){const n=t.fullServerUrl(),r=_e(n,e.host,e._protocol),o="GET",a=e.maxOperationRetryTime,d=new He(r,o,Hs(e,s),a);return d.errorHandler=Tt(t),d}function Vs(e,t){const s=t.fullServerUrl(),n=_e(s,e.host,e._protocol),r="DELETE",o=e.maxOperationRetryTime;function a(c,u){}const d=new He(n,r,a,o);return d.successCodes=[200,204],d.errorHandler=Tt(t),d}function Ws(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function Ks(e,t,s){const n=Object.assign({},s);return n.fullPath=e.path,n.size=t.size(),n.contentType||(n.contentType=Ws(null,t)),n}function Xs(e,t,s,n,r){const o=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function d(){let B="";for(let L=0;L<2;L++)B=B+Math.random().toString().slice(2);return B}const c=d();a["Content-Type"]="multipart/related; boundary="+c;const u=Ks(t,n,r),h=Fs(u,s),p="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,y=`\r
--`+c+"--",w=te.getBlob(p,n,y);if(w===null)throw us();const T={name:u.fullPath},R=_e(o,e.host,e._protocol),g="POST",x=e.maxUploadRetryTime,M=new He(R,g,qs(e,s),x);return M.urlParams=T,M.headers=a,M.body=w.uploadData(),M.errorHandler=kt(t),M}class Gs{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ae.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ae.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ae.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,s,n,r){if(this.sent_)throw fe("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(s,t,!0),r!==void 0)for(const o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return n!==void 0?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw fe("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw fe("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw fe("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw fe("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class Ys extends Gs{initXhr(){this.xhr_.responseType="text"}}function ze(){return new Ys}/**
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
 */class le{constructor(t,s){this._service=t,s instanceof H?this._location=s:this._location=H.makeFromUrl(s,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,s){return new le(t,s)}get root(){const t=new H(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return wt(this._location.path)}get storage(){return this._service}get parent(){const t=Ls(this._location.path);if(t===null)return null;const s=new H(this._location.bucket,t);return new le(this._service,s)}_throwIfRoot(t){if(this._location.path==="")throw hs(t)}}function Js(e,t,s){e._throwIfRoot("uploadBytes");const n=Xs(e.storage,e._location,_t(),new te(t,!0),s);return e.storage.makeRequestWithTokens(n,ze).then(r=>({metadata:r,ref:e}))}function Zs(e){e._throwIfRoot("getDownloadURL");const t=zs(e.storage,e._location,_t());return e.storage.makeRequestWithTokens(t,ze).then(s=>{if(s===null)throw cs();return s})}function Qs(e){e._throwIfRoot("deleteObject");const t=Vs(e.storage,e._location);return e.storage.makeRequestWithTokens(t,ze)}function en(e,t){const s=Os(e._location.path,t),n=new H(e._location.bucket,s);return new le(e.storage,n)}/**
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
 */function tn(e){return/^[A-Za-z]+:\/\//.test(e)}function sn(e,t){return new le(e,t)}function Ut(e,t){if(e instanceof Ve){const s=e;if(s._bucket==null)throw ls();const n=new le(s,s._bucket);return t!=null?Ut(n,t):n}else return t!==void 0?en(e,t):e}function nn(e,t){if(t&&tn(t)){if(e instanceof Ve)return sn(e,t);throw Me("To use ref(service, url), the first argument must be a Storage instance.")}else return Ut(e,t)}function nt(e,t){const s=t==null?void 0:t[gt];return s==null?null:H.makeFromBucketSpec(s,e)}function rn(e,t,s,n={}){e.host=`${t}:${s}`,e._protocol="http";const{mockUserToken:r}=n;r&&(e._overrideAuthToken=typeof r=="string"?r:jt(r,e.app.options.projectId))}class Ve{constructor(t,s,n,r,o){this.app=t,this._authProvider=s,this._appCheckProvider=n,this._url=r,this._firebaseVersion=o,this._bucket=null,this._host=ft,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Jt,this._maxUploadRetryTime=Zt,this._requests=new Set,r!=null?this._bucket=H.makeFromBucketSpec(r,this._host):this._bucket=nt(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=H.makeFromBucketSpec(this._url,t):this._bucket=nt(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){st("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){st("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const s=await t.getToken();if(s!==null)return s.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new le(this,t)}_makeRequest(t,s,n,r,o=!0){if(this._deleted)return new fs(mt());{const a=Is(t,this._appId,n,r,s,this._firebaseVersion,o);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(t,s){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,s,n,r).getPromise()}}const rt="@firebase/storage",ot="0.12.5";/**
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
 */const Ct="storage";function it(e,t,s){return e=pe(e),Js(e,t,s)}function at(e){return e=pe(e),Zs(e)}function no(e){return e=pe(e),Qs(e)}function lt(e,t){return e=pe(e),nn(e,t)}function on(e=Pt(),t){e=pe(e);const n=Ot(e,Ct).getImmediate({identifier:t}),r=Nt("storage");return r&&an(n,...r),n}function an(e,t,s,n={}){rn(e,t,s,n)}function ln(e,{instanceIdentifier:t}){const s=e.getProvider("app").getImmediate(),n=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return new Ve(s,n,r,t,Mt)}function un(){At(new Lt(Ct,ln,"PUBLIC").setMultipleInstances(!0)),Ke(rt,ot,""),Ke(rt,ot,"esm2017")}un();function cn(){const e=dt(),t=f(e.currentUser),{uid:s,photoURL:n,displayName:r}=t.value,o=s,a=f([]),c=JSON.parse(localStorage.getItem("users")).filter(u=>u.id!==o);return a.value=c,{storedUsers:a}}function ro(){const e=dt(),t=f(e.currentUser),{firestore:s}=Vt(),n=on(),r=t.value.uid,o=t.value.photoURL,a=t.value.displayName;Ft();const{storedUsers:d}=cn(),c=f(""),u=f([]),h=f(!1),p=f(null);let y=f({}),w=f(!1);const T=(m,k)=>[m,k].sort().join("_"),R=(m,k)=>{document.getElementById(m).showModal(),y.value=k,We(),console.log(u)},g=f(null),x=f(null),M=m=>{g.value=m},B=m=>{x.value=m},L=async()=>{if(c.value.trim()===""&&!g.value&&!x.value){console.warn("Please enter a message or select a file");return}w.value=!0;const m=T(r,y.value.userId),k={id:`temp_${Date.now()}`,senderId:r,recipientId:y.value.userId,message:c.value,imageUrl:x.value?URL.createObjectURL(x.value):null,imageName:x.value?x.value.name:null,fileUrl:g.value?URL.createObjectURL(g.value):null,fileName:g.value?g.value.name:null,isSending:!0,timestamp:new Date};u.value.push(k),Ie();let E=null,z=null;try{if(g.value){const A=`chats/${m}/${Date.now()}_${g.value.name}`,O=lt(n,A),K=await it(O,g.value);E=await at(K.ref)}if(x.value){const A=`chats/${m}/${Date.now()}_${x.value.name}`,O=lt(n,A),K=await it(O,x.value);z=await at(K.ref)}await Kt(Je(s,`chats/${m}`),{participants:{[r]:!0,[y.value.userId]:!0},lastMessage:c.value||(E||z?"File attachment":""),sender:r,timestamp:Ze()},{merge:!0});const Y=await Xt(Qe(s,`chats/${m}/messages`),{senderId:r,recipientId:y.value.userId,message:c.value,imageUrl:z,imageName:x.value?x.value.name:null,fileUrl:E,fileName:g.value?g.value.name:null,timestamp:Ze()});u.value=u.value.map(A=>A.id===k.id?{...A,id:Y.id,isSending:!1,imageUrl:z,fileUrl:E}:A),localStorage.setItem(`messages_${m}`,JSON.stringify(u.value)),w.value=!1,c.value="",g.value=null,x.value=null}catch(Y){w.value=!1,console.error("Error sending message:",Y),u.value=u.value.map(A=>A.id===k.id?{...A,isSending:!1,error:"Failed to send message."}:A)}},F=f({}),W=f({}),I=f([]),U=f({}),G=f(0),P=Xe(()=>d.value.filter(m=>F.value[T(r,m.id)]).sort((m,k)=>{const E=T(r,m.id),z=T(r,k.id);return U.value[z]-U.value[E]})),ve=()=>{I.value.forEach(k=>k()),I.value=[];const m=new Set;d.value.forEach(k=>{const E=T(r,k.id),z=Je(s,"chats",E),Y=et(z,A=>{if(A.exists()){const O=A.data(),K=O.lastMessage||"",ne=O.sender||"",ke=O.timestamp||"";F.value[E]=K,W.value[E]=ne,U.value[E]=ke,K&&ne!==r?m.has(ne)||(m.add(ne),G.value=m.size):m.has(ne)&&(m.delete(ne),G.value=m.size)}else{F.value[E]="",W.value[E]="",U.value[E]="";const O=W.value[E];m.has(O)&&(m.delete(O),G.value=m.size)}},A=>{console.error("Error listening to chat updates:",A)});I.value.push(Y)})};Ne(()=>{ve()}),Ge(()=>{I.value.forEach(m=>m())});const Re=Xe(()=>u.value.filter(m=>m.senderId===r&&m.recipientId===y.value.userId||m.senderId===y.value.userId&&m.recipientId===r)),We=()=>{const m=T(r,y.value.userId),k=localStorage.getItem(`messages_${m}`);k&&(u.value=JSON.parse(k),Ie()),h.value=!0;const E=Gt(Qe(s,`chats/${m}/messages`),Yt("timestamp","asc")),z=et(E,Y=>{const A=Y.docs.map(O=>({id:O.id,...O.data()}));u.value=A,h.value=!1,localStorage.setItem(`messages_${m}`,JSON.stringify(A)),Ie()});Ge(()=>{z()})};Ne(()=>{We()});const Ie=()=>{ht(()=>{p.value&&(p.value.scrollTop=p.value.scrollHeight)})};return{Time:m=>{if(m){const k=new Date(m.seconds*1e3),E=new Date,z=k.getHours()%12||12,Y=("0"+k.getMinutes()).slice(-2),A=k.getHours()<12?"am":"pm",O=`${z}:${Y} ${A}`;if(k.toDateString()===E.toDateString())return O;const K=new Date(E);if(K.setDate(K.getDate()-1),k.toDateString()===K.toDateString())return`Yesterday ${O}`;const ke=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][k.getDay()],Te=new Date(E);if(Te.setDate(Te.getDate()-7),k>Te)return`${ke} ${O}`;const St=k.toLocaleString("default",{month:"short"}),Dt=k.getDate();return`${St} ${Dt} ${O}`}return""},getChatId:T,yourChat:R,sendMessage:L,userId:r,newMessage:c,messages:u,isLoading:h,isSendMessageLoading:w,filteredMessages:Re,selectedUser:y,timestamp:U,userPhoto:o,userName:a,filteredUsers:P,latestMessages:F,isSender:W,storedUsers:d,newMessageArray:G,file:g,imageFile:x,handleImageUpdate:B,handleFileUpdate:M}}const dn={class:"w-10 rounded-full"},hn={key:0,class:"size-10 bg-gray-500/20 border border-gray-500/20 rounded-full"},fn=["src"],gn={class:""},mn={class:"text-sm font-medium capitalize"},pn={class:"flex gap-2 justify-start items-center"},vn={key:0,class:"text-xs"},bn={class:"text-[10px]"},oo={__name:"usersChatHeads",props:{yourChat:{type:Function,required:!0},formatTime:{type:Function,required:!0},user:{type:Object,required:!0},latestMessages:{type:Object,required:!0},getChatId:{type:Function,required:!0},userId:{type:[String,Number],required:!0},isSender:{type:Object,required:!0},timestamp:{type:Object,required:!0}},setup(e){const t=f(!0),s=()=>{console.log("loading is done!"),t.value=!1},n=()=>{t.value=!1};return(r,o)=>(v(),b("div",{onClick:o[0]||(o[0]=a=>e.yourChat(e.user)),class:"flex justify-start items-center gap-2 cursor-pointer hover:bg-gray-500/20 transition p-1 rounded-md"},[i("div",{class:se(["avatar",e.user.status==="online"?"online":"offline"])},[i("div",dn,[t.value?(v(),b("div",hn)):C("",!0),i("img",{src:e.user.userPhotoURL,loading:"lazy",class:"bg-gray-500/20 border border-gray-500/20 rounded-full",onLoad:s,onError:n},null,40,fn)])],2),i("div",gn,[i("h1",mn,N(e.user.userName),1),i("div",pn,[e.latestMessages[e.getChatId(e.userId,e.user.id)]?(v(),b("span",{key:0,class:se(["text-xs px-2 py-0.5 truncate max-w-52 bg-gray-500/20 rounded-full",e.isSender[e.getChatId(e.userId,e.user.id)]===e.userId?"":"text-blue-500"])},[e.isSender[e.getChatId(e.userId,e.user.id)]===e.userId?(v(),b("span",vn," You: ")):C("",!0),ie(" "+N(e.latestMessages[e.getChatId(e.userId,e.user.id)]),1)],2)):C("",!0),i("span",bn,N(e.formatTime(e.timestamp[e.getChatId(e.userId,e.user.id)])),1)])])]))}},yn={},xn={class:"my-3"},wn=qt('<div class="flex flex-col gap-4 w-32 ml-2"><div class="flex gap-2 items-center"><div class="skeleton w-10 h-10 rounded-full shrink-0"></div><div class="flex flex-col gap-2"><div class="skeleton h-2 w-10"></div><div class="skeleton h-2 w-20"></div></div></div></div><div class="flex justify-end mr-5"><div class="flex flex-col gap-4 w-32"><div class="flex gap-2 items-center"><div class="flex flex-col gap-2"><div class="skeleton h-2 w-20"></div><div class="skeleton h-2 w-10"></div></div><div class="skeleton w-10 h-10 rounded-full shrink-0"></div></div></div></div>',2),_n=[wn];function Rn(e,t){return v(),b("div",xn,_n)}const In=Wt(yn,[["render",Rn]]),we=f(""),Z=f(null),Q=f(null),Ee=f(null),$e=f(!1),re=f(!1),ut=f(""),Se=f(""),oe=f(!0),De=f(!1),kn=f(6e4);let Ae=null,ge=null,$=null,ue=null;const ce=f("0:00.0");let Le=null,q=null;const ee=f(0),Oe=f(!1);let Tn=f(0),ct=f(null);const V=f({id:null,isClick:!1});function Et(e){const t=h=>{$e.value=!1;const p=h.target.files[0];p&&(Z.value=p,we.value=Z.value.name,console.log(Z.value),e("update:selectedFile",Z.value))},s=h=>{$e.value=!0;const p=h.target.files[0];p&&(Q.value=p,Ee.value=URL.createObjectURL(p),we.value=Q.value.name,console.log(Q.value),e("update:selectedImage",Q.value))},n=()=>{(Z.value||Q.value)&&(we.value="",Ee.value=null,Q.value=null,Z.value=null),console.log(Z.value,Q.value)},r=(h,p)=>{Se.value=p,ct.value=h,console.log(h),V.value.id===h?(V.value.id=null,V.value.isClick=!1,console.log(V.value.id),console.log(V.value.isClick)):(V.value.isClick=!0,V.value.id=h)},o=f(!1),a=f(!1);return{selectedChatId:ct,showDetailsId:V,isShowDeleteConfirmation:o,isShowCopied:a,isImage:$e,deleteChat:h=>{o.value=!0,console.log(h)},selectedFile:Z,selectedImage:Q,imageURL:Ee,fileName:we,closeAttachements:n,cancelDeleteConfirmation:()=>{o.value=!1,V.value.id=null,V.value.isClick=!1},copyChat:()=>{navigator.clipboard.writeText(Se).then(()=>{a.value=!0,console.log(Se.value),setTimeout(()=>{a.value=!1},2e3)}).catch(h=>{console.error("Failed to copy text: ",h)}),V.value.id=null,V.value.isClick=!1,console.log("copied")},Icon:J,showInfo:r,handleFileChange:t,handleImageChange:s,emit:e}}function $t(){const e=u=>{const h=Math.floor(u/1e3),p=Math.floor(h/60).toString().padStart(1,"0"),y=(h%60).toString().padStart(2,"0"),w=(u%1e3).toString().padStart(3,"0").slice(0,1);return`${p}:${y}:${w}`},t=()=>{if(re.value){const h=Date.now()-Le;ce.value=e(h),ee.value=h/kn.value*100}},s=async()=>{console.log("recording start..."),t(),ee.value=0,Tn.value=0,clearInterval(q),oe.value=!0;try{const u=await navigator.mediaDevices.getUserMedia({audio:!0});ue=new MediaRecorder(u),ue.ondataavailable=h=>{Ae=h.data,ge=URL.createObjectURL(Ae),$=new Audio(ge),$.addEventListener("timeupdate",n),$.addEventListener("ended",r)},ue.start(),re.value=!0,Le=Date.now(),$&&$.pause(),q=setInterval(()=>{t(),ee.value>=100&&o()},100)}catch(u){ut.value="Recording is not supported or failed.",Oe.value=!0,setTimeout(()=>{Oe.value=!1},2e3),console.error(u)}},n=()=>{if($&&!re.value){const u=$.currentTime/$.duration*100;ee.value=u,ce.value=e($.currentTime*1e3)}},r=()=>{oe.value=!0,ee.value=100,$&&(ce.value=e($.duration*1e3))},o=()=>{if(console.log("recording stopped..."),ue&&ue.state!=="inactive"){ue.stop(),re.value=!1,oe.value=!0,q&&(clearInterval(q),q=null);const u=Date.now()-Le;ce.value=e(u)}};return{startRecording:s,pauseRecording:()=>{console.log("paused"),re.value?o():$&&($.pause(),oe.value=!0,q&&(clearInterval(q),q=null)),De.value=!0},deleteRecording:()=>{console.log("Recording deleted..."),o(),re.value=!1,De.value=!1,$&&($.pause(),$.currentTime=0,$.removeEventListener("timeupdate",n),$.removeEventListener("ended",r)),q&&(clearInterval(q),q=null),ge&&(URL.revokeObjectURL(ge),Ae=null,ge=null,$=null,oe.value=!0,ee.value=0,ce.value="0:00.0")},stopRecording:o,isShowRecordingModal:De,isPause:oe,playRecord:()=>{console.log("playing"),$&&(ee.value=0,$.currentTime=0,$.play(),oe.value=!1,q||(q=setInterval(()=>{n()},100)))},recordingProgress:ee,elapsedTime:ce,isRecording:re,Icon:J,recordingError:ut,isRecordingError:Oe}}const Un={key:0,class:"backdrop-blur-2xl flex mb-1 justify-start items-center gap-1 bg-red-400/10 border py-1 px-2 text-sm font-medium transition border-red-500/20 rounded-full"},Cn={key:0,class:"flex mb-1 justify-center items-center gap-2"},En=i("span",{class:"backdrop-blur-2xl flex justify-center items-center gap-2 bg-green-400/10 border px-2 text-sm font-medium py-1 transition border-green-500/20 rounded-full"},[i("span",{class:"loading loading-ring text-green-500 loading-md"}),i("span",null,"Recording..")],-1),$n={key:0,class:"fixed bottom-0 backdrop-blur-2xl py-5 z-50 inset-x-0"},Sn={class:"flex justify-center items-center mb-4 gap-1 mx-2"},Dn={class:"backdrop-blur-2xl flex justify-start w-full items-center gap-2 bg-gray-400/20 border px-2 text-sm font-medium py-2 transition border-gray-500/20 rounded-l-xl"},An={class:"flex justify-start w-full items-center"},Ln={class:"w-full border flex justify-center item-center p-1 border-gray-500/20 rounded-2xl"},On=["value"],Nn={class:"max-w-16 tabular-nums font-mono text-[10px]"},Pn={class:"px-2 flex justify-between items-center gap-1"},Mn={class:"flex justify-start items-center gap-1"},jn={class:"bg-blue-500 cursor-not-allowed hover:bg-blue-600 transition text-gray-100 rounded-full px-4 py-2 flex justify-start items-center gap-2"},Bn=i("span",{class:"text-sm font-meduim"},"Send",-1),Fn={__name:"recordingModal",setup(e){const{startRecording:t,pauseRecording:s,deleteRecording:n,stopRecording:r,isShowRecordingModal:o,isPause:a,playRecord:d,recordingProgress:c,elapsedTime:u,isRecording:h,Icon:p,recordingError:y,isRecordingError:w}=$t();return(T,R)=>(v(),b(je,null,[_(he,null,{default:de(()=>[l(w)?(v(),b("span",Un,[_(l(p),{icon:"material-symbols:error",class:"text-red-500",width:"20",height:"20"}),ie(" "+N(l(y)),1)])):C("",!0)]),_:1}),_(he,null,{default:de(()=>[l(h)?(v(),b("div",Cn,[En,i("button",{onClick:R[0]||(R[0]=g=>l(s)()),class:"backdrop-blur-2xl flex justify-center items-center gap-1 bg-red-400/10 border py-1 px-2 text-sm font-medium transition border-red-500/20 rounded-full"},[_(l(p),{icon:"ic:round-pause",width:"20",height:"20",class:"text-red-500"}),ie(" Pause ")]),i("button",{onClick:R[1]||(R[1]=g=>l(n)()),class:"backdrop-blur-2xl flex justify-center items-center gap-1 py-1 px-2 text-sm font-medium transition rounded-full"},[_(l(p),{icon:"mingcute:delete-fill",width:"20",height:"20",class:"text-red-500"})])])):C("",!0)]),_:1}),l(o)?(v(),b("div",$n,[i("div",Sn,[i("div",Dn,[i("div",An,[i("button",{onClick:R[2]||(R[2]=g=>l(a)?l(d)():l(s)())},[_(l(p),{icon:l(a)?"iconoir:play-solid":"ic:round-pause",width:"20",height:"20"},null,8,["icon"])]),i("div",Ln,[i("progress",{class:"progress progress-primary w-full mx-1",value:l(c),max:"100"},null,8,On)])]),i("div",Nn,N(l(u)),1)]),i("button",{class:"px-2 bg-gray-400/20 border hover:text-green-500 transition border-gray-500/20 rounded-r-xl py-2",onClick:R[3]||(R[3]=g=>l(h)?l(r)():l(t)())},[_(l(p),{icon:l(h)?"ic:round-stop":"fluent:mic-pulse-48-filled",width:"20",height:"20",class:se(l(h)?"text-red-500":"")},null,8,["icon","class"])])]),i("div",Pn,[i("div",Mn,[i("button",{onClick:R[4]||(R[4]=g=>l(n)()),class:"backdrop-blur-2xl flex justify-center items-center gap-1 py-1 hover:bg-red-500/10 px-2 text-sm font-medium transition rounded-full"},[_(l(p),{icon:"mingcute:delete-fill",width:"20",height:"20",class:"text-red-500"})]),i("button",{onClick:R[5]||(R[5]=g=>l(t)()),class:"backdrop-blur-2xl flex justify-center items-center hover:bg-green-500/10 gap-1 py-1 px-2 text-sm font-medium transition rounded-full"},[_(l(p),{icon:"ion:reload",width:"20",height:"20",class:"text-green-500"})])]),i("div",null,[i("button",jn,[Bn,_(l(p),{icon:"bxs:send",class:"text-xl text-gray-200"})])])])])):C("",!0)],64))}},qn={class:"chat-image avatar"},Hn={key:0,class:"size-5 rounded-full"},zn=["src"],Vn={key:0,class:"chat-header text-xs font-medium"},Wn={key:2,class:"w-52"},Kn={class:""},Xn={key:0,class:"w-52 h-32 bg-gray-500/20 border border-gray-500/20 rounded-2xl"},Gn=["src"],Yn={key:3,class:""},Jn={key:0,class:"w-52 h-32 bg-gray-500/20 border border-gray-500/20 rounded-2xl"},Zn=["src"],Qn={key:4,class:"text-sm rounded-2xl backdrop-blur-2xl max-w-52 bg-gray-500/20 font-medium border border-gray-500/20 px-4 py-3"},er=["href"],tr={key:5,class:"max-w-52"},sr={class:"text-sm rounded-b-2xl backdrop-blur-2xl bg-gray-500/20 font-medium border border-gray-500/20 px-4 py-3"},nr=["href"],rr={key:6,class:"chat-footer opacity-50 font-semibold text-xs"},or={class:"text-[10px] opacity-80"},ir={class:"chat-footer opacity-50 font-semibold text-xs"},ar={__name:"messageLayout",props:{showInfo:{type:Function,required:!0},m:{type:Object,required:!0},userId:{type:String,required:!0},selectedUser:{type:Object,required:!0},isImageLoading:{type:Boolean,default:!1},showDetailsId:{type:Object,required:!0},formatTime:{type:Function,required:!0},onLoad:{type:Function,required:!0},onError:{type:Function,required:!0}},setup(e){return(t,s)=>(v(),b("div",{onClick:s[4]||(s[4]=n=>e.showInfo(e.m.id,e.m.message)),class:se(["chat cursor-pointer py-[1px]",e.m.senderId===e.userId?"chat-end":"chat-start"])},[i("div",qn,[e.userId!==e.m.senderId?(v(),b("div",Hn,[i("img",{src:e.selectedUser.userPhotoURL},null,8,zn)])):C("",!0)]),e.showDetailsId.isClick&&e.showDetailsId.id===e.m.id?(v(),b("div",Vn,N(e.m.senderId===e.userId?"":e.selectedUser.userName),1)):C("",!0),e.m.message&&e.m.imageUrl===null&&e.m.fileUrl===null?(v(),b("div",{key:1,class:se(["rounded-2xl whitespace-pre-line py-2 px-4 text-sm max-w-52",e.userId===e.m.senderId?"chat-bubble-primary":"bg-gray-400/20 rounded-2xl"])},N(e.m.message),3)):C("",!0),e.m.message&&e.m.imageUrl?(v(),b("div",Wn,[i("div",{class:se(["rounded-t-2xl whitespace-pre-line py-2 px-4 text-sm",e.userId===e.m.senderId?"chat-bubble-primary":"border border-gray-500/20"])},N(e.m.message),3),i("div",Kn,[e.isImageLoading?(v(),b("div",Xn)):C("",!0),e.m.imageUrl?(v(),b("img",{key:1,src:e.m.imageUrl,loading:"lazy",alt:"",class:"h-auto w-52 object-cover border bg-gray-500/20 border-gray-500/20 rounded-b-2xl",onLoad:s[0]||(s[0]=(...n)=>e.onLoad&&e.onLoad(...n)),onError:s[1]||(s[1]=(...n)=>e.onError&&e.onError(...n))},null,40,Gn)):C("",!0)])])):C("",!0),e.m.imageUrl&&e.m.message===""?(v(),b("div",Yn,[e.isImageLoading?(v(),b("div",Jn)):C("",!0),i("img",{src:e.m.imageUrl,loading:"lazy",alt:"",onLoad:s[2]||(s[2]=(...n)=>e.onLoad&&e.onLoad(...n)),onError:s[3]||(s[3]=(...n)=>e.onError&&e.onError(...n)),class:"h-auto w-52 object-cover bg-gray-500/20 border border-gray-500/20 rounded-2xl"},null,40,Zn)])):C("",!0),e.m.fileUrl&&e.m.message===""?(v(),b("div",Qn,[i("a",{href:e.m.fileUrl,download:"",class:"flex justify-start items-center gap-2"},[_(l(J),{icon:"simple-icons:googledocs",width:"16",height:"16"}),ie(N(e.m.fileName),1)],8,er)])):C("",!0),e.m.message&&e.m.fileUrl?(v(),b("div",tr,[i("div",{class:se(["rounded-t-2xl whitespace-pre-line py-2 px-4 text-sm",e.userId===e.m.senderId?"chat-bubble-primary":"border border-gray-500/20"])},N(e.m.message),3),i("div",sr,[i("a",{href:e.m.fileUrl,download:"",class:"flex justify-start items-center gap-2"},[_(l(J),{icon:"simple-icons:googledocs",width:"16",height:"16"}),ie(N(e.m.fileName),1)],8,nr)])])):C("",!0),e.showDetailsId.isClick&&e.showDetailsId.id===e.m.id&&!e.m.isSending?(v(),b("div",rr,[ie(N(e.m.isSending?"Sending...":"Delivered")+" ",1),i("time",or,N(e.formatTime(e.m.timestamp)),1)])):C("",!0),i("div",ir,N(e.m.isSending?"Sending...":""),1)],2))}},lr={key:0,class:"flex mb-1 justify-center items-center"},ur=i("span",{class:"backdrop-blur-2xl flex justify-center items-center gap-4 bg-green-400/20 border px-4 text-sm font-medium py-1 transition border-green-500/20 text-green-500 rounded-full"},[i("p",{class:"text-xs"},"Copied!")],-1),cr=[ur],dr={key:0,class:"flex justify-center items-center"},hr={class:"backdrop-blur-2xl mb-1 flex justify-center items-center gap-4 bg-gray-400/20 border px-8 text-sm font-medium py-2 transition border-gray-500/20 rounded-md"},fr={class:"grid place-items-center cursor-pointer transition"},gr=i("p",{class:"text-xs"},"Are you sure to delete this message?",-1),mr={class:"flex justify-start items-center gap-4 mt-2"},pr=i("button",{class:"px-2 py-1 rounded-md text-gray-300 border border-red-500/20 bg-red-500"}," Delete ",-1),vr={key:0,class:"fixed bottom-0 backdrop-blur-2xl py-4 rounded-t-2xl z-50 inset-x-0"},br={class:"flex justify-center items-center"},yr={class:"backdrop-blur-2xl flex justify-center items-center gap-4 bg-gray-400/20 border px-8 text-sm font-medium py-2 transition border-gray-500/20 rounded-full"},xr=i("p",{class:"text-xs"},"Copy",-1),wr=i("p",{class:"text-xs"},"Delete",-1),_r={key:0,class:"ml-1 flex justify-start mb-1 items-end gap-1 text-xs"},Rr={key:0},Ir=["src"],kr={class:"flex justify-start items-center gap-1"},Tr={class:"backdrop-blur-2xl flex bg-gray-400/20 justify-start items-center gap-2 px-2 py-1 border border-gray-500/20 rounded-xl"},Ur={class:"truncate max-w-52"},Cr={__name:"messageAttachments",props:{isSendMessageLoading:{type:Boolean,default:null}},setup(e){const t=e,{selectedChatId:s,showDetailsId:n,isShowDeleteConfirmation:r,isShowCopied:o,isImage:a,deleteChat:d,selectedFile:c,selectedImage:u,imageURL:h,fileName:p,closeAttachements:y,cancelDeleteConfirmation:w,copyChat:T,Icon:R}=Et();return Pe(()=>t.isSendMessageLoading,g=>{g||(u.value=null,c.value=null)}),(g,x)=>(v(),b(je,null,[_(he,null,{default:de(()=>[l(o)?(v(),b("div",lr,cr)):C("",!0)]),_:1}),_(he,null,{default:de(()=>[l(r)?(v(),b("div",dr,[i("span",hr,[i("div",fr,[gr,i("div",mr,[i("button",{onClick:x[0]||(x[0]=M=>l(w)()),class:"px-2 py-1 rounded-md border border-gray-400/50"}," Cancel "),pr])])])])):C("",!0)]),_:1}),_(he,null,{default:de(()=>[l(s)===l(n).id&&l(n).isClick?(v(),b("div",vr,[i("div",br,[i("span",yr,[i("div",{onClick:x[1]||(x[1]=M=>l(T)()),class:"grid place-items-center hover:text-green-500 cursor-pointer transition"},[_(l(R),{icon:"solar:copy-linear",width:"20",height:"20"}),xr]),i("div",{onClick:x[2]||(x[2]=M=>l(d)()),class:"grid place-items-center hover:text-red-500 cursor-pointer transition"},[_(l(R),{icon:"fluent:delete-32-regular",width:"20",height:"20"}),wr])])])])):C("",!0)]),_:1}),_(he,null,{default:de(()=>[l(c)||l(u)||e.isSendMessageLoading?(v(),b("div",_r,[l(a)?(v(),b("div",Rr,[i("img",{src:l(h),loading:"lazy",alt:"",class:"size-14 rounded-xl backdrop-blur-2xl object-cover bg-gray-400/20 border border-gray-500/20"},null,8,Ir)])):C("",!0),i("div",kr,[i("span",Tr,[_(l(R),{icon:"fluent:attach-16-regular",width:"20",height:"20"}),i("span",Ur,N(l(p)),1)]),i("button",{onClick:x[3]||(x[3]=M=>l(y)()),class:"backdrop-blur-2xl bg-gray-400/20 border p-0.5 hover:text-red-500 transition border-gray-500/20 rounded-full"},[_(l(R),{icon:"iconamoon:close-light",width:"20",height:"20"})])])])):C("",!0)]),_:1})],64))}},Er={class:"modal-box overflow-hidden relative p-2 no-scrollbar"},$r={class:"flex justify-between items-center gap-2"},Sr={class:"flex justify-start items-center gap-2"},Dr={class:"avatar"},Ar={class:"w-10 rounded-full"},Lr=["src"],Or={class:"text-sm font-medium"},Nr={method:"dialog",class:"flex justify-start items-center"},Pr={class:"px-0.5"},Mr=i("hr",{class:"my-1 border border-gray-400/20"},null,-1),jr={key:0,class:"my-2 flex justify-center items-center text-sm"},Br={class:"py-1 px-4 bg-primary/10 rounded-full"},Fr={class:"text-primary font-semibold"},qr={key:1},Hr={class:"fixed bottom-0 z-50 inset-x-0"},zr={class:"flex justify-start items-center rounded-t-2xl gap-2 bg-gray-400/20 backdrop-blur-2xl shadow"},Vr={class:"w-full rounded-t-2xl border border-gray-500/20 shadow"},Wr=["disabled","value"],Kr={class:"flex justify-between items-center m-3 h-5"},Xr={class:"flex justify-center items-center gap-2"},Gr=["disabled"],Yr=["disabled"],Jr=10,Zr=24,io={__name:"ChatModal",props:{userId:{type:String,required:!0},userName:{type:String,required:!0},userPhoto:{type:String,required:!0},messages:{type:Array,required:!0},filteredMessages:{type:Array,default:()=>[]},selectedUser:{type:Object,required:!0},modelValue:{type:String,required:!0},selectedFile:{type:Object,default:null},selectedImage:{type:Object,default:null},isSendMessageLoading:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},formatTime:{type:Function,required:!0},sendMessage:{type:Function,required:!0}},emits:["update:selectedFile","update:modelValue","update:selectedImage"],setup(e,{emit:t}){const s=e,n=t,{startRecording:r}=$t(),{showDetailsId:o,showInfo:a,handleFileChange:d,handleImageChange:c,selectedFile:u,selectedImage:h}=Et(n),p=f(null),y=f(null),w=f(null),T=f(null),R=f(null),g=f(!0),x=()=>{var I;(I=p.value)==null||I.click()},M=()=>{var I;(I=y.value)==null||I.click()},B=()=>{console.log("Image loading completed"),g.value=!1},L=()=>{g.value=!1},F=()=>{const I=T.value;if(I){const U=I.scrollTop,G=I.scrollHeight;I.style.height="auto";const P=I.scrollHeight,ve=Jr*Zr;P>ve?(I.style.height=`${ve}px`,I.style.overflowY="auto"):I.style.height=`${P}px`;const Re=U+(P-G);I.scrollTop=Re}},W=I=>{n("update:modelValue",I.target.value),F()};return Pe(()=>s.modelValue,I=>{if(I===""){const U=T.value;U&&(U.style.height="auto",U.style.overflowY="hidden")}else F()}),Pe(()=>s.filteredMessages,()=>{ht(()=>{w.value&&(w.value.scrollTop=w.value.scrollHeight)})},{deep:!0}),Ne(()=>{F(),w.value&&(w.value.scrollTop=w.value.scrollHeight)}),(I,U)=>{const G=zt("motion-fade");return v(),b("div",Er,[i("div",$r,[i("div",Sr,[i("div",Dr,[i("div",Ar,[i("img",{src:e.selectedUser.userPhotoURL,loading:"lazy",class:"bg-gray-500/20 border border-gray-500/20 rounded-full"},null,8,Lr)])]),i("div",null,[i("h1",Or,N(e.selectedUser.userName),1)])]),i("form",Nr,[i("button",Pr,[_(l(J),{icon:"carbon:close",width:"20",height:"20"})])])]),Mr,i("div",{class:"h-dvh pb-[165px] sm:pb-0 sm:h-[366px] sm:mb-[86px] rounded-md overflow-auto",ref_key:"messageContainer",ref:w},[e.filteredMessages.length===0&&!e.isLoading?(v(),b("div",jr,[i("span",Br,[ie("No conversation with "),i("span",Fr,N(e.selectedUser.userName),1)])])):C("",!0),(v(!0),b(je,null,Ht(e.filteredMessages,P=>(v(),b("div",{key:P.id,class:"relative"},[_(ar,{m:P,userId:e.userId,selectedUser:e.selectedUser,isImageLoading:g.value,showDetailsId:l(o),formatTime:e.formatTime,onLoad:B,onError:L,showInfo:l(a)},null,8,["m","userId","selectedUser","isImageLoading","showDetailsId","formatTime","showInfo"])]))),128)),e.isLoading?(v(),b("div",qr,[_(In)])):C("",!0)],512),i("div",Hr,[_(Cr,{isSendMessageLoading:e.isSendMessageLoading},null,8,["isSendMessageLoading"]),_(Fn),i("form",{ref_key:"messageBoxContainer",ref:R},[i("div",zr,[i("div",Vr,[i("textarea",{type:"text",disabled:e.isSendMessageLoading,cols:"1",rows:"1",required:"",autofocus:"",ref_key:"autoExpand",ref:T,value:e.modelValue,onInput:W,placeholder:"Enter a message",class:"w-full px-3 pt-3 placeholder:text-sm placeholder:text-gray-500 resize-none rounded-t-2xl no-scrollbar bg-transparent outline-none"},null,40,Wr),i("div",Kr,[i("div",Xr,[i("button",{onClick:be(x,["prevent"]),class:"transition p-1 rounded-full bg-gray-400/20 hover:text-success shadow"},[_(l(J),{icon:"tabler:photo",class:"text-xl"})]),i("input",{type:"file",ref_key:"imageInput",ref:p,accept:"image/*",onChange:U[0]||(U[0]=(...P)=>l(c)&&l(c)(...P)),class:"hidden"},null,544),i("input",{type:"file",ref_key:"fileInput",ref:y,accept:".pdf, .doc, .docx",onChange:U[1]||(U[1]=(...P)=>l(d)&&l(d)(...P)),class:"hidden"},null,544),i("button",{onClick:be(M,["prevent"]),class:"transition p-1 rounded-full bg-gray-400/20 hover:text-secondary shadow"},[_(l(J),{icon:"tabler:file",class:"text-xl"})])]),i("div",{class:se(["rounded-full p-1.5 flex shadow justify-center transition items-center",e.modelValue||l(u)||l(h)!==null?"bg-blue-500 hover:bg-blue-500/90 ":"bg-primary/10 hover:bg-primary/20"])},[!e.isSendMessageLoading&&e.modelValue||l(u)||l(h)?Ye((v(),b("button",{key:0,disabled:e.isSendMessageLoading,onClick:U[2]||(U[2]=be((...P)=>e.sendMessage&&e.sendMessage(...P),["prevent"]))},[_(l(J),{icon:"bxs:send",class:"text-xl text-gray-200"})],8,Gr)),[[G]]):Ye((v(),b("button",{key:1,disabled:e.isSendMessageLoading,onClick:U[3]||(U[3]=be((...P)=>l(r)&&l(r)(...P),["prevent","stop"]))},[_(l(J),{icon:"ic:round-mic",class:"text-xl text-primary"})],8,Yr)),[[G]])],2)])])])],512)])])}}};export{ro as C,oo as _,at as a,io as b,no as d,on as g,lt as r,it as u};
