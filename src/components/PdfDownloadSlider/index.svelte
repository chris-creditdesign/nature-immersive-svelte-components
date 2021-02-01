<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { buttonElement } from "./stores/pdf-download-stores.js";
  import PdfDownloadButton from "./components/PdfDownloadButton/index.svelte";
  import PdfDownloadContent from "./components/PdfDownloadContent/index.svelte";

  export let cardData;
  export let articleData;
  export let wideEnough = true;

  let { doi } = articleData;
  let mounted = false;
  let expanded = true;
  let buttonIsFocused = false;
  let pdfLinkIsFocused = false;
  let handleButtonBlur;

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

  let handlePdfLinkBlur = () => {
    pdfLinkIsFocused = false;
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
      window.setTimeout(() => {
        if (!pdfLinkIsFocused) {
          expanded = false;
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
    padding-right: none;
    padding-left: none;
    margin-top: none;
    margin-right: none;
    margin-left: none;
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

<svelte:window on:keydown="{handleKeydown}" />

<div class="pdf-download">
  {#if wideEnough}
    <div class="inner" class:expanded>
      {#if mounted}
        <PdfDownloadButton
          on:click="{handleButtonClick}"
          on:focus="{handleButtonFocus}"
          on:blur="{handleButtonBlur}"
          expanded="{expanded}"
        />
      {/if}
      {#if expanded}
        <div class="card-container" out:fade>
          <PdfDownloadContent
            on:focus="{handlePdfLinkFocus}"
            on:blur="{handlePdfLinkBlur}"
            cardData="{cardData}"
            doi="{doi}"
          />
        </div>
      {/if}
    </div>
  {:else}
    <PdfDownloadContent
      cardData="{cardData}"
      doi="{doi}"
      on:focus="{handlePdfLinkFocus}"
      on:blur="{handlePdfLinkBlur}"
    />
  {/if}
</div>
