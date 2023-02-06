<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import ScrollytellingSection from '../index.svelte';

	let scrollytellingSteps = [
		{
			text: '<p>Step one. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>',
			data: {
				url: 'img/static-a-graphic.jpg',
				altText: 'Image one alt text'
			}
		},
		{
			text: '<p>Step two. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>',
			data: {
				url: 'img/static-b-graphic.jpg',
				altText: 'Image two alt text'
			}
		},
		{
			text: '<p>Step three. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>',
			data: {
				url: 'img/static-c-graphic.jpg',
				altText: 'Image three alt text'
			}
		},
		{
			text: '<p>Step four. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>',
			data: {
				url: 'img/static-d-graphic.jpg',
				altText: 'Image four alt text'
			}
		},
		{
			text: '<p>Step five. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>',
			data: {
				url: 'img/static-e-graphic.jpg',
				altText: 'Image five alt text'
			}
		}
	];

	let argTypes = {
		className: {
			control: 'text'
		},
		scrollytellingSteps: {
			control: 'object'
		}
	};
</script>

<style>
	.graphic {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100vw;
		height: 100vh;
	}

	img {
		max-width: 100%;
	}

	:global(.scrollytelling-step__content p) {
		padding: var(--s-1);
		margin: 0;
		color: var(--color--text);
		background-color: var(--color--background);
	}
</style>

<Meta
	title="components/sections/ScrollytellingSection"
	component={ScrollytellingSection}
	{argTypes}
	parameters={{
		layout: 'fullscreen'
	}}
/>

<Template let:args>
	<ScrollytellingSection {...args} />
</Template>

<Story name="Default" let:args args={{ scrollytellingSteps, className: 'example-class' }}>
	<ScrollytellingSection {...args} let:intersectingStep>
		<div slot="graphic" class="graphic">
			<img src={scrollytellingSteps[intersectingStep].data.url} alt="There we go" />
		</div>
	</ScrollytellingSection>
</Story>
