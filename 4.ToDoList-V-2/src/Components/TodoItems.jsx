import ToDoItem1 from "./ToDoItem1";

function TodoItems({todoitems}) {
  return (
    <div className="todo-container">
      {todoitems.map((item) => (<ToDoItem1 todoName = {item.name} todoDate = {item.date}></ToDoItem1>))}
    </div>
  );
}

export default TodoItems;