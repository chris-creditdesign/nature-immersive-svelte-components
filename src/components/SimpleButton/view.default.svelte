<script>
  import { Box } from "creditdesign-svelte-components";
  import ToggleButton from "./index.svelte";

  export let className;
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
    {expandedMessage}
    {message}
    on:click="{handleClick}"
  />
</Box>
