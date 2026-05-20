<script lang="ts">
  import { Sidebar } from "creditdesign-svelte-components";
  import Image from "../../../Image/index.svelte";
  import CardImageBelowStack from "../CardImageBelowStack/index.svelte";

  
  
  
  
  
  interface Props {
    /**
   * - altText
   * - caption
   * - footnote
   * - srcURL
   * - text
   */
    cardData: any;
    /**
   * Minimum percentage of the components width that the text can
   * be squashed to before switching to the stacked view.
   */
    textMinWidth?: string;
    imageOnLeft?: boolean;
    /**
   * Space between the text block and the image,
   * either stacked or side by side.
   */
    sidebarSpace?: string;
    /**
   * Width of the image when in side by side view.
   */
    imageWidth?: string;
    /**
   * Stack space within the text block
   */
    stackSpace?: string;
    relatedLinksStackSpace?: string;
  }

  let {
    cardData,
    textMinWidth = "50%",
    imageOnLeft = true,
    sidebarSpace = "var(--s-1)",
    imageWidth = "var(--s7)",
    stackSpace = "var(--s-1)",
    relatedLinksStackSpace = "var(--s-3)"
  }: Props = $props();

  let { altText, caption, srcURL } = cardData;
</script>

<Sidebar
  sidebarContentMinWidth={textMinWidth}
  sidebarOnRight={!imageOnLeft}
  {sidebarSpace}
  sidebarWidth={imageWidth}
>
  {#snippet sidebar()}
    <div >
      <Image {altText} {caption} {srcURL} />
    </div>
  {/snippet}
  <div slot="main-content">
    <CardImageBelowStack {cardData} {stackSpace} {relatedLinksStackSpace} />
  </div>
</Sidebar>
