import{_ as Dt,C as St,z as We,A as pe,B as Ot,D as Nt,E as Pt,S as Mt,G as jt,H as Bt,g as ct,r as g,q as Ke,I as Oe,p as Xe,w as Ne,J as Ft,K as dt,o as y,c as b,a as i,j as I,n as G,t as O,e as re,d as qt,b as v,x as Z,u as l,T as Q,F as Me,l as Ht,i as zt,f as be,h as Ge,y as Vt}from"./index-BLnVbUpG.js";import{u as Wt,_ as Kt,I as Y}from"./_plugin-vue_export-helper-BjazDEgw.js";import{s as Xt,d as Ye,h as Je,a as Gt,c as Ze,b as Qe,q as Yt,o as Jt}from"./index.esm2017-D51BvJXu.js";/**
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
 */const ht="firebasestorage.googleapis.com",ft="storageBucket",Zt=2*60*1e3,Qt=10*60*1e3;/**
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
 */class L extends Bt{constructor(t,s,n=0){super(Te(t),`Firebase Storage: ${s} (${Te(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,L.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Te(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var $;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})($||($={}));function Te(e){return"storage/"+e}function je(){const e="An unknown error occurred, please check the error payload for server response.";return new L($.UNKNOWN,e)}function es(e){return new L($.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function ts(e){return new L($.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function ss(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new L($.UNAUTHENTICATED,e)}function ns(){return new L($.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function rs(e){return new L($.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function os(){return new L($.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function is(){return new L($.CANCELED,"User canceled the upload/download.")}function as(e){return new L($.INVALID_URL,"Invalid URL '"+e+"'.")}function ls(e){return new L($.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function us(){return new L($.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ft+"' property when initializing the app?")}function cs(){return new L($.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function ds(){return new L($.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function hs(e){return new L($.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Pe(e){return new L($.INVALID_ARGUMENT,e)}function gt(){return new L($.APP_DELETED,"The Firebase app was deleted.")}function fs(e){return new L($.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function me(e,t){return new L($.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function fe(e){throw new L($.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class B{constructor(t,s){this.bucket=t,this.path_=s}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,s){let n;try{n=B.makeFromUrl(t,s)}catch{return new B(t,"")}if(n.path==="")return n;throw ls(t)}static makeFromUrl(t,s){let n=null;const r="([A-Za-z0-9.\\-_]+)";function o(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const a="(/(.*))?$",c=new RegExp("^gs://"+r+a,"i"),d={bucket:1,path:3};function u(D){D.path_=decodeURIComponent(D.path)}const h="v[A-Za-z0-9_]+",p=s.replace(/[.]/g,"\\."),x="(/([^?#]*).*)?$",w=new RegExp(`^https?://${p}/${h}/b/${r}/o${x}`,"i"),_={bucket:1,path:3},T=s===ht?"(?:storage.googleapis.com|storage.cloud.google.com)":s,f="([^?#]*)",C=new RegExp(`^https?://${T}/${r}/${f}`,"i"),P=[{regex:c,indices:d,postModify:o},{regex:w,indices:_,postModify:u},{regex:C,indices:{bucket:1,path:2},postModify:u}];for(let D=0;D<P.length;D++){const M=P[D],W=M.regex.exec(t);if(W){const k=W[M.indices.bucket];let U=W[M.indices.path];U||(U=""),n=new B(k,U),M.postModify(n);break}}if(n==null)throw as(t);return n}}class gs{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function ms(e,t,s){let n=1,r=null,o=null,a=!1,c=0;function d(){return c===2}let u=!1;function h(...f){u||(u=!0,t.apply(null,f))}function p(f){r=setTimeout(()=>{r=null,e(w,d())},f)}function x(){o&&clearTimeout(o)}function w(f,...C){if(u){x();return}if(f){x(),h.call(null,f,...C);return}if(d()||a){x(),h.call(null,f,...C);return}n<64&&(n*=2);let P;c===1?(c=2,P=0):P=(n+Math.random())*1e3,p(P)}let _=!1;function T(f){_||(_=!0,x(),!u&&(r!==null?(f||(c=2),clearTimeout(r),p(0)):f||(c=1)))}return p(0),o=setTimeout(()=>{a=!0,T(!0)},s),T}function ps(e){e(!1)}/**
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
 */function ys(e){return e!==void 0}function bs(e){return typeof e=="object"&&!Array.isArray(e)}function Be(e){return typeof e=="string"||e instanceof String}function et(e){return Fe()&&e instanceof Blob}function Fe(){return typeof Blob<"u"}function tt(e,t,s,n){if(n<t)throw Pe(`Invalid value for '${e}'. Expected ${t} or greater.`);if(n>s)throw Pe(`Invalid value for '${e}'. Expected ${s} or less.`)}/**
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
 */function _e(e,t,s){let n=t;return s==null&&(n=`https://${t}`),`${s}://${n}/v0${e}`}function mt(e){const t=encodeURIComponent;let s="?";for(const n in e)if(e.hasOwnProperty(n)){const r=t(n)+"="+t(e[n]);s=s+r+"&"}return s=s.slice(0,-1),s}/**
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
 */var le;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(le||(le={}));/**
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
 */function vs(e,t){const s=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,o=t.indexOf(e)!==-1;return s||r||o}/**
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
 */class xs{constructor(t,s,n,r,o,a,c,d,u,h,p,x=!0){this.url_=t,this.method_=s,this.headers_=n,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=a,this.callback_=c,this.errorCallback_=d,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=p,this.retry=x,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((w,_)=>{this.resolve_=w,this.reject_=_,this.start_()})}start_(){const t=(n,r)=>{if(r){n(!1,new ve(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const a=c=>{const d=c.loaded,u=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(d,u)};this.progressCallback_!==null&&o.addUploadProgressListener(a),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(a),this.pendingConnection_=null;const c=o.getErrorCode()===le.NO_ERROR,d=o.getStatus();if(!c||vs(d,this.additionalRetryCodes_)&&this.retry){const h=o.getErrorCode()===le.ABORT;n(!1,new ve(!1,null,h));return}const u=this.successCodes_.indexOf(d)!==-1;n(!0,new ve(u,o))})},s=(n,r)=>{const o=this.resolve_,a=this.reject_,c=r.connection;if(r.wasSuccessCode)try{const d=this.callback_(c,c.getResponse());ys(d)?o(d):o()}catch(d){a(d)}else if(c!==null){const d=je();d.serverResponse=c.getErrorText(),this.errorCallback_?a(this.errorCallback_(c,d)):a(d)}else if(r.canceled){const d=this.appDelete_?gt():is();a(d)}else{const d=os();a(d)}};this.canceled_?s(!1,new ve(!1,null,!0)):this.backoffId_=ms(t,s,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&ps(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ve{constructor(t,s,n){this.wasSuccessCode=t,this.connection=s,this.canceled=!!n}}function ws(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function _s(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function ks(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Is(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function Rs(e,t,s,n,r,o,a=!0){const c=mt(e.urlParams),d=e.url+c,u=Object.assign({},e.headers);return ks(u,t),ws(u,s),_s(u,o),Is(u,n),new xs(d,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r,a)}/**
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
 */function Ts(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Us(...e){const t=Ts();if(t!==void 0){const s=new t;for(let n=0;n<e.length;n++)s.append(e[n]);return s.getBlob()}else{if(Fe())return new Blob(e);throw new L($.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Cs(e,t,s){return e.webkitSlice?e.webkitSlice(t,s):e.mozSlice?e.mozSlice(t,s):e.slice?e.slice(t,s):null}/**
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
 */function Es(e){if(typeof atob>"u")throw hs("base-64");return atob(e)}/**
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
 */const J={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ue{constructor(t,s){this.data=t,this.contentType=s||null}}function $s(e,t){switch(e){case J.RAW:return new Ue(pt(t));case J.BASE64:case J.BASE64URL:return new Ue(yt(e,t));case J.DATA_URL:return new Ue(As(t),Ds(t))}throw je()}function pt(e){const t=[];for(let s=0;s<e.length;s++){let n=e.charCodeAt(s);if(n<=127)t.push(n);else if(n<=2047)t.push(192|n>>6,128|n&63);else if((n&64512)===55296)if(!(s<e.length-1&&(e.charCodeAt(s+1)&64512)===56320))t.push(239,191,189);else{const o=n,a=e.charCodeAt(++s);n=65536|(o&1023)<<10|a&1023,t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|n&63)}else(n&64512)===56320?t.push(239,191,189):t.push(224|n>>12,128|n>>6&63,128|n&63)}return new Uint8Array(t)}function Ls(e){let t;try{t=decodeURIComponent(e)}catch{throw me(J.DATA_URL,"Malformed data URL.")}return pt(t)}function yt(e,t){switch(e){case J.BASE64:{const r=t.indexOf("-")!==-1,o=t.indexOf("_")!==-1;if(r||o)throw me(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case J.BASE64URL:{const r=t.indexOf("+")!==-1,o=t.indexOf("/")!==-1;if(r||o)throw me(e,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let s;try{s=Es(t)}catch(r){throw r.message.includes("polyfill")?r:me(e,"Invalid character found")}const n=new Uint8Array(s.length);for(let r=0;r<s.length;r++)n[r]=s.charCodeAt(r);return n}class bt{constructor(t){this.base64=!1,this.contentType=null;const s=t.match(/^data:([^,]+)?,/);if(s===null)throw me(J.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=s[1]||null;n!=null&&(this.base64=Ss(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=t.substring(t.indexOf(",")+1)}}function As(e){const t=new bt(e);return t.base64?yt(J.BASE64,t.rest):Ls(t.rest)}function Ds(e){return new bt(e).contentType}function Ss(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class ne{constructor(t,s){let n=0,r="";et(t)?(this.data_=t,n=t.size,r=t.type):t instanceof ArrayBuffer?(s?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(s?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,s){if(et(this.data_)){const n=this.data_,r=Cs(n,t,s);return r===null?null:new ne(r)}else{const n=new Uint8Array(this.data_.buffer,t,s-t);return new ne(n,!0)}}static getBlob(...t){if(Fe()){const s=t.map(n=>n instanceof ne?n.data_:n);return new ne(Us.apply(null,s))}else{const s=t.map(a=>Be(a)?$s(J.RAW,a).data:a.data_);let n=0;s.forEach(a=>{n+=a.byteLength});const r=new Uint8Array(n);let o=0;return s.forEach(a=>{for(let c=0;c<a.length;c++)r[o++]=a[c]}),new ne(r,!0)}}uploadData(){return this.data_}}/**
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
 */function vt(e){let t;try{t=JSON.parse(e)}catch{return null}return bs(t)?t:null}/**
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
 */function Os(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function Ns(e,t){const s=t.split("/").filter(n=>n.length>0).join("/");return e.length===0?s:e+"/"+s}function xt(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function Ps(e,t){return t}class N{constructor(t,s,n,r){this.server=t,this.local=s||t,this.writable=!!n,this.xform=r||Ps}}let xe=null;function Ms(e){return!Be(e)||e.length<2?e:xt(e)}function wt(){if(xe)return xe;const e=[];e.push(new N("bucket")),e.push(new N("generation")),e.push(new N("metageneration")),e.push(new N("name","fullPath",!0));function t(o,a){return Ms(a)}const s=new N("name");s.xform=t,e.push(s);function n(o,a){return a!==void 0?Number(a):a}const r=new N("size");return r.xform=n,e.push(r),e.push(new N("timeCreated")),e.push(new N("updated")),e.push(new N("md5Hash",null,!0)),e.push(new N("cacheControl",null,!0)),e.push(new N("contentDisposition",null,!0)),e.push(new N("contentEncoding",null,!0)),e.push(new N("contentLanguage",null,!0)),e.push(new N("contentType",null,!0)),e.push(new N("metadata","customMetadata",!0)),xe=e,xe}function js(e,t){function s(){const n=e.bucket,r=e.fullPath,o=new B(n,r);return t._makeStorageReference(o)}Object.defineProperty(e,"ref",{get:s})}function Bs(e,t,s){const n={};n.type="file";const r=s.length;for(let o=0;o<r;o++){const a=s[o];n[a.local]=a.xform(n,t[a.server])}return js(n,e),n}function _t(e,t,s){const n=vt(t);return n===null?null:Bs(e,n,s)}function Fs(e,t,s,n){const r=vt(t);if(r===null||!Be(r.downloadTokens))return null;const o=r.downloadTokens;if(o.length===0)return null;const a=encodeURIComponent;return o.split(",").map(u=>{const h=e.bucket,p=e.fullPath,x="/b/"+a(h)+"/o/"+a(p),w=_e(x,s,n),_=mt({alt:"media",token:u});return w+_})[0]}function qs(e,t){const s={},n=t.length;for(let r=0;r<n;r++){const o=t[r];o.writable&&(s[o.server]=e[o.local])}return JSON.stringify(s)}class qe{constructor(t,s,n,r){this.url=t,this.method=s,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function kt(e){if(!e)throw je()}function Hs(e,t){function s(n,r){const o=_t(e,r,t);return kt(o!==null),o}return s}function zs(e,t){function s(n,r){const o=_t(e,r,t);return kt(o!==null),Fs(o,r,e.host,e._protocol)}return s}function It(e){function t(s,n){let r;return s.getStatus()===401?s.getErrorText().includes("Firebase App Check token is invalid")?r=ns():r=ss():s.getStatus()===402?r=ts(e.bucket):s.getStatus()===403?r=rs(e.path):r=n,r.status=s.getStatus(),r.serverResponse=n.serverResponse,r}return t}function Rt(e){const t=It(e);function s(n,r){let o=t(n,r);return n.getStatus()===404&&(o=es(e.path)),o.serverResponse=r.serverResponse,o}return s}function Vs(e,t,s){const n=t.fullServerUrl(),r=_e(n,e.host,e._protocol),o="GET",a=e.maxOperationRetryTime,c=new qe(r,o,zs(e,s),a);return c.errorHandler=Rt(t),c}function Ws(e,t){const s=t.fullServerUrl(),n=_e(s,e.host,e._protocol),r="DELETE",o=e.maxOperationRetryTime;function a(d,u){}const c=new qe(n,r,a,o);return c.successCodes=[200,204],c.errorHandler=Rt(t),c}function Ks(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function Xs(e,t,s){const n=Object.assign({},s);return n.fullPath=e.path,n.size=t.size(),n.contentType||(n.contentType=Ks(null,t)),n}function Gs(e,t,s,n,r){const o=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function c(){let P="";for(let D=0;D<2;D++)P=P+Math.random().toString().slice(2);return P}const d=c();a["Content-Type"]="multipart/related; boundary="+d;const u=Xs(t,n,r),h=qs(u,s),p="--"+d+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+d+`\r
Content-Type: `+u.contentType+`\r
\r
`,x=`\r
--`+d+"--",w=ne.getBlob(p,n,x);if(w===null)throw cs();const _={name:u.fullPath},T=_e(o,e.host,e._protocol),f="POST",C=e.maxUploadRetryTime,q=new qe(T,f,Hs(e,s),C);return q.urlParams=_,q.headers=a,q.body=w.uploadData(),q.errorHandler=It(t),q}class Ys{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=le.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=le.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=le.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,s,n,r){if(this.sent_)throw fe("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(s,t,!0),r!==void 0)for(const o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return n!==void 0?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw fe("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw fe("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw fe("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw fe("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class Js extends Ys{initXhr(){this.xhr_.responseType="text"}}function He(){return new Js}/**
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
 */class ue{constructor(t,s){this._service=t,s instanceof B?this._location=s:this._location=B.makeFromUrl(s,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,s){return new ue(t,s)}get root(){const t=new B(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return xt(this._location.path)}get storage(){return this._service}get parent(){const t=Os(this._location.path);if(t===null)return null;const s=new B(this._location.bucket,t);return new ue(this._service,s)}_throwIfRoot(t){if(this._location.path==="")throw fs(t)}}function Zs(e,t,s){e._throwIfRoot("uploadBytes");const n=Gs(e.storage,e._location,wt(),new ne(t,!0),s);return e.storage.makeRequestWithTokens(n,He).then(r=>({metadata:r,ref:e}))}function Qs(e){e._throwIfRoot("getDownloadURL");const t=Vs(e.storage,e._location,wt());return e.storage.makeRequestWithTokens(t,He).then(s=>{if(s===null)throw ds();return s})}function en(e){e._throwIfRoot("deleteObject");const t=Ws(e.storage,e._location);return e.storage.makeRequestWithTokens(t,He)}function tn(e,t){const s=Ns(e._location.path,t),n=new B(e._location.bucket,s);return new ue(e.storage,n)}/**
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
 */function sn(e){return/^[A-Za-z]+:\/\//.test(e)}function nn(e,t){return new ue(e,t)}function Tt(e,t){if(e instanceof ze){const s=e;if(s._bucket==null)throw us();const n=new ue(s,s._bucket);return t!=null?Tt(n,t):n}else return t!==void 0?tn(e,t):e}function rn(e,t){if(t&&sn(t)){if(e instanceof ze)return nn(e,t);throw Pe("To use ref(service, url), the first argument must be a Storage instance.")}else return Tt(e,t)}function st(e,t){const s=t==null?void 0:t[ft];return s==null?null:B.makeFromBucketSpec(s,e)}function on(e,t,s,n={}){e.host=`${t}:${s}`,e._protocol="http";const{mockUserToken:r}=n;r&&(e._overrideAuthToken=typeof r=="string"?r:jt(r,e.app.options.projectId))}class ze{constructor(t,s,n,r,o){this.app=t,this._authProvider=s,this._appCheckProvider=n,this._url=r,this._firebaseVersion=o,this._bucket=null,this._host=ht,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Zt,this._maxUploadRetryTime=Qt,this._requests=new Set,r!=null?this._bucket=B.makeFromBucketSpec(r,this._host):this._bucket=st(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=B.makeFromBucketSpec(this._url,t):this._bucket=st(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){tt("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){tt("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const s=await t.getToken();if(s!==null)return s.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new ue(this,t)}_makeRequest(t,s,n,r,o=!0){if(this._deleted)return new gs(gt());{const a=Rs(t,this._appId,n,r,s,this._firebaseVersion,o);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(t,s){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,s,n,r).getPromise()}}const nt="@firebase/storage",rt="0.12.5";/**
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
 */const Ut="storage";function ot(e,t,s){return e=pe(e),Zs(e,t,s)}function it(e){return e=pe(e),Qs(e)}function oo(e){return e=pe(e),en(e)}function at(e,t){return e=pe(e),rn(e,t)}function an(e=Pt(),t){e=pe(e);const n=Ot(e,Ut).getImmediate({identifier:t}),r=Nt("storage");return r&&ln(n,...r),n}function ln(e,t,s,n={}){on(e,t,s,n)}function un(e,{instanceIdentifier:t}){const s=e.getProvider("app").getImmediate(),n=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return new ze(s,n,r,t,Mt)}function cn(){Dt(new St(Ut,un,"PUBLIC").setMultipleInstances(!0)),We(nt,rt,""),We(nt,rt,"esm2017")}cn();function dn(){const e=ct(),t=g(e.currentUser),{uid:s,photoURL:n,displayName:r}=t.value,o=s,a=g([]),d=JSON.parse(localStorage.getItem("users")).filter(u=>u.id!==o);return a.value=d,{storedUsers:a}}function io(){const e=ct(),t=g(e.currentUser),{firestore:s}=Wt(),n=an(),r=t.value.uid,o=t.value.photoURL,a=t.value.displayName;Ft();const{storedUsers:c}=dn(),d=g(""),u=g([]),h=g(!1),p=g(null);let x=g({}),w=g(!1);const _=(m,R)=>[m,R].sort().join("_"),T=(m,R)=>{document.getElementById(m).showModal(),x.value=R,Ve(),console.log(u)},f=g(null),C=g(null),q=m=>{f.value=m},P=m=>{C.value=m},D=async()=>{if(d.value.trim()===""&&!f.value&&!C.value){console.warn("Please enter a message or select a file");return}try{const m=_(r,x.value.userId);w.value=!0,console.log(w.value);let R=null,A=null;if(f.value){const z=`chats/${m}/${Date.now()}_${f.value.name}`,K=at(n,z),X=await ot(K,f.value);R=await it(X.ref)}if(C.value){const z=`chats/${m}/${Date.now()}_${C.value.name}`,K=at(n,z),X=await ot(K,C.value);A=await it(X.ref)}await Xt(Ye(s,`chats/${m}`),{participants:{[r]:!0,[x.value.userId]:!0},lastMessage:d.value||(R||A?"File attachment":""),sender:r,timestamp:Je()},{merge:!0}),await Gt(Ze(s,`chats/${m}/messages`),{senderId:r,recipientId:x.value.userId,message:d.value,imageUrl:A,imageName:C.value?C.value.name:null,fileUrl:R,fileName:f.value?f.value.name:null,isSendMessageLoading:!1,timestamp:Je()}),d.value="",f.value=null,C.value=null}catch(m){console.error("Error sending message: ",m)}finally{w.value=!1}},M=g({}),W=g({}),k=g([]),U=g({}),H=g(0),S=Ke(()=>c.value.filter(m=>M.value[_(r,m.id)]).sort((m,R)=>{const A=_(r,m.id),z=_(r,R.id);return U.value[z]-U.value[A]})),ye=()=>{k.value.forEach(R=>R()),k.value=[];const m=new Set;c.value.forEach(R=>{const A=_(r,R.id),z=Ye(s,"chats",A),K=Qe(z,X=>{if(X.exists()){const V=X.data(),ce=V.lastMessage||"",oe=V.sender||"",Ie=V.timestamp||"";M.value[A]=ce,W.value[A]=oe,U.value[A]=Ie,ce&&oe!==r?m.has(oe)||(m.add(oe),H.value=m.size):m.has(oe)&&(m.delete(oe),H.value=m.size)}else{M.value[A]="",W.value[A]="",U.value[A]="";const V=W.value[A];m.has(V)&&(m.delete(V),H.value=m.size)}},X=>{console.error("Error listening to chat updates:",X)});k.value.push(K)})};Oe(()=>{ye()}),Xe(()=>{k.value.forEach(m=>m())}),Ne(H,m=>{console.log(H.value)});const ke=Ke(()=>u.value.filter(m=>m.senderId===r&&m.recipientId===x.value.userId||m.senderId===x.value.userId&&m.recipientId===r)),$t=()=>{dt(()=>{p.value&&(p.value.scrollTop=p.value.scrollHeight)})},Ve=()=>{h.value=!0;const m=_(r,x.value.userId),R=Yt(Ze(s,`chats/${m}/messages`),Jt("timestamp","asc")),A=Qe(R,z=>{u.value=z.docs.map(K=>({id:K.id,...K.data()})),h.value=!1,$t()});Xe(()=>{A()})};return Oe(()=>{Ve()}),{Time:m=>{if(m){const R=new Date(m.seconds*1e3),A=new Date,z=R.getHours()%12||12,K=("0"+R.getMinutes()).slice(-2),X=R.getHours()<12?"am":"pm",V=`${z}:${K} ${X}`;if(R.toDateString()===A.toDateString())return V;const ce=new Date(A);if(ce.setDate(ce.getDate()-1),R.toDateString()===ce.toDateString())return`Yesterday ${V}`;const Ie=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][R.getDay()],Re=new Date(A);if(Re.setDate(Re.getDate()-7),R>Re)return`${Ie} ${V}`;const Lt=R.toLocaleString("default",{month:"short"}),At=R.getDate();return`${Lt} ${At} ${V}`}return""},getChatId:_,yourChat:T,sendMessage:D,userId:r,newMessage:d,messages:u,isLoading:h,isSendMessageLoading:w,filteredMessages:ke,selectedUser:x,timestamp:U,userPhoto:o,userName:a,filteredUsers:S,latestMessages:M,isSender:W,storedUsers:c,newMessageArray:H,file:f,imageFile:C,handleImageUpdate:P,handleFileUpdate:q}}const hn={class:"w-10 rounded-full"},fn={key:0,class:"size-10 bg-gray-500/20 border border-gray-500/20 rounded-full"},gn=["src"],mn={class:""},pn={class:"text-sm font-medium capitalize"},yn={class:"flex gap-2 justify-start items-center"},bn={key:0,class:"text-xs"},vn={class:"text-[10px]"},ao={__name:"usersChatHeads",props:{yourChat:{type:Function,required:!0},formatTime:{type:Function,required:!0},user:{type:Object,required:!0},latestMessages:{type:Object,required:!0},getChatId:{type:Function,required:!0},userId:{type:[String,Number],required:!0},isSender:{type:Object,required:!0},timestamp:{type:Object,required:!0}},setup(e){const t=g(!0),s=()=>{console.log("loading is done!"),t.value=!1},n=()=>{t.value=!1};return(r,o)=>(y(),b("div",{onClick:o[0]||(o[0]=a=>e.yourChat(e.user)),class:"flex justify-start items-center gap-2 cursor-pointer hover:bg-gray-500/20 transition p-1 rounded-md"},[i("div",{class:G(["avatar",e.user.status==="online"?"online":"offline"])},[i("div",hn,[t.value?(y(),b("div",fn)):I("",!0),i("img",{src:e.user.userPhotoURL,loading:"lazy",class:"bg-gray-500/20 border border-gray-500/20 rounded-full",onLoad:s,onError:n},null,40,gn)])],2),i("div",mn,[i("h1",pn,O(e.user.userName),1),i("div",yn,[e.latestMessages[e.getChatId(e.userId,e.user.id)]?(y(),b("span",{key:0,class:G(["text-xs px-2 py-0.5 truncate max-w-52 bg-gray-500/20 rounded-full",e.isSender[e.getChatId(e.userId,e.user.id)]===e.userId?"":"text-blue-500"])},[e.isSender[e.getChatId(e.userId,e.user.id)]===e.userId?(y(),b("span",bn," You: ")):I("",!0),re(" "+O(e.latestMessages[e.getChatId(e.userId,e.user.id)]),1)],2)):I("",!0),i("span",vn,O(e.formatTime(e.timestamp[e.getChatId(e.userId,e.user.id)])),1)])])]))}},xn={},wn={class:"my-3"},_n=qt('<div class="flex flex-col gap-4 w-32 ml-2"><div class="flex gap-2 items-center"><div class="skeleton w-10 h-10 rounded-full shrink-0"></div><div class="flex flex-col gap-2"><div class="skeleton h-2 w-10"></div><div class="skeleton h-2 w-20"></div></div></div></div><div class="flex justify-end mr-5"><div class="flex flex-col gap-4 w-32"><div class="flex gap-2 items-center"><div class="flex flex-col gap-2"><div class="skeleton h-2 w-20"></div><div class="skeleton h-2 w-10"></div></div><div class="skeleton w-10 h-10 rounded-full shrink-0"></div></div></div></div>',2),kn=[_n];function In(e,t){return y(),b("div",wn,kn)}const Rn=Kt(xn,[["render",In]]),we=g(""),ee=g(null),te=g(null),Ce=g(null),Ee=g(!1),ie=g(!1),lt=g(""),$e=g(""),ae=g(!0),Le=g(!1),Tn=g(6e4);let Ae=null,ge=null,E=null,de=null;const he=g("0:00.0");let De=null,j=null;const se=g(0),Se=g(!1);let Un=g(0),ut=g(null);const F=g({id:null,isClick:!1});function Ct(e){const t=h=>{Ee.value=!1;const p=h.target.files[0];p&&(ee.value=p,we.value=ee.value.name,console.log(ee.value),e("update:selectedFile",ee.value))},s=h=>{Ee.value=!0;const p=h.target.files[0];p&&(te.value=p,Ce.value=URL.createObjectURL(p),we.value=te.value.name,console.log(te.value),e("update:selectedImage",te.value))},n=()=>{(ee.value||te.value)&&(we.value="",Ce.value=null,te.value=null,ee.value=null,e("update:selectedFile",null),e("update:selectedImage",null)),console.log(ee.value,te.value)},r=(h,p)=>{$e.value=p,ut.value=h,console.log(h),F.value.id===h?(F.value.id=null,F.value.isClick=!1,console.log(F.value.id),console.log(F.value.isClick)):(F.value.isClick=!0,F.value.id=h)},o=g(!1),a=g(!1);return{selectedChatId:ut,showDetailsId:F,isShowDeleteConfirmation:o,isShowCopied:a,isImage:Ee,deleteChat:h=>{o.value=!0,console.log(h)},selectedFile:ee,selectedImage:te,imageURL:Ce,fileName:we,closeAttachements:n,cancelDeleteConfirmation:()=>{o.value=!1,F.value.id=null,F.value.isClick=!1},copyChat:()=>{navigator.clipboard.writeText($e).then(()=>{a.value=!0,console.log($e.value),setTimeout(()=>{a.value=!1},2e3)}).catch(h=>{console.error("Failed to copy text: ",h)}),F.value.id=null,F.value.isClick=!1,console.log("copied")},Icon:Y,showInfo:r,handleFileChange:t,handleImageChange:s,emit:e}}function Et(){const e=u=>{const h=Math.floor(u/1e3),p=Math.floor(h/60).toString().padStart(1,"0"),x=(h%60).toString().padStart(2,"0"),w=(u%1e3).toString().padStart(3,"0").slice(0,1);return`${p}:${x}:${w}`},t=()=>{if(ie.value){const h=Date.now()-De;he.value=e(h),se.value=h/Tn.value*100}},s=async()=>{console.log("recording start..."),t(),se.value=0,Un.value=0,clearInterval(j),ae.value=!0;try{const u=await navigator.mediaDevices.getUserMedia({audio:!0});de=new MediaRecorder(u),de.ondataavailable=h=>{Ae=h.data,ge=URL.createObjectURL(Ae),E=new Audio(ge),E.addEventListener("timeupdate",n),E.addEventListener("ended",r)},de.start(),ie.value=!0,De=Date.now(),E&&E.pause(),j=setInterval(()=>{t(),se.value>=100&&o()},100)}catch(u){lt.value="Recording is not supported or failed.",Se.value=!0,setTimeout(()=>{Se.value=!1},2e3),console.error(u)}},n=()=>{if(E&&!ie.value){const u=E.currentTime/E.duration*100;se.value=u,he.value=e(E.currentTime*1e3)}},r=()=>{ae.value=!0,se.value=100,E&&(he.value=e(E.duration*1e3))},o=()=>{if(console.log("recording stopped..."),de&&de.state!=="inactive"){de.stop(),ie.value=!1,ae.value=!0,j&&(clearInterval(j),j=null);const u=Date.now()-De;he.value=e(u)}};return{startRecording:s,pauseRecording:()=>{console.log("paused"),ie.value?o():E&&(E.pause(),ae.value=!0,j&&(clearInterval(j),j=null)),Le.value=!0},deleteRecording:()=>{console.log("Recording deleted..."),o(),ie.value=!1,Le.value=!1,E&&(E.pause(),E.currentTime=0,E.removeEventListener("timeupdate",n),E.removeEventListener("ended",r)),j&&(clearInterval(j),j=null),ge&&(URL.revokeObjectURL(ge),Ae=null,ge=null,E=null,ae.value=!0,se.value=0,he.value="0:00.0")},stopRecording:o,isShowRecordingModal:Le,isPause:ae,playRecord:()=>{console.log("playing"),E&&(se.value=0,E.currentTime=0,E.play(),ae.value=!1,j||(j=setInterval(()=>{n()},100)))},recordingProgress:se,elapsedTime:he,isRecording:ie,Icon:Y,recordingError:lt,isRecordingError:Se}}const Cn={key:0,class:"backdrop-blur-2xl flex mb-1 justify-start items-center gap-1 bg-red-400/10 border py-1 px-2 text-sm font-medium transition border-red-500/20 rounded-full"},En={key:0,class:"flex mb-1 justify-center items-center gap-2"},$n=i("span",{class:"backdrop-blur-2xl flex justify-center items-center gap-2 bg-green-400/10 border px-2 text-sm font-medium py-1 transition border-green-500/20 rounded-full"},[i("span",{class:"loading loading-ring text-green-500 loading-md"}),i("span",null,"Recording..")],-1),Ln={key:0,class:"fixed bottom-0 backdrop-blur-2xl py-5 z-50 inset-x-0"},An={class:"flex justify-center items-center mb-4 gap-1 mx-2"},Dn={class:"backdrop-blur-2xl flex justify-start w-full items-center gap-2 bg-gray-400/20 border px-2 text-sm font-medium py-2 transition border-gray-500/20 rounded-l-xl"},Sn={class:"flex justify-start w-full items-center"},On={class:"w-full border flex justify-center item-center p-1 border-gray-500/20 rounded-2xl"},Nn=["value"],Pn={class:"max-w-16 tabular-nums font-mono text-[10px]"},Mn={class:"px-2 flex justify-between items-center gap-1"},jn={class:"flex justify-start items-center gap-1"},Bn={class:"bg-blue-500 cursor-not-allowed hover:bg-blue-600 transition text-gray-100 rounded-full px-4 py-2 flex justify-start items-center gap-2"},Fn=i("span",{class:"text-sm font-meduim"},"Send",-1),qn={__name:"recordingModal",setup(e){const{startRecording:t,pauseRecording:s,deleteRecording:n,stopRecording:r,isShowRecordingModal:o,isPause:a,playRecord:c,recordingProgress:d,elapsedTime:u,isRecording:h,Icon:p,recordingError:x,isRecordingError:w}=Et();return(_,T)=>(y(),b(Me,null,[v(Q,null,{default:Z(()=>[l(w)?(y(),b("span",Cn,[v(l(p),{icon:"material-symbols:error",class:"text-red-500",width:"20",height:"20"}),re(" "+O(l(x)),1)])):I("",!0)]),_:1}),v(Q,null,{default:Z(()=>[l(h)?(y(),b("div",En,[$n,i("button",{onClick:T[0]||(T[0]=f=>l(s)()),class:"backdrop-blur-2xl flex justify-center items-center gap-1 bg-red-400/10 border py-1 px-2 text-sm font-medium transition border-red-500/20 rounded-full"},[v(l(p),{icon:"ic:round-pause",width:"20",height:"20",class:"text-red-500"}),re(" Pause ")]),i("button",{onClick:T[1]||(T[1]=f=>l(n)()),class:"backdrop-blur-2xl flex justify-center items-center gap-1 py-1 px-2 text-sm font-medium transition rounded-full"},[v(l(p),{icon:"mingcute:delete-fill",width:"20",height:"20",class:"text-red-500"})])])):I("",!0)]),_:1}),l(o)?(y(),b("div",Ln,[i("div",An,[i("div",Dn,[i("div",Sn,[i("button",{onClick:T[2]||(T[2]=f=>l(a)?l(c)():l(s)())},[v(l(p),{icon:l(a)?"iconoir:play-solid":"ic:round-pause",width:"20",height:"20"},null,8,["icon"])]),i("div",On,[i("progress",{class:"progress progress-primary w-full mx-1",value:l(d),max:"100"},null,8,Nn)])]),i("div",Pn,O(l(u)),1)]),i("button",{class:"px-2 bg-gray-400/20 border hover:text-green-500 transition border-gray-500/20 rounded-r-xl py-2",onClick:T[3]||(T[3]=f=>l(h)?l(r)():l(t)())},[v(l(p),{icon:l(h)?"ic:round-stop":"fluent:mic-pulse-48-filled",width:"20",height:"20",class:G(l(h)?"text-red-500":"")},null,8,["icon","class"])])]),i("div",Mn,[i("div",jn,[i("button",{onClick:T[4]||(T[4]=f=>l(n)()),class:"backdrop-blur-2xl flex justify-center items-center gap-1 py-1 hover:bg-red-500/10 px-2 text-sm font-medium transition rounded-full"},[v(l(p),{icon:"mingcute:delete-fill",width:"20",height:"20",class:"text-red-500"})]),i("button",{onClick:T[5]||(T[5]=f=>l(t)()),class:"backdrop-blur-2xl flex justify-center items-center hover:bg-green-500/10 gap-1 py-1 px-2 text-sm font-medium transition rounded-full"},[v(l(p),{icon:"ion:reload",width:"20",height:"20",class:"text-green-500"})])]),i("div",null,[i("button",Bn,[Fn,v(l(p),{icon:"bxs:send",class:"text-xl text-gray-200"})])])])])):I("",!0)],64))}},Hn={class:"chat-image avatar"},zn={key:0,class:"size-5 rounded-full"},Vn=["src"],Wn={key:0,class:"chat-header text-xs font-medium"},Kn={class:"text-[10px] opacity-50"},Xn={key:1,class:"w-52"},Gn={class:""},Yn={key:0,class:"w-52 h-32 bg-gray-500/20 border border-gray-500/20 rounded-2xl"},Jn=["src"],Zn={key:2,class:""},Qn={key:0,class:"w-52 h-32 bg-gray-500/20 border border-gray-500/20 rounded-2xl"},er=["src"],tr={key:3,class:"text-sm rounded-2xl backdrop-blur-2xl max-w-52 bg-gray-500/20 font-medium border border-gray-500/20 px-4 py-3"},sr=["href"],nr={key:4,class:"max-w-52"},rr={class:"text-sm rounded-b-2xl backdrop-blur-2xl bg-gray-500/20 font-medium border border-gray-500/20 px-4 py-3"},or=["href"],ir={key:0,class:"chat-footer opacity-50 font-semibold text-xs"},ar={__name:"messageLayout",props:{showInfo:{type:Function,required:!0},m:{type:Object,required:!0},userId:{type:String,required:!0},selectedUser:{type:Object,required:!0},isImageLoading:{type:Boolean,default:!1},showDetailsId:{type:Object,required:!0},formatTime:{type:Function,required:!0},onLoad:{type:Function,required:!0},onError:{type:Function,required:!0}},setup(e){return(t,s)=>(y(),b("div",{onClick:s[4]||(s[4]=n=>e.showInfo(e.m.id,e.m.message)),class:G(["chat cursor-pointer py-[1px]",e.m.senderId===e.userId?"chat-end":"chat-start"])},[i("div",Hn,[e.userId!==e.m.senderId?(y(),b("div",zn,[i("img",{src:e.selectedUser.userPhotoURL},null,8,Vn)])):I("",!0)]),v(Q,null,{default:Z(()=>[e.showDetailsId.isClick&&e.showDetailsId.id===e.m.id?(y(),b("div",Wn,[re(O(e.m.senderId===e.userId?"You":e.selectedUser.userName)+" ",1),i("time",Kn,O(e.formatTime(e.m.timestamp)),1)])):I("",!0)]),_:1}),e.m.message&&e.m.imageUrl===null&&e.m.fileUrl===null?(y(),b("div",{key:0,class:G(["rounded-2xl whitespace-pre-line py-2 px-4 text-sm max-w-52",e.userId===e.m.senderId?"chat-bubble-primary":"bg-gray-400/20 rounded-2xl"])},O(e.m.message),3)):I("",!0),e.m.message&&e.m.imageUrl?(y(),b("div",Xn,[i("div",{class:G(["rounded-t-2xl whitespace-pre-line py-2 px-4 text-sm",e.userId===e.m.senderId?"chat-bubble-primary":"border border-gray-500/20"])},O(e.m.message),3),i("div",Gn,[e.isImageLoading?(y(),b("div",Yn)):I("",!0),e.m.imageUrl?(y(),b("img",{key:1,src:e.m.imageUrl,loading:"lazy",alt:"",class:"h-auto w-52 object-cover border bg-gray-500/20 border-gray-500/20 rounded-b-2xl",onLoad:s[0]||(s[0]=(...n)=>e.onLoad&&e.onLoad(...n)),onError:s[1]||(s[1]=(...n)=>e.onError&&e.onError(...n))},null,40,Jn)):I("",!0)])])):I("",!0),e.m.imageUrl&&e.m.message===""?(y(),b("div",Zn,[e.isImageLoading?(y(),b("div",Qn)):I("",!0),i("img",{src:e.m.imageUrl,loading:"lazy",alt:"",onLoad:s[2]||(s[2]=(...n)=>e.onLoad&&e.onLoad(...n)),onError:s[3]||(s[3]=(...n)=>e.onError&&e.onError(...n)),class:"h-auto w-52 object-cover bg-gray-500/20 border border-gray-500/20 rounded-2xl"},null,40,er)])):I("",!0),e.m.fileUrl&&e.m.message===""?(y(),b("div",tr,[i("a",{href:e.m.fileUrl,download:"",class:"flex justify-start items-center gap-2"},[v(l(Y),{icon:"simple-icons:googledocs",width:"16",height:"16"}),re(O(e.m.fileName),1)],8,sr)])):I("",!0),e.m.message&&e.m.fileUrl?(y(),b("div",nr,[i("div",{class:G(["rounded-t-2xl whitespace-pre-line py-2 px-4 text-sm",e.userId===e.m.senderId?"chat-bubble-primary":"border border-gray-500/20"])},O(e.m.message),3),i("div",rr,[i("a",{href:e.m.fileUrl,download:"",class:"flex justify-start items-center gap-2"},[v(l(Y),{icon:"simple-icons:googledocs",width:"16",height:"16"}),re(O(e.m.fileName),1)],8,or)])])):I("",!0),v(Q,null,{default:Z(()=>[e.showDetailsId.isClick&&e.showDetailsId.id===e.m.id?(y(),b("div",ir,[re(O(e.m.isSendMessageLoading?"Sending...":"")+" ",1),e.m.isSendMessageLoading?I("",!0):(y(),Ht(l(Y),{key:0,class:G(e.userId!==e.m.senderId?"hidden":""),icon:"material-symbols-light:check-circle"},null,8,["class"]))])):I("",!0)]),_:1})],2))}},lr={key:0,class:"flex mb-1 justify-center items-center"},ur=i("span",{class:"backdrop-blur-2xl flex justify-center items-center gap-4 bg-green-400/20 border px-4 text-sm font-medium py-1 transition border-green-500/20 text-green-500 rounded-full"},[i("p",{class:"text-xs"},"Copied!")],-1),cr=[ur],dr={key:0,class:"flex justify-center items-center"},hr={class:"backdrop-blur-2xl flex justify-center items-center gap-4 bg-gray-400/20 border px-8 text-sm font-medium py-2 transition border-gray-500/20 rounded-md"},fr={class:"grid place-items-center cursor-pointer transition"},gr=i("p",{class:"text-xs"},"Are you sure to delete this message?",-1),mr={class:"flex justify-start items-center gap-4 mt-2"},pr=i("button",{class:"px-2 py-1 rounded-md border text-red-500 border-red-500/50"}," Delete ",-1),yr={key:0,class:"fixed bottom-0 backdrop-blur-2xl py-5 z-50 inset-x-0"},br={class:"flex justify-center items-center"},vr={class:"backdrop-blur-2xl flex justify-center items-center gap-4 bg-gray-400/20 border px-8 text-sm font-medium py-2 transition border-gray-500/20 rounded-full"},xr=i("p",{class:"text-xs"},"Copy",-1),wr=i("p",{class:"text-xs"},"Delete",-1),_r={key:0,class:"flex justify-center mb-1 items-center"},kr=i("span",{class:"backdrop-blur-2xl flex justify-center items-center gap-2 bg-gray-400/20 border px-4 text-sm font-medium py-1 transition border-gray-500/20 rounded-full"},[i("span",{class:"loading loading-dots loading-xs"}),i("span",null,"Sending..")],-1),Ir=[kr],Rr={key:0,class:"ml-1 flex justify-start mb-1 items-end gap-1 text-xs"},Tr={key:0},Ur=["src"],Cr={class:"flex justify-start items-center gap-1"},Er={class:"backdrop-blur-2xl flex bg-gray-400/20 justify-start items-center gap-2 px-2 py-1 border border-gray-500/20 rounded-xl"},$r={class:"truncate max-w-52"},Lr={__name:"messageAttachments",props:{isSendMessageLoading:{type:Boolean,default:null}},setup(e){const{selectedChatId:t,showDetailsId:s,isShowDeleteConfirmation:n,isShowCopied:r,isImage:o,deleteChat:a,selectedFile:c,selectedImage:d,imageURL:u,fileName:h,closeAttachements:p,cancelDeleteConfirmation:x,copyChat:w,Icon:_}=Ct();return(T,f)=>(y(),b(Me,null,[v(Q,null,{default:Z(()=>[l(r)?(y(),b("div",lr,cr)):I("",!0)]),_:1}),v(Q,null,{default:Z(()=>[l(n)?(y(),b("div",dr,[i("span",hr,[i("div",fr,[gr,i("div",mr,[i("button",{onClick:f[0]||(f[0]=C=>l(x)()),class:"text-gray-600 px-2 py-1 rounded-md border border-gray-500/50"}," Cancel "),pr])])])])):I("",!0)]),_:1}),v(Q,null,{default:Z(()=>[l(t)===l(s).id&&l(s).isClick?(y(),b("div",yr,[i("div",br,[i("span",vr,[i("div",{onClick:f[1]||(f[1]=C=>l(w)()),class:"grid place-items-center hover:text-green-500 cursor-pointer transition"},[v(l(_),{icon:"solar:copy-linear",width:"20",height:"20"}),xr]),i("div",{onClick:f[2]||(f[2]=C=>l(a)()),class:"grid place-items-center hover:text-red-500 cursor-pointer transition"},[v(l(_),{icon:"fluent:delete-32-regular",width:"20",height:"20"}),wr])])])])):I("",!0)]),_:1}),v(Q,null,{default:Z(()=>[e.isSendMessageLoading?(y(),b("div",_r,Ir)):I("",!0)]),_:1}),v(Q,null,{default:Z(()=>[l(c)||l(d)?(y(),b("div",Rr,[l(o)?(y(),b("div",Tr,[i("img",{src:l(u),loading:"lazy",alt:"",class:"size-14 rounded-xl backdrop-blur-2xl object-cover bg-gray-400/20 border border-gray-500/20"},null,8,Ur)])):I("",!0),i("div",Cr,[i("span",Er,[v(l(_),{icon:"fluent:attach-16-regular",width:"20",height:"20"}),i("span",$r,O(l(h)),1)]),i("button",{onClick:f[3]||(f[3]=C=>l(p)()),class:"backdrop-blur-2xl bg-gray-400/20 border p-0.5 hover:text-red-500 transition border-gray-500/20 rounded-full"},[v(l(_),{icon:"iconamoon:close-light",width:"20",height:"20"})])])])):I("",!0)]),_:1})],64))}},Ar={class:"modal-box overflow-hidden relative p-2 no-scrollbar"},Dr={class:"flex justify-between items-center gap-2"},Sr={class:"flex justify-start items-center gap-2"},Or={class:"avatar"},Nr={class:"w-10 rounded-full"},Pr=["src"],Mr={class:"text-sm font-medium"},jr={method:"dialog",class:"flex justify-start items-center"},Br={class:"px-0.5"},Fr=i("hr",{class:"my-1 border border-gray-400/20"},null,-1),qr={key:0,class:"my-2 flex justify-center items-center text-sm"},Hr={class:"py-1 px-4 bg-primary/10 rounded-full"},zr={class:"text-primary font-semibold"},Vr={key:1},Wr={class:"fixed bottom-0 z-50 inset-x-0"},Kr={class:"flex justify-start items-center rounded-t-2xl gap-2 bg-gray-400/20 backdrop-blur-2xl shadow"},Xr={class:"w-full rounded-t-2xl border border-gray-500/20 shadow"},Gr=["disabled","value"],Yr={class:"flex justify-between items-center m-3 h-5"},Jr={class:"flex justify-center items-center gap-2"},Zr=["disabled"],Qr=10,eo=24,lo={__name:"ChatModal",props:{userId:{type:String,required:!0},userName:{type:String,required:!0},userPhoto:{type:String,required:!0},messages:{type:Array,required:!0},filteredMessages:{type:Array,default:()=>[]},selectedUser:{type:Object,required:!0},modelValue:{type:String,required:!0},selectedFile:{type:Object,default:null},selectedImage:{type:Object,default:null},isSendMessageLoading:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},formatTime:{type:Function,required:!0},sendMessage:{type:Function,required:!0}},emits:["update:selectedFile","update:modelValue","update:selectedImage"],setup(e,{emit:t}){const s=e,n=t,{startRecording:r}=Et(),{showDetailsId:o,showInfo:a,handleFileChange:c,handleImageChange:d,selectedFile:u,selectedImage:h}=Ct(n),p=g(null),x=g(null),w=g(null),_=g(null),T=g(null),f=g(!0),C=()=>{var k;(k=p.value)==null||k.click()},q=()=>{var k;(k=x.value)==null||k.click()},P=()=>{console.log("Image loading completed"),f.value=!1},D=()=>{f.value=!1},M=()=>{const k=_.value;if(k){const U=k.scrollTop,H=k.scrollHeight;k.style.height="auto";const S=k.scrollHeight,ye=Qr*eo;S>ye?(k.style.height=`${ye}px`,k.style.overflowY="auto"):k.style.height=`${S}px`;const ke=U+(S-H);k.scrollTop=ke}},W=k=>{n("update:modelValue",k.target.value),M()};return Ne(()=>s.modelValue,k=>{if(k===""){const U=_.value;U&&(U.style.height="auto",U.style.overflowY="hidden")}else M()}),Ne(()=>s.filteredMessages,()=>{dt(()=>{w.value&&(w.value.scrollTop=w.value.scrollHeight)})},{deep:!0}),Oe(()=>{M(),w.value&&(w.value.scrollTop=w.value.scrollHeight)}),(k,U)=>{const H=Vt("motion-fade");return y(),b("div",Ar,[i("div",Dr,[i("div",Sr,[i("div",Or,[i("div",Nr,[i("img",{src:e.selectedUser.userPhotoURL,loading:"lazy",class:"bg-gray-500/20 border border-gray-500/20 rounded-full"},null,8,Pr)])]),i("div",null,[i("h1",Mr,O(e.selectedUser.userName),1)])]),i("form",jr,[i("button",Br,[v(l(Y),{icon:"carbon:close",width:"20",height:"20"})])])]),Fr,i("div",{class:"h-dvh pb-[165px] sm:pb-0 sm:h-[366px] sm:mb-[86px] rounded-md overflow-auto",ref_key:"messageContainer",ref:w},[e.filteredMessages.length===0&&!e.isLoading?(y(),b("div",qr,[i("span",Hr,[re("No conversation with "),i("span",zr,O(e.selectedUser.userName),1)])])):I("",!0),(y(!0),b(Me,null,zt(e.filteredMessages,S=>(y(),b("div",{key:S.id,class:"relative"},[v(ar,{m:S,userId:e.userId,selectedUser:e.selectedUser,isImageLoading:f.value,showDetailsId:l(o),formatTime:e.formatTime,onLoad:P,onError:D,showInfo:l(a),isSendMessageLoading:e.isSendMessageLoading},null,8,["m","userId","selectedUser","isImageLoading","showDetailsId","formatTime","showInfo","isSendMessageLoading"])]))),128)),e.isLoading?(y(),b("div",Vr,[v(Rn)])):I("",!0)],512),i("div",Wr,[v(Lr,{isSendMessageLoading:e.isSendMessageLoading},null,8,["isSendMessageLoading"]),v(qn),i("form",{ref_key:"messageBoxContainer",ref:T},[i("div",Kr,[i("div",Xr,[i("textarea",{type:"text",disabled:e.isSendMessageLoading,cols:"1",rows:"1",required:"",autofocus:"",ref_key:"autoExpand",ref:_,value:e.modelValue,onInput:W,placeholder:"Enter a message",class:"w-full px-3 pt-3 placeholder:text-sm placeholder:text-gray-500 resize-none rounded-t-2xl no-scrollbar bg-transparent outline-none"},null,40,Gr),i("div",Yr,[i("div",Jr,[i("button",{onClick:be(C,["prevent"]),class:"transition p-1 rounded-full bg-gray-400/20 hover:text-success shadow"},[v(l(Y),{icon:"tabler:photo",class:"text-xl"})]),i("input",{type:"file",ref_key:"imageInput",ref:p,accept:"image/*",onChange:U[0]||(U[0]=(...S)=>l(d)&&l(d)(...S)),class:"hidden"},null,544),i("input",{type:"file",ref_key:"fileInput",ref:x,accept:".pdf, .doc, .docx",onChange:U[1]||(U[1]=(...S)=>l(c)&&l(c)(...S)),class:"hidden"},null,544),i("button",{onClick:be(q,["prevent"]),class:"transition p-1 rounded-full bg-gray-400/20 hover:text-secondary shadow"},[v(l(Y),{icon:"tabler:file",class:"text-xl"})])]),i("div",{class:G(["rounded-full p-1.5 flex shadow justify-center transition items-center",e.modelValue||l(u)||l(h)!==null?"bg-blue-500 hover:bg-blue-500/90 ":"bg-primary/10 hover:bg-primary/20"])},[!e.isSendMessageLoading&&e.modelValue||l(u)||l(h)?Ge((y(),b("button",{key:0,class:G(e.isSendMessageLoading?"cursor-not-allowed":""),disabled:e.isSendMessageLoading,onClick:U[2]||(U[2]=be((...S)=>e.sendMessage&&e.sendMessage(...S),["prevent"]))},[v(l(Y),{icon:"bxs:send",class:"text-xl text-gray-200"})],10,Zr)),[[H]]):Ge((y(),b("button",{key:1,onClick:U[3]||(U[3]=be((...S)=>l(r)&&l(r)(...S),["prevent","stop"]))},[v(l(Y),{icon:"ic:round-mic",class:"text-xl text-primary"})])),[[H]])],2)])])])],512)])])}}};export{io as C,ao as _,it as a,lo as b,oo as d,an as g,at as r,ot as u};
