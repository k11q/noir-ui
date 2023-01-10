<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import { setContext } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	//PROPS:
	//#1: initial checked value
	export let defaultChecked = false;
	export let checked: Writable<boolean> = writable(false);
	export let disabled: boolean | undefined = undefined;
	export let required: boolean | undefined = undefined;
	export let name: string | undefined = undefined;
	export let value: string | undefined = undefined;

	//onchange event dispatcher
	function onCheckedChange() {
		dispatch('change', {
			checked: $checked
		});
	}

	let checkboxButton: HTMLElement;
	$: defaultChecked ? checked.set(true) : '';

	//exposing class
	let className = '';
	export { className as class };
	setContext('checked', checked);
</script>

<div
	bind:this={checkboxButton}
	class="checkbox {className}"
	{value}
	role="checkbox"
	aria-checked={$checked}
	data-state={$checked ? 'checked' : 'unchecked'}
>
	<input
		type="checkbox"
		bind:checked={$checked}
		{value}
		{name}
		aria-hidden="true"
		on:change={onCheckedChange}
		disabled={disabled ? true : null}
		required={required ? true : null}
	/>
	<span>
		<slot />
	</span>
</div>

<style>
	div {
		position: relative;
	}
	input:checked + span {
		display: contents;
	}
	input:not(:checked) + span {
		display: none;
	}

	input {
		opacity: 0;
		position: absolute;
		inset: 0;
	}
</style>
