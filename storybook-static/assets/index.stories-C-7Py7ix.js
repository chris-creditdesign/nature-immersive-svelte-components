import{aC as m,b1 as I,s,aB as Y,aE as Z,a7 as U,ah as E,a9 as o,z as T,aO as k,aa as a,aW as c,ay as M,aZ as _,aY as W}from"./props-D2QecWz3.js";import{s as se,c as oe,d as re}from"./create-runtime-stories-BTZEUp9S.js";import{o as ne}from"./index-client-B4LLJqus.js";import{s as p}from"./attributes-pwFWEx45.js";import{s as le,c as ce}from"./class-CoxErtGF.js";import{b as de}from"./media-BnM_itxq.js";import{b as ue}from"./this-B0xwDqzd.js";import{C as me}from"./index-fkAr7c7C.js";import{C as pe}from"./index-DIpgIIqU.js";import{V as ve}from"./index-Dl2iB8Kv.js";import{i as ge}from"./lifecycle-BxzyBO6_.js";import{C as z}from"./index-BF8sVA0F.js";import{S as R}from"./index-kMN-P2iR.js";import{H as G}from"./index-BMRJVhMv.js";import{a as J}from"./article-data-BBgwOk-3.js";import{c as fe,s as be}from"./options-B0eN1I47.js";import"./index-C__6K5js.js";import"./slot-ChEXTifl.js";import"./svelte-element-DeaYRF6t.js";import"./legacy-client-DJX1Senp.js";import"./html-DCvpNGh9.js";var he=o('<video playsinline="true" loop="true" class="svelte-1pi3swo"><source type="video/webm"/> <source type="video/mp4"/></video>',2),ye=o('<img class="svelte-1pi3swo"/>'),ke=o('<!> <div class="cover__centered"><!></div> <!>',1),_e=o("<div><!></div>");function P(V,e){Z(e,!0);let q=m(e,"coverSpace",3,"var(--s0)"),C=m(e,"coverHeight",3,"100vh"),x=m(e,"buttonClassName",3,""),$=m(e,"buttonPausedMessage",3,"Play video"),S=m(e,"buttonPlayingMessage",3,"Pause video"),r=m(e,"buttonTheme",3,""),v=!!e.children?"cover-with-background":null,g=_(!1),n=_(!0),f=_(!0),u=_(void 0),w=_(void 0),l=e.srcURL.replace(/-small/,""),L=e.srcURL.replace(/-small/,"").slice(0,-4).concat(".webm"),b=e.srcURL.replace(/-small/,"").slice(0,-4).concat(".mp4");ne(async()=>{k(w,()=>{a(u)[a(n)?"play":"pause"]()}),k(g,!0),k(f,window.matchMedia("(prefers-reduced-motion: reduce)").matches,!0)});var h=_e(),y=T(h);pe(y,{get coverSpace(){return q()},get coverHeight(){return C()},children:(K,we)=>{var O=ke(),A=U(O);{var Q=i=>{var t=he();t.muted="true";var B=T(t),ae=c(B,2);ue(t,H=>k(u,H),()=>a(u)),I(()=>{p(t,"poster",l),t.autoplay=!a(f),p(t,"aria-label",e.alt),p(B,"src",L),p(ae,"src",b)}),de(t,()=>a(n),H=>k(n,H)),s(i,t)},X=i=>{var t=ye();I(()=>{p(t,"src",e.srcURL),p(t,"alt",e.alt)}),s(i,t)};E(A,i=>{a(g)?i(Q):i(X,-1)})}var j=c(A,2),ee=T(j);se(ee,()=>e.children??M);var te=c(j,2);{var ie=i=>{me(i,{clusterJustifyContent:"flex-end",children:(t,B)=>{ve(t,{get className(){return x()},get pausedMessage(){return $()},get playingMessage(){return S()},get theme(){return r()},get paused(){return a(n)},get onclick(){return a(w)}})},$$slots:{default:!0}})};E(te,i=>{a(g)&&i(ie)})}s(K,O)},$$slots:{default:!0}}),I(()=>le(h,1,ce(v),"svelte-1pi3swo")),s(V,h),Y()}P.__docgen={data:[{name:"srcURL",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1},{name:"alt",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1},{name:"coverSpace",visibility:"public",description:"Side padding of sloted content",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"var(--s0)"'},{name:"coverHeight",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"100vh"'},{name:"buttonClassName",visibility:"public",description:"Optional class to add to button element.",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"buttonPausedMessage",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"Play video"'},{name:"buttonPlayingMessage",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"Pause video"'},{name:"buttonTheme",visibility:"public",description:"Optional to add `data-theme` to button element.",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"children",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1}],name:"index.svelte"};const Pe={title:"components/sections/CoverBackgroundVideo",component:P,argTypes:{srcURL:{control:"text"},alt:{control:"text"},coverSpace:{control:{type:"select",options:be}},coverHeight:{control:{type:"select",options:fe}}},parameters:{layout:"fullscreen"}},{Story:D}=re();var qe=o(`<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            quidem temporibus beatae amet facilis, qui est praesentium laborum! Id
            vero repellat nostrum iure incidunt eligendi quasi architecto officia
            odio eos!</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            quidem temporibus beatae amet facilis, qui est praesentium laborum! Id
            vero repellat nostrum iure incidunt eligendi quasi architecto officia
            odio eos!</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            quidem temporibus beatae amet facilis, qui est praesentium laborum! Id
            vero repellat nostrum iure incidunt eligendi quasi architecto officia
            odio eos!</p>`,1),Ce=o(`<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            quidem temporibus beatae amet facilis, qui est praesentium laborum! Id
            vero repellat nostrum iure incidunt eligendi quasi architecto officia
            odio eos!</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            quidem temporibus beatae amet facilis, qui est praesentium laborum! Id
            vero repellat nostrum iure incidunt eligendi quasi architecto officia
            odio eos!</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            quidem temporibus beatae amet facilis, qui est praesentium laborum! Id
            vero repellat nostrum iure incidunt eligendi quasi architecto officia
            odio eos!</p>`,1),xe=o("<!> <!> <!>",1),Se=o("<!> <!> <!>",1);function F(V,e){Z(e,!1),ge();var q=Se(),C=U(q);D(C,{name:"Default",args:{srcURL:"video/video-small.jpg",alt:"This is the alt text",coverSpace:"var(--s0)",coverHeight:"100vh",buttonClassName:"",buttonPausedMessage:"Play video",buttonPlayingMessage:"Pause video",buttonTheme:""},children:(r,d=M)=>{P(r,W(d))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<CoverBackgroundVideo {...args}>
  {#snippet children(args)}
<CoverBackgroundVideo {...args} />
{/snippet}
</CoverBackgroundVideo>`}}});var x=c(C,2);D(x,{name:"With Heading",args:{srcURL:"video/video-small.jpg",alt:"This is the alt text",coverSpace:"var(--s0)",coverHeight:"100vh",buttonClassName:"",buttonPausedMessage:"Play video",buttonPlayingMessage:"Pause video",buttonTheme:""},children:(r,d=M)=>{P(r,W(d,{children:(v,g)=>{G(v,{get articleData(){return J}})},$$slots:{default:!0}}))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<CoverBackgroundVideo {...args}>
  {#snippet children(args)}
<CoverBackgroundVideo {...args}>
  <Heading {articleData} />
</CoverBackgroundVideo>
{/snippet}
</CoverBackgroundVideo>`}}});var $=c(x,2);D($,{name:"With text around",args:{srcURL:"video/video-small.jpg",alt:"This is the alt text",coverSpace:"var(--s0)",coverHeight:"100vh",buttonClassName:"",buttonPausedMessage:"Play video",buttonPlayingMessage:"Pause video",buttonTheme:""},children:(r,d=M)=>{R(r,{stackSpace:"var(--s3)",children:(v,g)=>{var n=xe(),f=U(n);z(f,{children:(l,L)=>{R(l,{stackSpace:"var(--s0)",children:(b,h)=>{var y=qe();s(b,y)},$$slots:{default:!0}})},$$slots:{default:!0}});var u=c(f,2);P(u,W(d,{children:(l,L)=>{G(l,{get articleData(){return J}})},$$slots:{default:!0}}));var w=c(u,2);z(w,{children:(l,L)=>{R(l,{stackSpace:"var(--s0)",children:(b,h)=>{var y=Ce();s(b,y)},$$slots:{default:!0}})},$$slots:{default:!0}}),s(v,n)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<CoverBackgroundVideo {...args}>
  {#snippet children(args)}
<Stack stackSpace="var(--s3)">
  <Center>
    <Stack stackSpace="var(--s0)">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
        quidem temporibus beatae amet facilis, qui est praesentium laborum! Id
        vero repellat nostrum iure incidunt eligendi quasi architecto officia
        odio eos!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
        quidem temporibus beatae amet facilis, qui est praesentium laborum! Id
        vero repellat nostrum iure incidunt eligendi quasi architecto officia
        odio eos!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
        quidem temporibus beatae amet facilis, qui est praesentium laborum! Id
        vero repellat nostrum iure incidunt eligendi quasi architecto officia
        odio eos!
      </p>
    </Stack>
  </Center>

  <CoverBackgroundVideo {...args}>
    <Heading {articleData} />
  </CoverBackgroundVideo>

  <Center>
    <Stack stackSpace="var(--s0)">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
        quidem temporibus beatae amet facilis, qui est praesentium laborum! Id
        vero repellat nostrum iure incidunt eligendi quasi architecto officia
        odio eos!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
        quidem temporibus beatae amet facilis, qui est praesentium laborum! Id
        vero repellat nostrum iure incidunt eligendi quasi architecto officia
        odio eos!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
        quidem temporibus beatae amet facilis, qui est praesentium laborum! Id
        vero repellat nostrum iure incidunt eligendi quasi architecto officia
        odio eos!
      </p>
    </Stack>
  </Center>
</Stack>
{/snippet}
</CoverBackgroundVideo>`}}}),s(V,q),Y()}F.__docgen={version:3,name:"index.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const N=oe(F,Pe),Ze=["Default","WithHeading","WithTextAround"],Fe={...N.Default,tags:["svelte-csf-v5"]},Ke={...N.WithHeading,tags:["svelte-csf-v5"]},Qe={...N.WithTextAround,tags:["svelte-csf-v5"]};export{Fe as Default,Ke as WithHeading,Qe as WithTextAround,Ze as __namedExportsOrder,Pe as default};
