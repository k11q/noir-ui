<script lang="ts">
    import { onMount } from 'svelte';
  
    let expanded = false;
    let menuTop = 0;
    let menuLeft = 0;
    let alignment = 'left';
    let direction = 'down';
    let animation = 'fade';
    let width = 'auto';
    let height = 'auto';
    let level = 1;
    let position = 'absolute';
    let menuClass = '';
    let menuStyle = '';
    let template = '';
    let menu: HTMLElement;
  
    function toggle() {
      expanded = !expanded;
    }
  
    onMount(() => {
      const { top, left } = menu.getBoundingClientRect();
      const { innerHeight, innerWidth } = window;
  
      if (direction === 'up') {
        menuTop = top - menu.offsetHeight;
      } else if (direction === 'down') {
        menuTop = top;
      }
  
      if (alignment === 'left') {
        menuLeft = left;
      } else if (alignment === 'right') {
        menuLeft = left - menu.offsetWidth;
      } else if (alignment === 'center') {
        menuLeft = left - menu.offsetWidth / 2;
      }
  
      if (menuTop + menu.offsetHeight > innerHeight) {
        menuTop = top - menu.offsetHeight;
      }
  
      if (menuLeft + menu.offsetWidth > innerWidth) {
        menuLeft = left - menu.offsetWidth;
      }
    });
    
  </script>

<div class="dropdown {menuClass}" bind:this={menu}>
    <button
      aria-haspopup="true"
      aria-expanded={expanded}
      on:click={toggle}
    >
      Toggle Dropdown
    </button>
    {#if expanded}
      <ul
        aria-hidden={!expanded}
        role="menu"
        style="{`top: ${menuTop}px; left: ${menuLeft}px; width: ${width}; height: ${height}; position: ${position}; ${menuStyle}`}"
        class:animation={animation}
        class:level={level}
        class:direction={direction}
        class:alignment={alignment}
        class:expanded={expanded}
      >
        {#if template}
          {@html template}
        {:else}
          <li role="none">
            <a href="#" role="menuitem">Menu item 1</a>
          </li>
          <li role="none">
            <a href="#" role="menuitem">Menu item 2</a>
          </li>
          <li role="none">
            <a href="#" role="menuitem">Menu item 3</a>
          </li>
        {/if}
      </ul>
    {/if}
  </div>