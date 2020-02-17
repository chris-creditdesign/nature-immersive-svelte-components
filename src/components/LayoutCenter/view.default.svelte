<script>
  import LayoutCenter from "./index.svelte";
  import Style from "../Style/index.svelte";
  export let className = "";
  export let centerSpace = "";
  export let centerMeasure = "";
</script>

<style>
  .test-content {
    background-color: lightblue;
  }

  p {
    max-width: none;
    margin: 0;
  }
</style>

<Style />

<LayoutCenter {className} {centerSpace} {centerMeasure}>
  <p class="test-content">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt iusto
    eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo corrupti
    numquam officia architecto modi! Labore natus error nisi earum?
  </p>
</LayoutCenter>
