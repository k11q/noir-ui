<script lang="ts">
	import { getContext } from "svelte";
	import type { Writable } from "svelte/store";

	let open:Writable<boolean> = getContext('open')
	let currentButton: HTMLElement;

	function toggleOpen(){
		open.set(!$open)
	}

	function handleKeydown(e: KeyboardEvent) {
        if(e.keyCode === 32 || e.key === 'Enter'){
			e.preventDefault()
            toggleOpen()
        }
	}

	let className = ''
	export {className as class}
</script>

<button bind:this={currentButton} on:click={toggleOpen} on:keydown={handleKeydown} class={className} data-state={$open?'open':'closed'} aria-expanded={$open?'true':'false'} data-noir-collection-item>
<slot />
</button>