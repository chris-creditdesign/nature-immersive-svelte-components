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
    stand
  } = articleData;

  let centerMeasure;
  let centerSpace = "0";
  let stackSpace = "var(--s2)";
</script>

<style>
  .heading {
    text-align: center;
  }

  .author,
  .photographer {
    font-weight: 800;
  }

  time {
    max-width: none;
    font-family: var(--sans-serif-font);
    font-size: var(--s-1);

    /* Even out the line height for the date */
    line-height: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
</style>

<section class={`heading ${className}`}>
  <Center {centerMeasure} {centerSpace}>
    <Stack {stackSpace}>

      <h1>
        {@html headline}
      </h1>
      <p>
        {@html stand}
      </p>

      {#if author || photographer || publishedAt}
        <div>
          <Stack stackSpace={'var(--s-3)'}>
            {#if author}
              <p class="author">
                {@html author}
              </p>
            {/if}
            {#if photographer}
              <p class="photographer">
                {@html photographer}
              </p>
            {/if}

            {#if publishedAt}
              <time
                itemProp="datePublished"
                dateTime={publishedAtString || null}>
                {formatDate(publishedAt)}
              </time>
            {/if}
          </Stack>
        </div>
      {/if}

    </Stack>
  </Center>
</section>
