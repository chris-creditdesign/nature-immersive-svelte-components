<script>
  import { Box, Stack } from "creditdesign-svelte-components";
  import { fontSizeOptions } from "../../preview-content/options.js";
</script>

<Box boxSpace="var(--s3)">
  <Stack stackSpace="var(--s3)">
    {#each fontSizeOptions as size}
      <Stack stackSpace="var(--s-3)">
        <p class="font-weight:bold">{size}</p>
        <p class={`font-size:${size}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
          maiores cupiditate. Nemo facilis numquam odit necessitatibus quis
          deleniti natus rerum tempore hic. Animi neque reprehenderit nesciunt
          ratione totam ipsam vero.
        </p>
      </Stack>
    {/each}
  </Stack>
</Box>
