<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import { action } from "@storybook/addon-actions";
  import SimpleButton from "../index.svelte";
  import { themeOptions } from "../../../preview-content/options.js";

  let handleClick = action("click");
</script>

<Meta
  title="Elements - interactive/SimpleButton"
  component={SimpleButton}
  argTypes={{
    className: { control: "text" },
    message: { control: "text" },
    theme: { control: { type: "select", options: themeOptions } },
  }}
/>

<Story name="Default" let:args args={{ className: "example-class" }}>
  <SimpleButton {...args} on:click={handleClick} />
</Story>
