import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import TodoItems from "./Components/TodoItems";
import { useState } from "react";
import ErrorMsg from "./Components/ErrorMsg";

function App() {
  let [todoItems,setState] = useState([{
    idx : 1,
    name : 'Buy Milk',
    date : '2023-10-04',
  },{
    idx : 2,
    name : 'Go To College',
    date : '2023-10-04',
  },{
    idx : 3,
    name : 'Be disciplied',
    date : 'EveryTime',
  }]);
  function modify(name,date) {
    let obj = {
      idx : todoItems.length+1,
      name : name,
      date : date,
    }
    setState([...todoItems,obj]);
  }
  function del(idx) {
    setState(todoItems.filter(item => item.idx != idx));
  }
  return (
    <center className='todo-container'>
      <AppName></AppName>
      <AddTodo fn ={modify}></AddTodo>
      <ErrorMsg todoItems={todoItems}></ErrorMsg>
      <TodoItems todoitems={todoItems} del={del}></TodoItems>
    </center>
  );
}

export default App
