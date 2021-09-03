<script>
  import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
  import SeriesArticleNav from "../index.svelte";
  import articleData from "../../../../preview-content/article-data.js";
  import {
    headerLevelOptions,
    fontSizeOptions,
    fontWeightOptions,
    themeOptions,
    spaceOptions,
  } from "../../../../preview-content/options.js";

  let articles = [
    {
      title:
        "<strong>Article 1:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.",
      url: "#",
      doi: "123459789",
      published: true,
    },
    {
      title:
        "<strong>Article 2:</strong> Hempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
      url: "#",
      doi: "doi-2",
      published: true,
    },
    {
      title:
        "<strong>Article 3:</strong> Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      url: "#",
      doi: "doi-3",
      published: true,
    },
    {
      title:
        "<strong>Coming soon:</strong> Article 4 Consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non",
      url: "#",
      doi: "doi-4",
      published: false,
    },
    {
      title:
        "<strong>Coming soon:</strong> Article 5 Hempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
      url: "#",
      doi: "doi-5",
      published: false,
    },
  ];
  let headline = "Headline headline headline";
  let stand =
    "Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. Hempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.";

  let argTypes = {
    articleData: {
      control: "object",
    },
    articles: {
      control: "object",
    },
    className: {
      control: "text",
    },
    expandedMessage: {
      control: "text",
    },
    headerLevel: { type: "select", options: headerLevelOptions },
    headline: {
      control: "text",
    },
    headlineFontSize: { type: "select", options: fontSizeOptions },
    headlineFontWeight: { type: "select", options: fontWeightOptions },
    message: {
      control: "text",
    },
    stand: {
      control: "text",
    },
    theme: { control: { type: "select", options: themeOptions } },
    stackSpace: { control: { type: "select", options: spaceOptions } },
    headerStackSpace: { control: { type: "select", options: spaceOptions } },
    boxSpace: { control: { type: "select", options: spaceOptions } },
  };
</script>

<Meta
  title="components/interactive/SeriesArticleNav"
  component={SeriesArticleNav}
  {argTypes}
/>

<Template let:args>
  <SeriesArticleNav {...args} />
</Template>

<Story
  name="Default"
  let:args
  args={{
    articleData,
    className: "example-class",
    headline,
    stand,
    articles,
    stackSpace: "var(--s0)",
    headerStackSpace: "var(--s-3)",
    boxSpace: "var(--s-1)",
  }}
  parameters={{
    layout: "fullscreen",
  }}
/>
