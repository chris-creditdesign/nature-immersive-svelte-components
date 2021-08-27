<script>
  import { onMount } from "svelte";
  import Static from "./components/ImageSliderStatic/index.svelte";
  import Interactive from "./components/ImageSliderInteractive/index.svelte";

  /**
   * Aria-label to apply to canvas element.
   */
  export let altText = "Interactive section used to compare two images.";
  /**
   * Percentage of imageA that should be showing over imageB
   * when the component loads.
   */
  export let amountToReveal = 0;
  /**
   * Array of objects containing:
   *
   * - srcURL
   * - altText
   * - caption
   */
  export let imageData;
  /**
   * Text to sit above the slider
   */
  export let message = "Use the slider to reveal the hidden image:";

  let ratio;
  let loadedImages = [];
  let mounted = false;
  let componentMap = new Map();
  componentMap.set(false, Static);
  componentMap.set(true, Interactive);

  $: selectedComponent = componentMap.get(mounted);

  onMount(() => {
    loadedImages = imageData.map((elem) => {
      let thisImage = new Image();
      thisImage.src = elem.srcURL;
      thisImage.alt = elem.altText;
      thisImage.decode();
      return thisImage;
    });

    // Wait for the images to decode so we can access their data
    Promise.all([loadedImages[0].decode(), loadedImages[1].decode()])
      .then(() => {
        // Now we know the width and the height of images
        // we can update the ratio
        let { height, width } = loadedImages[0];
        ratio = height / width;

        mounted = true;
      })
      .catch((encodingError) => {
        console.log("Hello...", encodingError);
        console.log({ mounted });

        mounted = false;
      });
  });
</script>

<svelte:component
  this={selectedComponent}
  {altText}
  {amountToReveal}
  imageA={loadedImages[0]}
  imageB={loadedImages[1]}
  {imageData}
  {message}
  {ratio}
/>
