<script>
  import { Box, Stack, Cluster } from "creditdesign-svelte-components";
  import LogoNatureBriefing from "../LogoNatureBriefing/index.svelte";
</script>

<style>
  a {
    padding: var(--s-1);
    color: var(--text-color);
    background-color: #fff;
    outline: none;
  }

  a:hover,
  a:focus {
    background-color: var(--outline);
  }
</style>

<div class="invert">
  <Box>
    <Stack>
      <div>
        <LogoNatureBriefing height="3" />
      </div>
      <p>
        Signup for the free daily
        <i>Nature Briefing.</i>
      </p>
      <p>
        An essential round-up of science news, opinion and analysis, free in
        your inbox every weekday.
      </p>
      <Cluster clusterJustifyContent="flex-end">
        <a
          class="text-decoration:none font-family:sans-serif"
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
    </Stack>
  </Box>
</div>
