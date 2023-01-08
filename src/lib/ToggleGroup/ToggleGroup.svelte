<script lang="ts">
	import { setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';

	export let selected: Writable<any> = writable(undefined);
	export let type: 'single' | 'multiple' = 'single';
	export let value = '';
	export let defaultValue = '';
	export let disabled = false;
	export let orientation: 'horizontal' | 'vertical' = 'horizontal';
	export let loop = true;
	let className = '';

	let toggleGroupElement: Writable<HTMLElement | null> = writable(null);
  let currentFocus: Writable<string | undefined> = writable(undefined);

	setContext('selected', selected);
  setContext('currentFocus', currentFocus);
  setContext('toggleGroupElement', toggleGroupElement)

	export {className as class}
</script>

<div role="group" bind:this={$toggleGroupElement} data-orientation={orientation} class={className}>
	<slot />
</div>
