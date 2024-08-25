<script>
	import TaskItem from './TaskItem.svelte';

	export let listIdx = '';
	export let name = '';
	export let tasks = [];
</script>

<div class="rounded bg-slate-200 p-2">
	<div class="flex justify-between items-center">
		<span class="flex grow">
			<h2>{name}</h2>
		</span>
		<span class="flex">
			<button class="p-1">
				<i class="fas fa-ellipsis-h"></i>
			</button>
		</span>
	</div>
	<div class="grid auto-rows-auto gap-y-2 my-2">
		{#each tasks as task (task.id)}
			<TaskItem {listIdx} {task} />
		{/each}
	</div>
	<div class="flex gap-1 items-center">
		<i class="fas fa-plus"></i>
		<h4>Add another card</h4>
	</div>
</div>
