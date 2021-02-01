<script>
  import { onMount } from "svelte";
  import {
    menuElement,
    buttonElement,
    menuHeight,
  } from "./stores/menu-stores.js";
  import ExpandButton from "./components/ExpandButton/index.svelte";
  import MenuList from "./components/MenuList/index.svelte";
  import MenuListStatic from "./components/MenuListStatic/index.svelte";
  import SocialLinks from "./components/SocialLinks/index.svelte";
  import LogoNature from "../LogoNature/index.svelte";
  import LogoDownloadFile from "../LogoDownloadFile/index.svelte";

  export let articleData;
  let { menuLinks, pdfAvailable, doi } = articleData;

  let mounted = false;
  let menuIsExpanded = true;
  let menuLinkIsFocused = false;
  let buttonIsFocused = false;
  let lastMenuLinkElem = null;
  let handleButtonBlur;

  let closeMenu = () => {
    menuIsExpanded = false;
  };

  let focusButton = () => {
    $buttonElement.focus();
  };

  let handleButtonClick = () => {
    menuIsExpanded = !menuIsExpanded;
  };

  let handleMenuLinkFocus = () => {
    menuLinkIsFocused = true;
  };

  let handleButtonFocus = () => {
    buttonIsFocused = true;
  };

  let handleMenuLinkBlur = (event) => {
    menuLinkIsFocused = false;

    if (event.target === lastMenuLinkElem) {
      closeMenu();
    }
  };

  let handleKeydown = (event) => {
    let { key } = event;
    let escapeIsPressed = key === "Escape";
    let menuLinkOrButtonAreFocused = menuLinkIsFocused || buttonIsFocused;

    if (escapeIsPressed && menuIsExpanded && menuLinkOrButtonAreFocused) {
      closeMenu();
      focusButton();
    }
  };

  onMount(() => {
    mounted = true;
    menuIsExpanded = false;

    // `window` is not available for static render,
    // so wait till onMount to define this function
    // 'blur' event doesn't seem to fire on firefox using MocOS using mouse clicks
    // https://github.com/facebook/react/issues/12993#issuecomment-413949427
    handleButtonBlur = () => {
      window.setTimeout(() => {
        if (!menuLinkIsFocused) {
          closeMenu();
        }
      }, 0);
    };
  });
</script>

<style>
  .menu-container {
    --link-color-invert: var(--text-color-invert);

    position: relative;
    padding: var(--s-2);
    font-family: var(--sans-serif-font);
  }

  a {
    max-width: max-content;
    text-decoration: none;
  }

  .flex-wrap\:wrap {
    flex-wrap: wrap;
  }

  .flex-grow {
    flex-grow: 2;
    max-width: none;
  }

  :global(.link-with-svg) {
    display: block;
    font-size: 1.6em;
  }

  .pdf-link {
    display: flex;
    align-items: center;
  }

  .pdf-icon {
    margin-left: var(--s-2);
  }

  :global(.menu-list) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: none;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  :global(.menu-list li) {
    padding: var(--s-4);
  }

  .skip-link:not(:focus) {
    /* visibly hidden */
    position: absolute !important;
    width: 1px;
    height: 1px;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0 !important;
    opacity: 0;
  }
</style>

<svelte:window on:keydown="{handleKeydown}" />

<a href="#main-content" class="skip-link font-family:sans-serif">
  Skip to main content
</a>

<header>
  <ul
    class="menu-list menu-container flex-wrap:wrap"
    data-theme="invert"
    bind:this="{$menuElement}"
  >
    <li class="flex-grow">
      <a
        class="link-with-svg"
        href="https://www.nature.com"
        data-track="click"
        data-event-category="menu"
        data-event-action="click"
        data-event-label="nature.com"
      >
        <LogoNature />
      </a>
    </li>

    {#if pdfAvailable}
      <li>
        <a
          class="pdf-link"
          href="{`pdf/${doi}.pdf`}"
          data-track="click"
          data-event-category="menu"
          data-event-action="click"
          data-event-label="PDF dowload"
        >
          <span>PDF download</span>
          <span class="pdf-icon">
            <LogoDownloadFile height="1.6" />
          </span>
        </a>
      </li>
    {/if}

    <li>
      <SocialLinks articleData="{articleData}" />
    </li>

    {#if menuLinks && menuLinks.length}
      {#if mounted}
        <li>
          <ExpandButton
            on:click="{handleButtonClick}"
            on:focus="{handleButtonFocus}"
            on:blur="{handleButtonBlur}"
            expanded="{menuIsExpanded}"
          />
          {#if menuIsExpanded}
            <MenuList
              bind:lastMenuLinkElem
              on:focus="{handleMenuLinkFocus}"
              on:blur="{handleMenuLinkBlur}"
              menuHeight="{$menuHeight}"
              menuLinks="{menuLinks}"
            />
          {/if}
        </li>
      {:else}
        <li>
          <a href="#menu">Menu</a>
        </li>
      {/if}
    {/if}
  </ul>

  <slot name="heading" />
</header>

<slot />

{#if !mounted}
  <MenuListStatic menuLinks="{menuLinks}" />
{/if}
