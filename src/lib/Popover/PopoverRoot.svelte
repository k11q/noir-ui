<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import { setContext } from 'svelte';

    export let defaultOpen = false
    export let open: Writable<boolean> = writable(defaultOpen);
    
    //TODO: add openchange callback

    export let modal = false

	const triggerButton: Writable<HTMLElement | null> = writable(null);

    setContext('open', open)
    setContext('triggerButton', triggerButton)

</script>

<slot />