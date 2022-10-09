<script>
  import { Sidebar } from "creditdesign-svelte-components";
  import Image from "../../../Image/index.svelte";
  import CardImageBelowStack from "../CardImageBelowStack/index.svelte";

  /**
   * - altText
   * - caption
   * - footnote
   * - srcURL
   * - text
   */
  export let cardData;
  /**
   * Minimum percentage of the components width that the text can
   * be squashed to before switching to the stacked view.
   */
  export let textMinWidth = "50%";
  export let imageOnLeft = true;
  /**
   * Space between the text block and the image,
   * either stacked or side by side.
   */
  export let sidebarSpace = "var(--s-1)";
  /**
   * Width of the image when in side by side view.
   */
  export let imageWidth = "var(--s7)";
  /**
   * Stack space within the text block
   */
  export let stackSpace = "var(--s-1)";
  export let relatedLinksStackSpace = "var(--s-3)";

  let { altText, caption, srcURL } = cardData;
</script>

<Sidebar
  sidebarContentMinWidth={textMinWidth}
  sidebarOnRight={!imageOnLeft}
  {sidebarSpace}
  sidebarWidth={imageWidth}
>
  <div slot="sidebar">
    <Image {altText} {caption} {srcURL} />
  </div>
  <div slot="main-content">
    <CardImageBelowStack {cardData} {stackSpace} {relatedLinksStackSpace} />
  </div>
</Sidebar>
