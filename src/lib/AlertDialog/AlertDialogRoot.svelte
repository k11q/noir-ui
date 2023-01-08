<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import { setContext } from 'svelte';

	export let open: Writable<boolean> = writable(false);
	export let defaultOpen = false;
	export let position: 'bottom-right' | 'bottom-left' | 'top-left' | 'top-right' | 'center' =
		setContext('position', 'center');
	export let dir: 'ltr' | 'rtl' = 'ltr';
	export const closeDialog = () => {
		open.set(false);
		if ($triggerButton) {
			$triggerButton.focus();
		}
	};

	let alertDialogElement: Writable<HTMLElement | null> = writable(null);
	let triggerButton: Writable<HTMLElement | null> = writable(null);

	setContext('open', open);
	setContext('alertDialogElement', alertDialogElement);
	setContext('triggerButton', triggerButton);
</script>

<slot />
