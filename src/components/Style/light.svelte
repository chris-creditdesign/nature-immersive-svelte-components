<style>
  :global(:root) {
    --link-color: var(--blue-2);
    --link-color-invert: var(--orange-2);
    --outline: var(--yellow-3);
    --background-color: var(--white-0);
    --background-color-invert: var(--black-0);
    --text-color: var(--black-0);
    --text-color-accent: #666666;
    --text-color-invert: var(--white-0);
    --text-color-invert-accent: var(--white-3);
  }

  /* CoverBackgroundVideo and CoverBackgroundImage */
  /* Make the text visible over the dark background */
  :global(.cover--with-background) {
    color: var(--text-color-invert);
  }
</style>
