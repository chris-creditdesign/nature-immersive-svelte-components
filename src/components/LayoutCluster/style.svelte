<style>
  :global(:root) {
    --cluster-space: var(--s-1);
    --cluster-justify-content: flex-start;
  }

  :global(.cluster) {
    overflow: hidden;
  }

  :global(.cluster > *) {
    display: flex;
    flex-wrap: wrap;
    justify-content: var(--cluster-justify-content);
    align-items: center;
    margin: calc(var(--cluster-space) / 2 * -1);
  }

  :global(.cluster > * > *) {
    margin: calc(var(--cluster-space) / 2);
  }

  :global(.cluster > * > .grow) {
    flex-grow: 2;
  }

  :global(.cluster__split-after) {
    flex-grow: 1;
  }

  :global(.cluster ul) {
    list-style: none;
    max-width: none;
    padding: 0;
  }

  :global(.clusetr li) {
    /* // Remove default padding and add extra */
    padding: 0;
  }
</style>
