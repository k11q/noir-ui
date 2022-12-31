<script lang="ts">
    import { createEventDispatcher } from 'svelte';
  
    interface SelectOptionProps {
      value?: string;
      disabled?: boolean;
    }
  
    export let value: string | undefined;
    export let disabled: boolean | undefined;
    const dispatch = createEventDispatcher();
  
    const handleClick = () => {
      dispatch('click');
    };
  </script>
  
  <!-- Add your own styles here -->
  
  <div tabindex="0" on:click={handleClick}>
    <slot />
  </div>