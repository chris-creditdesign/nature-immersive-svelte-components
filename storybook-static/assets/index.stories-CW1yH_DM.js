import{aE as x,a7 as D,ay as c,aa as m,aW as L,s as o,aB as k,a9 as _,aY as f,b2 as y,a1 as h}from"./props-D2QecWz3.js";import{c as S,d as W}from"./create-runtime-stories-BTZEUp9S.js";import{C as i}from"./index-B8fJGdxV.js";import{i as b}from"./lifecycle-BxzyBO6_.js";import{c as z}from"./card-data-gb-geNQ6.js";import{f as F,h as O}from"./options-B0eN1I47.js";import"./index-C__6K5js.js";import"./svelte-element-DeaYRF6t.js";import"./attributes-pwFWEx45.js";import"./class-CoxErtGF.js";const E={title:"components/cards/components/CardHeadline",component:i,argTypes:{cardData:{control:"object"},headerLevel:{control:{type:"select",options:O}},headlineFontSize:{control:{type:"select",options:F}},id:{control:"text"}}},{Story:u}=W();var P=_('<a href="https://www.nature.com">Headline</a>'),j=_("<!> <!>",1);function v($,C){x(C,!1);let{href:d}=z;b();var l=j(),p=D(l);{const e=(t,r=c)=>{i(t,f(r,{children:(s,w)=>{var n=y("Headline");o(s,n)},$$slots:{default:!0}}))};let a=h(()=>({cardData:{href:d},headerLevel:"h2",headlineFontSize:"big-2",id:"example-id"}));u(p,{name:"Default",get args(){return m(a)},children:e,$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<CardHeadline {...args}>
  {#snippet children(args)}
<CardHeadline {...args}>Headline</CardHeadline>
{/snippet}
</CardHeadline>`}}})}var H=L(p,2);{const e=(t,r=c)=>{i(t,f(r,{children:(s,w)=>{var n=P();o(s,n)},$$slots:{default:!0}}))};let a=h(()=>({cardData:{href:d},headerLevel:"h2",headlineFontSize:"big-2",id:"example-id"}));u(H,{name:"With link",get args(){return m(a)},children:e,$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<CardHeadline {...args}>
  {#snippet children(args)}
<CardHeadline {...args}>
  <a href="https://www.nature.com">Headline </a>
</CardHeadline>
{/snippet}
</CardHeadline>`}}})}o($,l),k()}v.__docgen={version:3,name:"index.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const g=S(v,E),K=["Default","WithLink"],N={...g.Default,tags:["svelte-csf-v5"]},Q={...g.WithLink,tags:["svelte-csf-v5"]};export{N as Default,Q as WithLink,K as __namedExportsOrder,E as default};
