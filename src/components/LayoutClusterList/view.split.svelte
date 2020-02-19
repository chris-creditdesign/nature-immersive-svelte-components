<script>
  import LayoutCluster from "./index.svelte";
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

<LayoutCluster clusterJustifyContent="space-between">
  <li>
    <img src="img/image-small.jpg" alt="" class="test-content" />
  </li>
  <li>
    <LayoutCluster clusterJustifyContent="flex-start">
      <li>
        <a href="https://www.nature.com" class="test-content">Link</a>
      </li>
      <li>
        <a href="https://www.nature.com" class="test-content">Link</a>
      </li>
      <li>
        <a href="https://www.nature.com" class="test-content">Link</a>
      </li>
      <li>
        <a href="https://www.nature.com" class="test-content">Link</a>
      </li>
      <li>
        <a href="https://www.nature.com" class="test-content">Link</a>
      </li>
      <li>
        <a href="https://www.nature.com" class="test-content">Link</a>
      </li>
    </LayoutCluster>
  </li>
</LayoutCluster>
