<script>
  import { Box, Stack, ClusterList } from "creditdesign-svelte-components";
  import LogoSpringerNature from "../LogoSpringerNature/index.svelte";
</script>

<style>
  .footer {
    align-items: flex-start;
  }

  a {
    color: var(--text-color-invert);
  }
</style>

<footer
  class="footer font-size:small font-family:sans-serif"
  data-theme="invert"
>
  <Box>
    <Stack stackSpace="var(--s-1)">
      <div>
        <LogoSpringerNature height={1.5} />
      </div>

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

      <small>© 2021 Springer Nature Limited. All rights reserved.</small>
    </Stack>
  </Box>
</footer>
