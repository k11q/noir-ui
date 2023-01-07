<script lang="ts">
	import type { Writable } from 'svelte/store';
	import { getContext } from 'svelte';
	import { useCheckPositionInside } from '$lib/utils/check-position-inside';

	export let className = '';
	export let delayDuration = 700;

	let triggerButton: Writable<HTMLElement> = getContext('triggerButton');
	let hoverCardPortal: Writable<HTMLElement> = getContext('hoverCardPortal');
	let open: Writable<boolean> = getContext('open');
	let hover = false;

	let runCheck: NodeJS.Timeout;

	let x = 0;
	let y = 0;

	const openDialog = () => {
		hover = true;
	};

	$: if (hover) {
		window.addEventListener('mousemove', setMousePosition);
		runCheck = setInterval(checkMousePos, 1000);
	} else {
		clearInterval(runCheck);
		runCheck = undefined;
	}

	function setMousePosition(e: MouseEvent) {
		x = e.clientX;
		y = e.clientY;
	}

	function checkMousePos() {
		console.log('Cursor at: ' + x + ', ' + y);

		if (useCheckPositionInside(x, y, $triggerButton) && !$hoverCardPortal) {
			open.set(true)
			hover= true
			return;
		} else if($hoverCardPortal &&(useCheckPositionInside(x, y, $triggerButton) || useCheckPositionInside(x, y, $hoverCardPortal))) {
			open.set(true)
			hover= true
			return;
		}
		else {
			open.set(false)
			hover = false;
			window.removeEventListener('mousemove', setMousePosition);
		}
	}

</script>

<button
	bind:this={$triggerButton}
	on:mouseenter={openDialog}
	type="button"
	aria-expanded={$open}
	data-state={$open ? 'open' : 'closed'}
	class={className}
>
	<slot />
</button>
