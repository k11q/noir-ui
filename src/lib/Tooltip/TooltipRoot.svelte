<script lang="ts">
	import { writable, type Writable } from "svelte/store";

    export let open: Writable<boolean> = writable(false);
</script>

<slot />