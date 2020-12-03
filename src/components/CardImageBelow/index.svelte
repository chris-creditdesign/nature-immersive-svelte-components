<script>
  import { Stack } from "creditdesign-svelte-components";
  import CardHeader from "../CardHeader/index.svelte";
  import CardImageBelowSidebar from "./components/CardImageBelowSidebar.svelte";
  import CardImageBelowStack from "./components/CardImageBelowStack.svelte";

  export let id = null;
  export let headerLevel = "h2";
  export let className = "";
  export let cardData;
  export let stackSpace = "var(--s-1)";
  export let sidebarWidth = "30ch";
  export let sidebarContentMinWidth = "";
  export let sidebarSpace = "";
  export let sidebarOnLeft = "";

  let { srcURL } = cardData;
</script>

<div class="{`card ${className}`}">
  <Stack {stackSpace}>
    <CardHeader {headerLevel} {id} {cardData} />

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

  </Stack>
</div>
