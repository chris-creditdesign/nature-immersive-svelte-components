<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";

  import MenuList from "../index.svelte";

  let menuLinks = [
    { text: "View animation", href: "#" },
    { text: "Controls", href: "#" },
    { text: "Replay intro", href: "#" },
    { text: "About Nature", href: "#" },
    { text: "Credits", href: "#" },
    { text: "Download data", href: "dat/data.zip" },
  ];
</script>

<Meta
  title="components/menu/components/MenuList"
  component={MenuList}
  argTypes={{
    menuLinks: { control: "object" },
    menuHeight: { control: "number" },
  }}
/>

<Story
  name="Default"
  let:args
  args={{
    menuLinks,
  }}
>
  <MenuList {...args} />
</Story>
