<script lang="ts">
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
	import Toggle from '$lib/Toggle/Toggle.svelte';
	import ToggleGroupItem from '$lib/ToggleGroup/ToggleGroupItem.svelte';
	import ToggleGroup from '$lib/ToggleGroup/ToggleGroup.svelte';
	import Select from '$lib/Select/Select.svelte';
	import Toast from '$lib/Toast/Toast.svelte';
	import RadioItem from '$lib/Radio/RadioItem.svelte';
	import RadioGroup from '$lib/Radio/RadioGroup.svelte';
	import TabsGroup from '$lib/Tabs/TabsGroup.svelte';
	import { writable, type Writable } from 'svelte/store';
	import Popover from '$lib/Popover/Popover.svelte';
	import TabsList from '$lib/Tabs/TabsList.svelte';
	import TabsContent from '$lib/Tabs/TabsContent.svelte';
	import TabsTrigger from '$lib/Tabs/TabsTrigger.svelte';

	const storeLayout: Writable<string> = writable('horz');
	const storeLayout2: Writable<string> = writable('horz');
	const storeTab: Writable<string> = writable('a');

	let switchChecked = false;

	let toggleGroupItem = '';
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
			<Dialog buttonClass="bg-white py-2 px-4 rounded focus:outline focus:outline-2 focus:outline-purple-600">
				<svelte:fragment slot="trigger">Alert Dialog</svelte:fragment>
				<svelte:fragment slot="dialog">
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
				</svelte:fragment>
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
			<Dialog buttonClass="bg-white py-2 px-4 rounded focus:outline focus:outline-2 focus:outline-purple-600">
				<svelte:fragment slot="trigger">Button</svelte:fragment>
				<svelte:fragment slot="dialog">
					<div class="max-h-[85vh] w-[90vw] max-w-[450px] border bg-white rounded-lg border-gray-1">
						<div class="h-80 flex flex-col justify-between p-4">
							<p>Dialog kedua?</p>
							<div class="flex flex-row justify-end gap-2">
								<Button>Betul</Button>
								<Button>Salah</Button>
							</div>
						</div>
					</div>
				</svelte:fragment>
			</Dialog>
			<CardTitle title="Dialog" />
		</Card>
		<Card>
			<DropdownMenu buttonClass="bg-white py-2 px-4 rounded focus:outline focus:outline-2 focus:outline-purple-600">
				<svelte:fragment slot="trigger">Dropdown</svelte:fragment>
				<svelte:fragment slot="menu">
					<div
						class="border bg-white rounded-lg border-gray-200 w-60 flex flex-col justify-between p-1"
					>
						<div class="px-2 py-1 hover:bg-gray-200" tabindex="0">Item 1</div>
						<div class="px-2 py-1 hover:bg-gray-200" tabindex="0">Item 2</div>
						<div class="px-2 py-1 hover:bg-gray-200" tabindex="0">Item 3</div>
						<div class="px-2 py-1 hover:bg-gray-200" tabindex="0">Item 4</div>
					</div>
				</svelte:fragment>
			</DropdownMenu>
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
			<Popover
				buttonClass="bg-white py-2 px-4 rounded focus:outline focus:outline-2 focus:outline-purple-600"
			>
				<svelte:fragment slot="trigger">Popover</svelte:fragment>
				<svelte:fragment slot="content">
					<div
						class="border bg-white rounded-lg border-gray-200 w-60 flex flex-col justify-between p-1"
					>
						<div class="px-4 py-2">Popover Content!</div>
					</div>
				</svelte:fragment>
			</Popover>
			<CardTitle title="Popover" />
		</Card>
		<Card>
			<RadioGroup selected={storeLayout2}>
				<RadioItem value="horz">top</RadioItem>
				<RadioItem value="vert">bottom</RadioItem>
			</RadioGroup>
			<CardTitle title="Progress" />
		</Card>
		<Card>
			<RadioGroup>
				<RadioItem value="horz">Horizontal</RadioItem>
				<RadioItem value="vert">Vertical</RadioItem>
			</RadioGroup>

			<CardTitle title="Radio Group" />
		</Card>
		<Card>
			<CardTitle title="Scroll Area" />
		</Card>
		<Card>
			<Select>
				<svelte:fragment slot="trigger">Select</svelte:fragment>
				<svelte:fragment slot="menu">
					<div
						class="border bg-white rounded-lg border-gray-200 w-60 flex flex-col justify-between p-1"
					>
						<div class="px-2 py-1 hover:bg-gray-200" tabindex="0">Item 1</div>
						<div class="px-2 py-1 hover:bg-gray-200" tabindex="0">Item 2</div>
						<div class="px-2 py-1 hover:bg-gray-200" tabindex="0">Item 3</div>
						<div class="px-2 py-1 hover:bg-gray-200" tabindex="0">Item 4</div>
					</div>
				</svelte:fragment>
			</Select>
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
			<Switch bind:checked={switchChecked} />
			<CardTitle title="Switch" />
		</Card>
		<Card>
			<TabsGroup className="flex flex-col rounded-lg bg-white shadow min-h-[140px] text-sm min-w-[240px]">
				<TabsList
					selected={storeTab}
					className="flex flex-row focus:[&>*]:rounded shadow-[0_-1px_0px_0px_inset] shadow-gray-200 [&>*]:py-3 [&>*]:px-5 [&>*]:text-gray-400 data-[state='active']:[&>*]:shadow-[0_-2px_0px_0px_inset] data-[state='active']:[&>*]:shadow-purple-600 data-[state='active']:[&>*]:text-purple-600 focus:[&>*]:outline focus:[&>*]:outline-2 focus:[&>*]:outline-purple-600 focus:[&>*]:relative"
				>
					<TabsTrigger value="a">Tab 1</TabsTrigger>
					<TabsTrigger value="b">Tab 2</TabsTrigger>
					<TabsTrigger value="c">Tab 3</TabsTrigger>
				</TabsList>
				<TabsContent className="mt-2 py-3 px-5">
					{#if $storeTab === 'a'}
						Content A
					{/if}
					{#if $storeTab === 'b'}Content B{/if}
					{#if $storeTab === 'c'}Content C{/if}
				</TabsContent>
			</TabsGroup>
			<CardTitle title="Tabs" />
		</Card>
		<Card>
			<Toast
				buttonClass="bg-white py-2 px-4 rounded focus:outline focus:outline-2 focus:outline-purple-600"
			>
				<svelte:fragment slot="trigger">Toast</svelte:fragment>
				<svelte:fragment slot="menu">
					<div
						class="border bg-white rounded-lg border-gray-200 w-60 flex flex-col justify-between p-1 shadow-lg"
					>
						<div class="px-4 py-2 hover:bg-gray-200">Toast Content!</div>
					</div>
				</svelte:fragment>
			</Toast>
			<CardTitle title="Toast" />
		</Card>
		<Card>
			<Toggle
				className="focus:outline bg-white shadow-sm h-10 aspect-square rounded data-[state='on']:bg-purple-200 focus:outline-2 focus:outline-purple-600"
			>
				W
			</Toggle>
			<CardTitle title="Toggle" />
		</Card>
		<Card>
			<ToggleGroup
				className="flex rounded bg-white shadow-sm first:[&>*]:rounded-l last:[&>*]:rounded-r last:[&>*]:border-r-0 [&>*]:border-r [&>*]:border-gray-200 [&>*]:h-10 [&>*]:aspect-square data-[state='on']:[&>*]:bg-purple-200 focus:[&>*]:outline focus:[&>*]:outline-2 focus:[&>*]:outline-purple-600 focus:[&>*]:relative"
			>
				<ToggleGroupItem value="item1">W</ToggleGroupItem>
				<ToggleGroupItem value="item2">A</ToggleGroupItem>
				<ToggleGroupItem value="item3">S</ToggleGroupItem>
				<ToggleGroupItem value="item4">D</ToggleGroupItem>
			</ToggleGroup>
			<CardTitle title="Toggle Group" />
		</Card>
		<Card>
			<Tooltip
				buttonClass="bg-white h-10 rounded-full aspect-square focus:outline focus:outline-2 focus:outline-purple-600"
			>
				<svelte:fragment slot="trigger">+</svelte:fragment>
				<div slot="content" class="px-4 py-2">Tooltip Content!</div>
			</Tooltip>
			<CardTitle title="Tooltip" />
		</Card>
	</div>
</div>
