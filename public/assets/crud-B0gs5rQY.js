import{r as n,p as U,o as i,c as m,a as e,F as x,i as N,f as u,h as d,v as a,t as c}from"./index-BLnVbUpG.js";import{g as V,c as I,q as F,b as M,a as $,d as f,f as L,u as A}from"./index.esm2017-D51BvJXu.js";const Q={class:"m-5"},j=e("h1",{class:"font-semibold"},"First Task",-1),z={class:"overflow-x-auto"},G={class:"table"},H=e("th",{colspan:"2"},"Action",-1),J={class:"bg-base-200"},K=["onClick"],O=["onClick"],P=e("h1",null,"Add fields",-1),W=e("p",null,"Name:",-1),X=e("p",null,"Address:",-1),Y=e("p",null,"Contact Number:",-1),Z=e("button",{class:"btn btn-secondary my-2",type:"submit"},"Add",-1),ee={id:"my_modal_1",class:"modal"},te={class:"modal-box"},oe=e("h3",{class:"text-lg font-bold"},"Edit",-1),le=e("p",null,"Edit your data.",-1),se=e("p",null,"Name:",-1),ne=e("p",null,"Address:",-1),de=e("p",null,"Contact Number:",-1),ae={class:"modal-action"},ue={method:"dialog"},ce=e("button",{class:"btn"},"Close",-1),re={id:"my_modal_2",class:"modal"},ie={class:"modal-box"},me=e("h3",{class:"text-lg font-bold"},"Delete",-1),pe=e("p",null,"Are you sure?",-1),_e={class:"modal-action"},ve={method:"dialog"},he=e("button",{class:"btn"},"Close",-1),be=e("div",null,[e("h1",{class:"font-semibold"},"Second Task")],-1),ye=e("h1",null,"Add column",-1),fe=e("p",null,"Name:",-1),ge=e("button",{class:"btn btn-secondary my-2",type:"submit"},"Add Column",-1),Ae={__name:"crud",setup(we){const p=V(),r=n([]),_=n(""),v=n(""),h=n(""),g=I(p,"crud"),C=F(g),E=M(C,l=>{r.value=l.docs.map(t=>({id:t.id,...t.data()})),console.log(r.value)}),k=async()=>{const l={Name:_.value,Address:v.value,Number:h.value};try{await $(g,l),_.value="",v.value="",h.value="",console.log("success!")}catch(t){console.error("Error sending: ",t)}};let b=n("");const s=n({}),T=l=>{document.getElementById("my_modal_2").showModal(),b.value=l},q=(l,t)=>{s.value=t,b.value=l,document.getElementById("my_modal_1").showModal()},D=async()=>{const l=document.getElementById("my_modal_2");try{const t=f(p,"crud",b.value);await L(t),console.log("Document successfully deleted!"),l.close()}catch(t){console.error("Error deleting document: ",t),l.close()}},B=async()=>{try{const l=f(p,"crud",b.value);await A(l,{Name:s.value.Name,Address:s.value.Address,Number:s.value.Number}),document.getElementById("my_modal_1").close()}catch{document.getElementById("my_modal_1").close()}},y=n(""),w={},R=async()=>{try{for(let l of r.value){const t=f(p,"crud",l.id);w[y.value]="",await A(t,w)}console.log("New column added successfully!"),y.value=""}catch(l){console.error("Error adding new column: ",l)}};return U(()=>{E()}),(l,t)=>(i(),m("div",Q,[j,e("div",z,[e("table",G,[e("thead",null,[e("tr",null,[(i(!0),m(x,null,N(r.value[0],o=>(i(),m("th",{key:o},c(o),1))),128)),H])]),(i(!0),m(x,null,N(r.value,o=>(i(),m("tbody",{key:o.id},[e("tr",J,[e("td",null,c(o.id),1),e("td",null,c(o.email),1),e("td",null,c(o.Name),1),e("td",null,c(o.Address),1),e("td",null,c(o.Number),1),e("td",null,[e("button",{class:"btn bg-green-500",onClick:u(S=>q(o.id,o),["stop"])}," Edit ",8,K)]),e("td",null,[e("button",{class:"btn bg-red-500",onClick:u(S=>T(o.id),["stop"])}," Delete ",8,O)])])]))),128))])]),e("div",null,[P,e("form",{action:"",onSubmit:u(k,["prevent"])},[e("div",null,[W,d(e("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>_.value=o),required:"",type:"text",placeholder:"Type here",class:"input input-bordered w-full max-w-xs"},null,512),[[a,_.value]])]),e("div",null,[X,d(e("input",{required:"","onUpdate:modelValue":t[1]||(t[1]=o=>v.value=o),type:"text",placeholder:"Type here",class:"input input-bordered w-full max-w-xs"},null,512),[[a,v.value]])]),e("div",null,[Y,d(e("input",{"onUpdate:modelValue":t[2]||(t[2]=o=>h.value=o),required:"",type:"text",placeholder:"Type here",class:"input input-bordered w-full max-w-xs"},null,512),[[a,h.value]])]),Z],32)]),e("dialog",ee,[e("div",te,[oe,le,e("div",null,[se,d(e("input",{"onUpdate:modelValue":t[3]||(t[3]=o=>s.value.Name=o),required:"",type:"text",placeholder:"Type here",class:"input input-bordered w-full"},null,512),[[a,s.value.Name]])]),e("div",null,[ne,d(e("input",{required:"","onUpdate:modelValue":t[4]||(t[4]=o=>s.value.Address=o),type:"text",placeholder:"Type here",class:"input input-bordered w-full"},null,512),[[a,s.value.Address]])]),e("div",null,[de,d(e("input",{"onUpdate:modelValue":t[5]||(t[5]=o=>s.value.Number=o),required:"",type:"number",placeholder:"Type here",class:"input input-bordered w-full"},null,512),[[a,s.value.Number]])]),e("div",ae,[e("form",ue,[e("button",{class:"btn bg-green-500 mx-3",onClick:u(B,["stop"])}," Save "),ce])])])]),e("dialog",re,[e("div",ie,[me,pe,e("div",_e,[e("form",ve,[e("button",{class:"btn bg-red-500 mx-3",onClick:u(D,["stop"])}," delete "),he])])])]),be,e("div",null,[ye,e("form",{action:"",onSubmit:u(R,["prevent"])},[e("div",null,[fe,d(e("input",{"onUpdate:modelValue":t[6]||(t[6]=o=>y.value=o),required:"",type:"text",placeholder:"Type here",class:"input input-bordered w-full max-w-xs"},null,512),[[a,y.value]])]),ge],32)])]))}};export{Ae as default};
