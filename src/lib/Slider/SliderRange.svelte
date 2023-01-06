<script lang="ts">
    import type { Writable } from 'svelte/store';
	import { getContext } from 'svelte';

	let value: Writable<number> = getContext('value');
</script>

<span class="rounded-full h-[3px] flex-grow bg-gray-400 relative">
    <span class="rounded-full absolute bg-black h-full left-0" style="right: {100 - $value}%" />
</span>