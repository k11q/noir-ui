<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import { setContext } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	//PROPS:
	//#1: initial checked value
	export let defaultChecked = false;

	//#2: checked value
	export let checked: Writable<boolean> = writable(false);

	//#3 disabled
	export let disabled: boolean | undefined = undefined;

	//#4 required
	export let required: boolean | undefined = undefined;

	//#5 name
	export let name: string | undefined = undefined;

	//#6 value
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
	export {className as class};
	setContext('checked', checked);
</script>

<label>
	<input type="checkbox" bind:checked={$checked} {value} {name} aria-hidden="true" on:change={onCheckedChange}/>
	<span
		bind:this={checkboxButton}
		class='checkbox {className}'
		{value}
		role="checkbox"
		aria-checked={$checked}
		data-state={$checked ? 'checked' : 'unchecked'}
	>
		<span>
			<slot name="indicator" />
		</span>
	</span>
</label>

<style>
	input:checked + span > span {
		display: contents;
	}
	input:not(:checked) + span > span {
		display: none;
	}

	input {
		opacity: 0;
		width: 0;
		height: 0;
		position: absolute;
	}
</style>
