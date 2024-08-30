import { get, writable } from 'svelte/store';

const DEFAULT_DATA = [
	{
		id: 1,
		name: 'Incoming Bugs1',
		tasks: [
			{ id: 100, tag: 'Browser', title: 'Lightbox loading issue on Safari' },
			{
				id: 101,
				tag: 'High Priority',
				title: 'Notifications Not Sending #4'
			},
			{ id: 102, tag: 'Browser', title: 'Mdivtiple Select Broken' },
			{
				id: 103,
				tag: 'Browser',
				title: 'Drag and drop issues in Chrome'
			}
		]
	},
	{
		id: 2,
		name: 'Incoming Bugs2',
		tasks: [
			{ id: 104, tag: 'Browser', title: 'Lightbox loading issue on Safari' },
			{
				id: 105,
				tag: 'High Priority',
				title: 'Notifications Not Sending #4'
			},
			{ id: 106, tag: 'Browser', title: 'Mdivtiple Select Broken' },
			{
				id: 107,
				tag: 'Browser',
				title: 'Drag and drop issues in Chrome'
			}
		]
	},
	{
		id: 3,
		name: 'Incoming Bugs3',
		tasks: [
			{ id: 108, tag: 'Browser', title: 'Lightbox loading issue on Safari' },
			{
				id: 109,
				tag: 'High Priority',
				title: 'Notifications Not Sending #4'
			},
			{ id: 110, tag: 'Browser', title: 'Mdivtiple Select Broken' },
			{
				id: 111,
				tag: 'Browser',
				title: 'Drag and drop issues in Chrome'
			}
		]
	},
	{
		id: 4,
		name: 'Incoming Bugs4',
		tasks: [
			{ id: 112, tag: 'Browser', title: 'Lightbox loading issue on Safari' },
			{
				id: 113,
				tag: 'High Priority',
				title: 'Notifications Not Sending #4'
			},
			{ id: 114, tag: 'Browser', title: 'Mdivtiple Select Broken' },
			{
				id: 115,
				tag: 'Browser',
				title: 'Drag and drop issues in Chrome'
			}
		]
	}
];

const createStore = () => {
	const taskList = writable(DEFAULT_DATA);
	const { subscribe, update } = taskList;

	return {
		subscribe,
		updateTask: (task, listIdx) => {
			const taskIdx = get(taskList)[listIdx].tasks.findIndex(({ id }) => id === task.id);

			if (taskIdx > -1) {
				update((list) => {
					list[listIdx].tasks[taskIdx] = { ...task };
					return list;
				});
			}
		},
		addList: () => {
			update((list) => {
				const listLen = list.length;
				let lastId = listLen > 0 ? list[listLen - 1].id : 0;
				list.push({
					id: ++lastId,
					name: 'New list',
					tasks: []
				});

				return list;
			});
		},
		deleteList: (listIdx) => {
			update((list) => {
				list.splice(listIdx, 1);
				return list;
			})
		},
		addTask: (listIdx) => {
			update((list) => {
				list[listIdx].tasks.push({
					id: Math.floor(Math.random() * 1000),
					title: 'New task',
					tag: 'default'
				});

				return list;
			});
		},
		moveTask: ({ fromListIdx, toListIdx, taskId }) => {
			update((list) => {
				const taskIdx = list[fromListIdx].tasks.findIndex((task) => task.id === taskId);
				const [task] = list[fromListIdx].tasks.splice(taskIdx, 1);
				list[toListIdx].tasks.push(task);

				return list;
			});
		}
	};
};

export const taskListStore = createStore();
