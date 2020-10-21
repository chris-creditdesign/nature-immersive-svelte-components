<script>
  import { Stack } from "creditdesign-svelte-components";
  import CardHeader from "../CardHeader/index.svelte";
  import CardImageBelowSidebar from "./components/CardImageBelowSidebar.svelte";
  import CardImageBelowStack from "./components/CardImageBelowStack.svelte";

  export let id = null;
  export let className = "";
  export let stackSpace = "var(--s-1)";
  export let sidebarWidth = "20ch";
  export let sidebarContentMinWidth;
  export let sidebarSpace;
  export let sidebarOnLeft;
  export let cardData;

  let { altText, caption, footnote, srcURL, text } = cardData;
</script>

<div class="{`card ${className}`}">
  <Stack {stackSpace}>
    <CardHeader {id} {cardData} />

    {#if srcURL}
      <CardImageBelowSidebar
        {altText}
        {caption}
        {footnote}
        {sidebarContentMinWidth}
        {sidebarOnLeft}
        {sidebarSpace}
        {sidebarWidth}
        {srcURL}
        {stackSpace}
        {text}
      />
    {:else}
      <CardImageBelowStack {stackSpace} {text} {footnote} />
    {/if}

  </Stack>
</div>
