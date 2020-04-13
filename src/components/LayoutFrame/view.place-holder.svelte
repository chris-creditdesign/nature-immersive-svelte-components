<script>
  import LayoutFrame from "./index.svelte";

  export let className = "";
  export let frameRatioHeight;
  export let frameRatioWidth;
</script>

<style>
  .place-holder {
    background-color: #ececec;
    font-family: helvetica;
    text-transform: uppercase;
    font-weight: bold;
  }
</style>

<LayoutFrame {className} {frameRatioHeight} {frameRatioWidth}>
  <div class="place-holder">
    <p>image pending</p>
  </div>
</LayoutFrame>
