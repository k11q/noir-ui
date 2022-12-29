<script lang="ts">
	// Slots:
	/**
	 * @slot {{}} content - Allows for an optional leading element, such as an icon.
	 * @slot {{}} lead - Provide the summary details of each item.
	 * @slot {{}} summary - Provide the content details of each item.
	 */
	// Events:
	// FORWARDED: do not document these, breaks the type definition
	// DISPATCHED: document directly above the definition, like props (ex: paginator)
	import { getContext, setContext } from 'svelte';
	import {writable} from "svelte/store"
	// Props
	/** Defines the default open state on page load .*/
	export let open = false;
	/** Provide semantic ID for ARIA summary element. */
	export let summaryId = '';
	/** Provide semantic ID for ARIA content element. */
	export let contentId = '';

	/** Provide arbitrary styles for the summary element region. */
	export let regionSummary = '';

	setContext('open', open)
	setContext('contentId', contentId)
	setContext('summaryId', summaryId)
	// Base Classes
	const cBaseDetails = '';
	const cBaseIcon =
		'flex justify-center items-center w-3 fill-black dark:fill-white transition-all duration-[100ms]';
	// Reactive Classes
	$: classesDetails = `${cBaseDetails} ${$$props.class ?? ''}`;
	$: classesIconState = open ? '-rotate-180' : '';
	$: classesIcon = `${cBaseIcon} ${classesIconState}`;

	setContext('classesIcon', classesIcon)
</script>

<!-- @component The Accordion child element. -->
<details
	bind:open
	class="accordion-item {classesDetails}"
	data-testid="accordion-item"
	on:click
	on:keydown
	on:keyup
	on:keypress
	on:toggle
>
	<!-- Summary -->
	<!-- svelte-ignore a11y-no-redundant-roles -->
			<slot name="header">(header)</slot>
	<!-- Content -->
		<slot name="content">(content)</slot>
</details>

<style>
	/* Hide the left-hande arrows for details/summary  */
	/* Note: let's keep this localized in case users want the arrows elsewhere */
	details summary::-webkit-details-marker {
		display: none;
	}
</style>
