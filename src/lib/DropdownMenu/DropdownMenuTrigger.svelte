<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import { getContext, setContext } from 'svelte';

	export let className = '';

	let triggerButton: Writable<HTMLElement> = getContext('triggerButton');
	let open: Writable<boolean> = getContext('open');
    let highlighted: Writable<string> = getContext('highlighted');
    let selected: Writable<string> = getContext('selected');

	const openDialog = (e: MouseEvent) => {
		e.preventDefault();
		open.set(true);
	};

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
			e.preventDefault();
			open.set(true);
            if($selected){
                highlighted.set($selected)
            }
		}
        if(e.keyCode === 32 || e.key === 'Enter'){
            if($selected){
                highlighted.set($selected)
            }
        }
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
