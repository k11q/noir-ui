<script>
    import { setContext } from 'svelte';
    import { onMount } from 'svelte';
    import { getContext } from 'svelte';
  
    setContext('listbox', {});
    let value = [];
    let multiple = false;
    let listbox;
  
    function select(item) {
      if (multiple) {
        if (value.includes(item)) {
          value = value.filter((i) => i !== item);
        } else {
          value = [...value, item];
        }
      } else {
        value = [item];
      }
  
      setContext('listbox', value);
    }
  
    function isSelected(item) {
      return value.includes(item);
    }
  
    function handleKeydown(event) {
      const { key } = event;
      const items = Array.from(listbox.querySelectorAll('[role="option"]'));
      const index = items.indexOf(event.target);
  
      if (key === 'ArrowUp') {
        event.preventDefault();
  
        if (index === 0) {
          items[items.length - 1].focus();
        } else {
          items[index - 1].focus();
        }
      } else if (key === 'ArrowDown') {
        event.preventDefault();
  
        if (index === items.length - 1) {
          items[0].focus();
        } else {
          items[index + 1].focus();
        }
      } else if (key === 'Home') {
        event.preventDefault();
        items[0].focus();
      } else if (key === 'End') {
        event.preventDefault();
        items[items.length - 1].focus();
      }
    }
  
    onMount(() => {
      listbox.addEventListener('keydown', handleKeydown);
    });
  </script>
  
  <div
    role="listbox"
    class:multiple={multiple}
    bind:this={listbox}
    {...getContext('listbox')}
  >
    <slot />
  </div>
  
  <style>
    [role="option"] {
      cursor: pointer;
      padding: 0.5em 1em;
    }
  
    [role="option"][aria-selected="true"] {
      background-color: #333;
      color: #fff;
    }
  </style>