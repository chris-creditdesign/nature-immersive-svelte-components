<script>
  import { Sidebar } from "creditdesign-svelte-components";
  import Image from "../../Image/index.svelte";
  import CardImageBelowStack from "./CardImageBelowStack.svelte";

  export let cardData;
  export let sidebarContentMinWidth;
  export let sidebarOnLeft;
  export let sidebarSpace;
  export let sidebarWidth;
  export let stackSpace;

  let { altText, caption, srcURL } = cardData;
</script>

<Sidebar {sidebarWidth} {sidebarContentMinWidth} {sidebarSpace} {sidebarOnLeft}>
  <div slot="sidebar">
    <Image {altText} {caption} {srcURL} />
  </div>
  <div slot="main-content">
    <CardImageBelowStack {stackSpace} {cardData} />
  </div>
</Sidebar>
