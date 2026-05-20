<script lang="ts">
  import { onMount } from "svelte";
  import Static from "./components/ImageSliderStatic/index.svelte";
  import Interactive from "./components/ImageSliderInteractive/index.svelte";

  
  
  
  
  
  interface Props {
    /**
   * Aria-label to apply to canvas element.
   */
    altText?: string;
    /**
   * Percentage of imageA that should be showing over imageB
   * when the component loads.
   */
    amountToReveal?: number;
    /**
   * Array of objects containing:
   *
   * - srcURL
   * - altText
   * - caption
   */
    imageData: any;
    /**
   * Text to sit above the slider
   */
    message?: string;
    /**
   * Class to add to container div
   */
    className?: string;
  }

  let {
    altText = "Interactive section used to compare two images.",
    amountToReveal = 0,
    imageData,
    message = "Use the slider to reveal the hidden image:",
    className = ""
  }: Props = $props();

  let ratio = $state();
  let loadedImages = $state([]);
  let mounted = $state(false);
  let componentMap = new Map();
  componentMap.set(false, Static);
  componentMap.set(true, Interactive);

  let selectedComponent = $derived(componentMap.get(mounted));

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

  const SvelteComponent = $derived(selectedComponent);
</script>

<SvelteComponent
  {altText}
  {amountToReveal}
  imageA={loadedImages[0]}
  imageB={loadedImages[1]}
  {imageData}
  {message}
  {ratio}
  {className}
/>
