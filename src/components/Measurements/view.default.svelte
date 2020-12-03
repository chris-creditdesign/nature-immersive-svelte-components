<script>
  import { Box, Stack } from "creditdesign-svelte-components";
</script>

<style>
  .test-content {
    margin-right: var(--s-1);
    background-color: #000;
  }

  .container {
    display: flex;
    align-items: center;
  }

  p {
    margin: 0;
    font-family: var(--sans-serif-font);
    font-size: small;
  }

  .s-4 {
    width: var(--s-4);
    height: var(--s-4);
  }

  .s-3 {
    width: var(--s-3);
    height: var(--s-3);
  }

  .s-2 {
    width: var(--s-2);
    height: var(--s-2);
  }

  .s-1 {
    width: var(--s-1);
    height: var(--s-1);
  }

  .s0 {
    width: var(--s0);
    height: var(--s0);
  }

  .s1 {
    width: var(--s1);
    height: var(--s1);
  }

  .s2 {
    width: var(--s2);
    height: var(--s2);
  }

  .s3 {
    width: var(--s3);
    height: var(--s3);
  }

  .s4 {
    width: var(--s4);
    height: var(--s4);
  }

  .s5 {
    width: var(--s5);
    height: var(--s5);
  }

  .s6 {
    width: var(--s6);
    height: var(--s6);
  }

  .s7 {
    width: var(--s7);
    height: var(--s7);
  }

  .s8 {
    width: var(--s8);
    height: var(--s8);
  }
</style>

<Box boxSpace="var(--s3)">
  <Stack>
    <div class="container">
      <span class="s-4 test-content"></span>
      <p>var(--s-4)</p>
    </div>
    <div class="container">
      <span class="s-3 test-content"></span>
      <p>var(--s-3)</p>
    </div>
    <div class="container">
      <span class="s-2 test-content"></span>
      <p>var(--s-2)</p>
    </div>
    <div class="container">
      <span class="s-1 test-content"></span>
      <p>var(--s-1)</p>
    </div>
    <div class="container">
      <span class="s0 test-content"></span>
      <p>var(--s0)</p>
    </div>
    <div class="container">
      <span class="s1 test-content"></span>
      <p>var(--s1)</p>
    </div>
    <div class="container">
      <span class="s2 test-content"></span>
      <p>var(--s2)</p>
    </div>
    <div class="container">
      <span class="s3 test-content"></span>
      <p>var(--s3)</p>
    </div>
    <div class="container">
      <span class="s4 test-content"></span>
      <p>var(--s4)</p>
    </div>
    <div class="container">
      <span class="s5 test-content"></span>
      <p>var(--s5)</p>
    </div>
    <div class="container">
      <span class="s6 test-content"></span>
      <p>var(--s6)</p>
    </div>
    <div class="container">
      <span class="s7 test-content"></span>
      <p>var(--s7)</p>
    </div>
    <div class="container">
      <span class="s8 test-content"></span>
      <p>var(--s8)</p>
    </div>

  </Stack>
</Box>
