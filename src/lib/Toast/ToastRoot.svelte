<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import { setContext } from 'svelte';

    export let open: Writable<boolean> = writable(false);
    export let defaultOpen = false
    export let position: 'bottom-right' | 'bottom-left' | 'top-left' | 'top-right' = setContext('position','bottom-right');
    export let duration = 2000;
    export let dir: "ltr" | "rtl" = "ltr"

    let value: Writable<string | undefined> = writable(undefined);
    let highlighted: Writable<string | undefined> = writable(undefined);
    let portalElement: Writable<HTMLElement | null> = writable(null);
	let triggerButton: Writable<HTMLElement | null> = writable(null);

    setContext('selected', value)
    setContext('open', open)
    setContext('portalElement', portalElement)
    setContext('triggerButton', triggerButton)
    setContext('highlighted', highlighted)
    setContext('duration',duration)

</script>

<slot />