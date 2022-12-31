<script lang="ts">
    type Size = 'small' | 'medium' | 'large'
    type Style = 'solid' | 'outline'

    export let size:Size = 'small'
    export let style:Style = 'solid'

    const sizeSmallClass = 'bg-blue-9 text-white rounded-md px-2 py-0.5 text-md font-medium'
    const sizeMediumClass = 'bg-blue-9 text-white rounded-md px-3 py-1 text-md font-medium'
    const sizeLargeClass = 'bg-blue-9 text-white rounded-md px-4 py-2 text-md font-medium'

    $: sizeClass = size==='small'? sizeSmallClass : size==='medium'? sizeMediumClass : sizeLargeClass
</script>

<button class="{`${$$props.class} ${sizeClass}`}">
    <slot></slot>
    </button>