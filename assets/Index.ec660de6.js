import{A as ie}from"./AppBar.a97c2464.js";import{V as se,a as ue}from"./VApp.dacb19dc.js";import{aj as ee,o as E,ai as H,w as S,l as M,g as w,x as R,U as te,n as N,L as ae,av as ce,e as de,m as ve,a4 as me,f as fe,t as Z,as as he,y as ge,B as ye,a9 as we,p as _e,a as d,q as be,a5 as pe,F as D,_ as ne,c as Y,d as z,b as P,al as G,am as W,P as ke}from"./index.793cb7a3.js";import{V as xe,c as Se,a as Ve,b as Ee}from"./VList.473fc2f0.js";import{d as Te,f as Be,j as Me,u as Ce,q as Le,v as Ie,N as $e,O as Re,V as He}from"./index.3fe101ce.js";import{m as Pe,a as J,u as Ne,V as O}from"./VIcon.f8771301.js";import{m as De,u as Ye}from"./layout.0bbcbd89.js";import{u as ze}from"./ssrBoot.41f39887.js";import"./VRow.4ed261c8.js";const We={__name:"View",setup(e){return(s,c)=>{const a=ee("router-view");return E(),H(se,null,{default:S(()=>[(E(),H(a,{key:s.$route.path}))]),_:1})}}};function Oe(e){let{rootEl:s,isSticky:c,layoutItemStyles:a}=e;const n=M(!1),t=M(0),v=w(()=>{const g=typeof n.value=="boolean"?"top":n.value;return[c.value?{top:"auto",bottom:"auto",height:void 0}:void 0,n.value?{[g]:R(t.value)}:{top:a.value.top}]});te(()=>{N(c,g=>{g?window.addEventListener("scroll",y,{passive:!0}):window.removeEventListener("scroll",y)},{immediate:!0})}),ae(()=>{document.removeEventListener("scroll",y)});let u=0;function y(){var V;const g=u>window.scrollY?"up":"down",l=s.value.getBoundingClientRect(),h=parseFloat((V=a.value.top)!=null?V:0),f=window.scrollY-Math.max(0,t.value-h),r=l.height+Math.max(t.value,h)-window.scrollY-window.innerHeight;l.height<window.innerHeight-h?(n.value="top",t.value=h):g==="up"&&n.value==="bottom"||g==="down"&&n.value==="top"?(t.value=window.scrollY+l.top,n.value=!0):g==="down"&&r<=0?(t.value=0,n.value="bottom"):g==="up"&&f<=0&&(t.value=l.top+f,n.value="top"),u=window.scrollY}return{isStuck:n,stickyStyles:v}}const Xe=100,Ae=20;function K(e){const s=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*s}function Q(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let s=0;for(let c=e.length-1;c>0;c--){if(e[c].t===e[c-1].t)continue;const a=K(s),n=(e[c].d-e[c-1].d)/(e[c].t-e[c-1].t);s+=(n-a)*Math.abs(n),c===e.length-1&&(s*=.5)}return K(s)*1e3}function qe(){const e={};function s(n){Array.from(n.changedTouches).forEach(t=>{var u;((u=e[t.identifier])!=null?u:e[t.identifier]=new ce(Ae)).push([n.timeStamp,t])})}function c(n){Array.from(n.changedTouches).forEach(t=>{delete e[t.identifier]})}function a(n){var t;const v=(t=e[n])==null?void 0:t.values().reverse();if(!v)throw new Error(`No samples for touch id ${n}`);const u=v[0],y=[],g=[];for(const l of v){if(u[0]-l[0]>Xe)break;y.push({t:l[0],d:l[1].clientX}),g.push({t:l[0],d:l[1].clientY})}return{x:Q(y),y:Q(g),get direction(){const{x:l,y:h}=this,[f,r]=[Math.abs(l),Math.abs(h)];return f>r&&l>=0?"right":f>r&&l<=0?"left":r>f&&h>=0?"down":r>f&&h<=0?"up":je()}}}return{addMovement:s,endTouch:c,getVelocity:a}}function je(){throw new Error}function Fe(e){let{isActive:s,isTemporary:c,width:a,touchless:n,position:t}=e;te(()=>{window.addEventListener("touchstart",L,{passive:!0}),window.addEventListener("touchmove",B,{passive:!1}),window.addEventListener("touchend",p,{passive:!0})}),ae(()=>{window.removeEventListener("touchstart",L),window.removeEventListener("touchmove",B),window.removeEventListener("touchend",p)});const v=w(()=>t.value!=="bottom"),{addMovement:u,endTouch:y,getVelocity:g}=qe();let l=!1;const h=M(!1),f=M(0),r=M(0);let V;function C(o,i){return(t.value==="left"?o:t.value==="right"?document.documentElement.clientWidth-o:t.value==="bottom"?document.documentElement.clientHeight-o:I())-(i?a.value:0)}function T(o){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const m=t.value==="left"?(o-r.value)/a.value:t.value==="right"?(document.documentElement.clientWidth-o-r.value)/a.value:t.value==="bottom"?(document.documentElement.clientHeight-o-r.value)/a.value:I();return i?Math.max(0,Math.min(1,m)):m}function L(o){if(n.value)return;const i=o.changedTouches[0].clientX,m=o.changedTouches[0].clientY,_=25,x=t.value==="left"?i<_:t.value==="right"?i>document.documentElement.clientWidth-_:t.value==="bottom"?m>document.documentElement.clientHeight-_:I(),b=s.value&&(t.value==="left"?i<a.value:t.value==="right"?i>document.documentElement.clientWidth-a.value:t.value==="bottom"?m>document.documentElement.clientHeight-a.value:I());(x||b||s.value&&c.value)&&(l=!0,V=[i,m],r.value=C(v.value?i:m,s.value),f.value=T(v.value?i:m),y(o),u(o))}function B(o){const i=o.changedTouches[0].clientX,m=o.changedTouches[0].clientY;if(l){if(!o.cancelable){l=!1;return}const x=Math.abs(i-V[0]),b=Math.abs(m-V[1]);(v.value?x>b&&x>3:b>x&&b>3)?(h.value=!0,l=!1):(v.value?b:x)>3&&(l=!1)}if(!h.value)return;o.preventDefault(),u(o);const _=T(v.value?i:m,!1);f.value=Math.max(0,Math.min(1,_)),_>1?r.value=C(v.value?i:m,!0):_<0&&(r.value=C(v.value?i:m,!1))}function p(o){if(l=!1,!h.value)return;u(o),h.value=!1;const i=g(o.changedTouches[0].identifier),m=Math.abs(i.x),_=Math.abs(i.y);(v.value?m>_&&m>400:_>m&&_>3)?s.value=i.direction===({left:"right",right:"left",bottom:"up"}[t.value]||I()):s.value=f.value>.5}const $=w(()=>h.value?{transform:t.value==="left"?`translateX(calc(-100% + ${f.value*a.value}px))`:t.value==="right"?`translateX(calc(100% - ${f.value*a.value}px))`:t.value==="bottom"?`translateY(calc(100% - ${f.value*a.value}px))`:I(),transition:"none"}:void 0);return{isDragging:h,dragProgress:f,dragStyles:$}}function I(){throw new Error}const Ue=["start","end","left","right","bottom"],Ze=de({name:"VNavigationDrawer",props:{color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:Boolean,railWidth:{type:[Number,String],default:56},scrim:{type:[String,Boolean],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>Ue.includes(e)},sticky:Boolean,...Te(),...Be(),...De(),...Me(),...Pe({tag:"nav"}),...ve()},emits:{"update:modelValue":e=>!0},setup(e,s){let{attrs:c,slots:a}=s;const{isRtl:n}=me(),{themeClasses:t}=fe(e),{borderClasses:v}=Ce(e),{backgroundColorClasses:u,backgroundColorStyles:y}=J(Z(e,"color")),{elevationClasses:g}=Le(e),{mobile:l}=he(),{roundedClasses:h}=Ie(e),f=$e(),r=ge(e,"modelValue",null,k=>!!k),{ssrBootStyles:V}=ze(),C=M(),T=M(!1),L=w(()=>e.rail&&e.expandOnHover&&T.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),B=w(()=>Re(e.location,n.value)),p=w(()=>!e.permanent&&(l.value||e.temporary)),$=w(()=>e.sticky&&!p.value&&B.value!=="bottom");e.disableResizeWatcher||N(p,k=>!e.permanent&&ye(()=>r.value=!k)),!e.disableRouteWatcher&&f&&N(f.currentRoute,()=>p.value&&(r.value=!1)),N(()=>e.permanent,k=>{k&&(r.value=!0)}),we(()=>{e.modelValue!=null||p.value||(r.value=e.permanent||!l.value)});const{isDragging:o,dragProgress:i,dragStyles:m}=Fe({isActive:r,isTemporary:p,width:L,touchless:Z(e,"touchless"),position:B}),_=w(()=>{const k=p.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):L.value;return o.value?k*i.value:k}),{layoutItemStyles:x,layoutRect:b,layoutItemScrimStyles:X}=Ye({id:e.name,order:w(()=>parseInt(e.order,10)),position:B,layoutSize:_,elementSize:L,active:w(()=>r.value||o.value),disableTransitions:w(()=>o.value),absolute:w(()=>e.absolute||$.value&&typeof A.value!="string")}),{isStuck:A,stickyStyles:oe}=Oe({rootEl:C,isSticky:$,layoutItemStyles:x}),q=J(w(()=>typeof e.scrim=="string"?e.scrim:null)),le=w(()=>({...o.value?{opacity:i.value*.2,transition:"none"}:void 0,...b.value?{left:R(b.value.left),right:R(b.value.right),top:R(b.value.top),bottom:R(b.value.bottom)}:void 0,...X.value}));return _e({VList:{bgColor:"transparent"}}),Ne(()=>{var k,j,F,U;const re=a.image||e.image;return d(D,null,[d(e.tag,be({ref:C,onMouseenter:()=>T.value=!0,onMouseleave:()=>T.value=!1,class:["v-navigation-drawer",`v-navigation-drawer--${B.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":T.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":p.value,"v-navigation-drawer--active":r.value,"v-navigation-drawer--sticky":$.value},t.value,u.value,v.value,g.value,h.value],style:[y.value,x.value,m.value,V.value,oe.value]},c),{default:()=>[re&&d("div",{key:"image",class:"v-navigation-drawer__img"},[a.image?(k=a.image)==null?void 0:k.call(a,{image:e.image}):d("img",{src:e.image,alt:""},null)]),a.prepend&&d("div",{class:"v-navigation-drawer__prepend"},[(j=a.prepend)==null?void 0:j.call(a)]),d("div",{class:"v-navigation-drawer__content"},[(F=a.default)==null?void 0:F.call(a)]),a.append&&d("div",{class:"v-navigation-drawer__append"},[(U=a.append)==null?void 0:U.call(a)])]}),d(pe,{name:"fade-transition"},{default:()=>[p.value&&(o.value||r.value)&&!!e.scrim&&d("div",{class:["v-navigation-drawer__scrim",q.backgroundColorClasses.value],style:[le.value,q.backgroundColorStyles.value],onClick:()=>r.value=!1},null)]})])}),{isStuck:A}}}),Ge={data(){return{itmes:[{name:"Home",icon:"mdi-home-variant-outline",link:"/"},{name:"Product",icon:"mdi-bag-personal-tag-outline",link:"products"},{name:"Support",icon:"mdi-help",link:"supports"},{name:"Sponsor",icon:"mdi-package-variant-closed-plus",link:"sponsors"}]}}},Je={class:"py-2 px-3 dark:bg-zinc-900 text-caption border-b"},Ke={class:"flex justify-center dark:bg-zinc-900 p-3 rounded-full shadow focus:bg-gray-200 hover:bg-gray-100"},Qe={class:"border-t-8 rounded-t-xl grid grid-flow-col place-items-center right-0 bg-white md:hidden fixed bottom-0 w-screen z-30 border-sky-400 font-sans"};function et(e,s,c,a,n,t){const v=ee("router-link");return E(),Y(D,null,[d(Ze,{class:"shadow block md:hidden dark:bg-zinc-900 border-t-8 border-r-2 rounded-r-xl border-sky-400"},{default:S(()=>[d(xe,{density:"compact"},{default:S(()=>[d(Se,null,{default:S(()=>[z("div",Je,[z("div",Ke,[d(He,{color:"grey darken-3",title:"Light/Dark",variant:"text",size:"large",rounded:""},{default:S(()=>[d(O,{class:"translate-x-2"},{default:S(()=>[P("mdi-hospital-marker")]),_:1}),P("osmenu ")]),_:1})])])]),_:1}),(E(!0),Y(D,null,G(n.itmes,(u,y)=>(E(),H(Ve,{key:y,value:u,to:u.link},{prepend:S(()=>[d(O,{icon:u.icon},null,8,["icon"]),d(Ee,{textContent:W(u.name),class:"text-caption text-gray-600"},null,8,["textContent"])]),_:2},1032,["value","to"]))),128))]),_:1})]),_:1}),z("div",Qe,[(E(!0),Y(D,null,G(n.itmes,(u,y)=>(E(),H(v,{class:"py-2 px-3 text-caption text-gray-600 transition-all ease-in-out duration-200 hover:text-white hover:bg-gradient-to-r from-stone-700 to-stone-100 w-full grid rounded place-items-center",key:y,to:u.link},{default:S(()=>[d(O,{class:""},{default:S(()=>[P(W(u.icon),1)]),_:2},1024),P(W(u.name),1)]),_:2},1032,["to"]))),128))])],64)}const tt=ne(Ge,[["render",et]]);const at={__name:"Index",setup(e){return(s,c)=>(E(),H(ue,null,{default:S(()=>[d(ie),d(ke(tt)),d(We)]),_:1}))}},vt=ne(at,[["__scopeId","data-v-c85bca63"]]);export{vt as default};
