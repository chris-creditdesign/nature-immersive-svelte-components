<script>
  import { Stack } from "creditdesign-svelte-components";
  import Image from "../Image/index.svelte";

  export let id = null;
  export let className = "";
  export let stackSpace = "var(--s-1)";
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

<div {id} tabindex="{id ? '-1' : null}" class="{`card ${className}`}">
  <Stack {stackSpace}>
    {#if srcURL}
      <Image {altText} {caption} {srcURL} />
    {/if}

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

    {#if text}
      <p>
        {@html text}
      </p>
    {/if}

    {#if footnote}
      <p class="footnote font-size:small font-family:sans-serif">
        {@html footnote}
      </p>
    {/if}
  </Stack>
</div>
