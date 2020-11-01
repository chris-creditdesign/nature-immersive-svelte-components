<script>
  import { onMount } from "svelte";
  import { Box, Stack, Sidebar, Cluster } from "creditdesign-svelte-components";
  import LogoNature from "../LogoNature/index.svelte";
  import SocialLinks from "./components/SocialLinks/index.svelte";
  import ExpandButton from "./components/ExpandButton/index.svelte";
  import MenuList from "./components/MenuList/index.svelte";

  export let articleData;

  let { menuLinks } = articleData;
  let menuExpanded = true;
  let mounted = false;

  let handleButtonClick = () => {
    menuExpanded = !menuExpanded;
  };

  onMount(() => {
    menuExpanded = false;
    mounted = true;
  });
</script>

<style>
  /* Special case for links and button in header 
     Set all links to be white or black initially - rather than the normal link color.
     On hover or focus add a coloured border rather than the default outline as 
     this is being clipped by the negative margins.
  */

  header {
    --link-color-invert: var(--text-color-invert);
  }

  :global(header a, header button) {
    display: block;
    width: max-content;
    padding: 2px;
    text-decoration: none;
    border: 2px solid var(--background-color-invert);
  }

  :global(header a:hover, header a:focus, header button:hover, header
      button:focus) {
    border: 2px solid var(--outline);
    outline: none;
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
</style>

<a href="#main-content" class="skip-link font-family:sans-serif">
  Skip to main content
</a>

<header>
  <div class="menu__inner invert font-family:sans-serif">
    <Box>
      <Stack>
        <Sidebar sidebarOnLeft="{false}">
          <div slot="main-content">
            <a
              class="header__link--svg"
              href="https://www.nature.com"
              data-track="click"
              data-event-category="menu"
              data-event-action="click"
              data-event-label="nature.com"
            >
              <LogoNature height="{1.6}" />
            </a>
          </div>

          <div slot="sidebar">
            <Cluster clusterSpace="var(--s-3)">
              <SocialLinks {articleData} />

              {#if menuLinks && mounted}
                <ExpandButton
                  {menuExpanded}
                  on:menu-button-click="{handleButtonClick}"
                />
              {/if}
            </Cluster>
          </div>
        </Sidebar>
        {#if menuExpanded && menuLinks}
          <div class="menu-list" id="menu-list">
            <MenuList {menuLinks} />
          </div>
        {/if}
      </Stack>
    </Box>
  </div>
  <slot />
</header>
