import './index.css';
import { TodoApp } from './components/todo-app';
import { TaskProvider } from './context';

export const App = () => {
	return (
		<TaskProvider>
			<TodoApp />
		</TaskProvider>
	);
};

export default App;
