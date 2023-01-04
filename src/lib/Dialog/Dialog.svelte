<script lang="ts">
	import { trapFocus } from '$lib/utils/trap-focus';
	import { portal } from '../Portal/Portal.svelte';

	export let open = false;
	export let buttonClass = ''

    let dialogElement: HTMLElement;

	const openDialog = (e:MouseEvent) =>{
		e.preventDefault();
		open = true;
	}

	const closeDialog = () =>{
		open = false;
	}

    $: if(dialogElement){
        open ? trapFocus(dialogElement) : '';
    }

</script>

<button on:click={openDialog} type="button" aria-haspopup="dialog" aria-expanded="{open}"  class="{buttonClass}">
	<slot name="trigger"/>
</button>

{#if open === true}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="overlay bg-gray-1 opacity-50"
		on:mousewheel|preventDefault|stopPropagation
		use:portal={'body'}
		on:click|preventDefault={closeDialog}
	>
	</div>
	<div bind:this={dialogElement} on:mousewheel|preventDefault|stopPropagation use:portal={'body'} role="dialog" aria-modal="true">
		<slot name="dialog"/>
	</div>
{/if}

<style>
    .overlay {
        position: fixed;
        inset: 0;
        pointer-events: auto;
    }
</style>
