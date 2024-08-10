import { createContext, useContext, useEffect, useState } from 'react';

const TaskContext = createContext();

export const useTasks = () => {
	return useContext(TaskContext);
};

export const TaskProvider = ({ children }) => {
	const [refreshProductsFlag, setRefreshProductsFlag] = useState(false);
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const refreshProducts = () => setRefreshProductsFlag(!refreshProductsFlag);

	useEffect(() => {
		setIsLoading(true);
		fetch('http://localhost:3005/todos')
			.then((loadedData) => loadedData.json())
			.then((loadedTodos) => {
				setTodos(loadedTodos);
			})
			.finally(() => setIsLoading(false));
	}, [refreshProductsFlag]);

	const value = { refreshProducts, refreshProductsFlag, todos, setTodos, isLoading };
	return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
