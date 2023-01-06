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
	import * as RadioGroup from '$lib/Radio';
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

	const storeTab: Writable<string> = writable('a');

	const dialogOpen: Writable<boolean> = writable(false);
	const accordionCurrentExpanded: Writable<string> = writable('');
	const collapsibleExpanded: Writable<boolean> = writable(false);

	function closeAlertDialog(){
		dialogOpen.set(false)
	}
</script>

<div class="w-full flex flex-col items-center gap-2 py-16 lg:px-12 px-5 text-[13px]">
	<h1 class="text-2xl font-semibold">Noir UI</h1>
	<h3 class="text-lg mb-8">Ready made accessible components</h3>
	<div class="grid md:grid-cols-12 grid-cols-8 max-w-[1020px] w-full gap-5">
		<Card>
			<Accordion.Root className="bg-white rounded-md min-w-[220px] flex flex-col absolute top-[50px] shadow-sm first:[&>*]:rounded-t-md last:[&>*]:rounded-b-md [&>*]:last:[&>*]:rounded-b-md" currentExpanded={accordionCurrentExpanded}>
				<Accordion.Item value="item-1" className="flex flex-col focus-within:outline focus-within:outline-2 focus-within:outline-black focus-within:relative">
					<Accordion.Header className="flex p-3 text-left justify-between items-center"><span> Is it accessible?</span><span class={`${$accordionCurrentExpanded==='item-1'? 'rotate-180' : ''}  duration-300 ease-in opacity-60`}><ChevronDown size="15"/></span></Accordion.Header>
					<Accordion.Content><div class="p-3 border-t bg-neutral-100 opacity-60" transition:slide> Content sini</div></Accordion.Content>
				</Accordion.Item>
				<Accordion.Item value="item-2" className="flex flex-col focus-within:outline focus-within:outline-2 focus-within:outline-black focus-within:relative">
					<Accordion.Header className="flex p-3 text-left justify-between items-center border-t"><span> Is it unstyled?</span><span class={`${$accordionCurrentExpanded==='item-2'? 'rotate-180' : ''}  duration-300 ease-in opacity-60`}><ChevronDown size="15"/></span></Accordion.Header>
					<Accordion.Content><div class="p-3 border-t bg-neutral-100 opacity-60" transition:slide> Content sini</div></Accordion.Content>
				</Accordion.Item>
				<Accordion.Item value="item-3" className="flex flex-col focus-within:outline focus-within:outline-2 focus-within:outline-black focus-within:relative">
					<Accordion.Header className="flex p-3 text-left justify-between items-center border-t"><span> Can it be animated?</span><span class={`${$accordionCurrentExpanded==='item-3'? 'rotate-180' : ''}  duration-300 ease-in opacity-60`}><ChevronDown size="15"/></span></Accordion.Header>
					<Accordion.Content><div class="p-3 border-t bg-neutral-100 opacity-60" transition:slide> Content sini</div></Accordion.Content>
				</Accordion.Item>
			</Accordion.Root>
			<CardTitle title="Accordion" />
		</Card>
		<Card>
			<AlertDialog.Root open={dialogOpen}>
				<AlertDialog.Trigger
					className="bg-white py-2 px-3 rounded focus:outline focus:outline-2 focus:outline-black flex flex-row gap-1 items-center font-medium text-black"
				>
					Delete Account
				</AlertDialog.Trigger>
				<AlertDialog.Portal
					overlayClass="bg-neutral-400 opacity-50"
					className="flex flex-col items-between justify-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[500px] min-h-[150px] first-letter:border bg-white rounded-lg border-neutral-200 p-6 gap-3 shadow-lg text-[13px]"
				>
					<div class="text-base font-medium">Are you absolutely sure?</div>
					<p class="opacity-60">
						This action cannot be undone. This will permanently delete your account and remove your
						data from our servers.
					</p>
					<div class="pt-2 flex flex-row gap-3 justify-end">
						<button
							class="bg-neutral-100 rounded px-4 py-2 text-neutral-700"
							on:click={closeAlertDialog}>Cancel</button
						><button class="bg-red-100 rounded px-4 py-2 text-red-900"
							>Yes, delete my account</button
						>
					</div>
				</AlertDialog.Portal>
			</AlertDialog.Root>
			<CardTitle title="Alert Dialog" />
		</Card>
		<Card>
			<div class="flex flex-col gap-3 text-neutral-600">
				<Checkbox
					labelClass="flex flex-row gap-3 items-center [&>input:focus+.checkbox]:outline [&>input:focus+.checkbox]:outline-2 [&>input:focus+.checkbox]:outline-black"
					className="bg-white shadow-sm h-6 aspect-square rounded flex items-center justify-center"
				>
					<Check size="15" slot="indicator" />
					<span class="select-none">Checkbox 1</span>
				</Checkbox>
			</div>
			<CardTitle title="Checkbox" />
		</Card>
		<Card>
			<Collapsible.Root expanded={collapsibleExpanded} className=" rounded-md min-w-[220px] flex flex-col gap-[6px] absolute top-[50px] shadow-sm">
				<div class="flex items-center"><span class="flex-grow text-xs">Khairul Haaziq follows you</span>
					<Collapsible.Trigger className="flex text-left justify-center items-center h-6 aspect-square bg-white rounded-full focus:outline focus:outline-black focus:outline-2">
					<span class='opacity-60' transition:slide>
						{#if $collapsibleExpanded}
					<X size="14"/>
					{:else}
					<ChevronsUpDown size="14"/>
					{/if}
				</span></Collapsible.Trigger></div>
				<div class="p-2  bg-white rounded-md"> Content sini</div>
				<Collapsible.Content><div class="p-2 bg-white rounded-md"> Content sini</div><div class="p-2 bg-white rounded-md"> Content sini</div></Collapsible.Content>
			</Collapsible.Root>
			<CardTitle title="Collapsible" />
		</Card>
		<Card>
			<ContextMenu.Root>
				<ContextMenu.Trigger
					className="flex items-center justify-center bg-neutral-300 border-neutral-400 opacity-50 border-dashed border h-32 w-52 rounded-lg aspect-square text-neutral-600"
				>
					<p>Right click here</p>
				</ContextMenu.Trigger>
				<ContextMenu.Portal
					className="border bg-white rounded-lg border-neutral-200 w-60 flex flex-col p-[6px] text-[13px] text-black shadow-lg"
				>
					<ContextMenu.Group>
						<ContextMenu.Option
							value="New Tab"
							className="px-2 py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white [&>*]:data-[highlighted='true']:text-white rounded"
							><span class="flex flex-grow items-center text-neutral-500 justify-end tracking-wide"
								>⌘+T</span
							></ContextMenu.Option
						>
						<ContextMenu.Option
							value="New Window"
							className="px-2 py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded"
						/>
						<ContextMenu.Option
							value="New Private Window"
							className="px-2 py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded"
						/>
						<ContextMenu.Option
							value="More Tools"
							className="px-2 py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded"
						/>
					</ContextMenu.Group>
					<div class="h-[1px] mx-1 my-1 bg-neutral-200" />
					<ContextMenu.Group>
						<ContextMenu.Option
							value="Show Bookmarks"
							className="px-2 py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded"
						/>
						<ContextMenu.Option
							value="Show Full URLs"
							className="px-2 py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded"
						/>
					</ContextMenu.Group>
					<div class="h-[1px] mx-1 my-1 bg-neutral-200" />
					<ContextMenu.Group
						label="People"
						labelClass="pl-[25px] pb-1 pt-0.5 text-neutral-400 text-xs"
					>
						<ContextMenu.Option
							value="Khairul Haaziq"
							className="px-2 py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded"
						/>
						<ContextMenu.Option
							value="spinach"
							className="px-2 py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded"
						/>
						<ContextMenu.Option
							value="aubergine"
							className="px-2 py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded"
						/>
					</ContextMenu.Group>
				</ContextMenu.Portal>
			</ContextMenu.Root>
			<CardTitle title="Context Menu" />
		</Card>
		<Card>
			<Dialog.Root>
				<Dialog.Trigger
					className="bg-white py-2 px-3 rounded focus:outline focus:outline-2 focus:outline-black flex flex-row gap-1 items-center font-medium text-black"
				>
					Edit Profile
				</Dialog.Trigger>
				<Dialog.Portal
					overlayClass="bg-neutral-400 opacity-50"
					className="flex flex-col items-between justify-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[450px] min-h-[150px] first-letter:border bg-white rounded-lg border-neutral-200 p-6 gap-3 shadow-lg text-[13px]"
				>
					<div class="text-base font-medium">Edit profile</div>
					<p class="opacity-60">Make changes to your profile here. Click save when you're done.</p>
					<fieldset class="flex flex-row items-center justify-end gap-3 text-sm mt-3">
						<label for="name">Name</label><input
							type="text"
							id="name"
							class="w-[290px] pl-3 py-2 outline outline-1 outline-neutral-400 rounded focus:outline-[3px] focus:outline-black"
						/>
					</fieldset>
					<fieldset class="flex flex-row items-center justify-end gap-3 text-sm mt-1">
						<label for="name">Age</label><input
							type="text"
							id="name"
							class="w-[290px] pl-3 py-2 outline outline-1 outline-neutral-400 rounded focus:outline-[3px] focus:outline-black"
						/>
					</fieldset>
					<div class="pt-2 flex flex-row gap-3 justify-end">
						<button class="bg-green-100 rounded px-4 py-2 text-green-900">Save changes</button>
					</div>
				</Dialog.Portal>
			</Dialog.Root>
			<CardTitle title="Dialog" />
		</Card>
		<Card>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger
					className="flex items-center justify-center bg-white h-10 rounded-full aspect-square focus:outline focus:outline-2 focus:outline-black text-neutral-600"
				>
					<AlignJustify size="15" />
				</DropdownMenu.Trigger>
				<DropdownMenu.Portal
					className="border bg-white rounded-lg border-neutral-200 w-60 flex flex-col p-[6px] text-[13px] text-black shadow-lg"
				>
					<DropdownMenu.Group>
						<DropdownMenu.Option
							value="New Tab"
							className="px-2 py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white [&>*]:data-[highlighted='true']:text-white rounded"
							><span class="flex flex-grow items-center text-neutral-500 justify-end tracking-wide"
								>⌘+T</span
							></DropdownMenu.Option
						>
						<DropdownMenu.Option
							value="New Window"
							className="px-2 py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded"
						/>
						<DropdownMenu.Option
							value="New Private Window"
							className="px-2 py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded"
						/>
						<DropdownMenu.Option
							value="More Tools"
							className="px-2 py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded"
						/>
					</DropdownMenu.Group>
					<div class="h-[1px] mx-1 my-1 bg-neutral-200" />
					<DropdownMenu.Group>
						<DropdownMenu.Option
							value="Show Bookmarks"
							className="px-2 py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded"
						/>
						<DropdownMenu.Option
							value="Show Full URLs"
							className="px-2 py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded"
						/>
					</DropdownMenu.Group>
					<div class="h-[1px] mx-1 my-1 bg-neutral-200" />
					<DropdownMenu.Group
						label="People"
						labelClass="pl-[25px] pb-1 pt-0.5 text-neutral-400 text-xs"
					>
						<DropdownMenu.Option
							value="Khairul Haaziq"
							className="px-2 py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded"
						/>
						<DropdownMenu.Option
							value="spinach"
							className="px-2 py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded"
						/>
						<DropdownMenu.Option
							value="aubergine"
							className="px-2 py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded"
						/>
					</DropdownMenu.Group>
				</DropdownMenu.Portal>
			</DropdownMenu.Root>

			<CardTitle title="Dropdown Menu" />
		</Card>
		<Card>
			<HoverCard.Root>
				<HoverCard.Trigger
					className="flex items-center justify-center bg-white h-10 rounded-full aspect-square text-neutral-600"
				>
					<Github size="15" />
				</HoverCard.Trigger>
				<HoverCard.Portal
					className="border bg-white rounded-lg border-neutral-200 w-64 flex flex-col gap-3 p-5 text-[13px] text-black shadow-lg"
				>
					<div class="text-base font-medium">HoverCard</div>
					<p class="opacity-50">All you need to know about HoverCard</p>
					<p class="opacity-40 text-[11px] mt-4">Copyright hovercard</p>
				</HoverCard.Portal>
			</HoverCard.Root>
			<CardTitle title="Hovercard" />
		</Card>
		<Card>
			<CardTitle title="Menubar" />
		</Card>
		<Card>
			<Popover.Root>
				<Popover.Trigger
					className="flex items-center justify-center bg-white h-10 rounded-full aspect-square focus:outline focus:outline-2 focus:outline-black text-neutral-600"
				>
					<Settings2 size="15" />
				</Popover.Trigger>
				<Popover.Portal
					className="border bg-white rounded-lg border-neutral-200 w-64 flex flex-col gap-3 p-5 text-[13px] text-black shadow-lg"
				>
					<div>Dimensions</div>
					<fieldset class="flex flex-row items-center justify-between gap-3">
						<label for="name">Width</label><input
							type="text"
							id="name"
							class="w-3/5 pl-2 py-1 outline outline-1 outline-neutral-300 rounded focus:outline-2 focus:outline-black"
						/>
					</fieldset>
					<fieldset class="flex flex-row items-center justify-between gap-3">
						<label for="name">Max Width</label><input
							type="text"
							id="name"
							class="w-3/5 pl-2 py-1 outline outline-1 outline-neutral-300 rounded focus:outline-2 focus:outline-black"
						/>
					</fieldset>
					<fieldset class="flex flex-row items-center justify-between gap-3">
						<label for="name">Height</label><input
							type="text"
							id="name"
							class="w-3/5 pl-2 py-1 outline outline-1 outline-neutral-300 rounded focus:outline-2 focus:outline-black"
						/>
					</fieldset>
					<fieldset class="flex flex-row items-center justify-between gap-3">
						<label for="name">Height</label><input
							type="text"
							id="name"
							class="w-3/5 pl-2 py-1 outline outline-1 outline-neutral-300 rounded focus:outline-2 focus:outline-black"
						/>
					</fieldset>
				</Popover.Portal>
			</Popover.Root>
			<CardTitle title="Popover" />
		</Card>
		<Card>
			<div class="flex flex-col gap-3 text-neutral-600">
				<RadioGroup.Radio2
					name="radiogroup1"
					value="default"
					labelClass=" flex flex-row gap-3 items-center [&>input:focus+.radio]:outline [&>input:focus+.radio]:outline-2 [&>input:focus+.radio]:outline-black"
					className="bg-white shadow-sm h-6 aspect-square rounded-full flex items-center justify-center"
				>
					<span class="block bg-black rounded-full h-[10px] aspect-square" slot="indicator" />
					<span class="select-none">Default</span>
				</RadioGroup.Radio2>
				<RadioGroup.Radio2
					name="radiogroup1"
					value="comfortable"
					labelClass=" flex flex-row gap-3 items-center [&>input:focus+.radio]:outline [&>input:focus+.radio]:outline-2 [&>input:focus+.radio]:outline-black"
					className="bg-white shadow-sm h-6 aspect-square rounded-full flex items-center justify-center"
				>
					<span class="block bg-black rounded-full h-[10px] aspect-square" slot="indicator" />
					<span class="select-none">Comfortable</span>
				</RadioGroup.Radio2>
				<RadioGroup.Radio2
					name="radiogroup1"
					value="compact"
					labelClass=" flex flex-row gap-3 items-center [&>input:focus+.radio]:outline [&>input:focus+.radio]:outline-2 [&>input:focus+.radio]:outline-black"
					className="bg-white shadow-sm h-6 aspect-square rounded-full flex items-center justify-center"
				>
					<span class="block bg-black rounded-full h-[10px] aspect-square" slot="indicator" />
					<span class="select-none">Compact</span>
				</RadioGroup.Radio2>
			</div>
			<CardTitle title="Radio Group" />
		</Card>
		<Card>
			<Select.Root>
				<Select.Trigger
					className="bg-white py-2 px-3 rounded focus:outline focus:outline-2 focus:outline-black flex flex-row gap-1 items-center text-black"
				>
					<Select.Value placeholder="Select a value..." />
					<span class="opacity-70 -mb-0.5">
						<ChevronDown size="15" />
					</span>
				</Select.Trigger>
				<Select.Portal
					className="border bg-white rounded-lg border-neutral-200 w-[135px] flex flex-col p-[6px] text-[13px] text-black shadow-lg"
				>
					<Select.Group label="fruits" labelClass="pl-[25px] pb-1 pt-0.5 text-neutral-400 text-xs">
						<Select.Option
							value="apple"
							className="px-2 py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded"
						/>
						<Select.Option
							value="banana"
							className="px-2 py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded"
						/>
						<Select.Option
							value="blueberry"
							className="px-2 py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded"
						/>
						<Select.Option
							value="grapes"
							className="px-2 py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded"
						/>
						<Select.Option
							value="pineapple"
							className="px-2 py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded"
						/>
					</Select.Group>
					<div class="h-[1px] mx-1 my-2 bg-neutral-200" />
					<Select.Group
						label="vegetables"
						labelClass="pl-[25px] pb-1 pt-0.5 text-neutral-400 text-xs"
					>
						<Select.Option
							value="broccoli"
							className="px-2 py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded"
						/>
						<Select.Option
							value="spinach"
							className="px-2 py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded"
						/>
						<Select.Option
							value="aubergine"
							className="px-2 py-1 data-[highlighted='true']:bg-black data-[highlighted='true']:text-white rounded"
						/>
					</Select.Group>
				</Select.Portal>
			</Select.Root>
			<CardTitle title="Select" />
		</Card>
		<Card>
			<Slider.Root className='relative flex items-center w-[200px] touch-none select-none h-5'>
				<Slider.Range rangeClass="rounded-full h-[3px] flex-grow bg-gray-400 relative" trackerClass="rounded-full absolute bg-black h-full left-0" />
				<Slider.Thumb className="block h-5 w-5 rounded-full shadow-sm bg-white focus:outline focus:outline-4 outline-[#0000006a]"/>
			</Slider.Root>
			<CardTitle title="Slider" />
		</Card>
		<Card>
			<Switch
				labelClass="[&>input:focus+span]:outline [&>input:focus+span]:outline-2 [&>input:focus+span]:outline-black shadow"
			/>
			<CardTitle title="Switch" />
		</Card>
		<Card>
			<Tabs.Group className="flex flex-col rounded-lg bg-white shadow min-h-[140px] min-w-[240px]">
				<Tabs.List
					selected={storeTab}
					className="flex flex-row  shadow shadow-[0_-1px_0px_0px_inset] shadow-neutral-200 [&>*]:py-3 [&>*]:px-5 [&>*]:text-neutral-400 first:[&>*]:rounded-tl-lg data-[state='active']:[&>*]:shadow-[0_-2px_0px_0px_inset] data-[state='active']:[&>*]:shadow-black data-[state='active']:[&>*]:text-black focus:[&>*]:outline focus:[&>*]:outline-2 focus:[&>*]:outline-black focus:[&>*]:relative"
				>
					<Tabs.Trigger value="a">Tab 1</Tabs.Trigger>
					<Tabs.Trigger value="b">Tab 2</Tabs.Trigger>
					<Tabs.Trigger value="c">Tab 3</Tabs.Trigger>
				</Tabs.List>
				<Tabs.Content className="mt-2 py-3 px-5">
					{#if $storeTab === 'a'}
						<div class="flex flex-col justify-between gap-6">
							<span class="text-neutral-400">Save changes?</span>
							<div class="flex flex-row justify-end">
								<button class="shadow-sm rounded-md border px-4 py-[6px] -mr-2">Save</button>
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
					<button class="bg-neutral-200 rounded px-2 py-1">Undo</button>
				</Toast.Portal>
			</Toast.Root>
			<CardTitle title="Toast" />
		</Card>
		<Card>
			<Toggle
				labelClass="[&>input:checked+span]:bg-[#00000010] [&>input:focus+span]:outline [&>input:focus+span]:outline-2 [&>input:focus+span]:outline-black"
				className="flex items-center justify-center focus:outline bg-white shadow h-10 aspect-square rounded text-neutral-600"
			>
				<Italic size="14" />
			</Toggle>
			<CardTitle title="Toggle" />
		</Card>
		<Card>
			<ToggleGroup.Root
				className="text-neutral-600 flex [&>*>span]:flex [&>*>span]:items-center [&>*>span]:justify-center rounded bg-white shadow [&>span]:first:[&>*]:rounded-l [&>span]:last:[&>*]:rounded-r [&>span]:last:[&>*]:border-r-0 [&>*>span]:border-r [&>*>span]:border-neutral-200 [&>*>span]:h-10 [&>*>span]:aspect-square focus:[&>*>span]:relative
				[&>*>input:checked+span]:bg-[#00000010] [&>*>input:focus+span]:outline [&>*>input:focus+span]:outline-2 [&>*>input:focus+span]:outline-black [&>*>input:focus+span]:relative"
			>
				<ToggleGroup.Item value="item1"><AlignLeft size="15" /></ToggleGroup.Item>
				<ToggleGroup.Item value="item2"><AlignCenter size="15" /></ToggleGroup.Item>
				<ToggleGroup.Item value="item3"><AlignRight size="15" /></ToggleGroup.Item>
			</ToggleGroup.Root>
			<CardTitle title="Toggle Group" />
		</Card>
		<Card>
			<Tooltip.Root>
				<p>
					Example of inline
				<Tooltip.Trigger
					className="font-semibold"
				>
					Tooltip!
				</Tooltip.Trigger>
			</p>
				<Tooltip.Portal className="bg-black rounded flex flex-col text-[13px] text-white px-2 py-1">
					This is a tooltip example
				</Tooltip.Portal>
			</Tooltip.Root>
			<CardTitle title="Tooltip" />
		</Card>
	</div>
</div>
