import{o as l,c as n,a as e,b as i,t as p,d as $e,r as U,e as g,g as pe,w as me,f as W,h as D,i as C,v as $,n as E,F as j,j as M,k as f,l as je,u as _,m as Ae,p as he,q as De,s as Me,x as ae,y as Se}from"./index-CKX9WdlZ.js";import{_ as ee,I as F,u as be,g as xe}from"./_plugin-vue_export-helper-DID3uxOz.js";import{g as fe,c as ve,a as ze,q as Ve,w as Ne,o as Be,b as Te,d as _e,e as ge,f as Ee,u as Fe}from"./index.esm2017-OwuF1fxM.js";import{g as de,r as ce,u as ye,a as Ie,d as He,C as we,_ as qe,b as Pe}from"./ChatModal-mn8nIQTh.js";const Ye={components:{Icon:F},setup(){const{user:h,logout:o}=be();return{user:h,logout:o}}},Oe={class:"flex justify-between items-center border-b border-gray-400/20"},Qe={class:"flex justify-start items-center gap-1 p-2"},Je=["src"],Ze={key:1,class:"bg-primary text-neutral shadow rounded-full p-1"},Ge={class:"font-medium text-xs sm:text-sm capitalize hidden sm:block"},Ke=e("div",{class:"h-3 border-r-2 border-gray-400/50 ml-2"},null,-1),We={class:"dropdown"},Xe={tabindex:"0",role:"button",class:"p-2"},et={tabindex:"0",class:"dropdown-content z-[1] menu border border-gray-400/10 p-2 shadow bg-base-100 rounded-md w-32"},tt=e("p",{class:"text-xs"},"Logout",-1),st=$e('<div><label class="flex cursor-pointer gap-1 sm:gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"></path></svg><input type="checkbox" value="sunset" class="toggle theme-controller w-10 h-4"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg></label></div>',1);function ot(h,o,v,t,x,b){const a=U("Icon");return l(),n("div",Oe,[e("div",Qe,[e("div",null,[t.user.photoURL?(l(),n("img",{key:0,class:"h-8 w-8 rounded-full",src:t.user.photoURL,alt:"profile"},null,8,Je)):(l(),n("div",Ze,[i(a,{icon:"mdi:user",class:"text-2xl"})]))]),e("h1",Ge,p(t.user.displayName),1),Ke,e("div",We,[e("div",Xe,[i(a,{icon:"solar:settings-bold"})]),e("ul",et,[e("div",{class:"btn flex justify-start",onClick:o[0]||(o[0]=c=>t.logout())},[i(a,{icon:"solar:logout-bold-duotone",class:"text-xl"}),tt])])])]),st])}const lt=ee(Ye,[["render",ot]]),nt={components:{Icon:F},setup(){const h=g(""),o=g(""),v=g(""),t=g([]),x=g(!1),b=g(""),a=g([]),c=g(!1),u=g(!1),s=g(null),d=g(null),R=pe(),S=g(R.currentUser),P=fe(),H=de(),B=ve(P,"recipe");me(v,y=>{x.value=y.trim()!==""}),me(b,y=>{c.value=y.trim()!==""});const Y=()=>{t.value.push(v.value),v.value="",console.log(t.value)},O=()=>{a.value.push(b.value),b.value="",console.log(a.value)},Q=y=>{a.value.splice(y,1)},J=y=>{t.value.splice(y,1)},w=g(""),Z=y=>{const I=y.target.files[0];I&&(s.value=I,d.value=URL.createObjectURL(I),w.value=I.name)},G=()=>{s.value=null,d.value=null,w.value=""},z=g(!1);return{title:h,descriptions:o,post:async()=>{z.value=!0;const{uid:y,displayName:I,photoURL:k}=S.value;let V="";const K=new Date;if(s.value){const L=ce(H,`images/${s.value.name}`),A=await ye(L,s.value);V=await Ie(A.ref)}const T={userId:y,userName:I,userPhotoURL:k,title:h.value,descriptions:o.value,allIngredients:t.value,allInstructions:a.value,createdAt:K,imageURL:V,totalRatings:0,averageRating:0};try{u.value=!0,await ze(B,T),h.value="",o.value="",t.value=[],a.value=[],b.value="",v.value="",s.value=null,document.getElementById("my_modal_3").close(),s.value=null,w.value="",console.log("success!")}catch(L){console.error("Error sending post recipe:",L),z.value=!1}finally{u.value=!1,z.value=!1}},ingredients:v,instructions:b,allInstructions:a,canAddIntructions:c,addIngredients:Y,addInstructions:O,allIngredients:t,removeIngredients:J,removeIstructions:Q,canAddIngredient:x,loading:u,handleImageUpload:Z,imageName:w,imageURL:d,removeSelectedImage:G,postClickToAutoDisableIt:z}}},it={class:"btn btn-primary rounded-full",onclick:"my_modal_3.showModal()"},at={class:""},dt={id:"my_modal_3",class:"modal"},ct={class:"modal-box"},rt=e("form",{method:"dialog"},[e("button",{class:"btn btn-sm btn-circle btn-ghost absolute right-2 top-2"}," ✕ ")],-1),ut=e("h3",{class:"font-bold text-lg"},"Add your recipe.",-1),mt={class:"py-3 grid grid-cols-1 gap-2"},_t={class:"form-control w-full"},gt=e("div",{class:"label"},[e("span",{class:"text-xs sm:text-base"},"Title:")],-1),pt=e("span",{class:"text-xs sm:text-base"},"Descriptions:",-1),ht=e("span",{class:"text-xs sm:text-base"},"Ingredients:",-1),bt={class:"input input-bordered pr-0 flex items-center gap-2"},xt=["disabled"],ft={key:0},vt={class:"grid grid-cols-1 gap-1 border border-gray-400/10 p-1 rounded-md"},yt={class:"flex justify-between items-center px-2 py-0.5 bg-blue-100/10 border border-gray-500/10 rounded-md"},It={class:"text-xs font-medium"},wt=["onUpdate:modelValue"],kt=["onClick"],Rt=e("span",{class:"text-xs sm:text-base"},"Instructions:",-1),Ct={class:"input input-bordered pr-0 flex items-center gap-2"},Ut=["disabled"],Lt={key:1},$t={class:"grid grid-cols-1 gap-1 border border-gray-400/10 p-1 rounded-md"},jt={class:"flex justify-between items-center px-2 py-0.5 bg-blue-100/10 border border-gray-500/10 rounded-md"},At={class:"text-xs font-medium"},Dt=["onUpdate:modelValue"],Mt=["onClick"],St=e("p",{class:"text-xs font-medium"},"Add Image:",-1),zt={key:0,class:"relative"},Vt=["src"],Nt={class:"flex items-center justify-center w-full my-2"},Bt={for:"dropzone-file",class:"flex flex-col items-center justify-center w-full border border-gray-400/50 h-20 rounded-md cursor-pointer"},Tt={class:"flex flex-col items-center justify-center pt-5 pb-6"},Et=e("p",{class:"mb-2 text-sm"},[e("span",{class:"font-semibold"},"Click to upload")],-1),Ft={key:0,class:"text-xs"},Ht={key:0,class:"loading loading-dots loading-xs"};function qt(h,o,v,t,x,b){const a=U("Icon");return l(),n(j,null,[e("button",it,[i(a,{icon:"ci:add-plus",class:"text-2xl"}),W("Add Recipes ")]),e("div",at,[e("dialog",dt,[e("div",ct,[rt,ut,e("form",{onSubmit:o[8]||(o[8]=D((...c)=>t.post&&t.post(...c),["prevent"]))},[e("div",mt,[e("label",_t,[gt,C(e("input",{type:"text",required:"","onUpdate:modelValue":o[0]||(o[0]=c=>t.title=c),placeholder:"Adobo",class:"input input-bordered placeholder:text-xs w-full"},null,512),[[$,t.title]])]),e("div",null,[pt,C(e("textarea",{class:"textarea textarea-bordered w-full placeholder:text-xs","onUpdate:modelValue":o[1]||(o[1]=c=>t.descriptions=c),required:"",placeholder:"A classic..."},null,512),[[$,t.descriptions]])]),e("div",null,[ht,e("label",bt,[C(e("input",{"onUpdate:modelValue":o[2]||(o[2]=c=>t.ingredients=c),type:"text",class:"w-full placeholder:text-xs",placeholder:"Eggs"},null,512),[[$,t.ingredients]]),e("button",{class:E(["btn",t.canAddIngredient?"btn-primary ":"btn-disabled"]),disabled:!t.canAddIngredient,onClick:o[3]||(o[3]=D((...c)=>t.addIngredients&&t.addIngredients(...c),["prevent"]))},[i(a,{icon:"ci:add-plus",class:"text-2xl"})],10,xt)])]),t.allIngredients.length!==0?(l(),n("div",ft,[e("div",vt,[(l(!0),n(j,null,M(t.allIngredients,(c,u)=>(l(),n("div",{key:c.id},[e("div",yt,[e("span",It,p(u+1)+".",1),C(e("input",{type:"text","onUpdate:modelValue":s=>t.allIngredients[u]=s,class:"input my-1 mx-1 input-bordered input-sm w-full capitalize"},null,8,wt),[[$,t.allIngredients[u]]]),e("button",{class:"btn btn-sm px-1.5 text-xl",onClick:D(s=>t.removeIngredients(u),["prevent"])},[i(a,{icon:"ri:close-line",class:"text-red-500"})],8,kt)])]))),128))])])):f("",!0),e("div",null,[Rt,e("label",Ct,[C(e("input",{type:"text","onUpdate:modelValue":o[4]||(o[4]=c=>t.instructions=c),class:"w-full placeholder:text-xs",placeholder:"Cook spaghetti until..."},null,512),[[$,t.instructions]]),e("button",{class:E(["btn",t.canAddIntructions?"btn-primary":"btn-disabled"]),disabled:!t.canAddIntructions,onClick:o[5]||(o[5]=D((...c)=>t.addInstructions&&t.addInstructions(...c),["prevent"]))},[i(a,{icon:"ci:add-plus",class:"text-2xl"})],10,Ut)])]),t.allInstructions.length!==0?(l(),n("div",Lt,[e("div",$t,[(l(!0),n(j,null,M(t.allInstructions,(c,u)=>(l(),n("div",{key:c.id},[e("div",jt,[e("span",At,p(u+1)+".",1),C(e("input",{type:"text","onUpdate:modelValue":s=>t.allInstructions[u]=s,class:"input my-1 mx-1 input-bordered input-sm w-full capitalize"},null,8,Dt),[[$,t.allInstructions[u]]]),e("button",{class:"btn btn-sm px-1.5 text-xl",onClick:D(s=>t.removeIstructions(u),["prevent"])},[i(a,{icon:"ri:close-line",class:"text-red-500"})],8,Mt)])]))),128))])])):f("",!0),e("div",null,[St,t.imageURL?(l(),n("div",zt,[e("img",{src:t.imageURL,alt:"recipe image",class:"w-32 h-32 rounded-md my-1"},null,8,Vt),e("button",{class:"btn absolute top-0 right-0 btn-xs",onClick:o[6]||(o[6]=D((...c)=>t.removeSelectedImage&&t.removeSelectedImage(...c),["prevent"]))},[i(a,{icon:"carbon:close",class:"text-xl text-red-500"})])])):f("",!0),e("div",Nt,[e("label",Bt,[e("div",Tt,[i(a,{icon:"solar:upload-bold-duotone",class:"text-xl"}),Et,t.imageName?(l(),n("span",Ft,p(t.imageName),1)):f("",!0)]),e("input",{id:"dropzone-file",accept:"image/*",type:"file",class:"hidden",onChange:o[7]||(o[7]=(...c)=>t.handleImageUpload&&t.handleImageUpload(...c))},null,32)])])]),e("button",{class:E(["btn mt-5 w-full",t.postClickToAutoDisableIt||t.loading||t.allIngredients.length===0||t.allInstructions.length===0?"btn-disabled":"btn-primary "]),type:"submit"},[W(" Post Recipe "),t.loading&&t.postClickToAutoDisableIt?(l(),n("span",Ht)):f("",!0)],2)])],32)])])])],64)}const Pt=ee(nt,[["render",qt]]),Yt={},Ot={class:"flex flex-col gap-2 w-26"},Qt=e("div",{class:"skeleton h-20 w-full"},null,-1),Jt=e("div",{class:"skeleton h-2 w-28"},null,-1),Zt=e("div",{class:"skeleton h-2 w-20"},null,-1),Gt=e("div",{class:"skeleton h-2 w-full"},null,-1),Kt=[Qt,Jt,Zt,Gt];function Wt(h,o){return l(),n("div",Ot,Kt)}const ke=ee(Yt,[["render",Wt]]),Xt={class:"flex justify-start items-center gap-1 my-1"},es={key:1,class:"text-xs w-5"},ts=["onClick"],Re={__name:"ItemLists",props:{selectedItem:{type:Object,required:!0},itemDesables:{type:Array},handleClick:{type:Function,required:!0}},setup(h){return(o,v)=>(l(),n("ul",null,[(l(!0),n(j,null,M(h.selectedItem,(t,x)=>(l(),n("li",{key:t.id},[e("div",Xt,[e("div",null,[h.itemDesables.some(b=>b===x)?(l(),je(_(F),{key:0,icon:"lets-icons:check-fill",class:"text-green-500 text-sm"})):(l(),n("div",es,p(x+1),1))]),e("div",{class:E(["text-xs px-2 py-1 bg-gray-400/10 flex justify-start items-center gap-2 font-medium cursor-pointer rounded-md",h.itemDesables.some(b=>b===x)?"line-through":""]),onClick:b=>h.handleClick(x)},p(t),11,ts)])]))),128))]))}},ss={props:{searchQuery:{type:String,default:""}},components:{Loading:ke,Icon:F,ItemLists:Re},setup(h,o){const{sendingRatingLoading:v,recipe:t,formatHour:x,isLoading:b,loading:a,showRecipeAllModal:c,selectedAllRecipe:u,ratings:s,setRating:d,closeModal:R,ratingsInText:S,sendRatings:P,starArray:H,filteredRecipes:B,muteRateBnt:Y,clickInstructions:O,instructionsDisables:Q,clickIngredients:J,ingredientsDisables:w}=xe(h),{collection:Z,query:G,onSnapshot:z,firestore:X}=be(),y=g([]),I=Ae({}),k=Z(X,"users"),V=G(k),K=z(V,T=>{const L=T.docs.map(A=>({id:A.id,...A.data()}));localStorage.setItem("users",JSON.stringify(L)),y.value=L,L.forEach(A=>{I[A.id]=A.status})}),te=()=>{t.value=t.value.sort((T,L)=>T.title.localeCompare(L.title))},se=()=>{t.value=t.value.sort((T,L)=>L.averageRating-T.averageRating)};return he(()=>{K()}),{loading:a,sendingRatingLoading:v,recipe:t,formatHour:x,isLoading:b,showRecipeAllModal:c,selectedAllRecipe:u,ratings:s,setRating:d,closeModal:R,ratingsInText:S,sendRatings:P,starArray:H,filteredRecipes:B,muteRateBnt:Y,usersStatus:I,clickInstructions:O,instructionsDisables:Q,clickIngredients:J,ingredientsDisables:w,sortLetters:te,sortRatings:se}}},os={class:"border rounded-2xl border-gray-400/20 shadow p-2 my-3"},ls={class:"my-2 flex justify-between items-start"},ns=e("span",{class:"font-semibold text-blue-500 text-sm py-1 px-4 bg-blue-500/10 rounded-full"},"All Recipes",-1),is={class:""},as={class:"dropdown dropdown-bottom dropdown-end"},ds={class:"tooltip tooltip-primary","data-tip":"Filter"},cs={tabindex:"0",role:"button",class:"btn rounded-full bg-transparent btn-sm px-1.5 hover:text-blue-500"},rs={tabindex:"0",class:"dropdown-content border border-gray-500/20 menu bg-base-100 rounded-box z-[1] w-40 p-2 shadow"},us=e("hr",{class:"border border-gray-500/10 my-2"},null,-1),ms={key:0,class:"w-full"},_s=e("span",{class:"text-sm px-4 py-1 w-full rounded-full bg-error/10 font-medium text-error"},"No Recipe found",-1),gs=[_s],ps={class:"flex justify-center sm:justify-start items-center"},hs={key:0,class:"grid grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 overflow-hidden py-5 px-2 sm:p-2"},bs=["onClick"],xs={class:"rounded-full absolute -top-1 -left-1 shadow-xl border border-secondary"},fs={class:"flex justify-center items-center"},vs={class:"avatar"},ys=["src"],Is={class:"bg-blue-500/10 rounded-md"},ws={key:0,class:"w-full h-24 sm:h-32 md:h-40"},ks=["src"],Rs={key:1,class:"pt-2 h-24 sm:h-32 md:h-40 flex justify-center items-center"},Cs={class:"py-2"},Us={class:"card-title text-sm sm:text-lg truncate"},Ls={class:"truncate"},$s={class:"text-xs truncate"},js={class:"sm:text-xs py-0.5 text-[10px] font-medium px-2 rounded-full text-blue-500 truncate bg-blue-500/10"},As={class:"pt-2"},Ds={key:0,class:"gap-1 text-sm font-medium flex justify-start items-center"},Ms={key:0},Ss={id:"my_modal_4",class:"modal",ref:"recipeModal"},zs={class:"modal-box px-2 py-4 no-scrollbar"},Vs={method:"dialog",class:"absolute top-0 right-0 p-2 z-10"},Ns={class:"font-bold text-3xl capitalize"},Bs={class:"text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"},Ts={key:0,class:"py-2 flex justify-start items-center"},Es={class:"px-2 text-sm"},Fs={key:1,class:"py-2 flex justify-start items-center"},Hs={class:"border border-gray-400/10 rounded-2xl shadow"},qs={class:"max-h-72 overflow-y-auto no-scrollbar mx-2 my-1"},Ps={class:"py-4"},Ys=e("p",{class:"text-xs text-primary"},"Discriptions:",-1),Os={class:"capitalize font-medium text-sm"},Qs=e("hr",{class:"border border-gray-500/10"},null,-1),Js={class:"py-4"},Zs=e("p",{class:"text-xs text-primary"},"Ingredients:",-1),Gs=e("hr",{class:"border border-gray-500/10"},null,-1),Ks={class:"py-4"},Ws=e("p",{class:"text-xs text-primary"},"Instructions:",-1),Xs={key:2,class:"flex justify-center items-center"},eo={class:"text-xs tracking-wide bg-blue-500/10 shadow text-blue-500 px-2 py-1 font-semibold rounded-full"},to={class:"flex justify-center gap-1"},so={key:0,class:"text-sm font-semibold my-2"},oo={key:1,class:"text-lg font-semibold mt-1"},lo={class:"flex justify-center items-center gap-2"},no=["disabled","onClick"],io={key:3,class:"flex justify-center items-center my-2"},ao=["disabled"],co={key:0,class:"loading loading-dots loading-xs"};function ro(h,o,v,t,x,b){const a=U("Icon"),c=U("Loading"),u=U("ItemLists");return l(),n("div",os,[e("div",ls,[ns,e("div",is,[e("div",as,[e("div",ds,[e("div",cs,[i(a,{icon:"mingcute:filter-3-fill",class:"text-xl"})])]),e("ul",rs,[e("div",{onClick:o[0]||(o[0]=s=>t.sortLetters()),class:"text-sm font-semibold px-4 py-1 hover:bg-gray-500/20 rounded-full"}," A-Z "),us,e("div",{onClick:o[1]||(o[1]=s=>t.sortRatings()),class:"text-sm font-semibold px-4 py-1 hover:bg-gray-500/20 rounded-full"}," Ratings ")])])])]),t.filteredRecipes.length===0&&!t.loading?(l(),n("div",ms,gs)):f("",!0),e("div",ps,[t.filteredRecipes?(l(),n("div",hs,[(l(!0),n(j,null,M(t.filteredRecipes,s=>(l(),n("div",{key:s.id,onClick:d=>t.showRecipeAllModal(s),class:"card sm:w-52 w-26 bg-base-100 relative rounded-md"},[e("div",xs,[e("div",fs,[e("div",vs,[e("div",{class:E([t.usersStatus[s.userId]==="online"?"ring-green-500":"ring-gray-500/50","w-5 rounded-full ring ring-offset-base-100 ring-offset-2"])},[s.userPhotoURL?(l(),n("img",{key:0,src:s.userPhotoURL,alt:"profile"},null,8,ys)):f("",!0)],2)])])]),e("figure",Is,[s.imageURL?(l(),n("div",ws,[e("img",{loading:"lazy",src:s.imageURL,alt:"recipe",class:"rounded-md object-cover object-center h-full w-full"},null,8,ks)])):(l(),n("div",Rs,[i(a,{icon:"emojione-v1:pot-of-food",class:"text-4xl"})]))]),e("div",Cs,[e("div",Us,[e("h1",Ls,p(s.title),1)]),e("p",$s,p(s.descriptions),1),e("div",js,p(s.userName),1),e("div",As,[s.averageRating?(l(),n("span",Ds,[i(a,{icon:"ic:round-star",class:"text-xl text-yellow-500"}),W(p(s.averageRating.toFixed(1)),1)])):f("",!0)])])],8,bs))),128)),t.loading?(l(),n("div",Ms,[i(c)])):f("",!0)])):f("",!0)]),e("dialog",Ss,[e("div",zs,[e("form",Vs,[e("button",{onClick:o[2]||(o[2]=(...s)=>t.closeModal&&t.closeModal(...s))},[i(a,{icon:"iconamoon:close-duotone",class:"text-2xl"})])]),e("h3",Ns,p(t.selectedAllRecipe.title),1),e("div",null,[e("span",Bs,p(t.selectedAllRecipe.userName),1)]),t.selectedAllRecipe.totalRatings>0?(l(),n("div",Ts,[(l(!0),n(j,null,M(t.starArray,(s,d)=>(l(),n("div",{key:d},[i(a,{icon:s==="full"?"ic:round-star":s==="half"?"ic:round-star-half":"ic:outline-star-border",class:"text-xl text-yellow-500"},null,8,["icon"])]))),128)),e("span",Es,p(t.selectedAllRecipe.ratingCount),1)])):(l(),n("div",Fs,[(l(),n(j,null,M(5,s=>e("div",{key:s.id},[i(a,{icon:"ic:outline-star-border",class:"text-xl"})])),64))])),e("div",Hs,[e("div",qs,[e("div",Ps,[Ys,e("p",Os,p(t.selectedAllRecipe.descriptions),1)]),Qs,e("div",Js,[Zs,i(u,{selectedItem:t.selectedAllRecipe.allIngredients,itemDesables:t.ingredientsDisables,handleClick:t.clickIngredients},null,8,["selectedItem","itemDesables","handleClick"])]),Gs,e("div",Ks,[Ws,i(u,{selectedItem:t.selectedAllRecipe.allInstructions,itemDesables:t.instructionsDisables,handleClick:t.clickInstructions},null,8,["selectedItem","itemDesables","handleClick"])])])]),t.ratingsInText?(l(),n("div",Xs,[e("span",eo,p(t.ratingsInText),1)])):f("",!0),e("div",to,[t.muteRateBnt?(l(),n("span",so,"Thank's for rating! 😊")):(l(),n("span",oo,"Rate this recipe"))]),e("div",lo,[e("div",{class:E([t.muteRateBnt?" hidden":"text-yellow-500 ","text-xl px-4 py-2 rounded-full flex gap-1"])},[(l(),n(j,null,M(5,s=>e("div",{key:s},[e("button",{disabled:t.muteRateBnt,onClick:d=>t.setRating(s,t.selectedAllRecipe.id),class:"flex justify-center items-center"},[i(a,{icon:t.ratings>=s?"ic:outline-star":"ic:outline-star-border"},null,8,["icon"])],8,no)])),64))],2)]),t.ratingsInText?(l(),n("div",io,[e("button",{disabled:t.ratings===0,class:"btn px-6 shadow rounded-full btn-primary flex justify-center items-center",onClick:o[3]||(o[3]=(...s)=>t.sendRatings&&t.sendRatings(...s))},[W(" Submit "),t.sendingRatingLoading?(l(),n("span",co)):f("",!0)],8,ao)])):f("",!0)])],512)])}const uo=ee(ss,[["render",ro]]),mo={components:{Loading:ke,Icon:F,ItemLists:Re},setup(h,o){const v=g(!0),t=g(!1),x=pe(),b=g(x.currentUser),a=fe(),{uid:c}=b.value,u=c,s=g([]),d=g({}),{clickInstructions:R,instructionsDisables:S,clickIngredients:P,ingredientsDisables:H}=xe(h),B=ve(a,"recipe"),Y=Ve(B,Be("createdAt","asc"),Ne("userId","==",u)),O=Te(Y,r=>{s.value=r.docs.map(m=>({id:m.id,...m.data()})).reverse(),v.value=!1}),Q=r=>{const m=r.seconds,N=r.nanoseconds/1e6;return new Date(m*1e3+N)},J=r=>{const m=Q(r),N=m.getFullYear().toString().slice(-2),q=m.toLocaleString("default",{month:"short"}),ne=m.getUTCDate(),ie=m.getHours()%12||12,Ue=("0"+m.getMinutes()).slice(-2),Le=m.getHours()<12?"am":"pm";return`${ne} ${q} ${N} - ${ie}:${Ue} ${Le}`};let w=g("");const Z=r=>{d.value=r,document.getElementById("my_modal_2").showModal()},G=(r,m)=>{d.value=m,w.value=r},z=()=>{document.getElementById("my_modal_delete").showModal()},X=()=>{console.log("edit recipe",w.value),console.log(d.value),document.getElementById("my_modal_edit").showModal()},y=async()=>{try{if(t.value=!0,!w.value){console.error("No recipe selected for deletion.");return}const r=_e(a,"recipe",w.value),N=(await ge(r)).data();if(await Ee(r),N&&N.imageURL){const ne=de(),ie=ce(ne,N.imageURL);await He(ie)}document.getElementById("my_modal_delete").close(),console.log("Recipe and associated image deleted successfully:",w.value)}catch(r){console.error("Error deleting recipe and associated image:",r),document.getElementById("my_modal_delete").close(),t.value=!1}finally{t.value=!1}},I=async(r,m)=>{const N=de(),q=ce(N,`images/${m}/${r.name}`);return await ye(q,r),await Ie(q)},k=async()=>{try{t.value=!0;let r=null;A.value&&(r=await I(A.value,u));const m=_e(a,"recipe",w.value),q=(await ge(m)).data();await Fe(m,{...d.value,imageURL:r||q.imageURL}),ue("my_modal_edit"),console.log("Recipe updated successfully:",w.value)}catch(r){console.error("Error updating recipe:",r),document.getElementById("my_modal_edit").close()}finally{t.value=!1}},V=g(""),K=g(""),te=()=>{d.value.allIngredients.push(V.value),console.log(d.value.allIngredients),V.value=""},se=r=>{d.value.allIngredients.splice(r,1),console.log(d.value.allIngredients)},T=()=>{d.value.allInstructions.push(K.value),console.log(d.value.allInstructions),K.value=""},L=r=>{d.value.allInstructions.splice(r,1),console.log(d.value.allInstructions)},A=g(null),oe=g(""),le=g(null),Ce=r=>{const m=r.target.files[0];m&&(A.value=m,le.value=URL.createObjectURL(m),oe.value=m.name),d.value.imageURL=A.value,console.log(m)},re=()=>{A.value=null,le.value=null,oe.value="",d.value.imageURL=null},ue=r=>{S.value=[],H.value=[],document.getElementById(r).close(),re()};return he(()=>{O()}),{loading:v,isSaveloading:t,recipe:s,formatHour:J,editShowRecipe:G,deleteShowRecipe:z,showRecipeModal:Z,selectedRecipe:d,editRecipe:X,deleteRecipe:y,saveEditRecipe:k,removeIngredient:se,addIngredient:te,editAddInstruction:K,editAddIngredient:V,removeInstruction:L,addInstruction:T,handleImageUpload:Ce,imageName:oe,imageURL:le,clearImageSelection:re,clickInstructions:R,instructionsDisables:S,clickIngredients:P,ingredientsDisables:H,closeModal:ue}}},_o={class:"border rounded-2xl border-gray-400/20 shadow p-2 my-3"},go=e("div",{class:"my-2"},[e("span",{class:"font-semibold text-sm py-1 px-4 bg-gray-500/10 rounded-full"},"Your Recipes")],-1),po={key:0},ho=e("div",{class:"my-2"},[e("span",{class:"font-semibold text-xs text-red-400 px-3 py-0.5 rounded-full"},"You don't have recipe yet.")],-1),bo=[ho],xo={class:"flex justify-center sm:justify-start items-center"},fo={key:0,class:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-3 overflow-hidden py-5 sm:p-2"},vo=["onClick"],yo={class:"dropdown dropdown-end absolute z-50 top-0 right-0 text-gray-800 shadow"},Io=["onClick"],wo={tabindex:"0",role:"button",class:"btn btn-primary rounded-none btn-xs"},ko={tabindex:"0",class:"dropdown-content z-[20] menu border border-gray-400/10 p-2 shadow bg-base-100 rounded-md w-32"},Ro=e("p",{class:"text-xs"},"Edit",-1),Co=e("p",{class:"text-xs"},"Delete",-1),Uo={class:"bg-blue-500/10 rounded-md"},Lo={key:0,class:"w-full bg-primary/10 h-24 sm:h-30 md:h-40"},$o=["src"],jo={key:1,class:"pt-2 h-24 sm:h-32 md:h-40 flex justify-center items-center"},Ao={class:"py-3"},Do={class:"card-title truncate"},Mo={class:"text-xs truncate"},So={class:"text-[10px] text-gray-500 font-medium"},zo={key:0},Vo={id:"my_modal_edit",class:"modal"},No={class:"modal-box no-scrollbar"},Bo=e("h3",{class:"font-bold text-4xl"},"Edit Recipe",-1),To={class:"py-2"},Eo=e("label",{class:"block text-sm font-medium text-primary"},"Title",-1),Fo={class:"py-2"},Ho=e("label",{class:"block text-sm font-medium text-primary"},"Description",-1),qo={class:"py-2"},Po=e("label",{class:"block text-sm font-medium text-primary"},"Ingredients",-1),Yo={class:"border border-gray-400/50 p-2 rounded-md"},Oo={class:"flex justify-start items-center gap-1"},Qo={class:"py-1"},Jo=["disabled"],Zo=e("hr",{class:"my-1 border border-gray-400/20"},null,-1),Go={class:"text-xs font-semibold"},Ko=["onUpdate:modelValue"],Wo=["onClick"],Xo={class:"py-2"},el=e("label",{class:"block text-sm font-medium text-primary"},"Instructions",-1),tl={class:"border border-gray-400/50 p-2 rounded-md"},sl={class:"flex justify-start items-center gap-1"},ol={class:"py-1"},ll=["disabled"],nl=e("hr",{class:"my-1 border border-gray-400/20"},null,-1),il={class:"text-xs font-semibold"},al=["onUpdate:modelValue"],dl=["onClick"],cl={class:"py-2"},rl=e("label",{class:"block text-sm font-medium text-primary"},"Image",-1),ul={key:0,class:"relative"},ml=["src"],_l={key:1,class:"my-1"},gl=e("span",{class:"text-sm font-medium px-4 py-1 bg-primary/10 rounded-full text-error"},"No image atm.",-1),pl=[gl],hl={class:"flex items-center justify-center w-full my-2"},bl={for:"dropzone-files",class:"flex flex-col items-center justify-center w-full border border-gray-400/50 h-20 rounded-md cursor-pointer"},xl={class:"flex flex-col items-center justify-center pt-5 pb-6"},fl=e("p",{class:"mb-2 text-sm"},[e("span",{class:"font-semibold"},"Click to upload")],-1),vl={key:0,class:"text-xs"},yl={class:"modal-action"},Il={key:0,class:"loading loading-dots loading-xs"},wl=e("form",{method:"dialog"},[e("button",{class:"btn"},"Cancel")],-1),kl={id:"my_modal_delete",class:"modal"},Rl={class:"modal-box no-scrollbar"},Cl=e("h3",{class:"font-bold text-lg"}," Are you sure you want to delete this recipe? ",-1),Ul={class:"modal-action"},Ll={key:0,class:"loading loading-dots loading-xs"},$l=e("form",{method:"dialog"},[e("button",{class:"btn"},"Cancel")],-1),jl={id:"my_modal_2",class:"modal",ref:"recipeModal"},Al={class:"modal-box px-2 py-4 no-scrollbar"},Dl={method:"dialog",class:"absolute top-0 right-0 p-2 z-10"},Ml={class:"font-bold text-3xl capitalize"},Sl={class:"border border-gray-400/10 rounded-2xl shadow"},zl={class:"max-h-72 overflow-y-auto no-scrollbar mx-2 my-1"},Vl={class:"py-4"},Nl=e("p",{class:"text-xs text-primary"},"Discriptions:",-1),Bl={class:"capitalize font-medium text-sm"},Tl=e("hr",{class:"border border-gray-500/10"},null,-1),El={class:"py-4"},Fl=e("p",{class:"text-xs text-primary"},"Ingredients:",-1),Hl=e("hr",{class:"border border-gray-500/10"},null,-1),ql={class:"py-4"},Pl=e("p",{class:"text-xs text-primary"},"Instructions:",-1);function Yl(h,o,v,t,x,b){const a=U("Icon"),c=U("Loading"),u=U("ItemLists");return l(),n("div",_o,[go,t.recipe.length===0&&!t.loading?(l(),n("div",po,bo)):f("",!0),e("div",xo,[t.recipe.length!==0?(l(),n("div",fo,[(l(!0),n(j,null,M(t.recipe,s=>(l(),n("div",{key:s.id,onClick:d=>t.showRecipeModal(s),class:"card sm:w-52 w-26 bg-base-100 relative rounded-md"},[e("div",yo,[e("button",{class:"flex justify-center items-center",onClick:D(d=>t.editShowRecipe(s.id,s),["stop"])},[e("div",wo,[i(a,{icon:"material-symbols-light:settings-outline",class:"text-xl"})])],8,Io),e("ul",ko,[e("div",{class:"btn flex justify-start text-green-500 mb-1",onClick:o[0]||(o[0]=D(d=>t.editRecipe(h.id),["stop"]))},[i(a,{icon:"material-symbols:edit"}),Ro]),e("div",{class:"btn flex justify-start text-red-500",onClick:o[1]||(o[1]=D(d=>t.deleteShowRecipe(h.id),["stop"]))},[i(a,{icon:"ant-design:delete-twotone"}),Co])])]),e("figure",Uo,[s.imageURL?(l(),n("div",Lo,[e("img",{src:s.imageURL,alt:"recipe",loading:"lazy",class:"object-cover object-center h-full w-full rounded-md"},null,8,$o)])):(l(),n("div",jo,[i(a,{icon:"emojione-v1:pot-of-food",class:"text-4xl"})]))]),e("div",Ao,[e("h2",Do,p(s.title),1),e("p",Mo,p(s.descriptions),1),e("p",So,p(t.formatHour(s.createdAt)),1)])],8,vo))),128)),t.loading?(l(),n("div",zo,[i(c)])):f("",!0)])):f("",!0),e("dialog",Vo,[e("div",No,[Bo,e("div",To,[Eo,C(e("input",{type:"text","onUpdate:modelValue":o[2]||(o[2]=s=>t.selectedRecipe.title=s),class:"input input-bordered w-full"},null,512),[[$,t.selectedRecipe.title]])]),e("div",Fo,[Ho,C(e("textarea",{class:"textarea textarea-bordered w-full","onUpdate:modelValue":o[3]||(o[3]=s=>t.selectedRecipe.descriptions=s)},null,512),[[$,t.selectedRecipe.descriptions]])]),e("div",qo,[Po,e("div",Yo,[e("div",Oo,[C(e("input",{type:"text","onUpdate:modelValue":o[4]||(o[4]=s=>t.editAddIngredient=s),class:"input my-1 input-bordered w-full capitalize"},null,512),[[$,t.editAddIngredient]]),e("div",Qo,[e("button",{disabled:t.editAddIngredient==="",class:"btn btn-primary",onClick:o[5]||(o[5]=(...s)=>t.addIngredient&&t.addIngredient(...s))}," Add ",8,Jo)])]),Zo,(l(!0),n(j,null,M(t.selectedRecipe.allIngredients,(s,d)=>(l(),n("div",{key:d,class:"flex items-center space-x-2"},[e("span",Go,p(d+1)+".",1),C(e("input",{type:"text","onUpdate:modelValue":R=>t.selectedRecipe.allIngredients[d]=R,class:"input my-1 input-bordered input-sm w-full capitalize"},null,8,Ko),[[$,t.selectedRecipe.allIngredients[d]]]),e("button",{class:"btn text-xl btn-sm px-1.5",onClick:D(R=>t.removeIngredient(d),["prevent"])},[i(a,{icon:"ri:close-line",class:"text-red-500"})],8,Wo)]))),128))])]),e("div",Xo,[el,e("div",tl,[e("div",sl,[C(e("input",{type:"text","onUpdate:modelValue":o[6]||(o[6]=s=>t.editAddInstruction=s),class:"input my-1 input-bordered w-full capitalize"},null,512),[[$,t.editAddInstruction]]),e("div",ol,[e("button",{disabled:t.editAddInstruction==="",class:"btn btn-primary",onClick:o[7]||(o[7]=(...s)=>t.addInstruction&&t.addInstruction(...s))}," Add ",8,ll)])]),nl,(l(!0),n(j,null,M(t.selectedRecipe.allInstructions,(s,d)=>(l(),n("div",{key:d,class:"flex items-center space-x-2"},[e("span",il,p(d+1)+".",1),C(e("input",{type:"text","onUpdate:modelValue":R=>t.selectedRecipe.allInstructions[d]=R,class:"input my-1 input-bordered input-sm w-full capitalize"},null,8,al),[[$,t.selectedRecipe.allInstructions[d]]]),e("button",{class:"btn btn-sm px-1.5 text-xl",onClick:D(R=>t.removeInstruction(d),["prevent"])},[i(a,{icon:"ri:close-line",class:"text-red-500"})],8,dl)]))),128))])]),e("div",cl,[rl,t.imageURL||t.selectedRecipe.imageURL?(l(),n("div",ul,[t.imageURL?(l(),n("button",{key:0,onClick:o[8]||(o[8]=(...s)=>t.clearImageSelection&&t.clearImageSelection(...s)),class:"absolute -top-1 -right-1 z-10 btn btn-xs"},[i(a,{icon:"ri:close-line",class:"text-red-500 text-xl"})])):f("",!0),t.imageURL||t.selectedRecipe.imageURL?(l(),n("img",{key:1,src:t.imageURL||t.selectedRecipe.imageURL,alt:"recipe",class:"w-min rounded-md my-1"},null,8,ml)):f("",!0)])):(l(),n("div",_l,pl)),e("div",hl,[e("label",bl,[e("div",xl,[i(a,{icon:"solar:upload-bold-duotone",class:"text-xl"}),fl,t.imageName?(l(),n("span",vl,p(t.imageName),1)):f("",!0)]),e("input",{id:"dropzone-files",accept:"image/*",type:"file",class:"hidden",onChange:o[9]||(o[9]=(...s)=>t.handleImageUpload&&t.handleImageUpload(...s))},null,32)])])]),e("div",yl,[e("button",{onClick:o[10]||(o[10]=D((...s)=>t.saveEditRecipe&&t.saveEditRecipe(...s),["stop"])),class:"btn btn-success w-32"},[W(" Update "),t.isSaveloading?(l(),n("span",Il)):f("",!0)]),wl])])]),e("dialog",kl,[e("div",Rl,[Cl,e("div",Ul,[e("button",{onClick:o[11]||(o[11]=D((...s)=>t.deleteRecipe&&t.deleteRecipe(...s),["stop"])),class:"btn btn-error w-32"},[W(" Delete "),t.isSaveloading?(l(),n("span",Ll)):f("",!0)]),$l])])]),e("dialog",jl,[e("div",Al,[e("form",Dl,[e("button",{onClick:o[12]||(o[12]=s=>t.closeModal("my_modal_2"))},[i(a,{icon:"iconamoon:close-duotone",class:"text-2xl"})])]),e("h3",Ml,p(t.selectedRecipe.title),1),e("div",Sl,[e("div",zl,[e("div",Vl,[Nl,e("p",Bl,p(t.selectedRecipe.descriptions),1)]),Tl,e("div",El,[Fl,i(u,{selectedItem:t.selectedRecipe.allIngredients,itemDesables:t.ingredientsDisables,handleClick:t.clickIngredients},null,8,["selectedItem","itemDesables","handleClick"])]),Hl,e("div",ql,[Pl,i(u,{selectedItem:t.selectedRecipe.allInstructions,itemDesables:t.instructionsDisables,handleClick:t.clickInstructions},null,8,["selectedItem","itemDesables","handleClick"])])])])])],512)])])}const Ol=ee(mo,[["render",Yl]]),Ql={class:"text-sm text-gray-400 flex justify-start gap-2 items-center w-full border border-gray-500/40 rounded-full px-2 py-1"},Jl={class:"p-1 rounded-full transition text-orange-500"},Zl=e("span",null,"Search...",-1),Gl={id:"searchModal",class:"modal"},Kl={class:"modal-box"},Wl={method:"dialog",class:"absolute top-0 right-0 p-2 z-10"},Xl={class:"my-3 flex justify-start gap-2 text-sm items-center"},en={class:"min-h-96"},tn={class:"my-2"},sn={class:"font-semibold text-xs text-gray-500 bg-gray-500/10 px-3 py-0.5 shadow-sm rounded-full"},on={key:1,class:""},ln={class:"font-medium text-sm text-red-400"},nn={id:"searchChat",class:"modal modal-bottom sm:modal-middle"},an={__name:"Search",setup(h){const o=g(""),v=()=>{document.getElementById("searchModal").showModal(),console.log("hey")},t=De(()=>o.value===""?w.value.sort((y,I)=>{const k=b(u,y.id),V=b(u,I.id);return B.value[V]-B.value[k]}):w.value.filter(y=>y.userName.toLowerCase().includes(o.value.toLowerCase()))),{Time:x,getChatId:b,yourChat:a,sendMessage:c,userId:u,newMessage:s,messages:d,isLoading:R,isSendMessageLoading:S,filteredMessages:P,selectedUser:H,timestamp:B,userPhoto:Y,userName:O,latestMessages:Q,isSender:J,storedUsers:w,file:Z,imageFile:G,handleFileUpdate:z,handleImageUpdate:X}=we();return(y,I)=>(l(),n(j,null,[e("div",{class:"my-3 flex justify-start gap-2 items-center",onClick:I[0]||(I[0]=k=>v())},[e("div",Ql,[e("div",Jl,[i(_(F),{icon:"lets-icons:search-light",class:"text-2xl"})]),Zl])]),e("dialog",Gl,[e("div",Kl,[e("form",Wl,[e("button",null,[i(_(F),{icon:"iconamoon:close-duotone",class:"text-2xl text-red-500"})])]),e("div",Xl,[C(e("input",{type:"search",autofocus:"","onUpdate:modelValue":I[1]||(I[1]=k=>o.value=k),placeholder:"Search",class:"input input-bordered input-md w-full rounded-full"},null,512),[[$,o.value]])]),e("div",en,[e("div",tn,[e("span",sn,[W("Users "),e("span",{class:E(["pl-1 text-blue-500",t.value.length===0?"text-red-500":""])},p(t.value.length),3)])]),e("div",null,[t.value.length!==0?(l(!0),n(j,{key:0},M(t.value,k=>(l(),n("div",{key:k.id},[i(qe,{user:k,yourChat:()=>_(a)("searchChat",k),formatTime:_(x),latestMessages:_(Q),getChatId:_(b),userId:_(u),isSender:_(J),timestamp:_(B)},null,8,["user","yourChat","formatTime","latestMessages","getChatId","userId","isSender","timestamp"])]))),128)):(l(),n("div",on,[e("span",ln,p(o.value)+" not found",1)]))]),e("dialog",nn,[i(Pe,{userId:_(u),messages:_(d),selectedUser:_(H),selectedFile:_(Z),selectedImage:_(G),"onUpdate:selectedFile":_(z),"onUpdate:selectedImage":_(X),userPhoto:_(Y),userName:_(O),isSendMessageLoading:_(S),isLoading:_(R),formatTime:_(x),sendMessage:_(c),filteredMessages:_(P),modelValue:_(s),"onUpdate:modelValue":I[2]||(I[2]=k=>Me(s)?s.value=k:null)},null,8,["userId","messages","selectedUser","selectedFile","selectedImage","onUpdate:selectedFile","onUpdate:selectedImage","userPhoto","userName","isSendMessageLoading","isLoading","formatTime","sendMessage","filteredMessages","modelValue"])])])])])],64))}},dn={class:"indicator"},cn={key:0,class:"indicator-item badge badge-primary text-xs font-semibold"},rn={class:"",onclick:"chatModal.showModal()"},un={id:"chatModal",class:"modal"},mn={class:"modal-box no-scrollbar"},_n=e("h3",{class:"font-bold text-xl"},"Chats",-1),gn=e("hr",{class:"border border-gray-400/10 my-1"},null,-1),pn={class:"flex justify-start items-center gap-2 mt-2 mb-4"},hn=e("form",{method:"dialog",class:"modal-backdrop"},[e("button",null,"close")],-1),bn={__name:"chats",setup(h){const{newMessageArray:o}=we();return(v,t)=>{const x=U("router-link"),b=U("router-view");return l(),n(j,null,[i(x,{to:"yourChats",class:"relative flex justify-center"},{default:ae(()=>[e("div",dn,[_(o)!==0?(l(),n("span",cn,p(_(o)),1)):f("",!0),e("button",rn,[i(_(F),{icon:"uiw:message",width:"25",height:"25",class:"hover:text-primary transition"})])])]),_:1}),e("dialog",un,[e("div",mn,[_n,gn,i(an),e("div",pn,[i(x,{to:"yourChats"},{default:ae(()=>[e("button",{class:E(["rounded-full tracking-wide",v.$route.path==="/yourChats"?"btn btn-sm bg-blue-400/10 text-blue-500 ":"hover:bg-blue-500/10 hover:text-blue-400 text-gray-400 transition px-4 py-1.5 font-semibold text-xs"])}," Home ",2)]),_:1}),i(x,{to:"chefs"},{default:ae(()=>[e("button",{class:E(["rounded-full tracking-wide",v.$route.path==="/chefs"?"btn btn-sm text-blue-500 bg-blue-400/10":"hover:bg-blue-500/10 hover:text-blue-500 text-gray-400 transition px-4 py-1.5 font-semibold text-xs"])}," Chefs ",2)]),_:1})]),e("div",null,[i(b)])]),hn])],64)}}},xn={components:{Header:lt,Icon:F,AddRecipe:Pt,AllRecipe:uo,YourRecipe:Ol,Chats:bn},setup(){return{search:g("")}}},fn={class:"p-2 flex justify-center items-center"},vn={class:"max-w-6xl min-w-2xl"},yn={class:"flex justify-end gap-2 items-center my-2"},In={class:"flex justify-start items-center gap-2 mt-5"};function wn(h,o,v,t,x,b){const a=U("Header"),c=U("AddRecipe"),u=U("Chats"),s=U("YourRecipe"),d=U("AllRecipe"),R=Se("motion-fade");return C((l(),n("div",fn,[e("div",vn,[i(a),e("div",yn,[C(e("input",{type:"search","onUpdate:modelValue":o[0]||(o[0]=S=>t.search=S),placeholder:"Search...",class:"input rounded-full input-bordered sm:w-52 md:w-96 w-full"},null,512),[[$,t.search]])]),e("div",In,[i(c),i(u)]),i(s),i(d,{searchQuery:t.search},null,8,["searchQuery"])])])),[[R]])}const Ln=ee(xn,[["render",wn]]);export{Ln as default};
