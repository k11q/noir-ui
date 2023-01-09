<script lang="ts">
	import { getContext, setContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	export let selected: Writable<string | undefined> = getContext('selected');
    export let name: string | undefined = getContext('name');

	setContext('selected', selected);
    setContext('name', name);

	let className = '';
	export { className as class };
</script>

<div class={className} role="tablist">
	<slot />
</div>
