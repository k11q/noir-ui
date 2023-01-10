<script lang="ts">
	import { getContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	import { Check } from 'lucide-svelte';
    import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function sayHello() {
        open.set(false)
        $triggerButton.focus()
		dispatch('change', {
		});
	}

	export let type: 'default' | 'checkbox' | 'radio' = 'default';
	let className = '';
    export {className as class}
	export let selected: Writable<any> = getContext('selected');
	export let value: string;
	export let checked:Writable<boolean> = writable(false);
	export let open: Writable<boolean> = getContext('open');
    export let name = ''

    let action:Writable<any> = getContext('action');
	let triggerButton: Writable<HTMLElement> = getContext('triggerButton');
	let highlighted: Writable<any> = getContext('highlighted');
	let optionElement: HTMLElement;

    function handleClick(){
        if(type==='radio'){
            selected.set(value);
			open.set(false)
        }else if(type==='checkbox'){
			checked.set(!$checked)
			open.set(false)
		} else {
			sayHello()
		}
    }

	function setHighlighted() {
		highlighted.set(value);
	}

	function removeHighlighted() {
		highlighted.set(undefined);
	}

    $: if($action){
        if($action.id===value){
            if(type==='checkbox'){
                checked.set($action.value)
            }else if(type==='radio'){
                selected.set(value);
            }
			sayHello()
			console.log($action)
            action.set(undefined)
        }
    }

	$: if($highlighted === value){
		if(optionElement){
		optionElement.focus()
		}
	}

</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div
	bind:this={optionElement}
	class={className}
	on:click={handleClick}
	on:mouseenter={setHighlighted}
	on:mouseleave={removeHighlighted}
	on:keyup
	on:keypress
	tabindex="{$highlighted === value ? 0 : -1}"
	role={type !== 'default' ? type === 'radio' ? 'menuitemradio' : 'menuitemcheckbox' : 'menuitem'}
	data-noir-collection-item
	aria-selected={type !== 'default' ? type === 'radio' && $selected === value || type === 'checkbox' && $checked ? 'true' : 'false' : null}
	data-state={type !== 'default' ? type === 'radio' && $selected === value || type === 'checkbox' && $checked ? 'checked' : 'unchecked' : null}
	data-highlighted={$highlighted === value}
	data-value={value}
>
	{#if type === 'checkbox'}
		<input type="checkbox" {value} bind:checked={$checked} on:change={sayHello}/>
	{/if}

    {#if type === 'radio'}
		<input type="radio" {value} bind:group={name} name={name} on:change={sayHello}/>
	{/if}

	{#if type === 'checkbox' && $checked}
		<span
			style="position: absolute; left:0px; top:0px; display:inline-flex; align-items:center; justify-content:center; width:25px; height:100%"
		>
			<Check size="13" />
		</span>
	{/if}

    {#if type === 'radio' && $selected === value }
		<span
			style="position: absolute; left:0px; top:0px; display:inline-flex; align-items:center; justify-content:center; width:25px; height:100%"
		>
			<div class="h-[6px] aspect-square rounded-full bg-[currentColor]"></div>
		</span>
	{/if}
	<slot />
</div>

<style>
    input {
        opacity: 0;
        height: 0px;
        width: 0px;
    }
	div[data-noir-collection-item]:focus{
		outline:none
	}
	div {
		user-select: none;
	}
</style>
