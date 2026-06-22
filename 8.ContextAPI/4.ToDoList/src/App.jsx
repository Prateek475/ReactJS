import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import TodoItems from "./Components/TodoItems";
import ErrorMsg from "./Components/ErrorMsg";
import { TodoItemsCtxt } from "./store/TodoItemsCtxt";
import ToDoItemsCtxProvider from "./store/TodoItemsCtxt";

function App() {
  return (
    <ToDoItemsCtxProvider>
      <center className='todo-container'>
        <AppName></AppName>
        <AddTodo></AddTodo>
        <ErrorMsg></ErrorMsg>
        <TodoItems></TodoItems>
      </center>
    </ToDoItemsCtxProvider>
  );
}

export default App
