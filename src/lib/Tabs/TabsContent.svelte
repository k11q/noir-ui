<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	let selected: Writable<string | undefined> = getContext('selected');
	export let value: string | undefined = undefined;

	let className = '';
	export { className as class };
</script>

<div class={className} role="tabpanel" data-state={$selected === value ? 'active' : 'inactive'} hidden={$selected === value ? null : true} tabindex=0>
	{#if $selected === value}
		<slot />
	{/if}
</div>

<style>
    div[hidden] {
        display: none;
    }
</style>


