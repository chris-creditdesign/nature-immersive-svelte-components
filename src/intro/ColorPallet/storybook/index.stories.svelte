<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";

  import ColorPallet from "../index.svelte";
  import getPropValueArrayFromStylesheets from "../../../utils/get-prop-value-array-from-stylesheets.js";

  const allStyleSheets = [...document.styleSheets];

  const colorPropValueArray = getPropValueArrayFromStylesheets(
    allStyleSheets,
    ":root",
    /--color--.*/
  );

  const lightThemePropValueArray = getPropValueArrayFromStylesheets(
    allStyleSheets,
    "body",
    /--color--.*/
  );

  const darkThemePropValueArray = getPropValueArrayFromStylesheets(
    allStyleSheets,
    "body.dark",
    /--color--.*/
  );
</script>

<Meta
  title="Intro/Color pallet"
  component={ColorPallet}
  parameters={{
    controls: { hideNoControlsWarning: true },
  }}
/>

<Story name="Full pallet">
  <ColorPallet propValueArray={colorPropValueArray} />
</Story>

<Story name="Light theme">
  <ColorPallet propValueArray={lightThemePropValueArray} />
</Story>

<Story name="Dark theme">
  <ColorPallet propValueArray={darkThemePropValueArray} />
</Story>
