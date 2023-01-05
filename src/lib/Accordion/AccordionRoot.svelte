<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import { setContext } from 'svelte';

    export let currentExpanded: Writable<string> = writable('');
    export let defaultExpanded = ''
    export let className = '';

    setContext('defaultExpanded', defaultExpanded)
    setContext('currentExpanded', currentExpanded)
</script>

<div class={className}>
<slot />
</div>