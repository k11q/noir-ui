<script lang="ts">
    import { setContext } from 'svelte';
    import { onMount } from 'svelte';
    import { getContext } from 'svelte';
  
    let value = [];
    let orientation = 'horizontal';
    let multiple = false;
    let controlled = false;
    let toggleGroup: HTMLElement;
  
    const toggleGroupContext = setContext({});
  
    function select(item) {
      if (controlled) {
        return;
      }
  
      if (multiple) {
        if (value.includes(item)) {
          value = value.filter((i) => i !== item);
        } else {
          value = [...value, item];
        }
      } else {
        value = [item];
      }
  
      toggleGroupContext.set(value);
    }
  
    function isSelected(item) {
      return value.includes(item);
    }
  
    function handleKeydown(event) {
      const { key } = event;
      const items = Array.from(toggleGroup.querySelectorAll('[role="button"]'));
      const index = items.indexOf(event.target);
  
      if (key === 'ArrowLeft' || key === 'ArrowUp') {
        event.preventDefault();
  
        if (index === 0) {
          items[items.length - 1].focus();
        } else {
          items[index - 1].focus();
        }
      } else if (key === 'ArrowRight' || key === 'ArrowDown') {
        event.preventDefault();
  
        if (index === items.length - 1) {
          items[0].focus();
        } else {
          items[index + 1].focus();
        }
      }
    }
  
    onMount(() => {
      toggleGroup.addEventListener('keydown', handleKeydown);
    });
  </script>
  
  <div
    role="group"
    class:orientation={orientation}
    class:multiple={multiple}
    class:controlled={controlled}
    bind:this={toggleGroup}
    {...toggleGroupContext.provide({ set: toggleGroupContext.set })}
  >
    <slot />
  </div>
  
  <style>
    [role="button"] {
      display: inline-block;
      border: none;
      padding: 0.5em 1em;
      background-color: transparent;
      color: #333;
      cursor: pointer;
      outline: none;
    }
  
    [role="button"][aria-selected="true"] {
      background-color: #333;
      color: #fff;
    }
  
    .horizontal [role="button"] {
      margin-right: 0.5em;
    }
  
    .vertical [role="button"] {
      margin-bottom: 0.5em;
    }
  </style>