<script>
  import { GridList, Stack } from "creditdesign-svelte-components";

  /**
   * @type {{ prop: string, value: string }[]}
   */
  export let propValueArray;
</script>

<style>
  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: none;
    height: 100px;
    border: 1px solid var(--color--black-3);
  }
</style>

<GridList minWidth="20ch" gridSpace="var(--s1)">
  {#each propValueArray as { prop, value }}
    <li class="font-family:sans-serif">
      <Stack stackSpace="var(--s-3)">
        <div class="item" style="background-color: {value};" />
        <p class="font-weight:bold">{prop}</p>
        <p>{value}</p>
      </Stack>
    </li>
  {/each}
</GridList>
