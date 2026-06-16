import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import TodoItems from "./Components/TodoItems";

function App() {
  let todoItems = [{
    name : 'Buy Milk',
    date : '4/10/23',
  },{
    name : 'Go To College',
    date : '4/10/23',
  },{
    name : 'Be disciplied',
    date : 'EveryTime',
  }];
  return (
    <center className='todo-container'>
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItems todoitems={todoItems}></TodoItems>
    </center>
  );
}

export default App
