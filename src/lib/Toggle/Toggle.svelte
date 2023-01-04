<script lang="ts">
	export let asChild = false;
	export let defaultPressed = false;
	export let pressed = false;
	export let disabled = false;
    export let value = '';

	export let className = '';
	export let style = '';

	$: dataState = pressed ? 'on' : 'off';
	$: ariaPressed = pressed ? 'true' : ('false' as 'true' | 'false');

	function toggleState() {
		pressed = !pressed;
	}
</script>

<button
	class={className}
	{style}
	aria-pressed={ariaPressed}
	data-state={dataState}
	data-disabled={disabled}
	on:click={toggleState}
>
	<slot />
</button>
