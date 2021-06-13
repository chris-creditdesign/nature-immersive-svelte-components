<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import { action } from "@storybook/addon-actions";
  import ButtonSwitch from "../index.svelte";
  import { justifyContentOptions } from "../../../preview-content/options.js";
  import {
    themeOptions,
    spaceOptions,
  } from "../../../preview-content/options.js";

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
    clusterSpace: {
      control: {
        type: "select",
        options: spaceOptions,
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

<Story
  name="Constrained width"
  let:args
  args={{
    className: "example-class",
    message: "Animation:",
    clusterJustifyContent: "center",
    clusterSpace: "var(--s-4)",
  }}
>
  <div style="width: 160px; border: 1px dashed red;">
    <ButtonSwitch {...args} {checked} on:click={handleClick} />
  </div>
</Story>

<Story
  name="On coloured background"
  let:args
  args={{
    className: "example-class",
    message: "Animation:",
    clusterJustifyContent: "center",
    clusterSpace: "var(--s-4)",
  }}
>
  <div style="padding: 50px; background-color: green;">
    <ButtonSwitch {...args} {checked} on:click={handleClick} />
  </div>
</Story>
