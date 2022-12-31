<script lang="ts">
    import { createEventDispatcher } from 'svelte';
  
    interface SelectTriggerProps {
      value?: string;
      placeholder?: string;
      open?: boolean;
      dir?: 'ltr' | 'rtl';
    }
  
    export let value: string | undefined;
    export let placeholder: string | undefined;
    export let open: boolean | undefined;
    export let dir: 'ltr' | 'rtl' = 'ltr';
    const dispatch = createEventDispatcher();
  
    const handleClick = () => {
      dispatch('click');
    };
  
    const handleKeyDown = (event: KeyboardEvent) => {
      dispatch('keydown', event);
    };
  </script>
  
  <!-- Add your own styles here -->
  
  <div tabindex="0" on:click={handleClick} on:keydown={handleKeyDown}>
    {#if value}
      <slot name="value" />
    {:else}
      {placeholder}
    {/if}
    <slot name="icon" />
  </div>