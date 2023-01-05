<script>
	import { slide } from 'svelte/transition';

	export let checked = false;
	export let defaultChecked = false;
	export let disabled = false;
	export let required = false;
	export let name = '';
	export let value = '';
	export let labelClass = '';

</script>

<label class={labelClass}>
	<input type="checkbox" bind:checked role="switch" {name} {value}/>
	<span transition:slide/>
</label>

<style>
	label {
		position: relative;
		display: inline-block;
		width: 42px;
		height: 25px;
	}

	label input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	label> span {
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

	label> span:before {
		position: absolute;
		content: '';
		height: 19px;
		width: 19px;
		left: 3px;
		bottom: 3px;
		background-color: white;
		-webkit-transition: 0.2s;
		transition: 0.2s;
		border-radius: 50%;
	}

	input:checked + span {
		background-color: black;
	}

	input:checked + span {
		box-shadow: 0 0 1px black;
	}

	input:checked + span:before {
		-webkit-transform: translateX(17px);
		-ms-transform: translateX(17px);
		transform: translateX(17px);
	}
</style>
