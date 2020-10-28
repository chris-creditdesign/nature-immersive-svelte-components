<script>
  import { SwitcherList } from "creditdesign-svelte-components";

  export let menuLinks;
</script>

<SwitcherList>
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
</SwitcherList>
