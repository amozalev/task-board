<script>
	import TaskList from '../components/tasks/TaskList.svelte';
	import { taskListStore } from '../stores/tasks.js';
</script>

<section class="h-full flex flex-col gap-1 p-10">
	<div class="flex">
		<button class="flex gap-1 p-2 items-center" on:click={taskListStore.addList}>
			<i class="fas fa-plus"></i>
			<h4>Add list</h4>
		</button>
	</div>
	<div class="grid grid-cols-auto-fill-260 gap-2 grid-flow-col auto-cols-260 h-[calc(100%-2.5rem)]">
		{#each $taskListStore as taskList, i (taskList.id)}
			<TaskList listIdx={i} name={taskList.name} tasks={taskList.tasks} />
		{/each}
	</div>
</section>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.50);
		display: flex;
		height: 100%;
		overflow-y: hidden;
	}
</style>
