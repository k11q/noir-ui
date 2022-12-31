<script lang="ts">
    let visible = false;
    let position = 'top';
    let animation = 'fade';
    let title = 'hohho';
    let tip: HTMLElement;
  
    function show() {
      visible = true;
    }
  
    function hide() {
      visible = false;
    }
  
    function toggle() {
      visible = !visible;
    }
  
    function getPositions() {
      const { top, left, width } = tip.getBoundingClientRect();
      const { innerHeight, innerWidth } = window;
      let x = 0;
      let y = 0;
  
      if (position === 'top') {
        x = left + width / 2;
        y = top - tip.offsetHeight - 10;
      } else if (position === 'right') {
        x = left + width + 10;
        y = top + tip.offsetHeight / 2;
      } else if (position === 'bottom') {
        x = left + width / 2;
        y = top + tip.offsetHeight + 10;
      } else if (position === 'left') {
        x = left - tip.offsetWidth - 10;
        y = top + tip.offsetHeight / 2;
      }
  
      if (x + tip.offsetWidth > innerWidth) {
        x = innerWidth - tip.offsetWidth - 10;
      }
  
      if (y + tip.offsetHeight > innerHeight) {
        y = innerHeight - tip.offsetHeight - 10;
      }
        return { x, y };
    }
</script>

<span bind:this={tip}>
  <button on:mouseenter={show} on:mouseleave={hide} on:focus={show} on:blur={hide}>
    Show Tooltip
  </button>
  {#if visible}
    <div
      role="tooltip"
      aria-hidden={!visible}
      class:animation={animation}
      class:position={position}
      style="top: {getPositions().y}px; left: {getPositions().x}px"
    >
      {title}
    </div>
  {/if}
</span>