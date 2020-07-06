<script>
  import { Center, Stack } from "creditdesign-svelte-components";
  import Image from "../Image/index.svelte";

  export let centerSpace = "var(--s1)";
  export let textSectionStackSpace = "var(--s0)";
  export let centerMeasure = "var(--measure)";
  export let content = [];

  let style = `--text-section-stack-space: ${textSectionStackSpace};`
</script>

<style>
  :global(.text-section__stack > *) {
    margin: 0;
  }

  :global(.text-section__stack > * + *) {
    margin-top: var(--text-section-stack-space);
  }
</style>

<Center {centerSpace} {centerMeasure}>
  <div
    class="text-section__stack"
    style="{style}"
  >
    {#each content as { type, data }}
      {#if type === 'text'}
        {@html data}
      {:else}
        <Image {...data} />
      {/if}
    {/each}
  </div>
</Center>
