<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import CardImageBelowStack from "../index.svelte";
  import cardData from "../../../preview-content/card-data.js";
  import { spaceOptions } from "../../../preview-content/options.js";

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

  let { text, footnote, relatedLinks, relatedLinksHeadline } = cardData;
</script>

<Meta
  title="Cards/components/CardImageBelowStack"
  component={CardImageBelowStack}
  {argTypes}
/>

<Story
  name="Default"
  let:args
  args={{ cardData: { text, footnote, relatedLinks, relatedLinksHeadline } }}
>
  <CardImageBelowStack {...args} />
</Story>
