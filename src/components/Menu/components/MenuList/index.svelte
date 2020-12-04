<script>
  export let menuLinks;
</script>

<style>
  .switcher--list {
    --switcher-space: var(--s-1);
    --switcher-min-width: var(--measure);
    --modifier: calc(
      var(--switcher-min-width) - (100% - var(--switcher-space))
    );
  }

  .switcher--list__inner {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: none;
    padding: 0;
    margin: calc((var(--switcher-space) / 2) * -1);
    list-style: none;
  }

  :global(.switcher--list__inner > *) {
    flex-basis: calc(var(--modifier) * 999);

    /* flex-grow: 1; */
    margin: calc(var(--switcher-space) / 2);
  }

  :global(.switcher--list__inner > li) {
    /* Remove default padding */
    padding: 0;
  }

  /* If there are more than 7 items, stack them automatically */
  :global(.switcher--list__inner > :nth-last-child(n + 8)) {
    flex-basis: 100%;
  }

  :global(.switcher--list__inner > :nth-last-child(n + 8) ~ *) {
    flex-basis: 100%;
  }
</style>

<div class="switcher--list">
  <ul class="switcher--list__inner">
    {#each menuLinks as { text, href }}
      <li>
        <a
          {href}
          data-event-category="menu"
          data-event-action="click"
          data-event-label="{text}"
        >
          {text}
        </a>
      </li>
    {/each}
  </ul>
</div>
