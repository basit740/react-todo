function Todo(props) {
	function localTodoHandler(e) {
		props.onToggle(e.currentTarget.id);
	}
	let todoClass = 'todo';

	if (props.todo.done) {
		todoClass = 'todo todo--completed';
	}
	return (
		<li
			className={todoClass}
			key={props.todo.id}
			id={props.todo.id}
			onClick={localTodoHandler}
		>
			<h3 className='todo-title'>{props.todo.title}</h3>
			<p className='todo-description'>{props.todo.description}</p>
			{props.todo.done && (
				<button
					className='todo__button--remove'
					onClick={(e) => props.onRemove(e)}
					id={props.todo.id}
				>
					Remove
				</button>
			)}
		</li>
	);
}

export default Todo;
