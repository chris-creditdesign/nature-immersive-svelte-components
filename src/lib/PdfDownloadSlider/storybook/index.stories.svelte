<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import { action } from "@storybook/addon-actions";
  import { Stack, Box, Sidebar } from "creditdesign-svelte-components";
  import SwitchButton from "../../buttons/SwitchButton/index.svelte";
  import articleData from "../../../preview-content/article-data.js";
  import PdfDownloadSlider from "../index.svelte";

  let { doi } = articleData;

  let checked = false;

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

<Meta
  title="Components/PdfDownloadSlider"
  component={PdfDownloadSlider}
  argTypes={{
    articleData: { control: "object" },
    cardData: { control: "object" },
    wideEnough: { control: "boolean" },
  }}
  parameters={{
    layout: "fullscreen",
    controls: { hideNoControlsWarning: true },
  }}
/>

<Story
  name="Default"
  let:args
  args={{
    articleData: { doi },
    cardData,
  }}
>
  <Stack>
    <a href="https://www.nature.com">Previous focusable item</a>
    <div class="grid">
      <Stack>
        {#each Array(5) as i}
          <div class="item" />
        {/each}
      </Stack>
      <div class="pdf-slider">
        <PdfDownloadSlider {...args} />
      </div>
    </div>
    <a href="https://www.nature.com">Next focusable item</a>
    {#each Array(5) as i}
      <div class="item" />
    {/each}
  </Stack>
</Story>

<Story
  name="With slot above"
  let:args
  args={{
    articleData: { doi },
    cardData,
  }}
>
  <Stack>
    <a href="https://www.nature.com">Previous focusable item</a>
    <div class="grid">
      <Stack>
        {#each Array(5) as i}
          <div class="item" />
        {/each}
      </Stack>
      <div class="pdf-slider">
        <PdfDownloadSlider {...args}>
          <div slot="above">
            <Box boxSpace="var(--s-2)">
              <SwitchButton
                message="Animation:"
                clusterJustifyContent="flex-end"
                {checked}
                on:click={handleClick}
              />
            </Box>
          </div>
        </PdfDownloadSlider>
      </div>
    </div>
    <a href="https://www.nature.com">Next focusable item</a>
    {#each Array(5) as i}
      <div class="item" />
    {/each}
  </Stack>
</Story>

<Story
  name="With slots above and below"
  let:args
  args={{
    articleData: { doi },
    cardData,
  }}
>
  <Stack>
    <a href="https://www.nature.com">Previous focusable item</a>
    <div class="grid">
      <Stack>
        {#each Array(5) as i}
          <div class="item" />
        {/each}
      </Stack>
      <div class="pdf-slider">
        <PdfDownloadSlider {...args}>
          <div slot="above">
            <Box boxSpace="var(--s-2)">
              <SwitchButton
                message="Animation:"
                clusterJustifyContent="flex-end"
                {checked}
                on:click={handleClick}
              />
            </Box>
          </div>
          <p slot="below" class="font-family:sans-serif ">
            This is some option content below
          </p>
        </PdfDownloadSlider>
      </div>
    </div>
    <a href="https://www.nature.com">Next focusable item</a>
    {#each Array(5) as i}
      <div class="item" />
    {/each}
  </Stack>
</Story>

<Story
  name="Sidebar test"
  let:args
  args={{
    articleData: { doi },
    cardData,
  }}
>
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
            <div class="item" />
          {/each}
        </Stack>
      </div>
      <div slot="sidebar">
        <div>
          <PdfDownloadSlider {...args}>
            <p slot="below" class="font-family:sans-serif ">
              This is some option content below
            </p>
          </PdfDownloadSlider>
        </div>
      </div>
    </Sidebar>
    <a href="https://www.nature.com">Next focusable item</a>
    {#each Array(5) as i}
      <div class="item" />
    {/each}
  </Stack>
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
