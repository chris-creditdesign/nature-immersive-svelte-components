<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import { action } from "@storybook/addon-actions";
  import FilterButton from "../index.svelte";
  import { themeOptions } from "../../../../preview-content/options.js";

  let expanded = false;

  let handleClick = () => {
    expanded = !expanded;
    action("click")();
  };
</script>

<Meta
  title="components/buttons/FilterButton"
  component={FilterButton}
  argTypes={{
    className: { control: "text" },
    message: { control: "text" },
    expandedMessage: { control: "text" },
    expanded: { control: "boolean" },
    theme: { control: { type: "select", options: themeOptions } },
    disabled: { control: "boolean" },
  }}
/>

<Story
  name="Default"
  let:args
  args={{ className: "example-class", disabled: false }}
>
  <FilterButton {...args} {expanded} on:click={handleClick} />
</Story>

<Story
  name="No flexbox gap"
  let:args
  args={{ className: "example-class", disabled: false }}
>
  <div class="no-flexbox-gap">
    <FilterButton {...args} {expanded} on:click={handleClick} />
  </div>
</Story>
