<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import { action } from "@storybook/addon-actions";
  import NextButton from "../index.svelte";
  import { themeOptions } from "../../../../preview-content/options.js";

  let handleClick = action("click");
</script>

<Meta
  title="components/buttons/NextButton"
  component={NextButton}
  argTypes={{
    className: { control: "text" },
    message: { control: "text" },
    theme: { control: { type: "select", options: themeOptions } },
    disabled: { control: "boolean" },
  }}
/>

<Story
  name="Default"
  let:args
  args={{ className: "example-class", disabled: false }}
>
  <NextButton {...args} on:click={handleClick} />
</Story>
