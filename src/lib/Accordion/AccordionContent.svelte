<script>
    	import { getContext, setContext } from 'svelte';

        const contentId = getContext('contentId');
        const summaryId = getContext('summaryId')

</script>

<div
		id={contentId}
		class="{$$props.class}"
		role="region"
		aria-labelledby={summaryId}
	>
		<slot>(content)</slot>
	</div>