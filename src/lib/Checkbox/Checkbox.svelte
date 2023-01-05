<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import { setContext } from 'svelte';

	export let className = '';
	export let defaultChecked = false;
	export let checked: Writable<boolean> = writable(false);
	export let onCheckedChange: (checked: boolean | 'indeterminate') => void;
	export let disabled = false;
	export let required = false;
	export let name = '';
	export let value = '';
	export let id = '';

	let checkboxButton: HTMLElement;

	setContext('checked', checked);

	function toggleCheck() {
		checked.set(!$checked);
	}

	$: defaultChecked ? checked.set(true) : '';

	function handleChange() {
		if (document.activeElement === checkboxButton) {
			return;
		} else {
			checkboxButton.focus();
		}
	}
	
</script>

	<input
		type="checkbox"
		{id}
		bind:checked={$checked}
		on:change={handleChange}
		value="on"
		aria-hidden="true"
		tabindex="-1"
		style="width: 0px; height:0px; position: absolute;"
	/>
	<button
	bind:this={checkboxButton}
	class={className}
	value="on"
	on:click={toggleCheck}
	role="checkbox"
	aria-checked={$checked}
	data-state={$checked ? 'checked' : 'unchecked'}
>
	<span>
		<slot />
	</span>
</button>

<style>
	input:not(:checked) + button > span {
		display: none;
	}
</style>
