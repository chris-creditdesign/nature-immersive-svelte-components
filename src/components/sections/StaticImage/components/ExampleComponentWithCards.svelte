<script lang="ts">
  import { Stack } from "creditdesign-svelte-components";
  import Card from "../../../cards/Card/index.svelte";

  let { stepContent } = $props();

  let { headline, cards } = stepContent;
</script>

<Stack stackSpace={"var(--s1)"}>
  <h2 class="border-above">
    {@html headline}
  </h2>
  {#each cards as cardData}
    <Card {cardData} />
  {/each}
</Stack>
