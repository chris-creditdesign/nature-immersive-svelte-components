<script>
  import { Stack } from "creditdesign-svelte-components";

  export let id = "";
  export let headerLevel = "h2";
  export let cardData;
  export let stackSpace = "var(--s-4)";

  let { eyebrow, subHead, headline, href } = cardData;
</script>

<style>
  /* Makes sure focus ring shows up over header link */
  header a {
    display: block;
  }

  header a > * {
    margin: 0;
  }
</style>

<header>
  <Stack {stackSpace}>
    {#if eyebrow}
      <p class="eyebrow font-size:small font-family:sans-serif">
        {@html eyebrow}
      </p>
    {/if}
    <!-- if there is a link -->
    {#if href}
      <a
        {href}
        id="{id.length ? id : null}"
        data-track="click"
        data-event-category="body links"
        data-event-action="click"
        data-event-label="{headline}"
      >
        {#if headerLevel === 'h1'}
          <h1 class="headline">
            {@html headline}
          </h1>
        {:else if headerLevel === 'h2'}
          <h2 class="headline">
            {@html headline}
          </h2>
        {:else if headerLevel === 'h3'}
          <h3 class="headline">
            {@html headline}
          </h3>
        {:else if headerLevel === 'h4'}
          <h4 class="headline">
            {@html headline}
          </h4>
        {:else if headerLevel === 'none'}
          {@html headline}
        {/if}
      </a>
    {:else if headerLevel === 'h1'}
      <h1
        id="{id.length ? id : null}"
        tabindex="{id.length ? '-1' : null}"
        class="headline"
      >
        {@html headline}
      </h1>
    {:else if headerLevel === 'h2'}
      <h2
        id="{id.length ? id : null}"
        tabindex="{id.length ? '-1' : null}"
        class="headline"
      >
        {@html headline}
      </h2>
    {:else if headerLevel === 'h3'}
      <h3
        id="{id.length ? id : null}"
        tabindex="{id.length ? '-1' : null}"
        class="headline"
      >
        {@html headline}
      </h3>
    {:else if headerLevel === 'h4'}
      <h4
        id="{id.length ? id : null}"
        tabindex="{id.length ? '-1' : null}"
        class="headline"
      >
        {@html headline}
      </h4>
    {/if}
    {#if subHead}
      <p class="author font-size:small font-family:sans-serif">
        {@html subHead}
      </p>
    {/if}
  </Stack>
</header>
