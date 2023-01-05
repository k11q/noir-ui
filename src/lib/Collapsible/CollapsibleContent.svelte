<script lang="ts">
	import { getContext, setContext } from "svelte";
	import type { Writable } from "svelte/store";

	let expanded:Writable<boolean> = getContext('expanded')

</script>

{#if $expanded}
<slot />
{/if}