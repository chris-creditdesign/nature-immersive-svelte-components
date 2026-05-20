<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import MenuSocialLinks from '../index.svelte';
  const { Story } = defineMeta({
    title: 'components/menu/components/MenuPdfDownload',
    component: MenuSocialLinks,
    argTypes: {
    doi: {
      control: "text",
    },
    logoHeight: {
      control: "number",
    },
  },
  });
</script>

<script>
import articleData from "../../../../../preview-content/article-data.js";
  let { doi } = articleData;
</script>

<Story name="Default" args={{ doi }}>
  {#snippet children(args)}
    <MenuSocialLinks {...args} />
  {/snippet}
</Story>

<Story name="No flexbox gap" args={{ doi }}>
  {#snippet children(args)}
    <div class="no-flexbox-gap">
      <MenuSocialLinks {...args} />
    </div>
  {/snippet}
</Story>