<script>
  import { GridList } from "creditdesign-svelte-components";

  export let categories = [];
</script>

<style>
  /*
	* WTF, forms?
	* Released under MIT and copyright 2014 Mark Otto.
	* http://wtfforms.com
	*
	* Embedded icons from Open Iconic.
	* Released under MIT and copyright 2014 Waybury.
	* http://useiconic.com/open
 */

  li {
    display: grid;
  }

  .control-indicator {
    display: block;
    align-self: center;
    width: 1rem;
    height: 1rem;
    user-select: none;
    background-color: var(--white-1);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
    border-radius: 0.25rem;
    transition: background-color var(--time) ease, box-shadow var(--time) ease;
    grid-column: 1 / 1;
    grid-row: 1 / 1;
  }

  /* Place the label on top of the control-indicator and move it to the right */
  label {
    grid-column: 1 / 1;
    grid-row: 1 / 1;
    align-self: center;
    padding-left: 1.3rem;
  }

  /* Hover state */

  /* Uncomment if you need it, but be aware of the sticky iOS states. */

  /* Turn off if disabled */

  /* Turn off if checked */
  li:hover input:not(:disabled):not(:checked) ~ .control-indicator {
    color: #fff;
    background-color: var(--white-3);
  }

  /* Focus */
  input[type="checkbox"]:focus ~ .control-indicator {
    background-color: var(--white-3);
    box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.2rem var(--blue-3);
  }

  /* Checked state */
  input[type="checkbox"]:checked ~ .control-indicator {
    color: #fff;
    background-color: var(--blue-3);
  }

  /* Active */

  /* The colour when the cursor is pressing down */

  /* Turn off if disabled */
  input[type="checkbox"]:not(:disabled):active ~ .control-indicator {
    color: #fff;
    background-color: var(--blue-1);
  }

  input[type="checkbox"]:checked ~ .control-indicator {
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgOCA4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA4IDgiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTYuNCwxTDUuNywxLjdMMi45LDQuNUwyLjEsMy43TDEuNCwzTDAsNC40bDAuNywwLjdsMS41LDEuNWwwLjcsMC43bDAuNy0wLjdsMy41LTMuNWwwLjctMC43TDYuNCwxTDYuNCwxeiINCgkvPg0KPC9zdmc+DQo=);
  }

  /* Disabled state */
  input[type="checkbox"]:disabled ~ label {
    color: var(--black-2);
  }

  input[type="checkbox"]:disabled ~ .control-indicator {
    background-color: #fff;
    box-shadow: 0 0 0 0.075rem var(--white-2);
  }
</style>

<GridList minWidth="15ch" gridSpace="var(--s-1)">
  {#each categories as category}
    <li>
      <input
        class="visually-hidden"
        type="checkbox"
        id="{category.toLowerCase().replace(/ /gi, '-')}"
        bind:checked="{category.selected}"
      />
      <span class="control-indicator"></span>
      <label for="{category.toLowerCase().replace(/ /gi, '-')}">
        {category}
      </label>
    </li>
  {/each}
</GridList>
