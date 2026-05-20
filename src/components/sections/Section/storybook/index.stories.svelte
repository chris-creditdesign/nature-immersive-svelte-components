<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Section from '../index.svelte';
  const { Story } = defineMeta({
    title: 'components/sections/Section',
    component: Section,
    argTypes: {
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
  },
  });
</script>

<script>
import { Stack, Grid } from "creditdesign-svelte-components";
  import Card from "../../../cards/Card/index.svelte";
  import CardBox from "../../../cards/CardBox/index.svelte";
  import CardSideImage from "../../../cards/CardSideImage/index.svelte";
  import CardSideImageBox from "../../../cards/CardSideImageBox/index.svelte";
  import cardData from "../../../../preview-content/card-data.js";
  import {
    spaceOptions,
    measureOptions,
  } from "../../../../preview-content/options.js";
  let cardDataNoRelatedLinks = Object.assign({}, cardData, {
    relatedLinks: [],
  });
</script>

<Story name="Default" args={{ className: "example-class", centerSpace: "var(--s1)", stackSpace: "var(--s-1)", centerMeasure: "var(--measure)", headline: "Headline headline", }}>
  {#snippet children(args)}
    <Section {...args}>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt
        iusto eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo
        corrupti numquam officia architecto modi! Labore natus error nisi earum?
      </p>
    </Section>
  {/snippet}
</Story>

<Story name="No headline" args={{ className: "example-class", className: "example-class", centerSpace: "var(--s1)", stackSpace: "var(--s-1)", centerMeasure: "var(--measure)", headline: "", }}>
  {#snippet children(args)}
    <Section {...args}>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt
        iusto eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo
        corrupti numquam officia architecto modi! Labore natus error nisi earum?
      </p>
    </Section>
  {/snippet}
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

<Story name="With cards" args={{ className: "example-class", centerSpace: "var(--s1)", stackSpace: "var(--s-1)", centerMeasure: "var(--measure)", headline: "Headline headline", }}>
  {#snippet children(args)}
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
  {/snippet}
</Story>

<Story name="With grid" args={{ className: "example-class", headline: "Headline headline" }}>
  {#snippet children(args)}
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
  {/snippet}
</Story>

<Story name="Multiple layouts" args={{ className: "example-class", centerSpace: "var(--s1)", stackSpace: "var(--s-1)", centerMeasure: "var(--measure)", headline: "Headline headline", }}>
  {#snippet children(args)}
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
  {/snippet}
</Story>