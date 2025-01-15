import{o as l,c as n,a as e,u as r,b as i,t as p,d as pe,r as g,g as he,w as me,e as W,f as D,h as C,v as A,n as H,F as j,i as M,j as v,k as $,l as je,m as Le,p as be,q as De,s as Me,x as ae,y as Se}from"./index-BRlelOvE.js";import{u as xe,I as B,g as fe}from"./firebase-C-L-0Ley.js";import{g as ye,c as ve,a as ze,q as Ve,w as Ne,o as Be,b as Te,d as _e,e as ge,f as Ee,u as Fe}from"./index.esm2017-CBaGzVmM.js";import{_ as ee,g as de,r as ce,u as Ie,a as we,d as Ze,C as Re,b as He,c as qe}from"./ChatModal-B3uQsg2-.js";const Pe="/assets/food-Cj0kP-ad.svg",Ye={class:"flex justify-between items-center border-b border-gray-400/20"},Oe={class:"flex justify-start items-center gap-1 p-2"},Qe=["src"],Je=e("h1",{class:"font-medium text-xs sm:text-sm capitalize"},"Jm's recipe",-1),Ge={class:"flex justify-center items-start gap-2"},Ke=pe('<label class="swap swap-rotate p-1.5 bg-gray-500/10 rounded-full"><input type="checkbox" class="theme-controller" value="sunset"><svg class="swap-off size-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"></path></svg><svg class="swap-on size-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"></path></svg></label>',1),We={class:"dropdown dropdown-end"},Xe={tabindex:"0",role:"button",class:"relative"},et={class:""},tt={class:"size-8"},st=["src"],ot={class:"absolute bottom-0 border border-base-100 right-0 bg-base-100 rounded-full"},lt={tabindex:"0",class:"dropdown-content z-[1] menu border border-gray-500/10 p-2 shadow-lg bg-base-100 rounded-2xl min-w-72"},nt={class:"py-2 flex justify-start items-center gap-2.5 px-2 border border-gray-500/10 shadow rounded-md"},it={class:"size-9"},at=["src"],dt={class:"font-semibold text-sm"},ct={class:"p-2 rounded-full bg-gray-500/20"},rt=e("p",{class:"text-sm font-semibold"},"Logout",-1),ut={__name:"header",setup(x){const{user:o,logout:f}=xe();return(t,h)=>(l(),n("div",Ye,[e("div",Oe,[e("div",null,[e("img",{class:"size-9 rounded-full",loading:"lazy",src:r(Pe),alt:"logo"},null,8,Qe)]),Je]),e("div",Ge,[Ke,e("div",We,[e("div",Xe,[e("div",et,[e("div",tt,[e("img",{class:"rounded-full",loading:"lazy",src:r(o).photoURL,alt:"profile"},null,8,st)])]),e("div",ot,[i(r(B),{icon:"solar:settings-bold",width:"10"})])]),e("ul",lt,[e("div",nt,[e("div",it,[e("img",{class:"rounded-full",loading:"lazy",src:r(o).photoURL,alt:"profile"},null,8,at)]),e("h1",dt,p(r(o).displayName),1)]),e("div",{class:"flex justify-start items-center gap-2.5 my-2 hover:bg-gray-500/20 rounded-md cursor-pointer p-2",onClick:h[0]||(h[0]=b=>r(f)())},[e("div",ct,[i(r(B),{icon:"solar:logout-bold-duotone",class:"text-xl"})]),rt])])])])]))}},mt={components:{Icon:B},setup(){const x=g(""),o=g(""),f=g(""),t=g([]),h=g(!1),b=g(""),d=g([]),c=g(!1),m=g(!1),s=g(null),a=g(null),k=he(),S=g(k.currentUser),q=ye(),F=de(),T=ve(q,"recipe");me(f,y=>{h.value=y.trim()!==""}),me(b,y=>{c.value=y.trim()!==""});const P=()=>{t.value.push(f.value),f.value="",console.log(t.value)},Y=()=>{d.value.push(b.value),b.value="",console.log(d.value)},O=y=>{d.value.splice(y,1)},Q=y=>{t.value.splice(y,1)},w=g(""),J=y=>{const I=y.target.files[0];I&&(s.value=I,a.value=URL.createObjectURL(I),w.value=I.name)},G=()=>{s.value=null,a.value=null,w.value=""},z=g(!1);return{title:x,descriptions:o,post:async()=>{z.value=!0;const{uid:y,displayName:I,photoURL:R}=S.value;let V="";const K=new Date;if(s.value){const U=ce(F,`images/${s.value.name}`),L=await Ie(U,s.value);V=await we(L.ref)}const E={userId:y,userName:I,userPhotoURL:R,title:x.value,descriptions:o.value,allIngredients:t.value,allInstructions:d.value,createdAt:K,imageURL:V,totalRatings:0,averageRating:0};try{m.value=!0,await ze(T,E),x.value="",o.value="",t.value=[],d.value=[],b.value="",f.value="",s.value=null,document.getElementById("my_modal_3").close(),s.value=null,w.value="",console.log("success!")}catch(U){console.error("Error sending post recipe:",U),z.value=!1}finally{m.value=!1,z.value=!1}},ingredients:f,instructions:b,allInstructions:d,canAddIntructions:c,addIngredients:P,addInstructions:Y,allIngredients:t,removeIngredients:Q,removeIstructions:O,canAddIngredient:h,loading:m,handleImageUpload:J,imageName:w,imageURL:a,removeSelectedImage:G,postClickToAutoDisableIt:z}}},_t={class:"btn btn-primary rounded-full",onclick:"my_modal_3.showModal()"},gt={class:""},pt={id:"my_modal_3",class:"modal"},ht={class:"modal-box"},bt=e("form",{method:"dialog"},[e("button",{class:"btn btn-sm btn-circle btn-ghost absolute right-2 top-2"}," ✕ ")],-1),xt=e("h3",{class:"font-bold text-lg"},"Add your recipe.",-1),ft={class:"py-3 grid grid-cols-1 gap-2"},yt={class:"form-control w-full"},vt=e("div",{class:"label"},[e("span",{class:"text-xs sm:text-base"},"Title:")],-1),It=e("span",{class:"text-xs sm:text-base"},"Descriptions:",-1),wt=e("span",{class:"text-xs sm:text-base"},"Ingredients:",-1),Rt={class:"input input-bordered pr-0 flex items-center gap-2"},kt=["disabled"],Ct={key:0},Ut={class:"grid grid-cols-1 gap-1 border border-gray-400/10 p-1 rounded-md"},At={class:"flex justify-between items-center px-2 py-0.5 bg-blue-100/10 border border-gray-500/10 rounded-md"},$t={class:"text-xs font-medium"},jt=["onUpdate:modelValue"],Lt=["onClick"],Dt=e("span",{class:"text-xs sm:text-base"},"Instructions:",-1),Mt={class:"input input-bordered pr-0 flex items-center gap-2"},St=["disabled"],zt={key:1},Vt={class:"grid grid-cols-1 gap-1 border border-gray-400/10 p-1 rounded-md"},Nt={class:"flex justify-between items-center px-2 py-0.5 bg-blue-100/10 border border-gray-500/10 rounded-md"},Bt={class:"text-xs font-medium"},Tt=["onUpdate:modelValue"],Et=["onClick"],Ft=e("p",{class:"text-xs font-medium"},"Add Image:",-1),Zt={key:0,class:"relative"},Ht=["src"],qt={class:"flex items-center justify-center w-full my-2"},Pt={for:"dropzone-file",class:"flex flex-col items-center justify-center w-full border border-gray-400/50 h-20 rounded-md cursor-pointer"},Yt={class:"flex flex-col items-center justify-center pt-5 pb-6"},Ot=e("p",{class:"mb-2 text-sm"},[e("span",{class:"font-semibold"},"Click to upload")],-1),Qt={key:0,class:"text-xs"},Jt={key:0,class:"loading loading-dots loading-xs"};function Gt(x,o,f,t,h,b){const d=$("Icon");return l(),n(j,null,[e("button",_t,[i(d,{icon:"ci:add-plus",class:"text-2xl"}),W("Add Recipes ")]),e("div",gt,[e("dialog",pt,[e("div",ht,[bt,xt,e("form",{onSubmit:o[8]||(o[8]=D((...c)=>t.post&&t.post(...c),["prevent"]))},[e("div",ft,[e("label",yt,[vt,C(e("input",{type:"text",required:"","onUpdate:modelValue":o[0]||(o[0]=c=>t.title=c),placeholder:"Adobo",class:"input input-bordered placeholder:text-xs w-full"},null,512),[[A,t.title]])]),e("div",null,[It,C(e("textarea",{class:"textarea textarea-bordered w-full placeholder:text-xs","onUpdate:modelValue":o[1]||(o[1]=c=>t.descriptions=c),required:"",placeholder:"A classic..."},null,512),[[A,t.descriptions]])]),e("div",null,[wt,e("label",Rt,[C(e("input",{"onUpdate:modelValue":o[2]||(o[2]=c=>t.ingredients=c),type:"text",class:"w-full placeholder:text-xs",placeholder:"Eggs"},null,512),[[A,t.ingredients]]),e("button",{class:H(["btn",t.canAddIngredient?"btn-primary ":"btn-disabled"]),disabled:!t.canAddIngredient,onClick:o[3]||(o[3]=D((...c)=>t.addIngredients&&t.addIngredients(...c),["prevent"]))},[i(d,{icon:"ci:add-plus",class:"text-2xl"})],10,kt)])]),t.allIngredients.length!==0?(l(),n("div",Ct,[e("div",Ut,[(l(!0),n(j,null,M(t.allIngredients,(c,m)=>(l(),n("div",{key:c.id},[e("div",At,[e("span",$t,p(m+1)+".",1),C(e("input",{type:"text","onUpdate:modelValue":s=>t.allIngredients[m]=s,class:"input my-1 mx-1 input-bordered input-sm w-full capitalize"},null,8,jt),[[A,t.allIngredients[m]]]),e("button",{class:"btn btn-sm px-1.5 text-xl",onClick:D(s=>t.removeIngredients(m),["prevent"])},[i(d,{icon:"ri:close-line",class:"text-red-500"})],8,Lt)])]))),128))])])):v("",!0),e("div",null,[Dt,e("label",Mt,[C(e("input",{type:"text","onUpdate:modelValue":o[4]||(o[4]=c=>t.instructions=c),class:"w-full placeholder:text-xs",placeholder:"Cook spaghetti until..."},null,512),[[A,t.instructions]]),e("button",{class:H(["btn",t.canAddIntructions?"btn-primary":"btn-disabled"]),disabled:!t.canAddIntructions,onClick:o[5]||(o[5]=D((...c)=>t.addInstructions&&t.addInstructions(...c),["prevent"]))},[i(d,{icon:"ci:add-plus",class:"text-2xl"})],10,St)])]),t.allInstructions.length!==0?(l(),n("div",zt,[e("div",Vt,[(l(!0),n(j,null,M(t.allInstructions,(c,m)=>(l(),n("div",{key:c.id},[e("div",Nt,[e("span",Bt,p(m+1)+".",1),C(e("input",{type:"text","onUpdate:modelValue":s=>t.allInstructions[m]=s,class:"input my-1 mx-1 input-bordered input-sm w-full capitalize"},null,8,Tt),[[A,t.allInstructions[m]]]),e("button",{class:"btn btn-sm px-1.5 text-xl",onClick:D(s=>t.removeIstructions(m),["prevent"])},[i(d,{icon:"ri:close-line",class:"text-red-500"})],8,Et)])]))),128))])])):v("",!0),e("div",null,[Ft,t.imageURL?(l(),n("div",Zt,[e("img",{src:t.imageURL,alt:"recipe image",class:"w-32 h-32 rounded-md my-1"},null,8,Ht),e("button",{class:"btn absolute top-0 right-0 btn-xs",onClick:o[6]||(o[6]=D((...c)=>t.removeSelectedImage&&t.removeSelectedImage(...c),["prevent"]))},[i(d,{icon:"carbon:close",class:"text-xl text-red-500"})])])):v("",!0),e("div",qt,[e("label",Pt,[e("div",Yt,[i(d,{icon:"solar:upload-bold-duotone",class:"text-xl"}),Ot,t.imageName?(l(),n("span",Qt,p(t.imageName),1)):v("",!0)]),e("input",{id:"dropzone-file",accept:"image/*",type:"file",class:"hidden",onChange:o[7]||(o[7]=(...c)=>t.handleImageUpload&&t.handleImageUpload(...c))},null,32)])])]),e("button",{class:H(["btn mt-5 w-full",t.postClickToAutoDisableIt||t.loading||t.allIngredients.length===0||t.allInstructions.length===0?"btn-disabled":"btn-primary "]),type:"submit"},[W(" Post Recipe "),t.loading&&t.postClickToAutoDisableIt?(l(),n("span",Jt)):v("",!0)],2)])],32)])])])],64)}const Kt=ee(mt,[["render",Gt]]),Wt={},Xt={class:"card sm:w-52 w-26 bg-base-100 relative rounded-2xl border border-gray-500/10"},es=pe('<figure class="bg-primary/10 rounded-t-2xl"><div class="pt-2 h-24 sm:h-32 md:h-40 rounded-t-2xl flex justify-center items-center"><span class="loading loading-ring text-primary loading-lg"></span></div></figure><div class="py-2 px-1"><h2 class="card-title h-8 w-20 bg-gray-500/20 rounded-full"></h2><p class="h-3 w-40 my-1 bg-gray-500/20 rounded-full"></p><p class="h-3 w-40 my-1 bg-gray-500/20 rounded-full"></p><p class="h-2 w-32 bg-gray-500/20 rounded-full"></p></div>',2),ts=[es];function ss(x,o){return l(),n("div",Xt,ts)}const ke=ee(Wt,[["render",ss]]),os={class:"flex justify-start items-center gap-1 my-1"},ls={key:1,class:"text-xs w-5"},ns=["onClick"],Ce={__name:"ItemLists",props:{selectedItem:{type:Object},itemDesables:{type:Array},handleClick:{type:Function,required:!0}},setup(x){return(o,f)=>(l(),n("ul",null,[(l(!0),n(j,null,M(x.selectedItem,(t,h)=>(l(),n("li",{key:t.id},[e("div",os,[e("div",null,[x.itemDesables.some(b=>b===h)?(l(),je(r(B),{key:0,icon:"lets-icons:check-fill",class:"text-green-500 text-sm"})):(l(),n("div",ls,p(h+1),1))]),e("div",{class:H(["text-xs px-2 py-1 bg-gray-400/10 flex justify-start items-center gap-2 font-medium cursor-pointer rounded-md",x.itemDesables.some(b=>b===h)?"line-through":""]),onClick:b=>x.handleClick(h)},p(t),11,ns)])]))),128))]))}},is={props:{searchQuery:{type:String,default:""}},components:{Loading:ke,Icon:B,ItemLists:Ce},setup(x,o){const{sendingRatingLoading:f,recipe:t,formatHour:h,isLoading:b,loading:d,showRecipeAllModal:c,selectedAllRecipe:m,ratings:s,setRating:a,closeModal:k,ratingsInText:S,sendRatings:q,starArray:F,filteredRecipes:T,muteRateBnt:P,clickInstructions:Y,instructionsDisables:O,clickIngredients:Q,ingredientsDisables:w}=fe(x),{collection:J,query:G,onSnapshot:z,firestore:X}=xe(),y=g([]),I=Le({}),R=J(X,"users"),V=G(R),K=z(V,E=>{const U=E.docs.map(L=>({id:L.id,...L.data()}));localStorage.setItem("users",JSON.stringify(U)),y.value=U,U.forEach(L=>{I[L.id]=L.status})}),te=()=>{t.value=t.value.sort((E,U)=>E.title.localeCompare(U.title))},se=()=>{t.value=t.value.sort((E,U)=>U.averageRating-E.averageRating)};return be(()=>{K()}),{loading:d,sendingRatingLoading:f,recipe:t,formatHour:h,isLoading:b,showRecipeAllModal:c,selectedAllRecipe:m,ratings:s,setRating:a,closeModal:k,ratingsInText:S,sendRatings:q,starArray:F,filteredRecipes:T,muteRateBnt:P,usersStatus:I,clickInstructions:Y,instructionsDisables:O,clickIngredients:Q,ingredientsDisables:w,sortLetters:te,sortRatings:se}}},as={class:"border rounded-2xl border-gray-400/20 shadow p-2 my-3"},ds={class:"my-2 flex justify-between items-start"},cs=e("span",{class:"font-semibold text-sm py-1 px-4"},"All Recipes",-1),rs={class:""},us={class:"dropdown dropdown-bottom dropdown-end"},ms={class:"tooltip tooltip-primary","data-tip":"Filter"},_s={tabindex:"0",role:"button",class:"btn rounded-full bg-transparent btn-sm px-1.5 hover:text-blue-500"},gs={tabindex:"0",class:"dropdown-content border border-gray-500/20 menu bg-base-100 rounded-box z-[1] w-40 p-2 shadow"},ps=e("h1",{class:"font-semibold text-sm"},"Filter",-1),hs={class:"border border-gray-500/10 rounded-xl mt-2"},bs={class:"p-2 rounded-full bg-gray-500/20"},xs=e("p",{class:"text-sm font-semibold"},"A-Z",-1),fs={class:"p-2 rounded-full bg-gray-500/20"},ys=e("p",{class:"text-sm font-semibold"},"Ratings",-1),vs={key:0,class:"w-full"},Is=e("span",{class:"text-sm px-4 py-1 w-full rounded-full bg-error/10 font-medium text-error"},"No Recipe found",-1),ws=[Is],Rs={class:"flex justify-center sm:justify-start items-center"},ks={key:0,class:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 overflow-hidden py-5 px-2 sm:p-2"},Cs=["onClick"],Us={class:"bg-blue-500/10 rounded-b-sm"},As={key:0,class:"w-full h-24 sm:h-32 md:h-40"},$s=["src"],js={key:1,class:"pt-2 h-24 sm:h-32 md:h-40 flex justify-center items-center"},Ls={class:"py-2 px-1"},Ds={class:"card-title text-sm sm:text-lg truncate"},Ms={class:"truncate"},Ss={class:"text-xs truncate"},zs={class:"sm:text-xs py-0.5 text-[10px] font-medium rounded-full text-primary truncate"},Vs={class:"pt-2"},Ns={key:0,class:"gap-1 text-sm font-medium flex justify-start items-center"},Bs={key:0,class:"flex justify-start items-center gap-2"},Ts={id:"my_modal_4",class:"modal",ref:"recipeModal"},Es={class:"modal-box px-2 py-4 no-scrollbar"},Fs={method:"dialog",class:"absolute top-0 right-0 p-2 z-10"},Zs={class:"font-bold text-3xl capitalize"},Hs={class:"text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"},qs={key:0,class:"py-2 flex justify-start items-center"},Ps={class:"px-2 text-sm"},Ys={key:1,class:"py-2 flex justify-start items-center"},Os={class:"border border-gray-400/10 rounded-2xl shadow"},Qs={class:"max-h-72 overflow-y-auto no-scrollbar mx-2 my-1"},Js={class:"py-4"},Gs=e("p",{class:"text-xs text-primary"},"Discriptions:",-1),Ks={class:"capitalize font-medium text-sm"},Ws=e("hr",{class:"border border-gray-500/10"},null,-1),Xs={class:"py-4"},eo=e("p",{class:"text-xs text-primary"},"Ingredients:",-1),to=e("hr",{class:"border border-gray-500/10"},null,-1),so={class:"py-4"},oo=e("p",{class:"text-xs text-primary"},"Instructions:",-1),lo={key:2,class:"flex justify-center items-center"},no={class:"text-xs tracking-wide bg-blue-500/10 shadow text-blue-500 px-2 py-1 font-semibold rounded-full"},io={class:"flex justify-center gap-1"},ao={key:0,class:"text-sm font-semibold my-2"},co={key:1,class:"text-lg font-semibold mt-1"},ro={class:"flex justify-center items-center gap-2"},uo=["disabled","onClick"],mo={key:3,class:"flex justify-center items-center my-2"},_o=["disabled"],go={key:0,class:"loading loading-dots loading-xs"};function po(x,o,f,t,h,b){const d=$("Icon"),c=$("Loading"),m=$("ItemLists");return l(),n("div",as,[e("div",ds,[cs,e("div",rs,[e("div",us,[e("div",ms,[e("div",_s,[i(d,{icon:"mingcute:filter-3-fill",class:"text-xl"})])]),e("ul",gs,[ps,e("div",hs,[e("div",{class:"flex justify-start items-center gap-2.5 hover:bg-gray-500/20 rounded-md cursor-pointer p-1.5",onClick:o[0]||(o[0]=s=>t.sortLetters())},[e("div",bs,[i(d,{icon:"basil:sort-solid",width:"20",height:"20",class:"text-primary"})]),xs]),e("div",{class:"flex justify-start items-center gap-2.5 hover:bg-gray-500/20 rounded-md cursor-pointer p-1.5",onClick:o[1]||(o[1]=s=>t.sortRatings())},[e("div",fs,[i(d,{icon:"material-symbols-light:star-rate",width:"20",height:"20",class:"text-primary"})]),ys])])])])])]),t.filteredRecipes.length===0&&!t.loading?(l(),n("div",vs,ws)):v("",!0),e("div",Rs,[t.filteredRecipes?(l(),n("div",ks,[(l(!0),n(j,null,M(t.filteredRecipes,s=>(l(),n("div",{key:s.id,onClick:a=>t.showRecipeAllModal(s),class:"card sm:w-52 w-26 bg-base-100 border border-gray-500/10 transition hover:border-primary/50 hover:shadow relative rounded-2xl"},[e("figure",Us,[s.imageURL?(l(),n("div",As,[e("img",{loading:"lazy",src:s.imageURL,alt:"recipe",class:"rounded-t-2xl object-cover object-center h-full w-full"},null,8,$s)])):(l(),n("div",js,[i(d,{icon:"emojione-v1:pot-of-food",class:"text-4xl"})]))]),e("div",Ls,[e("div",Ds,[e("h1",Ms,p(s.title),1)]),e("p",Ss,p(s.descriptions),1),e("div",zs,p(s.userName),1),e("div",Vs,[s.averageRating?(l(),n("span",Ns,[i(d,{icon:"ic:round-star",class:"text-xl text-yellow-500"}),W(p(s.averageRating.toFixed(1)),1)])):v("",!0)])])],8,Cs))),128)),t.loading?(l(),n("div",Bs,[i(c),i(c),i(c),i(c)])):v("",!0)])):v("",!0)]),e("dialog",Ts,[e("div",Es,[e("form",Fs,[e("button",{onClick:o[2]||(o[2]=(...s)=>t.closeModal&&t.closeModal(...s))},[i(d,{icon:"iconamoon:close-duotone",class:"text-2xl"})])]),e("h3",Zs,p(t.selectedAllRecipe.title),1),e("div",null,[e("span",Hs,p(t.selectedAllRecipe.userName),1)]),t.selectedAllRecipe.totalRatings>0?(l(),n("div",qs,[(l(!0),n(j,null,M(t.starArray,(s,a)=>(l(),n("div",{key:a},[i(d,{icon:s==="full"?"ic:round-star":s==="half"?"ic:round-star-half":"ic:outline-star-border",class:"text-xl text-yellow-500"},null,8,["icon"])]))),128)),e("span",Ps,p(t.selectedAllRecipe.ratingCount),1)])):(l(),n("div",Ys,[(l(),n(j,null,M(5,s=>e("div",{key:s.id},[i(d,{icon:"ic:outline-star-border",class:"text-xl"})])),64))])),e("div",Os,[e("div",Qs,[e("div",Js,[Gs,e("p",Ks,p(t.selectedAllRecipe.descriptions),1)]),Ws,e("div",Xs,[eo,i(m,{selectedItem:t.selectedAllRecipe.allIngredients,itemDesables:t.ingredientsDisables,handleClick:t.clickIngredients},null,8,["selectedItem","itemDesables","handleClick"])]),to,e("div",so,[oo,i(m,{selectedItem:t.selectedAllRecipe.allInstructions,itemDesables:t.instructionsDisables,handleClick:t.clickInstructions},null,8,["selectedItem","itemDesables","handleClick"])])])]),t.ratingsInText?(l(),n("div",lo,[e("span",no,p(t.ratingsInText),1)])):v("",!0),e("div",io,[t.muteRateBnt?(l(),n("span",ao,"Thank's for rating! 😊")):(l(),n("span",co,"Rate this recipe"))]),e("div",ro,[e("div",{class:H([t.muteRateBnt?" hidden":"text-yellow-500 ","text-xl px-4 py-2 rounded-full flex gap-1"])},[(l(),n(j,null,M(5,s=>e("div",{key:s},[e("button",{disabled:t.muteRateBnt,onClick:a=>t.setRating(s,t.selectedAllRecipe.id),class:"flex justify-center items-center"},[i(d,{icon:t.ratings>=s?"ic:outline-star":"ic:outline-star-border"},null,8,["icon"])],8,uo)])),64))],2)]),t.ratingsInText?(l(),n("div",mo,[e("button",{disabled:t.ratings===0,class:"btn px-6 shadow rounded-full btn-primary flex justify-center items-center",onClick:o[3]||(o[3]=(...s)=>t.sendRatings&&t.sendRatings(...s))},[W(" Submit "),t.sendingRatingLoading?(l(),n("span",go)):v("",!0)],8,_o)])):v("",!0)])],512)])}const ho=ee(is,[["render",po]]),bo={components:{Loading:ke,Icon:B,ItemLists:Ce},setup(x,o){const f=g(!0),t=g(!1),h=he(),b=g(h.currentUser),d=ye(),{uid:c}=b.value,m=c,s=g([]),a=g({}),{clickInstructions:k,instructionsDisables:S,clickIngredients:q,ingredientsDisables:F}=fe(x),T=ve(d,"recipe"),P=Ve(T,Be("createdAt","asc"),Ne("userId","==",m)),Y=Te(P,u=>{s.value=u.docs.map(_=>({id:_.id,..._.data()})).reverse(),f.value=!1}),O=u=>{const _=u.seconds,N=u.nanoseconds/1e6;return new Date(_*1e3+N)},Q=u=>{const _=O(u),N=_.getFullYear().toString().slice(-2),Z=_.toLocaleString("default",{month:"short"}),ne=_.getUTCDate(),ie=_.getHours()%12||12,Ae=("0"+_.getMinutes()).slice(-2),$e=_.getHours()<12?"am":"pm";return`${ne} ${Z} ${N} - ${ie}:${Ae} ${$e}`};let w=g("");const J=u=>{a.value=u,document.getElementById("my_modal_2").showModal()},G=(u,_)=>{a.value=_,w.value=u},z=()=>{document.getElementById("my_modal_delete").showModal()},X=()=>{console.log("edit recipe",w.value),console.log(a.value),document.getElementById("my_modal_edit").showModal()},y=async()=>{try{if(t.value=!0,!w.value){console.error("No recipe selected for deletion.");return}const u=_e(d,"recipe",w.value),N=(await ge(u)).data();if(await Ee(u),N&&N.imageURL){const ne=de(),ie=ce(ne,N.imageURL);await Ze(ie)}document.getElementById("my_modal_delete").close(),console.log("Recipe and associated image deleted successfully:",w.value)}catch(u){console.error("Error deleting recipe and associated image:",u),document.getElementById("my_modal_delete").close(),t.value=!1}finally{t.value=!1}},I=async(u,_)=>{const N=de(),Z=ce(N,`images/${_}/${u.name}`);return await Ie(Z,u),await we(Z)},R=async()=>{try{t.value=!0;let u=null;L.value&&(u=await I(L.value,m));const _=_e(d,"recipe",w.value),Z=(await ge(_)).data();await Fe(_,{...a.value,imageURL:u||Z.imageURL}),ue("my_modal_edit"),console.log("Recipe updated successfully:",w.value)}catch(u){console.error("Error updating recipe:",u),document.getElementById("my_modal_edit").close()}finally{t.value=!1}},V=g(""),K=g(""),te=()=>{a.value.allIngredients.push(V.value),console.log(a.value.allIngredients),V.value=""},se=u=>{a.value.allIngredients.splice(u,1),console.log(a.value.allIngredients)},E=()=>{a.value.allInstructions.push(K.value),console.log(a.value.allInstructions),K.value=""},U=u=>{a.value.allInstructions.splice(u,1),console.log(a.value.allInstructions)},L=g(null),oe=g(""),le=g(null),Ue=u=>{const _=u.target.files[0];_&&(L.value=_,le.value=URL.createObjectURL(_),oe.value=_.name),a.value.imageURL=L.value,console.log(_)},re=()=>{L.value=null,le.value=null,oe.value="",a.value.imageURL=null},ue=u=>{S.value=[],F.value=[],document.getElementById(u).close(),re()};return be(()=>{Y()}),{loading:f,isSaveloading:t,recipe:s,formatHour:Q,editShowRecipe:G,deleteShowRecipe:z,showRecipeModal:J,selectedRecipe:a,editRecipe:X,deleteRecipe:y,saveEditRecipe:R,removeIngredient:se,addIngredient:te,editAddInstruction:K,editAddIngredient:V,removeInstruction:U,addInstruction:E,handleImageUpload:Ue,imageName:oe,imageURL:le,clearImageSelection:re,clickInstructions:k,instructionsDisables:S,clickIngredients:q,ingredientsDisables:F,closeModal:ue}}},xo={class:"border rounded-2xl border-gray-400/20 shadow p-2 my-3"},fo=e("div",{class:"my-2"},[e("span",{class:"font-semibold text-sm py-1 px-4"},"Your Recipes")],-1),yo={key:0},vo=e("div",{class:"my-2"},[e("span",{class:"font-semibold text-xs text-red-400 px-3 py-0.5 rounded-full"},"You don't have recipe yet.")],-1),Io=[vo],wo={class:"flex justify-center sm:justify-start items-center"},Ro={key:0,class:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 overflow-hidden py-5 sm:p-2"},ko=["onClick"],Co={class:"dropdown dropdown-end absolute z-50 top-0 rounded-tr-2xl rounded-bl-2xl right-0 shadow"},Uo=["onClick"],Ao={tabindex:"0",role:"button",class:"bg-primary rounded-tr-2xl rounded-bl-2xl btn-xs"},$o={tabindex:"0",class:"dropdown-content z-[20] menu border border-gray-400/10 p-2 shadow bg-base-100 min-w-40 rounded-2xl w-32"},jo=e("h1",{class:"font-semibold text-sm"},"Action",-1),Lo={class:"border border-gray-500/10 rounded-xl mt-2"},Do={class:"p-2 rounded-full bg-gray-500/20"},Mo=e("p",{class:"text-sm font-semibold"},"Edit",-1),So={class:"p-2 rounded-full bg-gray-500/20"},zo=e("p",{class:"text-sm font-semibold"},"Delete",-1),Vo={class:"bg-blue-500/10 rounded-t-2xl"},No={key:0,class:"w-full bg-primary/10 rounded-2xl h-24 sm:h-30 md:h-40"},Bo=["src"],To={key:1,class:"pt-2 h-24 sm:h-32 md:h-40 rounded-t-2xl flex justify-center items-center"},Eo={class:"py-2 px-1"},Fo={class:"card-title truncate"},Zo={class:"text-xs truncate"},Ho={class:"text-[10px] text-gray-500 font-medium"},qo={key:1,class:"flex flex-wrap justify-center items-center gap-2"},Po={id:"my_modal_edit",class:"modal"},Yo={class:"modal-box no-scrollbar"},Oo=e("h3",{class:"font-bold text-4xl"},"Edit Recipe",-1),Qo={class:"py-2"},Jo=e("label",{class:"block text-sm font-medium text-primary"},"Title",-1),Go={class:"py-2"},Ko=e("label",{class:"block text-sm font-medium text-primary"},"Description",-1),Wo={class:"py-2"},Xo=e("label",{class:"block text-sm font-medium text-primary"},"Ingredients",-1),el={class:"border border-gray-400/50 p-2 rounded-md"},tl={class:"flex justify-start items-center gap-1"},sl={class:"py-1"},ol=["disabled"],ll=e("hr",{class:"my-1 border border-gray-400/20"},null,-1),nl={class:"text-xs font-semibold"},il=["onUpdate:modelValue"],al=["onClick"],dl={class:"py-2"},cl=e("label",{class:"block text-sm font-medium text-primary"},"Instructions",-1),rl={class:"border border-gray-400/50 p-2 rounded-md"},ul={class:"flex justify-start items-center gap-1"},ml={class:"py-1"},_l=["disabled"],gl=e("hr",{class:"my-1 border border-gray-400/20"},null,-1),pl={class:"text-xs font-semibold"},hl=["onUpdate:modelValue"],bl=["onClick"],xl={class:"py-2"},fl=e("label",{class:"block text-sm font-medium text-primary"},"Image",-1),yl={key:0,class:"relative"},vl={class:"h-52 w-auto"},Il=["src"],wl={key:1,class:"my-1"},Rl=e("span",{class:"text-sm font-medium px-4 py-1 bg-primary/10 rounded-full text-error"},"No image atm.",-1),kl=[Rl],Cl={class:"flex items-center justify-center w-full my-2"},Ul={for:"dropzone-files",class:"flex flex-col items-center justify-center w-full border border-gray-400/50 h-20 rounded-md cursor-pointer"},Al={class:"flex flex-col items-center justify-center pt-5 pb-6"},$l=e("p",{class:"mb-2 text-sm"},[e("span",{class:"font-semibold"},"Click to upload")],-1),jl={key:0,class:"text-xs"},Ll={class:"modal-action"},Dl={key:0,class:"loading loading-dots loading-xs"},Ml=e("form",{method:"dialog"},[e("button",{class:"btn"},"Cancel")],-1),Sl={id:"my_modal_delete",class:"modal"},zl={class:"modal-box no-scrollbar"},Vl=e("h3",{class:"font-bold text-lg"}," Are you sure you want to delete this recipe? ",-1),Nl={class:"modal-action"},Bl={key:0,class:"loading loading-dots loading-xs"},Tl=e("form",{method:"dialog"},[e("button",{class:"btn"},"Cancel")],-1),El={id:"my_modal_2",class:"modal",ref:"recipeModal"},Fl={class:"modal-box px-2 py-4 no-scrollbar"},Zl={method:"dialog",class:"absolute top-0 right-0 p-2 z-10"},Hl={class:"font-bold text-3xl capitalize"},ql={class:"border border-gray-400/10 rounded-2xl shadow"},Pl={class:"max-h-72 overflow-y-auto no-scrollbar mx-2 my-1"},Yl={class:"py-4"},Ol=e("p",{class:"text-xs text-primary"},"Discriptions:",-1),Ql={class:"capitalize font-medium text-sm"},Jl=e("hr",{class:"border border-gray-500/10"},null,-1),Gl={class:"py-4"},Kl=e("p",{class:"text-xs text-primary"},"Ingredients:",-1),Wl=e("hr",{class:"border border-gray-500/10"},null,-1),Xl={class:"py-4"},en=e("p",{class:"text-xs text-primary"},"Instructions:",-1);function tn(x,o,f,t,h,b){const d=$("Icon"),c=$("Loading"),m=$("ItemLists");return l(),n("div",xo,[fo,t.recipe.length===0&&!t.loading?(l(),n("div",yo,Io)):v("",!0),e("div",wo,[t.recipe.length!==0?(l(),n("div",Ro,[(l(!0),n(j,null,M(t.recipe,s=>(l(),n("div",{key:s.id,onClick:a=>t.showRecipeModal(s),class:"card sm:w-52 w-26 bg-base-100 relative rounded-2xl border border-gray-500/10 transition hover:border-primary/50 hover:shadow"},[e("div",Co,[e("button",{class:"flex justify-center items-center",onClick:D(a=>t.editShowRecipe(s.id,s),["stop"])},[e("div",Ao,[i(d,{icon:"material-symbols-light:settings-outline",class:"text-xl text-gray-800"})])],8,Uo),e("ul",$o,[jo,e("div",Lo,[e("div",{class:"flex justify-start items-center gap-2.5 hover:bg-gray-500/20 rounded-md cursor-pointer p-1.5",onClick:o[0]||(o[0]=D(a=>t.editRecipe(x.id),["stop"]))},[e("div",Do,[i(d,{icon:"material-symbols:edit",class:"text-primary",width:"20",height:"20"})]),Mo]),e("div",{class:"flex justify-start items-center gap-2.5 hover:bg-gray-500/20 rounded-md cursor-pointer p-1.5",onClick:o[1]||(o[1]=D(a=>t.deleteShowRecipe(x.id),["stop"]))},[e("div",So,[i(d,{icon:"ic:baseline-delete",class:"text-primary",width:"20",height:"20"})]),zo])])])]),e("figure",Vo,[s.imageURL?(l(),n("div",No,[e("img",{src:s.imageURL,alt:"recipe",loading:"lazy",class:"object-cover object-center h-full w-full rounded-t-2xl"},null,8,Bo)])):(l(),n("div",To,[i(d,{icon:"emojione-v1:pot-of-food",class:"text-4xl"})]))]),e("div",Eo,[e("h2",Fo,p(s.title),1),e("p",Zo,p(s.descriptions),1),e("p",Ho,p(t.formatHour(s.createdAt)),1)])],8,ko))),128))])):v("",!0),t.loading?(l(),n("div",qo,[i(c),i(c),i(c),i(c)])):v("",!0),e("dialog",Po,[e("div",Yo,[Oo,e("div",Qo,[Jo,C(e("input",{type:"text","onUpdate:modelValue":o[2]||(o[2]=s=>t.selectedRecipe.title=s),class:"input input-bordered w-full"},null,512),[[A,t.selectedRecipe.title]])]),e("div",Go,[Ko,C(e("textarea",{class:"textarea textarea-bordered w-full","onUpdate:modelValue":o[3]||(o[3]=s=>t.selectedRecipe.descriptions=s)},null,512),[[A,t.selectedRecipe.descriptions]])]),e("div",Wo,[Xo,e("div",el,[e("div",tl,[C(e("input",{type:"text","onUpdate:modelValue":o[4]||(o[4]=s=>t.editAddIngredient=s),class:"input my-1 input-bordered w-full capitalize"},null,512),[[A,t.editAddIngredient]]),e("div",sl,[e("button",{disabled:t.editAddIngredient==="",class:"btn btn-primary",onClick:o[5]||(o[5]=(...s)=>t.addIngredient&&t.addIngredient(...s))}," Add ",8,ol)])]),ll,(l(!0),n(j,null,M(t.selectedRecipe.allIngredients,(s,a)=>(l(),n("div",{key:a,class:"flex items-center space-x-2"},[e("span",nl,p(a+1)+".",1),C(e("input",{type:"text","onUpdate:modelValue":k=>t.selectedRecipe.allIngredients[a]=k,class:"input my-1 input-bordered input-sm w-full capitalize"},null,8,il),[[A,t.selectedRecipe.allIngredients[a]]]),e("button",{class:"btn text-xl btn-sm px-1.5",onClick:D(k=>t.removeIngredient(a),["prevent"])},[i(d,{icon:"ri:close-line",class:"text-red-500"})],8,al)]))),128))])]),e("div",dl,[cl,e("div",rl,[e("div",ul,[C(e("input",{type:"text","onUpdate:modelValue":o[6]||(o[6]=s=>t.editAddInstruction=s),class:"input my-1 input-bordered w-full capitalize"},null,512),[[A,t.editAddInstruction]]),e("div",ml,[e("button",{disabled:t.editAddInstruction==="",class:"btn btn-primary",onClick:o[7]||(o[7]=(...s)=>t.addInstruction&&t.addInstruction(...s))}," Add ",8,_l)])]),gl,(l(!0),n(j,null,M(t.selectedRecipe.allInstructions,(s,a)=>(l(),n("div",{key:a,class:"flex items-center space-x-2"},[e("span",pl,p(a+1)+".",1),C(e("input",{type:"text","onUpdate:modelValue":k=>t.selectedRecipe.allInstructions[a]=k,class:"input my-1 input-bordered input-sm w-full capitalize"},null,8,hl),[[A,t.selectedRecipe.allInstructions[a]]]),e("button",{class:"btn btn-sm px-1.5 text-xl",onClick:D(k=>t.removeInstruction(a),["prevent"])},[i(d,{icon:"ri:close-line",class:"text-red-500"})],8,bl)]))),128))])]),e("div",xl,[fl,t.imageURL||t.selectedRecipe.imageURL?(l(),n("div",yl,[t.imageURL?(l(),n("button",{key:0,onClick:o[8]||(o[8]=(...s)=>t.clearImageSelection&&t.clearImageSelection(...s)),class:"absolute -top-1 -right-1 z-10 btn btn-xs"},[i(d,{icon:"ri:close-line",class:"text-red-500 text-xl"})])):v("",!0),e("div",vl,[t.imageURL||t.selectedRecipe.imageURL?(l(),n("img",{key:0,src:t.imageURL||t.selectedRecipe.imageURL,alt:"recipe",loading:"lazy",class:"object-cover my-1 object-center h-full w-full rounded-md"},null,8,Il)):v("",!0)])])):(l(),n("div",wl,kl)),e("div",Cl,[e("label",Ul,[e("div",Al,[i(d,{icon:"solar:upload-bold-duotone",class:"text-xl"}),$l,t.imageName?(l(),n("span",jl,p(t.imageName),1)):v("",!0)]),e("input",{id:"dropzone-files",accept:"image/*",type:"file",class:"hidden",onChange:o[9]||(o[9]=(...s)=>t.handleImageUpload&&t.handleImageUpload(...s))},null,32)])])]),e("div",Ll,[e("button",{onClick:o[10]||(o[10]=D((...s)=>t.saveEditRecipe&&t.saveEditRecipe(...s),["stop"])),class:"btn btn-success w-32"},[W(" Update "),t.isSaveloading?(l(),n("span",Dl)):v("",!0)]),Ml])])]),e("dialog",Sl,[e("div",zl,[Vl,e("div",Nl,[e("button",{onClick:o[11]||(o[11]=D((...s)=>t.deleteRecipe&&t.deleteRecipe(...s),["stop"])),class:"btn btn-error w-32"},[W(" Delete "),t.isSaveloading?(l(),n("span",Bl)):v("",!0)]),Tl])])]),e("dialog",El,[e("div",Fl,[e("form",Zl,[e("button",{onClick:o[12]||(o[12]=s=>t.closeModal("my_modal_2"))},[i(d,{icon:"iconamoon:close-duotone",class:"text-2xl"})])]),e("h3",Hl,p(t.selectedRecipe.title),1),e("div",ql,[e("div",Pl,[e("div",Yl,[Ol,e("p",Ql,p(t.selectedRecipe.descriptions),1)]),Jl,e("div",Gl,[Kl,i(m,{selectedItem:t.selectedRecipe.allIngredients,itemDesables:t.ingredientsDisables,handleClick:t.clickIngredients},null,8,["selectedItem","itemDesables","handleClick"])]),Wl,e("div",Xl,[en,i(m,{selectedItem:t.selectedRecipe.allInstructions,itemDesables:t.instructionsDisables,handleClick:t.clickInstructions},null,8,["selectedItem","itemDesables","handleClick"])])])])])],512)])])}const sn=ee(bo,[["render",tn]]),on={class:"text-sm text-gray-400 flex justify-start gap-2 items-center w-full border border-gray-500/40 rounded-full px-2 py-1"},ln={class:"p-1 rounded-full transition text-orange-500"},nn=e("span",null,"Search...",-1),an={id:"searchModal",class:"modal"},dn={class:"modal-box"},cn={method:"dialog",class:"absolute top-0 right-0 p-2 z-10"},rn={class:"my-3 flex justify-start gap-2 text-sm items-center"},un={class:"min-h-96"},mn={class:"my-2"},_n={class:"font-semibold text-xs text-gray-500 bg-gray-500/10 px-3 py-0.5 shadow-sm rounded-full"},gn={key:1,class:""},pn={class:"font-medium text-sm text-red-400"},hn={id:"searchChat",class:"modal modal-bottom sm:modal-middle"},bn={__name:"Search",setup(x){const o=g(""),f=()=>{document.getElementById("searchModal").showModal(),console.log("hey")},t=De(()=>o.value===""?w.value.sort((y,I)=>{const R=b(m,y.id),V=b(m,I.id);return T.value[V]-T.value[R]}):w.value.filter(y=>y.userName.toLowerCase().includes(o.value.toLowerCase()))),{Time:h,getChatId:b,yourChat:d,sendMessage:c,userId:m,newMessage:s,messages:a,isLoading:k,isSendMessageLoading:S,filteredMessages:q,selectedUser:F,timestamp:T,userPhoto:P,userName:Y,latestMessages:O,isSender:Q,storedUsers:w,file:J,imageFile:G,handleFileUpdate:z,handleImageUpdate:X}=Re();return(y,I)=>(l(),n(j,null,[e("div",{class:"my-3 flex justify-start gap-2 items-center",onClick:I[0]||(I[0]=R=>f())},[e("div",on,[e("div",ln,[i(r(B),{icon:"lets-icons:search-light",class:"text-2xl"})]),nn])]),e("dialog",an,[e("div",dn,[e("form",cn,[e("button",null,[i(r(B),{icon:"iconamoon:close-duotone",class:"text-2xl text-red-500"})])]),e("div",rn,[C(e("input",{type:"search",autofocus:"","onUpdate:modelValue":I[1]||(I[1]=R=>o.value=R),placeholder:"Search",class:"input input-bordered input-md w-full rounded-full"},null,512),[[A,o.value]])]),e("div",un,[e("div",mn,[e("span",_n,[W("Users "),e("span",{class:H(["pl-1 text-blue-500",t.value.length===0?"text-red-500":""])},p(t.value.length),3)])]),e("div",null,[t.value.length!==0?(l(!0),n(j,{key:0},M(t.value,R=>(l(),n("div",{key:R.id},[i(He,{user:R,yourChat:()=>r(d)("searchChat",R),formatTime:r(h),latestMessages:r(O),getChatId:r(b),userId:r(m),isSender:r(Q),timestamp:r(T)},null,8,["user","yourChat","formatTime","latestMessages","getChatId","userId","isSender","timestamp"])]))),128)):(l(),n("div",gn,[e("span",pn,p(o.value)+" not found",1)]))]),e("dialog",hn,[i(qe,{userId:r(m),messages:r(a),selectedUser:r(F),selectedFile:r(J),selectedImage:r(G),"onUpdate:selectedFile":r(z),"onUpdate:selectedImage":r(X),userPhoto:r(P),userName:r(Y),isSendMessageLoading:r(S),isLoading:r(k),formatTime:r(h),sendMessage:r(c),filteredMessages:r(q),modelValue:r(s),"onUpdate:modelValue":I[2]||(I[2]=R=>Me(s)?s.value=R:null)},null,8,["userId","messages","selectedUser","selectedFile","selectedImage","onUpdate:selectedFile","onUpdate:selectedImage","userPhoto","userName","isSendMessageLoading","isLoading","formatTime","sendMessage","filteredMessages","modelValue"])])])])])],64))}},xn={class:"indicator z-0"},fn={key:0,class:"indicator-item badge badge-primary text-xs font-semibold"},yn={class:"",onclick:"chatModal.showModal()"},vn={id:"chatModal",class:"modal"},In={class:"modal-box no-scrollbar"},wn=e("h3",{class:"font-bold text-xl"},"Chats",-1),Rn=e("hr",{class:"border border-gray-400/10 my-1"},null,-1),kn={class:"flex justify-start items-center gap-2 mt-2 mb-4"},Cn=e("form",{method:"dialog",class:"modal-backdrop"},[e("button",null,"close")],-1),Un={__name:"chats",setup(x){const{newMessageArray:o}=Re();return(f,t)=>{const h=$("router-link"),b=$("router-view");return l(),n(j,null,[i(h,{to:"yourChats",class:"relative flex justify-center"},{default:ae(()=>[e("div",xn,[r(o)!==0?(l(),n("span",fn,p(r(o)),1)):v("",!0),e("button",yn,[i(r(B),{icon:"uiw:message",width:"25",height:"25",class:"hover:text-primary transition"})])])]),_:1}),e("dialog",vn,[e("div",In,[wn,Rn,i(bn),e("div",kn,[i(h,{to:"yourChats"},{default:ae(()=>[e("button",{class:H(["rounded-full tracking-wide",f.$route.path==="/yourChats"?"btn btn-sm bg-blue-400/10 text-blue-500 ":"hover:bg-blue-500/10 hover:text-blue-400 text-gray-400 transition px-4 py-1.5 font-semibold text-xs"])}," Home ",2)]),_:1}),i(h,{to:"chefs"},{default:ae(()=>[e("button",{class:H(["rounded-full tracking-wide",f.$route.path==="/chefs"?"btn btn-sm text-blue-500 bg-blue-400/10":"hover:bg-blue-500/10 hover:text-blue-500 text-gray-400 transition px-4 py-1.5 font-semibold text-xs"])}," Chefs ",2)]),_:1})]),e("div",null,[i(b)])]),Cn])],64)}}},An={components:{Header:ut,Icon:B,AddRecipe:Kt,AllRecipe:ho,YourRecipe:sn,Chats:Un},setup(){return{search:g("")}}},$n={class:"p-2 flex justify-center items-center"},jn={class:"max-w-4xl"},Ln={class:"flex justify-end gap-2 items-center my-2"},Dn={class:"flex justify-start items-center gap-2 mt-5"};function Mn(x,o,f,t,h,b){const d=$("Header"),c=$("AddRecipe"),m=$("Chats"),s=$("YourRecipe"),a=$("AllRecipe"),k=Se("motion-fade");return C((l(),n("div",$n,[e("div",jn,[i(d),e("div",Ln,[C(e("input",{type:"search","onUpdate:modelValue":o[0]||(o[0]=S=>t.search=S),placeholder:"Search...",class:"input rounded-full input-bordered sm:w-52 md:w-96 w-full"},null,512),[[A,t.search]])]),e("div",Dn,[i(c),i(m)]),i(s),i(a,{searchQuery:t.search},null,8,["searchQuery"])])])),[[k]])}const Bn=ee(An,[["render",Mn]]);export{Bn as default};
