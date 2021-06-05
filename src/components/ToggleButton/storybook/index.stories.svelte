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
  title="Elements - interactive/ToggleButton"
  component={ToggleButton}
  argTypes={{
    className: { control: "text" },
    expanded: { control: "boolean" },
    expandedMessage: { control: "text" },
    message: { control: "text" },
    showTriangle: { control: "boolean" },
  }}
/>

<Story name="Default" let:args args={{ className: "example-class" }}>
  <ToggleButton {...args} {expanded} on:click={handleClick} />
</Story>

<Story name="No flexbox gap" let:args args={{ className: "example-class" }}>
  <div class="no-flexbox-gap">
    <ToggleButton {...args} {expanded} on:click={handleClick} />
  </div>
</Story>
