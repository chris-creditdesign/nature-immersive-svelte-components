<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CardImageBelowStack from '../index.svelte';
  const { Story } = defineMeta({
    title: 'components/cards/components/CardImageBelowStack',
    component: CardImageBelowStack,
    argTypes: {
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
  },
  });
</script>

<script>
import cardData from "../../../../../preview-content/card-data.js";
  import { spaceOptions } from "../../../../../preview-content/options.js";
  let cardDataNoRelatedLinks = Object.assign({}, cardData, {
    relatedLinks: [],
  });
</script>

<Story name="Default" args={{ cardData: cardDataNoRelatedLinks, stackSpace: "var(--s-1)", relatedLinksStackSpace: "var(--s-3)", }}>
  {#snippet children(args)}
    <CardImageBelowStack {...args} />
  {/snippet}
</Story>

<Story name="With related links" args={{ cardData, stackSpace: "var(--s-1)", relatedLinksStackSpace: "var(--s-3)", }}>
  {#snippet children(args)}
    <CardImageBelowStack {...args} />
  {/snippet}
</Story>