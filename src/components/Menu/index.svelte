<script>
  import { onMount } from "svelte";
  import LayoutBox from "../LayoutBox/index.svelte";
  import LayoutCluster from "../LayoutCluster/index.svelte";
  import StyleCluster from "../LayoutCluster/style.svelte";
  import StyleSwitcher from "../LayoutSwitcher/style.svelte";
  import LayoutSwitcher from "../LayoutSwitcher/index.svelte";
  import LogoNature from "../LogoNature/index.svelte";
  import LogoFacebook from "../LogoFacebook/index.svelte";
  import LogoTwitter from "../LogoTwitter/index.svelte";
  import LogoEmail from "../LogoEmail/index.svelte";
  import LogoVeggieBurger from "../LogoVeggieBurger/index.svelte";
  import generateSocialURLs from "../utils/generate-social-urls.js";

  export let className = "";
  export let articleData;

  let { doi, articleURL, headline, stand, menuLinks } = articleData;

  let { facebookURL, twitterURL, emailURL } = generateSocialURLs(
    doi,
    articleURL,
    headline,
    stand
  );

  let menuExpanded = true;

  let handleButtonClick = () => {
    console.log(menuExpanded);
    menuExpanded = !menuExpanded;
  };

  onMount(() => (menuExpanded = false));
</script>

<style>
  /* Push the navigation menu down */
  .menu > :last-child {
    margin-top: var(--s0);
  }

  /* Remove the default outline to account for the */
  /* outline being clipped by the cluster element */
  .menu:focus {
    outline: none;
  }

  /* Remove the global max width value */
  /* So that the Header can span the whole page width */
  .menu * {
    max-width: none;
  }

  .menu--reveal > ul {
    margin-top: var(--s-1);
  }

  button {
    /* Reset the default browser button styles */
    font-size: var(--font-size-base);
    border: none;
    background: none;
  }

  a,
  button {
    /* Make the links/button the exact size of the svg */
    display: block;
    max-width: max-content;
    /* Apply colour to text and svg elements */
    color: inherit;
    fill: var(--text-color-invert);
    transition: color ease var(--time);
    cursor: pointer;
  }

  a:hover,
  button:hover {
    text-decoration: none;
    color: var(--text-color-invert-accent);
    fill: var(--text-color-invert-accent);
  }

  a:focus,
  button:focus {
    color: var(--outline);
    fill: var(--outline);
    text-decoration: underline;
  }

  button {
    /* Remove the default padding from the button */
    padding: 0;
  }

  /* Animate the veggieburger icon - there's a better way to do this */
  :global(.menu--button .closed, .menu--button .open) {
    transition: opacity 300ms ease;
  }

  :global(.menu--button[aria-expanded="true"] .closed) {
    opacity: 0;
  }

  :global(.menu--button[aria-expanded="true"] .open) {
    opacity: 1;
  }

  :global(.menu--button[aria-expanded="false"] .closed) {
    opacity: 1;
  }

  :global(.menu--button[aria-expanded="false"] .open) {
    opacity: 0;
  }

  /* Stops icon clipping on safari */
  :global(.menu svg) {
    display: block;
    overflow: visible;
    fill: inherit;
    transition: fill ease var(--time);
    /* To stop the svgs being clipped by the overflow:hidden */
    /* behaviour of the cluster element */
    padding-bottom: 1px;
  }
</style>

<StyleCluster />
<StyleSwitcher />

<header role="banner" class={`menu invert ${className}`}>
  <LayoutBox className="menu invert">
    <LayoutCluster>
      <div class="cluster__split-after">
        <a
          href="https://www.nature.com"
          data-track="click"
          data-event-category="menu"
          data-event-action="click"
          data-event-label="nature.com">
          <LogoNature height={1.6} />
        </a>
      </div>

      <div class="cluster">
        <ul>
          <li>
            <a
              href={facebookURL}
              data-track="click"
              data-event-category="menu social"
              data-event-action="click"
              data-event-label="facebook">
              <LogoFacebook height={1.6} />
            </a>
          </li>
          <li>
            <a
              href={twitterURL}
              data-track="click"
              data-event-category="menu social"
              data-event-action="click"
              data-event-label="twitter">
              <LogoTwitter height={1.6} />
            </a>
          </li>
          <li>
            <a
              href={emailURL}
              data-track="click"
              data-event-category="menu social"
              data-event-action="click"
              data-event-label="email">
              <LogoEmail height={1.6} />
            </a>
          </li>
        </ul>
      </div>

      {#if menuLinks}
        <button
          on:click={handleButtonClick}
          class="menu--button"
          aria-expanded={menuExpanded}
          aria-controls="menu-list"
          data-event-category="menu"
          data-event-action="click"
          data-event-label="button">
          <LogoVeggieBurger height={1.6} />
        </button>
      {/if}
    </LayoutCluster>

    {#if menuExpanded && menuLinks}
      <div class="switcher menu--reveal">
        <ul id="menu-list">
          {#each menuLinks as { text, href }}
            <li>
              <a
                {href}
                data-event-category="menu"
                data-event-action="click"
                data-event-label={text}>
                {text}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    {/if}
  </LayoutBox>
</header>
