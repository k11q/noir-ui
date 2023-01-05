<script lang="ts">
	import { getContext, setContext } from "svelte";
	import type { Writable } from "svelte/store";

	let value:string = getContext('value')
	let currentExpanded: Writable<string> = getContext('currentExpanded');

</script>

{#if $currentExpanded===value}
<slot />
{/if}