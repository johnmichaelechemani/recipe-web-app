import{l as Q,k as d,B as A,H as O,z as P,w as ne,J as re,K as de,o,c as l,a as t,q as C,t as h,x as k,m as z,d as ie,b as F,D as H,s as oe,u as le,n as ue}from"./index-CxvThSEM.js";import{u as ce,s as me,e as p,j as J,a as ge,c as W,d as Y,q as he,o as ve,_ as fe,I as K}from"./_plugin-vue_export-helper-B_Cq0KBo.js";function ye(){const e=Q(),m=d(e.currentUser),{uid:u,photoURL:n,displayName:i}=m.value,T=u,x=d([]),b=JSON.parse(localStorage.getItem("users")).filter(U=>U.id!==T);return x.value=b,{storedUsers:x}}function as(){const e=Q(),m=d(e.currentUser),{firestore:u}=ce(),n=m.value.uid,i=m.value.photoURL,T=m.value.displayName;re();const{storedUsers:x}=ye(),I=d(""),b=d([]),U=d(!1),j=d(!1),B=d(null);let g=d({});const v=(s,a)=>[s,a].sort().join("_"),G=(s,a)=>{document.getElementById(s).showModal(),g.value=a,R(),console.log(b)},X=async()=>{if(I.value.trim()!==""){j.value=!0;try{const s=v(n,g.value.userId);await me(p(u,`chats/${s}`),{participants:{[n]:!0,[g.value.userId]:!0},lastMessage:I.value,sender:n,timestamp:J()},{merge:!0}),await ge(W(u,`chats/${s}/messages`),{senderId:n,recipientId:g.value.userId,message:I.value,timestamp:J()}),j.value=!1}catch(s){console.error("Error sending message: ",s)}I.value=""}},D=d({}),N=d({}),L=d([]),q=d({}),w=d(0),Z=A(()=>x.value.filter(s=>D.value[v(n,s.id)]).sort((s,a)=>{const r=v(n,s.id),f=v(n,a.id);return q.value[f]-q.value[r]})),_=()=>{L.value.forEach(a=>a()),L.value=[];const s=new Set;x.value.forEach(a=>{const r=v(n,a.id),f=p(u,"chats",r),M=Y(f,S=>{if(S.exists()){const c=S.data(),$=c.lastMessage||"",y=c.sender||"",V=c.timestamp||"";D.value[r]=$,N.value[r]=y,q.value[r]=V,$&&y!==n?s.has(y)||(s.add(y),w.value=s.size):s.has(y)&&(s.delete(y),w.value=s.size)}else{D.value[r]="",N.value[r]="",q.value[r]="";const c=N.value[r];s.has(c)&&(s.delete(c),w.value=s.size)}},S=>{console.error("Error listening to chat updates:",S)});L.value.push(M)})};O(()=>{_()}),P(()=>{L.value.forEach(s=>s())}),ne(w,s=>{console.log(w.value)});const ee=A(()=>b.value.filter(s=>s.senderId===n&&s.recipientId===g.value.userId||s.senderId===g.value.userId&&s.recipientId===n)),se=()=>{de(()=>{B.value&&(B.value.scrollTop=B.value.scrollHeight)})},R=()=>{U.value=!0;const s=v(n,g.value.userId),a=he(W(u,`chats/${s}/messages`),ve("timestamp","asc")),r=Y(a,f=>{b.value=f.docs.map(M=>({id:M.id,...M.data()})),U.value=!1,se()});P(()=>{r()})};return O(()=>{R()}),{Time:s=>{if(s){const a=new Date(s.seconds*1e3),r=new Date,f=a.getHours()%12||12,M=("0"+a.getMinutes()).slice(-2),S=a.getHours()<12?"am":"pm",c=`${f}:${M} ${S}`;if(a.toDateString()===r.toDateString())return c;const $=new Date(r);if($.setDate($.getDate()-1),a.toDateString()===$.toDateString())return`Yesterday ${c}`;const V=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][a.getDay()],E=new Date(r);if(E.setDate(E.getDate()-7),a>E)return`${V} ${c}`;const te=a.toLocaleString("default",{month:"short"}),ae=a.getDate();return`${te} ${ae} ${c}`}return""},getChatId:v,yourChat:G,sendMessage:X,userId:n,newMessage:I,messages:b,isLoading:U,isSendMessageLoading:j,filteredMessages:ee,selectedUser:g,timestamp:q,userPhoto:i,userName:T,filteredUsers:Z,latestMessages:D,isSender:N,storedUsers:x,newMessageArray:w}}const xe={class:"w-10 rounded-full"},Ie=["src"],be={class:""},we={class:"text-sm font-medium capitalize"},Me={class:"flex gap-2 justify-start items-center"},Se={key:0,class:"text-xs"},$e={class:"text-[10px]"},ns={__name:"usersChatHeads",props:{yourChat:{type:Function,required:!0},formatTime:{type:Function,required:!0},user:{type:Object,required:!0},latestMessages:{type:Object,required:!0},getChatId:{type:Function,required:!0},userId:{type:[String,Number],required:!0},isSender:{type:Object,required:!0},timestamp:{type:Object,required:!0}},setup(e){return(m,u)=>(o(),l("div",{onClick:u[0]||(u[0]=n=>e.yourChat(e.user)),class:"flex justify-start items-center gap-2 cursor-pointer hover:bg-gray-500/20 transition p-1 rounded-md"},[t("div",{class:C(["avatar",e.user.status==="online"?"online":"offline"])},[t("div",xe,[t("img",{src:e.user.userPhotoURL},null,8,Ie)])],2),t("div",be,[t("h1",we,h(e.user.userName),1),t("div",Me,[e.latestMessages[e.getChatId(e.userId,e.user.id)]?(o(),l("span",{key:0,class:C(["text-xs px-2 py-0.5 bg-gray-500/20 rounded-full",e.isSender[e.getChatId(e.userId,e.user.id)]===e.userId?"":"text-blue-500"])},[e.isSender[e.getChatId(e.userId,e.user.id)]===e.userId?(o(),l("span",Se," You: ")):k("",!0),z(" "+h(e.latestMessages[e.getChatId(e.userId,e.user.id)]),1)],2)):k("",!0),t("span",$e,h(e.formatTime(e.timestamp[e.getChatId(e.userId,e.user.id)])),1)])])]))}},ke={},Ue={class:"my-3"},qe=ie('<div class="flex flex-col gap-4 w-32 ml-2"><div class="flex gap-2 items-center"><div class="skeleton w-10 h-10 rounded-full shrink-0"></div><div class="flex flex-col gap-2"><div class="skeleton h-2 w-10"></div><div class="skeleton h-2 w-20"></div></div></div></div><div class="flex justify-end mr-5"><div class="flex flex-col gap-4 w-32"><div class="flex gap-2 items-center"><div class="flex flex-col gap-2"><div class="skeleton h-2 w-20"></div><div class="skeleton h-2 w-10"></div></div><div class="skeleton w-10 h-10 rounded-full shrink-0"></div></div></div></div>',2),Ce=[qe];function De(e,m){return o(),l("div",Ue,Ce)}const Ne=fe(ke,[["render",De]]),Le={class:"modal-box relative pb-4 pt-2 px-2"},Te={class:"modal-action absolute z-10 -top-4 right-2"},je={method:"dialog"},Be={class:"btn btn-xs px-0.5 rounded-full"},Ve={class:"flex justify-start items-center gap-2"},Ee={class:"avatar"},Fe={class:"w-10 rounded-full"},ze=["src"],Re={class:"text-sm font-medium"},Ae=t("hr",{class:"my-1 border border-gray-400/20"},null,-1),Oe={key:0,class:"my-2 flex justify-center items-center text-sm"},Pe={class:"py-1 px-4 bg-primary/10 rounded-full"},He={class:"text-primary font-semibold"},pe={class:"chat-image avatar"},Je={class:"w-10 rounded-full"},We=["src"],Ye=["src"],Ke={class:"chat-header text-xs font-medium"},Qe={class:"text-[10px] opacity-50"},Ge={key:1},Xe={class:"my-1 flex justify-start items-center gap-2"},Ze=["disabled","value"],_e={key:0,class:"loading loading-ring loading-lg"},rs={__name:"ChatModal",props:{userId:{type:String,required:!0},messages:{type:Array,required:!0},selectedUser:{type:Object,required:!0},userPhoto:{type:String,required:!0},userName:{type:String,required:!0},isSendMessageLoading:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},formatTime:{type:Function,required:!0},sendMessage:{type:Function,required:!0},filteredMessages:{type:Array},modelValue:{type:String,required:!0}},setup(e){const m=d(null);return(u,n)=>(o(),l("div",Le,[t("div",Te,[t("form",je,[t("button",Be,[F(H(K),{icon:"carbon:close",class:"text-xl text-red-500"})])])]),t("div",Ve,[t("div",Ee,[t("div",Fe,[t("img",{src:e.selectedUser.userPhotoURL},null,8,ze)])]),t("div",null,[t("h1",Re,h(e.selectedUser.userName),1)])]),Ae,t("div",{class:"h-80 rounded-md overflow-y-scroll",ref_key:"messageContainer",ref:m},[e.filteredMessages.length===0&&!e.isLoading?(o(),l("div",Oe,[t("span",Pe,[z("No conversation with "),t("span",He,h(e.selectedUser.userName),1)])])):k("",!0),(o(!0),l(oe,null,le(e.filteredMessages,i=>(o(),l("div",{key:i.id},[t("div",{class:C(["chat",i.senderId===e.userId?"chat-end":"chat-start"])},[t("div",pe,[t("div",Je,[e.userId===i.senderId?(o(),l("img",{key:0,src:e.userPhoto},null,8,We)):(o(),l("img",{key:1,src:e.selectedUser.userPhotoURL},null,8,Ye))])]),t("div",Ke,[z(h(i.senderId===e.userId?e.userName:e.selectedUser.userName)+" ",1),t("time",Qe,h(e.formatTime(i.timestamp)),1)]),t("div",{class:C(["chat-bubble text-sm",e.userId===i.senderId?"chat-bubble-primary":""])},h(i.message),3)],2)]))),128)),e.isLoading?(o(),l("div",Ge,[F(Ne)])):k("",!0)],512),t("form",{onSubmit:n[1]||(n[1]=ue((...i)=>e.sendMessage&&e.sendMessage(...i),["prevent"]))},[t("div",Xe,[t("input",{type:"text",disabled:e.isSendMessageLoading,required:"",value:e.modelValue,onInput:n[0]||(n[0]=i=>u.$emit("update:modelValue",i.target.value)),placeholder:"Enter a message..",class:"input input-bordered w-full placeholder:text-sm rounded-full"},null,40,Ze),e.isSendMessageLoading?(o(),l("span",_e)):k("",!0),e.isSendMessageLoading?k("",!0):(o(),l("button",{key:1,class:C(["rounded-full btn transition",e.modelValue===""?"hidden":""])},[F(H(K),{icon:"bxs:send",class:"text-xl text-blue-500"})],2))])],32)]))}};export{as as C,ns as _,rs as a};