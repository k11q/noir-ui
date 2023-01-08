<script lang="ts">
	import { useClickOutside } from '$lib/utils/click-outside';
	import { trapFocus } from '$lib/utils/trap-focus';
	import type { Writable } from 'svelte/store';
	import { getContext } from 'svelte';
	import { portal } from '../Portal/Portal.svelte';

	// TODO: onOpenAutoFocus
	// TODO: onCloseAutoFocus
	//TODO: onEscapeKeyDown
	// TODO: onEscapeKeyDown
	//TODO: onPointerDownOutside
	//TODO: onFocusOutside
	//TODO: onInteractOutside
	export let side: 'top' | 'right' | 'bottom' | 'left' = 'top';
	export let sideOffset = 0;
	export let align: 'start' | 'center' | 'end' = 'center';
	export let alignOffset = 0;
	export let avoidCollisions = true;
	export let collisionBoundry: Element | null | Array<Element | null> = [];
	export let collisionPadding = 0;
	export let arrow = true;
	export let arrowWidth = 10;
	export let arrowHeight = 10;
	export let arrowPadding = 0;
	export let sticky: 'partial' | 'always' = 'partial';
	export let hideWhenDetached = false;

	const open: Writable<boolean> = getContext('open');
	const triggerButton: Writable<HTMLElement> = getContext('triggerButton');
	let popoverPortal: HTMLElement;
	let menuLeft = 0;
	let menuTop = 0;

	const closeDialog = () => {
		open.set(false);
		$triggerButton.focus();
	};

	$: !$open ? console.log('dropdownclosed') : '';

	$: if (popoverPortal) {
		if ($open) {
			const originLeft =
				$triggerButton.getBoundingClientRect().left +
				$triggerButton.getBoundingClientRect().width / 2 -
				popoverPortal.getBoundingClientRect().width / 2;

			const originTop = $triggerButton.getBoundingClientRect().bottom + 8;

			const portalRect = popoverPortal.getBoundingClientRect();

			if (
				originLeft + portalRect.width < window.innerWidth &&
				originTop + portalRect.height < window.innerHeight
			) {
				menuLeft = originLeft;
				menuTop = originTop;
				side = 'bottom';
			} else if (
				originLeft + portalRect.width > window.innerWidth &&
				originTop + portalRect.height < window.innerHeight
			) {
				menuLeft = originLeft - portalRect.width;
				menuTop = originTop;
				side = 'bottom';
			} else if (
				originLeft + portalRect.width < window.innerWidth &&
				originTop + portalRect.height > window.innerHeight
			) {
				menuLeft = originLeft;
				menuTop =
					originTop -
					portalRect.height -
					$triggerButton.getBoundingClientRect().height -
					16;
				side = 'top';
			} else {
				menuLeft = originLeft - portalRect.width;
				menuTop =
					originTop -
					portalRect.height -
					$triggerButton.getBoundingClientRect().height -
					16;
				side = 'top';
			}

			trapFocus(popoverPortal);
			document.querySelector('body')!.style.pointerEvents = 'none';

			window.addEventListener('mousedown', closeDialogWhenClickOutside);
			window.addEventListener('wheel', updateside);
		} else {
			window.removeEventListener('wheel', updateside);
			window.removeEventListener('mousedown', closeDialogWhenClickOutside);
			document.querySelector('body')!.style.pointerEvents = '';
		}
	}
	function closeDialogWhenClickOutside(e: MouseEvent) {
		const clickOutside = useClickOutside(e, popoverPortal);
		console.log('clickoutside');

		if (clickOutside) {
			e.preventDefault();
			e.stopPropagation();
			closeDialog();
		}
	}

	function updateside(e: WheelEvent) {
		console.log('updateside');
		const originLeft =
			$triggerButton.getBoundingClientRect().left +
			$triggerButton.getBoundingClientRect().width / 2 -
			popoverPortal.getBoundingClientRect().width / 2;

		const originTop = $triggerButton.getBoundingClientRect().bottom + 8;

		const portalRect = popoverPortal.getBoundingClientRect();

		if (
			originLeft + portalRect.width < window.innerWidth &&
			originTop + portalRect.height < window.innerHeight
		) {
			menuLeft = originLeft;
			menuTop = originTop;
			side = 'bottom';
		} else if (
			originLeft + portalRect.width > window.innerWidth &&
			originTop + portalRect.height < window.innerHeight
		) {
			menuLeft = originLeft - portalRect.width;
			menuTop = originTop;
			side = 'bottom';
		} else if (
			originLeft + portalRect.width < window.innerWidth &&
			originTop + portalRect.height > window.innerHeight
		) {
			menuLeft = originLeft;
			menuTop =
				originTop -
				portalRect.height -
				$triggerButton.getBoundingClientRect().height -
				16;
			side = 'top';
		} else {
			menuLeft = originLeft - portalRect.width;
			menuTop =
				originTop -
				portalRect.height -
				$triggerButton.getBoundingClientRect().height -
				16;
			side = 'top';
		}
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			closeDialog();
		}
	}

	let className = '';
	export { className as class };
</script>

{#if $open === true}
	<div
		bind:this={popoverPortal}
		use:portal={'body'}
		data-side={side}
		data-align={align}
		data-state={$open?'open':'closed'}
		role="dialog"
		on:keydown={handleKeydown}
		style="position: fixed; left: 0px; top: 0px; transform: translate3d({menuLeft}px, {menuTop}px, 0px); min-width: max-content; z-index: auto; transform-origin:118.5px -5px; pointer-events:auto"
	>
		<div class={className} role="listbox" aria-expanded={$open} style="position:relative">
			<slot />
			<div
				style="background-color:white; height:8px; position:absolute; inset:0px;{side ==
				'bottom'
					? 'margin-top:-4px'
					: 'bottom: 0px; margin-bottom:-4px; top:auto'};  aspect-ratio: 1/1; margin-left:auto; margin-right:auto; transform:rotate(45deg);"
			/>
		</div>
	</div>
{/if}
