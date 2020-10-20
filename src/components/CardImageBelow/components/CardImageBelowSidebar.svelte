<script>
  import { Sidebar } from "creditdesign-svelte-components";
  import Image from "../../Image/index.svelte";
  import CardImageBelowStack from "./CardImageBelowStack.svelte";

  export let altText;
  export let caption;
  export let footnote;
  export let sidebarContentMinWidth;
  export let sidebarOnLeft;
  export let sidebarSpace;
  export let sidebarWidth;
  export let srcURL;
  export let stackSpace;
  export let text;
</script>

<Sidebar {sidebarWidth} {sidebarContentMinWidth} {sidebarSpace} {sidebarOnLeft}>
  <div slot="sidebar">
    <Image {altText} {caption} {srcURL} />
  </div>
  <div slot="main-content">
    <CardImageBelowStack {stackSpace} {text} {footnote} />
  </div>
</Sidebar>
