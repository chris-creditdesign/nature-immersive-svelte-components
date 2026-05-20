import{aE as F,a7 as $,ay as d,aW as k,s as p,aB as B,a9 as x,aY as c,aa as s,aO as N,aZ as C,z as y}from"./props-D2QecWz3.js";import{c as D,d as G}from"./create-runtime-stories-BTZEUp9S.js";import{F as o}from"./index-D-dZMafT.js";import{a as w}from"./index-B-lxVbXh.js";import{t as O}from"./options-B0eN1I47.js";import"./index-C__6K5js.js";import"./attributes-pwFWEx45.js";import"./class-CoxErtGF.js";import"./legacy-client-DJX1Senp.js";import"./index-B5uFAxJM.js";import"./v4-CtRu48qb.js";const E={title:"components/buttons/FilterButton",component:o,argTypes:{className:{control:"text"},message:{control:"text"},expandedMessage:{control:"text"},expanded:{control:"boolean"},theme:{control:{type:"select",options:O}},disabled:{control:"boolean"}}},{Story:m}=G();var M=x('<div class="no-flexbox-gap"><!></div>'),S=x("<!> <!>",1);function f(v,_){F(_,!0);let e=C(!1),n=()=>{N(e,!s(e)),w("click")()};var r=S(),l=$(r);m(l,{name:"Default",args:{className:"example-class",disabled:!1},children:(t,a=d)=>{o(t,c(a,{get expanded(){return s(e)},$$events:{click:n}}))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<FilterButton {...args}>
  {#snippet children(args)}
<FilterButton {...args} {expanded} on:click={handleClick} />
{/snippet}
</FilterButton>`}}});var g=k(l,2);m(g,{name:"No flexbox gap",args:{className:"example-class",disabled:!1},children:(t,a=d)=>{var i=M(),b=y(i);o(b,c(a,{get expanded(){return s(e)},$$events:{click:n}})),p(t,i)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<FilterButton {...args}>
  {#snippet children(args)}
<div class="no-flexbox-gap">
  <FilterButton {...args} {expanded} on:click={handleClick} />
</div>
{/snippet}
</FilterButton>`}}}),p(v,r),B()}f.__docgen={version:3,name:"index.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const u=D(f,E),J=["Default","NoFlexboxGap"],K={...u.Default,tags:["svelte-csf-v5"]},L={...u.NoFlexboxGap,tags:["svelte-csf-v5"]};export{K as Default,L as NoFlexboxGap,J as __namedExportsOrder,E as default};
