<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import Header from "../index.svelte";
  import {
    headerLevelOptions,
    fontSizeOptions,
    fontWeightOptions,
  } from "../../../preview-content/options.js";
</script>

<Meta
  title="Components/Header"
  component={Header}
  argTypes={{
    text: { control: "text" },
    headerLevel: {
      control: {
        type: "select",
        options: headerLevelOptions,
      },
    },
    headlineFontSize: {
      control: {
        type: "select",
        options: fontSizeOptions,
      },
    },
    headlineFontWeight: {
      control: {
        type: "select",
        options: fontWeightOptions,
      },
    },
  }}
/>

<Story name="Default" let:args>
  <Header {...args} />
</Story>
