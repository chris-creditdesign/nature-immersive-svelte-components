<style>
  :global(:root) {
    --center-space: var(--s-1);
    --center-measure: var(--measure);
  }

  :global(.center) {
    box-sizing: content-box;
    margin-left: auto;
    margin-right: auto;
    max-width: var(--center-measure);
    padding-left: var(--center-space);
    padding-right: var(--center-space);
  }
</style>
