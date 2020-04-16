<script>
  import { Stack } from "creditdesign-svelte-components";
  import Section from "./index.svelte";
  import Card from "../Card/index.svelte";
  import CardBox from "../CardBox/index.svelte";
  import CardSideImage from "../CardSideImage/index.svelte";
  import CardSideImageBox from "../CardSideImageBox/index.svelte";
  import cardData from "../preview-content/card-data.js";
</script>

<Section headline={'Headline one'}>
  <Stack stackSpace={'var(--s2)'}>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt
      iusto eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo
      corrupti numquam officia architecto modi! Labore natus error nisi earum?
    </p>
    <Card {cardData} />
    <CardBox {cardData} />
    <CardSideImage {cardData} />
    <CardSideImageBox {cardData} />
  </Stack>
</Section>
