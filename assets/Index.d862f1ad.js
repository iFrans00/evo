import{_ as T,an as A,r as B,o as l,c as r,a as e,b as t,w as s,d as c,F as x,e as v,f as p,ay as C,t as n,ar as R,as as E}from"./index.5a5725be.js";import{V as _}from"./VIcon.f961b6fb.js";import{a as q,V as F}from"./VRow.49dfc86a.js";import{V as u}from"./index.275ac5fe.js";import{V as k,a as z,b as I,c as N}from"./VCard.d16f4cec.js";import{V,a as S,b as j,c as J}from"./VList.da54f590.js";import{V as L}from"./VRating.73a8e064.js";import{V as O}from"./VCheckbox.cdecb568.js";import{V as H,a as M}from"./VApp.dd25d0e7.js";import"./VAvatar.b85a8812.js";import"./VLabel.0339d4a4.js";import"./VCheckboxBtn.90c846c6.js";import"./layout.3a2ef91c.js";import"./ssrBoot.9cceab8b.js";const W={data(){return{th:A(),chec:JSON.parse(localStorage.getItem("cart")),notification:[{icon:"mdi-cookie-alert-outline",text:"We use cookies! Something not ideal might be happening."},{icon:"mdi-cookie-alert-outline",text:"We use cookies! Something not ideal might be happening."}],items:[{icon:"mdi-theme-light-dark",title:"Light/Dark",variant:"text",color:"info",size:"small",click:this.Toheme,id:"contras"},{icon:"mdi-shopping-outline",title:"Bag",variant:"text",color:"info",link:"cart",size:"small",id:"fyp",notification:"gp"},{icon:"mdi-bell-outline",title:"Notification",variant:"text",color:"info",link:"notification",size:"small",id:"notification"},{icon:"mdi-account-outline",title:"Sign",variant:"text",color:"info",link:"sign",size:"small",id:"setting"}],pay:!1}},methods:{Toheme(){var i=document.querySelectorAll("#htm")[0];this.th.global.name=this.th.global.current.dark?"light":"dark",i.classList.contains("dark")?i.classList.remove("dark"):i.classList.add("dark")},top(){this.pay=!0,setTimeout(()=>{this.$router.push({name:"Cart"}),this.pay=!1},200)},home(){this.$router.push({name:"Home"})}},watch:{},created(){},mounted(){var i=document.querySelectorAll(".re"),h=document.querySelectorAll(".rem");i.forEach((g,f)=>{h[f].addEventListener("click",()=>{i[f].remove()})});var b=()=>{setTimeout(b,10),this.chec=JSON.parse(localStorage.getItem("cart"))};b();var y=this.$router.currentRoute.value.path.substring(0,4),d=document.querySelectorAll("#sumo");d.forEach((g,f)=>{var o=[this.chec[f]];d[f].addEventListener("click",()=>{localStorage.setItem("prev",JSON.stringify(o)),setTimeout(()=>{window.location.pathname==y+"/preview"?window.location.reload():this.$router.push(y+"/preview")},100)})})}},D=i=>(R("data-v-6f4ba673"),i=i(),E(),i),G={class:"w-full py-2 px-5 z-30 mb-6 shadow border-x-2 dark:bg-gray-900 border-sky-400 rounded-b-xl"},K={class:"flex justify-between place-items-center mx-7"},P={class:""},Q=["id"],U={class:"absolute w-1/2 xl:w-1/4 p-3 noti hidden right-0 -translate-x-3 translate-y-1 rounded-xl"},X={key:0,class:"absolute right-1/3 hidden xl:block translate-x-4 md:-translate-x-6 -translate-y-3 cone rotate-180"},Y={key:1,class:"absolute right-1/3 hidden xl:block -translate-x-1 md:translate-x-5 -translate-y-3 cone rotate-180"},Z={key:0,class:"w-full gap-1 grid max-h-96 overflow-y-auto"},$={class:"flex gap-3 place-items-center w-full"},ee={type:"button",class:"rem absolute rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 right-3 -translate-y-5 hover:bg-gray-100"},te={key:1,class:"w-full gap-1 grid max-h-96 overflow-y-auto"},oe={class:"text-overline hover:underline font-weight-medium"},se={class:"flex gap-1 -mt-2"},le={class:""},ae=["src"],ie={class:"font-light grid w-full place-items-center"},ne={class:"flex place-items-center text-xs"},re={class:"text-grey"},ce={class:"h-full font-weight-light text-overline grid place-items-center gap-4 grid-flow-col"},de={class:"text-xs flex place-items-center"},ue={class:"Font-semibold text-xs"},_e={class:"flex gap-1 md:gap-3 hidden"},he={class:""},fe={class:"cart"},me={class:"absolute hidden bg-white p-5 w-1/4 mt-5 shadow-xl car right-0 rounded-xl"},pe=D(()=>e("div",{class:"absolute left-1/2 top-0 -translate-y-4 -translate-x-1 cone rotate-180"},null,-1)),ge={class:"p-3 border-2 grid place-items-center shadow-xl gap-1 border-sky-400 border-dashed"},xe={class:"w-full gap-1 grid max-h-96 overflow-y-auto",id:"list"},ve={class:"text-overline font-weight-medium"},be={class:"flex gap-1 -mt-2"},ye={class:""},ke=["src"],we={class:"font-light grid w-full place-items-center"},Ve={class:"flex place-items-center text-xs"},Se={class:"text-grey"},Ce={class:"h-full font-weight-light text-overline grid place-items-center gap-4 grid-flow-col"},ze={class:"text-xs flex place-items-center"},Ie={class:"Font-semibold text-xs"},Ne={class:"text-xs translate-y-2"},Le={class:""},Te={class:"text-2xl text-sky-400 font-semibold mt-7 w-full"},Be={class:"notif"},De={class:"absolute w-1/4 p-3 noti hidden right-0 -translate-x-3 translate-y-1 rounded-xl"},Ae=D(()=>e("div",{class:"absolute right-16 -translate-x-4 -translate-y-3 cone rotate-180"},null,-1)),Re={class:"grid gap-1"},Ee={class:"flex gap-3 place-items-center w-full"},qe={type:"button",class:"rem absolute rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 right-3 -translate-y-5 hover:bg-gray-100"},Fe={class:""},je={class:"absolute w-1/6 xo -translate-x-40 hidden rounded-xl"};function Je(i,h,b,y,d,g){const f=B("v-card-action");return l(),r("div",G,[e("div",K,[e("div",{class:"text-h5 font-weight-medium flex text-sky-500",onClick:h[0]||(h[0]=(...o)=>g.home&&g.home(...o))},[t(_,{class:""},{default:s(()=>[c("mdi-alpha-e-box-outline")]),_:1}),t(_,{class:"-translate-x-2"},{default:s(()=>[c("mdi-alpha-v-box-outline")]),_:1}),t(_,{class:"-translate-x-4"},{default:s(()=>[c("mdi-alpha-o-box-outline")]),_:1})]),e("div",P,[t(F,{"no-gutters":""},{default:s(()=>[(l(!0),r(x,null,v(d.items,(o,m)=>(l(),p(q,{cols:"auto",class:"pa-1",key:m,id:o.id},{default:s(()=>[e("div",{id:o.notification,class:"absolute p-1 rounded-full translate-x-6 translate-y-1 hidden bg-red-500"},null,8,Q),t(u,{icon:o.icon,color:o.color,title:o.title,to:o.link,variant:"outlined",size:o.size,onClick:o.click},null,8,["icon","color","title","to","size","onClick"]),e("div",U,[o.title=="Bag"?(l(),r("div",X)):o.title=="Notification"?(l(),r("div",Y)):C("",!0),t(k,{class:"pa-2 overflow-x-hidden"},{default:s(()=>[t(V,null,{default:s(()=>[t(S,{class:"capitalize font-mono pa-2 border-b-2 mb-2 border-sky-400"},{default:s(()=>[c(n(o.title),1)]),_:2},1024),o.title=="Notification"?(l(),r("div",Z,[(l(!0),r(x,null,v(d.notification,(a,w)=>(l(),r("div",{class:"flex items-center re px-5 py-4 mb-2 text-blue-500 border-2 text-xs border-blue-500 rounded-md jusitfy-between",key:w},[e("div",$,[t(_,{size:"large"},{default:s(()=>[c(n(a.icon),1)]),_:2},1024),e("span",null,n(a.text),1)]),e("button",ee,[t(_,{icon:"mdi-close-circle-outline"})])]))),128))])):o.title=="Bag"?(l(),r("div",te,[(l(!0),r(x,null,v(d.chec,(a,w)=>(l(),p(k,{key:w},{default:s(()=>[t(z,{class:"border-t-4 border-sky-400",id:"sumo"},{default:s(()=>[e("div",oe,n(a.title.length>=99?a.title.substring(0,16)+"...":a.title),1)]),_:2},1024),t(I,{class:"border-b-2 rounded-b"},{default:s(()=>[e("div",se,[e("div",le,[e("img",{src:a.pic,class:"h-14 cover rounded-full"},null,8,ae)]),e("div",ie,[e("div",ne,[t(L,{"model-value":a.rating>=5?a.rating/2:a.rating,color:"amber",density:"compact","half-increments":"",readonly:"",size:"small"},null,8,["model-value"]),e("div",re,n(a.rating>=5?a.rating/2:a.rating),1)]),e("div",ce,[e("div",de,[e("span",null,n(Number(a.item)>=9?9+"+":Number(a.item)),1)]),e("div",ue,n(a.cash.toLocaleString("id-ID",{style:"currency",currency:"IDR"})),1)])])])]),_:2},1024)]),_:2},1024))),128))])):C("",!0)]),_:2},1024),t(N,{class:"w-full"},{default:s(()=>[t(u,{class:"w-full font-mono",color:"info",loading:d.pay,onClick:g.top},{default:s(()=>[c(" see all ")]),_:1},8,["loading","onClick"])]),_:1})]),_:2},1024)])]),_:2},1032,["id"]))),128))]),_:1})]),e("div",_e,[e("div",he,[t(u,{icon:"mdi-theme-light-dark",color:"info",title:"Light/Dark",variant:"text",onClick:g.Toheme},null,8,["onClick"])]),e("div",fe,[t(u,{icon:"mdi-shopping-outline",color:"info",title:"Bag",size:"small"}),e("div",me,[pe,e("div",ge,[e("div",xe,[(l(!0),r(x,null,v(d.chec,(o,m)=>(l(),p(k,{key:m},{default:s(()=>[t(z,null,{default:s(()=>[e("div",ve,n(o.title.length>=99?o.title.substring(0,16)+"...":o.title),1)]),_:2},1024),t(I,null,{default:s(()=>[e("div",be,[e("div",ye,[e("img",{src:o.pic,class:"h-14 cover rounded-full"},null,8,ke)]),e("div",we,[e("div",Ve,[t(L,{"model-value":o.rating>=5?o.rating/2:o.rating,color:"amber",density:"compact","half-increments":"",readonly:"",size:"small"},null,8,["model-value"]),e("div",Se,n(o.rating>=5?o.rating/2:o.rating),1)]),e("div",Ce,[e("div",ze,[e("span",null,n(Number(o.item)>=9?9+"+":Number(o.item)),1)]),e("div",Ie,n(o.cash.toLocaleString("id-ID",{style:"currency",currency:"IDR"})),1)])])])]),_:2},1024),t(f,{class:"grid grid-flow-col place-items-center -mt-8 text-xs-caption pb-1 border-b"},{default:s(()=>[e("div",Ne,[t(O,{id:"select",color:"info"})]),e("div",Le,[t(u,{size:"small",color:"error",variant:"text",class:"text-overline font-weight-light remove"},{default:s(()=>[c(" Remove ")]),_:1})])]),_:1})]),_:2},1024))),128))]),e("div",Te,[t(u,{class:"w-full",color:"info",loading:i.load,onClick:i.lop},{default:s(()=>[c(" checkout ")]),_:1},8,["loading","onClick"])])])])]),e("div",Be,[t(u,{icon:"mdi-bell-outline",color:"info",class:"text-white",title:"Notification",size:"small"}),e("div",De,[Ae,t(k,{class:"pa-2 overflow-x-hidden"},{default:s(()=>[t(V,null,{default:s(()=>[t(S,{class:"capitalize font-mono pa-2 border-b-2 mb-2 border-sky-400"},{default:s(()=>[c("Notification")]),_:1}),e("div",Re,[(l(!0),r(x,null,v(d.notification,(o,m)=>(l(),r("div",{class:"flex items-center re px-5 py-4 mb-2 text-blue-500 border-2 text-xs border-blue-500 rounded-md jusitfy-between",key:m},[e("div",Ee,[t(_,{size:"large"},{default:s(()=>[c(n(o.icon),1)]),_:2},1024),e("span",null,n(o.text),1)]),e("button",qe,[t(_,{icon:"mdi-close-circle-outline"})])]))),128))])]),_:1}),t(N,{class:"w-full"},{default:s(()=>[t(u,{class:"w-full font-mono",color:"info"},{default:s(()=>[c(" see all ")]),_:1})]),_:1})]),_:1})])]),e("div",Fe,[t(u,{icon:"mdi-account-outline",color:"info",title:"Sign",size:"small"}),e("div",je,[t(k,{class:"pa-2"},{default:s(()=>[t(V,null,{default:s(()=>[t(S,{class:"uppercase pa-2 border-b-2 border-sky-400"},{default:s(()=>[c("Settings")]),_:1}),(l(!0),r(x,null,v(d.items,(o,m)=>(l(),p(j,{key:m,value:o,"active-color":"primary",rounded:"shaped"},{prepend:s(()=>[t(_,{icon:o.icon},null,8,["icon"])]),default:s(()=>[t(J,{textContent:n(o.text)},null,8,["textContent"])]),_:2},1032,["value"]))),128))]),_:1})]),_:1})])])])])])}const Oe=T(W,[["render",Je],["__scopeId","data-v-6f4ba673"]]),He={__name:"View",setup(i){return(h,b)=>{const y=B("router-view");return l(),p(H,null,{default:s(()=>[(l(),p(y,{key:h.$route.path}))]),_:1})}}};const Me={__name:"Index",setup(i){return(h,b)=>(l(),p(M,null,{default:s(()=>[t(Oe),t(He)]),_:1}))}},lt=T(Me,[["__scopeId","data-v-f789051c"]]);export{lt as default};
