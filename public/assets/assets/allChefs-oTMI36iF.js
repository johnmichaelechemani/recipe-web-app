import{C as V,b as B,_ as k}from"./ChatModal-BtHCBiT5.js";import{q as P,o as r,c as i,F as w,j as A,a as n,b as g,u as e,s as $}from"./index-B08Vc0f-.js";import"./_plugin-vue_export-helper-Cwp7hEAq.js";import"./index.esm2017-DifbwoL8.js";const j={class:"min-h-96"},q=n("div",{class:"my-2"},[n("span",{class:"font-semibold text-xs text-gray-500 bg-gray-500/10 px-3 py-0.5 shadow-sm rounded-full"},"All")],-1),E={id:"openChat",class:"modal modal-bottom sm:modal-middle"},J={__name:"allChefs",setup(R){const c=P(()=>L.value.sort((u,t)=>{const s=d(a,u.id),T=d(a,t.id);return l.value[T]-l.value[s]})),{Time:m,getChatId:d,yourChat:p,sendMessage:h,userId:a,newMessage:o,messages:f,isLoading:_,isSendMessageLoading:I,filteredMessages:M,selectedUser:U,timestamp:l,userPhoto:C,userName:F,latestMessages:v,isSender:y,storedUsers:L,file:x,imageFile:S,handleFileUpdate:b,handleImageUpdate:N}=V();return(u,t)=>(r(),i("div",j,[q,(r(!0),i(w,null,A(c.value,s=>(r(),i("div",{key:s.id},[g(k,{user:s,yourChat:()=>e(p)("openChat",s),formatTime:e(m),latestMessages:e(v),getChatId:e(d),userId:e(a),isSender:e(y),timestamp:e(l)},null,8,["user","yourChat","formatTime","latestMessages","getChatId","userId","isSender","timestamp"])]))),128)),n("dialog",E,[g(B,{userId:e(a),messages:e(f),selectedUser:e(U),selectedFile:e(x),selectedImage:e(S),"onUpdate:selectedFile":e(b),"onUpdate:selectedImage":e(N),userPhoto:e(C),userName:e(F),isSendMessageLoading:e(I),isLoading:e(_),formatTime:e(m),sendMessage:e(h),filteredMessages:e(M),modelValue:e(o),"onUpdate:modelValue":t[0]||(t[0]=s=>$(o)?o.value=s:null)},null,8,["userId","messages","selectedUser","selectedFile","selectedImage","onUpdate:selectedFile","onUpdate:selectedImage","userPhoto","userName","isSendMessageLoading","isLoading","formatTime","sendMessage","filteredMessages","modelValue"])])]))}};export{J as default};