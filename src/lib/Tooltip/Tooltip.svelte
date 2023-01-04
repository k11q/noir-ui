<script lang="ts">
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
	let hover = false;
	let showTooltip: NodeJS.Timeout;

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

	const openDialog = () => {
		hover = true;
	};

	const closeDialog = () => {
		hover = false;
		clearTimeout(showTooltip);
		open = false;
	};

	$: hover
		? (showTooltip = setTimeout(() => {
				open = true;
		  }, delayDuration))
		: '';

	$: if (dialogElement) {
		if (open) {
			window.addEventListener('scroll', watchPosition);

			window.addEventListener('mousedown', closeDialogWhenClickOutside);
			window.addEventListener('mouseup', clearEvents);

			function clearEvents() {
				window.removeEventListener('mousedown', closeDialogWhenClickOutside);
				window.removeEventListener('mouseup', clearEvents);
			}
		}

		function closeDialogWhenClickOutside(e: MouseEvent) {
			e.preventDefault();
			e.stopPropagation();
		}

		function watchPosition() {
			menuLeft = triggerButton.getBoundingClientRect().left;
			menuTop = triggerButton.getBoundingClientRect().bottom;
		}
	}
</script>

<button
	bind:this={triggerButton}
	on:mouseenter={openDialog}
	on:mouseleave={closeDialog}
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
		use:portal={'body'}
		role="dialog"
		aria-modal="true"
		style="position: fixed; left: 0px; top: 0px; transform: translate3d({menuLeft}px, {menuTop}px, 0px); min-width: max-content; z-index: auto; transform-origin:118.5px -5px; pointer-events:auto"
	>
		<div class=" bg-black rounded text-white text-sm flex flex-col justify-between mt-2">
			<slot name="content" />
		</div>
		<div class="bg-black h-2 rotate-45 aspect-square mx-auto absolute inset-0 mt-1" />
	</div>
{/if}
