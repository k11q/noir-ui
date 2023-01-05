<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import { setContext } from 'svelte';

    export let expanded: Writable<boolean> = writable(false);
    export let defaultExpanded = false
    export let className = '';
    let rootAccordion: Writable<HTMLElement | null> = writable(null);

    setContext('defaultExpanded', defaultExpanded)
    setContext('expanded', expanded)
    setContext('rootAccordion',rootAccordion)
</script>

<div class={className} bind:this={$rootAccordion}>
<slot />
</div>