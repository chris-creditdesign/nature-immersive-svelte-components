<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import MenuSocialLinks from "../index.svelte";
  import articleData from "../../../../../preview-content/article-data.js";

  let argTypes = {
    articleData: {
      control: "object",
    },
    logoHeight: {
      control: "number",
    },
  };

  let { doi, articleURL, title, description } = articleData;
</script>

<Meta
  title="components/menu/components/MenuSocialLinks"
  component={MenuSocialLinks}
  {argTypes}
/>

<Story
  name="Default"
  let:args
  args={{ articleData: { doi, articleURL, title, description } }}
>
  <MenuSocialLinks {...args} />
</Story>
