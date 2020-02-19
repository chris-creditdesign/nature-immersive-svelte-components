<script>
  import Menu from "./index.svelte";

  export let className = "";
  export let articleData;
</script>

<Menu {className} {articleData} />
