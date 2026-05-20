<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import EmailIcon from '../index.svelte';
  const { Story } = defineMeta({
    title: 'components/icons/EmailIcon',
    component: EmailIcon,
    argTypes: {
    className: { control: "text" },
    height: { control: { type: "range", min: 0.5, max: 10, step: 0.1 } },
    title: { control: "text" },
  },
  });
</script>

<Story name="Default" args={{ className: "example-class", title: "Email", height: 1, }}>
  {#snippet children(args)}
    <EmailIcon {...args} />
  {/snippet}
</Story>