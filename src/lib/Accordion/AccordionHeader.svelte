<script lang="ts">
	import { getContext, setContext } from 'svelte';
    import SvgIcon from "$lib/SvgIcon/SvgIcon.svelte"

	const contentId = getContext('contentId');
	const summaryId = getContext('summaryId');
    const open = getContext('open');
	const classesIcon = getContext('classesIcon');
</script>

<summary
		id={summaryId}
		aria-expanded={open}
        class={$$props.class}
		aria-controls={contentId}
        on:click
	>
		<!-- Slot: Lead -->
		{#if $$slots.lead}<div class="accordion-summary-lead"><slot name="lead" /></div>{/if}
		<!-- Slot: Text -->
        <div class="flex-auto cursor-default">
			<slot>(header)</slot>
        </div>
		<!-- Caret -->
		<div class="accordion-summary-caret {classesIcon}">
			<SvgIcon name="angle-down" class="opacity-50" />
		</div>
	</summary>
