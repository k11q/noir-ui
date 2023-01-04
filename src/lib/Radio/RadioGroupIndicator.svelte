<script lang="ts">
	import { getContext } from "svelte";
	import type { Writable } from "svelte/store";

    export let selected: Writable<string> = getContext('selected');

    let value:string = getContext('value');
</script>

{#if $selected === value}
<slot />
{/if}