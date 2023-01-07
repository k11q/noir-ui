<script lang="ts">
    export let status = 4
</script>

<span class="flex flex-row gap-2 select-none items-center rounded-full px-2 py-0.5 text-[11px]" class:bg-green-200={status==4} class:bg-blue-200={status==3} class:bg-yellow-200={status==2} class:bg-red-200={status==1}>
<span class:text-green-900={status==4} class:text-blue-900={status==3} class:text-yellow-900={status==2} class:text-red-900={status==1} >{status == 1? 'Not ready': status == 2 ? 'In Progress' : status == 3 ? 'Waiting review' : 'Ready'}</span>
</span>