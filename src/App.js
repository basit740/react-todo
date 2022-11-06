import AddTodo from './AddTodo';
import './App.css';
import TodoList from './TodoList';
import { useEffect, useState } from 'react';
function App() {
	const [todos, setTodos] = useState([]);

	function newTodoHandler(todo) {
		if (
			localStorage.getItem('todos') === null ||
			localStorage.getItem('todos') === undefined
		) {
			let firstTodos = [];
			firstTodos.push(todo);
			localStorage.setItem('todos', JSON.stringify(firstTodos));
			setTodos((prev) => {
				return [...firstTodos];
			});
		} else {
			let existingTodos = JSON.parse(localStorage.getItem('todos'));
			debugger;
			existingTodos = [todo, ...existingTodos];

			console.log('updated exisinting Todos>>>', existingTodos);
			localStorage.setItem('todos', JSON.stringify(existingTodos));
			setTodos((prev) => {
				return [...existingTodos];
			});
		}
	}

	function toggler(id) {
		debugger;
		const todosInStorage = JSON.parse(localStorage.getItem('todos'));

		const found = todosInStorage.find((item) => item.id === id);
		const itemIndex = todosInStorage.findIndex((item) => item.id === id);

		const filtered = todosInStorage.filter((item) => item.id !== id);

		if (found.done === false) {
			found['prevIndex'] = itemIndex;
			found.done = true;
			filtered.push(found);
		} else {
			found.done = false;
			filtered.unshift(found);
		}

		localStorage.setItem('todos', JSON.stringify(filtered));
		setTodos((prev) => {
			return [...filtered];
		});
	}

	function todoRemover(e) {
		e.stopPropagation();
		debugger;
		const previousTodos = JSON.parse(localStorage.getItem('todos'));
		const filtered = previousTodos.filter(
			(todo) => todo.id !== e.currentTarget.id
		);
		localStorage.setItem('todos', JSON.stringify(filtered));
		setTodos((prev) => {
			return [...filtered];
		});
	}
	useEffect(() => {
		console.log('todos in useEffect >>>', todos);
		if (localStorage.getItem('todos') !== null) {
			setTodos((prev) => {
				return [...JSON.parse(localStorage.getItem('todos'))];
			});
		}
		// eslint-disable-next-line
	}, []);
	return (
		<div className='container'>
			<h1 className='app-heading'>Todos App</h1>
			<AddTodo onTodo={newTodoHandler} />

			<TodoList todos={todos} onToggle={toggler} onRemove={todoRemover} />
		</div>
	);
}

export default App;
