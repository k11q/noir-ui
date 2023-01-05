<script lang="ts">
    import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
    import { capitalise } from '$lib/utils/capitalise';
    
    export let placeholder = ''
    export let selected: Writable<string> = getContext('selected');

</script>

<span>{$selected ? capitalise($selected) : capitalise(placeholder)}</span>