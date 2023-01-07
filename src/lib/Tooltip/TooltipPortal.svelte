<script lang="ts">
	import { useClickOutside } from '$lib/utils/click-outside';
	import { trapFocus } from '$lib/utils/trap-focus';
	import type { Writable } from 'svelte/store';
	import { getContext } from 'svelte';
	import { portal } from '../Portal/Portal.svelte';

	export let open: Writable<boolean> = getContext('open');
	let triggerButton: Writable<HTMLElement> = getContext('triggerButton');
	let tooltipPortal: Writable<HTMLElement> = getContext('tooltipPortal');
	export let className = '';

	let menuLeft = 0;
	let menuTop = 0;
	let position = 'top';

	const closeDialog = () => {
		open.set(false);
		$triggerButton.focus();
	};

	$: !$open ? console.log('dropdownclosed') : '';

	$: if ($tooltipPortal) {
		if ($open) {
			const originLeft =
				$triggerButton.getBoundingClientRect().left +
				$triggerButton.getBoundingClientRect().width / 2 -
				$tooltipPortal.getBoundingClientRect().width / 2;

			const portalRect = $tooltipPortal.getBoundingClientRect();
			const originTop = $triggerButton.getBoundingClientRect().top - portalRect.height - 8;
			
			menuLeft = originLeft;
			console.log('origintop'+originTop)
				console.log('portalRect.height'+portalRect.height)

			if (originTop > 0) {
				menuTop = originTop;
				position = 'top';
			} else {
				menuTop = $triggerButton.getBoundingClientRect().bottom + 8;
				position = 'bottom';
			}

			window.addEventListener('mousedown', closeDialogWhenClickOutside);
			window.addEventListener('mouseup', clearEvents);
			window.addEventListener('wheel', closeDialogWhenScroll);

			function clearEvents() {
				window.removeEventListener('mousedown', closeDialogWhenClickOutside);
				window.removeEventListener('mouseup', clearEvents);
			}
		} else {
			window.removeEventListener('wheel', closeDialogWhenScroll);
		}

		function closeDialogWhenClickOutside(e: MouseEvent) {
			const clickOutside = useClickOutside(e, $tooltipPortal);
			e.preventDefault();
			e.stopPropagation();
			if (clickOutside) {
				closeDialog();
			}
		}
	}

	function closeDialogWhenScroll(e: WheelEvent) {
		open.set(false);
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			closeDialog();
		}
	}
</script>

{#if $open === true}
	<div
		bind:this={$tooltipPortal}
		use:portal={'body'}
		role="dialog"
		aria-modal="true"
		on:keydown={handleKeydown}
		style="position: fixed; left: 0px; top: 0px; transform: translate3d({menuLeft}px, {menuTop}px, 0px); min-width: max-content; z-index: auto; pointer-events:none"
	>
		<div
			class={className}
			role="listbox"
			aria-expanded={$open}
			style="position:relative; pointer-events: auto;"
		>
			<slot />
			<div
				style="background-color:black; height:8px; position:absolute; inset:0px;{position ==
				'bottom'
					? 'margin-top:-4px'
					: 'bottom: 0px; margin-bottom:-4px; top:auto'};  aspect-ratio: 1/1; margin-left:auto; margin-right:auto; transform:rotate(45deg);"
			/>
		</div>
	</div>
{/if}
