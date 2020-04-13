<script>
  import LayoutFrame from "./index.svelte";

  export let className = "";
  export let frameRatioHeight;
  export let frameRatioWidth;
</script>

<LayoutFrame {className} {frameRatioHeight} {frameRatioWidth}>
  <img src="img/image.jpg" alt="test image" />
</LayoutFrame>
