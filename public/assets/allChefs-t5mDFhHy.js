import{g as m}from"./getUsers-BunG1t9S.js";import{I as _}from"./iconify-BnZ1LStC.js";import{k as u,o as a,c as l,s as h,u as f,D as e,a as s,b as v,t as d,q as p}from"./index-B2BqLNcl.js";const g=["onClick"],b={class:"w-10 rounded-full"},x=["src"],y={class:"text-sm font-medium"},C={id:"openChat",class:"modal modal-bottom sm:modal-middle"},k={class:"modal-box relative"},N={class:"modal-action absolute z-10 -top-4 right-2"},U={method:"dialog"},w={class:"btn btn-xs px-0.5 rounded-full"},B={class:"flex justify-start items-center gap-2"},j={class:"avatar"},I={class:"w-10 rounded-full"},L=["src"],z={class:"text-sm font-medium"},D=s("hr",{class:"my-1 border border-gray-400/20"},null,-1),E=s("div",{class:"h-80 bg-primary/10 rounded-md font-semibold text-sm flex justify-center items-center"}," Not available for now 🤪 ",-1),M={__name:"allChefs",setup(P){const{storedUsers:i}=m();let o=u([]);const r=n=>{document.getElementById("openChat").showModal(),o.value=n};return(n,c)=>(a(),l("div",null,[(a(!0),l(h,null,f(e(i),t=>(a(),l("div",{key:t.id},[s("div",{onClick:R=>r(t),class:"flex justify-start items-center gap-2 cursor-pointer hover:bg-gray-500/20 transition p-1 rounded-md"},[s("div",{class:p(["avatar",t.status==="online"?"online":"offline"])},[s("div",b,[s("img",{src:t.userPhotoURL},null,8,x)])],2),s("div",null,[s("h1",y,d(t.userName),1)])],8,g)]))),128)),s("dialog",C,[s("div",k,[s("div",N,[s("form",U,[s("button",w,[v(e(_),{icon:"carbon:close",class:"text-xl text-red-500"})])])]),s("div",B,[s("div",j,[s("div",I,[s("img",{src:e(o).userPhotoURL},null,8,L)])]),s("div",null,[s("h1",z,d(e(o).userName),1)])]),D,E])])]))}};export{M as default};