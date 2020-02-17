<script>
  import Template from "./index.svelte";
  import Style from "../Style/index.svelte";
  import Light from "../Style/light.svelte";
  import Dark from "../Style/dark.svelte";

  let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  export let className;
</script>

<Style />

{#if dark}
  <Dark />
{:else}
  <Light />
{/if}

<Template {className}>
  <p class="test-content">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt iusto
    eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo corrupti
    numquam officia architecto modi! Labore natus error nisi earum?
  </p>
</Template>
