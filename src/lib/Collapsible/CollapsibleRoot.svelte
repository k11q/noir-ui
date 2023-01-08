<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import { setContext } from 'svelte';

    //PROPS
    //#1 default open
    export let defaultOpen: boolean | undefined = undefined

    //#2 open value
    export let open: Writable<boolean | undefined> = writable(defaultOpen);
    
    //#3 on open change
    //TODO: add openchange callback function props

    //#4 disabled
    export let disabled: boolean | undefined = undefined;


    let rootAccordion: Writable<HTMLElement | null> = writable(null);
    
    //exposing class
    let className = '';
    export {className as class}
    //passing props down
    setContext('open', open)
    setContext('rootAccordion',rootAccordion)
</script>

<div class={className} bind:this={$rootAccordion}>
<slot />
</div>