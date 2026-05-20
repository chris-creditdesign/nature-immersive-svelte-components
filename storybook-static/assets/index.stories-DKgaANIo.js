import{aE as v,aW as e,z as a,aa as f,s as h,aB as g,a9 as _}from"./props-D2QecWz3.js";import{c as b,d as y}from"./create-runtime-stories-BTZEUp9S.js";import{e as D,i as k}from"./each-C-_z2p6v.js";import{i as T}from"./lifecycle-BxzyBO6_.js";import{V as $}from"./index-CK8iok0L.js";import{Y as C}from"./index-BgIbuoIy.js";import{v as o}from"./video-data-array-DOf3FiVt.js";import"./index-C__6K5js.js";import"./class-CoxErtGF.js";import"./index-DZ5e75Qv.js";import"./index-client-B4LLJqus.js";import"./attributes-pwFWEx45.js";import"./this-B0xwDqzd.js";import"./legacy-client-DJX1Senp.js";import"./youtube-iframe-api-ready-D29aQybQ.js";import"./index-BgQRSmCm.js";import"./index-BZ9D-Wmf.js";import"./svelte-element-DeaYRF6t.js";import"./index-C__dGtKU.js";import"./index-ptHkvhc7.js";import"./index-z2squIO3.js";import"./slot-ChEXTifl.js";import"./index-ClUjit7f.js";const L={title:"components/sections/YouTubeSection"},{Story:x}=y();var q=_(`<div class="stack" style="--stack-space--component: var(--s2);"><div class="center stack" style="--center-measure--component: var(--measure-big);"><h2>The top ten</h2> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.</p></div> <!> <div class="center stack" style="--center-measure--component: var(--measure-big);"><h2>The runners up</h2> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.</p> <!></div></div>`);function n(s,r){v(r,!1),T(),x(s,{name:"Default",children:(m,U)=>{var t=q(),i=e(a(t),2);D(i,1,()=>o,k,(c,u,l)=>{$(c,{get videoData(){return f(u)},videoOnLeft:l%2!==0})});var d=e(i,2),p=e(a(d),4);C(p,{get videoDataArray(){return o}}),h(m,t)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<undefined {...args}>
  <div class="stack" style="--stack-space--component: var(--s2);">
<div
  class="center stack"
  style="--center-measure--component: var(--measure-big);"
>
  <h2>The top ten</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam.
  </p>
</div>

{#each videoDataArray as videoData, i}
  <VideoCard {videoData} videoOnLeft={i % 2 !== 0} />
{/each}

<div
  class="center stack"
  style="--center-measure--component: var(--measure-big);"
>
  <h2>The runners up</h2>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam.
  </p>
  <YouTubeCarousel {videoDataArray} />
</div>
</div>
</undefined>`}}}),g()}n.__docgen={version:3,name:"index.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const A=b(n,L),ee=["Default"],te={...A.Default,tags:["svelte-csf-v5"]};export{te as Default,ee as __namedExportsOrder,L as default};
