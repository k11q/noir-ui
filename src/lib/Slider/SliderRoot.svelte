<script lang="ts">
    import { writable, type Writable } from 'svelte/store';
	import { setContext } from "svelte";

	export let className = ''
    export let defaultValue: Writable<number> = writable(40);
	export let value: Writable<number> = writable(40);
	export let minValue: Writable<number> = writable(0);
	export let maxValue: Writable<number> = writable(100);
    export let step: Writable<number> = writable(1);
    export let extraStep: Writable<number> = writable(5);
	export let name: string = '';

    let rootSliderElement: Writable<HTMLElement | null> = writable(null);
    let thumbElement: Writable<HTMLElement | null> = writable(null);
    let offsetHandler: Writable<number> = writable($value < 50 ? (($value - 50) / 50) * 10 : $value > 50 ? (($value - 50) / 50) * -10 : 0);

    setContext('value', value);
    setContext('minValue', minValue);
    setContext('maxValue', maxValue);
    setContext('name', name);
    setContext('step', step);
    setContext('extraStep', extraStep);
    setContext('rootSliderElement', rootSliderElement);
    setContext('thumbElement', thumbElement);
    setContext('offsetHandler', offsetHandler);

	$: offsetHandler.set($value < 50 ? (($value - 50) / 50) * 10 : $value > 50 ? (($value - 50) / 50) * -10 : 0)

	const changeValue = (e: MouseEvent) => {
		e.preventDefault();
        if($rootSliderElement){
		const rootSliderRect = $rootSliderElement.getBoundingClientRect();

		if (
			e.clientX - 10 - $offsetHandler > rootSliderRect.left &&
			e.clientX - 10 - $offsetHandler < rootSliderRect.left + rootSliderRect.width
		) {
			value.set(Math.round(((e.clientX - 10 - $offsetHandler - rootSliderRect.left) / rootSliderRect.width) * 100));
		}

		document.addEventListener('pointermove', pointermove);
		document.addEventListener('pointerup', pointerup);

		function pointermove(e: PointerEvent) {
            if($thumbElement){
                $thumbElement.focus();
            }
			if (
				e.clientX - 10 - $offsetHandler > rootSliderRect.left &&
				e.clientX - 10 - $offsetHandler < rootSliderRect.left + rootSliderRect.width
			) {
				value.set(((e.clientX - 10 - $offsetHandler - rootSliderRect.left) / rootSliderRect.width) * 100);
			}
			if (e.clientX - 10 - $offsetHandler <= rootSliderRect.left) {
				value.set($minValue);
			}
			if (e.clientX - 10 - $offsetHandler >= rootSliderRect.left + rootSliderRect.width) {
				value.set($maxValue);
			}
		}

		function pointerup(e: PointerEvent) {
			document.removeEventListener('pointermove', pointermove);
			document.removeEventListener('pointerup', pointerup);
		}
		if($thumbElement){
                $thumbElement.focus();
            }
        }
	};
</script>

<span
	class={className}
	bind:this={$rootSliderElement}
	on:pointerdown={changeValue}
>
<slot />
</span>

<input style={'display:none'} value={$value} name={name} />
