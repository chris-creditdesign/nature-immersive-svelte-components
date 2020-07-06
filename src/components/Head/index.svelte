<script>
  export let articleData;

  let {
    articleURL,
    description,
    doi,
    immersiveURL,
    title,
    twitterHandle,
  } = articleData;

  $: imageURL = `${immersiveURL}${doi}/img/${doi}.jpg`;
</script>

<svelte:head>
  <meta charSet="UTF-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
  />

  <title>{title}</title>

  <meta name="description" content="{description}" />
  <meta property="og:url" content="{`${articleURL}${doi}`}" />

  <meta property="og:type" content="article" />
  <meta property="og:title" content="{title}" />
  <meta property="og:description" content="{description}" />
  <meta property="og:image" content="{imageURL}" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="{twitterHandle}" />
  <meta name="twitter:title" content="{title}" />
  <meta name="twitter:description" content="{description}" />
  <meta name="twitter:image" content="{imageURL}" />

</svelte:head>
