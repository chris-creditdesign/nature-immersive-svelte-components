<script>
  import CardHeader from "../CardHeader/index.svelte";
  import Image from "../Image/index.svelte";
  import { Stack } from "creditdesign-svelte-components";

  export let id = null;
  export let className = "";
  export let stackSpace = "var(--s-1)";
  export let cardData;

  let { altText, caption, footnote, srcURL, text } = cardData;
</script>

<div class="{`card ${className}`}">
  <Stack {stackSpace}>
    {#if srcURL}
      <Image {altText} {caption} {srcURL} />
    {/if}

    <CardHeader {id} {cardData} />

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
