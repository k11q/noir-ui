<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import { setContext } from 'svelte';

    export let open: Writable<boolean> = writable(false);
    export let defaultOpen = false

    let hoverCardPortal: Writable<HTMLElement | null> = writable(null);
	let triggerButton: Writable<HTMLElement | null> = writable(null);

    setContext('open', open)
    setContext('hoverCardPortal', hoverCardPortal)
    setContext('triggerButton', triggerButton)

</script>

<slot />