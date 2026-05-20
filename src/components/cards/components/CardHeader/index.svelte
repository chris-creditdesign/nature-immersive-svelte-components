<script lang="ts">
  import { Stack } from "creditdesign-svelte-components";
  import CardHeadline from "../CardHeadline/index.svelte";

  

  
  interface Props {
    /**
   * - eyebrow
   * - subHead
   * - headline
   * - href
   */
    cardData: any;
    /**
   * Space between eyebrow, headline and sub-head
   */
    cardHeaderStackSpace?: string;
    headerLevel?: string;
    headlineFontSize?: string;
    id?: string;
  }

  let {
    cardData,
    cardHeaderStackSpace = "var(--s-4)",
    headerLevel = "h2",
    headlineFontSize = "big-2",
    id = ""
  }: Props = $props();

  let { eyebrow, subHead, headline, href } = cardData;
</script>

<style>
  a {
    text-decoration: none;
  }
</style>

<header>
  <Stack stackSpace={cardHeaderStackSpace}>
    {#if eyebrow}
      <p class="eyebrow font-size:small font-family:sans-serif">
        {@html eyebrow}
      </p>
    {/if}

    <CardHeadline {cardData} {id} {headerLevel} {headlineFontSize}>
      {#if href}
        <a
          {href}
          id={id.length ? id : null}
          data-track="click"
          data-event-category="body links"
          data-event-action="click"
          data-event-label={headline}
        >
          {@html headline}
        </a>
      {:else}
        {@html headline}
      {/if}
    </CardHeadline>

    {#if subHead}
      <p class="font-size:small font-family:sans-serif">
        {@html subHead}
      </p>
    {/if}
  </Stack>
</header>
