<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import { setContext } from 'svelte';

	export let defaultExpanded: Writable<string> = writable('');
    export let type: "single" | "multiple" = "single"
    export let value: string | string[] | undefined = undefined;
    export let collapsible = false;
    export let disabled = false;

    const currentExpanded: Writable<string> = defaultExpanded;
	const rootAccordion: Writable<HTMLElement | null> = writable(null);

	setContext('currentExpanded', currentExpanded);
	setContext('rootAccordion', rootAccordion);

    let className = '';
    export { className as class };
    export let style = ''
</script>

<div class={className} bind:this={$rootAccordion} {style}>
	<slot />
</div>
