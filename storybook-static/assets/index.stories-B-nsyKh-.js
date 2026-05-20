import{aE as Z,a7 as o,aW as n,s as l,aa as s,aB as j,a9 as r,aO as p,aZ as f}from"./props-D2QecWz3.js";import{c as q,d as A}from"./create-runtime-stories-BTZEUp9S.js";import{a as d}from"./index-B-lxVbXh.js";import{C as G}from"./index-fkAr7c7C.js";import{S as i}from"./index-kMN-P2iR.js";import{S as H}from"./index-B2_MoT6a.js";import{P as J}from"./index-B128gGi6.js";import{N as K}from"./index-B0WI68qB.js";import{E as L}from"./index-BOdS79Jc.js";import{F as Q}from"./index-D-dZMafT.js";import{S as U}from"./index-ByBRqPnX.js";import{T as X}from"./index-PYXibYPU.js";import{V as Y}from"./index-Dl2iB8Kv.js";import"./index-C__6K5js.js";import"./v4-CtRu48qb.js";import"./slot-ChEXTifl.js";import"./svelte-element-DeaYRF6t.js";import"./attributes-pwFWEx45.js";import"./class-CoxErtGF.js";import"./lifecycle-BxzyBO6_.js";import"./legacy-client-DJX1Senp.js";import"./index-CpZVlcYq.js";import"./index-DjqFcMpb.js";import"./this-B0xwDqzd.js";import"./index-C6Lev4sy.js";import"./index-B5uFAxJM.js";import"./index-CHrq1IJQ.js";const tt={title:"components/buttons"},{Story:nt}=A();var et=r('<hr/> <span class="font-family:sans-serif font-size:small">SimpleButton:</span> <!>',1),at=r("<!> <!>",1),st=r('<hr/> <span class="font-family:sans-serif font-size:small">PrevButton and NextButton:</span> <!>',1),ot=r('<hr/> <span class="font-family:sans-serif font-size:small">ExpandButton:</span> <!>',1),lt=r('<hr/> <span class="font-family:sans-serif font-size:small">FilterButton:</span> <!>',1),rt=r('<hr/> <span class="font-family:sans-serif font-size:small">ToggleButton:</span> <!>',1),it=r('<hr/> <span class="font-family:sans-serif font-size:small">SwitchButton:</span> <!>',1),ct=r('<hr/> <span class="font-family:sans-serif font-size:small">VideoButton:</span> <!>',1),dt=r("<!> <!> <!> <!> <!> <!> <!>",1);function E(w,F){Z(F,!0);let u=f(!1),m=f(!1),k=f(!1),$=f(!1),v=f(!1),B=d("click"),T=()=>{p(u,!s(u)),d("click")()},V=()=>{p(m,!s(m)),d("click")()},D=()=>{p(k,!s(k)),d("click")()},N=()=>{p($,!s($)),d("click")()},b=()=>{p(v,!s(v)),d("click")()};nt(w,{name:"Default",children:(O,ft)=>{i(O,{stackSpace:"var(--s2)",children:(I,ut)=>{var h=dt(),_=o(h);i(_,{children:(e,c)=>{var t=et(),a=n(o(t),4);H(a,{$$events:{click:B}}),l(e,t)},$$slots:{default:!0}});var S=n(_,2);i(S,{children:(e,c)=>{var t=st(),a=n(o(t),4);G(a,{clusterSpace:"var(--s-2)",children:(R,mt)=>{var P=at(),z=o(P);J(z,{$$events:{click:B}});var W=n(z,2);K(W,{$$events:{click:B}}),l(R,P)},$$slots:{default:!0}}),l(e,t)},$$slots:{default:!0}});var g=n(S,2);i(g,{children:(e,c)=>{var t=ot(),a=n(o(t),4);L(a,{get expanded(){return s(m)},$$events:{click:V}}),l(e,t)},$$slots:{default:!0}});var x=n(g,2);i(x,{children:(e,c)=>{var t=lt(),a=n(o(t),4);Q(a,{get expanded(){return s(k)},$$events:{click:D}}),l(e,t)},$$slots:{default:!0}});var C=n(x,2);i(C,{children:(e,c)=>{var t=rt(),a=n(o(t),4);X(a,{get expanded(){return s($)},$$events:{click:N}}),l(e,t)},$$slots:{default:!0}});var y=n(C,2);i(y,{children:(e,c)=>{var t=it(),a=n(o(t),4);U(a,{get checked(){return s(u)},$$events:{click:T}}),l(e,t)},$$slots:{default:!0}});var M=n(y,2);i(M,{children:(e,c)=>{var t=ct(),a=n(o(t),4);Y(a,{get paused(){return s(v)},$$events:{click:b}}),l(e,t)},$$slots:{default:!0}}),l(I,h)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<undefined {...args}>
  <Stack stackSpace="var(--s2)">
<Stack>
  <hr />
  <span class="font-family:sans-serif font-size:small">SimpleButton:</span>
  <SimpleButton on:click={handleSimpleButtonClick} />
</Stack>

<Stack>
  <hr />
  <span class="font-family:sans-serif font-size:small"
    >PrevButton and NextButton:</span
  >
  <Cluster clusterSpace="var(--s-2)">
    <PrevButton on:click={handleSimpleButtonClick} />
    <NextButton on:click={handleSimpleButtonClick} />
  </Cluster>
</Stack>

<Stack>
  <hr />
  <span class="font-family:sans-serif font-size:small">ExpandButton:</span>
  <ExpandButton
    expanded={expandButtonExpanded}
    on:click={handleExpandButtonClick}
  />
</Stack>

<Stack>
  <hr />
  <span class="font-family:sans-serif font-size:small">FilterButton:</span>
  <FilterButton
    expanded={filterButtonexpanded}
    on:click={handleFilterButtonClick}
  />
</Stack>

<Stack>
  <hr />
  <span class="font-family:sans-serif font-size:small">ToggleButton:</span>
  <ToggleButton
    expanded={toggleButtonExpanded}
    on:click={handleToggleButtonClick}
  />
</Stack>

<Stack>
  <hr />
  <span class="font-family:sans-serif font-size:small">SwitchButton:</span>
  <SwitchButton
    checked={switchButtonchecked}
    on:click={handleSwitchButtonClick}
  />
</Stack>

<Stack>
  <hr />
  <span class="font-family:sans-serif font-size:small">VideoButton:</span>
  <VideoButton {paused} on:click={handleVideoButtonClick} />
</Stack>
</Stack>
</undefined>`}}}),j()}E.__docgen={version:3,name:"index.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const pt=q(E,tt),jt=["Default"],qt={...pt.Default,tags:["svelte-csf-v5"]};export{qt as Default,jt as __namedExportsOrder,tt as default};
