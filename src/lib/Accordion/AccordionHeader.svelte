<script lang="ts">
	import { getContext, setContext } from "svelte";
	import { writable, type Writable } from "svelte/store";

	let className = ''
	let value:string = getContext('value')
	let currentExpanded: Writable<string> = getContext('currentExpanded');
	let rootAccordion: Writable<HTMLElement> = getContext('rootAccordion');
	let currentButton: HTMLElement;

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
        }
		const allAccordion = [...$rootAccordion.querySelectorAll('[data-noir-collection-item]')]
		const currentButtonIndex = allAccordion.indexOf(currentButton)
		if(e.key === 'ArrowDown'){
			console.log('arrowdown')
			e.preventDefault()
			if(allAccordion[currentButtonIndex+1]){
				allAccordion[currentButtonIndex+1].focus()
			} else {
				allAccordion[0].focus()
			}
		}
		if(e.key === 'ArrowUp'){
			console.log('arrowdown')
			e.preventDefault()
			if(allAccordion[currentButtonIndex-1]){
				allAccordion[currentButtonIndex-1].focus()
			} else {
				allAccordion[allAccordion.length-1].focus()
			}
		}
	}

	export {className as class}
</script>

<button bind:this={currentButton} on:click={toggleExpanded} on:keydown={handleKeydown} class={className} data-state={$currentExpanded===value?'open':'closed'} aria-expanded={$currentExpanded===value?'true':'false'} data-noir-collection-item>
<slot />
</button>

<style>
	button:focus {
		outline:none;
	}
</style>