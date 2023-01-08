<script lang="ts">
	export let asChild = false;
	export let defaultPressed = false;
	export let pressed = false;
	export let disabled = false;
    export let value = '';
	export let name = '';

	export let labelClass = '';
	let className = '';
	export let style = '';

	$: dataState = pressed ? 'on' : 'off';
	$: ariaPressed = pressed ? 'true' : ('false' as 'true' | 'false');

	export {className as class}
</script>

<label class={labelClass}>
	<input type="checkbox" bind:checked={pressed} role="switch" {name} {value}/>
<span
	class={className}
	{style}
	data-state={dataState}
	data-disabled={disabled}
>
	<slot />
</span>
</label>

<style>
	label input {
		opacity: 0;
		width: 0;
		height: 0;
		position: absolute;
	}
</style>
