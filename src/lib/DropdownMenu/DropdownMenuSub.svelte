<script lang="ts">
	import { getContext, setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';

    export let defaultOpen = false
    export let open: Writable<boolean> = writable(defaultOpen);

    setContext('open', open);


</script>

	<slot />
