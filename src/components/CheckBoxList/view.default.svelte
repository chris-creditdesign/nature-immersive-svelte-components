<script>
  import CheckBoxList from "./index.svelte";

  export let categories;
</script>

<fieldset class="filter-fieldset">
  <legend class="visually-hidden">Filter by category</legend>
  <CheckBoxList {categories} />
</fieldset>
