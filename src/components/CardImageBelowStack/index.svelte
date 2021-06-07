<script>
  import { Stack, StackList } from "creditdesign-svelte-components";

  /**
   * - text
   * - footnote
   */
  export let cardData;
  export let stackSpace = "var(--s-1)";
  export let relatedLinksStackSpace = "var(--s-3)";

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

  {#if relatedLinks}
    <div class="footnote font-size:small font-family:sans-serif">
      <Stack stackSpace={relatedLinksStackSpace}>
        {#if relatedLinksHeadline}
          <p>
            {@html relatedLinksHeadline}
          </p>
        {/if}

        <StackList stackSpace={relatedLinksStackSpace}>
          {#each relatedLinks as link}
            <li>
              {@html link.value}
            </li>
          {/each}
        </StackList>
      </Stack>
    </div>
  {/if}

  {#if footnote}
    <p class="footnote">
      {@html footnote}
    </p>
  {/if}
</Stack>
