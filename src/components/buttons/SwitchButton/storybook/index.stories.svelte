<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import SwitchButton from '../index.svelte';
  const { Story } = defineMeta({
    title: 'components/buttons/SwitchButton',
    component: SwitchButton,
    argTypes: {
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
  },
  });
</script>

<script>
import { action } from "@storybook/addon-actions";
  import {
    justifyContentOptions,
    themeOptions,
    spaceOptions,
  } from "../../../../preview-content/options.js";
  let checked = $state(false);
  let handleClick = () => {
    checked = !checked;
    action("click")();
  };
</script>

<Story name="Default" args={{ className: "example-class", clusterJustifyContent: "flex-start", clusterSpace: "var(--s-1)", checked: false, message: "Switch:", theme: "", disabled: false, }}>
  {#snippet children(args)}
    <SwitchButton {...args} {checked} on:click={handleClick} />
  {/snippet}
</Story>

<Story name="Constrained width" args={{ className: "example-class", message: "Animation:", clusterJustifyContent: "center", clusterSpace: "var(--s-4)", disabled: false, }}>
  {#snippet children(args)}
    <div style="width: 160px; border: 1px dashed red;">
      <SwitchButton {...args} {checked} on:click={handleClick} />
    </div>
  {/snippet}
</Story>

<Story name="No flexbox gap" args={{ className: "example-class", clusterJustifyContent: "flex-start", clusterSpace: "var(--s-1)", checked: false, message: "Switch:", theme: "", disabled: false, }}>
  {#snippet children(args)}
    <div class="no-flexbox-gap">
      <SwitchButton {...args} {checked} on:click={handleClick} />
    </div>
  {/snippet}
</Story>