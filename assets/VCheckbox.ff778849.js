import{m as x,u as C,f as P,V as v}from"./VLabel.ac1a1ec3.js";import{m as A,f as B,V as I}from"./VCheckboxBtn.939705c2.js";import{s as g,L as F,l as y,ag as R,b as t,a9 as o}from"./index.2b19a388.js";import{a as _}from"./VIcon.90794bef.js";const q=g({name:"VCheckbox",inheritAttrs:!1,props:{...x(),...A()},emits:{"update:focused":e=>!0},setup(e,r){let{attrs:a,slots:s}=r;const{isFocused:u,focus:c,blur:n}=C(e),i=F(),d=y(()=>e.id||`checkbox-${i}`);return _(()=>{const[l,p]=R(a),[m,$]=P(e),[f,D]=B(e);return t(v,o({class:"v-checkbox"},l,m,{id:d.value,focused:u.value}),{...s,default:b=>{let{id:k,isDisabled:V,isReadonly:h}=b;return t(I,o(f,{id:k.value,disabled:V.value,readonly:h.value},p,{onFocus:c,onBlur:n}),s)}})}),{}}});export{q as V};
