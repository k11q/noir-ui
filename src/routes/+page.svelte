<script>
    import Accordion from "$lib/Accordion/Accordion.svelte";
	import AccordionItem from "$lib/Accordion/AccordionItem.svelte";
    import AccordionContent from "$lib/Accordion/AccordionContent.svelte";
    import AccordionHeader from "$lib/Accordion/AccordionHeader.svelte";

</script>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Accordion>
	<!-- Open -->
	<AccordionItem open>
		<svelte:fragment slot="lead">(lead)</svelte:fragment>
		<svelte:fragment slot="header">Accordion 1</svelte:fragment>
		<svelte:fragment slot="content">Content 1</svelte:fragment>
	</AccordionItem>
	<!-- Closed -->
	<AccordionItem>
		<svelte:fragment slot="header">Accordion 2</svelte:fragment>
	</AccordionItem>
</Accordion>

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
