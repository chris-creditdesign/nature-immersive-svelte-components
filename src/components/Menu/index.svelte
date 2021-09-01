<script>
  import { onMount } from "svelte";
  import { menuElement, menuHeight } from "./stores/menu-stores.js";
  import MenuList from "./components/MenuList/index.svelte";
  import MenuListStatic from "./components/MenuListStatic/index.svelte";
  import MenuSocialLinks from "./components/MenuSocialLinks/index.svelte";
  import ExpandButton from "../buttons/ExpandButton/index.svelte";
  import NatureLogo from "../logos/NatureLogo/index.svelte";
  import MenuPdfDownload from "./components/MenuPdfDownload/index.svelte";

  /**
   * - menuLinks
   * - pdfAvailable
   * - doi
   */
  export let articleData;
  let { menuLinks, pdfAvailable, doi } = articleData;

  let logoHeight = 1.6;
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
    buttonElement.focus();
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
  ul {
    position: relative;
    display: flex;
    gap: var(--s0);
    align-items: center;
    justify-content: space-between;
    max-width: none;
    padding: var(--s-1);
    margin: 0;
    font-family: var(--sans-serif-font);
    list-style: none;
  }

  a {
    display: block;
    max-width: max-content;
    text-decoration: none;
  }

  .flex-grow {
    flex-grow: 2;
    max-width: none;
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

<svelte:window on:keydown={handleKeydown} />

<a href="#main-content" class="skip-link font-family:sans-serif">
  Skip to main content
</a>

<header>
  <ul class="flex-wrap:wrap" data-theme="menu" bind:this={$menuElement}>
    <li class="flex-grow">
      <a
        class="link-with-svg"
        data-event-action="click"
        data-event-category="menu"
        data-event-label="nature.com"
        data-track="click"
        href="https://www.nature.com"
      >
        <NatureLogo height={logoHeight} />
      </a>
    </li>

    {#if pdfAvailable}
      <li><MenuPdfDownload {logoHeight} {doi} /></li>
    {/if}

    <li>
      <MenuSocialLinks {articleData} />
    </li>

    {#if menuLinks && menuLinks.length}
      {#if mounted}
        <li>
          <ExpandButton
            expanded={menuIsExpanded}
            expandedMessage="Menu"
            let:buttonElement
            message="Menu"
            on:blur={handleButtonBlur}
            on:click={handleButtonClick}
            on:focus={handleButtonFocus}
            theme="menu"
          />
          {#if menuIsExpanded}
            <MenuList
              {menuLinks}
              bind:lastMenuLinkElem
              menuHeight={$menuHeight}
              on:blur={handleMenuLinkBlur}
              on:focus={handleMenuLinkFocus}
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
  <MenuListStatic {menuLinks} />
{/if}
