<script lang="ts">
    import { createEventDispatcher } from 'svelte';
  
    interface SelectValueProps {
      placeholder?: string;
    }
  
    export let placeholder: string | undefined;
    export let value: string | undefined;
    const dispatch = createEventDispatcher();
  
    const handleFocus = () => {
      dispatch('focus');
    };

</script>

<div tabindex="0" on:focus={handleFocus}>
  {#if value}
    {value}
  {:else}
    {placeholder}
  {/if}
</div>