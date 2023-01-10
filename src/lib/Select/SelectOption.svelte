<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { Check } from 'lucide-svelte';
	import { capitalise } from '$lib/utils/capitalise';

	export let className = '';
	export let selected: Writable<any> = getContext('selected');
	export let value: string;
	export let checked = false;
	export let open: Writable<boolean> = getContext('open');

	let triggerButton: Writable<HTMLElement> = getContext('triggerButton');
	let highlighted: Writable<any> = getContext('highlighted');
	let optionElement: HTMLElement;

	function changeSelected(e: MouseEvent) {
		e.preventDefault();
		selected.set(value);
		open.set(false);
		$triggerButton.focus();
	}

	function setHighlighted() {
		highlighted.set(value);
	}

	function removeHighlighted() {
		highlighted.set(undefined);
	}

	$: if($highlighted === value){
		if(optionElement){
		optionElement.focus()
		}
	}
</script>

<div
	bind:this={optionElement}
	class={className}
	role="option"
	data-noir-collection-item
	aria-selected={$selected === value ? 'true' : 'false'}
	aria-labelledby={value}
	data-state={$selected === value ? 'checked' : 'unchecked'}
	data-highlighted={$highlighted === value}
	data-value={value}
	tabindex={$highlighted === value ? 0 : -1}
	on:mousedown={changeSelected}
	on:mouseenter={setHighlighted}
	on:mouseleave={removeHighlighted}
	on:keyup
	on:keypress
>
	<input hidden type="checkbox" {value} />
	{#if $selected === value}
		<span
			style="position: absolute; left:0px; top:0px; display:inline-flex; align-items:center; justify-content:center; width:25px; height:100%"
		>
			<Check size="13" />
		</span>
	{/if}
	{capitalise(value)}
</div>

<style>
	div:focus {
		outline: none;
	}
	div {
		user-select: none;
	}
</style>
