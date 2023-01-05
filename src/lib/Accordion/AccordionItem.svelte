<script lang="ts">
	import { getContext, setContext } from "svelte";
	import type { Writable } from "svelte/store";

	export let className = ''
	export let value = ''

	setContext('value', value)

	let currentExpanded: Writable<string> = getContext('currentExpanded');

</script>

<div class={className} data-state={$currentExpanded===value?'open':'closed'}>
<slot />
</div>