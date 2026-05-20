<script lang="ts">
  interface Props {
    text?: string;
    headerLevel?: string;
    headlineFontSize?: string;
    headlineFontWeight?: string;
  }

  let {
    text = "Headline headline",
    headerLevel = "h2",
    headlineFontSize = "big-2",
    headlineFontWeight = "bold"
  }: Props = $props();
</script>

{#if headerLevel === "h1"}
  <h1 class={`font-size:${headlineFontSize} font-weight:${headlineFontWeight}`}>
    {@html text}
  </h1>
{:else if headerLevel === "h2"}
  <h2 class={`font-size:${headlineFontSize} font-weight:${headlineFontWeight}`}>
    {@html text}
  </h2>
{:else if headerLevel === "h3"}
  <h3 class={`font-size:${headlineFontSize} font-weight:${headlineFontWeight}`}>
    {@html text}
  </h3>
{:else if headerLevel === "h4"}
  <h4 class={`font-size:${headlineFontSize} font-weight:${headlineFontWeight}`}>
    {@html text}
  </h4>
{:else if headerLevel === "none"}
  <p class={`font-size:${headlineFontSize} font-weight:${headlineFontWeight}`}>
    {@html text}
  </p>
{/if}
