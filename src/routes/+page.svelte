<script>
	import Accordion from '$lib/Accordion/Accordion.svelte';
	import AccordionItem from '$lib/Accordion/AccordionItem.svelte';
	import AccordionContent from '$lib/Accordion/AccordionContent.svelte';
	import AccordionHeader from '$lib/Accordion/AccordionHeader.svelte';
	import DropdownMenu from '$lib/DropdownMenu/DropdownMenu.svelte';
	import Tooltip from '$lib/Tooltip/Tooltip.svelte';
	import Button from '$lib/Button/Button.svelte';
	import Card from '$lib/Card/Card.svelte';
	import CardTitle from '$lib/Card/CardTitle.svelte';
	import Dialog from '$lib/Dialog/Dialog.svelte';
	import Checkbox from '$lib/Checkbox/Checkbox.svelte';
	import Switch from '$lib/Switch/Switch.svelte';
	import Slider from '$lib/Slider/Slider.svelte';

	let dialogOpen = false;
	let switchChecked = false;

	function handleClick() {
		dialogOpen = !dialogOpen;
	}

	$: dialogOpen;
</script>

<div class="w-full flex flex-col items-center gap-2 py-16 lg:px-12 px-5">
	<h1 class="text-2xl font-semibold">Souvre UI</h1>
	<h3 class="text-lg mb-8">Ready made accessible components</h3>
	<div class="grid md:grid-cols-12 grid-cols-8 max-w-[1020px] w-full gap-5">
		<Card>
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
			<CardTitle title="Accordion" />
		</Card>
		<Card>
			<Button click={handleClick}>Button</Button>
			<Dialog bind:open={dialogOpen}>
				<div
					class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[85vh] w-[90vw] max-w-[450px] border bg-white rounded-lg border-gray-1"
				>
					<div class="h-80 flex flex-col justify-between p-4">
						<p>Betul ke ni?</p>
						<div class="flex flex-row justify-end gap-2">
							<Button>Betul</Button>
							<Button>Salah</Button>
						</div>
					</div>
				</div>
			</Dialog>
			<CardTitle title="Alert Dialog" />
		</Card>
		<Card>
			<CardTitle title="Avatar" />
		</Card>
		<Card>
			<div class="gap-2">
			<Checkbox id="c1" />
			<label for="c1">Checkbox</label>
		</div>
			<CardTitle title="Checkbox" />
		</Card>
		<Card>
			<CardTitle title="Collapsible" />
		</Card>
		<Card>
			<CardTitle title="Context Menu" />
		</Card>
		<Card>
			<Button click={handleClick}>Button</Button>
			<CardTitle title="Dialog" />
		</Card>
		<Card>
			<DropdownMenu />
			<Button>Dropdown</Button>
			<CardTitle title="Dropdown Menu" />
		</Card>
		<Card>
			<CardTitle title="Hovercard" />
		</Card>
		<Card>
			<CardTitle title="Label" />
		</Card>
		<Card>
			<CardTitle title="Menubar" />
		</Card>
		<Card>
			<CardTitle title="Navigation Menu" />
		</Card>
		<Card>
			<CardTitle title="Popover" />
		</Card>
		<Card>
			<CardTitle title="Progress" />
		</Card>
		<Card>
			<CardTitle title="Radio Group" />
		</Card>
		<Card>
			<CardTitle title="Scroll Area" />
		</Card>
		<Card>
			<CardTitle title="Select" />
		</Card>
		<Card>
			<CardTitle title="Separator" />
		</Card>
		<Card>
			<Slider />
			<CardTitle title="Slider" />
		</Card>
		<Card>
			<Switch bind:checked={switchChecked}></Switch>
			<CardTitle title="Switch" />
		</Card>
		<Card>
			<CardTitle title="Tabs" />
		</Card>
		<Card>
			<CardTitle title="Toast" />
		</Card>
		<Card>
			<CardTitle title="Toggle" />
		</Card>
		<Card>
			<CardTitle title="Toggle Group" />
		</Card>
		<Card>
			<Tooltip />
			<CardTitle title="Tooltip" />
		</Card>
	</div>
</div>
