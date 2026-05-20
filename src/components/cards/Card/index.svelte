<script lang="ts">
  /**
   * A Card Component
   *
   * @component
   */

  import CardHeader from "../components/CardHeader/index.svelte";
  import Image from "../../Image/index.svelte";
  import { Stack } from "creditdesign-svelte-components";

  
  interface Props {
    /**
   * - altText
   * - caption
   * - eyebrow
   * - footnote
   * - headline
   * - href
   * - srcURL
   * - subHead
   * - text
   */
    cardData: any;
    cardHeaderStackSpace?: string;
    className?: string;
    headerLevel?: string;
    headlineFontSize?: string;
    id?: string;
    stackSpace?: string;
    relatedLinksStackSpace?: string;
    theme?: string;
    children?: import('svelte').Snippet;
  }

  let {
    cardData,
    cardHeaderStackSpace = "var(--s-4)",
    className = "",
    headerLevel = "h2",
    headlineFontSize = "big-2",
    id = "",
    stackSpace = "var(--s-1)",
    relatedLinksStackSpace = "var(--s-3)",
    theme = "",
    children
  }: Props = $props();

  let {
    altText,
    caption,
    footnote,
    srcURL,
    text,
    relatedLinksHeadline,
    relatedLinks,
  } = cardData;
</script>

<div class={`card ${className}`} data-theme={theme}>
  <Stack {stackSpace}>
    {#if srcURL}
      <Image {altText} {caption} {srcURL} />
    {/if}

    <CardHeader
      {cardData}
      {cardHeaderStackSpace}
      {headerLevel}
      {headlineFontSize}
      {id}
    />

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
      <p class="footnote font-size:small font-family:sans-serif">
        {@html footnote}
      </p>
    {/if}

    {@render children?.()}
  </Stack>
</div>
