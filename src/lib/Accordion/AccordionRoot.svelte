<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import { setContext } from 'svelte';

    export let type: "single" | "multiple" = "multiple"
    export let value: string | string[] | undefined= type === 'single' ? '' : [];
    export let collapsible = false;
    export let disabled = false;

    const currentExpanded: Writable<string | string[] | undefined> = writable(value);
	const rootAccordion: Writable<HTMLElement | null> = writable(null);

	setContext('currentExpanded', currentExpanded);
	setContext('rootAccordion', rootAccordion);
    setContext('type', type);

    let className = '';
    export { className as class };
    export let style = ''
</script>

<div class={className} bind:this={$rootAccordion} {style}>
	<slot />
</div>
