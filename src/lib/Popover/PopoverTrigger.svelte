<script lang="ts">
	import type { Writable } from 'svelte/store';
	import { getContext } from 'svelte';

	const triggerButton: Writable<HTMLElement> = getContext('triggerButton');
	const open: Writable<boolean> = getContext('open');

	function openDialog(e: MouseEvent) {
		e.preventDefault();
		open.set(true);
	};

	function handleKeydown(e: KeyboardEvent) {
	}

	let className = '';
	export {className as class}
</script>

<button
	bind:this={$triggerButton}
	on:click={openDialog}
    on:keydown={handleKeydown}
	type="button"
	aria-haspopup="dialog"
	aria-expanded={$open}
	data-state={$open ? 'open' : 'closed'}
	class={className}
>
	<slot />
</button>