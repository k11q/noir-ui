<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import { getContext, setContext } from 'svelte';

	export let className = '';
    export let selected: Writable<string> = getContext('selected');
	export let defaultValue:string = getContext('defaultValue');
	export let onCheckedChange: (checked: boolean | 'indeterminate') => void;
	export let disabled = false;
	export let required = false;
	export let name = '';
	export let value = '';
	export let id = '';

    let radioButton:HTMLElement;

    setContext('value', value)
    setContext('selected', selected)

	function toggleCheck() {
		selected.set(value);
	}

    function handleChange(){
        if(document.activeElement === radioButton){
            return
        }else {
            radioButton.focus()
        }
    }

    $: checked = value === $selected ? true : false

</script>

<button bind:this={radioButton} {id} {value} class={className} on:click={toggleCheck} role="radio" aria-checked={checked} data-state={checked? 'checked' : 'unchecked'}>
	<slot />
</button>
<input
	type="radio"
    {value}
    on:change={handleChange}
    aria-hidden="true"
    tabindex="-1"
	style="transform: translateX(-100%); position: absolute; pointer-events: none; opacity: 0; margin: 0px; width: 25px; height: 25px;"
/>