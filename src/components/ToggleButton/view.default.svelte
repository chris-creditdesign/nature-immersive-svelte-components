<script>
  import ToggleButton from "./index.svelte";
  import { Box } from "creditdesign-svelte-components";

  export let className;
  export let toggleButtonColorLight;
  export let toggleButtonColorDark;
  export let expandedMessage;
  export let message;
  export let controls;

  let expanded = false;

  let handleClick = () => {
    expanded = !expanded;
  };
</script>

<Box>
  <ToggleButton
    {className}
    {toggleButtonColorLight}
    {toggleButtonColorDark}
    {expanded}
    {expandedMessage}
    {message}
    {controls}
    on:click={handleClick} />
</Box>
