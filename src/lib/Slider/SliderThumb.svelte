<script lang="ts">
    import type { Writable } from 'svelte/store';
	import { getContext } from 'svelte';

    export let className = ''

	let value: Writable<number> = getContext('value');
    let minValue: Writable<number> = getContext('minValue');
	let maxValue: Writable<number> = getContext('maxValue');
    let thumbElement: Writable<HTMLElement | null> = getContext('thumbElement');
    let offsetHandler: Writable<number> = getContext('offsetHandler')
    let step: Writable<number> = getContext('step');
    let extraStep: Writable<number> = getContext('extraStep');

    function handleKeydown(e:KeyboardEvent){
        console.log(e.key)
        console.log(e.shiftKey)
        if(e.key === "ArrowUp" || e.key === "ArrowRight"){
            if(e.shiftKey){
                e.preventDefault()
                if($value+$extraStep >= $maxValue){
                    value.set($maxValue)
                } else if ($value+$extraStep <= $minValue){
                    value.set($minValue)
                } else {
                    value.set($value+$extraStep)
                }
            } else
                {e.preventDefault()
                if($value+$step >= $maxValue){
                    value.set($maxValue)
                } else if ($value+$step <= $minValue){
                    value.set($minValue)
                } else {
                    value.set($value+$step)
                }}
        }
        if(e.key === "ArrowDown" || e.key === "ArrowLeft"){
            if(e.shiftKey){e.preventDefault()
                if($value-$extraStep >= $maxValue){
                    value.set($maxValue)
                } else if ($value-$extraStep <= $minValue){
                    value.set($minValue)
                } else {
                    value.set($value-$extraStep)
                }
            } else {e.preventDefault()
                if($value-$step >= $maxValue){
                    value.set($maxValue)
                } else if ($value-$step <= $minValue){
                    value.set($minValue)
                } else {
                    value.set($value-$step)
                }}
        }
        console.log($value)
    }

</script>

<span class=" absolute" style="left: calc({$value}% + {$offsetHandler}px)">
    <span
        bind:this={$thumbElement}
        role="slider"
        aria-valuenow={$value}
        aria-valuemin={$minValue}
        aria-valuemax={$maxValue}
        aria-orientation="horizontal"
        on:keydown={handleKeydown}
        tabindex="0"
        class={className}
    ></span>
</span>