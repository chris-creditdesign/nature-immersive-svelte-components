<script>
  import { Stack } from "creditdesign-svelte-components";

  export let stackSpace;
  export let cardData;

  let { footnote, text } = cardData;
</script>

<style>
  .footnote {
    font-family: var(--sans-serif-font);
    font-size: var(--font-size-small-1);
  }
</style>

<Stack {stackSpace}>
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
