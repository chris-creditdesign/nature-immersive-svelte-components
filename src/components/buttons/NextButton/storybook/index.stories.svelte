<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import NextButton from '../index.svelte';
  const { Story } = defineMeta({
    title: 'components/buttons/NextButton',
    component: NextButton,
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
    <NextButton {...args} on:click={handleClick} />
  {/snippet}
</Story>