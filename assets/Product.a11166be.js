import{_ as J,an as M,r as Y,o as k,c as A,b as t,w as a,a as e,d as c,F as O,e as W,t as p}from"./index.5a5725be.js";import{a as L,b as C,V as P,d as $}from"./VCard.d16f4cec.js";import{V as b}from"./VIcon.f961b6fb.js";import{V as G}from"./VTextField.c0957f65.js";import{V as j}from"./index.275ac5fe.js";import{y as K}from"./VAvatar.b85a8812.js";import{V as Q}from"./VRating.73a8e064.js";import{V as U,a as X,b as Z,c as ee}from"./VExpansionPanel.c56975cb.js";import{V as te,a as D}from"./VRow.49dfc86a.js";import{V as ae}from"./VSlider.bdb2b07c.js";import"./VLabel.0339d4a4.js";import"./easing.36b781ab.js";import"./lazy.63adddb0.js";const ie={data(){return{zoom:0,carts:[{url:"https://random.imagecdn.app/300/300",subtitle:"Travel",subtitle2:"Top 10 Australian beaches",desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis exercitationem voluptatum voluptates tempora. Blanditiis optio minus mollitia architecto, vero alias ipsum, ea eaque harum vitae reprehenderit obcaecati tenetur illo pariatur?",percent:4.7,count:455,cash:454400},{url:"https://random.imagecdn.app/300/300",subtitle:"Tromp",subtitle2:"Top 10 Indian beaches",desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis exercitationem voluptatum voluptates tempora. Blanditiis optio minus mollitia architecto, vero alias ipsum, ea eaque harum vitae reprehenderit obcaecati tenetur illo pariatur?",percent:4.9,count:105,cash:45e4},{url:"https://random.imagecdn.app/300/300",subtitle:"Travel",subtitle2:"Top 10 Australian beaches",desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis exercitationem voluptatum voluptates tempora. Blanditiis optio minus mollitia architecto, vero alias ipsum, ea eaque harum vitae reprehenderit obcaecati tenetur illo pariatur?",percent:4.7,count:455,cash:463e3},{url:"https://random.imagecdn.app/300/300",subtitle:"Tromp",subtitle2:"Top 10 Indian beaches",desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis exercitationem voluptatum voluptates tempora. Blanditiis optio minus mollitia architecto, vero alias ipsum, ea eaque harum vitae reprehenderit obcaecati tenetur illo pariatur?",percent:4.9,count:105,cash:45e4},{url:"https://random.imagecdn.app/300/300",subtitle:"Travel",subtitle2:"Top 10 Australian beaches",desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis exercitationem voluptatum voluptates tempora. Blanditiis optio minus mollitia architecto, vero alias ipsum, ea eaque harum vitae reprehenderit obcaecati tenetur illo pariatur?",percent:4.7,count:455,cash:667e3},{url:"https://random.imagecdn.app/300/300",subtitle:"Tromp",subtitle2:"Top 10 Indian beaches",desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis exercitationem voluptatum voluptates tempora. Blanditiis optio minus mollitia architecto, vero alias ipsum, ea eaque harum vitae reprehenderit obcaecati tenetur illo pariatur?",percent:4.9,count:105,cash:667e3},{url:"https://random.imagecdn.app/300/300",subtitle:"Travel",subtitle2:"Top 10 Australian beaches",desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis exercitationem voluptatum voluptates tempora. Blanditiis optio minus mollitia architecto, vero alias ipsum, ea eaque harum vitae reprehenderit obcaecati tenetur illo pariatur?",percent:4.7,count:455,cash:45e4},{url:"https://random.imagecdn.app/300/300",subtitle:"Tromp",subtitle2:"Top 10 Indian beaches",desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis exercitationem voluptatum voluptates tempora. Blanditiis optio minus mollitia architecto, vero alias ipsum, ea eaque harum vitae reprehenderit obcaecati tenetur illo pariatur?",percent:4.9,count:105,cash:821e3},{url:"https://random.imagecdn.app/300/300",subtitle:"Travel",subtitle2:"Top 10 Australian beaches",desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis exercitationem voluptatum voluptates tempora. Blanditiis optio minus mollitia architecto, vero alias ipsum, ea eaque harum vitae reprehenderit obcaecati tenetur illo pariatur?",percent:4.7,count:455,cash:45e4},{url:"https://random.imagecdn.app/300/300",subtitle:"Tromp",subtitle2:"Top 10 Indian beaches",desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis exercitationem voluptatum voluptates tempora. Blanditiis optio minus mollitia architecto, vero alias ipsum, ea eaque harum vitae reprehenderit obcaecati tenetur illo pariatur?",percent:4.9,count:105,cash:45e4},{url:"https://random.imagecdn.app/300/300",subtitle:"Travel",subtitle2:"Top 10 Australian beaches",desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis exercitationem voluptatum voluptates tempora. Blanditiis optio minus mollitia architecto, vero alias ipsum, ea eaque harum vitae reprehenderit obcaecati tenetur illo pariatur?",percent:4.7,count:455,cash:659e3},{url:"https://random.imagecdn.app/300/300",subtitle:"Tromp",subtitle2:"Top 10 Indian beaches",desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis exercitationem voluptatum voluptates tempora. Blanditiis optio minus mollitia architecto, vero alias ipsum, ea eaque harum vitae reprehenderit obcaecati tenetur illo pariatur?",percent:4.9,count:105,cash:659e3}],cart:[],messages:[{from:"You",message:"Sure, I'll see you later.",time:"10:42am",color:"deep-purple-lighten-1"},{from:"John Doe",message:"Yeah, sure. Does 1:00pm work?",time:"10:37am",color:"green"},{from:"You",message:"Did you still want to grab lunch today?",time:"9:47am",color:"deep-purple-lighten-1"}],save:[],items:[{text:"Account",icon:"mdi-account-circle"},{text:"Help",icon:"mdi-help"},{text:"Sign-up",icon:"mdi-logout-variant"}],cash:[],wall:"false",th:M(),secon(){}}},created(){fetch("./json/product.json").then(n=>n.json()).then(n=>{var o=n.result.resultList;o.forEach((r,v)=>{let l,u,d;(r.item.sku.def.price&&r.item.averageStarRate)>=1?(l=r.item.sku.def.price,u=r.item.averageStarRate):(l=r.item.sku.def.price+34.11,u=r.item.averageStarRate+4.11),r.item.sales<=10?d=r.item.sales+v*111:d=r.item.sales;var i=[{url:r.item.image,subtitle:r.item.type,subtitle2:r.item.title,desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis exercitationem voluptatum voluptates tempora. Blanditiis optio minus mollitia architecto, vero alias ipsum, ea eaque harum vitae reprehenderit obcaecati tenetur illo pariatur?",percent:u,count:d,cash:l*1e3}];this.cart=this.cart.concat(i)})})},mounted(){var n=()=>{let v=document.querySelectorAll("#sumon");var l=setTimeout(n,2e3);if(v.length>=1){clearTimeout(l);var u=document.querySelector(".pow"),d=document.querySelector(".lock");u.remove(),d.style.display="grid";var i={name:document.querySelectorAll("#sumon"),btn:document.querySelectorAll("#cart")},h=document.querySelectorAll("#subtitle2"),y=document.querySelectorAll("#subtitle"),B=document.querySelectorAll("#img"),I=document.querySelectorAll("#paid"),N=document.querySelectorAll("#rating"),E=document.querySelectorAll("#count");document.querySelectorAll("#desc");var z=document.querySelectorAll("#slider"),R=document.querySelectorAll(".sam");i.name.forEach((Te,s)=>{R[s].addEventListener("click",()=>{var x=I[s].textContent;function m(g){var w=g.toString(),S=w.replace(/[^0-9-]/g,""),q=S.split(""),T=q.reverse(),V=T.join("");return V}var f=m(x).substr(2),_=[{title:h[s].textContent,subtitle:y[s].textContent,pic:B[s].querySelector("img").src,cash:Number(m(f)),rating:Number(N[s].textContent),seller:Number(E[s].textContent),item:Number(z[s].value)}];this.preview=_,localStorage.setItem("prev",JSON.stringify(this.preview)),this.$router.push({name:"Preview"})}),i.btn[s].addEventListener("click",()=>{var x=I[s].textContent;function m(S){var q=S.toString(),T=q.replace(/[^0-9-]/g,""),V=T.split(""),F=V.reverse(),H=F.join("");return H}var f=m(x).substr(2),_=[{title:h[s].textContent,subtitle:y[s].textContent,pic:B[s].querySelector("img").src,cash:Number(m(f)),rating:Number(N[s].textContent),seller:Number(E[s].textContent),item:Number(z[s].value)}];this.save=this.save.concat(_),localStorage.setItem("cart",JSON.stringify(this.save)),i.btn[s].disabled=!0;var g=i.btn[s].querySelector(".v-btn__prepend");g.querySelector("i").remove(),g.insertAdjacentHTML("beforeend",`
                  <i class="mdi-cart-check mdi v-icon notranslate v-theme--light v-icon--size-default" aria-hidden="true"></i>
                  `);var w=document.querySelectorAll("#gp")[0];this.save.length>=1&&(w.style.display="block")})})}};n();var o=document.querySelectorAll("#contras")[0],r=document.querySelectorAll("#htm")[0];o.addEventListener("click",()=>{this.th.global.name=this.th.global.current.dark?"light":"dark",r.classList.contains("dark")?r.classList.remove("dark"):r.classList.add("dark")})}},se={class:"w-full dark:bg-zinc-900 bg-gray-200 z-10 p-5 overflow-y-auto"},re={class:"p-2 rounded-lg"},le={class:"mt-5"},oe=e("strong",null,"looking",-1),ce={class:"p-2 rounded-lg"},ne=e("div",{class:"grid grid-flow-col pow"},[e("div",{class:"mx-auto bg-white shadow-lg w-96 rounded-2xl"},[e("div",{class:"h-48 p-3 overflow-hidden bg-gray-200 animate-pulse"}),e("div",{class:"p-3 h-"},[e("div",{class:"grid grid-cols-3 gap-4 mt-2"},[e("div",{class:"h-8 bg-gray-200 rounded animate-pulse"}),e("div",{class:"h-8 bg-gray-200 rounded animate-pulse"}),e("div",{class:"h-8 bg-gray-200 rounded animate-pulse"}),e("div",{class:"h-8 col-span-2 bg-gray-200 rounded animate-pulse"}),e("div",{class:"h-8 bg-gray-200 rounded animate-pulse"}),e("div",{class:"..."}),e("div",{class:"col-span-2 ..."})])])]),e("div",{class:"mx-auto bg-white shadow-lg w-96 rounded-2xl"},[e("div",{class:"h-48 p-3 overflow-hidden bg-gray-200 animate-pulse"}),e("div",{class:"p-3 h-"},[e("div",{class:"grid grid-cols-3 gap-4 mt-2"},[e("div",{class:"h-8 bg-gray-200 rounded animate-pulse"}),e("div",{class:"h-8 bg-gray-200 rounded animate-pulse"}),e("div",{class:"h-8 bg-gray-200 rounded animate-pulse"}),e("div",{class:"h-8 col-span-2 bg-gray-200 rounded animate-pulse"}),e("div",{class:"h-8 bg-gray-200 rounded animate-pulse"}),e("div",{class:"..."}),e("div",{class:"col-span-2 ..."})])])]),e("div",{class:"mx-auto bg-white shadow-lg w-96 rounded-2xl"},[e("div",{class:"h-48 p-3 overflow-hidden bg-gray-200 animate-pulse"}),e("div",{class:"p-3 h-"},[e("div",{class:"grid grid-cols-3 gap-4 mt-2"},[e("div",{class:"h-8 bg-gray-200 rounded animate-pulse"}),e("div",{class:"h-8 bg-gray-200 rounded animate-pulse"}),e("div",{class:"h-8 bg-gray-200 rounded animate-pulse"}),e("div",{class:"h-8 col-span-2 bg-gray-200 rounded animate-pulse"}),e("div",{class:"h-8 bg-gray-200 rounded animate-pulse"}),e("div",{class:"..."}),e("div",{class:"col-span-2 ..."})])])]),e("div",{class:"mx-auto bg-white shadow-lg w-96 rounded-2xl"},[e("div",{class:"h-48 p-3 overflow-hidden bg-gray-200 animate-pulse"}),e("div",{class:"p-3 h-"},[e("div",{class:"grid grid-cols-3 gap-4 mt-2"},[e("div",{class:"h-8 bg-gray-200 rounded animate-pulse"}),e("div",{class:"h-8 bg-gray-200 rounded animate-pulse"}),e("div",{class:"h-8 bg-gray-200 rounded animate-pulse"}),e("div",{class:"h-8 col-span-2 bg-gray-200 rounded animate-pulse"}),e("div",{class:"h-8 bg-gray-200 rounded animate-pulse"}),e("div",{class:"..."}),e("div",{class:"col-span-2 ..."})])])]),e("div",{class:"mx-auto bg-white shadow-lg w-96 rounded-2xl"},[e("div",{class:"h-48 p-3 overflow-hidden bg-gray-200 animate-pulse"}),e("div",{class:"p-3 h-"},[e("div",{class:"grid grid-cols-3 gap-4 mt-2"},[e("div",{class:"h-8 bg-gray-200 rounded animate-pulse"}),e("div",{class:"h-8 bg-gray-200 rounded animate-pulse"}),e("div",{class:"h-8 bg-gray-200 rounded animate-pulse"}),e("div",{class:"h-8 col-span-2 bg-gray-200 rounded animate-pulse"}),e("div",{class:"h-8 bg-gray-200 rounded animate-pulse"}),e("div",{class:"..."}),e("div",{class:"col-span-2 ..."})])])])],-1),de={class:"hover:underline",id:"subtitle2"},ue={class:"text-xs text-white font-bold",id:"paid"},pe={id:"subtitle"},me={class:"flex -translate-x-2"},ve={class:"text-grey"},he={id:"rating"},ge={id:"count"},be={class:"w-full -mt-4"},ye=e("div",{class:"font-semibold text-xs -translate-x-2"}," Description ",-1),xe={class:"text-xs text-gray-300 landing-4",id:"desc"},fe=e("div",{class:"text-xs text-gray-400 mr-2 text-end -mt-4"},"Item amount",-1),_e={class:"flex justify-center -mt-10 p-3"},we=e("div",{class:"noname"},null,-1),Se=e("div",{class:"mb-16"},null,-1);function qe(n,o,r,v,l,u){const d=Y("v-card-action");return k(),A("div",se,[t(P,{class:"mx-auto max-w-6xl rounded-b-xl"},{default:a(()=>[t(L,{class:"border-t-8 border-sky-400 border-b"},{default:a(()=>[e("div",re,[c(" Search "),t(b,{icon:"mdi-file-find"})])]),_:1}),t(C,null,{default:a(()=>[t(G,{variant:"solo",class:"h-40 translate-y-3",color:"grey darken-2",shaped:""},{label:a(()=>[e("span",le,[c(" What are you "),oe,c(" for here? "),t(b,{icon:"mdi-file-find"})])]),"append-inner":a(()=>[t(j,{class:"translate-y-3 absolute",variant:"text"},{default:a(()=>[t(b,{size:"xxx-large"},{default:a(()=>[c(" mdi-card-search ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(P,{class:"mt-5 max-w-6xl mx-auto"},{default:a(()=>[t(L,{class:"border-t-8 border-sky-400 border-b"},{default:a(()=>[e("div",ce,[c(" Cart "),t(b,{icon:"mdi-cart-variant"})])]),_:1}),t(C,null,{default:a(()=>[ne,e("div",{class:"lg:grid-cols-4 xl:grid-cols-5 gap-1 grid-cols-2 sm:grid-cols-3 p-1 md:p-3 hidden lock",onMouseenter:o[1]||(o[1]=(...i)=>l.secon&&l.secon(...i))},[(k(!0),A(O,null,W(l.cart,(i,h)=>(k(),A("div",{class:"",key:h},[t(P,{class:"mx-auto shadow","max-width":"200",id:"sumon"},{default:a(()=>[t(K,{class:"align-end text-white",height:"130",id:"img",src:i.url,cover:""},{default:a(()=>[t(L,{class:"text-subtitle-2 flex place-items-center justify-between sam"},{default:a(()=>[e("div",de,p(i.subtitle2),1),e("div",ue,p(i.cash.toLocaleString("id-ID",{style:"currency",currency:"IDR"})),1)]),_:2},1024)]),_:2},1032,["src"]),t($,{class:"my-2"},{default:a(()=>[e("div",pe,p(i.subtitle),1),e("div",me,[t(Q,{"model-value":i.percent>5?i.percent/2:i.percent,color:"amber",density:"compact","half-increments":"",readonly:"",size:"small"},null,8,["model-value"]),e("div",ve,[e("span",he,p(i.percent>5?i.percent/2:i.percent),1),c("("),e("span",ge,p(i.count),1),c(") ")])])]),_:2},1024),t(C,null,{default:a(()=>[e("div",be,[t(U,null,{default:a(()=>[t(X,{variant:"accordion"},{default:a(()=>[t(Z,null,{default:a(()=>[ye]),_:1}),t(ee,null,{default:a(()=>[e("div",xe,p(i.desc),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)])]),_:2},1024),t(d,{class:""},{default:a(()=>[t(te,{class:"mt-2"},{default:a(()=>[t(D,{cols:"12",md:"12"},{default:a(()=>[fe,t(ae,{min:1,max:255,step:1,id:"slider",color:"info","hide-details":"",class:"p-2","thumb-label":"always"})]),_:1}),t(D,{cols:"12",md:"12"},{default:a(()=>[e("div",_e,[t(j,{"prepend-icon":"mdi-cart-plus",size:"small",variant:"outlined",title:"Add Cart",color:"info",id:"cart",onClick:o[0]||(o[0]=y=>l.wall=!l.wall)},{default:a(()=>[c(" Add to cart ")]),_:1})])]),_:1})]),_:1})]),_:1})]),_:2},1024)]))),128))],32),we]),_:1})]),_:1}),Se])}const Re=J(ie,[["render",qe]]);export{Re as default};
