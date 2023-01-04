<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import { setContext } from 'svelte';

	export let selected: Writable<any> = writable('');
    export let className = '';
    export let defaultValue = '';

	setContext('selected', selected);
</script>

<div class={className} role="radiogroup" aria-label='radiogroup'>
	<slot />
</div>