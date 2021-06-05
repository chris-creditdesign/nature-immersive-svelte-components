<script>
  export let cardData;
  export let doi;

  let { headline, srcURL, text } = cardData;
</script>

<style>
  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: var(--s-1);
  }

  h2 {
    margin: 0;
  }

  img {
    /* display: block; */
    width: 100%;
    max-width: 100%;
    margin: 0;
  }

  a {
    margin-top: var(--s-1);
  }

  a span {
    /* display: block; */
    margin-top: var(--s-1);
  }
</style>

<div data-theme="invert" class="font-family:sans-serif">
  <h2 class="font-size:base">{headline}</h2>
  <a href={`pdf/${doi}.pdf`} on:blur on:focus>
    <img src={srcURL} alt="" />
    <span>
      {@html text}
    </span>
  </a>
</div>
