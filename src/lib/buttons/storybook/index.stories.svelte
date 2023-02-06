<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import { action } from "@storybook/addon-actions";
  import { Stack, Cluster } from "creditdesign-svelte-components";
  import SimpleButton from "../SimpleButton/index.svelte";
  import PrevButton from "../PrevButton/index.svelte";
  import NextButton from "../NextButton/index.svelte";
  import ExpandButton from "../ExpandButton/index.svelte";
  import FilterButton from "../FilterButton/index.svelte";
  import SwitchButton from "../SwitchButton/index.svelte";
  import ToggleButton from "../ToggleButton/index.svelte";
  import VideoButton from "../VideoButton/index.svelte";

  let switchButtonchecked = false;
  let expandButtonExpanded = false;
  let filterButtonexpanded = false;
  let toggleButtonExpanded = false;
  let paused = false;

  let handleSimpleButtonClick = action("click");

  let handleSwitchButtonClick = () => {
    switchButtonchecked = !switchButtonchecked;
    action("click")();
  };

  let handleExpandButtonClick = () => {
    expandButtonExpanded = !expandButtonExpanded;
    action("click")();
  };

  let handleFilterButtonClick = () => {
    filterButtonexpanded = !filterButtonexpanded;
    action("click")();
  };

  let handleToggleButtonClick = () => {
    toggleButtonExpanded = !toggleButtonExpanded;
    action("click")();
  };

  let handleVideoButtonClick = () => {
    paused = !paused;
    action("click")();
  };
</script>

<Meta title="components/buttons" />

<Story name="Default">
  <Stack stackSpace="var(--s2)">
    <Stack>
      <hr />
      <span class="font-family:sans-serif font-size:small">SimpleButton:</span>
      <SimpleButton on:click={handleSimpleButtonClick} />
    </Stack>

    <Stack>
      <hr />
      <span class="font-family:sans-serif font-size:small"
        >PrevButton and NextButton:</span
      >
      <Cluster clusterSpace="var(--s-2)">
        <PrevButton on:click={handleSimpleButtonClick} />
        <NextButton on:click={handleSimpleButtonClick} />
      </Cluster>
    </Stack>

    <Stack>
      <hr />
      <span class="font-family:sans-serif font-size:small">ExpandButton:</span>
      <ExpandButton
        expanded={expandButtonExpanded}
        on:click={handleExpandButtonClick}
      />
    </Stack>

    <Stack>
      <hr />
      <span class="font-family:sans-serif font-size:small">FilterButton:</span>
      <FilterButton
        expanded={filterButtonexpanded}
        on:click={handleFilterButtonClick}
      />
    </Stack>

    <Stack>
      <hr />
      <span class="font-family:sans-serif font-size:small">ToggleButton:</span>
      <ToggleButton
        expanded={toggleButtonExpanded}
        on:click={handleToggleButtonClick}
      />
    </Stack>

    <Stack>
      <hr />
      <span class="font-family:sans-serif font-size:small">SwitchButton:</span>
      <SwitchButton
        checked={switchButtonchecked}
        on:click={handleSwitchButtonClick}
      />
    </Stack>

    <Stack>
      <hr />
      <span class="font-family:sans-serif font-size:small">VideoButton:</span>
      <VideoButton {paused} on:click={handleVideoButtonClick} />
    </Stack>
  </Stack>
</Story>
