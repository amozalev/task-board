import { get, writable } from 'svelte/store';

const DEFAULT_DATA = [
	{
		id: 1,
		name: 'Incoming Bugs1',
		tasks: [
			{ id: 11, tag: 'Browser', title: 'Lightbox loading issue on Safari' },
			{
				id: 12,
				tag: 'High Priority',
				title: 'Notifications Not Sending #4'
			},
			{ id: 13, tag: 'Browser', title: 'Mdivtiple Select Broken' },
			{
				id: 14,
				tag: 'Browser',
				title: 'Drag and drop issues in Chrome'
			}
		]
	},
	{
		id: 2,
		name: 'Incoming Bugs2',
		tasks: [
			{ id: 21, tag: 'Browser', title: 'Lightbox loading issue on Safari' },
			{
				id: 22,
				tag: 'High Priority',
				title: 'Notifications Not Sending #4'
			},
			{ id: 23, tag: 'Browser', title: 'Mdivtiple Select Broken' },
			{
				id: 24,
				tag: 'Browser',
				title: 'Drag and drop issues in Chrome'
			}
		]
	},
	{
		id: 3,
		name: 'Incoming Bugs3',
		tasks: [
			{ id: 31, tag: 'Browser', title: 'Lightbox loading issue on Safari' },
			{
				id: 32,
				tag: 'High Priority',
				title: 'Notifications Not Sending #4'
			},
			{ id: 33, tag: 'Browser', title: 'Mdivtiple Select Broken' },
			{
				id: 34,
				tag: 'Browser',
				title: 'Drag and drop issues in Chrome'
			}
		]
	},
	{
		id: 4,
		name: 'Incoming Bugs4',
		tasks: [
			{ id: 41, tag: 'Browser', title: 'Lightbox loading issue on Safari' },
			{
				id: 42,
				tag: 'High Priority',
				title: 'Notifications Not Sending #4'
			},
			{ id: 43, tag: 'Browser', title: 'Mdivtiple Select Broken' },
			{
				id: 44,
				tag: 'Browser',
				title: 'Drag and drop issues in Chrome'
			}
		]
	}
];

const createStore = () => {
	const taskList = writable(DEFAULT_DATA);
	const { subscribe } = taskList;

	const updateTask = (task, listIdx) => {
		const taskIdx = get(taskList)[listIdx].tasks.findIndex(({ id }) => id === task.id);

		if (taskIdx > -1) {
			taskList.update((list) => {
				list[listIdx].tasks[taskIdx] = { ...task };
				return list;
			});
		}
	};

	return {
		subscribe,
		updateTask
	};
};

export const taskListStore = createStore();
