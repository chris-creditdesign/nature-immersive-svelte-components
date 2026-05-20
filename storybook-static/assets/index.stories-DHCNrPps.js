import{aE as $,a7 as k,ay as c,aW as T,s as p,aB as B,a9 as m,aY as i,aa as s,aO as C,aZ as N,z as D}from"./props-D2QecWz3.js";import{c as y,d as F}from"./create-runtime-stories-BTZEUp9S.js";import{T as o}from"./index-PYXibYPU.js";import{a as G}from"./index-B-lxVbXh.js";import"./index-C__6K5js.js";import"./attributes-pwFWEx45.js";import"./class-CoxErtGF.js";import"./legacy-client-DJX1Senp.js";import"./index-CHrq1IJQ.js";import"./v4-CtRu48qb.js";const w={title:"Components/buttons/ToggleButton",component:o,argTypes:{className:{control:"text"},expanded:{control:"boolean"},expandedMessage:{control:"text"},message:{control:"text"},theme:{control:"text"},disabled:{control:"boolean"}}},{Story:g}=F();var M=m('<div class="no-flexbox-gap"><!></div>'),E=m("<!> <!>",1);function x(u,v){$(v,!0);let e=N(!1),n=()=>{C(e,!s(e)),G("click")()};var l=E(),r=k(l);g(r,{name:"Default",args:{className:"example-class",expanded:!1,expandedMessage:"Checked",message:"Unchecked",theme:"",disabled:!1},children:(a,t=c)=>{o(a,i(t,{get expanded(){return s(e)},$$events:{click:n}}))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<ToggleButton {...args}>
  {#snippet children(args)}
<ToggleButton {...args} {expanded} on:click={handleClick} />
{/snippet}
</ToggleButton>`}}});var _=T(r,2);g(_,{name:"No flexbox gap",args:{className:"example-class",disabled:!1},children:(a,t=c)=>{var d=M(),b=D(d);o(b,i(t,{get expanded(){return s(e)},$$events:{click:n}})),p(a,d)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<ToggleButton {...args}>
  {#snippet children(args)}
<div class="no-flexbox-gap">
  <ToggleButton {...args} {expanded} on:click={handleClick} />
</div>
{/snippet}
</ToggleButton>`}}}),p(u,l),B()}x.__docgen={version:3,name:"index.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const f=y(x,w),q=["Default","NoFlexboxGap"],A={...f.Default,tags:["svelte-csf-v5"]},H={...f.NoFlexboxGap,tags:["svelte-csf-v5"]};export{A as Default,H as NoFlexboxGap,q as __namedExportsOrder,w as default};
