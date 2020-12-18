<script>
  export let id = "";
  export let headerLevel = "h2";
  export let headlineFontSize = "big-2";
  export let cardData;

  let { href } = cardData;

  let useId = id.length ? id : null;
  let tabindex = id.length && !href.length ? "-1" : null;
</script>

<style>
  h1,
  h2,
  h3,
  h4,
  span {
    margin-top: 0;
    margin-left: 0;
  }
</style>

{#if headerLevel === 'h1'}
  <h1
    id="{useId}"
    {tabindex}
    class="{`font-size:${headlineFontSize} font-weight:bold`}"
  >
    <slot />
  </h1>
{:else if headerLevel === 'h2'}
  <h2
    id="{useId}"
    {tabindex}
    class="{`font-size:${headlineFontSize} font-weight:bold`}"
  >
    <slot />
  </h2>
{:else if headerLevel === 'h3'}
  <h3
    id="{useId}"
    {tabindex}
    class="{`font-size:${headlineFontSize} font-weight:bold`}"
  >
    <slot />
  </h3>
{:else if headerLevel === 'h4'}
  <h4
    id="{useId}"
    {tabindex}
    class="{`font-size:${headlineFontSize} font-weight:bold`}"
  >
    <slot />
  </h4>
{:else if headerLevel === 'none'}
  <span
    id="{useId}"
    {tabindex}
    class="{`font-size:${headlineFontSize} font-weight:bold`}"
  >
    <slot />
  </span>
{/if}
