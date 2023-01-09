<script lang="ts">
    import { setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';

    export let selected: Writable<string | undefined> = writable(undefined);
    export let name: string | undefined = undefined;

	setContext('selected', selected);
    setContext('name', name);

    let className = ''
    export {className as class}
</script>

<div class={className}>
    <slot />
</div>