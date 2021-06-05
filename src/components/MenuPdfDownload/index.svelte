<script>
  import LogoDownloadFile from "../LogoDownloadFile/index.svelte";

  export let doi;
  export let logoHeight = 1.6;
</script>

<style>
  a {
    display: flex;
    align-items: center;
    gap: var(--s-2);
  }

  :global(.no-flexbox-gap a > * + *) {
    margin-left: var(--s-2);
  }
</style>

<a
  data-event-action="click"
  data-event-category="menu"
  data-event-label="PDF dowload"
  data-track="click"
  href={`pdf/${doi}.pdf`}
>
  <span>PDF download</span>
  <span class="pdf-icon">
    <LogoDownloadFile height={logoHeight} />
  </span>
</a>
