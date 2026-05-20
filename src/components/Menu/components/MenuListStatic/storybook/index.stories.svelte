<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import MenuListStatic from '../index.svelte';
  const { Story } = defineMeta({
    title: 'components/menu/components/MenuListStatic',
    component: MenuListStatic,
    argTypes: {
    menuLinks: { control: "object" },
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
    <MenuListStatic {...args} />
  {/snippet}
</Story>