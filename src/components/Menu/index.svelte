<script>
  import { onMount } from "svelte";
  import LogoNature from "../LogoNature/index.svelte";
  import LogoFacebook from "../LogoFacebook/index.svelte";
  import LogoTwitter from "../LogoTwitter/index.svelte";
  import LogoEmail from "../LogoEmail/index.svelte";
  import LogoVeggieBurger from "../LogoVeggieBurger/index.svelte";
  import generateSocialURLs from "../utils/generate-social-urls.js";

  export let className = "";
  export let menuClusterSpace = "var(--s-4)";
  export let menuClusterJustifyContent = "flex-start";
  export let menuSwitcherSpace = "var(--s-1)";
  export let menuSwitcherMinWidth = "var(--measure-big)";
  export let menuBoxSpace = "var(--s-6)";
  export let articleData;

  let { doi, articleURL, title, description, menuLinks } = articleData;

  let menuExpanded = true;

  const style = `
    --menu-cluster-space: ${menuClusterSpace};
    --menu-cluster-justify-content: ${menuClusterJustifyContent};
    --menu-switcher-space: ${menuSwitcherSpace};
    --menu-switcher-min-width: ${menuSwitcherMinWidth};
    --menu-box-space: ${menuBoxSpace};
  `;

  let { facebookURL, twitterURL, emailURL } = generateSocialURLs(
    doi,
    articleURL,
    title,
    description
  );

  const handleButtonClick = () => {
    menuExpanded = !menuExpanded;
  };

  const handleMenuExpanded = () => {
    menuExpanded = false;
  };

  onMount(handleMenuExpanded);
</script>

<style>
  /* Reset the default browser button styles
     To enable the veggieburger svg to be styled */
  button {
    padding: 0;
    font-size: var(--font-size-base);
    cursor: pointer;
    background: none;
    border: none;
  }

  header a {
    display: block;
    color: var(--text-color-invert);
    fill: var(--text-color-invert);
  }

  /* Make sure the focus ring doesn't extend past the link text */
  .menu__switcher a {
    max-width: max-content;
  }

  header a:hover,
  header a:focus {
    color: var(--link-color-active);
    fill: var(--link-color-active);
  }

  header button:hover,
  header button:focus {
    color: var(--link-color-active);
    background-color: var(--outline);
    outline: 3px solid var(--outline);
    fill: var(--link-color-active);
  }

  ul {
    max-width: none;
    padding: 0;
    list-style: none;
  }

  li {
    padding: 0;
  }

  /* -------------------------- Skip to main content -------------------------- */

  .skip-link:not(:focus) {
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

  /* -------------------------------- Box style ------------------------------- */

  .menu--box {
    padding: var(--menu-box-space);
  }

  /* ------------------------------ Cluster style ----------------------------- */

  .menu__cluster {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: var(--menu-cluster-justify-content);
  }

  .menu__cluster > * {
    margin: var(--menu-cluster-space);
  }

  .menu__cluster__split-after {
    flex-grow: 1;
  }

  /* ----------------------------- Switcher style ----------------------------- */

  .menu__switcher {
    display: flex;
    flex-wrap: wrap;

    --modifier: calc(
      var(--menu-switcher-min-width) - (100% - var(--menu-switcher-space))
    );

    margin: 0 0 var(--s-4) 0;
  }

  .menu__switcher > * {
    flex-basis: calc(var(--modifier) * 999);
    flex-grow: 1;
    margin: var(--menu-cluster-space);
  }

  /* If there are more than 7 items, stack them automatically */
  .menu__switcher > :nth-last-child(n + 8),
  .menu__switcher > :nth-last-child(n + 8) ~ * {
    flex-basis: 100%;
  }

  /* ------------------------------ Veggie burger ----------------------------- */

  /* Animate the veggieburger icon - there's a better way to do this */
  :global(.menu__button .closed, .menu__button .open) {
    transition: opacity 300ms ease;
  }

  /* Open state  */
  :global(.menu__button[aria-expanded="true"] .closed) {
    opacity: 0;
  }

  :global(.menu__button[aria-expanded="true"] .open) {
    opacity: 1;
  }

  /* Closed state */
  :global(.menu__button[aria-expanded="false"] .closed) {
    opacity: 1;
  }

  :global(.menu__button[aria-expanded="false"] .open) {
    opacity: 0;
  }
</style>

<a href="#main-content" class="skip-link font-family:sans-serif">
  Skip to main content
</a>
<header
  role="banner"
  class="{`menu menu--box invert font-family:sans-serif ${className}`}"
  {style}
>
  <div class="menu__cluster">
    <a
      href="https://www.nature.com"
      data-track="click"
      data-event-category="menu"
      data-event-action="click"
      data-event-label="nature.com"
    >
      <LogoNature height="{1.6}" />
    </a>

    <div class="menu__cluster__split-after"></div>

    <ul class="menu__cluster">
      <li>
        <a
          href="{facebookURL}"
          data-track="click"
          data-event-category="menu social"
          data-event-action="click"
          data-event-label="facebook"
        >
          <LogoFacebook height="{1.6}" />
        </a>
      </li>
      <li>
        <a
          href="{twitterURL}"
          data-track="click"
          data-event-category="menu social"
          data-event-action="click"
          data-event-label="twitter"
        >
          <LogoTwitter height="{1.6}" />
        </a>
      </li>
      <li>
        <a
          href="{emailURL}"
          data-track="click"
          data-event-category="menu social"
          data-event-action="click"
          data-event-label="email"
        >
          <LogoEmail height="{1.6}" />
        </a>
      </li>
    </ul>

    {#if menuLinks}
      <button
        on:click="{handleButtonClick}"
        class="menu__button"
        aria-expanded="{menuExpanded}"
        aria-controls="menu-list"
        data-event-category="menu"
        data-event-action="click"
        data-event-label="button"
      >
        <LogoVeggieBurger height="{1.6}" />
      </button>
    {/if}
  </div>

  {#if menuExpanded && menuLinks}
    <ul class="menu__switcher" id="menu-list">
      {#each menuLinks as { text, href }}
        <li>
          <a
            {href}
            data-event-category="menu"
            data-event-action="click"
            data-event-label="{text}"
          >
            {text}
          </a>
        </li>
      {/each}
    </ul>
  {/if}
</header>
