<script lang="ts">
    import { createEventDispatcher } from 'svelte';
  
    interface SelectIconProps {}
  
    const dispatch = createEventDispatcher();
  
    const handleFocus = () => {
      dispatch('focus');
    };
  </script>
  
  <!-- Add your own styles here -->
  
  <div tabindex="0" on:focus={handleFocus}>
    <slot />
  </div>