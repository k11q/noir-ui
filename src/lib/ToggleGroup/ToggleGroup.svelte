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
	export let className = '';

  let currentFocus: Writable<string | undefined> = writable(undefined);

	setContext('selected', selected);
  setContext('currentFocus', currentFocus);

</script>

<div role="group" data-orientation={orientation} class={className}>
	<slot />
</div>
