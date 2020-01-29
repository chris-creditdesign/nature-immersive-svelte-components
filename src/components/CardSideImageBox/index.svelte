<script>
  import LayoutStack from "../LayoutStack/index.svelte";
  import LayoutGrid from "../LayoutGrid/index.svelte";
  import LayoutBox from "../LayoutBox/index.svelte";
  import Image from "../Image/index.svelte";

  export let className = "";
  export let altText = "";
  export let caption = "";
  export let footnote = "";
  export let headline;
  export let href;
  export let srcURL = "";
  export let text;
  export let stackSpace = "var(--s-1)";
  export let gridSpace = "var(--s-1)";
</script>

<style>
  .footnote {
    font-size: var(--font-size-small-1);
    font-family: var(--sans-serif-font);
  }

  h3 {
    margin: 0;
  }
</style>

<div class={`card ${className}`}>
  <LayoutBox className={'invert'}>
    <LayoutGrid {gridSpace}>
      {#if srcURL}
        <Image {altText} {caption} {srcURL} />
      {/if}
      <LayoutStack {stackSpace}>
        <a {href}>
          <h3>{headline}</h3>
        </a>
        <p>
          {@html text}
        </p>

        {#if footnote}
          <p class="footnote">{footnote}</p>
        {/if}
      </LayoutStack>
    </LayoutGrid>

  </LayoutBox>
</div>
