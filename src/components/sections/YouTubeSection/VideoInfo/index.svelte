<script>
  import UniversityIcon from "../../../icons/UniversityIcon/index.svelte";
  import PersonIcon from "../../../icons/PersonIcon/index.svelte";
  export let videoData = {};
  export let headerLevel = "h2";
  export let headlineFontSize = "big-1";
  export let className = "";
</script>

<style>
  .definition-container {
    display: flex;
    gap: var(--s-1);
    align-items: baseline;
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
      class={`font-size:${headlineFontSize} font-weight:bold`}
    >
      {videoData.title}
    </svelte:element>
    <p>{videoData.info}</p>
  </div>

  <dl class="stack margin-top:auto font-size:small">
    <div class="definition-container">
      <dt><PersonIcon title="Authors:" /></dt>
      <dd>
        <ul class="cluster" style="--cluster-space--component: var(--s-4);">
          {#each videoData.authors as author, i}
            <li>{author}{i < videoData.authors.length ? "," : ""}</li>
          {/each}
          <li class="font-style:italic">et al.</li>
        </ul>
      </dd>
    </div>

    <div class="definition-container">
      <dt><UniversityIcon title="Institution:" /></dt>
      <dd>{videoData.institution}</dd>
    </div>
  </dl>
</div>
