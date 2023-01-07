<script lang="ts">
	import { useClickOutside } from '$lib/utils/click-outside';
	import { trapFocus } from '$lib/utils/trap-focus';
	import type { Writable } from 'svelte/store';
	import { getContext } from 'svelte';
	import { portal } from '../Portal/Portal.svelte';

	export let open: Writable<boolean> = getContext('open');
	let triggerButton: Writable<HTMLElement> = getContext('triggerButton');
	let hoverCardPortal: Writable<HTMLElement> = getContext('hoverCardPortal');
	export let className = '';

	let menuLeft = 0;
	let menuTop = 0;
	let position = 'bottom';

	const closeDialog = () => {
		open.set(false);
		$triggerButton.focus();
	};

	$: !$open ? console.log('dropdownclosed') : '';

	$: if ($hoverCardPortal) {
		if ($open) {
			const originLeft =
				$triggerButton.getBoundingClientRect().left +
				$triggerButton.getBoundingClientRect().width / 2 -
				$hoverCardPortal.getBoundingClientRect().width / 2;

			const originTop = $triggerButton.getBoundingClientRect().bottom + 8;

			const portalRect = $hoverCardPortal.getBoundingClientRect();

			if (
				originLeft + portalRect.width < window.innerWidth &&
				originTop + portalRect.height < window.innerHeight
			) {
				menuLeft = originLeft;
				menuTop = originTop;
				position = 'bottom';
			} else if (
				originLeft + portalRect.width > window.innerWidth &&
				originTop + portalRect.height < window.innerHeight
			) {
				menuLeft = originLeft - portalRect.width;
				menuTop = originTop;
				position = 'bottom';
			} else if (
				originLeft + portalRect.width < window.innerWidth &&
				originTop + portalRect.height > window.innerHeight
			) {
				menuLeft = originLeft;
				menuTop =
					originTop - portalRect.height - $triggerButton.getBoundingClientRect().height - 16;
				position = 'top';
			} else {
				menuLeft = originLeft - portalRect.width;
				menuTop =
					originTop - portalRect.height - $triggerButton.getBoundingClientRect().height - 16;
				position = 'top';
			}

			window.addEventListener('wheel', updatePosition);

		} else {
			window.removeEventListener('wheel', updatePosition);
		}
	}

	function updatePosition(e: WheelEvent) {
		const originLeft =
			$triggerButton.getBoundingClientRect().left +
			$triggerButton.getBoundingClientRect().width / 2 -
			$hoverCardPortal.getBoundingClientRect().width / 2;

		const originTop = $triggerButton.getBoundingClientRect().bottom + 8;

		const portalRect = $hoverCardPortal.getBoundingClientRect();

		if (
			originLeft + portalRect.width < window.innerWidth &&
			originTop + portalRect.height < window.innerHeight
		) {
			menuLeft = originLeft;
			menuTop = originTop;
			position = 'bottom';
		} else if (
			originLeft + portalRect.width > window.innerWidth &&
			originTop + portalRect.height < window.innerHeight
		) {
			menuLeft = originLeft - portalRect.width;
			menuTop = originTop;
			position = 'bottom';
		} else if (
			originLeft + portalRect.width < window.innerWidth &&
			originTop + portalRect.height > window.innerHeight
		) {
			menuLeft = originLeft;
			menuTop = originTop - portalRect.height - $triggerButton.getBoundingClientRect().height - 16;
			position = 'top';
		} else {
			menuLeft = originLeft - portalRect.width;
			menuTop = originTop - portalRect.height - $triggerButton.getBoundingClientRect().height - 16;
			position = 'top';
		}
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			closeDialog();
		}
	}
</script>

{#if $open === true}
	<div
		bind:this={$hoverCardPortal}
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
			style="pointer-events: auto; position:relative"
		>
			<slot />
			<div
				style="background-color:white; height:8px; position:absolute; inset:0px;{position ==
				'bottom'
					? 'margin-top:-4px'
					: 'bottom: 0px; margin-bottom:-4px; top:auto'};  aspect-ratio: 1/1; margin-left:auto; margin-right:auto; transform:rotate(45deg);"
			/>
		</div>
	</div>
{/if}
