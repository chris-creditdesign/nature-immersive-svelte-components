<script>
  import { Box, Stack, Cluster } from "creditdesign-svelte-components";
  import SpringerNatureLogo from "../logos/SpringerNatureLogo/index.svelte";
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
        <SpringerNatureLogo height={1.5} />
      </div>

      <div>
        <Cluster list={true}>
          <li>
            <a href="https://www.nature.com/info/privacy.html">Privacy Policy</a
            >
          </li>
          <li>
            <a href="https://www.nature.com/info/cookies.html">Use of cookies</a
            >
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
        </Cluster>
      </div>

      <small>© 2022 Springer Nature Limited. All rights reserved.</small>
    </Stack>
  </Box>
</footer>
