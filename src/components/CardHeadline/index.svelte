<script>
  export let cardData;
  export let headerLevel = "h2";
  export let headlineFontSize = "big-2";
  export let id = "";

  let { href } = cardData;

  let useId = id.length && !href.length ? id : null;
  let tabindex = id.length && !href.length ? "-1" : null;
</script>

{#if headerLevel === 'h1'}
  <h1
    id="{useId}"
    {tabindex}
    class="{`card__headline font-size:${headlineFontSize} font-weight:bold`}"
  >
    <slot />
  </h1>
{:else if headerLevel === 'h2'}
  <h2
    id="{useId}"
    {tabindex}
    class="{`card__headline font-size:${headlineFontSize} font-weight:bold`}"
  >
    <slot />
  </h2>
{:else if headerLevel === 'h3'}
  <h3
    id="{useId}"
    {tabindex}
    class="{`card__headline font-size:${headlineFontSize} font-weight:bold`}"
  >
    <slot />
  </h3>
{:else if headerLevel === 'h4'}
  <h4
    id="{useId}"
    {tabindex}
    class="{`card__headline font-size:${headlineFontSize} font-weight:bold`}"
  >
    <slot />
  </h4>
{:else if headerLevel === 'none'}
  <span
    id="{useId}"
    {tabindex}
    class="{`card__headline font-size:${headlineFontSize} font-weight:bold`}"
  >
    <slot />
  </span>
{/if}
