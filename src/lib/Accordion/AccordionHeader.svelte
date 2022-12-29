<script>
    let hovering = $$props.hovering
    function handleClick(){
        this.parent.parent.dataset.state = this.parent.parent.dataset.state === 'open'? 'closed' : 'open'
        hovering = !hovering
    }
</script>

<h3>
	<button type="button" aria-expanded="{hovering}" on:click={handleClick}>
		<slot />
	</button>
</h3>

<style>
	button {
		all: unset;
        display: flex;
	}

    button:focus {
        border: 2px solid black;
    }
</style>
