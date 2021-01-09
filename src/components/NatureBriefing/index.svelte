<script>
  import { Box } from "creditdesign-svelte-components";
  import LogoNatureBriefing from "../LogoNatureBriefing/index.svelte";
</script>

<style>
  /* Adds !important to override styles when used in Shorthand */
  p {
    margin-top: var(--s-1) !important;
    margin-bottom: 0 !important;
  }

  a {
    padding: var(--s-1);
    color: var(--text-color) !important;
    text-decoration: none !important;
    background-color: var(--text-color-invert) !important;
    border-bottom: none !important;
    outline: none !important;
  }

  a:hover,
  a:focus {
    background-color: var(--outline) !important;
    border-bottom: none !important;
    outline: none !important;
  }

  .sign-up-link-cotainer {
    display: flex;
    justify-content: flex-end;
    margin-top: var(--s-1) !important;
    margin-bottom: 0 !important;
  }
</style>

<div data-theme="invert">
  <Box boxSpace="var(--s1)">

    <LogoNatureBriefing height="2.5" />

    <p class="font-family:sans-serif">
      Signup for the free daily
      <i>Nature Briefing.</i>
    </p>
    <p class="font-family:sans-serif">
      An essential round-up of science news, opinion and analysis, free in your
      inbox every weekday.
    </p>
    <div class="sign-up-link-cotainer">
      <a
        class="font-family:sans-serif"
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
    </div>

  </Box>
</div>
