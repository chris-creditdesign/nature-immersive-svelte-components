<script>
  import LayoutCluster from "./index.svelte";
  import StyleCluster from "./style.svelte";
  export let className = "";
  export let clusterJustifyContent = "";
  export let clusterSpace = "";
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

<LayoutCluster {className} {clusterJustifyContent} {clusterSpace}>
  <img src="img/image-small.jpg" alt="" class="test-content" />
  <a href="https://www.nature.com" class="test-content">Link</a>
  <a href="https://www.nature.com" class="test-content">Link</a>
  <a href="https://www.nature.com" class="test-content">Link</a>
  <a href="https://www.nature.com" class="test-content">Link</a>
  <a href="https://www.nature.com" class="test-content">Link</a>
  <a href="https://www.nature.com" class="test-content">Link</a>
</LayoutCluster>
