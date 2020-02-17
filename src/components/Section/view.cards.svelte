<script>
  import Section from "./index.svelte";
  import LayoutStack from "../LayoutStack/index.svelte";
  import Card from "../Card/index.svelte";
  import CardBox from "../CardBox/index.svelte";
  import CardSideImage from "../CardSideImage/index.svelte";
  import CardSideImageBox from "../CardSideImageBox/index.svelte";
  import Style from "../Style/index.svelte";
  import Light from "../Style/light.svelte";
  import Dark from "../Style/dark.svelte";
  import cardData from "../preview-content/card-data.js";

  let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
</script>

<Style />

{#if dark}
  <Dark />
{:else}
  <Light />
{/if}

<Section headline={'Headline one'}>
  <LayoutStack stackSpace={'var(--s2)'}>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt
      iusto eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo
      corrupti numquam officia architecto modi! Labore natus error nisi earum?
    </p>
    <Card {cardData} />
    <CardBox {cardData} />
    <Card {cardData} />
    <CardBox {cardData} />
    <CardSideImage {cardData} />
    <CardSideImageBox {cardData} />
  </LayoutStack>
</Section>
