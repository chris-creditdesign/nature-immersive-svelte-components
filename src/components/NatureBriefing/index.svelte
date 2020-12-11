<script>
  import { Box, Cluster } from "creditdesign-svelte-components";
  import LogoNatureBriefing from "../LogoNatureBriefing/index.svelte";
</script>

<style>
  /* Adds !important to override styles when used in Shorthand */
  a {
    padding: var(--s-1);
    color: var(--text-color) !important;
    text-decoration: none !important;
    background-color: #fff !important;
    border-bottom: none !important;
    outline: none !important;
  }

  a:hover,
  a:focus {
    background-color: var(--outline) !important;
    border-bottom: none !important;
    outline: none !important;
  }

  p {
    margin-top: var(--s-1) !important;
    margin-bottom: 0 !important;
  }
</style>

<div class="invert font-family:sans-serif">
  <Box boxSpace="var(--s1)">

    <LogoNatureBriefing height="3" />

    <p>
      Signup for the free daily
      <i>Nature Briefing.</i>
    </p>
    <p>
      An essential round-up of science news, opinion and analysis, free in your
      inbox every weekday.
    </p>
    <Cluster clusterJustifyContent="flex-end">
      <a
        href="https://www.nature.com/briefing/signup/"
        data-track="click"
        data-track-category="briefing"
        data-track-action="subscribe"
        data-track-label="subscribe button link"
        target="_blank"
        rel="noreferrer noopener"
      >
        Sign up for Nature Briefing
      </a>
    </Cluster>
  </Box>
</div>
