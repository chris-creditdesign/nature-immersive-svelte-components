<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import PdfDownloadSlider from '../index.svelte';
  const { Story } = defineMeta({
    title: 'Components/PdfDownloadSlider',
    component: PdfDownloadSlider,
    argTypes: {
    articleData: { control: "object" },
    cardData: { control: "object" },
    wideEnough: { control: "boolean" },
  },
    parameters: {
    layout: "fullscreen",
    controls: { hideNoControlsWarning: true },
  },
  });
</script>

<script>
import { action } from "@storybook/addon-actions";
  import { Stack, Box, Sidebar } from "creditdesign-svelte-components";
  import SwitchButton from "../../buttons/SwitchButton/index.svelte";
  import articleData from "../../../preview-content/article-data.js";
  let { doi } = articleData;
  let checked = $state(false);
  let handleClick = () => {
    checked = !checked;
    action("click")();
  };
  let cardData = {
    headline: "Headline headline headline",
    srcURL: "img/image-small.jpg",
    text: "Download a pdf of headline headline headline.",
  };
</script>

<style>
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: 1px dashed green;
  }

  .pdf-slider {
    justify-self: end;
  }

  .item {
    width: var(--measure);
    height: var(--s6);
    background-color: lightblue;
  }
</style>

<Story name="Default" args={{ articleData: { doi }, cardData, }}>
  {#snippet children(args)}
    <Stack>
      <a href="https://www.nature.com">Previous focusable item</a>
      <div class="grid">
        <Stack>
          {#each Array(5) as i}
            <div class="item"></div>
          {/each}
        </Stack>
        <div class="pdf-slider">
          <PdfDownloadSlider {...args} />
        </div>
      </div>
      <a href="https://www.nature.com">Next focusable item</a>
      {#each Array(5) as i}
        <div class="item"></div>
      {/each}
    </Stack>
  {/snippet}
</Story>

<Story name="With slot above" args={{ articleData: { doi }, cardData, }}>
  {#snippet children(args)}
    <Stack>
      <a href="https://www.nature.com">Previous focusable item</a>
      <div class="grid">
        <Stack>
          {#each Array(5) as i}
            <div class="item"></div>
          {/each}
        </Stack>
        <div class="pdf-slider">
          <PdfDownloadSlider {...args}>
            {#snippet above()}
                    <div >
                <Box boxSpace="var(--s-2)">
                  <SwitchButton
                    message="Animation:"
                    clusterJustifyContent="flex-end"
                    {checked}
                    on:click={handleClick}
                  />
                </Box>
              </div>
                  {/snippet}
          </PdfDownloadSlider>
        </div>
      </div>
      <a href="https://www.nature.com">Next focusable item</a>
      {#each Array(5) as i}
        <div class="item"></div>
      {/each}
    </Stack>
  {/snippet}
</Story>

<Story name="With slots above and below" args={{ articleData: { doi }, cardData, }}>
  {#snippet children(args)}
    <Stack>
      <a href="https://www.nature.com">Previous focusable item</a>
      <div class="grid">
        <Stack>
          {#each Array(5) as i}
            <div class="item"></div>
          {/each}
        </Stack>
        <div class="pdf-slider">
          <PdfDownloadSlider {...args}>
            {#snippet above()}
                    <div >
                <Box boxSpace="var(--s-2)">
                  <SwitchButton
                    message="Animation:"
                    clusterJustifyContent="flex-end"
                    {checked}
                    on:click={handleClick}
                  />
                </Box>
              </div>
                  {/snippet}
            {#snippet below()}
                    <p  class="font-family:sans-serif ">
                This is some option content below
              </p>
                  {/snippet}
          </PdfDownloadSlider>
        </div>
      </div>
      <a href="https://www.nature.com">Next focusable item</a>
      {#each Array(5) as i}
        <div class="item"></div>
      {/each}
    </Stack>
  {/snippet}
</Story>

<Story name="Sidebar test" args={{ articleData: { doi }, cardData, }}>
  {#snippet children(args)}
    <Stack>
      <a href="https://www.nature.com">Previous focusable item</a>
      <Sidebar
        sidebarOnLeft={false}
        sidebarContentMinWidth="750px"
        sideBarWidth="250px"
      >
  <div slot="main-content">
          <Stack>
            {#each Array(5) as i}
              <div class="item"></div>
            {/each}
          </Stack>
        </div>
        {#snippet sidebar()}
            <div >
            <div>
              <PdfDownloadSlider {...args}>
                {#snippet below()}
                        <p  class="font-family:sans-serif ">
                    This is some option content below
                  </p>
                      {/snippet}
              </PdfDownloadSlider>
            </div>
          </div>
          {/snippet}
      </Sidebar>
      <a href="https://www.nature.com">Next focusable item</a>
      {#each Array(5) as i}
        <div class="item"></div>
      {/each}
    </Stack>
  {/snippet}
</Story>

<!-- <Sidebar
  sidebarContentMinWidth="{sidebarContentMinWidth}"
  sidebarOnLeft="{sidebarOnLeft}"
  sidebarSpace="{sidebarSpace}"
  sidebarWidth="{sidebarWidth}"
>
  <div slot="sidebar"><span class="sidebar">Sidebar</span></div>
  <div slot="main-content"><span>Main content</span></div>
</Sidebar> -->