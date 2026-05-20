import{aE as V,a7 as N,ay as l,aa as d,aW as b,s as c,aB as y,a9 as u,aY as p,a1 as v,z as m}from"./props-D2QecWz3.js";import{c as S,d as z}from"./create-runtime-stories-BTZEUp9S.js";import{V as o}from"./index-BZ9D-Wmf.js";import{i as C}from"./lifecycle-BxzyBO6_.js";import{f as L,h as j}from"./options-B0eN1I47.js";import{v as f}from"./video-data-array-DOf3FiVt.js";import"./index-C__6K5js.js";import"./svelte-element-DeaYRF6t.js";import"./attributes-pwFWEx45.js";import"./class-CoxErtGF.js";import"./index-C__dGtKU.js";import"./index-ptHkvhc7.js";const w={title:"components/sections/YouTubeSection/VideoInfo",component:o,argTypes:{videoData:{control:"objet"},headerLevel:{control:{type:"select",options:j}},headlineFontSize:{control:{type:"select",options:L}},className:{control:"text"}}},{Story:_}=z();var F=u('<div class="cluster"><div class="container svelte-9bgcj6"><!></div> <div class="test svelte-9bgcj6"></div></div>'),O=u("<!> <!>",1);function g(I,x){V(x,!1),C();var n=O(),r=N(n);{const e=(s,a=l)=>{o(s,p(a))};let t=v(()=>({videoData:f[0],headerLevel:"h2",headlineFontSize:"big-1",className:"test"}));_(r,{name:"Default",get args(){return d(t)},children:e,$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<VideoInfo {...args}>
  {#snippet children(args)}
<VideoInfo {...args} />
{/snippet}
</VideoInfo>`}}})}var T=b(r,2);{const e=(s,a=l)=>{var i=F(),$=m(i),D=m($);o(D,p(a)),c(s,i)};let t=v(()=>({videoData:f[0],headerLevel:"h2",headlineFontSize:"big-1",className:"test"}));_(T,{name:"Next to tall item",get args(){return d(t)},children:e,$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<VideoInfo {...args}>
  {#snippet children(args)}
<div class="cluster">
  <div class="container">
    <VideoInfo {...args} />
  </div>
  <div class="test"></div>
</div>
{/snippet}
</VideoInfo>`}}})}c(I,n),y()}g.__docgen={version:3,name:"index.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const h=S(g,w),K=["Default","NextToTallItem"],P={...h.Default,tags:["svelte-csf-v5"]},Q={...h.NextToTallItem,tags:["svelte-csf-v5"]};export{P as Default,Q as NextToTallItem,K as __namedExportsOrder,w as default};
