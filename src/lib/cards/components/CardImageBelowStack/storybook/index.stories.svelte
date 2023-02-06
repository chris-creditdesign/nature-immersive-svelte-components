<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import CardImageBelowStack from "../index.svelte";
  import cardData from "../../../../../preview-content/card-data.js";
  import { spaceOptions } from "../../../../../preview-content/options.js";

  let argTypes = {
    cardData: {
      control: "object",
    },
    stackSpace: {
      control: {
        type: "select",
        options: spaceOptions,
      },
    },
    relatedLinksStackSpace: {
      control: {
        type: "select",
        options: spaceOptions,
      },
    },
  };

  let cardDataNoRelatedLinks = Object.assign({}, cardData, {
    relatedLinks: [],
  });
</script>

<Meta
  title="components/cards/components/CardImageBelowStack"
  component={CardImageBelowStack}
  {argTypes}
/>

<Story
  name="Default"
  let:args
  args={{
    cardData: cardDataNoRelatedLinks,
    stackSpace: "var(--s-1)",
    relatedLinksStackSpace: "var(--s-3)",
  }}
>
  <CardImageBelowStack {...args} />
</Story>

<Story
  name="With related links"
  let:args
  args={{
    cardData,
    stackSpace: "var(--s-1)",
    relatedLinksStackSpace: "var(--s-3)",
  }}
>
  <CardImageBelowStack {...args} />
</Story>
