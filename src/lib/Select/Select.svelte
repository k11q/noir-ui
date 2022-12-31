<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { fly } from 'svelte/transition';
  
    type Option = { value: string; label: string };
    type Group = { label: string; options: Option[] };
  
    interface SelectProps {
      options: Option[] | Group[];
      placeholder?: string;
      value?: string;
      on: { valueChange: (value: string) => void };
      dir?: 'ltr' | 'rtl';
    }
  
    const dispatch = createEventDispatcher();
  
    let { options, placeholder, value, dir = 'ltr' } = $$props as SelectProps;
  let open = false;
  let inputValue = '';
  let highlightedIndex: number | null = null;
  let triggerRef: HTMLDivElement | null = null;
  let listRef: HTMLUListElement | null = null;

  const handleTriggerClick = () => {
    open = !open;
  };

  const handleTriggerKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      open = !open;
    }
  };

  const handleInputChange = (event: InputEvent) => {
    inputValue = (event.target as HTMLInputElement).value;
    highlightedIndex = null;
  };

  const handleInputKeyDown = (event: KeyboardEvent) => {
    const { key } = event;

    if (key === 'ArrowDown') {
      event.preventDefault();
      highlightedIndex = highlightedIndex === null ? 0 : (highlightedIndex + 1) % options.length;
    } else if (key === 'ArrowUp') {
      event.preventDefault();
      highlightedIndex = highlightedIndex === null ? options.length - 1 : (highlightedIndex + options.length - 1) % options.length;
    } else if (key === 'Enter') {
      event.preventDefault();
      if (highlightedIndex !== null) {
        setValue(options[highlightedIndex].value);
      }
    } else if (key === 'Escape') {
      open = false;
    }
  };

  const handleOptionClick = (event: MouseEvent) => {
    const optionValue = (event.currentTarget as HTMLLIElement).getAttribute('data-value');
    setValue(optionValue);
  };

  const getOptionLabel = (option: Option | Group) => {
    return typeof option === 'object' && 'label' in option ? option.label : option.value;
  };

  const getOptionValue = (option: Option) => option.value;

  const filterOptions = (options: (Option | Group)[]) => {
    return options.filter(
      option =>
        !inputValue ||
        getOptionLabel(option)
          .toLowerCase()
          .includes(inputValue.toLowerCase())
    );
  };

  const getOptionId = (index: number) => `option-${index}`;

  const getOptionRef = (index: number) => {
    return (el: HTMLLIElement | null) => {
      if (el) {
        if (index === highlightedIndex) {
          el.focus();
        }
        if (index === 0) {
          el.scrollIntoView();
        }
      }
    };
  };
</script>

<style>
  /* Add your own styles here */
</style>

<SelectTrigger
  bind:this={triggerRef}
  placeholder={placeholder}
  value={value}
  open={open}
  on:click={handleTriggerClick}
  on:keydown={handleTriggerKeyDown}
  dir={dir}
>
  <slot name="trigger" />
</SelectTrigger>

{#if open}
  <SelectPortal>
    <SelectContent>
      <input
        type="text"
        value={inputValue}
        on:input={handleInputChange}
        on:keydown={handleInputKeyDown}
      />
      <ul bind:this={listRef}>
        {#each filterOptions(options) as option}
          {#if option.options}
            <li>
              {getOptionLabel(option)}
              <ul>
                {#each option.options as subOption (subOption_index)}
                  <li
                    data-value={getOptionValue(subOption)}
                    on:click={handleOptionClick}
                    on:mouseover={() => (highlightedIndex = subOption_index)}
                    tabindex="-1"
                    use:focus
                    bind:this={getOptionRef(subOption_index)}
                  >
                    {getOptionLabel(subOption)}
                  </li>
                {/each}
              </ul>
            </li>
          {:else}
            <li
              data-value={getOptionValue(option)}
              on:click={handleOptionClick}
              on:mouseover={() => (highlightedIndex = option_index)}
              tabindex="-1"
              use:focus
              bind:this={getOptionRef(option_index)}
            >
              {getOptionLabel(option)}
            </li>
          {/if}
        {/each}
      </ul>
    </SelectContent>
  </SelectPortal>
{/if}


  