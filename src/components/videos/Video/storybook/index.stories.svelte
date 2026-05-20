<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Video from '../index.svelte';
  const { Story } = defineMeta({
    title: 'components/videos/Video',
    component: Video,
    argTypes: {
    altText: { control: "text" },
    autoplay: { control: "boolean" },
    caption: { control: "text" },
    captionSpace: {
      control: {
        type: "select",
        options: spaceOptions,
      },
    },
    className: { control: "text" },
    frameRatioHeight: { control: "number" },
    frameRatioWidth: { control: "number" },
    loop: { control: "boolean" },
    srcURL: { control: "text" },
    videoCaptionTracks: { control: "object" },
  },
  });
</script>

<script>
import { Stack } from "creditdesign-svelte-components";
  import { spaceOptions } from "../../../../preview-content/options.js";
</script>

<Story name="Default" args={{ altText: "This is the alt text", autoplay: false, caption: "This is the caption", captionSpace: 0, className: "example-class", frameRatioHeight: 1.8, frameRatioWidth: 4.25, loop: false, srcURL: "video/sintel-short-small.jpg", videoCaptionTracks: [ { label: "English", srclang: "en", defaultTrack: true, }, { label: "Deutsch", srclang: "de", defaultTrack: false, }, { label: "Español", srclang: "es", defaultTrack: false, }, ], }} parameters={{ layout: "fullscreen", }}>
  {#snippet children(args)}
    <Video {...args}>
      {#snippet transcript()}
      
          <p>Transcript</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima vero
            explicabo ipsum eius porro officiis adipisci iusto assumenda voluptates
            reprehenderit. Officia, obcaecati velit ad ducimus placeat commodi id
            quaerat tempore!
          </p>
        
      {/snippet}
    </Video>
  {/snippet}
</Story>

<Story name="With no transcript" args={{ altText: "This is the alt text", autoplay: false, caption: "This is the caption", captionSpace: 0, className: "example-class", frameRatioHeight: 1.8, frameRatioWidth: 4.25, loop: false, srcURL: "video/sintel-short-small.jpg", videoCaptionTracks: [ { label: "English", srclang: "en", defaultTrack: true, }, { label: "Deutsch", srclang: "de", defaultTrack: false, }, { label: "Español", srclang: "es", defaultTrack: false, }, ], }} parameters={{ layout: "fullscreen", }}>
  {#snippet children(args)}
    <Video {...args} />
  {/snippet}
</Story>

<Story name="Autoplay on intersect" args={{ altText: "This is the alt text", autoplay: true, caption: "This is the caption", captionSpace: 0, className: "example-class", frameRatioHeight: 1.8, frameRatioWidth: 4.25, loop: false, srcURL: "video/sintel-short-small.jpg", videoCaptionTracks: [ { label: "English", srclang: "en", defaultTrack: true, }, { label: "Deutsch", srclang: "de", defaultTrack: false, }, { label: "Español", srclang: "es", defaultTrack: false, }, ], }} parameters={{ layout: "fullscreen", }}>
  {#snippet children(args)}
    <Stack stackSpace="var(--s4)">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, mollitia.
        Voluptatem veniam adipisci vero dolorum, architecto minima saepe
        laboriosam enim, autem voluptate tempora distinctio praesentium nostrum
        modi blanditiis asperiores dignissimos!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, mollitia.
        Voluptatem veniam adipisci vero dolorum, architecto minima saepe
        laboriosam enim, autem voluptate tempora distinctio praesentium nostrum
        modi blanditiis asperiores dignissimos!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, mollitia.
        Voluptatem veniam adipisci vero dolorum, architecto minima saepe
        laboriosam enim, autem voluptate tempora distinctio praesentium nostrum
        modi blanditiis asperiores dignissimos!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, mollitia.
        Voluptatem veniam adipisci vero dolorum, architecto minima saepe
        laboriosam enim, autem voluptate tempora distinctio praesentium nostrum
        modi blanditiis asperiores dignissimos!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, mollitia.
        Voluptatem veniam adipisci vero dolorum, architecto minima saepe
        laboriosam enim, autem voluptate tempora distinctio praesentium nostrum
        modi blanditiis asperiores dignissimos!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, mollitia.
        Voluptatem veniam adipisci vero dolorum, architecto minima saepe
        laboriosam enim, autem voluptate tempora distinctio praesentium nostrum
        modi blanditiis asperiores dignissimos!
      </p>
      <Video {...args}>
        {#snippet transcript()}
          
            <p>Transcript</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima vero
              explicabo ipsum eius porro officiis adipisci iusto assumenda
              voluptates reprehenderit. Officia, obcaecati velit ad ducimus placeat
              commodi id quaerat tempore!
            </p>
          
          {/snippet}
      </Video>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, mollitia.
        Voluptatem veniam adipisci vero dolorum, architecto minima saepe
        laboriosam enim, autem voluptate tempora distinctio praesentium nostrum
        modi blanditiis asperiores dignissimos!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, mollitia.
        Voluptatem veniam adipisci vero dolorum, architecto minima saepe
        laboriosam enim, autem voluptate tempora distinctio praesentium nostrum
        modi blanditiis asperiores dignissimos!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, mollitia.
        Voluptatem veniam adipisci vero dolorum, architecto minima saepe
        laboriosam enim, autem voluptate tempora distinctio praesentium nostrum
        modi blanditiis asperiores dignissimos!
      </p>
    </Stack>
  {/snippet}
</Story>