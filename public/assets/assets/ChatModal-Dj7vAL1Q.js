import{l as W,k as r,B as F,H as R,z as O,w as ne,J as re,K as de,o,c as i,a as t,q as S,t as g,x,m as E,d as oe,b as V,D as P,s as ie,u as le,n as ue}from"./index-LmKtZEXi.js";import{u as ce,s as me,e as p,j as A,a as ge,c as H,d as z,q as he,o as ve,_ as fe,I as J}from"./_plugin-vue_export-helper-BgclvA5F.js";function ye(){const e=W(),c=r(e.currentUser),{uid:l,photoURL:n,displayName:d}=c.value,U=l,f=r([]),h=JSON.parse(localStorage.getItem("users")).filter(I=>I.id!==U);return f.value=h,{storedUsers:f}}function ns(){const e=W(),c=r(e.currentUser),{firestore:l}=ce(),n=c.value.uid,d=c.value.photoURL,U=c.value.displayName;re();const{storedUsers:f}=ye(),y=r(""),h=r([]),I=r(!1),q=r(!1),D=r(null);let m=r({});const b=(s,a)=>[s,a].sort().join("_"),Y=s=>{document.getElementById("openInbox").showModal(),m.value=s,j(),console.log(h)},K=s=>{document.getElementById("openChat").showModal(),m.value=s,j(),console.log(h)},Q=async()=>{if(y.value.trim()!==""){q.value=!0;try{const s=b(n,m.value.userId);await me(p(l,`chats/${s}`),{participants:{[n]:!0,[m.value.userId]:!0},lastMessage:y.value,sender:n,timestamp:A()},{merge:!0}),await ge(H(l,`chats/${s}/messages`),{senderId:n,recipientId:m.value.userId,message:y.value,timestamp:A()}),q.value=!1}catch(s){console.error("Error sending message: ",s)}y.value=""}},M=r({}),$=r({}),k=r([]),L=r({}),N=r(0),G=F(()=>f.value.filter(s=>M.value[b(n,s.id)])),X=()=>{k.value.forEach(s=>s()),k.value=[],f.value.forEach(s=>{const a=b(n,s.id),v=p(l,"chats",a),w=z(v,u=>{u.exists()?(M.value[a]=u.data().lastMessage||"",$.value[a]=u.data().sender||"",L.value[a]=u.data().timestamp||"",M.value[a]&&$.value[a]!==n&&N.value++):(M.value[a]="",$.value[a]="",L.value[a]="")},u=>{console.error("Error listening to chat updates:",u)});k.value.push(w)})};R(()=>{X()}),O(()=>{k.value.forEach(s=>s())}),ne(N,s=>{console.log(N.value)});const Z=F(()=>h.value.filter(s=>s.senderId===n&&s.recipientId===m.value.userId||s.senderId===m.value.userId&&s.recipientId===n)),_=()=>{de(()=>{D.value&&(D.value.scrollTop=D.value.scrollHeight)})},j=()=>{I.value=!0;const s=b(n,m.value.userId),a=he(H(l,`chats/${s}/messages`),ve("timestamp","asc")),v=z(a,w=>{h.value=w.docs.map(u=>({id:u.id,...u.data()})),I.value=!1,_()});O(()=>{v()})};return R(()=>{j()}),{Time:s=>{if(s){const a=new Date(s.seconds*1e3),v=new Date,w=a.getHours()%12||12,u=("0"+a.getMinutes()).slice(-2),ee=a.getHours()<12?"am":"pm",C=`${w}:${u} ${ee}`;if(a.toDateString()===v.toDateString())return C;const T=new Date(v);if(T.setDate(T.getDate()-1),a.toDateString()===T.toDateString())return`Yesterday ${C}`;const se=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][a.getDay()],B=new Date(v);if(B.setDate(B.getDate()-7),a>B)return`${se} ${C}`;const te=a.toLocaleString("default",{month:"short"}),ae=a.getDate();return`${te} ${ae} ${C}`}return""},getChatId:b,yourChat:Y,chefsChat:K,sendMessage:Q,userId:n,newMessage:y,messages:h,isLoading:I,isSendMessageLoading:q,filteredMessages:Z,selectedUser:m,timestamp:L,userPhoto:d,userName:U,filteredUsers:G,latestMessages:M,isSender:$,storedUsers:f}}const xe={class:"w-10 rounded-full"},Ie=["src"],be={class:""},Me={class:"text-sm font-medium capitalize"},we={class:"flex gap-2 justify-start items-center"},Se={key:0,class:"text-xs"},$e={class:"text-[10px]"},rs={__name:"usersChatHeads",props:{yourChat:{type:Function,required:!0},formatTime:{type:Function,required:!0},user:{type:Object,required:!0},latestMessages:{type:Object,required:!0},getChatId:{type:Function,required:!0},userId:{type:[String,Number],required:!0},isSender:{type:Object,required:!0},timestamp:{type:Object,required:!0}},setup(e){return(c,l)=>(o(),i("div",{onClick:l[0]||(l[0]=n=>e.yourChat(e.user)),class:"flex justify-start items-center gap-2 cursor-pointer hover:bg-gray-500/20 transition p-1 rounded-md"},[t("div",{class:S(["avatar",e.user.status==="online"?"online":"offline"])},[t("div",xe,[t("img",{src:e.user.userPhotoURL},null,8,Ie)])],2),t("div",be,[t("h1",Me,g(e.user.userName),1),t("div",we,[e.latestMessages[e.getChatId(e.userId,e.user.id)]?(o(),i("span",{key:0,class:S(["text-xs px-2 py-0.5 bg-gray-500/20 rounded-full",e.isSender[e.getChatId(e.userId,e.user.id)]===e.userId?"":"text-blue-500"])},[e.isSender[e.getChatId(e.userId,e.user.id)]===e.userId?(o(),i("span",Se," You: ")):x("",!0),E(" "+g(e.latestMessages[e.getChatId(e.userId,e.user.id)]),1)],2)):x("",!0),t("span",$e,g(e.formatTime(e.timestamp[e.getChatId(e.userId,e.user.id)])),1)])])]))}},ke={},Ce={class:"my-3"},Ue=oe('<div class="flex flex-col gap-4 w-32 ml-2"><div class="flex gap-2 items-center"><div class="skeleton w-10 h-10 rounded-full shrink-0"></div><div class="flex flex-col gap-2"><div class="skeleton h-2 w-10"></div><div class="skeleton h-2 w-20"></div></div></div></div><div class="flex justify-end mr-5"><div class="flex flex-col gap-4 w-32"><div class="flex gap-2 items-center"><div class="flex flex-col gap-2"><div class="skeleton h-2 w-20"></div><div class="skeleton h-2 w-10"></div></div><div class="skeleton w-10 h-10 rounded-full shrink-0"></div></div></div></div>',2),qe=[Ue];function De(e,c){return o(),i("div",Ce,qe)}const Le=fe(ke,[["render",De]]),Ne={class:"modal-box relative pb-4 pt-2 px-2"},je={class:"modal-action absolute z-10 -top-4 right-2"},Te={method:"dialog"},Be={class:"btn btn-xs px-0.5 rounded-full"},Ve={class:"flex justify-start items-center gap-2"},Ee={class:"avatar"},Fe={class:"w-10 rounded-full"},Re=["src"],Oe={class:"text-sm font-medium"},Pe=t("hr",{class:"my-1 border border-gray-400/20"},null,-1),pe={key:0,class:"my-2 flex justify-center items-center text-sm"},Ae={class:"py-1 px-4 bg-primary/10 rounded-full"},He={class:"text-primary font-semibold"},ze={class:"chat-image avatar"},Je={class:"w-10 rounded-full"},We=["src"],Ye=["src"],Ke={class:"chat-header text-xs font-medium"},Qe={class:"text-[10px] opacity-50"},Ge={key:1},Xe={class:"my-1 flex justify-start items-center gap-2"},Ze=["disabled","value"],_e={key:0,class:"loading loading-ring loading-lg"},ds={__name:"ChatModal",props:{userId:{type:String,required:!0},messages:{type:Array,required:!0},selectedUser:{type:Object,required:!0},userPhoto:{type:String,required:!0},userName:{type:String,required:!0},isSendMessageLoading:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},formatTime:{type:Function,required:!0},sendMessage:{type:Function,required:!0},filteredMessages:{type:Array},modelValue:{type:String,required:!0}},setup(e){const c=r(null);return(l,n)=>(o(),i("div",Ne,[t("div",je,[t("form",Te,[t("button",Be,[V(P(J),{icon:"carbon:close",class:"text-xl text-red-500"})])])]),t("div",Ve,[t("div",Ee,[t("div",Fe,[t("img",{src:e.selectedUser.userPhotoURL},null,8,Re)])]),t("div",null,[t("h1",Oe,g(e.selectedUser.userName),1)])]),Pe,t("div",{class:"h-80 rounded-md overflow-y-scroll",ref_key:"messageContainer",ref:c},[e.filteredMessages.length===0&&!e.isLoading?(o(),i("div",pe,[t("span",Ae,[E("No conversation with "),t("span",He,g(e.selectedUser.userName),1)])])):x("",!0),(o(!0),i(ie,null,le(e.filteredMessages,d=>(o(),i("div",{key:d.id},[t("div",{class:S(["chat",d.senderId===e.userId?"chat-end":"chat-start"])},[t("div",ze,[t("div",Je,[e.userId===d.senderId?(o(),i("img",{key:0,src:e.userPhoto},null,8,We)):(o(),i("img",{key:1,src:e.selectedUser.userPhotoURL},null,8,Ye))])]),t("div",Ke,[E(g(d.senderId===e.userId?e.userName:e.selectedUser.userName)+" ",1),t("time",Qe,g(e.formatTime(d.timestamp)),1)]),t("div",{class:S(["chat-bubble text-sm",e.userId===d.senderId?"chat-bubble-primary":""])},g(d.message),3)],2)]))),128)),e.isLoading?(o(),i("div",Ge,[V(Le)])):x("",!0)],512),t("form",{onSubmit:n[1]||(n[1]=ue((...d)=>e.sendMessage&&e.sendMessage(...d),["prevent"]))},[t("div",Xe,[t("input",{type:"text",disabled:e.isSendMessageLoading,required:"",value:e.modelValue,onInput:n[0]||(n[0]=d=>l.$emit("update:modelValue",d.target.value)),placeholder:"Enter a message..",class:"input input-bordered w-full placeholder:text-sm rounded-full"},null,40,Ze),e.isSendMessageLoading?(o(),i("span",_e)):x("",!0),e.isSendMessageLoading?x("",!0):(o(),i("button",{key:1,class:S(["rounded-full btn transition",e.modelValue===""?"hidden":""])},[V(P(J),{icon:"bxs:send",class:"text-xl text-blue-500"})],2))])],32)]))}};export{ns as C,rs as _,ds as a};