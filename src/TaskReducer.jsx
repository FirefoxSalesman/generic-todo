export default function tasksReducer(tasks, action) {
	switch (action.type) {
		case 'add': {
			return [
				...tasks,
				action.task
			]
		}
		case 'remove': {
			return tasks.filter((task) => !task.equals(action.task));
		}
	}
}
