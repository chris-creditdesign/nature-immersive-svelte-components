<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import MenuSocialLinks from "../index.svelte";
  import articleData from "../../../preview-content/article-data.js";

  let argTypes = {
    doi: {
      control: "text",
    },
    logoHeight: {
      control: "number",
    },
  };

  let { doi } = articleData;
</script>

<Meta
  title="Page furniture/Components/MenuPdfDownload"
  component={MenuSocialLinks}
  {argTypes}
/>

<Story name="Default" let:args args={{ doi }}>
  <MenuSocialLinks {...args} />
</Story>

<Story name="No flexbox gap" let:args args={{ doi }}>
  <div class="no-flexbox-gap">
    <MenuSocialLinks {...args} />
  </div>
</Story>
