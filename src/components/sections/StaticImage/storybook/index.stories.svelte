<script>
  import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
  import { Stack } from "creditdesign-svelte-components";
  import StaticImage from "../index.svelte";
  import Image from "../../../Image/index.svelte";
  import Card from "../../../cards/Card/index.svelte";
  import {
    spaceOptions,
    justifyContentOptions,
  } from "../../../../preview-content/options.js";
  import {
    steps,
    stepsWithCards,
  } from "../../../../preview-content/static-image-data.js";

  let argTypes = {
    className: {
      control: "text",
    },
    gridGap: {
      control: {
        type: "select",
        options: spaceOptions,
      },
    },
    imageWidth: {
      control: "text",
    },
    justifyContent: {
      control: {
        type: "select",
        options: justifyContentOptions,
      },
    },
    placeImageOnLeft: {
      control: "boolean",
    },
    rootMargin: {
      control: "text",
    },
    steps: {
      control: "object",
    },
    textWidth: {
      control: "text",
    },
  };
</script>

<Meta
  title="components/sections/StaticImageSection"
  component={StaticImage}
  {argTypes}
/>

<Template let:args>
  <StaticImage {...args} />
</Template>

<Story
  name="Default"
  let:args
  args={{
    steps,
    className: "example-class",
    gridGap: "var(--s3)",
    justifyContent: "center",
    placeImageOnLeft: false,
    rootMargin: "-50% 0px -50% 0px",
    imageWidth: "1fr",
    textWidth: "2fr",
  }}
>
  <StaticImage {...args}>
    {#each steps as { text, altText, caption, srcURL }, i}
      <div class="step">
        <div class="step__content" data-index={i}>
          <Image className="step__image" {altText} {caption} {srcURL} />
          <p>
            {@html text}
          </p>
        </div>
      </div>
    {/each}
  </StaticImage>
</Story>

<Story
  name="Max width for image"
  let:args
  args={{
    steps,
    className: "example-class",
    gridGap: "var(--s3)",
    justifyContent: "center",
    placeImageOnLeft: false,
    rootMargin: "-50% 0px -50% 0px",
    imageWidth: "min(1fr, 600px)",
    textWidth: "2fr",
  }}
>
  <StaticImage {...args}>
    {#each steps as { text, altText, caption, srcURL }, i}
      <div class="step">
        <div class="step__content" data-index={i}>
          <Image className="step__image" {altText} {caption} {srcURL} />
          <p>
            {@html text}
          </p>
        </div>
      </div>
    {/each}
  </StaticImage>
</Story>

<Story
  name="With Cards"
  let:args
  args={{
    steps: stepsWithCards,
    className: "example-class",
    gridGap: "var(--s3)",
    justifyContent: "center",
    placeImageOnLeft: false,
    rootMargin: "-50% 0px -50% 0px",
    imageWidth: "1fr",
    textWidth: "2fr",
  }}
>
  <StaticImage {...args}>
    {#each stepsWithCards as { headline, content, altText, caption, srcURL }, i}
      <div class="step">
        <div class="step__content" data-index={i}>
          <div class="step__image">
            <Image {altText} {caption} {srcURL} />
          </div>
          <Stack stackSpace={"var(--s1)"}>
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
</Story>
