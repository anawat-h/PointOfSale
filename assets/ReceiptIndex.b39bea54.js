import{M as f}from"./Modal.d50e02d2.js";import{d as b,r as d,m as D,i as y,D as v,_ as k,c as r,a as w,w as I,b as u,h as m,v as h,F as S,e as g,f as A,o as i,g as T,t as s,p as $,j as C}from"./index.86a0ebf6.js";const V=b({components:{Modal:f},setup(){const t=y("datastore"),e=d([]);t.receipt.getReceipts(void 0,void 0).then(o=>{e.value=o});const c=D(()=>e.value.map(o=>({...o,date:o.date.toFormat("dd/MM/yyyy")}))),E=d(),l=d();async function p(){e.value=await t.receipt.getReceipts(E.value?v.fromISO(E.value):void 0,l.value?v.fromISO(l.value):void 0)}return{receiptsTableData:c,startDate:E,endDate:l,onSearch:p}}});const a=t=>($("data-v-bf3f35dd"),t=t(),C(),t),M=a(()=>u("h2",null,"\u0E14\u0E39\u0E43\u0E1A\u0E40\u0E2A\u0E23\u0E47\u0E08\u0E23\u0E31\u0E1A\u0E40\u0E07\u0E34\u0E19",-1)),N={class:"d-flex"},R=a(()=>u("label",null,"\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19 : ",-1)),B=a(()=>u("label",null,"\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E2A\u0E34\u0E49\u0E19\u0E2A\u0E38\u0E14 : ",-1)),x=a(()=>u("br",null,null,-1)),F=a(()=>u("br",null,null,-1)),j=a(()=>u("thead",null,[u("tr",null,[u("th",{width:"10%"},"No."),u("th",null,"\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23"),u("th",null,"\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48"),u("th",null,"Grand Total"),u("th",{class:"text-center",width:"20%"},"\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23")])],-1)),O={class:"text-center"},U=["onClick"];function q(t,e,c,E,l,p){const o=A("router-link");return i(),r("div",null,[w(o,{to:{name:"Home"}},{default:I(()=>[T("\u0E01\u0E25\u0E31\u0E1A")]),_:1}),M,u("div",N,[u("div",null,[R,m(u("input",{type:"date","onUpdate:modelValue":e[0]||(e[0]=n=>t.startDate=n)},null,512),[[h,t.startDate]])]),u("div",null,[B,m(u("input",{type:"date","onUpdate:modelValue":e[1]||(e[1]=n=>t.endDate=n)},null,512),[[h,t.endDate]])]),u("div",null,[u("button",{onClick:e[2]||(e[2]=n=>t.onSearch())},"\u0E04\u0E49\u0E19\u0E2B\u0E32")])]),x,F,u("table",null,[j,u("tbody",null,[(i(!0),r(S,null,g(t.receiptsTableData,(n,_)=>(i(),r("tr",{key:_},[u("td",null,s(_+1),1),u("td",null,s(n.docNo),1),u("td",null,s(n.date),1),u("td",null,s(n.grandTotal),1),u("td",O,[u("button",{onClick:G=>t.$router.push({name:"ReceiptView",query:{id:n.id}})},"\u0E14\u0E39\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14",8,U)])]))),128))])])])}const z=k(V,[["render",q],["__scopeId","data-v-bf3f35dd"]]);export{z as default};
