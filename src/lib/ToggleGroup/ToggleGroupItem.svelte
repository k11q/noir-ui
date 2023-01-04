<script lang="ts">
	import type { Writable } from 'svelte/store';
	import { getContext } from 'svelte';

	export let value = '';
	export let asChild = false;
	export let defaultPressed = false;
	export let pressed = false;
	export let disabled = false;
	export let selected: Writable<any> = getContext('selected');
	export let currentFocus: Writable<string | undefined> = getContext('currentFocus')
	export let className = '';
	export let style = '';

	$: dataState = ($selected === value ? 'on' : 'off') as 'on' | 'off';
	$: ariaPressed = ($selected === value ? 'true' : 'false') as 'true' | 'false';
	$: tabindex = ($selected === value ? 0 : -1) as 0 | -1;

	function toggleState() {
		pressed = !pressed;
		selected.set(value);
	}

</script>

<button
	class={className}
	{style}
	aria-pressed={ariaPressed}
	data-state={dataState}
	data-disabled={disabled}
	{tabindex}
	on:click={toggleState}
>
	<slot />
</button>
