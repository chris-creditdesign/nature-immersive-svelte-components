<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";

  import Typography from "../index.svelte";
</script>

<Meta
  title="Intro/Typography"
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
