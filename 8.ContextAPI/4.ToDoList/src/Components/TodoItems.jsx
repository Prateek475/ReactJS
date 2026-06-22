import ToDoItem1 from "./ToDoItem1";
import { TodoItemsCtxt } from "../store/TodoItemsCtxt";
import { useContext } from "react";

function TodoItems() {
  let itemsCtxt = useContext(TodoItemsCtxt);
  return (
    <div className="todo-container">
      {itemsCtxt.todoItems.map((item) => (<ToDoItem1 todoName = {item.name} todoDate = {item.date} key={item.name} idx ={item.idx}></ToDoItem1>))}
    </div>
  );
}

export default TodoItems;