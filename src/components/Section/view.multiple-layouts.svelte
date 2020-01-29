<script>
  import Section from "./index.svelte";
  import LayoutStack from "../LayoutStack/index.svelte";
  import LayoutGrid from "../LayoutGrid/index.svelte";
  import Card from "../Card/index.svelte";
  import CardBox from "../CardBox/index.svelte";
  import CardSideImage from "../CardSideImage/index.svelte";
  import CardSideImageBox from "../CardSideImageBox/index.svelte";

  let altText = "This is the alt text";
  let caption = "This is the caption";
  let srcURL = "img/image.jpg";
  let captionSpace = "";
  let footnote = "Footnote";
  let headline = "Headline";
  let href = "https =//www.nature.com";
  let text =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum. <a href="https://www.nature.com/news">Click here to read more</a>';
</script>

<Section headline={'Headline one'}>
  <LayoutStack stackSpace={'var(--s2)'}>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt
      iusto eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo
      corrupti numquam officia architecto modi! Labore natus error nisi earum?
    </p>
    <CardBox {footnote} {headline} {href} {text} />
    <Card {footnote} {headline} {href} {text} />
    <LayoutGrid gridSpace={'var(--s2)'}>
      <Card {altText} {caption} {footnote} {headline} {href} {srcURL} {text} />
      <CardBox
        {altText}
        {caption}
        {footnote}
        {headline}
        {href}
        {srcURL}
        {text} />
    </LayoutGrid>
    <CardSideImageBox
      {altText}
      {caption}
      {footnote}
      {headline}
      {href}
      {srcURL}
      {text} />
    <CardSideImage
      {altText}
      {caption}
      {footnote}
      {headline}
      {href}
      {srcURL}
      {text} />
  </LayoutStack>
</Section>
