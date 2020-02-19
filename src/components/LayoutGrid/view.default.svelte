<script>
  import LayoutGrid from "./index.svelte";

  export let className = "";
  export let gridSpace;
</script>

<style>
  .test-content {
    background-color: lightblue;
    min-height: 100px;
  }
</style>

<LayoutGrid {className} {gridSpace}>
  <div class="test-content" />
  <div class="test-content" />
  <div class="test-content" />
  <div class="test-content" />
  <div class="test-content" />
  <div class="test-content" />
  <div class="test-content" />
</LayoutGrid>
