<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import RadioIcon from '../index.svelte';
  const { Story } = defineMeta({
    title: 'components/icons/RadioIcon',
    component: RadioIcon,
    argTypes: {
    className: { control: "text" },
    height: { control: { type: "range", min: 0.5, max: 10, step: 0.1 } },
    checked: { control: "boolean" },
    title: { control: "text" },
  },
  });
</script>

<Story name="Default" args={{ className: "example-class", height: 1, checked: false, title: "", }}>
  {#snippet children(args)}
    <RadioIcon {...args} />
  {/snippet}
</Story>