<script>
  import Section from "./index.svelte";
  import LayoutStack from "../LayoutStack/index.svelte";
  import LayoutGrid from "../LayoutGrid/index.svelte";
  import Card from "../Card/index.svelte";
  import CardBox from "../CardBox/index.svelte";
  import CardSideImage from "../CardSideImage/index.svelte";
  import CardSideImageBox from "../CardSideImageBox/index.svelte";
  import cardData from "../preview-content/card-data.js";
</script>

<Section headline={'Headline one'}>
  <LayoutStack stackSpace={'var(--s2)'}>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt
      iusto eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo
      corrupti numquam officia architecto modi! Labore natus error nisi earum?
    </p>
    <LayoutGrid gridSpace={'var(--s1)'}>
      <CardBox {cardData} />
      <Card {cardData} />
      <Card {cardData} />
      <CardBox {cardData} />
      <CardSideImageBox {cardData} />
      <CardSideImage {cardData} />
    </LayoutGrid>
  </LayoutStack>
</Section>
