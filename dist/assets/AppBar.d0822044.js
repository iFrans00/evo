import{j as V,a,i as E,m as j,t as p,f as D,l as z,g as b,p as L,x as f,u as F,y as q,q as M,_ as O,o as _,ai as I,w as g,d as m,b as N,c as U,F as G,al as J}from"./index.e577e5a2.js";import{m as w,u as k,a as K,V as Q}from"./VIcon.cbc4d239.js";import{V as W,a as X}from"./VRow.1be8aaa6.js";import{d as Y,f as Z,j as ee,u as te,q as ae,v as oe,a as x,x as le,E as se,V as ne}from"./index.4c386396.js";import{m as ie,u as re}from"./layout.bcbd3236.js";const de=V()({name:"VToolbarTitle",props:{text:String,...w()},setup(e,s){let{slots:o}=s;return k(()=>{var t;const i=!!(o.default||o.text||e.text);return a(e.tag,{class:"v-toolbar-title"},{default:()=>[i&&a("div",{class:"v-toolbar-title__placeholder"},[o.text?o.text():e.text,(t=o.default)==null?void 0:t.call(o)])]})}),{}}}),ue=[null,"prominent","default","comfortable","compact"],H=E({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>ue.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Y(),...Z(),...ee(),...w({tag:"header"}),...j()},"v-toolbar"),y=V()({name:"VToolbar",props:H(),setup(e,s){var o;let{slots:t}=s;const{backgroundColorClasses:i,backgroundColorStyles:u}=K(p(e,"color")),{borderClasses:l}=te(e),{elevationClasses:n}=ae(e),{roundedClasses:v}=oe(e),{themeClasses:h}=D(e),c=z(!!(e.extended||(o=t.extension)!=null&&o.call(t))),r=b(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),d=b(()=>c.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return L({VBtn:{variant:"text"}}),k(()=>{var T,B,$,S,P;const R=!!(e.title||t.title),A=!!(t.image||e.image),C=(T=t.extension)==null?void 0:T.call(t);return c.value=!!(e.extended||C),a(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},i.value,l.value,n.value,v.value,h.value],style:[u.value]},{default:()=>[A&&a("div",{key:"image",class:"v-toolbar__image"},[a(x,{defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>[t.image?(B=t.image)==null?void 0:B.call(t):a(le,null,null)]})]),a(x,{defaults:{VTabs:{height:f(r.value)}}},{default:()=>[a("div",{class:"v-toolbar__content",style:{height:f(r.value)}},[t.prepend&&a("div",{class:"v-toolbar__prepend"},[($=t.prepend)==null?void 0:$.call(t)]),R&&a(de,{key:"title",text:e.title},{text:t.title}),(S=t.default)==null?void 0:S.call(t),t.append&&a("div",{class:"v-toolbar__append"},[(P=t.append)==null?void 0:P.call(t)])])]}),a(x,{defaults:{VTabs:{height:f(d.value)}}},{default:()=>[a(se,null,{default:()=>[c.value&&a("div",{class:"v-toolbar__extension",style:{height:f(d.value)}},[C])]})]})]})}),{contentHeight:r,extensionHeight:d}}});function ce(e){var s;return F(e,Object.keys((s=y==null?void 0:y.props)!=null?s:{}))}const me=V()({name:"VAppBar",props:{modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...H(),...ie(),height:{type:[Number,String],default:64}},emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:o}=s;const t=z(),i=q(e,"modelValue"),u=b(()=>{var r,d;var n,v;const h=(r=(n=t.value)==null?void 0:n.contentHeight)!=null?r:0,c=(d=(v=t.value)==null?void 0:v.extensionHeight)!=null?d:0;return h+c}),{layoutItemStyles:l}=re({id:e.name,order:b(()=>parseInt(e.order,10)),position:p(e,"location"),layoutSize:u,elementSize:u,active:i,absolute:p(e,"absolute")});return k(()=>{const[n]=ce(e);return a(y,M({ref:t,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"}],style:{...l.value,height:void 0}},n),o)}),{}}}),ve={data(){return{items:[{icon:"mdi-theme-light-dark",title:"Light/Dark",variant:"text",color:"info",size:"small",click:"Toheme",id:"contras"},{icon:"mdi-shopping-outline",title:"Bag",variant:"text",color:"info",link:"cart",size:"small",id:"fyp",notification:"gp"},{icon:"mdi-bell-outline",title:"Notification",variant:"text",color:"info",link:"notification",size:"small",id:"notification"},{icon:"mdi-account-outline",title:"Sign",variant:"text",color:"info",link:"sign",size:"small",id:"setting"}]}},methods:{Toheme(){alert(0)}},created(){}},fe={class:"w-full absolute py-2 px-5 z-30 shadow border-2 border-sky-400 text-sky-400"},ge={class:"flex justify-between place-items-center mx-7"},be={class:"text-h5 font-weight-medium flex"},he={class:""},_e=["id"];function xe(e,s,o,t,i,u){return _(),I(me,{flat:""},{default:g(()=>[m("div",fe,[m("div",ge,[m("div",be,[a(Q,{class:"translate-x-2"},{default:g(()=>[N("mdi-hospital-marker")]),_:1}),N("osblue ")]),m("div",he,[a(W,{"no-gutters":""},{default:g(()=>[(_(!0),U(G,null,J(i.items,(l,n)=>(_(),I(X,{cols:"auto",class:"pa-1",key:n},{default:g(()=>[m("div",{id:l.notification,class:"absolute p-1 rounded-full translate-x-6 translate-y-1 hidden bg-red-500"},null,8,_e),a(ne,{icon:l.icon,color:l.color,title:l.title,to:l.link,variant:"outlined",size:l.size,id:l.id},null,8,["icon","color","title","to","size","id"])]),_:2},1024))),128))]),_:1})])])])]),_:1})}const Be=O(ve,[["render",xe],["__scopeId","data-v-5ec73711"]]);export{Be as A};
