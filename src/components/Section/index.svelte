<script>
  import LayoutCenter from "../LayoutCenter/index.svelte";
  import LayoutStack from "../LayoutStack/index.svelte";

  export let className = "";
  export let centerSpace = "var(--s1)";
  export let stackSpace = "var(--s-1)";
  export let centerMeasure = "var(--measure)";
  export let headline;
</script>

<section class={`${className}`}>
  <LayoutCenter {centerSpace} {centerMeasure}>
    <LayoutStack {stackSpace}>
      {#if headline}
        <h2 class="border-above">{headline}</h2>
      {/if}
      <slot />
    </LayoutStack>
  </LayoutCenter>
</section>
