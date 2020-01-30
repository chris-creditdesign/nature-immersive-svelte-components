<script>
  import LayoutStack from "../LayoutStack/index.svelte";
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
    font-size: var(--font-size-small-1);
    font-family: var(--sans-serif-font);
    font-style: italic;
    /* margin: var(--s-3) 0 var(--s-3) 0; */
  }

  .footnote {
    font-size: var(--font-size-small-1);
    font-family: var(--sans-serif-font);
  }

  .author-name {
    font-size: var(--font-size-small-1);
    font-family: var(--sans-serif-font);
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
  <LayoutStack {stackSpace}>
    {#if srcURL}
      <Image {altText} {caption} {srcURL} />
    {/if}

    <header>
      <LayoutStack stackSpace="var(--s-4)">
        {#if journal}
          <p class="journal-name">{journal}</p>
        {/if}
        <a {href}>
          <h3>
            {@html headline}
          </h3>
        </a>
        {#if authorName}
          <p class="author-name">
            {@html authorName}
          </p>
        {/if}
      </LayoutStack>
    </header>

    <p>
      {@html text}
    </p>

    {#if footnote}
      <p class="footnote">{footnote}</p>
    {/if}
  </LayoutStack>
</div>
