<script lang="ts">
	import type { Writable } from 'svelte/store';
	import { createEventDispatcher, getContext } from 'svelte';
	
	const dispatch = createEventDispatcher();
	
	export let selected: Writable<any> = getContext('selected');
	export let value: any = $selected.value;
	export let className = '';
	export let label = 'tab';
	
	function onClickHandler(value: any): void {
		/** @event {{ value }} click - Fires on tab click event.  */
		dispatch('click', value);
		// Update Selected
		selected.set(value);
	}
	function onKeyDown(event: any): void {
		/** @event {{ event }} keydown - Fires on tab keydown event.  */
		dispatch('keydown', event);
		// Enter/Space to toggle element
		if (['Enter', 'Space'].includes(event.code)) {
			event.preventDefault();
			event.target.click();
		}
	}
	// Reactive Classes
	$: isSelected = value == $selected;
	$: state = (value == $selected ? 'active' : 'inactive') as 'active' | 'inactive'

</script>

<button
	class={className}
	on:click={() => {
		onClickHandler(value);
	}}
	on:keydown={onKeyDown}
	on:keyup
	on:keypress
	role="tab"
	tabindex="0"
	data-testid="tab"
	data-state={state}
	aria-selected={isSelected}
>
	<!-- Slot: Default -->
	{#if $$slots.default}<slot />{/if}
</button>

