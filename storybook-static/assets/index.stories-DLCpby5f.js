import{aE as $,a7 as E,ay as d,aW as k,s as i,aB as B,a9 as x,aY as c,aa as s,aO as C,aZ as N,z as y}from"./props-D2QecWz3.js";import{c as D,d as F}from"./create-runtime-stories-BTZEUp9S.js";import{E as o}from"./index-BOdS79Jc.js";import{a as G}from"./index-B-lxVbXh.js";import{t as O}from"./options-B0eN1I47.js";import"./index-C__6K5js.js";import"./attributes-pwFWEx45.js";import"./class-CoxErtGF.js";import"./this-B0xwDqzd.js";import"./index-C6Lev4sy.js";import"./v4-CtRu48qb.js";const w={title:"components/buttons/ExpandButton",component:o,argTypes:{className:{control:"text"},message:{control:"text"},expandedMessage:{control:"text"},expanded:{control:"boolean"},theme:{control:{type:"select",options:O}},disabled:{control:"boolean"}}},{Story:m}=F();var M=x('<div class="no-flexbox-gap"><!></div>'),S=x("<!> <!>",1);function f(g,v){$(v,!0);let e=N(!1),n=()=>{C(e,!s(e)),G("click")()};var r=S(),l=E(r);m(l,{name:"Default",args:{className:"example-class",message:"Open",expandedMessage:"Close",disabled:!1},children:(a,t=d)=>{o(a,c(t,{get expanded(){return s(e)},$$events:{click:n}}))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<ExpandButton {...args}>
  {#snippet children(args)}
<ExpandButton {...args} {expanded} on:click={handleClick} />
{/snippet}
</ExpandButton>`}}});var _=k(l,2);m(_,{name:"No flexbox gap",args:{className:"example-class"},children:(a,t=d)=>{var p=M(),b=y(p);o(b,c(t,{get expanded(){return s(e)},$$events:{click:n}})),i(a,p)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<ExpandButton {...args}>
  {#snippet children(args)}
<div class="no-flexbox-gap">
  <ExpandButton {...args} {expanded} on:click={handleClick} />
</div>
{/snippet}
</ExpandButton>`}}}),i(g,r),B()}f.__docgen={version:3,name:"index.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const u=D(f,w),J=["Default","NoFlexboxGap"],K={...u.Default,tags:["svelte-csf-v5"]},L={...u.NoFlexboxGap,tags:["svelte-csf-v5"]};export{K as Default,L as NoFlexboxGap,J as __namedExportsOrder,w as default};
