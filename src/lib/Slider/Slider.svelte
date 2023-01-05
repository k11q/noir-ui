<script lang="ts">
	export let value = 40;
	export let minValue = 0;
	export let maxValue = 100;
	export let name: string;
	let offsetHandler: number = value < 50 ? ((value - 50) / 50) * 10 : value > 50 ? ((value - 50) / 50) * -10 : 0;;

	$: offsetHandler =
		value < 50 ? ((value - 50) / 50) * 10 : value > 50 ? ((value - 50) / 50) * -10 : 0;

	let slider: HTMLElement;
	let sliderHandler: HTMLElement;

	const changeValue = (e: MouseEvent) => {
		e.preventDefault();
		const sliderRect = slider.getBoundingClientRect();

		if (
			e.clientX - 10 - offsetHandler > sliderRect.left &&
			e.clientX - 10 - offsetHandler < sliderRect.left + sliderRect.width
		) {
			value = ((e.clientX - 10 - offsetHandler - sliderRect.left) / sliderRect.width) * 100;
		}

		document.addEventListener('mousemove', mousemove);
		document.addEventListener('mouseup', mouseup);

		function mousemove(e: MouseEvent) {
			sliderHandler.focus();
			if (
				e.clientX - 10 - offsetHandler > sliderRect.left &&
				e.clientX - 10 - offsetHandler < sliderRect.left + sliderRect.width
			) {
				value = ((e.clientX - 10 - offsetHandler - sliderRect.left) / sliderRect.width) * 100;
			}
			if (e.clientX - 10 - offsetHandler <= sliderRect.left) {
				value = minValue;
			}
			if (e.clientX - 10 - offsetHandler >= sliderRect.left + sliderRect.width) {
				value = maxValue;
			}
		}

		function mouseup(e: MouseEvent) {
			document.removeEventListener('mousemove', mousemove);
			document.removeEventListener('mouseup', mouseup);
		}
		sliderHandler.focus();
	};
</script>

<span
	class="relative flex items-center w-[200px] touch-none select-none h-5"
	bind:this={slider}
	on:mousedown={changeValue}
>
	<span class="rounded-full h-[3px] flex-grow bg-gray-400 relative">
		<span class="rounded-full absolute bg-[#6E56CF] h-full left-0" style="right: {100 - value}%" />
	</span>
	<span class=" absolute" style="left: calc({value}% + {offsetHandler}px)">
		<span
			bind:this={sliderHandler}
			role="slider"
			aria-valuenow={value}
			aria-valuemin={minValue}
			aria-valuemax={maxValue}
			aria-orientation="horizontal"
			tabindex="0"
			class="block h-5 w-5 rounded-full shadow-sm bg-white focus:outline focus:outline-4 outline-[#6e56cf98]"
		/>
	</span>
</span>

<input style={'display:none'} {value} {name} />
