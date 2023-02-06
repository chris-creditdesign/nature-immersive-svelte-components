<script lang="ts">
	import DownloadFileIcon from '$lib/icons/DownloadFileIcon/index.svelte';

	export let doi: string;
	export let logoHeight = 1.6;
</script>

<style>
	a {
		display: flex;
		gap: var(--s-2);
		align-items: center;
		text-decoration: none;
	}

	:global(.no-flexbox-gap a > * + *) {
		margin-left: var(--s-2);
	}
</style>

<a
	data-event-action="click"
	data-event-category="menu"
	data-event-label="PDF dowload"
	data-track="click"
	href={`pdf/${doi}.pdf`}
>
	<span>PDF download</span>
	<span class="pdf-icon">
		<DownloadFileIcon height={logoHeight} />
	</span>
</a>
