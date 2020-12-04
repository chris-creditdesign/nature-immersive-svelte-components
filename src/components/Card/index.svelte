<script>
  import CardHeader from "../CardHeader/index.svelte";
  import Image from "../Image/index.svelte";
  import { Stack } from "creditdesign-svelte-components";

  export let id = null;
  export let headerLevel = "h2";
  export let className = "";
  export let stackSpace = "var(--s-1)";
  export let cardData;
  export let headerStackSpace;

  let { altText, caption, footnote, srcURL, text } = cardData;
</script>

<div class="{`card ${className}`}">
  <Stack {stackSpace}>
    {#if srcURL}
      <Image {altText} {caption} {srcURL} />
    {/if}

    <CardHeader {headerLevel} {id} {cardData} stackSpace="{headerStackSpace}" />

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
