<script lang="ts">
	import type { Writable } from 'svelte/store';
	import { getContext } from 'svelte';
	import { trapFocus } from '$lib/utils/trap-focus';

	export let className = '';

	let open: Writable<boolean> = getContext('open');
	let alertDialogElement: Writable<HTMLElement> = getContext('alertDialogElement');

	const openDialog = (e: MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
		open.set(true);
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
