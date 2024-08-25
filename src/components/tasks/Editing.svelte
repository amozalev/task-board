<script>
	import { createEventDispatcher } from 'svelte';

	let editing = false;
	export let value;
	const dispatch = createEventDispatcher();
</script>

<div class="flex flex-col">
	{#if editing}
		<textarea class="w-full h-full" autofocus bind:value />
		<button
			on:click={() => {
				editing = false;
				dispatch('cancelEdit', { taskTitle: value });
			}}
			>Close
		</button>
	{:else}
		<button on:click={() => (editing = true)}>
			<slot />
		</button>
	{/if}
</div>
