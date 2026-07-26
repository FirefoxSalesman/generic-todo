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
					console.log(tasks.map((t) => {
						return t.exportToOrg();
					}));
				}} >Export to Org</button>
			</div>
		</div>
	);
}

root.render(
	<React.StrictMode>
		<Root />
	</React.StrictMode>
);
