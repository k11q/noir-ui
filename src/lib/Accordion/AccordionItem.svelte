<script lang="ts">
	import { getContext, setContext } from "svelte";
	import type { Writable } from "svelte/store";

	//PROPS:
	//props #1: value
	export let value = ''

	//exposing class
	let className = ''
	export {className as class}

	//exposing style
	export let style:string | undefined = undefined

	//data
	const currentExpanded: Writable<string> = getContext('currentExpanded');

	//pass down props
	setContext('value', value)

</script>

<div class={className} data-state={$currentExpanded===value?'open':'closed'} {style}>
<slot />
</div>