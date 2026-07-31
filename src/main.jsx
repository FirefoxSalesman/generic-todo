import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AddTodo from './AddTodo';
import ViewTasks from './ViewTasks';
import { useReducer } from 'react';
import tasksReducer from './TaskReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Root() {
	const [tasks, dispatch] = useReducer(tasksReducer, []);
	return (
		<div >
			<ViewTasks tasks={tasks} dispatch={dispatch} />
			<div className='centered-column'>
				<AddTodo dispatch={dispatch} />
				<button onClick={() => {
					let org = '';
					for (let t of tasks) {
						org += t.exportToOrg();
						org += '\n\n';
					}
					// https://fmennen.de/post/creating-and-downloading-files-using-java-script
					const downloadLink = document.createElement("a");
					downloadLink.href = URL.createObjectURL(new Blob([org], { type: "text/plain" }));
					downloadLink.download = "exported.org";
					downloadLink.click();
				}} >Export to Org</button>
			</div>
		</div >
	);
}

root.render(
	<React.StrictMode>
		<Root />
	</React.StrictMode>
);
