<script>
    import { getContext } from 'svelte';
  
    let value;
    let option;
  
    const { group } = getContext('listbox');
  
    function select() {
      group.select(value);
    }
  </script>
  
  <div
    role="option"
    tabindex="-1"
    aria-selected={group.isSelected(value)}
    on:click={select}
    on:focus={select}
    bind:this={option}
  >
    <slot />
  </div>
  