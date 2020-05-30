<script>
  import { Box } from "creditdesign-svelte-components";
  import ToggleButton from "./index.svelte";

  export let className;
  export let triangle;
  export let expandedMessage;
  export let message;

  let expanded = false;

  let handleClick = () => {
    expanded = !expanded;
  };
</script>

<Box>
  <ToggleButton
    {className}
    {expanded}
    {triangle}
    {expandedMessage}
    {message}
    {controls}
    on:click={handleClick} />
</Box>
