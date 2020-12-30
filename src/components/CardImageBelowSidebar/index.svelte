<script>
  import { Sidebar } from "creditdesign-svelte-components";
  import Image from "../Image/index.svelte";
  import CardImageBelowStack from "../CardImageBelowStack/index.svelte";

  export let cardData;
  export let sidebarContentMinWidth;
  export let sidebarOnLeft;
  export let sidebarSpace;
  export let sidebarWidth = "var(--s7)";
  export let stackSpace;

  let { altText, caption, srcURL } = cardData;
</script>

<Sidebar {sidebarContentMinWidth} {sidebarOnLeft} {sidebarSpace} {sidebarWidth}>
  <div slot="sidebar">
    <Image {altText} {caption} {srcURL} />
  </div>
  <div slot="main-content">
    <CardImageBelowStack {cardData} {stackSpace} />
  </div>
</Sidebar>
