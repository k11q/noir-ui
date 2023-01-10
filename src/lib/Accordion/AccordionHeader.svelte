<script lang="ts">
	import { getContext } from "svelte";
	import type { Writable } from "svelte/store";

	let className = ''
	export {className as class}
	export let style:string | undefined = undefined

	const value:string = getContext('value')
	const currentExpanded: Writable<string> = getContext('currentExpanded');
	const rootAccordion: Writable<HTMLElement> = getContext('rootAccordion');
	let currentButton: HTMLElement;

	//toggle expanded
	function toggleExpanded(){
		if($currentExpanded===value){
			currentExpanded.set('')
		}else {
			currentExpanded.set(value)
		}
	}

	//handle keydown events
	function handleKeydown(e: KeyboardEvent) {
        if(e.keyCode === 32 || e.key === 'Enter'){
			e.preventDefault()
            toggleExpanded()
        }

		const allAccordion = [...$rootAccordion.querySelectorAll('[data-noir-collection-item]')]
		const currentButtonIndex = allAccordion.indexOf(currentButton)

		if(e.key === 'ArrowDown'){
			e.preventDefault()
			if(allAccordion[currentButtonIndex+1]){
				allAccordion[currentButtonIndex+1].focus()
			} else {
				allAccordion[0].focus()
			}
		}

		if(e.key === 'ArrowUp'){
			e.preventDefault()
			if(allAccordion[currentButtonIndex-1]){
				allAccordion[currentButtonIndex-1].focus()
			} else {
				allAccordion[allAccordion.length-1].focus()
			}
		}
	}
</script>

<button bind:this={currentButton} on:click={toggleExpanded} on:keydown={handleKeydown} class={className} data-state={$currentExpanded===value?'open':'closed'} aria-expanded={$currentExpanded===value?'true':'false'} data-noir-collection-item {style}>
<slot />
</button>

<style>
	button:focus {
		outline:none;
	}
</style>