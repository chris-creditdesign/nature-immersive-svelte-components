import{aE as P,a7 as c,ay as T,aW as t,s as _,aB as I,a9 as L,aY as q}from"./props-D2QecWz3.js";import{c as h,d as M}from"./create-runtime-stories-BTZEUp9S.js";import{L as e}from"./index-DZ5e75Qv.js";import{i as R}from"./lifecycle-BxzyBO6_.js";import{S as A}from"./index-kMN-P2iR.js";import"./index-C__6K5js.js";import"./index-client-B4LLJqus.js";import"./attributes-pwFWEx45.js";import"./class-CoxErtGF.js";import"./this-B0xwDqzd.js";import"./legacy-client-DJX1Senp.js";import"./youtube-iframe-api-ready-D29aQybQ.js";import"./index-BgQRSmCm.js";import"./slot-ChEXTifl.js";import"./svelte-element-DeaYRF6t.js";const V={title:"components/videos/LiteYouTube",component:e,argTypes:{videoId:{control:"text"},videoRatioHeight:{control:"number"},videoRatioWidth:{control:"number"},playVideoRequested:{control:"boolean"},autoplay:{control:"boolean"}}},{Story:s}=M();var k=L("<!> <!> <!> <!>",1),Q=L("<!> <!> <!> <!>",1);function Y(b,$){P($,!1),R();var d=Q(),l=c(d);s(l,{name:"Default",args:{videoId:"kYmLQP2M-qo",videoRatioHeight:9,videoRatioWidth:16,playVideoRequested:!1,autoplay:!0},children:(a,r=T)=>{e(a,q(r))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<LiteYouTube {...args}>
  {#snippet children(args)}
<LiteYouTube {...args} />
{/snippet}
</LiteYouTube>`}}});var u=t(l,2);s(u,{name:"Multiple videos",children:(o,a)=>{A(o,{children:(r,C)=>{var p=k(),m=c(p);e(m,{videoId:"kYmLQP2M-qo"});var v=t(m,2);e(v,{videoId:"K09xzIQ8zsg"});var f=t(v,2);e(f,{videoId:"vponeaNiewE"});var g=t(f,2);e(g,{videoId:"5AXApBbj1ps"}),_(r,p)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<LiteYouTube {...args}>
  <Stack>
<LiteYouTube videoId={"kYmLQP2M-qo"} />
<LiteYouTube videoId={"K09xzIQ8zsg"} />
<LiteYouTube videoId={"vponeaNiewE"} />
<LiteYouTube videoId={"5AXApBbj1ps"} />
</Stack>
</LiteYouTube>`}}});var n=t(u,2);s(n,{name:"Play video requested",children:(o,a)=>{e(o,{videoId:"kYmLQP2M-qo",playVideoRequested:!0})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<LiteYouTube {...args}>
  <LiteYouTube videoId={"kYmLQP2M-qo"} playVideoRequested={true} />
</LiteYouTube>`}}});var y=t(n,2);s(y,{name:"No auto play after load",children:(o,a)=>{e(o,{videoId:"kYmLQP2M-qo",autoplay:!1})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<LiteYouTube {...args}>
  <LiteYouTube videoId={"kYmLQP2M-qo"} autoplay={false} />
</LiteYouTube>`}}}),_(b,d),I()}Y.__docgen={version:3,name:"index.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const i=h(Y,V),G=["Default","MultipleVideos","PlayVideoRequested","NoAutoPlayAfterLoad"],J={...i.Default,tags:["svelte-csf-v5"]},U={...i.MultipleVideos,tags:["svelte-csf-v5"]},Z={...i.PlayVideoRequested,tags:["svelte-csf-v5"]},ee={...i.NoAutoPlayAfterLoad,tags:["svelte-csf-v5"]};export{J as Default,U as MultipleVideos,ee as NoAutoPlayAfterLoad,Z as PlayVideoRequested,G as __namedExportsOrder,V as default};
