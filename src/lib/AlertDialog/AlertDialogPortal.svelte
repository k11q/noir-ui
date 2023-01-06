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
	let triggerButton: Writable<HTMLElement> = getContext('triggerButton');

	const closeDialog = () => {
		open.set(false);
		$triggerButton.focus();
	};

	$: if ($alertDialogElement) {
		if ($open) {
			console.log('test2')
			trapFocus($alertDialogElement);
			document.querySelector('body')!.style.pointerEvents = 'none';
			window.addEventListener('wheel', lockScroll, { passive: false });
			window.addEventListener('keydown', lockKeydown);
		} else {
			document.querySelector('body')!.style.pointerEvents = '';
			window.removeEventListener('wheel', lockScroll);
			window.removeEventListener('keydown', lockKeydown);

			if ($triggerButton) {
				$triggerButton.focus();
			}
		}
	}

	function lockScroll(e: WheelEvent) {
		e.preventDefault();
	}

	function lockKeydown(e: KeyboardEvent) {
		if(e.key === 'ArrowDown' || e.key === 'ArrowUp'){
		const activeElement = document.activeElement;
		const inputs = ['input', 'select', 'textarea'];

		if (activeElement &&
			inputs.indexOf(activeElement.tagName.toLowerCase()) === -1
		) {
			e.preventDefault();
		}}
		if(e.key === 'Escape'){
			closeDialog()
		}
		
	}
</script>

{#if $open === true}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		use:portal={'body'}
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
		style="pointer-events:auto"
	>
		<slot />
	</div>
{/if}
