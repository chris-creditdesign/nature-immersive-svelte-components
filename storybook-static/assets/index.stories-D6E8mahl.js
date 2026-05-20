import{aC as q,b1 as x,s as i,aB as ie,aE as te,a7 as h,ah as E,a9 as o,z as U,aO as z,G as $,aa as c,aW as l,ay as H,aZ as ee,aY as F}from"./props-D2QecWz3.js";import{s as me,c as pe,d as ce}from"./create-runtime-stories-BTZEUp9S.js";import{o as de}from"./index-client-B4LLJqus.js";import{e as ue,i as ve}from"./each-C-_z2p6v.js";import{h as fe}from"./html-DCvpNGh9.js";import{a as ge}from"./actions-CnIXsBgw.js";import{s as d,b as ye}from"./attributes-pwFWEx45.js";import{s as be}from"./class-CoxErtGF.js";import{C as he}from"./index-fkAr7c7C.js";import{F as ke}from"./index-BPMxnp8X.js";import{S as ae}from"./index-kMN-P2iR.js";import{E as _e}from"./index-BOdS79Jc.js";import{i as xe}from"./lifecycle-BxzyBO6_.js";import{s as Te}from"./options-B0eN1I47.js";import"./index-C__6K5js.js";import"./slot-ChEXTifl.js";import"./svelte-element-DeaYRF6t.js";import"./this-B0xwDqzd.js";import"./index-C6Lev4sy.js";function G(u,e){let n=null,k=window.matchMedia("(prefers-reduced-motion: reduce)").matches,v=e,T={root:null,rootMargin:"-50% 0px -50% 0px"},V=s=>{let{isIntersecting:a}=s[0];if(a&&!k&&v){let r=u.play();r!==void 0&&r.then(()=>{n.unobserve(u)}).catch(f=>{f.name==="NotAllowedError"?console.log("Video autoplay not allowed."):console.log(f)})}};return typeof IntersectionObserver<"u"&&(n=new IntersectionObserver(V,T),n.observe(u)),{update(s){v=s},destroy(){n!==null&&n.unobserve(u)}}}var Ve=o('<track kind="captions"/>'),Le=o('<video controls="" playsinline="true" aria-describedby="transcript" class="svelte-1sjous1"><source type="video/webm"/> <source type="video/mp4"/> <!></video>',2),Me=o('<img class="svelte-1sjous1"/>'),we=o("Here is a <a>link to the video file</a> .",1),Re=o('<figcaption class="font-size:small font-family:sans-serif svelte-1sjous1"><!> <!></figcaption> <!>',1),Se=o('<div id="transcript"><!></div>'),Ce=o("<!> <!> <!>",1),Ee=o("<figure><!></figure>");function O(u,e){te(e,!0);let n=q(e,"autoplay",3,!1),k=q(e,"className",3,""),v=q(e,"loop",3,!1),T=q(e,"videoCaptionTracks",19,()=>[]),s=`${e.captionSpace?`--video-caption-space--component: ${e.captionSpace};`:""}`,a=ee(!1),r=ee(!0),f=e.srcURL.replace(/-small/,""),_=e.srcURL.replace(/-small/,"").slice(0,-4).concat(".webm"),W=e.srcURL.replace(/-small/,"").slice(0,-4).concat(".mp4"),Z=()=>{z(r,!c(r))};de(()=>{z(a,!0),z(r,!1)});var L=Ee(),j=U(L);ae(j,{children:(se,Ue)=>{var K=Ce(),Q=h(K);ke(Q,{get frameRatioHeight(){return e.frameRatioHeight},get frameRatioWidth(){return e.frameRatioWidth},children:(g,N)=>{var y=$(),A=h(y);{var D=m=>{var t=Le(),w=U(t),I=l(w,2),P=l(I,2);ue(P,17,T,ve,(R,b)=>{let p=()=>c(b).label,S=()=>c(b).srclang,B=()=>c(b).defaultTrack;var C=Ve();x(le=>{d(C,"label",p()),d(C,"srclang",S()),d(C,"src",le),C.default=B()},[()=>e.srcURL.replace(/-small/,"").slice(0,-4).concat(`-${S()}.vtt`)]),i(R,C)}),ge(t,(R,b)=>G==null?void 0:G(R,b),n),x(()=>{d(t,"poster",f),t.loop=v(),d(w,"src",_),d(I,"src",W)}),i(m,t)},M=m=>{var t=Me();x(()=>{d(t,"src",e.srcURL),d(t,"alt",e.altText)}),i(m,t)};E(A,m=>{c(a)?m(D):m(M,-1)})}i(g,y)},$$slots:{default:!0}});var X=l(Q,2);he(X,{clusterJustifyContent:"space-between",children:(g,N)=>{var y=$(),A=h(y);{var D=M=>{var m=Re(),t=h(m),w=U(t);fe(w,()=>e.caption);var I=l(w,2);{var P=p=>{var S=we(),B=l(h(S));x(()=>d(B,"href",W)),i(p,S)};E(I,p=>{c(a)||p(P)})}var R=l(t,2);{var b=p=>{_e(p,{get expanded(){return c(r)},message:"Show transcript",expandedMessage:"Hide transcript",onclick:Z})};E(R,p=>{c(a)&&e.transcript&&p(b)})}x(()=>ye(t,s)),i(M,m)};E(A,M=>{e.caption.length&&M(D)})}i(g,y)},$$slots:{default:!0}});var re=l(X,2);{var ne=g=>{var N=Se(),y=U(N);me(y,()=>e.transcript??H),i(g,N)};E(re,g=>{c(r)&&e.transcript&&g(ne)})}i(se,K)},$$slots:{default:!0}}),x(()=>be(L,1,`${k()}`)),i(u,L),ie()}O.__docgen={data:[{name:"altText",visibility:"public",description:"To be applied to placeholder image.",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1},{name:"autoplay",visibility:"public",description:"If autoplay is true, `autoplayVideoOnIntersect` will attempt to play\nthe video when it is scrolled 50% into view - if prefers reduced motion\nis not set.",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"caption",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1},{name:"captionSpace",visibility:"public",description:"Optional space to move caption in from side of video.",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1},{name:"className",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"frameRatioHeight",visibility:"public",description:"Aspect ration of video.",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1},{name:"frameRatioWidth",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1},{name:"loop",visibility:"public",description:"If true video will continuously loop until paused.",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"srcURL",visibility:"public",description:`Location of fallback image should be provided as the src url
ie video/video-small.jpg`,keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1},{name:"videoCaptionTracks",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1,defaultValue:"[]"},{name:"transcript",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1}],name:"index.svelte"};const Oe={title:"components/videos/Video",component:O,argTypes:{altText:{control:"text"},autoplay:{control:"boolean"},caption:{control:"text"},captionSpace:{control:{type:"select",options:Te}},className:{control:"text"},frameRatioHeight:{control:"number"},frameRatioWidth:{control:"number"},loop:{control:"boolean"},srcURL:{control:"text"},videoCaptionTracks:{control:"object"}}},{Story:J}=ce();var We=o(`<p>Transcript</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima vero
            explicabo ipsum eius porro officiis adipisci iusto assumenda voluptates
            reprehenderit. Officia, obcaecati velit ad ducimus placeat commodi id
            quaerat tempore!</p>`,1),Ne=o(`<p>Transcript</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima vero
              explicabo ipsum eius porro officiis adipisci iusto assumenda
              voluptates reprehenderit. Officia, obcaecati velit ad ducimus placeat
              commodi id quaerat tempore!</p>`,1),Ie=o(`<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, mollitia.
        Voluptatem veniam adipisci vero dolorum, architecto minima saepe
        laboriosam enim, autem voluptate tempora distinctio praesentium nostrum
        modi blanditiis asperiores dignissimos!</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, mollitia.
        Voluptatem veniam adipisci vero dolorum, architecto minima saepe
        laboriosam enim, autem voluptate tempora distinctio praesentium nostrum
        modi blanditiis asperiores dignissimos!</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, mollitia.
        Voluptatem veniam adipisci vero dolorum, architecto minima saepe
        laboriosam enim, autem voluptate tempora distinctio praesentium nostrum
        modi blanditiis asperiores dignissimos!</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, mollitia.
        Voluptatem veniam adipisci vero dolorum, architecto minima saepe
        laboriosam enim, autem voluptate tempora distinctio praesentium nostrum
        modi blanditiis asperiores dignissimos!</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, mollitia.
        Voluptatem veniam adipisci vero dolorum, architecto minima saepe
        laboriosam enim, autem voluptate tempora distinctio praesentium nostrum
        modi blanditiis asperiores dignissimos!</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, mollitia.
        Voluptatem veniam adipisci vero dolorum, architecto minima saepe
        laboriosam enim, autem voluptate tempora distinctio praesentium nostrum
        modi blanditiis asperiores dignissimos!</p> <!> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, mollitia.
        Voluptatem veniam adipisci vero dolorum, architecto minima saepe
        laboriosam enim, autem voluptate tempora distinctio praesentium nostrum
        modi blanditiis asperiores dignissimos!</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, mollitia.
        Voluptatem veniam adipisci vero dolorum, architecto minima saepe
        laboriosam enim, autem voluptate tempora distinctio praesentium nostrum
        modi blanditiis asperiores dignissimos!</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, mollitia.
        Voluptatem veniam adipisci vero dolorum, architecto minima saepe
        laboriosam enim, autem voluptate tempora distinctio praesentium nostrum
        modi blanditiis asperiores dignissimos!</p>`,1),qe=o("<!> <!> <!>",1);function oe(u,e){te(e,!1),xe();var n=qe(),k=h(n);J(k,{name:"Default",args:{altText:"This is the alt text",autoplay:!1,caption:"This is the caption",captionSpace:0,className:"example-class",frameRatioHeight:1.8,frameRatioWidth:4.25,loop:!1,srcURL:"video/sintel-short-small.jpg",videoCaptionTracks:[{label:"English",srclang:"en",defaultTrack:!0},{label:"Deutsch",srclang:"de",defaultTrack:!1},{label:"Español",srclang:"es",defaultTrack:!1}]},parameters:{layout:"fullscreen",__svelteCsf:{rawCode:`<Video {...args}>
  {#snippet children(args)}
<Video {...args}>
  {#snippet transcript()}
  
      <p>Transcript</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima vero
        explicabo ipsum eius porro officiis adipisci iusto assumenda voluptates
        reprehenderit. Officia, obcaecati velit ad ducimus placeat commodi id
        quaerat tempore!
      </p>
    
  {/snippet}
</Video>
{/snippet}
</Video>`}},children:(s,a=H)=>{O(s,F(a,{transcript:f=>{var _=We();i(f,_)},$$slots:{transcript:!0}}))},$$slots:{default:!0}});var v=l(k,2);J(v,{name:"With no transcript",args:{altText:"This is the alt text",autoplay:!1,caption:"This is the caption",captionSpace:0,className:"example-class",frameRatioHeight:1.8,frameRatioWidth:4.25,loop:!1,srcURL:"video/sintel-short-small.jpg",videoCaptionTracks:[{label:"English",srclang:"en",defaultTrack:!0},{label:"Deutsch",srclang:"de",defaultTrack:!1},{label:"Español",srclang:"es",defaultTrack:!1}]},parameters:{layout:"fullscreen",__svelteCsf:{rawCode:`<Video {...args}>
  {#snippet children(args)}
<Video {...args} />
{/snippet}
</Video>`}},children:(s,a=H)=>{O(s,F(a))},$$slots:{default:!0}});var T=l(v,2);J(T,{name:"Autoplay on intersect",args:{altText:"This is the alt text",autoplay:!0,caption:"This is the caption",captionSpace:0,className:"example-class",frameRatioHeight:1.8,frameRatioWidth:4.25,loop:!1,srcURL:"video/sintel-short-small.jpg",videoCaptionTracks:[{label:"English",srclang:"en",defaultTrack:!0},{label:"Deutsch",srclang:"de",defaultTrack:!1},{label:"Español",srclang:"es",defaultTrack:!1}]},parameters:{layout:"fullscreen",__svelteCsf:{rawCode:`<Video {...args}>
  {#snippet children(args)}
<Stack stackSpace="var(--s4)">
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, mollitia.
    Voluptatem veniam adipisci vero dolorum, architecto minima saepe
    laboriosam enim, autem voluptate tempora distinctio praesentium nostrum
    modi blanditiis asperiores dignissimos!
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, mollitia.
    Voluptatem veniam adipisci vero dolorum, architecto minima saepe
    laboriosam enim, autem voluptate tempora distinctio praesentium nostrum
    modi blanditiis asperiores dignissimos!
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, mollitia.
    Voluptatem veniam adipisci vero dolorum, architecto minima saepe
    laboriosam enim, autem voluptate tempora distinctio praesentium nostrum
    modi blanditiis asperiores dignissimos!
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, mollitia.
    Voluptatem veniam adipisci vero dolorum, architecto minima saepe
    laboriosam enim, autem voluptate tempora distinctio praesentium nostrum
    modi blanditiis asperiores dignissimos!
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, mollitia.
    Voluptatem veniam adipisci vero dolorum, architecto minima saepe
    laboriosam enim, autem voluptate tempora distinctio praesentium nostrum
    modi blanditiis asperiores dignissimos!
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, mollitia.
    Voluptatem veniam adipisci vero dolorum, architecto minima saepe
    laboriosam enim, autem voluptate tempora distinctio praesentium nostrum
    modi blanditiis asperiores dignissimos!
  </p>
  <Video {...args}>
    {#snippet transcript()}
      
        <p>Transcript</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima vero
          explicabo ipsum eius porro officiis adipisci iusto assumenda
          voluptates reprehenderit. Officia, obcaecati velit ad ducimus placeat
          commodi id quaerat tempore!
        </p>
      
      {/snippet}
  </Video>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, mollitia.
    Voluptatem veniam adipisci vero dolorum, architecto minima saepe
    laboriosam enim, autem voluptate tempora distinctio praesentium nostrum
    modi blanditiis asperiores dignissimos!
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, mollitia.
    Voluptatem veniam adipisci vero dolorum, architecto minima saepe
    laboriosam enim, autem voluptate tempora distinctio praesentium nostrum
    modi blanditiis asperiores dignissimos!
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, mollitia.
    Voluptatem veniam adipisci vero dolorum, architecto minima saepe
    laboriosam enim, autem voluptate tempora distinctio praesentium nostrum
    modi blanditiis asperiores dignissimos!
  </p>
</Stack>
{/snippet}
</Video>`}},children:(s,a=H)=>{ae(s,{stackSpace:"var(--s4)",children:(r,f)=>{var _=Ie(),W=l(h(_),12);O(W,F(a,{transcript:L=>{var j=Ne();i(L,j)},$$slots:{transcript:!0}})),i(r,_)},$$slots:{default:!0}})},$$slots:{default:!0}}),i(u,n),ie()}oe.__docgen={version:3,name:"index.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const Y=pe(oe,Oe),ai=["Default","WithNoTranscript","AutoplayOnIntersect"],oi={...Y.Default,tags:["svelte-csf-v5"]},si={...Y.WithNoTranscript,tags:["svelte-csf-v5"]},ri={...Y.AutoplayOnIntersect,tags:["svelte-csf-v5"]};export{ri as AutoplayOnIntersect,oi as Default,si as WithNoTranscript,ai as __namedExportsOrder,Oe as default};
