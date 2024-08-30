<script context="module">
	import { writable } from 'svelte/store';

	let hoveredListIdx = writable(null);
</script>

<script>
	import { taskListStore } from '../../stores/tasks.js';
	import TaskItem from './TaskItem.svelte';

	export let listIdx = '';
	export let name = '';
	export let tasks = [];

	const drop = (event) => {
		const transferredDataString = event.dataTransfer.getData('text/plain');
		const { fromListIdx, taskId } = JSON.parse(transferredDataString);

		taskListStore.moveTask({ fromListIdx, toListIdx: listIdx, taskId });
		hoveredListIdx.set(null);
	};

	const onDragEnter = () => {
		hoveredListIdx.set(listIdx);
	};

	const deleteList = () => {
		taskListStore.deleteList(listIdx);
	}
</script>

<div
	class:hovering={$hoveredListIdx == listIdx}
	class="flex flex-col rounded bg-slate-200 p-2 min-h-0 border-solid border border-slate-50"
	on:dragover|preventDefault={() => {}}
	on:drop={drop}
	on:dragenter={onDragEnter}
>
	<div class="flex justify-between items-center">
		<span class="flex grow">
			<h2>{name}</h2>
		</span>
		<span class="flex">
			<button class="p-1" on:click={deleteList}>
				<i class="fa fa-trash"></i>
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

<style>
	.hovering {
    border: 1px solid #daa773;
	}
</style>