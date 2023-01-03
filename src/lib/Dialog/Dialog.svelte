<script lang="ts">
	import { trapFocus } from '$lib/utils/trap-focus';
	import { portal } from '../Portal/Portal.svelte';

	export let open = false;
    let dialogElement: HTMLElement;

    $: if(dialogElement){
        open ? trapFocus(dialogElement) : '';
    }

</script>

{#if open === true}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="overlay bg-gray-1 opacity-50"
		on:mousewheel|preventDefault|stopPropagation
		use:portal={'body'}
		on:click|preventDefault={() => {
			open = false;
		}}
	>
	</div>
	<div bind:this={dialogElement} on:mousewheel|preventDefault|stopPropagation use:portal={'body'} role="dialog" aria-modal="true">
		<slot />
	</div>
{/if}

<style>
    .overlay {
        position: fixed;
        inset: 0;
        pointer-events: auto;
    }
</style>
