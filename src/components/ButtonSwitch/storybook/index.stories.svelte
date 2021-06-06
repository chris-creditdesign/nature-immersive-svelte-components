<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import { action } from "@storybook/addon-actions";
  import ButtonSwitch from "../index.svelte";
  import { justifyContentOptions } from "../../../preview-content/options.js";
  import { themeOptions } from "../../../preview-content/options.js";

  let checked = false;

  let handleClick = () => {
    checked = !checked;
    action("click")();
  };
</script>

<Meta
  title="Elements - interactive/ButtonSwitch"
  component={ButtonSwitch}
  argTypes={{
    className: { control: "text" },
    clusterJustifyContent: {
      control: {
        type: "select",
        options: justifyContentOptions,
      },
    },
    checked: { control: "boolean" },
    message: { control: "text" },
    theme: { control: { type: "select", options: themeOptions } },
  }}
/>

<Story
  name="Default"
  let:args
  args={{ className: "example-class", message: "Animation:" }}
>
  <ButtonSwitch {...args} {checked} on:click={handleClick} />
</Story>
