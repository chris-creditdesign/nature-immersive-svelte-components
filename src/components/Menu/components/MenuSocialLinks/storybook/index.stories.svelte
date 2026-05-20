<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import MenuSocialLinks from '../index.svelte';
  const { Story } = defineMeta({
    title: 'components/menu/components/MenuSocialLinks',
    component: MenuSocialLinks,
    argTypes: {
    articleData: {
      control: "object",
    },
    logoHeight: {
      control: "number",
    },
  },
  });
</script>

<script>
import articleData from "../../../../../preview-content/article-data.js";
  let { doi, articleURL, title, description } = articleData;
</script>

<Story name="Default" args={{ articleData: { doi, articleURL, title, description } }}>
  {#snippet children(args)}
    <MenuSocialLinks {...args} />
  {/snippet}
</Story>