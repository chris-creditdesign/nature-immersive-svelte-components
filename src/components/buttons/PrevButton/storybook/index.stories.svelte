<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import PrevButton from '../index.svelte';
  const { Story } = defineMeta({
    title: 'components/buttons/PrevButton',
    component: PrevButton,
    argTypes: {
    className: { control: "text" },
    message: { control: "text" },
    theme: { control: { type: "select", options: themeOptions } },
    disabled: { control: "boolean" },
  },
  });
</script>

<script>
import { action } from "@storybook/addon-actions";
  import { themeOptions } from "../../../../preview-content/options.js";
  let handleClick = action("click");
</script>

<Story name="Default" args={{ className: "example-class", disabled: false }}>
  {#snippet children(args)}
    <PrevButton {...args} on:click={handleClick} />
  {/snippet}
</Story>