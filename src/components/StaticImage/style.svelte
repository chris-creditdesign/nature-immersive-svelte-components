<style>
  :global(.image-container) {
    display: none;
  }

  @media screen and (min-width: 800px) {
    /* media query */
    :global(.static-image-container) {
      width: 100%;
      display: grid;
      grid-template-columns: 2fr var(--s3) 1fr;
      position: relative;
    }

    :global(.text-container) {
      grid-column: 1 / span 1;
      grid-row: 1;
    }

    :global(.image-container) {
      display: block;
      grid-column: 3 / span 1;
      grid-row: 1;
    }

    :global(.image-container__content) {
      width: 100%;
      margin: 0;
      position: sticky;
      position: -webkit-sticky;
      top: 10px;
    }
  }
</style>
