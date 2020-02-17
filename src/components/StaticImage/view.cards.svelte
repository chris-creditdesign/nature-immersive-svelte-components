<script>
  import StaticImage from "./index.svelte";
  import Image from "../Image/index.svelte";
  import Card from "../Card/index.svelte";
  import LayoutStack from "../LayoutStack/index.svelte";

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
