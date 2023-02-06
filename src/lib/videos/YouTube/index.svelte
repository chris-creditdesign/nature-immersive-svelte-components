<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';
	import { Frame } from 'creditdesign-svelte-components';
	import { youTubeIframeAPIReady } from '$lib/stores/youtube-iframe-api-ready';
	import { youTubePlayerReady } from '$lib/stores/youtube-player-ready';

	export let videoId: string;
	export let videoRatioHeight = 9;
	export let videoRatioWidth = 16;

	let width = 600;
	let mounted = false;
	let heightOverWidthRatio = videoRatioHeight / videoRatioWidth;
	let player: YT.Player | null = null;
	let uniqueVideoId = `${videoId}-${Date.now().toString(36)}`;

	let onPlayerReady = () => {
		youTubePlayerReady.set(true);
	};

	let onPlayerError = () => {
		mounted = false;
	};

	onMount(() => {
		mounted = true;

		// https://developers.google.com/youtube/iframe_api_reference
		// This code loads the IFrame Player API code asynchronously.
		let script: HTMLScriptElement | null = null;
		let scriptAddedToPage = document.getElementById('nature-immersive-youtube-api');
		if (!$youTubeIframeAPIReady && !scriptAddedToPage) {
			script = document.createElement('script');
			script.setAttribute('id', 'nature-immersive-youtube-api');
			script.type = 'text/javascript';
			script.src = 'https://www.youtube.com/iframe_api';
			document.head.appendChild(script);
		}

		window.onYouTubeIframeAPIReady = function () {
			youTubeIframeAPIReady.set(true);
		};

		return () => {
			if (script && script.parentNode) {
				script.parentNode.removeChild(script);
			}
			if (player) {
				player.destroy();
			}
			youTubePlayerReady.set(false);
		};
	});

	afterUpdate(() => {
		// Would this be better with async await?
		if (!player && $youTubeIframeAPIReady) {
			player = new YT.Player(uniqueVideoId, {
				videoId,
				events: {
					onReady: onPlayerReady,
					onError: onPlayerError
				}
			});
		}

		if ($youTubePlayerReady && player) {
			player.setSize(width, width * heightOverWidthRatio);
		}
	});
</script>

<div bind:clientWidth={width}>
	<Frame frameRatioHeight={videoRatioHeight} frameRatioWidth={videoRatioWidth}>
		<div id={uniqueVideoId} />

		{#if !mounted}
			<div class="invert">
				<p class="font-family:sans-serif">
					Please visit
					<a href="https://youtu.be/{videoId}">YouTube</a>
					to view this video.
				</p>
			</div>
		{/if}
	</Frame>
</div>
