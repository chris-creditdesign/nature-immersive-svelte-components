<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";

  import Footer from "../index.svelte";
</script>

<Meta
  title="Page furniture/Footer"
  component={Footer}
  parameters={{
    layout: "fullscreen",
    controls: { hideNoControlsWarning: true },
  }}
/>

<Story name="Default">
  <Footer />
</Story>
