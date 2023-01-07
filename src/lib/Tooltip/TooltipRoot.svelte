<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import { setContext } from 'svelte';

    export let open: Writable<boolean> = writable(false);
    export let defaultOpen = false

    let tooltipPortal: Writable<HTMLElement | null> = writable(null);
	let triggerButton: Writable<HTMLElement | null> = writable(null);

    setContext('open', open)
    setContext('tooltipPortal', tooltipPortal)
    setContext('triggerButton', triggerButton)

</script>

<slot />