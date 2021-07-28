<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";

  import Measurements from "../index.svelte";
  import getPropValueArrayFromStylesheets from "../../../utils/get-prop-value-array-from-stylesheets.js";

  const allStyleSheets = [...document.styleSheets];

  const spacePropValueArray = getPropValueArrayFromStylesheets(
    allStyleSheets,
    ":root",
    /--s\d|--s-\d/
  );

  const measurePropValueArray = getPropValueArrayFromStylesheets(
    allStyleSheets,
    ":root",
    /--measure.*/
  );
</script>

<Meta
  title="Intro/Measurements"
  component={Measurements}
  parameters={{
    controls: { hideNoControlsWarning: true },
  }}
/>

<Story name="Spaces">
  <Measurements propValueArray={spacePropValueArray} />
</Story>

<Story name="Measures">
  <Measurements propValueArray={measurePropValueArray} />
</Story>
