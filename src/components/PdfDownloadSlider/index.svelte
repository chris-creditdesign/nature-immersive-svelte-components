<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { Stack } from "creditdesign-svelte-components";
  import { buttonElement } from "./stores/pdf-download-stores.js";
  import PdfDownloadButton from "./components/PdfDownloadButton/index.svelte";
  import PdfDownloadContent from "./components/PdfDownloadContent/index.svelte";

  export let cardData;
  export let articleData;
  /**
   * Boolean for the parent Component to report if it is not wide enough for the slider.
   * Normally set in App.svelte and accessed via a store.
   * If not wide enough, hide the button and show the contents.
   */
  export let wideEnough = true;

  let { doi } = articleData;
  let mounted = false;
  let expanded = true;
  let buttonIsFocused = false;
  let pdfLinkIsFocused = false;
  let handleButtonBlur;
  let handlePdfLinkBlur;

  let close = () => {
    expanded = false;
  };

  let focusButton = () => {
    $buttonElement.focus();
  };

  let handleButtonClick = () => {
    expanded = !expanded;
  };

  let handleButtonFocus = () => {
    buttonIsFocused = true;
  };

  let handlePdfLinkFocus = () => {
    pdfLinkIsFocused = true;
  };

  let handleKeydown = (event) => {
    let { key } = event;
    let escapeIsPressed = key === "Escape";
    let pdfLinkOrButtonAreFocused = pdfLinkIsFocused || buttonIsFocused;

    if (escapeIsPressed && expanded && pdfLinkOrButtonAreFocused) {
      close();
      focusButton();
    }
  };

  onMount(() => {
    mounted = true;
    expanded = false;

    handleButtonBlur = () => {
      buttonIsFocused = false;
      window.setTimeout(() => {
        if (!pdfLinkIsFocused) {
          expanded = false;
        }
      }, 0);
    };

    handlePdfLinkBlur = () => {
      pdfLinkIsFocused = false;
      window.setTimeout(() => {
        if (!buttonIsFocused) {
          close();
        }
      }, 0);
    };
  });
</script>

<style>
  .pdf-download {
    position: sticky;
    top: 0;
    width: 250px;
    height: 100vh;
    padding-right: 0;
    padding-left: 0;
    margin-top: 0;
    margin-right: 0;
    margin-left: 0;
    overflow: hidden;
  }

  .card-container {
    width: 200px;
  }

  .inner {
    display: flex;
    transition: transform 100ms ease-in;
    transform: translate(calc(100% - 50px), 0);
  }

  @media (prefers-reduced-motion: reduce) {
    .inner {
      transition: none;
    }
  }

  .expanded {
    transform: translate(0, 0);
  }

  @media (max-width: 740px) {
    .pdf-download {
      position: relative;
      width: 100%;
      max-width: var(--measure);
      height: auto;
      padding-right: var(--global-center-space);
      padding-left: var(--global-center-space);
      margin-top: var(--s3);
      margin-right: auto;
      margin-left: auto;
    }

    .inner {
      transform: translate(0, 0);
    }

    .card-container {
      width: var(--measure);
    }
  }
</style>

<svelte:window on:keydown={handleKeydown} />

<div class="pdf-download">
  {#if wideEnough}
    <Stack>
      <slot name="above" />
      <div class="inner stack__split-after" class:expanded>
        {#if mounted}
          <PdfDownloadButton
            on:click={handleButtonClick}
            on:focus={handleButtonFocus}
            on:blur={handleButtonBlur}
            {expanded}
          />
        {/if}
        {#if expanded}
          <div class="card-container" out:fade>
            <PdfDownloadContent
              on:focus={handlePdfLinkFocus}
              on:blur={handlePdfLinkBlur}
              {cardData}
              {doi}
            />
          </div>
        {/if}
      </div>
      <slot name="below" />
    </Stack>
  {:else}
    <PdfDownloadContent
      {cardData}
      {doi}
      on:focus={handlePdfLinkFocus}
      on:blur={handlePdfLinkBlur}
    />
  {/if}
</div>
