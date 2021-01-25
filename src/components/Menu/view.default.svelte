<script>
  import Menu from "./index.svelte";

  export let articleData;
</script>

<style>
  .container {
    height: 50vh;
  }
</style>

<Menu {articleData}>
  <div class="container">
    <a href="https://www.nature.come">Next focusable item...</a>
  </div>
</Menu>
