<script lang="ts">
	import { getContext, setContext } from "svelte";
	import type { Writable } from "svelte/store";

	export let className = ''
	let value:string = getContext('value')

	let currentExpanded: Writable<string> = getContext('currentExpanded');

	function toggleExpanded(){
		if($currentExpanded===value){
			currentExpanded.set('')
		}else {
			currentExpanded.set(value)
		}
		
	}

	function handleKeydown(e: KeyboardEvent) {
        if(e.keyCode === 32 || e.key === 'Enter'){
			e.preventDefault()
            toggleExpanded()
        } else return
	}

</script>

<button on:click={toggleExpanded} on:keydown={handleKeydown} class={className} data-state={$currentExpanded===value?'open':'closed'} aria-expanded={$currentExpanded===value?'true':'false'}>
<slot />
</button>

<style>
	button:focus {
		outline:none;
	}
</style>