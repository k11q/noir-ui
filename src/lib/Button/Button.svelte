<script lang="ts">
	type Size = 'small' | 'medium' | 'large';
	type Style = 'solid' | 'outline';

	export let size: Size = 'small';
	export let style: Style = 'solid';

	const sizeSmallClass = 'rounded-md px-2 py-0.5 text-md font-medium';
	const sizeMediumClass = 'rounded-lg px-3 py-1 text-md font-medium';
	const sizeLargeClass = 'rounded-xl px-4 py-2 text-md font-medium';

	const styleSolidClass = 'bg-blue-9 text-white';
    const styleOutlineClass = 'border border-blue-9 text-blue-9';

	$: sizeClass =
		size === 'small' ? sizeSmallClass : size === 'medium' ? sizeMediumClass : sizeLargeClass;
    $: styleClass = style === 'solid' ? styleSolidClass : styleOutlineClass
</script>

<button class={`${sizeClass} ${styleClass} ${$$props.class} bg-blue`}>
	<slot />
</button>
