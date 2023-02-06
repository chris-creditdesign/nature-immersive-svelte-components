<script lang="ts">
	import type { ArticleData } from '$lib/types';
	import { Cluster } from 'creditdesign-svelte-components';
	import FacebookIcon from '$lib/icons/FacebookIcon/index.svelte';
	import TwitterIcon from '$lib/icons/TwitterIcon/index.svelte';
	import EmailIcon from '$lib/icons/EmailIcon/index.svelte';

	export let articleData: ArticleData;
	export let logoHeight = 1.6;

	import generateSocialURLs from '$lib/utils/generate-social-urls';

	let { doi, articleURL, title, description } = articleData;

	let { facebookURL, twitterURL, emailURL } = generateSocialURLs(
		doi,
		articleURL,
		title,
		description
	);
</script>

<style>
	a {
		display: block;
	}
</style>

<h2 class="visually-hidden">Sharing links</h2>
<Cluster clusterSpace="var(--s-3)" list={true}>
	<li>
		<a href={twitterURL}>
			<TwitterIcon height={logoHeight} />
		</a>
	</li>

	<li>
		<a href={facebookURL}>
			<FacebookIcon height={logoHeight} />
		</a>
	</li>

	<li>
		<a href={emailURL}>
			<EmailIcon height={logoHeight} />
		</a>
	</li>
</Cluster>
