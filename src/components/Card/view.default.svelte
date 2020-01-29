<script>
  import Card from "./index.svelte";
  export let className = "";
  export let altText;
  export let caption;
  export let footnote;
  export let headline;
  export let href;
  export let srcURL;
  export let text;
</script>

<Card
  {className}
  {altText}
  {caption}
  {footnote}
  {headline}
  {href}
  {srcURL}
  {text} />
