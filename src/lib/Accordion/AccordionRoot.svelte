<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import { setContext } from 'svelte';

    //PROPS
    //props #1: default expanded value
	export let defaultExpanded: Writable<string> = writable('');

    //exposing class
    let className = '';
    export { className as class };

    //exposing style
    export let style = ''

    //utils
    const currentExpanded: Writable<string> = defaultExpanded;
	const rootAccordion: Writable<HTMLElement | null> = writable(null);

    //pass down props
	setContext('currentExpanded', currentExpanded);
	setContext('rootAccordion', rootAccordion);
</script>

<div class={className} bind:this={$rootAccordion} {style}>
	<slot />
</div>
