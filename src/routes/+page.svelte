<script>
	import Accordion from '$lib/Accordion/Accordion.svelte';
	import AccordionItem from '$lib/Accordion/AccordionItem.svelte';
	import AccordionContent from '$lib/Accordion/AccordionContent.svelte';
	import AccordionHeader from '$lib/Accordion/AccordionHeader.svelte';
	import DropdownMenu from '$lib/DropdownMenu/DropdownMenu.svelte';
	import Tooltip from '$lib/Tooltip/Tooltip.svelte';
	import Button from '$lib/Button/Button.svelte';
</script>

<Accordion class="rounded-lg overflow-hidden border border-black">
	<AccordionItem class="">
		<AccordionHeader slot="header" class="bg-blue-400 flex p-4">Header2</AccordionHeader>
		<AccordionContent slot="content" class="bg-red-400 p-4">Hahahha</AccordionContent>
	</AccordionItem>
	<AccordionItem class="">
		<AccordionHeader slot="header" class="bg-blue-400 flex p-4">Header2</AccordionHeader>
		<AccordionContent slot="content" class="bg-red-400 p-4">Hahahha</AccordionContent>
	</AccordionItem>
</Accordion>

<DropdownMenu />

<p>Haha</p>
<Tooltip />

<Button size="small">
Button
</Button>
