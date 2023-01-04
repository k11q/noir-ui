<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	export let className = '';
	export let selected: Writable<any> = getContext('selected');
	export let value: string;
	export let checked = false;

	$: ariaSelected = $selected === value ? 'true' : 'false';
	$: state = $selected === value ? 'checked' : 'unchecked';
</script>

<div
	class={className}
	role="option"
	aria-selected={ariaSelected}
	aria-labelledby={value}
	data-state={state}
	tabindex="0"
	on:click
	on:keydown
	on:keyup
	on:keypress
>
	<input hidden type="checkbox" {value} bind:group={$selected} />
	<slot />
</div>
