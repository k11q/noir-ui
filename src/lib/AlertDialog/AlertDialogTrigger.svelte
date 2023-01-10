<script lang="ts">
	import type { Writable } from 'svelte/store';
	import { getContext } from 'svelte';

	let open: Writable<boolean> = getContext('open');
	let triggerButton: Writable<HTMLElement> = getContext('triggerButton');

	const openDialog = (e: MouseEvent) => {
		e.preventDefault()
		e.stopPropagation()
		open.set(true);
	};

	let className = '';
	export {className as class}
</script>

<button
	bind:this={$triggerButton}
	on:click={openDialog}
	type="button"
	aria-expanded={$open}
	data-state={$open ? 'open' : 'closed'}
	class={className}
	aria-haspopup="dialog"
	aria-label="Aria Name"
>
	<slot />
</button>
