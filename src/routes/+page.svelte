<script lang="ts">
	import {Check, ChevronDown, Italic, AlignLeft, AlignCenter, AlignRight} from 'lucide-svelte'
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
	
	import Checkbox from '$lib/Checkbox'
	import * as Tabs from '$lib/Tabs'
	import * as RadioGroup from '$lib/Radio';
	import * as Select from '$lib/Select'
	import * as ToggleGroup from '$lib/ToggleGroup'
	import Slider from '$lib/Slider';
	import Switch from '$lib/Switch';
	import Tooltip from '$lib/Tooltip';
	import Toast from '$lib/Toast';
	import Popover from '$lib/Popover';

	import { writable, type Writable } from 'svelte/store';
	import Portal from '$lib/Portal/Portal.svelte';
	import Option from '$lib/Listbox/Option.svelte';

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
			<div class="flex flex-col gap-3 text-sm text-gray-600">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="text-[13px] flex flex-row gap-3 items-center" for="c1">
				<Checkbox id="c1" className="bg-white shadow-sm h-6 aspect-square rounded focus:outline focus:outline-2 focus:outline-purple-600 flex items-center justify-center">
					<Check size="15"/>
				</Checkbox>
				Checkbox 1</label>
				<label class="text-[13px] flex flex-row gap-3 items-center" for="c2">
				<Checkbox id="c2" className="bg-white shadow-sm h-6 aspect-square rounded focus:outline focus:outline-2 focus:outline-purple-600 flex items-center justify-center">
					<Check size="15"/>
				</Checkbox>
				Checkbox 2</label>
				<label class="text-[13px] flex flex-row gap-3 items-center" for="c3">
				<Checkbox id="c3" className="bg-white shadow-sm h-6 aspect-square rounded focus:outline focus:outline-2 focus:outline-purple-600 flex items-center justify-center">
					<Check size="15"/>
				</Checkbox>
				Checkbox 3</label>
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
			<Select.Root>
				<Select.Trigger className="bg-white py-2 px-3 rounded focus:outline focus:outline-2 focus:outline-black flex flex-row gap-1 items-center text-[13px] text-[#6E56CF]">
					<Select.Value placeholder="Select a value..."/>
					<span class="opacity-70 -mb-0.5">
					<ChevronDown size="15"/>
				</span>
				</Select.Trigger>
				<Select.Portal className="border bg-white rounded-lg border-gray-200 w-[135px] flex flex-col p-[6px] text-[13px] text-[#6E56CF] shadow-lg">
					<Select.Group label="fruits" labelClass="pl-[25px] pb-1 pt-0.5 text-gray-400 text-xs">
						<Select.Option value="apple" className="px-2 py-1 data-[highlighted='true']:bg-[#6E56CF] data-[highlighted='true']:text-white rounded" />
						<Select.Option value="banana" className="px-2 py-1 data-[highlighted='true']:bg-[#6E56CF] data-[highlighted='true']:text-white rounded" />
						<Select.Option value="blueberry" className="px-2 py-1 data-[highlighted='true']:bg-[#6E56CF] data-[highlighted='true']:text-white rounded" />
						<Select.Option value="grapes" className="px-2 py-1 data-[highlighted='true']:bg-[#6E56CF] data-[highlighted='true']:text-white rounded" />
						<Select.Option value="pineapple" className="px-2 py-1 data-[highlighted='true']:bg-[#6E56CF] data-[highlighted='true']:text-white rounded" />
					</Select.Group>
						<div class="h-[1px] mx-1 my-2 bg-gray-200"></div>
						<Select.Group label="vegetables" labelClass="pl-[25px] pb-1 pt-0.5 text-gray-400 text-xs">
							<Select.Option value="broccoli" className="px-2 py-1 data-[highlighted='true']:bg-[#6E56CF] data-[highlighted='true']:text-white rounded" />
							<Select.Option value="spinach" className="px-2 py-1 data-[highlighted='true']:bg-[#6E56CF] data-[highlighted='true']:text-white rounded" />
							<Select.Option value="aubergine" className="px-2 py-1 data-[highlighted='true']:bg-[#6E56CF] data-[highlighted='true']:text-white rounded" />
							</Select.Group>
				</Select.Portal>
			</Select.Root>
			<CardTitle title="Select" />
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
					className="flex flex-row  shadow-[0_-1px_0px_0px_inset] shadow-gray-200 [&>*]:py-3 [&>*]:px-5 [&>*]:text-gray-400 first:[&>*]:rounded-tl-lg data-[state='active']:[&>*]:shadow-[0_-2px_0px_0px_inset] data-[state='active']:[&>*]:shadow-[#6E56CF] data-[state='active']:[&>*]:text-[#6E56CF] focus:[&>*]:outline focus:[&>*]:outline-2 focus:[&>*]:outline-black focus:[&>*]:relative"
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
				className="flex items-center justify-center focus:outline bg-white shadow-sm h-10 aspect-square rounded data-[state='on']:bg-[#E4DEFC] focus:outline-2 focus:outline-black text-gray-600"
			>
				<Italic size="14"/>
			</Toggle>
			<CardTitle title="Toggle" />
		</Card>
		<Card>
			<ToggleGroup.Root
				className="text-gray-600 flex [&>*]:flex [&>*]:items-center [&>*]:justify-center rounded bg-white shadow-sm first:[&>*]:rounded-l last:[&>*]:rounded-r last:[&>*]:border-r-0 [&>*]:border-r [&>*]:border-gray-200 [&>*]:h-10 [&>*]:aspect-square data-[state='on']:[&>*]:bg-[#E4DEFC] focus:[&>*]:outline focus:[&>*]:outline-2 focus:[&>*]:outline-black focus:[&>*]:relative"
			>
				<ToggleGroup.Item value="item1"><AlignLeft size="15"/></ToggleGroup.Item>
				<ToggleGroup.Item value="item2"><AlignCenter size="15"/></ToggleGroup.Item>
				<ToggleGroup.Item value="item3"><AlignRight size="15"/></ToggleGroup.Item>
			</ToggleGroup.Root>
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
