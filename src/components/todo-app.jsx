import '../index.css';
import styles from '../App.module.css';
import { useTasks } from '../context';
import { FindBlock } from './find-block';
import { TodoPusher } from './todo-pusher';
import { TodoList } from './todo-list';
import {
	useRequestAddTodo,
	useFilterTodo,
	useFindTodo,
	useRequestDeleteTodo,
	useRequestEditTodo,
} from '../hooks';

export const TodoApp = () => {
	const { isCreating, requestAddTodo, todoInput, setTodoInput } = useRequestAddTodo();
	const { findTodo, setFindValue } = useFindTodo();
	const { setIsFilter, displayedTasks, isFilter } = useFilterTodo(findTodo);
	const { requestDeleteTodo } = useRequestDeleteTodo();
	const { requestEditTodo } = useRequestEditTodo();

	return (
		<div className={styles.app}>
			<div className={styles.title}>Список дел</div>
			<FindBlock
				setFindValue={setFindValue}
				setIsFilter={setIsFilter}
				isFilter={isFilter}
			/>
			<div className={styles.main}>
				<TodoList
					displayedTasks={displayedTasks}
					onDelete={requestDeleteTodo}
					onSave={requestEditTodo}
				/>
			</div>
			<TodoPusher
				todoInput={todoInput}
				setTodoInput={setTodoInput}
				isCreating={isCreating}
				requestAddTodo={requestAddTodo}
			/>
		</div>
	);
};
