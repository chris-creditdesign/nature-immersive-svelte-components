<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import { Stack, Cluster } from "creditdesign-svelte-components";
  import ChevronIcon from "../ChevronIcon/index.svelte";
  import ChevronRightIcon from "../ChevronRightIcon/index.svelte";
  import ChevronLeftIcon from "../ChevronLeftIcon/index.svelte";
  import DownloadFileIcon from "../DownloadFileIcon/index.svelte";
  import DownloadIcon from "../DownloadIcon/index.svelte";
  import EmailIcon from "../EmailIcon/index.svelte";
  import FilterIcon from "../FilterIcon/index.svelte";
  import RadioIcon from "../RadioIcon/index.svelte";
  import TwitterIcon from "../TwitterIcon/index.svelte";
  import FacebookIcon from "../FacebookIcon/index.svelte";
  import UniversityIcon from "../UniversityIcon/index.svelte";
  import LocationIcon from "../LocationIcon/index.svelte";
  import PersonIcon from "../PersonIcon/index.svelte";
  import StarIcon from "../StarIcon/index.svelte";
  import TrophyIcon from "../TrophyIcon/index.svelte";
  import WebsiteIcon from "../WebsiteIcon/index.svelte";
</script>

<Meta title="components/icons" />

<Story name="Default">
  <Stack stackSpace="var(--s2)">
    <Cluster>
      <ChevronIcon height="2" />
      <ChevronRightIcon height="2" />
      <ChevronLeftIcon height="2" />
      <DownloadFileIcon height="2" />
      <DownloadIcon height="2" />
      <FilterIcon height="2" />
      <RadioIcon height="2" checked="true" />
      <EmailIcon height="2" />
      <FacebookIcon height="2" />
      <TwitterIcon height="2" />
      <UniversityIcon height="2" />
      <LocationIcon height="2" />
      <PersonIcon height="2" />
      <StarIcon height="2" />
      <TrophyIcon height="2" />
      <WebsiteIcon height="2" />
    </Cluster>

    <Stack>
      <hr />
      <span class="font-family:sans-serif font-size:small">ChevronIcon:</span>
      <div>
        <ChevronIcon height="2" />
      </div>
    </Stack>

    <Stack>
      <hr />
      <span class="font-family:sans-serif font-size:small"
        >ChevronRightIcon:</span
      >
      <div>
        <ChevronRightIcon height="2" />
      </div>
    </Stack>

    <Stack>
      <hr />
      <span class="font-family:sans-serif font-size:small"
        >ChevronLeftIcon:</span
      >
      <div>
        <ChevronLeftIcon height="2" />
      </div>
    </Stack>

    <Stack>
      <hr />
      <span class="font-family:sans-serif font-size:small"
        >DownloadFileIcon:</span
      >
      <div>
        <DownloadFileIcon height="2" />
      </div>
    </Stack>

    <Stack>
      <hr />
      <span class="font-family:sans-serif font-size:small">DownloadIcon:</span>
      <div>
        <DownloadIcon height="2" />
      </div>
    </Stack>

    <Stack>
      <hr />
      <span class="font-family:sans-serif font-size:small">FilterIcon:</span>
      <div>
        <FilterIcon height="2" />
      </div>
    </Stack>

    <Stack>
      <hr />
      <span class="font-family:sans-serif font-size:small">RadioIcon:</span>
      <div>
        <RadioIcon height="2" checked="true" />
      </div>
    </Stack>

    <Stack>
      <hr />
      <span class="font-family:sans-serif font-size:small">EmailIcon:</span>
      <div>
        <EmailIcon height="2" />
      </div>
    </Stack>

    <Stack>
      <hr />
      <span class="font-family:sans-serif font-size:small">FacebookIcon:</span>
      <div>
        <FacebookIcon height="2" />
      </div>
    </Stack>

    <Stack>
      <hr />
      <span class="font-family:sans-serif font-size:small">TwitterIcon:</span>
      <div>
        <TwitterIcon height="2" />
      </div>
    </Stack>

    <Stack>
      <hr />
      <span class="font-family:sans-serif font-size:small">LocationIcon:</span>
      <div>
        <LocationIcon height="2" />
      </div>
    </Stack>

    <Stack>
      <hr />
      <span class="font-family:sans-serif font-size:small">PersonIcon:</span>
      <div>
        <PersonIcon height="2" />
      </div>
    </Stack>

    <Stack>
      <hr />
      <span class="font-family:sans-serif font-size:small">StarIcon:</span>
      <div>
        <StarIcon height="2" />
      </div>
    </Stack>

    <Stack>
      <hr />
      <span class="font-family:sans-serif font-size:small">TrophyIcon:</span>
      <div>
        <TrophyIcon height="2" />
      </div>
    </Stack>

    <Stack>
      <hr />
      <span class="font-family:sans-serif font-size:small">UniversityIcon:</span
      >
      <div>
        <UniversityIcon height="2" />
      </div>
    </Stack>

    <Stack>
      <hr />
      <span class="font-family:sans-serif font-size:small">WebsiteIcon:</span>
      <div>
        <WebsiteIcon height="2" />
      </div>
    </Stack>
  </Stack>
</Story>
