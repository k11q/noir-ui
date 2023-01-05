<script lang="ts">
	import {Check, ChevronDown, Italic, AlignLeft, AlignCenter, AlignRight, AlignJustify, Command} from 'lucide-svelte'
	import Accordion from '$lib/Accordion/Accordion.svelte';
	import AccordionItem from '$lib/Accordion/AccordionItem.svelte';
	import AccordionContent from '$lib/Accordion/AccordionContent.svelte';
	import AccordionHeader from '$lib/Accordion/AccordionHeader.svelte';
	import Button from '$lib/Button/Button.svelte';
	import Card from '$lib/Card/Card.svelte';
	import CardTitle from '$lib/Card/CardTitle.svelte';
	
	import Toggle from '$lib/Toggle/Toggle.svelte';
	
	import Checkbox from '$lib/Checkbox'
	import * as Tabs from '$lib/Tabs'
	import * as RadioGroup from '$lib/Radio';
	import * as Select from '$lib/Select'
	import * as DropdownMenu from '$lib/DropdownMenu'
	import * as AlertDialog from '$lib/AlertDialog'
	import * as ToggleGroup from '$lib/ToggleGroup'
	import * as Dialog from '$lib/Dialog';
	import Slider from '$lib/Slider';
	import Switch from '$lib/Switch';
	import Tooltip from '$lib/Tooltip';
	import * as Toast from '$lib/Toast';
	import Popover from '$lib/Popover';

	import { writable, type Writable } from 'svelte/store';

	const storeTab: Writable<string> = writable('a');

	let switchChecked = false;

	</script>

<div class="w-full flex flex-col items-center gap-2 py-16 lg:px-12 px-5">
	<h1 class="text-2xl font-semibold">Noir UI</h1>
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
			<AlertDialog.Root>
				<AlertDialog.Trigger className="bg-white py-2 px-3 rounded focus:outline focus:outline-2 focus:outline-black flex flex-row gap-1 items-center text-[13px] font-medium text-black">
					Delete Account
				</AlertDialog.Trigger>
				<AlertDialog.Portal overlayClass="bg-gray-400 opacity-50" className="flex flex-col items-between justify-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[500px] min-h-[150px] first-letter:border bg-white rounded-lg border-gray-200 p-6 gap-3 shadow-lg text-[13px]">
					<div class="text-base font-medium">Are you absolutely sure?</div><p>This action cannot be undone. This will permanently delete your account and remove your data from our servers.
					</p><div class="pt-2 flex flex-row gap-3 justify-end"><button class="bg-gray-100 rounded px-4 py-2">Cancel</button><button class="bg-red-100 rounded px-4 py-2">Yes, delete my account</button></div>
				</AlertDialog.Portal>
			</AlertDialog.Root>
			<CardTitle title="Alert Dialog" />
		</Card>
		<Card>
			<div class="flex flex-col gap-3 text-sm text-gray-600">
				<Checkbox labelClass="text-[13px] flex flex-row gap-3 items-center [&>input:focus+.checkbox]:outline [&>input:focus+.checkbox]:outline-2 [&>input:focus+.checkbox]:outline-black"
				className="bg-white shadow-sm h-6 aspect-square rounded flex items-center justify-center">
					<Check size="15" slot="indicator"/>
					<span class="select-none">Checkbox 1</span>
				</Checkbox>
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
			<Dialog.Root>
				<Dialog.Trigger className="bg-white py-2 px-3 rounded focus:outline focus:outline-2 focus:outline-black flex flex-row gap-1 items-center text-[13px] font-medium text-black">
					Delete Account
				</Dialog.Trigger>
				<Dialog.Portal overlayClass="bg-gray-400 opacity-50" className="flex flex-col items-between justify-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[500px] min-h-[150px] first-letter:border bg-white rounded-lg border-gray-200 p-6 gap-3 shadow-lg text-[13px]">
					<div class="text-base font-medium">Are you absolutely sure?</div><p>This action cannot be undone. This will permanently delete your account and remove your data from our servers.
					</p><div class="pt-2 flex flex-row gap-3 justify-end"><button class="bg-gray-100 rounded px-4 py-2">Cancel</button><button class="bg-red-100 rounded px-4 py-2">Yes, delete my account</button></div>
				</Dialog.Portal>
			</Dialog.Root>
			<CardTitle title="Dialog" />
		</Card>
		<Card>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger className="flex items-center justify-center bg-white h-10 rounded-full aspect-square focus:outline focus:outline-2 focus:outline-black">
					<AlignJustify size="15"/>
				</DropdownMenu.Trigger>
				<DropdownMenu.Portal className="border bg-white rounded-lg border-gray-200 w-60 flex flex-col p-[6px] text-[13px] text-black shadow-lg">
					<DropdownMenu.Group>
						<DropdownMenu.Option value="New Tab" className="px-2 py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white [&>*]:data-[highlighted='true']:text-white rounded" ><span class="flex flex-grow items-center text-gray-500 justify-end tracking-wide">⌘+T</span></DropdownMenu.Option>
						<DropdownMenu.Option value="New Window" className="px-2 py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded" />
						<DropdownMenu.Option value="New Private Window" className="px-2 py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded" />
						<DropdownMenu.Option value="More Tools" className="px-2 py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded" />
					</DropdownMenu.Group>
					<div class="h-[1px] mx-1 my-1 bg-gray-200"></div>
					<DropdownMenu.Group>
						<DropdownMenu.Option value="Show Bookmarks" className="px-2 py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded" />
						<DropdownMenu.Option value="Show Full URLs" className="px-2 py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded" />
					</DropdownMenu.Group>
						<div class="h-[1px] mx-1 my-1 bg-gray-200"></div>
						<DropdownMenu.Group label="People" labelClass="pl-[25px] pb-1 pt-0.5 text-gray-400 text-xs">
							<DropdownMenu.Option value="Khairul Haaziq" className="px-2 py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded" />
							<DropdownMenu.Option value="spinach" className="px-2 py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded" />
							<DropdownMenu.Option value="aubergine" className="px-2 py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded" />
							</DropdownMenu.Group>
				</DropdownMenu.Portal>
			</DropdownMenu.Root>

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
				buttonClass="bg-white py-2 px-4 rounded focus:outline focus:outline-2 focus:outline-black"
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
		<div class="flex flex-col gap-3 text-sm text-gray-600">
		<RadioGroup.Radio2 name="radiogroup1" value="default"
		labelClass="text-[13px] flex flex-row gap-3 items-center [&>input:focus+.radio]:outline [&>input:focus+.radio]:outline-2 [&>input:focus+.radio]:outline-black"
			className="bg-white shadow-sm h-6 aspect-square rounded-full flex items-center justify-center">
				<span class="block bg-black rounded-full h-[10px] aspect-square" slot="indicator"></span>
				<span class="select-none">Default</span>
			</RadioGroup.Radio2>
			<RadioGroup.Radio2 name="radiogroup1" value="comfortable"
			labelClass="text-[13px] flex flex-row gap-3 items-center [&>input:focus+.radio]:outline [&>input:focus+.radio]:outline-2 [&>input:focus+.radio]:outline-black"
				className="bg-white shadow-sm h-6 aspect-square rounded-full flex items-center justify-center">
					<span class="block bg-black rounded-full h-[10px] aspect-square" slot="indicator"></span>
					<span class="select-none">Comfortable</span>
				</RadioGroup.Radio2>
				<RadioGroup.Radio2 name="radiogroup1" value="compact"
			labelClass="text-[13px] flex flex-row gap-3 items-center [&>input:focus+.radio]:outline [&>input:focus+.radio]:outline-2 [&>input:focus+.radio]:outline-black"
				className="bg-white shadow-sm h-6 aspect-square rounded-full flex items-center justify-center">
					<span class="block bg-black rounded-full h-[10px] aspect-square" slot="indicator"></span>
					<span class="select-none">Compact</span>
				</RadioGroup.Radio2>
			</div>
			<CardTitle title="Radio Group" />
		</Card>
		<Card>
			<Select.Root>
				<Select.Trigger className="bg-white py-2 px-3 rounded focus:outline focus:outline-2 focus:outline-black flex flex-row gap-1 items-center text-[13px] text-black">
					<Select.Value placeholder="Select a value..."/>
					<span class="opacity-70 -mb-0.5">
					<ChevronDown size="15"/>
				</span>
				</Select.Trigger>
				<Select.Portal className="border bg-white rounded-lg border-gray-200 w-[135px] flex flex-col p-[6px] text-[13px] text-black shadow-lg">
					<Select.Group label="fruits" labelClass="pl-[25px] pb-1 pt-0.5 text-gray-400 text-xs">
						<Select.Option value="apple" className="px-2 py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded" />
						<Select.Option value="banana" className="px-2 py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded" />
						<Select.Option value="blueberry" className="px-2 py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded" />
						<Select.Option value="grapes" className="px-2 py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded" />
						<Select.Option value="pineapple" className="px-2 py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded" />
					</Select.Group>
						<div class="h-[1px] mx-1 my-2 bg-gray-200"></div>
						<Select.Group label="vegetables" labelClass="pl-[25px] pb-1 pt-0.5 text-gray-400 text-xs">
							<Select.Option value="broccoli" className="px-2 py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded" />
							<Select.Option value="spinach" className="px-2 py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded" />
							<Select.Option value="aubergine" className="px-2 py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded" />
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
			<Switch bind:checked={switchChecked} labelClass="[&>input:focus+span]:outline [&>input:focus+span]:outline-2 [&>input:focus+span]:outline-black"/>
			<CardTitle title="Switch" />
		</Card>
		<Card>
			<Tabs.Group className="flex flex-col rounded-lg bg-white shadow min-h-[140px] text-sm min-w-[240px]">
				<Tabs.List
					selected={storeTab}
					className="flex flex-row  shadow-[0_-1px_0px_0px_inset] shadow-gray-200 [&>*]:py-3 [&>*]:px-5 [&>*]:text-gray-400 first:[&>*]:rounded-tl-lg data-[state='active']:[&>*]:shadow-[0_-2px_0px_0px_inset] data-[state='active']:[&>*]:shadow-black data-[state='active']:[&>*]:text-black focus:[&>*]:outline focus:[&>*]:outline-2 focus:[&>*]:outline-black focus:[&>*]:relative"
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
			<Toast.Root duration={3000}>
				<Toast.Trigger className="bg-white py-2 px-3 rounded focus:outline focus:outline-2 focus:outline-black flex flex-row gap-1 items-center text-[13px] font-medium text-black">
					Add to calendar
				</Toast.Trigger>
				<Toast.Portal className="flex flex-row justify-between items-center min-w-[300px] first-letter:border bg-white rounded-lg border-gray-200 px-6 py-4 gap-2 shadow-lg text-[13px]">
					<div class="hover:bg-gray-200"><div class="text-sm font-medium">Scheduled</div><p>Catch up tomorrow</p></div><button class="bg-gray-200 rounded px-2 py-1">Undo</button>
				</Toast.Portal>
			</Toast.Root>
			<CardTitle title="Toast" />
		</Card>
		<Card>
			<Toggle
			labelClass="[&>input:checked+span]:bg-[#00000010] [&>input:focus+span]:outline [&>input:focus+span]:outline-2 [&>input:focus+span]:outline-black"
				className="flex items-center justify-center focus:outline bg-white shadow-sm h-10 aspect-square rounded text-gray-600"
			>
				<Italic size="14"/>
			</Toggle>
			<CardTitle title="Toggle" />
		</Card>
		<Card>
			<ToggleGroup.Root
				className="text-gray-600 flex [&>*>span]:flex [&>*>span]:items-center [&>*>span]:justify-center rounded bg-white shadow-sm [&>span]:first:[&>*]:rounded-l [&>span]:last:[&>*]:rounded-r [&>span]:last:[&>*]:border-r-0 [&>*>span]:border-r [&>*>span]:border-gray-200 [&>*>span]:h-10 [&>*>span]:aspect-square focus:[&>*>span]:relative
				[&>*>input:checked+span]:bg-[#00000010] [&>*>input:focus+span]:outline [&>*>input:focus+span]:outline-2 [&>*>input:focus+span]:outline-black [&>*>input:focus+span]:relative"
			>
				<ToggleGroup.Item value="item1"><AlignLeft size="15"/></ToggleGroup.Item>
				<ToggleGroup.Item value="item2"><AlignCenter size="15"/></ToggleGroup.Item>
				<ToggleGroup.Item value="item3"><AlignRight size="15"/></ToggleGroup.Item>
			</ToggleGroup.Root>
			<CardTitle title="Toggle Group" />
		</Card>
		<Card>
			<Tooltip
				buttonClass="bg-white h-10 rounded-full aspect-square focus:outline focus:outline-2 focus:outline-black"
			>
				<svelte:fragment slot="trigger">+</svelte:fragment>
				<div slot="content" class="px-4 py-2">Tooltip Content!</div>
			</Tooltip>
			<CardTitle title="Tooltip" />
		</Card>
	</div>
</div>
