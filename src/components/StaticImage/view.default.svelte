<script>
  import StaticImage from "./index.svelte";
  import Image from "../Image/index.svelte";
  export let className = "";
  export let steps;

  import Style from "../Style/index.svelte";
  import Light from "../Style/light.svelte";
  import Dark from "../Style/dark.svelte";

  let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
</script>

<Style />

{#if dark}
  <Dark />
{:else}
  <Light />
{/if}

<StaticImage {className} {steps}>
  {#each steps as { text, altText, caption, srcURL }, i}
    <div class="step">
      <div class="step__content" id={i}>
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
