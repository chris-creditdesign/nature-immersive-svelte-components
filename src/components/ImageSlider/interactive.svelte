<script>
  import { onMount } from "svelte";
  import { Stack } from "creditdesign-svelte-components";
  export let className = "";
  export let ratio = 0.5625;
  export let imageData;
  export let message = "Use the slider to reveal the hidden image:";
  export let mounted;
  export let amountToReveal = 0;
  let mouseDown = false;
  let canvas;
  let width = 900;

  $: height = width * ratio;

  onMount(() => {
    let loadedImages = imageData.map(elem => {
      let thisImage = new Image();
      thisImage.src = elem.srcURL;

      return thisImage;
    });

    let frame;
    const ctx = canvas.getContext("2d");

    let loop = () => {
      ctx.lineWidth = 4;
      frame = requestAnimationFrame(loop);

      ctx.clearRect(0, 0, width, height);

      let percentToReveal = amountToReveal / 100;

      if (amountToReveal > 0) {
        ctx.drawImage(
          loadedImages[1],
          0,
          0,
          loadedImages[1].width * percentToReveal,
          loadedImages[1].height,
          0,
          0,
          width * percentToReveal,
          height
        );

        ctx.drawImage(
          loadedImages[0],
          loadedImages[0].width * percentToReveal,
          0,
          loadedImages[0].width * (1.01 - percentToReveal),
          loadedImages[0].height,
          width * percentToReveal,
          0,
          width * (1.01 - percentToReveal),
          height
        );
      } else {
        ctx.drawImage(
          loadedImages[0],
          0,
          0,
          loadedImages[0].width,
          loadedImages[0].height,
          0,
          0,
          width,
          height
        );
      }

      ctx.strokeStyle = "#ffffff";

      ctx.beginPath();
      ctx.moveTo(width * percentToReveal, 0);
      ctx.lineTo(width * percentToReveal, height);
      ctx.closePath();
      ctx.stroke();
    };

    if ("decode" in loadedImages[0]) {
      Promise.all([loadedImages[0].decode(), loadedImages[1].decode()])
        .then(() => {
          loop();
        })
        .catch(encodingError => {
          console.log(encodingError);
          mounted = false;
        });
    }

    return () => {
      cancelAnimationFrame(frame);
    };
  });
</script>

<style>
  input[type="range"] {
    width: 100%;
    max-width: none;
  }

  :global(.image-slider) {
    font-family: var(--sans-serif-font);
    font-size: var(--font-size-small-1);
  }

  canvas {
    max-width: 100%;
  }

  .canvas-container {
    margin-right: 5px;
    margin-left: 5px;
  }

  .canvas-border {
    padding-top: var(--s1);
    padding-bottom: var(--s1);
    border-top: 2px solid #000;
    border-bottom: 2px solid #000;
  }

  .stack--fieldset {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-width: none;
    padding: 0;
    border: none;
  }

  .stack--fieldset > * {
    margin: 0;
  }

  .stack--fieldset > * + * {
    margin-top: var(--s-1);
  }

  legend {
    padding: 0;
  }
</style>

<Stack className={`image-slider ${className}`}>
  <div class="canvas-border">
    <div class="canvas-container">
      <canvas bind:this={canvas} {width} {height}>

        <p>Interactive section used to compare two images.</p>
        <dl>
          <dt>Image one</dt>
          <dd>{imageData[0].altText}</dd>
          <dt>Image two</dt>
          <dd>{imageData[1].altText}</dd>
        </dl>

      </canvas>
    </div>
  </div>

  <fieldset class="stack--fieldset">
    <legend class="bold">{message}</legend>
    <input
      type="range"
      id="image-reveal"
      min="0"
      max="100"
      bind:value={amountToReveal}
      step="1" />
    <label class="visually-hidden" for="image-reveal">
      {amountToReveal}% of the second image is revealed.
    </label>
  </fieldset>
</Stack>
