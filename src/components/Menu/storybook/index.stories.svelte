<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Menu from '../index.svelte';
  const { Story } = defineMeta({
    title: 'components/Menu',
    component: Menu,
    argTypes: {
    articleData: { control: "object" },
  },
    parameters: {
    layout: "fullscreen",
  },
  });
</script>

<script>
import { Stack } from "creditdesign-svelte-components";
  import articleData from "../../../preview-content/article-data.js";
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

<Story name="Default" args={{ articleData: { menuLinks, pdfAvailable, doi }, }}>
  {#snippet children(args)}
    <Menu {...args} />
  {/snippet}
</Story>

<Story name="With PDF" args={{ articleData: { menuLinks, pdfAvailable: true, doi }, }}>
  {#snippet children(args)}
    <Menu {...args} />
  {/snippet}
</Story>

<Story name="With no menu" args={{ articleData: { menuLinks: [], pdfAvailable, doi }, }}>
  {#snippet children(args)}
    <Menu {...args} />
  {/snippet}
</Story>

<Story name="With PDF but no menu" args={{ articleData: { menuLinks: [], pdfAvailable: true, doi }, }}>
  {#snippet children(args)}
    <Menu {...args} />
  {/snippet}
</Story>

<Story name="With heading" args={{ articleData: { menuLinks, pdfAvailable, doi }, }}>
  {#snippet children(args)}
  <Menu {...args}>
    <svelte:fragment slot="heading">
      <Heading articleData={headingData} />
    </svelte:fragment>

    <main id="main-content" tabindex="-1">
      <a href="https://www.nature.come">Next focusable item...</a>
    </main>
  </Menu>
  {/snippet}
</Story>

<Story name="With video before heading" args={{ articleData: { menuLinks, pdfAvailable, doi }, }}>
  {#snippet children(args)}
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
  {/snippet}
</Story>