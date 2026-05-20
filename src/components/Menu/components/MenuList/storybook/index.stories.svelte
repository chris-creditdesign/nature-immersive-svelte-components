<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import MenuList from '../index.svelte';
  const { Story } = defineMeta({
    title: 'components/menu/components/MenuList',
    component: MenuList,
    argTypes: {
    menuLinks: { control: "object" },
    menuHeight: { control: "number" },
  },
  });
</script>

<script>
let menuLinks = [
    { text: "View animation", href: "#" },
    { text: "Controls", href: "#" },
    { text: "Replay intro", href: "#" },
    { text: "About Nature", href: "#" },
    { text: "Credits", href: "#" },
    { text: "Download data", href: "dat/data.zip" },
  ];
</script>

<Story name="Default" args={{ menuLinks, }}>
  {#snippet children(args)}
    <MenuList {...args} />
  {/snippet}
</Story>