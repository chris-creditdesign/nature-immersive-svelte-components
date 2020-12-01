<script>
  import { ClusterList } from "creditdesign-svelte-components";
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

<ClusterList clusterSpace="0">
  <li>
    <a
      href="{facebookURL}"
      data-track="click"
      data-event-category="menu social"
      data-event-action="click"
      data-event-label="facebook"
    >
      <LogoFacebook height="{1.6}" />
    </a>
  </li>
  <li>
    <a
      href="{twitterURL}"
      data-track="click"
      data-event-category="menu social"
      data-event-action="click"
      data-event-label="twitter"
    >
      <LogoTwitter height="{1.6}" />
    </a>
  </li>
  <li>
    <a
      href="{emailURL}"
      data-track="click"
      data-event-category="menu social"
      data-event-action="click"
      data-event-label="email"
    >
      <LogoEmail height="{1.6}" />
    </a>
  </li>
</ClusterList>
