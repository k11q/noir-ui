<script lang="ts">
	import type { Writable } from 'svelte/store';
	import { getContext } from 'svelte';

	let className = '';

	let triggerButton: Writable<HTMLElement> = getContext('triggerButton');
	let open: Writable<boolean> = getContext('open');
    let highlighted: Writable<string> = getContext('highlighted');
    let selected: Writable<string> = getContext('selected');
	let menuPosition: Writable<{x:number, y:number}> = getContext('menuPosition');

	const openDialog = (e: MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
		open.set(true);
		menuPosition.set({x: e.clientX, y:e.clientY})
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

	export {className as class}
</script>

<button
	bind:this={$triggerButton}
	on:contextmenu={openDialog}
    on:keydown={handleKeydown}
	type="button"
	role="combobox"
	aria-expanded={$open}
	data-state={$open ? 'open' : 'closed'}
	class={className}
>
	<slot />
</button>
