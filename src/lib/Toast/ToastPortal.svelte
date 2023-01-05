<script lang="ts">
	import { fly } from 'svelte/transition';
	import type { Writable } from 'svelte/store';
	import { getContext } from 'svelte';
	import { portal } from '../Portal/Portal.svelte';

	let open: Writable<boolean> = getContext('open');
	export let className = '';

	let position:string = getContext('position')
	let selectPortal: HTMLElement;

</script>

{#if $open === true}
	<div
		bind:this={selectPortal}
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
		<div class={className} role="listbox" aria-expanded={$open} style="margin-top:8px" transition:fly="{{ x: 150, duration: 400 }}">
			<slot />
		</div>
	</div>
{/if}
