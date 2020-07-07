<script>
  import CheckBoxList from "./index.svelte";

  /* eslint-disable import/prefer-default-export */
  export let categories;
</script>

<fieldset class="filter-fieldset">
  <legend class="visually-hidden">Filter by category</legend>
  <CheckBoxList {categories} />
</fieldset>
