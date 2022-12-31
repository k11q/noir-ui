<script lang="ts">
    import { createEventDispatcher } from 'svelte';
  
    interface TabsTriggerProps {
      children?: SvelteNode;
    }
  
    export let children: SvelteNode | undefined;
    const dispatch = createEventDispatcher();

    const handleClick = () => {
    dispatch('click');
  };
</script>

<!-- Add your own styles here -->

<div tabindex="0" on:click={handleClick}>
  <slot />
</div>