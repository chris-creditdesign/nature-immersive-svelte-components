<script lang="ts">
  import { Cluster } from "creditdesign-svelte-components";
  import FacebookIcon from "../../../icons/FacebookIcon/index.svelte";
  import TwitterIcon from "../../../icons/TwitterIcon/index.svelte";
  import EmailIcon from "../../../icons/EmailIcon/index.svelte";


  import generateSocialURLs from "../../../utils/generate-social-urls.js";
  interface Props {
    articleData: any;
    logoHeight?: number;
  }

  let { articleData, logoHeight = 1.6 }: Props = $props();

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
<Cluster clusterSpace="var(--s-3)" list={true}>
  <li>
    <a href={twitterURL}>
      <TwitterIcon height={logoHeight} />
    </a>
  </li>

  <li>
    <a href={facebookURL}>
      <FacebookIcon height={logoHeight} />
    </a>
  </li>

  <li>
    <a href={emailURL}>
      <EmailIcon height={logoHeight} />
    </a>
  </li>
</Cluster>
