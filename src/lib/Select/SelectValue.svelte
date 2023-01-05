<script lang="ts">
    import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
    import { capitalise } from '$lib/utils/capitalise';
    
    export let placeholder = ''
    export let selected: Writable<string> = getContext('selected');

</script>

{#if $selected}
<span>{capitalise($selected)}</span>
{:else}
<span style="opacity: 0.4;">{capitalise(placeholder)}</span>
{/if}