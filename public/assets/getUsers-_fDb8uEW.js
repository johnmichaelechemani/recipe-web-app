import{l as c,k as e}from"./index-Cj_59i94.js";function g(){const t=c(),r=e(t.currentUser),{uid:o,photoURL:l,displayName:i}=r.value,u=o,s=e([]),a=JSON.parse(localStorage.getItem("users")).filter(n=>n.id!==u);return s.value=a,{storedUsers:s}}export{g};
