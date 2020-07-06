<script>
  import { Center, Stack } from "creditdesign-svelte-components";
  import CoverBackgroundImage from "./index.svelte";
  import Heading from "../Heading/index.svelte";

  export let srcURL;
  export let alt;
  export let coverSpace;
  export let coverHeight;
  export let articleData;
</script>

<Stack stackSpace="var(--s3)">
  <Center>
    <Stack stackSpace="var(--s0)">
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
    </Stack>
  </Center>

  <CoverBackgroundImage {srcURL} {alt} {coverSpace} {coverHeight}>
    <Heading className="{'centered'}" {articleData} />
  </CoverBackgroundImage>

  <Center>
    <Stack stackSpace="var(--s0)">
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
    </Stack>
  </Center>
</Stack>
