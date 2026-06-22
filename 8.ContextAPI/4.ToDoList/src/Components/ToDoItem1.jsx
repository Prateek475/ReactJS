import styles from './Row.module.css';
import { MdDelete } from "react-icons/md";
import { TodoItemsCtxt } from '../store/TodoItemsCtxt';
import { useContext } from "react";

function ToDoItem1({todoName,todoDate,idx}) {
  let itemsCtxt = useContext(TodoItemsCtxt);
  return (
    <div className={`row ${styles['kg-row']}`}>
      <div className="col-sm-6">{todoName}</div>
      <div className="col-sm-3">{todoDate}</div>
      <div className="col-sm-2"><button type="button" className={`btn btn-danger ${styles['kg-button']}`}onClick = {()=>itemsCtxt.del(idx)}><MdDelete /></button></div>
    </div>
  );
}

export default ToDoItem1;