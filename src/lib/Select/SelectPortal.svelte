<script lang="ts">
    import { createEventDispatcher } from 'svelte';
  
    interface SelectPortalProps {
      children?: HTMLElement;
    }
  
    export let children: HTMLElement | undefined;
    const dispatch = createEventDispatcher();
  
    const handleClick = () => {
      dispatch('click');
    };
  </script>
  
  <!-- Add your own styles here -->
  
  <div on:click={handleClick}>
    <slot />
  </div>