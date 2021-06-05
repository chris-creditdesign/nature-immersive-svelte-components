<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";

  import FontSizes from "./components/FontSizes.svelte";
</script>

<Meta
  title="Example/Font sizes"
  component={FontSizes}
  parameters={{
    controls: { hideNoControlsWarning: true },
  }}
/>

<Story name="Harding font">
  <FontSizes />
</Story>

<Story name="Graphik Nature l Web font">
  <div class="font-family:sans-serif">
    <FontSizes />
  </div>
</Story>
