<script lang="ts">
	import { getContext, setContext } from "svelte";
	import type { Writable } from "svelte/store";

	const value:string = getContext('value')
	const currentExpanded: Writable<string | string[]> = getContext('currentExpanded');
	const type:"single" | "multiple" = getContext('type');
</script>

{#if type === 'single' && $currentExpanded===value}
<div data-state={$currentExpanded===value?'open':'closed'} role="region">
<slot />
</div>
{/if}

{#if type === 'multiple' && $currentExpanded.indexOf(value)!==-1}
<div data-state={$currentExpanded===value?'open':'closed'} role="region">
<slot />
</div>
{/if}