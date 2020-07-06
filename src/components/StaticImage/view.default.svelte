<script>
  import StaticImage from "./index.svelte";
  import Image from "../Image/index.svelte";

  export let className = "";
  export let steps;
</script>

<StaticImage {className} {steps}>
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
