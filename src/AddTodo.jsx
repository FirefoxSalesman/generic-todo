import { useState } from 'react';
import Task from './Task';
import Input from './Input';
import './index.css'

function AddTodo({ dispatch }) {
	let [showButton, setShowButton] = useState([]);
	let [description, setDescription] = useState('');
	let [name, setName] = useState('');
	let [date, setDate] = useState('');

	function toggleButton() {
		setShowButton(!showButton);
	}

	function Toggle({ children }) {
		return (<button onClick={toggleButton} >{children}</button>)
	}

	return (
		<div>
			{showButton ? (
				<Toggle>Create Task</Toggle>
			) : (
				<div>
					<form onSubmit={(e) => {
						e.preventDefault();
						let task = new Task(name, description, date);
						toggleButton();
						setDescription('');
						setName('');
						setDate('');
						dispatch({
							type: 'add',
							task: task
						})
					}}>
						<Input desc='Task' type='text' value={name} handler={setName} />
						<Input desc='Description' type='text' value={description} handler={setDescription} />
						<Input desc='Due' type='date' value={date} handler={setDate} />
						<div className='text-center'>
							<input className='clickable' type="submit" /> <Toggle>Cancel</Toggle>
						</div>
					</form>
				</div>
			)
			}

		</div >
	)
}

export default AddTodo;
