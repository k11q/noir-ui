<script lang="ts">
	import { useClickOutside } from '$lib/utils/click-outside';
	import { trapFocus } from '$lib/utils/trap-focus';
	import { portal } from '../Portal/Portal.svelte';

	export let open = false;
	export let buttonClass = '';

	let dialogElement: HTMLElement;
	let triggerButton: HTMLElement;

	$: menuLeft = dialogElement
		? triggerButton
			? triggerButton.getBoundingClientRect().left
			: 0
		: 0;
	$: menuTop = dialogElement
		? triggerButton
			? triggerButton.getBoundingClientRect().bottom
			: 0
		: 0;

	const openDialog = (e: MouseEvent) => {
		e.preventDefault();
		open = true;
	};

	const closeDialog = () => {
		open = false;
	};

	$: if (dialogElement) {
		if (open) {
			window.addEventListener('scroll', disableScroll);

			document.querySelector('body').style.pointerEvents = 'none';
			trapFocus(dialogElement);
			window.addEventListener('mousedown', closeDialogWhenClickOutside);
			window.addEventListener('mouseup', clearEvents);

			function clearEvents() {
				window.removeEventListener('mousedown', closeDialogWhenClickOutside);
				window.removeEventListener('mouseup', clearEvents);
			}
		} else {
			document.querySelector('body').style.pointerEvents = '';
		}

		function closeDialogWhenClickOutside(e: MouseEvent) {
			const clickOutside = useClickOutside(e, dialogElement.childNodes[0]);
			e.preventDefault();
			e.stopPropagation();
			if (clickOutside) {
				closeDialog();
			}
		}

		function disableScroll(e: WheelEvent) {
			menuLeft = triggerButton.getBoundingClientRect().left;
			menuTop = triggerButton.getBoundingClientRect().bottom;
			e.preventDefault();
			e.stopPropagation();
		}
	}
</script>

<button
	bind:this={triggerButton}
	on:click={openDialog}
	type="button"
	aria-haspopup="dialog"
	aria-expanded={open}
	class={buttonClass}
>
	<slot name="trigger" />
</button>

{#if open === true}
	<div
		bind:this={dialogElement}
		on:mousewheel|preventDefault|stopPropagation
		use:portal={'body'}
		role="dialog"
		aria-modal="true"
		style="position: fixed; left: 0px; top: 0px; transform: translate3d({menuLeft}px, {menuTop}px, 0px); min-width: max-content; z-index: auto; transform-origin:118.5px -5px; pointer-events:auto"
	>
		<slot name="menu" />
	</div>
{/if}
