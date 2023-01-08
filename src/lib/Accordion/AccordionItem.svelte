<script lang="ts">
	import { getContext, setContext } from "svelte";
	import type { Writable } from "svelte/store";

	let className = ''
	export let value = ''

	setContext('value', value)

	let currentExpanded: Writable<string> = getContext('currentExpanded');

	export {className as class}
</script>

<div class={className} data-state={$currentExpanded===value?'open':'closed'}>
<slot />
</div>