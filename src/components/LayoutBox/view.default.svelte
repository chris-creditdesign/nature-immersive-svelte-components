<script>
  import LayoutBox from "./index.svelte";
  import Style from "../Style/index.svelte";
  export let className = "";
  export let boxSpace = "";
</script>

<style>
  img {
    max-width: 100%;
  }
</style>

<Style />

<LayoutBox {className} {boxSpace}>
  <img src="img/image.jpg" alt="" />
</LayoutBox>
