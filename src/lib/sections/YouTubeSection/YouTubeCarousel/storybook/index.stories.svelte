<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import { headerLevelOptions, fontSizeOptions } from '../../../../../preview-content/options.js';
	import YouTubeCarousel from '../index.svelte';
	import LiteYouTube from '../../../../videos/LiteYouTube/index.svelte';
	import { videoDataArray } from '../../../../../preview-content/video-data-array.js';

	let argTypes = {
		videoDataArray: { control: 'objet' },
		headerLevel: { control: { type: 'select', options: headerLevelOptions } },
		headlineFontSize: {
			control: { type: 'select', options: fontSizeOptions }
		},
		videoListLabel: { control: 'text' }
	};
</script>

<Meta
	title="components/sections/YouTubeSection/YouTubeCarousel"
	component={YouTubeCarousel}
	{argTypes}
/>

<Story
	name="Default"
	let:args
	args={{
		videoDataArray
	}}
>
	<YouTubeCarousel {...args} />
</Story>

<Story
	name="With other YouTube players on page."
	let:args
	args={{
		videoDataArray
	}}
>
	<div class="stack">
		<LiteYouTube videoId={'kYmLQP2M-qo'} />
		<YouTubeCarousel {...args} />
	</div>
</Story>
