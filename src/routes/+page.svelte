<script lang="ts">
	import {
		Check,
		ChevronDown,
		Italic,
		AlignLeft,
		AlignCenter,
		AlignRight,
		AlignJustify,
		Settings2,
		Github,
		ChevronsUpDown,
		X
	} from 'lucide-svelte';

	import { slide } from 'svelte/transition';
	import Card from '$lib/Card/Card.svelte';
	import CardTitle from '$lib/Card/CardTitle.svelte';

	import Toggle from '$lib/Toggle';
	import * as Accordion from '$lib/Accordion';
	import Checkbox from '$lib/Checkbox';
	import * as Tabs from '$lib/Tabs';
	import Radio from '$lib/Radio';
	import * as Select from '$lib/Select';
	import * as DropdownMenu from '$lib/DropdownMenu';
	import * as AlertDialog from '$lib/AlertDialog';
	import * as ToggleGroup from '$lib/ToggleGroup';
	import * as Dialog from '$lib/Dialog';
	import * as Slider from '$lib/Slider';
	import Switch from '$lib/Switch';
	import * as Tooltip from '$lib/Tooltip';
	import * as Toast from '$lib/Toast';
	import * as Popover from '$lib/Popover';
	import * as HoverCard from '$lib/HoverCard';
	import * as ContextMenu from '$lib/ContextMenu';
	import * as Collapsible from '$lib/Collapsible';

	import { writable, type Writable } from 'svelte/store';
	import CardStatus from '$lib/Card/CardStatus.svelte';

	const dialogOpen: Writable<boolean> = writable(false);
	const collapsibleExpanded: Writable<boolean> = writable(false);
	const checkedDropdown = writable(true);
	const checkedDropdown2 = writable(false);
	const selectedMenu = writable('Khairul Haaziq');

	function closeAlertDialog() {
		dialogOpen.set(false);
	}

	function handleChange() {
		console.log('buatlapape');
	}

	function addNewTab() {
		alert('Added New Tab!');
	}
	function addNewWindow() {
		alert('Added New Window!');
	}</script>

<div class="w-full flex flex-col items-center gap-2 pb-16 pt-6 lg:px-12 px-5 text-[13px]">
	<div class="w-full max-w-[1400px] flex flex-col items-start gap-2 mt-12 mb-6">
		<div class="flex flex-row items-end">
			<img
				src="logo.svg"
				alt="Noir UI- Accessible Components Toolkit"
				class="w-full max-w-[200px]"
			/>
			<h3 class="text-base leading-[1rem]">Components made easy</h3>
		</div>
	</div>
	<div class="grid md:grid-cols-12 grid-cols-8 max-w-[1400px] w-full gap-5">
		<Card>
			<Accordion.Root
			type='single'
				value={'item-1'}
				class="bg-white rounded-md min-w-44 sm:w-[220px] flex flex-col shadow first:[&>*]:rounded-t-md last:[&>*]:rounded-b-md [&>*>*]:last:[&>*]:rounded-b-md"
			>
				<Accordion.Item
					value="item-1"
					class="flex flex-col focus-within:outline focus-within:outline-2 focus-within:outline-black focus-within:relative"
				>
					<Accordion.Header
						class="flex p-3 text-left justify-between items-center [&>.AccordionChevron]:data-[state='open']:rotate-180 [&>.AccordionChevron]:duration-300 [&>.AccordionChevron]:ease-in [&>.AccordionChevron]:opacity-60"
						><span> Is it accessible?</span><span
							class="AccordionChevron"
							><ChevronDown size={15} /></span
						></Accordion.Header
					>
					<Accordion.Content
						><div
							class="p-3 border-t bg-neutral-100 opacity-60"
							transition:slide
						>
							Yes. It adheres to the WAI-ARIA design
							pattern.
						</div></Accordion.Content
					>
				</Accordion.Item>
				<Accordion.Item
					value="item-2"
					class="flex flex-col focus-within:outline focus-within:outline-2 focus-within:outline-black focus-within:relative"
				>
					<Accordion.Header
						class="flex p-3 text-left justify-between items-center border-t [&>.AccordionChevron]:data-[state='open']:rotate-180 [&>.AccordionChevron]:duration-300 [&>.AccordionChevron]:ease-in [&>.AccordionChevron]:opacity-60"
						><span> Is it unstyled?</span><span
							class="AccordionChevron"
							><ChevronDown size={15} /></span
						></Accordion.Header
					>
					<Accordion.Content
						><div
							class="p-3 border-t bg-neutral-100 opacity-60"
							transition:slide
						>
							Content sini
						</div></Accordion.Content
					>
				</Accordion.Item>
				<Accordion.Item
					value="item-3"
					class="flex flex-col focus-within:outline focus-within:outline-2 focus-within:outline-black focus-within:relative"
				>
					<Accordion.Header
						class="flex p-3 text-left justify-between items-center border-t [&>.AccordionChevron]:data-[state='open']:rotate-180 [&>.AccordionChevron]:duration-300 [&>.AccordionChevron]:ease-in [&>.AccordionChevron]:opacity-60"
						><span> Can it be animated?</span><span
							class="AccordionChevron"
							><ChevronDown size={15} /></span
						></Accordion.Header
					>
					<Accordion.Content
						><div
							class="p-3 border-t bg-neutral-100 opacity-60"
							transition:slide
						>
							Content sini
						</div></Accordion.Content
					>
				</Accordion.Item>
			</Accordion.Root>
			<CardTitle>
				<span>Accordion</span><CardStatus status={4} />
			</CardTitle>
		</Card>
		<Card>
			<AlertDialog.Root open={dialogOpen}>
				<AlertDialog.Trigger
					class="bg-white py-2 px-3 rounded shadow focus:outline focus:outline-2 focus:outline-black flex flex-row gap-1 items-center font-medium text-black"
				>
					Delete Account
				</AlertDialog.Trigger>
				<AlertDialog.Overlay class="bg-neutral-400 opacity-50"/>
				<AlertDialog.Content
					class="flex flex-col items-between justify-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[500px] min-h-[150px] first-letter:border bg-white rounded-lg border-neutral-200 p-6 gap-3 shadow-lg text-[13px]"
				>
					<div class="text-base font-medium">
						Are you absolutely sure?
					</div>
					<p class="opacity-60">
						This action cannot be undone. This will permanently
						delete your account and remove your data from our
						servers.
					</p>
					<div class="pt-2 flex flex-row gap-3 justify-end">
						<button
							class="bg-neutral-100 rounded px-4 py-2 text-neutral-700"
							on:click={closeAlertDialog}>Cancel</button
						><button
							class="bg-red-100 rounded px-4 py-2 text-red-900"
							>Yes, delete my account</button
						>
					</div>
				</AlertDialog.Content>
			</AlertDialog.Root>
			<CardTitle>
				<span>Alert Dialog</span><CardStatus status={4} />
			</CardTitle>
		</Card>
		<Card>
			<div class="flex flex-col gap-3 text-neutral-600">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label
					class="flex flex-row gap-3 items-center [&>.checkbox]:hover:bg-neutral-100"
				>
					<Checkbox
						class="bg-white shadow h-6 aspect-square rounded flex items-center justify-center  focus-within:outline focus-within:outline-2 focus-within:outline-[#00000066]"
					>
						<div
							class="bg-black h-full w-full rounded flex items-center justify-center"
						>
							<Check
								size={15}
								color="white"
								strokeWidth={3}
							/>
						</div>
					</Checkbox>
					<span class="select-none">Checkbox 1</span>
				</label>
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label
					class="flex flex-row gap-3 items-center"
				>
					<Checkbox
					disabled={true}
						class="bg-neutral-200 shadow h-6 aspect-square rounded flex items-center justify-center  focus-within:outline focus-within:outline-2 focus-within:outline-[#00000066]"
					>
						<div
							class="bg-black h-full w-full rounded flex items-center justify-center"
						>
							<Check
								size={15}
								color="white"
								strokeWidth={3}
							/>
						</div>
					</Checkbox>
					<span class="select-none">Disabled Checkbox</span>
				</label>
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label
					class="flex flex-row gap-3 items-center [&>.checkbox]:hover:bg-neutral-100"
				>
					<Checkbox
					required={true}
						class="bg-white shadow h-6 aspect-square rounded flex items-center justify-center  focus-within:outline focus-within:outline-2 focus-within:outline-[#00000066]"
					>
						<div
							class="bg-black h-full w-full rounded flex items-center justify-center"
						>
							<Check
								size={15}
								color="white"
								strokeWidth={3}
							/>
						</div>
					</Checkbox>
					<span class="select-none">Required Checkbox</span>
				</label>
			</div>
			<CardTitle>
				<span>Checkbox</span><CardStatus status={4} />
			</CardTitle>
		</Card>
		<Card>
			<Collapsible.Root
				defaultOpen={true}
				class=" rounded-md min-w-44 sm:min-w-[220px] flex flex-col gap-[6px] shadow-sm"
			>
				<div class="flex items-center">
					<span class="flex-grow text-xs"
						>Khairul Haaziq follows you</span
					>
					<Collapsible.Trigger
						class="flex text-left shadow justify-center items-center h-6 aspect-square bg-white rounded-full focus:outline focus:outline-black focus:outline-2"
					>
						<span class="opacity-60" transition:slide>
							{#if $collapsibleExpanded}
								<X size={14} />
							{:else}
								<ChevronsUpDown size={14} />
							{/if}
						</span></Collapsible.Trigger
					>
				</div>
				<div class="p-2 bg-white rounded">Content sini</div>
				<Collapsible.Content
					><div class="p-2 bg-white rounded shadow">Content sini</div>
					<div class="p-2 bg-white rounded shadow">
						Content sini
					</div></Collapsible.Content
				>
			</Collapsible.Root>
			<CardTitle>
				<span>Collapsible</span><CardStatus status={4} />
			</CardTitle>
		</Card>
		<Card>
			<ContextMenu.Root>
				<ContextMenu.Trigger
					class="flex items-center justify-center bg-neutral-300 border-neutral-400 opacity-50 border-dashed border h-32 w-44 sm:w-52 rounded-md text-neutral-600"
				>
					<p>Right click here</p>
				</ContextMenu.Trigger>
				<ContextMenu.Portal
					class="border bg-white rounded-lg border-neutral-200 w-60 flex flex-col p-[6px] text-[13px] text-black shadow-lg"
				>
					<ContextMenu.Group>
						<ContextMenu.Option
							value="New Tab"
							class="px-2 py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white [&>*]:data-[highlighted='true']:text-white rounded"
							><span
								class="flex flex-grow items-center text-neutral-500 justify-end tracking-wide"
								>⌘+T</span
							></ContextMenu.Option
						>
						<ContextMenu.Option
							value="New Window"
							class="flex relative pl-[25px] items-center default py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded"
						/>
						<ContextMenu.Option
							value="New Private Window"
							class="flex relative pl-[25px] items-center default py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded"
						/>
						<ContextMenu.Option
							value="More Tools"
							class="flex relative pl-[25px] items-center default py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded"
						/>
					</ContextMenu.Group>
					<div class="h-[1px] mx-1 my-1 bg-neutral-200" />
					<ContextMenu.Group>
						<ContextMenu.Option
							value="Show Bookmarks"
							class="flex relative pl-[25px] items-center default py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded"
						/>
						<ContextMenu.Option
							value="Show Full URLs"
							class="flex relative pl-[25px] items-center default py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded"
						/>
					</ContextMenu.Group>
					<div class="h-[1px] mx-1 my-1 bg-neutral-200" />
					<ContextMenu.Group
						label="People"
						labelClass="pl-[25px] pb-1 pt-0.5 text-neutral-400 text-xs"
					>
						<ContextMenu.Option
							value="Khairul Haaziq"
							class="flex relative pl-[25px] items-center default py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded"
						/>
						<ContextMenu.Option
							value="spinach"
							class="flex relative pl-[25px] items-center default py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded"
						/>
						<ContextMenu.Option
							value="aubergine"
							class="flex relative pl-[25px] items-center default py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded"
						/>
					</ContextMenu.Group>
				</ContextMenu.Portal>
			</ContextMenu.Root>
			<CardTitle>
				<span>Context Menu</span><CardStatus status={1} />
			</CardTitle>
		</Card>
		<Card>
			<Dialog.Root>
				<Dialog.Trigger
					class="bg-white py-2 px-3 rounded shadow focus:outline focus:outline-2 focus:outline-black flex flex-row gap-1 items-center font-medium text-black"
				>
					Edit Profile
				</Dialog.Trigger>
				<Dialog.Portal
					overlayClass="bg-neutral-400 opacity-50"
					class="flex flex-col items-between justify-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[450px] min-h-[150px] first-letter:border bg-white rounded-lg border-neutral-200 p-6 gap-3 shadow-lg text-[13px]"
				>
					<div class="text-base font-medium">Edit profile</div>
					<p class="opacity-60">
						Make changes to your profile here. Click save when
						you're done.
					</p>
					<fieldset
						class="flex flex-row items-center justify-end gap-3 text-sm mt-3"
					>
						<label for="name">Name</label><input
							type="text"
							id="name"
							class="w-[290px] pl-3 py-2 outline outline-1 outline-neutral-400 rounded focus:outline-[3px] focus:outline-black"
						/>
					</fieldset>
					<fieldset
						class="flex flex-row items-center justify-end gap-3 text-sm mt-1"
					>
						<label for="name">Age</label><input
							type="text"
							id="name"
							class="w-[290px] pl-3 py-2 outline outline-1 outline-neutral-400 rounded focus:outline-[3px] focus:outline-black"
						/>
					</fieldset>
					<div class="pt-2 flex flex-row gap-3 justify-end">
						<button
							class="bg-green-100 rounded px-4 py-2 text-green-900"
							>Save changes</button
						>
					</div>
				</Dialog.Portal>
			</Dialog.Root>
			<CardTitle>
				<span>Dialog</span><CardStatus status={4} />
			</CardTitle>
		</Card>
		<Card>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger
					className="flex items-center justify-center bg-white h-10 rounded-full shadow aspect-square focus:outline focus:outline-2 focus:outline-black text-neutral-600"
				>
					<AlignJustify size={15} />
				</DropdownMenu.Trigger>
				<DropdownMenu.Portal
					class="border bg-white rounded-lg border-neutral-200 w-60 flex flex-col p-[6px] text-[13px] text-black shadow-lg"
				>
					<DropdownMenu.Group>
						<DropdownMenu.Option
							on:change={addNewTab}
							value="New Tab"
							class="flex pl-[25px] pr-2 items-center default py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white [&>*]:data-[highlighted='true']:text-white rounded"
							>New Tab<span
								class="flex flex-grow items-center text-neutral-500 justify-end tracking-wide"
								>⌘+T</span
							></DropdownMenu.Option
						>
						<DropdownMenu.Option
							on:change={addNewWindow}
							value="New Window"
							class="flex relative pl-[25px] items-center default py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded"
							>New Window</DropdownMenu.Option
						>
						<DropdownMenu.Option
							value="New Private Window"
							class="flex relative pl-[25px] items-center default py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded"
							>New Private Window</DropdownMenu.Option
						>
						<DropdownMenu.Sub>
						<DropdownMenu.SubTrigger
							class="flex relative pl-[25px] items-center default py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded"
							>More Tools</DropdownMenu.SubTrigger
						></DropdownMenu.Sub>
					</DropdownMenu.Group>
					<div class="h-[1px] mx-1 my-1 bg-neutral-200" />
					<DropdownMenu.Group>
						<DropdownMenu.Option
							on:change={handleChange}
							checked={checkedDropdown}
							type="checkbox"
							value="Show Bookmarks"
							class="flex relative pl-[25px] items-center default py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded"
							>Show Bookmarks</DropdownMenu.Option
						>
						<DropdownMenu.Option
							on:change={handleChange}
							checked={checkedDropdown2}
							type="checkbox"
							value="Show full URLs"
							class="flex relative pl-[25px] items-center default py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded"
							>Show Full URLs</DropdownMenu.Option
						>
					</DropdownMenu.Group>
					<div class="h-[1px] mx-1 my-1 bg-neutral-200" />
					<DropdownMenu.Group
						label="People"
						labelClass="pl-[25px] pb-1 pt-0.5 text-neutral-400 text-xs"
					>
						<DropdownMenu.Option
							selected={selectedMenu}
							on:change={handleChange}
							name="DM Group 1"
							type="radio"
							value="Khairul Haaziq"
							class="flex relative pl-[25px] items-center default py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded"
							>Khairul Haaziq</DropdownMenu.Option
						>
						<DropdownMenu.Option
							selected={selectedMenu}
							on:change={handleChange}
							name="DM Group 1"
							type="radio"
							value="Luqman Hakim"
							class="flex relative pl-[25px] items-center default py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded"
							>Luqman Hakim</DropdownMenu.Option
						>
					</DropdownMenu.Group>
				</DropdownMenu.Portal>
			</DropdownMenu.Root>
			<CardTitle>
				<span>Dropdown Menu</span><CardStatus status={2} />
			</CardTitle>
		</Card>
		<Card>
			<HoverCard.Root>
				<HoverCard.Trigger
					class="flex items-center justify-center shadow bg-white h-10 rounded-full aspect-square text-neutral-600"
				>
					<Github size={15} />
				</HoverCard.Trigger>
				<HoverCard.Portal
					className="border bg-white rounded-lg border-neutral-200 w-64 flex flex-col gap-3 p-5 text-[13px] text-black shadow-lg"
				>
					<div class="text-base font-medium">HoverCard</div>
					<p class="opacity-50">
						All you need to know about HoverCard
					</p>
					<p class="opacity-40 text-[11px] mt-4">
						Copyright hovercard
					</p>
				</HoverCard.Portal>
			</HoverCard.Root>
			<CardTitle>
				<span>Hover Card</span><CardStatus status={4} />
			</CardTitle>
		</Card>
		<Card>
			<Popover.Root>
				<Popover.Trigger
					class="flex items-center justify-center shadow bg-white h-10 rounded-full aspect-square focus:outline focus:outline-2 focus:outline-black text-neutral-600"
				>
					<Settings2 size={15} />
				</Popover.Trigger>
				<Popover.Portal
					class="border bg-white rounded-lg border-neutral-200 w-64 flex flex-col gap-3 p-5 text-[13px] text-black shadow-lg"
				>
					<div>Dimensions</div>
					<fieldset
						class="flex flex-row items-center justify-between gap-3"
					>
						<label for="name">Width</label><input
							type="text"
							id="name"
							class="w-3/5 pl-2 py-1 outline outline-1 outline-neutral-300 rounded focus:outline-2 focus:outline-black"
						/>
					</fieldset>
					<fieldset
						class="flex flex-row items-center justify-between gap-3"
					>
						<label for="name">Max Width</label><input
							type="text"
							id="name"
							class="w-3/5 pl-2 py-1 outline outline-1 outline-neutral-300 rounded focus:outline-2 focus:outline-black"
						/>
					</fieldset>
					<fieldset
						class="flex flex-row items-center justify-between gap-3"
					>
						<label for="name">Height</label><input
							type="text"
							id="name"
							class="w-3/5 pl-2 py-1 outline outline-1 outline-neutral-300 rounded focus:outline-2 focus:outline-black"
						/>
					</fieldset>
					<fieldset
						class="flex flex-row items-center justify-between gap-3"
					>
						<label for="name">Height</label><input
							type="text"
							id="name"
							class="w-3/5 pl-2 py-1 outline outline-1 outline-neutral-300 rounded focus:outline-2 focus:outline-black"
						/>
					</fieldset>
				</Popover.Portal>
			</Popover.Root>
			<CardTitle>
				<span>Popover</span><CardStatus status={3} />
			</CardTitle>
		</Card>
		<Card>
			<div class="flex flex-col gap-3 text-neutral-600">
				<Radio
					name="radiogroup1"
					value="default"
					labelClass=" flex flex-row gap-3 items-center [&>input:focus+span]:outline [&>input:focus+span]:outline-2 [&>input:focus+span]:outline-black"
					class="bg-white shadow h-6 aspect-square rounded-full flex items-center justify-center"
				>
					<span
						class="block bg-black rounded-full h-[10px] aspect-square"
						slot="indicator"
					/>
					<span class="select-none">Default</span>
				</Radio>
				<Radio
					name="radiogroup1"
					value="comfortable"
					labelClass=" flex flex-row gap-3 items-center [&>input:focus+span]:outline [&>input:focus+span]:outline-2 [&>input:focus+span]:outline-black"
					class="bg-white shadow h-6 aspect-square rounded-full flex items-center justify-center"
				>
					<span
						class="block bg-black rounded-full h-[10px] aspect-square"
						slot="indicator"
					/>
					<span class="select-none">Comfortable</span>
				</Radio>
				<Radio
					name="radiogroup1"
					value="compact"
					labelClass=" flex flex-row gap-3 items-center [&>input:focus+span]:outline [&>input:focus+span]:outline-2 [&>input:focus+span]:outline-black"
					class="bg-white shadow h-6 aspect-square rounded-full flex items-center justify-center"
				>
					<span
						class="block bg-black rounded-full h-[10px] aspect-square"
						slot="indicator"
					/>
					<span class="select-none">Compact</span>
				</Radio>
			</div>
			<CardTitle>
				<span>Radio Group</span><CardStatus status={4} />
			</CardTitle>
		</Card>
		<Card>
			<Select.Root>
				<Select.Trigger
					className="bg-white py-2 px-3 rounded shadow focus:outline focus:outline-2 focus:outline-black flex flex-row gap-1 items-center text-black"
				>
					<Select.Value placeholder="Select a value..." />
					<span class="opacity-70 -mb-0.5">
						<ChevronDown size={15} />
					</span>
				</Select.Trigger>
				<Select.Portal
					className="border bg-white rounded-lg border-neutral-200 w-[135px] flex flex-col p-[6px] text-[13px] text-black shadow-lg"
				>
					<Select.OptGroup
						label="fruits"
						labelClass="pl-[25px] pb-1 pt-0.5 text-neutral-400 text-xs"
					>
						<Select.Option
							value="apple"
							className="flex relative pl-[25px] items-center default py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded"
						/>
						<Select.Option
							value="banana"
							className="flex relative pl-[25px] items-center default py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded"
						/>
						<Select.Option
							value="blueberry"
							className="flex relative pl-[25px] items-center default py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded"
						/>
						<Select.Option
							value="grapes"
							className="flex relative pl-[25px] items-center default py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded"
						/>
						<Select.Option
							value="pineapple"
							className="flex relative pl-[25px] items-center default py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded"
						/>
					</Select.OptGroup>
					<div class="h-[1px] mx-1 my-2 bg-neutral-200" />
					<Select.OptGroup
						label="vegetables"
						labelClass="pl-[25px] pb-1 pt-0.5 text-neutral-400 text-xs"
					>
						<Select.Option
							value="broccoli"
							className="flex relative pl-[25px] items-center default py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded"
						/>
						<Select.Option
							value="spinach"
							className="flex relative pl-[25px] items-center default py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded"
						/>
						<Select.Option
							value="aubergine"
							className="flex relative pl-[25px] items-center default py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded"
						/>
					</Select.OptGroup>
				</Select.Portal>
			</Select.Root>
			<CardTitle>
				<span>Select</span><CardStatus status={1} />
			</CardTitle>
		</Card>
		<Card>
			<Slider.Root
				className="relative flex items-center w-[200px] touch-none select-none h-5"
			>
				<Slider.Range
					rangeClass="rounded-full h-[3px] flex-grow bg-gray-400 relative"
					trackerClass="rounded-full absolute bg-black h-full left-0"
				/>
				<Slider.Thumb
					className="block h-5 w-5 rounded-full shadow-sm bg-white focus:outline focus:outline-4 outline-[#0000006a]"
				/>
			</Slider.Root>
			<CardTitle>
				<span>Slider</span><CardStatus status={3} />
			</CardTitle>
		</Card>
		<Card>
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label
				class="flex gap-3 items-start max-w-[200px] [&>label>input:focus+span>span]:outline [&>label>input:focus+span>span]:outline-2 [&>label>input:focus+span>span]:outline-black"
			>
				<Switch />
				<span class="select-none text-neutral-500"
					>A switch is essentially a checkbox, it works without
					javascript!</span
				>
			</label>
			<CardTitle>
				<span>Switch</span><CardStatus status={4} />
			</CardTitle>
		</Card>
		<Card>
			<Tabs.Root
				selected={writable('a')}
				name="tabla"
				class="flex flex-col rounded-lg bg-white shadow min-h-[140px] w-[300px]"
			>
				<Tabs.List
					class="flex flex-row shadow-[0_-1px_0px_0px_inset] shadow-neutral-200 [&>*]:py-3 [&>*]:px-5 [&>*]:text-neutral-400 first:[&>*]:rounded-tl-lg data-[state='active']:[&>*]:shadow-[0_-2px_0px_0px_inset] data-[state='active']:[&>*]:shadow-black data-[state='active']:[&>*]:text-black focus-within:[&>*]:outline focus-within:[&>*]:outline-2 focus-within:[&>*]:outline-black focus-within:[&>*]:relative"
				>
					<Tabs.Item value="a">Account</Tabs.Item>
					<Tabs.Item value="b">Password</Tabs.Item>
				</Tabs.List>
				<Tabs.Content class="p-5 flex flex-col gap-3" value="a">
					<p class="text-neutral-400">
						Make changes to your account here. Click save when
						you're done.
					</p>
					<fieldset class="flex flex-col gap-1">
						<label class="Label" for="name"> Name </label>
						<input
							class="rounded border border-neutral-200 px-3 py-2"
							id="name"
							value="Pedro Duarte"
						/>
					</fieldset>
					<fieldset class="flex flex-col gap-1">
						<label class="Label" for="username">
							Username
						</label>
						<input
							class="rounded border border-neutral-200 px-3 py-2"
							id="username"
							value="@peduarte"
						/>
					</fieldset>
					<div class="flex flex-col mt-5 items-end"
					>
						<button class="bg-green-200 rounded px-3 py-2">Save changes</button>
					</div>
				</Tabs.Content>
				<Tabs.Content class="p-5 flex flex-col gap-3" value="b">
					<p class="text-neutral-400">
						Make changes to your account here. Click save when
						you're done.
					</p>
					<fieldset class="flex flex-col gap-1">
						<label class="Label" for="currentPassword">
							Current password
						</label>
						<input
							class="rounded border border-neutral-200 px-3 py-2"
							id="currentPassword"
							type="password"
						/>
					</fieldset>
					<fieldset class="flex flex-col gap-1">
						<label class="Label" for="newPassword">
							New password
						</label>
						<input
							class="rounded border border-neutral-200 px-3 py-2"
							id="newPassword"
							type="password"
						/>
					</fieldset>
					<fieldset class="flex flex-col gap-1">
						<label class="Label" for="confirmPassword">
							Confirm password
						</label>
						<input
							class="rounded border border-neutral-200 px-3 py-2"
							id="confirmPassword"
							type="password"
						/>
					</fieldset>
					<div class="flex flex-col mt-5 items-end"
					>
						<button class="bg-green-200 rounded px-3 py-2">Save changes</button>
					</div>
				</Tabs.Content>
			</Tabs.Root>
			<CardTitle>
				<span>Tabs</span><CardStatus status={2} />
			</CardTitle>
		</Card>
		<Card>
			<Toast.Root duration={3000}>
				<Toast.Trigger
					className="bg-white py-2 px-3 rounded shadow focus:outline focus:outline-2 focus:outline-black flex flex-row gap-1 items-center font-medium text-black"
				>
					Add to calendar
				</Toast.Trigger>
				<Toast.Portal
					className="flex flex-row justify-between items-center min-w-[300px] border bg-white rounded-lg border-neutral-200 px-6 py-4 gap-2 shadow-lg text-[13px]"
				>
					<div class="hover:bg-neutral-200">
						<div class="text-sm font-medium">Scheduled</div>
						<p>Catch up tomorrow</p>
					</div>
					<button class="bg-neutral-200 rounded px-2 py-1"
						>Undo</button
					>
				</Toast.Portal>
			</Toast.Root>
			<CardTitle>
				<span>Toast</span><CardStatus status={2} />
			</CardTitle>
		</Card>
		<Card>
			<Toggle
				labelClass="[&>input:checked+span]:bg-[#00000010] [&>input:focus+span]:outline [&>input:focus+span]:outline-2 [&>input:focus+span]:outline-black"
				class="flex items-center justify-center focus:outline bg-white hover:bg-neutral-100 shadow h-10 aspect-square rounded text-neutral-600"
			>
				<Italic size={14} />
			</Toggle>
			<CardTitle>
				<span>Toggle</span><CardStatus status={3} />
			</CardTitle>
		</Card>
		<Card>
			<ToggleGroup.Root
				class="text-neutral-600 flex [&>*>span]:flex [&>*>span]:items-center [&>*>span]:justify-center rounded bg-white shadow [&>span]:first:[&>*]:rounded-l [&>span]:last:[&>*]:rounded-r [&>span]:last:[&>*]:border-r-0 [&>*>span]:border-r [&>*>span]:border-neutral-200 [&>*>span]:h-10 [&>*>span]:aspect-square focus:[&>*>span]:relative
				[&>*>input:checked+span]:bg-[#00000010] [&>*>input:focus+span]:outline [&>*>input:focus+span]:outline-2 [&>*>input:focus+span]:outline-black [&>*>input:focus+span]:relative"
			>
				<ToggleGroup.Item value="item1" class="hover:bg-neutral-100"
					><AlignLeft size={15} /></ToggleGroup.Item
				>
				<ToggleGroup.Item value="item2" class="hover:bg-neutral-100"
					><AlignCenter size={15} /></ToggleGroup.Item
				>
				<ToggleGroup.Item value="item3" class="hover:bg-neutral-100"
					><AlignRight size={15} /></ToggleGroup.Item
				>
			</ToggleGroup.Root>
			<CardTitle>
				<span>Toggle Group</span><CardStatus status={3} />
			</CardTitle>
		</Card>
		<Card>
			<Tooltip.Root>
				<p>
					Example of inline
					<Tooltip.Trigger className="font-semibold"
						>Tooltip!</Tooltip.Trigger
					>
				</p>
				<Tooltip.Portal
					className="bg-black rounded flex flex-col text-[13px] text-white px-2 py-1"
				>
					This is a tooltip example
				</Tooltip.Portal>
			</Tooltip.Root>
			<CardTitle>
				<span>Tooltip</span><CardStatus status={3} />
			</CardTitle>
		</Card>
	</div>
</div>