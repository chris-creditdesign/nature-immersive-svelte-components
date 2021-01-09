<script>
  import { Stack } from "creditdesign-svelte-components";
  import CardHeader from "../CardHeader/index.svelte";
  import CardImageBelowSidebar from "../CardImageBelowSidebar/index.svelte";
  import CardImageBelowStack from "../CardImageBelowStack/index.svelte";

  export let cardData;
  export let cardHeaderStackSpace;
  export let className = "";
  export let headerLevel;
  export let headlineFontSize;
  export let id;
  export let sidebarContentMinWidth;
  export let sidebarOnLeft;
  export let sidebarSpace;
  export let sidebarWidth;
  export let stackSpace;
  export let theme = "";

  let { srcURL } = cardData;
</script>

<div class="{`card--image-below ${className}`}" data-theme="{theme}">
  <Stack {stackSpace}>
    <CardHeader
      {cardData}
      {cardHeaderStackSpace}
      {headerLevel}
      {headlineFontSize}
      {id}
    />

    {#if srcURL}
      <CardImageBelowSidebar
        {cardData}
        {sidebarContentMinWidth}
        {sidebarOnLeft}
        {sidebarSpace}
        {sidebarWidth}
        {stackSpace}
      />
    {:else}
      <CardImageBelowStack {stackSpace} {cardData} />
    {/if}

    <slot />

  </Stack>
</div>
