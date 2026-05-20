<script lang="ts">
  /**
   * HTML `section` element to place around contents with
   * optional H2 headline.
   *
   * @component
   */
  import { Center, Stack } from "creditdesign-svelte-components";

  
  
  
  
  
  interface Props {
    /**
   * Optional class to add to `section` element.
   */
    className?: string;
    /**
   * Space left and right around section.
   */
    centerSpace?: string;
    /**
   * Vertical space between elements within the section.
   */
    stackSpace?: string;
    /**
   * Miniumum width of the section.
   */
    centerMeasure?: string;
    /**
   * Optional headline. If none supplied the `h2` will not
   * be present.
   */
    headline?: string;
    children?: import('svelte').Snippet;
  }

  let {
    className = "",
    centerSpace = "var(--s1)",
    stackSpace = "var(--s-1)",
    centerMeasure = "var(--measure)",
    headline = "",
    children
  }: Props = $props();
</script>

<section class={`${className}`}>
  <Center {centerSpace} {centerMeasure}>
    <Stack {stackSpace}>
      {#if headline.length}
        <h2 class="border-above">{headline}</h2>
      {/if}
      {@render children?.()}
    </Stack>
  </Center>
</section>
