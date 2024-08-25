<script>
	import Editing from './Editing.svelte';
	import { taskListStore } from '../../stores/tasks.js';

	export let task;
	export let listIdx;

	const updateTask = (event) => {
		taskListStore.updateTask({
			...task,
			title: event.detail.taskTitle
		},
		listIdx
		);
	}
</script>

<div class="bg-white rounded shadow-md p-2">
	<div class="flex">
		<span class="text-xs py-0.5 p-0.5 rounded font-bold text-white mb-3 inline-block bg-blue-400">
			{task.tag}
		</span>
	</div>
	<Editing bind:value={task.title} on:cancelEdit={updateTask}>
		<h6 class="text-sky-800 mb-3">{task.title}</h6>
	</Editing>
	<div class="flex items-center">
		<div class="text-zinc-500 mr-2">
			<i class="fas fa-align-left"></i>
		</div>
	</div>
</div>
