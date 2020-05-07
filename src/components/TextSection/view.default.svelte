<script>
  import TextSection from "./index.svelte";

  export let className;
  export let centerSpace;
  export let textSectionStackSpace;
  export let centerMeasure;
  export let content;
</script>

<TextSection
  {className}
  {centerSpace}
  {textSectionStackSpace}
  {centerMeasure}
  {content} />
