<script lang="ts">
	// Slots:
	// NOTE: we cannot describe the default slot.
	import { onMount } from 'svelte';
	/** Enable auto-collapse mode. */
	export let collapse = true;
	// Classes
	const cBase = '';
	// Local
	let elemAccordian: HTMLElement;
	// Lifecycle
	onMount(() => {
		if (collapse) {
			// Ensure only one detail element is open at a time
			// https://nikitahl.com/native-html-accordion
			const details = Array.from(elemAccordian.querySelectorAll('details'));
			details.forEach((detail) => {
				detail.addEventListener('click', (e: any) => {
					const active = details.find((d) => d.open);
					if (!e.currentTarget.open && active) active.open = false;
				});
			});
		}
	});
	// Reactive
	$: classesBase = `${cBase} ${$$props.class ?? ''}`;
</script>
<!-- @component The Accordion parent element. -->
<div bind:this={elemAccordian} class="{`${classesBase} ${$$props.class}`} " data-testid="accordion-group">
	<slot />
</div>
