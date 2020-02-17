<script>
  import Section from "./index.svelte";
  import LayoutStack from "../LayoutStack/index.svelte";
  import Style from "../Style/index.svelte";
  import Light from "../Style/light.svelte";
  import Dark from "../Style/dark.svelte";

  let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
</script>

<Style />

{#if dark}
  <Dark />
{:else}
  <Light />
{/if}

<LayoutStack stackSpace={'var(--s3)'}>
  <Section headline={'Headline one'}>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt
      iusto eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo
      corrupti numquam officia architecto modi! Labore natus error nisi earum?
    </p>
  </Section>

  <Section headline={'Headline two'} centerMeasure={'var(--measure-big)'}>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt
      iusto eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo
      corrupti numquam officia architecto modi! Labore natus error nisi earum?
    </p>
  </Section>

  <Section headline={'Headline three'} centerMeasure={'var(--measure-small)'}>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt
      iusto eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo
      corrupti numquam officia architecto modi! Labore natus error nisi earum?
    </p>
  </Section>
</LayoutStack>
