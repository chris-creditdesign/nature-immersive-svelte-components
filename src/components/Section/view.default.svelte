<script>
  import Section from "./index.svelte";

  export let className = "";
  export let headline;
</script>

<Section {className} {headline}>
  <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt iusto
    eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo corrupti
    numquam officia architecto modi! Labore natus error nisi earum?
  </p>
</Section>
