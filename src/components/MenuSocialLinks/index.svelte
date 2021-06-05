<script>
  import { ClusterList } from "creditdesign-svelte-components";
  import LogoFacebook from "../LogoFacebook/index.svelte";
  import LogoTwitter from "../LogoTwitter/index.svelte";
  import LogoEmail from "../LogoEmail/index.svelte";

  export let articleData;
  export let logoHeight = 1.6;

  import generateSocialURLs from "../utils/generate-social-urls.js";

  let { doi, articleURL, title, description } = articleData;

  let { facebookURL, twitterURL, emailURL } = generateSocialURLs(
    doi,
    articleURL,
    title,
    description
  );
</script>

<style>
  a {
    display: block;
  }
</style>

<h2 class="visually-hidden">Sharing links</h2>
<ClusterList clusterSpace="var(--s-2)">
  <li>
    <a href={twitterURL}>
      <LogoTwitter height={logoHeight} />
    </a>
  </li>

  <li>
    <a href={facebookURL}>
      <LogoFacebook height={logoHeight} />
    </a>
  </li>

  <li>
    <a href={emailURL}>
      <LogoEmail height={logoHeight} />
    </a>
  </li>
</ClusterList>
