import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import TodoItems from "./Components/TodoItems";
import { useState } from "react";
import ErrorMsg from "./Components/ErrorMsg";
import { TodoItemsCtxt } from "./store/TodoItemsCtxt";

function App() {
  let [todoItems,setState] = useState([]);
  function modify(name,date) {
    let obj = {
      idx : todoItems.length+1,
      name : name,
      date : date,
    }
    setState((currItems) => [...currItems,obj]);
  }
  function del(idx) {
    setState((currItems) => currItems.filter(item => item.idx != idx));
  }
  return (
    <TodoItemsCtxt.Provider value ={{todoItems:todoItems,modify:modify,del:del}}>
      <center className='todo-container'>
        <AppName></AppName>
        <AddTodo></AddTodo>
        <ErrorMsg></ErrorMsg>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsCtxt.Provider>
  );
}

export default App
