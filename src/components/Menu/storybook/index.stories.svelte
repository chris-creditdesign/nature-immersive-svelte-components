<script>
  import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
  import articleData from "../../../preview-content/article-data.js";

  import Menu from "../index.svelte";
  import Heading from "../../Heading/index.svelte";

  let { menuLinks, pdfAvailable, doi } = articleData;

  let headingData = {
    author: "Author Name",
    headline: "Headline headline headline",
    photographer: "Photographer Name",
    publishedAt: 1593734400,
    publishedAtString: "2020-07-03",
    stand: "Standfirst standfirst standfirst.",
  };
</script>

<Meta
  title="Page furniture/Menu"
  component={Menu}
  argTypes={{
    articleData: { control: "object" },
  }}
  parameters={{
    layout: "fullscreen",
  }}
/>

<Template let:args>
  <Menu {...args} />
</Template>

<Story
  name="Default"
  let:args
  args={{
    articleData: { menuLinks, pdfAvailable, doi },
  }}
/>

<Story
  name="With PDF"
  let:args
  args={{
    articleData: { menuLinks, pdfAvailable: true, doi },
  }}
/>

<Story
  name="With heading"
  let:args
  args={{
    articleData: { menuLinks, pdfAvailable, doi },
  }}
>
  <Menu {...args}>
    <div slot="heading">
      <Heading articleData={headingData} />
    </div>

    <div class="container">
      <a href="https://www.nature.come">Next focusable item...</a>
    </div>
  </Menu>
</Story>
