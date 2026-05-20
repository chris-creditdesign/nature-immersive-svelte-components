import{bb as _e,Y as be,aE as H,a$ as ye,b1 as oe,Z as $e,aa as o,a5 as U,s as e,aB as K,a_ as le,aT as ce,b6 as T,z as l,a9 as s,aW as d,aS as ge,aC as ke,ah as te,$ as Se,aO as I,aZ as R,a7 as W,ay as M,G as Y,aY as Z}from"./props-D2QecWz3.js";import{s as re,c as xe,d as De}from"./create-runtime-stories-BTZEUp9S.js";import{o as Pe}from"./index-client-B4LLJqus.js";import{t as Ae,f as Be}from"./index-CHIhzn1q.js";import{s as qe}from"./class-CoxErtGF.js";import{S as E}from"./index-kMN-P2iR.js";import{s as ae}from"./attributes-pwFWEx45.js";import{b as Ce}from"./this-B0xwDqzd.js";import{c as ve}from"./legacy-client-DJX1Senp.js";import{D as We}from"./index-BUvFZG0q.js";import{h as Ee}from"./html-DCvpNGh9.js";import{e as L,i as F}from"./each-C-_z2p6v.js";import{a as Te}from"./index-B-lxVbXh.js";import{B as ie}from"./index-WXAuYvDP.js";import{S as Ne}from"./index-z2squIO3.js";import{S as de}from"./index-ByBRqPnX.js";import{a as Le}from"./article-data-BBgwOk-3.js";import"./index-C__6K5js.js";import"./slot-ChEXTifl.js";import"./svelte-element-DeaYRF6t.js";import"./lifecycle-BxzyBO6_.js";import"./v4-CtRu48qb.js";import"./index-fkAr7c7C.js";const se=_e();var Fe=s('<button class="svelte-1vzt8se"><!></button>');function fe(O,v){H(v,!0);const x=()=>le(se,"$buttonElement",A),[A,N]=ce(),g=ve();var f=Fe(),B=T(()=>g("click")),u=T(()=>g("focus")),h=T(()=>g("blur")),q=l(f);We(q,{width:30,title:"Download PDF"}),Ce(f,r=>ye(se,r),()=>x()),oe(()=>ae(f,"aria-expanded",v.expanded)),$e("click",f,function(...r){var n;(n=o(B))==null||n.apply(this,r)}),U("focus",f,function(...r){var n;(n=o(u))==null||n.apply(this,r)}),U("blur",f,function(...r){var n;(n=o(h))==null||n.apply(this,r)}),e(O,f),K(),N()}be(["click"]);fe.__docgen={data:[{name:"expanded",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1}],name:"index.svelte"};var Ie=s('<div data-theme="invert" class="font-family:sans-serif svelte-177sk9h"><h2 class="font-size:base svelte-177sk9h"> </h2> <a class="svelte-177sk9h"><img alt="" class="svelte-177sk9h"/> <span class="svelte-177sk9h"></span></a></div>');function ne(O,v){H(v,!0);const x=ve();let{headline:A,srcURL:N,text:g}=v.cardData;var f=Ie(),B=l(f),u=l(B),h=d(B,2),q=T(()=>x("blur")),r=T(()=>x("focus")),n=l(h),k=d(n,2);Ee(k,()=>g,!0),oe(()=>{ge(u,A),ae(h,"href",`pdf/${v.doi}.pdf`),ae(n,"src",N)}),U("blur",h,function(..._){var m;(m=o(q))==null||m.apply(this,_)}),U("focus",h,function(..._){var m;(m=o(r))==null||m.apply(this,_)}),e(O,f),K()}ne.__docgen={data:[{name:"cardData",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1},{name:"doi",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1}],name:"index.svelte"};var Oe=s('<div class="card-container svelte-1wqhdqw"><!></div>'),Je=s("<!> <div><!> <!></div> <!>",1),Me=s('<div class="pdf-download svelte-1wqhdqw"><!></div>');function j(O,v){H(v,!0);const x=()=>le(se,"$buttonElement",A),[A,N]=ce();let g=ke(v,"wideEnough",3,!0),{doi:f}=v.articleData,B=R(!1),u=R(!0),h=!1,q=!1,r=R(void 0),n=R(void 0),k=()=>{I(u,!1)},_=()=>{x().focus()},m=()=>{I(u,!o(u))},z=()=>{h=!0},w=()=>{q=!0},b=t=>{let{key:p}=t,a=p==="Escape",i=q||h;a&&o(u)&&i&&(k(),_())};Pe(()=>{I(B,!0),I(u,!1),I(r,()=>{h=!1,window.setTimeout(()=>{q||I(u,!1)},0)}),I(n,()=>{q=!1,window.setTimeout(()=>{h||k()},0)})});var y=Me();U("keydown",Se,b);var C=l(y);{var S=t=>{E(t,{children:(p,a)=>{var i=Je(),c=W(i);re(c,()=>v.above??M);var D=d(c,2);let P;var Q=l(D);{var X=J=>{fe(J,{onclick:m,onfocus:z,get onblur(){return o(r)},get expanded(){return o(u)}})};te(Q,J=>{o(B)&&J(X)})}var pe=d(Q,2);{var me=J=>{var ee=Oe(),we=l(ee);ne(we,{onfocus:w,get onblur(){return o(n)},get cardData(){return v.cardData},get doi(){return f}}),Ae(2,ee,()=>Be),e(J,ee)};te(pe,J=>{o(u)&&J(me)})}var he=d(D,2);re(he,()=>v.below??M),oe(()=>P=qe(D,1,"inner stack__split-after svelte-1wqhdqw",null,P,{expanded:o(u)})),e(p,i)},$$slots:{default:!0}})},$=t=>{ne(t,{get cardData(){return v.cardData},get doi(){return f},onfocus:w,get onblur(){return o(n)}})};te(C,t=>{g()?t(S):t($,-1)})}e(O,y),K(),N()}j.__docgen={data:[{name:"cardData",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1},{name:"articleData",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1},{name:"wideEnough",visibility:"public",description:`Boolean for the parent Component to report if it is not wide enough for the slider.
Normally set in App.svelte and accessed via a store.
If not wide enough, hide the button and show the contents.`,keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"true"},{name:"above",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1},{name:"below",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1}],name:"index.svelte"};const je={title:"Components/PdfDownloadSlider",component:j,argTypes:{articleData:{control:"object"},cardData:{control:"object"},wideEnough:{control:"boolean"}},parameters:{layout:"fullscreen",controls:{hideNoControlsWarning:!0}}},{Story:G}=De();var ze=s('<div class="item svelte-qdoaow"></div>'),Re=s('<div class="item svelte-qdoaow"></div>'),Ue=s('<a href="https://www.nature.com">Previous focusable item</a> <div class="grid svelte-qdoaow"><!> <div class="pdf-slider svelte-qdoaow"><!></div></div> <a href="https://www.nature.com">Next focusable item</a> <!>',1),Ye=s('<div class="item svelte-qdoaow"></div>'),Ze=s("<div><!></div>"),Ge=s('<div class="item svelte-qdoaow"></div>'),He=s('<a href="https://www.nature.com">Previous focusable item</a> <div class="grid svelte-qdoaow"><!> <div class="pdf-slider svelte-qdoaow"><!></div></div> <a href="https://www.nature.com">Next focusable item</a> <!>',1),Ke=s('<div class="item svelte-qdoaow"></div>'),Ve=s("<div><!></div>"),Qe=s('<p class="font-family:sans-serif ">This is some option content below</p>'),Xe=s('<div class="item svelte-qdoaow"></div>'),et=s('<a href="https://www.nature.com">Previous focusable item</a> <div class="grid svelte-qdoaow"><!> <div class="pdf-slider svelte-qdoaow"><!></div></div> <a href="https://www.nature.com">Next focusable item</a> <!>',1),tt=s('<p class="font-family:sans-serif ">This is some option content below</p>'),at=s("<div><div><!></div></div>"),st=s('<div class="item svelte-qdoaow"></div>'),nt=s('<div slot="main-content"><!></div>'),ot=s('<div class="item svelte-qdoaow"></div>'),rt=s('<a href="https://www.nature.com">Previous focusable item</a> <!> <a href="https://www.nature.com">Next focusable item</a> <!>',1),it=s("<!> <!> <!> <!>",1);function ue(O,v){H(v,!0);let{doi:x}=Le,A=R(!1),N=()=>{I(A,!o(A)),Te("click")()},g={headline:"Headline headline headline",srcURL:"img/image-small.jpg",text:"Download a pdf of headline headline headline."};var f=it(),B=W(f);{const r=(k,_=M)=>{E(k,{children:(m,z)=>{var w=Ue(),b=d(W(w),2),y=l(b);E(y,{children:(t,p)=>{var a=Y(),i=W(a);L(i,16,()=>Array(5),F,(c,D)=>{var P=ze();e(c,P)}),e(t,a)},$$slots:{default:!0}});var C=d(y,2),S=l(C);j(S,Z(_));var $=d(b,4);L($,16,()=>Array(5),F,(t,p)=>{var a=Re();e(t,a)}),e(m,w)},$$slots:{default:!0}})};let n=T(()=>({articleData:{doi:x},cardData:g}));G(B,{name:"Default",get args(){return o(n)},children:r,$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<PdfDownloadSlider {...args}>
  {#snippet children(args)}
<Stack>
  <a href="https://www.nature.com">Previous focusable item</a>
  <div class="grid">
    <Stack>
      {#each Array(5) as i}
        <div class="item"></div>
      {/each}
    </Stack>
    <div class="pdf-slider">
      <PdfDownloadSlider {...args} />
    </div>
  </div>
  <a href="https://www.nature.com">Next focusable item</a>
  {#each Array(5) as i}
    <div class="item"></div>
  {/each}
</Stack>
{/snippet}
</PdfDownloadSlider>`}}})}var u=d(B,2);{const r=(k,_=M)=>{E(k,{children:(m,z)=>{var w=He(),b=d(W(w),2),y=l(b);E(y,{children:(t,p)=>{var a=Y(),i=W(a);L(i,16,()=>Array(5),F,(c,D)=>{var P=Ye();e(c,P)}),e(t,a)},$$slots:{default:!0}});var C=d(y,2),S=l(C);j(S,Z(_,{above:p=>{var a=Ze(),i=l(a);ie(i,{boxSpace:"var(--s-2)",children:(c,D)=>{de(c,{message:"Animation:",clusterJustifyContent:"flex-end",get checked(){return o(A)},$$events:{click:N}})},$$slots:{default:!0}}),e(p,a)},$$slots:{above:!0}}));var $=d(b,4);L($,16,()=>Array(5),F,(t,p)=>{var a=Ge();e(t,a)}),e(m,w)},$$slots:{default:!0}})};let n=T(()=>({articleData:{doi:x},cardData:g}));G(u,{name:"With slot above",get args(){return o(n)},children:r,$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<PdfDownloadSlider {...args}>
  {#snippet children(args)}
<Stack>
  <a href="https://www.nature.com">Previous focusable item</a>
  <div class="grid">
    <Stack>
      {#each Array(5) as i}
        <div class="item"></div>
      {/each}
    </Stack>
    <div class="pdf-slider">
      <PdfDownloadSlider {...args}>
        {#snippet above()}
                <div >
            <Box boxSpace="var(--s-2)">
              <SwitchButton
                message="Animation:"
                clusterJustifyContent="flex-end"
                {checked}
                on:click={handleClick}
              />
            </Box>
          </div>
              {/snippet}
      </PdfDownloadSlider>
    </div>
  </div>
  <a href="https://www.nature.com">Next focusable item</a>
  {#each Array(5) as i}
    <div class="item"></div>
  {/each}
</Stack>
{/snippet}
</PdfDownloadSlider>`}}})}var h=d(u,2);{const r=(k,_=M)=>{E(k,{children:(m,z)=>{var w=et(),b=d(W(w),2),y=l(b);E(y,{children:(t,p)=>{var a=Y(),i=W(a);L(i,16,()=>Array(5),F,(c,D)=>{var P=Ke();e(c,P)}),e(t,a)},$$slots:{default:!0}});var C=d(y,2),S=l(C);j(S,Z(_,{above:a=>{var i=Ve(),c=l(i);ie(c,{boxSpace:"var(--s-2)",children:(D,P)=>{de(D,{message:"Animation:",clusterJustifyContent:"flex-end",get checked(){return o(A)},$$events:{click:N}})},$$slots:{default:!0}}),e(a,i)},below:a=>{var i=Qe();e(a,i)},$$slots:{above:!0,below:!0}}));var $=d(b,4);L($,16,()=>Array(5),F,(t,p)=>{var a=Xe();e(t,a)}),e(m,w)},$$slots:{default:!0}})};let n=T(()=>({articleData:{doi:x},cardData:g}));G(h,{name:"With slots above and below",get args(){return o(n)},children:r,$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<PdfDownloadSlider {...args}>
  {#snippet children(args)}
<Stack>
  <a href="https://www.nature.com">Previous focusable item</a>
  <div class="grid">
    <Stack>
      {#each Array(5) as i}
        <div class="item"></div>
      {/each}
    </Stack>
    <div class="pdf-slider">
      <PdfDownloadSlider {...args}>
        {#snippet above()}
                <div >
            <Box boxSpace="var(--s-2)">
              <SwitchButton
                message="Animation:"
                clusterJustifyContent="flex-end"
                {checked}
                on:click={handleClick}
              />
            </Box>
          </div>
              {/snippet}
        {#snippet below()}
                <p  class="font-family:sans-serif ">
            This is some option content below
          </p>
              {/snippet}
      </PdfDownloadSlider>
    </div>
  </div>
  <a href="https://www.nature.com">Next focusable item</a>
  {#each Array(5) as i}
    <div class="item"></div>
  {/each}
</Stack>
{/snippet}
</PdfDownloadSlider>`}}})}var q=d(h,2);{const r=(k,_=M)=>{E(k,{children:(m,z)=>{var w=rt(),b=d(W(w),2);Ne(b,{sidebarOnLeft:!1,sidebarContentMinWidth:"750px",sideBarWidth:"250px",sidebar:S=>{var $=at(),t=l($),p=l(t);j(p,Z(_,{below:i=>{var c=tt();e(i,c)},$$slots:{below:!0}})),e(S,$)},$$slots:{sidebar:!0,"main-content":(S,$)=>{var t=nt(),p=l(t);E(p,{children:(a,i)=>{var c=Y(),D=W(c);L(D,16,()=>Array(5),F,(P,Q)=>{var X=st();e(P,X)}),e(a,c)},$$slots:{default:!0}}),e(S,t)}}});var y=d(b,4);L(y,16,()=>Array(5),F,(C,S)=>{var $=ot();e(C,$)}),e(m,w)},$$slots:{default:!0}})};let n=T(()=>({articleData:{doi:x},cardData:g}));G(q,{name:"Sidebar test",get args(){return o(n)},children:r,$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<PdfDownloadSlider {...args}>
  {#snippet children(args)}
<Stack>
  <a href="https://www.nature.com">Previous focusable item</a>
  <Sidebar
    sidebarOnLeft={false}
    sidebarContentMinWidth="750px"
    sideBarWidth="250px"
  >
<div slot="main-content">
      <Stack>
        {#each Array(5) as i}
          <div class="item"></div>
        {/each}
      </Stack>
    </div>
    {#snippet sidebar()}
        <div >
        <div>
          <PdfDownloadSlider {...args}>
            {#snippet below()}
                    <p  class="font-family:sans-serif ">
                This is some option content below
              </p>
                  {/snippet}
          </PdfDownloadSlider>
        </div>
      </div>
      {/snippet}
  </Sidebar>
  <a href="https://www.nature.com">Next focusable item</a>
  {#each Array(5) as i}
    <div class="item"></div>
  {/each}
</Stack>
{/snippet}
</PdfDownloadSlider>`}}})}e(O,f),K()}ue.__docgen={version:3,name:"index.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const V=xe(ue,je),Ct=["Default","WithSlotAbove","WithSlotsAboveAndBelow","SidebarTest"],Wt={...V.Default,tags:["svelte-csf-v5"]},Et={...V.WithSlotAbove,tags:["svelte-csf-v5"]},Tt={...V.WithSlotsAboveAndBelow,tags:["svelte-csf-v5"]},Nt={...V.SidebarTest,tags:["svelte-csf-v5"]};export{Wt as Default,Nt as SidebarTest,Et as WithSlotAbove,Tt as WithSlotsAboveAndBelow,Ct as __namedExportsOrder,je as default};
