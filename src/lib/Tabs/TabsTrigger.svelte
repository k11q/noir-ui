<script lang="ts">
	import type { Writable } from 'svelte/store';
	import { createEventDispatcher, getContext } from 'svelte';
	
	const dispatch = createEventDispatcher();
	
	export let selected: Writable<any> = getContext('selected');
	export let value: any = $selected.value;
	export let className = '';
	export let label = 'tab';

	let currentButton:HTMLElement;
	let rootTabEl: Writable<HTMLElement> = getContext('elemTabGroup');
	
	function onClickHandler(value: any): void {
		dispatch('click', value);
		selected.set(value);
	}

	function onKeyDown(event: any): void {
		dispatch('keydown', event);
		if (['Enter', 'Space'].includes(event.code)) {
			
			event.target.click();
		}

		const allTabs = [...$rootTabEl.querySelectorAll('[data-noir-collection-item]')]
		const currentButtonIndex = allTabs.indexOf(currentButton)

		if(event.key === 'ArrowRight'){
			event.preventDefault()
			if(allTabs[currentButtonIndex+1]){
				allTabs[currentButtonIndex+1].focus()
			} else {
				allTabs[0].focus()
			}
		}
		if(event.key === 'ArrowLeft'){
			event.preventDefault()
			if(allTabs[currentButtonIndex-1]){
				allTabs[currentButtonIndex-1].focus()
			} else {
				allTabs[allTabs.length-1].focus()
			}
		}
	}
	
	$: isSelected = value == $selected;
	$: state = (value == $selected ? 'active' : 'inactive') as 'active' | 'inactive'

</script>

<button
	bind:this={currentButton}
	class={className}
	on:click={() => {
		onClickHandler(value);
	}}
	on:keydown={onKeyDown}
	role="tab"
	tabindex="0"
	data-testid="tab"
	data-state={state}
	aria-selected={isSelected}
	data-noir-collection-item
>
	<!-- Slot: Default -->
	{#if $$slots.default}<slot />{/if}
</button>

