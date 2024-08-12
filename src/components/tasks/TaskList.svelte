<script>
	import TaskItem from './TaskItem.svelte';

	export let name = '';
	export let tasks = [];
</script>

<div class="rounded bg-slate-200 p-2">
	<div class="grid grid-cols-2 p-1 items-center">
		<h2>{name}</h2>
		<i class="fas fa-ellipsis-h"></i>
	</div>
	<div class="grid auto-rows-auto gap-y-2 my-2">
		{#each tasks as task (task.id)}
			<TaskItem tag={task.tag} title={task.title} />
		{/each}
	</div>
	<div class="column__item--cta">
		<i class="fas fa-plus"></i>
		<h4>Add another card</h4>
	</div>
</div>
