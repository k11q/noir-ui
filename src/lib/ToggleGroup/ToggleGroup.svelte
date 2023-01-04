<script lang="ts">
  export let type:'single'|'multiple' = 'single'
  export let value = '';
  export let defaultValue = '';
  export let disabled = false;
  export let orientation: "horizontal" | "vertical" = "horizontal";
  export let loop = true;
  export let className = '';

</script>

<div role="group" data-orientation={orientation} class={className}>
  <slot />
</div>