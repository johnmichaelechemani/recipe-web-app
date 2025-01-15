import{o as l,c as n,a as e,b as i,t as g,d as $e,r as C,e as _,g as pe,w as me,f as K,h as D,i as R,v as $,n as E,F as j,j as z,k as f,l as je,u as b,m as Ae,p as he,q as De,s as Me,x as ae,y as Se}from"./index-EiKfNBML.js";import{_ as X,I as F,u as be,g as xe}from"./_plugin-vue_export-helper-DJJixD6Z.js";import{g as fe,c as ve,a as ze,q as Ve,w as Ne,o as Be,b as Te,d as _e,e as ge,f as Ee,u as Fe}from"./index.esm2017-IsbBChOf.js";import{g as de,r as ce,u as ye,a as Ie,d as He,C as ke,_ as qe,b as Pe}from"./ChatModal-BGB6uzAG.js";const Ye={components:{Icon:F},setup(){const{user:p,logout:o}=be();return{user:p,logout:o}}},Oe={class:"flex justify-between items-center border-b border-gray-400/20"},Qe={class:"flex justify-start items-center gap-1 p-2"},Je=["src"],Ze={key:1,class:"bg-primary text-neutral shadow rounded-full p-1"},Ge={class:"font-medium text-xs sm:text-sm capitalize hidden sm:block"},Ke=e("div",{class:"h-3 border-r-2 border-gray-400/50 ml-2"},null,-1),We={class:"dropdown"},Xe={tabindex:"0",role:"button",class:"p-2"},et={tabindex:"0",class:"dropdown-content z-[1] menu border border-gray-400/10 p-2 shadow bg-base-100 rounded-md w-32"},tt=e("p",{class:"text-xs"},"Logout",-1),st=$e('<div><label class="flex cursor-pointer gap-1 sm:gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"></path></svg><input type="checkbox" value="sunset" class="toggle theme-controller w-10 h-4"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg></label></div>',1);function ot(p,o,v,t,x,h){const a=C("Icon");return l(),n("div",Oe,[e("div",Qe,[e("div",null,[t.user.photoURL?(l(),n("img",{key:0,class:"h-8 w-8 rounded-full",src:t.user.photoURL,alt:"profile"},null,8,Je)):(l(),n("div",Ze,[i(a,{icon:"mdi:user",class:"text-2xl"})]))]),e("h1",Ge,g(t.user.displayName),1),Ke,e("div",We,[e("div",Xe,[i(a,{icon:"solar:settings-bold"})]),e("ul",et,[e("div",{class:"btn flex justify-start",onClick:o[0]||(o[0]=c=>t.logout())},[i(a,{icon:"solar:logout-bold-duotone",class:"text-xl"}),tt])])])]),st])}const lt=X(Ye,[["render",ot]]),nt={components:{Icon:F},setup(){const p=_(""),o=_(""),v=_(""),t=_([]),x=_(!1),h=_(""),a=_([]),c=_(!1),u=_(!1),s=_(null),d=_(null),k=pe(),V=_(k.currentUser),Y=fe(),H=de(),B=ve(Y,"recipe");me(v,w=>{x.value=w.trim()!==""}),me(h,w=>{c.value=w.trim()!==""});const O=()=>{t.value.push(v.value),v.value="",console.log(t.value)},Q=()=>{a.value.push(h.value),h.value="",console.log(a.value)},J=w=>{a.value.splice(w,1)},Z=w=>{t.value.splice(w,1)},I=_(""),M=w=>{const S=w.target.files[0];S&&(s.value=S,d.value=URL.createObjectURL(S),I.value=S.name)},U=()=>{s.value=null,d.value=null,I.value=""},y=_(!1);return{title:p,descriptions:o,post:async()=>{y.value=!0;const{uid:w,displayName:S,photoURL:ee}=V.value;let q="";const G=new Date;if(s.value){const L=ce(H,`images/${s.value.name}`),A=await ye(L,s.value);q=await Ie(A.ref)}const T={userId:w,userName:S,userPhotoURL:ee,title:p.value,descriptions:o.value,allIngredients:t.value,allInstructions:a.value,createdAt:G,imageURL:q,totalRatings:0,averageRating:0};try{u.value=!0,await ze(B,T),p.value="",o.value="",t.value=[],a.value=[],h.value="",v.value="",s.value=null,document.getElementById("my_modal_3").close(),s.value=null,I.value="",console.log("success!")}catch(L){console.error("Error sending post recipe:",L),y.value=!1}finally{u.value=!1,y.value=!1}},ingredients:v,instructions:h,allInstructions:a,canAddIntructions:c,addIngredients:O,addInstructions:Q,allIngredients:t,removeIngredients:Z,removeIstructions:J,canAddIngredient:x,loading:u,handleImageUpload:M,imageName:I,imageURL:d,removeSelectedImage:U,postClickToAutoDisableIt:y}}},it={class:"btn btn-primary rounded-full",onclick:"my_modal_3.showModal()"},at={class:""},dt={id:"my_modal_3",class:"modal"},ct={class:"modal-box"},rt=e("form",{method:"dialog"},[e("button",{class:"btn btn-sm btn-circle btn-ghost absolute right-2 top-2"}," ✕ ")],-1),ut=e("h3",{class:"font-bold text-lg"},"Add your recipe.",-1),mt={class:"py-3 grid grid-cols-1 gap-2"},_t={class:"form-control w-full"},gt=e("div",{class:"label"},[e("span",{class:"text-xs sm:text-base"},"Title:")],-1),pt=e("span",{class:"text-xs sm:text-base"},"Descriptions:",-1),ht=e("span",{class:"text-xs sm:text-base"},"Ingredients:",-1),bt={class:"input input-bordered pr-0 flex items-center gap-2"},xt=["disabled"],ft={key:0},vt={class:"grid grid-cols-1 gap-1 border border-gray-400/10 p-1 rounded-md"},yt={class:"flex justify-between items-center px-2 py-0.5 bg-blue-100/10 border border-gray-500/10 rounded-md"},It={class:"text-xs font-medium"},kt=["onUpdate:modelValue"],wt=["onClick"],Rt=e("span",{class:"text-xs sm:text-base"},"Instructions:",-1),Ct={class:"input input-bordered pr-0 flex items-center gap-2"},Ut=["disabled"],Lt={key:1},$t={class:"grid grid-cols-1 gap-1 border border-gray-400/10 p-1 rounded-md"},jt={class:"flex justify-between items-center px-2 py-0.5 bg-blue-100/10 border border-gray-500/10 rounded-md"},At={class:"text-xs font-medium"},Dt=["onUpdate:modelValue"],Mt=["onClick"],St=e("p",{class:"text-xs font-medium"},"Add Image:",-1),zt={key:0,class:"relative"},Vt=["src"],Nt={class:"flex items-center justify-center w-full my-2"},Bt={for:"dropzone-file",class:"flex flex-col items-center justify-center w-full border border-gray-400/50 h-20 rounded-md cursor-pointer"},Tt={class:"flex flex-col items-center justify-center pt-5 pb-6"},Et=e("p",{class:"mb-2 text-sm"},[e("span",{class:"font-semibold"},"Click to upload")],-1),Ft={key:0,class:"text-xs"},Ht={key:0,class:"loading loading-dots loading-xs"};function qt(p,o,v,t,x,h){const a=C("Icon");return l(),n(j,null,[e("button",it,[i(a,{icon:"ci:add-plus",class:"text-2xl"}),K("Add Recipes ")]),e("div",at,[e("dialog",dt,[e("div",ct,[rt,ut,e("form",{onSubmit:o[8]||(o[8]=D((...c)=>t.post&&t.post(...c),["prevent"]))},[e("div",mt,[e("label",_t,[gt,R(e("input",{type:"text",required:"","onUpdate:modelValue":o[0]||(o[0]=c=>t.title=c),placeholder:"Adobo",class:"input input-bordered placeholder:text-xs w-full"},null,512),[[$,t.title]])]),e("div",null,[pt,R(e("textarea",{class:"textarea textarea-bordered w-full placeholder:text-xs","onUpdate:modelValue":o[1]||(o[1]=c=>t.descriptions=c),required:"",placeholder:"A classic..."},null,512),[[$,t.descriptions]])]),e("div",null,[ht,e("label",bt,[R(e("input",{"onUpdate:modelValue":o[2]||(o[2]=c=>t.ingredients=c),type:"text",class:"w-full placeholder:text-xs",placeholder:"Eggs"},null,512),[[$,t.ingredients]]),e("button",{class:E(["btn",t.canAddIngredient?"btn-primary ":"btn-disabled"]),disabled:!t.canAddIngredient,onClick:o[3]||(o[3]=D((...c)=>t.addIngredients&&t.addIngredients(...c),["prevent"]))},[i(a,{icon:"ci:add-plus",class:"text-2xl"})],10,xt)])]),t.allIngredients.length!==0?(l(),n("div",ft,[e("div",vt,[(l(!0),n(j,null,z(t.allIngredients,(c,u)=>(l(),n("div",{key:c.id},[e("div",yt,[e("span",It,g(u+1)+".",1),R(e("input",{type:"text","onUpdate:modelValue":s=>t.allIngredients[u]=s,class:"input my-1 mx-1 input-bordered input-sm w-full capitalize"},null,8,kt),[[$,t.allIngredients[u]]]),e("button",{class:"btn btn-sm px-1.5 text-xl",onClick:D(s=>t.removeIngredients(u),["prevent"])},[i(a,{icon:"ri:close-line",class:"text-red-500"})],8,wt)])]))),128))])])):f("",!0),e("div",null,[Rt,e("label",Ct,[R(e("input",{type:"text","onUpdate:modelValue":o[4]||(o[4]=c=>t.instructions=c),class:"w-full placeholder:text-xs",placeholder:"Cook spaghetti until..."},null,512),[[$,t.instructions]]),e("button",{class:E(["btn",t.canAddIntructions?"btn-primary":"btn-disabled"]),disabled:!t.canAddIntructions,onClick:o[5]||(o[5]=D((...c)=>t.addInstructions&&t.addInstructions(...c),["prevent"]))},[i(a,{icon:"ci:add-plus",class:"text-2xl"})],10,Ut)])]),t.allInstructions.length!==0?(l(),n("div",Lt,[e("div",$t,[(l(!0),n(j,null,z(t.allInstructions,(c,u)=>(l(),n("div",{key:c.id},[e("div",jt,[e("span",At,g(u+1)+".",1),R(e("input",{type:"text","onUpdate:modelValue":s=>t.allInstructions[u]=s,class:"input my-1 mx-1 input-bordered input-sm w-full capitalize"},null,8,Dt),[[$,t.allInstructions[u]]]),e("button",{class:"btn btn-sm px-1.5 text-xl",onClick:D(s=>t.removeIstructions(u),["prevent"])},[i(a,{icon:"ri:close-line",class:"text-red-500"})],8,Mt)])]))),128))])])):f("",!0),e("div",null,[St,t.imageURL?(l(),n("div",zt,[e("img",{src:t.imageURL,alt:"recipe image",class:"w-32 h-32 rounded-md my-1"},null,8,Vt),e("button",{class:"btn absolute top-0 right-0 btn-xs",onClick:o[6]||(o[6]=D((...c)=>t.removeSelectedImage&&t.removeSelectedImage(...c),["prevent"]))},[i(a,{icon:"carbon:close",class:"text-xl text-red-500"})])])):f("",!0),e("div",Nt,[e("label",Bt,[e("div",Tt,[i(a,{icon:"solar:upload-bold-duotone",class:"text-xl"}),Et,t.imageName?(l(),n("span",Ft,g(t.imageName),1)):f("",!0)]),e("input",{id:"dropzone-file",accept:"image/*",type:"file",class:"hidden",onChange:o[7]||(o[7]=(...c)=>t.handleImageUpload&&t.handleImageUpload(...c))},null,32)])])]),e("button",{class:E(["btn mt-5 w-full",t.postClickToAutoDisableIt||t.loading||t.allIngredients.length===0||t.allInstructions.length===0?"btn-disabled":"btn-primary "]),type:"submit"},[K(" Post Recipe "),t.loading&&t.postClickToAutoDisableIt?(l(),n("span",Ht)):f("",!0)],2)])],32)])])])],64)}const Pt=X(nt,[["render",qt]]),Yt={},Ot={class:"flex flex-col gap-2 w-26"},Qt=e("div",{class:"skeleton h-20 w-full"},null,-1),Jt=e("div",{class:"skeleton h-2 w-28"},null,-1),Zt=e("div",{class:"skeleton h-2 w-20"},null,-1),Gt=e("div",{class:"skeleton h-2 w-full"},null,-1),Kt=[Qt,Jt,Zt,Gt];function Wt(p,o){return l(),n("div",Ot,Kt)}const we=X(Yt,[["render",Wt]]),Xt={class:"flex justify-start items-center gap-4 my-1"},es={key:1,class:"text-xs"},ts=["onClick"],Re={__name:"ItemLists",props:{selectedItem:{type:Object,required:!0},itemDesables:{type:Array},handleClick:{type:Function,required:!0}},setup(p){return(o,v)=>(l(),n("ul",null,[(l(!0),n(j,null,z(p.selectedItem,(t,x)=>(l(),n("li",{key:t.id},[e("div",Xt,[e("div",null,[p.itemDesables.some(h=>h===x)?(l(),je(b(F),{key:0,icon:"lets-icons:check-fill",class:"text-green-500 text-sm"})):(l(),n("span",es,g(x+1),1))]),e("div",{class:E(["text-xs px-2 py-1 bg-gray-400/10 flex justify-start items-center gap-2 font-medium cursor-pointer rounded-md",p.itemDesables.some(h=>h===x)?"line-through":""]),onClick:h=>p.handleClick(x)},g(t),11,ts)])]))),128))]))}},ss={props:{searchQuery:{type:String,default:""}},components:{Loading:we,Icon:F,ItemLists:Re},setup(p,o){const{sendingRatingLoading:v,recipe:t,formatHour:x,isLoading:h,loading:a,showRecipeAllModal:c,selectedAllRecipe:u,ratings:s,setRating:d,closeModal:k,ratingsInText:V,sendRatings:Y,starArray:H,filteredRecipes:B,muteRateBnt:O,clickInstructions:Q,instructionsDisables:J,clickIngredients:Z,ingredientsDisables:I}=xe(p),{collection:M,query:U,onSnapshot:y,firestore:W}=be(),w=_([]),S=Ae({}),ee=M(W,"users"),q=U(ee),G=y(q,T=>{const L=T.docs.map(A=>({id:A.id,...A.data()}));localStorage.setItem("users",JSON.stringify(L)),w.value=L,L.forEach(A=>{S[A.id]=A.status})}),te=()=>{t.value=t.value.sort((T,L)=>T.title.localeCompare(L.title))},se=()=>{t.value=t.value.sort((T,L)=>L.averageRating-T.averageRating)};return he(()=>{G()}),{loading:a,sendingRatingLoading:v,recipe:t,formatHour:x,isLoading:h,showRecipeAllModal:c,selectedAllRecipe:u,ratings:s,setRating:d,closeModal:k,ratingsInText:V,sendRatings:Y,starArray:H,filteredRecipes:B,muteRateBnt:O,usersStatus:S,clickInstructions:Q,instructionsDisables:J,clickIngredients:Z,ingredientsDisables:I,sortLetters:te,sortRatings:se}}},os={class:"border rounded-2xl border-gray-400/20 shadow p-2 my-3"},ls={class:"my-2 flex justify-between items-start"},ns=e("span",{class:"font-semibold text-blue-500 text-sm py-1 px-4 bg-blue-500/10 rounded-full"},"All Recipes",-1),is={class:""},as={class:"dropdown dropdown-bottom dropdown-end"},ds={class:"tooltip tooltip-primary","data-tip":"Filter"},cs={tabindex:"0",role:"button",class:"btn rounded-full bg-transparent btn-sm px-1.5 hover:text-blue-500"},rs={tabindex:"0",class:"dropdown-content border border-gray-500/20 menu bg-base-100 rounded-box z-[1] w-40 p-2 shadow"},us=e("hr",{class:"border border-gray-500/10 my-2"},null,-1),ms={key:0,class:"w-full"},_s=e("span",{class:"text-sm px-4 py-1 w-full rounded-full bg-error/10 font-medium text-error"},"No Recipe found",-1),gs=[_s],ps={class:"flex justify-center sm:justify-start items-center"},hs={key:0,class:"grid grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 overflow-hidden py-5 px-2 sm:p-2"},bs=["onClick"],xs={class:"rounded-full absolute -top-1 -left-1 shadow-xl border border-secondary"},fs={class:"flex justify-center items-center"},vs={class:"avatar"},ys=["src"],Is={class:"bg-blue-500/10 rounded-md"},ks={key:0,class:"w-full h-24 sm:h-32 md:h-40"},ws=["src"],Rs={key:1,class:"pt-2 h-24 sm:h-32 md:h-40 flex justify-center items-center"},Cs={class:"py-2"},Us={class:"card-title text-sm sm:text-lg truncate"},Ls={class:"text-xs truncate"},$s={class:"sm:text-xs py-0.5 text-[10px] font-medium px-2 rounded-full text-blue-500 truncate bg-blue-500/10"},js={class:"pt-2"},As={key:0,class:"gap-1 text-sm font-medium flex justify-start items-center"},Ds={key:0},Ms={id:"my_modal_4",class:"modal",ref:"recipeModal"},Ss={class:"modal-box no-scrollbar"},zs={method:"dialog",class:"absolute top-0 right-0 p-2 z-10"},Vs={class:"font-bold text-4xl capitalize"},Ns={class:"text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"},Bs={key:0,class:"py-2 flex justify-start items-center"},Ts={class:"px-2 text-sm"},Es={key:1,class:"py-2 flex justify-start items-center"},Fs=e("hr",{class:"border border-gray-500/10"},null,-1),Hs={class:"py-4"},qs=e("p",{class:"text-xs text-primary"},"Discriptions:",-1),Ps={class:"capitalize font-medium text-sm"},Ys=e("hr",{class:"border border-gray-500/10"},null,-1),Os={class:"py-4"},Qs=e("p",{class:"text-xs text-primary"},"Ingredients:",-1),Js=e("hr",{class:"border border-gray-500/10"},null,-1),Zs={class:"py-4"},Gs=e("p",{class:"text-xs text-primary"},"Instructions:",-1),Ks=e("hr",{class:"border border-gray-500/10 my-2"},null,-1),Ws={key:2,class:"flex justify-center items-center"},Xs={class:"text-xs tracking-wide bg-blue-500/10 shadow text-blue-500 px-2 py-1 font-semibold rounded-full"},eo={class:"flex justify-center gap-1"},to={key:0,class:"text-sm font-semibold mt-1"},so={key:1,class:"text-lg font-semibold mt-1"},oo={class:"flex justify-center items-center gap-2"},lo=["disabled","onClick"],no={class:"flex justify-center items-center my-2"},io=["disabled"],ao={key:0,class:"loading loading-dots loading-xs"};function co(p,o,v,t,x,h){const a=C("Icon"),c=C("Loading"),u=C("ItemLists");return l(),n("div",os,[e("div",ls,[ns,e("div",is,[e("div",as,[e("div",ds,[e("div",cs,[i(a,{icon:"mingcute:filter-3-fill",class:"text-xl"})])]),e("ul",rs,[e("div",{onClick:o[0]||(o[0]=s=>t.sortLetters()),class:"text-sm font-semibold px-4 py-1 hover:bg-gray-500/20 rounded-full"}," A-Z "),us,e("div",{onClick:o[1]||(o[1]=s=>t.sortRatings()),class:"text-sm font-semibold px-4 py-1 hover:bg-gray-500/20 rounded-full"}," Ratings ")])])])]),t.filteredRecipes.length===0&&!t.loading?(l(),n("div",ms,gs)):f("",!0),e("div",ps,[t.filteredRecipes?(l(),n("div",hs,[(l(!0),n(j,null,z(t.filteredRecipes,s=>(l(),n("div",{key:s.id,onClick:d=>t.showRecipeAllModal(s),class:"card sm:w-52 w-26 bg-base-100 relative rounded-md"},[e("div",xs,[e("div",fs,[e("div",vs,[e("div",{class:E([t.usersStatus[s.userId]==="online"?"ring-green-500":"ring-gray-500/50","w-5 rounded-full ring ring-offset-base-100 ring-offset-2"])},[s.userPhotoURL?(l(),n("img",{key:0,src:s.userPhotoURL,alt:"profile"},null,8,ys)):f("",!0)],2)])])]),e("figure",Is,[s.imageURL?(l(),n("div",ks,[e("img",{loading:"lazy",src:s.imageURL,alt:"recipe",class:"rounded-md object-cover object-center h-full w-full"},null,8,ws)])):(l(),n("div",Rs,[i(a,{icon:"emojione-v1:pot-of-food",class:"text-4xl"})]))]),e("div",Cs,[e("h2",Us,g(s.title),1),e("p",Ls,g(s.descriptions),1),e("span",$s,g(s.userName),1),e("div",js,[s.averageRating?(l(),n("span",As,[i(a,{icon:"ic:round-star",class:"text-xl text-yellow-500"}),K(g(s.averageRating.toFixed(1)),1)])):f("",!0)])])],8,bs))),128)),t.loading?(l(),n("div",Ds,[i(c)])):f("",!0)])):f("",!0)]),e("dialog",Ms,[e("div",Ss,[e("form",zs,[e("button",{onClick:o[2]||(o[2]=(...s)=>t.closeModal&&t.closeModal(...s))},[i(a,{icon:"iconamoon:close-duotone",class:"text-2xl"})])]),e("h3",Vs,g(t.selectedAllRecipe.title),1),e("div",null,[e("span",Ns,g(t.selectedAllRecipe.userName),1)]),t.selectedAllRecipe.totalRatings>0?(l(),n("div",Bs,[(l(!0),n(j,null,z(t.starArray,(s,d)=>(l(),n("div",{key:d},[i(a,{icon:s==="full"?"ic:round-star":s==="half"?"ic:round-star-half":"ic:outline-star-border",class:"text-xl text-yellow-500"},null,8,["icon"])]))),128)),e("span",Ts,g(t.selectedAllRecipe.ratingCount),1)])):(l(),n("div",Es,[(l(),n(j,null,z(5,s=>e("div",{key:s.id},[i(a,{icon:"ic:outline-star-border",class:"text-xl"})])),64))])),Fs,e("div",Hs,[qs,e("p",Ps,g(t.selectedAllRecipe.descriptions),1)]),Ys,e("div",Os,[Qs,i(u,{selectedItem:t.selectedAllRecipe.allIngredients,itemDesables:t.ingredientsDisables,handleClick:t.clickIngredients},null,8,["selectedItem","itemDesables","handleClick"])]),Js,e("div",Zs,[Gs,i(u,{selectedItem:t.selectedAllRecipe.allInstructions,itemDesables:t.instructionsDisables,handleClick:t.clickInstructions},null,8,["selectedItem","itemDesables","handleClick"])]),Ks,t.ratingsInText?(l(),n("div",Ws,[e("span",Xs,g(t.ratingsInText),1)])):f("",!0),e("div",eo,[t.muteRateBnt?(l(),n("span",to,"Thank's for rating! 😊")):(l(),n("span",so,"Rate this recipe"))]),e("div",oo,[e("div",{class:E([t.muteRateBnt?" hidden":"text-yellow-500 ","text-xl px-4 py-2 rounded-full flex gap-1"])},[(l(),n(j,null,z(5,s=>e("div",{key:s},[e("button",{disabled:t.muteRateBnt,onClick:d=>t.setRating(s,t.selectedAllRecipe.id),class:"flex justify-center items-center"},[i(a,{icon:t.ratings>=s?"ic:outline-star":"ic:outline-star-border"},null,8,["icon"])],8,lo)])),64))],2)]),e("div",no,[t.ratingsInText?(l(),n("button",{key:0,disabled:t.ratings===0,class:"btn px-6 shadow rounded-full btn-primary flex justify-center items-center",onClick:o[3]||(o[3]=(...s)=>t.sendRatings&&t.sendRatings(...s))},[K(" Submit "),t.sendingRatingLoading?(l(),n("span",ao)):f("",!0)],8,io)):f("",!0)])])],512)])}const ro=X(ss,[["render",co]]),uo={components:{Loading:we,Icon:F,ItemLists:Re},setup(p,o){const v=_(!0),t=_(!1),x=pe(),h=_(x.currentUser),a=fe(),{uid:c}=h.value,u=c,s=_([]),d=_({}),{clickInstructions:k,instructionsDisables:V,clickIngredients:Y,ingredientsDisables:H}=xe(p),B=ve(a,"recipe"),O=Ve(B,Be("createdAt","asc"),Ne("userId","==",u)),Q=Te(O,r=>{s.value=r.docs.map(m=>({id:m.id,...m.data()})).reverse(),v.value=!1}),J=r=>{const m=r.seconds,N=r.nanoseconds/1e6;return new Date(m*1e3+N)},Z=r=>{const m=J(r),N=m.getFullYear().toString().slice(-2),P=m.toLocaleString("default",{month:"short"}),ne=m.getUTCDate(),ie=m.getHours()%12||12,Ue=("0"+m.getMinutes()).slice(-2),Le=m.getHours()<12?"am":"pm";return`${ne} ${P} ${N} - ${ie}:${Ue} ${Le}`};let I=_("");const M=r=>{d.value=r,document.getElementById("my_modal_2").showModal()},U=(r,m)=>{d.value=m,I.value=r},y=()=>{document.getElementById("my_modal_delete").showModal()},W=()=>{console.log("edit recipe",I.value),console.log(d.value),document.getElementById("my_modal_edit").showModal()},w=async()=>{try{if(t.value=!0,!I.value){console.error("No recipe selected for deletion.");return}const r=_e(a,"recipe",I.value),N=(await ge(r)).data();if(await Ee(r),N&&N.imageURL){const ne=de(),ie=ce(ne,N.imageURL);await He(ie)}document.getElementById("my_modal_delete").close(),console.log("Recipe and associated image deleted successfully:",I.value)}catch(r){console.error("Error deleting recipe and associated image:",r),document.getElementById("my_modal_delete").close(),t.value=!1}finally{t.value=!1}},S=async(r,m)=>{const N=de(),P=ce(N,`images/${m}/${r.name}`);return await ye(P,r),await Ie(P)},ee=async()=>{try{t.value=!0;let r=null;A.value&&(r=await S(A.value,u));const m=_e(a,"recipe",I.value),P=(await ge(m)).data();await Fe(m,{...d.value,imageURL:r||P.imageURL}),ue("my_modal_edit"),console.log("Recipe updated successfully:",I.value)}catch(r){console.error("Error updating recipe:",r),document.getElementById("my_modal_edit").close()}finally{t.value=!1}},q=_(""),G=_(""),te=()=>{d.value.allIngredients.push(q.value),console.log(d.value.allIngredients),q.value=""},se=r=>{d.value.allIngredients.splice(r,1),console.log(d.value.allIngredients)},T=()=>{d.value.allInstructions.push(G.value),console.log(d.value.allInstructions),G.value=""},L=r=>{d.value.allInstructions.splice(r,1),console.log(d.value.allInstructions)},A=_(null),oe=_(""),le=_(null),Ce=r=>{const m=r.target.files[0];m&&(A.value=m,le.value=URL.createObjectURL(m),oe.value=m.name),d.value.imageURL=A.value,console.log(m)},re=()=>{A.value=null,le.value=null,oe.value="",d.value.imageURL=null},ue=r=>{V.value=[],H.value=[],document.getElementById(r).close(),re()};return he(()=>{Q()}),{loading:v,isSaveloading:t,recipe:s,formatHour:Z,editShowRecipe:U,deleteShowRecipe:y,showRecipeModal:M,selectedRecipe:d,editRecipe:W,deleteRecipe:w,saveEditRecipe:ee,removeIngredient:se,addIngredient:te,editAddInstruction:G,editAddIngredient:q,removeInstruction:L,addInstruction:T,handleImageUpload:Ce,imageName:oe,imageURL:le,clearImageSelection:re,clickInstructions:k,instructionsDisables:V,clickIngredients:Y,ingredientsDisables:H,closeModal:ue}}},mo={class:"border rounded-2xl border-gray-400/20 shadow p-2 my-3"},_o=e("div",{class:"my-2"},[e("span",{class:"font-semibold text-sm py-1 px-4 bg-gray-500/10 rounded-full"},"Your Recipes")],-1),go={key:0},po=e("div",{class:"my-2"},[e("span",{class:"font-semibold text-xs text-red-400 px-3 py-0.5 rounded-full"},"You don't have recipe yet.")],-1),ho=[po],bo={class:"flex justify-center sm:justify-start items-center"},xo={key:0,class:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-3 overflow-hidden py-5 sm:p-2"},fo=["onClick"],vo={class:"dropdown dropdown-end absolute z-50 top-0 right-0 text-gray-800 shadow"},yo=["onClick"],Io={tabindex:"0",role:"button",class:"btn btn-primary rounded-none btn-xs"},ko={tabindex:"0",class:"dropdown-content z-[20] menu border border-gray-400/10 p-2 shadow bg-base-100 rounded-md w-32"},wo=e("p",{class:"text-xs"},"Edit",-1),Ro=e("p",{class:"text-xs"},"Delete",-1),Co={class:"bg-blue-500/10 rounded-md"},Uo={key:0,class:"w-full bg-primary/10 h-24 sm:h-30 md:h-40"},Lo=["src"],$o={key:1,class:"pt-2 h-24 sm:h-32 md:h-40 flex justify-center items-center"},jo={class:"py-3"},Ao={class:"card-title truncate"},Do={class:"text-xs truncate"},Mo={class:"text-[10px] text-gray-500 font-medium"},So={key:0},zo={id:"my_modal_edit",class:"modal"},Vo={class:"modal-box no-scrollbar"},No=e("h3",{class:"font-bold text-4xl"},"Edit Recipe",-1),Bo={class:"py-2"},To=e("label",{class:"block text-sm font-medium text-primary"},"Title",-1),Eo={class:"py-2"},Fo=e("label",{class:"block text-sm font-medium text-primary"},"Description",-1),Ho={class:"py-2"},qo=e("label",{class:"block text-sm font-medium text-primary"},"Ingredients",-1),Po={class:"border border-gray-400/50 p-2 rounded-md"},Yo={class:"flex justify-start items-center gap-1"},Oo={class:"py-1"},Qo=["disabled"],Jo=e("hr",{class:"my-1 border border-gray-400/20"},null,-1),Zo={class:"text-xs font-semibold"},Go=["onUpdate:modelValue"],Ko=["onClick"],Wo={class:"py-2"},Xo=e("label",{class:"block text-sm font-medium text-primary"},"Instructions",-1),el={class:"border border-gray-400/50 p-2 rounded-md"},tl={class:"flex justify-start items-center gap-1"},sl={class:"py-1"},ol=["disabled"],ll=e("hr",{class:"my-1 border border-gray-400/20"},null,-1),nl={class:"text-xs font-semibold"},il=["onUpdate:modelValue"],al=["onClick"],dl={class:"py-2"},cl=e("label",{class:"block text-sm font-medium text-primary"},"Image",-1),rl={key:0,class:"relative"},ul=["src"],ml={key:1,class:"my-1"},_l=e("span",{class:"text-sm font-medium px-4 py-1 bg-primary/10 rounded-full text-error"},"No image atm.",-1),gl=[_l],pl={class:"flex items-center justify-center w-full my-2"},hl={for:"dropzone-files",class:"flex flex-col items-center justify-center w-full border border-gray-400/50 h-20 rounded-md cursor-pointer"},bl={class:"flex flex-col items-center justify-center pt-5 pb-6"},xl=e("p",{class:"mb-2 text-sm"},[e("span",{class:"font-semibold"},"Click to upload")],-1),fl={key:0,class:"text-xs"},vl={class:"modal-action"},yl={key:0,class:"loading loading-dots loading-xs"},Il=e("form",{method:"dialog"},[e("button",{class:"btn"},"Cancel")],-1),kl={id:"my_modal_delete",class:"modal"},wl={class:"modal-box no-scrollbar"},Rl=e("h3",{class:"font-bold text-lg"}," Are you sure you want to delete this recipe? ",-1),Cl={class:"modal-action"},Ul={key:0,class:"loading loading-dots loading-xs"},Ll=e("form",{method:"dialog"},[e("button",{class:"btn"},"Cancel")],-1),$l={id:"my_modal_2",class:"modal",ref:"recipeModal"},jl={class:"modal-box no-scrollbar"},Al={method:"dialog",class:"absolute top-0 right-0 p-2 z-10"},Dl={class:"font-bold text-4xl capitalize"},Ml={class:"py-4"},Sl=e("p",{class:"text-xs text-primary"},"Discriptions:",-1),zl={class:"capitalize font-medium text-sm"},Vl=e("hr",{class:"border border-gray-500/10"},null,-1),Nl={class:"py-4"},Bl=e("p",{class:"text-xs text-primary"},"Ingredients:",-1),Tl=e("hr",{class:"border border-gray-500/10"},null,-1),El={class:"py-4"},Fl=e("p",{class:"text-xs text-primary"},"Instructions:",-1);function Hl(p,o,v,t,x,h){const a=C("Icon"),c=C("Loading"),u=C("ItemLists");return l(),n("div",mo,[_o,t.recipe.length===0&&!t.loading?(l(),n("div",go,ho)):f("",!0),e("div",bo,[t.recipe.length!==0?(l(),n("div",xo,[(l(!0),n(j,null,z(t.recipe,s=>(l(),n("div",{key:s.id,onClick:d=>t.showRecipeModal(s),class:"card sm:w-52 w-26 bg-base-100 relative rounded-md"},[e("div",vo,[e("button",{class:"flex justify-center items-center",onClick:D(d=>t.editShowRecipe(s.id,s),["stop"])},[e("div",Io,[i(a,{icon:"material-symbols-light:settings-outline",class:"text-xl"})])],8,yo),e("ul",ko,[e("div",{class:"btn flex justify-start text-green-500 mb-1",onClick:o[0]||(o[0]=D(d=>t.editRecipe(p.id),["stop"]))},[i(a,{icon:"material-symbols:edit"}),wo]),e("div",{class:"btn flex justify-start text-red-500",onClick:o[1]||(o[1]=D(d=>t.deleteShowRecipe(p.id),["stop"]))},[i(a,{icon:"ant-design:delete-twotone"}),Ro])])]),e("figure",Co,[s.imageURL?(l(),n("div",Uo,[e("img",{src:s.imageURL,alt:"recipe",loading:"lazy",class:"object-cover object-center h-full w-full rounded-md"},null,8,Lo)])):(l(),n("div",$o,[i(a,{icon:"emojione-v1:pot-of-food",class:"text-4xl"})]))]),e("div",jo,[e("h2",Ao,g(s.title),1),e("p",Do,g(s.descriptions),1),e("p",Mo,g(t.formatHour(s.createdAt)),1)])],8,fo))),128)),t.loading?(l(),n("div",So,[i(c)])):f("",!0)])):f("",!0),e("dialog",zo,[e("div",Vo,[No,e("div",Bo,[To,R(e("input",{type:"text","onUpdate:modelValue":o[2]||(o[2]=s=>t.selectedRecipe.title=s),class:"input input-bordered w-full"},null,512),[[$,t.selectedRecipe.title]])]),e("div",Eo,[Fo,R(e("textarea",{class:"textarea textarea-bordered w-full","onUpdate:modelValue":o[3]||(o[3]=s=>t.selectedRecipe.descriptions=s)},null,512),[[$,t.selectedRecipe.descriptions]])]),e("div",Ho,[qo,e("div",Po,[e("div",Yo,[R(e("input",{type:"text","onUpdate:modelValue":o[4]||(o[4]=s=>t.editAddIngredient=s),class:"input my-1 input-bordered w-full capitalize"},null,512),[[$,t.editAddIngredient]]),e("div",Oo,[e("button",{disabled:t.editAddIngredient==="",class:"btn btn-primary",onClick:o[5]||(o[5]=(...s)=>t.addIngredient&&t.addIngredient(...s))}," Add ",8,Qo)])]),Jo,(l(!0),n(j,null,z(t.selectedRecipe.allIngredients,(s,d)=>(l(),n("div",{key:d,class:"flex items-center space-x-2"},[e("span",Zo,g(d+1)+".",1),R(e("input",{type:"text","onUpdate:modelValue":k=>t.selectedRecipe.allIngredients[d]=k,class:"input my-1 input-bordered input-sm w-full capitalize"},null,8,Go),[[$,t.selectedRecipe.allIngredients[d]]]),e("button",{class:"btn text-xl btn-sm px-1.5",onClick:D(k=>t.removeIngredient(d),["prevent"])},[i(a,{icon:"ri:close-line",class:"text-red-500"})],8,Ko)]))),128))])]),e("div",Wo,[Xo,e("div",el,[e("div",tl,[R(e("input",{type:"text","onUpdate:modelValue":o[6]||(o[6]=s=>t.editAddInstruction=s),class:"input my-1 input-bordered w-full capitalize"},null,512),[[$,t.editAddInstruction]]),e("div",sl,[e("button",{disabled:t.editAddInstruction==="",class:"btn btn-primary",onClick:o[7]||(o[7]=(...s)=>t.addInstruction&&t.addInstruction(...s))}," Add ",8,ol)])]),ll,(l(!0),n(j,null,z(t.selectedRecipe.allInstructions,(s,d)=>(l(),n("div",{key:d,class:"flex items-center space-x-2"},[e("span",nl,g(d+1)+".",1),R(e("input",{type:"text","onUpdate:modelValue":k=>t.selectedRecipe.allInstructions[d]=k,class:"input my-1 input-bordered input-sm w-full capitalize"},null,8,il),[[$,t.selectedRecipe.allInstructions[d]]]),e("button",{class:"btn btn-sm px-1.5 text-xl",onClick:D(k=>t.removeInstruction(d),["prevent"])},[i(a,{icon:"ri:close-line",class:"text-red-500"})],8,al)]))),128))])]),e("div",dl,[cl,t.imageURL||t.selectedRecipe.imageURL?(l(),n("div",rl,[t.imageURL?(l(),n("button",{key:0,onClick:o[8]||(o[8]=(...s)=>t.clearImageSelection&&t.clearImageSelection(...s)),class:"absolute -top-1 -right-1 z-10 btn btn-xs"},[i(a,{icon:"ri:close-line",class:"text-red-500 text-xl"})])):f("",!0),t.imageURL||t.selectedRecipe.imageURL?(l(),n("img",{key:1,src:t.imageURL||t.selectedRecipe.imageURL,alt:"recipe",class:"w-min rounded-md my-1"},null,8,ul)):f("",!0)])):(l(),n("div",ml,gl)),e("div",pl,[e("label",hl,[e("div",bl,[i(a,{icon:"solar:upload-bold-duotone",class:"text-xl"}),xl,t.imageName?(l(),n("span",fl,g(t.imageName),1)):f("",!0)]),e("input",{id:"dropzone-files",accept:"image/*",type:"file",class:"hidden",onChange:o[9]||(o[9]=(...s)=>t.handleImageUpload&&t.handleImageUpload(...s))},null,32)])])]),e("div",vl,[e("button",{onClick:o[10]||(o[10]=D((...s)=>t.saveEditRecipe&&t.saveEditRecipe(...s),["stop"])),class:"btn btn-success w-32"},[K(" Update "),t.isSaveloading?(l(),n("span",yl)):f("",!0)]),Il])])]),e("dialog",kl,[e("div",wl,[Rl,e("div",Cl,[e("button",{onClick:o[11]||(o[11]=D((...s)=>t.deleteRecipe&&t.deleteRecipe(...s),["stop"])),class:"btn btn-error w-32"},[K(" Delete "),t.isSaveloading?(l(),n("span",Ul)):f("",!0)]),Ll])])]),e("dialog",$l,[e("div",jl,[e("form",Al,[e("button",{onClick:o[12]||(o[12]=s=>t.closeModal("my_modal_2"))},[i(a,{icon:"iconamoon:close-duotone",class:"text-2xl"})])]),e("h3",Dl,g(t.selectedRecipe.title),1),e("div",Ml,[Sl,e("p",zl,g(t.selectedRecipe.descriptions),1)]),Vl,e("div",Nl,[Bl,i(u,{selectedItem:t.selectedRecipe.allIngredients,itemDesables:t.ingredientsDisables,handleClick:t.clickIngredients},null,8,["selectedItem","itemDesables","handleClick"])]),Tl,e("div",El,[Fl,i(u,{selectedItem:t.selectedRecipe.allInstructions,itemDesables:t.instructionsDisables,handleClick:t.clickInstructions},null,8,["selectedItem","itemDesables","handleClick"])])])],512)])])}const ql=X(uo,[["render",Hl]]),Pl={class:"text-sm text-gray-400 flex justify-start gap-2 items-center w-full border border-gray-500/40 rounded-full px-2 py-1"},Yl={class:"p-1 rounded-full transition text-orange-500"},Ol=e("span",null,"Search...",-1),Ql={id:"searchModal",class:"modal"},Jl={class:"modal-box"},Zl={method:"dialog",class:"absolute top-0 right-0 p-2 z-10"},Gl={class:"my-3 flex justify-start gap-2 text-sm items-center"},Kl={class:"min-h-96"},Wl={class:"my-2"},Xl={class:"font-semibold text-xs text-gray-500 bg-gray-500/10 px-3 py-0.5 shadow-sm rounded-full"},en={key:1,class:""},tn={class:"font-medium text-sm text-red-400"},sn={id:"searchChat",class:"modal modal-bottom sm:modal-middle"},on={__name:"Search",setup(p){const o=_(""),v=()=>{document.getElementById("searchModal").showModal(),console.log("hey")},t=De(()=>o.value===""?I.value.sort((M,U)=>{const y=h(u,M.id),W=h(u,U.id);return B.value[W]-B.value[y]}):I.value.filter(M=>M.userName.toLowerCase().includes(o.value.toLowerCase()))),{Time:x,getChatId:h,yourChat:a,sendMessage:c,userId:u,newMessage:s,messages:d,isLoading:k,isSendMessageLoading:V,filteredMessages:Y,selectedUser:H,timestamp:B,userPhoto:O,userName:Q,latestMessages:J,isSender:Z,storedUsers:I}=ke();return(M,U)=>(l(),n(j,null,[e("div",{class:"my-3 flex justify-start gap-2 items-center",onClick:U[0]||(U[0]=y=>v())},[e("div",Pl,[e("div",Yl,[i(b(F),{icon:"lets-icons:search-light",class:"text-2xl"})]),Ol])]),e("dialog",Ql,[e("div",Jl,[e("form",Zl,[e("button",null,[i(b(F),{icon:"iconamoon:close-duotone",class:"text-2xl text-red-500"})])]),e("div",Gl,[R(e("input",{type:"search",autofocus:"","onUpdate:modelValue":U[1]||(U[1]=y=>o.value=y),placeholder:"Search",class:"input input-bordered input-md w-full rounded-full"},null,512),[[$,o.value]])]),e("div",Kl,[e("div",Wl,[e("span",Xl,[K("Users "),e("span",{class:E(["pl-1 text-blue-500",t.value.length===0?"text-red-500":""])},g(t.value.length),3)])]),e("div",null,[t.value.length!==0?(l(!0),n(j,{key:0},z(t.value,y=>(l(),n("div",{key:y.id},[i(qe,{user:y,yourChat:()=>b(a)("searchChat",y),formatTime:b(x),latestMessages:b(J),getChatId:b(h),userId:b(u),isSender:b(Z),timestamp:b(B)},null,8,["user","yourChat","formatTime","latestMessages","getChatId","userId","isSender","timestamp"])]))),128)):(l(),n("div",en,[e("span",tn,g(o.value)+" not found",1)]))]),e("dialog",sn,[i(Pe,{userId:b(u),messages:b(d),selectedUser:b(H),userPhoto:b(O),userName:b(Q),isSendMessageLoading:b(V),isLoading:b(k),formatTime:b(x),sendMessage:b(c),filteredMessages:b(Y),modelValue:b(s),"onUpdate:modelValue":U[2]||(U[2]=y=>Me(s)?s.value=y:null)},null,8,["userId","messages","selectedUser","userPhoto","userName","isSendMessageLoading","isLoading","formatTime","sendMessage","filteredMessages","modelValue"])])])])])],64))}},ln={class:"indicator"},nn={key:0,class:"indicator-item badge badge-primary text-xs font-semibold"},an={class:"",onclick:"chatModal.showModal()"},dn={id:"chatModal",class:"modal"},cn={class:"modal-box no-scrollbar"},rn=e("h3",{class:"font-bold text-xl"},"Chats",-1),un=e("hr",{class:"border border-gray-400/10 my-1"},null,-1),mn={class:"flex justify-start items-center gap-2 mt-2 mb-4"},_n=e("form",{method:"dialog",class:"modal-backdrop"},[e("button",null,"close")],-1),gn={__name:"chats",setup(p){const{newMessageArray:o}=ke();return(v,t)=>{const x=C("router-link"),h=C("router-view");return l(),n(j,null,[i(x,{to:"yourChats",class:"relative flex justify-center"},{default:ae(()=>[e("div",ln,[b(o)!==0?(l(),n("span",nn,g(b(o)),1)):f("",!0),e("button",an,[i(b(F),{icon:"ant-design:message-filled",class:"text-3xl hover:text-blue-500 transition"})])])]),_:1}),e("dialog",dn,[e("div",cn,[rn,un,i(on),e("div",mn,[i(x,{to:"yourChats"},{default:ae(()=>[e("button",{class:E(["rounded-full tracking-wide",v.$route.path==="/yourChats"?"btn btn-sm bg-blue-400/10 text-blue-500 ":"hover:bg-blue-500/10 hover:text-blue-400 text-gray-400 transition px-4 py-1.5 font-semibold text-xs"])}," Home ",2)]),_:1}),i(x,{to:"chefs"},{default:ae(()=>[e("button",{class:E(["rounded-full tracking-wide",v.$route.path==="/chefs"?"btn btn-sm text-blue-500 bg-blue-400/10":"hover:bg-blue-500/10 hover:text-blue-500 text-gray-400 transition px-4 py-1.5 font-semibold text-xs"])}," Chefs ",2)]),_:1})]),e("div",null,[i(h)])]),_n])],64)}}},pn={components:{Header:lt,Icon:F,AddRecipe:Pt,AllRecipe:ro,YourRecipe:ql,Chats:gn},setup(){return{search:_("")}}},hn={class:"p-2 flex justify-center items-center"},bn={class:"max-w-6xl min-w-2xl"},xn={class:"flex justify-end gap-2 items-center my-2"},fn={class:"flex justify-start items-center gap-2 mt-5"};function vn(p,o,v,t,x,h){const a=C("Header"),c=C("AddRecipe"),u=C("Chats"),s=C("YourRecipe"),d=C("AllRecipe"),k=Se("motion-fade");return R((l(),n("div",hn,[e("div",bn,[i(a),e("div",xn,[R(e("input",{type:"search","onUpdate:modelValue":o[0]||(o[0]=V=>t.search=V),placeholder:"Search...",class:"input rounded-full input-bordered sm:w-52 md:w-96 w-full"},null,512),[[$,t.search]])]),e("div",fn,[i(c),i(u)]),i(s),i(d,{searchQuery:t.search},null,8,["searchQuery"])])])),[[k]])}const Rn=X(pn,[["render",vn]]);export{Rn as default};