<script>
  import LayoutCluster from "./index.svelte";
  import StyleCluster from "./style.svelte";
</script>

<style>
  .test-content {
    background-color: lightblue;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<StyleCluster />

<LayoutCluster clusterJustifyContent="space-between">
  <img src="img/image-small.jpg" alt="" class="test-content" />
  <LayoutCluster clusterJustifyContent="flex-start">
    <a href="https://www.nature.com" class="test-content">Link</a>
    <a href="https://www.nature.com" class="test-content">Link</a>
    <a href="https://www.nature.com" class="test-content">Link</a>
    <a href="https://www.nature.com" class="test-content">Link</a>
    <a href="https://www.nature.com" class="test-content">Link</a>
    <a href="https://www.nature.com" class="test-content">Link</a>
  </LayoutCluster>
</LayoutCluster>
