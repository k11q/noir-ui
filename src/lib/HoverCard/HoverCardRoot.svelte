<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import { setContext } from 'svelte';

    export let defaultOpen = false;

    export let open: Writable<boolean> = writable(defaultOpen);

    //TODO: add openchange callback

    //TODO: utilise this
    export let openDelay = 700;

     //TODO: utilise this
    export let closeDelay = 500;

    const hoverCardPortal: Writable<HTMLElement | null> = writable(null);
	const triggerButton: Writable<HTMLElement | null> = writable(null);

    setContext('open', open)
    setContext('hoverCardPortal', hoverCardPortal)
    setContext('triggerButton', triggerButton)
</script>

<slot />