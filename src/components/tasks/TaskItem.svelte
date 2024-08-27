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

	const dragStart = (event) => {
		const data = {fromListIdx: listIdx, taskId: task.id};
		event.dataTransfer.setData('text/plain', JSON.stringify(data));
	}
</script>

<div class="flex-col bg-white rounded shadow-md p-2" draggable="true" on:dragstart={dragStart}>
	<div class="flex">
		<span class="text-xs py-0.5 p-0.5 rounded font-bold text-white mb-3 inline-block bg-blue-400">
			{task.tag}
		</span>
	</div>
	<Editing bind:value={task.title} on:cancelEdit={updateTask}>
		<p class="text-sky-800 mb-3 text-left">{task.title}</p>
	</Editing>
	<div class="flex items-center">
		<div class="text-zinc-500 mr-2">
			<i class="fas fa-align-left"></i>
		</div>
	</div>
</div>
