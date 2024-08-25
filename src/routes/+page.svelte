<script>
	import TaskList from '../components/tasks/TaskList.svelte';
	import { taskListStore } from '../stores/tasks.js';
</script>

<section class="p-10">
	<div class="grid grid-cols-auto-fill-260 gap-2">
		{#each $taskListStore as taskList, i (taskList.id)}
			<TaskList listIdx={i} name={taskList.name} tasks={taskList.tasks} />
		{/each}
	</div>
</section>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
