<script>
  import { Stack } from "creditdesign-svelte-components";

  export let id = null;
  export let cardData;

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
  <Stack stackSpace="var(--s-6)">
    {#if eyebrow}
      <p class="eyebrow font-size:small font-family:sans-serif">
        {@html eyebrow}
      </p>
    {/if}
    {#if href}
      <a
        {href}
        {id}
        data-track="click"
        data-event-category="body links"
        data-event-action="click"
        data-event-label="{headline}"
      >
        <h3 class="headline">
          {@html headline}
        </h3>
      </a>
    {:else}
      <h3 {id} tabindex="{id ? '-1' : null}" class="headline">
        {@html headline}
      </h3>
    {/if}
    {#if subHead}
      <p class="author font-size:small font-family:sans-serif">
        {@html subHead}
      </p>
    {/if}
  </Stack>
</header>
