<script>
  import LayoutCluster from "./index.svelte";
  import Style from "../Style/index.svelte";
  export let className = "";
  export let clusterJustifyContent = "";
  export let clusterclusterSpaceJustifyContent = "";
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

<Style />

<LayoutCluster
  {className}
  {clusterJustifyContent}
  {clusterclusterSpaceJustifyContent}>
  <img src="img/image-small.jpg" alt="" class="test-content grow" />
  <a href="https://www.nature.com" class="test-content">Link</a>
  <a href="https://www.nature.com" class="test-content">Link</a>
  <a href="https://www.nature.com" class="test-content">Link</a>
  <a href="https://www.nature.com" class="test-content">Link</a>
  <a href="https://www.nature.com" class="test-content">Link</a>
  <a href="https://www.nature.com" class="test-content">Link</a>
</LayoutCluster>
