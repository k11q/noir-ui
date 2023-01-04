<script lang="ts">
	import { onMount } from "svelte";

    let tabs:HTMLElement[] = []
    let tabsList:HTMLElement;

    onMount(()=>{
        tabs = [...tabsList.children] as HTMLElement[]
    })

</script>

<div bind:this={tabsList}>

</div>