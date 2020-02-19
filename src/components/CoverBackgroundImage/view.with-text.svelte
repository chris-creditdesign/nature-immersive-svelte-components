<script>
  import CoverBackgroundImage from "./index.svelte";
  import Heading from "../Heading/index.svelte";
  import LayoutCenter from "../LayoutCenter/index.svelte";
  import LayoutStack from "../LayoutStack/index.svelte";

  export let srcURL;
  export let alt;
  export let coverSpace;
  export let coverHeight;
  export let articleData;
</script>

<LayoutStack stackSpace="var(--s3)">

  <LayoutCenter>
    <LayoutStack stackSpace="var(--s0)">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quidem
        temporibus beatae amet facilis, qui est praesentium laborum! Id vero
        repellat nostrum iure incidunt eligendi quasi architecto officia odio
        eos!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quidem
        temporibus beatae amet facilis, qui est praesentium laborum! Id vero
        repellat nostrum iure incidunt eligendi quasi architecto officia odio
        eos!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quidem
        temporibus beatae amet facilis, qui est praesentium laborum! Id vero
        repellat nostrum iure incidunt eligendi quasi architecto officia odio
        eos!
      </p>
    </LayoutStack>
  </LayoutCenter>

  <CoverBackgroundImage {srcURL} {alt} {coverSpace} {coverHeight}>
    <Heading className={'centered'} {articleData} />
  </CoverBackgroundImage>

  <LayoutCenter>
    <LayoutStack stackSpace="var(--s0)">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quidem
        temporibus beatae amet facilis, qui est praesentium laborum! Id vero
        repellat nostrum iure incidunt eligendi quasi architecto officia odio
        eos!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quidem
        temporibus beatae amet facilis, qui est praesentium laborum! Id vero
        repellat nostrum iure incidunt eligendi quasi architecto officia odio
        eos!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quidem
        temporibus beatae amet facilis, qui est praesentium laborum! Id vero
        repellat nostrum iure incidunt eligendi quasi architecto officia odio
        eos!
      </p>
    </LayoutStack>
  </LayoutCenter>
</LayoutStack>
