<script lang="ts">
	import type { Writable } from 'svelte/store';
	import { getContext } from 'svelte';

	export let className = '';
	export let delayDuration = 700;

	let triggerButton: Writable<HTMLElement> = getContext('triggerButton');
	let open: Writable<boolean> = getContext('open');
	let hover = false;
	let showTooltip: NodeJS.Timeout;

	const openDialog = () => {
		hover = true;
	};

	const closeDialog = () => {
		hover = false;
		clearTimeout(showTooltip);
		setTimeout(()=>{
			open.set(false);
		}, 400)
	};

	$: hover
		? (showTooltip = setTimeout(() => {
				open.set(true);
		  }, delayDuration))
		: '';
	
	$: !$open ? hover = false : ''

</script>

<button
	bind:this={$triggerButton}
	on:mouseenter={openDialog}
	on:mouseleave={closeDialog}
	type="button"
	aria-expanded={$open}
	data-state={$open ? 'open' : 'closed'}
	class={className}
>
	<slot />
</button>

<style>
	button {
		display: inline;
	}
</style>