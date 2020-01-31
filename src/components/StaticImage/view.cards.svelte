<script>
  import StaticImage from "./index.svelte";
  import StyleStaticImage from "./style.svelte";
  import Image from "../Image/index.svelte";
  import Card from "../Card/index.svelte";
  import LayoutStack from "../LayoutStack/index.svelte";
  export let className = "";
  export let steps;
</script>

<style>
  @media screen and (min-width: 800px) {
    .step {
      height: 100vh;
      display: flex;
      align-items: center;
    }

    /* Don't show the images if the screen is wide enough and processed */
    /* Keep them available for screen readers */
    .step__image {
      opacity: 0;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      height: 1px;
      width: 1px;
      margin: -1px !important;
      padding: 0 !important;
      border: 0 !important;
    }
  }
</style>

<StyleStaticImage />

<StaticImage {className} {steps}>
  {#each steps as { headline, content, altText, caption, srcURL }, i}
    <div class="step">
      <div class="step__content" id={i}>
        <div class="step__image">
          <Image {altText} {caption} {srcURL} />
        </div>
        <LayoutStack stackSpace={'var(--s1)'}>
          <h2 class="border-above">
            {@html headline}
          </h2>
          {#each content as cardData}
            <Card {cardData} />
          {/each}
        </LayoutStack>
      </div>
    </div>
  {/each}
</StaticImage>
