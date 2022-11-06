import Todo from './Todo';

function TodoList(props) {
	function toggleHandler(id) {
		props.onToggle(id);
	}
	return (
		<ul className='todos margin-top-lg' id='todoList'>
			{props.todos.length > 0 && (
				<>
					{props.todos.map((todo) => {
						return (
							<Todo
								key={todo.id}
								todo={todo}
								onToggle={toggleHandler}
								onRemove={(e) => props.onRemove(e)}
							/>
						);
					})}
				</>
			)}
			{props.todos.length === 0 && (
				<h4 className='no-todos-feedback'>No Todos yet!</h4>
			)}
		</ul>
	);
}

export default TodoList;
