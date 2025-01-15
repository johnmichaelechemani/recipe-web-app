import{g as ue,r as g,u as dt,o as u,c as h,a as o,b,t as f,s as ut,d as ht,e as j,_ as pt,C as _t,f as De,h as le,i as ft,j as mt,k as gt,S as bt,l as yt,F as xt,w as Ne,m as ee,n as F,p as z,v as q,q as re,x as O,y as L,z as D,A as fe,B as Be}from"./index-B608i0rP.js";import{_ as te,I as ae,g as xe,c as Re,a as Rt,q as Me,o as je,b as Fe,d as be,e as He,u as Ve,w as vt,f as wt}from"./index.esm2017-CEIokUF6.js";const kt={components:{Icon:ae},setup(){const t=ue(),e=g(t.currentUser),n=dt();return{user:e,logout:()=>{t.currentUser?ut(t).then(()=>{n.push("/")}):n.push({path:"/",state:{errorMessage:"You must login first"}})},isLoading:!0}}},It={class:"flex justify-between items-center"},Tt={class:"flex justify-start items-center gap-1 p-2"},At=["src"],Ut={key:1,class:"bg-primary text-neutral shadow rounded-full p-1"},Et={class:"font-medium text-xs sm:text-sm capitalize"},Ct={class:"dropdown"},Dt={tabindex:"0",role:"button",class:"p-2"},Nt={tabindex:"0",class:"dropdown-content z-[1] menu border border-gray-400/10 p-2 shadow bg-base-100 rounded-md w-32"},Ot=o("p",{class:"text-xs"},"Logout",-1),Lt=ht('<div><label class="flex cursor-pointer gap-1 sm:gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"></path></svg><input type="checkbox" value="sunset" class="toggle theme-controller w-10 h-4"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg></label></div>',1);function Pt(t,e,n,s,r,a){const l=j("Icon");return u(),h("div",It,[o("div",Tt,[o("div",null,[s.user.photoURL?(u(),h("img",{key:0,class:"h-8 w-8 rounded-full",src:s.user.photoURL,alt:"profile"},null,8,At)):(u(),h("div",Ut,[b(l,{icon:"mdi:user",class:"text-2xl"})]))]),o("h1",Et,f(s.user.displayName),1),o("div",Ct,[o("div",Dt,[b(l,{icon:"solar:settings-bold"})]),o("ul",Nt,[o("div",{class:"btn flex justify-start",onClick:e[0]||(e[0]=c=>s.logout())},[b(l,{icon:"solar:logout-bold-duotone",class:"text-xl"}),Ot])])])]),Lt])}const St=te(kt,[["render",Pt]]);/**
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
 */const ze="firebasestorage.googleapis.com",qe="storageBucket",$t=2*60*1e3,Bt=10*60*1e3;/**
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
 */class I extends xt{constructor(e,n,s=0){super(me(e),`Firebase Storage: ${n} (${me(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,I.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return me(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var k;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(k||(k={}));function me(t){return"storage/"+t}function ve(){const t="An unknown error occurred, please check the error payload for server response.";return new I(k.UNKNOWN,t)}function Mt(t){return new I(k.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function jt(t){return new I(k.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Ft(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new I(k.UNAUTHENTICATED,t)}function Ht(){return new I(k.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Vt(t){return new I(k.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function zt(){return new I(k.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function qt(){return new I(k.CANCELED,"User canceled the upload/download.")}function Wt(t){return new I(k.INVALID_URL,"Invalid URL '"+t+"'.")}function Xt(t){return new I(k.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Yt(){return new I(k.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+qe+"' property when initializing the app?")}function Kt(){return new I(k.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Gt(){return new I(k.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Qt(t){return new I(k.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ye(t){return new I(k.INVALID_ARGUMENT,t)}function We(){return new I(k.APP_DELETED,"The Firebase app was deleted.")}function Jt(t){return new I(k.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ie(t,e){return new I(k.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function oe(t){throw new I(k.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class P{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=P.makeFromUrl(e,n)}catch{return new P(e,"")}if(s.path==="")return s;throw Xt(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function a(T){T.path.charAt(T.path.length-1)==="/"&&(T.path_=T.path_.slice(0,-1))}const l="(/(.*))?$",c=new RegExp("^gs://"+r+l,"i"),i={bucket:1,path:3};function d(T){T.path_=decodeURIComponent(T.path)}const y="v[A-Za-z0-9_]+",x=n.replace(/[.]/g,"\\."),R="(/([^?#]*).*)?$",U=new RegExp(`^https?://${x}/${y}/b/${r}/o${R}`,"i"),v={bucket:1,path:3},B=n===ze?"(?:storage.googleapis.com|storage.cloud.google.com)":n,A="([^?#]*)",M=new RegExp(`^https?://${B}/${r}/${A}`,"i"),E=[{regex:c,indices:i,postModify:a},{regex:U,indices:v,postModify:d},{regex:M,indices:{bucket:1,path:2},postModify:d}];for(let T=0;T<E.length;T++){const p=E[T],m=p.regex.exec(e);if(m){const N=m[p.indices.bucket];let $=m[p.indices.path];$||($=""),s=new P(N,$),p.postModify(s);break}}if(s==null)throw Wt(e);return s}}class Zt{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function es(t,e,n){let s=1,r=null,a=null,l=!1,c=0;function i(){return c===2}let d=!1;function y(...A){d||(d=!0,e.apply(null,A))}function x(A){r=setTimeout(()=>{r=null,t(U,i())},A)}function R(){a&&clearTimeout(a)}function U(A,...M){if(d){R();return}if(A){R(),y.call(null,A,...M);return}if(i()||l){R(),y.call(null,A,...M);return}s<64&&(s*=2);let E;c===1?(c=2,E=0):E=(s+Math.random())*1e3,x(E)}let v=!1;function B(A){v||(v=!0,R(),!d&&(r!==null?(A||(c=2),clearTimeout(r),x(0)):A||(c=1)))}return x(0),a=setTimeout(()=>{l=!0,B(!0)},n),B}function ts(t){t(!1)}/**
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
 */function ss(t){return t!==void 0}function ns(t){return typeof t=="object"&&!Array.isArray(t)}function we(t){return typeof t=="string"||t instanceof String}function Oe(t){return ke()&&t instanceof Blob}function ke(){return typeof Blob<"u"}function Le(t,e,n,s){if(s<e)throw ye(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw ye(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function he(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function Xe(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
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
 */var Q;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Q||(Q={}));/**
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
 */function os(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,a=e.indexOf(t)!==-1;return n||r||a}/**
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
 */class rs{constructor(e,n,s,r,a,l,c,i,d,y,x,R=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=a,this.additionalRetryCodes_=l,this.callback_=c,this.errorCallback_=i,this.timeout_=d,this.progressCallback_=y,this.connectionFactory_=x,this.retry=R,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((U,v)=>{this.resolve_=U,this.reject_=v,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new ce(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const l=c=>{const i=c.loaded,d=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(i,d)};this.progressCallback_!==null&&a.addUploadProgressListener(l),a.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(l),this.pendingConnection_=null;const c=a.getErrorCode()===Q.NO_ERROR,i=a.getStatus();if(!c||os(i,this.additionalRetryCodes_)&&this.retry){const y=a.getErrorCode()===Q.ABORT;s(!1,new ce(!1,null,y));return}const d=this.successCodes_.indexOf(i)!==-1;s(!0,new ce(d,a))})},n=(s,r)=>{const a=this.resolve_,l=this.reject_,c=r.connection;if(r.wasSuccessCode)try{const i=this.callback_(c,c.getResponse());ss(i)?a(i):a()}catch(i){l(i)}else if(c!==null){const i=ve();i.serverResponse=c.getErrorText(),this.errorCallback_?l(this.errorCallback_(c,i)):l(i)}else if(r.canceled){const i=this.appDelete_?We():qt();l(i)}else{const i=zt();l(i)}};this.canceled_?n(!1,new ce(!1,null,!0)):this.backoffId_=es(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&ts(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ce{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function is(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function ls(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function as(t,e){e&&(t["X-Firebase-GMPID"]=e)}function cs(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function ds(t,e,n,s,r,a,l=!0){const c=Xe(t.urlParams),i=t.url+c,d=Object.assign({},t.headers);return as(d,e),is(d,n),ls(d,a),cs(d,s),new rs(i,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,l)}/**
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
 */function us(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function hs(...t){const e=us();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(ke())return new Blob(t);throw new I(k.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function ps(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function _s(t){if(typeof atob>"u")throw Qt("base-64");return atob(t)}/**
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
 */const H={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ge{constructor(e,n){this.data=e,this.contentType=n||null}}function fs(t,e){switch(t){case H.RAW:return new ge(Ye(e));case H.BASE64:case H.BASE64URL:return new ge(Ke(t,e));case H.DATA_URL:return new ge(gs(e),bs(e))}throw ve()}function Ye(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const a=s,l=t.charCodeAt(++n);s=65536|(a&1023)<<10|l&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function ms(t){let e;try{e=decodeURIComponent(t)}catch{throw ie(H.DATA_URL,"Malformed data URL.")}return Ye(e)}function Ke(t,e){switch(t){case H.BASE64:{const r=e.indexOf("-")!==-1,a=e.indexOf("_")!==-1;if(r||a)throw ie(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case H.BASE64URL:{const r=e.indexOf("+")!==-1,a=e.indexOf("/")!==-1;if(r||a)throw ie(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=_s(e)}catch(r){throw r.message.includes("polyfill")?r:ie(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class Ge{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ie(H.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=ys(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function gs(t){const e=new Ge(t);return e.base64?Ke(H.BASE64,e.rest):ms(e.rest)}function bs(t){return new Ge(t).contentType}function ys(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Y{constructor(e,n){let s=0,r="";Oe(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(Oe(this.data_)){const s=this.data_,r=ps(s,e,n);return r===null?null:new Y(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new Y(s,!0)}}static getBlob(...e){if(ke()){const n=e.map(s=>s instanceof Y?s.data_:s);return new Y(hs.apply(null,n))}else{const n=e.map(l=>we(l)?fs(H.RAW,l).data:l.data_);let s=0;n.forEach(l=>{s+=l.byteLength});const r=new Uint8Array(s);let a=0;return n.forEach(l=>{for(let c=0;c<l.length;c++)r[a++]=l[c]}),new Y(r,!0)}}uploadData(){return this.data_}}/**
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
 */function Qe(t){let e;try{e=JSON.parse(t)}catch{return null}return ns(e)?e:null}/**
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
 */function xs(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Rs(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function Je(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function vs(t,e){return e}class C{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||vs}}let de=null;function ws(t){return!we(t)||t.length<2?t:Je(t)}function Ze(){if(de)return de;const t=[];t.push(new C("bucket")),t.push(new C("generation")),t.push(new C("metageneration")),t.push(new C("name","fullPath",!0));function e(a,l){return ws(l)}const n=new C("name");n.xform=e,t.push(n);function s(a,l){return l!==void 0?Number(l):l}const r=new C("size");return r.xform=s,t.push(r),t.push(new C("timeCreated")),t.push(new C("updated")),t.push(new C("md5Hash",null,!0)),t.push(new C("cacheControl",null,!0)),t.push(new C("contentDisposition",null,!0)),t.push(new C("contentEncoding",null,!0)),t.push(new C("contentLanguage",null,!0)),t.push(new C("contentType",null,!0)),t.push(new C("metadata","customMetadata",!0)),de=t,de}function ks(t,e){function n(){const s=t.bucket,r=t.fullPath,a=new P(s,r);return e._makeStorageReference(a)}Object.defineProperty(t,"ref",{get:n})}function Is(t,e,n){const s={};s.type="file";const r=n.length;for(let a=0;a<r;a++){const l=n[a];s[l.local]=l.xform(s,e[l.server])}return ks(s,t),s}function et(t,e,n){const s=Qe(e);return s===null?null:Is(t,s,n)}function Ts(t,e,n,s){const r=Qe(e);if(r===null||!we(r.downloadTokens))return null;const a=r.downloadTokens;if(a.length===0)return null;const l=encodeURIComponent;return a.split(",").map(d=>{const y=t.bucket,x=t.fullPath,R="/b/"+l(y)+"/o/"+l(x),U=he(R,n,s),v=Xe({alt:"media",token:d});return U+v})[0]}function As(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const a=e[r];a.writable&&(n[a.server]=t[a.local])}return JSON.stringify(n)}class Ie{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function tt(t){if(!t)throw ve()}function Us(t,e){function n(s,r){const a=et(t,r,e);return tt(a!==null),a}return n}function Es(t,e){function n(s,r){const a=et(t,r,e);return tt(a!==null),Ts(a,r,t.host,t._protocol)}return n}function st(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=Ht():r=Ft():n.getStatus()===402?r=jt(t.bucket):n.getStatus()===403?r=Vt(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function nt(t){const e=st(t);function n(s,r){let a=e(s,r);return s.getStatus()===404&&(a=Mt(t.path)),a.serverResponse=r.serverResponse,a}return n}function Cs(t,e,n){const s=e.fullServerUrl(),r=he(s,t.host,t._protocol),a="GET",l=t.maxOperationRetryTime,c=new Ie(r,a,Es(t,n),l);return c.errorHandler=nt(e),c}function Ds(t,e){const n=e.fullServerUrl(),s=he(n,t.host,t._protocol),r="DELETE",a=t.maxOperationRetryTime;function l(i,d){}const c=new Ie(s,r,l,a);return c.successCodes=[200,204],c.errorHandler=nt(e),c}function Ns(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Os(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=Ns(null,e)),s}function Ls(t,e,n,s,r){const a=e.bucketOnlyServerUrl(),l={"X-Goog-Upload-Protocol":"multipart"};function c(){let E="";for(let T=0;T<2;T++)E=E+Math.random().toString().slice(2);return E}const i=c();l["Content-Type"]="multipart/related; boundary="+i;const d=Os(e,s,r),y=As(d,n),x="--"+i+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+y+`\r
--`+i+`\r
Content-Type: `+d.contentType+`\r
\r
`,R=`\r
--`+i+"--",U=Y.getBlob(x,s,R);if(U===null)throw Kt();const v={name:d.fullPath},B=he(a,t.host,t._protocol),A="POST",M=t.maxUploadRetryTime,S=new Ie(B,A,Us(t,n),M);return S.urlParams=v,S.headers=l,S.body=U.uploadData(),S.errorHandler=st(e),S}class Ps{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Q.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Q.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Q.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw oe("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const a in r)r.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,r[a].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw oe("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw oe("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw oe("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw oe("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Ss extends Ps{initXhr(){this.xhr_.responseType="text"}}function Te(){return new Ss}/**
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
 */class J{constructor(e,n){this._service=e,n instanceof P?this._location=n:this._location=P.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new J(e,n)}get root(){const e=new P(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Je(this._location.path)}get storage(){return this._service}get parent(){const e=xs(this._location.path);if(e===null)return null;const n=new P(this._location.bucket,e);return new J(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Jt(e)}}function $s(t,e,n){t._throwIfRoot("uploadBytes");const s=Ls(t.storage,t._location,Ze(),new Y(e,!0),n);return t.storage.makeRequestWithTokens(s,Te).then(r=>({metadata:r,ref:t}))}function Bs(t){t._throwIfRoot("getDownloadURL");const e=Cs(t.storage,t._location,Ze());return t.storage.makeRequestWithTokens(e,Te).then(n=>{if(n===null)throw Gt();return n})}function Ms(t){t._throwIfRoot("deleteObject");const e=Ds(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Te)}function js(t,e){const n=Rs(t._location.path,e),s=new P(t._location.bucket,n);return new J(t.storage,s)}/**
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
 */function Fs(t){return/^[A-Za-z]+:\/\//.test(t)}function Hs(t,e){return new J(t,e)}function ot(t,e){if(t instanceof Ae){const n=t;if(n._bucket==null)throw Yt();const s=new J(n,n._bucket);return e!=null?ot(s,e):s}else return e!==void 0?js(t,e):t}function Vs(t,e){if(e&&Fs(e)){if(t instanceof Ae)return Hs(t,e);throw ye("To use ref(service, url), the first argument must be a Storage instance.")}else return ot(t,e)}function Pe(t,e){const n=e==null?void 0:e[qe];return n==null?null:P.makeFromBucketSpec(n,t)}function zs(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:yt(r,t.app.options.projectId))}class Ae{constructor(e,n,s,r,a){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=a,this._bucket=null,this._host=ze,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=$t,this._maxUploadRetryTime=Bt,this._requests=new Set,r!=null?this._bucket=P.makeFromBucketSpec(r,this._host):this._bucket=Pe(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=P.makeFromBucketSpec(this._url,e):this._bucket=Pe(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Le("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Le("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new J(this,e)}_makeRequest(e,n,s,r,a=!0){if(this._deleted)return new Zt(We());{const l=ds(e,this._appId,s,r,n,this._firebaseVersion,a);return this._requests.add(l),l.getPromise().then(()=>this._requests.delete(l),()=>this._requests.delete(l)),l}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const Se="@firebase/storage",$e="0.12.5";/**
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
 */const rt="storage";function qs(t,e,n){return t=le(t),$s(t,e,n)}function Ws(t){return t=le(t),Bs(t)}function Xs(t){return t=le(t),Ms(t)}function it(t,e){return t=le(t),Vs(t,e)}function lt(t=gt(),e){t=le(t);const s=ft(t,rt).getImmediate({identifier:e}),r=mt("storage");return r&&Ys(s,...r),s}function Ys(t,e,n,s={}){zs(t,e,n,s)}function Ks(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new Ae(n,s,r,e,bt)}function Gs(){pt(new _t(rt,Ks,"PUBLIC").setMultipleInstances(!0)),De(Se,$e,""),De(Se,$e,"esm2017")}Gs();const Qs={components:{Icon:ae},setup(){const t=g(""),e=g(""),n=g(""),s=g([]),r=g(!1),a=g(""),l=g([]),c=g(!1),i=g(!1),d=g(null),y=ue(),x=g(y.currentUser),R=xe(),U=lt(),v=Re(R,"recipe");return Ne(n,p=>{r.value=p.trim()!==""}),Ne(a,p=>{c.value=p.trim()!==""}),{title:t,descriptions:e,post:async()=>{const{uid:p,displayName:m,photoURL:N}=x.value;let $="";const K=new Date;if(d.value){const W=it(U,`images/${d.value.name}`),_=await qs(W,d.value);$=await Ws(_.ref)}const se={userId:p,userName:m,userPhotoURL:N,title:t.value,descriptions:e.value,allIngredients:s.value,allInstructions:l.value,createdAt:K,imageURL:$,totalRatings:0};try{i.value=!0,await Rt(v,se),t.value="",e.value="",s.value=[],l.value=[],a.value="",n.value="",d.value=null,document.getElementById("my_modal_3").close(),console.log("success!")}catch(W){console.error("Error sending post recipe:",W)}finally{i.value=!1}},ingredients:n,instructions:a,allInstructions:l,canAddIntructions:c,addIngredients:()=>{s.value.push(n.value),n.value="",console.log(s.value)},addInstructions:()=>{l.value.push(a.value),a.value="",console.log(l.value)},allIngredients:s,removeIngredients:p=>{s.value.pop(p)},removeIstructions:p=>{l.value.pop(p)},canAddIngredient:r,loading:i,handleImageUpload:p=>{d.value=p.target.files[0]}}}},Js={class:"btn mt-5 btn-primary rounded-full",onclick:"my_modal_3.showModal()"},Zs={class:""},en={id:"my_modal_3",class:"modal"},tn={class:"modal-box"},sn=o("form",{method:"dialog"},[o("button",{class:"btn btn-sm btn-circle btn-ghost absolute right-2 top-2"}," ✕ ")],-1),nn=o("h3",{class:"font-bold text-lg"},"Add your recipe.",-1),on={class:"py-3 grid grid-cols-1 gap-2"},rn={class:"form-control w-full max-w-xs"},ln=o("div",{class:"label"},[o("span",{class:"text-xs sm:text-base"},"Title:")],-1),an=o("span",{class:"text-xs sm:text-base"},"Descriptions:",-1),cn=o("span",{class:"text-xs sm:text-base"},"Ingredients:",-1),dn={class:"input input-bordered pr-0 flex items-center gap-2"},un=["disabled"],hn={key:0},pn={class:"grid grid-cols-1 gap-1"},_n={class:"flex justify-between items-center px-2 py-1 bg-blue-400/10 border shadow border-gray-500/10 rounded-md"},fn={class:"text-sm font-medium"},mn=["onClick"],gn=o("span",{class:"text-xs sm:text-base"},"Instructions:",-1),bn={class:"input input-bordered pr-0 flex items-center gap-2"},yn=["disabled"],xn={key:1},Rn={class:"grid grid-cols-1 gap-1"},vn={class:"flex justify-between items-center px-2 py-1 bg-blue-400/10 border shadow border-gray-500/10 rounded-md"},wn={class:"text-sm font-medium"},kn=["onClick"],In=o("p",{class:"text-xs font-medium"},"Add Image:",-1),Tn={key:0,class:"loading loading-dots loading-xs"};function An(t,e,n,s,r,a){const l=j("Icon");return u(),h(O,null,[o("button",Js,[b(l,{icon:"ci:add-plus",class:"text-2xl"}),ee("Add Recipes ")]),o("div",Zs,[o("dialog",en,[o("div",tn,[sn,nn,o("form",{onSubmit:e[7]||(e[7]=F((...c)=>s.post&&s.post(...c),["prevent"]))},[o("div",on,[o("label",rn,[ln,z(o("input",{type:"text",required:"","onUpdate:modelValue":e[0]||(e[0]=c=>s.title=c),placeholder:"Adobo",class:"input input-bordered placeholder:text-xs w-full max-w-xs"},null,512),[[q,s.title]])]),o("div",null,[an,z(o("textarea",{class:"textarea textarea-bordered w-full placeholder:text-xs","onUpdate:modelValue":e[1]||(e[1]=c=>s.descriptions=c),required:"",placeholder:"A classic..."},null,512),[[q,s.descriptions]])]),o("div",null,[cn,o("label",dn,[z(o("input",{"onUpdate:modelValue":e[2]||(e[2]=c=>s.ingredients=c),type:"text",class:"w-full placeholder:text-xs",placeholder:"Eggs"},null,512),[[q,s.ingredients]]),o("button",{class:re(["btn",s.canAddIngredient?"btn-primary ":"btn-disabled"]),disabled:!s.canAddIngredient,onClick:e[3]||(e[3]=F((...c)=>s.addIngredients&&s.addIngredients(...c),["prevent"]))},[b(l,{icon:"ci:add-plus",class:"text-2xl"})],10,un)])]),s.allIngredients.length!==0?(u(),h("div",hn,[o("div",pn,[(u(!0),h(O,null,L(s.allIngredients,(c,i)=>(u(),h("div",{key:c.id},[o("div",_n,[o("span",fn,f(i+1)+". "+f(c),1),o("button",{class:"",onClick:F(d=>s.removeIngredients(c),["prevent"])},[b(l,{icon:"carbon:close"})],8,mn)])]))),128))])])):D("",!0),o("div",null,[gn,o("label",bn,[z(o("input",{type:"text","onUpdate:modelValue":e[4]||(e[4]=c=>s.instructions=c),class:"w-full placeholder:text-xs",placeholder:"Cook spaghetti until..."},null,512),[[q,s.instructions]]),o("button",{class:re(["btn",s.canAddIntructions?"btn-primary":"btn-disabled"]),disabled:!s.canAddIntructions,onClick:e[5]||(e[5]=F((...c)=>s.addInstructions&&s.addInstructions(...c),["prevent"]))},[b(l,{icon:"ci:add-plus",class:"text-2xl"})],10,yn)])]),s.allInstructions.length!==0?(u(),h("div",xn,[o("div",Rn,[(u(!0),h(O,null,L(s.allInstructions,(c,i)=>(u(),h("div",{key:c.id},[o("div",vn,[o("span",wn,f(i+1)+". "+f(c),1),o("button",{class:"",onClick:F(d=>s.removeIstructions(c),["prevent"])},[b(l,{icon:"carbon:close"})],8,kn)])]))),128))])])):D("",!0),o("div",null,[In,o("input",{type:"file",onChange:e[6]||(e[6]=(...c)=>s.handleImageUpload&&s.handleImageUpload(...c)),accept:"image/*",class:"file-input file-input-bordered w-full"},null,32)]),o("button",{class:re(["btn mt-5 w-full",s.loading||s.allIngredients.length===0||s.allInstructions.length===0?"btn-disabled":"btn-primary "]),type:"submit"},[ee(" Post Recipe "),s.loading?(u(),h("span",Tn)):D("",!0)],2)])],32)])])])],64)}const Un=te(Qs,[["render",An]]),En={},Cn={class:"flex flex-col gap-2 w-26"},Dn=o("div",{class:"skeleton h-20 w-full"},null,-1),Nn=o("div",{class:"skeleton h-2 w-28"},null,-1),On=o("div",{class:"skeleton h-2 w-20"},null,-1),Ln=o("div",{class:"skeleton h-2 w-full"},null,-1),Pn=[Dn,Nn,On,Ln];function Sn(t,e){return u(),h("div",Cn,Pn)}const at=te(En,[["render",Sn]]),$n={props:{searchQuery:{type:String,default:""}},components:{Loading:at,Icon:ae},setup(t){const e=g(!0),n=ue(),s=g(n.currentUser),r=xe(),a=!0,l=g(!1),{uid:c}=s.value,i=c,d=g([]),y=fe(()=>d.value.filter(_=>_.title.toLowerCase().includes(t.searchQuery.toLowerCase())));console.log(d.value);const x=g({});let R=g(0);const U={1:"Poor",2:"Fair",3:"Good",4:"Very Good",5:"Excellent"},v=fe(()=>U[R.value]||""),B=Re(r,"recipe"),A=Me(B,je("createdAt","asc")),M=Fe(A,_=>{d.value=_.docs.map(w=>({id:w.id,...w.data()})).reverse(),e.value=!1}),S=_=>{const w=_.seconds,X=_.nanoseconds/1e6;return new Date(w*1e3+X)},E=_=>{const w=S(_),X=w.getFullYear().toString().slice(-2),V=w.toLocaleString("default",{month:"short"}),G=w.getUTCDate(),ne=w.getHours()%12||12,pe=("0"+w.getMinutes()).slice(-2),_e=w.getHours()<12?"am":"pm";return`${G} ${V} ${X} (${ne}:${pe} ${_e})`};let T=g(!1);const p=_=>{x.value=_,T.value=se(i),document.getElementById("my_modal_4").showModal()},m=()=>{R.value=0,document.getElementById("my_modal_4").close()};let N=g("");const $=(_,w)=>{N.value=w,R.value=_},K=async(_,w,X)=>{try{l.value=!0;const V=be(r,"recipe",_),G=await He(V);if(G.exists()){const ne=G.data(),pe=ne.totalRatings||0,_e=ne.ratingCount||0,Ue=pe+w,Ee=_e+1,ct=Ue/Ee,Ce=ne.usersIdThatRate||[];Ce.push(X),await Ve(V,{totalRatings:Ue,ratingCount:Ee,averageRating:ct,usersIdThatRate:Ce}),console.log(`Updated recipe ${_} with new ratings and average rating.`)}else console.log("No such recipe document!")}catch(V){console.error("Error updating ratings: ",V)}finally{l.value=!1}},Z=async()=>{const _=R.value,w=N.value;await K(w,_,i),m()},se=_=>(x.value.usersIdThatRate||[]).includes(_),W=fe(()=>{const _=[],w=x.value.averageRating||0,X=Math.floor(w),V=w%1!==0;for(let G=0;G<X;G++)_.push("full");for(V&&_.push("half");_.length<5;)_.push("empty");return _});return Be(()=>{M()}),{loading:e,sendingRatingLoading:l,recipe:d,formatHour:E,isLoading:a,showRecipeAllModal:p,selectedAllRecipe:x,ratings:R,setRating:$,closeModal:m,ratingsInText:v,sendRatings:Z,starArray:W,filteredRecipes:y,muteRateBnt:T}}},Bn={class:"border rounded-md border-gray-400/50 p-2 my-3"},Mn=o("h1",{class:"font-semibold py-2 text-blue-500"},"All Recipes",-1),jn={key:0,class:"w-full"},Fn=o("span",{class:"text-sm px-4 py-1 w-full rounded-full bg-error/10 font-semibold text-error"},"No Recipe found",-1),Hn=[Fn],Vn={class:"flex justify-center sm:justify-start items-center"},zn={key:0,class:"grid grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 overflow-hidden py-5 px-2 sm:p-2"},qn=["onClick"],Wn={class:"rounded-full absolute -top-1 -left-1 shadow-xl border border-secondary"},Xn={class:"flex justify-center items-center"},Yn={class:"avatar"},Kn={class:"w-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"},Gn=["src"],Qn=["src"],Jn={key:1,class:"pt-2"},Zn={class:"px-1 py-2"},eo={class:"card-title"},to={class:"text-xs truncate"},so={class:"sm:text-xs py-0.5 text-[10px] font-medium px-2 rounded-full text-blue-500 truncate bg-blue-500/20"},no={key:0},oo={id:"my_modal_4",class:"modal",ref:"recipeModal"},ro={class:"modal-box"},io={method:"dialog",class:"absolute top-0 right-0 p-2 z-10"},lo={class:"font-bold text-4xl capitalize"},ao=o("span",{class:"text-xs"},"ni",-1),co={class:"text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"},uo={key:0,class:"py-2 flex justify-start items-center"},ho={class:"px-2 text-sm"},po={key:1,class:"py-2 flex justify-start items-center"},_o=o("hr",{class:"border border-gray-500/10"},null,-1),fo={class:"py-4"},mo=o("p",{class:"text-xs text-primary"},"Discriptions:",-1),go={class:"capitalize"},bo=o("hr",{class:"border border-gray-500/10"},null,-1),yo={class:"py-4"},xo=o("p",{class:"text-xs text-primary"},"Ingredients:",-1),Ro=o("hr",{class:"border border-gray-500/10"},null,-1),vo={class:"py-4"},wo=o("p",{class:"text-xs text-primary"},"Instructions:",-1),ko=o("hr",{class:"border border-gray-500/10 my-2"},null,-1),Io={key:2},To={class:"text-sm tracking-wide bg-blue-500/10 shadow text-blue-500 px-2 py-1 rounded-full"},Ao={key:3,class:"my-2 flex justify-start items-center"},Uo=o("span",{class:"px-3 py-1 bg-secondary/10 rounded-full font-semibold text-sm"},"You're already rate this recipe.",-1),Eo=[Uo],Co=o("div",{class:"flex gap-1"},[o("span",{class:"text-sm font-semibold mt-1"},"RATE:")],-1),Do={class:"flex justify-between items-center gap-2"},No=["disabled","onClick"],Oo=["disabled"],Lo={key:0,class:"loading loading-dots loading-xs"};function Po(t,e,n,s,r,a){const l=j("Icon"),c=j("Loading");return u(),h("div",Bn,[Mn,s.filteredRecipes.length===0&&!s.loading?(u(),h("div",jn,Hn)):D("",!0),o("div",Vn,[s.filteredRecipes?(u(),h("div",zn,[(u(!0),h(O,null,L(s.filteredRecipes,i=>(u(),h("div",{key:i.id,onClick:d=>s.showRecipeAllModal(i),class:"card sm:w-52 w-26 bg-base-100 shadow border border-gray-200/10 relative rounded-md"},[o("div",Wn,[o("div",Xn,[o("div",Yn,[o("div",Kn,[i.userPhotoURL?(u(),h("img",{key:0,src:i.userPhotoURL,alt:"profile"},null,8,Gn)):D("",!0)])])])]),o("figure",null,[i.imageURL?(u(),h("img",{key:0,src:i.imageURL,alt:"recipe",class:"rounded-md"},null,8,Qn)):(u(),h("div",Jn,[b(l,{icon:"emojione-v1:pot-of-food",class:"text-4xl"})]))]),o("div",Zn,[o("h2",eo,f(i.title),1),o("p",to,f(i.descriptions),1),o("p",so,f(i.userName),1)])],8,qn))),128)),s.loading?(u(),h("div",no,[b(c)])):D("",!0)])):D("",!0)]),o("dialog",oo,[o("div",ro,[o("form",io,[o("button",{onClick:e[0]||(e[0]=(...i)=>s.closeModal&&s.closeModal(...i))},[b(l,{icon:"iconamoon:close-duotone",class:"text-2xl"})])]),o("h3",lo,[ee(f(s.selectedAllRecipe.title)+" ",1),ao]),o("div",null,[o("span",co,f(s.selectedAllRecipe.userName),1)]),s.selectedAllRecipe.totalRatings>0?(u(),h("div",uo,[(u(!0),h(O,null,L(s.starArray,(i,d)=>(u(),h("div",{key:d},[b(l,{icon:i==="full"?"ic:round-star":i==="half"?"ic:round-star-half":"ic:outline-star-border",class:"text-xl text-yellow-500"},null,8,["icon"])]))),128)),o("span",ho,f(s.selectedAllRecipe.ratingCount),1)])):(u(),h("div",po,[(u(),h(O,null,L(5,i=>o("div",{key:i.id},[b(l,{icon:"ic:outline-star-border",class:"text-xl"})])),64))])),_o,o("div",fo,[mo,o("p",go,f(s.selectedAllRecipe.descriptions),1)]),bo,o("div",yo,[xo,o("ul",null,[(u(!0),h(O,null,L(s.selectedAllRecipe.allIngredients,(i,d)=>(u(),h("li",{key:i.id,class:"capitalize"},f(d+1)+". "+f(i),1))),128))])]),Ro,o("div",vo,[wo,o("ol",null,[(u(!0),h(O,null,L(s.selectedAllRecipe.allInstructions,(i,d)=>(u(),h("li",{key:i.id},f(d+1)+". "+f(i),1))),128))])]),ko,s.ratingsInText?(u(),h("div",Io,[o("span",To,f(s.ratingsInText),1)])):D("",!0),s.muteRateBnt?(u(),h("div",Ao,Eo)):D("",!0),Co,o("div",Do,[o("div",{class:re([s.muteRateBnt?"border-gray-500/50 text-neutral":"text-yellow-500 border-yellow-500/50","ttext-xl px-4 border py-2 rounded-full flex gap-1"])},[(u(),h(O,null,L(5,i=>o("div",{key:i},[o("button",{disabled:s.muteRateBnt,onClick:d=>s.setRating(i,s.selectedAllRecipe.id),class:"flex justify-center items-center"},[b(l,{icon:s.ratings>=i?"ic:outline-star":"ic:outline-star-border"},null,8,["icon"])],8,No)])),64))],2),o("button",{disabled:s.ratings===0,class:"btn shadow rounded-full",onClick:e[1]||(e[1]=(...i)=>s.sendRatings&&s.sendRatings(...i))},[ee(" Send "),b(l,{icon:"iconamoon:send-fill",class:re(s.ratings===0?"text-gray-500 text-xl":"text-primary text-xl")},null,8,["class"]),s.sendingRatingLoading?(u(),h("span",Lo)):D("",!0)],8,Oo)])])],512)])}const So=te($n,[["render",Po]]),$o={components:{Loading:at,Icon:ae},setup(){const t=g(!0),e=g(!1),n=ue(),s=g(n.currentUser),r=xe(),{uid:a}=s.value,l=a,c=g([]),i=g({}),d=Re(r,"recipe"),y=Me(d,je("createdAt","asc"),vt("userId","==",l)),x=Fe(y,p=>{c.value=p.docs.map(m=>({id:m.id,...m.data()})).reverse(),t.value=!1}),R=p=>{const m=p.seconds,N=p.nanoseconds/1e6;return new Date(m*1e3+N)},U=p=>{const m=R(p),N=m.getFullYear().toString().slice(-2),$=m.toLocaleString("default",{month:"short"}),K=m.getUTCDate(),Z=m.getHours()%12||12,se=("0"+m.getMinutes()).slice(-2),W=m.getHours()<12?"am":"pm";return`${K} ${$} ${N} (${Z}:${se} ${W})`};let v=g("");const B=p=>{i.value=p,document.getElementById("my_modal_2").showModal()},A=(p,m)=>{i.value=m,v.value=p},M=()=>{document.getElementById("my_modal_delete").showModal()},S=()=>{console.log("edit recipe",v.value),document.getElementById("my_modal_edit").showModal()},E=async()=>{try{if(e.value=!0,!v.value){console.error("No recipe selected for deletion.");return}const p=be(r,"recipe",v.value),N=(await He(p)).data();if(await wt(p),N&&N.imageURL){const K=lt(),Z=it(K,N.imageURL);await Xs(Z)}document.getElementById("my_modal_delete").close(),console.log("Recipe and associated image deleted successfully:",v.value)}catch(p){console.error("Error deleting recipe and associated image:",p),document.getElementById("my_modal_delete").close(),e.value=!1}finally{e.value=!1}},T=async()=>{try{e.value=!0;const p=be(r,"recipe",v.value);await Ve(p,{...i.value}),document.getElementById("my_modal_edit").close(),console.log("Recipe updated successfully:",v.value)}catch(p){console.error("Error updating recipe:",p),document.getElementById("my_modal_edit").close()}finally{e.value=!1}};return Be(()=>{x()}),{loading:t,isSaveloading:e,recipe:c,formatHour:U,editShowRecipe:A,deleteShowRecipe:M,showRecipeModal:B,selectedRecipe:i,editRecipe:S,deleteRecipe:E,saveEditRecipe:T}}},Bo={class:"py-2"},Mo=o("h1",{class:"font-semibold py-2"},"Your Recipes",-1),jo={class:"flex justify-center sm:justify-start items-center"},Fo={class:"grid grid-cols-3 lg:grid-cols-5 gap-1 sm:gap-3 overflow-hidden py-5 sm:p-2"},Ho=["onClick"],Vo={class:"dropdown absolute top-0 right-0 text-gray-800 shadow"},zo=["onClick"],qo={tabindex:"0",role:"button",class:"btn btn-primary rounded-none btn-xs"},Wo={tabindex:"0",class:"dropdown-content z-[20] menu border border-gray-400/10 p-2 shadow bg-base-100 rounded-md w-32"},Xo=o("p",{class:"text-xs"},"Edit",-1),Yo=o("p",{class:"text-xs"},"Delete",-1),Ko=["src"],Go={key:1,class:"pt-2"},Qo={class:"card-body p-3"},Jo={class:"card-title"},Zo={class:"text-xs truncate"},er={class:"text-[10px] font-medium"},tr={key:1},sr=o("span",{class:"font-semibold text-sm px-4 py-2 bg-blue-300/10 rounded-full shadow"},"You don't have recipe yet.",-1),nr=[sr],or={key:2},rr={id:"my_modal_edit",class:"modal"},ir={class:"modal-box"},lr=o("h3",{class:"font-bold text-4xl"},"Edit Recipe",-1),ar={class:"py-2"},cr=o("label",{class:"block text-sm font-medium text-primary"},"Title",-1),dr={class:"py-2"},ur=o("label",{class:"block text-sm font-medium text-primary"},"Description",-1),hr={class:"py-2"},pr=o("label",{class:"block text-sm font-medium text-primary"},"Ingredients",-1),_r={class:"border border-gray-400/50 p-2 rounded-md"},fr=["onUpdate:modelValue"],mr={class:"py-2"},gr=o("label",{class:"block text-sm font-medium text-primary"},"Instructions",-1),br={class:"border border-gray-400/50 p-2 rounded-md"},yr=["onUpdate:modelValue"],xr={class:"modal-action"},Rr={key:0,class:"loading loading-dots loading-xs"},vr=o("form",{method:"dialog"},[o("button",{class:"btn"},"Close")],-1),wr={id:"my_modal_delete",class:"modal"},kr={class:"modal-box"},Ir=o("h3",{class:"font-bold text-lg"}," Are you sure you want to delete this recipe? ",-1),Tr={class:"modal-action"},Ar={key:0,class:"loading loading-dots loading-xs"},Ur=o("form",{method:"dialog"},[o("button",{class:"btn"},"Close")],-1),Er={id:"my_modal_2",class:"modal",ref:"recipeModal"},Cr={class:"modal-box"},Dr={method:"dialog",class:"absolute top-0 right-0 p-2 z-10"},Nr={class:"font-bold text-4xl capitalize"},Or={class:"py-4"},Lr=o("p",{class:"text-xs text-primary"},"Discriptions:",-1),Pr={class:"capitalize"},Sr=o("hr",{class:"border border-gray-500/10"},null,-1),$r={class:"py-4"},Br=o("p",{class:"text-xs text-primary"},"Ingredients:",-1),Mr=o("hr",{class:"border border-gray-500/10"},null,-1),jr={class:"py-4"},Fr=o("p",{class:"text-xs text-primary"},"Instructions:",-1);function Hr(t,e,n,s,r,a){const l=j("Icon"),c=j("Loading");return u(),h("div",Bo,[Mo,o("div",jo,[o("div",Fo,[s.recipe?(u(!0),h(O,{key:0},L(s.recipe,i=>(u(),h("div",{key:i.id,onClick:d=>s.showRecipeModal(i),class:"card sm:w-52 w-26 bg-base-100 shadow border border-gray-200/10 relative rounded-md"},[o("div",Vo,[o("button",{class:"flex justify-center items-center",onClick:F(d=>s.editShowRecipe(i.id,i),["stop"])},[o("div",qo,[b(l,{icon:"material-symbols-light:settings-outline",class:"text-xl"})])],8,zo),o("ul",Wo,[o("div",{class:"btn flex justify-start text-green-500 mb-1",onClick:e[0]||(e[0]=F(d=>s.editRecipe(t.id),["stop"]))},[b(l,{icon:"material-symbols:edit"}),Xo]),o("div",{class:"btn flex justify-start text-red-500",onClick:e[1]||(e[1]=F(d=>s.deleteShowRecipe(t.id),["stop"]))},[b(l,{icon:"ant-design:delete-twotone"}),Yo])])]),o("figure",null,[i.imageURL?(u(),h("img",{key:0,src:i.imageURL,alt:"recipe",class:""},null,8,Ko)):(u(),h("div",Go,[b(l,{icon:"emojione-v1:pot-of-food",class:"text-4xl"})]))]),o("div",Qo,[o("h2",Jo,f(i.title),1),o("p",Zo,f(i.descriptions),1),o("p",er,f(s.formatHour(i.createdAt)),1)])],8,Ho))),128)):D("",!0),s.recipe.length===0&&!s.loading?(u(),h("div",tr,nr)):D("",!0),s.loading?(u(),h("div",or,[b(c)])):D("",!0)]),o("dialog",rr,[o("div",ir,[lr,o("div",ar,[cr,z(o("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=i=>s.selectedRecipe.title=i),class:"input input-bordered w-full max-w-xs"},null,512),[[q,s.selectedRecipe.title]])]),o("div",dr,[ur,z(o("textarea",{class:"textarea textarea-bordered w-full","onUpdate:modelValue":e[3]||(e[3]=i=>s.selectedRecipe.descriptions=i)},null,512),[[q,s.selectedRecipe.descriptions]])]),o("div",hr,[pr,o("div",_r,[(u(!0),h(O,null,L(s.selectedRecipe.allIngredients,(i,d)=>(u(),h("div",{key:d,class:"flex items-center space-x-2"},[o("span",null,f(d+1)+".",1),z(o("input",{type:"text","onUpdate:modelValue":y=>s.selectedRecipe.allIngredients[d]=y,class:"input my-1 input-bordered w-full capitalize"},null,8,fr),[[q,s.selectedRecipe.allIngredients[d]]])]))),128))])]),o("div",mr,[gr,o("div",br,[(u(!0),h(O,null,L(s.selectedRecipe.allInstructions,(i,d)=>(u(),h("div",{key:d,class:"flex items-center space-x-2"},[o("span",null,f(d+1)+".",1),z(o("input",{type:"text","onUpdate:modelValue":y=>s.selectedRecipe.allInstructions[d]=y,class:"input my-1 input-bordered w-full capitalize"},null,8,yr),[[q,s.selectedRecipe.allInstructions[d]]])]))),128))])]),o("div",xr,[o("button",{onClick:e[4]||(e[4]=F((...i)=>s.saveEditRecipe&&s.saveEditRecipe(...i),["stop"])),class:"btn text-green-500 w-32"},[ee(" Update "),s.isSaveloading?(u(),h("span",Rr)):D("",!0)]),vr])])]),o("dialog",wr,[o("div",kr,[Ir,o("div",Tr,[o("button",{onClick:e[5]||(e[5]=F((...i)=>s.deleteRecipe&&s.deleteRecipe(...i),["stop"])),class:"btn text-red-500 w-32"},[ee(" Delete "),s.isSaveloading?(u(),h("span",Ar)):D("",!0)]),Ur])])]),o("dialog",Er,[o("div",Cr,[o("form",Dr,[o("button",null,[b(l,{icon:"iconamoon:close-duotone",class:"text-2xl"})])]),o("h3",Nr,f(s.selectedRecipe.title),1),o("div",Or,[Lr,o("p",Pr,f(s.selectedRecipe.descriptions),1)]),Sr,o("div",$r,[Br,o("ul",null,[(u(!0),h(O,null,L(s.selectedRecipe.allIngredients,(i,d)=>(u(),h("li",{key:i.id,class:"capitalize"},f(d+1)+". "+f(i),1))),128))])]),Mr,o("div",jr,[Fr,o("ol",null,[(u(!0),h(O,null,L(s.selectedRecipe.allInstructions,(i,d)=>(u(),h("li",{key:i.id},f(d+1)+". "+f(i),1))),128))])])])],512)])])}const Vr=te($o,[["render",Hr]]),zr={components:{Header:St,Icon:ae,AddRecipe:Un,AllRecipe:So,YourRecipe:Vr},setup(){const t=g("");return{search:t,filter:()=>{console.log(t.value)}}}},qr={class:"p-2"},Wr={class:"flex justify-end gap-2 items-center my-2"},Xr=["disabled"];function Yr(t,e,n,s,r,a){const l=j("Header"),c=j("Icon"),i=j("AddRecipe"),d=j("YourRecipe"),y=j("AllRecipe");return u(),h("div",qr,[b(l),o("div",Wr,[z(o("input",{type:"search","onUpdate:modelValue":e[0]||(e[0]=x=>s.search=x),placeholder:"Search...",class:"input input-bordered sm:w-52 md:w-96 w-full"},null,512),[[q,s.search]]),o("button",{disabled:s.search.length===0,class:"btn btn-primary",onClick:e[1]||(e[1]=(...x)=>s.filter&&s.filter(...x))},[b(c,{icon:"bi:search",class:"text-xl"})],8,Xr)]),b(i),b(d),b(y,{searchQuery:s.search},null,8,["searchQuery"])])}const Qr=te(zr,[["render",Yr]]);export{Qr as default};
