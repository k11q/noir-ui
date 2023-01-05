<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import { setContext } from 'svelte';

    export let open: Writable<boolean> = writable(false);
    export let defaultOpen = false
    export let dir: "ltr" | "rtl" = "ltr"

    let portalElement: Writable<HTMLElement | null> = writable(null);
	let triggerButton: Writable<HTMLElement | null> = writable(null);

    setContext('open', open)
    setContext('portalElement', portalElement)
    setContext('triggerButton', triggerButton)

</script>

<slot />