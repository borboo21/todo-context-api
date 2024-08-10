import { useState } from 'react';
import { useTasks } from '../context';

export const useRequestDeleteTodo = () => {
	const [isDeleting, setIsDeleting] = useState(false);
	const { refreshProducts } = useTasks();

	const requestDeleteTodo = (id) => {
		setIsDeleting(true);
		fetch(`http://localhost:3005/todos/${id}`, {
			method: 'DELETE',
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				refreshProducts();
			})
			.finally(() => setIsDeleting(false));
	};
	return {
		isDeleting,
		requestDeleteTodo,
	};
};
