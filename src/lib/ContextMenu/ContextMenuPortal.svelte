<script lang="ts">
	import { useClickOutside } from '$lib/utils/click-outside';
	import { trapFocus } from '$lib/utils/trap-focus';
	import { writable, type Writable } from 'svelte/store';
	import { getContext, setContext } from 'svelte';
	import { portal } from '../Portal/Portal.svelte';

	export let open: Writable<boolean> = getContext('open');
	export let selected: Writable<any> = getContext('selected');
	let triggerButton: Writable<HTMLElement> = getContext('triggerButton');
	export let className = '';

	let highlighted: Writable<any> = getContext('highlighted');
	let menuPosition: Writable<{x:number, y:number}> = getContext('menuPosition');
	let selectPortal: HTMLElement;
	let menuLeft = 0;
	let menuTop = 0;


	const closeDialog = () => {
		highlighted.set('');
		open.set(false);
	};

	$: !$open ? console.log('dropdownclosed') : ''

	$: if (selectPortal) {
		if ($open) {
			menuLeft = $menuPosition.x
			menuTop = $menuPosition.y;

			trapFocus(selectPortal);
			document.querySelector('body')!.style.pointerEvents = 'none';

			window.addEventListener('mousedown', closeDialogWhenClickOutside);
			window.addEventListener('wheel', closeDialog);
		} else {
			document.querySelector('body').style.pointerEvents = '';
			window.removeEventListener('mousedown', closeDialogWhenClickOutside);
			window.removeEventListener('wheel', closeDialog);
		}

		function closeDialogWhenClickOutside(e: MouseEvent) {
			const clickOutside = useClickOutside(e, selectPortal);
			if (clickOutside) {
				closeDialog();
			}
		}
	}

	function handleKeydown(e: KeyboardEvent) {
		e.preventDefault();
		const allOptions = [...selectPortal.querySelectorAll('[role="option"]')];

		if (e.key === 'ArrowDown') {
			const firstElement = selectPortal.querySelector('[role="option"]') as HTMLElement;

			if (selectPortal.querySelector('[data-highlighted="true"]')) {

				const highlightedElement = selectPortal.querySelector(
					'[data-highlighted="true"]'
				) as HTMLElement;
				
				const highlightedElementIndex = allOptions.indexOf(highlightedElement);

				if (highlightedElementIndex === allOptions.length - 1) {
					highlighted.set(firstElement.dataset.value);
				} else {
					highlighted.set(allOptions[highlightedElementIndex + 1].dataset.value);
				}
			} else {
				highlighted.set(firstElement.dataset.value);
			}
		}
		if (e.key === 'ArrowUp') {
			const lastElement = allOptions[allOptions.length - 1] as HTMLElement;

			if (selectPortal.querySelector('[data-highlighted="true"]')) {
				const highlightedElement = selectPortal.querySelector(
					'[data-highlighted="true"]'
				) as HTMLElement;
				
				const highlightedElementIndex = allOptions.indexOf(highlightedElement);

				if (highlightedElementIndex === 0) {
					highlighted.set(lastElement.dataset.value);
				} else {
					highlighted.set(allOptions[highlightedElementIndex - 1].dataset.value);
				}
			} else {
				highlighted.set(lastElement.dataset.value);
			}
		}

		if (e.keyCode === 32 || e.key === 'Enter') {
			if (highlighted) {
				selected.set($highlighted);
			}
			closeDialog()
		}

		if (e.key === 'Escape') {
			closeDialog()
		}
	}
</script>

{#if $open === true}
	<div
		bind:this={selectPortal}
		use:portal={'body'}
		role="dialog"
		aria-modal="true"
		on:keydown={handleKeydown}
		style="position: fixed; left: 0px; top: 0px; transform: translate3d({menuLeft}px, {menuTop}px, 0px); min-width: max-content; z-index: auto; pointer-events:auto"
	>
		<div class={className} role="listbox" aria-expanded={$open}>
			<slot />
		</div>
	</div>
{/if}
