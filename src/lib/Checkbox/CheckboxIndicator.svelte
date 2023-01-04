<script lang="ts">
	import { getContext } from "svelte";
	import type { Writable } from "svelte/store";

    export let checked: Writable<boolean> = getContext('checked');
</script>

{#if $checked}
<slot />
{/if}