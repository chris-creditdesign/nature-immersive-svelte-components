<script>
  import { Sidebar } from "creditdesign-svelte-components";
  import Card from "../Card/index.svelte";
  import Image from "../Image/index.svelte";

  export let cardData;
  export let cardHeaderStackSpace;
  export let className = "";
  export let headerLevel;
  export let headlineFontSize;
  export let id = "";
  export let sidebarContentMinWidth;
  export let sidebarOnLeft;
  export let sidebarSpace;
  export let sidebarWidth = "var(--s7)";
  export let stackSpace;

  let { altText, caption, srcURL } = cardData;

  let cardDataNoImage = { ...cardData, srcURL: undefined };
</script>

<div class="{`card--side-image ${className}`}">
  {#if srcURL}
    <Sidebar
      {sidebarContentMinWidth}
      {sidebarOnLeft}
      {sidebarSpace}
      {sidebarWidth}
    >
      <div slot="sidebar">
        <Image {altText} {caption} {srcURL} />
      </div>
      <div slot="main-content">
        <Card
          {cardHeaderStackSpace}
          {headerLevel}
          {headlineFontSize}
          {id}
          {stackSpace}
          cardData="{cardDataNoImage}"
        />
      </div>
    </Sidebar>
  {:else}
    <Card {cardData} {cardHeaderStackSpace} {headerLevel} {id} {stackSpace} />
  {/if}
</div>
