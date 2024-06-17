import{o as d,c as l,d as P,l as A,k as v,D as H,a as s,s as I,u as w,B as o,b as p,t as m,m as k,x as h,n as F,p as J,v as G,q as f,z as K}from"./index-Cj_59i94.js";import{I as N}from"./iconify-Cm9s_N3h.js";import{g as O}from"./getUsers-_fDb8uEW.js";import{_ as Q,u as W,a as X,c as M,s as Y,q as Z,o as ss,w as U,d as es}from"./_plugin-vue_export-helper-DpAulEwS.js";const ts={},os={class:"my-3"},as=P('<div class="flex flex-col gap-4 w-32 ml-2"><div class="flex gap-2 items-center"><div class="skeleton w-10 h-10 rounded-full shrink-0"></div><div class="flex flex-col gap-2"><div class="skeleton h-2 w-10"></div><div class="skeleton h-2 w-20"></div></div></div></div><div class="flex justify-end mr-5"><div class="flex flex-col gap-4 w-32"><div class="flex gap-2 items-center"><div class="flex flex-col gap-2"><div class="skeleton h-2 w-20"></div><div class="skeleton h-2 w-10"></div></div><div class="skeleton w-10 h-10 rounded-full shrink-0"></div></div></div></div>',2),ns=[as];function ds(D,g){return d(),l("div",os,ns)}const ls=Q(ts,[["render",ds]]),is=["onClick"],cs={class:"w-10 rounded-full"},rs=["src"],us={class:""},vs={class:"text-sm font-medium"},ms=s("span",{class:"text-xs px-2 bg-blue-500/20 text-blue-500 rounded-full"},"test",-1),_s={id:"openInbox",class:"modal modal-bottom sm:modal-middle"},hs={class:"modal-box relative pb-4 pt-2 px-2"},fs={class:"modal-action absolute z-10 -top-4 right-2"},ps={method:"dialog"},gs={class:"btn btn-xs rounded-full"},xs={class:"flex justify-start items-center gap-2"},ys={class:"avatar"},bs={class:"w-10 rounded-full"},Is=["src"],ws={class:"text-sm font-medium"},ks=s("hr",{class:"my-1 border border-gray-400/20"},null,-1),Ns={class:"h-80 rounded-md overflow-y-scroll"},Ms={key:0,class:"my-2 flex justify-center items-center text-sm"},Us={class:"py-1 px-4 bg-primary/10 rounded-full"},Ds={class:"text-primary font-semibold"},Ls={class:"chat-image avatar"},$s={class:"w-10 rounded-full"},js=["src"],Bs=["src"],Cs={class:"chat-header text-xs font-medium"},Ts={class:"text-[10px] opacity-50"},Vs={key:1},qs={class:"my-1 flex justify-start items-center gap-2"},Ss=["disabled"],Rs={key:0,class:"loading loading-ring loading-lg"},Hs={__name:"yourChats",setup(D){const g=A(),L=v(g.currentUser),{firestore:x}=W(),{uid:$,photoURL:j,displayName:B}=L.value,i=$,C=B,{storedUsers:T}=O();let a=v([]);const c=v(""),y=v([]),_=v(!1),r=v(!1),V=t=>{document.getElementById("openInbox").showModal(),a.value=t,console.log(a.value.userId),z()},q=async()=>{if(c.value.trim()!==""){r.value=!0,console.log("sending");try{await X(M(x,"messages"),{senderId:i,recipientId:a.value.userId,message:c.value,timestamp:Y()}),console.log("send!"),r.value=!1}catch{r.value=!1}c.value=""}},b=H(()=>y.value.filter(t=>t.senderId===i&&t.recipientId===a.value.userId||t.senderId===a.value.userId&&t.recipientId===i)),S=t=>{const n=t.seconds,e=t.nanoseconds/1e6;return new Date(n*1e3+e)},R=t=>{const n=S(t),e=n.getHours()%12||12,u=("0"+n.getMinutes()).slice(-2),E=n.getHours()<12?"am":"pm";return`${e}:${u} ${E}`},z=()=>{_.value=!0;const t=Z(M(x,"messages"),U("senderId","in",[i,a.value.userId]),U("recipientId","in",[i,a.value.userId]),ss("timestamp","asc")),n=es(t,e=>{y.value=e.docs.map(u=>({id:u.id,...u.data()})),_.value=!1});K(()=>{n&&n()})};return(t,n)=>(d(),l("div",null,[s("div",null,[(d(!0),l(I,null,w(o(T),e=>(d(),l("div",{key:e.id},[s("div",{onClick:u=>V(e),class:"flex justify-start items-center gap-2 cursor-pointer hover:bg-gray-500/20 transition p-1 rounded-md"},[s("div",{class:f(["avatar",e.status==="online"?"online":"offline"])},[s("div",cs,[s("img",{src:e.userPhotoURL},null,8,rs)])],2),s("div",us,[s("h1",vs,m(e.userName),1),ms])],8,is)]))),128))]),s("dialog",_s,[s("div",hs,[s("div",fs,[s("form",ps,[s("button",gs,[p(o(N),{icon:"carbon:close",class:"text-xl text-red-500"})])])]),s("div",xs,[s("div",ys,[s("div",bs,[s("img",{src:o(a).userPhotoURL},null,8,Is)])]),s("div",null,[s("h1",ws,m(o(a).userName),1)])]),ks,s("div",Ns,[b.value.length===0&&!_.value?(d(),l("div",Ms,[s("span",Us,[k("No conversation with chef "),s("span",Ds,m(o(a).userName),1)])])):h("",!0),(d(!0),l(I,null,w(b.value,e=>(d(),l("div",{key:e.id},[s("div",{class:f(["chat",e.senderId===o(i)?"chat-end":"chat-start"])},[s("div",Ls,[s("div",$s,[o(i)===e.senderId?(d(),l("img",{key:0,src:o(j)},null,8,js)):(d(),l("img",{key:1,src:o(a).userPhotoURL},null,8,Bs))])]),s("div",Cs,[k(m(e.senderId===o(i)?o(C):o(a).userName)+" ",1),s("time",Ts,m(R(e.timestamp)),1)]),s("div",{class:f(["chat-bubble text-sm",o(i)===e.senderId?"chat-bubble-primary":""])},m(e.message),3)],2)]))),128)),_.value?(d(),l("div",Vs,[p(ls)])):h("",!0)]),s("form",{action:"",onSubmit:F(q,["prevent"])},[s("div",qs,[J(s("input",{type:"text",disabled:r.value,required:"","onUpdate:modelValue":n[0]||(n[0]=e=>c.value=e),placeholder:"Enter a message..",class:"input input-bordered w-full placeholder:text-sm rounded-full"},null,8,Ss),[[G,c.value]]),r.value?(d(),l("span",Rs)):h("",!0),r.value?h("",!0):(d(),l("button",{key:1,class:f(["rounded-full btn transition",c.value===""?"hidden":""])},[p(o(N),{icon:"bxs:send",class:"text-xl text-blue-500"})],2))])],32)])])]))}};export{Hs as default};
