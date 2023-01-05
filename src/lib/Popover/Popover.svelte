<script lang="ts">
	import { useClickOutside } from '$lib/utils/click-outside';
	import { trapFocus } from '$lib/utils/trap-focus';
	import { portal } from '../Portal/Portal.svelte';

    type Side = 'top' | 'bottom' | 'left' | 'right';
	type Align = 'start' | 'center' | 'end';

	export let buttonClass = '';
	export let delayDuration = 700;
	export let skipDelayDuration = 300;
	export let disableHoverableContent = false;

	export let defaultOpen = false;
	export let open = false;

	export let side: Side = 'top';
	export let sideOffset = 0;
	export let align: Align = 'center';
	export let alignOffset = 0;

	export let avoidCollisions = true;
	export let collisionBoundary: Element | null | Array<Element | null> = null;
	export let collisionPadding = 0;

	export let arrow = true;
	export let arrowWidth = 12;
	export let arrowHeight = 12;

	let dialogElement: HTMLElement;
	let triggerButton: HTMLElement;

	$: menuLeft = dialogElement
		? triggerButton
			? triggerButton.getBoundingClientRect().left +
			  triggerButton.getBoundingClientRect().width / 2 -
			  dialogElement.children[0].getBoundingClientRect().width / 2
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

		
	}

	function disableScroll(e: WheelEvent) {
		if(triggerButton && dialogElement){
			menuLeft = triggerButton.getBoundingClientRect().left +
			  triggerButton.getBoundingClientRect().width / 2 -
			  dialogElement.children[0].getBoundingClientRect().width / 2;
			menuTop = triggerButton.getBoundingClientRect().bottom;
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
		style="position: fixed; left: 0px; top: 0px; transform: translate3d({menuLeft}px, {menuTop}px, 0px); min-width: max-content; z-index: auto; pointer-events:auto"
	>
    <div class="flex flex-col mt-2">
        <slot name="content" />
    </div>
    <div class="bg-white h-2 rotate-45 aspect-square mx-auto absolute inset-0 mt-1" />
	</div>
{/if}
