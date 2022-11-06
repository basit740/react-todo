import { useState, useRef } from 'react';

function AddTodo(props) {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const titleRef = useRef();

	function submitHandler(event) {
		event.preventDefault();
		if (title === '' || description === '') {
			return;
		}
		props.onTodo({
			id: uid().split('.')[1],
			title: title,
			description: description,
			done: false,
		});
		setTitle('');
		setDescription('');
		titleRef.current.focus();
	}
	return (
		<form onSubmit={submitHandler} className='add-todo-form'>
			<h2>Add New Todo</h2>
			<div className='input-group'>
				<input
					type='text'
					id='txtTodoItemToAdd'
					className='title'
					placeholder='Title'
					onChange={(event) => setTitle(event.target.value)}
					value={title}
					ref={titleRef}
				/>
			</div>

			<div className='input-group'>
				<textarea
					type='text'
					className='description'
					placeholder='Description'
					onChange={(event) => setDescription(event.target.value)}
					value={description}
				/>
			</div>
			<div className='input-group'>
				<button id='btnAddTodo' type='submit'>
					Submit
				</button>
			</div>
		</form>
	);
}

export default AddTodo;

// helping functions

function uid() {
	return Math.random().toString();
}
