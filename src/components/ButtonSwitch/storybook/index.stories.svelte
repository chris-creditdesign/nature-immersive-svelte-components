<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import { action } from "@storybook/addon-actions";
  import ButtonSwitch from "../index.svelte";

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
    checked: { control: "boolean" },
    message: { control: "text" },
  }}
/>

<Story
  name="Default"
  let:args
  args={{ className: "example-class", message: "Show animation:" }}
>
  <ButtonSwitch {...args} {checked} on:click={handleClick} />
</Story>
