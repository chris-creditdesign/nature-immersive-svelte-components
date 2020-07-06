<script>
  import { Center, Stack } from "creditdesign-svelte-components";

  export let className = "";
  export let centerSpace = "var(--s1)";
  export let stackSpace = "var(--s-1)";
  export let centerMeasure = "var(--measure)";
  export let headline;
</script>

<section class="{`${className}`}">
  <Center {centerSpace} {centerMeasure}>
    <Stack {stackSpace}>
      {#if headline}
        <h2 class="border-above">{headline}</h2>
      {/if}
      <slot />
    </Stack>
  </Center>
</section>
