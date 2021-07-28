<script>
  /**
   * Standard measurements used throughout the design system.
   *
   * Spaces are build from a base of 1 rem.
   *
   * Measures are build from a base of 60 characters (a comfortable reading length for a line of text).
   *
   * Both are scalled at a ratio of 1.5.
   *
   * @component
   */

  import { Stack, Cluster } from "creditdesign-svelte-components";

  /**
   * @type {{ prop: string, value: string }[]}
   */
  export let propValueArray;
</script>

<style>
  .content {
    height: var(--s1);
    margin-right: var(--s-1);
    background-color: var(--color--white-3);
  }
</style>

<Stack stackSpace="var(--s1)">
  {#each propValueArray as { prop, value }}
    <Cluster>
      <div class="content" style="width: {value}; min-width: {value}" />
      <span class="font-family:sans-serif font-weight:bold">{prop}</span>
      <span class="font-family:sans-serif">{value}</span>
    </Cluster>
  {/each}
</Stack>
