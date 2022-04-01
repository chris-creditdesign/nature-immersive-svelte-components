<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import { action } from "@storybook/addon-actions";
  import ToggleButton from "../index.svelte";

  let expanded = false;

  let handleClick = () => {
    expanded = !expanded;
    action("click")();
  };
</script>

<Meta
  title="Components/buttons/ToggleButton"
  component={ToggleButton}
  argTypes={{
    className: { control: "text" },
    expanded: { control: "boolean" },
    expandedMessage: { control: "text" },
    message: { control: "text" },
    theme: { control: "text" },
    disabled: { control: "boolean" },
  }}
/>

<Story
  name="Default"
  let:args
  args={{
    className: "example-class",
    expanded: false,
    expandedMessage: "Checked",
    message: "Unchecked",
    theme: "",
    disabled: false,
  }}
>
  <ToggleButton {...args} {expanded} on:click={handleClick} />
</Story>

<Story
  name="No flexbox gap"
  let:args
  args={{ className: "example-class", disabled: false }}
>
  <div class="no-flexbox-gap">
    <ToggleButton {...args} {expanded} on:click={handleClick} />
  </div>
</Story>
