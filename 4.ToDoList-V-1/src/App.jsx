import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import ToDoItem1 from "./Components/ToDoItem1";
import ToDoItem2 from "./Components/ToDoItem2";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";


function App() {
  return (
    <center className='todo-container'>
      <AppName></AppName>
      <AddTodo></AddTodo>
      <ToDoItem1></ToDoItem1>
      <ToDoItem2></ToDoItem2>
      <ToDoItem2></ToDoItem2>
    </center>
  );
}

export default App
