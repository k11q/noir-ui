<script lang="ts">
    let activeTab: string;
    const tabs = []
</script>

{#each tabs as tab}
<slot name="list" />
{/each}

