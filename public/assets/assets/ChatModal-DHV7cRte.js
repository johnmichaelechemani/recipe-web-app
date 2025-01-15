import{l as X,k as i,D as Y,I as R,B as J,w as P,J as le,K as Z,o as c,c as u,a as s,q as L,t as y,x as B,m as A,d as ie,b as U,z as N,s as de,u as ce,p as W,n as ue,H as he}from"./index-__FCaIWA.js";import{u as me,_ as ge,I as T}from"./_plugin-vue_export-helper-BoU1AtyE.js";import{s as ve,d as K,h as Q,a as fe,c as _,b as G,q as ye,o as xe}from"./index.esm2017-DKZSFwPD.js";function be(){const e=X(),f=i(e.currentUser),{uid:d,photoURL:r,displayName:m}=f.value,k=d,x=i([]),b=JSON.parse(localStorage.getItem("users")).filter(n=>n.id!==k);return x.value=b,{storedUsers:x}}function gs(){const e=X(),f=i(e.currentUser),{firestore:d}=me(),r=f.value.uid,m=f.value.photoURL,k=f.value.displayName;le();const{storedUsers:x}=be(),g=i(""),b=i([]),n=i(!1),I=i(!1),w=i(null);let a=i({});const v=(t,o)=>[t,o].sort().join("_"),E=(t,o)=>{document.getElementById(t).showModal(),a.value=o,O(),console.log(b)},ee=async()=>{if(g.value.trim()!==""){I.value=!0;try{const t=v(r,a.value.userId);await ve(K(d,`chats/${t}`),{participants:{[r]:!0,[a.value.userId]:!0},lastMessage:g.value,sender:r,timestamp:Q()},{merge:!0}),await fe(_(d,`chats/${t}/messages`),{senderId:r,recipientId:a.value.userId,message:g.value,timestamp:Q()}),I.value=!1}catch(t){console.error("Error sending message: ",t)}g.value=""}},j=i({}),V=i({}),H=i([]),q=i({}),$=i(0),se=Y(()=>x.value.filter(t=>j.value[v(r,t.id)]).sort((t,o)=>{const l=v(r,t.id),M=v(r,o.id);return q.value[M]-q.value[l]})),te=()=>{H.value.forEach(o=>o()),H.value=[];const t=new Set;x.value.forEach(o=>{const l=v(r,o.id),M=K(d,"chats",l),p=G(M,C=>{if(C.exists()){const h=C.data(),D=h.lastMessage||"",S=h.sender||"",z=h.timestamp||"";j.value[l]=D,V.value[l]=S,q.value[l]=z,D&&S!==r?t.has(S)||(t.add(S),$.value=t.size):t.has(S)&&(t.delete(S),$.value=t.size)}else{j.value[l]="",V.value[l]="",q.value[l]="";const h=V.value[l];t.has(h)&&(t.delete(h),$.value=t.size)}},C=>{console.error("Error listening to chat updates:",C)});H.value.push(p)})};R(()=>{te()}),J(()=>{H.value.forEach(t=>t())}),P($,t=>{console.log($.value)});const ae=Y(()=>b.value.filter(t=>t.senderId===r&&t.recipientId===a.value.userId||t.senderId===a.value.userId&&t.recipientId===r)),oe=()=>{Z(()=>{w.value&&(w.value.scrollTop=w.value.scrollHeight)})},O=()=>{n.value=!0;const t=v(r,a.value.userId),o=ye(_(d,`chats/${t}/messages`),xe("timestamp","asc")),l=G(o,M=>{b.value=M.docs.map(p=>({id:p.id,...p.data()})),n.value=!1,oe()});J(()=>{l()})};return R(()=>{O()}),{Time:t=>{if(t){const o=new Date(t.seconds*1e3),l=new Date,M=o.getHours()%12||12,p=("0"+o.getMinutes()).slice(-2),C=o.getHours()<12?"am":"pm",h=`${M}:${p} ${C}`;if(o.toDateString()===l.toDateString())return h;const D=new Date(l);if(D.setDate(D.getDate()-1),o.toDateString()===D.toDateString())return`Yesterday ${h}`;const z=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][o.getDay()],F=new Date(l);if(F.setDate(F.getDate()-7),o>F)return`${z} ${h}`;const ne=o.toLocaleString("default",{month:"short"}),re=o.getDate();return`${ne} ${re} ${h}`}return""},getChatId:v,yourChat:E,sendMessage:ee,userId:r,newMessage:g,messages:b,isLoading:n,isSendMessageLoading:I,filteredMessages:ae,selectedUser:a,timestamp:q,userPhoto:m,userName:k,filteredUsers:se,latestMessages:j,isSender:V,storedUsers:x,newMessageArray:$}}const Ie={class:"w-10 rounded-full"},we=["src"],Me={class:""},Se={class:"text-sm font-medium capitalize"},ke={class:"flex gap-2 justify-start items-center"},$e={key:0,class:"text-xs"},pe={class:"text-[10px]"},vs={__name:"usersChatHeads",props:{yourChat:{type:Function,required:!0},formatTime:{type:Function,required:!0},user:{type:Object,required:!0},latestMessages:{type:Object,required:!0},getChatId:{type:Function,required:!0},userId:{type:[String,Number],required:!0},isSender:{type:Object,required:!0},timestamp:{type:Object,required:!0}},setup(e){return(f,d)=>(c(),u("div",{onClick:d[0]||(d[0]=r=>e.yourChat(e.user)),class:"flex justify-start items-center gap-2 cursor-pointer hover:bg-gray-500/20 transition p-1 rounded-md"},[s("div",{class:L(["avatar",e.user.status==="online"?"online":"offline"])},[s("div",Ie,[s("img",{src:e.user.userPhotoURL},null,8,we)])],2),s("div",Me,[s("h1",Se,y(e.user.userName),1),s("div",ke,[e.latestMessages[e.getChatId(e.userId,e.user.id)]?(c(),u("span",{key:0,class:L(["text-xs px-2 py-0.5 bg-gray-500/20 rounded-full",e.isSender[e.getChatId(e.userId,e.user.id)]===e.userId?"":"text-blue-500"])},[e.isSender[e.getChatId(e.userId,e.user.id)]===e.userId?(c(),u("span",$e," You: ")):B("",!0),A(" "+y(e.latestMessages[e.getChatId(e.userId,e.user.id)]),1)],2)):B("",!0),s("span",pe,y(e.formatTime(e.timestamp[e.getChatId(e.userId,e.user.id)])),1)])])]))}},Ce={},De={class:"my-3"},Ue=ie('<div class="flex flex-col gap-4 w-32 ml-2"><div class="flex gap-2 items-center"><div class="skeleton w-10 h-10 rounded-full shrink-0"></div><div class="flex flex-col gap-2"><div class="skeleton h-2 w-10"></div><div class="skeleton h-2 w-20"></div></div></div></div><div class="flex justify-end mr-5"><div class="flex flex-col gap-4 w-32"><div class="flex gap-2 items-center"><div class="flex flex-col gap-2"><div class="skeleton h-2 w-20"></div><div class="skeleton h-2 w-10"></div></div><div class="skeleton w-10 h-10 rounded-full shrink-0"></div></div></div></div>',2),qe=[Ue];function Ne(e,f){return c(),u("div",De,qe)}const Te=ge(Ce,[["render",Ne]]),Le={class:"modal-box relative p-2 no-scrollbar"},je={class:"modal-action absolute z-10 -top-4 right-2"},Ve={method:"dialog"},He={class:"btn btn-xs px-0.5 rounded-full"},Be={class:"flex justify-start items-center gap-2"},Ee={class:"avatar"},ze={class:"w-10 rounded-full"},Fe=["src"],Re={class:"text-sm font-medium"},Pe=s("hr",{class:"my-1 border border-gray-400/20"},null,-1),Ae={key:0,class:"my-2 flex justify-center items-center text-sm"},Oe={class:"py-1 px-4 bg-primary/10 rounded-full"},Ye={class:"text-primary font-semibold"},Je={class:"chat-image avatar"},We={class:"w-10 rounded-full"},Ke=["src"],Qe=["src"],_e={class:"chat-header text-xs font-medium"},Ge={class:"text-[10px] opacity-50"},Xe={class:"chat-footer opacity-50 font-semibold text-xs"},Ze={key:1},es={class:"my-1 mx-1 flex justify-start items-center rounded-2xl gap-2 bg-gray-400/20 shadow"},ss={class:"w-full rounded-2xl border border-gray-500/20 shadow"},ts=["disabled","value"],as={class:"flex justify-between items-center m-3 h-5"},os={class:"flex justify-center items-center gap-1"},ns={disabled:"",class:"transition cursor-not-allowed p-1 rounded-full bg-gray-400/20 hover:text-success shadow"},rs={disabled:"",class:"transition cursor-not-allowed p-1 rounded-full bg-gray-400/20 hover:text-secondary shadow"},ls={key:1,class:"cursor-not-allowed",disabled:""},is=10,ds=24,fs={__name:"ChatModal",props:{userId:{type:String,required:!0},messages:{type:Array,required:!0},selectedUser:{type:Object,required:!0},userPhoto:{type:String,required:!0},userName:{type:String,required:!0},isSendMessageLoading:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},formatTime:{type:Function,required:!0},sendMessage:{type:Function,required:!0},filteredMessages:{type:Array},modelValue:{type:String,required:!0}},emits:["update:modelValue"],setup(e,{emit:f}){const d=e,r=f,m=i(null),k=i(null),x=i(null),g=()=>{const n=k.value;if(n){const I=n.scrollTop,w=n.scrollHeight;n.style.height="auto";const a=n.scrollHeight,v=is*ds;a>v?(n.style.height=`${v}px`,n.style.overflowY="auto"):n.style.height=`${a}px`;const E=I+(a-w);n.scrollTop=E}},b=n=>{r("update:modelValue",n.target.value),g()};return P(d.modelValue,()=>{g()}),R(()=>{g(),m.value&&(m.value.scrollTop=m.value.scrollHeight)}),P(()=>d.filteredMessages,()=>{Z(()=>{m.value&&(m.value.scrollTop=m.value.scrollHeight)})},{deep:!0},d.modelValue),(n,I)=>{const w=he("motion-fade");return c(),u("div",Le,[s("div",je,[s("form",Ve,[s("button",He,[U(N(T),{icon:"carbon:close",class:"text-xl text-red-500"})])])]),s("div",Be,[s("div",Ee,[s("div",ze,[s("img",{src:e.selectedUser.userPhotoURL},null,8,Fe)])]),s("div",null,[s("h1",Re,y(e.selectedUser.userName),1)])]),Pe,s("div",{class:"h-[366px] mb-[86px] rounded-md overflow-y-scroll",ref_key:"messageContainer",ref:m},[e.filteredMessages.length===0&&!e.isLoading?(c(),u("div",Ae,[s("span",Oe,[A("No conversation with "),s("span",Ye,y(e.selectedUser.userName),1)])])):B("",!0),(c(!0),u(de,null,ce(e.filteredMessages,a=>(c(),u("div",{key:a.id},[s("div",{class:L(["chat",a.senderId===e.userId?"chat-end":"chat-start"])},[s("div",Je,[s("div",We,[e.userId===a.senderId?(c(),u("img",{key:0,src:e.userPhoto},null,8,Ke)):(c(),u("img",{key:1,src:e.selectedUser.userPhotoURL},null,8,Qe))])]),s("div",_e,[A(y(a.senderId===e.userId?e.userName:e.selectedUser.userName)+" ",1),s("time",Ge,y(e.formatTime(a.timestamp)),1)]),s("div",{class:L(["chat-bubble text-sm",e.userId===a.senderId?"chat-bubble-primary":""])},y(a.message),3),s("div",Xe,y(e.isSendMessageLoading?"Sending... bugs, hehehe":"Delivered"),1)],2)]))),128)),e.isLoading?(c(),u("div",Ze,[U(Te)])):B("",!0)],512),s("form",{ref_key:"messageBoxContainer",ref:x,class:"fixed bottom-0 z-50 inset-x-0"},[s("div",es,[s("div",ss,[s("textarea",{type:"text",disabled:e.isSendMessageLoading,cols:"1",rows:"1",required:"",autofocus:"",ref_key:"autoExpand",ref:k,value:e.modelValue,onInput:b,placeholder:"Enter a message",class:"w-full px-3 pt-3 placeholder:text-sm resize-none rounded-2xl no-scrollbar bg-transparent outline-none"},null,40,ts),s("div",as,[s("div",os,[s("button",ns,[U(N(T),{icon:"tabler:photo",class:"text-xl"})]),s("button",rs,[U(N(T),{icon:"tabler:file",class:"text-xl"})])]),s("div",{class:L(["rounded-full p-1.5 flex shadow justify-center transition items-center",e.modelValue!==""?"bg-blue-500 hover:bg-blue-500/90 ":"bg-primary/10 hover:bg-primary/20"])},[!e.isSendMessageLoading&&e.modelValue?W((c(),u("button",{key:0,onClick:I[0]||(I[0]=ue((...a)=>e.sendMessage&&e.sendMessage(...a),["prevent"]))},[U(N(T),{icon:"bxs:send",class:"text-xl text-gray-200"})])),[[w]]):W((c(),u("button",ls,[U(N(T),{icon:"ic:round-mic",class:"text-xl text-primary"})])),[[w]])],2)])])])],512)])}}};export{gs as C,vs as _,fs as a};
