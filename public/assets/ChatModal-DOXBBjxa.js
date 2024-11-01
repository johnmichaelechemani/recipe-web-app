import{_ as Rt,C as kt,z as Me,A as ge,B as It,D as Tt,E as Ut,S as Et,G as Ct,H as At,g as et,e as d,q as je,I as Ce,p as Be,w as Ae,J as Lt,K as tt,o as m,c as p,a as o,k as R,n as G,t as M,f as re,d as St,b as y,u as E,x as Q,l as Ot,T as ee,F as Nt,j as Dt,h as be,i as Fe,y as $t}from"./index-CnP6yNJt.js";import{u as Pt,_ as Mt,I as L}from"./_plugin-vue_export-helper-DdG2Wr89.js";import{s as jt,d as qe,h as He,a as Bt,c as ze,b as Ve,q as Ft,o as qt}from"./index.esm2017-h6SwmbCX.js";/**
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
 */const st="firebasestorage.googleapis.com",nt="storageBucket",Ht=2*60*1e3,zt=10*60*1e3;/**
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
 */class U extends At{constructor(t,s,n=0){super(Ue(t),`Firebase Storage: ${s} (${Ue(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,U.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Ue(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var T;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(T||(T={}));function Ue(e){return"storage/"+e}function Se(){const e="An unknown error occurred, please check the error payload for server response.";return new U(T.UNKNOWN,e)}function Vt(e){return new U(T.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function Wt(e){return new U(T.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Kt(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new U(T.UNAUTHENTICATED,e)}function Xt(){return new U(T.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Gt(e){return new U(T.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function Yt(){return new U(T.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Jt(){return new U(T.CANCELED,"User canceled the upload/download.")}function Zt(e){return new U(T.INVALID_URL,"Invalid URL '"+e+"'.")}function Qt(e){return new U(T.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function es(){return new U(T.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+nt+"' property when initializing the app?")}function ts(){return new U(T.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function ss(){return new U(T.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function ns(e){return new U(T.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Le(e){return new U(T.INVALID_ARGUMENT,e)}function rt(){return new U(T.APP_DELETED,"The Firebase app was deleted.")}function rs(e){return new U(T.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function fe(e,t){return new U(T.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function he(e){throw new U(T.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class V{constructor(t,s){this.bucket=t,this.path_=s}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,s){let n;try{n=V.makeFromUrl(t,s)}catch{return new V(t,"")}if(n.path==="")return n;throw Qt(t)}static makeFromUrl(t,s){let n=null;const r="([A-Za-z0-9.\\-_]+)";function i(A){A.path.charAt(A.path.length-1)==="/"&&(A.path_=A.path_.slice(0,-1))}const a="(/(.*))?$",l=new RegExp("^gs://"+r+a,"i"),u={bucket:1,path:3};function h(A){A.path_=decodeURIComponent(A.path)}const x="v[A-Za-z0-9_]+",w=s.replace(/[.]/g,"\\."),_="(/([^?#]*).*)?$",S=new RegExp(`^https?://${w}/${x}/b/${r}/o${_}`,"i"),k={bucket:1,path:3},W=s===st?"(?:storage.googleapis.com|storage.cloud.google.com)":s,b="([^?#]*)",C=new RegExp(`^https?://${W}/${r}/${b}`,"i"),D=[{regex:l,indices:u,postModify:i},{regex:S,indices:k,postModify:h},{regex:C,indices:{bucket:1,path:2},postModify:h}];for(let A=0;A<D.length;A++){const $=D[A],O=$.regex.exec(t);if(O){const q=O[$.indices.bucket];let K=O[$.indices.path];K||(K=""),n=new V(q,K),$.postModify(n);break}}if(n==null)throw Zt(t);return n}}class os{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function is(e,t,s){let n=1,r=null,i=null,a=!1,l=0;function u(){return l===2}let h=!1;function x(...b){h||(h=!0,t.apply(null,b))}function w(b){r=setTimeout(()=>{r=null,e(S,u())},b)}function _(){i&&clearTimeout(i)}function S(b,...C){if(h){_();return}if(b){_(),x.call(null,b,...C);return}if(u()||a){_(),x.call(null,b,...C);return}n<64&&(n*=2);let D;l===1?(l=2,D=0):D=(n+Math.random())*1e3,w(D)}let k=!1;function W(b){k||(k=!0,_(),!h&&(r!==null?(b||(l=2),clearTimeout(r),w(0)):b||(l=1)))}return w(0),i=setTimeout(()=>{a=!0,W(!0)},s),W}function as(e){e(!1)}/**
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
 */function ls(e){return e!==void 0}function us(e){return typeof e=="object"&&!Array.isArray(e)}function Oe(e){return typeof e=="string"||e instanceof String}function We(e){return Ne()&&e instanceof Blob}function Ne(){return typeof Blob<"u"}function Ke(e,t,s,n){if(n<t)throw Le(`Invalid value for '${e}'. Expected ${t} or greater.`);if(n>s)throw Le(`Invalid value for '${e}'. Expected ${s} or less.`)}/**
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
 */function we(e,t,s){let n=t;return s==null&&(n=`https://${t}`),`${s}://${n}/v0${e}`}function ot(e){const t=encodeURIComponent;let s="?";for(const n in e)if(e.hasOwnProperty(n)){const r=t(n)+"="+t(e[n]);s=s+r+"&"}return s=s.slice(0,-1),s}/**
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
 */function cs(e,t){const s=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,i=t.indexOf(e)!==-1;return s||r||i}/**
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
 */class ds{constructor(t,s,n,r,i,a,l,u,h,x,w,_=!0){this.url_=t,this.method_=s,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=l,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=x,this.connectionFactory_=w,this.retry=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((S,k)=>{this.resolve_=S,this.reject_=k,this.start_()})}start_(){const t=(n,r)=>{if(r){n(!1,new ve(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=l=>{const u=l.loaded,h=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const l=i.getErrorCode()===oe.NO_ERROR,u=i.getStatus();if(!l||cs(u,this.additionalRetryCodes_)&&this.retry){const x=i.getErrorCode()===oe.ABORT;n(!1,new ve(!1,null,x));return}const h=this.successCodes_.indexOf(u)!==-1;n(!0,new ve(h,i))})},s=(n,r)=>{const i=this.resolve_,a=this.reject_,l=r.connection;if(r.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());ls(u)?i(u):i()}catch(u){a(u)}else if(l!==null){const u=Se();u.serverResponse=l.getErrorText(),this.errorCallback_?a(this.errorCallback_(l,u)):a(u)}else if(r.canceled){const u=this.appDelete_?rt():Jt();a(u)}else{const u=Yt();a(u)}};this.canceled_?s(!1,new ve(!1,null,!0)):this.backoffId_=is(t,s,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&as(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ve{constructor(t,s,n){this.wasSuccessCode=t,this.connection=s,this.canceled=!!n}}function hs(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function fs(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function gs(e,t){t&&(e["X-Firebase-GMPID"]=t)}function ms(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function ps(e,t,s,n,r,i,a=!0){const l=ot(e.urlParams),u=e.url+l,h=Object.assign({},e.headers);return gs(h,t),hs(h,s),fs(h,i),ms(h,n),new ds(u,e.method,h,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r,a)}/**
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
 */function ys(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function bs(...e){const t=ys();if(t!==void 0){const s=new t;for(let n=0;n<e.length;n++)s.append(e[n]);return s.getBlob()}else{if(Ne())return new Blob(e);throw new U(T.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function vs(e,t,s){return e.webkitSlice?e.webkitSlice(t,s):e.mozSlice?e.mozSlice(t,s):e.slice?e.slice(t,s):null}/**
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
 */function xs(e){if(typeof atob>"u")throw ns("base-64");return atob(e)}/**
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
 */const Y={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ee{constructor(t,s){this.data=t,this.contentType=s||null}}function ws(e,t){switch(e){case Y.RAW:return new Ee(it(t));case Y.BASE64:case Y.BASE64URL:return new Ee(at(e,t));case Y.DATA_URL:return new Ee(Rs(t),ks(t))}throw Se()}function it(e){const t=[];for(let s=0;s<e.length;s++){let n=e.charCodeAt(s);if(n<=127)t.push(n);else if(n<=2047)t.push(192|n>>6,128|n&63);else if((n&64512)===55296)if(!(s<e.length-1&&(e.charCodeAt(s+1)&64512)===56320))t.push(239,191,189);else{const i=n,a=e.charCodeAt(++s);n=65536|(i&1023)<<10|a&1023,t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|n&63)}else(n&64512)===56320?t.push(239,191,189):t.push(224|n>>12,128|n>>6&63,128|n&63)}return new Uint8Array(t)}function _s(e){let t;try{t=decodeURIComponent(e)}catch{throw fe(Y.DATA_URL,"Malformed data URL.")}return it(t)}function at(e,t){switch(e){case Y.BASE64:{const r=t.indexOf("-")!==-1,i=t.indexOf("_")!==-1;if(r||i)throw fe(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case Y.BASE64URL:{const r=t.indexOf("+")!==-1,i=t.indexOf("/")!==-1;if(r||i)throw fe(e,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let s;try{s=xs(t)}catch(r){throw r.message.includes("polyfill")?r:fe(e,"Invalid character found")}const n=new Uint8Array(s.length);for(let r=0;r<s.length;r++)n[r]=s.charCodeAt(r);return n}class lt{constructor(t){this.base64=!1,this.contentType=null;const s=t.match(/^data:([^,]+)?,/);if(s===null)throw fe(Y.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=s[1]||null;n!=null&&(this.base64=Is(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=t.substring(t.indexOf(",")+1)}}function Rs(e){const t=new lt(e);return t.base64?at(Y.BASE64,t.rest):_s(t.rest)}function ks(e){return new lt(e).contentType}function Is(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class ne{constructor(t,s){let n=0,r="";We(t)?(this.data_=t,n=t.size,r=t.type):t instanceof ArrayBuffer?(s?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(s?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,s){if(We(this.data_)){const n=this.data_,r=vs(n,t,s);return r===null?null:new ne(r)}else{const n=new Uint8Array(this.data_.buffer,t,s-t);return new ne(n,!0)}}static getBlob(...t){if(Ne()){const s=t.map(n=>n instanceof ne?n.data_:n);return new ne(bs.apply(null,s))}else{const s=t.map(a=>Oe(a)?ws(Y.RAW,a).data:a.data_);let n=0;s.forEach(a=>{n+=a.byteLength});const r=new Uint8Array(n);let i=0;return s.forEach(a=>{for(let l=0;l<a.length;l++)r[i++]=a[l]}),new ne(r,!0)}}uploadData(){return this.data_}}/**
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
 */function ut(e){let t;try{t=JSON.parse(e)}catch{return null}return us(t)?t:null}/**
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
 */function Ts(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function Us(e,t){const s=t.split("/").filter(n=>n.length>0).join("/");return e.length===0?s:e+"/"+s}function ct(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function Es(e,t){return t}class B{constructor(t,s,n,r){this.server=t,this.local=s||t,this.writable=!!n,this.xform=r||Es}}let xe=null;function Cs(e){return!Oe(e)||e.length<2?e:ct(e)}function dt(){if(xe)return xe;const e=[];e.push(new B("bucket")),e.push(new B("generation")),e.push(new B("metageneration")),e.push(new B("name","fullPath",!0));function t(i,a){return Cs(a)}const s=new B("name");s.xform=t,e.push(s);function n(i,a){return a!==void 0?Number(a):a}const r=new B("size");return r.xform=n,e.push(r),e.push(new B("timeCreated")),e.push(new B("updated")),e.push(new B("md5Hash",null,!0)),e.push(new B("cacheControl",null,!0)),e.push(new B("contentDisposition",null,!0)),e.push(new B("contentEncoding",null,!0)),e.push(new B("contentLanguage",null,!0)),e.push(new B("contentType",null,!0)),e.push(new B("metadata","customMetadata",!0)),xe=e,xe}function As(e,t){function s(){const n=e.bucket,r=e.fullPath,i=new V(n,r);return t._makeStorageReference(i)}Object.defineProperty(e,"ref",{get:s})}function Ls(e,t,s){const n={};n.type="file";const r=s.length;for(let i=0;i<r;i++){const a=s[i];n[a.local]=a.xform(n,t[a.server])}return As(n,e),n}function ht(e,t,s){const n=ut(t);return n===null?null:Ls(e,n,s)}function Ss(e,t,s,n){const r=ut(t);if(r===null||!Oe(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const a=encodeURIComponent;return i.split(",").map(h=>{const x=e.bucket,w=e.fullPath,_="/b/"+a(x)+"/o/"+a(w),S=we(_,s,n),k=ot({alt:"media",token:h});return S+k})[0]}function Os(e,t){const s={},n=t.length;for(let r=0;r<n;r++){const i=t[r];i.writable&&(s[i.server]=e[i.local])}return JSON.stringify(s)}class De{constructor(t,s,n,r){this.url=t,this.method=s,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function ft(e){if(!e)throw Se()}function Ns(e,t){function s(n,r){const i=ht(e,r,t);return ft(i!==null),i}return s}function Ds(e,t){function s(n,r){const i=ht(e,r,t);return ft(i!==null),Ss(i,r,e.host,e._protocol)}return s}function gt(e){function t(s,n){let r;return s.getStatus()===401?s.getErrorText().includes("Firebase App Check token is invalid")?r=Xt():r=Kt():s.getStatus()===402?r=Wt(e.bucket):s.getStatus()===403?r=Gt(e.path):r=n,r.status=s.getStatus(),r.serverResponse=n.serverResponse,r}return t}function mt(e){const t=gt(e);function s(n,r){let i=t(n,r);return n.getStatus()===404&&(i=Vt(e.path)),i.serverResponse=r.serverResponse,i}return s}function $s(e,t,s){const n=t.fullServerUrl(),r=we(n,e.host,e._protocol),i="GET",a=e.maxOperationRetryTime,l=new De(r,i,Ds(e,s),a);return l.errorHandler=mt(t),l}function Ps(e,t){const s=t.fullServerUrl(),n=we(s,e.host,e._protocol),r="DELETE",i=e.maxOperationRetryTime;function a(u,h){}const l=new De(n,r,a,i);return l.successCodes=[200,204],l.errorHandler=mt(t),l}function Ms(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function js(e,t,s){const n=Object.assign({},s);return n.fullPath=e.path,n.size=t.size(),n.contentType||(n.contentType=Ms(null,t)),n}function Bs(e,t,s,n,r){const i=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function l(){let D="";for(let A=0;A<2;A++)D=D+Math.random().toString().slice(2);return D}const u=l();a["Content-Type"]="multipart/related; boundary="+u;const h=js(t,n,r),x=Os(h,s),w="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+x+`\r
--`+u+`\r
Content-Type: `+h.contentType+`\r
\r
`,_=`\r
--`+u+"--",S=ne.getBlob(w,n,_);if(S===null)throw ts();const k={name:h.fullPath},W=we(i,e.host,e._protocol),b="POST",C=e.maxUploadRetryTime,N=new De(W,b,Ns(e,s),C);return N.urlParams=k,N.headers=a,N.body=S.uploadData(),N.errorHandler=gt(t),N}class Fs{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=oe.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=oe.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=oe.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,s,n,r){if(this.sent_)throw he("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(s,t,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return n!==void 0?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw he("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw he("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw he("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw he("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class qs extends Fs{initXhr(){this.xhr_.responseType="text"}}function $e(){return new qs}/**
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
 */class ie{constructor(t,s){this._service=t,s instanceof V?this._location=s:this._location=V.makeFromUrl(s,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,s){return new ie(t,s)}get root(){const t=new V(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ct(this._location.path)}get storage(){return this._service}get parent(){const t=Ts(this._location.path);if(t===null)return null;const s=new V(this._location.bucket,t);return new ie(this._service,s)}_throwIfRoot(t){if(this._location.path==="")throw rs(t)}}function Hs(e,t,s){e._throwIfRoot("uploadBytes");const n=Bs(e.storage,e._location,dt(),new ne(t,!0),s);return e.storage.makeRequestWithTokens(n,$e).then(r=>({metadata:r,ref:e}))}function zs(e){e._throwIfRoot("getDownloadURL");const t=$s(e.storage,e._location,dt());return e.storage.makeRequestWithTokens(t,$e).then(s=>{if(s===null)throw ss();return s})}function Vs(e){e._throwIfRoot("deleteObject");const t=Ps(e.storage,e._location);return e.storage.makeRequestWithTokens(t,$e)}function Ws(e,t){const s=Us(e._location.path,t),n=new V(e._location.bucket,s);return new ie(e.storage,n)}/**
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
 */function Ks(e){return/^[A-Za-z]+:\/\//.test(e)}function Xs(e,t){return new ie(e,t)}function pt(e,t){if(e instanceof Pe){const s=e;if(s._bucket==null)throw es();const n=new ie(s,s._bucket);return t!=null?pt(n,t):n}else return t!==void 0?Ws(e,t):e}function Gs(e,t){if(t&&Ks(t)){if(e instanceof Pe)return Xs(e,t);throw Le("To use ref(service, url), the first argument must be a Storage instance.")}else return pt(e,t)}function Xe(e,t){const s=t==null?void 0:t[nt];return s==null?null:V.makeFromBucketSpec(s,e)}function Ys(e,t,s,n={}){e.host=`${t}:${s}`,e._protocol="http";const{mockUserToken:r}=n;r&&(e._overrideAuthToken=typeof r=="string"?r:Ct(r,e.app.options.projectId))}class Pe{constructor(t,s,n,r,i){this.app=t,this._authProvider=s,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=st,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Ht,this._maxUploadRetryTime=zt,this._requests=new Set,r!=null?this._bucket=V.makeFromBucketSpec(r,this._host):this._bucket=Xe(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=V.makeFromBucketSpec(this._url,t):this._bucket=Xe(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Ke("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Ke("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const s=await t.getToken();if(s!==null)return s.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new ie(this,t)}_makeRequest(t,s,n,r,i=!0){if(this._deleted)return new os(rt());{const a=ps(t,this._appId,n,r,s,this._firebaseVersion,i);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(t,s){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,s,n,r).getPromise()}}const Ge="@firebase/storage",Ye="0.12.5";/**
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
 */const yt="storage";function Je(e,t,s){return e=ge(e),Hs(e,t,s)}function Ze(e){return e=ge(e),zs(e)}function Wr(e){return e=ge(e),Vs(e)}function Qe(e,t){return e=ge(e),Gs(e,t)}function Js(e=Ut(),t){e=ge(e);const n=It(e,yt).getImmediate({identifier:t}),r=Tt("storage");return r&&Zs(n,...r),n}function Zs(e,t,s,n={}){Ys(e,t,s,n)}function Qs(e,{instanceIdentifier:t}){const s=e.getProvider("app").getImmediate(),n=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return new Pe(s,n,r,t,Et)}function en(){Rt(new kt(yt,Qs,"PUBLIC").setMultipleInstances(!0)),Me(Ge,Ye,""),Me(Ge,Ye,"esm2017")}en();function tn(){const e=et(),t=d(e.currentUser),{uid:s,photoURL:n,displayName:r}=t.value,i=s,a=d([]),u=JSON.parse(localStorage.getItem("users")).filter(h=>h.id!==i);return a.value=u,{storedUsers:a}}function Kr(){const e=et(),t=d(e.currentUser),{firestore:s}=Pt(),n=Js(),r=t.value.uid,i=t.value.photoURL,a=t.value.displayName;Lt();const{storedUsers:l}=tn(),u=d(""),h=d([]),x=d(!1),w=d(null);let _=d({}),S=d(!1);const k=(c,v)=>[c,v].sort().join("_"),W=(c,v)=>{document.getElementById(c).showModal(),_.value=v,ue(),console.log(h)},b=d(null),C=d(null),N=c=>{b.value=c},D=c=>{C.value=c},A=async()=>{if(!(u.value.trim()===""&&!b.value&&!C.value))try{const c=k(r,_.value.userId);S.value=!0,console.log(S.value);let v=null,I=null;if(b.value){const H=`chats/${c}/${Date.now()}_${b.value.name}`,X=Qe(n,H),F=await Je(X,b.value);v=await Ze(F.ref)}if(C.value){const H=`chats/${c}/${Date.now()}_${C.value.name}`,X=Qe(n,H),F=await Je(X,C.value);I=await Ze(F.ref)}await jt(qe(s,`chats/${c}`),{participants:{[r]:!0,[_.value.userId]:!0},lastMessage:u.value||(v||I?"File attachment":""),sender:r,timestamp:He()},{merge:!0}),await Bt(ze(s,`chats/${c}/messages`),{senderId:r,recipientId:_.value.userId,message:u.value,imageUrl:I,imageName:C.value?C.value.name:null,fileUrl:v,fileName:b.value?b.value.name:null,isSendMessageLoading:!1,timestamp:He()}),u.value="",b.value=null,C.value=null}catch(c){console.error("Error sending message: ",c)}finally{S.value=!1}},$=d({}),O=d({}),q=d([]),K=d({}),J=d(0),te=je(()=>l.value.filter(c=>$.value[k(r,c.id)]).sort((c,v)=>{const I=k(r,c.id),H=k(r,v.id);return K.value[H]-K.value[I]})),ae=()=>{q.value.forEach(v=>v()),q.value=[];const c=new Set;l.value.forEach(v=>{const I=k(r,v.id),H=qe(s,"chats",I),X=Ve(H,F=>{if(F.exists()){const z=F.data(),se=z.lastMessage||"",Z=z.sender||"",ce=z.timestamp||"";$.value[I]=se,O.value[I]=Z,K.value[I]=ce,se&&Z!==r?c.has(Z)||(c.add(Z),J.value=c.size):c.has(Z)&&(c.delete(Z),J.value=c.size)}else{$.value[I]="",O.value[I]="",K.value[I]="";const z=O.value[I];c.has(z)&&(c.delete(z),J.value=c.size)}},F=>{console.error("Error listening to chat updates:",F)});q.value.push(X)})};Ce(()=>{ae()}),Be(()=>{q.value.forEach(c=>c())}),Ae(J,c=>{console.log(J.value)});const _e=je(()=>h.value.filter(c=>c.senderId===r&&c.recipientId===_.value.userId||c.senderId===_.value.userId&&c.recipientId===r)),Re=()=>{tt(()=>{w.value&&(w.value.scrollTop=w.value.scrollHeight)})},ue=()=>{x.value=!0;const c=k(r,_.value.userId),v=Ft(ze(s,`chats/${c}/messages`),qt("timestamp","asc")),I=Ve(v,H=>{h.value=H.docs.map(X=>({id:X.id,...X.data()})),x.value=!1,Re()});Be(()=>{I()})};return Ce(()=>{ue()}),{Time:c=>{if(c){const v=new Date(c.seconds*1e3),I=new Date,H=v.getHours()%12||12,X=("0"+v.getMinutes()).slice(-2),F=v.getHours()<12?"am":"pm",z=`${H}:${X} ${F}`;if(v.toDateString()===I.toDateString())return z;const se=new Date(I);if(se.setDate(se.getDate()-1),v.toDateString()===se.toDateString())return`Yesterday ${z}`;const ce=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][v.getDay()],de=new Date(I);if(de.setDate(de.getDate()-7),v>de)return`${ce} ${z}`;const ke=v.toLocaleString("default",{month:"short"}),pe=v.getDate();return`${ke} ${pe} ${z}`}return""},getChatId:k,yourChat:W,sendMessage:A,userId:r,newMessage:u,messages:h,isLoading:x,isSendMessageLoading:S,filteredMessages:_e,selectedUser:_,timestamp:K,userPhoto:i,userName:a,filteredUsers:te,latestMessages:$,isSender:O,storedUsers:l,newMessageArray:J,file:b,imageFile:C,handleImageUpdate:D,handleFileUpdate:N}}const sn={class:"w-10 rounded-full"},nn={key:0,class:"size-10 bg-gray-500/20 border border-gray-500/20 rounded-full"},rn=["src"],on={class:""},an={class:"text-sm font-medium capitalize"},ln={class:"flex gap-2 justify-start items-center"},un={key:0,class:"text-xs"},cn={class:"text-[10px]"},Xr={__name:"usersChatHeads",props:{yourChat:{type:Function,required:!0},formatTime:{type:Function,required:!0},user:{type:Object,required:!0},latestMessages:{type:Object,required:!0},getChatId:{type:Function,required:!0},userId:{type:[String,Number],required:!0},isSender:{type:Object,required:!0},timestamp:{type:Object,required:!0}},setup(e){const t=d(!0),s=()=>{console.log("loading is done!"),t.value=!1},n=()=>{t.value=!1};return(r,i)=>(m(),p("div",{onClick:i[0]||(i[0]=a=>e.yourChat(e.user)),class:"flex justify-start items-center gap-2 cursor-pointer hover:bg-gray-500/20 transition p-1 rounded-md"},[o("div",{class:G(["avatar",e.user.status==="online"?"online":"offline"])},[o("div",sn,[t.value?(m(),p("div",nn)):R("",!0),o("img",{src:e.user.userPhotoURL,loading:"lazy",class:"bg-gray-500/20 border border-gray-500/20 rounded-full",onLoad:s,onError:n},null,40,rn)])],2),o("div",on,[o("h1",an,M(e.user.userName),1),o("div",ln,[e.latestMessages[e.getChatId(e.userId,e.user.id)]?(m(),p("span",{key:0,class:G(["text-xs px-2 py-0.5 truncate max-w-52 bg-gray-500/20 rounded-full",e.isSender[e.getChatId(e.userId,e.user.id)]===e.userId?"":"text-blue-500"])},[e.isSender[e.getChatId(e.userId,e.user.id)]===e.userId?(m(),p("span",un," You: ")):R("",!0),re(" "+M(e.latestMessages[e.getChatId(e.userId,e.user.id)]),1)],2)):R("",!0),o("span",cn,M(e.formatTime(e.timestamp[e.getChatId(e.userId,e.user.id)])),1)])])]))}},dn={},hn={class:"my-3"},fn=St('<div class="flex flex-col gap-4 w-32 ml-2"><div class="flex gap-2 items-center"><div class="skeleton w-10 h-10 rounded-full shrink-0"></div><div class="flex flex-col gap-2"><div class="skeleton h-2 w-10"></div><div class="skeleton h-2 w-20"></div></div></div></div><div class="flex justify-end mr-5"><div class="flex flex-col gap-4 w-32"><div class="flex gap-2 items-center"><div class="flex flex-col gap-2"><div class="skeleton h-2 w-20"></div><div class="skeleton h-2 w-10"></div></div><div class="skeleton w-10 h-10 rounded-full shrink-0"></div></div></div></div>',2),gn=[fn];function mn(e,t){return m(),p("div",hn,gn)}const pn=Mt(dn,[["render",mn]]),yn={key:0,class:"fixed bottom-0 backdrop-blur-2xl py-5 z-50 inset-x-0"},bn={class:"flex justify-center items-center mb-4 gap-1 mx-2"},vn={class:"backdrop-blur-2xl flex justify-start w-full items-center gap-2 bg-gray-400/20 border px-2 text-sm font-medium py-2 transition border-gray-500/20 rounded-l-xl"},xn={class:"flex justify-start w-full items-center"},wn={class:"w-full border flex justify-center item-center p-1 border-gray-500/20 rounded-2xl"},_n=["value","max"],Rn={class:"max-w-20 text-[10px]"},kn={class:"px-2 flex justify-between items-center gap-1"},In={class:"flex justify-start items-center gap-1"},Tn={class:"bg-blue-500 cursor-not-allowed hover:bg-blue-600 transition text-gray-100 rounded-full px-4 py-2 flex justify-start items-center gap-2"},Un=o("span",{class:"text-sm font-meduim"},"Send",-1),En={__name:"recordingModal",props:{startRecording:{type:Function,required:!0},deleteRecording:{type:Function,required:!0},pauseRecording:{type:Function,required:!0},playRecord:{type:Function,required:!0},stopRecording:{type:Function,required:!0},isShowRecordingModal:{type:Boolean,default:!1},isPause:{type:Boolean,default:!1},isRecording:{type:Boolean,default:!1},elapsedTime:{type:String,default:null},recordingProgress:{type:Number,default:0}},setup(e){return(t,s)=>e.isShowRecordingModal?(m(),p("div",yn,[o("div",bn,[o("div",vn,[o("div",xn,[o("button",{onClick:s[0]||(s[0]=n=>e.isPause?e.playRecord():e.pauseRecording())},[y(E(L),{icon:e.isPause?"iconoir:play-solid":"ic:round-pause",width:"20",height:"20"},null,8,["icon"])]),o("div",wn,[o("progress",{class:"progress progress-primary w-full mx-1",value:e.recordingProgress,max:e.recordingProgress+10},null,8,_n)])]),o("div",Rn,M(e.elapsedTime),1)]),o("button",{class:"px-2 bg-gray-400/20 border hover:text-green-500 transition border-gray-500/20 rounded-r-xl py-2",onClick:s[1]||(s[1]=n=>e.isRecording?e.stopRecording():e.startRecording())},[y(E(L),{icon:e.isRecording?"ic:round-stop":"fluent:mic-pulse-48-filled",width:"20",height:"20",class:G(e.isRecording?"text-red-500":"")},null,8,["icon","class"])])]),o("div",kn,[o("div",In,[o("button",{onClick:s[2]||(s[2]=n=>e.deleteRecording()),class:"backdrop-blur-2xl flex justify-center items-center gap-1 py-1 hover:bg-red-500/10 px-2 text-sm font-medium transition rounded-full"},[y(E(L),{icon:"mingcute:delete-fill",width:"20",height:"20",class:"text-red-500"})]),o("button",{onClick:s[3]||(s[3]=n=>e.startRecording()),class:"backdrop-blur-2xl flex justify-center items-center hover:bg-green-500/10 gap-1 py-1 px-2 text-sm font-medium transition rounded-full"},[y(E(L),{icon:"ion:reload",width:"20",height:"20",class:"text-green-500"})])]),o("div",null,[o("button",Tn,[Un,y(E(L),{icon:"bxs:send",class:"text-xl text-gray-200"})])])])])):R("",!0)}},Cn={class:"chat-image avatar"},An={key:0,class:"size-5 rounded-full"},Ln=["src"],Sn={class:"chat-header text-xs font-medium"},On={class:"text-[10px] opacity-50"},Nn={key:1,class:"w-52"},Dn={class:""},$n={key:0,class:"w-52 h-32 bg-gray-500/20 border border-gray-500/20 rounded-2xl"},Pn=["src"],Mn={key:2,class:""},jn={key:0,class:"w-52 h-32 bg-gray-500/20 border border-gray-500/20 rounded-2xl"},Bn=["src"],Fn={key:3,class:"text-sm rounded-2xl backdrop-blur-2xl max-w-52 bg-gray-500/20 font-medium border border-gray-500/20 px-4 py-3"},qn=["href"],Hn={key:4,class:"max-w-52"},zn={class:"text-sm rounded-b-2xl backdrop-blur-2xl bg-gray-500/20 font-medium border border-gray-500/20 px-4 py-3"},Vn=["href"],Wn={key:0,class:"chat-footer opacity-50 font-semibold text-xs"},Kn={__name:"messageLayout",props:{showInfo:{type:Function,required:!0},m:{type:Object,required:!0},userId:{type:String,required:!0},selectedUser:{type:Object,required:!0},isImageLoading:{type:Boolean,default:!1},showDetailsId:{type:Object,required:!0},formatTime:{type:Function,required:!0},onLoad:{type:Function,required:!0},onError:{type:Function,required:!0}},setup(e){return(t,s)=>(m(),p("div",{onClick:s[4]||(s[4]=n=>e.showInfo(e.m.id,e.m.message)),class:G(["chat cursor-pointer",e.m.senderId===e.userId?"chat-end":"chat-start"])},[o("div",Cn,[e.userId!==e.m.senderId?(m(),p("div",An,[o("img",{src:e.selectedUser.userPhotoURL},null,8,Ln)])):R("",!0)]),o("div",Sn,[re(M(e.m.senderId===e.userId?"You":e.selectedUser.userName)+" ",1),o("time",On,M(e.formatTime(e.m.timestamp)),1)]),e.m.message&&e.m.imageUrl===null&&e.m.fileUrl===null?(m(),p("div",{key:0,class:G(["rounded-2xl whitespace-pre-line py-2 px-4 text-sm max-w-52",e.userId===e.m.senderId?"chat-bubble-primary":"chat-bubble"])},M(e.m.message),3)):R("",!0),e.m.message&&e.m.imageUrl?(m(),p("div",Nn,[o("div",{class:G(["rounded-t-2xl whitespace-pre-line py-2 px-4 text-sm",e.userId===e.m.senderId?"chat-bubble-primary":"border border-gray-500/20"])},M(e.m.message),3),o("div",Dn,[e.isImageLoading?(m(),p("div",$n)):R("",!0),e.m.imageUrl?(m(),p("img",{key:1,src:e.m.imageUrl,loading:"lazy",alt:"",class:"h-auto w-52 object-cover border bg-gray-500/20 border-gray-500/20 rounded-b-2xl",onLoad:s[0]||(s[0]=(...n)=>e.onLoad&&e.onLoad(...n)),onError:s[1]||(s[1]=(...n)=>e.onError&&e.onError(...n))},null,40,Pn)):R("",!0)])])):R("",!0),e.m.imageUrl&&e.m.message===""?(m(),p("div",Mn,[e.isImageLoading?(m(),p("div",jn)):R("",!0),o("img",{src:e.m.imageUrl,loading:"lazy",alt:"",onLoad:s[2]||(s[2]=(...n)=>e.onLoad&&e.onLoad(...n)),onError:s[3]||(s[3]=(...n)=>e.onError&&e.onError(...n)),class:"h-auto w-52 object-cover bg-gray-500/20 border border-gray-500/20 rounded-2xl"},null,40,Bn)])):R("",!0),e.m.fileUrl&&e.m.message===""?(m(),p("div",Fn,[o("a",{href:e.m.fileUrl,download:"",class:"flex justify-start items-center gap-2"},[y(E(L),{icon:"simple-icons:googledocs",width:"16",height:"16"}),re(M(e.m.fileName),1)],8,qn)])):R("",!0),e.m.message&&e.m.fileUrl?(m(),p("div",Hn,[o("div",{class:G(["rounded-t-2xl whitespace-pre-line py-2 px-4 text-sm",e.userId===e.m.senderId?"chat-bubble-primary":"border border-gray-500/20"])},M(e.m.message),3),o("div",zn,[o("a",{href:e.m.fileUrl,download:"",class:"flex justify-start items-center gap-2"},[y(E(L),{icon:"simple-icons:googledocs",width:"16",height:"16"}),re(M(e.m.fileName),1)],8,Vn)])])):R("",!0),y(ee,null,{default:Q(()=>[e.showDetailsId.isClick&&e.showDetailsId.id===e.m.id?(m(),p("div",Wn,[re(M(e.m.isSendMessageLoading?"Sending...":"")+" ",1),e.m.isSendMessageLoading?R("",!0):(m(),Ot(E(L),{key:0,class:G(e.userId!==e.m.senderId?"hidden":""),icon:"material-symbols-light:check-circle"},null,8,["class"]))])):R("",!0)]),_:1})],2))}},Xn={class:"modal-box relative p-2 no-scrollbar"},Gn={class:"modal-action absolute z-10 -top-4 right-2"},Yn={method:"dialog"},Jn={class:"btn btn-xs px-0.5 rounded-full"},Zn={class:"flex justify-start items-center gap-2"},Qn={class:"avatar"},er={class:"w-10 rounded-full"},tr=["src"],sr={class:"text-sm font-medium"},nr=o("hr",{class:"my-1 border border-gray-400/20"},null,-1),rr={key:0,class:"my-2 flex justify-center items-center text-sm"},or={class:"py-1 px-4 bg-primary/10 rounded-full"},ir={class:"text-primary font-semibold"},ar={key:1},lr={class:"fixed bottom-0 z-50 inset-x-0"},ur={key:0,class:"flex justify-center items-center"},cr=o("span",{class:"backdrop-blur-2xl flex justify-center items-center gap-4 bg-green-400/20 border px-4 text-sm font-medium py-1 transition border-green-500/20 text-green-500 rounded-full"},[o("p",{class:"text-xs"},"Copied!")],-1),dr=[cr],hr={key:0,class:"flex justify-center items-center"},fr={class:"backdrop-blur-2xl flex justify-center items-center gap-4 bg-gray-400/20 border px-8 text-sm font-medium py-2 transition border-gray-500/20 rounded-md"},gr={class:"grid place-items-center cursor-pointer transition"},mr=o("p",{class:"text-xs"},"Are you sure to delete this message?",-1),pr={class:"flex justify-start items-center gap-4 mt-2"},yr=o("button",{class:"px-2 py-1 rounded-md border text-red-500 border-red-500/50"}," Delete ",-1),br={key:0,class:"fixed bottom-0 backdrop-blur-2xl py-5 z-50 inset-x-0"},vr={class:"flex justify-center items-center"},xr={class:"backdrop-blur-2xl flex justify-center items-center gap-4 bg-gray-400/20 border px-8 text-sm font-medium py-2 transition border-gray-500/20 rounded-full"},wr=o("p",{class:"text-xs"},"Copy",-1),_r=o("p",{class:"text-xs"},"Delete",-1),Rr={key:0,class:"flex justify-center items-center"},kr=o("span",{class:"backdrop-blur-2xl flex justify-center items-center gap-2 bg-gray-400/20 border px-4 text-sm font-medium py-1 transition border-gray-500/20 rounded-full"},[o("span",{class:"loading loading-dots loading-xs"}),o("span",null,"Sending..")],-1),Ir=[kr],Tr={key:0,class:"flex justify-center items-center gap-2"},Ur=o("span",{class:"backdrop-blur-2xl flex justify-center items-center gap-2 bg-green-400/10 border px-2 text-sm font-medium py-1 transition border-green-500/20 rounded-full"},[o("span",{class:"loading loading-ring text-green-500 loading-md"}),o("span",null,"Recording..")],-1),Er={key:0,class:"backdrop-blur-2xl flex justify-start items-center gap-1 bg-red-400/10 border py-1 px-2 text-sm font-medium transition border-red-500/20 rounded-full"},Cr={key:0,class:"ml-1 flex justify-start items-end gap-1 text-xs"},Ar={key:0},Lr=["src"],Sr={class:"flex justify-start items-center gap-1"},Or={class:"backdrop-blur-2xl flex bg-gray-400/20 justify-start items-center gap-2 px-2 py-1 border border-gray-500/20 rounded-xl"},Nr={class:"truncate max-w-52"},Dr={class:"my-1 mx-1 flex justify-start items-center rounded-2xl gap-2 bg-gray-400/20 backdrop-blur-2xl shadow"},$r={class:"w-full rounded-2xl border border-gray-500/20 shadow"},Pr=["disabled","value"],Mr={class:"flex justify-between items-center m-3 h-5"},jr={class:"flex justify-center items-center gap-2"},Br=["disabled"],Fr=10,qr=24,Gr={__name:"ChatModal",props:{userId:{type:String,required:!0},messages:{type:Array,required:!0},selectedUser:{type:Object,required:!0},userPhoto:{type:String,required:!0},userName:{type:String,required:!0},isSendMessageLoading:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},formatTime:{type:Function,required:!0},sendMessage:{type:Function,required:!0},filteredMessages:{type:Array},modelValue:{type:String,required:!0},selectedFile:{type:Object,default:null},selectedImage:{type:Object,default:null}},emits:["update:modelValue"],setup(e,{emit:t}){const s=e,n=t,r=d(null),i=d(null),a=d(null),l=d(null),u=d(null),h=d(""),x=d(null),w=d(null),_=d(null),S=d(!1),k=d(!1),W=d(""),b=d(!0),C=d(""),N=d(!0),D=d(!1);let A=null,$=null,O=null,q=null;const K=d("0:0:0");let J=null,te=null;const ae=d(0),_e=f=>{const g=Math.floor(f/1e3),le=Math.floor(g/60).toString().padStart(1,"0"),P=(g%60).toString().padStart(1,"0"),ye=(f%1e3).toString().padStart(3,"0").slice(0,1);return`${le}:${P}.${ye}`},Re=()=>{const f=Date.now()-J;K.value=_e(f)},ue=async()=>{console.log("recording start..."),ae.value=0,clearInterval(te),N.value=!0;try{const f=await navigator.mediaDevices.getUserMedia({audio:!0});q=new MediaRecorder(f),q.ondataavailable=g=>{A=g.data,$=URL.createObjectURL(A),O=new Audio($)},q.start(),k.value=!0,J=Date.now(),te=setInterval(()=>{ae.value<100?ae.value+=1:clearInterval(te),Re()},100)}catch(f){W.value="Recording is not supported or failed.",console.error(f)}},me=()=>{console.log("recording stoped..."),q&&q.state!=="inactive"&&(q.stop(),k.value=!1,N.value=!0,te&&(clearInterval(te),te=null))},c=()=>{console.log("playing"),O&&(O.play(),N.value=!1)},v=()=>{console.log("paused"),me(),D.value=!0,O&&(O.pause(),N.value=!0)},I=()=>{console.log("Recording deleted..."),me(),k.value=!1,D.value=!1,O&&(O.pause(),O.currentTime=0),$&&(console.log("Clearing audio URL:",$),URL.revokeObjectURL($),A=null,$=null,O=null,N.value=!0)},H=()=>{console.log("loading is done!"),b.value=!1},X=()=>{b.value=!1},F=()=>{const f=i.value;if(f){const g=f.scrollTop,le=f.scrollHeight;f.style.height="auto";const P=f.scrollHeight,ye=Fr*qr;P>ye?(f.style.height=`${ye}px`,f.style.overflowY="auto"):f.style.height=`${P}px`;const _t=g+(P-le);f.scrollTop=_t}},z=f=>{n("update:modelValue",f.target.value),F()};Ae(()=>s.modelValue,f=>{if(f===""){const g=i.value;g&&(g.style.height="auto",g.style.overflowY="hidden")}else F()}),Ce(()=>{F(),r.value&&(r.value.scrollTop=r.value.scrollHeight)}),Ae(()=>s.filteredMessages,()=>{tt(()=>{r.value&&(r.value.scrollTop=r.value.scrollHeight)})},{deep:!0},s.modelValue);const se=()=>{l.value&&(l.value.click(),S.value=!0)},Z=()=>{S.value=!1,u.value&&u.value.click()},ce=f=>{const g=f.target.files[0];g&&(x.value=g,n("update:selectedFile",x.value),h.value=x.value.name,console.log(x.value))},de=f=>{const g=f.target.files[0];g&&(w.value=g,n("update:selectedImage",w.value),_.value=URL.createObjectURL(g),h.value=w.value.name,console.log(w.value))},ke=()=>{(x.value||w.value)&&(h.value="",_.value=null,w.value=null,x.value=null,n("update:selectedFile",null),n("update:selectedImage",null)),console.log(x.value,w.value)};let pe=d(null);const j=d({id:null,isClick:!1}),bt=(f,g)=>{C.value=g,pe.value=f,console.log(f),j.value.id===f?(j.value.id=null,j.value.isClick=!1,console.log(j.value.id),console.log(j.value.isClick)):(j.value.isClick=!0,j.value.id=f)},Ie=d(!1),Te=d(!1),vt=()=>{Ie.value=!1,j.value.id=null,j.value.isClick=!1},xt=f=>{Ie.value=!0,console.log(f)},wt=()=>{navigator.clipboard.writeText(C).then(()=>{Te.value=!0,console.log(C.value),setTimeout(()=>{Te.value=!1},2e3)}).catch(f=>{console.error("Failed to copy text: ",f)}),j.value.id=null,j.value.isClick=!1,console.log("copied")};return(f,g)=>{const le=$t("motion-fade");return m(),p("div",Xn,[o("div",Gn,[o("form",Yn,[o("button",Jn,[y(E(L),{icon:"carbon:close",class:"text-xl text-red-500"})])])]),o("div",Zn,[o("div",Qn,[o("div",er,[o("img",{src:e.selectedUser.userPhotoURL,loading:"lazy",class:"bg-gray-500/20 border border-gray-500/20 rounded-full"},null,8,tr)])]),o("div",null,[o("h1",sr,M(e.selectedUser.userName),1)])]),nr,o("div",{class:"h-[366px] mb-[86px] rounded-md overflow-y-scroll",ref_key:"messageContainer",ref:r},[e.filteredMessages.length===0&&!e.isLoading?(m(),p("div",rr,[o("span",or,[re("No conversation with "),o("span",ir,M(e.selectedUser.userName),1)])])):R("",!0),(m(!0),p(Nt,null,Dt(e.filteredMessages,P=>(m(),p("div",{key:P.id,class:"relative"},[y(Kn,{m:P,userId:e.userId,selectedUser:e.selectedUser,isImageLoading:b.value,showDetailsId:j.value,formatTime:e.formatTime,onLoad:H,onError:X,showInfo:bt,isSendMessageLoading:e.isSendMessageLoading},null,8,["m","userId","selectedUser","isImageLoading","showDetailsId","formatTime","isSendMessageLoading"])]))),128)),e.isLoading?(m(),p("div",ar,[y(pn)])):R("",!0)],512),o("div",lr,[y(ee,null,{default:Q(()=>[Te.value?(m(),p("div",ur,dr)):R("",!0)]),_:1}),y(ee,null,{default:Q(()=>[Ie.value?(m(),p("div",hr,[o("span",fr,[o("div",gr,[mr,o("div",pr,[o("button",{onClick:g[0]||(g[0]=P=>vt()),class:"text-gray-600 px-2 py-1 rounded-md border border-gray-500/50"}," Cancel "),yr])])])])):R("",!0)]),_:1}),y(ee,null,{default:Q(()=>[E(pe)===j.value.id&&j.value.isClick?(m(),p("div",br,[o("div",vr,[o("span",xr,[o("div",{onClick:g[1]||(g[1]=P=>wt()),class:"grid place-items-center hover:text-green-500 cursor-pointer transition"},[y(E(L),{icon:"solar:copy-linear",width:"20",height:"20"}),wr]),o("div",{onClick:g[2]||(g[2]=P=>xt(j.value.id)),class:"grid place-items-center hover:text-red-500 cursor-pointer transition"},[y(E(L),{icon:"fluent:delete-32-regular",width:"20",height:"20"}),_r])])])])):R("",!0)]),_:1}),y(ee,null,{default:Q(()=>[e.isSendMessageLoading?(m(),p("div",Rr,Ir)):R("",!0)]),_:1}),y(ee,null,{default:Q(()=>[y(En,{isShowRecordingModal:D.value,isPause:N.value,playRecord:c,pauseRecording:v,isRecording:k.value,elapsedTime:K.value,stopRecording:me,startRecording:ue,deleteRecording:I,recordingProgress:ae.value},null,8,["isShowRecordingModal","isPause","isRecording","elapsedTime","recordingProgress"])]),_:1}),y(ee,null,{default:Q(()=>[k.value?(m(),p("div",Tr,[Ur,o("button",{onClick:g[3]||(g[3]=P=>v()),class:"backdrop-blur-2xl flex justify-center items-center gap-1 bg-red-400/10 border py-1 px-2 text-sm font-medium transition border-red-500/20 rounded-full"},[y(E(L),{icon:"ic:round-pause",width:"20",height:"20",class:"text-red-500"}),re(" Pause ")]),o("button",{onClick:g[4]||(g[4]=P=>I()),class:"backdrop-blur-2xl flex justify-center items-center gap-1 py-1 px-2 text-sm font-medium transition rounded-full"},[y(E(L),{icon:"mingcute:delete-fill",width:"20",height:"20",class:"text-red-500"})])])):R("",!0)]),_:1}),y(ee,null,{default:Q(()=>[W.value?(m(),p("span",Er,[y(E(L),{icon:"material-symbols:error",class:"text-red-500",width:"20",height:"20"}),re(" "+M(W.value),1)])):R("",!0)]),_:1}),y(ee,null,{default:Q(()=>[s.selectedFile||s.selectedImage!==null?(m(),p("div",Cr,[S.value?(m(),p("div",Ar,[o("img",{src:_.value,loading:"lazy",alt:"",class:"size-14 rounded-xl backdrop-blur-2xl object-cover bg-gray-400/20 border border-gray-500/20"},null,8,Lr)])):R("",!0),o("div",Sr,[o("span",Or,[y(E(L),{icon:"fluent:attach-16-regular",width:"20",height:"20"}),o("span",Nr,M(h.value),1)]),o("button",{onClick:g[5]||(g[5]=P=>ke()),class:"backdrop-blur-2xl bg-gray-400/20 border p-0.5 hover:text-red-500 transition border-gray-500/20 rounded-full"},[y(E(L),{icon:"iconamoon:close-light",width:"20",height:"20"})])])])):R("",!0)]),_:1}),o("form",{ref_key:"messageBoxContainer",ref:a},[o("div",Dr,[o("div",$r,[o("textarea",{type:"text",disabled:e.isSendMessageLoading,cols:"1",rows:"1",required:"",autofocus:"",ref_key:"autoExpand",ref:i,value:e.modelValue,onInput:z,placeholder:"Enter a message",class:"w-full px-3 pt-3 placeholder:text-sm placeholder:text-gray-500 resize-none rounded-2xl no-scrollbar bg-transparent outline-none"},null,40,Pr),o("div",Mr,[o("div",jr,[o("button",{onClick:be(se,["prevent"]),class:"transition p-1 rounded-full bg-gray-400/20 hover:text-success shadow"},[y(E(L),{icon:"tabler:photo",class:"text-xl"})]),o("input",{type:"file",ref_key:"imageInput",ref:l,accept:"image/*",onChange:de,class:"hidden"},null,544),o("input",{type:"file",ref_key:"fileInput",ref:u,accept:".pdf, .doc, .docx",onChange:ce,class:"hidden"},null,544),o("button",{onClick:be(Z,["prevent"]),class:"transition p-1 rounded-full bg-gray-400/20 hover:text-secondary shadow"},[y(E(L),{icon:"tabler:file",class:"text-xl"})])]),o("div",{class:G(["rounded-full p-1.5 flex shadow justify-center transition items-center",e.modelValue||x.value||w.value!==null?"bg-blue-500 hover:bg-blue-500/90 ":"bg-primary/10 hover:bg-primary/20"])},[!e.isSendMessageLoading&&e.modelValue||x.value||w.value?Fe((m(),p("button",{key:0,class:G(e.isSendMessageLoading?"cursor-not-allowed":""),disabled:e.isSendMessageLoading,onClick:g[6]||(g[6]=be((...P)=>e.sendMessage&&e.sendMessage(...P),["prevent"]))},[y(E(L),{icon:"bxs:send",class:"text-xl text-gray-200"})],10,Br)),[[le]]):Fe((m(),p("button",{key:1,onClick:be(ue,["prevent","stop"])},[y(E(L),{icon:"ic:round-mic",class:"text-xl text-primary"})])),[[le]])],2)])])])],512)])])}}};export{Kr as C,Xr as _,Ze as a,Gr as b,Wr as d,Js as g,Qe as r,Je as u};
