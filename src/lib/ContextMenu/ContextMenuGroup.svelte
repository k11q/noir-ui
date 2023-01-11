<script>
	import { setContext } from "svelte";
    import { capitalise } from '../utils/capitalise';

    export let className = ''
    export let label = ''
    export let labelClass = ''

    setContext('label', label)

</script>

<div role="group" class={className}>
    <div class={labelClass}>{capitalise(label)}</div>
    <slot />
</div>