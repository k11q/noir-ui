<script lang="ts">
    import { createEventDispatcher } from 'svelte';
  
    interface TabsListProps {
      children?: SvelteNode;
    }
  
    export let children: SvelteNode | undefined;
    const dispatch = createEventDispatcher();
  </script>
  
  <!-- Add your own styles here -->
  
  <div>
    <slot />
  </div>