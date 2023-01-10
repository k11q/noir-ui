<script lang="ts">
	import { getContext, setContext } from "svelte";
	import type { Writable } from "svelte/store";

	export let value = ''
	export let disabled = false	

	const currentExpanded: Writable<string> = getContext('currentExpanded');

	setContext('value', value)

	let className = ''
	export {className as class}
	export let style:string | undefined = undefined
</script>

<div class={className} data-state={$currentExpanded===value?'open':'closed'} {style}>
<slot />
</div>