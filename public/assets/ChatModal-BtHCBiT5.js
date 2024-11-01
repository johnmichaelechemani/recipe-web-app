import{_ as kt,C as It,z as je,A as ge,B as Tt,D as Ut,E as Et,S as Ct,G as At,H as Lt,g as tt,e as d,q as Be,I as Ce,p as Fe,w as Ae,J as St,K as st,o as m,c as p,a as o,k as R,n as G,t as M,f as re,d as Ot,b as y,u as E,x as Q,l as Nt,T as ee,F as Dt,j as $t,h as ye,i as qe,y as Pt}from"./index-B08Vc0f-.js";import{u as Mt,_ as jt,I as L}from"./_plugin-vue_export-helper-Cwp7hEAq.js";import{s as Bt,d as He,h as ze,a as Ft,c as Ve,b as We,q as qt,o as Ht}from"./index.esm2017-DifbwoL8.js";/**
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
 */const nt="firebasestorage.googleapis.com",rt="storageBucket",zt=2*60*1e3,Vt=10*60*1e3;/**
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
 */class U extends Lt{constructor(t,s,n=0){super(Ue(t),`Firebase Storage: ${s} (${Ue(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,U.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Ue(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var T;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(T||(T={}));function Ue(e){return"storage/"+e}function Se(){const e="An unknown error occurred, please check the error payload for server response.";return new U(T.UNKNOWN,e)}function Wt(e){return new U(T.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function Kt(e){return new U(T.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Xt(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new U(T.UNAUTHENTICATED,e)}function Gt(){return new U(T.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Yt(e){return new U(T.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function Jt(){return new U(T.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Zt(){return new U(T.CANCELED,"User canceled the upload/download.")}function Qt(e){return new U(T.INVALID_URL,"Invalid URL '"+e+"'.")}function es(e){return new U(T.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function ts(){return new U(T.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+rt+"' property when initializing the app?")}function ss(){return new U(T.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function ns(){return new U(T.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function rs(e){return new U(T.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Le(e){return new U(T.INVALID_ARGUMENT,e)}function ot(){return new U(T.APP_DELETED,"The Firebase app was deleted.")}function os(e){return new U(T.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function fe(e,t){return new U(T.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function he(e){throw new U(T.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class z{constructor(t,s){this.bucket=t,this.path_=s}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,s){let n;try{n=z.makeFromUrl(t,s)}catch{return new z(t,"")}if(n.path==="")return n;throw es(t)}static makeFromUrl(t,s){let n=null;const r="([A-Za-z0-9.\\-_]+)";function i(A){A.path.charAt(A.path.length-1)==="/"&&(A.path_=A.path_.slice(0,-1))}const a="(/(.*))?$",l=new RegExp("^gs://"+r+a,"i"),u={bucket:1,path:3};function h(A){A.path_=decodeURIComponent(A.path)}const x="v[A-Za-z0-9_]+",w=s.replace(/[.]/g,"\\."),_="(/([^?#]*).*)?$",S=new RegExp(`^https?://${w}/${x}/b/${r}/o${_}`,"i"),k={bucket:1,path:3},X=s===nt?"(?:storage.googleapis.com|storage.cloud.google.com)":s,b="([^?#]*)",C=new RegExp(`^https?://${X}/${r}/${b}`,"i"),D=[{regex:l,indices:u,postModify:i},{regex:S,indices:k,postModify:h},{regex:C,indices:{bucket:1,path:2},postModify:h}];for(let A=0;A<D.length;A++){const $=D[A],O=$.regex.exec(t);if(O){const H=O[$.indices.bucket];let V=O[$.indices.path];V||(V=""),n=new z(H,V),$.postModify(n);break}}if(n==null)throw Qt(t);return n}}class is{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function as(e,t,s){let n=1,r=null,i=null,a=!1,l=0;function u(){return l===2}let h=!1;function x(...b){h||(h=!0,t.apply(null,b))}function w(b){r=setTimeout(()=>{r=null,e(S,u())},b)}function _(){i&&clearTimeout(i)}function S(b,...C){if(h){_();return}if(b){_(),x.call(null,b,...C);return}if(u()||a){_(),x.call(null,b,...C);return}n<64&&(n*=2);let D;l===1?(l=2,D=0):D=(n+Math.random())*1e3,w(D)}let k=!1;function X(b){k||(k=!0,_(),!h&&(r!==null?(b||(l=2),clearTimeout(r),w(0)):b||(l=1)))}return w(0),i=setTimeout(()=>{a=!0,X(!0)},s),X}function ls(e){e(!1)}/**
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
 */function us(e){return e!==void 0}function cs(e){return typeof e=="object"&&!Array.isArray(e)}function Oe(e){return typeof e=="string"||e instanceof String}function Ke(e){return Ne()&&e instanceof Blob}function Ne(){return typeof Blob<"u"}function Xe(e,t,s,n){if(n<t)throw Le(`Invalid value for '${e}'. Expected ${t} or greater.`);if(n>s)throw Le(`Invalid value for '${e}'. Expected ${s} or less.`)}/**
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
 */function xe(e,t,s){let n=t;return s==null&&(n=`https://${t}`),`${s}://${n}/v0${e}`}function it(e){const t=encodeURIComponent;let s="?";for(const n in e)if(e.hasOwnProperty(n)){const r=t(n)+"="+t(e[n]);s=s+r+"&"}return s=s.slice(0,-1),s}/**
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
 */var oe;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(oe||(oe={}));/**
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
 */function ds(e,t){const s=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,i=t.indexOf(e)!==-1;return s||r||i}/**
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
 */class hs{constructor(t,s,n,r,i,a,l,u,h,x,w,_=!0){this.url_=t,this.method_=s,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=l,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=x,this.connectionFactory_=w,this.retry=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((S,k)=>{this.resolve_=S,this.reject_=k,this.start_()})}start_(){const t=(n,r)=>{if(r){n(!1,new be(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=l=>{const u=l.loaded,h=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const l=i.getErrorCode()===oe.NO_ERROR,u=i.getStatus();if(!l||ds(u,this.additionalRetryCodes_)&&this.retry){const x=i.getErrorCode()===oe.ABORT;n(!1,new be(!1,null,x));return}const h=this.successCodes_.indexOf(u)!==-1;n(!0,new be(h,i))})},s=(n,r)=>{const i=this.resolve_,a=this.reject_,l=r.connection;if(r.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());us(u)?i(u):i()}catch(u){a(u)}else if(l!==null){const u=Se();u.serverResponse=l.getErrorText(),this.errorCallback_?a(this.errorCallback_(l,u)):a(u)}else if(r.canceled){const u=this.appDelete_?ot():Zt();a(u)}else{const u=Jt();a(u)}};this.canceled_?s(!1,new be(!1,null,!0)):this.backoffId_=as(t,s,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&ls(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class be{constructor(t,s,n){this.wasSuccessCode=t,this.connection=s,this.canceled=!!n}}function fs(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function gs(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function ms(e,t){t&&(e["X-Firebase-GMPID"]=t)}function ps(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function ys(e,t,s,n,r,i,a=!0){const l=it(e.urlParams),u=e.url+l,h=Object.assign({},e.headers);return ms(h,t),fs(h,s),gs(h,i),ps(h,n),new hs(u,e.method,h,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r,a)}/**
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
 */function bs(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function vs(...e){const t=bs();if(t!==void 0){const s=new t;for(let n=0;n<e.length;n++)s.append(e[n]);return s.getBlob()}else{if(Ne())return new Blob(e);throw new U(T.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function xs(e,t,s){return e.webkitSlice?e.webkitSlice(t,s):e.mozSlice?e.mozSlice(t,s):e.slice?e.slice(t,s):null}/**
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
 */function ws(e){if(typeof atob>"u")throw rs("base-64");return atob(e)}/**
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
 */const Y={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ee{constructor(t,s){this.data=t,this.contentType=s||null}}function _s(e,t){switch(e){case Y.RAW:return new Ee(at(t));case Y.BASE64:case Y.BASE64URL:return new Ee(lt(e,t));case Y.DATA_URL:return new Ee(ks(t),Is(t))}throw Se()}function at(e){const t=[];for(let s=0;s<e.length;s++){let n=e.charCodeAt(s);if(n<=127)t.push(n);else if(n<=2047)t.push(192|n>>6,128|n&63);else if((n&64512)===55296)if(!(s<e.length-1&&(e.charCodeAt(s+1)&64512)===56320))t.push(239,191,189);else{const i=n,a=e.charCodeAt(++s);n=65536|(i&1023)<<10|a&1023,t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|n&63)}else(n&64512)===56320?t.push(239,191,189):t.push(224|n>>12,128|n>>6&63,128|n&63)}return new Uint8Array(t)}function Rs(e){let t;try{t=decodeURIComponent(e)}catch{throw fe(Y.DATA_URL,"Malformed data URL.")}return at(t)}function lt(e,t){switch(e){case Y.BASE64:{const r=t.indexOf("-")!==-1,i=t.indexOf("_")!==-1;if(r||i)throw fe(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case Y.BASE64URL:{const r=t.indexOf("+")!==-1,i=t.indexOf("/")!==-1;if(r||i)throw fe(e,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let s;try{s=ws(t)}catch(r){throw r.message.includes("polyfill")?r:fe(e,"Invalid character found")}const n=new Uint8Array(s.length);for(let r=0;r<s.length;r++)n[r]=s.charCodeAt(r);return n}class ut{constructor(t){this.base64=!1,this.contentType=null;const s=t.match(/^data:([^,]+)?,/);if(s===null)throw fe(Y.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=s[1]||null;n!=null&&(this.base64=Ts(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=t.substring(t.indexOf(",")+1)}}function ks(e){const t=new ut(e);return t.base64?lt(Y.BASE64,t.rest):Rs(t.rest)}function Is(e){return new ut(e).contentType}function Ts(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class ne{constructor(t,s){let n=0,r="";Ke(t)?(this.data_=t,n=t.size,r=t.type):t instanceof ArrayBuffer?(s?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(s?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,s){if(Ke(this.data_)){const n=this.data_,r=xs(n,t,s);return r===null?null:new ne(r)}else{const n=new Uint8Array(this.data_.buffer,t,s-t);return new ne(n,!0)}}static getBlob(...t){if(Ne()){const s=t.map(n=>n instanceof ne?n.data_:n);return new ne(vs.apply(null,s))}else{const s=t.map(a=>Oe(a)?_s(Y.RAW,a).data:a.data_);let n=0;s.forEach(a=>{n+=a.byteLength});const r=new Uint8Array(n);let i=0;return s.forEach(a=>{for(let l=0;l<a.length;l++)r[i++]=a[l]}),new ne(r,!0)}}uploadData(){return this.data_}}/**
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
 */function ct(e){let t;try{t=JSON.parse(e)}catch{return null}return cs(t)?t:null}/**
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
 */function Us(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function Es(e,t){const s=t.split("/").filter(n=>n.length>0).join("/");return e.length===0?s:e+"/"+s}function dt(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function Cs(e,t){return t}class F{constructor(t,s,n,r){this.server=t,this.local=s||t,this.writable=!!n,this.xform=r||Cs}}let ve=null;function As(e){return!Oe(e)||e.length<2?e:dt(e)}function ht(){if(ve)return ve;const e=[];e.push(new F("bucket")),e.push(new F("generation")),e.push(new F("metageneration")),e.push(new F("name","fullPath",!0));function t(i,a){return As(a)}const s=new F("name");s.xform=t,e.push(s);function n(i,a){return a!==void 0?Number(a):a}const r=new F("size");return r.xform=n,e.push(r),e.push(new F("timeCreated")),e.push(new F("updated")),e.push(new F("md5Hash",null,!0)),e.push(new F("cacheControl",null,!0)),e.push(new F("contentDisposition",null,!0)),e.push(new F("contentEncoding",null,!0)),e.push(new F("contentLanguage",null,!0)),e.push(new F("contentType",null,!0)),e.push(new F("metadata","customMetadata",!0)),ve=e,ve}function Ls(e,t){function s(){const n=e.bucket,r=e.fullPath,i=new z(n,r);return t._makeStorageReference(i)}Object.defineProperty(e,"ref",{get:s})}function Ss(e,t,s){const n={};n.type="file";const r=s.length;for(let i=0;i<r;i++){const a=s[i];n[a.local]=a.xform(n,t[a.server])}return Ls(n,e),n}function ft(e,t,s){const n=ct(t);return n===null?null:Ss(e,n,s)}function Os(e,t,s,n){const r=ct(t);if(r===null||!Oe(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const a=encodeURIComponent;return i.split(",").map(h=>{const x=e.bucket,w=e.fullPath,_="/b/"+a(x)+"/o/"+a(w),S=xe(_,s,n),k=it({alt:"media",token:h});return S+k})[0]}function Ns(e,t){const s={},n=t.length;for(let r=0;r<n;r++){const i=t[r];i.writable&&(s[i.server]=e[i.local])}return JSON.stringify(s)}class De{constructor(t,s,n,r){this.url=t,this.method=s,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function gt(e){if(!e)throw Se()}function Ds(e,t){function s(n,r){const i=ft(e,r,t);return gt(i!==null),i}return s}function $s(e,t){function s(n,r){const i=ft(e,r,t);return gt(i!==null),Os(i,r,e.host,e._protocol)}return s}function mt(e){function t(s,n){let r;return s.getStatus()===401?s.getErrorText().includes("Firebase App Check token is invalid")?r=Gt():r=Xt():s.getStatus()===402?r=Kt(e.bucket):s.getStatus()===403?r=Yt(e.path):r=n,r.status=s.getStatus(),r.serverResponse=n.serverResponse,r}return t}function pt(e){const t=mt(e);function s(n,r){let i=t(n,r);return n.getStatus()===404&&(i=Wt(e.path)),i.serverResponse=r.serverResponse,i}return s}function Ps(e,t,s){const n=t.fullServerUrl(),r=xe(n,e.host,e._protocol),i="GET",a=e.maxOperationRetryTime,l=new De(r,i,$s(e,s),a);return l.errorHandler=pt(t),l}function Ms(e,t){const s=t.fullServerUrl(),n=xe(s,e.host,e._protocol),r="DELETE",i=e.maxOperationRetryTime;function a(u,h){}const l=new De(n,r,a,i);return l.successCodes=[200,204],l.errorHandler=pt(t),l}function js(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function Bs(e,t,s){const n=Object.assign({},s);return n.fullPath=e.path,n.size=t.size(),n.contentType||(n.contentType=js(null,t)),n}function Fs(e,t,s,n,r){const i=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function l(){let D="";for(let A=0;A<2;A++)D=D+Math.random().toString().slice(2);return D}const u=l();a["Content-Type"]="multipart/related; boundary="+u;const h=Bs(t,n,r),x=Ns(h,s),w="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+x+`\r
--`+u+`\r
Content-Type: `+h.contentType+`\r
\r
`,_=`\r
--`+u+"--",S=ne.getBlob(w,n,_);if(S===null)throw ss();const k={name:h.fullPath},X=xe(i,e.host,e._protocol),b="POST",C=e.maxUploadRetryTime,N=new De(X,b,Ds(e,s),C);return N.urlParams=k,N.headers=a,N.body=S.uploadData(),N.errorHandler=mt(t),N}class qs{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=oe.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=oe.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=oe.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,s,n,r){if(this.sent_)throw he("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(s,t,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return n!==void 0?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw he("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw he("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw he("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw he("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class Hs extends qs{initXhr(){this.xhr_.responseType="text"}}function $e(){return new Hs}/**
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
 */class ie{constructor(t,s){this._service=t,s instanceof z?this._location=s:this._location=z.makeFromUrl(s,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,s){return new ie(t,s)}get root(){const t=new z(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return dt(this._location.path)}get storage(){return this._service}get parent(){const t=Us(this._location.path);if(t===null)return null;const s=new z(this._location.bucket,t);return new ie(this._service,s)}_throwIfRoot(t){if(this._location.path==="")throw os(t)}}function zs(e,t,s){e._throwIfRoot("uploadBytes");const n=Fs(e.storage,e._location,ht(),new ne(t,!0),s);return e.storage.makeRequestWithTokens(n,$e).then(r=>({metadata:r,ref:e}))}function Vs(e){e._throwIfRoot("getDownloadURL");const t=Ps(e.storage,e._location,ht());return e.storage.makeRequestWithTokens(t,$e).then(s=>{if(s===null)throw ns();return s})}function Ws(e){e._throwIfRoot("deleteObject");const t=Ms(e.storage,e._location);return e.storage.makeRequestWithTokens(t,$e)}function Ks(e,t){const s=Es(e._location.path,t),n=new z(e._location.bucket,s);return new ie(e.storage,n)}/**
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
 */function Xs(e){return/^[A-Za-z]+:\/\//.test(e)}function Gs(e,t){return new ie(e,t)}function yt(e,t){if(e instanceof Pe){const s=e;if(s._bucket==null)throw ts();const n=new ie(s,s._bucket);return t!=null?yt(n,t):n}else return t!==void 0?Ks(e,t):e}function Ys(e,t){if(t&&Xs(t)){if(e instanceof Pe)return Gs(e,t);throw Le("To use ref(service, url), the first argument must be a Storage instance.")}else return yt(e,t)}function Ge(e,t){const s=t==null?void 0:t[rt];return s==null?null:z.makeFromBucketSpec(s,e)}function Js(e,t,s,n={}){e.host=`${t}:${s}`,e._protocol="http";const{mockUserToken:r}=n;r&&(e._overrideAuthToken=typeof r=="string"?r:At(r,e.app.options.projectId))}class Pe{constructor(t,s,n,r,i){this.app=t,this._authProvider=s,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=nt,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=zt,this._maxUploadRetryTime=Vt,this._requests=new Set,r!=null?this._bucket=z.makeFromBucketSpec(r,this._host):this._bucket=Ge(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=z.makeFromBucketSpec(this._url,t):this._bucket=Ge(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Xe("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Xe("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const s=await t.getToken();if(s!==null)return s.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new ie(this,t)}_makeRequest(t,s,n,r,i=!0){if(this._deleted)return new is(ot());{const a=ys(t,this._appId,n,r,s,this._firebaseVersion,i);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(t,s){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,s,n,r).getPromise()}}const Ye="@firebase/storage",Je="0.12.5";/**
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
 */const bt="storage";function Ze(e,t,s){return e=ge(e),zs(e,t,s)}function Qe(e){return e=ge(e),Vs(e)}function Kr(e){return e=ge(e),Ws(e)}function et(e,t){return e=ge(e),Ys(e,t)}function Zs(e=Et(),t){e=ge(e);const n=Tt(e,bt).getImmediate({identifier:t}),r=Ut("storage");return r&&Qs(n,...r),n}function Qs(e,t,s,n={}){Js(e,t,s,n)}function en(e,{instanceIdentifier:t}){const s=e.getProvider("app").getImmediate(),n=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return new Pe(s,n,r,t,Ct)}function tn(){kt(new It(bt,en,"PUBLIC").setMultipleInstances(!0)),je(Ye,Je,""),je(Ye,Je,"esm2017")}tn();function sn(){const e=tt(),t=d(e.currentUser),{uid:s,photoURL:n,displayName:r}=t.value,i=s,a=d([]),u=JSON.parse(localStorage.getItem("users")).filter(h=>h.id!==i);return a.value=u,{storedUsers:a}}function Xr(){const e=tt(),t=d(e.currentUser),{firestore:s}=Mt(),n=Zs(),r=t.value.uid,i=t.value.photoURL,a=t.value.displayName;St();const{storedUsers:l}=sn(),u=d(""),h=d([]),x=d(!1),w=d(null);let _=d({}),S=d(!1);const k=(c,v)=>[c,v].sort().join("_"),X=(c,v)=>{document.getElementById(c).showModal(),_.value=v,me(),console.log(h)},b=d(null),C=d(null),N=c=>{b.value=c},D=c=>{C.value=c},A=async()=>{if(!(u.value.trim()===""&&!b.value&&!C.value))try{const c=k(r,_.value.userId);S.value=!0,console.log(S.value);let v=null,I=null;if(b.value){const q=`chats/${c}/${Date.now()}_${b.value.name}`,W=et(n,q),K=await Ze(W,b.value);v=await Qe(K.ref)}if(C.value){const q=`chats/${c}/${Date.now()}_${C.value.name}`,W=et(n,q),K=await Ze(W,C.value);I=await Qe(K.ref)}await Bt(He(s,`chats/${c}`),{participants:{[r]:!0,[_.value.userId]:!0},lastMessage:u.value||(v||I?"File attachment":""),sender:r,timestamp:ze()},{merge:!0}),await Ft(Ve(s,`chats/${c}/messages`),{senderId:r,recipientId:_.value.userId,message:u.value,imageUrl:I,imageName:C.value?C.value.name:null,fileUrl:v,fileName:b.value?b.value.name:null,isSendMessageLoading:!1,timestamp:ze()}),u.value="",b.value=null,C.value=null}catch(c){console.error("Error sending message: ",c)}finally{S.value=!1}},$=d({}),O=d({}),H=d([]),V=d({}),J=d(0),te=Be(()=>l.value.filter(c=>$.value[k(r,c.id)]).sort((c,v)=>{const I=k(r,c.id),q=k(r,v.id);return V.value[q]-V.value[I]})),ae=()=>{H.value.forEach(v=>v()),H.value=[];const c=new Set;l.value.forEach(v=>{const I=k(r,v.id),q=He(s,"chats",I),W=We(q,K=>{if(K.exists()){const j=K.data(),se=j.lastMessage||"",Z=j.sender||"",ce=j.timestamp||"";$.value[I]=se,O.value[I]=Z,V.value[I]=ce,se&&Z!==r?c.has(Z)||(c.add(Z),J.value=c.size):c.has(Z)&&(c.delete(Z),J.value=c.size)}else{$.value[I]="",O.value[I]="",V.value[I]="";const j=O.value[I];c.has(j)&&(c.delete(j),J.value=c.size)}},K=>{console.error("Error listening to chat updates:",K)});H.value.push(W)})};Ce(()=>{ae()}),Fe(()=>{H.value.forEach(c=>c())}),Ae(J,c=>{console.log(J.value)});const ue=Be(()=>h.value.filter(c=>c.senderId===r&&c.recipientId===_.value.userId||c.senderId===_.value.userId&&c.recipientId===r)),we=()=>{st(()=>{w.value&&(w.value.scrollTop=w.value.scrollHeight)})},me=()=>{x.value=!0;const c=k(r,_.value.userId),v=qt(Ve(s,`chats/${c}/messages`),Ht("timestamp","asc")),I=We(v,q=>{h.value=q.docs.map(W=>({id:W.id,...W.data()})),x.value=!1,we()});Fe(()=>{I()})};return Ce(()=>{me()}),{Time:c=>{if(c){const v=new Date(c.seconds*1e3),I=new Date,q=v.getHours()%12||12,W=("0"+v.getMinutes()).slice(-2),K=v.getHours()<12?"am":"pm",j=`${q}:${W} ${K}`;if(v.toDateString()===I.toDateString())return j;const se=new Date(I);if(se.setDate(se.getDate()-1),v.toDateString()===se.toDateString())return`Yesterday ${j}`;const ce=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][v.getDay()],de=new Date(I);if(de.setDate(de.getDate()-7),v>de)return`${ce} ${j}`;const Re=v.toLocaleString("default",{month:"short"}),ke=v.getDate();return`${Re} ${ke} ${j}`}return""},getChatId:k,yourChat:X,sendMessage:A,userId:r,newMessage:u,messages:h,isLoading:x,isSendMessageLoading:S,filteredMessages:ue,selectedUser:_,timestamp:V,userPhoto:i,userName:a,filteredUsers:te,latestMessages:$,isSender:O,storedUsers:l,newMessageArray:J,file:b,imageFile:C,handleImageUpdate:D,handleFileUpdate:N}}const nn={class:"w-10 rounded-full"},rn={key:0,class:"size-10 bg-gray-500/20 border border-gray-500/20 rounded-full"},on=["src"],an={class:""},ln={class:"text-sm font-medium capitalize"},un={class:"flex gap-2 justify-start items-center"},cn={key:0,class:"text-xs"},dn={class:"text-[10px]"},Gr={__name:"usersChatHeads",props:{yourChat:{type:Function,required:!0},formatTime:{type:Function,required:!0},user:{type:Object,required:!0},latestMessages:{type:Object,required:!0},getChatId:{type:Function,required:!0},userId:{type:[String,Number],required:!0},isSender:{type:Object,required:!0},timestamp:{type:Object,required:!0}},setup(e){const t=d(!0),s=()=>{console.log("loading is done!"),t.value=!1},n=()=>{t.value=!1};return(r,i)=>(m(),p("div",{onClick:i[0]||(i[0]=a=>e.yourChat(e.user)),class:"flex justify-start items-center gap-2 cursor-pointer hover:bg-gray-500/20 transition p-1 rounded-md"},[o("div",{class:G(["avatar",e.user.status==="online"?"online":"offline"])},[o("div",nn,[t.value?(m(),p("div",rn)):R("",!0),o("img",{src:e.user.userPhotoURL,loading:"lazy",class:"bg-gray-500/20 border border-gray-500/20 rounded-full",onLoad:s,onError:n},null,40,on)])],2),o("div",an,[o("h1",ln,M(e.user.userName),1),o("div",un,[e.latestMessages[e.getChatId(e.userId,e.user.id)]?(m(),p("span",{key:0,class:G(["text-xs px-2 py-0.5 truncate max-w-52 bg-gray-500/20 rounded-full",e.isSender[e.getChatId(e.userId,e.user.id)]===e.userId?"":"text-blue-500"])},[e.isSender[e.getChatId(e.userId,e.user.id)]===e.userId?(m(),p("span",cn," You: ")):R("",!0),re(" "+M(e.latestMessages[e.getChatId(e.userId,e.user.id)]),1)],2)):R("",!0),o("span",dn,M(e.formatTime(e.timestamp[e.getChatId(e.userId,e.user.id)])),1)])])]))}},hn={},fn={class:"my-3"},gn=Ot('<div class="flex flex-col gap-4 w-32 ml-2"><div class="flex gap-2 items-center"><div class="skeleton w-10 h-10 rounded-full shrink-0"></div><div class="flex flex-col gap-2"><div class="skeleton h-2 w-10"></div><div class="skeleton h-2 w-20"></div></div></div></div><div class="flex justify-end mr-5"><div class="flex flex-col gap-4 w-32"><div class="flex gap-2 items-center"><div class="flex flex-col gap-2"><div class="skeleton h-2 w-20"></div><div class="skeleton h-2 w-10"></div></div><div class="skeleton w-10 h-10 rounded-full shrink-0"></div></div></div></div>',2),mn=[gn];function pn(e,t){return m(),p("div",fn,mn)}const yn=jt(hn,[["render",pn]]),bn={key:0,class:"fixed bottom-0 backdrop-blur-2xl py-5 z-50 inset-x-0"},vn={class:"flex justify-center items-center mb-4 gap-1 mx-2"},xn={class:"backdrop-blur-2xl flex justify-start w-full items-center gap-2 bg-gray-400/20 border px-2 text-sm font-medium py-2 transition border-gray-500/20 rounded-l-xl"},wn={class:"flex justify-start w-full items-center"},_n={class:"w-full border flex justify-center item-center p-1 border-gray-500/20 rounded-2xl"},Rn=["value","max"],kn={class:"max-w-16 tabular-nums font-mono text-[10px]"},In={class:"px-2 flex justify-between items-center gap-1"},Tn={class:"flex justify-start items-center gap-1"},Un={class:"bg-blue-500 cursor-not-allowed hover:bg-blue-600 transition text-gray-100 rounded-full px-4 py-2 flex justify-start items-center gap-2"},En=o("span",{class:"text-sm font-meduim"},"Send",-1),Cn={__name:"recordingModal",props:{startRecording:{type:Function,required:!0},deleteRecording:{type:Function,required:!0},pauseRecording:{type:Function,required:!0},playRecord:{type:Function,required:!0},stopRecording:{type:Function,required:!0},isShowRecordingModal:{type:Boolean,default:!1},isPause:{type:Boolean,default:!1},isRecording:{type:Boolean,default:!1},elapsedTime:{type:String,default:null},recordingProgress:{type:Number,default:0}},setup(e){return(t,s)=>e.isShowRecordingModal?(m(),p("div",bn,[o("div",vn,[o("div",xn,[o("div",wn,[o("button",{onClick:s[0]||(s[0]=n=>e.isPause?e.playRecord():e.pauseRecording())},[y(E(L),{icon:e.isPause?"iconoir:play-solid":"ic:round-pause",width:"20",height:"20"},null,8,["icon"])]),o("div",_n,[o("progress",{class:"progress progress-primary w-full mx-1",value:e.recordingProgress,max:e.recordingProgress+10},null,8,Rn)])]),o("div",kn,M(e.elapsedTime),1)]),o("button",{class:"px-2 bg-gray-400/20 border hover:text-green-500 transition border-gray-500/20 rounded-r-xl py-2",onClick:s[1]||(s[1]=n=>e.isRecording?e.stopRecording():e.startRecording())},[y(E(L),{icon:e.isRecording?"ic:round-stop":"fluent:mic-pulse-48-filled",width:"20",height:"20",class:G(e.isRecording?"text-red-500":"")},null,8,["icon","class"])])]),o("div",In,[o("div",Tn,[o("button",{onClick:s[2]||(s[2]=n=>e.deleteRecording()),class:"backdrop-blur-2xl flex justify-center items-center gap-1 py-1 hover:bg-red-500/10 px-2 text-sm font-medium transition rounded-full"},[y(E(L),{icon:"mingcute:delete-fill",width:"20",height:"20",class:"text-red-500"})]),o("button",{onClick:s[3]||(s[3]=n=>e.startRecording()),class:"backdrop-blur-2xl flex justify-center items-center hover:bg-green-500/10 gap-1 py-1 px-2 text-sm font-medium transition rounded-full"},[y(E(L),{icon:"ion:reload",width:"20",height:"20",class:"text-green-500"})])]),o("div",null,[o("button",Un,[En,y(E(L),{icon:"bxs:send",class:"text-xl text-gray-200"})])])])])):R("",!0)}},An={class:"chat-image avatar"},Ln={key:0,class:"size-5 rounded-full"},Sn=["src"],On={class:"chat-header text-xs font-medium"},Nn={class:"text-[10px] opacity-50"},Dn={key:1,class:"w-52"},$n={class:""},Pn={key:0,class:"w-52 h-32 bg-gray-500/20 border border-gray-500/20 rounded-2xl"},Mn=["src"],jn={key:2,class:""},Bn={key:0,class:"w-52 h-32 bg-gray-500/20 border border-gray-500/20 rounded-2xl"},Fn=["src"],qn={key:3,class:"text-sm rounded-2xl backdrop-blur-2xl max-w-52 bg-gray-500/20 font-medium border border-gray-500/20 px-4 py-3"},Hn=["href"],zn={key:4,class:"max-w-52"},Vn={class:"text-sm rounded-b-2xl backdrop-blur-2xl bg-gray-500/20 font-medium border border-gray-500/20 px-4 py-3"},Wn=["href"],Kn={key:0,class:"chat-footer opacity-50 font-semibold text-xs"},Xn={__name:"messageLayout",props:{showInfo:{type:Function,required:!0},m:{type:Object,required:!0},userId:{type:String,required:!0},selectedUser:{type:Object,required:!0},isImageLoading:{type:Boolean,default:!1},showDetailsId:{type:Object,required:!0},formatTime:{type:Function,required:!0},onLoad:{type:Function,required:!0},onError:{type:Function,required:!0}},setup(e){return(t,s)=>(m(),p("div",{onClick:s[4]||(s[4]=n=>e.showInfo(e.m.id,e.m.message)),class:G(["chat cursor-pointer",e.m.senderId===e.userId?"chat-end":"chat-start"])},[o("div",An,[e.userId!==e.m.senderId?(m(),p("div",Ln,[o("img",{src:e.selectedUser.userPhotoURL},null,8,Sn)])):R("",!0)]),o("div",On,[re(M(e.m.senderId===e.userId?"You":e.selectedUser.userName)+" ",1),o("time",Nn,M(e.formatTime(e.m.timestamp)),1)]),e.m.message&&e.m.imageUrl===null&&e.m.fileUrl===null?(m(),p("div",{key:0,class:G(["rounded-2xl whitespace-pre-line py-2 px-4 text-sm max-w-52",e.userId===e.m.senderId?"chat-bubble-primary":"chat-bubble"])},M(e.m.message),3)):R("",!0),e.m.message&&e.m.imageUrl?(m(),p("div",Dn,[o("div",{class:G(["rounded-t-2xl whitespace-pre-line py-2 px-4 text-sm",e.userId===e.m.senderId?"chat-bubble-primary":"border border-gray-500/20"])},M(e.m.message),3),o("div",$n,[e.isImageLoading?(m(),p("div",Pn)):R("",!0),e.m.imageUrl?(m(),p("img",{key:1,src:e.m.imageUrl,loading:"lazy",alt:"",class:"h-auto w-52 object-cover border bg-gray-500/20 border-gray-500/20 rounded-b-2xl",onLoad:s[0]||(s[0]=(...n)=>e.onLoad&&e.onLoad(...n)),onError:s[1]||(s[1]=(...n)=>e.onError&&e.onError(...n))},null,40,Mn)):R("",!0)])])):R("",!0),e.m.imageUrl&&e.m.message===""?(m(),p("div",jn,[e.isImageLoading?(m(),p("div",Bn)):R("",!0),o("img",{src:e.m.imageUrl,loading:"lazy",alt:"",onLoad:s[2]||(s[2]=(...n)=>e.onLoad&&e.onLoad(...n)),onError:s[3]||(s[3]=(...n)=>e.onError&&e.onError(...n)),class:"h-auto w-52 object-cover bg-gray-500/20 border border-gray-500/20 rounded-2xl"},null,40,Fn)])):R("",!0),e.m.fileUrl&&e.m.message===""?(m(),p("div",qn,[o("a",{href:e.m.fileUrl,download:"",class:"flex justify-start items-center gap-2"},[y(E(L),{icon:"simple-icons:googledocs",width:"16",height:"16"}),re(M(e.m.fileName),1)],8,Hn)])):R("",!0),e.m.message&&e.m.fileUrl?(m(),p("div",zn,[o("div",{class:G(["rounded-t-2xl whitespace-pre-line py-2 px-4 text-sm",e.userId===e.m.senderId?"chat-bubble-primary":"border border-gray-500/20"])},M(e.m.message),3),o("div",Vn,[o("a",{href:e.m.fileUrl,download:"",class:"flex justify-start items-center gap-2"},[y(E(L),{icon:"simple-icons:googledocs",width:"16",height:"16"}),re(M(e.m.fileName),1)],8,Wn)])])):R("",!0),y(ee,null,{default:Q(()=>[e.showDetailsId.isClick&&e.showDetailsId.id===e.m.id?(m(),p("div",Kn,[re(M(e.m.isSendMessageLoading?"Sending...":"")+" ",1),e.m.isSendMessageLoading?R("",!0):(m(),Nt(E(L),{key:0,class:G(e.userId!==e.m.senderId?"hidden":""),icon:"material-symbols-light:check-circle"},null,8,["class"]))])):R("",!0)]),_:1})],2))}},Gn={class:"modal-box overflow-hidden relative p-2 no-scrollbar"},Yn={class:"flex justify-between items-center gap-2"},Jn={class:"flex justify-start items-center gap-2"},Zn={class:"avatar"},Qn={class:"w-10 rounded-full"},er=["src"],tr={class:"text-sm font-medium"},sr={method:"dialog",class:"flex justify-start items-center"},nr={class:"px-0.5"},rr=o("hr",{class:"my-1 border border-gray-400/20"},null,-1),or={key:0,class:"my-2 flex justify-center items-center text-sm"},ir={class:"py-1 px-4 bg-primary/10 rounded-full"},ar={class:"text-primary font-semibold"},lr={key:1},ur={class:"fixed bottom-0 z-50 inset-x-0"},cr={key:0,class:"flex justify-center items-center"},dr=o("span",{class:"backdrop-blur-2xl flex justify-center items-center gap-4 bg-green-400/20 border px-4 text-sm font-medium py-1 transition border-green-500/20 text-green-500 rounded-full"},[o("p",{class:"text-xs"},"Copied!")],-1),hr=[dr],fr={key:0,class:"flex justify-center items-center"},gr={class:"backdrop-blur-2xl flex justify-center items-center gap-4 bg-gray-400/20 border px-8 text-sm font-medium py-2 transition border-gray-500/20 rounded-md"},mr={class:"grid place-items-center cursor-pointer transition"},pr=o("p",{class:"text-xs"},"Are you sure to delete this message?",-1),yr={class:"flex justify-start items-center gap-4 mt-2"},br=o("button",{class:"px-2 py-1 rounded-md border text-red-500 border-red-500/50"}," Delete ",-1),vr={key:0,class:"fixed bottom-0 backdrop-blur-2xl py-5 z-50 inset-x-0"},xr={class:"flex justify-center items-center"},wr={class:"backdrop-blur-2xl flex justify-center items-center gap-4 bg-gray-400/20 border px-8 text-sm font-medium py-2 transition border-gray-500/20 rounded-full"},_r=o("p",{class:"text-xs"},"Copy",-1),Rr=o("p",{class:"text-xs"},"Delete",-1),kr={key:0,class:"flex justify-center items-center"},Ir=o("span",{class:"backdrop-blur-2xl flex justify-center items-center gap-2 bg-gray-400/20 border px-4 text-sm font-medium py-1 transition border-gray-500/20 rounded-full"},[o("span",{class:"loading loading-dots loading-xs"}),o("span",null,"Sending..")],-1),Tr=[Ir],Ur={key:0,class:"flex justify-center items-center gap-2"},Er=o("span",{class:"backdrop-blur-2xl flex justify-center items-center gap-2 bg-green-400/10 border px-2 text-sm font-medium py-1 transition border-green-500/20 rounded-full"},[o("span",{class:"loading loading-ring text-green-500 loading-md"}),o("span",null,"Recording..")],-1),Cr={key:0,class:"backdrop-blur-2xl flex justify-start items-center gap-1 bg-red-400/10 border py-1 px-2 text-sm font-medium transition border-red-500/20 rounded-full"},Ar={key:0,class:"ml-1 flex justify-start items-end gap-1 text-xs"},Lr={key:0},Sr=["src"],Or={class:"flex justify-start items-center gap-1"},Nr={class:"backdrop-blur-2xl flex bg-gray-400/20 justify-start items-center gap-2 px-2 py-1 border border-gray-500/20 rounded-xl"},Dr={class:"truncate max-w-52"},$r={class:"flex justify-start items-center rounded-t-2xl gap-2 bg-gray-400/20 backdrop-blur-2xl shadow"},Pr={class:"w-full rounded-t-2xl border border-gray-500/20 shadow"},Mr=["disabled","value"],jr={class:"flex justify-between items-center m-3 h-5"},Br={class:"flex justify-center items-center gap-2"},Fr=["disabled"],qr=10,Hr=24,Yr={__name:"ChatModal",props:{userId:{type:String,required:!0},messages:{type:Array,required:!0},selectedUser:{type:Object,required:!0},userPhoto:{type:String,required:!0},userName:{type:String,required:!0},isSendMessageLoading:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},formatTime:{type:Function,required:!0},sendMessage:{type:Function,required:!0},filteredMessages:{type:Array},modelValue:{type:String,required:!0},selectedFile:{type:Object,default:null},selectedImage:{type:Object,default:null}},emits:["update:modelValue"],setup(e,{emit:t}){const s=e,n=t,r=d(null),i=d(null),a=d(null),l=d(null),u=d(null),h=d(""),x=d(null),w=d(null),_=d(null),S=d(!1),k=d(!1),X=d(""),b=d(!0),C=d(""),N=d(!0),D=d(!1);let A=null,$=null,O=null,H=null;const V=d("0:0:0");let J=null,te=null;const ae=d(0),ue=d(!1),we=f=>{const g=Math.floor(f/1e3),le=Math.floor(g/60).toString().padStart(1,"0"),P=(g%60).toString().padStart(1,"0"),pe=(f%1e3).toString().padStart(3,"0").slice(0,1);return`${le}:${P}.${pe}`},me=()=>{const f=Date.now()-J;V.value=we(f)},_e=async()=>{console.log("recording start..."),ae.value=0,clearInterval(te),N.value=!0;try{const f=await navigator.mediaDevices.getUserMedia({audio:!0});H=new MediaRecorder(f),H.ondataavailable=g=>{A=g.data,$=URL.createObjectURL(A),O=new Audio($)},H.start(),k.value=!0,J=Date.now(),te=setInterval(()=>{ae.value<100?ae.value+=1:clearInterval(te),me()},100)}catch(f){X.value="Recording is not supported or failed.",ue.value=!0,setTimeout(()=>{ue.value=!1},2e3),console.error(f)}},c=()=>{console.log("recording stoped..."),H&&H.state!=="inactive"&&(H.stop(),k.value=!1,N.value=!0,te&&(clearInterval(te),te=null))},v=()=>{console.log("playing"),O&&(O.play(),N.value=!1)},I=()=>{console.log("paused"),c(),D.value=!0,O&&(O.pause(),N.value=!0)},q=()=>{console.log("Recording deleted..."),c(),k.value=!1,D.value=!1,O&&(O.pause(),O.currentTime=0),$&&(console.log("Clearing audio URL:",$),URL.revokeObjectURL($),A=null,$=null,O=null,N.value=!0)},W=()=>{console.log("loading is done!"),b.value=!1},K=()=>{b.value=!1},j=()=>{const f=i.value;if(f){const g=f.scrollTop,le=f.scrollHeight;f.style.height="auto";const P=f.scrollHeight,pe=qr*Hr;P>pe?(f.style.height=`${pe}px`,f.style.overflowY="auto"):f.style.height=`${P}px`;const Rt=g+(P-le);f.scrollTop=Rt}},se=f=>{n("update:modelValue",f.target.value),j()};Ae(()=>s.modelValue,f=>{if(f===""){const g=i.value;g&&(g.style.height="auto",g.style.overflowY="hidden")}else j()}),Ce(()=>{j(),r.value&&(r.value.scrollTop=r.value.scrollHeight)}),Ae(()=>s.filteredMessages,()=>{st(()=>{r.value&&(r.value.scrollTop=r.value.scrollHeight)})},{deep:!0},s.modelValue);const Z=()=>{l.value&&(l.value.click(),S.value=!0)},ce=()=>{S.value=!1,u.value&&u.value.click()},de=f=>{const g=f.target.files[0];g&&(x.value=g,n("update:selectedFile",x.value),h.value=x.value.name,console.log(x.value))},Re=f=>{const g=f.target.files[0];g&&(w.value=g,n("update:selectedImage",w.value),_.value=URL.createObjectURL(g),h.value=w.value.name,console.log(w.value))},ke=()=>{(x.value||w.value)&&(h.value="",_.value=null,w.value=null,x.value=null,n("update:selectedFile",null),n("update:selectedImage",null)),console.log(x.value,w.value)};let Me=d(null);const B=d({id:null,isClick:!1}),vt=(f,g)=>{C.value=g,Me.value=f,console.log(f),B.value.id===f?(B.value.id=null,B.value.isClick=!1,console.log(B.value.id),console.log(B.value.isClick)):(B.value.isClick=!0,B.value.id=f)},Ie=d(!1),Te=d(!1),xt=()=>{Ie.value=!1,B.value.id=null,B.value.isClick=!1},wt=f=>{Ie.value=!0,console.log(f)},_t=()=>{navigator.clipboard.writeText(C).then(()=>{Te.value=!0,console.log(C.value),setTimeout(()=>{Te.value=!1},2e3)}).catch(f=>{console.error("Failed to copy text: ",f)}),B.value.id=null,B.value.isClick=!1,console.log("copied")};return(f,g)=>{const le=Pt("motion-fade");return m(),p("div",Gn,[o("div",Yn,[o("div",Jn,[o("div",Zn,[o("div",Qn,[o("img",{src:e.selectedUser.userPhotoURL,loading:"lazy",class:"bg-gray-500/20 border border-gray-500/20 rounded-full"},null,8,er)])]),o("div",null,[o("h1",tr,M(e.selectedUser.userName),1)])]),o("form",sr,[o("button",nr,[y(E(L),{icon:"carbon:close",width:"20",height:"20"})])])]),rr,o("div",{class:"h-dvh pb-[230px] sm:pb-0 sm:h-[366px] sm:mb-[86px] rounded-md overflow-auto",ref_key:"messageContainer",ref:r},[e.filteredMessages.length===0&&!e.isLoading?(m(),p("div",or,[o("span",ir,[re("No conversation with "),o("span",ar,M(e.selectedUser.userName),1)])])):R("",!0),(m(!0),p(Dt,null,$t(e.filteredMessages,P=>(m(),p("div",{key:P.id,class:"relative"},[y(Xn,{m:P,userId:e.userId,selectedUser:e.selectedUser,isImageLoading:b.value,showDetailsId:B.value,formatTime:e.formatTime,onLoad:W,onError:K,showInfo:vt,isSendMessageLoading:e.isSendMessageLoading},null,8,["m","userId","selectedUser","isImageLoading","showDetailsId","formatTime","isSendMessageLoading"])]))),128)),e.isLoading?(m(),p("div",lr,[y(yn)])):R("",!0)],512),o("div",ur,[y(ee,null,{default:Q(()=>[Te.value?(m(),p("div",cr,hr)):R("",!0)]),_:1}),y(ee,null,{default:Q(()=>[Ie.value?(m(),p("div",fr,[o("span",gr,[o("div",mr,[pr,o("div",yr,[o("button",{onClick:g[0]||(g[0]=P=>xt()),class:"text-gray-600 px-2 py-1 rounded-md border border-gray-500/50"}," Cancel "),br])])])])):R("",!0)]),_:1}),y(ee,null,{default:Q(()=>[E(Me)===B.value.id&&B.value.isClick?(m(),p("div",vr,[o("div",xr,[o("span",wr,[o("div",{onClick:g[1]||(g[1]=P=>_t()),class:"grid place-items-center hover:text-green-500 cursor-pointer transition"},[y(E(L),{icon:"solar:copy-linear",width:"20",height:"20"}),_r]),o("div",{onClick:g[2]||(g[2]=P=>wt(B.value.id)),class:"grid place-items-center hover:text-red-500 cursor-pointer transition"},[y(E(L),{icon:"fluent:delete-32-regular",width:"20",height:"20"}),Rr])])])])):R("",!0)]),_:1}),y(ee,null,{default:Q(()=>[e.isSendMessageLoading?(m(),p("div",kr,Tr)):R("",!0)]),_:1}),y(ee,null,{default:Q(()=>[y(Cn,{isShowRecordingModal:D.value,isPause:N.value,playRecord:v,pauseRecording:I,isRecording:k.value,elapsedTime:V.value,stopRecording:c,startRecording:_e,deleteRecording:q,recordingProgress:ae.value},null,8,["isShowRecordingModal","isPause","isRecording","elapsedTime","recordingProgress"])]),_:1}),y(ee,null,{default:Q(()=>[k.value?(m(),p("div",Ur,[Er,o("button",{onClick:g[3]||(g[3]=P=>I()),class:"backdrop-blur-2xl flex justify-center items-center gap-1 bg-red-400/10 border py-1 px-2 text-sm font-medium transition border-red-500/20 rounded-full"},[y(E(L),{icon:"ic:round-pause",width:"20",height:"20",class:"text-red-500"}),re(" Pause ")]),o("button",{onClick:g[4]||(g[4]=P=>q()),class:"backdrop-blur-2xl flex justify-center items-center gap-1 py-1 px-2 text-sm font-medium transition rounded-full"},[y(E(L),{icon:"mingcute:delete-fill",width:"20",height:"20",class:"text-red-500"})])])):R("",!0)]),_:1}),y(ee,null,{default:Q(()=>[ue.value?(m(),p("span",Cr,[y(E(L),{icon:"material-symbols:error",class:"text-red-500",width:"20",height:"20"}),re(" "+M(X.value),1)])):R("",!0)]),_:1}),y(ee,null,{default:Q(()=>[s.selectedFile||s.selectedImage!==null?(m(),p("div",Ar,[S.value?(m(),p("div",Lr,[o("img",{src:_.value,loading:"lazy",alt:"",class:"size-14 rounded-xl backdrop-blur-2xl object-cover bg-gray-400/20 border border-gray-500/20"},null,8,Sr)])):R("",!0),o("div",Or,[o("span",Nr,[y(E(L),{icon:"fluent:attach-16-regular",width:"20",height:"20"}),o("span",Dr,M(h.value),1)]),o("button",{onClick:g[5]||(g[5]=P=>ke()),class:"backdrop-blur-2xl bg-gray-400/20 border p-0.5 hover:text-red-500 transition border-gray-500/20 rounded-full"},[y(E(L),{icon:"iconamoon:close-light",width:"20",height:"20"})])])])):R("",!0)]),_:1}),o("form",{ref_key:"messageBoxContainer",ref:a},[o("div",$r,[o("div",Pr,[o("textarea",{type:"text",disabled:e.isSendMessageLoading,cols:"1",rows:"1",required:"",autofocus:"",ref_key:"autoExpand",ref:i,value:e.modelValue,onInput:se,placeholder:"Enter a message",class:"w-full px-3 pt-3 placeholder:text-sm placeholder:text-gray-500 resize-none rounded-t-2xl no-scrollbar bg-transparent outline-none"},null,40,Mr),o("div",jr,[o("div",Br,[o("button",{onClick:ye(Z,["prevent"]),class:"transition p-1 rounded-full bg-gray-400/20 hover:text-success shadow"},[y(E(L),{icon:"tabler:photo",class:"text-xl"})]),o("input",{type:"file",ref_key:"imageInput",ref:l,accept:"image/*",onChange:Re,class:"hidden"},null,544),o("input",{type:"file",ref_key:"fileInput",ref:u,accept:".pdf, .doc, .docx",onChange:de,class:"hidden"},null,544),o("button",{onClick:ye(ce,["prevent"]),class:"transition p-1 rounded-full bg-gray-400/20 hover:text-secondary shadow"},[y(E(L),{icon:"tabler:file",class:"text-xl"})])]),o("div",{class:G(["rounded-full p-1.5 flex shadow justify-center transition items-center",e.modelValue||x.value||w.value!==null?"bg-blue-500 hover:bg-blue-500/90 ":"bg-primary/10 hover:bg-primary/20"])},[!e.isSendMessageLoading&&e.modelValue||x.value||w.value?qe((m(),p("button",{key:0,class:G(e.isSendMessageLoading?"cursor-not-allowed":""),disabled:e.isSendMessageLoading,onClick:g[6]||(g[6]=ye((...P)=>e.sendMessage&&e.sendMessage(...P),["prevent"]))},[y(E(L),{icon:"bxs:send",class:"text-xl text-gray-200"})],10,Fr)),[[le]]):qe((m(),p("button",{key:1,onClick:ye(_e,["prevent","stop"])},[y(E(L),{icon:"ic:round-mic",class:"text-xl text-primary"})])),[[le]])],2)])])])],512)])])}}};export{Xr as C,Gr as _,Qe as a,Yr as b,Kr as d,Zs as g,et as r,Ze as u};
