<script lang="ts">
  import { Stack } from "creditdesign-svelte-components";

  
  interface Props {
    /**
   * - text
   * - footnote
   */
    cardData: any;
    stackSpace?: string;
    relatedLinksStackSpace?: string;
  }

  let { cardData, stackSpace = "var(--s-1)", relatedLinksStackSpace = "var(--s-3)" }: Props = $props();

  let { footnote, text, relatedLinks, relatedLinksHeadline } = cardData;
</script>

<style>
  .footnote {
    font-family: var(--sans-serif-font);
    font-size: var(--font-size-small-1);
  }
</style>

<Stack {stackSpace}>
  {#if text}
    <p>
      {@html text}
    </p>
  {/if}

  {#if relatedLinks && relatedLinks.length}
    <div class="footnote font-size:small font-family:sans-serif">
      <Stack stackSpace={relatedLinksStackSpace}>
        {#if relatedLinksHeadline}
          <p>
            {@html relatedLinksHeadline}
          </p>
        {/if}

        <Stack stackSpace={relatedLinksStackSpace} list={true}>
          {#each relatedLinks as link}
            <li>
              {@html link.value}
            </li>
          {/each}
        </Stack>
      </Stack>
    </div>
  {/if}

  {#if footnote}
    <p class="footnote">
      {@html footnote}
    </p>
  {/if}
</Stack>
