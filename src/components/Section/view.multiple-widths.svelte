<script>
  import { Stack } from "creditdesign-svelte-components";
  import Section from "./index.svelte";
</script>

<Stack stackSpace="{'var(--s3)'}">
  <Section headline="{'Headline one'}">
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt
      iusto eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo
      corrupti numquam officia architecto modi! Labore natus error nisi earum?
    </p>
  </Section>

  <Section headline="{'Headline two'}" centerMeasure="{'var(--measure-big)'}">
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt
      iusto eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo
      corrupti numquam officia architecto modi! Labore natus error nisi earum?
    </p>
  </Section>

  <Section
    headline="{'Headline three'}"
    centerMeasure="{'var(--measure-small)'}"
  >
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt
      iusto eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo
      corrupti numquam officia architecto modi! Labore natus error nisi earum?
    </p>
  </Section>
</Stack>
