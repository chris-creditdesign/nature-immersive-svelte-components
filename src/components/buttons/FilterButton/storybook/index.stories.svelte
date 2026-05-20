<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import FilterButton from '../index.svelte';
  const { Story } = defineMeta({
    title: 'components/buttons/FilterButton',
    component: FilterButton,
    argTypes: {
    className: { control: "text" },
    message: { control: "text" },
    expandedMessage: { control: "text" },
    expanded: { control: "boolean" },
    theme: { control: { type: "select", options: themeOptions } },
    disabled: { control: "boolean" },
  },
  });
</script>

<script>
import { action } from "@storybook/addon-actions";
  import { themeOptions } from "../../../../preview-content/options.js";
  let expanded = $state(false);
  let handleClick = () => {
    expanded = !expanded;
    action("click")();
  };
</script>

<Story name="Default" args={{ className: "example-class", disabled: false }}>
  {#snippet children(args)}
    <FilterButton {...args} {expanded} on:click={handleClick} />
  {/snippet}
</Story>

<Story name="No flexbox gap" args={{ className: "example-class", disabled: false }}>
  {#snippet children(args)}
    <div class="no-flexbox-gap">
      <FilterButton {...args} {expanded} on:click={handleClick} />
    </div>
  {/snippet}
</Story>