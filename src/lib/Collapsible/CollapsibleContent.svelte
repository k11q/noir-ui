<script lang="ts">
	import { getContext } from "svelte";
	import type { Writable } from "svelte/store";

	const open:Writable<boolean> = getContext('open')
</script>

{#if $open}
<slot />
{/if}