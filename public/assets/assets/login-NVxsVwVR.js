import{g as u,c as d,d as p,s as h,_ as m,I as g}from"./index.esm2017-CEIokUF6.js";import{g as x,u as f,G as _,D as y,c as b,a as e,b as I,m as r,x as v,o as G,e as w}from"./index-B608i0rP.js";const l=x(),N=u();function R(){const s=f(),o=l.currentUser,c=new _;return{user:o,signInWithGoogle:()=>{y(l,c).then(t=>{const i=d(N,"users"),n=p(i,t.user.uid);h(n,{userName:t.user.displayName,userId:t.user.uid,userPhotoURL:t.user.photoURL}),s.push("/home")}).catch(t=>{})}}}const W={components:{Icon:g},setup(){const{signInWithGoogle:s}=R();return{signInWithGoogle:s}}},j=e("div",{class:"flex items-center justify-center my-2"},[e("div",null,[e("div",{class:"px-5 py-2 rounded-full border border-gray-300/10 shadow"},[e("h1",{class:"text-base text-neutral font-semibold text-center"}," Recipe App ")]),e("span",{class:"text-xs flex justify-center py-2 text-blue-500 italic"},"John Michael D. Echemani")])],-1),A={class:"flex items-center h-screen justify-center text-neutral"},D={class:"px-5 py-3 border border-gray-500/10 rounded-md shadow"},L=e("h1",{class:"text-2xl font-semibold py-2"},"Log in",-1),$=e("p",{class:"text-xs py-2 font-medium"},[r(" You only need "),e("span",{class:"text-primary"},"GOOGLE"),r(" no need more than that. ")],-1);function k(s,o,c,a,t,i){const n=w("Icon");return G(),b(v,null,[j,e("div",A,[e("div",D,[L,e("button",{onClick:o[0]||(o[0]=B=>a.signInWithGoogle()),class:"btn items-center justify-between w-full gap-2 rounded-full"},[I(n,{icon:"devicon:google",class:"text-xl"}),r(" Google ")]),$])])],64)}const P=m(W,[["render",k]]);export{P as default};