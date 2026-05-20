import{aE as y,a7 as r,ay as l,aW as p,s as c,aB as b,a9 as f,aY as m}from"./props-D2QecWz3.js";import{c as V,d as R}from"./create-runtime-stories-BTZEUp9S.js";import{S as e}from"./index-DTaZVq6P.js";import{i as $}from"./lifecycle-BxzyBO6_.js";import{S as O}from"./index-kMN-P2iR.js";import{s as P}from"./options-B0eN1I47.js";import"./index-C__6K5js.js";import"./index-client-B4LLJqus.js";import"./html-DCvpNGh9.js";import"./attributes-pwFWEx45.js";import"./class-CoxErtGF.js";import"./media-BnM_itxq.js";import"./this-B0xwDqzd.js";import"./index-BPMxnp8X.js";import"./slot-ChEXTifl.js";import"./index-Dl2iB8Kv.js";import"./legacy-client-DJX1Senp.js";import"./svelte-element-DeaYRF6t.js";const w={title:"components/videos/SimpleVideo",component:e,argTypes:{altText:{control:"text"},autoplay:{control:"boolean"},buttonAtTop:{control:"boolean"},buttonOnLeft:{control:"boolean"},caption:{control:"text"},captionSpace:{control:{type:"select",options:P}},className:{control:"text"},frameRatioHeight:{control:"number"},frameRatioWidth:{control:"number"},loop:{control:"boolean"},pausedMessage:{control:"text"},playingMessage:{control:"text"},srcURL:{control:"text"}}},{Story:d}=R();var L=f("<!> <!>",1),M=f("<!> <!>",1);function u(h,v){y(v,!1),$();var a=M(),s=r(a);d(s,{name:"Default",args:{altText:"This is the alt text",autoplay:!0,buttonAtTop:!1,buttonOnLeft:!1,caption:"This is the caption",captionSpace:0,className:"example-class",frameRatioHeight:9,frameRatioWidth:16,loop:!0,pausedMessage:"Play video",playingMessage:"Pause video",srcURL:"video/video-small.jpg"},parameters:{layout:"fullscreen",__svelteCsf:{rawCode:`<SimpleVideo {...args}>
  {#snippet children(args)}
<SimpleVideo {...args} />
{/snippet}
</SimpleVideo>`}},children:(t,o=l)=>{e(t,m(o))},$$slots:{default:!0}});var _=p(s,2);d(_,{name:"Two videos on page",args:{altText:"This is the alt text",autoplay:!0,buttonAtTop:!1,buttonOnLeft:!1,caption:"This is the caption",captionSpace:0,className:"example-class",frameRatioHeight:9,frameRatioWidth:16,loop:!0,pausedMessage:"Play video",playingMessage:"Pause video",srcURL:"video/video-small.jpg"},parameters:{layout:"fullscreen",__svelteCsf:{rawCode:`<SimpleVideo {...args}>
  {#snippet children(args)}
<Stack>
  <SimpleVideo {...args} />
  <SimpleVideo
    altText="This is the alt text"
    caption="This is the caption"
    srcURL="video/video-small.jpg"
  />
</Stack>
{/snippet}
</SimpleVideo>`}},children:(t,o=l)=>{O(t,{children:(x,D)=>{var i=L(),n=r(i);e(n,m(o));var S=p(n,2);e(S,{altText:"This is the alt text",caption:"This is the caption",srcURL:"video/video-small.jpg"}),c(x,i)},$$slots:{default:!0}})},$$slots:{default:!0}}),c(h,a),b()}u.__docgen={version:3,name:"index.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const g=V(u,w),Q=["Default","TwoVideosOnPage"],X={...g.Default,tags:["svelte-csf-v5"]},Z={...g.TwoVideosOnPage,tags:["svelte-csf-v5"]};export{X as Default,Z as TwoVideosOnPage,Q as __namedExportsOrder,w as default};
