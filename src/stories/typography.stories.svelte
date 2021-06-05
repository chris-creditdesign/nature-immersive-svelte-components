<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";

  import Typography from "./components/Typography.svelte";
</script>

<Meta
  title="Example/Typography"
  component={Typography}
  parameters={{
    controls: { hideNoControlsWarning: true },
  }}
/>

<Story name="Harding font">
  <Typography />
</Story>

<Story name="Graphik Nature l Web font">
  <div class="font-family:sans-serif">
    <Typography />
  </div>
</Story>
