<script lang="ts">
    import { createEventDispatcher } from 'svelte';
  
    interface SelectContentProps {
      children?: HTMLElement;
    }
  
    export let children: HTMLElement | undefined;
    const dispatch = createEventDispatcher();
  </script>
  
  <!-- Add your own styles here -->
  
  <div>
    <slot />
  </div>