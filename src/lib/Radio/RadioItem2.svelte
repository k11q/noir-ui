<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	
	export let defaultChecked = false;
	let checked: Writable<boolean> = writable(false);
    export let name: string | undefined = undefined
	export let value: string | undefined = undefined
	export let disabled: boolean | undefined = undefined
	export let required: boolean | undefined = undefined

	let checkboxButton: HTMLElement;

	export let labelClass = '';
	let className = '';
	export {className as class}
</script>

<label class={labelClass}>
	<input type="radio" {value} {name} aria-hidden="true" />
	<span
		bind:this={checkboxButton}
		class={className}
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
