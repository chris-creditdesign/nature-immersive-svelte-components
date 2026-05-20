<script lang="ts">
  import UniversityIcon from "../../../icons/UniversityIcon/index.svelte";
  import PersonIcon from "../../../icons/PersonIcon/index.svelte";
  interface Props {
    videoData?: any;
    headerLevel?: string;
    headlineFontSize?: string;
    className?: string;
  }

  let {
    videoData = {},
    headerLevel = "h2",
    headlineFontSize = "big-1",
    className = ""
  }: Props = $props();
</script>

<style>
  .definition-container {
    display: flex;
    gap: var(--s-1);
    align-items: baseline;
  }

  .nature-definition-list {
    margin-top: auto !important;
  }

  dt {
    fill: var(--color--white-3);
  }

  dd {
    margin-inline-start: 0;
  }
</style>

<div
  class={`${className} stack font-family:sans-serif`}
  style="--stack-space--component: var(--s2);"
>
  <div class="stack" style="--stack-space--component: var(--s-2);">
    <svelte:element
      this={headerLevel}
      class={`font-size:${headlineFontSize} font-weight:bold font-family:sans-serif`}
    >
      {videoData.title}
    </svelte:element>
    <p class="font-family:sans-serif">{videoData.info}</p>
  </div>

  <dl class="nature-definition-list stack font-size:small">
    <div class="definition-container">
      <dt><PersonIcon title="Authors:" /></dt>
      <dd>
        {videoData.authors}
      </dd>
    </div>

    <div class="definition-container">
      <dt><UniversityIcon title="Institution:" /></dt>
      <dd>{videoData.institution}</dd>
    </div>
  </dl>
</div>
