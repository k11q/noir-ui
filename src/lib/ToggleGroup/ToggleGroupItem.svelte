<script lang="ts">
	import type { Writable } from 'svelte/store';
	import { getContext } from 'svelte';

	export let selected: Writable<any> = getContext('selected');
	export let currentFocus: Writable<string | undefined> = getContext('currentFocus');
	export let asChild = false;
	export let defaultPressed = false;
	export let pressed = false;
	export let disabled = false;
	export let value = '';
	export let name = '';

	export let labelClass = '';
	export let className = '';
	export let style = '';

	let toggleGroupElement: Writable<HTMLElement> = getContext('toggleGroupElement');
	let currentToggleElement: HTMLElement;

	$: dataState = pressed ? 'on' : 'off';
	$: ariaPressed = pressed ? 'true' : ('false' as 'true' | 'false');

	function handleKeydown(e: KeyboardEvent) {
		const allToggleItem = [...$toggleGroupElement.querySelectorAll('[data-noir="toggle-item"]')];
		if (allToggleItem.length) {
			const currentTabIndex = allToggleItem.indexOf(currentToggleElement);

			if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
				e.preventDefault();
				if (allToggleItem[currentTabIndex + 1]) {
					allToggleItem[currentTabIndex + 1].focus();
				} else {
					allToggleItem[0].focus();
				}
			}

			if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
				e.preventDefault();
				if (allToggleItem[currentTabIndex - 1]) {
					allToggleItem[currentTabIndex - 1].focus();
				} else {
					allToggleItem[allToggleItem.length - 1].focus();
				}
			}
		}
	}
</script>

<label class={labelClass}>
	<input
		type="checkbox"
		bind:this={currentToggleElement}
		bind:checked={pressed}
		role="switch"
		{name}
		{value}
		data-noir="toggle-item"
		on:keydown={handleKeydown}
	/>
	<span
		class={className}
		{style}
		aria-pressed={ariaPressed}
		data-state={dataState}
		data-disabled={disabled}
	>
		<slot />
	</span>
</label>

<style>
	label input {
		opacity: 0;
		width: 0px;
		height: 0px;
		position: absolute;
	}
</style>
