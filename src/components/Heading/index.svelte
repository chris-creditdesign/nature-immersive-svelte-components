<script>
  import LayoutCenter from "../LayoutCenter/index.svelte";
  import LayoutStack from "../LayoutStack/index.svelte";

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
  let centerSpace = "var(--s2)";
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
    font-family: var(--sans-serif-font);
    font-size: var(--s-1);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    /* Even out the line height for the date */
    line-height: 1rem;
    max-width: none;
  }
</style>

<section class={`heading ${className}`}>
  <LayoutCenter {centerMeasure} {centerSpace}>
    <LayoutStack {stackSpace}>

      <h1>
        {@html headline}
      </h1>
      <p>
        {@html stand}
      </p>

      {#if author || photographer || publishedAt}
        <div>
          <LayoutStack stackSpace={'var(--s-3)'}>
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
          </LayoutStack>
        </div>
      {/if}

    </LayoutStack>
  </LayoutCenter>
</section>
