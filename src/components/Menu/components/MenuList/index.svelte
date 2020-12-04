<script>
  export let menuLinks;
</script>

<style>
  .menu--list {
    --switcher-space: var(--s-1);
    --switcher-min-width: var(--measure);
    --modifier: calc(
      var(--switcher-min-width) - (100% - var(--switcher-space))
    );
  }

  .menu--list__inner {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: none;
    padding: 0;
    margin: calc((var(--switcher-space) / 2) * -1);
    list-style: none;
  }

  .menu--list__inner > li {
    flex-basis: calc(var(--modifier) * 999);
    padding: 0;
    margin: calc(var(--switcher-space) / 2);
  }

  /* If there are more than 7 items, stack them automatically */

  /* :global(.menu--list__inner > :nth-last-child(n + 8)) { */
  .menu--list__inner > li:nth-last-child(n + 8) {
    flex-basis: 100%;
  }

  /* :global(.menu--list__inner > :nth-last-child(n + 8) ~ *) { */
  .menu--list__inner > li:nth-last-child(n + 8) ~ * {
    flex-basis: 100%;
  }
</style>

<div class="menu--list">
  <ul class="menu--list__inner">
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
