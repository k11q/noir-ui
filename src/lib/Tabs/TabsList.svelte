<script lang="ts">
	import type { Writable } from 'svelte/store';
	import { setContext } from 'svelte';
	
	export let selected: Writable<any>;
	export let labeledby = '';
	export let className = ''
	export let label = '';
	
	setContext('selected', selected);
	
	let elemTabGroup: HTMLElement;

	function keydown(event: KeyboardEvent) {
		if (['Home', 'End'].includes(event.code)) {
			event.preventDefault();
			if (event.code === 'Home') {
				(elemTabGroup.children[0] as HTMLElement).focus();
			}
			if (event.code === 'End') {
				(elemTabGroup.children[elemTabGroup.children.length - 1] as HTMLElement).focus();
			}
		}
	}
	
</script>

<div
		bind:this={elemTabGroup}
		on:keydown={keydown}
		class={className}
		role="tablist"
		aria-labelledby={labeledby}
		aria-label={label}
	>
		<slot />
</div>