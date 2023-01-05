<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { Check } from 'lucide-svelte';
	import { capitalise } from '$lib/utils/capitalise';
	import { trapFocus } from '$lib/utils/trap-focus';

	export let className = '';
	export let selected: Writable<any> = getContext('selected');
	export let value: string;
	export let checked = false;
	export let open: Writable<boolean> = getContext('open');

	let highlighted: Writable<any> = getContext('highlighted');
	let optionElement: HTMLElement;

	$: document.activeElement === optionElement ? console.log(document.activeElement) : '';

	function changeSelected() {
		selected.set(value);
		open.set(false);
	}

	function setHighlighted() {
		highlighted.set(value);
	}

	function removeHighlighted() {
		highlighted.set(undefined);
	}

</script>

<div
	bind:this={optionElement}
	class={className}
	role="option"
	aria-selected={$selected === value ? 'true' : 'false'}
	aria-labelledby={value}
	data-state={$selected === value ? 'checked' : 'unchecked'}
	data-highlighted={$highlighted === value}
	data-value={value}
	tabindex="0"
	on:click={changeSelected}
	on:mouseenter={setHighlighted}
	on:mouseleave={removeHighlighted}
	on:keyup
	on:keypress
	style="display:flex; padding-left:25px; position:relative; align-items-center; cursor:default;"
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
</style>
