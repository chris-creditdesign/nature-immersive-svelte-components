<script>
  import { Center } from "creditdesign-svelte-components";
  import StaticImage from "./index.svelte";
  import Image from "../Image/index.svelte";

  export let className = "";
  export let justifyContent;
  export let textWidth;
  export let imageWidth;
  export let gridGap;
  export let rootMargin;
  export let placeImageOnLeft;
  export let steps;
</script>

<Center centerMeasure="var(--measure-big)">
  <StaticImage
    {className}
    {justifyContent}
    {textWidth}
    {imageWidth}
    {gridGap}
    {rootMargin}
    {placeImageOnLeft}
    {steps}
  >
    {#each steps as { text, altText, caption, srcURL }, i}
      <div class="step">
        <div class="step__content" data-index="{i}">
          <div class="step__image">
            <Image {altText} {caption} {srcURL} />
          </div>
          <p>
            {@html text}
          </p>
        </div>
      </div>
    {/each}
  </StaticImage>
</Center>
