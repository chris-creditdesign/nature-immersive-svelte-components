import{a0 as be,bb as ke,a5 as we,aW as s,a7 as O,ah as C,s as p,aB as ie,aE as se,aT as De,$ as We,z as b,a9 as v,aO as c,a$ as ye,ay as g,aa as t,aZ as y,a_ as te,G as xe,aY as x,a1 as H}from"./props-D2QecWz3.js";import{s as ae,c as He,d as Le}from"./create-runtime-stories-BTZEUp9S.js";import{o as Be}from"./index-client-B4LLJqus.js";import{b as ne}from"./this-B0xwDqzd.js";import{M as Pe}from"./index-O3rdMvZI.js";import{M as Se}from"./index-C1l8Mb6O.js";import{M as Ne}from"./index-C7kXpxmi.js";import{E as Fe}from"./index-BOdS79Jc.js";import{N as Ce}from"./index-CYC4Y34T.js";import{M as Ee}from"./index-Dyt30DC-.js";import{i as Ae}from"./lifecycle-BxzyBO6_.js";import{S as Re}from"./index-kMN-P2iR.js";import{a as je}from"./article-data-BBgwOk-3.js";import{H as re}from"./index-BMRJVhMv.js";import{S as Ve}from"./index-DTaZVq6P.js";import"./index-C__6K5js.js";import"./each-C-_z2p6v.js";import"./html-DCvpNGh9.js";import"./index-CHIhzn1q.js";import"./attributes-pwFWEx45.js";import"./class-CoxErtGF.js";import"./legacy-client-DJX1Senp.js";import"./index-WXAuYvDP.js";import"./slot-ChEXTifl.js";import"./svelte-element-DeaYRF6t.js";import"./index-fkAr7c7C.js";import"./index-CdGpPFPU.js";import"./index-CCKFFCYv.js";import"./index-BY13iEot.js";import"./index-C6Lev4sy.js";import"./index-Hr9jRCfk.js";import"./index-BF8sVA0F.js";import"./media-BnM_itxq.js";import"./index-BPMxnp8X.js";import"./index-Dl2iB8Kv.js";const U=ke(),Ie=be(U,(k,u)=>{if(!k)return;const m=new ResizeObserver(([f])=>{let{offsetHeight:o}=f.target;u(o)});return m.observe(k),()=>m.disconnect()},0);var Oe=v("<li><!></li>"),Te=v("<li><!> <!></li>"),qe=v('<li><a href="#menu" class="svelte-1acbojg">Menu</a></li>'),ze=v('<a href="#main-content" class="skip-link font-family:sans-serif svelte-1acbojg">Skip to main content</a> <header><ul class="flex-wrap:wrap svelte-1acbojg" data-theme="menu"><li class="flex-grow svelte-1acbojg"><a class="link-with-svg svelte-1acbojg" data-event-action="click" data-event-category="menu" data-event-label="nature.com" data-track="click" href="https://www.nature.com"><!></a></li> <!> <li><!></li> <!></ul> <!></header> <!> <!>',1);function h(k,u){se(u,!0);const m=()=>te(U,"$menuElement",o),f=()=>te(Ie,"$menuHeight",o),[o,E]=De();let{menuLinks:_,pdfAvailable:A,doi:R}=u.articleData,P=1.6,w=y(!1),d=y(!0),D=y(!1),r=y(!1),a=y(null),n=y(null),i,l=()=>{c(d,!1)},S=()=>{var e;(e=t(n))==null||e.focusButton()},M=()=>{c(d,!t(d))},G=()=>{c(D,!0)},j=()=>{c(r,!0)},V=e=>{c(D,!1),e.target===t(a)&&l()},T=e=>{let{key:$}=e,N=$==="Escape",z=t(D)||t(r);N&&t(d)&&z&&(l(),S())};Be(()=>{c(w,!0),c(d,!1),i=()=>{window.setTimeout(()=>{t(D)||l()},0)}});var K=ze();we("keydown",We,T);var Y=s(O(K),2),q=b(Y),Z=b(q),le=b(Z),de=b(le);Ce(de,{height:P});var J=s(Z,2);{var ue=e=>{var $=Oe(),N=b($);Ee(N,{logoHeight:P,get doi(){return R}}),p(e,$)};C(J,e=>{A&&e(ue)})}var Q=s(J,2),me=b(Q);Ne(me,{get articleData(){return u.articleData}});var ce=s(Q,2);{var pe=e=>{var $=xe(),N=O($);{var z=W=>{var I=Te(),ee=b(I);ne(Fe(ee,{get expanded(){return t(d)},expandedMessage:"Menu",message:"Menu",get onblur(){return i},onclick:M,onfocus:j,theme:"menu"}),F=>c(n,F,!0),()=>t(n));var _e=s(ee,2);{var Me=F=>{Pe(F,{get menuLinks(){return _},get menuHeight(){return f()},onblur:V,onfocus:G,get lastMenuLinkElem(){return t(a)},set lastMenuLinkElem($e){c(a,$e,!0)}})};C(_e,F=>{t(d)&&F(Me)})}p(W,I)},ve=W=>{var I=qe();p(W,I)};C(N,W=>{t(w)?W(z):W(ve,-1)})}p(e,$)};C(ce,e=>{_&&_.length&&e(pe)})}ne(q,e=>ye(U,e),()=>m());var fe=s(q,2);ae(fe,()=>u.heading??g);var X=s(Y,2);ae(X,()=>u.children??g);var ge=s(X,2);{var he=e=>{Se(e,{get menuLinks(){return _}})};C(ge,e=>{t(w)||e(he)})}p(k,K),ie(),E()}h.__docgen={data:[{name:"articleData",visibility:"public",description:`- menuLinks
- pdfAvailable
- doi`,keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1},{name:"children",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1},{name:"heading",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1}],name:"index.svelte"};const Ue={title:"components/Menu",component:h,argTypes:{articleData:{control:"object"}},parameters:{layout:"fullscreen"}},{Story:L}=Le();var Ge=v('<main id="main-content" tabindex="-1"><a href="https://www.nature.come">Next focusable item...</a></main>'),Ke=v('<main id="main-content" tabindex="-1"><a href="https://www.nature.come">Next focusable item...</a></main>'),Ye=v("<!> <!>",1),Ze=v("<!> <!> <!> <!> <!> <!>",1);function oe(k,u){se(u,!1);let{menuLinks:m,pdfAvailable:f,doi:o}=je,E={author:"Author Name",headline:"Headline headline headline",photographer:"Photographer Name",publishedAt:1593734400,publishedAtString:"2020-07-03",stand:"Standfirst standfirst standfirst."};Ae();var _=Ze(),A=O(_);{const r=(n,i=g)=>{h(n,x(i))};let a=H(()=>({articleData:{menuLinks:m,pdfAvailable:f,doi:o}}));L(A,{name:"Default",get args(){return t(a)},children:r,$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Menu {...args}>
  {#snippet children(args)}
<Menu {...args} />
{/snippet}
</Menu>`}}})}var R=s(A,2);{const r=(n,i=g)=>{h(n,x(i))};let a=H(()=>({articleData:{menuLinks:m,pdfAvailable:!0,doi:o}}));L(R,{name:"With PDF",get args(){return t(a)},children:r,$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Menu {...args}>
  {#snippet children(args)}
<Menu {...args} />
{/snippet}
</Menu>`}}})}var P=s(R,2);{const r=(n,i=g)=>{h(n,x(i))};let a=H(()=>({articleData:{menuLinks:[],pdfAvailable:f,doi:o}}));L(P,{name:"With no menu",get args(){return t(a)},children:r,$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Menu {...args}>
  {#snippet children(args)}
<Menu {...args} />
{/snippet}
</Menu>`}}})}var w=s(P,2);{const r=(n,i=g)=>{h(n,x(i))};let a=H(()=>({articleData:{menuLinks:[],pdfAvailable:!0,doi:o}}));L(w,{name:"With PDF but no menu",get args(){return t(a)},children:r,$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Menu {...args}>
  {#snippet children(args)}
<Menu {...args} />
{/snippet}
</Menu>`}}})}var d=s(w,2);{const r=(n,i=g)=>{h(n,x(i,{children:(l,S)=>{var M=Ge();p(l,M)},$$slots:{default:!0,heading:(l,S)=>{re(l,{get articleData(){return E}})}}}))};let a=H(()=>({articleData:{menuLinks:m,pdfAvailable:f,doi:o}}));L(d,{name:"With heading",get args(){return t(a)},children:r,$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Menu {...args}>
  {#snippet children(args)}
<Menu {...args}>
<svelte:fragment slot="heading">
  <Heading articleData={headingData} />
</svelte:fragment>

<main id="main-content" tabindex="-1">
  <a href="https://www.nature.come">Next focusable item...</a>
</main>
</Menu>
{/snippet}
</Menu>`}}})}var D=s(d,2);{const r=(n,i=g)=>{h(n,x(i,{children:(l,S)=>{var M=Ke();p(l,M)},$$slots:{default:!0,heading:(l,S)=>{Re(l,{children:(M,G)=>{var j=Ye(),V=O(j);Ve(V,{srcURL:"video/video-small.jpg",captionSpace:"var(--s-1)",caption:"Video credit:",frameRatioHeight:9,frameRatioWidth:16});var T=s(V,2);re(T,{get articleData(){return E}}),p(M,j)},$$slots:{default:!0}})}}}))};let a=H(()=>({articleData:{menuLinks:m,pdfAvailable:f,doi:o}}));L(D,{name:"With video before heading",get args(){return t(a)},children:r,$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Menu {...args}>
  {#snippet children(args)}
<Menu {...args}>
<svelte:fragment slot="heading">
  <Stack>
    <SimpleVideo
      srcURL="video/video-small.jpg"
      captionSpace="var(--s-1)"
      caption="Video credit:"
      frameRatioHeight={9}
      frameRatioWidth={16}
    />
    <Heading articleData={headingData} />
  </Stack>
</svelte:fragment>

<main id="main-content" tabindex="-1">
  <a href="https://www.nature.come">Next focusable item...</a>
</main>
</Menu>
{/snippet}
</Menu>`}}})}p(k,_),ie()}oe.__docgen={version:3,name:"index.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const B=He(oe,Ue),St=["Default","WithPDF","WithNoMenu","WithPDFButNoMenu","WithHeading","WithVideoBeforeHeading"],Nt={...B.Default,tags:["svelte-csf-v5"]},Ft={...B.WithPDF,tags:["svelte-csf-v5"]},Ct={...B.WithNoMenu,tags:["svelte-csf-v5"]},Et={...B.WithPDFButNoMenu,tags:["svelte-csf-v5"]},At={...B.WithHeading,tags:["svelte-csf-v5"]},Rt={...B.WithVideoBeforeHeading,tags:["svelte-csf-v5"]};export{Nt as Default,At as WithHeading,Ct as WithNoMenu,Ft as WithPDF,Et as WithPDFButNoMenu,Rt as WithVideoBeforeHeading,St as __namedExportsOrder,Ue as default};
