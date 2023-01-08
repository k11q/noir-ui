<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import { setContext } from 'svelte';

    export let defaultOpen:boolean | undefined = undefined;

    export let open: Writable<boolean> = writable(defaultOpen);

    export let modal:boolean = true;

    export let id:string|undefined = undefined

    export let position: 'bottom-right' | 'bottom-left' | 'top-left' | 'top-right' | 'center' = setContext('position','center');

    export let dir: "ltr" | "rtl" = "ltr";

    let alertDialogElement: Writable<HTMLElement | null> = writable(null);
	let triggerButton: Writable<HTMLElement | null> = writable(null);

    setContext('open', open)
    setContext('alertDialogElement', alertDialogElement)
    setContext('triggerButton', triggerButton)

</script>

<slot />