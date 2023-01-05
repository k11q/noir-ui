<script lang="ts">
	import type { Writable } from 'svelte/store';
	import { getContext } from 'svelte';

	export let className = '';

	let open: Writable<boolean> = getContext('open');
	let duration:number = getContext('duration');

	const openDialog = (e: MouseEvent) => {
		e.preventDefault();
		open.set(true);
		setTimeout(() => {
			open.set(false);
		}, duration);
	};
</script>

<button
	on:click={openDialog}
	type="button"
	role="combobox"
	aria-expanded={$open}
	data-state={$open ? 'open' : 'closed'}
	class={className}
	aria-haspopup="dialog"
>
	<slot />
</button>
