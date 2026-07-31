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
		case 'edit': {
			return tasks.map((task) => {
				if (task.equals(action.oldTask)) {
					return action.newTask;
				} else {
					return task;
				}
			});
		}
	}
}
