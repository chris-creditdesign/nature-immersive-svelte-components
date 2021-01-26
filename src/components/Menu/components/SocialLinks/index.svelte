<script>
  import LogoFacebook from "../../../LogoFacebook/index.svelte";
  import LogoTwitter from "../../../LogoTwitter/index.svelte";
  import LogoEmail from "../../../LogoEmail/index.svelte";

  export let articleData;

  import generateSocialURLs from "../../../utils/generate-social-urls.js";

  let { doi, articleURL, title, description } = articleData;

  let { facebookURL, twitterURL, emailURL } = generateSocialURLs(
    doi,
    articleURL,
    title,
    description
  );
</script>

<h2 class="visually-hidden">Sharing links</h2>
<ul class="menu-list">
  <li>
    <a class="link-with-svg" href="{twitterURL}">
      <LogoTwitter />
    </a>

  </li>

  <li>
    <a class="link-with-svg" href="{facebookURL}">
      <LogoFacebook />
    </a>
  </li>

  <li>
    <a class="link-with-svg" href="{emailURL}">
      <LogoEmail />
    </a>
  </li>
</ul>
