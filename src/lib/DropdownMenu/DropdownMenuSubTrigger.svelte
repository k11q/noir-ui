<script lang="ts">
	import { getContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	import { Check } from 'lucide-svelte';
    import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function dispatchOnChange() {
        open.set(false)
        $triggerButton.focus()
		dispatch('change', {
		});
	}

    const value = 'random123'
    const open: Writable<boolean> = getContext('open');
	const triggerButton: Writable<HTMLElement> = getContext('triggerButton');
	const highlighted: Writable<any> = getContext('highlighted');
	let optionElement: HTMLElement;

	function setHighlighted() {
		highlighted.set(value);
	}

	function removeHighlighted() {
		highlighted.set(undefined);
	}

	$: if($highlighted === value){
		if(optionElement){
            optionElement.focus()
		}
	}

    let className = '';
    export {className as class}

</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div
	bind:this={optionElement}
	class={className}
    id={value}
	on:mouseenter={setHighlighted}
	on:mouseleave={removeHighlighted}
	on:keyup
	on:keypress
	tabindex="{$highlighted === value ? 0 : -1}"
	role="menuitem"
	data-noir-collection-item
    aria-haspopup="menu"
    aria-expanded="false"
	data-highlighted={$highlighted === value}
	data-value={value}
>
	<slot />
</div>

<style>
	div[data-noir-collection-item]:focus{
		outline:none
	}
</style>
