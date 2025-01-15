import{C as P,b as j,_ as q}from"./ChatModal-pyewOLye.js";import{o as s,c as t,F as p,j as f,a,n as B,t as v,b as h,u as e,k as _,s as z,d as R}from"./index-LPqdb87D.js";import"./_plugin-vue_export-helper-cyXGxVya.js";import"./index.esm2017-C9KoS7ng.js";const D={class:"border-b pb-2 overflow-scroll no-scrollbar gap-3 w-full border-gray-500/10 rounded-md my-2 flex justify-start items-center"},E=["onClick"],H={class:"max-w-14"},O={class:"w-14 rounded-full"},A=["src"],G={class:"text-[10px] text-center truncate capitalize"},J={__name:"ChatHeads",props:{filteredUsers:{type:Object,required:!0},yourChat:{type:Function,required:!0},modalId:{type:String,required:!0}},setup(l){const i=r=>r.split(" ")[0];return(r,c)=>(s(),t("div",D,[(s(!0),t(p,null,f(l.filteredUsers,o=>(s(),t("div",{key:o.id,onClick:m=>l.yourChat(l.modalId,o)},[a("div",H,[a("div",{class:B(["avatar",o.status==="online"?"online":"offline"])},[a("div",O,[a("img",{src:o.userPhotoURL},null,8,A)])],2),a("p",G,v(i(o.userName)),1)])],8,E))),128))]))}},K={class:"min-h-96"},Q={key:0},W={key:0},X=R('<div class="flex flex-col gap-4 w-32 ml-2"><div class="flex gap-2 items-center"><div class="skeleton w-10 h-10 rounded-full shrink-0"></div><div class="flex flex-col gap-2"><div class="skeleton h-2 w-10"></div><div class="skeleton h-2 w-20"></div></div></div></div>',1),Y=[X],Z={key:1},ee=a("div",{class:"my-2"},[a("span",{class:"font-semibold text-xs text-red-400 bg-red-500/10 px-3 py-0.5 shadow-sm rounded-full"},"No conversation")],-1),se=[ee],te={id:"openInbox",class:"modal modal-bottom sm:modal-middle"},re={__name:"yourChats",setup(l){const{Time:i,getChatId:r,yourChat:c,sendMessage:o,userId:m,newMessage:u,messages:x,isLoading:g,isSendMessageLoading:I,filteredMessages:C,selectedUser:U,timestamp:k,userPhoto:b,userName:M,filteredUsers:n,latestMessages:N,isSender:w,tempUsers:F,search:$,file:S,imageFile:L,handleFileUpdate:V,handleImageUpdate:T}=P();return(ae,y)=>(s(),t("div",K,[a("div",null,[h(J,{filteredUsers:e(n),yourChat:e(c),modalId:"openInbox"},null,8,["filteredUsers","yourChat"])]),(s(!0),t(p,null,f(e(F),d=>(s(),t("div",{key:d.id},v(d.userName)+" "+v(e($)),1))),128)),e(n).length!==0?(s(),t("div",Q,[(s(!0),t(p,null,f(e(n),d=>(s(),t("div",{key:d.id},[h(q,{user:d,yourChat:()=>e(c)("openInbox",d),formatTime:e(i),latestMessages:e(N),getChatId:e(r),userId:e(m),isSender:e(w),timestamp:e(k)},null,8,["user","yourChat","formatTime","latestMessages","getChatId","userId","isSender","timestamp"])]))),128))])):_("",!0),a("div",null,[e(g)?(s(),t("div",W,Y)):_("",!0),e(n).length===0&&!e(g)?(s(),t("div",Z,se)):_("",!0)]),a("dialog",te,[h(j,{userId:e(m),messages:e(x),selectedUser:e(U),selectedFile:e(S),selectedImage:e(L),"onUpdate:selectedFile":e(V),"onUpdate:selectedImage":e(T),userPhoto:e(b),userName:e(M),isSendMessageLoading:e(I),isLoading:e(g),formatTime:e(i),sendMessage:e(o),filteredMessages:e(C),modelValue:e(u),"onUpdate:modelValue":y[0]||(y[0]=d=>z(u)?u.value=d:null)},null,8,["userId","messages","selectedUser","selectedFile","selectedImage","onUpdate:selectedFile","onUpdate:selectedImage","userPhoto","userName","isSendMessageLoading","isLoading","formatTime","sendMessage","filteredMessages","modelValue"])])]))}};export{re as default};
