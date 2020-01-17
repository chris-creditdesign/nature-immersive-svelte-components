<script>
  import LayoutCenter from "./index.svelte";
  import LayoutStack from "../LayoutStack/index.svelte";
  export let className = "";
  export let centerSpace = "";
</script>

<style>
  .test-content {
    background-color: lightblue;
  }
</style>

<LayoutStack stackSpace="var(--s3)">
  <LayoutCenter {className} {centerSpace} centerMeasure="var(--measure-small)">
    <LayoutStack stackSpace="var(--s-1)">
      <p class="test-content">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste beatae
        doloribus quod, quisquam fuga dolor, eveniet at mollitia quia
        consectetur tempore, quas distinctio molestiae error fugit! Sint soluta
        accusantium labore.
      </p>
      <p class="test-content">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste beatae
        doloribus quod, quisquam fuga dolor, eveniet at mollitia quia
        consectetur tempore, quas distinctio molestiae error fugit! Sint soluta
        accusantium labore.
      </p>
      <p class="test-content">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste beatae
        doloribus quod, quisquam fuga dolor, eveniet at mollitia quia
        consectetur tempore, quas distinctio molestiae error fugit! Sint soluta
        accusantium labore.
      </p>
    </LayoutStack>
  </LayoutCenter>
  <LayoutCenter {className} {centerSpace} centerMeasure="var(--measure-small)">
    <LayoutStack stackSpace="var(--s-1)">
      <p class="test-content">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste beatae
        doloribus quod, quisquam fuga dolor, eveniet at mollitia quia
        consectetur tempore, quas distinctio molestiae error fugit! Sint soluta
        accusantium labore.
      </p>
      <p class="test-content">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste beatae
        doloribus quod, quisquam fuga dolor, eveniet at mollitia quia
        consectetur tempore, quas distinctio molestiae error fugit! Sint soluta
        accusantium labore.
      </p>
      <p class="test-content">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste beatae
        doloribus quod, quisquam fuga dolor, eveniet at mollitia quia
        consectetur tempore, quas distinctio molestiae error fugit! Sint soluta
        accusantium labore.
      </p>
    </LayoutStack>
  </LayoutCenter>
</LayoutStack>
