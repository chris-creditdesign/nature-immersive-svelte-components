<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import { Stack } from "creditdesign-svelte-components";
  import NatureLogo from "../NatureLogo/index.svelte";
  import NatureBriefingLogo from "../NatureBriefingLogo/index.svelte";
  import SpringerNatureLogo from "../SpringerNatureLogo/index.svelte";
</script>

<Meta title="components/logos" />

<Story name="Default">
  <Stack stackSpace="var(--s2)">
    <Stack>
      <hr />
      <span class="font-family:sans-serif font-size:small">NatureLogo:</span>
      <div>
        <NatureLogo height="2" />
      </div>
    </Stack>

    <Stack>
      <hr />
      <span class="font-family:sans-serif font-size:small"
        >NatureBriefingLogo:</span
      >
      <div>
        <NatureBriefingLogo height="2" />
      </div>
    </Stack>

    <Stack>
      <hr />
      <span class="font-family:sans-serif font-size:small"
        >SpringerNatureLogo:</span
      >
      <div>
        <SpringerNatureLogo height="2" />
      </div>
    </Stack>
  </Stack>
</Story>
