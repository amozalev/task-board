<script>
	import { taskListStore } from '../../stores/tasks.js';
	import TaskItem from './TaskItem.svelte';

	export let listIdx = '';
	export let name = '';
	export let tasks = [];
</script>

<div class="flex flex-col rounded bg-slate-200 p-2 min-h-0">
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
	<div class="flex flex-col gap-y-2 my-2 overflow-auto min-h-0">
		{#each tasks as task (task.id)}
			<TaskItem {listIdx} {task} />
		{/each}
	</div>
	<button class="flex gap-1 items-center" on:click={() => taskListStore.addTask(listIdx)}>
		<i class="fas fa-plus"></i>
		<h4>Add card</h4>
	</button>
</div>
