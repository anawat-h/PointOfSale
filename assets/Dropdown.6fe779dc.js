import{d as u,m as d,_ as p,h as c,s as i,c as o,F as m,e as f,o as a,t as V}from"./index.daa4adef.js";const v=u({props:{modelValue:{default:void 0},options:{type:Array,default:()=>[]}},setup(e,{emit:t}){return{selectedValue:d({get(){return e.modelValue},set(l){t("update:modelValue",l)}})}}}),_=["value"];function y(e,t,r,l,D,$){return c((a(),o("select",{"onUpdate:modelValue":t[0]||(t[0]=s=>e.selectedValue=s)},[(a(!0),o(m,null,f(e.options,(s,n)=>(a(),o("option",{key:n,value:s.value},V(s.text),9,_))),128))],512)),[[i,e.selectedValue]])}const k=p(v,[["render",y]]);export{k as D};
