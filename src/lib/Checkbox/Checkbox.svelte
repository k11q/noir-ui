<script lang="ts">

    export let defaultChecked: Boolean;
    export let checked: Boolean;
    export let onCheckedChange: (checked: boolean | 'indeterminate') => void;
    export let disabled: Boolean;
    export let required: Boolean;
    export let name: string;
    export let value: Boolean;
    export let id: string;

</script>

<input type="checkbox" name={name} role="checkbox" aria-checked="{checked ?'true':'false'}" id={id} bind:checked={checked}/>