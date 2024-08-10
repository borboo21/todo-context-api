import { useState } from 'react';
import { useTasks } from '../context';

export const useFindTodo = () => {
	const { todos } = useTasks();
	const [findValue, setFindValue] = useState('');
	const findTodo = findValue
		? todos.filter((todoValue) => {
				return todoValue.title.toLowerCase().includes(findValue.toLowerCase());
			})
		: todos;
	return {
		setFindValue,
		findTodo,
	};
};
