<script lang="ts">
	import type { Writable } from 'svelte/store';
	import { getContext } from 'svelte';
	import { portal } from '../Portal/Portal.svelte';
	import { trapFocus } from '$lib/utils/trap-focus';
	import { fade, fly } from 'svelte/transition';

	export let className = '';
	export let overlayClass = '';

	let open: Writable<boolean> = getContext('open');
	let position: string = getContext('position');
	let alertDialogElement: Writable<HTMLElement> = getContext('alertDialogElement');

	const closeDialog = () => {
		open.set(false);
	};

	$: if ($alertDialogElement) {
		if ($open) {
			trapFocus($alertDialogElement);
			window.addEventListener('wheel', lockScroll, { passive: false });
			window.addEventListener('keydown', lockKeydown);
		} else {
			window.removeEventListener('wheel', lockScroll);
			window.removeEventListener('keydown', lockKeydown);
		}
	}

	$: !$open ? console.log('closed') : '';

	function lockScroll(e: WheelEvent) {
		e.preventDefault();
	}

	function lockKeydown(e: KeyboardEvent) {
		const activeElement = document.activeElement;
		const inputs = ['input', 'select', 'textarea'];

		if (
			(e.key === 'ArrowDown' || e.key === 'ArrowUp') &&
			activeElement &&
			inputs.indexOf(activeElement.tagName.toLowerCase()) === -1
		) {
			e.preventDefault();
		}
	}
</script>

{#if $open === true}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		use:portal={'body'}
		on:click|preventDefault={closeDialog}
		role="dialog"
		aria-modal="true"
		class={overlayClass}
		transition:fade
		style="position: fixed; inset:0; left: {position === 'bottom-left' || position === 'top-left'
			? '20px'
			: ''}; top: {position === 'top-right' || position === 'top-left'
			? '20px'
			: ''};right: {position === 'bottom-right' || position === 'top-right'
			? '20px'
			: ''}; bottom: {position === 'bottom-right' || position === 'bottom-left'
			? '20px'
			: ''}; {position === 'center'
			? 'margin: auto;'
			: ''} min-width: max-content; z-index: auto; transform-origin:118.5px -5px; pointer-events:auto"
	/>
	<div
		in:fly={{ y: 60, duration: 200 }}
		out:fade={{ duration: 100 }}
		bind:this={$alertDialogElement}
		class={className}
		aria-expanded={$open}
		use:portal={'body'}
		role="dialog"
		aria-modal="true"
	>
		<slot />
	</div>
{/if}
