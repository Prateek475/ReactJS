import ToDoItem1 from "./ToDoItem1";

function TodoItems({todoitems,del}) {
  return (
    <div className="todo-container">
      {todoitems.map((item) => (<ToDoItem1 todoName = {item.name} todoDate = {item.date} key={item.name} del={del} idx ={item.idx}></ToDoItem1>))}
    </div>
  );
}

export default TodoItems;