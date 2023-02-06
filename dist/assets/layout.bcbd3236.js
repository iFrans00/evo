import{J as ee}from"./index.4c386396.js";import{i as X,S as E,g as a,l as P,T as $,x as M,Q as Z,U as te,k as oe,aw as ne,ax as ae,L as se,R as D,X as ue}from"./index.e577e5a2.js";const O=Symbol.for("vuetify:layout"),_=Symbol.for("vuetify:layout-item"),N=1e3,ve=X({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),de=X({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function ye(){const s=E(O);if(!s)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:s.getLayoutItem,mainRect:s.mainRect,mainStyles:s.mainStyles}}function fe(s){var y;const l=E(O);if(!l)throw new Error("[Vuetify] Could not find injected layout");const d=(y=s.id)!=null?y:`layout-item-${oe()}`,i=Z("useLayoutItem");D(_,{id:d});const n=P(!1);ne(()=>n.value=!0),ae(()=>n.value=!1);const{layoutItemStyles:r,layoutItemScrimStyles:c}=l.register(i,{...s,active:a(()=>n.value?!1:s.active.value),id:d});return se(()=>l.unregister(d)),{layoutItemStyles:r,layoutRect:l.layoutRect,layoutItemScrimStyles:c}}const le=(s,l,d,i)=>{let n={top:0,left:0,right:0,bottom:0};const r=[{id:"",layer:{...n}}];for(const c of s){const y=l.get(c),g=d.get(c),z=i.get(c);if(!y||!g||!z)continue;const h={...n,[y.value]:parseInt(n[y.value],10)+(z.value?parseInt(g.value,10):0)};r.push({id:c,layer:h}),n=h}return r};function pe(s){const l=E(O,null),d=a(()=>l?l.rootZIndex.value-100:N),i=P([]),n=$(new Map),r=$(new Map),c=$(new Map),y=$(new Map),g=$(new Map),{resizeRef:z,contentRect:h}=ee(),q=a(()=>{var e;const t=new Map,u=(e=s.overlaps)!=null?e:[];for(const p of u.filter(o=>o.includes(":"))){const[o,v]=p.split(":");if(!i.value.includes(o)||!i.value.includes(v))continue;const m=n.get(o),S=n.get(v),w=r.get(o),R=r.get(v);!m||!S||!w||!R||(t.set(v,{position:m.value,amount:parseInt(w.value,10)}),t.set(o,{position:S.value,amount:-parseInt(R.value,10)}))}return t}),I=a(()=>{const t=[...new Set([...c.values()].map(e=>e.value))].sort((e,p)=>e-p),u=[];for(const e of t){const p=i.value.filter(o=>{var v;return((v=c.get(o))==null?void 0:v.value)===e});u.push(...p)}return le(u,n,r,y)}),T=a(()=>!Array.from(g.values()).some(t=>t.value)),x=a(()=>I.value[I.value.length-1].layer),F=a(()=>({"--v-layout-left":M(x.value.left),"--v-layout-right":M(x.value.right),"--v-layout-top":M(x.value.top),"--v-layout-bottom":M(x.value.bottom),...T.value?void 0:{transition:"none"}})),b=a(()=>I.value.slice(1).map((t,u)=>{let{id:e}=t;const{layer:p}=I.value[u],o=r.get(e),v=n.get(e);return{id:e,...p,size:Number(o.value),position:v.value}})),H=t=>b.value.find(u=>u.id===t),U=Z("createLayout"),j=P(!1);te(()=>{j.value=!0}),D(O,{register:(t,u)=>{let{id:e,order:p,position:o,layoutSize:v,elementSize:m,active:S,disableTransitions:w,absolute:R}=u;c.set(e,p),n.set(e,o),r.set(e,v),y.set(e,S),w&&g.set(e,w);const k=ue(_,U==null?void 0:U.vnode).indexOf(t);k>-1?i.value.splice(k,0,e):i.value.push(e);const B=a(()=>b.value.findIndex(L=>L.id===e)),V=a(()=>d.value+I.value.length*2-B.value*2),W=a(()=>{const L=o.value==="left"||o.value==="right",A=o.value==="right",G=o.value==="bottom",K={[o.value]:0,zIndex:V.value,transform:`translate${L?"X":"Y"}(${(S.value?0:-110)*(A||G?-1:1)}%)`,position:R.value||d.value!==N?"absolute":"fixed",...T.value?void 0:{transition:"none"}};if(!j.value)return K;const f=b.value[B.value];if(!f)throw new Error(`[Vuetify] Could not find layout item "${e}"`);const C=q.value.get(e);return C&&(f[C.position]+=C.amount),{...K,height:L?`calc(100% - ${f.top}px - ${f.bottom}px)`:m.value?`${m.value}px`:void 0,left:A?void 0:`${f.left}px`,right:A?`${f.right}px`:void 0,top:o.value!=="bottom"?`${f.top}px`:void 0,bottom:o.value!=="top"?`${f.bottom}px`:void 0,width:L?m.value?`${m.value}px`:void 0:`calc(100% - ${f.left}px - ${f.right}px)`}}),Y=a(()=>({zIndex:V.value-1}));return{layoutItemStyles:W,layoutItemScrimStyles:Y,zIndex:V}},unregister:t=>{c.delete(t),n.delete(t),r.delete(t),y.delete(t),g.delete(t),i.value=i.value.filter(u=>u!==t)},mainRect:x,mainStyles:F,getLayoutItem:H,items:b,layoutRect:h,rootZIndex:d});const J=a(()=>["v-layout",{"v-layout--full-height":s.fullHeight}]),Q=a(()=>({zIndex:d.value,position:l?"relative":void 0,overflow:l?"hidden":void 0}));return{layoutClasses:J,layoutStyles:Q,getLayoutItem:H,items:b,layoutRect:h,layoutRef:z}}export{ye as a,ve as b,pe as c,de as m,fe as u};
