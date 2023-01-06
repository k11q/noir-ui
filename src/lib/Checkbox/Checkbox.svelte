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
	export let labelClass = '';

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

<label class={labelClass}>
	<input type="checkbox" {id} bind:checked={$checked} {value} {name} aria-hidden="true" />
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
	<slot />
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
