<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import { setContext } from 'svelte';

    
    export let defaultExpanded = ''
    export let currentExpanded: Writable<string> = writable(defaultExpanded);
    let className = '';
    let rootAccordion: Writable<HTMLElement | null> = writable(null);

    setContext('defaultExpanded', defaultExpanded)
    setContext('currentExpanded', currentExpanded)
    setContext('rootAccordion',rootAccordion)

    export {className as class}
</script>

<div class={className} bind:this={$rootAccordion}>
<slot />
</div>