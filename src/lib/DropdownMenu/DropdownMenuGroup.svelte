<script lang="ts">
	import { setContext } from "svelte";
    import { capitalise } from '../utils/capitalise';
	import { writable, type Writable } from "svelte/store";

    export let className = ''
    export let label = ''
    export let labelClass = ''
    export let selected: Writable<string | undefined> = writable(undefined);

    setContext('label', label)
    setContext('selected', selected)
</script>

<div role="group" class={className}>
    <div class={labelClass}>{capitalise(label)}</div>
    <slot />
</div>