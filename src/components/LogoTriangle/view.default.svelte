<script>
  import LogoTriangle from "./index.svelte";

  const sizes = [1, 2, 3, 4, 5];
  const ratio = 1.6;
</script>

{#each sizes as size}
  <div>
    <LogoTriangle height="{size * ratio}" />
  </div>
{/each}
