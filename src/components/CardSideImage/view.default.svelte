<script>
  import CardSideImage from "./index.svelte";
  export let className = "";
  export let altText;
  export let caption;
  export let footnote;
  export let headline;
  export let href;
  export let srcURL;
  export let text;
</script>

<CardSideImage
  {className}
  {altText}
  {caption}
  {footnote}
  {headline}
  {href}
  {srcURL}
  {text} />
