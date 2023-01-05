<script lang="ts">
	import type { Writable } from 'svelte/store';
	import { getContext } from 'svelte';

	export let className = '';

	let triggerButton: Writable<HTMLElement> = getContext('triggerButton');
	let open: Writable<boolean> = getContext('open');

	const openDialog = (e: MouseEvent) => {
		e.preventDefault();
		open.set(true);
	};

	function handleKeydown(e: KeyboardEvent) {
	}
</script>

<button
	bind:this={$triggerButton}
	on:click={openDialog}
    on:keydown={handleKeydown}
	type="button"
	role="combobox"
	aria-expanded={$open}
	data-state={$open ? 'open' : 'closed'}
	class={className}
>
	<slot />
</button>