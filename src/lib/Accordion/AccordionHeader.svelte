<script lang="ts">
	import { getContext } from "svelte";
	import type { Writable } from "svelte/store";

	let className = ''
	export {className as class}
	export let style:string | undefined = undefined

	const value:string = getContext('value')
	const currentExpanded: Writable<string | string[]> = getContext('currentExpanded');
	const rootAccordion: Writable<HTMLElement> = getContext('rootAccordion');
	let currentButton: HTMLElement;
	const type:"single" | "multiple" = getContext('type');

	//toggle expanded
	function toggleExpanded(){
		if(type === 'single'){
			if($currentExpanded===value){
				currentExpanded.set('')
			}else{
				currentExpanded.set(value)
			}
			
		} else if(type === 'multiple'){
			if($currentExpanded.indexOf(value) !== -1){
				const array = $currentExpanded
			const index = $currentExpanded.indexOf(value);
			array.splice(index, 1);
			$currentExpanded = [...array]
			console.log(1)
			}else {
				$currentExpanded=[...$currentExpanded,(value)]
				console.log(2)
			}
			
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

<button bind:this={currentButton} on:click={toggleExpanded} on:keydown={handleKeydown} class={className} data-state={(type === 'single' &&$currentExpanded===value) || (type === 'multiple' && $currentExpanded.indexOf(value)!==-1) ?'open':'closed'} aria-expanded={$currentExpanded===value?'true':'false'} data-noir-collection-item {style}>
<slot />
</button>

<style>
	button:focus {
		outline:none;
	}
</style>