<script>
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
        <Image className="step__image" {altText} {caption} {srcURL} />
        <p>
          {@html text}
        </p>
      </div>
    </div>
  {/each}
</StaticImage>
