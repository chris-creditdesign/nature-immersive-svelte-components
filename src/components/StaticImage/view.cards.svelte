<script>
  import { Stack } from "creditdesign-svelte-components";
  import StaticImage from "./index.svelte";
  import Image from "../Image/index.svelte";
  import Card from "../Card/index.svelte";

  export let className = "";
  export let steps;
</script>

<StaticImage {className} {steps}>
  {#each steps as { headline, content, altText, caption, srcURL }, i}
    <div class="step">
      <div class="step__content" data-index="{i}">
        <div class="step__image">
          <Image {altText} {caption} {srcURL} />
        </div>
        <Stack stackSpace="{'var(--s1)'}">
          <h2 class="border-above">
            {@html headline}
          </h2>
          {#each content as cardData}
            <Card {cardData} />
          {/each}
        </Stack>
      </div>
    </div>
  {/each}
</StaticImage>
