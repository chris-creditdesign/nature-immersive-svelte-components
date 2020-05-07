<script>
  export let height = 1;
  export let title = "Email";
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
  <path
    d="M30,15A15,15,0,1,1,15,0,15,15,0,0,1,30,15ZM15,2A13,13,0,1,0,28,15,13,13,0,0,0,15,2Z" />
  <path
    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955
    6.572.955-4.756 4.635 1.123 6.545z" />
</svg>
<span class="visually-hidden">{title}</span>
