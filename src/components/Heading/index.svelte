<script>
  import { Center, Stack } from "creditdesign-svelte-components";

  import formatDate from "../utils/format-date.js";

  export let className = "";
  export let articleData;

  let {
    author,
    headline,
    photographer,
    publishedAt,
    publishedAtString,
    stand,
  } = articleData;

  export let centerMeasure = "var(--measure-big)";
  export let centerSpace = "0";
  export let stackSpace = "var(--s2)";
  export let stackSpaceBetweenHeadAndStand = "var(--s2)";
  export let stackSpaceBetweenCredits = "var(--s-3)";
</script>

<style>
  .heading {
    text-align: center;
  }

  h1,
  p {
    max-width: none;
  }

  .stand-first {
    font-size: var(--font-size-big-1);
  }

  time {
    max-width: none;

    /* Even out the line height for the date */

    line-height: 1rem;
    letter-spacing: 0.05em;
  }
</style>

<div class="{`heading ${className}`}">
  <Center {centerMeasure} {centerSpace}>
    <Stack {stackSpace}>

      <Stack stackSpace="{stackSpaceBetweenHeadAndStand}">
        <h1>
          {@html headline}
        </h1>
        <p class="stand-first">
          {@html stand}
        </p>
      </Stack>

      {#if author || photographer || publishedAt}
        <Stack stackSpace="{stackSpaceBetweenCredits}">
          {#if author}
            <p class="author font-weight:bold">
              {@html author}
            </p>
          {/if}
          {#if photographer}
            <p class="photographer font-weight:bold">
              {@html photographer}
            </p>
          {/if}

          {#if publishedAt}
            <time
              class="font-family:sans-serif font-size:small
              text-transform:uppercase"
              itemProp="datePublished"
              dateTime="{publishedAtString || null}"
            >
              {formatDate(publishedAt)}
            </time>
          {/if}
        </Stack>
      {/if}

    </Stack>
  </Center>
</div>
