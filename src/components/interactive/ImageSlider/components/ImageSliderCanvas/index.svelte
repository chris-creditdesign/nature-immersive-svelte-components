<script>
  import { onMount } from "svelte";

  /**
   * Aria-label to apply to canvas element.
   */
  export let altText = "Interactive section used to compare two images.";
  /**
   * Percentage of imageA to show over imageB
   */
  export let amountToReveal = 0;
  /**
   * HTMLImageElement to render to the canvas
   */
  export let imageA;
  /**
   * HTMLImageElement to render to the canvas
   */
  export let imageB;
  /**
   * Ratio of height / width of the images - both should be the same
   */
  export let ratio = 0.666666667;

  let canvas;
  let ctx;
  let frame;
  let width = 900;

  $: height = width * ratio;

  let loop = () => {
    ctx.lineWidth = 4;

    ctx.clearRect(0, 0, width, height);

    let percentToReveal = amountToReveal / 100;

    if (amountToReveal > 0) {
      ctx.drawImage(
        imageB,
        0,
        0,
        imageB.width * percentToReveal,
        imageB.height,
        0,
        0,
        width * percentToReveal,
        height
      );

      ctx.drawImage(
        imageA,
        imageA.width * percentToReveal,
        0,
        imageA.width * (1.01 - percentToReveal),
        imageA.height,
        width * percentToReveal,
        0,
        width * (1.01 - percentToReveal),
        height
      );
    } else {
      ctx.drawImage(
        imageA,
        0,
        0,
        imageA.width,
        imageA.height,
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

    frame = requestAnimationFrame(loop);
  };

  onMount(async () => {
    // The context is not available until the
    // component has mounted.
    ctx = canvas.getContext("2d");
    loop();

    return () => {
      cancelAnimationFrame(frame);
    };
  });
</script>

<style>
  canvas {
    max-width: 100%;
  }
</style>

<canvas bind:this={canvas} {width} {height} role="img" aria-label={altText} />
