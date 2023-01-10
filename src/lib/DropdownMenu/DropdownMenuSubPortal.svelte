<script lang="ts">
	import { useClickOutside } from '$lib/utils/click-outside';
	import { trapFocus } from '$lib/utils/trap-focus';
	import { writable, type Writable } from 'svelte/store';
	import { getContext, setContext } from 'svelte';
	import { portal } from '../Portal/Portal.svelte';

	export let open: Writable<boolean> = getContext('open');
	let className = '';
	export {className as class}

	let triggerButton: Writable<HTMLElement> = getContext('subTrigger');
	let highlighted: Writable<any> = getContext('highlighted');
	let highlightedElement: Writable<HTMLElement> = getContext('highlightedElement');
	let selectPortal: HTMLElement;
	let menuLeft = 0;
	let menuTop = 0;
	let position = 'bottom'
	let action: Writable<any> = writable(undefined)
	
	setContext('action', action)

	const closeDialog = () => {
		highlighted.set('');
		open.set(false);
		$triggerButton.focus();
	};

	$: !$open ? console.log('dropdownclosed') : ''

	$: if (selectPortal) {
		if ($open) {
			const originLeft = $triggerButton.getBoundingClientRect().left +
				$triggerButton.getBoundingClientRect().width / 2 -
				selectPortal.getBoundingClientRect().width / 2;
			
			const originTop =$triggerButton.getBoundingClientRect().bottom+8;

			const portalRect = selectPortal.getBoundingClientRect()

			if(originLeft+portalRect.width<window.innerWidth && originTop+portalRect.height<window.innerHeight){
				menuLeft = originLeft
				menuTop = originTop;
				position = 'bottom'
			}else if(originLeft+portalRect.width>window.innerWidth && originTop+portalRect.height<window.innerHeight){
				menuLeft = originLeft-portalRect.width
				menuTop = originTop;
				position = 'bottom'
			}else if(originLeft+portalRect.width<window.innerWidth && originTop+portalRect.height>window.innerHeight){
				menuLeft = originLeft
				menuTop = originTop-portalRect.height-$triggerButton.getBoundingClientRect().height-16;
				position = 'top'
			}else {
				menuLeft = originLeft-portalRect.width
				menuTop = originTop-portalRect.height-$triggerButton.getBoundingClientRect().height-16;
				position = 'top'
			}

			trapFocus(selectPortal);
			const firstElement = selectPortal.querySelector('[data-noir-collection-item]')
			if(firstElement){
				highlighted.set(firstElement.dataset.value)
			}
			document.querySelector('body')!.style.pointerEvents = 'none';

			window.addEventListener('mousedown', closeDialogWhenClickOutside);
			window.addEventListener('wheel', disableScroll,{passive:false});

		} else {
			document.querySelector('body').style.pointerEvents = '';
			window.removeEventListener('wheel', disableScroll);
			window.removeEventListener('mousedown', closeDialogWhenClickOutside);
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

	function disableScroll(e: WheelEvent){
		e.preventDefault()
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
				if(selectPortal){
				let highlightedElement = selectPortal.querySelector('[data-highlighted="true"]')
				if(highlightedElement){
				let highlightedInput = highlightedElement.querySelector('input');
				if(highlightedInput){
					const currentCheckedState = highlightedInput.checked
					action.set({id:$highlighted, value:!currentCheckedState})
					console.log('')
				}else {
					console.log('')
					action.set({id:$highlighted, value:'custom action'})
				}
			}}
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
		style="position: fixed; left: 0px; top: 0px; transform: translate3d({menuLeft}px, {menuTop}px, 0px); min-width: max-content; z-index: auto; transform-origin:118.5px -5px; pointer-events:auto"
	>
		<div class={className} role="listbox" aria-expanded={$open} style="position: relative">
			<slot />
			<div style="background-color:white; height:8px; position:absolute; inset:0px;{position=='bottom'?'margin-top:-4px':'bottom: 0px; margin-bottom:-4px; top:auto'};  aspect-ratio: 1/1; margin-left:auto; margin-right:auto; transform:rotate(45deg);"/>
		</div>
	</div>
{/if}
