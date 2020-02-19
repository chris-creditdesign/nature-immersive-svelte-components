<script>
  import LayoutBox from "./index.svelte";

  export let className = "";
  export let boxSpace = "";
</script>

<style>
  img {
    max-width: 100%;
  }
</style>

<LayoutBox {className} {boxSpace}>
  <img src="img/image.jpg" alt="" />
</LayoutBox>
