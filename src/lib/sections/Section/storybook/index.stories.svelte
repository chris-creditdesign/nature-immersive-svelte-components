<script>
  import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
  import { Stack, Grid } from "creditdesign-svelte-components";
  import Section from "../index.svelte";
  import Card from "../../../cards/Card/index.svelte";
  import CardBox from "../../../cards/CardBox/index.svelte";
  import CardSideImage from "../../../cards/CardSideImage/index.svelte";
  import CardSideImageBox from "../../../cards/CardSideImageBox/index.svelte";
  import cardData from "../../../../preview-content/card-data.js";
  import {
    spaceOptions,
    measureOptions,
  } from "../../../../preview-content/options.js";

  let argTypes = {
    centerMeasure: {
      control: {
        type: "select",
        options: measureOptions,
      },
    },
    centerSpace: {
      control: {
        type: "select",
        options: spaceOptions,
      },
    },
    className: { control: "text" },
    headline: { control: "text" },
    stackSpace: { control: { type: "select", options: spaceOptions } },
  };

  let cardDataNoRelatedLinks = Object.assign({}, cardData, {
    relatedLinks: [],
  });
</script>

<Meta title="components/sections/Section" component={Section} {argTypes} />

<Template let:args>
  <Section {...args} />
</Template>

<Story
  name="Default"
  let:args
  args={{
    className: "example-class",
    centerSpace: "var(--s1)",
    stackSpace: "var(--s-1)",
    centerMeasure: "var(--measure)",
    headline: "Headline headline",
  }}
>
  <Section {...args}>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt
      iusto eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo
      corrupti numquam officia architecto modi! Labore natus error nisi earum?
    </p>
  </Section>
</Story>

<Story
  name="No headline"
  let:args
  args={{
    className: "example-class",
    className: "example-class",
    centerSpace: "var(--s1)",
    stackSpace: "var(--s-1)",
    centerMeasure: "var(--measure)",
    headline: "",
  }}
>
  <Section {...args}>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt
      iusto eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo
      corrupti numquam officia architecto modi! Labore natus error nisi earum?
    </p>
  </Section>
</Story>

<Story name="Multiple Sections">
  <Stack stackSpace={"var(--s3)"}>
    <Section headline={"Headline one"}>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt
        iusto eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo
        corrupti numquam officia architecto modi! Labore natus error nisi earum?
      </p>
    </Section>

    <Section headline={"Headline two"}>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt
        iusto eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo
        corrupti numquam officia architecto modi! Labore natus error nisi earum?
      </p>
    </Section>

    <Section headline={"Headline three"}>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt
        iusto eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo
        corrupti numquam officia architecto modi! Labore natus error nisi earum?
      </p>
    </Section>
  </Stack>
</Story>

<Story name="Multiple widths">
  <Stack stackSpace={"var(--s3)"}>
    <Section headline={"Headline one"}>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt
        iusto eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo
        corrupti numquam officia architecto modi! Labore natus error nisi earum?
      </p>
    </Section>

    <Section headline={"Headline two"} centerMeasure={"var(--measure-big)"}>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt
        iusto eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo
        corrupti numquam officia architecto modi! Labore natus error nisi earum?
      </p>
    </Section>

    <Section headline={"Headline three"} centerMeasure={"var(--measure-small)"}>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt
        iusto eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo
        corrupti numquam officia architecto modi! Labore natus error nisi earum?
      </p>
    </Section>
  </Stack>
</Story>

<Story
  name="With cards"
  let:args
  args={{
    className: "example-class",
    centerSpace: "var(--s1)",
    stackSpace: "var(--s-1)",
    centerMeasure: "var(--measure)",
    headline: "Headline headline",
  }}
>
  <Section {...args}>
    <Stack stackSpace={"var(--s2)"}>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt
        iusto eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo
        corrupti numquam officia architecto modi! Labore natus error nisi earum?
      </p>
      <Card cardData={cardDataNoRelatedLinks} />
      <CardBox {cardData} />
      <CardSideImage cardData={cardDataNoRelatedLinks} />
      <CardSideImageBox {cardData} />
    </Stack>
  </Section>
</Story>

<Story
  name="With grid"
  let:args
  args={{ className: "example-class", headline: "Headline headline" }}
>
  <Section {...args}>
    <Stack stackSpace="var(--s2)">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt
        iusto eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo
        corrupti numquam officia architecto modi! Labore natus error nisi earum?
      </p>
      <Grid
        gridColumnSpace="var(--s1)"
        gridRowSpace="var(--s1)"
        minWidth="20ch"
      >
        <CardBox cardData={cardDataNoRelatedLinks} />
        <Card {cardData} />
        <Card cardData={cardDataNoRelatedLinks} />
        <CardBox {cardData} />
        <CardSideImageBox cardData={cardDataNoRelatedLinks} />
        <CardSideImage {cardData} />
      </Grid>
    </Stack>
  </Section>
</Story>

<Story
  name="Multiple layouts"
  let:args
  args={{
    className: "example-class",
    centerSpace: "var(--s1)",
    stackSpace: "var(--s-1)",
    centerMeasure: "var(--measure)",
    headline: "Headline headline",
  }}
>
  <Section {...args}>
    <Stack stackSpace={"var(--s2)"}>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt
        iusto eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo
        corrupti numquam officia architecto modi! Labore natus error nisi earum?
      </p>
      <CardBox cardData={cardDataNoRelatedLinks} />
      <Card {cardData} />
      <Grid
        gridColumnSpace="var(--s-1)"
        gridRowSpace="var(--s1)"
        minWidth="20ch"
      >
        <Card {cardData} />
        <CardBox cardData={cardDataNoRelatedLinks} />
      </Grid>
      <CardSideImageBox cardData={cardDataNoRelatedLinks} />
      <CardSideImage {cardData} />
    </Stack>
  </Section>
</Story>
