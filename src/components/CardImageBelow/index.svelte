<script>
  import { Stack } from "creditdesign-svelte-components";
  import CardImageBelowSidebar from "./components/CardImageBelowSidebar.svelte";
  import CardImageBelowStack from "./components/CardImageBelowStack.svelte";

  export let className = "";
  export let stackSpace = "var(--s-1)";
  export let sidebarWidth = "20ch";
  export let sidebarContentMinWidth;
  export let sidebarSpace;
  export let sidebarOnLeft;
  export let cardData;

  let {
    journal,
    authorName,
    altText,
    caption,
    footnote,
    headline,
    href,
    srcURL,
    text,
  } = cardData;
</script>

<style>
  /* Makes sure focus ring shows up over header link */
  header a {
    display: block;
  }

  .headline {
    margin: 0;
  }
</style>

<div class="{`card ${className}`}">
  <Stack {stackSpace}>
    <header>
      <Stack stackSpace="var(--s-4)">
        {#if journal}
          <p class="journal font-size:small font-family:sans-serif">
            {@html journal}
          </p>
        {/if}
        <a
          {href}
          data-track="click"
          data-event-category="body links"
          data-event-action="click"
          data-event-label="{headline}"
        >
          <h3 class="headline">
            {@html headline}
          </h3>
        </a>
        {#if authorName}
          <p class="author font-size:small font-family:sans-serif">
            {@html authorName}
          </p>
        {/if}
      </Stack>
    </header>

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
