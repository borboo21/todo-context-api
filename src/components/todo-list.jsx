import styles from '../App.module.css';
import { useTasks } from '../context';
import { useRequestGetTodo } from '../hooks';
import { TodoItem } from './todo-item';

export const TodoList = ({ displayedTasks, ...rest }) => {
	const { refreshProducts, isLoading } = useTasks();

	return (
		<div className={styles.todoList}>
			{isLoading ? (
				<div className={styles.loader}></div>
			) : (
				displayedTasks.map((todo) => (
					<TodoItem
						{...rest}
						key={todo.id}
						todo={todo}
						completed={todo.completed}
						refreshProducts={refreshProducts}
					/>
				))
			)}
		</div>
	);
};
