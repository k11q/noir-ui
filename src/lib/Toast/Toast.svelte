<script lang="ts">
	import { portal } from '../Portal/Portal.svelte';

	export let open = false;
	export let buttonClass = '';
	export let position: 'bottom-right' | 'bottom-left' | 'top-left' | 'top-right' = 'bottom-right';

	let dialogElement: HTMLElement;
	let triggerButton: HTMLElement;

	const openDialog = (e: MouseEvent) => {
		e.preventDefault();
		open = true;
        setTimeout(()=>{
            open = false;
        }, 2000)
	};

	const closeDialog = () => {
		open = false;
	};

</script>

<button
	bind:this={triggerButton}
	on:click={openDialog}
	type="button"
	role="combobox"
	aria-haspopup="dialog"
	aria-expanded={open}
	data-state={open}
	class={buttonClass}
>
	<slot name="trigger" />
</button>

{#if open === true}
	<div
		bind:this={dialogElement}
		on:mousewheel|preventDefault|stopPropagation
		use:portal={'body'}
		role="dialog"
		aria-modal="true"
		style="position: fixed; inset:0; left: {position === 'bottom-left' || position === 'top-left'
			? '20px'
			: ''}; top: {position === 'top-right' || position === 'top-left'
			? '20px'
			: ''};right: {position === 'bottom-right' || position === 'top-right'
			? '20px'
			: ''}; bottom: {position === 'bottom-right' || position === 'bottom-left'
			? '20px'
			: ''};  min-width: max-content; z-index: auto; transform-origin:118.5px -5px; pointer-events:auto"
	>
		<slot name="menu" />
	</div>
{/if}
