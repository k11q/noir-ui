<script lang="ts">
	import { useClickOutside } from '$lib/utils/click-outside';
	import { trapFocus } from '$lib/utils/trap-focus';
	import type { Writable } from 'svelte/store';
	import { getContext } from 'svelte';
	import { portal } from '../Portal/Portal.svelte';

	export let open: Writable<boolean> = getContext('open');
	let triggerButton: Writable<HTMLElement> = getContext('triggerButton');
	export let className = '';

	let popoverPortal: HTMLElement;
	let menuLeft = 0;
	let menuTop = 0;

	const closeDialog = () => {
		open.set(false);
		$triggerButton.focus();
	};

	$: !$open ? console.log('dropdownclosed') : ''

	$: if (popoverPortal) {
		if ($open) {
			menuLeft =
				$triggerButton.getBoundingClientRect().left +
				$triggerButton.getBoundingClientRect().width / 2 -
				popoverPortal.getBoundingClientRect().width / 2;
			menuTop = $triggerButton.getBoundingClientRect().bottom;

			trapFocus(popoverPortal);
			document.querySelector('body')!.style.pointerEvents = 'none';

			window.addEventListener('mousedown', closeDialogWhenClickOutside);
			window.addEventListener('mouseup', clearEvents);
			window.addEventListener('wheel', updatePosition);

			function clearEvents() {
				window.removeEventListener('mousedown', closeDialogWhenClickOutside);
				window.removeEventListener('mouseup', clearEvents);
			}
		} else {
			document.querySelector('body').style.pointerEvents = '';
			window.removeEventListener('wheel', updatePosition);
		}

		function closeDialogWhenClickOutside(e: MouseEvent) {
			const clickOutside = useClickOutside(e, popoverPortal);
			e.preventDefault();
			e.stopPropagation();
			if (clickOutside) {
				closeDialog();
			}
		}
	}

	function updatePosition(e: WheelEvent){
		menuLeft =
				$triggerButton.getBoundingClientRect().left +
				$triggerButton.getBoundingClientRect().width / 2 -
				popoverPortal.getBoundingClientRect().width / 2;
		menuTop = $triggerButton.getBoundingClientRect().bottom;
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			closeDialog()
		}
	}

</script>

{#if $open === true}
	<div
		bind:this={popoverPortal}
		use:portal={'body'}
		role="dialog"
		aria-modal="true"
		on:keydown={handleKeydown}
		style="position: fixed; left: 0px; top: 0px; transform: translate3d({menuLeft}px, {menuTop}px, 0px); min-width: max-content; z-index: auto; transform-origin:118.5px -5px; pointer-events:auto"
	>
		<div class={className} role="listbox" aria-expanded={$open} style="margin-top:8px">
			<slot />
		</div>
		<div style="background-color:white; height:8px; position:absolute; inset:0px;margin-top:4px;  aspect-ratio: 1/1; margin-left:auto; margin-right:auto; transform:rotate(45deg);"/>
	</div>
{/if}
