<script>
  /**
   * Standard font sizes. Shown here in Harding and Graphik Nature.
   *
   * Each is accessible as a utility class:
   *
   * - `font-size:small`
   * - `font-size:base`
   * - `font-size:big-1`
   * - `font-size:big-2`
   * - `font-size:big-3`
   * - `font-size:big-4`
   *
   * @component
   */

  import { Stack, Cluster } from "creditdesign-svelte-components";

  /**
   * @type {{ prop: string, value: string }[]}
   */
  export let propValueArray;

  let testString = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
          maiores cupiditate. Nemo facilis numquam odit necessitatibus quis
          deleniti natus rerum tempore hic. Animi neque reprehenderit nesciunt
          ratione totam ipsam vero.`;
</script>

<Stack stackSpace="var(--s3)">
  {#each propValueArray as { prop, value }, i}
    <Stack stackSpace="var(--s-3)">
      <Cluster>
        <span class="font-family:sans-serif font-weight:bold">{prop}</span>
        <span class="font-family:sans-serif">{value}</span>
      </Cluster>
      <p style={`font-size: var(${prop})`}>
        {testString.slice(0, (i + 1) * -40)}
      </p>
    </Stack>
  {/each}
</Stack>
