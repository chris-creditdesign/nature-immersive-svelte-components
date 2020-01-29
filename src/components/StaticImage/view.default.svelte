<script>
  import StaticImage from "./index.svelte";
  export let className = "";
  export let steps;
</script>

<StaticImage {className} {steps} />
