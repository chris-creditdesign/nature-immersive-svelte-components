<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import { action } from "@storybook/addon-actions";
  import SwitchButton from "../index.svelte";
  import {
    justifyContentOptions,
    themeOptions,
    spaceOptions,
  } from "../../../../preview-content/options.js";

  let checked = false;

  let handleClick = () => {
    checked = !checked;
    action("click")();
  };
</script>

<Meta
  title="components/buttons/SwitchButton"
  component={SwitchButton}
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
    disabled: { control: "boolean" },
  }}
/>

<Story
  name="Default"
  let:args
  args={{
    className: "example-class",
    clusterJustifyContent: "flex-start",
    clusterSpace: "var(--s-1)",
    checked: false,
    message: "Switch:",
    theme: "",
    disabled: false,
  }}
>
  <SwitchButton {...args} {checked} on:click={handleClick} />
</Story>

<Story
  name="Constrained width"
  let:args
  args={{
    className: "example-class",
    message: "Animation:",
    clusterJustifyContent: "center",
    clusterSpace: "var(--s-4)",
    disabled: false,
  }}
>
  <div style="width: 160px; border: 1px dashed red;">
    <SwitchButton {...args} {checked} on:click={handleClick} />
  </div>
</Story>

<Story
  name="No flexbox gap"
  let:args
  args={{
    className: "example-class",
    clusterJustifyContent: "flex-start",
    clusterSpace: "var(--s-1)",
    checked: false,
    message: "Switch:",
    theme: "",
    disabled: false,
  }}
>
  <div class="no-flexbox-gap">
    <SwitchButton {...args} {checked} on:click={handleClick} />
  </div>
</Story>
