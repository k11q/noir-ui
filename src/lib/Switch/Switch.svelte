<script lang="ts">
	import { slide } from 'svelte/transition';
	import { writable, type Writable } from 'svelte/store';

	export let checked: Writable<boolean> = writable(false);
	export let defaultChecked = false;
	export let disabled = false;
	export let required = false;
	export let name = '';
	export let value = '';
	export let id = '';
	export let labelClass = '';

	let switchElement: HTMLElement;

	function toggleChecked() {
		checked.set(!$checked);
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			e.preventDefault();
			toggleChecked();
		}
	}
</script>

<label>
<input
	type="checkbox"
	bind:checked={$checked}
	on:keydown={handleKeydown}
	{id}
	{name}
	{value}
	aria-hidden="true"
/>
<span
bind:this={switchElement}
	class={labelClass}
	{value}
	role="checkbox"
	aria-checked={$checked}
	data-state={$checked ? 'checked' : 'unchecked'}
>
	<span><span></span></span>
</span>
</label>

<style>
	input + span {
		position: relative;
		display: inline-block;
		width: 42px;
		height: 25px;
	}

	input {
		opacity: 0;
		width: 0;
		height: 0;
		position: absolute;
	}

	input + span > span {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #ccc;
		-webkit-transition: 0.2s;
		transition: 0.2s;
		border-radius: 34px;
	}

	input + span > span>span {
		position: absolute;
		height: 19px;
		width: 19px;
		left: 3px;
		bottom: 3px;
		background-color: white;
		-webkit-transition: 0.2s;
		transition: 0.2s;
		border-radius: 50%;
	}

	input:checked + span > span {
		background-color: black;
	}

	input:checked + span > span {
		box-shadow: 0 0 1px black;
	}
	input:checked + span > span>span {
		-webkit-transform: translateX(17px);
		-ms-transform: translateX(17px);
		transform: translateX(17px);
	}

</style>
