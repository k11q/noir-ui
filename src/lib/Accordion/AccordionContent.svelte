<script lang="ts">
	import { getContext, setContext } from "svelte";
	import type { Writable } from "svelte/store";

	//PROPS: no props

	const value:string = getContext('value')
	const currentExpanded: Writable<string> = getContext('currentExpanded');
</script>

{#if $currentExpanded===value}
<div data-state={$currentExpanded===value?'open':'closed'} role="region">
<slot />
</div>
{/if}