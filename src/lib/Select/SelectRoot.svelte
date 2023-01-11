<script lang="ts">
	import { useClickOutside } from '../utils/click-outside';
	import { trapFocus } from '../utils/trap-focus';
	import { writable, type Writable } from 'svelte/store';
	import { setContext } from 'svelte';
	import { portal } from '../Portal/Portal.svelte';

    export let value: Writable<string | undefined> = writable(undefined);
    export let highlighted: Writable<string | undefined> = writable(undefined);
    export let defaultValue = ''
	export let open: Writable<boolean> = writable(false);
    export let defaultOpen = false
    export let dir: "ltr" | "rtl" = "ltr"
    export let name = ''
    export let disabled = false;
    export let required = false;

    let portalElement: Writable<HTMLElement | null> = writable(null);
	let triggerButton: Writable<HTMLElement | null> = writable(null);

    setContext('selected', value)
    setContext('open', open)
    setContext('portalElement', portalElement)
    setContext('triggerButton', triggerButton)
    setContext('highlighted', highlighted)

</script>

<slot />