<script>
  import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
  import { Stack } from "creditdesign-svelte-components";
  import articleData from "../../../preview-content/article-data.js";

  import Menu from "../index.svelte";
  import Heading from "../../Heading/index.svelte";
  import SimpleVideo from "../../videos/SimpleVideo/index.svelte";

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
  title="components/Menu"
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
  name="With no menu"
  let:args
  args={{
    articleData: { menuLinks: [], pdfAvailable, doi },
  }}
/>

<Story
  name="With PDF but no menu"
  let:args
  args={{
    articleData: { menuLinks: [], pdfAvailable: true, doi },
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
    <svelte:fragment slot="heading">
      <Heading articleData={headingData} />
    </svelte:fragment>

    <main id="main-content" tabindex="-1">
      <a href="https://www.nature.come">Next focusable item...</a>
    </main>
  </Menu>
</Story>

<Story
  name="With video before heading"
  let:args
  args={{
    articleData: { menuLinks, pdfAvailable, doi },
  }}
>
  <Menu {...args}>
    <svelte:fragment slot="heading">
      <Stack>
        <SimpleVideo
          srcURL="video/video-small.jpg"
          captionSpace="var(--s-1)"
          caption="Video credit:"
          frameRatioHeight={9}
          frameRatioWidth={16}
        />
        <Heading articleData={headingData} />
      </Stack>
    </svelte:fragment>

    <main id="main-content" tabindex="-1">
      <a href="https://www.nature.come">Next focusable item...</a>
    </main>
  </Menu>
</Story>
