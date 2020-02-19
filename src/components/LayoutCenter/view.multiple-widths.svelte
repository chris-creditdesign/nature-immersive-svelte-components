<script>
  import LayoutCenter from "./index.svelte";
  import LayoutStack from "../LayoutStack/index.svelte";

  export let className = "";
  export let centerSpace = "";
  export let centerMeasure = "";
</script>

<style>
  .test-content {
    background-color: lightblue;
    margin: 0;
  }

  img {
    max-width: 100%;
  }
</style>

<LayoutStack>
  <LayoutCenter {className} {centerSpace} centerMeasure="var(--measure-small)">
    <p class="test-content">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste beatae
      doloribus quod, quisquam fuga dolor, eveniet at mollitia quia consectetur
      tempore, quas distinctio molestiae error fugit! Sint soluta accusantium
      labore.
    </p>
  </LayoutCenter>
  <LayoutCenter {className} {centerSpace} centerMeasure="var(--measure-big)">
    <img src="img/image.jpg" alt="" />
  </LayoutCenter>
  <LayoutCenter {className} {centerSpace} centerMeasure="var(--measure-small)">
    <p class="test-content">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste beatae
      doloribus quod, quisquam fuga dolor, eveniet at mollitia quia consectetur
      tempore, quas distinctio molestiae error fugit! Sint soluta accusantium
      labore.
    </p>
  </LayoutCenter>
  <LayoutCenter {className} {centerSpace} {centerMeasure}>
    <p class="test-content">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste beatae
      doloribus quod, quisquam fuga dolor, eveniet at mollitia quia consectetur
      tempore, quas distinctio molestiae error fugit! Sint soluta accusantium
      labore.
    </p>
  </LayoutCenter>

  <LayoutCenter {className} {centerSpace} centerMeasure="var(--measure-small)">
    <p class="test-content">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste beatae
      doloribus quod, quisquam fuga dolor, eveniet at mollitia quia consectetur
      tempore, quas distinctio molestiae error fugit! Sint soluta accusantium
      labore.
    </p>
  </LayoutCenter>

</LayoutStack>
