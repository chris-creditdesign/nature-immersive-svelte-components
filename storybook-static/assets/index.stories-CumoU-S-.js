import{aE as b,a7 as $,ay as i,aW as g,s as l,aB as y,a9 as h,aY as d,aa as o,aO as B,aZ as N,z as x}from"./props-D2QecWz3.js";import{c as D,d as O}from"./create-runtime-stories-BTZEUp9S.js";import{S as n}from"./index-ByBRqPnX.js";import{a as W}from"./index-B-lxVbXh.js";import{t as F,s as G,j as J}from"./options-B0eN1I47.js";import"./index-C__6K5js.js";import"./attributes-pwFWEx45.js";import"./class-CoxErtGF.js";import"./legacy-client-DJX1Senp.js";import"./index-fkAr7c7C.js";import"./slot-ChEXTifl.js";import"./svelte-element-DeaYRF6t.js";import"./lifecycle-BxzyBO6_.js";import"./v4-CtRu48qb.js";const j={title:"components/buttons/SwitchButton",component:n,argTypes:{className:{control:"text"},clusterJustifyContent:{control:{type:"select",options:J}},clusterSpace:{control:{type:"select",options:G}},checked:{control:"boolean"},message:{control:"text"},theme:{control:{type:"select",options:F}},disabled:{control:"boolean"}}},{Story:p}=O();var E=h('<div style="width: 160px; border: 1px dashed red;"><!></div>'),z=h('<div class="no-flexbox-gap"><!></div>'),A=h("<!> <!> <!>",1);function k(w,C){b(C,!0);let e=N(!1),r=()=>{B(e,!o(e)),W("click")()};var u=A(),f=$(u);p(f,{name:"Default",args:{className:"example-class",clusterJustifyContent:"flex-start",clusterSpace:"var(--s-1)",checked:!1,message:"Switch:",theme:"",disabled:!1},children:(t,s=i)=>{n(t,d(s,{get checked(){return o(e)},$$events:{click:r}}))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<SwitchButton {...args}>
  {#snippet children(args)}
<SwitchButton {...args} {checked} on:click={handleClick} />
{/snippet}
</SwitchButton>`}}});var v=g(f,2);p(v,{name:"Constrained width",args:{className:"example-class",message:"Animation:",clusterJustifyContent:"center",clusterSpace:"var(--s-4)",disabled:!1},children:(t,s=i)=>{var a=E(),c=x(a);n(c,d(s,{get checked(){return o(e)},$$events:{click:r}})),l(t,a)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<SwitchButton {...args}>
  {#snippet children(args)}
<div style="width: 160px; border: 1px dashed red;">
  <SwitchButton {...args} {checked} on:click={handleClick} />
</div>
{/snippet}
</SwitchButton>`}}});var S=g(v,2);p(S,{name:"No flexbox gap",args:{className:"example-class",clusterJustifyContent:"flex-start",clusterSpace:"var(--s-1)",checked:!1,message:"Switch:",theme:"",disabled:!1},children:(t,s=i)=>{var a=z(),c=x(a);n(c,d(s,{get checked(){return o(e)},$$events:{click:r}})),l(t,a)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<SwitchButton {...args}>
  {#snippet children(args)}
<div class="no-flexbox-gap">
  <SwitchButton {...args} {checked} on:click={handleClick} />
</div>
{/snippet}
</SwitchButton>`}}}),l(w,u),y()}k.__docgen={version:3,name:"index.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const m=D(k,j),X=["Default","ConstrainedWidth","NoFlexboxGap"],ee={...m.Default,tags:["svelte-csf-v5"]},te={...m.ConstrainedWidth,tags:["svelte-csf-v5"]},se={...m.NoFlexboxGap,tags:["svelte-csf-v5"]};export{te as ConstrainedWidth,ee as Default,se as NoFlexboxGap,X as __namedExportsOrder,j as default};
