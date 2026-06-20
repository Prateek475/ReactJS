import { TodoItemsCtxt } from "../store/TodoItemsCtxt";
import { useContext } from "react";

function ErrorMsg() {
  let itemsCtxt = useContext(TodoItemsCtxt);
  return (
    <>
      {itemsCtxt.todoItems.length == 0 ?<h1>Congratulations your task are completed...</h1> : null};
    </>
  );
}
export default ErrorMsg;