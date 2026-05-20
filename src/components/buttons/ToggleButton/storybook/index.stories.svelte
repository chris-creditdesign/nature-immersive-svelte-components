<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import ToggleButton from '../index.svelte';
  const { Story } = defineMeta({
    title: 'Components/buttons/ToggleButton',
    component: ToggleButton,
    argTypes: {
    className: { control: "text" },
    expanded: { control: "boolean" },
    expandedMessage: { control: "text" },
    message: { control: "text" },
    theme: { control: "text" },
    disabled: { control: "boolean" },
  },
  });
</script>

<script>
import { action } from "@storybook/addon-actions";
  let expanded = $state(false);
  let handleClick = () => {
    expanded = !expanded;
    action("click")();
  };
</script>

<Story name="Default" args={{ className: "example-class", expanded: false, expandedMessage: "Checked", message: "Unchecked", theme: "", disabled: false, }}>
  {#snippet children(args)}
    <ToggleButton {...args} {expanded} on:click={handleClick} />
  {/snippet}
</Story>

<Story name="No flexbox gap" args={{ className: "example-class", disabled: false }}>
  {#snippet children(args)}
    <div class="no-flexbox-gap">
      <ToggleButton {...args} {expanded} on:click={handleClick} />
    </div>
  {/snippet}
</Story>