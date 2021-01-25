<script>
  import { onMount } from "svelte";
  import { menuElement, menuHeight } from "./stores/check-menu-dimensions.js";
  import ExpandButton from "./components/ExpandButton/index.svelte";
  import MenuList from "./components/MenuList/index.svelte";
  import SocialLinks from "./components/SocialLinks/index.svelte";
  import LogoNature from "../LogoNature/index.svelte";

  export let articleData;
  let { menuLinks } = articleData;

  let mounted = false;
  let menuExpanded = true;
  let menuLinkFocused = false;
  let menuButtonRef = null;
  let lastMenuLink = null;
  let handleButtonBlur;

  let closeMenu = () => {
    menuExpanded = false;
    menuButtonRef.focus();
  };

  let handleButtonClick = () => {
    menuExpanded = !menuExpanded;
  };

  let handleMenuLinkFocus = () => {
    menuLinkFocused = true;
  };

  let handleMenuLinkBlur = (event) => {
    menuLinkFocused = false;
    if (event.target === lastMenuLink) {
      closeMenu();
    }
  };

  let handleKeydown = (event) => {
    if (event.key === "Escape" && menuExpanded && menuLinkFocused) {
      closeMenu();
    }
  };

  onMount(() => {
    mounted = true;
    menuExpanded = false;

    // `window` is not available for static render,
    // so wait till onMount to define this function
    // 'blur' event doesn't seem to fire on firefox using MocOS using mouse clicks
    // https://github.com/facebook/react/issues/12993#issuecomment-413949427
    handleButtonBlur = () => {
      window.setTimeout(() => {
        if (!menuLinkFocused) {
          menuExpanded = false;
        }
      }, 0);
    };
  });
</script>

<style>
  header {
    --link-color-invert: var(--text-color-invert);

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

  .position\:relative {
    position: relative;
  }

  :global(.link-with-svg) {
    display: block;
    font-size: 1.6em;
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

<header data-theme="invert" bind:this="{$menuElement}">
  <ul class="menu-list flex-wrap:wrap">
    <li class="flex-grow">
      <a class="link-with-svg" href="https://www.nature.com">
        <LogoNature />
      </a>
    </li>

    <li>
      <SocialLinks {articleData} />
    </li>

    {#if mounted && menuLinks}
      <li class="position:relative">
        <ExpandButton
          bind:menuButtonRef
          on:click="{handleButtonClick}"
          on:blur="{handleButtonBlur}"
          expanded="{menuExpanded}"
        />
        {#if menuExpanded && menuLinks}
          <MenuList
            bind:lastMenuLink
            on:focus="{handleMenuLinkFocus}"
            on:blur="{handleMenuLinkBlur}"
            menuHeight="{$menuHeight}"
            {menuLinks}
          />
        {/if}
      </li>
    {/if}
  </ul>

</header>

<a href="https://www.nature.come">Next focusable item...</a>
