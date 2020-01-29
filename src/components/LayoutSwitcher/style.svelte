<style>
  :global(.switcher > *) {
    display: flex;
    flex-wrap: wrap;
    --space-between: var(--switcher-space);
    --modifier: calc(var(--switcher-min-width) - (100% - var(--space-between)));
    margin: calc((var(--space-between) / 2) * -1);
  }

  :global(.switcher > * > *) {
    flex-grow: 1;
    flex-basis: calc(var(--modifier) * 999);
    margin: calc(var(--space-between) / 2);
  }

  /* If there are more than 7 items, stack them automatically */
  :global(.switcher > * > :nth-last-child(n + 8), .switcher
      > *
      > :nth-last-child(n + 8)
      ~ *) {
    flex-basis: 100%;
  }

  :global(.switcher ul) {
    list-style: none;
    max-width: none;
    padding: 0;
  }

  :global(.switcher li) {
    /* Remove default padding */
    padding: 0;
  }
</style>
