<script>
  export let className = "";
  export let height = 1;
  export let title = "Facebook";
</script>

<style>
  svg {
    display: block;
    overflow: visible;
  }
</style>

<svg
  class="{className}"
  height="{`${height}em`}"
  viewBox="0 0 30 30"
  focusable="false"
  aria-hidden="true"
>
  <path
    d="M30,15A15,15,0,1,1,15,0,15,15,0,0,1,30,15ZM15,2A13,13,0,1,0,28,15,13,13,0,0,0,15,2Z"
  ></path>
  <path
    d="M15.89625,22.8625 L12.57125,22.8625 L12.57125,15.02125 L10.90875,15.02125
    L10.90875,12.31875 L12.57125,12.31875 L12.57125,10.69625 C12.57125,8.4925
    13.50875,7.18 16.175,7.18 L18.39375,7.18 L18.39375,9.8825 L17.00625,9.8825
    C15.96875,9.8825 15.9,10.26 15.9,10.965 L15.895,12.3175 L18.4075,12.3175
    L18.115,15.02 L15.89625,15.02 L15.89625,22.8625 Z"
  ></path>
</svg>
<span class="visually-hidden">{title}</span>
