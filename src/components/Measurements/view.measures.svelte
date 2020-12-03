<script>
  import { Box, Stack } from "creditdesign-svelte-components";
</script>

<style>
  .test-content {
    height: 50px;
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

  .measure {
    width: var(--measure);
  }

  .measure-big {
    width: var(--measure-big);
  }

  .measure-small {
    width: var(--measure-small);
  }
</style>

<Box boxSpace="var(--s3)">
  <Stack>
    <div class="container">
      <div class="measure-small test-content"></div>
      <p>var(--measure-small)</p>
    </div>
    <div class="container">
      <div class="measure test-content"></div>
      <p>var(--measure)</p>
    </div>
    <div class="container">
      <div class="measure-big test-content"></div>
      <p>var(--measure-big)</p>
    </div>

  </Stack>
</Box>
