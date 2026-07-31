import { useState } from 'react';
import Input from './Input';
import Task from './Task';

function TodoForm({ dispatch, onCancel, initialName, initialDescription, initialDate }) {
	let [description, setDescription] = useState(initialDescription);
	let [name, setName] = useState(initialName);
	let [date, setDate] = useState(initialDate);

	return (
		<div>
			<form onSubmit={(e) => {
				e.preventDefault();
				let task = new Task(name, description, date);
				onCancel();
				setDescription('');
				setName('');
				setDate('');
				dispatch(task);
			}}>
				<Input desc='Task' type='text' value={name} handler={setName} />
				<Input desc='Description' type='text' value={description} handler={setDescription} />
				<Input desc='Due' type='date' value={date} handler={setDate} />
				<div className='text-center'>
					<input className='clickable' type="submit" /> <button onClick={onCancel}>Cancel</button>
				</div>
			</form>
		</div >
	)
}

export default TodoForm;
