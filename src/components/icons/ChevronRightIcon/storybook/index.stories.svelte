<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import ChevronRightIcon from '../index.svelte';
  const { Story } = defineMeta({
    title: 'components/icons/ChevronRightIcon',
    component: ChevronRightIcon,
    argTypes: {
    className: { control: "text" },
    height: { control: { type: "range", min: 0.5, max: 10, step: 0.1 } },
    title: { control: "text" },
  },
  });
</script>

<Story name="Default" args={{ className: "example-class", height: 1, title: "", }}>
  {#snippet children(args)}
    <ChevronRightIcon {...args} />
  {/snippet}
</Story>