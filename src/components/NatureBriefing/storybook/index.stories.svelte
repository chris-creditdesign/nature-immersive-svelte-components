<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";

  import NatureBriefing from "../index.svelte";
</script>

<Meta
  title="components/NatureBriefing"
  component={NatureBriefing}
  parameters={{
    controls: { hideNoControlsWarning: true },
  }}
/>

<Story name="Default">
  <NatureBriefing />
</Story>
