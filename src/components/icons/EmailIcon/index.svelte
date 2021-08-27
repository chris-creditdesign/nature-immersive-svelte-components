<script>
  export let className = "";
  export let height = 1;
  export let title = "Email";
</script>

<style>
  svg {
    display: block;
    overflow: visible;
  }
</style>

<svg
  class={className}
  height={`${height}em`}
  viewBox="0 0 40 40"
  focusable="false"
  aria-hidden="true"
>
  <path
    d="M20,20.4l-5.8-4.5c-0.3-0.2-0.7-0.2-0.9,0.1c-0.2,0.3-0.2,0.6,0.1,0.9l6.2,4.8c0.2,0.2,0.6,0.2,0.8,0c0,0,0,0,0,0l6.2-4.8
	c0.3-0.2,0.3-0.6,0.1-0.9c-0.2-0.3-0.6-0.3-0.9-0.1L20,20.4z M12,13.3h16c0.7,0,1.3,0.6,1.3,1.3v10.7c0,0.7-0.6,1.3-1.3,1.3H12
	c-0.7,0-1.3-0.6-1.3-1.3V14.7C10.7,13.9,11.3,13.3,12,13.3z"
  />

  <path
    d="M20,39C9.5,39,1,30.5,1,20S9.5,1,20,1s19,8.5,19,19S30.5,39,20,39z M20,4C11.2,4,4,11.2,4,20s7.2,16,16,16s16-7.2,16-16
		S28.8,4,20,4z"
  />
</svg>
<span class="visually-hidden">{title}</span>
