import { useState } from 'react';
import './index.css'
import TodoForm from './TodoForm';

function AddTodo({ dispatch }) {
	let [showButton, setShowButton] = useState([]);
	function toggleButton() {
		setShowButton(!showButton);
	}

	return (
		<div>
			{showButton ? (
				<button onClick={toggleButton}>Create Task</button>
			) : (
				<TodoForm dispatch={(task) => dispatch({
					type: 'add',
					task: task
				})} onCancel={toggleButton} initialName='' initialDescription='' initialDate='' />
			)}
		</div>
	)
}

export default AddTodo;
