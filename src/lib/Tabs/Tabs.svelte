<script lang="ts">
	import { getContext } from "svelte";
	import { writable, type Writable } from "svelte/store";

    let selected: Writable<string | undefined> = getContext('selected');
    let name: string | undefined = getContext('name');
    export let value: string | undefined = undefined;
    export const checked: Writable<any> = writable(false);

    export let inputClass = ''
    let className = ''
    export {className as class}

    function handleChange(e:Event){
        console.log(e)
        console.log(document.activeElement)
        selected.set(value)
    }
</script>

<div class={className} role="presentation" data-state={$selected === value? 'active' : 'inactive'}>
    <input type="radio" class={inputClass} name={name} {value} on:change={handleChange} role="tab">
    <slot />
</div>

<style>
    div {
        position:relative;
    }
    input {
        opacity: 0;
        position:absolute;
        inset: 0;
    }
</style>