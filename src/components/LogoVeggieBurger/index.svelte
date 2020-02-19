<script>
  export let height = 1;
  export let title = "Show navigation menu";
</script>

<style>
  svg {
    display: block;
  }
</style>

<svg
  height={`${height}em`}
  viewBox="0 0 30 30"
  focusable="false"
  role="img"
  aria-hidden="true">
  <g class="closed">
    <path
      d="M27,6H3C1.34,6,0,4.66,0,3v0c0-1.66,1.34-3,3-3h24c1.66,0,3,1.34,3,3v0C30,4.66,28.66,6,27,6z" />
    <path
      d="M27,30H3c-1.66,0-3-1.34-3-3v0c0-1.66,1.34-3,3-3h24c1.66,0,3,1.34,3,3v0C30,28.66,28.66,30,27,30z" />
    <path
      d="M27,17.5H3c-1.66,0-3-1.34-3-3v0c0-1.66,1.34-3,3-3h24c1.66,0,3,1.34,3,3v0C30,16.16,28.66,17.5,27,17.5z" />
  </g>
  <g class="open">
    <path
      d="M19.24,14.5l8.51-8.51c1.17-1.17,1.17-3.07,0-4.24s-3.07-1.17-4.24,0L15,10.26L6.49,1.75c-1.17-1.17-3.07-1.17-4.24,0
      s-1.17,3.07,0,4.24l8.51,8.51l-8.51,8.51c-1.17,1.17-1.17,3.07,0,4.24s3.07,1.17,4.24,0L15,18.74l8.51,8.51
      c1.17,1.17,3.07,1.17,4.24,0s1.17-3.07,0-4.24L19.24,14.5z" />
  </g>
</svg>
<span class="visually-hidden">{title}</span>
