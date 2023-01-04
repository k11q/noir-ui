<script lang="ts">
	import Accordion from '$lib/Accordion/Accordion.svelte';
	import AccordionItem from '$lib/Accordion/AccordionItem.svelte';
	import AccordionContent from '$lib/Accordion/AccordionContent.svelte';
	import AccordionHeader from '$lib/Accordion/AccordionHeader.svelte';
	import DropdownMenu from '$lib/DropdownMenu/DropdownMenu.svelte';
	import Button from '$lib/Button/Button.svelte';
	import Card from '$lib/Card/Card.svelte';
	import CardTitle from '$lib/Card/CardTitle.svelte';
	import Dialog from '$lib/Dialog/Dialog.svelte';
	import Toggle from '$lib/Toggle/Toggle.svelte';
	import ToggleGroupItem from '$lib/ToggleGroup/ToggleGroupItem.svelte';
	import ToggleGroup from '$lib/ToggleGroup/ToggleGroup.svelte';
	import Select from '$lib/Select/Select.svelte';
	
	import * as Checkbox from '$lib/Checkbox'
	import * as Tabs from '$lib/Tabs'
	import * as RadioGroup from '$lib/Radio';
	import Slider from '$lib/Slider';
	import Switch from '$lib/Switch';
	import Tooltip from '$lib/Tooltip';
	import Toast from '$lib/Toast';
	import Popover from '$lib/Popover';

	import { writable, type Writable } from 'svelte/store';

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
			<div class="flex flex-col gap-3 text-sm text-gray-600">
			<div class="flex flex-row items-center">
				<Checkbox.Root id="c1" className="bg-white shadow-sm h-6 aspect-square rounded focus:outline focus:outline-2 focus:outline-purple-600">
					<Checkbox.Indicator>X</Checkbox.Indicator>
				</Checkbox.Root>
				<label class="ml-3" for="c1">Checkbox 1</label>
			</div>
			<div class="flex flex-row items-center">
				<Checkbox.Root id="c2" className="bg-white shadow-sm h-6 aspect-square rounded focus:outline focus:outline-2 focus:outline-purple-600">
					<Checkbox.Indicator>X</Checkbox.Indicator>
				</Checkbox.Root>
				<label class="ml-3" for="c2">Checkbox 2</label>
			</div>
			<div class="flex flex-row items-center">
				<Checkbox.Root id="c3" className="bg-white shadow-sm h-6 aspect-square rounded focus:outline focus:outline-2 focus:outline-purple-600">
					<Checkbox.Indicator>X</Checkbox.Indicator>
				</Checkbox.Root>
				<label class="ml-3" for="c3">Checkbox 3</label>
			</div>
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
			
			<CardTitle title="Progress" />
		</Card>
		<Card>
			<RadioGroup.Root className="flex flex-col gap-3 text-sm text-gray-600">
				<div class="flex flex-row items-center">
					<RadioGroup.Item value="r1" id="r1" className="bg-white shadow-sm h-6 aspect-square rounded-full flex items-center justify-center focus:outline focus:outline-2 focus:outline-purple-600">
						<RadioGroup.Indicator><span class="absolute bg-purple-500 rounded-full h-3 aspect-square"></span> </RadioGroup.Indicator>
					</RadioGroup.Item>
					<label class="ml-3" for="r1">RadioGroup 1</label>
				</div>
				<div class="flex flex-row items-center">
					<RadioGroup.Item value="r2" id="r2" className="bg-white shadow-sm h-6 aspect-square rounded-full flex items-center justify-center focus:outline focus:outline-2 focus:outline-purple-600">
						<RadioGroup.Indicator><span class="absolute bg-purple-500 rounded-full h-3 aspect-square"></span></RadioGroup.Indicator>
					</RadioGroup.Item>
					<label class="ml-3" for="r2">RadioGroup 2</label>
				</div>
				<div class="flex flex-row items-center">
					<RadioGroup.Item value="r3" id="r3" className="bg-white shadow-sm h-6 aspect-square rounded-full flex items-center justify-center focus:outline focus:outline-2 focus:outline-purple-600">
						<RadioGroup.Indicator><span class="absolute bg-purple-500 rounded-full h-3 aspect-square"></span></RadioGroup.Indicator>
					</RadioGroup.Item>
					<label class="ml-3" for="r3">Checkbox 3</label>
				</div>
		</RadioGroup.Root>
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
			<Tabs.Group className="flex flex-col rounded-lg bg-white shadow min-h-[140px] text-sm min-w-[240px]">
				<Tabs.List
					selected={storeTab}
					className="flex flex-row focus:[&>*]:rounded shadow-[0_-1px_0px_0px_inset] shadow-gray-200 [&>*]:py-3 [&>*]:px-5 [&>*]:text-gray-400 data-[state='active']:[&>*]:shadow-[0_-2px_0px_0px_inset] data-[state='active']:[&>*]:shadow-purple-600 data-[state='active']:[&>*]:text-purple-600 focus:[&>*]:outline focus:[&>*]:outline-2 focus:[&>*]:outline-purple-600 focus:[&>*]:relative"
				>
					<Tabs.Trigger value="a">Tab 1</Tabs.Trigger>
					<Tabs.Trigger value="b">Tab 2</Tabs.Trigger>
					<Tabs.Trigger value="c">Tab 3</Tabs.Trigger>
				</Tabs.List>
				<Tabs.Content className="mt-2 py-3 px-5">
					{#if $storeTab === 'a'}
					<div class="flex flex-col justify-between gap-6">
						<span class="text-gray-400">Save changes?</span>
						<div class="flex flex-row justify-end">
							<button class="shadow-sm rounded-md border px-4 py-[6px] text-sm -mr-2">Save</button>
						</div>
					</div>
					{/if}
					{#if $storeTab === 'b'}Content B{/if}
					{#if $storeTab === 'c'}Content C{/if}
				</Tabs.Content>
			</Tabs.Group>
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
