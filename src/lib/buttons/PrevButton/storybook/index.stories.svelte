<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import { action } from "@storybook/addon-actions";
  import PrevButton from "../index.svelte";
  import { themeOptions } from "../../../../preview-content/options.js";

  let handleClick = action("click");
</script>

<Meta
  title="components/buttons/PrevButton"
  component={PrevButton}
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
  <PrevButton {...args} on:click={handleClick} />
</Story>
