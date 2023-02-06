<script context="module" lang="ts">
	export const players: Set<YT.Player> = new Set();

	export function stopAll() {
		players.forEach((player) => {
			player.pauseVideo();
		});
	}
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import { youTubeIframeAPIReady } from '../../stores/youtube-iframe-api-ready.js';
	import YouTubeButton from '../../buttons/YouTubeButton/index.svelte';
	export let videoId: string;
	export let title = 'YouTube video player';
	export let videoRatioHeight = 9;
	export let videoRatioWidth = 16;
	export let playVideoRequested = false;
	export let autoplay = true;
	export let youTubeContainer: HTMLElement | null = null;

	let iframe: HTMLIFrameElement | null = null;
	let thisPlayer: YT.Player | null = null;
	let mounted = false;
	let backgroundImageUrl = `url('https://i.ytimg.com/vi/${videoId}/sddefault.jpg')`;
	let uniqueVideoId = `${videoId}-${Date.now().toString(36)}`;

	$: instantiatePlayer($youTubeIframeAPIReady, iframe);

	let handleButtonClick = () => {
		playVideoRequested = true;
	};

	let onPlayerReady = () => {
		backgroundImageUrl = 'unset';
		stopOtherPlayers();
	};

	let onPlayerStateChange = (event: YT.OnStateChangeEvent) => {
		/* 0 = ended; 1 = playing; 2 = paused */
		let { data } = event;

		/* If this video is playing, stop instances of this
	   component on page from playing */
		if (data === 1) {
			stopOtherPlayers();
		}
	};

	let onPlayerError = () => {
		mounted = false;
	};

	let stopOtherPlayers = () => {
		players.forEach((player) => {
			if (player !== thisPlayer) player.pauseVideo();
		});
	};

	let instantiatePlayer = (apiReady: boolean, iframe: HTMLIFrameElement | null) => {
		if (!thisPlayer === null && apiReady && iframe) {
			thisPlayer = new YT.Player(uniqueVideoId, {
				events: {
					onReady: onPlayerReady,
					onStateChange: onPlayerStateChange,
					onError: onPlayerError
				}
			});

			players.add(thisPlayer);

			if (youTubeContainer) {
				youTubeContainer.focus();
			}
		}
	};

	let youtubeAPIScriptLoaded = () => {
		if (!$youTubeIframeAPIReady) {
			youTubeIframeAPIReady.set(true);
		}
	};

	onMount(() => {
		mounted = true;
	});
</script>

<style>
	.nature-youtube-container {
		background-position: center center;
		background-size: cover;
	}

	.nature-youtube-container > iframe {
		width: 100%;
		height: 100%;
	}
</style>

<svelte:head>
	{#if !$youTubeIframeAPIReady}
		<script
			type="text/javascript"
			src="https://www.youtube.com/iframe_api"
			on:load={youtubeAPIScriptLoaded}
		>
		</script>
	{/if}
</svelte:head>

<div
	bind:this={youTubeContainer}
	class="nature-youtube-container frame"
	style="--frame-ratio-height--component: {videoRatioHeight}; --frame-ratio-width--component: {videoRatioWidth}; background-image: {backgroundImageUrl};"
	tabindex="-1"
>
	{#if !mounted}
		<div class="box" data-theme="invert">
			<p class="font-family:sans-serif">
				Please visit <a href="https://youtu.be/{videoId}">YouTube</a> to view this video.
			</p>
		</div>
	{:else if !playVideoRequested}
		<YouTubeButton on:click={handleButtonClick} message={`Play video: ${title}`} />
	{:else}
		<iframe
			bind:this={iframe}
			id={uniqueVideoId}
			src="https://www.youtube-nocookie.com/embed/{videoId}?autoplay={autoplay
				? '1'
				: '0'}&enablejsapi=1"
			frameborder="0"
			width="560"
			height="315"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
			{title}
		/>
	{/if}
</div>
