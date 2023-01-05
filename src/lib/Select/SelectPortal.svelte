<script lang="ts">
	import { useClickOutside } from '$lib/utils/click-outside';
	import { trapFocus } from '$lib/utils/trap-focus';
	import { writable, type Writable } from 'svelte/store';
	import { getContext, setContext } from 'svelte';
	import { portal } from '../Portal/Portal.svelte';

	export let open: Writable<boolean> = getContext('open');
	export let selected: Writable<any> = getContext('selected');
	export let triggerButton: Writable<HTMLElement> = getContext('triggerButton');
	export let className = '';

	let highlighted: Writable<any> = getContext('highlighted');
	let selectPortal: HTMLElement;
	let menuLeft = 0;
	let menuTop = 0;

	const closeDialog = () => {
		open.set(false);
	};

	$: if (selectPortal) {
		if ($open) {
			menuLeft =
				$triggerButton.getBoundingClientRect().left +
				$triggerButton.getBoundingClientRect().width / 2 -
				selectPortal.getBoundingClientRect().width / 2;

			if (selectedElement()) {
				let distance =
					selectedElement()!.getBoundingClientRect().top - selectPortal.getBoundingClientRect().top;
				menuTop =
					$triggerButton.getBoundingClientRect().top +
					$triggerButton.getBoundingClientRect().height / 2 -
					selectedElement()!.getBoundingClientRect().height / 2 -
					distance;
			} else {
				const firstOption = selectPortal.querySelector('[role="option"]');
				if (firstOption) {
					let distance =
						firstOption.getBoundingClientRect().top - selectPortal.getBoundingClientRect().top;
					menuTop =
						$triggerButton.getBoundingClientRect().top +
						$triggerButton.getBoundingClientRect().height / 2 -
						firstOption.getBoundingClientRect().height / 2 -
						distance;
				}
			}

			window.addEventListener('scroll', updatePortalPosition);

			trapFocus(selectPortal);
			document.querySelector('body')!.style.pointerEvents = 'none';

			window.addEventListener('mousedown', closeDialogWhenClickOutside);
			window.addEventListener('mouseup', clearEvents);

			function clearEvents() {
				window.removeEventListener('mousedown', closeDialogWhenClickOutside);
				window.removeEventListener('mouseup', clearEvents);
			}
		} else {
			document.querySelector('body').style.pointerEvents = '';
			window.removeEventListener('scroll', updatePortalPosition);
		}

		function closeDialogWhenClickOutside(e: MouseEvent) {
			const clickOutside = useClickOutside(e, selectPortal);
			e.preventDefault();
			e.stopPropagation();
			if (clickOutside) {
				closeDialog();
			}
		}

		function updatePortalPosition() {
			if (selectPortal && $triggerButton) {
				menuLeft =
					$triggerButton.getBoundingClientRect().left +
					$triggerButton.getBoundingClientRect().width / 2 -
					selectPortal.getBoundingClientRect().width / 2;
				if (selectedElement()) {
					let distance =
						selectedElement()!.getBoundingClientRect().top -
						selectPortal.getBoundingClientRect().top;
					menuTop =
						$triggerButton.getBoundingClientRect().top +
						$triggerButton.getBoundingClientRect().height / 2 -
						selectedElement()!.getBoundingClientRect().height / 2 -
						distance;
				} else {
					const firstOption = selectPortal.querySelector('[role="option"]');
					if (firstOption) {
						let distance =
							firstOption.getBoundingClientRect().top - selectPortal.getBoundingClientRect().top;
						menuTop =
							$triggerButton.getBoundingClientRect().top +
							$triggerButton.getBoundingClientRect().height / 2 -
							firstOption.getBoundingClientRect().height / 2 -
							distance;
					}
				}
			}
		}
	}

	function selectedElement() {
		if (selectPortal.querySelector('[data-state="checked"]')) {
			return selectPortal.querySelector('[data-state="checked"]');
		} else return null;
	}

	function handleKeydown(e: KeyboardEvent) {
		e.preventDefault();
		if (e.key === 'ArrowDown') {
			const firstElement = selectPortal.querySelector('[data-highlighted="false"]') as HTMLElement;
			if (selectPortal.querySelector('[data-highlighted="true"]')) {
				const highlightedElement = selectPortal.querySelector(
					'[data-highlighted="true"]'
				) as HTMLElement;
				const allOptions = [
					...selectPortal.querySelectorAll('[data-highlighted]')
				] as HTMLElement[];
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
			const allOptions = [...selectPortal.querySelectorAll('[data-highlighted]')];

			const lastElement = allOptions[allOptions.length - 1] as HTMLElement;
			if (selectPortal.querySelector('[data-highlighted="true"]')) {
				const highlightedElement = selectPortal.querySelector(
					'[data-highlighted="true"]'
				) as HTMLElement;
				const allOptions = [
					...selectPortal.querySelectorAll('[data-highlighted]')
				] as HTMLElement[];
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
			highlighted.set('');
			open.set(false);
			$triggerButton.focus();
		}

		if (e.key === 'Escape') {
			highlighted.set('');
			open.set(false);
			$triggerButton.focus();
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
		style="position: fixed; left: 0px; top: 0px; transform: translate3d({menuLeft}px, {menuTop}px, 0px); min-width: max-content; z-index: auto; transform-origin:118.5px -5px; pointer-events:auto"
	>
		<div class={className} role="listbox" aria-expanded={$open}>
			<slot />
		</div>
	</div>
{/if}
