<script lang="ts">
  import { onMount } from "svelte";
  import { menuElement, menuHeight } from "./stores/menu-stores.js";
  import MenuList from "./components/MenuList/index.svelte";
  import MenuListStatic from "./components/MenuListStatic/index.svelte";
  import MenuSocialLinks from "./components/MenuSocialLinks/index.svelte";
  import ExpandButton from "../buttons/ExpandButton/index.svelte";
  import NatureLogo from "../logos/NatureLogo/index.svelte";
  import MenuPdfDownload from "./components/MenuPdfDownload/index.svelte";

  interface Props {
    /**
     * - menuLinks
     * - pdfAvailable
     * - doi
     */
    articleData: any;
    children?: import('svelte').Snippet;
    heading?: import('svelte').Snippet;
  }

  let { articleData, children, heading }: Props = $props();
  let { menuLinks, pdfAvailable, doi } = articleData;

  let logoHeight = 1.6;
  let mounted = $state(false);
  let menuIsExpanded = $state(true);
  let menuLinkIsFocused = $state(false);
  let buttonIsFocused = $state(false);
  let lastMenuLinkElem = $state<HTMLElement | null>(null);
  let expandButtonRef = $state<InstanceType<typeof ExpandButton> | null>(null);
  let handleButtonBlur: (() => void) | undefined;

  let closeMenu = () => {
    menuIsExpanded = false;
  };

  let focusButton = () => {
    expandButtonRef?.focusButton();
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

  let handleMenuLinkBlur = (event: Event) => {
    menuLinkIsFocused = false;

    if ((event as FocusEvent).target === lastMenuLinkElem) {
      closeMenu();
    }
  };

  let handleKeydown = (event: KeyboardEvent) => {
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
    // so wait till onMount to define this function.
    // 'blur' event doesn't fire reliably on Firefox/macOS with mouse clicks:
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

<svelte:window onkeydown={handleKeydown} />

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
            bind:this={expandButtonRef}
            expanded={menuIsExpanded}
            expandedMessage="Menu"
            message="Menu"
            onblur={handleButtonBlur}
            onclick={handleButtonClick}
            onfocus={handleButtonFocus}
            theme="menu"
          />
          {#if menuIsExpanded}
            <MenuList
              {menuLinks}
              bind:lastMenuLinkElem
              menuHeight={$menuHeight}
              onblur={handleMenuLinkBlur}
              onfocus={handleMenuLinkFocus}
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

  {@render heading?.()}
</header>

{@render children?.()}

{#if !mounted}
  <MenuListStatic {menuLinks} />
{/if}
