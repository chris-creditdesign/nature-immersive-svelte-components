import{aC as h,b1 as H,s,aB as T,aE as U,a7 as x,a9 as o,z as B,aO as V,aW as u,ay as b,aa as j,b6 as E,aY as I}from"./props-D2QecWz3.js";import{s as M,c as z,d as N}from"./create-runtime-stories-BTZEUp9S.js";import{o as Y}from"./index-client-B4LLJqus.js";import{s as W}from"./attributes-pwFWEx45.js";import{s as F,c as G}from"./class-CoxErtGF.js";import{C as J}from"./index-DIpgIIqU.js";import{i as K}from"./lifecycle-BxzyBO6_.js";import{C as w}from"./index-BF8sVA0F.js";import{S}from"./index-kMN-P2iR.js";import{H as D}from"./index-BMRJVhMv.js";import{a as R}from"./article-data-BBgwOk-3.js";import{c as Q,s as X}from"./options-B0eN1I47.js";import"./index-C__6K5js.js";import"./slot-ChEXTifl.js";import"./svelte-element-DeaYRF6t.js";import"./html-DCvpNGh9.js";var Z=o('<img class="svelte-2k1hya"/> <div class="cover__centered"><!></div>',1),ee=o("<div><!></div>");function m(_,e){U(e,!0);let n=h(e,"srcURL",3,""),p=h(e,"alt",3,""),g=h(e,"coverSpace",3,"var(--s0)"),k=h(e,"coverHeight",3,"100vh"),c=E(n),t=!!e.children?"cover-with-background":null;Y(()=>{V(c,n().replace(/-small/,""))});var i=ee(),y=B(i);J(y,{get coverSpace(){return g()},get coverHeight(){return k()},children:(v,q)=>{var l=Z(),d=x(l),a=u(d,2),f=B(a);M(f,()=>e.children??b),H(()=>{W(d,"src",j(c)),W(d,"alt",p())}),s(v,l)},$$slots:{default:!0}}),H(()=>F(i,1,G(t),"svelte-2k1hya")),s(_,i),T()}m.__docgen={data:[{name:"srcURL",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"alt",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"coverSpace",visibility:"public",description:"Side padding of sloted content",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"var(--s0)"'},{name:"coverHeight",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"100vh"'},{name:"children",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1}],name:"index.svelte"};const te={title:"components/sections/CoverBackgroundImage",component:m,argTypes:{srcURL:{control:"text"},alt:{control:"text"},coverSpace:{control:{type:"select",options:X}},coverHeight:{control:{type:"select",options:Q}}},parameters:{layout:"fullscreen"}},{Story:P}=N();var ie=o(`<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            quidem temporibus beatae amet facilis, qui est praesentium laborum! Id
            vero repellat nostrum iure incidunt eligendi quasi architecto officia
            odio eos!</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            quidem temporibus beatae amet facilis, qui est praesentium laborum! Id
            vero repellat nostrum iure incidunt eligendi quasi architecto officia
            odio eos!</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            quidem temporibus beatae amet facilis, qui est praesentium laborum! Id
            vero repellat nostrum iure incidunt eligendi quasi architecto officia
            odio eos!</p>`,1),ae=o(`<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            quidem temporibus beatae amet facilis, qui est praesentium laborum! Id
            vero repellat nostrum iure incidunt eligendi quasi architecto officia
            odio eos!</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            quidem temporibus beatae amet facilis, qui est praesentium laborum! Id
            vero repellat nostrum iure incidunt eligendi quasi architecto officia
            odio eos!</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            quidem temporibus beatae amet facilis, qui est praesentium laborum! Id
            vero repellat nostrum iure incidunt eligendi quasi architecto officia
            odio eos!</p>`,1),re=o("<!> <!> <!>",1),se=o("<!> <!> <!>",1);function A(_,e){U(e,!1),K();var n=se(),p=x(n);P(p,{name:"Default",args:{srcURL:"img/image-small.jpg",alt:"This is the alt text",coverSpace:"var(--s0)",coverHeight:"100vh"},children:(r,t=b)=>{m(r,I(t))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<CoverBackgroundImage {...args}>
  {#snippet children(args)}
<CoverBackgroundImage {...args} />
{/snippet}
</CoverBackgroundImage>`}}});var g=u(p,2);P(g,{name:"With Heading",args:{srcURL:"img/image-small.jpg",alt:"This is the alt text",coverSpace:"var(--s0)",coverHeight:"100vh"},children:(r,t=b)=>{m(r,I(t,{children:(i,y)=>{D(i,{get articleData(){return R}})},$$slots:{default:!0}}))},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<CoverBackgroundImage {...args}>
  {#snippet children(args)}
<CoverBackgroundImage {...args}>
  <Heading {articleData} />
</CoverBackgroundImage>
{/snippet}
</CoverBackgroundImage>`}}});var k=u(g,2);P(k,{name:"With text around",args:{srcURL:"img/image-small.jpg",alt:"This is the alt text",coverSpace:"var(--s0)",coverHeight:"100vh"},children:(r,t=b)=>{S(r,{stackSpace:"var(--s3)",children:(i,y)=>{var v=re(),q=x(v);w(q,{children:(a,f)=>{S(a,{stackSpace:"var(--s0)",children:($,O)=>{var C=ie();s($,C)},$$slots:{default:!0}})},$$slots:{default:!0}});var l=u(q,2);m(l,I(t,{children:(a,f)=>{D(a,{get articleData(){return R}})},$$slots:{default:!0}}));var d=u(l,2);w(d,{children:(a,f)=>{S(a,{stackSpace:"var(--s0)",children:($,O)=>{var C=ae();s($,C)},$$slots:{default:!0}})},$$slots:{default:!0}}),s(i,v)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<CoverBackgroundImage {...args}>
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

  <CoverBackgroundImage {...args}>
    <Heading {articleData} />
  </CoverBackgroundImage>

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
</CoverBackgroundImage>`}}}),s(_,n),T()}A.__docgen={version:3,name:"index.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const L=z(A,te),qe=["Default","WithHeading","WithTextAround"],$e={...L.Default,tags:["svelte-csf-v5"]},Ce={...L.WithHeading,tags:["svelte-csf-v5"]},Ie={...L.WithTextAround,tags:["svelte-csf-v5"]};export{$e as Default,Ce as WithHeading,Ie as WithTextAround,qe as __namedExportsOrder,te as default};
