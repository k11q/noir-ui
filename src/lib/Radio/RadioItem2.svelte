<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import { setContext } from 'svelte';

	export let className = '';
	export let defaultChecked = false;
	 let checked: Writable<boolean> = writable(false);
    export let name = ''
	export let onCheckedChange: (checked: boolean | 'indeterminate') => void;
	export let disabled = false;
	export let required = false;
	export let value = '';
	export let id = '';
	export let labelClass = '';

	let checkboxButton: HTMLElement;

</script>

<label class={labelClass}>
	<input type="radio" {id} {value} {name} aria-hidden="true" />
	<span
		bind:this={checkboxButton}
		class='radio {className}'
		{value}
		role="radio"
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
