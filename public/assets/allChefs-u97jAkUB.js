import{C as N,a as T,_ as V}from"./ChatModal-C1avrDUU.js";import{D as b,o as i,c as n,s as B,u as k,a as l,b as g,z as e,E as P}from"./index-OfqcJFP7.js";import"./_plugin-vue_export-helper-BHggrymF.js";import"./index.esm2017-CX63Xga-.js";const w={class:"min-h-96"},A=l("div",{class:"my-2"},[l("span",{class:"font-semibold text-xs text-gray-500 bg-gray-500/10 px-3 py-0.5 shadow-sm rounded-full"},"All")],-1),E={id:"openChat",class:"modal modal-bottom sm:modal-middle"},j={__name:"allChefs",setup(F){const c=b(()=>S.value.sort((u,t)=>{const s=o(a,u.id),U=o(a,t.id);return r.value[U]-r.value[s]})),{Time:m,getChatId:o,yourChat:f,sendMessage:h,userId:a,newMessage:d,messages:p,isLoading:_,isSendMessageLoading:M,filteredMessages:C,selectedUser:I,timestamp:r,userPhoto:v,userName:y,latestMessages:L,isSender:x,storedUsers:S}=N();return(u,t)=>(i(),n("div",w,[A,(i(!0),n(B,null,k(c.value,s=>(i(),n("div",{key:s.id},[g(V,{user:s,yourChat:()=>e(f)("openChat",s),formatTime:e(m),latestMessages:e(L),getChatId:e(o),userId:e(a),isSender:e(x),timestamp:e(r)},null,8,["user","yourChat","formatTime","latestMessages","getChatId","userId","isSender","timestamp"])]))),128)),l("dialog",E,[g(T,{userId:e(a),messages:e(p),selectedUser:e(I),userPhoto:e(v),userName:e(y),isSendMessageLoading:e(M),isLoading:e(_),formatTime:e(m),sendMessage:e(h),filteredMessages:e(C),modelValue:e(d),"onUpdate:modelValue":t[0]||(t[0]=s=>P(d)?d.value=s:null)},null,8,["userId","messages","selectedUser","userPhoto","userName","isSendMessageLoading","isLoading","formatTime","sendMessage","filteredMessages","modelValue"])])]))}};export{j as default};
