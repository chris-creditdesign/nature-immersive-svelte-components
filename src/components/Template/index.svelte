<script>
  export let className = "";
</script>

<style>
  .template {
    border: 1px solid red;
  }
</style>

<div class="{`template ${className}`}">
  <slot />
</div>
