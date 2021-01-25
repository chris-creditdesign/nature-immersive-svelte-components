<script>
  import { onMount } from "svelte";
  import { SwitcherList } from "creditdesign-svelte-components";
  import ExpandButton from "./components/ExpandButton/index.svelte";
  import LogoNature from "../LogoNature/index.svelte";

  let menuExpanded = true;
  let menuLinkFocused = false;
  let menuButtonRef = null;
  let lastMenuLink = null;

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

  let closeMenu = () => {
    menuExpanded = false;
    menuButtonRef.focus();
  };

  onMount(() => {
    menuExpanded = false;
  });
</script>

<style>
  header {
    --link-color-invert: var(--text-color-invert);

    padding: var(--s-1);
    font-family: var(--sans-serif-font);
  }

  a {
    text-decoration: none;
  }

  ul {
    max-width: none;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .header__list {
    display: flex;
    justify-content: space-between;
  }

  .link-with-svg {
    font-size: 1.6em;
  }

  .list-item-with-menu {
    position: relative;
  }

  nav {
    position: fixed;
    top: calc(1.6em + var(--s-1) + var(--s-1));
    left: 0;
    width: 100%;
    max-width: none;
    padding: var(--s-1);
    background-color: red;
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

<header data-theme="invert">
  <ul class="header__list">
    <li>
      <a class="link-with-svg" href="https://www.nature.com">
        <LogoNature />
      </a>
    </li>

    <li class="list-item-with-menu">
      <ExpandButton
        bind:menuButtonRef
        on:click="{handleButtonClick}"
        expanded="{menuExpanded}"
      />
      {#if menuExpanded}
        <nav data-theme="invert">
          <SwitcherList>
            <li>
              <a
                href="https://www.nature.com"
                on:focus="{handleMenuLinkFocus}"
                on:blur="{handleMenuLinkBlur}"
              >
                One
              </a>
            </li>
            <li>
              <a
                href="https://www.nature.com"
                on:focus="{handleMenuLinkFocus}"
                on:blur="{handleMenuLinkBlur}"
              >
                Two
              </a>
            </li>
            <li>
              <a
                href="https://www.nature.com"
                on:focus="{handleMenuLinkFocus}"
                on:blur="{handleMenuLinkBlur}"
              >
                Three
              </a>
            </li>
            <li>
              <a
                href="https://www.nature.com"
                on:focus="{handleMenuLinkFocus}"
                on:blur="{handleMenuLinkBlur}"
              >
                Four
              </a>
            </li>
            <li>
              <a
                href="https://www.nature.com"
                bind:this="{lastMenuLink}"
                on:focus="{handleMenuLinkFocus}"
                on:blur|preventDefault="{handleMenuLinkBlur}"
              >
                Five
              </a>
            </li>
          </SwitcherList>
        </nav>
      {/if}
    </li>
  </ul>

</header>

<a href="https://www.creditdesign.co.uk">Hello</a>
