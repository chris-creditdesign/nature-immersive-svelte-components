<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";

  import FontSizes from "../index.svelte";

  import getPropValueArrayFromStylesheets from "../../../utils/get-prop-value-array-from-stylesheets.js";

  const allStyleSheets = [...document.styleSheets];

  const fontSizePropValueArray = getPropValueArrayFromStylesheets(
    allStyleSheets,
    ":root",
    /--font-size.*/
  );
</script>

<Meta
  title="Intro/Font sizes"
  component={FontSizes}
  parameters={{
    controls: { hideNoControlsWarning: true },
  }}
/>

<Story name="Harding font">
  <FontSizes propValueArray={fontSizePropValueArray} />
</Story>

<Story name="Graphik Nature l Web font">
  <div class="font-family:sans-serif">
    <FontSizes propValueArray={fontSizePropValueArray} />
  </div>
</Story>
