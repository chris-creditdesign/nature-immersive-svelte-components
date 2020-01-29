<script>
  import LayoutStack from "../LayoutStack/index.svelte";
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
    <LayoutStack {stackSpace}>
      {#if srcURL}
        <Image {altText} {caption} {srcURL} />
      {/if}
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

  </LayoutBox>
</div>
