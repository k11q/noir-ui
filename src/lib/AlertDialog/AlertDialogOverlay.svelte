<script lang="ts">
	import type { Writable } from 'svelte/store';
	import { getContext } from 'svelte';
	import { portal } from '../Portal/Portal.svelte';
	import { trapFocus } from '../utils/trap-focus';
	import { fade } from 'svelte/transition';

	let className = '';
	export {className as class}

	const open: Writable<boolean> = getContext('open');
	const position: string = getContext('position');
	const alertDialogElement: Writable<HTMLElement> = getContext('alertDialogElement');
	const triggerButton: Writable<HTMLElement> = getContext('triggerButton');

	//close dialog
	function closeDialog() {
		open.set(false);
		$triggerButton.focus();
	};

	//callback function to run when
	$: if ($alertDialogElement) {
		if ($open) {
			trapFocus($alertDialogElement);

			document.querySelector(
				'body'
			)!.style.pointerEvents = 'none';
			window.addEventListener('wheel', lockScroll, {
				passive: false
			});
			window.addEventListener('keydown', lockKeydown);
		} else {
			document.querySelector(
				'body'
			)!.style.pointerEvents = '';
			window.removeEventListener('wheel', lockScroll);
			window.removeEventListener('keydown', lockKeydown);

			if ($triggerButton) {
				$triggerButton.focus();
			}
		}
	}

	//prevent scroll
	function lockScroll(e: WheelEvent) {
		e.preventDefault();
	}

	//handle keydown
	function lockKeydown(e: KeyboardEvent) {
		if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
			const activeElement = document.activeElement;
			const inputs = ['input', 'select', 'textarea'];

			if (
				activeElement &&
				inputs.indexOf(
					activeElement.tagName.toLowerCase()
				) === -1
			) {
				e.preventDefault();
			}
		}
		if (e.key === 'Escape') {
			closeDialog();
		}
	}
</script>

{#if $open === true}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		use:portal={'body'}
		role="dialog"
		aria-modal="true"
		class={className}
		transition:fade={{ duration: 200 }}
		style="position: fixed; inset:0; left: {position ===
			'bottom-left' || position === 'top-left'
			? '20px'
			: ''}; top: {position === 'top-right' ||
		position === 'top-left'
			? '20px'
			: ''};right: {position === 'bottom-right' ||
		position === 'top-right'
			? '20px'
			: ''}; bottom: {position === 'bottom-right' ||
		position === 'bottom-left'
			? '20px'
			: ''}; {position === 'center'
			? 'margin: auto;'
			: ''} min-width: max-content; z-index: auto; transform-origin:118.5px -5px; pointer-events:auto"
	/>
{/if}
