<script lang="ts">
	import type { Writable } from 'svelte/store';
	import { getContext } from 'svelte';

	export let selected: Writable<any> = getContext('selected');
	export let currentFocus: Writable<string | undefined> = getContext('currentFocus')
	export let asChild = false;
	export let defaultPressed = false;
	export let pressed = false;
	export let disabled = false;
    export let value = '';
	export let name = '';

	export let labelClass = '';
	export let className = '';
	export let style = '';

	$: dataState = pressed ? 'on' : 'off';
	$: ariaPressed = pressed ? 'true' : ('false' as 'true' | 'false');

</script>

<label class={labelClass}>
	<input type="checkbox" bind:checked={pressed} role="switch" {name} {value}/>
<span
	class={className}
	{style}
	aria-pressed={ariaPressed}
	data-state={dataState}
	data-disabled={disabled}
>
	<slot />
</span>
</label>

<style>
	label input {
		opacity: 0;
		width: 0px;
		height: 0px;
		position: absolute;
	}
</style>
