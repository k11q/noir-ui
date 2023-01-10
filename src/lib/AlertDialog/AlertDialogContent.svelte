<script lang="ts">
	import type { Writable } from 'svelte/store';
	import { getContext } from 'svelte';
	import { portal } from '../Portal/Portal.svelte';
	import { trapFocus } from '$lib/utils/trap-focus';
	import { fade, scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let className = '';
	export {className as class}
	export let style:string | undefined = undefined

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
	<div
		in:scale={{ duration: 200, easing: quintOut }}
		out:fade={{ duration: 100 }}
		bind:this={$alertDialogElement}
		class={className}
		style={`pointer-events:auto; ${style}`}
		aria-expanded={$open}
		use:portal={'body'}
		role="dialog"
		aria-modal="true"
	>
		<slot />
	</div>
{/if}
