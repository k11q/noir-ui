<script lang="ts">
	import { getContext, setContext } from "svelte";
	import { writable, type Writable } from "svelte/store";

	export let className = ''
	let expanded:Writable<boolean> = getContext('expanded')
	let rootAccordion: Writable<HTMLElement> = getContext('rootAccordion');
	let currentButton: HTMLElement;

	function toggleExpanded(){
		expanded.set(!$expanded)
	}

	function handleKeydown(e: KeyboardEvent) {
        if(e.keyCode === 32 || e.key === 'Enter'){
			e.preventDefault()
            toggleExpanded()
        }
		const allAccordion = [...$rootAccordion.querySelectorAll('[data-noir="accordion"]')]
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

</script>

<button bind:this={currentButton} on:click={toggleExpanded} on:keydown={handleKeydown} class={className} data-state={$expanded?'open':'closed'} aria-expanded={$expanded?'true':'false'} data-noir='accordion'>
<slot />
</button>

<style>
	button:focus {
		outline:none;
	}
</style>