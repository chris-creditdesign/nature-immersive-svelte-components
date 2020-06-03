<script>
  import { Stack } from "creditdesign-svelte-components";
  import Image from "../Image/index.svelte";

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
    text
  } = cardData;
</script>

<style>
  .journal-name {
    font-family: var(--sans-serif-font);
    font-size: var(--font-size-small-1);
    font-style: italic;
  }

  .footnote {
    font-family: var(--sans-serif-font);
    font-size: var(--font-size-small-1);
  }

  .author-name {
    font-family: var(--sans-serif-font);
    font-size: var(--font-size-small-1);
  }

  /* Makes sure focus ring shows up over header link */
  header a {
    display: block;
  }

  h3 {
    margin: 0;
  }
</style>

<div class={`card ${className}`}>
  <Stack {stackSpace}>
    {#if srcURL}
      <Image {altText} {caption} {srcURL} />
    {/if}

    <header>
      <Stack stackSpace="var(--s-4)">
        {#if journal}
          <p class="journal-name">{journal}</p>
        {/if}
        <a
          {href}
          data-track="click"
          data-event-category="body links"
          data-event-action="click"
          data-event-label={headline}>
          <h3>
            {@html headline}
          </h3>
        </a>
        {#if authorName}
          <p class="author-name">
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
      <p class="footnote">
        {@html footnote}
      </p>
    {/if}
  </Stack>
</div>
