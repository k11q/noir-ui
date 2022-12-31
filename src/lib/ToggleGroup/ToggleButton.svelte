<script>
    import { getContext } from 'svelte';
  
    let value;
    let toggleButton;
  
    const { group } = getContext('toggle-group');
  
    function select() {
      group.select(value);
    }
  </script>
  
  <button
    role="button"
    aria-selected={group.isSelected(value)}
    on:click={select}
    bind:this={toggleButton}
  >
    <slot />
  </button>