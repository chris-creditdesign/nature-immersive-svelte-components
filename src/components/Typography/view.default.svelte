<script>
  import LayoutBox from "../LayoutBox/index.svelte";
  import LayoutStack from "../LayoutStack/index.svelte";
</script>

<LayoutBox boxSpace="var(--s3)">
  <LayoutStack stackSpace="var(--s1)">
    <h1>Heading level 1</h1>

    <h2>Heading level 2</h2>

    <h3>Heading level 3</h3>

    <p class="drop-cap">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt
      iusto eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo
      corrupti numquam officia architecto modi! Labore natus error nisi earum?
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      <a href="https://www.nature.com">
        Nam deserunt iusto eveniet dolore eum eligendi veniam
      </a>
      ipsam deleniti commodi illo corrupti numquam officia architecto modi!
      Labore natus error nisi earum?
    </p>

    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt
      iusto eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo
      corrupti numquam officia architecto modi! Labore natus error nisi earum?
    </p>

    <p>
      <a href="https://www.nature.com">Link text</a>
    </p>

    <ul>
      <li>List item one</li>
      <li>List item two</li>
      <li>List item three</li>
    </ul>

    <ol>
      <li>List item one</li>
      <li>List item two</li>
      <li>List item three</li>
    </ol>
  </LayoutStack>
</LayoutBox>
