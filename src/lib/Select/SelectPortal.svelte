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
	let menuHeight = 0;
	let initialMenuHeight = 0;

	const closeDialog = () => {
		highlighted.set('');
		open.set(false);
		$triggerButton.focus();
	};

	$: !$open ? console.log('selectclosed') : ''

	$: if (selectPortal) {
		if ($open) {
			const listBoxElRect = selectPortal.querySelector('[role="listbox"]').getBoundingClientRect()
			initialMenuHeight = listBoxElRect.height
			menuLeft =
				$triggerButton.getBoundingClientRect().left +
				$triggerButton.getBoundingClientRect().width / 2 -
				selectPortal.getBoundingClientRect().width / 2;

			if (selectedElement()) {
				let distance =
					selectedElement()!.getBoundingClientRect().top - selectPortal.getBoundingClientRect().top;
				const top = $triggerButton.getBoundingClientRect().top +
					$triggerButton.getBoundingClientRect().height / 2 -
					selectedElement()!.getBoundingClientRect().height / 2 -
					distance;
				if(top<0){
					menuTop = 0
					menuHeight = initialMenuHeight + top
				} else {
					menuTop = top
					menuHeight = initialMenuHeight
					
				}
					
			} else {
				const firstOption = selectPortal.querySelector('[data-noir-collection-item]');
				if (firstOption) {
					let distance =
						firstOption.getBoundingClientRect().top - selectPortal.getBoundingClientRect().top;
					const top =
						$triggerButton.getBoundingClientRect().top +
						$triggerButton.getBoundingClientRect().height / 2 -
						firstOption.getBoundingClientRect().height / 2 -
						distance;
					
						if(top<0){
							menuTop = 0
					menuHeight = initialMenuHeight + top
					
				} else {
					menuTop = top
					menuHeight = initialMenuHeight
				}
				}
			}

			window.addEventListener('scroll', updatePortalPosition);

			trapFocus(selectPortal);
			document.querySelector('body')!.style.pointerEvents = 'none';

			window.addEventListener('mousedown', closeDialogWhenClickOutside);
		} else {
			document.querySelector('body').style.pointerEvents = '';
			window.removeEventListener('mousedown', closeDialogWhenClickOutside);
			window.removeEventListener('scroll', updatePortalPosition);
		}
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
					const firstOption = selectPortal.querySelector('[data-noir-collection-item]');
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

	function selectedElement() {
		if (selectPortal.querySelector('[data-state="checked"]')) {
			return selectPortal.querySelector('[data-state="checked"]');
		} else return null;
	}

	function handleKeydown(e: KeyboardEvent) {
		e.preventDefault();
		const allOptions = [...selectPortal.querySelectorAll('[data-noir-collection-item]')];

		if (e.key === 'ArrowDown') {
			const firstElement = selectPortal.querySelector('[data-noir-collection-item]') as HTMLElement;

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
			closeDialog();
		}

		if (e.key === 'Escape') {
			closeDialog();
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
		style="position: fixed;display:flex; {menuHeight>0? `height: ${menuHeight}px;`: ''} top:0px flex-direction: column; flex: 1; left: 0px; top: 0px; transform: translate3d({menuLeft}px, {menuTop}px, 0px); min-width: max-content; z-index: auto; pointer-events:auto"
	>
		<div class={className} role="listbox" aria-expanded={$open} style=" margin-top:auto">
			<slot />
		</div>
	</div>
{/if}
