import{C as L,a as V,_ as T}from"./ChatModal-DLHLoaNn.js";import{o as s,c as t,s as f,u as p,a,q,t as v,b as h,D as e,x as g,E as P,d as B}from"./index-D__82rVl.js";import"./_plugin-vue_export-helper-Dm7Ma2NA.js";const F={class:"border-b pb-2 overflow-scroll no-scrollbar gap-3 w-full border-gray-500/10 rounded-md my-2 flex justify-start items-center"},j=["onClick"],z={class:"max-w-14"},D={class:"w-14 rounded-full"},E=["src"],R={class:"text-[10px] text-center truncate capitalize"},H={__name:"ChatHeads",props:{filteredUsers:{type:Object,required:!0},yourChat:{type:Function,required:!0},modalId:{type:String,required:!0}},setup(r){const i=n=>n.split(" ")[0];return(n,c)=>(s(),t("div",F,[(s(!0),t(f,null,p(r.filteredUsers,d=>(s(),t("div",{key:d.id,onClick:u=>r.yourChat(r.modalId,d)},[a("div",z,[a("div",{class:q(["avatar",d.status==="online"?"online":"offline"])},[a("div",D,[a("img",{src:d.userPhotoURL},null,8,E)])],2),a("p",R,v(i(d.userName)),1)])],8,j))),128))]))}},O={class:"min-h-96"},A={key:0},G={key:0},J=B('<div class="flex flex-col gap-4 w-32 ml-2"><div class="flex gap-2 items-center"><div class="skeleton w-10 h-10 rounded-full shrink-0"></div><div class="flex flex-col gap-2"><div class="skeleton h-2 w-10"></div><div class="skeleton h-2 w-20"></div></div></div></div>',1),K=[J],Q={key:1},W=a("div",{class:"my-2"},[a("span",{class:"font-semibold text-xs text-red-400 bg-red-500/10 px-3 py-0.5 shadow-sm rounded-full"},"No conversation")],-1),X=[W],Y={id:"openInbox",class:"modal modal-bottom sm:modal-middle"},ae={__name:"yourChats",setup(r){const{Time:i,getChatId:n,yourChat:c,sendMessage:d,userId:u,newMessage:m,messages:x,isLoading:_,isSendMessageLoading:C,filteredMessages:k,selectedUser:I,timestamp:b,userPhoto:M,userName:N,filteredUsers:l,latestMessages:U,isSender:w,tempUsers:$,search:S}=L();return(Z,y)=>(s(),t("div",O,[a("div",null,[h(H,{filteredUsers:e(l),yourChat:e(c),modalId:"openInbox"},null,8,["filteredUsers","yourChat"])]),(s(!0),t(f,null,p(e($),o=>(s(),t("div",{key:o.id},v(o.userName)+" "+v(e(S)),1))),128)),e(l).length!==0?(s(),t("div",A,[(s(!0),t(f,null,p(e(l),o=>(s(),t("div",{key:o.id},[h(T,{user:o,yourChat:()=>e(c)("openInbox",o),formatTime:e(i),latestMessages:e(U),getChatId:e(n),userId:e(u),isSender:e(w),timestamp:e(b)},null,8,["user","yourChat","formatTime","latestMessages","getChatId","userId","isSender","timestamp"])]))),128))])):g("",!0),a("div",null,[e(_)?(s(),t("div",G,K)):g("",!0),e(l).length===0&&!e(_)?(s(),t("div",Q,X)):g("",!0)]),a("dialog",Y,[h(V,{userId:e(u),messages:e(x),selectedUser:e(I),userPhoto:e(M),userName:e(N),isSendMessageLoading:e(C),isLoading:e(_),formatTime:e(i),sendMessage:e(d),filteredMessages:e(k),modelValue:e(m),"onUpdate:modelValue":y[0]||(y[0]=o=>P(m)?m.value=o:null)},null,8,["userId","messages","selectedUser","userPhoto","userName","isSendMessageLoading","isLoading","formatTime","sendMessage","filteredMessages","modelValue"])])]))}};export{ae as default};
