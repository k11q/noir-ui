<script lang="ts">
    import type { Writable } from 'svelte/store';
	import { getContext } from 'svelte';

	let value: Writable<number> = getContext('value');

    export let rangeClass = ''
    export let trackerClass = ''
</script>

<span class={rangeClass}>
    <span class={trackerClass} style="right: {100 - $value}%" />
</span>