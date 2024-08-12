<script>
	import TaskList from '../components/tasks/TaskList.svelte';

	let taskLists = [
		{
			id: 1,
			name: 'Incoming Bugs1',
			tasks: [
				{ id: 11, tag: 'Browser', title: 'Lightbox loading issue on Safari' },
				{ id: 12, tag: 'High Priority', title: 'Notifications Not Sending #4' },
				{ id: 13, tag: 'Browser', title: 'Mdivtiple Select Broken' },
				{ id: 14, tag: 'Browser', title: 'Drag and drop issues in Chrome' }
			]
		},
		{
			id: 2,
			name: 'Incoming Bugs2',
			tasks: [
				{ id: 21, tag: 'Browser', title: 'Lightbox loading issue on Safari' },
				{ id: 22, tag: 'High Priority', title: 'Notifications Not Sending #4' },
				{ id: 23, tag: 'Browser', title: 'Mdivtiple Select Broken' },
				{ id: 24, tag: 'Browser', title: 'Drag and drop issues in Chrome' }
			]
		},
		{
			id: 3,
			name: 'Incoming Bugs3',
			tasks: [
				{ id: 31, tag: 'Browser', title: 'Lightbox loading issue on Safari' },
				{ id: 32, tag: 'High Priority', title: 'Notifications Not Sending #4' },
				{ id: 33, tag: 'Browser', title: 'Mdivtiple Select Broken' },
				{ id: 34, tag: 'Browser', title: 'Drag and drop issues in Chrome' }
			]
		},
		{
			id: 4,
			name: 'Incoming Bugs4',
			tasks: [
				{ id: 41, tag: 'Browser', title: 'Lightbox loading issue on Safari' },
				{ id: 42, tag: 'High Priority', title: 'Notifications Not Sending #4' },
				{ id: 43, tag: 'Browser', title: 'Mdivtiple Select Broken' },
				{ id: 44, tag: 'Browser', title: 'Drag and drop issues in Chrome' }
			]
		}
	];
</script>

<section class="p-10">
	<div class="grid grid-cols-auto-fill-260 gap-2">
		{#each taskLists as taskList (taskList.id)}
			<TaskList name={taskList.name} tasks={taskList.tasks} />
		{/each}
	</div>
</section>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
