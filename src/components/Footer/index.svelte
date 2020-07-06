<script>
  import { Box, Stack, ClusterList } from "creditdesign-svelte-components";
  import LogoSpringerNature from "../LogoSpringerNature/index.svelte";
</script>

<style>
  .footer {
    margin-top: var(--s4);
    font-family: var(--sans-serif-font);
    font-size: var(--font-size-small-1);
  }

  a {
    color: var(--text-color-invert);
  }

  /* Make sure the SVG logo is aligned left */
  :global(.footer-logo-container) {
    align-items: flex-start;
  }
</style>

<footer class="footer invert" role="contentinfo">
  <Box>
    <Stack className="footer-logo-container" stackSpace="var(--s-1)">
      <LogoSpringerNature height="{1.5}" />

      <ClusterList>
        <li>
          <a href="https://www.nature.com/info/privacy.html">Privacy Policy</a>
        </li>
        <li>
          <a href="https://www.nature.com/info/cookies.html">Use of cookies</a>
        </li>
        <li>
          <a href="https://www.nature.com/info/legal_notice.html">
            Legal notice
          </a>
        </li>
        <li>
          <a href="https://www.nature.com/info/tandc.html">
            Terms & Conditions
          </a>
        </li>
        <li>
          <a href="https://www.nature.com/info/accessibility_statement.html">
            Accessibility statement
          </a>
        </li>
      </ClusterList>

      <small>© 2020 Springer Nature Limited. All rights reserved.</small>
    </Stack>
  </Box>

</footer>
