<script>
  import CardHeader from "../CardHeader/index.svelte";
  import Image from "../Image/index.svelte";
  import { Stack } from "creditdesign-svelte-components";

  /**
   * - altText
   * - caption
   * - eyebrow
   * - footnote
   * - headline
   * - href
   * - srcURL
   * - subHead
   * - text
   */
  export let cardData;
  export let cardHeaderStackSpace = "var(--s-4)";
  export let className = "";
  export let headerLevel = "h2";
  export let headlineFontSize = "big-2";
  export let id = "";
  export let stackSpace = "var(--s-1)";
  export let theme = "";

  let { altText, caption, footnote, srcURL, text } = cardData;
</script>

<div class={`card ${className}`} data-theme={theme}>
  <Stack {stackSpace}>
    {#if srcURL}
      <Image {altText} {caption} {srcURL} />
    {/if}

    <CardHeader
      {cardData}
      {cardHeaderStackSpace}
      {headerLevel}
      {headlineFontSize}
      {id}
    />

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

    <slot />
  </Stack>
</div>
