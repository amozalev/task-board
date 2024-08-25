<script>
	import { createEventDispatcher } from 'svelte';

	let editing = false;
	export let value;
	const dispatch = createEventDispatcher();
</script>

{#if editing}
	<textarea bind:value />
	<button
		on:click={() => {
			editing = false;
			dispatch('cancelEdit', {taskTitle: value});
		}}
		>Close
	</button>
{:else}
	<button on:click={() => (editing = true)}>
		<slot />
	</button>
{/if}
