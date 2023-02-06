<!--
@component

When the button is in its 'open' state, `aria-expanded` will be true.
   
If prefers reduced motion is set, the triangle icon will transition immediately.
   
Expects flexbox gap to be available. Otherwise a parent element should have a
`no-flexbox-gap` class applied. In this case margin-left will be applied to the
triangle icon.
   
A `focusButton` function is exported so that the element can be focused
programatically by a parent component. https://stackoverflow.com/a/58288696
-->
<script lang="ts">
	import ChevronIcon from '$lib/icons/ChevronIcon/index.svelte';

	/**
	 * Optional to add extra class to button element
	 */
	export let className = '';
	/**
	 * State of `aria-expanded` attribute on button.
	 */
	export let expanded = false;
	/**
	 * Text that will be displayed in the button when it is expanded
	 */
	export let expandedMessage = 'Close';
	/**
	 * Text that will be displayed in the button when it is not expanded
	 */
	export let message = 'Open';
	/**
	 * Option to add `data-theme` to button element.
	 */
	export let theme = '';
	export let disabled = false;

	let buttonElement: HTMLButtonElement;

	export function focusButton() {
		buttonElement.focus();
	}
</script>

<style>
	.toggle-icon {
		transition: transform 250ms ease;
		transform: rotate(0deg);
	}

	@media (prefers-reduced-motion: reduce) {
		.toggle-icon {
			transition: none;
		}
	}

	button[aria-expanded='true'] .toggle-icon {
		transform: rotate(180deg);
	}
</style>

<button
	aria-expanded={expanded}
	bind:this={buttonElement}
	class={`expand-button ${className}`}
	data-event-action="click"
	data-event-category={message}
	data-event-label="Expand button clicked"
	data-theme={theme}
	data-track="click"
	on:blur
	on:click
	on:focus
	type="button"
	disabled={disabled ? true : null}
>
	<span>
		{#if expanded}{expandedMessage}{:else}{message}{/if}</span
	>
	<span class="toggle-icon">
		<ChevronIcon />
	</span>
</button>
